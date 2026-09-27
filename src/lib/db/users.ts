import { cookies } from "next/headers";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { COOKIE_NAME, getSessionInfo, SessionInfo } from "@/lib/auth/session";
import { AppUser, AppUserRole } from "@/lib/types";

type UserRow = {
  id: string;
  email: string;
  password_hash: string;
  display_name: string;
  role: AppUserRole;
};

function toAppUser(row: UserRow): AppUser {
  return { id: row.id, email: row.email, display_name: row.display_name, role: row.role };
}

export async function createUser(
  email: string,
  password: string,
  displayName: string,
  role: AppUserRole
): Promise<AppUser> {
  const supabase = getSupabaseServerClient();
  const passwordHash = await hashPassword(password);

  const { data, error } = await supabase
    .from("app_users")
    .insert({
      email: email.toLowerCase().trim(),
      password_hash: passwordHash,
      display_name: displayName.trim(),
      role,
    })
    .select()
    .single();
  if (error) throw error;

  const user = toAppUser(data as UserRow);

  if (role === "student") {
    const { error: progressError } = await supabase
      .from("user_progress")
      .insert({ user_id: user.id, total_xp: 0, current_streak: 0, longest_streak: 0 });
    if (progressError) throw progressError;
  }

  return user;
}

export async function verifyLogin(email: string, password: string): Promise<AppUser | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("app_users")
    .select("*")
    .eq("email", email.toLowerCase().trim())
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;

  const row = data as UserRow;
  const valid = await verifyPassword(password, row.password_hash);
  if (!valid) return null;

  return toAppUser(row);
}

export async function getUserById(id: string): Promise<AppUser | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.from("app_users").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data ? toAppUser(data as UserRow) : null;
}

export async function getSession(): Promise<SessionInfo | null> {
  const jar = await cookies();
  return getSessionInfo(jar.get(COOKIE_NAME)?.value);
}

/** For use in server components/actions on routes proxy.ts already protected - throws if inconsistent. */
export async function getCurrentUser(): Promise<AppUser> {
  const session = await getSession();
  if (!session) throw new Error("Nincs ervenyes munkamenet.");
  const user = await getUserById(session.userId);
  if (!user) throw new Error("A munkamenethez tartozo felhasznalo nem talalhato.");
  return user;
}
