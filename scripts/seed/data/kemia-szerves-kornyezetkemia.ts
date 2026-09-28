import type { TopicSeed } from "./angol";

export type QuestionSeed = {
  question_type: "multiple_choice";
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  difficulty: 1 | 2 | 3;
};

export const kemiaSzervesKornyezetkemiaTopics: TopicSeed[] = [
  {
    slug: "aromas-szenhidrogenek",
    title: "Aromás szénhidrogének",
    level: "mindketto",
    theme: "Szerves kémia",
    order_index: 23,
    summary_markdown:
      "A benzol és az aromás szénhidrogének (aromás gyűrűs vegyületek) sajátos, delokalizált elektronszerkezete, jellemző szubsztitúciós reakciókészsége, fontosabb származékai és környezeti-egészségügyi vonatkozásai.",
    content_markdown: `
## A benzol (C₆H₆) szerkezete

A benzol a legegyszerűbb **aromás szénhidrogén**: hat szénatomból álló, síkalkatú (planáris) gyűrű, amelyben minden szénatom **sp² hibridizált**, és egy-egy hidrogénatomhoz kapcsolódik.

- A hagyományos **Kekulé-szerkezet** váltakozó egyes és kettős kötésekkel ábrázolja a gyűrűt, ez azonban nem írja le pontosan a valóságot.
- Valójában a hat szénatom **p-pályái egyetlen, a gyűrű síkja fölött és alatt elhelyezkedő, delokalizált π-elektronrendszert** alkotnak, amelyben mind a 6 π-elektron egyenletesen oszlik el a gyűrűn.
- Ennek következtében a benzol **minden C–C kötése egyforma hosszúságú** (az egyes és kettős kötés közötti érték), és a molekula a vártnál **jóval stabilabb** ("aromás stabilizációs energia"), mint egy elméleti, lokalizált kettős kötésekkel rendelkező molekula lenne.

## Jellemző reakciókészség: szubsztitúció, nem addíció

Bár a benzol formálisan telítetlen (a Kekulé-képlet szerint 3 kettős kötést "tartalmaz"), **nem addícióra**, hanem **elektrofil szubsztitúcióra** hajlamos, mert egy addíciós reakció megszüntetné a stabil, delokalizált π-elektronrendszert, ami energetikailag kedvezőtlen lenne.

Jellemző szubsztitúciós reakciók:
- **Nitrálás**: $C_6H_6 + HNO_3 \\xrightarrow{H_2SO_4} C_6H_5NO_2 + H_2O$ (nitrobenzol keletkezik, robbanóanyagok, pl. TNT gyártásának első lépése).
- **Halogénezés**: katalizátor (pl. FeBr₃) jelenlétében $C_6H_6 + Br_2 \\xrightarrow{FeBr_3} C_6H_5Br + HBr$.
- **Szulfonálás**: tömény kénsavval szulfonsav-származékok keletkeznek (pl. mosószerek alapanyagai).

A benzol égése jellegzetesen **kormozó, erősen füstölő lánggal** megy végbe, mert a magas szén–hidrogén arány miatt a tökéletlen égés terméke, a korom (finom szénrészecskék) nagy mennyiségben keletkezik.

## Fontosabb aromás származékok

- **Toluol (metil-benzol)**: oldószer, valamint a TNT (trinitrotoluol) robbanóanyag alapanyaga.
- **Xilolok**: oldószerek, festékipari alapanyagok.
- **Sztirol (vinil-benzol)**: polimerizációval **polisztirol** műanyaggá alakítható.
- **Naftalin**: két összeépült benzolgyűrűből álló, szilárd, jellegzetes szagú vegyület, régebben molyirtóként használták.

## Egészségügyi és környezeti vonatkozások

- A **benzol maga rákkeltő (karcinogén)** anyag, tartós expozíció esetén vérképzőszervi rákot (leukémiát) okozhat, ezért a motorbenzin benzoltartalmát ma szigorúan korlátozzák.
- A **policiklusos aromás szénhidrogének (PAH-ok)** — több összekapcsolódó aromás gyűrűből álló vegyületek — a szerves anyagok **tökéletlen égésekor** (dohányfüst, kipufogógáz, grillezés, faégetés) keletkeznek, sok közülük szintén rákkeltő hatású, és a légszennyezés fontos, egészségre veszélyes összetevői.
`,
    key_concepts: [
      "delokalizált π-elektronrendszer",
      "aromás stabilitás",
      "elektrofil szubsztitúció",
      "toluol, sztirol, naftalin",
      "policiklusos aromás szénhidrogének (PAH)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hány szénatomból épül fel a benzolgyűrű?",
        options: ["6", "4", "8", "5"],
        correct_answer: "6",
        explanation: "A benzol (C₆H₆) hat szénatomból álló, síkalkatú gyűrűs molekula.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik reakciótípus jellemző a benzolra, nem pedig az addíció?",
        options: ["elektrofil szubsztitúció", "hidrogénezés", "polimerizáció", "hidratáció"],
        correct_answer: "elektrofil szubsztitúció",
        explanation: "A benzol stabil, delokalizált π-elektronrendszere miatt jellemzően szubsztitúciós reakciókra hajlamos, nem addícióra.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik vegyület a TNT (trinitrotoluol) robbanóanyag alapanyaga?",
        options: ["toluol", "naftalin", "sztirol", "xilol"],
        correct_answer: "toluol",
        explanation: "A toluolt (metil-benzolt) salétromsavval nitrálva állítják elő a TNT-t.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kormozó, füstölő lánggal ég a benzol a legtöbb alkánhoz képest?",
        options: [
          "Mert a benzol magas szén–hidrogén aránya miatt tökéletlen égéskor sok korom (finom szénrészecske) keletkezik",
          "Mert a benzol nem tartalmaz szénatomot",
          "Mert a benzol nem gyúlékony",
          "Mert a benzol csak vízzel reagál, nem oxigénnel",
        ],
        correct_answer: "Mert a benzol magas szén–hidrogén aránya miatt tökéletlen égéskor sok korom (finom szénrészecske) keletkezik",
        explanation: "A benzol viszonylag kevés hidrogént tartalmaz a szénatomok számához képest, ezért égésekor jelentős mennyiségű korom képződik, ez adja a jellegzetes kormozó lángot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért részesíti előnyben a benzol a szubsztitúciós reakciókat az addíciós reakciókkal szemben, jóllehet a Kekulé-képlet szerint három kettős kötést \"tartalmaz\"?",
        options: [
          "Mert egy addíciós reakció megszüntetné a gyűrűben kialakult, stabil, delokalizált π-elektronrendszert, ami energetikailag kedvezőtlen lenne",
          "Mert a benzolban nincsenek π-elektronok",
          "Mert a benzol atomrácsos szerkezetű",
          "Mert a benzol ionos vegyület",
        ],
        correct_answer: "Mert egy addíciós reakció megszüntetné a gyűrűben kialakult, stabil, delokalizált π-elektronrendszert, ami energetikailag kedvezőtlen lenne",
        explanation: "A delokalizáció miatt kialakuló extra stabilitás (aromás stabilizációs energia) elveszne egy addíciós reakció során, ezért a molekula energetikailag a szubsztitúciót \"preferálja\", amely megőrzi a gyűrű aromás jellegét.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "alkoholok-aldehidek-ketonok",
    title: "Halogénezett és oxigéntartalmú szerves vegyületek — alkoholok, aldehidek, ketonok",
    level: "mindketto",
    theme: "Szerves kémia",
    order_index: 24,
    summary_markdown:
      "A halogénezett szénhidrogének (freonok, PVC) környezeti jelentősége, valamint az alkoholok, aldehidek és ketonok szerkezete, jellemző reakciói (oxidáció, észteresítés) és a mindennapi életben betöltött szerepük.",
    content_markdown: `
## Halogénezett szénhidrogének

A halogénezett szénhidrogénekben egy vagy több hidrogénatomot halogénatom (F, Cl, Br, I) helyettesít.

- **Freonok (klór-fluor-szénhidrogének, CFC-k)**: régen hűtőközegként és hajtógázként (spray-kben) használt, rendkívül stabil vegyületek — épp ezért jutottak el bomlatlanul a sztratoszférába, ahol UV-sugárzás hatására klóratomokra bomlanak, amelyek **katalitikusan bontják az ózonréteget**. Emiatt gyártásukat és felhasználásukat nemzetközi egyezmény (Montreali Jegyzőkönyv, 1987) korlátozta.
- **Vinil-klorid (CH₂=CHCl)**: a PVC (polivinil-klorid) műanyag monomerje.
- **Kloroform (CHCl₃)**: régen altatószerként is használt oldószer.
- **DDT**: egykor széles körben alkalmazott rovarirtó szer, amely a környezetben nagyon lassan bomlik le (perzisztens szerves szennyező anyag), és a táplálékláncban felhalmozódva (bioakkumuláció) károsította a ragadozó madarak szaporodását — ma már számos országban betiltották.

## Alkoholok (–OH funkciós csoport)

Az alkoholok jellemző funkciós csoportja a **hidroxilcsoport (–OH)**, amely szénatomhoz kapcsolódik.

- **Osztályozás**: elsőrendű (a hidroxilcsoportot hordozó szénatom egy másik szénatomhoz kapcsolódik), másodrendű (két másik szénatomhoz), harmadrendű alkohol (három másik szénatomhoz).
- **Metanol (CH₃OH, "faszesz")**: mérgező, kis mennyiségben is vakságot, nagyobb dózisban halált okozhat, mert a szervezet formaldehiddé, majd hangyasavvá oxidálja.
- **Etanol (C₂H₅OH, "borszesz")**: élelmiszeripari (szeszes italok), fertőtlenítő, üzemanyag-adalék (bioetanol).
- **Többértékű alkoholok**: az **etilén-glikol** (fagyálló alapanyaga) és a **glicerin (glicerol)** — a glicerin a zsírok egyik építőeleme, kozmetikumokban és a nitroglicerin (robbanóanyag) előállításában is fontos.

## Az alkoholok jellemző reakciói

- **Oxidáció**: elsőrendű alkohol → aldehid → karbonsav; másodrendű alkohol → keton; harmadrendű alkohol nem oxidálódik könnyen (nincs a szénatomon leválasztható hidrogén).
- Az emberi szervezetben az etanolt az **alkohol-dehidrogenáz** enzim először acetaldehiddé, majd tovább ecetsavvá oxidálja — ez a máj alkohol-lebontásának alapja.
- **Vízkilépés (dehidratáció)**: savas katalizátorral, hő hatására alkénné alakulhat.
- **Észteresítés**: karbonsavval reagálva észtert képez (lásd a következő tételt).

## Aldehidek és ketonok (karbonilcsoport, C=O)

- **Aldehid**: a karbonilcsoport a szénlánc végén helyezkedik el (a karbonil-szénhez legalább egy hidrogén is kapcsolódik). Legfontosabb képviselői: a **formaldehid (metanál, HCHO)** — fertőtlenítő, tartósítószer, de mérgező és rákkeltő gyanús anyag —, valamint az **acetaldehid (etanál)**, amely az etanol lebomlásának köztes terméke.
- **Keton**: a karbonilcsoport a szénlánc belsejében található, két szénlánchoz kapcsolódva. Legismertebb példa az **aceton (propanon)**, amely fontos oldószer, és körömlakklemosóként is használt.
- **Megkülönböztetés kémiailag**: az aldehidek könnyen oxidálhatók karbonsavvá, ezért **redukáló tulajdonságúak** — ezüsttükörpróbával (Tollens-reagens: Ag⁺-ionok fémezüstté redukálódnak, fényes "tükröt" alkotva az edény falán) és Fehling-próbával (Cu²⁺-ionok téglavörös Cu₂O-csapadékká redukálódnak) kimutathatók, míg a **ketonok ezekre a próbákra negatívak**.
`,
    key_concepts: [
      "freonok és az ózonréteg károsodása",
      "elsőrendű, másodrendű, harmadrendű alkohol",
      "alkohol oxidációja (aldehid, keton)",
      "aldehid- és ketoncsoport (C=O)",
      "ezüsttükörpróba, Fehling-próba",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik funkciós csoport jellemzi az alkoholokat?",
        options: ["hidroxilcsoport (–OH)", "karboxilcsoport (–COOH)", "karbonilcsoport (C=O)", "aminocsoport (–NH₂)"],
        correct_answer: "hidroxilcsoport (–OH)",
        explanation: "Az alkoholok jellemző funkciós csoportja a szénatomhoz kapcsolódó hidroxilcsoport (–OH).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért veszélyesek a freonok (CFC-k) a légkörre?",
        options: [
          "A sztratoszférába jutva UV-sugárzás hatására klóratomokra bomlanak, amelyek katalitikusan bontják az ózonréteget",
          "Mert erősen mérgező, szúrós szagú gázok",
          "Mert üvegházhatásuk nincs, de robbanékonyak",
          "Mert azonnal savas esőt okoznak",
        ],
        correct_answer: "A sztratoszférába jutva UV-sugárzás hatására klóratomokra bomlanak, amelyek katalitikusan bontják az ózonréteget",
        explanation: "A freonok rendkívül stabilak, ezért bomlatlanul jutnak a sztratoszférába, ahol UV-fény hatására felszabaduló klóratomok katalitikusan lebontják az ózonmolekulákat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik próbával mutatható ki jellegzetesen az aldehidcsoport jelenléte?",
        options: ["ezüsttükörpróba (Tollens-reagens)", "lángfestés", "bróm-addíció", "sav-bázis indikátor"],
        correct_answer: "ezüsttükörpróba (Tollens-reagens)",
        explanation: "Az aldehidek redukáló tulajdonságuk miatt az Ag⁺-ionokat fémezüstté redukálják, jellegzetes ezüsttükröt hozva létre, míg a ketonok erre nem képesek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért különösen mérgező a metanol (faszesz) az emberi szervezetre?",
        options: [
          "Mert a szervezet formaldehiddé, majd hangyasavvá oxidálja, amelyek károsítják a látóideget és súlyos mérgezést okoznak",
          "Mert a metanol robbanékony gáz",
          "Mert a metanol erős sav",
          "Mert a metanol azonnal megdermeszti a fehérjéket",
        ],
        correct_answer: "Mert a szervezet formaldehiddé, majd hangyasavvá oxidálja, amelyek károsítják a látóideget és súlyos mérgezést okoznak",
        explanation: "Az alkohol-dehidrogenáz enzim a metanolt mérgező köztes termékekké (formaldehid, hangyasav) alakítja, ezek okozzák a jellegzetes látáskárosodást és a súlyos mérgezési tüneteket.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nem oxidálódik könnyen a harmadrendű alkohol, szemben az elsőrendű és másodrendű alkoholokkal?",
        options: [
          "Mert a hidroxilcsoportot hordozó szénatomon nincs olyan hidrogénatom, amelyet az oxidáció során le lehetne választani",
          "Mert a harmadrendű alkoholok mindig gázhalmazállapotúak",
          "Mert a harmadrendű alkoholok nem tartalmaznak szénatomot",
          "Mert a harmadrendű alkoholok erős savak",
        ],
        correct_answer: "Mert a hidroxilcsoportot hordozó szénatomon nincs olyan hidrogénatom, amelyet az oxidáció során le lehetne választani",
        explanation: "Az alkohol oxidációjához a hidroxilcsoportot hordozó szénatomon lévő hidrogén leválasztására van szükség; a harmadrendű alkoholnál ez a szénatom három másik szénatomhoz kapcsolódik, hidrogént nem hordoz, ezért nem oxidálódik a szokásos módon.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "karbonsavak-es-eszterek",
    title: "Karbonsavak és észterek",
    level: "mindketto",
    theme: "Szerves kémia",
    order_index: 25,
    summary_markdown:
      "A karbonsavak (karboxilcsoport) jellemző tulajdonságai és homológ sora, az észteresítés egyensúlyi reakciója, valamint a zsírok mint észterek és az elszappanosítás folyamata.",
    content_markdown: `
## A karboxilcsoport (–COOH)

A karbonsavak jellemző funkciós csoportja a **karboxilcsoport (–COOH)**, amely egy karbonil- (C=O) és egy hidroxilcsoportból (–OH) épül fel egyazon szénatomon.

- A karbonsavak **savas kémhatásúak**, mert vizes oldatban egy protont (H⁺-t) képesek leadni: $R-COOH \\rightleftharpoons R-COO^- + H^+$. A keletkező karboxilát-anion (R–COO⁻) különösen stabil, mert a negatív töltés **delokalizálódik** a két oxigénatom között, ez magyarázza a karbonsavak (bár a legtöbb esetben gyenge sav) viszonylag jelentős savasságát más oxigéntartalmú szerves vegyülethez képest.

## A karbonsavak homológ sora

- **Hangyasav (metánsav, HCOOH)**: a csalán és néhány hangyafaj mérgének alkotórésze, bőrirritáló hatású.
- **Ecetsav (etánsav, CH₃COOH)**: az étkezési ecet fő alkotórésze.
- **Vajsav (butánsav)**: az avas vaj jellegzetes, kellemetlen szagáért felelős.
- **Zsírsavak** (pl. palmitinsav, sztearinsav): hosszú szénláncú karbonsavak, a zsírok és olajok felépítésében játszanak alapvető szerepet.
- **Kétbázisú karbonsavak**: pl. az oxálsav (sóskában) két karboxilcsoportot tartalmaz.

A karbonsavak jellemző reakciói közé tartozik a fémekkel (hidrogénfejlődéssel) és a karbonátokkal (szén-dioxid-fejlődéssel) való reakció, hasonlóan a szervetlen savakhoz.

## Az észteresítés (Fischer-észteresítés)

A karbonsavak alkoholokkal **egyensúlyi reakcióban**, savas katalizátor jelenlétében **észtert** képeznek, vízkilépés közben:

$$R-COOH + R'-OH \\rightleftharpoons R-COO-R' + H_2O$$

Például: $CH_3COOH + C_2H_5OH \\rightleftharpoons CH_3COOC_2H_5 + H_2O$ (ecetsav + etanol → etil-acetát, jellegzetes, gyümölcsös illatú oldószer és körömlakklemosó-alkotórész).

Mivel **egyensúlyi** reakcióról van szó, az észter — savas vagy lúgos közegben — **hidrolizálható** is, azaz visszaalakítható karbonsavvá és alkohollá. Sok gyümölcs jellegzetes illatáért és ízéért is (rövid szénláncú) észterek felelősek, pl. az izoamil-acetát banánillatot ad.

## Zsírok mint észterek

A **zsírok és olajok** kémiailag a **glicerin (háromértékű alkohol) és három zsírsav észterei**, ún. **trigliceridek**.

- **Telített zsírsavakból** felépülő zsírok jellemzően **szilárdak** szobahőmérsékleten (pl. állati zsírok).
- **Telítetlen zsírsavakból** felépülő zsírok (olajok) jellemzően **folyékonyak**, és a bennük lévő C=C kötések bróm-addícióval kimutathatók (a bróm-oldat elszíntelenedik).

## Elszappanosítás

A zsírok/olajok **lúgos hidrolízise** (elszappanosítás, "szappanfőzés") során a triglicerid és a nátrium-hidroxid reakciójában **szappan** (a zsírsavak nátriumsói) és **glicerin** keletkezik. A szappanmolekula egyik vége apoláris (zsíroldó), másik vége poláris/ionos (vízoldó) — ez a kettősség adja a szappan tisztító hatását, mivel a zsírszerű szennyeződéseket a vízben oldható micellákba tudja "csomagolni".
`,
    key_concepts: [
      "karboxilcsoport és karboxilát-anion",
      "karbonsavak homológ sora",
      "észteresítés (Fischer-észteresítés)",
      "trigliceridek (zsírok mint észterek)",
      "elszappanosítás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik funkciós csoport jellemzi a karbonsavakat?",
        options: ["karboxilcsoport (–COOH)", "hidroxilcsoport (–OH)", "karbonilcsoport (C=O) önmagában", "aminocsoport (–NH₂)"],
        correct_answer: "karboxilcsoport (–COOH)",
        explanation: "A karbonsavakra a karboxilcsoport (–COOH) jellemző, amely egy karbonil- és egy hidroxilcsoportból épül fel ugyanazon a szénatomon.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi keletkezik, ha ecetsav etanollal savas katalizátor jelenlétében reagál?",
        options: ["etil-acetát és víz", "csak víz", "ecetsav-anhidrid", "etán és szén-dioxid"],
        correct_answer: "etil-acetát és víz",
        explanation: "Az észteresítés (Fischer-észteresítés) során a karbonsav és az alkohol reakciójában észter (itt etil-acetát) és víz keletkezik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kémiailag mik a zsírok és olajok?",
        options: [
          "a glicerin és három zsírsav észterei (trigliceridek)",
          "hosszú szénláncú alkoholok",
          "karbonsavak sói",
          "poliszacharidok",
        ],
        correct_answer: "a glicerin és három zsírsav észterei (trigliceridek)",
        explanation: "A zsírok és olajok trigliceridek: egy glicerinmolekulához három zsírsav kapcsolódik észterkötéssel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik kémiailag az elszappanosítás (zsír lúgos hidrolízise) során?",
        options: [
          "A triglicerid nátrium-hidroxiddal reagálva zsírsavak nátriumsóira (szappanra) és glicerinre bomlik",
          "A zsír vízzel elegyedve emulziót képez kémiai átalakulás nélkül",
          "A zsír oxigénnel elreagálva szén-dioxiddá és vízzé ég el",
          "A glicerin karbonsavvá oxidálódik",
        ],
        correct_answer: "A triglicerid nátrium-hidroxiddal reagálva zsírsavak nátriumsóira (szappanra) és glicerinre bomlik",
        explanation: "Az elszappanosítás a triglicerid lúgos hidrolízise, amelynek termékei a szappan (zsírsav-nátriumsó) és a glicerin.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért viselkednek savasabban a karbonsavak, mint más, hidroxilcsoportot tartalmazó szerves vegyületek (pl. az alkoholok)?",
        options: [
          "Mert a proton leadása után keletkező karboxilát-anion negatív töltése delokalizálódik a két oxigénatom között, ami stabilizálja az aniont",
          "Mert a karbonsavak mindig szilárd halmazállapotúak",
          "Mert a karbonsavak nem tartalmaznak hidrogénatomot",
          "Mert a karbonsavak ionos vegyületek",
        ],
        correct_answer: "Mert a proton leadása után keletkező karboxilát-anion negatív töltése delokalizálódik a két oxigénatom között, ami stabilizálja az aniont",
        explanation: "A karboxilát-anion delokalizált szerkezete energetikailag kedvezővé teszi a proton leadását, ezért a karbonsavak savassága nagyobb, mint az egyszerű alkoholoké, ahol ilyen stabilizáció nem jön létre.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "szenhidratok-kemiaja",
    title: "Szénhidrátok kémiája",
    level: "mindketto",
    theme: "Szerves kémia",
    order_index: 26,
    summary_markdown:
      "A mono-, di- és poliszacharidok csoportosítása és szerkezete, a glükóz nyílt láncú és gyűrűs formája, a glikozidos kötés kialakulása, valamint a keményítő, a cellulóz és a glikogén élettani jelentősége.",
    content_markdown: `
## A szénhidrátok csoportosítása

A szénhidrátok általános összegképlete gyakran közelítőleg $C_n(H_2O)_m$ alakú, innen ered a régi elnevezés is. Csoportosításuk a felépítő egységek száma szerint:

- **Monoszacharidok**: tovább nem bontható egyszerű cukrok, pl. **glükóz (szőlőcukor)** és **fruktóz (gyümölcscukor)**, mindkettő $C_6H_{12}O_6$ összegképletű.
- **Diszacharidok**: két monoszacharid egységből épülnek fel, pl. **szacharóz** (glükóz + fruktóz, a "háztartási cukor"), **maltóz** (két glükóz), **laktóz** (glükóz + galaktóz, a tejcukor).
- **Poliszacharidok**: sok (akár több ezer) monoszacharid-egységből felépülő makromolekulák, pl. **keményítő**, **glikogén**, **cellulóz** — mindegyik glükózegységekből épül fel, mégis eltérő tulajdonságúak, mert eltérő a kötéstípus és a láncszerkezet.

## A glükóz szerkezete

A glükóz vizes oldatban **egyensúlyban van nyílt láncú és gyűrűs (félacetál) formája között** — vizes oldatban túlnyomórészt a gyűrűs forma van jelen, de a nyílt láncú forma jelenléte magyarázza a glükóz jellemző kémiai reakcióit:

- Nyílt láncú formában a glükóz egy **aldehidcsoportot** és **öt hidroxilcsoportot** (poliol-szerkezet) tartalmaz.
- Emiatt a glükóz — az aldehidekhez hasonlóan — **redukáló cukor**: pozitív Fehling-próbát ad (a Cu²⁺-ionokat téglavörös Cu₂O-vá redukálja), ami a nyílt láncú aldehidcsoport jelenlétét igazolja.
- A gyűrűvé záráskor kialakuló új sztereocentrumtól függően **α-** és **β-glükóz** ("anomerek") különböztethető meg — ennek a különbségnek meghatározó szerepe van abban, hogy a belőle felépülő poliszacharid (pl. keményítő vagy cellulóz) milyen tulajdonságú lesz.

## A glikozidos kötés és a diszacharidok

Két monoszacharid egy-egy hidroxilcsoportja között, **vízkilépéssel (kondenzációval)** alakul ki a **glikozidos kötés**, amely a di- és poliszacharidokat összetartja. Ez a kötés hidrolízissel (vízfelvétellel, pl. emésztőenzimek vagy savas közeg hatására) fel is bontható — pl. a szacharóz glükózra és fruktózra bomlik hidrolízisekor (ún. "invertcukor" keletkezik).

## Poliszacharidok: keményítő, glikogén, cellulóz

- **Keményítő**: növényi tartalék-poliszacharid, két összetevője az **amilóz** (elágazás nélküli, spirális lánc, α-1,4-glikozidos kötésekkel) és az **amilopektin** (elágazó láncú). Az emberi szervezet az **amiláz** enzim segítségével bontja glükózra.
- **Glikogén**: az állati szervezetek (elsősorban a máj és az izomzat) tartalék-poliszacharidja, szerkezetében a keményítőhöz (amilopektinhez) hasonló, de még elágazóbb.
- **Cellulóz**: a növényi sejtfal fő alkotórésze, glükózegységei **β-1,4-glikozidos kötéssel** kapcsolódnak — az emberi emésztőrendszer nem rendelkezik ennek a kötéstípusnak a bontására képes enzimmel (celluláz), ezért a cellulóz számunkra emészthetetlen "rost", míg egyes állatok (pl. kérődzők, termeszek) bélflórájukban élő mikroorganizmusok segítségével le tudják bontani.

## Élettani jelentőség

A szénhidrátok a szervezet elsődleges, gyorsan hasznosítható **energiaforrásai** (sejtlégzés során lebontva ATP termelődik), a vércukorszintet pedig hormonális szabályozás (inzulin, glukagon) tartja egyensúlyban.
`,
    key_concepts: [
      "monoszacharid, diszacharid, poliszacharid",
      "glükóz nyílt láncú és gyűrűs formája",
      "glikozidos kötés",
      "Fehling-próba, redukáló cukor",
      "keményítő, glikogén és cellulóz szerkezeti különbsége",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik vegyület a szacharóz (háztartási cukor) két alkotóeleme?",
        options: ["glükóz és fruktóz", "glükóz és galaktóz", "két glükózegység", "glükóz és cellulóz"],
        correct_answer: "glükóz és fruktóz",
        explanation: "A szacharóz egy diszacharid, amely egy glükóz- és egy fruktózegységből épül fel glikozidos kötéssel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a poliszacharidok legjellemzőbb felépítő eleme a keményítő, a glikogén és a cellulóz esetében?",
        options: ["glükóz", "fruktóz", "szacharóz", "aminosav"],
        correct_answer: "glükóz",
        explanation: "A keményítő, a glikogén és a cellulóz mind glükózegységekből épülnek fel, csupán a kötéstípusban és a lánc elágazottságában térnek el.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért ad a glükóz pozitív Fehling-próbát?",
        options: [
          "Mert nyílt láncú formájában aldehidcsoportot tartalmaz, amely redukálja a Cu²⁺-ionokat",
          "Mert a glükóz erős sav",
          "Mert a glükóz mindig gyűrűs formában van jelen",
          "Mert a glükóz nem oldódik vízben",
        ],
        correct_answer: "Mert nyílt láncú formájában aldehidcsoportot tartalmaz, amely redukálja a Cu²⁺-ionokat",
        explanation: "A vizes oldatban egyensúlyban jelen lévő nyílt láncú glükózforma aldehidcsoportja redukálja a Fehling-reagens Cu²⁺-ionjait téglavörös Cu₂O-vá.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik enzim hiánya miatt nem tudja az emberi szervezet megemészteni a cellulózt?",
        options: ["celluláz", "amiláz", "alkohol-dehidrogenáz", "proteáz"],
        correct_answer: "celluláz",
        explanation: "Az emberi emésztőrendszer nem termel celluláz enzimet, amely a cellulóz β-1,4-glikozidos kötéseit tudná bontani, ezért a cellulóz emészthetetlen rostanyagként halad át a bélrendszeren.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért teljesen eltérő a fizikai tulajdonsága (pl. oldhatóság, emészthetőség) a keményítőnek és a cellulóznak, holott mindkettő kizárólag glükózegységekből épül fel?",
        options: [
          "Mert a bennük lévő glikozidos kötés típusa eltérő (α- illetve β-1,4-kötés), ami merőben más térszerkezetet és ezáltal más tulajdonságokat eredményez",
          "Mert a keményítő nem tartalmaz szénatomot",
          "Mert a cellulóz nem szénhidrát",
          "Mert a keményítőben nincs glükóz, csak fruktóz",
        ],
        correct_answer: "Mert a bennük lévő glikozidos kötés típusa eltérő (α- illetve β-1,4-kötés), ami merőben más térszerkezetet és ezáltal más tulajdonságokat eredményez",
        explanation: "Bár mindkét poliszacharid glükózegységekből épül fel, a keményítő α-, a cellulóz β-glikozidos kötésekkel kapcsolja össze az egységeket, ez alapvetően más térszerkezetet (spirális, illetve nyújtott, rostos lánc) és ezáltal eltérő tulajdonságokat (oldhatóság, emészthetőség, mechanikai szilárdság) eredményez.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "feherjek-aminosavak-kemiaja",
    title: "Fehérjék és aminosavak kémiája",
    level: "emelt",
    theme: "Szerves kémia",
    order_index: 27,
    summary_markdown:
      "Az aminosavak szerkezete és ikerion-formája, a peptidkötés kialakulása, a fehérjék elsődleges-másodlagos-harmadlagos-negyedleges szerkezeti szintjei, valamint a denaturáció és a biuretreakció.",
    content_markdown: `
## Az aminosavak szerkezete

Az **aminosavak** olyan szerves vegyületek, amelyekben egy központi (α-)szénatomhoz egyszerre kapcsolódik:

- egy **aminocsoport (–NH₂)**,
- egy **karboxilcsoport (–COOH)**,
- egy **hidrogénatom**,
- és egy jellegzetes **oldallánc (R-csoport)**, amely aminosavanként eltérő.

A fehérjéket felépítő **20 fajta természetes aminosav** az oldalláncuk kémiai jellege szerint csoportosítható: **apoláris (hidrofób)**, **poláris (hidrofil)**, **savas** (pl. glutaminsav — extra karboxilcsoporttal) és **bázisos** (pl. lizin — extra aminocsoporttal) oldalláncú aminosavak.

Az emberi szervezet nem képes minden aminosavat saját maga előállítani — az ún. **esszenciális aminosavakat** táplálékkal kell bevinni.

## Az ikerion (zwitterion) forma

Semleges kémhatáson (pl. a sejtekben jellemző közel semleges pH-n) az aminosav **egyidejűleg protonálódik és deprotonálódik**: az aminocsoport pozitív töltésű ammóniumcsoporttá (–NH₃⁺), a karboxilcsoport negatív töltésű karboxilát-ionná (–COO⁻) alakul. Ez az **ikerion (zwitterion) forma** — a molekula kifelé semleges, mégis két, ellentétes töltésű részletet tartalmaz egyidejűleg.

## A peptidkötés kialakulása

Két aminosav egyike karboxilcsoportjának és a másik aminosav aminocsoportjának reakciója **vízkilépéssel (kondenzációval)** hozza létre a **peptidkötést** (más néven amidkötést):

$$R-COOH + H_2N-R' \\rightarrow R-CO-NH-R' + H_2O$$

Két aminosavból **dipeptid**, háromból **tripeptid**, soktól **polipeptid**, illetve — kellően nagy méretben, meghatározott térszerkezettel — **fehérje** jön létre.

## A fehérjék szerkezeti szintjei

- **Elsődleges szerkezet**: az aminosavak pontos sorrendje (szekvenciája) a polipeptidláncban — ez határozza meg alapvetően a fehérje további feltekeredését és funkcióját is.
- **Másodlagos szerkezet**: a lánc lokális, hidrogénkötésekkel stabilizált feltekeredése, jellemzően **α-hélix** (csavart) vagy **β-redő** (lemezszerű) formájában.
- **Harmadlagos szerkezet**: a teljes polipeptidlánc térbeli feltekeredése, amelyet diszulfidhidak (ciszteinek –S–S– kötése), hidrofób kölcsönhatások, ionos kötések és hidrogénkötések stabilizálnak.
- **Negyedleges szerkezet**: több önálló polipeptid-alegység összekapcsolódásával kialakuló, komplex fehérjeszerkezet — pl. a hemoglobin négy alegységből épül fel.

## Denaturáció

A **denaturáció** során a fehérje térszerkezetét (másod-, harmad-, negyedleges szerkezetét) összetartó **gyenge kölcsönhatások** (hidrogénkötések, ionos kötések, hidrofób kölcsönhatások) — de **nem a peptidkötések** — bomlanak fel hő, jelentős pH-változás, nehézfémionok vagy szerves oldószerek hatására. Ennek eredményeként a fehérje elveszíti eredeti térszerkezetét és biológiai funkcióját (pl. a tojásfehérje megfőzéskor megszilárdul és átlátszatlanná válik).

## Kimutatás: a biuretreakció

Lúgos közegben, réz(II)-ionok (Cu²⁺) jelenlétében a fehérjékben (pontosabban a peptidkötésekben) jellegzetes **ibolya/lila színreakció** jelenik meg — ez a **biuretreakció**, amelyet a fehérjék kimutatására használnak.
`,
    key_concepts: [
      "aminosav szerkezete és oldallánc-típusok",
      "ikerion (zwitterion) forma",
      "peptidkötés kialakulása",
      "fehérjeszerkezet szintjei (elsődleges-negyedleges)",
      "denaturáció",
      "biuretreakció",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik két funkciós csoport található meg minden aminosav központi szénatomján?",
        options: ["aminocsoport és karboxilcsoport", "hidroxilcsoport és karbonilcsoport", "két karboxilcsoport", "két aminocsoport"],
        correct_answer: "aminocsoport és karboxilcsoport",
        explanation: "Az aminosavak központi szénatomjához aminocsoport (–NH₂), karboxilcsoport (–COOH), hidrogénatom és egy oldallánc kapcsolódik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen kötés kapcsolja össze az aminosavakat a fehérjeláncban?",
        options: ["peptidkötés", "glikozidos kötés", "észterkötés", "hidrogénkötés"],
        correct_answer: "peptidkötés",
        explanation: "Az aminosavak vízkilépéssel (kondenzációval) peptidkötéssel kapcsolódnak egymáshoz, polipeptidláncot alkotva.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a fehérje harmadlagos szerkezetét?",
        options: [
          "A teljes polipeptidlánc térbeli feltekeredése, diszulfidhidak és egyéb gyenge kölcsönhatások által stabilizálva",
          "Az aminosavak sorrendje a láncban",
          "Több alegység összekapcsolódása",
          "Csak az α-hélix kialakulása",
        ],
        correct_answer: "A teljes polipeptidlánc térbeli feltekeredése, diszulfidhidak és egyéb gyenge kölcsönhatások által stabilizálva",
        explanation: "A harmadlagos szerkezet a teljes polipeptidlánc térbeli feltekeredését jelenti, amelyet diszulfidhidak, hidrofób kölcsönhatások, ionos kötések és hidrogénkötések tartanak fenn.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a biuretreakció jelentősége?",
        options: [
          "Lúgos közegben Cu²⁺-ionokkal ibolya/lila színreakciót ad, ezzel kimutatható a fehérje (a peptidkötés) jelenléte",
          "Kimutatja a telítetlen zsírsavakat",
          "Kimutatja a redukáló cukrokat",
          "Kimutatja a nukleinsavakat",
        ],
        correct_answer: "Lúgos közegben Cu²⁺-ionokkal ibolya/lila színreakciót ad, ezzel kimutatható a fehérje (a peptidkötés) jelenléte",
        explanation: "A biuretreakció a peptidkötések kimutatására szolgál: lúgos közegben a Cu²⁺-ionok a peptidkötésekkel jellegzetes lila színű komplexet alkotnak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért marad meg a fehérje aminosav-sorrendje (elsődleges szerkezete) a denaturáció során, miközben a térszerkezete (másod-, harmad-, negyedleges szerkezete) tönkremegy?",
        options: [
          "Mert a denaturáció csak a térszerkezetet fenntartó gyenge kölcsönhatásokat bontja fel, a peptidkötéseket (amelyek az elsődleges szerkezetet, az aminosav-sorrendet rögzítik) nem érinti",
          "Mert a denaturáció csak a fehérje színét változtatja meg",
          "Mert a denaturáció új aminosavakat épít be a láncba",
          "Mert a denaturáció során a peptidkötések erősödnek",
        ],
        correct_answer: "Mert a denaturáció csak a térszerkezetet fenntartó gyenge kölcsönhatásokat bontja fel, a peptidkötéseket (amelyek az elsődleges szerkezetet, az aminosav-sorrendet rögzítik) nem érinti",
        explanation: "A denaturáció a hidrogénkötéseket, ionos kötéseket és hidrofób kölcsönhatásokat bontja fel, amelyek a másod-, harmad- és negyedleges szerkezetet tartják fenn; a kovalens peptidkötések (az elsődleges szerkezet) épek maradnak, ezért az aminosav-sorrend nem változik.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "nukleinsavak-kemiai-szerkezete",
    title: "Nukleinsavak kémiai szerkezete",
    level: "emelt",
    theme: "Szerves kémia",
    order_index: 28,
    summary_markdown:
      "A nukleotidok felépítése, a foszfodiészter-kötés kialakulása, a DNS kettős spirál szerkezete és a komplementer bázispárosodás, valamint az RNS típusai és szerepük a fehérjeszintézisben.",
    content_markdown: `
## A nukleotidok felépítése

A nukleinsavak (DNS, RNS) alapegységei a **nukleotidok**, amelyek három részből épülnek fel:

1. egy **nitrogéntartalmú (gyűrűs) bázis**,
2. egy **öt szénatomos cukor (pentóz)** — a DNS-ben **dezoxiribóz** (a 2'-szénatomon nincs hidroxilcsoport), az RNS-ben **ribóz**,
3. egy **foszfátcsoport**.

**A nitrogénbázisok két csoportja**:
- **Purinbázisok** (két összeépült gyűrű): **adenin (A)** és **guanin (G)**.
- **Pirimidinbázisok** (egy gyűrű): **citozin (C)**, valamint **timin (T)** a DNS-ben, illetve **uracil (U)** az RNS-ben (az uracil a timin metilcsoport nélküli megfelelője).

## A nukleotidlánc kialakulása: foszfodiészter-kötés

A nukleotidok egymáshoz **foszfodiészter-kötéssel** kapcsolódnak: az egyik nukleotid cukrának **3'-hidroxilcsoportja** és a következő nukleotid **5'-foszfátcsoportja** között, vízkilépéssel (kondenzációval) alakul ki a kötés. Ennek eredményeként a nukleinsavlánc jellegzetes **iránnyal** rendelkezik, amelyet **5' → 3' irányban** szokás megadni.

## A DNS kettős spirál szerkezete (Watson–Crick-modell)

A DNS **két, egymással szemben futó (antiparallel) polinukleotid-szálból** áll, amelyeket a bázisok közötti **hidrogénkötések** tartanak össze **komplementer bázispárosodás** szerint:

- **adenin – timin (A–T)**: 2 hidrogénkötés,
- **guanin – citozin (G–C)**: 3 hidrogénkötés.

A cukor-foszfát váz a spirál külső oldalán, a bázisok a belsejében helyezkednek el — ez a jellegzetes, csavarmenetes létrához hasonlítható **kettős hélix** szerkezet. A komplementaritás (az, hogy A mindig T-vel, G mindig C-vel párosodik) biztosítja, hogy a két szál egymás **pontos másolatának** előállítására is alkalmas legyen (DNS-replikáció).

## Az RNS típusai és szerepük

Az RNS egyszálú, ribózt és uracilt tartalmaz timin helyett. Három fő típusa vesz részt a **fehérjeszintézisben**:

- **mRNS (hírvivő RNS)**: a DNS genetikai információját szállítja a sejtmagból a riboszómákhoz (transzkripció terméke).
- **tRNS (szállító RNS)**: a megfelelő aminosavakat szállítja a riboszómához a fehérjeszintézis (transzláció) során.
- **rRNS (riboszómális RNS)**: a riboszómák szerkezeti és funkcionális alkotóeleme.

## Jelentőség

A nukleinsavak kémiai szerkezete (a bázissorrend) hordozza a **genetikai információt**, amely a DNS-replikáció révén sejtről sejtre, a szaporodás révén generációról generációra öröklődik, és amely a transzkripció-transzláció folyamatán keresztül határozza meg a sejtekben szintetizálódó fehérjék szerkezetét és ezáltal az élőlény tulajdonságait.
`,
    key_concepts: [
      "nukleotid felépítése (bázis, pentóz, foszfát)",
      "foszfodiészter-kötés",
      "komplementer bázispárok (A-T, G-C)",
      "DNS kettős hélix (Watson–Crick-modell)",
      "mRNS, tRNS, rRNS szerepe",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik három rész alkotja a nukleotidot?",
        options: [
          "nitrogéntartalmú bázis, pentóz (cukor) és foszfátcsoport",
          "aminosav, cukor és zsírsav",
          "két nitrogénbázis és egy cukor",
          "glicerin, foszfát és zsírsav",
        ],
        correct_answer: "nitrogéntartalmú bázis, pentóz (cukor) és foszfátcsoport",
        explanation: "A nukleotid egy nitrogéntartalmú bázisból, egy öt szénatomos cukorból (ribóz vagy dezoxiribóz) és egy foszfátcsoportból épül fel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik bázis párosodik a DNS-ben az adeninnel?",
        options: ["timin", "guanin", "citozin", "uracil"],
        correct_answer: "timin",
        explanation: "A DNS-ben az adenin (A) mindig a timinnel (T) párosodik két hidrogénkötéssel, míg a guanin (G) a citozinnal (C) három hidrogénkötéssel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik RNS-típus szállítja az aminosavakat a riboszómához a fehérjeszintézis során?",
        options: ["tRNS", "mRNS", "rRNS", "DNS-polimeráz"],
        correct_answer: "tRNS",
        explanation: "A szállító RNS (tRNS) hozza a megfelelő aminosavakat a riboszómához a transzláció (fehérjeszintézis) folyamata során.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen kötés kapcsolja össze a szomszédos nukleotidokat a nukleinsavláncban?",
        options: ["foszfodiészter-kötés", "peptidkötés", "glikozidos kötés", "hidrogénkötés"],
        correct_answer: "foszfodiészter-kötés",
        explanation: "A nukleotidok egy cukor 3'-hidroxilcsoportja és a szomszédos nukleotid 5'-foszfátcsoportja között, vízkilépéssel kialakuló foszfodiészter-kötéssel kapcsolódnak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért fontos biológiailag, hogy a DNS-ben az adenin mindig a timinnel, a guanin mindig a citozinnal párosodik (komplementaritás)?",
        options: [
          "Mert ez teszi lehetővé, hogy a két szál egymás pontos másolatának előállítására (DNS-replikációra) szolgáljon, biztosítva a genetikai információ hűséges átadását",
          "Mert csak ez a párosítás fér el térben, minden más párosítás lehetetlen lenne kémiailag",
          "Mert ez határozza meg a fehérjék háromdimenziós szerkezetét közvetlenül",
          "Mert ez teszi lehetővé, hogy az RNS ne tartalmazzon cukrot",
        ],
        correct_answer: "Mert ez teszi lehetővé, hogy a két szál egymás pontos másolatának előállítására (DNS-replikációra) szolgáljon, biztosítva a genetikai információ hűséges átadását",
        explanation: "A szigorú A-T és G-C bázispárosodás miatt bármelyik szál sorrendjéből egyértelműen visszakövetkeztethető a másik szál sorrendje, ez teszi lehetővé a DNS pontos megkettőződését (replikációját) sejtosztódás előtt.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "muanyagok-es-polimerek",
    title: "Műanyagok és polimerek",
    level: "mindketto",
    theme: "Szerves kémia",
    order_index: 29,
    summary_markdown:
      "Az addíciós és kondenzációs polimerizáció mechanizmusa, a legfontosabb műanyagok (PE, PP, PVC, PET, nejlon) tulajdonságai és felhasználása, a hőre lágyuló és hőre keményedő műanyagok különbsége, valamint a műanyagok környezeti hatásai.",
    content_markdown: `
## A polimerizáció alapfogalmai

A **polimerek** (makromolekulák) sok, ismétlődő **monomer**-egységből felépülő, óriási molekulatömegű vegyületek. A polimerizációnak két fő típusa van:

### Addíciós polimerizáció

Telítetlen (C=C kettős kötést tartalmazó) monomerek kapcsolódnak egymáshoz a kettős kötés felnyílásával, **melléktermék képződése nélkül**:

- Etén → **polietilén (PE)**: $nCH_2=CH_2 \\rightarrow (-CH_2-CH_2-)_n$ — zacskók, fóliák.
- Propén → **polipropilén (PP)**: élelmiszer-dobozok, magasabb hőállóságú termékek.
- Vinil-klorid → **PVC (polivinil-klorid)**: csövek, nyílászárók, kábelszigetelés.
- Sztirol → **polisztirol (PS)**: habosítva csomagolóanyag, hőszigetelés.

### Kondenzációs polimerizáció

A monomerek egy kis molekula (jellemzően víz) kilépésével kapcsolódnak össze, gyakran két különböző funkciós csoportú monomer (pl. dikarbonsav és diol/diamin) reakciójával:

- **Poliészterek** (pl. **PET**, polietilén-tereftalát): palackok, poliészterszálak — dikarbonsav és diol (kétértékű alkohol) észteresítésével.
- **Poliamidok** (pl. **nejlon**): dikarbonsav és diamin reakciójával, amidkötések (a fehérjékben lévő peptidkötéshez hasonló kötéstípus) sorozatával — textilipar, műszaki alkatrészek.

## Hőre lágyuló és hőre keményedő műanyagok

- **Hőre lágyuló (termoplasztikus) műanyagok**: lineáris vagy elágazó, egymással nem kovalensen összekötött láncokból állnak, ezért felmelegítve megolvadnak, majd lehűlve újra megszilárdulnak — **többször újraformázhatók** (pl. PE, PP, PVC, PET).
- **Hőre keményedő (térhálós, duroplaszt) műanyagok**: a gyártás (hevítés) során a láncok között **erős, kovalens keresztkötések** alakulnak ki, háromdimenziós térhálót képezve — ezek a műanyagok **nem olvaszthatók újra**, hevítéskor inkább elszenesednek (pl. bakelit, epoxigyanta, egyes autóalkatrészekben és elektromos szigetelőkben használt műanyagok).

## Környezeti problémák és megoldások

- A legtöbb hagyományos műanyag **rendkívül lassan bomlik le** a természetben (akár évszázadokig is eltarthat), ez vezet a talajban és a vizekben felhalmozódó **mikroműanyag-szennyezéshez**, amely a táplálékláncba is bekerülhet.
- Az **újrahasznosítás (recycling)** elősegítésére a műanyagtermékeken jelölések (pl. PET = 1-es jel, HDPE = 2-es jel) utalnak az anyagtípusra, de nem minden műanyagfajta hasznosítható újra egyformán könnyen vagy gazdaságosan.
- Kutatás tárgyát képezik a **biológiailag lebomló műanyagok (bioplasztikok)**, amelyek célja a hagyományos, kőolajalapú műanyagok kiváltása kevésbé környezetterhelő alternatívákkal.
`,
    key_concepts: [
      "addíciós polimerizáció (PE, PP, PVC)",
      "kondenzációs polimerizáció (PET, nejlon)",
      "hőre lágyuló vs. hőre keményedő műanyag",
      "mikroműanyag-szennyezés",
      "műanyag-újrahasznosítás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik monomerből készül a polietilén (PE)?",
        options: ["etén", "propén", "vinil-klorid", "sztirol"],
        correct_answer: "etén",
        explanation: "Az etén monomerek addíciós polimerizációval kapcsolódnak polietilénné.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az addíciós és a kondenzációs polimerizáció között?",
        options: [
          "Addíciós polimerizációnál nem keletkezik melléktermék, kondenzációs polimerizációnál kis molekula (pl. víz) lép ki",
          "Addíciós polimerizáció csak fémekkel megy végbe",
          "Kondenzációs polimerizáció csak gázhalmazállapotú monomerekkel megy végbe",
          "Nincs érdemi különbség a kettő között",
        ],
        correct_answer: "Addíciós polimerizációnál nem keletkezik melléktermék, kondenzációs polimerizációnál kis molekula (pl. víz) lép ki",
        explanation: "Az addíciós polimerizáció a kettős kötés felnyílásával, melléktermék nélkül megy végbe, míg a kondenzációs polimerizáció során minden kötés kialakulásakor egy kis molekula (jellemzően víz) szabadul fel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemző a hőre keményedő (térhálós) műanyagokra a hőre lágyulókhoz képest?",
        options: [
          "Kovalens keresztkötések alakulnak ki bennük, ezért felmelegítve nem olvadnak meg újra, hanem elszenesednek",
          "Mindig folyékony halmazállapotúak",
          "Sosem tartalmaznak szénatomot",
          "Könnyebben újraolvaszthatók, mint a hőre lágyuló műanyagok",
        ],
        correct_answer: "Kovalens keresztkötések alakulnak ki bennük, ezért felmelegítve nem olvadnak meg újra, hanem elszenesednek",
        explanation: "A hőre keményedő műanyagokban a gyártás során kialakuló térhálós, kovalens keresztkötések megakadályozzák az újraolvasztást, ezzel szemben a hőre lágyuló műanyagok lineáris láncai újra és újra megolvaszthatók.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen kötéstípus kapcsolja össze a monomereket a nejlon (poliamid) láncában?",
        options: ["amidkötés", "glikozidos kötés", "peptidkötés kivételével minden kötés", "fémes kötés"],
        correct_answer: "amidkötés",
        explanation: "A nejlon egy poliamid, amelyben a dikarbonsav és a diamin monomerek amidkötésekkel (a fehérjékben lévő peptidkötéssel rokon kötéstípussal) kapcsolódnak egymáshoz.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért jelent különösen nehezen kezelhető környezeti problémát a mikroműanyag-szennyezés a hagyományos, kőolajalapú műanyagok esetében?",
        options: [
          "Mert ezek a műanyagok a természetben rendkívül lassan (akár évszázadokig) bomlanak le, apró darabokra töredezve pedig könnyen bekerülnek a táplálékláncba",
          "Mert a műanyagok mérgező gázt bocsátanak ki szobahőmérsékleten önmaguktól",
          "Mert minden műanyag radioaktív",
          "Mert a műanyagok azonnal feloldódnak a vízben, láthatatlanná válva",
        ],
        correct_answer: "Mert ezek a műanyagok a természetben rendkívül lassan (akár évszázadokig) bomlanak le, apró darabokra töredezve pedig könnyen bekerülnek a táplálékláncba",
        explanation: "A hagyományos műanyagok kémiai stabilitása (amely felhasználás közben előny) a hulladékká válás után hátránnyá válik: a lassú lebomlás miatt a környezetben felhalmozódó, egyre kisebb műanyagdarabok (mikroműanyagok) a táplálékláncon keresztül szinte minden élőlényben megjelenhetnek.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kornyezetkemia-levego-es-vizszennyezes",
    title: "Környezetkémia — levegő- és vízszennyezés",
    level: "mindketto",
    theme: "Környezetkémia",
    order_index: 30,
    summary_markdown:
      "A legfontosabb levegő- és vízszennyező anyagok és forrásaik, a szmog, az ózonréteg-károsodás és az üvegházhatás összefüggései, valamint a vízszennyezés jellemzői (BOI, eutrofizáció, bioakkumuláció) és a szennyvíztisztítás lépései.",
    content_markdown: `
## A levegőszennyezés fő forrásai és anyagai

A levegőszennyezés elsődleges forrása a **fosszilis tüzelőanyagok (szén, kőolajszármazékok, földgáz) elégetése**, amely számos szennyező anyagot juttat a légkörbe:

- **Kén-dioxid (SO₂) és nitrogén-oxidok (NOₓ)**: a **savas esők** fő okozói (lásd a kén és a nitrogén csoport tételeit).
- **Szén-monoxid (CO)**: tökéletlen égés terméke, mérgező gáz.
- **Szálló por (PM10, PM2.5)**: apró, a légutakba mélyen behatoló részecskék, amelyek légúti és szív-érrendszeri betegségeket okozhatnak.
- **Szén-dioxid (CO₂) és metán (CH₄)**: **üvegházhatású gázok**, amelyek felhalmozódása a globális felmelegedés fő hajtóereje.

## Szmog és az ózon kettős szerepe

- A **troposzférikus (talaj közeli) ózon** — amely elsősorban a közlekedésből származó NOₓ és szénhidrogének napfény hatására lezajló fotokémiai reakciójából keletkezik — erősen egészségkárosító **fotokémiai szmog** (ún. "Los Angeles-típusú szmog") kialakulásához vezet, szemben a hasznos, UV-sugárzást elnyelő **sztratoszférikus ózonréteggel**.
- A **freonok (CFC-k)** okozta ózonréteg-vékonyodás ("ózonlyuk") elleni nemzetközi összefogás eredménye a **Montreali Jegyzőkönyv (1987)**, amely korlátozta/betiltotta az ózonkárosító anyagok gyártását és felhasználását.

## Vízszennyezés és jellemző mutatói

- **Biológiai oxigénigény (BOI)**: azt fejezi ki, mennyi oxigénre van szükség a vízben lévő szerves anyagok mikroorganizmusok általi lebontásához — minél magasabb a BOI-érték, annál erősebb a szervesanyag-terhelés (szennyezettség) a vízben.
- **Eutrofizáció**: a mezőgazdaságból (műtrágyák) és a szennyvizekből származó túlzott foszfát- és nitrátterhelés hatására a vízi növények/algák túlszaporodnak, majd elpusztulva lebomlásuk jelentős oxigént fogyaszt — ez **oxigénhiányhoz és halpusztuláshoz** vezethet.
- **Nehézfémszennyezés** (pl. higany, ólom, kadmium): ipari szennyvizekből, bányászatból, akkumulátorokból származó, mérgező hatású szennyezők, amelyek a táplálékláncban **felhalmozódnak (bioakkumuláció)**, és a csúcsragadozókban (beleértve az embert is) különösen magas koncentrációt érhetnek el (biomagnifikáció) — klasszikus példája a higanymérgezés okozta **Minamata-kór**.
- **Olajszennyezés**: tengeri olajszállítási balesetek nyomán kialakuló olajfoltok súlyosan károsítják a vízi élővilágot, fizikai (fulladás, tollazat/szőrzet szennyeződése) és kémiai (mérgezés) hatások révén egyaránt.

## A szennyvíztisztítás lépései

1. **Mechanikai (elsődleges) tisztítás**: rácsszűrés, homokfogás, ülepítés — a durva szennyeződések eltávolítása.
2. **Biológiai (másodlagos) tisztítás**: mikroorganizmusok (eleveniszapos eljárás) bontják le a vízben oldott szerves anyagokat, jelentősen csökkentve a BOI-t.
3. **Kémiai/harmadlagos tisztítás**: a maradék foszfát- és nitrogénvegyületek eltávolítása, illetve fertőtlenítés (pl. klórozás, ózonozás, UV-kezelés) a kibocsátás vagy az ivóvízzé alakítás előtt.

## Globális egyezmények és megoldási irányok

A legfontosabb nemzetközi környezetvédelmi egyezmények közé tartozik a **Montreali Jegyzőkönyv** (az ózonréteg védelmére) és a **Párizsi Megállapodás** (az üvegházhatású gázok kibocsátásának csökkentésére, a klímaváltozás mérséklésére). Gyakorlati megoldási irányok: megújuló energiaforrások alkalmazása, a gépjárművek **katalizátoros gáztisztítása** (amely a CO-t, a NOₓ-ot és az el nem égett szénhidrogéneket kevésbé ártalmas anyagokká — CO₂-vé, N₂-vé, H₂O-vá — alakítja), valamint a szennyvíz- és hulladékgazdálkodás fejlesztése.
`,
    key_concepts: [
      "savas esők, szálló por, üvegházhatás",
      "fotokémiai szmog és troposzférikus ózon",
      "biológiai oxigénigény (BOI) és eutrofizáció",
      "bioakkumuláció és biomagnifikáció",
      "szennyvíztisztítás lépései",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az a BOI (biológiai oxigénigény), és mire utal magas értéke?",
        options: [
          "A vízben lévő szerves anyagok mikrobiális lebontásához szükséges oxigénmennyiség; magas értéke erős szervesanyag-szennyezésre utal",
          "A víz oldott sótartalma",
          "A víz pH-értéke",
          "A vízben oldott nehézfémek mennyisége",
        ],
        correct_answer: "A vízben lévő szerves anyagok mikrobiális lebontásához szükséges oxigénmennyiség; magas értéke erős szervesanyag-szennyezésre utal",
        explanation: "A BOI a szerves szennyezőanyagok mikroorganizmusok általi lebontásához szükséges oxigén mennyiségét méri, minél magasabb az érték, annál nagyobb a szervesanyag-terhelés.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik nemzetközi egyezmény korlátozta az ózonréteget károsító anyagok (freonok) kibocsátását?",
        options: ["Montreali Jegyzőkönyv", "Párizsi Megállapodás", "Kiotói Jegyzőkönyv", "Baseli Egyezmény"],
        correct_answer: "Montreali Jegyzőkönyv",
        explanation: "A Montreali Jegyzőkönyv (1987) az ózonréteget károsító anyagok, köztük a freonok (CFC-k) gyártásának és felhasználásának nemzetközi korlátozását célozta.",
        difficulty: 1,
        },
      {
        question_type: "multiple_choice",
        question_text: "Mi az eutrofizáció folyamata a vizekben?",
        options: [
          "Túlzott nitrát- és foszfátterhelés hatására felszaporodó algák elpusztulása és lebomlása oxigénhiányt idéz elő",
          "A víz sótartalmának hirtelen lecsökkenése",
          "A víz hőmérsékletének mesterséges emelése",
          "A nehézfémek kicsapódása a víz fenekén",
        ],
        correct_answer: "Túlzott nitrát- és foszfátterhelés hatására felszaporodó algák elpusztulása és lebomlása oxigénhiányt idéz elő",
        explanation: "A túlzott tápanyagterhelés algavirágzáshoz vezet, majd az elpusztuló algatömeg lebontása jelentős oxigént fogyaszt, ami oxigénhiányt és halpusztulást okozhat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik a gépjárművek katalizátorában a kipufogógáz tisztítása során?",
        options: [
          "A szén-monoxidot, a nitrogén-oxidokat és az el nem égett szénhidrogéneket kevésbé ártalmas anyagokká (CO₂, N₂, H₂O) alakítja",
          "A kipufogógázt lehűti, hogy ne szennyezze a levegőt",
          "A benzint közvetlenül vízzé alakítja",
          "Eltávolítja a kipufogógázból az összes szén-dioxidot",
        ],
        correct_answer: "A szén-monoxidot, a nitrogén-oxidokat és az el nem égett szénhidrogéneket kevésbé ártalmas anyagokká (CO₂, N₂, H₂O) alakítja",
        explanation: "A katalizátor a mérgező és szennyező összetevőket (CO, NOₓ, el nem égett szénhidrogének) kémiai átalakítással kevésbé ártalmas termékekké (CO₂, N₂, vízgőz) redukálja/oxidálja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért különösen veszélyesek a csúcsragadozókra (beleértve az embert is) a vízi ökoszisztémákba jutó nehézfémek, mint pl. a higany, még kis környezeti koncentráció esetén is?",
        options: [
          "Mert a táplálékláncon felfelé haladva a nehézfémek koncentrációja egyre nő (bioakkumuláció, biomagnifikáció), így a csúcsragadozók szervezetében a kiindulási környezeti koncentrációnál jóval magasabb szint halmozódhat fel",
          "Mert a nehézfémek csak a csúcsragadozókra mérgezőek, más élőlényekre nem",
          "Mert a nehézfémek elpárolognak a vízből és belélegezve fejtik ki hatásukat",
          "Mert a nehézfémek a vízben azonnal ártalmatlanná alakulnak, csak szárazföldön mérgezőek",
        ],
        correct_answer: "Mert a táplálékláncon felfelé haladva a nehézfémek koncentrációja egyre nő (bioakkumuláció, biomagnifikáció), így a csúcsragadozók szervezetében a kiindulási környezeti koncentrációnál jóval magasabb szint halmozódhat fel",
        explanation: "A nehézfémek a szervezetben nehezen bomlanak le és nehezen ürülnek ki, ezért minden táplálkozási szinten koncentrálódnak (biomagnifikáció), a lánc végén álló csúcsragadozókban (pl. nagy testű halakban, emberben) akár emberi egészségügyi problémákat (pl. Minamata-kór) okozó szintet is elérhetnek.",
        difficulty: 3,
      },
    ],
  },
];
