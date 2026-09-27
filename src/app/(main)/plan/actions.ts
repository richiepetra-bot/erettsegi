"use server";

import { revalidatePath } from "next/cache";
import { toggleStudyPlanCheck } from "@/lib/db/study-plan";
import { getCurrentUser } from "@/lib/db/users";

export async function toggleTopicCheckAction(topicId: string, checked: boolean): Promise<void> {
  const user = await getCurrentUser();
  await toggleStudyPlanCheck(user.id, topicId, checked);
  revalidatePath("/plan");
}
