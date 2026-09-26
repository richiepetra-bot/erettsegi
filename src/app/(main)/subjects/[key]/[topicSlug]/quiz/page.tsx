export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getSubjectByKey } from "@/lib/db/subjects";
import { getTopicBySlug } from "@/lib/db/topics";
import { getQuizQuestions } from "@/lib/db/quiz";
import QuizClient from "./QuizClient";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ key: string; topicSlug: string }>;
}) {
  const { key, topicSlug } = await params;
  const subject = await getSubjectByKey(key);
  if (!subject) notFound();

  const topic = await getTopicBySlug(subject.id, topicSlug);
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
