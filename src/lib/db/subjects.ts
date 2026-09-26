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
