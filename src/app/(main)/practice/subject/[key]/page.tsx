export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getSubjectByKey } from "@/lib/db/subjects";
import { getSubjectPracticeQuestions } from "@/lib/db/practice-quiz";
import PracticeQuizClient from "../../PracticeQuizClient";

export default async function SubjectPracticePage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const subject = await getSubjectByKey(key);
  if (!subject) notFound();

  const questions = await getSubjectPracticeQuestions(key, 15);

  return (
    <PracticeQuizClient
      title={`${subject.name} · gyors kvíz`}
      emptyMessage="Ehhez a tantárgyhoz még nincs elég feltöltött kérdés."
      questions={questions}
    />
  );
}
