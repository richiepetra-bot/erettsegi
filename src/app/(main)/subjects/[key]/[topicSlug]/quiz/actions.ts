"use server";

import { revalidatePath } from "next/cache";
import { submitQuizSession, SubmitAnswer } from "@/lib/db/quiz";
import { getCurrentUser } from "@/lib/db/users";
import { QuizSessionResult } from "@/lib/types";

export async function submitQuizAction(
  topicId: string,
  subjectKey: string,
  answers: SubmitAnswer[]
): Promise<QuizSessionResult> {
  const user = await getCurrentUser();
  const result = await submitQuizSession(user.id, topicId, answers);
  revalidatePath(`/subjects/${subjectKey}`);
  revalidatePath("/");
  revalidatePath("/plan");
  return result;
}
