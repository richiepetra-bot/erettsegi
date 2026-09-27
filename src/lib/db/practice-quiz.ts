import { getSupabaseServerClient } from "@/lib/supabase/server";
import { applyXpAndStreak, XP_PER_CORRECT_ANSWER } from "@/lib/db/quiz";
import { shuffle } from "@/lib/shuffle";
import {
  AllTimeStats,
  GroupBreakdown,
  PracticeAnswer,
  PracticeQuestion,
  PracticeSessionResult,
  SubjectAccuracyStat,
  TopicAccuracyStat,
} from "@/lib/types";

const MIN_ATTEMPTS_FOR_WEAK_TOPIC = 3;
const MAX_WEAK_TOPICS = 8;
const MIN_WEAK_TOPICS_REQUIRED = 3;
const RECENT_ATTEMPTS_LIMIT = 3000;

type RawQuestionRow = {
  id: string;
  topic_id: string;
  question_type: string;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string | null;
  difficulty: number;
  order_index: number;
  topic: {
    id: string;
    title: string;
    subject: { key: string; name: string; color: string } | null;
  } | null;
};

/** Round-robins across groups (each already shuffled) so the result is spread evenly across them, then shuffles the final order. */
function balancedSample<T>(groups: T[][], count: number): T[] {
  const shuffledGroups = shuffle(groups).map((g) => shuffle(g));
  const result: T[] = [];
  let round = 0;
  while (result.length < count) {
    let addedThisRound = false;
    for (const group of shuffledGroups) {
      if (result.length >= count) break;
      if (group[round]) {
        result.push(group[round]);
        addedThisRound = true;
      }
    }
    if (!addedThisRound) break;
    round += 1;
  }
  return shuffle(result);
}

async function getAllQuestionsWithContext(): Promise<PracticeQuestion[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("quiz_questions")
    .select(
      "id, topic_id, question_type, question_text, options, correct_answer, explanation, difficulty, order_index, topic:topics(id, title, subject:subjects(key, name, color))"
    );

  if (error) throw error;

  return (data as unknown as RawQuestionRow[])
    .filter((row) => row.topic && row.topic.subject)
    .map((row) => ({
      id: row.id,
      topic_id: row.topic_id,
      question_type: row.question_type as PracticeQuestion["question_type"],
      question_text: row.question_text,
      options: shuffle(row.options),
      correct_answer: row.correct_answer,
      explanation: row.explanation,
      difficulty: row.difficulty,
      order_index: row.order_index,
      topic_title: row.topic!.title,
      subject_key: row.topic!.subject!.key,
      subject_name: row.topic!.subject!.name,
      subject_color: row.topic!.subject!.color,
    }));
}

export async function getDailyPracticeQuestions(count = 15): Promise<PracticeQuestion[]> {
  const all = await getAllQuestionsWithContext();
  const bySubject = new Map<string, PracticeQuestion[]>();
  for (const q of all) {
    const group = bySubject.get(q.subject_key) ?? [];
    group.push(q);
    bySubject.set(q.subject_key, group);
  }
  return balancedSample([...bySubject.values()], count);
}

export async function getSubjectPracticeQuestions(
  subjectKey: string,
  count = 15
): Promise<PracticeQuestion[]> {
  const all = await getAllQuestionsWithContext();
  const subjectQuestions = all.filter((q) => q.subject_key === subjectKey);
  const byTopic = new Map<string, PracticeQuestion[]>();
  for (const q of subjectQuestions) {
    const group = byTopic.get(q.topic_id) ?? [];
    group.push(q);
    byTopic.set(q.topic_id, group);
  }
  return balancedSample([...byTopic.values()], count);
}

export type WeakTopicStat = { topicId: string; correct: number; total: number; accuracy: number };

/** Accuracy per topic from recent quiz_attempts, unfiltered and unsorted. */
async function getTopicAccuracyFromRecentAttempts(): Promise<
  Map<string, { correct: number; total: number }>
> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("topic_id, is_correct")
    .order("answered_at", { ascending: false })
    .limit(RECENT_ATTEMPTS_LIMIT);
  if (error) throw error;

  const map = new Map<string, { correct: number; total: number }>();
  for (const row of data as { topic_id: string; is_correct: boolean }[]) {
    const entry = map.get(row.topic_id) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (row.is_correct) entry.correct += 1;
    map.set(row.topic_id, entry);
  }
  return map;
}

