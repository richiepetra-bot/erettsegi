export const dynamic = "force-dynamic";

import { getDailyPracticeQuestions } from "@/lib/db/practice-quiz";
import { getCurrentUser } from "@/lib/db/users";
import PracticeQuizClient from "../PracticeQuizClient";

export default async function DailyPracticePage() {
  const user = await getCurrentUser();
  const questions = await getDailyPracticeQuestions(user.elective_subject_id, 15);

  return (
    <PracticeQuizClient
      title="Napi 15 kérdés"
      emptyMessage="Még nincs elég feltöltött kérdés a napi kvízhez."
      questions={questions}
    />
  );
}
