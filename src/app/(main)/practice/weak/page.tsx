export const dynamic = "force-dynamic";

import { getWeakAreaPracticeQuestions } from "@/lib/db/practice-quiz";
import { getCurrentUser } from "@/lib/db/users";
import PracticeQuizClient from "../PracticeQuizClient";

export default async function WeakAreaPracticePage() {
  const user = await getCurrentUser();
  const questions = await getWeakAreaPracticeQuestions(user.id, 15);

  return (
    <PracticeQuizClient
      title="Gyakorlásra ajánlott"
      emptyMessage="Még nincs elég kvíz-előzmény ahhoz, hogy összeállítsuk a gyakorlásra ajánlott kérdéseket. Oldj meg néhány kvízt, aztán térj vissza ide!"
      questions={questions}
    />
  );
}
