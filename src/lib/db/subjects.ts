import { getSupabaseServerClient } from "@/lib/supabase/server";
import { Subject } from "@/lib/types";

export async function getSubjects(): Promise<Subject[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("subjects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data as Subject[];
}

export async function getSubjectByKey(key: string): Promise<Subject | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("subjects")
    .select("*")
    .eq("key", key)
    .maybeSingle();

  if (error) throw error;
  return data as Subject | null;
}

export async function getSubjectById(id: string): Promise<Subject | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.from("subjects").select("*").eq("id", id).maybeSingle();

  if (error) throw error;
  return data as Subject | null;
}

/** Az összes választható (5.) érettségi tantárgy, amiből a diák egyet kiválaszthat. */
export async function getElectiveSubjects(): Promise<Subject[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("subjects")
    .select("*")
    .eq("is_elective", true)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data as Subject[];
}

/**
 * Egy diák számára látható tantárgyak: a nem-elective tantárgyak (4 kötelező
 * érettségi + SAT/ACT) mindig, a választható tantárgyak közül pedig csak az,
 * amit a diák saját maga kiválasztott (ha még nem választott, semelyik).
 */
export function filterSubjectsForStudent(
  subjects: Subject[],
  electiveSubjectId: string | null
): Subject[] {
  return subjects.filter((s) => !s.is_elective || s.id === electiveSubjectId);
}

/** Igaz, ha a diák jogosult a megadott tantárgyat látni (kötelező, vagy a saját electivje). */
export function canAccessSubject(subject: Subject, electiveSubjectId: string | null): boolean {
  return !subject.is_elective || subject.id === electiveSubjectId;
}
