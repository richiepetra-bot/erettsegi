import type { TopicSeed } from "./angol";

export const biologiaSejtszintuTopics: TopicSeed[] = [
  {
    slug: "biologia-tudomanya-es-kutatasi-modszerei",
    title: "A biológia tudománya és kutatási módszerei",
    level: "mindketto",
    theme: "Bevezetés a biológiába",
    order_index: 1,
    summary_markdown:
      "A biológia az élővilágot vizsgáló természettudomány, amely megfigyelésre, kísérletezésre és modellalkotásra épül. A tétel bemutatja a biológiai szerveződés szintjeit és a tudományos megismerés módszertani lépéseit.",
    content_markdown: `
## Mi a biológia és mit vizsgál?

A **biológia** (élettudomány) az élőlényeket, azok felépítését, működését, fejlődését, egymással és környezetükkel való kapcsolatát vizsgáló természettudomány. Interdiszciplináris tudomány: szorosan kapcsolódik a kémiához (biokémia), a fizikához (biofizika), a földtudományokhoz (ökológia) és az orvostudományhoz. Fő ágai közé tartozik a **sejtbiológia**, a **genetika**, az **élettan (fiziológia)**, a **rendszertan (taxonómia)**, az **ökológia** és az **evolúcióbiológia**.

## A biológiai szerveződés szintjei

Az élővilág hierarchikusan, egymásra épülő szerveződési szinteken vizsgálható, a legkisebb egységtől a legnagyobbig:

| Szint | Jellemző példa |
|---|---|
| Molekuláris szint | DNS, fehérjék, biomembránok |
| Sejtszint | Baktériumsejt, emberi idegsejt |
| Szövet | Izomszövet, hámszövet |
| Szerv | Szív, levél |
| Szervrendszer | Keringési rendszer |
| Egyed (organizmus) | Egy adott ember, egy fa |
| Populáció | Egy tó pontyai együtt |
| Életközösség (biocönózis) | Egy erdő összes élőlénye |
| Ökoszisztéma | Életközösség + élettelen környezet |
| Bioszféra | A Föld összes élőlénye és élettere |

Minden magasabb szint új, **emergens** tulajdonságokkal rendelkezik, amelyek az alacsonyabb szinten önmagukban nem jelennek meg (pl. egy sejt önmagában nem "gondolkodik", de sok idegsejt együttműködése idegrendszert, végül tudatot eredményezhet).

## A tudományos megismerés módszerei

A biológiai kutatás jellemző lépései:

1. **Megfigyelés** – jelenség rögzítése, adatok gyűjtése.
2. **Kérdésfeltevés és hipotézisalkotás** – a jelenségre adott, ellenőrizhető, cáfolható magyarázat megfogalmazása.
3. **Kísérlet tervezése és lefolytatása** – a hipotézis teszteléséhez kontrollált körülmények szükségesek. A **kísérleti csoport** azt a beavatkozást kapja, amit vizsgálunk, a **kontrollcsoport** nem — csak így dönthető el, hogy a megfigyelt hatást valóban a vizsgált tényező (**független változó**) okozta-e, és nem egy másik, zavaró tényező.
4. **Adatok elemzése, statisztikai értékelése.**
5. **Következtetés levonása** – a hipotézis megerősítést kap, vagy elvetjük/módosítjuk.
6. Sok, egymást megerősítő, jól alátámasztott hipotézisből állhat össze egy **tudományos elmélet** (pl. sejtelmélet, evolúcióelmélet) — ez a köznyelvi "elmélettel" ellentétben nem feltételezés, hanem széles körű bizonyítékokkal alátámasztott, magyarázó erejű rendszer.

## Vizsgálati eszközök

A sejtszintű vizsgálatok fő eszköze a **mikroszkóp**. A **fénymikroszkóp** látható fényt használ, felbontása kb. 200 nanométer, így sejtek, sejtmagok, egyes organellumok láthatók vele. Az **elektronmikroszkóp** elektronsugárral dolgozik, ennek hullámhossza sokkal kisebb, így a felbontása is jóval jobb (akár 0,1-1 nanométer) — ezzel a membránok finomszerkezete, vírusok, riboszómák is megfigyelhetők. Az élő szövetek vizsgálatában emellett fontos szerepe van a **festéstechnikáknak**, a **centrifugálásnak** (sejtalkotók szétválasztására) és napjainkban a **molekuláris genetikai módszereknek** (pl. DNS-szekvenálás).

## Tudománytörténeti mérföldkövek

- **1665** – Robert Hooke elsőként figyeli meg és nevezi el a "sejtet" (parafa metszetén).
- **1838–1839** – Matthias Schleiden és Theodor Schwann megfogalmazzák a **sejtelméletet**: minden élőlény sejtekből épül fel.
- **1859** – Charles Darwin kiadja *A fajok eredete* című művét, megalapozva az evolúcióelméletet.
- **1865** – Gregor Mendel közli az öröklődés törvényeit.
- **1953** – James Watson és Francis Crick (Rosalind Franklin röntgendiffrakciós adatai alapján) leírja a DNS kettős hélix szerkezetét.
- **2003** – lezárul az emberi genom teljes szekvenálása (Human Genome Project).
`,
    key_concepts: [
      "biológiai szerveződési szintek",
      "hipotézis és tudományos elmélet",
      "kísérleti csoport és kontrollcsoport",
      "fénymikroszkóp és elektronmikroszkóp",
      "sejtelmélet",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik szerveződési szint áll a sejt és a szerv között?",
        options: ["szövet", "szervrendszer", "populáció", "biomolekula"],
        correct_answer: "szövet",
        explanation:
          "A hierarchia: molekula → sejt → szövet → szerv → szervrendszer → egyed, tehát a sejt és a szerv között a szövet szintje található.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a kontrollcsoport szerepe egy biológiai kísérletben?",
        options: [
          "Kizárja, hogy a megfigyelt hatást a vizsgált tényezőn kívül más ok okozza",
          "Megnöveli a kísérlet mintaszámát",
          "Helyettesíti a hipotézist",
          "Csak a kísérleti csoport eredményeit ismétli meg",
        ],
        correct_answer: "Kizárja, hogy a megfigyelt hatást a vizsgált tényezőn kívül más ok okozza",
        explanation:
          "A kontrollcsoport nem kapja meg a vizsgált beavatkozást, így a kísérleti és kontrollcsoport eredményének összevetésével igazolható, hogy a különbséget valóban a független változó okozta.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki(k) fogalmazták meg a sejtelméletet 1838–39-ben?",
        options: [
          "Schleiden és Schwann",
          "Watson és Crick",
          "Darwin és Wallace",
          "Mendel és Hooke",
        ],
        correct_answer: "Schleiden és Schwann",
        explanation:
          "Matthias Schleiden (növénytan) és Theodor Schwann (állattan) fogalmazták meg együtt, hogy minden élőlény sejtekből épül fel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért van jobb felbontása az elektronmikroszkópnak a fénymikroszkópnál?",
        options: [
          "Az elektronok hullámhossza jóval kisebb, mint a látható fény hullámhossza",
          "Az elektronmikroszkóp élő sejteket vizsgál",
          "Az elektronmikroszkóp nagyobb nagyítást csak azért ér el, mert erősebb lámpát használ",
          "A fénymikroszkóp csak fekete-fehér képet ad",
        ],
        correct_answer: "Az elektronok hullámhossza jóval kisebb, mint a látható fény hullámhossza",
        explanation:
          "A felbontóképesség a használt sugárzás hullámhosszától függ; az elektronsugár hullámhossza sokkal kisebb, mint a látható fényé, ezért sokkal apróbb szerkezetek is láthatók vele.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Melyik állítás írja le helyesen a tudományos elmélet fogalmát a köznyelvi 'elmélet' szóhoz képest?",
        options: [
          "A tudományos elmélet sok, egymást megerősítő bizonyítékkal alátámasztott, magyarázó erejű rendszer, nem puszta feltételezés",
          "A tudományos elmélet egyetlen kísérlet eredménye, amit soha nem lehet felülvizsgálni",
          "A tudományos elmélet ugyanaz, mint a hipotézis, csak hosszabb megfogalmazásban",
          "A tudományos elmélet mindig matematikai bizonyítást jelent, kísérlet nélkül",
        ],
        correct_answer:
          "A tudományos elmélet sok, egymást megerősítő bizonyítékkal alátámasztott, magyarázó erejű rendszer, nem puszta feltételezés",
        explanation:
          "A hipotézis egy tesztelhető feltevés, míg a tudományos elmélet (pl. evolúcióelmélet, sejtelmélet) számos független bizonyítékvonal által alátámasztott, széles körű magyarázó rendszer.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "biogen-elemek-es-biomolekulak",
    title: "Biogén elemek és biomolekulák",
    level: "mindketto",
    theme: "Egyed alatti szerveződési szint",
    order_index: 2,
    summary_markdown:
      "Az élő szervezetek felépítésében néhány kémiai elem és négy nagy molekulacsoport — fehérjék, szénhidrátok, lipidek, nukleinsavak — meghatározó szerepet játszik. A tétel ezek szerkezetét és biológiai funkcióját tárgyalja.",
    content_markdown: `
## Biogén elemek

Az élő anyag felépítésében viszonylag kevés kémiai elem vesz részt nagy mennyiségben. A **makroelemek** (a testtömeg > 0,01%-át teszik ki) közé tartozik a szén (C), hidrogén (H), oxigén (O), nitrogén (N) — ezek négy alkotják a legtöbb biomolekula szénláncát és funkciós csoportjait —, valamint a foszfor (P), kén (S), kalcium (Ca), kálium (K), nátrium (Na), klór (Cl) és magnézium (Mg). A **mikroelemek** (nyomelemek) kis mennyiségben, de nélkülözhetetlenül szükségesek: pl. vas (Fe, hemoglobin), jód (I, pajzsmirigyhormon), cink (Zn), réz (Cu), mangán (Mn). A szén kiemelt jelentőségű, mert négy kovalens kötést képes létesíteni, hosszú láncokat, gyűrűket alkotva — ez adja a szerves kémia és az élet molekuláris sokféleségének alapját.

## A víz biológiai szerepe

A víz az élő sejtek legnagyobb tömegű alkotója (kb. 60-70%). Poláris molekula, hidrogénkötéseket képez, ez magyarázza magas fajhőjét (hőmérséklet-stabilizáló hatás), jó oldóképességét (poláris és ionos anyagokra), valamint kohézióját (pl. vízszállítás a növényekben). A víz maga is résztvevője biokémiai reakcióknak (hidrolízis, kondenzáció).

## Szénhidrátok

A szénhidrátok elsődleges funkciója az **energiaraktározás** és a **szerkezeti támasz**. Építőkövük a **monoszacharid** (pl. glükóz, fruktóz — C6H12O6). Két monoszacharid **kondenzációs (vízvesztéssel járó) reakcióval** kapcsolódva **diszacharidot** alkot (pl. glükóz + fruktóz → szacharóz, glükóz + galaktóz → laktóz). Sok monoszacharid-egység láncba fűződve **poliszacharidot** hoz létre: a **keményítő** és a **glikogén** raktározó poliszacharidok (növényi, illetve állati/gombasejtekben), a **cellulóz** a növényi sejtfal szerkezeti poliszacharidja, a **kitin** pedig a gombák sejtfalát és a rovarok külső kitikuláját erősíti.

## Lipidek (zsírok)

A lipidek vízben nem, apoláris oldószerekben oldódó molekulák. A **zsírok és olajok (triglicerid)** egy glicerin és három zsírsav észterkötésű kapcsolódásából állnak; fő funkciójuk a hosszú távú energiaraktározás (1 gramm zsír kb. kétszer annyi energiát tartalmaz, mint 1 gramm szénhidrát) és a hőszigetelés. A **foszfolipidek** a biológiai membránok alapvető építőkövei: egy poláris (hidrofil) "fej" és két apoláris (hidrofób) "farok" részből állnak, ezért vízben kettős réteget (lipid biréteget) alkotnak. A **szteroidok** (pl. koleszterin, nemi hormonok) gyűrűs szerkezetű lipidek.

## Fehérjék

A fehérjék az élet legváltozatosabb funkciójú molekulái: enzimek, szerkezeti elemek (kollagén, keratin), szállítófehérjék (hemoglobin), mozgásfehérjék (aktin, miozin), antitestek, hormonok (pl. inzulin). Építőkövük a **20 féle aminosav**, amelyek közös szerkezeti eleme egy központi szénatom, amin egy amino- (-NH2) és egy karboxilcsoport (-COOH), valamint egy oldallánc (R-csoport) található — az oldallánc adja az aminosavak eltérő tulajdonságait (poláris, apoláris, savas, bázikus). Az aminosavak **peptidkötéssel** kapcsolódnak polipeptidláncba. A fehérjéknek négy szerkezeti szintje van:

1. **Primer szerkezet** – az aminosavak sorrendje a láncban.
2. **Szekunder szerkezet** – lokális, hidrogénkötésekkel stabilizált forma (α-hélix, β-redő).
3. **Tercier szerkezet** – a teljes polipeptidlánc térbeli, háromdimenziós elrendeződése.
4. **Kvaterner szerkezet** – több polipeptidlánc együttes, komplex szerkezete (pl. a hemoglobin négy alegységből áll).

A fehérje térszerkezete meghatározza a **funkcióját**; magas hőmérséklet, extrém pH vagy egyes kémiai anyagok hatására a fehérje **denaturálódhat**, elveszítve természetes térszerkezetét és funkcióját (pl. a tojásfehérje főzés hatására megkeményedik).

## Nukleinsavak

A nukleinsavak (**DNS** és **RNS**) az öröklődési információ tárolására és kifejezésére szolgálnak. Építőkövük a **nukleotid**, amely egy pentóz cukorból (dezoxiribóz DNS-ben, ribóz RNS-ben), egy foszfátcsoportból és egy nitrogéntartalmú bázisból áll. A DNS bázisai: adenin (A), timin (T), guanin (G), citozin (C); az RNS-ben a timint uracil (U) helyettesíti. A DNS kettős spirál (hélix) szerkezetű, a két szál komplementer bázispárokkal (A–T, G–C) kapcsolódik egymáshoz.
`,
    key_concepts: [
      "makroelemek és mikroelemek",
      "szénhidrátok (mono-, di-, poliszacharid)",
      "lipidek és a foszfolipid membrán",
      "fehérjék szerkezeti szintjei és denaturáció",
      "nukleotid felépítése",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik elem az, amely négy kovalens kötést képes kialakítani, és így az élő anyag szerves molekuláinak alapját adja?",
        options: ["szén (C)", "nitrogén (N)", "oxigén (O)", "kalcium (Ca)"],
        correct_answer: "szén (C)",
        explanation:
          "A szénatom négy vegyértékű, hosszú láncokat és gyűrűket képezhet, ezért ez a szerves (biológiai) molekulák szerkezeti alapja.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik poliszacharid a növényi sejtfal fő szerkezeti alkotója?",
        options: ["cellulóz", "glikogén", "keményítő", "kitin"],
        correct_answer: "cellulóz",
        explanation:
          "A cellulóz glükózegységekből felépülő, szilárdító szerepű poliszacharid, ez adja a növényi sejtfal rostos szerkezetét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Mi jellemzi a foszfolipidek elrendeződését a biológiai membránban?",
        options: [
          "A hidrofil fejek kifelé, a hidrofób farkak befelé néznek, kettős réteget alkotva",
          "A hidrofób farkak kifelé néznek a víz felé",
          "A foszfolipidek egyetlen réteget alkotnak, mindig egyirányban",
          "A foszfolipidek csak kovalens kötéssel kapcsolódnak fehérjékhez",
        ],
        correct_answer: "A hidrofil fejek kifelé, a hidrofób farkak befelé néznek, kettős réteget alkotva",
        explanation:
          "A vízkerülő (hidrofób) farkak egymás felé fordulnak, a vízkedvelő (hidrofil) fejek a vizes közeg (sejten belüli és kívüli folyadék) felé néznek — ez hozza létre a lipid biréteget.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a fehérje denaturációja?",
        options: [
          "A fehérje elveszíti természetes térszerkezetét, és ezzel funkcióját",
          "A fehérje két új aminosavat kapcsol a láncához",
          "A fehérje DNS-sé alakul át",
          "A fehérje vízmolekulákat épít be a peptidkötésbe",
        ],
        correct_answer: "A fehérje elveszíti természetes térszerkezetét, és ezzel funkcióját",
        explanation:
          "Magas hőmérséklet, extrém pH vagy kémiai hatás felbonthatja a másodlagos/harmadlagos szerkezetet stabilizáló kötéseket, így a fehérje szerkezete és funkciója elvész.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy polipeptidlánc négy alegysége kapcsolódik össze egy funkcionális egésszé (pl. a hemoglobinban). Melyik szerkezeti szintet írja le ez?",
        options: ["kvaterner szerkezet", "primer szerkezet", "szekunder szerkezet", "tercier szerkezet"],
        correct_answer: "kvaterner szerkezet",
        explanation:
          "A kvaterner szerkezet több, önálló tercier szerkezetű polipeptidlánc együttes, komplex elrendeződése — a hemoglobin négy alegységből álló fehérje.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-sejt-felepitese-prokariota-es-eukariota-sejt",
    title: "A sejt felépítése — prokarióta és eukarióta sejt",
    level: "mindketto",
    theme: "Egyed alatti szerveződési szint",
    order_index: 3,
    summary_markdown:
      "Minden élőlény sejtes felépítésű; a sejtek két nagy típusa a prokarióta és az eukarióta sejt, amelyek a genetikai állomány elhelyezkedésében és a belső membránrendszer meglétében térnek el egymástól.",
    content_markdown: `
## A sejtelmélet alaptételei

1. Minden élőlény egy vagy több sejtből áll.
2. A sejt az élet legkisebb, önálló életműködésre képes egysége.
3. Minden sejt egy már meglévő sejt osztódásából keletkezik.
4. A sejt hordozza az öröklődési (genetikai) információt.

## Prokarióta sejt

A **prokarióta** sejtekben (baktériumok, ősbaktériumok) nincs valódi, membránnal határolt sejtmag: a genetikai állomány (egy körkörös DNS-molekula, a **nukleoid** régióban) szabadon a citoplazmában található. Nincsenek membránnal határolt belső organellumok sem (mitokondrium, ER, Golgi). Jellemzőik:

- Mérete kicsi (kb. 1-10 µm).
- Sejtfaluk jellemzően **peptidoglikán** (murein) alapú.
- Riboszómáik kisebbek (70S), mint az eukariótáké.
- Sok baktériumnak van **ostora (flagellum)** a mozgáshoz, és **csillói (pilus)** a felülethez rögzüléshez, valamint **plazmidja** (kiegészítő, kör alakú DNS-darab).
- Anyagcseréjük rendkívül változatos (fotoszintetizálók, kemoszintetizálók, lebontók).

## Eukarióta sejt

Az **eukarióta** sejtekben (növények, állatok, gombák, protiszták) van valódi, kettős membránnal határolt **sejtmag**, amely tartalmazza a DNS-t (kromatin/kromoszóma formában). A citoplazmában membránnal határolt **organellumok** (sejtszervecskék) végzik a specializált funkciókat (mitokondrium, endoplazmatikus retikulum, Golgi-készülék, lizoszóma stb.) — ez a **kompartmentalizáció** lehetővé teszi, hogy egymással összeférhetetlen kémiai folyamatok is egy sejten belül, elkülönítve zajlódjanak. Az eukarióta sejt mérete jellemzően nagyobb (10-100 µm), riboszómái nagyobbak (80S).

## Növényi és állati sejt összehasonlítása

| Jellemző | Növényi sejt | Állati sejt |
|---|---|---|
| Sejtfal | van (cellulóz) | nincs |
| Vakuólum | nagy, központi | kicsi, ha van |
| Kloroplasztisz | van (zöld részekben) | nincs |
| Alak | szögletes, merev | változó (kerekded) |
| Centriólum | jellemzően nincs | van |

## A sejt méretének korlátai

A sejtek mérete azért korlátozott, mert a sejt anyagcseréjének intenzitása a **térfogattal**, az anyagszállítás (be- és kijutás) sebessége viszont a **felület nagyságával** arányos. Minél nagyobb egy sejt, annál kisebb a felület/térfogat arány, ami lassítja a diffúziós anyagszállítást — ezért a nagy sejtek (pl. petesejtek) gyakran speciális alkalmazkodással (pl. citoplazmaáramlás) küzdenek meg ezzel, a legtöbb sejt viszont mikrométeres tartományban marad.

## Vírusok helyzete a sejtelmélet szempontjából

A vírusok nem sejtes felépítésűek: nincs saját anyagcseréjük, nem tudnak önállóan osztódni, kizárólag élő sejt gépezetét felhasználva szaporodnak — ezért a sejtelmélet határesetének, illetve a "nem sejtes rendszerek" közé tartozó biológiai egységnek tekintjük őket (részletesen külön tételben).
`,
    key_concepts: [
      "sejtelmélet alaptételei",
      "prokarióta sejt (nukleoid, peptidoglikán sejtfal)",
      "eukarióta sejt és kompartmentalizáció",
      "növényi és állati sejt különbségei",
      "felület/térfogat arány",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő különbség a prokarióta és az eukarióta sejt között?",
        options: [
          "Az eukarióta sejtben van valódi, membránnal határolt sejtmag, a prokariótában nincs",
          "Csak a prokarióta sejtnek van sejtfala",
          "Az eukarióta sejt mindig kisebb a prokariótánál",
          "Csak az eukarióta sejtben van DNS",
        ],
        correct_answer: "Az eukarióta sejtben van valódi, membránnal határolt sejtmag, a prokariótában nincs",
        explanation:
          "A legfontosabb megkülönböztető jegy a valódi sejtmag megléte (eukarióta) vagy hiánya (prokarióta, ahol a DNS a nukleoid régióban van).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik sejtalkotó jellemző a növényi sejtre, de az állati sejtre nem?",
        options: ["kloroplasztisz és cellulóz sejtfal", "sejtmag", "riboszóma", "sejtmembrán"],
        correct_answer: "kloroplasztisz és cellulóz sejtfal",
        explanation:
          "A kloroplasztisz (fotoszintézis) és a cellulóz alapú sejtfal a növényi sejtek jellegzetes, az állati sejtekből hiányzó alkotói.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem nőhetnek a sejtek korlátlanul nagyra?",
        options: [
          "Mert a térfogat növekedésével a felület/térfogat arány csökken, ami lassítja az anyagszállítást",
          "Mert a sejtmembrán csak egy bizonyos súlyt bír el",
          "Mert a DNS mennyisége nem tud növekedni",
          "Mert a riboszómák száma állandó",
        ],
        correct_answer: "Mert a térfogat növekedésével a felület/térfogat arány csökken, ami lassítja az anyagszállítást",
        explanation:
          "A sejt anyagcsere-igénye a térfogattal, az anyagfelvétel/leadás lehetősége a felülettel arányos; nagy sejtben a relatíve kisebb felület nem tudja kiszolgálni a nagy térfogat igényét.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a plazmid egy baktériumsejtben?",
        options: [
          "Kis, kör alakú, kiegészítő DNS-molekula a fő genom mellett",
          "A sejtfal fő alkotórésze",
          "A riboszóma egyik alegysége",
          "A sejt mozgásáért felelős szervecske",
        ],
        correct_answer: "Kis, kör alakú, kiegészítő DNS-molekula a fő genom mellett",
        explanation:
          "A plazmid a fő (kromoszomális) DNS-től független, önmagában is replikálódni képes, gyakran hasznos géneket (pl. antibiotikum-rezisztenciát) hordozó DNS-molekula.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért tekinthetők a vírusok határesetnek a sejtelmélet szempontjából?",
        options: [
          "Nincs saját anyagcseréjük és önálló osztódási képességük, kizárólag gazdasejtben szaporodnak",
          "Mert túl nagyok, hogy sejtnek lehessen tekinteni őket",
          "Mert csak eukarióta sejtekben találhatók meg",
          "Mert nincs bennük semmilyen genetikai anyag",
        ],
        correct_answer: "Nincs saját anyagcseréjük és önálló osztódási képességük, kizárólag gazdasejtben szaporodnak",
        explanation:
          "A sejtelmélet szerint minden élő sejtből származik és önálló anyagcserével rendelkezik; a vírusok ennek nem felelnek meg, ezért nem sorolhatók a sejtes élővilágba.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "sejtmembran-es-anyagszallitas",
    title: "Sejtmembrán és anyagszállítás",
    level: "emelt",
    theme: "Egyed alatti szerveződési szint",
    order_index: 4,
    summary_markdown:
      "A sejtmembrán szelektíven áteresztő határfelület, amely a foszfolipid kettős rétegre épülő folyékony mozaik szerkezete alapján passzív és aktív mechanizmusokkal szabályozza az anyagok be- és kijutását a sejtbe.",
    content_markdown: `
## A folyékony mozaik modell

A sejtmembrán szerkezetét a **folyékony mozaik modell** írja le: egy foszfolipid kettősréteg, amelyben a lipidmolekulák oldalirányban szabadon mozoghatnak (ez adja a membrán "folyékony" jellegét), és amelybe különböző fehérjék ágyazódnak be (integrált fehérjék) vagy csak a felszínen kapcsolódnak hozzá (perifériás fehérjék) — ez adja a "mozaik" jelleget. A membránban emellett koleszterin molekulák (a membrán merevségét, stabilitását szabályozzák) és a külső felszínen szénhidrátláncok (glikoproteinek, glikolipidek — sejtfelismerésben, jelátvitelben szerepük van) is találhatók.

## A membránfehérjék funkciói

- **Transzportfehérjék** – csatornaként vagy hordozóként anyagok szállítását végzik (pl. csatornafehérjék, pumpák).
- **Receptorfehérjék** – jelmolekulák (hormonok) megkötése, jelátvitel.
- **Enzimek** – a membrán felszínén zajló kémiai reakciók katalizálása.
- **Sejtfelismerő és -kapcsoló fehérjék** – szövetekben a sejtek egymáshoz kapcsolódását biztosítják.

## Passzív transzportfolyamatok (energiaigény nélkül)

A **diffúzió** során az anyagok a nagyobb koncentrációjú helyről a kisebb koncentrációjú hely felé áramlanak, a koncentrációgrádiens mentén, energiafelhasználás nélkül, egészen a kiegyenlítődésig (dinamikus egyensúlyig). Kis, apoláris molekulák (O2, CO2) közvetlenül áthaladhatnak a lipidrétegen (**egyszerű diffúzió**), a poláris vagy töltéssel bíró anyagok (glükóz, ionok) csatorna- vagy hordozófehérjék segítségével jutnak át (**megkönnyített/facilitált diffúzió**).

Az **ozmózis** a víz speciális, féligáteresztő membránon át történő diffúziója: a víz a kisebb oldott anyag koncentrációjú (hipotóniás) oldat felől az oldott anyagban gazdagabb (hipertóniás) oldat felé mozog, amíg a koncentrációk kiegyenlítődnek (**izotóniás** állapot). Ez magyarázza, hogy egy növényi sejt hipertóniás oldatban vizet veszít és összezsugorodik (plazmolízis), míg hipotóniás oldatban vizet vesz fel és turgorossá válik.

## Aktív transzportfolyamatok (energiaigénnyel)

Az **aktív transzport** során a sejt ATP energiáját felhasználva a koncentrációgrádienssel **szemben** (kisebb koncentrációjú helyről nagyobb felé) szállít anyagokat, speciális pumpafehérjék (pl. Na⁺-K⁺-pumpa) segítségével. Ez teszi lehetővé pl. az idegsejtek membránpotenciáljának fenntartását.

Nagy méretű anyagok, illetve nagy mennyiségű anyag membránon keresztüli szállítására a sejt **hólyagos (vezikuláris) transzportot** alkalmaz:

- **Endocitózis** – a sejt a külső anyagot a membránjával körülzárva, hólyag formájában veszi fel (fagocitózis: szilárd részecske; pinocitózis: folyadékcsepp).
- **Exocitózis** – a sejten belüli hólyag membránja összeolvad a sejtmembránnal, tartalmát a sejten kívülre üríti (pl. hormonok, enzimek kiválasztása).

## A membrán szelektív áteresztő képessége

A sejtmembrán **szelektíven permeábilis**: nem minden anyagot enged át egyformán. Ez a tulajdonság elengedhetetlen a sejt belső, a külső környezettől eltérő kémiai összetételének (homeosztázisának) fenntartásához, amely minden élettani folyamat (anyagcsere, ingerlékenység, szaporodás) alapfeltétele.
`,
    key_concepts: [
      "folyékony mozaik modell",
      "diffúzió és ozmózis",
      "aktív transzport (Na-K pumpa)",
      "endocitózis és exocitózis",
      "szelektív permeabilitás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit ír le a sejtmembrán 'folyékony mozaik modellje'?",
        options: [
          "A lipidmolekulák oldalirányban mozognak, a fehérjék pedig mozaikszerűen ágyazódnak a kettősrétegbe",
          "A membrán csak fehérjékből áll, lipid nélkül",
          "A membrán szilárd, mozdulatlan réteg",
          "A membránban csak egyetlen típusú fehérje található",
        ],
        correct_answer: "A lipidmolekulák oldalirányban mozognak, a fehérjék pedig mozaikszerűen ágyazódnak a kettősrétegbe",
        explanation:
          "A modell szerint a foszfolipid kettősréteg folyékony, a benne mozgó és beágyazott fehérjék mozaikszerű elrendezést hoznak létre.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy növényi sejtet hipertóniás (a sejt belsejéhez képest nagyobb oldottanyag-koncentrációjú) oldatba helyezünk. Mi történik?",
        options: [
          "A sejt vizet veszít, összezsugorodik (plazmolízis)",
          "A sejt vizet vesz fel és megduzzad",
          "Nincs változás, mert a sejtfal megakadályozza az ozmózist",
          "A sejt azonnal elpusztul",
        ],
        correct_answer: "A sejt vizet veszít, összezsugorodik (plazmolízis)",
        explanation:
          "Ozmózis során a víz a kisebb oldottanyag-koncentrációjú (a sejt belseje) felől a nagyobb koncentrációjú (a külső, hipertóniás oldat) felé mozog, így a sejt vizet veszít.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az aktív transzportot a passzív transzporttal szemben?",
        options: [
          "ATP-energiát használ, és a koncentrációgrádienssel szemben szállít anyagot",
          "Sosem igényel fehérjét",
          "Csak vizet szállít",
          "Mindig gyorsabb, mint a diffúzió",
        ],
        correct_answer: "ATP-energiát használ, és a koncentrációgrádienssel szemben szállít anyagot",
        explanation:
          "Az aktív transzport (pl. Na⁺-K⁺-pumpa) energiát fordít arra, hogy anyagokat a kisebb koncentrációjú helyről a nagyobb koncentrációjú hely felé mozgasson, a passzív folyamatokkal (diffúzió) ellentétben.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan nevezzük azt a folyamatot, amikor a sejt egy szilárd részecskét membránnal körülzárva vesz fel?",
        options: ["fagocitózis", "pinocitózis", "exocitózis", "ozmózis"],
        correct_answer: "fagocitózis",
        explanation:
          "A fagocitózis szilárd részecskék (pl. baktériumok, sejtroncsok) endocitózissal történő bekebelezése; a pinocitózis folyadékcsepp felvételét jelenti.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nem tud egy Na⁺-ion egyszerű diffúzióval szabadon átjutni a foszfolipid kettősrétegen?",
        options: [
          "Mert töltéssel bíró, poláris részecske, amely nem oldódik a réteg apoláris belsejében, csak fehérjecsatornán/hordozón keresztül juthat át",
          "Mert a Na⁺-ion mérete túl nagy minden membránfehérjéhez",
          "Mert a Na⁺-ion csak exocitózissal juthat át a membránon",
          "Mert a foszfolipid kettősréteg maga is pozitív töltésű",
        ],
        correct_answer: "Mert töltéssel bíró, poláris részecske, amely nem oldódik a réteg apoláris belsejében, csak fehérjecsatornán/hordozón keresztül juthat át",
        explanation:
          "A lipid kettősréteg belseje apoláris, ezért az ionok és poláris molekulák csak megkönnyített diffúzióval (csatorna- vagy hordozófehérjén keresztül) vagy aktív transzporttal léphetnek át rajta.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "sejtorganellumok-es-funkcioik",
    title: "Sejtorganellumok és funkcióik",
    level: "mindketto",
    theme: "Egyed alatti szerveződési szint",
    order_index: 5,
    summary_markdown:
      "Az eukarióta sejt belső membránrendszere és sejtorganellumai (sejtmag, mitokondrium, endoplazmatikus retikulum, Golgi-készülék, lizoszóma, kloroplasztisz) egymással összefüggő munkamegosztásban végzik a sejt életműködéseit.",
    content_markdown: `
## A sejtmag

A **sejtmag (nukleusz)** kettős membránnal (magmembrán) határolt organellum, amely a sejt genetikai állományát (DNS-t, kromatin formájában) tartalmazza. A magmembránon **magpórusok** vannak, amelyeken keresztül anyagok (pl. RNS, fehérjék) áramlanak a citoplazma és a sejtmag között. A magban található a **magvacska (nukleolusz)**, ahol a riboszómák alkotórészei (rRNS) szintetizálódnak. A sejtmag irányítja a sejt fehérjeszintézisét és az öröklődést.

## Mitokondrium — a sejt "erőműve"

A **mitokondrium** kettős membránnal határolt organellum, ahol a **sejtlégzés (aerob energiatermelés)** zajlik: a szerves molekulák (elsősorban glükóz) kémiai energiáját a sejt ATP formájában hasznosítható energiává alakítja. A belső membrán befelé betüremkedéseket (**kristákat**) alkot, ez növeli a felületet, ahol a légzési láncreakciók zajlanak. A mitokondrium saját, körkörös DNS-sel és riboszómával rendelkezik — ez az **endoszimbionta elmélet** egyik fő bizonyítéka, amely szerint a mitokondrium egykor önálló, aerob baktérium volt, amelyet egy ősi sejt befogadott.

## Endoplazmatikus retikulum (ER) és Golgi-készülék

Az **endoplazmatikus retikulum** egy egymással összefüggő membráncsatornák és üregek rendszere. A **durva felszínű ER** felszínén riboszómák találhatók, itt zajlik a szekrécióra kerülő és membránba épülő fehérjék szintézise és kezdeti módosítása. A **sima felszínű ER**-en nincsenek riboszómák; itt lipidszintézis, szteroidhormon-szintézis és méregtelenítés zajlik. A **Golgi-készülék** lapos, egymásra rétegzett membránzsákokból áll; feladata az ER-ből érkező fehérjék és lipidek további módosítása (pl. glikozilálás), "címkézése" és a megfelelő célhelyre (sejtmembrán, lizoszóma, sejten kívülre) irányítása kis hólyagok (vezikulák) formájában.

## Lizoszóma és peroxiszóma

A **lizoszóma** a Golgi-készülékből leváló, emésztőenzimeket tartalmazó hólyag; feladata a sejten belüli (autofágia — elhasznált organellumok lebontása) és sejten kívülről bekebelezett anyagok (fagocitózis útján) lebontása. A **peroxiszóma** oxidatív reakciókban (pl. zsírsavak lebontása, méregtelenítés) résztvevő, hidrogén-peroxidot (H2O2) termelő és lebontó organellum.

## Kloroplasztisz — csak növényi/algasejtekben

A **kloroplasztisz** kettős membránnal határolt organellum, ahol a **fotoszintézis** zajlik. Belső membránrendszere lapos zsákokat (**tilakoidokat**) alkot, ezek egymásra rétegezve **granumokat** hoznak létre; a tilakoidmembránban található a klorofill. A tilakoidok közötti folyékony közeg a **sztróma**. A kloroplasztisz — a mitokondriumhoz hasonlóan — saját DNS-sel és riboszómával rendelkezik, ez is az endoszimbionta eredetet támasztja alá (egykori fotoszintetizáló baktérium).

## Citoszkeleton és sejtfelszíni struktúrák

A **citoszkeleton** (mikrofilamentumok, intermedier filamentumok, mikrotubulusok) fehérjeszálakból álló belső "csontozat", amely fenntartja a sejt alakját, lehetővé teszi a sejten belüli anyagszállítást és a sejtmozgást (pl. csillók, ostorok mozgatása mikrotubulusok segítségével).

## Összefoglaló táblázat

| Organellum | Fő funkció |
|---|---|
| Sejtmag | genetikai információ tárolása, irányítás |
| Mitokondrium | sejtlégzés, ATP-termelés |
| Durva ER | fehérjeszintézis |
| Sima ER | lipidszintézis, méregtelenítés |
| Golgi-készülék | fehérjék módosítása, csomagolása |
| Lizoszóma | emésztés, lebontás |
| Kloroplasztisz | fotoszintézis (csak növény/alga) |
| Riboszóma | fehérjeszintézis helye |
`,
    key_concepts: [
      "sejtmag és magpórusok",
      "mitokondrium és endoszimbionta elmélet",
      "endoplazmatikus retikulum és Golgi-készülék",
      "lizoszóma",
      "kloroplasztisz szerkezete",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik organellumban zajlik az aerob sejtlégzés, a sejt fő ATP-termelő folyamata?",
        options: ["mitokondrium", "Golgi-készülék", "lizoszóma", "sejtmag"],
        correct_answer: "mitokondrium",
        explanation:
          "A mitokondriumban zajlik a glükóz lebontásának oxigénfüggő, nagy hatásfokú szakasza, amely ATP-t termel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az endoszimbionta elmélet fő bizonyítéka a mitokondrium és a kloroplasztisz esetében?",
        options: [
          "Saját, körkörös DNS-sel és riboszómával rendelkeznek, kettős membránnal határoltak",
          "Mindkettő csak állati sejtekben található meg",
          "Mindkettőnek nincs membránja",
          "Mindkettő a sejtmagból származik közvetlenül",
        ],
        correct_answer: "Saját, körkörös DNS-sel és riboszómával rendelkeznek, kettős membránnal határoltak",
        explanation:
          "Az elmélet szerint ezek az organellumok egykor önálló prokarióta sejtek voltak, amelyeket egy ősi eukarióta sejt befogadott — erre utal saját DNS-ük, riboszómájuk és kettős membránjuk.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik organellum felelős a sejten belüli emésztésért (elhasznált sejtalkotók, bekebelezett anyagok lebontásáért)?",
        options: ["lizoszóma", "kloroplasztisz", "sima felszínű ER", "sejtmag"],
        correct_answer: "lizoszóma",
        explanation:
          "A lizoszóma emésztőenzimeket tartalmazó hólyag, amely a sejten belüli és a fagocitózissal bekebelezett anyagok lebontását végzi.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a durva és a sima felszínű endoplazmatikus retikulum között?",
        options: [
          "A durva felszínű ER-en riboszómák vannak (fehérjeszintézis), a simán nincsenek (lipidszintézis, méregtelenítés)",
          "A durva ER csak növényi sejtekben található meg",
          "A sima ER termeli az összes fehérjét a sejtben",
          "A durva ER a sejtmag belsejében található",
        ],
        correct_answer: "A durva felszínű ER-en riboszómák vannak (fehérjeszintézis), a simán nincsenek (lipidszintézis, méregtelenítés)",
        explanation:
          "A durva felszínű ER felszínén riboszómák ülnek, itt zajlik fehérjeszintézis; a sima felszínű ER riboszóma nélküli, itt lipidszintézis és méregtelenítés folyik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Milyen szerepe van a Golgi-készüléknek az ER-ben szintetizált fehérjék útja során?",
        options: [
          "Módosítja, 'megcímkézi' és a megfelelő célhelyre irányítja a fehérjéket hólyagok formájában",
          "Lebontja az összes ER-ből érkező fehérjét",
          "Kizárólag DNS-t replikál",
          "A fehérjéket közvetlenül a sejtmagba szállítja",
        ],
        correct_answer: "Módosítja, 'megcímkézi' és a megfelelő célhelyre irányítja a fehérjéket hólyagok formájában",
        explanation:
          "A Golgi-készülék az ER-ből érkező fehérjéket és lipideket tovább alakítja (pl. glikozilálja), majd vezikulákba csomagolva a megfelelő célhelyre (membrán, lizoszóma, sejten kívül) irányítja.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "sejtciklus-es-sejtosztodas-mitozis",
    title: "Sejtciklus és sejtosztódás (mitózis)",
    level: "emelt",
    theme: "Egyed alatti szerveződési szint",
    order_index: 6,
    summary_markdown:
      "A sejtciklus az interfázisból (növekedés, DNS-megkettőződés) és a sejtosztódásból (mitózis és citokinézis) áll; a mitózis célja két genetikailag azonos utódsejt létrehozása testi sejtekben.",
    content_markdown: `
## A sejtciklus szakaszai

A sejtciklus a sejt "életének" ismétlődő folyamata egy osztódástól a következő osztódásig. Két nagy szakaszra osztható:

1. **Interfázis** – a sejtciklus leghosszabb szakasza, itt zajlik a sejt növekedése és a genetikai állomány megkettőződése.
   - **G1 fázis** – növekedés, fehérjeszintézis, sejtszervecskék gyarapodása.
   - **S fázis** – a **DNS replikációja (megkettőződése)**: minden kromoszómából két, egymással azonos **kromatida** keletkezik.
   - **G2 fázis** – további növekedés, felkészülés az osztódásra (pl. az osztódási orsó fehérjéinek szintézise).
2. **Mitózis (M fázis)** – a sejtmag és a citoplazma osztódása, két genetikailag azonos utódsejt keletkezik.

A sejtciklus előrehaladását **kontrollpontok** (checkpointok) ellenőrzik, amelyek megakadályozzák, hogy sérült DNS-sel vagy hibás osztódási felkészültséggel rendelkező sejt tovább osztódjon — ezek működésének zavara a rákos sejtburjánzás egyik fő oka.

## A mitózis szakaszai

A mitózis (magosztódás) négy fő szakaszra bontható:

- **Prófázis** – a kromatinállomány kondenzálódik, jól látható kromoszómákká tömörül (2 kromatidából áll, centromérnál összekapcsolva); a magmembrán elkezd feloszlani; kialakul az **osztódási orsó (mitotikus orsó)** mikrotubulusokból.
- **Metafázis** – a kromoszómák a sejt egyenlítői síkjában (metafázis-lemez) rendeződnek el, az orsófonalak a centromerekhez kapcsolódnak.
- **Anafázis** – a testvér kromatidák szétválnak, és az orsófonalak húzására a sejt két pólusa felé mozognak — ettől a ponttól minden kromatida önálló kromoszómának számít.
- **Telofázis** – a kromoszómák a sejt két pólusán dekondenzálódnak, új magmembrán alakul ki mindkét oldalon, a magvacska újraszerveződik.

A mitózist a **citokinézis** követi/kíséri: a citoplazma is kettéosztódik, két önálló utódsejt keletkezik. Állati sejtben ez befűződéssel (sejtszorító gyűrű), növényi sejtben — a merev sejtfal miatt — új sejtfal (sejtlemez) kialakulásával történik.

## A mitózis biológiai jelentősége

A mitózis eredménye két, az anyasejttel **genetikailag teljesen azonos** (azonos kromoszómaszámú és -tartalmú) utódsejt. Ez biztosítja:

- a szervezet **növekedését** (sejtszám-gyarapodás),
- a **szövetregenerációt és sebgyógyulást**,
- egysejtűeknél az **ivartalan szaporodást**.

## A rákos sejtburjánzás kapcsolata

Ha a sejtciklus kontrollpontjai (pl. a DNS-hibát felismerő mechanizmusok, vagy az osztódást szabályozó gének, mint a tumorszupresszor gének) elromlanak, a sejt kontroll nélkül, korlátlanul osztódhat — ez vezet a **daganatképződéshez**. A rákkutatás egyik fő területe éppen ezért a sejtciklus-szabályozás molekuláris hátterének megértése.
`,
    key_concepts: [
      "interfázis (G1, S, G2 fázis)",
      "DNS-replikáció és kromatida",
      "mitózis szakaszai (profázis, metafázis, anafázis, telofázis)",
      "citokinézis",
      "sejtciklus kontrollpontok",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik interfázis-szakaszban történik a DNS megkettőződése (replikációja)?",
        options: ["S fázis", "G1 fázis", "G2 fázis", "telofázis"],
        correct_answer: "S fázis",
        explanation:
          "Az S (szintézis) fázisban zajlik a DNS replikációja, ekkor minden kromoszómából két azonos kromatida keletkezik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "A mitózis melyik szakaszában válnak szét a testvér kromatidák egymástól?",
        options: ["anafázis", "prófázis", "metafázis", "telofázis"],
        correct_answer: "anafázis",
        explanation:
          "Az anafázisban az orsófonalak húzására a testvér kromatidák szétválnak és a sejt ellentétes pólusai felé mozognak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a mitózis biológiai eredménye/jelentősége?",
        options: [
          "Két, genetikailag az anyasejttel azonos utódsejt keletkezik, ez biztosítja a növekedést és a szövetregenerációt",
          "Négy, egymástól genetikailag eltérő utódsejt keletkezik",
          "A kromoszómaszám a felére csökken az utódsejtekben",
          "Kizárólag az ivarsejtek keletkezésének módja",
        ],
        correct_answer: "Két, genetikailag az anyasejttel azonos utódsejt keletkezik, ez biztosítja a növekedést és a szövetregenerációt",
        explanation:
          "A mitózis testi sejtekben zajlik, célja két, az eredeti sejttel genetikailag azonos utódsejt létrehozása — ellentétben a meiózissal, amely a kromoszómaszámot felezi.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik növényi sejtben a citokinézis során, a merev sejtfal miatt?",
        options: [
          "Egy új sejtfal (sejtlemez) alakul ki a leendő két sejt között",
          "A citoplazma befűződéssel válik ketté, mint az állati sejtben",
          "Nincs citokinézis növényi sejtben",
          "A sejtfal teljesen feloldódik",
        ],
        correct_answer: "Egy új sejtfal (sejtlemez) alakul ki a leendő két sejt között",
        explanation:
          "Mivel a merev sejtfal nem teszi lehetővé a befűződést, a növényi sejtben a Golgi-készülékből származó vezikulák egyesülésével egy új elválasztó sejtfal (sejtlemez) épül fel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Milyen összefüggés van a sejtciklus kontrollpontjainak hibás működése és a daganatképződés között?",
        options: [
          "A kontrollpontok hibája miatt a sérült DNS-sel bíró sejtek is tovább osztódhatnak, ami kontrollálatlan sejtburjánzáshoz vezethet",
          "A kontrollpontok hibája mindig azonnal a sejt pusztulásához vezet, rák nem keletkezhet",
          "A kontrollpontok csak a meiózis során működnek, a mitózisra nincs hatásuk",
          "A kontrollpontok kizárólag a citokinézis sebességét szabályozzák",
        ],
        correct_answer: "A kontrollpontok hibája miatt a sérült DNS-sel bíró sejtek is tovább osztódhatnak, ami kontrollálatlan sejtburjánzáshoz vezethet",
        explanation:
          "A kontrollpontok (checkpointok) normál esetben megállítják az osztódást, ha DNS-hibát vagy egyéb problémát észlelnek; ezek elromlása (pl. tumorszupresszor gének mutációja) teszi lehetővé a rákos sejtek szabálytalan burjánzását.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "ivaros-szaporodas-sejtszinten-meiozis",
    title: "Ivaros szaporodás sejtszinten — meiózis",
    level: "emelt",
    theme: "Egyed alatti szerveződési szint",
    order_index: 7,
    summary_markdown:
      "A meiózis egy speciális, két egymást követő osztódásból álló sejtosztódási forma, amely a kromoszómaszámot a felére csökkenti, és genetikai variabilitást hoz létre — ez az ivarsejtek (gaméták) keletkezésének alapja.",
    content_markdown: `
## Miért van szükség a meiózisra?

Az ivaros szaporodás során két ivarsejt (gaméta) egyesül (megtermékenyítés), így az utódban a két szülőtől származó genetikai állomány összeadódik. Ha a gaméták a testi sejtekkel azonos (**diploid, 2n**) kromoszómaszámmal rendelkeznének, minden nemzedékben duplázódna a kromoszómaszám. Ezt küszöböli ki a **meiózis**: olyan sejtosztódás, amely a diploid sejtből **haploid (n)**, feleannyi kromoszómát tartalmazó ivarsejteket hoz létre — a megtermékenyítés során a haploid ivarsejtek egyesülve visszaállítják a diploid állapotot.

## A meiózis két egymást követő osztódása

A meiózis egyetlen DNS-megkettőződést (S-fázis) követően **két egymást követő osztódásból** áll:

### Meiózis I. (redukciós osztódás)

- **Prófázis I** – a homológ kromoszómapárok (az anyai és az apai eredetű, azonos génkészletet hordozó kromoszómapár) egymás mellé rendeződnek (**szinapszis**), és **crossing over** (kromoszómadarab-cserét) hajthatnak végre — ez az egyik legfontosabb genetikai variabilitást növelő mechanizmus.
- **Metafázis I** – a homológ kromoszómapárok (tetrádok) rendeződnek az egyenlítői síkba.
- **Anafázis I** – a **homológ kromoszómapárok** (nem a testvér kromatidák!) válnak szét, és mozognak a sejt két pólusa felé.
- **Telofázis I** – két sejt keletkezik, mindegyik haploid kromoszómaszámú, de minden kromoszóma még két kromatidából áll.

### Meiózis II. (a mitózishoz hasonló osztódás)

A második osztódás lényegében megegyezik a mitózis lépéseivel: itt a testvér kromatidák válnak szét egymástól, így a folyamat végén **négy haploid** (n kromoszómaszámú) sejt keletkezik, mindegyik egyetlen kromatidából álló kromoszómákkal.

## A genetikai variabilitás forrásai a meiózisban

1. **Crossing over** – a homológ kromoszómák génszakaszainak kicserélődése a prófázis I-ben, ami új géncombinációkat hoz létre egy kromoszómán belül.
2. **Homológ kromoszómák független szétválása** – az, hogy egy adott kromoszómapárból melyik tag kerül az egyik, illetve a másik utódsejtbe, véletlenszerű és független a többi kromoszómapártól, így hatalmas számú kombináció alakulhat ki.
3. **A megtermékenyítés véletlenszerűsége** – melyik hím és nő ivarsejt egyesül, tovább növeli a variabilitást.

## A meiózis és a mitózis összehasonlítása

| Jellemző | Mitózis | Meiózis |
|---|---|---|
| Osztódások száma | 1 | 2 |
| Utódsejtek száma | 2 | 4 |
| Utódsejtek kromoszómaszáma | diploid (2n), azonos az anyasejttel | haploid (n), fele az anyasejtnek |
| Genetikai tartalom | azonos az anyasejttel | eltérő (rekombinált) |
| Hol zajlik | testi sejtekben (szomatikus) | ivarsejt-képző szövetekben (gonádokban) |
| Biológiai szerep | növekedés, regeneráció, ivartalan szaporodás | ivarsejtek képzése, genetikai variabilitás |

## Gametogenezis emberben

Emberben a hím ivarsejtek (spermiumok) a **spermiogenezis**, a női ivarsejtek (petesejtek) az **oogenezis** során keletkeznek meiózissal. A spermiogenezis egy elsődleges ivarsejtből négy funkcionális spermiumot eredményez, míg az oogenezis során egyetlen funkcionális petesejt keletkezik (a másik három leánysejt — a poláris testek — elpusztulnak), mivel a citoplazma és a raktározott anyagok egy sejtbe koncentrálódnak, ami a leendő embrió fejlődéséhez szükséges.
`,
    key_concepts: [
      "haploid és diploid kromoszómaszám",
      "meiózis I és II (redukciós osztódás)",
      "crossing over",
      "homológ kromoszómák független szétválása",
      "gametogenezis",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért szükséges a meiózis az ivaros szaporodásban?",
        options: [
          "Mert a kromoszómaszámot a felére csökkenti, így a megtermékenyítés után helyreáll a diploid állapot",
          "Mert ez az egyetlen módja a testi sejtek osztódásának",
          "Mert ez hozza létre a legtöbb testi sejtet",
          "Mert nélküle nem lenne DNS-replikáció",
        ],
        correct_answer: "Mert a kromoszómaszámot a felére csökkenti, így a megtermékenyítés után helyreáll a diploid állapot",
        explanation:
          "Ha a gaméták diploidok lennének, a megtermékenyítés után minden nemzedékben duplázódna a kromoszómaszám; a meiózis ezt a redukciós osztódással megelőzi.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi válik szét a meiózis I. (anafázis I) során?",
        options: ["a homológ kromoszómapárok", "a testvér kromatidák", "a sejtmagok", "a riboszómák"],
        correct_answer: "a homológ kromoszómapárok",
        explanation:
          "A meiózis I-ben a homológ (anyai és apai eredetű) kromoszómapárok válnak szét, míg a testvér kromatidák csak a meiózis II-ben válnak szét egymástól.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a crossing over biológiai jelentősége?",
        options: [
          "Génszakaszok cseréje a homológ kromoszómák között, ami új géncombinációkat és nagyobb genetikai variabilitást eredményez",
          "A kromoszómaszám megduplázása",
          "A sejtmag teljes lebontása",
          "Az ivarsejtek méretének növelése",
        ],
        correct_answer: "Génszakaszok cseréje a homológ kromoszómák között, ami új géncombinációkat és nagyobb genetikai variabilitást eredményez",
        explanation:
          "A crossing over a prófázis I-ben zajlik, a homológ kromoszómák egyes szakaszainak kicserélődésével, ez az egyik legfontosabb genetikai variabilitást növelő mechanizmus.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány haploid sejt keletkezik egy meiózis végén egy diploid ősi sejtből?",
        options: ["négy", "kettő", "egy", "nyolc"],
        correct_answer: "négy",
        explanation:
          "A két egymást követő osztódás (meiózis I és II) eredményeként egy diploid ősi sejtből négy haploid sejt keletkezik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért keletkezik az emberi oogenezis során csak egyetlen funkcionális petesejt egy elsődleges ivarsejtből, míg a spermiogenezisben négy funkcionális spermium?",
        options: [
          "Mert az oogenezisben a citoplazma és a tápanyagok egy sejtbe koncentrálódnak, a többi leánysejt (poláris testek) elpusztul",
          "Mert a petesejtek nem meiózissal, hanem mitózissal keletkeznek",
          "Mert a nőknek nincs meiózisuk",
          "Mert a spermiumoknak nincs szükségük kromoszómákra",
        ],
        correct_answer: "Mert az oogenezisben a citoplazma és a tápanyagok egy sejtbe koncentrálódnak, a többi leánysejt (poláris testek) elpusztul",
        explanation:
          "Az oogenezis során a citoplazma egyenlőtlenül osztódik, így egyetlen nagy, tápanyagban gazdag petesejt és apró, funkcióképtelen poláris testek keletkeznek — ezzel szemben a spermiogenezisben mind a négy leánysejt egyenlő méretű, funkcióképes spermiummá alakul.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "virusok-es-a-nem-sejtes-rendszerek",
    title: "Vírusok és a nem sejtes rendszerek",
    level: "mindketto",
    theme: "Vírusok, baktériumok",
    order_index: 8,
    summary_markdown:
      "A vírusok nem sejtes felépítésű, kizárólag élő sejtben szaporodni képes biológiai egységek, amelyek genetikai anyagból és fehérjeburokból állnak; a tétel áttekinti szerkezetüket, szaporodási ciklusukat és jelentőségüket.",
    content_markdown: `
## A vírusok általános jellemzői

A **vírusok** nem sejtes szerveződésű biológiai egységek: nincs saját anyagcseréjük, nincs riboszómájuk, önállóan nem képesek fehérjét szintetizálni és nem tudnak önmagukban osztódni. Kizárólag élő gazdasejtben, annak "gépezetét" (riboszómáit, enzimeit, energiaforrásait) felhasználva szaporodnak — ezért **sejten belüli (obligát intracelluláris) parazitáknak** nevezzük őket. Mérettartományuk jóval kisebb (kb. 20-300 nanométer), mint a legkisebb baktériumoké, csak elektronmikroszkóppal láthatók.

## A vírus felépítése

Minden vírus alapszerkezete:

- **Genetikai állomány** – DNS vagy RNS, egy- vagy kétszálú, lehet lineáris vagy körkörös (a víruscsoporttól függ).
- **Fehérjeburok (kapszid)** – ismétlődő fehérjeegységekből (kapszomerek) épül fel, védi a genetikai állományt.
- **Membránburok (borítékfehérje)** – egyes vírusoknál (pl. influenzavírus, HIV) a kapszidot egy, a gazdasejt membránjából "kölcsönzött" lipidburok veszi körül, amelybe vírusfehérjék ágyazódnak — ezek felismerik a célsejtet.

## A vírusok szaporodási ciklusa

1. **Kitapadás (adszorpció)** – a vírus felszíni fehérjéi specifikusan felismerik és megkötik a gazdasejt felszínén lévő receptort — ez határozza meg, milyen sejttípust, sőt fajt képes megfertőzni a vírus (gazdaspecificitás).
2. **Behatolás** – a vírus genetikai állománya (esetleg a teljes vírusrészecske) bejut a sejtbe.
3. **Replikáció és fehérjeszintézis** – a vírus a gazdasejt riboszómáit és enzimeit felhasználva megsokszorozza saját genetikai állományát, és szintetizálja a vírusfehérjéket.
4. **Összeszerelődés** – az újonnan képződött genetikai állomány és fehérjeburok-részek új vírusrészecskékké (virionokká) állnak össze.
5. **Kiszabadulás** – az új vírusrészecskék elhagyják a sejtet, gyakran a gazdasejt szétroncsolásával (**lítikus ciklus**), esetenként a sejt elpusztítása nélkül, folyamatos kibocsátással.

Néhány vírus (pl. bakteriofágok, HIV) genetikai állománya beépülhet a gazdasejt DNS-ébe, és ott hosszú ideig lappanghat (**lizogén ciklus**), mielőtt egy külső inger hatására a lítikus ciklusba lép.

## A vírusok jelentősége

A vírusok számos súlyos megbetegedés kórokozói (pl. influenza, COVID-19, HIV/AIDS, hepatitis, kanyaró). Emellett tudományos jelentőségük is nagy: a **molekuláris biológia** sok alapvető felismerése (pl. a génexpresszió szabályozása) vírusokon végzett kísérletekből származik, és a modern **génterápiában, oltásfejlesztésben** (pl. vektorvakcinák, mRNS-vakcinák) is kulcsszerepet játszanak.

## Védekezés a vírusfertőzések ellen

Mivel a vírusok a sejt saját anyagcsere-gépezetét használják, a hagyományos antibiotikumok (amelyek baktériumspecifikus célpontokra hatnak) hatástalanok ellenük. A védekezés fő eszközei: az **immunrendszer** specifikus válasza (antitestek, citotoxikus T-sejtek), a **védőoltás** (amely előre "megtanítja" az immunrendszert a kórokozó felismerésére), valamint célzott **antivirális gyógyszerek**, amelyek a vírus szaporodási ciklusának egy-egy lépését gátolják.
`,
    key_concepts: [
      "vírus mint nem sejtes rendszer",
      "kapszid és membránburok",
      "lítikus és lizogén ciklus",
      "gazdaspecificitás",
      "antivirális védekezés és oltás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért nevezzük a vírusokat obligát intracelluláris parazitáknak?",
        options: [
          "Mert kizárólag élő gazdasejtben, annak anyagcsere-gépezetét felhasználva képesek szaporodni",
          "Mert csak a sejten kívül tudnak szaporodni",
          "Mert saját riboszómájuk van, de nincs genetikai állományuk",
          "Mert csak növényi sejteket fertőznek",
        ],
        correct_answer: "Mert kizárólag élő gazdasejtben, annak anyagcsere-gépezetét felhasználva képesek szaporodni",
        explanation:
          "A vírusoknak nincs saját anyagcseréjük és riboszómájuk, ezért szaporodásukhoz feltétlenül (obligát módon) egy élő gazdasejt belső gépezetére van szükségük.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a vírus kapszidjának feladata?",
        options: [
          "Fehérjéből álló burokként védi a vírus genetikai állományát",
          "Ez a vírus energiatermelő szervecskéje",
          "Ez tartalmazza a gazdasejt riboszómáit",
          "Ez a vírus mozgásáért felelős ostor",
        ],
        correct_answer: "Fehérjéből álló burokként védi a vírus genetikai állományát",
        explanation:
          "A kapszid ismétlődő fehérje-alegységekből (kapszomerekből) épül fel, és a vírus genetikai anyagát (DNS/RNS) veszi körül és védi.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a lítikus és a lizogén vírusciklus között?",
        options: [
          "A lítikus ciklusban a vírus azonnal elpusztítja a gazdasejtet, a lizogén ciklusban a vírus DNS-e beépül a gazdasejt genomjába és lappanghat",
          "A lítikus ciklus csak RNS-vírusokra jellemző, a lizogén csak DNS-vírusokra",
          "A lizogén ciklusban a vírus soha nem szaporodik tovább",
          "A lítikus ciklusban a vírus nem lép kapcsolatba a gazdasejttel",
        ],
        correct_answer: "A lítikus ciklusban a vírus azonnal elpusztítja a gazdasejtet, a lizogén ciklusban a vírus DNS-e beépül a gazdasejt genomjába és lappanghat",
        explanation:
          "A lítikus ciklus a sejt szétroncsolásával és a virionok azonnali kibocsátásával jár, míg a lizogén ciklusban a vírus genetikai állománya a gazdasejt DNS-ébe integrálódva hosszú ideig rejtve maradhat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért hatástalanok a hagyományos antibiotikumok a vírusfertőzések ellen?",
        options: [
          "Az antibiotikumok baktériumspecifikus célpontokra (pl. sejtfalszintézis) hatnak, amelyek a vírusoknál nincsenek meg",
          "A vírusok immunisak minden gyógyszerre",
          "Az antibiotikumok csak növényi sejtekben hatnak",
          "A vírusoknak nincs genetikai állományuk, amire hatni lehetne",
        ],
        correct_answer: "Az antibiotikumok baktériumspecifikus célpontokra (pl. sejtfalszintézis) hatnak, amelyek a vírusoknál nincsenek meg",
        explanation:
          "Az antibiotikumok a baktériumsejtek specifikus szerkezeteit (pl. peptidoglikán sejtfal, saját riboszóma) célozzák; a vírusoknak nincs ilyen önálló sejtszerkezetük, ezért az antibiotikumok rájuk nem hatnak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A vírus felszíni fehérjéi miért határozzák meg a gazdaspecificitást?",
        options: [
          "Mert specifikusan csak egy adott sejttípus felszíni receptoraihoz képesek kötődni, ez teszi lehetővé a sejtbe jutást",
          "Mert ezek a fehérjék bontják le a sejt DNS-ét",
          "Mert ezek határozzák meg a vírus méretét",
          "Mert ezek a fehérjék felelősek a vírus energiatermeléséért",
        ],
        correct_answer: "Mert specifikusan csak egy adott sejttípus felszíni receptoraihoz képesek kötődni, ez teszi lehetővé a sejtbe jutást",
        explanation:
          "A vírus felszíni fehérjéi kulcs-zár mechanizmus szerint kapcsolódnak a célsejt receptoraihoz; ha ez a receptor nem megfelelő, a vírus nem tud a sejtbe hatolni, ez magyarázza a fajra/sejttípusra jellemző gazdaspecificitást.",
        difficulty: 3,
      },
    ],
  },
];
