"use server";

import { revalidatePath } from "next/cache";
import { submitPracticeQuiz } from "@/lib/db/practice-quiz";
import { getCurrentUser } from "@/lib/db/users";
import { PracticeAnswer, PracticeSessionResult } from "@/lib/types";

export async function submitPracticeQuizAction(
  answers: PracticeAnswer[]
): Promise<PracticeSessionResult> {
  const user = await getCurrentUser();
  const result = await submitPracticeQuiz(user.id, answers);
  revalidatePath("/");
  revalidatePath("/practice");
  revalidatePath("/practice/stats");
  return result;
}
