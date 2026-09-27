"use server";

import { revalidatePath } from "next/cache";
import { submitPracticeQuiz } from "@/lib/db/practice-quiz";
import { PracticeAnswer, PracticeSessionResult } from "@/lib/types";

export async function submitPracticeQuizAction(
  answers: PracticeAnswer[]
): Promise<PracticeSessionResult> {
  const result = await submitPracticeQuiz(answers);
  revalidatePath("/");
  revalidatePath("/practice");
  revalidatePath("/practice/stats");
  return result;
}
