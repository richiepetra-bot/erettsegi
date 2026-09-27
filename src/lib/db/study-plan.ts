import { getExamsWithSubjects } from "@/lib/db/exams";
import { getSubjects } from "@/lib/db/subjects";
import { getTopicsBySubjectId } from "@/lib/db/topics";
import { getWeakTopicStats } from "@/lib/db/practice-quiz";
import { daysUntil, EXAM_TYPE_LABELS, LEVEL_LABELS } from "@/lib/gamification";
import { StudyPlan, StudyPlanTopic, StudyPlanWeek, SubjectStudyPlan } from "@/lib/types";

const MAX_WEEKS_SHOWN = 8;

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 86_400_000);
}

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export async function getStudyPlan(): Promise<StudyPlan> {
  const [exams, subjects, weakStats] = await Promise.all([
    getExamsWithSubjects(),
    getSubjects(),
    getWeakTopicStats(),
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

  for (const subject of subjects) {
    const exam = nextExamBySubjectId.get(subject.id);
    if (!exam || !exam.written_date) {
      subjectsWithoutExam.push({ key: subject.key, name: subject.name, color: subject.color });
      continue;
    }

    const topics = await getTopicsBySubjectId(subject.id);
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
      })),
      ...notMasteredTopics.map((t) => ({
        id: t.id,
        title: t.title,
        slug: t.slug,
        subjectKey: subject.key,
        isWeak: false,
      })),
    ];

    const daysLeft = daysUntil(exam.written_date) ?? 0;
    const weeksRemaining = Math.max(1, Math.ceil(daysLeft / 7));

    const weeks: StudyPlanWeek[] = [];
    if (priorityTopics.length > 0) {
      const weeksToBuild = Math.min(weeksRemaining, MAX_WEEKS_SHOWN);
      const topicsPerWeek = Math.max(1, Math.ceil(priorityTopics.length / weeksRemaining));
      const today = new Date();
      let cursor = 0;
      for (let weekIndex = 0; weekIndex < weeksToBuild && cursor < priorityTopics.length; weekIndex++) {
        const weekTopics = priorityTopics.slice(cursor, cursor + topicsPerWeek);
        cursor += topicsPerWeek;
        const startDate = addDays(today, weekIndex * 7);
        const endDate = addDays(startDate, 6);
        weeks.push({
          weekIndex,
          startDate: isoDate(startDate),
          endDate: isoDate(endDate),
          topics: weekTopics,
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
      weeks,
      allCaughtUp: priorityTopics.length === 0,
    });
  }

  subjectPlans.sort((a, b) => a.weeksRemaining - b.weeksRemaining);

  return { subjectPlans, subjectsWithoutExam };
}
