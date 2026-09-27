"use server";

import { revalidatePath } from "next/cache";
import { createExam, updateExam, deleteExam } from "@/lib/db/exams";
import { getCurrentUser } from "@/lib/db/users";
import { ExamType, Level } from "@/lib/types";

function emptyToNull(value: FormDataEntryValue | null): string | null {
  const str = String(value ?? "").trim();
  return str.length > 0 ? str : null;
}

export async function createExamAction(formData: FormData) {
  const user = await getCurrentUser();
  await createExam(user.id, {
    subject_id: String(formData.get("subject_id")),
    exam_type: String(formData.get("exam_type")) as ExamType,
    level: emptyToNull(formData.get("level")) as Level | null,
    written_date: emptyToNull(formData.get("written_date")),
    oral_date: emptyToNull(formData.get("oral_date")),
    notes: emptyToNull(formData.get("notes")),
  });
  revalidatePath("/exams");
  revalidatePath("/");
  revalidatePath("/plan");
}

export async function updateExamAction(formData: FormData) {
  const user = await getCurrentUser();
  const id = String(formData.get("id"));
  await updateExam(user.id, id, {
    exam_type: String(formData.get("exam_type")) as ExamType,
    level: emptyToNull(formData.get("level")) as Level | null,
    written_date: emptyToNull(formData.get("written_date")),
    oral_date: emptyToNull(formData.get("oral_date")),
    notes: emptyToNull(formData.get("notes")),
  });
  revalidatePath("/exams");
  revalidatePath("/");
  revalidatePath("/plan");
}

export async function deleteExamAction(formData: FormData) {
  const user = await getCurrentUser();
  const id = String(formData.get("id"));
  await deleteExam(user.id, id);
  revalidatePath("/exams");
  revalidatePath("/");
  revalidatePath("/plan");
}
