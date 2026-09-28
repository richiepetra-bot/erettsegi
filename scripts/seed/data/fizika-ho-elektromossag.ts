import type { TopicSeed } from "./angol";

export const fizikaHoElektromossagTopics: TopicSeed[] = [
  {
    slug: "folyadekok-mechanikaja-hidrosztatika",
    title: "Folyadékok mechanikája — hidrosztatika",
    level: "mindketto",
    theme: "Folyadékok mechanikája",
    order_index: 9,
    summary_markdown:
      "A hidrosztatika a nyugalomban lévő folyadékokkal foglalkozik: a hidrosztatikai nyomás, a Pascal-törvény és az Arkhimédész-törvény a mindennapi jelenségek (úszás, hidraulika) fizikai alapja.",
    content_markdown: `
## Nyomás

A **nyomás (p)** egy felületre merőlegesen hatő erő és a felület területének hányadosa:

**p = F / A**  [Pa, pascal = N/m²]

A nyomás skalármennyiség, és folyadékokban, gázokban minden irányban egyformán hat (nem csak "lefelé").

## Hidrosztatikai nyomás

Egy nyugalomban lévő folyadék belsejében, egy adott h mélységben a folyadék önsúlya miatt kialakuló **hidrosztatikai nyomás**:

**p = ρ · g · h**

ahol ρ a folyadék sűrűsége, g a nehézségi gyorsulás, h a folyadékoszlop magassága (mélysége) a felszíntől mérve. Fontos, hogy a hidrosztatikai nyomás **nem függ az edény alakjától vagy a folyadék mennyiségétől**, csak a mélységtől és a sűrűségtől — ez a **hidrosztatikai paradoxon**.

Ha a folyadék felszínén külső nyomás (pl. a légnyomás, p₀) is hat, a teljes nyomás egy adott mélységben: **p_teljes = p₀ + ρ·g·h**.

## Pascal törvénye

**Pascal törvénye** szerint egy zárt térben lévő, összenyomhatatlannak tekintett folyadékra kifejtett nyomás a folyadék minden pontjában és minden irányban **azonos mértékben** továbbterjed. Ez a hidraulikus emelők, féksegítők működésének alapja: egy kis felületű dugattyúra kifejtett kis erő egy nagy felületű dugattyún nagy erőt hoz létre, mivel a nyomás mindkét oldalon azonos:

**F₁ / A₁ = F₂ / A₂**

## Arkhimédész törvénye — a felhajtóerő

Egy folyadékba (vagy gázba) merített testre a folyadék felfelé irányuló erőt, **felhajtóerőt** fejt ki, amelynek nagysága megegyezik a test által kiszorított folyadék súlyával:

**F_fel = ρ_folyadék · V_kiszorított · g**

- Ha a test **átlagos sűrűsége nagyobb**, mint a folyadék sűrűsége, a test **elmerül** (a felhajtóerő kisebb, mint a súlyerő).
- Ha a test **sűrűsége kisebb**, mint a folyadéké, a test **felszínre úszik**, és annyira merül el, hogy a kiszorított folyadék súlya megegyezzen a test teljes súlyával (**úszás feltétele**: F_fel = G).
- Ha a **sűrűségek egyenlők**, a test a folyadék belsejében bárhol lebeghet (közömbös egyensúly).

## Példa levezetés

Egy 500 cm³ térfogatú, 600 kg/m³ sűrűségű fadarabot vízbe (ρ_víz = 1000 kg/m³) teszünk. Mekkora a fadarab térfogatának hányad része merül a víz alá úszás közben?

1. Úszás feltétele: F_fel = G, azaz ρ_víz·V_alámerült·g = ρ_fa·V_teljes·g
2. V_alámerült / V_teljes = ρ_fa / ρ_víz = 600/1000 = **0,6**, tehát a fadarab térfogatának 60%-a merül a víz alá.

## Közlekedő edények

Ha két vagy több edény alul összeköttetésben áll (**közlekedő edények**), a bennük lévő azonos folyadék felszíne — az edények alakjától függetlenül — **azonos szintre** áll be, mert csak így egyenlő a nyomás az összekötő ponton mindkét oldalról.
`,
    key_concepts: [
      "nyomás: p = F/A",
      "hidrosztatikai nyomás: p = ρ·g·h",
      "Pascal törvénye (hidraulika)",
      "Arkhimédész törvénye — felhajtóerő",
      "közlekedő edények",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mitől függ a hidrosztatikai nyomás egy folyadék belsejében?",
        options: [
          "a folyadék sűrűségétől és a mélységtől",
          "az edény alakjától",
          "csak a folyadék mennyiségétől",
          "a folyadék hőmérsékletétől kizárólag",
        ],
        correct_answer: "a folyadék sűrűségétől és a mélységtől",
        explanation: "p = ρ·g·h, tehát a hidrosztatikai nyomás a sűrűségtől és a mélységtől függ, az edény alakjától nem (hidrosztatikai paradoxon).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit állít Arkhimédész törvénye?",
        options: [
          "a felhajtóerő nagysága megegyezik a kiszorított folyadék súlyával",
          "minden test úszik a folyadékban",
          "a folyadék nyomása csak lefelé hat",
          "a felhajtóerő mindig egyenlő a test súlyával",
        ],
        correct_answer: "a felhajtóerő nagysága megegyezik a kiszorított folyadék súlyával",
        explanation: "Arkhimédész törvénye szerint a folyadékba merített testre ható felhajtóerő megegyezik a test által kiszorított folyadék súlyával.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy hidraulikus emelőben a kis dugattyú területe 5 cm², a nagy dugattyú területe 100 cm². Ha a kis dugattyúra 20 N erőt fejtünk ki, mekkora erő keletkezik a nagy dugattyún?",
        options: ["400 N", "20 N", "2000 N", "100 N"],
        correct_answer: "400 N",
        explanation: "F₁/A₁ = F₂/A₂ ⟹ F₂ = F₁·A₂/A₁ = 20·100/5 = 400 N.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért áll be azonos szintre a folyadék felszíne a közlekedő edényekben, függetlenül az edények alakjától?",
        options: [
          "mert csak így egyenlő a nyomás az összekötő ponton mindkét oldalról",
          "mert a folyadék mennyisége mindig azonos az edényekben",
          "mert a légnyomás ezt kényszeríti ki",
          "ez csak azonos alakú edényeknél igaz",
        ],
        correct_answer: "mert csak így egyenlő a nyomás az összekötő ponton mindkét oldalról",
        explanation: "A nyugalmi egyensúly feltétele, hogy az összekötő ponton mindkét oldalról azonos nyomás hasson, ami azonos folyadékszintet igényel, függetlenül az edény alakjától.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 0,2 m³ térfogatú, 900 kg/m³ sűrűségű jégtömb tengervízben (ρ = 1030 kg/m³) úszik. Mekkora a jégtömb térfogatának hányada merül a víz alá?",
        options: ["kb. 87%", "kb. 70%", "kb. 90%", "100%"],
        correct_answer: "kb. 87%",
        explanation: "V_alámerült/V_teljes = ρ_jég/ρ_víz = 900/1030 ≈ 0,874, azaz kb. 87%.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "aramlo-folyadekok-bernoulli-torveny",
    title: "Áramló folyadékok — Bernoulli-törvény",
    level: "emelt",
    theme: "Folyadékok mechanikája",
    order_index: 10,
    summary_markdown:
      "Az áramló (mozgó) folyadékok leírásához a folytonosság törvénye és a Bernoulli-törvény szükséges, amelyek a repülés, a szélcsatorna-kísérletek és számos technikai eszköz működésének fizikai alapját jelentik.",
    content_markdown: `
## Áramlási alapfogalmak

Egy folyadék (vagy gáz) **áramlásánál** a részecskék meghatározott pályákon, **áramvonalak** mentén mozognak. Az áramlás lehet:

- **Lamináris (réteges)**: a szomszédos folyadékrétegek rendezetten, egymást keresztezés nélkül mozognak, kis sebességnél jellemző.
- **Turbulens (örvényes)**: nagy sebességnél, illetve akadályok körül kialakuló, kaotikus, örvényes áramlás.

Az egyszerűsített leírásokban gyakran feltesszük, hogy a folyadék **összenyomhatatlan** és a közeg **belső súrlódása (viszkozitása) elhanyagolható** (ideális folyadék).

## A folytonosság törvénye

Egy változó keresztmetszetű csőben (feltéve, hogy a folyadék összenyomhatatlan, és nincs elágazás vagy szivárgás) az egységnyi idő alatt átáramló folyadék térfogata (**térfogatáram**, Q = A·v) mindenütt azonos:

**A₁ · v₁ = A₂ · v₂**

Ez azt jelenti, hogy **szűkebb keresztmetszetnél a folyadék sebessége nagyobb**, tágabb keresztmetszetnél kisebb — ezt tapasztaljuk pl. egy locsolótömlő végének összeszorításakor.

## A Bernoulli-törvény

**Daniel Bernoulli** felfedezése szerint egy ideális (összenyomhatatlan, belső súrlódás nélküli), stacionárius áramlást végző folyadék egy áramvonala mentén a nyomás, a mozgási energia (sebességi tag) és a helyzeti energia (magassági tag) fajlagos (egységnyi térfogatra vonatkoztatott) összege állandó:

**p + ½·ρ·v² + ρ·g·h = állandó**

Ez az energiamegmaradás törvényének áramló folyadékokra alkalmazott alakja. Vízszintes áramlásnál (h állandó) a törvény egyszerűsödik:

**p + ½·ρ·v² = állandó**

Ebből következik, hogy **ahol az áramlás sebessége nagyobb, ott a nyomás kisebb**, és fordítva.

## Alkalmazások

- **Repülőgépszárny felhajtóereje**: a szárny sajátos (aszimmetrikus) alakja miatt a levegő a szárny felső oldalán nagyobb sebességgel áramlik, mint az alsó oldalon, ezért ott kisebb a nyomás — a nyomáskülönbség felfelé irányuló felhajtóerőt eredményez.
- **Porlasztó, permetező flakon**: a szűk fúvócsövön nagy sebességgel áramló levegő kis nyomású térséget hoz létre, amely felszívja az alul lévő folyadékot.
- **Vénturi-cső**: mérőeszköz, amely a keresztmetszet-szűkülésnél fellépő sebességnövekedést és nyomáscsökkenést használja fel áramlási sebesség mérésére.

## Példa levezetés

Egy vízszintes csőben a folyadék sebessége a szűkebb szakaszon 4 m/s, a nyomása itt 1,0·10⁵ Pa. A tágabb szakaszon a sebesség 1 m/s. Mekkora ott a nyomás (ρ_víz = 1000 kg/m³)?

1. Bernoulli-törvény vízszintes áramlásra: p₁ + ½ρv₁² = p₂ + ½ρv₂²
2. 1,0·10⁵ + ½·1000·16 = p₂ + ½·1000·1
3. 1,0·10⁵ + 8000 = p₂ + 500
4. **p₂ = 1,075·10⁵ Pa** (a tágabb, lassabb szakaszon nagyobb a nyomás).
`,
    key_concepts: [
      "lamináris és turbulens áramlás",
      "a folytonosság törvénye: A₁v₁ = A₂v₂",
      "Bernoulli-törvény: p + ½ρv² + ρgh = állandó",
      "nyomás–sebesség kapcsolata áramló folyadékban",
      "repülőgépszárny felhajtóereje",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit állít a folytonosság törvénye egy változó keresztmetszetű csőben áramló folyadékra?",
        options: [
          "az A·v szorzat (térfogatáram) a cső minden keresztmetszetén azonos",
          "a sebesség mindenütt azonos",
          "a nyomás mindenütt azonos",
          "a keresztmetszet mindenütt azonos",
        ],
        correct_answer: "az A·v szorzat (térfogatáram) a cső minden keresztmetszetén azonos",
        explanation: "A folytonosság törvénye szerint A₁v₁ = A₂v₂, azaz a térfogatáram állandó, ezért szűkebb keresztmetszetnél nagyobb a sebesség.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "A Bernoulli-törvény szerint egy vízszintes áramlásban hol lesz kisebb a nyomás?",
        options: [
          "ahol nagyobb az áramlási sebesség",
          "ahol kisebb az áramlási sebesség",
          "ahol nagyobb a keresztmetszet",
          "a nyomás mindig állandó, függetlenül a sebességtől",
        ],
        correct_answer: "ahol nagyobb az áramlási sebesség",
        explanation: "p + ½ρv² = állandó vízszintes áramlásnál, ezért ahol nagyobb a sebesség, ott kisebb a nyomás.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért keletkezik felfelé irányuló felhajtóerő egy repülőgép szárnyán?",
        options: [
          "mert a szárny felső oldalán nagyobb a légsebesség, ezért kisebb a nyomás, mint az alsó oldalon",
          "mert a szárny alsó oldalán nagyobb a légsebesség",
          "mert a szárny tömege kisebb, mint a levegőé",
          "mert a motor felfelé húzza a repülőgépet",
        ],
        correct_answer: "mert a szárny felső oldalán nagyobb a légsebesség, ezért kisebb a nyomás, mint az alsó oldalon",
        explanation: "A szárny alakja miatt a felső oldalon nagyobb sebességgel áramlik a levegő, ott kisebb a nyomás a Bernoulli-törvény szerint, ami felfelé irányuló nyomáskülönbséget (felhajtóerőt) eredményez.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 8 cm² keresztmetszetű csőrészen a folyadék 2 m/s sebességgel áramlik. Mekkora a sebessége egy 4 cm² keresztmetszetű szűkületben?",
        options: ["4 m/s", "1 m/s", "8 m/s", "2 m/s"],
        correct_answer: "4 m/s",
        explanation: "A₁v₁ = A₂v₂ ⟹ v₂ = A₁v₁/A₂ = 8·2/4 = 4 m/s.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a lamináris és a turbulens áramlás közötti alapvető különbség?",
        options: [
          "lamináris áramlásnál a rétegek rendezetten, keresztezés nélkül mozognak, turbulensnél kaotikus, örvényes a mozgás",
          "turbulens áramlásnál nincs sebesség",
          "lamináris áramlás csak gázokban létezik",
          "a kettő között nincs fizikai különbség, csak elnevezésbeli",
        ],
        correct_answer: "lamináris áramlásnál a rétegek rendezetten, keresztezés nélkül mozognak, turbulensnél kaotikus, örvényes a mozgás",
        explanation: "Lamináris áramlásnál a folyadékrétegek rendezetten csúsznak el egymáson, turbulens áramlásnál a mozgás kaotikus, örvényekkel jellemezhető.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "hotan-alapjai-hotagulas-homennyiseg-halmazallapot",
    title: "Hőtan alapjai — hőtágulás, hőmennyiség, halmazállapot-változások",
    level: "mindketto",
    theme: "Hőtan",
    order_index: 11,
    summary_markdown:
      "A hőtan a testek hőállapotával, a hőátadás formáival, a hőtágulással és a halmazállapot-változásokkal (olvadás, forrás, fagyás, lecsapódás) foglalkozik, amelyek mindegyike jól számszerűsíthető hőmennyiséggel jár.",
    content_markdown: `
## Hőmérséklet és hő

A **hőmérséklet** a testek részecskéinek átlagos mozgási energiájával (hőmozgásával) áll kapcsolatban, mértékegysége Celsius-fokban [°C] vagy kelvinben [K] (T[K] = t[°C] + 273,15). A **hő (Q)** a testek között hőmérséklet-különbség hatására átadott energia, mértékegysége joule [J].

## Hőtágulás

A testek melegítés hatására általában kiterjednek (tágulnak), hűtéskor összehúzódnak. Szilárd testeknél megkülönböztetünk:

- **Lineáris (hosszúsági) hőtágulást**: **Δl = l₀ · α · ΔT**, ahol α a lineáris hőtágulási együttható, l₀ a kezdeti hosszúság.
- **Térfogati hőtágulást**: **ΔV = V₀ · β · ΔT**, ahol β ≈ 3α (izotróp szilárd testekre).

Folyadékok és gázok esetén csak a térfogati hőtágulást szokás vizsgálni. A víz különleges (rendellenes) tulajdonsága, hogy 0 °C és 4 °C között hűtve **tágul**, nem összehúzódik — ez a jelenség biztosítja, hogy a befagyó tavak fenekén a víz ne fagyjon meg, megőrizve az élővilág életfeltételeit.

## Fajhő és a hőmennyiség kiszámítása

Egy test hőmérsékletének megváltoztatásához szükséges hőmennyiség:

**Q = c · m · ΔT**

ahol c az anyag **fajhője** [J/(kg·K)] (az az energia, amely 1 kg anyag hőmérsékletét 1 K-nel emeli), m a tömeg, ΔT a hőmérséklet-változás. A víz fajhője kiemelkedően nagy (c_víz ≈ 4200 J/(kg·K)), ezért nehéz felmelegíteni/lehűteni — ez magyarázza a tengerek és tavak éghajlat-stabilizáló hatását.

## Halmazállapot-változások és olvadáshő, forráshő

A halmazállapot-változás (olvadás, fagyás, forrás/párolgás, lecsapódás, szublimáció) állandó hőmérsékleten megy végbe (adott nyomáson), és a felvett/leadott hő nem a hőmérsékletet, hanem a részecskék közötti kötések állapotát változtatja meg:

- **Olvadáshő (L_o)**: az az energia, amely 1 kg szilárd anyag olvadási hőmérsékleten történő megolvasztásához szükséges: **Q = L_o · m**.
- **Forráshő (L_f)**: az az energia, amely 1 kg folyadék forráspontján történő elforralásához szükséges: **Q = L_f · m**.

A folyamat fordított irányban (fagyás, lecsapódás) ugyanennyi hőt ad le a környezetnek.

## Hőterjedési módok

- **Hővezetés**: a hő közvetlen érintkezés (részecskeütközések) révén terjed egy anyagon belül, közeg tényleges elmozdulása nélkül (jó példa: fémek).
- **Hőáramlás (konvekció)**: folyadékokban és gázokban a felmelegült, kisebb sűrűségű részek felfelé áramlanak, és a hő ezzel az anyagáramlással terjed.
- **Hősugárzás**: elektromágneses sugárzás (főleg infravörös) formájában terjedő hőátadás, amely közeg nélkül, vákuumban is végbemegy (pl. a Nap sugárzása).

## Példa levezetés

Mennyi hő szükséges 2 kg, 20 °C-os víz felforrósításához 100 °C-ra, majd elforralásához? (c_víz = 4200 J/(kg·K), L_forrás = 2 260 000 J/kg)

1. Felmelegítés: Q₁ = c·m·ΔT = 4200 · 2 · 80 = 672 000 J
2. Elforralás: Q₂ = L·m = 2 260 000 · 2 = 4 520 000 J
3. Összesen: **Q = 672 000 + 4 520 000 = 5 192 000 J ≈ 5,19 MJ**
`,
    key_concepts: [
      "hőmérséklet és hő fogalma, Celsius/Kelvin",
      "hőtágulás (lineáris és térfogati)",
      "fajhő és a Q = c·m·ΔT képlet",
      "olvadáshő és forráshő",
      "hővezetés, hőáramlás, hősugárzás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hány kelvin 25 °C?",
        options: ["298,15 K", "25 K", "248,15 K", "0 K"],
        correct_answer: "298,15 K",
        explanation: "T[K] = t[°C] + 273,15 = 25 + 273,15 = 298,15 K.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi hő szükséges 3 kg víz hőmérsékletének 10 °C-kal történő emeléséhez (c_víz = 4200 J/(kg·K))?",
        options: ["126 000 J", "42 000 J", "12 600 J", "4200 J"],
        correct_answer: "126 000 J",
        explanation: "Q = c·m·ΔT = 4200·3·10 = 126 000 J.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem fagynak meg teljesen fenékig a tavak télen, amikor a felszínük befagy?",
        options: [
          "mert a víz 0–4 °C között hűtve tágul, ezért a leghidegebb víz a felszínen marad, a 4 °C-os, legnagyobb sűrűségű víz pedig lesüllyed",
          "mert a víz fajhője nulla",
          "mert a jég sűrűbb, mint a víz",
          "mert a tavak fenekén mindig melegebb van a Föld belseje miatt",
        ],
        correct_answer: "mert a víz 0–4 °C között hűtve tágul, ezért a leghidegebb víz a felszínen marad, a 4 °C-os, legnagyobb sűrűségű víz pedig lesüllyed",
        explanation: "A víz rendellenes hőtágulása miatt 4 °C-on a legsűrűbb, ez süllyed a fenékre, míg a 0 °C körüli, kisebb sűrűségű víz és jég a felszínen marad, védve a mélyebb vizet a fagyástól.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik hőterjedési mód nem igényel közeget, és vákuumban is végbemehet?",
        options: ["hősugárzás", "hővezetés", "hőáramlás (konvekció)", "mindhárom igényel közeget"],
        correct_answer: "hősugárzás",
        explanation: "A hősugárzás elektromágneses hullámok (jellemzően infravörös sugárzás) formájában terjed, ezért közeg (anyag) nélkül, vákuumban is végbemegy — így jut el a Nap energiája a Földre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 0,5 kg jégdarabot 0 °C-on teljesen megolvasztunk. Mennyi hőt vett fel a jég (L_olvadás,jég = 334 000 J/kg)?",
        options: ["167 000 J", "334 000 J", "668 000 J", "16 700 J"],
        correct_answer: "167 000 J",
        explanation: "Q = L·m = 334 000 · 0,5 = 167 000 J.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "gazok-allapotegyenlete",
    title: "A gázok állapotegyenlete",
    level: "mindketto",
    theme: "Hőtan",
    order_index: 12,
    summary_markdown:
      "Az ideális gáz állapotegyenlete (Boyle–Mariotte-, Gay-Lussac- és Avogadro-törvény összevonásaként) a nyomás, térfogat, hőmérséklet és anyagmennyiség kapcsolatát írja le, amely a hőtan és a részecskeszemléletű (kinetikus) gázmodell alapja.",
    content_markdown: `
## Az ideális gázmodell

Az **ideális gáz** egy egyszerűsített modell, amelyben a gázrészecskék (molekulák) pontszerűek, közöttük csak rugalmas ütközések vannak, és nincs köztük egyéb kölcsönhatás (vonzás/taszítás). Ez a modell jó közelítést ad a valóságos gázok (pl. levegő) viselkedésére, kivéve nagyon nagy nyomás vagy alacsony hőmérséklet esetén.

## Az egyesített gáztörvény (Boyle–Mariotte és Gay-Lussac)

- **Boyle–Mariotte törvénye** (izoterm, azaz állandó hőmérsékletű folyamat): állandó hőmérsékleten és anyagmennyiségen a gáz nyomása és térfogata fordítottan arányos: **p·V = állandó**.
- **Gay-Lussac I. törvénye** (izobár, állandó nyomású folyamat): állandó nyomáson a térfogat egyenesen arányos az abszolút (kelvinben mért) hőmérséklettel: **V / T = állandó**.
- **Gay-Lussac II. törvénye** (izochor, állandó térfogatú folyamat): állandó térfogaton a nyomás egyenesen arányos az abszolút hőmérséklettel: **p / T = állandó**.

Ezeket egyesítve kapjuk az **egyesített gáztörvényt**, adott gázmennyiségre:

**(p₁ · V₁) / T₁ = (p₂ · V₂) / T₂**

## Az ideális gáz állapotegyenlete

Ha az anyagmennyiséget (n, mol) is figyelembe vesszük, az **ideális gáz állapotegyenlete**:

**p · V = n · R · T**

ahol R ≈ 8,314 J/(mol·K) az **egyetemes gázállandó**, T az abszolút hőmérséklet (K-ben). Ez az egyenlet kapcsolja össze a gáz négy állapotjelzőjét (p, V, T, n) egyetlen összefüggésben.

## A kinetikus gázelmélet alapjai

A kinetikus gázelmélet szerint a gáz nyomása a részecskék véletlenszerű, rendezetlen mozgása közben a tartály falával történő ütközéseiből adódik. Ebből levezethető, hogy a gázrészecskék átlagos mozgási energiája egyenesen arányos az abszolút hőmérséklettel:

**E_mozg,átlag = (3/2) · k · T**

ahol k a Boltzmann-állandó. Ez a hőmérséklet mikroszkopikus (részecskeszintű) jelentését adja meg: a hőmérséklet a részecskék rendezetlen mozgásának intenzitását jellemzi.

## Példa levezetés

Egy zárt tartályban lévő gáz kezdetben 2·10⁵ Pa nyomású, 3 m³ térfogatú, 300 K hőmérsékletű. Felmelegítjük 450 K-re, közben a térfogata 4 m³-re nő. Mekkora lesz az új nyomás?

1. Egyesített gáztörvény: (p₁V₁)/T₁ = (p₂V₂)/T₂
2. (2·10⁵ · 3) / 300 = (p₂ · 4) / 450
3. 2000 = (p₂ · 4) / 450 ⟹ p₂ · 4 = 900 000 ⟹ **p₂ = 225 000 Pa = 2,25·10⁵ Pa**
`,
    key_concepts: [
      "ideális gázmodell",
      "Boyle–Mariotte-törvény (izoterm folyamat)",
      "Gay-Lussac törvényei (izobár, izochor folyamat)",
      "ideális gáz állapotegyenlete: pV = nRT",
      "kinetikus gázelmélet és a hőmérséklet mikroszkopikus jelentése",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit állít a Boyle–Mariotte törvény?",
        options: [
          "állandó hőmérsékleten a gáz nyomása és térfogata fordítottan arányos",
          "állandó nyomáson a térfogat fordítottan arányos a hőmérséklettel",
          "a nyomás mindig egyenesen arányos a térfogattal",
          "a hőmérséklet nem befolyásolja a gáz nyomását",
        ],
        correct_answer: "állandó hőmérsékleten a gáz nyomása és térfogata fordítottan arányos",
        explanation: "Boyle–Mariotte törvénye izoterm folyamatra érvényes: p·V = állandó, azaz a nyomás és a térfogat fordítottan arányos egymással.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Az ideális gáz állapotegyenletében (pV = nRT) mit jelöl az n betű?",
        options: ["a gáz anyagmennyiségét (mol)", "a gáz nyomását", "a gáz hőmérsékletét", "a gázrészecskék számát darabban"],
        correct_answer: "a gáz anyagmennyiségét (mol)",
        explanation: "Az állapotegyenletben n a gáz anyagmennyisége mol-ban kifejezve, R az egyetemes gázállandó, T az abszolút hőmérséklet.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy zárt tartályban a gáz térfogata állandó marad, hőmérséklete 300 K-ről 600 K-re nő. Hogyan változik a nyomása?",
        options: ["kétszeresére nő", "felére csökken", "nem változik", "négyszeresére nő"],
        correct_answer: "kétszeresére nő",
        explanation: "Izochor folyamatnál p/T = állandó, ezért a hőmérséklet kétszereződésekor a nyomás is kétszeresére nő.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fizikai jelentése a gázrészecskék átlagos mozgási energiája és az abszolút hőmérséklet közötti arányosságnak?",
        options: [
          "a hőmérséklet a részecskék rendezetlen mozgásának intenzitását jellemzi mikroszkopikus szinten",
          "a hőmérséklet csak makroszkopikus mennyiség, nincs részecskeszintű jelentése",
          "a részecskék mozgási energiája fordítottan arányos a hőmérséklettel",
          "a részecskék mozgási energiája állandó, függetlenül a hőmérséklettől",
        ],
        correct_answer: "a hőmérséklet a részecskék rendezetlen mozgásának intenzitását jellemzi mikroszkopikus szinten",
        explanation: "A kinetikus gázelmélet szerint E_mozg,átlag = (3/2)kT, tehát az abszolút hőmérséklet a részecskék átlagos mozgási energiájával (rendezetlen hőmozgásával) áll kapcsolatban.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy gáz kezdeti állapota: p₁ = 1·10⁵ Pa, V₁ = 2 m³, T₁ = 250 K. Mekkora a térfogata, ha a nyomása 2·10⁵ Pa-ra nő, a hőmérséklete pedig 500 K-re emelkedik?",
        options: ["2 m³", "4 m³", "1 m³", "8 m³"],
        correct_answer: "2 m³",
        explanation: "(p₁V₁)/T₁ = (p₂V₂)/T₂ ⟹ (1·10⁵·2)/250 = (2·10⁵·V₂)/500 ⟹ 800 = (2·10⁵·V₂)/500 ⟹ V₂ = 800·500/(2·10⁵) = 2 m³.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "termodinamika-fotetelei",
    title: "Termodinamika főtételei",
    level: "emelt",
    theme: "Hőtan",
    order_index: 13,
    summary_markdown:
      "A termodinamika főtételei az energia megmaradását és a folyamatok irányát meghatározó általános törvényeket foglalják össze, amelyek a hőerőgépek működésének és korlátainak megértéséhez elengedhetetlenek.",
    content_markdown: `
## A termodinamikai rendszer és állapotjelzők

A termodinamikában egy vizsgált anyagmennyiséget (pl. egy gázt egy hengerben) **rendszernek** nevezünk, amelynek állapotát az **állapotjelzők** (nyomás, térfogat, hőmérséklet, anyagmennyiség) írják le. A rendszer és környezete között hő (Q) és munka (W) formájában történhet energiacsere.

## A termodinamika I. főtétele — az energiamegmaradás törvénye

A termodinamika I. főtétele az energiamegmaradás törvényének általános megfogalmazása hőtani folyamatokra:

**ΔU = Q − W**

ahol ΔU a rendszer **belső energiájának** megváltozása, Q a rendszer által felvett hő (ha lead hőt, negatív), W a rendszer által a környezeten végzett munka (ha a környezet végez munkát a rendszeren, negatív). Azaz: a rendszerbe bevitt hő részben a belső energiát növeli, részben munkavégzésre használódik fel.

Speciális esetek:
- **Izochor folyamat** (állandó térfogat): a gáz nem végez térfogati munkát (W = 0), így ΔU = Q.
- **Izoterm folyamat** (állandó hőmérséklet, ideális gáznál): a belső energia nem változik (ΔU = 0), így Q = W.
- **Adiabatikus folyamat**: nincs hőcsere a környezettel (Q = 0), így ΔU = −W.

## A termodinamika II. főtétele — a folyamatok iránya

A termodinamika II. főtétele azt fejezi ki, hogy a természetes folyamatok **spontán módon csak egy meghatározott irányban** mennek végbe: hő önként csak a melegebb testtől a hidegebb felé áramlik, soha nem fordítva (külső munkavégzés, pl. hűtőgép nélkül). Ezzel összefüggő megfogalmazás: **nem lehet olyan periodikusan működő hőerőgépet készíteni, amely a felvett hőt teljes egészében munkává alakítja** — egy hőerőgép mindig lead hőt egy hidegebb "hűtőnek" is.

A II. főtétel az **entrópia (S)**, a rendezetlenség mértékének fogalmával is megfogalmazható: egy zárt rendszer entrópiája spontán folyamatokban soha nem csökkenhet, csak nőhet vagy (ideális, reverzibilis esetben) állandó maradhat.

## Hőerőgépek és hatásfok

A **hőerőgép** egy melegebb hőtartályból (T_meleg) hőt vesz fel, ennek egy részét munkává alakítja, a maradékot pedig egy hidegebb hőtartálynak (T_hideg) adja le. A hőerőgép **hatásfoka**:

**η = W / Q_felvett = (Q_felvett − Q_leadott) / Q_felvett**

Az elméletileg elérhető legnagyobb hatásfokot (adott T_meleg és T_hideg hőtartályok között) a **Carnot-hatásfok** adja meg:

**η_Carnot = 1 − T_hideg / T_meleg**

(a hőmérsékleteket kelvinben kell behelyettesíteni) — ez azt mutatja, hogy 100%-os hatásfokú hőerőgép csak T_hideg = 0 K esetén létezhetne, amely fizikailag elérhetetlen (ez a **termodinamika III. főtételéhez** vezet, amely szerint az abszolút nulla fok gyakorlatilag nem érhető el véges lépésben).

## Példa levezetés

Egy hőerőgép 800 K-es forrásból vesz fel hőt, és 320 K-es hűtőnek ad le hőt. Mekkora a Carnot-hatásfok, amelyet ez a gép elméletileg elérhetne?

1. η_Carnot = 1 − T_hideg/T_meleg = 1 − 320/800 = 1 − 0,4 = **0,6, azaz 60%**.
`,
    key_concepts: [
      "belső energia és a termodinamika I. főtétele: ΔU = Q − W",
      "izochor, izoterm, adiabatikus folyamat",
      "termodinamika II. főtétele és az entrópia",
      "hőerőgép és hatásfoka",
      "Carnot-hatásfok",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki a termodinamika I. főtétele?",
        options: [
          "a rendszer belső energiájának megváltozása a felvett hő és a végzett munka különbsége",
          "a hő önként csak hidegtől meleg felé áramolhat",
          "az entrópia soha nem nőhet",
          "az abszolút nulla fok elérhető véges lépésben",
        ],
        correct_answer: "a rendszer belső energiájának megváltozása a felvett hő és a végzett munka különbsége",
        explanation: "A termodinamika I. főtétele: ΔU = Q − W, az energiamegmaradás törvényének hőtani megfogalmazása.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Adiabatikus folyamatban (Q = 0) mi igaz a belső energia változására?",
        options: [
          "ΔU = −W, azaz a belső energia a végzett munka ellentettjével egyezik meg",
          "ΔU = 0 mindig",
          "ΔU = Q mindig",
          "a belső energia nem definiálható adiabatikus folyamatban",
        ],
        correct_answer: "ΔU = −W, azaz a belső energia a végzett munka ellentettjével egyezik meg",
        explanation: "Ha Q = 0, az I. főtételből ΔU = Q − W = −W, tehát a rendszer belső energiája a rajta/általa végzett munka rovására (vagy javára) változik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit állít a termodinamika II. főtétele a hő önkéntes (spontán) áramlásának irányáról?",
        options: [
          "hő önként csak a melegebb testtől a hidegebb felé áramlik",
          "hő önként csak a hidegebb testtől a melegebb felé áramlik",
          "a hő áramlásának iránya véletlenszerű",
          "hő csak akkor áramlik, ha munkát végzünk",
        ],
        correct_answer: "hő önként csak a melegebb testtől a hidegebb felé áramlik",
        explanation: "A II. főtétel szerint a hő spontán módon csak a melegebb testtől a hidegebb felé áramlik, ellentétes irányú áramláshoz külső munkavégzés (pl. hűtőgép) szükséges.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy hőerőgép 1000 J hőt vesz fel, és eközben 350 J munkát végez. Mekkora a hatásfoka?",
        options: ["35%", "65%", "100%", "28,6%"],
        correct_answer: "35%",
        explanation: "η = W/Q_felvett = 350/1000 = 0,35 = 35%.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy hőerőgép 600 K-es forrás és 300 K-es hűtő között működik. Mekkora az elméleti (Carnot-) hatásfoka, és miért nem érhető el 100%-os hatásfok?",
        options: [
          "50%, mert 100%-os hatásfok csak 0 K-es hűtő esetén lenne elérhető, amely gyakorlatilag elérhetetlen",
          "100%, mert a hőmérséklet-különbség elég nagy",
          "0%, mert a hőerőgép nem tud munkát végezni",
          "50%, mert a hűtő hőmérséklete mindig egyenlő a forrás hőmérsékletével",
        ],
        correct_answer: "50%, mert 100%-os hatásfok csak 0 K-es hűtő esetén lenne elérhető, amely gyakorlatilag elérhetetlen",
        explanation: "η_Carnot = 1 − 300/600 = 0,5 = 50%; 100%-os hatásfok csak T_hideg = 0 K esetén lenne elméletileg elérhető, ami a termodinamika III. főtétele szerint gyakorlatilag nem érhető el.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "elektrosztatika-coulomb-torveny-elektromos-mezo",
    title: "Elektrosztatika — Coulomb-törvény, elektromos mező",
    level: "mindketto",
    theme: "Elektromosság",
    order_index: 14,
    summary_markdown:
      "Az elektrosztatika a nyugalomban lévő elektromos töltésekkel és a köztük ható erőkkel, valamint az elektromos mező fogalmával foglalkozik, amelynek alapja a Coulomb-törvény.",
    content_markdown: `
## Az elektromos töltés

Az **elektromos töltés** az anyag egyik alapvető tulajdonsága, kétféle: **pozitív** és **negatív**. Az azonos előjelű töltések taszítják, az ellentétes előjelűek vonzzák egymást. A töltés mértékegysége a **coulomb [C]**, és a töltés mindig egy elemi töltés (e ≈ 1,602 · 10⁻¹⁹ C) egész számú többszöröse (**a töltés kvantált**). Zárt rendszerben a **teljes töltés megmarad** (töltésmegmaradás törvénye).

## Coulomb törvénye

Két pontszerű töltés (Q₁ és Q₂) között ható elektromos erő nagysága egyenesen arányos a töltések szorzatával, és fordítottan arányos a köztük lévő távolság négyzetével:

**F = k · (|Q₁| · |Q₂|) / r²**

ahol k ≈ 9 · 10⁹ N·m²/C² (vákuumban/levegőben) a **Coulomb-állandó**. Az erő azonos előjelű töltéseknél taszító, ellentétes előjelűeknél vonzó, és — hasonlóan a gravitációhoz — a hatás-ellenhatás törvénye szerint páronként azonos nagyságú, ellentétes irányú.

## Az elektromos mező (térerősség)

Egy töltés körül **elektromos mező** (tér) alakul ki, amely más töltésekre erőt fejt ki. Az elektromos mező jellemzésére az **elektromos térerősséget (E)** használjuk, amely megadja, hogy egységnyi (pozitív) próbatöltésre mekkora erő hatna a mező egy adott pontjában:

**E = F / q**  [N/C, illetve V/m]

Egy Q ponttöltés által r távolságban létrehozott térerősség: **E = k · Q / r²**.

## Térerősségvonalak (erővonalak)

A mezőt szemléletesen **erővonalakkal** ábrázoljuk, amelyek jellemzői: pozitív töltésből indulnak ki, negatívba futnak be, sűrűségük az adott helyen a térerősség nagyságával arányos, és soha nem metszik egymást (egy pontban csak egy térerősség-érték lehet). Homogén (állandó nagyságú és irányú) mezőt egyenletesen sűrű, párhuzamos erővonalak jellemeznek — ilyen mező található két, ellentétesen töltött, párhuzamos síklap (kondenzátor) között.

## A szuperpozíció elve

Ha egy adott pontban több töltés mezője is hat, az eredő térerősség (és erő) a **vektoriális összegzéssel (szuperpozícióval)** adódik: minden töltés úgy hat, mintha a másik nem lenne jelen, és a végén a hatásokat vektorosan összeadjuk.

## Példa levezetés

Két pontszerű töltés, Q₁ = 4 · 10⁻⁶ C és Q₂ = −2 · 10⁻⁶ C, egymástól 0,3 m távolságra van. Mekkora közöttük az erő, és milyen jellegű (vonzó/taszító)?

1. F = k·|Q₁·Q₂|/r² = 9·10⁹ · (4·10⁻⁶ · 2·10⁻⁶) / 0,09
2. F = 9·10⁹ · 8·10⁻¹² / 0,09 = 72·10⁻³ / 0,09 = **0,8 N**
3. Mivel a töltések ellentétes előjelűek, az erő **vonzó** jellegű.
`,
    key_concepts: [
      "elektromos töltés, töltésmegmaradás",
      "Coulomb-törvény: F = k·Q₁Q₂/r²",
      "elektromos térerősség: E = F/q",
      "erővonalak és homogén mező",
      "a szuperpozíció elve",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit állít Coulomb törvénye a két ponttöltés közötti erőről?",
        options: [
          "egyenesen arányos a töltések szorzatával, fordítottan a távolság négyzetével",
          "csak a nagyobb töltéstől függ",
          "fordítottan arányos a töltések szorzatával",
          "független a töltések nagyságától",
        ],
        correct_answer: "egyenesen arányos a töltések szorzatával, fordítottan a távolság négyzetével",
        explanation: "F = k·|Q₁Q₂|/r², tehát az erő a töltések szorzatával egyenesen, a távolság négyzetével fordítottan arányos.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki az elektromos térerősség (E)?",
        options: [
          "az egységnyi próbatöltésre ható erőt egy adott pontban",
          "a töltés nagyságát",
          "az elektromos mező hőmérsékletét",
          "a Coulomb-állandó értékét",
        ],
        correct_answer: "az egységnyi próbatöltésre ható erőt egy adott pontban",
        explanation: "E = F/q, azaz a térerősség az egységnyi pozitív próbatöltésre ható erőt adja meg az adott pontban.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem metszhetik egymást az elektromos erővonalak?",
        options: [
          "mert egy adott pontban a térerősségnek egyetlen, meghatározott iránya és nagysága van",
          "mert az erővonalak mindig egyenesek",
          "mert csak pozitív töltésekből indulhatnak ki",
          "valójában metszhetik egymást",
        ],
        correct_answer: "mert egy adott pontban a térerősségnek egyetlen, meghatározott iránya és nagysága van",
        explanation: "Ha az erővonalak metszenék egymást, a metszéspontban két különböző térerősség-irány adódna, ami fizikailag nem lehetséges egy adott pontban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy pontszerű töltés 2 m távolságban 500 N/C térerősséget kelt. Mekkora a térerősség 4 m távolságban?",
        options: ["125 N/C", "250 N/C", "1000 N/C", "62,5 N/C"],
        correct_answer: "125 N/C",
        explanation: "E fordítottan arányos r²-tel: a távolság duplázásakor a térerősség a negyedére csökken, 500/4 = 125 N/C.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két azonos előjelű, egyenként 3·10⁻⁶ C töltés 0,1 m távolságra van egymástól. Mekkora a közöttük ható (taszító) erő (k = 9·10⁹ N·m²/C²)?",
        options: ["8,1 N", "0,81 N", "81 N", "0,081 N"],
        correct_answer: "8,1 N",
        explanation: "F = k·Q²/r² = 9·10⁹ · (3·10⁻⁶)² / 0,01 = 9·10⁹ · 9·10⁻¹² / 0,01 = 8,1·10⁻² / 0,01 = 8,1 N.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "elektromos-potencial-kapacitas-kondenzatorok",
    title: "Elektromos potenciál és kapacitás, kondenzátorok",
    level: "emelt",
    theme: "Elektromosság",
    order_index: 15,
    summary_markdown:
      "Az elektromos potenciál és feszültség az elektromos mező energetikai leírását adja, míg a kapacitás és a kondenzátorok a töltéstárolás fizikai eszközét és korlátait mutatják be.",
    content_markdown: `
## Elektromos potenciális energia és potenciál

Egy töltés az elektromos mezőben helyzetétől függő **elektromos potenciális energiával** rendelkezik, hasonlóan a gravitációs helyzeti energiához. Az **elektromos potenciál (V)** egy adott pontban az egységnyi töltésre jutó potenciális energia:

**V = E_pot / q**  [V, volt = J/C]

A potenciál skalármennyiség, és mindig egy választott **nullaszinthez (referenciaponthoz)** viszonyítva értelmezzük.

## Feszültség

A **feszültség (U)** két pont közötti potenciálkülönbség:

**U = V₁ − V₂**

A feszültség fejezi ki, mekkora munkát végez (vagy mekkora energiát ad át) az elektromos mező, amikor egységnyi töltés az egyik pontból a másikba mozog: **W = q · U**. Homogén mezőben a térerősség és a feszültség kapcsolata: **U = E · d**, ahol d a mezővel párhuzamos elmozdulás (pl. két kondenzátorlap közötti távolság).

## Kapacitás

A **kapacitás (C)** egy vezető (vagy egy kondenzátor) azon képességét jellemzi, mennyi töltést képes tárolni egységnyi feszültség mellett:

**C = Q / U**  [F, farad = C/V]

A farad rendkívül nagy egység, a gyakorlatban jellemzően mikrofarad (μF), nanofarad (nF) vagy pikofarad (pF) nagyságrendű kapacitásokkal találkozunk.

## A síkkondenzátor

A **síkkondenzátor** két egymással párhuzamos, ellentétesen feltöltött fémlapból áll. Kapacitása:

**C = ε₀ · ε_r · A / d**

ahol ε₀ a vákuum permittivitása, ε_r a lapok közötti szigetelő (dielektrikum) relatív permittivitása (vákuumban/levegőben ε_r ≈ 1), A a lapok átfedő területe, d a lapok közötti távolság. Ebből látható, hogy a kapacitás **nagyobb lapfelületnél és kisebb lapközti távolságnál nagyobb**, és **dielektrikum** (pl. papír, kerámia) beillesztésével tovább növelhető.

## A kondenzátorban tárolt energia

A feltöltött kondenzátor elektromos energiát tárol:

**E = ½ · C · U² = ½ · Q · U = Q² / (2C)**

Ez az energia a kondenzátor lapjai közötti elektromos mezőben "van eltárolva", és kisütéskor (pl. egy áramkörben) felszabadul — ezen alapul többek között a vaku, a defibrillátor és sok elektronikai áramkör működése.

## Példa levezetés

Egy síkkondenzátor kapacitása 20 μF, feszültsége 100 V. Mennyi töltést tárol, és mennyi energiát tartalmaz?

1. Q = C·U = 20·10⁻⁶ · 100 = **2·10⁻³ C = 2 mC**
2. E = ½·C·U² = ½ · 20·10⁻⁶ · 10 000 = **0,1 J**
`,
    key_concepts: [
      "elektromos potenciál és potenciális energia",
      "feszültség: U = V₁ − V₂, W = q·U",
      "kapacitás: C = Q/U",
      "síkkondenzátor kapacitása",
      "kondenzátorban tárolt energia: E = ½CU²",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki a két pont közötti feszültség (U)?",
        options: [
          "a két pont közötti potenciálkülönbséget",
          "az egyik pontban lévő töltés nagyságát",
          "a mező erővonalainak számát",
          "a kapacitás értékét",
        ],
        correct_answer: "a két pont közötti potenciálkülönbséget",
        explanation: "A feszültség (U) két pont közötti potenciálkülönbség: U = V₁ − V₂.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy kondenzátor 50 V feszültségen 0,5 C töltést tárol. Mekkora a kapacitása?",
        options: ["0,01 F", "25 F", "100 F", "0,1 F"],
        correct_answer: "0,01 F",
        explanation: "C = Q/U = 0,5/50 = 0,01 F.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan változik egy síkkondenzátor kapacitása, ha a lapok közötti távolságot felére csökkentjük (minden más állandó)?",
        options: ["kétszeresére nő", "felére csökken", "nem változik", "négyszeresére nő"],
        correct_answer: "kétszeresére nő",
        explanation: "C = ε₀ε_rA/d, ezért d felezésekor a kapacitás a duplájára nő.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért növeli meg egy dielektrikum (pl. kerámia) beillesztése egy kondenzátor kapacitását?",
        options: [
          "mert a dielektrikum relatív permittivitása (ε_r) nagyobb, mint 1, ami közvetlenül növeli a kapacitást",
          "mert a dielektrikum megnöveli a lapok területét",
          "mert a dielektrikum csökkenti a lapok közötti távolságot",
          "a dielektrikum valójában csökkenti a kapacitást",
        ],
        correct_answer: "mert a dielektrikum relatív permittivitása (ε_r) nagyobb, mint 1, ami közvetlenül növeli a kapacitást",
        explanation: "C = ε₀ε_rA/d; a dielektrikumok ε_r értéke nagyobb, mint a vákuumé/levegőé (ε_r ≈ 1), ezért beillesztésük arányosan növeli a kapacitást.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 100 μF kapacitású kondenzátort 200 V feszültségre töltünk fel. Mennyi energiát tárol?",
        options: ["2 J", "20 000 J", "0,02 J", "200 J"],
        correct_answer: "2 J",
        explanation: "E = ½CU² = ½ · 100·10⁻⁶ · 200² = ½ · 100·10⁻⁶ · 40000 = ½ · 4 = 2 J.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "egyenaramu-aramkorok-ohm-kirchhoff",
    title: "Egyenáramú áramkörök — Ohm törvénye, Kirchhoff-törvények",
    level: "mindketto",
    theme: "Elektromosság",
    order_index: 16,
    summary_markdown:
      "Az egyenáramú áramkörök leírásának alapja Ohm törvénye, valamint a soros és párhuzamos kapcsolások, illetve az összetettebb áramkörök megoldásához szükséges Kirchhoff-törvények.",
    content_markdown: `
## Az elektromos áram és Ohm törvénye

Az **elektromos áram (I)** a töltések rendezett mozgása egy vezetőben, mértéke az egységnyi idő alatt egy keresztmetszeten átáramló töltés: **I = Q / t** [A, amper]. **Ohm törvénye** szerint egy fémes vezetőn átfolyó áramerősség egyenesen arányos a rá kapcsolt feszültséggel:

**U = I · R**, azaz **R = U / I**

ahol R a vezető **ellenállása** [Ω, ohm]. Az ellenállás egy vezető anyagi és geometriai tulajdonságaitól függ: **R = ρ · l / A**, ahol ρ a fajlagos ellenállás, l a vezető hossza, A a keresztmetszete — hosszabb és vékonyabb vezetőnek nagyobb az ellenállása.

## Soros kapcsolás

Sorosan kapcsolt ellenállásoknál (egymás után, egyetlen áramútban):

- Az áramerősség minden ellenálláson **azonos**: I₁ = I₂ = ... = I.
- Az eredő feszültség az egyes feszültségek **összege**: U = U₁ + U₂ + ...
- Az eredő ellenállás az egyes ellenállások **összege**: **R_e = R₁ + R₂ + ...**

## Párhuzamos kapcsolás

Párhuzamosan kapcsolt ellenállásoknál (közös két csomópont között):

- A feszültség minden ellenálláson **azonos**: U₁ = U₂ = ... = U.
- Az eredő áramerősség az egyes áramerősségek **összege**: I = I₁ + I₂ + ...
- Az eredő ellenállás reciproka az egyes ellenállások reciprokának összege: **1/R_e = 1/R₁ + 1/R₂ + ...**

Ebből következik, hogy a párhuzamosan kapcsolt eredő ellenállás mindig **kisebb**, mint a legkisebb egyedi ellenállás.

## Kirchhoff törvényei

Bonyolultabb (elágazó) áramkörök megoldásához **Kirchhoff két törvényét** alkalmazzuk:

1. **Kirchhoff csomóponti (I.) törvénye**: egy csomópontba befutó áramok összege megegyezik a csomópontból kifutó áramok összegével (a töltésmegmaradás következménye): **ΣI_be = ΣI_ki**.
2. **Kirchhoff huroktörvénye (II. törvénye)**: egy zárt hurok (áramkör-részlet) mentén körbejárva a feszültségforrások (elektromotoros erők) összege megegyezik az ellenállásokon eső feszültségek (feszültségesések) összegével — ez az energiamegmaradás elve az áramkörökre.

## Belső ellenállás és a valódi feszültségforrás

A valóságos feszültségforrásoknak (telepeknek, akkumulátoroknak) van **belső ellenállásuk (r)** is, ezért terhelés (áramfolyás) esetén a kapcsokon mérhető feszültség kisebb, mint az ideális **elektromotoros erő (ε)**:

**U_kapocs = ε − I · r**

Ez magyarázza, miért csökken egy lemerülő akkumulátor kapocsfeszültsége nagy áramfelvétel esetén jelentősebben.

## Példa levezetés

Egy 12 V-os telepre (belső ellenállás elhanyagolható) sorosan kapcsolunk egy 4 Ω-os és egy 8 Ω-os ellenállást. Mekkora az áramerősség, és mekkora feszültség esik a 8 Ω-os ellenálláson?

1. Eredő ellenállás: R_e = 4 + 8 = 12 Ω
2. Áramerősség: I = U/R_e = 12/12 = 1 A
3. Feszültség a 8 Ω-on: U₈ = I·R₈ = 1·8 = **8 V**
`,
    key_concepts: [
      "elektromos áram és Ohm törvénye: U = I·R",
      "vezető ellenállása: R = ρl/A",
      "soros kapcsolás (R_e = R₁+R₂+...)",
      "párhuzamos kapcsolás (1/R_e = 1/R₁+1/R₂+...)",
      "Kirchhoff csomóponti és huroktörvénye",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit állít Ohm törvénye?",
        options: [
          "a vezetőn átfolyó áramerősség egyenesen arányos a rá kapcsolt feszültséggel",
          "a feszültség fordítottan arányos az áramerősséggel",
          "az ellenállás mindig állandó, függetlenül a vezető anyagától",
          "az áramerősség független a feszültségtől",
        ],
        correct_answer: "a vezetőn átfolyó áramerősség egyenesen arányos a rá kapcsolt feszültséggel",
        explanation: "Ohm törvénye: U = I·R, azaz állandó ellenállás mellett az áramerősség egyenesen arányos a feszültséggel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két 6 Ω-os ellenállást sorosan kapcsolunk. Mekkora az eredő ellenállás?",
        options: ["12 Ω", "3 Ω", "36 Ω", "6 Ω"],
        correct_answer: "12 Ω",
        explanation: "Soros kapcsolásnál R_e = R₁ + R₂ = 6 + 6 = 12 Ω.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két 6 Ω-os ellenállást párhuzamosan kapcsolunk. Mekkora az eredő ellenállás?",
        options: ["3 Ω", "12 Ω", "6 Ω", "0,33 Ω"],
        correct_answer: "3 Ω",
        explanation: "1/R_e = 1/6 + 1/6 = 2/6 = 1/3 ⟹ R_e = 3 Ω.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki Kirchhoff csomóponti törvénye?",
        options: [
          "egy csomópontba befutó áramok összege megegyezik a kifutó áramok összegével",
          "egy hurokban a feszültségek összege mindig nulla",
          "az ellenállás fordítottan arányos a hosszal",
          "a párhuzamos kapcsolás eredő ellenállása nagyobb, mint bármelyik tag",
        ],
        correct_answer: "egy csomópontba befutó áramok összege megegyezik a kifutó áramok összegével",
        explanation: "Kirchhoff csomóponti törvénye a töltésmegmaradás következménye: ΣI_be = ΣI_ki egy adott csomópontban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 10 V elektromotoros erejű, 1 Ω belső ellenállású telepről 2 A áram folyik. Mekkora a kapocsfeszültség?",
        options: ["8 V", "10 V", "12 V", "2 V"],
        correct_answer: "8 V",
        explanation: "U_kapocs = ε − I·r = 10 − 2·1 = 8 V.",
        difficulty: 3,
      },
    ],
  },
];
