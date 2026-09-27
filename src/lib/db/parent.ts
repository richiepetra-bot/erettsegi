import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getSubjects } from "@/lib/db/subjects";
import { getTopicsBySubjectId } from "@/lib/db/topics";
import { getUserProgress } from "@/lib/db/quiz";
import { getAllTimeStats, getWeakTopicStats } from "@/lib/db/practice-quiz";
import { levelForXp } from "@/lib/gamification";
import { ParentDashboardData, ParentSubjectProgress, TopicAccuracyStat } from "@/lib/types";

const MAX_WEAK_TOPICS_SHOWN = 6;
const ACTIVITY_WINDOW_DAYS = 30;

function daysBetween(fromDateStr: string, toDateStr: string): number {
  const from = Date.parse(`${fromDateStr}T00:00:00Z`);
  const to = Date.parse(`${toDateStr}T00:00:00Z`);
  return Math.round((to - from) / 86_400_000);
}

async function getActivitySummary(): Promise<{ activeDaysLast30: number }> {
  const supabase = getSupabaseServerClient();
  const since = new Date(Date.now() - ACTIVITY_WINDOW_DAYS * 86_400_000).toISOString();
  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("answered_at")
    .gte("answered_at", since);
  if (error) throw error;

  const activeDays = new Set(
    (data as { answered_at: string }[]).map((row) => row.answered_at.slice(0, 10))
  );
  return { activeDaysLast30: activeDays.size };
}

export async function getParentDashboardData(): Promise<ParentDashboardData> {
  const [subjects, userProgress, allTimeStats, weakStats, activity] = await Promise.all([
    getSubjects(),
    getUserProgress(),
    getAllTimeStats(),
    getWeakTopicStats(),
    getActivitySummary(),
  ]);

  const subjectProgress: ParentSubjectProgress[] = await Promise.all(
    subjects.map(async (subject) => {
      const topics = await getTopicsBySubjectId(subject.id);
      const masteredCount = topics.filter((t) => t.progress?.status === "elsajatitott").length;
      return { subject, topicCount: topics.length, masteredCount };
    })
  );

  const topicInfoByTopicId = new Map(allTimeStats.byTopic.map((t) => [t.topicId, t]));
  const weakTopics: TopicAccuracyStat[] = weakStats
    .slice(0, MAX_WEAK_TOPICS_SHOWN)
    .map((w) => topicInfoByTopicId.get(w.topicId))
    .filter((t): t is TopicAccuracyStat => Boolean(t));

  const today = new Date().toISOString().slice(0, 10);
  const daysSinceLastActivity = userProgress.last_activity_date
    ? daysBetween(userProgress.last_activity_date, today)
    : null;

  return {
    userProgress,
    level: levelForXp(userProgress.total_xp),
    subjectProgress,
    allTimeStats,
    weakTopics,
    daysSinceLastActivity,
    activeDaysLast30: activity.activeDaysLast30,
  };
}
