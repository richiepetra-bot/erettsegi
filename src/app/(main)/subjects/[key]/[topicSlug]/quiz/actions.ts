"use server";

import { revalidatePath } from "next/cache";
import { submitQuizSession, SubmitAnswer } from "@/lib/db/quiz";
import { QuizSessionResult } from "@/lib/types";

export async function submitQuizAction(
  topicId: string,
  subjectKey: string,
  answers: SubmitAnswer[]
): Promise<QuizSessionResult> {
  const result = await submitQuizSession(topicId, answers);
  revalidatePath(`/subjects/${subjectKey}`);
  revalidatePath("/");
  return result;
}
