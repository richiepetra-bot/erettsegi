"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/db/users";
import { createInvite, revokeInvite, removeLink } from "@/lib/db/invites";
import { SupervisorRole } from "@/lib/types";

export async function createInviteAction(role: SupervisorRole): Promise<string> {
  const user = await getCurrentUser();
  if (user.role !== "student") throw new Error("Csak diák hozhat létre meghívót.");
  const invite = await createInvite(user.id, role);
  revalidatePath("/meghivok");
  return invite.token;
}

export async function revokeInviteAction(inviteId: string): Promise<void> {
  const user = await getCurrentUser();
  await revokeInvite(inviteId, user.id);
  revalidatePath("/meghivok");
}

export async function removeLinkAction(linkId: string): Promise<void> {
  const user = await getCurrentUser();
  await removeLink(linkId, user.id);
  revalidatePath("/meghivok");
}
