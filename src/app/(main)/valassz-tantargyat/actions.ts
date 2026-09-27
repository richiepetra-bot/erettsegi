"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSubjectById } from "@/lib/db/subjects";
import { setElectiveSubject, getCurrentUser } from "@/lib/db/users";

export async function chooseElectiveSubjectAction(subjectId: string): Promise<void> {
  const user = await getCurrentUser();
  const subject = await getSubjectById(subjectId);
  if (!subject || !subject.is_elective) {
    throw new Error("Ez a tantárgy nem választható.");
  }
  await setElectiveSubject(user.id, subjectId);
  revalidatePath("/");
  revalidatePath("/valassz-tantargyat");
  redirect("/");
}
