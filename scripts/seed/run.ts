import path from "node:path";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { angolTopics } from "./data/angol";
import { angolTovabbiTemakorokTopics } from "./data/angol-tovabbi-temakorok";
import { satTopics } from "./data/sat";
import { satTovabbiTemakTopics } from "./data/sat-tovabbi-temak";
import { actTopics } from "./data/act";
import { actTovabbiTemakTopics } from "./data/act-tovabbi-temak";
import { magyarTopics } from "./data/magyar";
import { magyarPortrekTopics } from "./data/magyar-portrek";
import { magyarLatasmodokTopics } from "./data/magyar-latasmodok";
import { magyarNyelvtanTopics } from "./data/magyar-nyelvtan";
import { magyarTovabbiSzerzokTopics } from "./data/magyar-tovabbi-szerzok";
import { tortenelemOkorTopics } from "./data/tortenelem-okor";
import { tortenelemKozepkorTopics } from "./data/tortenelem-kozepkor";
import { tortenelemKoraUjkorTopics } from "./data/tortenelem-kora-ujkor";
import { tortenelem19SzazadTopics } from "./data/tortenelem-19szazad";
import { tortenelem20SzazadVilagTopics } from "./data/tortenelem-20szazad-vilag";
import { tortenelem20SzazadMagyarorszagTopics } from "./data/tortenelem-20szazad-magyarorszag";
import { gazdasagiIsmeretekMikroTopics } from "./data/gazdasagi-ismeretek-mikro";
import { gazdasagiIsmeretekMakroTopics } from "./data/gazdasagi-ismeretek-makro";
import { gazdasagiIsmeretekTovabbiTopics } from "./data/gazdasagi-ismeretek-tovabbi";
import { gazdasagiIsmeretekTovabbi2Topics } from "./data/gazdasagi-ismeretek-tovabbi-2";
import { matekAlgebraTopics } from "./data/matek-algebra";
import { matekFuggvenyekGeometriaTopics } from "./data/matek-fuggvenyek-geometria";
import { matekKoordinatageometriaTopics } from "./data/matek-koordinatageometria";
import { matekTovabbiTemakTopics } from "./data/matek-tovabbi-temak";
import { matekTovabbiTemak2Topics } from "./data/matek-tovabbi-temak-2";
import { informatikaTarsadalomAlapokTopics } from "./data/informatika-tarsadalom-alapok";
import { informatikaAlkalmazoiIsmeretekTopics } from "./data/informatika-alkalmazoi-ismeretek";
import { informatikaAlgoritmizalasProgramozasTopics } from "./data/informatika-algoritmizalas-programozas";
import { biologiaSejtszintuTopics } from "./data/biologia-sejtszintu";
import { biologiaNovenyekGombakTopics } from "./data/biologia-novenyek-gombak";
import { biologiaEmberiSzervrendszerekTopics } from "./data/biologia-emberi-szervrendszerek";
import { biologiaGenetikaEvolucioEkologiaTopics } from "./data/biologia-genetika-evolucio-ekologia";
import { kemiaAltalanosTopics } from "./data/kemia-altalanos";
import { kemiaFizikaiSzervetlenTopics } from "./data/kemia-fizikai-szervetlen";
import { kemiaSzervetlenTopics } from "./data/kemia-szervetlen";
import { kemiaSzervesKornyezetkemiaTopics } from "./data/kemia-szerves-kornyezetkemia";
import { fizikaMechanikaTopics } from "./data/fizika-mechanika";
import { fizikaHoElektromossagTopics } from "./data/fizika-ho-elektromossag";
import { fizikaElektromagnessegOptikaTopics } from "./data/fizika-elektromagnesseg-optika";
import { fizikaAtomfizikaKozmoszTopics } from "./data/fizika-atomfizika-kozmosz";
import { foldrajzKozmikusEsGeoszferakTopics } from "./data/foldrajz-kozmikus-es-geoszferak";
import { foldrajzLegkorEsVizburokTopics } from "./data/foldrajz-legkor-es-vizburok";
import { foldrajzTarsadalomfoldrajzTopics } from "./data/foldrajz-tarsadalomfoldrajz";
import { foldrajzVilagreszekMagyarorszagTopics } from "./data/foldrajz-vilagreszek-magyarorszag";
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
  { subjectKey: "angol", topics: [...angolTopics, ...angolTovabbiTemakorokTopics] },
  { subjectKey: "sat", topics: [...satTopics, ...satTovabbiTemakTopics] },
  { subjectKey: "act", topics: [...actTopics, ...actTovabbiTemakTopics] },
  {
    subjectKey: "magyar",
    topics: [
      ...magyarTopics,
      ...magyarPortrekTopics,
      ...magyarLatasmodokTopics,
      ...magyarNyelvtanTopics,
      ...magyarTovabbiSzerzokTopics,
    ],
  },
  {
    subjectKey: "tortenelem",
    topics: [
      ...tortenelemOkorTopics,
      ...tortenelemKozepkorTopics,
      ...tortenelemKoraUjkorTopics,
      ...tortenelem19SzazadTopics,
      ...tortenelem20SzazadVilagTopics,
      ...tortenelem20SzazadMagyarorszagTopics,
    ],
  },
  {
    subjectKey: "gazdasagi-ismeretek",
    topics: [
      ...gazdasagiIsmeretekMikroTopics,
      ...gazdasagiIsmeretekMakroTopics,
      ...gazdasagiIsmeretekTovabbiTopics,
      ...gazdasagiIsmeretekTovabbi2Topics,
    ],
  },
  {
    subjectKey: "matek",
    topics: [
      ...matekAlgebraTopics,
      ...matekFuggvenyekGeometriaTopics,
      ...matekKoordinatageometriaTopics,
      ...matekTovabbiTemakTopics,
      ...matekTovabbiTemak2Topics,
    ],
  },
  {
    subjectKey: "informatika",
    topics: [
      ...informatikaTarsadalomAlapokTopics,
      ...informatikaAlkalmazoiIsmeretekTopics,
      ...informatikaAlgoritmizalasProgramozasTopics,
    ],
  },
  {
    subjectKey: "biologia",
    topics: [
      ...biologiaSejtszintuTopics,
      ...biologiaNovenyekGombakTopics,
      ...biologiaEmberiSzervrendszerekTopics,
      ...biologiaGenetikaEvolucioEkologiaTopics,
    ],
  },
  {
    subjectKey: "kemia",
    topics: [
      ...kemiaAltalanosTopics,
      ...kemiaFizikaiSzervetlenTopics,
      ...kemiaSzervetlenTopics,
      ...kemiaSzervesKornyezetkemiaTopics,
    ],
  },
  {
    subjectKey: "fizika",
    topics: [
      ...fizikaMechanikaTopics,
      ...fizikaHoElektromossagTopics,
      ...fizikaElektromagnessegOptikaTopics,
      ...fizikaAtomfizikaKozmoszTopics,
    ],
  },
  {
    subjectKey: "foldrajz",
    topics: [
      ...foldrajzKozmikusEsGeoszferakTopics,
      ...foldrajzLegkorEsVizburokTopics,
      ...foldrajzTarsadalomfoldrajzTopics,
      ...foldrajzVilagreszekMagyarorszagTopics,
    ],
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
