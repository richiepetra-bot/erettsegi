export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getSubjectByKey, canAccessSubject } from "@/lib/db/subjects";
import { getTopicBySlug } from "@/lib/db/topics";
import { getQuizQuestions } from "@/lib/db/quiz";
import { getCurrentUser } from "@/lib/db/users";
import QuizClient from "./QuizClient";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ key: string; topicSlug: string }>;
}) {
  const { key, topicSlug } = await params;
  const user = await getCurrentUser();
  const subject = await getSubjectByKey(key);
  if (!subject || !canAccessSubject(subject, user.elective_subject_id)) notFound();

  const topic = await getTopicBySlug(subject.id, topicSlug, user.id);
  if (!topic) notFound();

  const questions = await getQuizQuestions(topic.id);

  return (
    <QuizClient
      topicId={topic.id}
      topicTitle={topic.title}
      subjectKey={subject.key}
      topicSlug={topic.slug}
      questions={questions}
    />
  );
}
