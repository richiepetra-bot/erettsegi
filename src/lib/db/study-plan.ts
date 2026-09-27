import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getExamsWithSubjects } from "@/lib/db/exams";
import { getSubjects } from "@/lib/db/subjects";
import { getTopicsBySubjectId } from "@/lib/db/topics";
import { getWeakTopicStats } from "@/lib/db/practice-quiz";
import { daysUntil, EXAM_TYPE_LABELS, LEVEL_LABELS } from "@/lib/gamification";
import { StudyPlan, StudyPlanTopic, StudyPlanWeek, SubjectStudyPlan } from "@/lib/types";

// A hetek maximális száma, amit megjelenítünk (a vizsgához legközelebbi hetek
// maradnak láthatók, ha a terv ennél régebbre nyúlna vissza).
const MAX_WEEKS_SHOWN = 20;

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 86_400_000);
}

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function startOfDayUtc(dateStr: string): Date {
  return new Date(`${dateStr.slice(0, 10)}T00:00:00Z`);
}

async function getCheckedTopicIds(userId: string): Promise<Set<string>> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("study_plan_checks")
    .select("topic_id")
    .eq("user_id", userId);
  if (error) throw error;
  return new Set((data as { topic_id: string }[]).map((r) => r.topic_id));
}

export async function toggleStudyPlanCheck(
  userId: string,
  topicId: string,
  checked: boolean
): Promise<void> {
  const supabase = getSupabaseServerClient();
  if (checked) {
    const { error } = await supabase
      .from("study_plan_checks")
      .upsert({ user_id: userId, topic_id: topicId }, { onConflict: "user_id,topic_id" });
    if (error) throw error;
  } else {
    const { error } = await supabase
      .from("study_plan_checks")
      .delete()
      .eq("user_id", userId)
      .eq("topic_id", topicId);
    if (error) throw error;
  }
}

export async function getStudyPlan(userId: string): Promise<StudyPlan> {
  const [exams, subjects, weakStats, checkedTopicIds] = await Promise.all([
    getExamsWithSubjects(userId),
    getSubjects(),
    getWeakTopicStats(userId),
    getCheckedTopicIds(userId),
  ]);

  const weakTopicIdSet = new Set(weakStats.map((w) => w.topicId));

  // Egy tantárgyhoz a legközelebbi, még nem lezajlott vizsgát vesszük figyelembe.
  const nextExamBySubjectId = new Map<string, (typeof exams)[number]>();
  for (const exam of exams) {
    if (!exam.written_date) continue;
    const days = daysUntil(exam.written_date);
    if (days === null || days < 0) continue;
    const existing = nextExamBySubjectId.get(exam.subject_id);
    if (!existing || (daysUntil(existing.written_date) ?? Infinity) > days) {
      nextExamBySubjectId.set(exam.subject_id, exam);
    }
  }

  const subjectPlans: SubjectStudyPlan[] = [];
  const subjectsWithoutExam: { key: string; name: string; color: string }[] = [];

  const today = new Date();
  const todayIso = isoDate(today);

  for (const subject of subjects) {
    const exam = nextExamBySubjectId.get(subject.id);
    if (!exam || !exam.written_date) {
      subjectsWithoutExam.push({ key: subject.key, name: subject.name, color: subject.color });
      continue;
    }

    const topics = await getTopicsBySubjectId(subject.id, userId);
    const weakTopics = topics.filter((t) => weakTopicIdSet.has(t.id));
    const notMasteredTopics = topics.filter(
      (t) => t.progress?.status !== "elsajatitott" && !weakTopicIdSet.has(t.id)
    );

    const priorityTopics: StudyPlanTopic[] = [
      ...weakTopics.map((t) => ({
        id: t.id,
        title: t.title,
        slug: t.slug,
        subjectKey: subject.key,
        isWeak: true,
        checked: checkedTopicIds.has(t.id),
      })),
      ...notMasteredTopics.map((t) => ({
        id: t.id,
        title: t.title,
        slug: t.slug,
        subjectKey: subject.key,
        isWeak: false,
        checked: checkedTopicIds.has(t.id),
      })),
    ];

    const daysLeft = daysUntil(exam.written_date) ?? 0;
    const weeksRemaining = Math.max(1, Math.ceil(daysLeft / 7));

    // A hetek a vizsga LÉTREHOZÁSÁNAK dátumához vannak horgonyozva (stabil,
    // nem tolódik el, ahányszor csak újraszámoljuk), nem a "mai naphoz" -
    // így egy korábbi, be nem fejezett hét "bekésettként" is megjelenhet,
    // nem generálódik újra minden alkalommal a jelen naptól előre.
    const planStart = startOfDayUtc(exam.created_at);
    const examDate = startOfDayUtc(exam.written_date);
    const totalPlanDays = Math.max(1, Math.round((examDate.getTime() - planStart.getTime()) / 86_400_000));
    const totalWeeks = Math.max(1, Math.ceil(totalPlanDays / 7));
    const currentWeekIndex = Math.max(
      0,
      Math.floor((today.getTime() - planStart.getTime()) / (7 * 86_400_000))
    );

    const weeks: StudyPlanWeek[] = [];
    if (priorityTopics.length > 0) {
      const topicsPerWeek = Math.max(1, Math.ceil(priorityTopics.length / totalWeeks));
      const firstWeekIndex = Math.max(0, totalWeeks - MAX_WEEKS_SHOWN);
      let cursor = firstWeekIndex * topicsPerWeek;

      for (let weekIndex = firstWeekIndex; weekIndex < totalWeeks && cursor < priorityTopics.length; weekIndex++) {
        const weekTopics = priorityTopics.slice(cursor, cursor + topicsPerWeek);
        cursor += topicsPerWeek;
        const startDate = addDays(planStart, weekIndex * 7);
        const endDate = addDays(startDate, 6);
        const endDateIso = isoDate(endDate);
        const isPastDue = endDateIso < todayIso && weekTopics.some((t) => !t.checked);
        weeks.push({
          weekIndex,
          startDate: isoDate(startDate),
          endDate: endDateIso,
          topics: weekTopics,
          isPastDue,
        });
      }
    }

    subjectPlans.push({
      subjectKey: subject.key,
      subjectName: subject.name,
      subjectColor: subject.color,
      examDate: exam.written_date,
      examLabel: `${EXAM_TYPE_LABELS[exam.exam_type] ?? exam.exam_type}${
        exam.level ? ` · ${LEVEL_LABELS[exam.level]} szint` : ""
      }`,
      weeksRemaining,
      currentWeekIndex,
      weeks,
      allCaughtUp: priorityTopics.length === 0,
    });
  }

  subjectPlans.sort((a, b) => a.weeksRemaining - b.weeksRemaining);

  return { subjectPlans, subjectsWithoutExam };
}
