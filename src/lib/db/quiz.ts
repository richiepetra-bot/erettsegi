import { getSupabaseServerClient } from "@/lib/supabase/server";
import { shuffle } from "@/lib/shuffle";
import { QuizQuestion, QuizSessionResult, TopicStatus, UserProgress } from "@/lib/types";

export const XP_PER_CORRECT_ANSWER = 10;

export async function getQuizQuestions(topicId: string): Promise<QuizQuestion[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("quiz_questions")
    .select("*")
    .eq("topic_id", topicId)
    .order("order_index", { ascending: true });

  if (error) throw error;
  return (data as QuizQuestion[]).map((q) => ({ ...q, options: shuffle(q.options) }));
}

export async function getUserProgress(): Promise<UserProgress> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("user_progress")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) throw error;
  return data as UserProgress;
}

function starsForAccuracy(accuracy: number): number {
  if (accuracy >= 0.9) return 3;
  if (accuracy >= 0.7) return 2;
  if (accuracy >= 0.4) return 1;
  return 0;
}

function statusForAccuracy(accuracy: number): TopicStatus {
  return accuracy >= 0.8 ? "elsajatitott" : "folyamatban";
}

function daysBetween(fromDateStr: string, toDateStr: string): number {
  const from = Date.parse(`${fromDateStr}T00:00:00Z`);
  const to = Date.parse(`${toDateStr}T00:00:00Z`);
  return Math.round((to - from) / 86_400_000);
}

/** Applies earned XP to the single user_progress row and updates the daily streak. Shared by topic quizzes and practice quizzes. */
export async function applyXpAndStreak(
  xpEarned: number
): Promise<{ newTotalXp: number; newStreak: number }> {
  const supabase = getSupabaseServerClient();
  const now = new Date();
  const nowIso = now.toISOString();
  const today = nowIso.slice(0, 10);

  const userProgress = await getUserProgress();
  let newStreak = userProgress.current_streak;
  if (!userProgress.last_activity_date) {
    newStreak = 1;
  } else {
    const diff = daysBetween(userProgress.last_activity_date, today);
    if (diff === 0) {
      newStreak = userProgress.current_streak;
    } else if (diff === 1) {
      newStreak = userProgress.current_streak + 1;
    } else if (diff > 1) {
      newStreak = 1;
    }
  }
  const newTotalXp = userProgress.total_xp + xpEarned;
  const newLongestStreak = Math.max(userProgress.longest_streak, newStreak);

  const { error: userProgressError } = await supabase
    .from("user_progress")
    .update({
      total_xp: newTotalXp,
      current_streak: newStreak,
      longest_streak: newLongestStreak,
      last_activity_date: today,
      updated_at: nowIso,
    })
    .eq("id", 1);
  if (userProgressError) throw userProgressError;

  return { newTotalXp, newStreak };
}

export type SubmitAnswer = { questionId: string; selectedAnswer: string };

export async function submitQuizSession(
  topicId: string,
  answers: SubmitAnswer[]
): Promise<QuizSessionResult> {
  const supabase = getSupabaseServerClient();

  const questions = await getQuizQuestions(topicId);
  const questionById = new Map(questions.map((q) => [q.id, q]));

  const now = new Date();
  const nowIso = now.toISOString();

  let correctCount = 0;
  const attemptRows = answers.map(({ questionId, selectedAnswer }) => {
    const question = questionById.get(questionId);
    const isCorrect = Boolean(question) && question!.correct_answer === selectedAnswer;
    if (isCorrect) correctCount += 1;
    return {
      question_id: questionId,
      topic_id: topicId,
      is_correct: isCorrect,
      xp_earned: isCorrect ? XP_PER_CORRECT_ANSWER : 0,
      answered_at: nowIso,
    };
  });

  const totalCount = answers.length;
  const accuracy = totalCount > 0 ? correctCount / totalCount : 0;
  const xpEarned = correctCount * XP_PER_CORRECT_ANSWER;
  const stars = starsForAccuracy(accuracy);
  const status = statusForAccuracy(accuracy);

  if (attemptRows.length > 0) {
    const { error: attemptError } = await supabase.from("quiz_attempts").insert(attemptRows);
    if (attemptError) throw attemptError;
  }

  const { data: existingProgress, error: progressFetchError } = await supabase
    .from("topic_progress")
    .select("*")
    .eq("topic_id", topicId)
    .maybeSingle();
  if (progressFetchError) throw progressFetchError;

  const nextReviewDays = status === "elsajatitott" ? 3 : 1;
  const nextReviewAt = new Date(now.getTime() + nextReviewDays * 86_400_000).toISOString();
  const bestAccuracy = Math.max(existingProgress?.best_accuracy ?? 0, accuracy * 100);

  const { error: progressUpsertError } = await supabase.from("topic_progress").upsert({
    topic_id: topicId,
    status,
    stars: Math.max(existingProgress?.stars ?? 0, stars),
    best_accuracy: bestAccuracy,
    last_reviewed_at: nowIso,
    next_review_at: nextReviewAt,
    updated_at: nowIso,
  });
  if (progressUpsertError) throw progressUpsertError;

  const { newTotalXp, newStreak } = await applyXpAndStreak(xpEarned);

  return {
    correctCount,
    totalCount,
    accuracy,
    stars,
    xpEarned,
    newTotalXp,
    newStreak,
  };
}
