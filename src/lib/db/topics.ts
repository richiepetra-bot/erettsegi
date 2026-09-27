import { getSupabaseServerClient } from "@/lib/supabase/server";
import { Topic, TopicWithProgress } from "@/lib/types";

export async function getTopicsBySubjectId(
  subjectId: string,
  userId: string
): Promise<TopicWithProgress[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("topics")
    .select("*, progress:topic_progress(*)")
    .eq("subject_id", subjectId)
    .eq("progress.user_id", userId)
    .order("order_index", { ascending: true });

  if (error) throw error;

  return (data as unknown as (Topic & { progress: TopicWithProgress["progress"][] })[]).map(
    (topic) => ({
      ...topic,
      progress: Array.isArray(topic.progress) ? topic.progress[0] ?? null : topic.progress,
    })
  );
}

export async function getTopicBySlug(
  subjectId: string,
  slug: string,
  userId: string
): Promise<TopicWithProgress | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("topics")
    .select("*, progress:topic_progress(*)")
    .eq("subject_id", subjectId)
    .eq("slug", slug)
    .eq("progress.user_id", userId)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  const raw = data as unknown as Topic & { progress: TopicWithProgress["progress"][] };
  return {
    ...raw,
    progress: Array.isArray(raw.progress) ? raw.progress[0] ?? null : raw.progress,
  };
}
