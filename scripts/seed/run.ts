import path from "node:path";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { angolTopics } from "./data/angol";
import { satTopics } from "./data/sat";
import { actTopics } from "./data/act";
import { magyarTopics } from "./data/magyar";
import { magyarPortrekTopics } from "./data/magyar-portrek";
import { magyarLatasmodokTopics } from "./data/magyar-latasmodok";
import { magyarNyelvtanTopics } from "./data/magyar-nyelvtan";
import { tortenelemOkorTopics } from "./data/tortenelem-okor";
import { tortenelemKozepkorTopics } from "./data/tortenelem-kozepkor";
import type { TopicSeed } from "./data/angol";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error(
    "Hianyzik a SUPABASE_URL vagy a SUPABASE_SERVICE_ROLE_KEY a .env.local fajlbol."
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
  db: { schema: process.env.SUPABASE_SCHEMA || "erettsegi" },
});

const SEED_SETS: { subjectKey: string; topics: TopicSeed[] }[] = [
  { subjectKey: "angol", topics: angolTopics },
  { subjectKey: "sat", topics: satTopics },
  { subjectKey: "act", topics: actTopics },
  {
    subjectKey: "magyar",
    topics: [
      ...magyarTopics,
      ...magyarPortrekTopics,
      ...magyarLatasmodokTopics,
      ...magyarNyelvtanTopics,
    ],
  },
  {
    subjectKey: "tortenelem",
    topics: [...tortenelemOkorTopics, ...tortenelemKozepkorTopics],
  },
];

async function seedSubject(subjectKey: string, topics: TopicSeed[]) {
  const { data: subject, error: subjectError } = await supabase
    .from("subjects")
    .select("id, name")
    .eq("key", subjectKey)
    .single();

  if (subjectError || !subject) {
    console.error(`Nem talalhato a(z) '${subjectKey}' tantargy a subjects tablaban.`, subjectError);
    return;
  }

  for (const topic of topics) {
    const { data: upsertedTopic, error: topicError } = await supabase
      .from("topics")
      .upsert(
        {
          subject_id: subject.id,
          slug: topic.slug,
          title: topic.title,
          level: topic.level,
          theme: topic.theme,
          order_index: topic.order_index,
          summary_markdown: topic.summary_markdown,
          content_markdown: topic.content_markdown,
          key_concepts: topic.key_concepts,
          source_refs: topic.source_refs ?? [],
          updated_at: new Date().toISOString(),
        },
        { onConflict: "subject_id,slug" }
      )
      .select()
      .single();

    if (topicError || !upsertedTopic) {
      console.error(`Hiba a(z) '${topic.slug}' tetel mentesekor:`, topicError);
      continue;
    }

    const { error: deleteError } = await supabase
      .from("quiz_questions")
      .delete()
      .eq("topic_id", upsertedTopic.id);
    if (deleteError) {
      console.error(`Hiba a(z) '${topic.slug}' regi kerdeseinek torlesekor:`, deleteError);
      continue;
    }

    const questionRows = topic.questions.map((q, index) => ({
      topic_id: upsertedTopic.id,
      question_type: q.question_type,
      question_text: q.question_text,
      options: q.options,
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty,
      order_index: index,
    }));

    const { error: insertError } = await supabase.from("quiz_questions").insert(questionRows);
    if (insertError) {
      console.error(`Hiba a(z) '${topic.slug}' kerdeseinek mentesekor:`, insertError);
      continue;
    }

    console.log(`✓ ${subject.name} / ${topic.title} (${questionRows.length} kerdes)`);
  }
}

async function main() {
  for (const { subjectKey, topics } of SEED_SETS) {
    await seedSubject(subjectKey, topics);
  }
  console.log("\nKesz a tartalom feltoltese.");
}

main().catch((err) => {
  console.error("Varatlan hiba a seed futasa kozben:", err);
  process.exit(1);
});
