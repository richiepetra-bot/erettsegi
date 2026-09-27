export const dynamic = "force-dynamic";

import { getDailyPracticeQuestions } from "@/lib/db/practice-quiz";
import PracticeQuizClient from "../PracticeQuizClient";

export default async function DailyPracticePage() {
  const questions = await getDailyPracticeQuestions(15);

  return (
    <PracticeQuizClient
      title="Napi 15 kérdés"
      emptyMessage="Még nincs elég feltöltött kérdés a napi kvízhez."
      questions={questions}
    />
  );
}
