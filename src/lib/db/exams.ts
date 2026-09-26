import { getSupabaseServerClient } from "@/lib/supabase/server";
import { Exam, ExamType, ExamStatus, ExamWithSubject, Level } from "@/lib/types";

export async function getExamsWithSubjects(): Promise<ExamWithSubject[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("exams")
    .select("*, subject:subjects(*)")
    .neq("status", "torolve")
    .order("written_date", { ascending: true, nullsFirst: false });

  if (error) throw error;
  return data as unknown as ExamWithSubject[];
}

export type ExamInput = {
  subject_id: string;
  exam_type: ExamType;
  level: Level | null;
  written_date: string | null;
  oral_date: string | null;
  notes?: string | null;
};

export async function createExam(input: ExamInput): Promise<Exam> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.from("exams").insert(input).select().single();
  if (error) throw error;
  return data as Exam;
}

export async function updateExam(
  id: string,
  input: Partial<ExamInput> & { status?: ExamStatus }
): Promise<Exam> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("exams")
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data as Exam;
}

export async function deleteExam(id: string): Promise<void> {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase.from("exams").update({ status: "torolve" }).eq("id", id);
  if (error) throw error;
}
