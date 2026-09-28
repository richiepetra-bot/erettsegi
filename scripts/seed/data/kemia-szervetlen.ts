import type { TopicSeed } from "./angol";

export const kemiaSzervetlenTopics: TopicSeed[] = [
  {
    slug: "oxigen-csoport-oxigen-ken",
    title: "Az oxigén csoport — oxigén és kén",
    level: "mindketto",
    theme: "Szervetlen kémia",
    order_index: 16,
    summary_markdown:
      "Az oxigén és a kén előfordulása, allotróp módosulatai, jellemző reakciói (oxidok, savas esők), valamint a kénsav és egyéb kénvegyületek ipari jelentősége.",
    content_markdown: `
## Az oxigén csoport (VI. főcsoport / 16. csoport)

A csoport legfontosabb elemei az **oxigén (O)** és a **kén (S)**, mindkettő **6 vegyértékelektronnal** rendelkezik, két elektron felvételével érhetnek el nemesgázszerkezetet, ezért jellemzően **−2 oxidációs számmal** vannak jelen vegyületeikben (de a kén, kisebb elektronegativitása miatt, pozitív oxidációs számú vegyületeket is alkot, pl. SO₂, SO₃, H₂SO₄).

## Az oxigén (O₂)

- Színtelen, szagtalan gáz, a levegő kb. 21%-a, minden aerob élőlény légzéséhez elengedhetetlen.
- **Allotróp módosulata az ózon (O₃)**: három oxigénatomból álló molekula, a sztratoszférában (ózonréteg) elnyeli a káros UV-sugárzást, míg a talaj közelében (troposzférikus ózon) légszennyező, egészségre ártalmas gáz.
- **Oxidok képződése**: az oxigén a legtöbb elemmel közvetlenül reagál (égés), oxidokat képezve, pl. $4Fe + 3O_2 \\rightarrow 2Fe_2O_3$, $C + O_2 \\rightarrow CO_2$.
- Az oxidok lehetnek **savas jellegűek** (nemfémoxidok, pl. CO₂, SO₂ — vízzel savat képeznek), **bázisos jellegűek** (fémoxidok, pl. CaO, Na₂O — vízzel lúgot képeznek) vagy **amfoter** jellegűek (pl. Al₂O₃ — savval és lúggal is reagál).
- Előállítás: iparilag a levegő cseppfolyósításával és desztillációjával (frakcionált desztilláció), laboratóriumban pl. H₂O₂ katalitikus bomlásával.

## A kén (S)

- Sárga, szilárd, nem fémes elem, jellemző allotróp módosulata a koronaformájú **S₈ gyűrűmolekula** (rombos kén).
- Előfordul termésásvány formájában, valamint kén-tartalmú ércekben (pl. piritben, FeS₂) és a kőolajban/földgázban is (kéntartalmú szennyezőként, amit el kell távolítani).

## A kén legfontosabb vegyületei

**Kén-dioxid (SO₂)**:
- Kén elégetésekor keletkezik: $S + O_2 \\rightarrow SO_2$
- Színtelen, szúrós szagú, mérgező gáz, vízben oldva kénessavat képez: $SO_2 + H_2O \\rightarrow H_2SO_3$
- Fő légszennyező anyag (fosszilis tüzelőanyagok égetésekor keletkezik), a **savas esők** egyik fő okozója.

**Kén-trioxid (SO₃) és kénsav (H₂SO₄)**:
- A SO₂ tovább oxidálódhat SO₃-má (katalizátorral, pl. az iparban kontakt eljárással: $2SO_2 + O_2 \\xrightarrow{V_2O_5} 2SO_3$), amely vízzel kénsavat képez: $SO_3 + H_2O \\rightarrow H_2SO_4$.
- A **kénsav** az egyik legfontosabb ipari alapanyag ("a kémiai ipar vérévé" is nevezik): erős, kétértékű sav, erősen vízelvonó (dehidratáló) hatású, koncentráltan igen korrozív.
- Felhasználás: műtrágyagyártás, akkumulátorsav, festékek, robbanóanyagok, kőolaj-finomítás.

## A savas esők problémája

A légkörbe kerülő SO₂ és NOₓ gázok a légköri vízzel reagálva savakat (H₂SO₃, H₂SO₄, HNO₃) képeznek, amelyek a csapadékkal a talajra kerülve **savasítják a talajt és a vizeket**, károsítják az erdőket, épületeket (különösen a mészkő- és márványépületeket, mivel a sav oldja a CaCO₃-ot), és a vízi ökoszisztémákat.

## Kénhidrogén (H₂S)

- Színtelen, záptojás szagú, mérgező gáz, vulkáni gázokban és rothadó fehérjében is előfordul.
- Vízben oldva gyenge sav (kénhidrogén-sav), sói (szulfidok) sok fémmel jellegzetes, sötét színű, oldhatatlan csapadékot képeznek (analitikai kémiai jelentőségű, pl. fémionok kimutatására).
`,
    key_concepts: [
      "oxigén allotróp módosulatai (O₂, O₃)",
      "savas, bázisos és amfoter oxidok",
      "kén-dioxid és kénsav",
      "savas esők",
      "kontakt eljárás (SO₃ előállítása)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az oxigén allotróp módosulata, amely a sztratoszférában véd a UV-sugárzástól?",
        options: ["ózon (O₃)", "hidrogén-peroxid (H₂O₂)", "kén-dioxid (SO₂)", "szén-dioxid (CO₂)"],
        correct_answer: "ózon (O₃)",
        explanation: "Az ózon (O₃) a sztratoszférikus ózonrétegben elnyeli a káros UV-sugárzást, védve az élővilágot.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik gáz az elsődleges okozója a savas esőknek fosszilis tüzelőanyagok égetésekor?",
        options: ["kén-dioxid (SO₂)", "oxigén (O₂)", "nemesgázok", "hidrogén (H₂)"],
        correct_answer: "kén-dioxid (SO₂)",
        explanation: "A kéntartalmú fosszilis tüzelőanyagok égetésekor keletkező SO₂ a légköri vízzel kénessavvá alakul, ami a savas esők egyik fő oka.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen jellegű oxid a CaO (kalcium-oxid)?",
        options: ["bázisos oxid, vízzel lúgot képez", "savas oxid, vízzel savat képez", "amfoter oxid", "semleges oxid"],
        correct_answer: "bázisos oxid, vízzel lúgot képez",
        explanation: "A fémoxidok (pl. CaO) jellemzően bázisos oxidok: vízzel reagálva lúgot képeznek (CaO + H₂O → Ca(OH)₂).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Az ipari kénsavgyártás (kontakt eljárás) melyik lépésénél van szükség katalizátorra (V₂O₅)?",
        options: [
          "a SO₂ SO₃-má oxidálásánál",
          "a kén elégetésénél SO₂-vé",
          "a SO₃ vízzel való reakciójánál",
          "a kén bányászatánál",
        ],
        correct_answer: "a SO₂ SO₃-má oxidálásánál",
        explanation: "A kontakt eljárásban a SO₂ oxidációja SO₃-má katalizátor (V₂O₅) jelenlétében megy végbe hatékonyan.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért támadja meg a savas eső különösen erősen a mészkőből (CaCO₃) épült műemlékeket?",
        options: [
          "Mert a CaCO₃ savval reagálva oldódik és szén-dioxidot fejleszt, ezáltal fokozatosan lebomlik a kőzet",
          "Mert a mészkő fémes anyag, amely korrodálódik",
          "Mert a savas eső csak mészkővel reagál, más kőzettel nem",
          "Mert a mészkő mágneses tulajdonságú",
        ],
        correct_answer: "Mert a CaCO₃ savval reagálva oldódik és szén-dioxidot fejleszt, ezáltal fokozatosan lebomlik a kőzet",
        explanation: "A CaCO₃ + savas eső (H⁺-ionok) reakciója CaCO₃ + 2H⁺ → Ca²⁺ + H₂O + CO₂ szerint megy, ami fokozatosan oldja, roncsolja a mészkő- és márványépítményeket.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "nitrogen-csoport-nitrogen-foszfor",
    title: "A nitrogén csoport — nitrogén és foszfor",
    level: "mindketto",
    theme: "Szervetlen kémia",
    order_index: 17,
    summary_markdown:
      "A nitrogén és a foszfor csoportjellemzői, a nitrogén körforgása és az ammónia/salétromsav ipari jelentősége, valamint a foszfor allotróp módosulatai és a foszfátok szerepe a műtrágyázásban.",
    content_markdown: `
## A nitrogén csoport (V. főcsoport / 15. csoport)

A csoport két legfontosabb eleme a **nitrogén (N)** és a **foszfor (P)**, mindkettő **5 vegyértékelektronnal** rendelkezik.

## A nitrogén (N₂)

- Színtelen, szagtalan gáz, a **levegő kb. 78%-a** (térfogatszázalék), kétatomos molekulaként (N≡N, hármas kötés) fordul elő.
- A N≡N hármas kötés rendkívül **erős és stabil**, ezért a nitrogéngáz kémiailag igen **inaktív** (kevés reakciókészségű) szobahőmérsékleten — ez az oka annak, hogy a levegő nitrogénje nem reagál könnyen más anyagokkal.

## A nitrogén körforgása és megkötése

Bár a levegő nitrogénje bőséges, a növények számára **nem közvetlenül felvehető** — csak a "megkötött" (reaktív) formák (pl. NH₄⁺, NO₃⁻) hasznosíthatók:

- **Biológiai nitrogénkötés**: egyes baktériumok (pl. a hüvelyesek gyökér-gümőiben élő *Rhizobium*) képesek a légköri N₂-t NH₃/NH₄⁺ formává átalakítani.
- **Ipari nitrogénkötés (Haber–Bosch-eljárás)**: $N_2 + 3H_2 \\rightleftharpoons 2NH_3$, katalizátorral, nagy nyomáson és közepes hőmérsékleten (lásd a kémiai egyensúly témakört) — ez tette lehetővé a modern, nagy hozamú mezőgazdaság műtrágyaigényének kielégítését.
- **Nitrifikáció és denitrifikáció**: talajbaktériumok az ammóniumot nitráttá oxidálják (nitrifikáció), illetve a nitrátot vissza N₂ gázzá redukálják (denitrifikáció), ezzel zárva a nitrogén körforgását.

## Ammónia (NH₃) és a salétromsav (HNO₃)

- Az **ammónia** színtelen, szúrós szagú gáz, vízben jól oldódik, gyengén lúgos kémhatású vizes oldatot ($NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$) képez.
- Felhasználás: műtrágyák (pl. ammónium-nitrát, ammónium-szulfát) alapanyaga, tisztítószerek, hűtőközeg.
- **Salétromsav (HNO₃)**: erős, egyértékű sav, erős oxidálószer is egyben (pl. híg salétromsav is oxidálja a rezet, NO gázt fejlesztve). Előállítása az **Ostwald-eljárással** történik: ammónia katalitikus oxidációjából ($4NH_3 + 5O_2 \\rightarrow 4NO + 6H_2O$), majd a NO további oxidációjával és vízben nyeletésével.
- A salétromsav sói (nitrátok, pl. NaNO₃, NH₄NO₃, KNO₃) fontos **műtrágya-alapanyagok**, mert a nitrát-ion közvetlenül felvehető a növények számára.

## A foszfor (P)

- Két fontos allotróp módosulata:
  - **Fehér foszfor (P₄)**: mérgező, önmagától meggyulladó (öngyulladó) a levegőn, ezért vízben tárolják.
  - **Vörös foszfor**: stabilabb, kevésbé reakcióképes, nem öngyulladó, gyufák és biztonsági gyufák gyártásában használt.
- Élettani jelentősége kiemelkedő: a **DNS és RNS foszfátcsoportjainak**, valamint a csontok és fogak (kalcium-foszfát, hidroxiapatit) elengedhetetlen alkotórésze, az **ATP** (adenozin-trifoszfát, a sejtek energiavaluta-molekulája) is foszfátcsoportokat tartalmaz.

## Foszfátok és a műtrágyázás

- A **foszfátok** (pl. szuperfoszfát, Ca(H₂PO₄)₂) a másik legfontosabb makroelem-műtrágya (a nitrogén és a kálium mellett) — a foszfor a növények gyökérfejlődéséhez és energiaháztartásához nélkülözhetetlen.
- A túlzott foszfát- és nitrátterhelés a felszíni vizekben **eutrofizációt** (algásodás, oxigénhiány, "vízi élővilág elszegényedése") okozhat.
`,
    key_concepts: [
      "N≡N hármas kötés inaktivitása",
      "nitrogénkötés (biológiai és ipari)",
      "ammónia és salétromsav",
      "foszfor allotróp módosulatai",
      "eutrofizáció",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért kémiailag kevéssé reakcióképes a légköri nitrogéngáz (N₂) szobahőmérsékleten?",
        options: [
          "Mert a N≡N hármas kötés rendkívül erős és stabil",
          "Mert a nitrogén nemesgáz",
          "Mert a nitrogén negatív oxidációs számú",
          "Mert a nitrogén folyékony halmazállapotú",
        ],
        correct_answer: "Mert a N≡N hármas kötés rendkívül erős és stabil",
        explanation: "A nitrogénmolekulában lévő hármas kötés felszakításához nagy energia szükséges, ezért a N₂ szobahőmérsékleten kevéssé reagál más anyagokkal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik eljárással állítják elő iparilag az ammóniát?",
        options: ["Haber–Bosch-eljárással", "Ostwald-eljárással", "kontakt eljárással", "elektrolízissel"],
        correct_answer: "Haber–Bosch-eljárással",
        explanation: "A Haber–Bosch-eljárás nitrogén és hidrogén katalitikus egyesítésével állítja elő az ammóniát nagy nyomáson és közepes hőmérsékleten.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik a fehér foszfor jellemző, veszélyes tulajdonsága?",
        options: [
          "Öngyulladó (spontán meggyullad) a levegőn, ezért vízben tárolják",
          "Nem reagál semmivel",
          "Stabil, biztonsági gyufák alapanyaga",
          "Csak magas hőmérsékleten mérgező",
        ],
        correct_answer: "Öngyulladó (spontán meggyullad) a levegőn, ezért vízben tárolják",
        explanation: "A fehér foszfor rendkívül reakcióképes, levegőn önmagától meggyullad, ezért biztonsági okokból vízben tárolják.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nem tudják a növények közvetlenül felvenni és hasznosítani a légköri N₂-t, holott a levegő 78%-a nitrogén?",
        options: [
          "Mert a N≡N hármas kötés stabilitása miatt a növények nem képesek lebontani, csak a 'megkötött' (pl. NH₄⁺, NO₃⁻) formákat tudják felvenni",
          "Mert a növények allergiásak a nitrogénre",
          "Mert a nitrogén mérgező a növényekre",
          "Mert a levegő nitrogénje folyékony állapotban van",
        ],
        correct_answer: "Mert a N≡N hármas kötés stabilitása miatt a növények nem képesek lebontani, csak a 'megkötött' (pl. NH₄⁺, NO₃⁻) formákat tudják felvenni",
        explanation: "A növények nem tudják a rendkívül stabil N₂ molekulát felbontani, ezért csak a biológiai vagy ipari nitrogénkötés által előállított reaktív nitrogénformákat (ammónium, nitrát) hasznosíthatják.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Mi az eutrofizáció, és mi okozza a felszíni vizekben?",
        options: [
          "A vizek túlzott nitrát- és foszfátterhelése miatti algásodás és oxigénhiány, amely károsítja a vízi élővilágot",
          "A vizek túlzott klórtartalma",
          "A vizek túlzott oxigéntartalma",
          "A vizek túlzott savassága vulkáni tevékenység miatt",
        ],
        correct_answer: "A vizek túlzott nitrát- és foszfátterhelése miatti algásodás és oxigénhiány, amely károsítja a vízi élővilágot",
        explanation: "A műtrágyákból a vizekbe kerülő nitrát és foszfát túlzott algaszaporulatot idéz elő, ami elbomlásakor oxigént fogyaszt, oxigénhiányt és élővilág-pusztulást okozva.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "szen-csoport-allotrop-modosulatok",
    title: "A szén csoport és a szén körforgása, allotróp módosulatai",
    level: "mindketto",
    theme: "Szervetlen kémia",
    order_index: 18,
    summary_markdown:
      "A szén allotróp módosulatai (gyémánt, grafit, fulleren), a szén-dioxid és a szén körforgása, valamint a szilícium és vegyületeinek (kvarc, üveg) jelentősége.",
    content_markdown: `
## A szén csoport (IV. főcsoport / 14. csoport)

A csoport legfontosabb elemei a **szén (C)** és a **szilícium (Si)**, mindkettő **4 vegyértékelektronnal** rendelkezik, és jellemzően **4 kovalens kötést** alakít ki — ez a szén esetében az élet kémiájának (organikus kémia) alapja.

## A szén allotróp módosulatai

**Gyémánt**:
- Minden szénatom **4 másik szénatomhoz** kapcsolódik erős kovalens kötéssel, térhálós (atomrácsos) szerkezetben (tetraéderes elrendezésben).
- Ez a szerkezet magyarázza a gyémánt **rendkívüli keménységét** (a legkeményebb természetes anyag) és **magas olvadáspontját**.
- Elektromosan nem vezető (nincsenek delokalizált elektronok), de kiválóan vezeti a hőt.

**Grafit**:
- **Réteges szerkezetű**: minden szénatom csak **3 másik szénatomhoz** kapcsolódik erős kovalens kötéssel egy síkban (hatszögletű rácsban), a rétegek között gyenge van der Waals-kölcsönhatás van.
- A negyedik (delokalizált) elektron a rétegen belül szabadon mozoghat, ezért a grafit **jól vezeti az elektromos áramot** (síkkal párhuzamos irányban).
- A rétegek egymáson könnyen elcsúsznak (gyenge kölcsönhatás közöttük), ezért a grafit **puha, csúszós**, kenőanyagként és ceruzabélként (grafitceruza) is használt.

**Fullerének és grafén** (modern allotróp módosulatok):
- **Fullerén (C₆₀)**: futball-labda alakú, zárt gömbszerkezetű molekula.
- **Grafén**: egyetlen atomrétegnyi vékony grafitréteg, rendkívüli szilárdságú és vezetőképességű, a nanotechnológia egyik ígéretes anyaga.

## Szén-monoxid és szén-dioxid

- **Szén-dioxid (CO₂)**: tökéletes égés terméke ($C + O_2 \\rightarrow CO_2$), színtelen, szagtalan gáz, vízben oldva szénsavat képez ($CO_2 + H_2O \\rightleftharpoons H_2CO_3$). Fő **üvegházhatású gáz** — a légkörben növekvő koncentrációja a globális felmelegedés egyik fő oka.
- **Szén-monoxid (CO)**: tökéletlen égés (oxigénhiányos égés) terméke, színtelen, szagtalan, de rendkívül **mérgező** gáz — a hemoglobinhoz a oxigénnél sokkal erősebben kötődik, ezáltal megakadályozza az oxigénszállítást a szervezetben.

## A szén körforgása

A szén a légkör (CO₂), a bioszféra (élő szervezetek, szerves anyagok), a hidroszféra (oldott CO₂, karbonátok) és a kőzetburok (fosszilis tüzelőanyagok, mészkő) között folyamatosan körforgásban van:

- **Fotoszintézis**: $6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2$ (a légköri CO₂-t szerves anyaggá köti a növény).
- **Légzés és égés**: a szerves anyagok oxidációja visszajuttatja a szenet CO₂ formájában a légkörbe.
- Az emberi tevékenység (fosszilis tüzelőanyagok égetése, erdőirtás) **megbontja ezt az egyensúlyt**, a légköri CO₂-koncentráció rohamosan nő, ami a globális felmelegedés fő hajtóereje.

## Szilícium és vegyületei

- A **szilícium** a földkéreg második leggyakoribb eleme (oxigén után), de a szénnel ellentétben nem alkot annyira sokféle vegyületet, mert a Si–Si kötés gyengébb, mint a C–C kötés.
- **Szilícium-dioxid (SiO₂, kvarc)**: térhálós, atomrácsos szerkezetű, rendkívül kemény, magas olvadáspontú anyag — a homok és a kvarc fő alkotórésze, az **üveg** és a számítástechnikai félvezetők (szilícium-egykristály) alapanyaga.
`,
    key_concepts: [
      "gyémánt és grafit szerkezete",
      "szén-monoxid mérgező hatása",
      "szén-dioxid üvegházhatás",
      "szén körforgása (fotoszintézis, légzés)",
      "szilícium-dioxid (kvarc)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért vezeti jól az elektromos áramot a grafit, a gyémánt viszont nem?",
        options: [
          "A grafitban minden szénatom csak 3 másikhoz kötődik, a negyedik elektron delokalizálódik és szabadon mozog, míg a gyémántban minden elektron kötésben van lekötve",
          "A grafit fémes kötésű, a gyémánt ionos kötésű",
          "A gyémántban több elektron van, mint a grafitban",
          "A grafit magasabb hőmérsékleten stabil",
        ],
        correct_answer: "A grafitban minden szénatom csak 3 másikhoz kötődik, a negyedik elektron delokalizálódik és szabadon mozog, míg a gyémántban minden elektron kötésben van lekötve",
        explanation: "A grafit rétegein belül a negyedik vegyértékelektron delokalizált, szabadon mozgó elektronokat biztosít, ellentétben a gyémánttal, ahol minden elektron egy-egy erős kovalens kötésben rögzített.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért különösen mérgező a szén-monoxid (CO) a szervezetre?",
        options: [
          "Mert a hemoglobinhoz az oxigénnél sokkal erősebben kötődik, megakadályozva az oxigénszállítást",
          "Mert erős sav, amely megégeti a légutakat",
          "Mert robbanóképes gáz",
          "Mert lúgos kémhatású",
        ],
        correct_answer: "Mert a hemoglobinhoz az oxigénnél sokkal erősebben kötődik, megakadályozva az oxigénszállítást",
        explanation: "A CO a hemoglobinhoz erősebben kötődik, mint az O₂, ezért blokkolja az oxigén szállítását a szervezetben, ami oxigénhiányos állapotot (fulladást) okoz.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen reakció írja le a fotoszintézist?",
        options: [
          "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
          "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
          "C + O₂ → CO₂",
          "CaCO₃ → CaO + CO₂",
        ],
        correct_answer: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        explanation: "A fotoszintézis során a növények fényenergia felhasználásával szén-dioxidból és vízből szőlőcukrot és oxigént termelnek.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért olyan kemény a gyémánt a szerkezete alapján?",
        options: [
          "Mert minden szénatom 4 másik szénatomhoz kapcsolódik erős kovalens kötéssel egy térhálós (atom)rácsban",
          "Mert rétegesen épül fel, gyenge kölcsönhatásokkal a rétegek között",
          "Mert fémes kötésű anyag",
          "Mert ionos rácsot alkot",
        ],
        correct_answer: "Mert minden szénatom 4 másik szénatomhoz kapcsolódik erős kovalens kötéssel egy térhálós (atom)rácsban",
        explanation: "A gyémánt minden atomja négy erős kovalens kötéssel kapcsolódik szomszédjaihoz háromdimenziós térhálóban, ez adja rendkívüli keménységét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért tekintik a szén-dioxid légköri koncentrációjának emberi tevékenység okozta növekedését a globális felmelegedés fő hajtóerejének?",
        options: [
          "Mert a CO₂ üvegházhatású gáz, amely elnyeli és visszasugározza a Föld felszínéről kiinduló hősugárzást, így fokozza a légkör felmelegedését",
          "Mert a CO₂ mérgező gáz",
          "Mert a CO₂ elnyeli az UV-sugárzást a sztratoszférában",
          "Mert a CO₂ csökkenti a légköri oxigén mennyiségét jelentősen",
        ],
        correct_answer: "Mert a CO₂ üvegházhatású gáz, amely elnyeli és visszasugározza a Föld felszínéről kiinduló hősugárzást, így fokozza a légkör felmelegedését",
        explanation: "Az üvegházhatású gázok (köztük a CO₂) elnyelik a földfelszín által kisugárzott infravörös hőt, és visszasugározzák a felszín felé, emelve a globális átlaghőmérsékletet.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "femek-altalanos-jellemzese",
    title: "Fémek általános jellemzése",
    level: "mindketto",
    theme: "Szervetlen kémia",
    order_index: 19,
    summary_markdown:
      "A fémek jellemző fizikai és kémiai tulajdonságai, a fémek reakciókészségi (feszültségi) sora, valamint a fémek korróziója és az ellene való védekezés.",
    content_markdown: `
## A fémek jellemző fizikai tulajdonságai

A fémek tulajdonságait a **fémes kötés** (delokalizált vegyértékelektronok) magyarázza:

- **Fémes fény (csillogás)**: a delokalizált elektronok visszaverik a fényt.
- **Jó elektromos és hővezetés**: a szabadon mozgó elektronok könnyen szállítják a töltést és az energiát.
- **Nyújthatóság és kovácsolhatóság**: a fématomtörzsek rétegei elcsúszhatnak egymáson törés nélkül, mert a delokalizált elektronfelhő minden irányban egyformán tartja össze őket.
- Szobahőmérsékleten (a higany kivételével) **szilárd halmazállapotúak**.
- Jellemzően **magas az olvadási és forráspontjuk** (bár ez a fématomok közötti kötés erősségétől függően igen tág határok között változik, pl. a higany fp. −39 °C, a wolfrámé kb. 3400 °C).

## A fémek kémiai tulajdonságai

- **Elektronleadásra hajlamosak** (kis ionizációs energia, kis elektronegativitás), ezért reakcióikban jellemzően **redukálószerként** viselkednek, **kationokat** képezve.
- Reakciók:
  - **Oxigénnel**: oxidokat képeznek (pl. $4Al + 3O_2 \\rightarrow 2Al_2O_3$).
  - **Savakkal**: sok fém savakkal hidrogéngázt fejlesztve sót képez (pl. $Zn + 2HCl \\rightarrow ZnCl_2 + H_2$) — de nem minden fém reagál így (a nemesfémek, pl. Au, Pt, nem reagálnak a híg savakkal).
  - **Vízzel**: az aktív fémek (pl. Na, K) vízzel hidrogént fejlesztve reagálnak, akár hidegvízzel is (lásd az alkálifémeknél).

## A fémek reakciókészségi (feszültségi) sora

A fémeket **reakciókészségük (redukálóképességük) szerint** sorba rendezhetjük — ez a **feszültségi sor** (elektrokémiai sorrend):

$$K > Ca > Na > Mg > Al > Zn > Fe > Pb > (H) > Cu > Ag > Au$$

- A sorban **balra álló (aktívabb) fém kiszorítja a jobbra álló (kevésbé aktív) fémet** annak sójából (pl. $Fe + CuSO_4 \\rightarrow FeSO_4 + Cu$, mert a vas aktívabb, mint a réz).
- A **hidrogén előtti** fémek (K-tól Pb-ig) reagálnak híg savakkal, hidrogént fejlesztve; a **hidrogén utáni** fémek (Cu, Ag, Au) **nem** reagálnak híg savakkal ilyen módon (nemesfémek).

## Korrózió

A **korrózió** a fémek felületi kémiai (elsősorban elektrokémiai/redox) elváltozása a környezeti hatások (nedvesség, oxigén, savak, sók) hatására — leggyakoribb formája a **vas rozsdásodása**:

$$4Fe + 3O_2 + 2xH_2O \\rightarrow 2Fe_2O_3 \\cdot xH_2O \\text{ (rozsda)}$$

A korrózió lényegében egy elektrokémiai (galvánelem-szerű) folyamat, amelyet nedvesség és oldott ionok (pl. sós víz, útszóró só) jelentősen felgyorsítanak.

## Korrózió elleni védekezés

- **Bevonatok**: festés, zsírzás, olajozás (fizikai védelem, elzárja a levegőt/nedvességet).
- **Fémbevonatok (galvanizálás)**: cink- (horganyozás) vagy krómbevonat felvitele elektrolitos úton.
- **Ötvözés**: pl. a rozsdamentes acél króm és nikkel hozzáadásával ellenállóbb a korrózióval szemben (a króm felületén védő oxidréteg alakul ki).
- **Katódos védelem**: egy aktívabb fémet (pl. cink- vagy magnézium-"áldozati anódot") kötnek a védendő szerkezethez (pl. hajótestekhez, csővezetékekhez), amely önmaga korrodál a védendő fém helyett.
`,
    key_concepts: [
      "fémes kötés és fizikai tulajdonságok",
      "feszültségi (reakciókészségi) sor",
      "fémek reakciója savval",
      "korrózió (rozsdásodás)",
      "katódos védelem",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért nyújthatók és kovácsolhatók a fémek?",
        options: [
          "Mert a fématomtörzsek rétegei elcsúszhatnak egymáson, miközben a delokalizált elektronfelhő továbbra is összetartja őket",
          "Mert a fémek ionrácsból állnak",
          "Mert a fémek nagyon puha kristályrácsúak",
          "Mert a fémek mindig folyékony halmazállapotúak",
        ],
        correct_answer: "Mert a fématomtörzsek rétegei elcsúszhatnak egymáson, miközben a delokalizált elektronfelhő továbbra is összetartja őket",
        explanation: "A fémes kötés iránytól független jellege lehetővé teszi, hogy a fématomrétegek elcsússzanak egymáson anélkül, hogy a kötés megszakadna.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A feszültségi sor szerint melyik fém reagál híg savval, hidrogént fejlesztve?",
        options: ["Zn (cink)", "Cu (réz)", "Ag (ezüst)", "Au (arany)"],
        correct_answer: "Zn (cink)",
        explanation: "A cink a hidrogén előtt áll a feszültségi sorban, ezért reagál híg savakkal, hidrogént fejlesztve; a réz, ezüst és arany a hidrogén után állnak, ezért nem reagálnak így.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a katódos védelem elve a fémek korróziója ellen?",
        options: [
          "Egy aktívabb fémet (áldozati anódot) kötnek a védendő szerkezethez, amely önmaga korrodál a védendő fém helyett",
          "A védendő fémet lefestik olajjal",
          "A védendő fémet felmelegítik",
          "A védendő fémet ötvözik szénnel",
        ],
        correct_answer: "Egy aktívabb fémet (áldozati anódot) kötnek a védendő szerkezethez, amely önmaga korrodál a védendő fém helyett",
        explanation: "A katódos védelemnél az aktívabb fém (pl. cink vagy magnézium) elektrokémiailag 'magára vállalja' az oxidációt, így a védendő fém (katódként) nem korrodál.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A Fe + CuSO₄ → FeSO₄ + Cu reakció miért megy végbe ebben az irányban, és nem fordítva?",
        options: [
          "Mert a vas aktívabb (előrébb áll a feszültségi sorban), mint a réz, ezért kiszorítja azt a sójából",
          "Mert a réz aktívabb, mint a vas",
          "Mert a vas nemesfém",
          "Mert a réz-szulfát instabil vegyület",
        ],
        correct_answer: "Mert a vas aktívabb (előrébb áll a feszültségi sorban), mint a réz, ezért kiszorítja azt a sójából",
        explanation: "A feszültségi sorban aktívabb (elektronleadásra hajlamosabb) fém kiszorítja a kevésbé aktív fémet annak sójából — a vas a réz előtt áll, ezért ez a reakció spontán végbemegy.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért ellenállóbb a rozsdamentes acél a korrózióval szemben, mint a hagyományos szénacél?",
        options: [
          "Mert a hozzáadott króm a felületén vékony, védő oxidréteget képez, amely megakadályozza a további oxidációt",
          "Mert a rozsdamentes acél nem tartalmaz vasat",
          "Mert a rozsdamentes acél nem fémes anyag",
          "Mert a rozsdamentes acél mindig festve van",
        ],
        correct_answer: "Mert a hozzáadott króm a felületén vékony, védő oxidréteget képez, amely megakadályozza a további oxidációt",
        explanation: "Az ötvözött króm a felületen stabil, összefüggő krómoxid-réteget alakít ki, amely megvédi az alatta lévő fémet a további korróziótól.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "alkalifemek-alkaliföldfemek",
    title: "Alkálifémek és alkáliföldfémek",
    level: "mindketto",
    theme: "Szervetlen kémia",
    order_index: 20,
    summary_markdown:
      "Az alkálifémek (I. főcsoport) és az alkáliföldfémek (II. főcsoport) jellemző tulajdonságai, reakciókészségük trendje, valamint legfontosabb vegyületeik és felhasználásuk.",
    content_markdown: `
## Az alkálifémek (I. főcsoport / 1. csoport)

Az alkálifémek (Li, Na, K, Rb, Cs, Fr) **egyetlen vegyértékelektronnal** rendelkeznek, amelyet könnyen leadnak (kis ionizációs energia), **+1 oxidációs számú** ionokat képezve. Ez teszi őket a periódusos rendszer **legreakcióképesebb fémeivé**.

**Fizikai tulajdonságok**: puha, késsel vágható fémek, alacsony sűrűségűek (Li, Na, K vízen "lebegnek"), viszonylag alacsony olvadáspontúak (a csoportban lefelé haladva még csökken is).

**Kémiai tulajdonságok és reakciókészség**:
- A csoportban **lefelé haladva nő a reakciókészség** (csökken az ionizációs energia, mert nő az atomrádiusz, a legkülső elektron távolabb és gyengébben kötött).
- **Vízzel** hevesen reagálnak, hidrogént fejlesztve és lúgos oldatot képezve:
$$2Na + 2H_2O \\rightarrow 2NaOH + H_2$$
A reakció olyan heves lehet (különösen K, Rb, Cs esetén), hogy a felszabaduló hidrogén meggyullad vagy akár robbanásszerűen ég.
- **Levegőn gyorsan oxidálódnak** (ezért fémolajban/petróleumban tárolják őket), fényes felületük hamar megfakul.
- **Halogénekkel** közvetlenül, hevesen reagálva ionos sókat képeznek (pl. $2Na + Cl_2 \\rightarrow 2NaCl$).

**Legfontosabb vegyületek**: NaCl (konyhasó), NaOH (nátrium-hidroxid, lúgos tisztítószerek, szappanfőzés), Na₂CO₃ (szóda, üveggyártás), NaHCO₃ (szódabikarbóna, sütőpor), KCl és KNO₃ (műtrágyák).

## Az alkáliföldfémek (II. főcsoport / 2. csoport)

Az alkáliföldfémek (Be, Mg, Ca, Sr, Ba, Ra) **2 vegyértékelektronnal** rendelkeznek, +2 oxidációs számú ionokat képeznek. Kevésbé reakcióképesek, mint az azonos periódusban lévő alkálifémek (nagyobb ionizációs energia szükséges a 2. elektron leadásához is), de a csoportban lefelé haladva itt is **nő a reakciókészség**.

**Kémiai tulajdonságok**:
- Vízzel reagálva (kivéve Be, és Mg csak forró vízzel/gőzzel) hidrogént fejlesztenek: $Ca + 2H_2O \\rightarrow Ca(OH)_2 + H_2$.
- Oxigénnel oxidokat képeznek: $2Mg + O_2 \\rightarrow 2MgO$ — a magnézium égése különösen jellemző, intenzív fehér fénnyel jár (ez az oka, hogy tűzijátékokban, vaku-technikában is alkalmazták korábban).

**Legfontosabb vegyületek és élettani/ipari jelentőségük**:
- **Kalcium-karbonát (CaCO₃)**: mészkő, kréta, márvány fő alkotórésze; hevítve mészkő-égetéssel CaO (égetett mész) keletkezik, amely vízzel Ca(OH)₂-vá (oltott mész) alakul — az építőipar (mész, cement) alapanyagai.
- **Kalcium-hidroxid, Ca(OH)₂ (oltott mész)**: mészhabarcs, talajjavítás (savas talajok semlegesítése).
- **Kalcium és a csontozat**: a Ca²⁺ és a foszfát ionok hidroxiapatit formájában építik fel a csontokat és a fogzománcot; a kalcium az izom-összehúzódásban és az idegingerület-átvitelben is nélkülözhetetlen.
- **Magnézium**: a klorofill (a fotoszintézis fő pigmentje) központi atomja, könnyű, szilárd ötvözetek alapanyaga (repülőgép- és autóipar), Mg(OH)₂ savlekötő gyógyszerekben (gyomorsav-túltengés ellen).
- **Bárium-szulfát (BaSO₄)**: vízben oldhatatlan, ezért kontrasztanyagként használják röntgenvizsgálatoknál (a bárium önmagában mérgező lenne, de az oldhatatlan só biztonságosan áthalad a szervezeten).

## Vízkeménység

A vízben oldott Ca²⁺ és Mg²⁺ ionok okozzák a **vízkeménységet** — ezek szappannal oldhatatlan csapadékot (vízkövet) képeznek, ami a mosás hatékonyságát rontja, és a fűtőberendezésekben, vízvezetékekben vízkő-lerakódást okoz.
`,
    key_concepts: [
      "alkálifémek reakciója vízzel",
      "alkáliföldfémek",
      "kalcium-karbonát és mészkőégetés",
      "vízkeménység (Ca²⁺, Mg²⁺)",
      "magnézium a klorofillban",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen termékek keletkeznek, amikor a nátrium vízzel reagál?",
        options: ["nátrium-hidroxid és hidrogéngáz", "nátrium-oxid és oxigén", "nátrium-klorid és víz", "csak hidrogéngáz"],
        correct_answer: "nátrium-hidroxid és hidrogéngáz",
        explanation: "2Na + 2H₂O → 2NaOH + H₂ — a reakció lúgot (NaOH) és hidrogéngázt eredményez.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért tárolják az alkálifémeket (pl. nátriumot) petróleumban vagy fémolajban?",
        options: [
          "Mert levegőn (oxigénnel és nedvességgel) igen gyorsan és hevesen reagálnak",
          "Mert így könnyebben szállíthatók",
          "Mert az alkálifémek folyékonyak szobahőmérsékleten",
          "Mert az olaj lehűti őket",
        ],
        correct_answer: "Mert levegőn (oxigénnel és nedvességgel) igen gyorsan és hevesen reagálnak",
        explanation: "Az alkálifémek nagy reakciókészsége miatt a levegő oxigénjével és nedvességtartalmával gyorsan reagálnak, ezért levegőtől elzárva, olajban tárolják őket.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik ionok okozzák jellemzően a vízkeménységet?",
        options: ["Ca²⁺ és Mg²⁺", "Na⁺ és K⁺", "Cl⁻ és SO₄²⁻", "Fe²⁺ és Fe³⁺"],
        correct_answer: "Ca²⁺ és Mg²⁺",
        explanation: "A vízben oldott kalcium- és magnéziumionok szappannal oldhatatlan csapadékot képezve okozzák a vízkeménységet és a vízkő-lerakódást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nő a reakciókészség az alkálifémek csoportjában lefelé haladva (Li-tól Cs-ig)?",
        options: [
          "Mert nő az atomrádiusz, ezáltal a legkülső elektron távolabb kerül a magtól és gyengébben kötött, könnyebben leadható",
          "Mert csökken az atomrádiusz",
          "Mert nő a vegyértékelektronok száma",
          "Mert a nagyobb alkálifémek nemesgázszerkezetűek",
        ],
        correct_answer: "Mert nő az atomrádiusz, ezáltal a legkülső elektron távolabb kerül a magtól és gyengébben kötött, könnyebben leadható",
        explanation: "A csoportban lefelé haladva egyre több héj alakul ki, a legkülső elektron egyre távolabb és gyengébben kötött, ezért csökken az ionizációs energia, nő a reakciókészség.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért használható a bárium-szulfát (BaSO₄) biztonságosan kontrasztanyagként röntgenvizsgálatoknál, jóllehet a báriumionok mérgezőek?",
        options: [
          "Mert a BaSO₄ vízben (és testnedvekben) gyakorlatilag oldhatatlan, így a Ba²⁺-ionok nem szabadulnak fel a szervezetben",
          "Mert a bárium önmagában nem mérgező",
          "Mert a szulfátion megsemmisíti a bárium mérgező hatását kémiailag",
          "Mert a BaSO₄ gyorsan kiürül a légzőrendszeren keresztül",
        ],
        correct_answer: "Mert a BaSO₄ vízben (és testnedvekben) gyakorlatilag oldhatatlan, így a Ba²⁺-ionok nem szabadulnak fel a szervezetben",
        explanation: "A bárium-szulfát rossz oldhatósága miatt nem disszociál jelentős mértékben, ezért a mérgező Ba²⁺-ionok nem kerülnek szabad formában a szervezetbe, biztonságos kontrasztanyagot eredményezve.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "atmenetifemek-vas-rez-cink",
    title: "Átmenetifémek (vas, réz, cink) és vegyületeik",
    level: "emelt",
    theme: "Szervetlen kémia",
    order_index: 21,
    summary_markdown:
      "Az átmenetifémek jellemző tulajdonságai (változó oxidációs szám, színes vegyületek), valamint a vas, a réz és a cink legfontosabb tulajdonságai, vegyületei és ipari felhasználása.",
    content_markdown: `
## Az átmenetifémek (mellékcsoportok) általános jellemzői

Az átmenetifémek a periódusos rendszer mellékcsoportjaiban találhatók, ahol a **d-alhéj fokozatosan töltődik fel**. Jellemző tulajdonságaik:

- **Változó oxidációs szám**: sok átmenetifém többféle oxidációs számmal is előfordulhat vegyületeiben (pl. a vas +2 és +3, a réz +1 és +2 oxidációs számban is stabil vegyületeket képez) — ez a d-elektronok viszonylag közeli energiaszintje miatt lehetséges.
- **Színes vegyületek/ionok**: az átmenetifém-ionok (és vegyületeik) gyakran jellegzetesen színesek (pl. Cu²⁺ kék, Fe³⁺ sárgásbarna, Fe²⁺ zöldes), mivel a d-alhéj részlegesen betöltött elektronjai a látható fény tartományában nyelnek el fényt.
- **Komplexképzés**: az átmenetifém-ionok hajlamosak semleges molekulákkal vagy ionokkal (ligandumokkal) komplex vegyületeket képezni (pl. $[Cu(NH_3)_4]^{2+}$ — mélykék színű komplex).
- **Katalitikus aktivitás**: számos átmenetifém és vegyülete hatékony katalizátor (pl. Fe a Haber–Bosch-eljárásban, Ni a zsírok hidrogénezésénél, V₂O₅ a kontakt eljárásban).
- Jellemzően nagy sűrűségű, magas olvadáspontú, kemény fémek (kivétel pl. a higany).

## A vas (Fe)

- A földkéreg egyik leggyakoribb fémje, a modern civilizáció alapfémje (ötvözetek: nyersvas, öntöttvas, acél).
- **Ipari előállítás nagyolvasztóban**: vasérc (pl. Fe₂O₃) redukciója szén-monoxiddal:
$$Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$$
- **Ötvözetei**: az **acél** vas-szén ötvözet (kis széntartalommal, jobb mechanikai tulajdonságokkal), a **rozsdamentes acél** króm (és nikkel) hozzáadásával korrózióálló.
- **Oxidációs állapotok**: Fe²⁺ (vas(II), pl. FeSO₄, zöldes színű), Fe³⁺ (vas(III), pl. Fe₂O₃, vörösesbarna színű, ez a rozsda fő alkotórésze).
- **Élettani szerep**: a hemoglobin (vérben az oxigénszállító fehérje) központi atomja, vashiány esetén vérszegénység (anémia) alakulhat ki.

## A réz (Cu)

- Vöröses színű, jó elektromos és hővezető fém — ezért elterjedt az elektromos vezetékekben, kábelekben.
- Nemesfémekhez hasonlóan viszonylag ellenálló a korrózióval szemben (nem reagál híg savakkal a feszültségi sorban elfoglalt helye miatt), de levegőn hosszú idő alatt jellegzetes zöld **patina** (bázisos réz-karbonát) réteg képződik a felületén, amely tovább védi a fém belsejét.
- **Ötvözetei**: a **bronz** (réz + ón), a **sárgaréz (messing)** (réz + cink).
- **Vegyületei**: a réz(II)-szulfát (CuSO₄, kék színű, kristályvizes formája a "kékkő"), gombaölő permetezőszerek (pl. bordói keverék) alapanyaga.

## A cink (Zn)

- Kékesfehér, viszonylag reakcióképes fém (a feszültségi sorban a hidrogén előtt áll), híg savakkal hidrogént fejlesztve reagál.
- **Horganyozás (galvanizálás)**: vas- és acéltárgyak cinkbevonata a korrózió ellen — a cink "áldozati anódként" is működik (lásd a katódos védelem elvét).
- Fontos alkotórésze több enzimnek (pl. az emberi szervezetben), ezért esszenciális nyomelem.
- A cink-oxid (ZnO) fehér pigment festékekben, valamint fényvédő krémekben (UV-elnyelő tulajdonsága miatt) is alkalmazott.
`,
    key_concepts: [
      "átmenetifémek változó oxidációs száma",
      "színes átmenetifém-ionok",
      "vas előállítása nagyolvasztóban",
      "réz patinaképződése",
      "cink horganyozás (galvanizálás)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemző az átmenetifémek vegyületeire, elsősorban a d-elektronok miatt?",
        options: [
          "Gyakran színesek és több oxidációs számban is előfordulnak",
          "Mindig fehér színűek",
          "Mindig egyértékű ionokat képeznek",
          "Sosem képeznek komplex vegyületeket",
        ],
        correct_answer: "Gyakran színesek és több oxidációs számban is előfordulnak",
        explanation: "A d-elektronok részlegesen betöltött szerkezete miatt az átmenetifémek jellemzően színes vegyületeket és több stabil oxidációs számot mutatnak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik reakció írja le a vas iparilag történő előállítását a nagyolvasztóban?",
        options: ["Fe₂O₃ + 3CO → 2Fe + 3CO₂", "2Fe + 3O₂ → 2Fe₂O₃", "Fe + 2HCl → FeCl₂ + H₂", "FeSO₄ → Fe + SO₄"],
        correct_answer: "Fe₂O₃ + 3CO → 2Fe + 3CO₂",
        explanation: "A nagyolvasztóban a vasércet (Fe₂O₃) szén-monoxiddal redukálják fémvassá, szén-dioxid melléktermék mellett.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a zöld patina, amely idővel a rézfelületen kialakul?",
        options: ["bázisos réz-karbonát réteg", "réz-oxid, amely lepattogzik", "vas-oxid (rozsda)", "cink-oxid réteg"],
        correct_answer: "bázisos réz-karbonát réteg",
        explanation: "A levegő nedvességével és szén-dioxidjával reagálva a réz felszínén jellegzetes zöld, bázisos réz-karbonát tartalmú patina alakul ki, amely további védőréteget is biztosít.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért véd a horganyozott (cinkbevonatú) vastárgy a rozsdásodás ellen akkor is, ha a bevonat egy pontján megsérül?",
        options: [
          "Mert a cink aktívabb fém, mint a vas, ezért a sérülés helyén is inkább a cink oxidálódik ('áldozati' szerepben), a vas helyett",
          "Mert a cink teljesen áthatolhatatlan a levegő számára még sérülés esetén is",
          "Mert a cink nemesfém",
          "Mert a horganyozás megváltoztatja a vas kémiai összetételét",
        ],
        correct_answer: "Mert a cink aktívabb fém, mint a vas, ezért a sérülés helyén is inkább a cink oxidálódik ('áldozati' szerepben), a vas helyett",
        explanation: "A cink a feszültségi sorban a vas előtt áll (aktívabb), ezért egy elektrokémiai cellában előnyösebben oxidálódik, így megvédi a vasat a korróziótól még kisebb sérülés esetén is.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért lehet a Fe²⁺ (vas(II)) és a Fe³⁺ (vas(III)) egyaránt stabil vegyületeket képző oxidációs állapota a vasnak?",
        options: [
          "Mert a d-alhéj elektronjai viszonylag közeli energiaszinten vannak, így a vas könnyen ad le 2 vagy 3 elektront is",
          "Mert a vas mindig 8 vegyértékelektronnal rendelkezik",
          "Mert a Fe²⁺ és Fe³⁺ valójában ugyanaz az ion",
          "Mert a vas nemesgázszerkezetű elem",
        ],
        correct_answer: "Mert a d-alhéj elektronjai viszonylag közeli energiaszinten vannak, így a vas könnyen ad le 2 vagy 3 elektront is",
        explanation: "Az átmenetifémeknél a d-elektronok energiaszintje közel van egymáshoz, ezért többféle elektronszám leadásával is viszonylag stabil elektronszerkezet érhető el, ez okozza a változó oxidációs számot.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "szenhidrogenek-alkanok-alkenek-alkinek",
    title: "Szerves kémia alapjai — szénhidrogének (alkánok, alkének, alkinek)",
    level: "mindketto",
    theme: "Szerves kémia",
    order_index: 22,
    summary_markdown:
      "A szerves kémia alapfogalmai (a szén négyvegyértékűsége, homológ sor, izoméria), valamint a telített (alkán), egyszeresen (alkén) és többszörösen telítetlen (alkin) szénhidrogének szerkezete, elnevezése és jellemző reakciói.",
    content_markdown: `
## A szerves kémia alapjai

A **szerves kémia** a szén vegyületeivel foglalkozik (kivéve néhány egyszerű vegyületet, pl. CO₂, karbonátok, amelyeket hagyományosan a szervetlen kémiához sorolnak). A szén szerves kémiai kiemelkedő jelentőségét az adja, hogy:

- **4 vegyértékű**, ezért 4 kovalens kötést képezhet,
- képes **hosszú láncokat és gyűrűket** kialakítani más szénatomokkal (**katenáció**),
- egyes, kettes és hármas kötéseket is létesíthet, ezáltal rendkívül sokféle szerkezet és vegyület lehetséges.

**Homológ sor**: azonos szerkezeti felépítésű, de a szénatomok számában (és így móltömegében) fokozatosan eltérő vegyületek sorozata, amelyben szomszédos tagok között állandó a különbség (pl. –CH₂– csoportonként), és a fizikai tulajdonságok (olvadás-/forráspont) fokozatosan változnak.

**Izoméria**: azonos molekulaformulájú, de eltérő szerkezetű (és ezért eltérő tulajdonságú) vegyületek jelensége (pl. a bután és az izobután azonos, C₄H₁₀ összegformulájú, de eltérő szerkezetű).

## Alkánok (telített szénhidrogének)

- Csak **egyes kötéseket** tartalmaznak a szénatomok között, általános képletük: **CₙH₂ₙ₊₂**.
- Elnevezésük: metán (C₁), etán (C₂), propán (C₃), bután (C₄), pentán (C₅), hexán (C₆) stb. — a görög/latin számnevekhez a **-án** végződést kapcsoljuk.
- **Kémiailag viszonylag inertek** (innen a "telített" elnevezés is), jellemző reakciójuk az **égés** (teljes égésnél CO₂ és H₂O keletkezik, pl. $CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$) és a **szubsztitúció (helyettesítés)**, pl. halogénezés fény hatására: $CH_4 + Cl_2 \\xrightarrow{fény} CH_3Cl + HCl$.
- Felhasználás: földgáz (főleg metán), autógáz (propán-bután, LPG), motorbenzin és gázolaj alapanyagai (a kőolaj lepárlásából).

## Alkének (egyszeresen telítetlen szénhidrogének)

- Legalább egy **C=C kettős kötést** tartalmaznak, általános képletük (egy kettős kötés esetén): **CₙH₂ₙ**.
- Elnevezésük: etén (C₂, köznyelvben etilén), propén (C₃), butén (C₄) stb. — az **-én** végződés jelzi a kettős kötést.
- **Additív (addíciós) reakciókra hajlamosak**: a kettős kötés felszakadásával más atomok/atomcsoportok kapcsolódhatnak a szénatomokhoz, pl.:
  - Hidrogénezés: $CH_2=CH_2 + H_2 \\rightarrow CH_3-CH_3$ (Ni-katalizátorral, a margaringyártás alapja is)
  - Halogénaddíció: $CH_2=CH_2 + Br_2 \\rightarrow CH_2Br-CH_2Br$ (a bróm elszíntelenedése jellegzetes kimutatási reakció a kettős kötésre)
  - Polimerizáció: sok etén-molekula összekapcsolódásával **polietilén** (a leggyakoribb műanyag) képződik.

## Alkinek (kétszeresen telítetlen szénhidrogének)

- Legalább egy **C≡C hármas kötést** tartalmaznak, általános képletük (egy hármas kötés esetén): **CₙH₂ₙ₋₂**.
- Legismertebb tagja az **etin (acetilén, C₂H₂)**, amely oxigénnel égve rendkívül magas hőmérsékletű lángot ad — ez az alapja az **autogén hegesztésnek/lángvágásnak**.
- Az alkinek is additív reakciókra hajlamosak, hasonlóan az alkénekhez, csak két lépésben (a hármas kötés két lépésben telíthető telítetté).

## Összefoglaló táblázat

| Típus | Kötés | Általános képlet | Jellemző reakció |
|---|---|---|---|
| Alkán | csak egyes kötés | CₙH₂ₙ₊₂ | szubsztitúció, égés |
| Alkén | egy C=C kettős kötés | CₙH₂ₙ | addíció |
| Alkin | egy C≡C hármas kötés | CₙH₂ₙ₋₂ | addíció |
`,
    key_concepts: [
      "homológ sor és izoméria",
      "alkánok (CₙH₂ₙ₊₂), szubsztitúció",
      "alkének (CₙH₂ₙ), addíció",
      "alkinek (CₙH₂ₙ₋₂)",
      "polimerizáció",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az alkánok általános összegképlete?",
        options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"],
        correct_answer: "CₙH₂ₙ₊₂",
        explanation: "Az alkánok (telített szénhidrogének) általános képlete CₙH₂ₙ₊₂, csak egyes kötéseket tartalmaznak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik reakciótípus jellemző az alkénekre a C=C kettős kötés miatt?",
        options: ["addíció (pl. hidrogénezés, halogénaddíció)", "szubsztitúció (helyettesítés)", "csak égés", "kondenzáció"],
        correct_answer: "addíció (pl. hidrogénezés, halogénaddíció)",
        explanation: "Az alkének reaktív C=C kötése miatt jellemzően addíciós reakciókra hajlamosak, amelyekben a kettős kötés egy egyes kötéssé alakul, új atomok kapcsolódásával.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért használható a bróm-oldat elszíntelenedése a kettős kötés (C=C) kimutatására?",
        options: [
          "Mert a bróm addíciós reakcióban kapcsolódik a kettős kötéshez, miközben a bróm jellegzetes vörösesbarna színe eltűnik",
          "Mert a bróm csak alkánokkal reagál",
          "Mert a bróm mindig elszíntelenedik, függetlenül a vegyülettől",
          "Mert a bróm szubsztitúcióval reagál minden szénhidrogénnel",
        ],
        correct_answer: "Mert a bróm addíciós reakcióban kapcsolódik a kettős kötéshez, miközben a bróm jellegzetes vörösesbarna színe eltűnik",
        explanation: "A telítetlen (kettős kötést tartalmazó) szénhidrogének a brómot addícióval megkötik, ezáltal a bróm oldat vörösesbarna színe elhalványul/eltűnik, ez az addíció (és a kettős kötés) kimutatásának egyszerű módja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Mi a bután és az izobután (mindkettő C₄H₁₀ összegformulájú, de eltérő szerkezetű) vegyületek közötti kapcsolat neve?",
        options: ["izoméria", "homológia", "polimerizáció", "allotrópia"],
        correct_answer: "izoméria",
        explanation: "Az izoméria azt a jelenséget jelöli, amikor azonos összegformulájú vegyületek eltérő szerkezettel (és ezért eltérő tulajdonságokkal) rendelkeznek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért reagálnak az alkánok jellemzően szubsztitúcióval (helyettesítéssel), nem addícióval, míg az alkének addícióval?",
        options: [
          "Mert az alkánokban nincs többszörös kötés, amelyhez atomok kapcsolódhatnának, csak egy-egy hidrogén helyettesíthető, míg az alkének kettős kötése felszakadhat és új atomokat köthet meg",
          "Mert az alkánok reakcióképesebbek, mint az alkének",
          "Mert az alkének nem tartalmaznak szénatomokat",
          "Mert az alkánokban több szénatom van, mint az alkénekben",
        ],
        correct_answer: "Mert az alkánokban nincs többszörös kötés, amelyhez atomok kapcsolódhatnának, csak egy-egy hidrogén helyettesíthető, míg az alkének kettős kötése felszakadhat és új atomokat köthet meg",
        explanation: "A telített alkánoknál nincs 'szabad' kötőhely új atomok számára, csak egy meglévő atom (jellemzően H) helyettesíthető; az alkének kettős kötése viszont felszakadva additív reakcióra ad lehetőséget.",
        difficulty: 3,
      },
    ],
  },
];
