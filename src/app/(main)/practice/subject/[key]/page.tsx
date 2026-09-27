export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getSubjectByKey, canAccessSubject } from "@/lib/db/subjects";
import { getSubjectPracticeQuestions } from "@/lib/db/practice-quiz";
import { getCurrentUser } from "@/lib/db/users";
import PracticeQuizClient from "../../PracticeQuizClient";

export default async function SubjectPracticePage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const user = await getCurrentUser();
  const subject = await getSubjectByKey(key);
  if (!subject || !canAccessSubject(subject, user.elective_subject_id)) notFound();

  const questions = await getSubjectPracticeQuestions(key, user.elective_subject_id, 15);

  return (
    <PracticeQuizClient
      title={`${subject.name} · gyors kvíz`}
      emptyMessage="Ehhez a tantárgyhoz még nincs elég feltöltött kérdés."
      questions={questions}
    />
  );
}
