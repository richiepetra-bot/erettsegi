import { getSupabaseServerClient } from "@/lib/supabase/server";
import { hashPassword } from "@/lib/auth/password";
import { AppUser, AppUserRole, Invite, LinkedSupervisor, SupervisorRole } from "@/lib/types";

type InviteRow = {
  id: string;
  token: string;
  student_user_id: string;
  role: SupervisorRole;
  created_at: string;
  used_at: string | null;
  used_by_user_id: string | null;
};

function toInvite(row: InviteRow): Invite {
  return {
    id: row.id,
    token: row.token,
    student_user_id: row.student_user_id,
    role: row.role,
    created_at: row.created_at,
    used_at: row.used_at,
    used_by_user_id: row.used_by_user_id,
  };
}

export async function createInvite(studentUserId: string, role: SupervisorRole): Promise<Invite> {
  const supabase = getSupabaseServerClient();
  const token = crypto.randomUUID().replace(/-/g, "");
  const { data, error } = await supabase
    .from("invites")
    .insert({ token, student_user_id: studentUserId, role })
    .select()
    .single();
  if (error) throw error;
  return toInvite(data as InviteRow);
}

export async function listInvitesForStudent(studentUserId: string): Promise<Invite[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("invites")
    .select("*")
    .eq("student_user_id", studentUserId)
    .is("used_at", null)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data as InviteRow[]).map(toInvite);
}

export async function revokeInvite(inviteId: string, studentUserId: string): Promise<void> {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("invites")
    .delete()
    .eq("id", inviteId)
    .eq("student_user_id", studentUserId)
    .is("used_at", null);
  if (error) throw error;
}

export async function getInviteByToken(
  token: string
): Promise<{ invite: Invite; studentName: string } | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("invites")
    .select("*, student:app_users!invites_student_user_id_fkey(display_name)")
    .eq("token", token)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;

  const row = data as InviteRow & { student: { display_name: string } | null };
  return { invite: toInvite(row), studentName: row.student?.display_name ?? "Ismeretlen diák" };
}

export async function acceptInviteAsNewUser(
  token: string,
  email: string,
  password: string,
  displayName: string
): Promise<AppUser> {
  const supabase = getSupabaseServerClient();
  const found = await getInviteByToken(token);
  if (!found || found.invite.used_at) {
    throw new Error("A meghívó érvénytelen vagy már felhasználták.");
  }

  const passwordHash = await hashPassword(password);
  const { data: userData, error: userError } = await supabase
    .from("app_users")
    .insert({
      email: email.toLowerCase().trim(),
      password_hash: passwordHash,
      display_name: displayName.trim(),
      role: found.invite.role,
    })
    .select()
    .single();
  if (userError) throw userError;

  const newUser: AppUser = {
    id: userData.id,
    email: userData.email,
    display_name: userData.display_name,
    role: userData.role,
    elective_subject_id: userData.elective_subject_id ?? null,
  };

  await linkAndConsumeInvite(found.invite, newUser.id);
  return newUser;
}

export async function acceptInviteAsExistingUser(
  token: string,
  existingUserId: string,
  existingUserRole: AppUserRole
): Promise<void> {
  const found = await getInviteByToken(token);
  if (!found || found.invite.used_at) {
    throw new Error("A meghívó érvénytelen vagy már felhasználták.");
  }
  if (existingUserRole !== found.invite.role) {
    throw new Error("A bejelentkezett fiók szerepköre nem egyezik a meghívóéval.");
  }
  await linkAndConsumeInvite(found.invite, existingUserId);
}

async function linkAndConsumeInvite(invite: Invite, supervisorUserId: string): Promise<void> {
  const supabase = getSupabaseServerClient();

  const { error: linkError } = await supabase.from("student_links").upsert(
    {
      student_user_id: invite.student_user_id,
      linked_user_id: supervisorUserId,
      role: invite.role,
    },
    { onConflict: "student_user_id,linked_user_id" }
  );
  if (linkError) throw linkError;

  const { error: inviteError } = await supabase
    .from("invites")
    .update({ used_at: new Date().toISOString(), used_by_user_id: supervisorUserId })
    .eq("id", invite.id);
  if (inviteError) throw inviteError;
}

export async function listLinkedSupervisors(studentUserId: string): Promise<LinkedSupervisor[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("student_links")
    .select("*, supervisor:app_users!student_links_linked_user_id_fkey(display_name, email)")
    .eq("student_user_id", studentUserId)
    .order("created_at", { ascending: false });
  if (error) throw error;

  return (
    data as unknown as {
      id: string;
      student_user_id: string;
      linked_user_id: string;
      role: SupervisorRole;
      created_at: string;
      supervisor: { display_name: string; email: string } | null;
    }[]
  ).map((row) => ({
    id: row.id,
    student_user_id: row.student_user_id,
    linked_user_id: row.linked_user_id,
    role: row.role,
    created_at: row.created_at,
    supervisor_name: row.supervisor?.display_name ?? "Ismeretlen",
    supervisor_email: row.supervisor?.email ?? "",
  }));
}

export async function removeLink(linkId: string, studentUserId: string): Promise<void> {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("student_links")
    .delete()
    .eq("id", linkId)
    .eq("student_user_id", studentUserId);
  if (error) throw error;
}