/** Topics with enough attempt history, sorted worst-accuracy-first. Shared by the weak-area quiz, the parent dashboard, and the study plan. */
export async function getWeakTopicStats(
  minAttempts = MIN_ATTEMPTS_FOR_WEAK_TOPIC
): Promise<WeakTopicStat[]> {
  const attemptsByTopic = await getTopicAccuracyFromRecentAttempts();
  return [...attemptsByTopic.entries()]
    .filter(([, stats]) => stats.total >= minAttempts)
    .map(([topicId, stats]) => ({
      topicId,
      correct: stats.correct,
      total: stats.total,
      accuracy: stats.correct / stats.total,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

export async function getWeakAreaPracticeQuestions(count = 15): Promise<PracticeQuestion[]> {
  const weakStats = await getWeakTopicStats();
  const weakTopicIds = weakStats.slice(0, MAX_WEAK_TOPICS).map((w) => w.topicId);

  if (weakTopicIds.length < MIN_WEAK_TOPICS_REQUIRED) {
    return getDailyPracticeQuestions(count);
  }

  const all = await getAllQuestionsWithContext();
  const weakSet = new Set(weakTopicIds);
  const byTopic = new Map<string, PracticeQuestion[]>();
  for (const q of all) {
    if (!weakSet.has(q.topic_id)) continue;
    const group = byTopic.get(q.topic_id) ?? [];
    group.push(q);
    byTopic.set(q.topic_id, group);
  }
  return balancedSample([...byTopic.values()], count);
}

function buildBreakdown(
  groups: Map<string, { label: string; color: string; correct: number; total: number }>
): GroupBreakdown[] {
  return [...groups.entries()]
    .map(([key, g]) => ({ key, label: g.label, color: g.color, correct: g.correct, total: g.total }))
    .sort((a, b) => a.correct / a.total - b.correct / b.total);
}

export async function submitPracticeQuiz(
  answers: PracticeAnswer[]
): Promise<PracticeSessionResult> {
  const supabase = getSupabaseServerClient();
  if (answers.length === 0) {
    const { newTotalXp, newStreak } = await applyXpAndStreak(0);
    return {
      correctCount: 0,
      totalCount: 0,
      accuracy: 0,
      xpEarned: 0,
      newTotalXp,
      newStreak,
      bySubject: [],
      byTopic: [],
    };
  }

  const questionIds = answers.map((a) => a.questionId);
  const { data: questionRows, error: questionError } = await supabase
    .from("quiz_questions")
    .select("id, correct_answer")
    .in("id", questionIds);
  if (questionError) throw questionError;
  const correctById = new Map(
    (questionRows as { id: string; correct_answer: string }[]).map((q) => [q.id, q.correct_answer])
  );

  const topicIds = [...new Set(answers.map((a) => a.topicId))];
  const { data: topicRows, error: topicError } = await supabase
    .from("topics")
    .select("id, title, subject:subjects(key, name, color)")
    .in("id", topicIds);
  if (topicError) throw topicError;
  const topicInfo = new Map(
    (
      topicRows as unknown as {
        id: string;
        title: string;
        subject: { key: string; name: string; color: string } | null;
      }[]
    ).map((t) => [t.id, t])
  );

  const now = new Date();
  const nowIso = now.toISOString();

  let correctCount = 0;
  const subjectGroups = new Map<
    string,
    { label: string; color: string; correct: number; total: number }
  >();
  const topicGroups = new Map<
    string,
    { label: string; color: string; correct: number; total: number }
  >();

  const attemptRows = answers.map(({ questionId, topicId, selectedAnswer }) => {
    const isCorrect = correctById.get(questionId) === selectedAnswer;
    if (isCorrect) correctCount += 1;

    const topic = topicInfo.get(topicId);
    const subjectKey = topic?.subject?.key ?? "ismeretlen";
    const subjectEntry = subjectGroups.get(subjectKey) ?? {
      label: topic?.subject?.name ?? "Ismeretlen",
      color: topic?.subject?.color ?? "#94a3b8",
      correct: 0,
      total: 0,
    };
    subjectEntry.total += 1;
    if (isCorrect) subjectEntry.correct += 1;
    subjectGroups.set(subjectKey, subjectEntry);

    const topicEntry = topicGroups.get(topicId) ?? {
      label: topic?.title ?? "Ismeretlen tétel",
      color: topic?.subject?.color ?? "#94a3b8",
      correct: 0,
      total: 0,
    };
    topicEntry.total += 1;
    if (isCorrect) topicEntry.correct += 1;
    topicGroups.set(topicId, topicEntry);

    return {
      question_id: questionId,
      topic_id: topicId,
      is_correct: isCorrect,
      xp_earned: isCorrect ? XP_PER_CORRECT_ANSWER : 0,
      answered_at: nowIso,
    };
  });

  const { error: attemptError } = await supabase.from("quiz_attempts").insert(attemptRows);
  if (attemptError) throw attemptError;

  const totalCount = answers.length;
  const accuracy = totalCount > 0 ? correctCount / totalCount : 0;
  const xpEarned = correctCount * XP_PER_CORRECT_ANSWER;

  const { newTotalXp, newStreak } = await applyXpAndStreak(xpEarned);

  return {
    correctCount,
    totalCount,
    accuracy,
    xpEarned,
    newTotalXp,
    newStreak,
    bySubject: buildBreakdown(subjectGroups),
    byTopic: buildBreakdown(topicGroups),
  };
}

export async function getAllTimeStats(): Promise<AllTimeStats> {
  const supabase = getSupabaseServerClient();
  const { data: attempts, error: attemptsError } = await supabase
    .from("quiz_attempts")
    .select("topic_id, is_correct")
    .limit(RECENT_ATTEMPTS_LIMIT);
  if (attemptsError) throw attemptsError;

  const { data: topicRows, error: topicError } = await supabase
    .from("topics")
    .select("id, title, subject:subjects(key, name, color)");
  if (topicError) throw topicError;

  const topicInfo = new Map(
    (
      topicRows as unknown as {
        id: string;
        title: string;
        subject: { key: string; name: string; color: string } | null;
      }[]
    ).map((t) => [t.id, t])
  );

  const perTopic = new Map<string, { correct: number; total: number }>();
  let totalCorrect = 0;
  for (const row of attempts as { topic_id: string; is_correct: boolean }[]) {
    const entry = perTopic.get(row.topic_id) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (row.is_correct) {
      entry.correct += 1;
      totalCorrect += 1;
    }
    perTopic.set(row.topic_id, entry);
  }
  const totalAttempts = (attempts as unknown[]).length;

  const byTopic: TopicAccuracyStat[] = [...perTopic.entries()]
    .map(([topicId, stats]) => {
      const topic = topicInfo.get(topicId);
      return {
        topicId,
        topicTitle: topic?.title ?? "Ismeretlen tétel",
        subjectKey: topic?.subject?.key ?? "ismeretlen",
        subjectName: topic?.subject?.name ?? "Ismeretlen",
        subjectColor: topic?.subject?.color ?? "#94a3b8",
        attempts: stats.total,
        correct: stats.correct,
        accuracy: stats.correct / stats.total,
      };
    })
    .sort((a, b) => a.accuracy - b.accuracy);

  const perSubject = new Map<string, { name: string; color: string; correct: number; total: number }>();
  for (const t of byTopic) {
    const entry = perSubject.get(t.subjectKey) ?? {
      name: t.subjectName,
      color: t.subjectColor,
      correct: 0,
      total: 0,
    };
    entry.correct += t.correct;
    entry.total += t.attempts;
    perSubject.set(t.subjectKey, entry);
  }
  const bySubject: SubjectAccuracyStat[] = [...perSubject.entries()]
    .map(([subjectKey, stats]) => ({
      subjectKey,
      subjectName: stats.name,
      subjectColor: stats.color,
      attempts: stats.total,
      correct: stats.correct,
      accuracy: stats.correct / stats.total,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);

  return {
    totalAttempts,
    totalCorrect,
    overallAccuracy: totalAttempts > 0 ? totalCorrect / totalAttempts : 0,
    bySubject,
    byTopic,
  };
}
