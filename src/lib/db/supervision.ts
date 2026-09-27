import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getSubjects, filterSubjectsForStudent } from "@/lib/db/subjects";
import { getTopicsBySubjectId } from "@/lib/db/topics";
import { getUserProgress } from "@/lib/db/quiz";
import { getAllTimeStats, getWeakTopicStats } from "@/lib/db/practice-quiz";
import { levelForXp } from "@/lib/gamification";
import {
  LinkedStudentSummary,
  StudentDashboardData,
  StudentSubjectProgress,
  SupervisorRole,
  TopicAccuracyStat,
} from "@/lib/types";

const MAX_WEAK_TOPICS_SHOWN = 6;
const ACTIVITY_WINDOW_DAYS = 30;

function daysBetween(fromDateStr: string, toDateStr: string): number {
  const from = Date.parse(`${fromDateStr}T00:00:00Z`);
  const to = Date.parse(`${toDateStr}T00:00:00Z`);
  return Math.round((to - from) / 86_400_000);
}

export async function listLinkedStudents(supervisorUserId: string): Promise<LinkedStudentSummary[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("student_links")
    .select("role, student:app_users!student_links_student_user_id_fkey(id, display_name)")
    .eq("linked_user_id", supervisorUserId)
    .order("created_at", { ascending: true });
  if (error) throw error;

  return (
    data as unknown as { role: SupervisorRole; student: { id: string; display_name: string } | null }[]
  )
    .filter((row) => row.student)
    .map((row) => ({
      studentId: row.student!.id,
      displayName: row.student!.display_name,
      role: row.role,
    }));
}

/** Returns the supervisor's relationship role to that student, or null if not linked. */
export async function getLinkRole(
  supervisorUserId: string,
  studentUserId: string
): Promise<SupervisorRole | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("student_links")
    .select("role")
    .eq("linked_user_id", supervisorUserId)
    .eq("student_user_id", studentUserId)
    .maybeSingle();
  if (error) throw error;
  return (data as { role: SupervisorRole } | null)?.role ?? null;
}

async function getActivitySummary(studentUserId: string): Promise<{ activeDaysLast30: number }> {
  const supabase = getSupabaseServerClient();
  const since = new Date(Date.now() - ACTIVITY_WINDOW_DAYS * 86_400_000).toISOString();
  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("answered_at")
    .eq("user_id", studentUserId)
    .gte("answered_at", since);
  if (error) throw error;

  const activeDays = new Set(
    (data as { answered_at: string }[]).map((row) => row.answered_at.slice(0, 10))
  );
  return { activeDaysLast30: activeDays.size };
}

export async function getStudentDashboardData(studentUserId: string): Promise<StudentDashboardData> {
  const supabase = getSupabaseServerClient();
  const { data: studentRow, error: studentError } = await supabase
    .from("app_users")
    .select("display_name, elective_subject_id")
    .eq("id", studentUserId)
    .single();
  if (studentError) throw studentError;
  const { elective_subject_id: studentElectiveSubjectId } = studentRow as {
    display_name: string;
    elective_subject_id: string | null;
  };

  const [allSubjects, userProgress, allTimeStats, weakStats, activity] = await Promise.all([
    getSubjects(),
    getUserProgress(studentUserId),
    getAllTimeStats(studentUserId),
    getWeakTopicStats(studentUserId),
    getActivitySummary(studentUserId),
  ]);
  const subjects = filterSubjectsForStudent(allSubjects, studentElectiveSubjectId);

  const subjectProgress: StudentSubjectProgress[] = await Promise.all(
    subjects.map(async (subject) => {
      const topics = await getTopicsBySubjectId(subject.id, studentUserId);
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
    studentName: (studentRow as { display_name: string }).display_name,
    userProgress,
    level: levelForXp(userProgress.total_xp),
    subjectProgress,
    allTimeStats,
    weakTopics,
    daysSinceLastActivity,
    activeDaysLast30: activity.activeDaysLast30,
  };
}
