export const dynamic = "force-dynamic";

import { getWeakAreaPracticeQuestions } from "@/lib/db/practice-quiz";
import PracticeQuizClient from "../PracticeQuizClient";

export default async function WeakAreaPracticePage() {
  const questions = await getWeakAreaPracticeQuestions(15);

  return (
    <PracticeQuizClient
      title="Gyakorlásra ajánlott"
      emptyMessage="Még nincs elég kvíz-előzmény ahhoz, hogy összeállítsuk a gyakorlásra ajánlott kérdéseket. Oldj meg néhány kvízt, aztán térj vissza ide!"
      questions={questions}
    />
  );
}
