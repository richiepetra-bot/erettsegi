import type { TopicSeed } from "./angol";

export const biologiaNovenyekGombakTopics: TopicSeed[] = [
  {
    slug: "bakteriumok-a-prokariotak-orszaga",
    title: "Baktériumok — a prokarióták országa",
    level: "mindketto",
    theme: "Vírusok, baktériumok",
    order_index: 9,
    summary_markdown:
      "A baktériumok a prokarióta felépítésű élőlények nagy csoportja: sejtfaluk, anyagcsere-típusaik és szaporodási módjuk rendkívül változatos, szerepük az anyagcsere-körfolyamatokban és az emberi életben (haszon és kórokozás) egyaránt jelentős.",
    content_markdown: `
## A baktériumok általános jellemzői

A **baktériumok** egysejtű, prokarióta felépítésű élőlények (nincs valódi sejtmagjuk, a DNS a citoplazmában, a nukleoid régióban található). Méretük jellemzően 1-10 mikrométer. Alakjuk szerint megkülönböztetünk **gömb alakú (coccus)**, **pálcika alakú (bacillus)**, **spirális (spirillum)** és **vibrió (kis ívelt pálcika)** formájú baktériumokat. Sejtfaluk **peptidoglikán (murein)** alapú; a sejtfal szerkezete alapján a **Gram-festés** két nagy csoportba osztja őket: a **Gram-pozitív** baktériumok vastag peptidoglikán réteget tartalmaznak (a festés lila színűre színezi őket), a **Gram-negatívoknak** vékonyabb peptidoglikán rétegük van, de van egy külső membránjuk is (a festés rózsaszínre színezi őket) — ez az orvosi diagnosztikában és az antibiotikum-választásban fontos szempont.

## Baktériumsejt felépítése

- **Sejtfal** – alak és mechanikai védelem.
- **Sejtmembrán** – anyagszállítás.
- **Citoplazma** – benne a nukleoid (kör alakú DNS) és riboszómák (70S).
- **Kapszula** (egyeseknél) – nyálkaréteg, védelem a kiszáradás és a fagocitózis ellen.
- **Ostor (flagellum)** – mozgásszervecske.
- **Pilus (csilló)** – felülethez rögzülés, illetve baktériumok közötti genetikaianyag-átadás (konjugáció).
- **Plazmid** – kiegészítő, kör alakú DNS-darab, gyakran hasznos géneket (pl. antibiotikum-rezisztencia) hordoz.
- **Endospóra** (egyeseknél, pl. *Bacillus*, *Clostridium*) – rendkívül ellenálló, nyugalmi állapotú sejtforma, amely szélsőséges körülményeket (hőség, kiszáradás, kémiai anyagok) is túlél.

## Anyagcsere-típusok

A baktériumok anyagcseréje rendkívül változatos, ez tette lehetővé, hogy a Föld szinte minden élőhelyén (forrásvizek, sarki jég, emberi bélrendszer) megtalálhatók legyenek:

| Típus | Energiaforrás | Szénforrás | Példa |
|---|---|---|---|
| Fotoautotróf | fény | szervetlen (CO2) | cianobaktériumok |
| Kemoautotróf | szervetlen kémiai reakció | szervetlen (CO2) | nitrifikáló baktériumok |
| Fotoheterotróf | fény | szervetlen (CO2) | bíbor baktériumok |
| Kemoheterotróf | szervetlen kémiai reakció | szervetlen (CO2) | kénbaktériumok |
| Heterotróf (kemoorganotróf) | szervesanyag-lebontás | szerves | legtöbb baktérium, pl. bélbaktériumok |

Légzéstípus szerint léteznek **obligát aerob** (csak oxigén jelenlétében élnek), **obligát anaerob** (oxigén számukra mérgező) és **fakultatív anaerob** (oxigénnel és nélküle is élnek) baktériumok.

## Szaporodás

A baktériumok jellemzően **binér (kettéosztódásos, ivartalan) szaporodással** sokszorozódnak: a sejt megnöveli a DNS-ét, majd egyenlő két részre osztódik. Kedvező körülmények között ez rendkívül gyors (akár 20 percenkénti osztódás), ez okozza a baktériumtelepek robbanásszerű növekedését. Genetikai variabilitást — a szexuális szaporodás hiányában — más mechanizmusok biztosítanak: a **konjugáció** (plazmid-DNS átadása pilus segítségével két baktérium között), a **transzformáció** (szabad DNS-darabok felvétele a környezetből) és a **transzdukció** (vírus, bakteriofág által közvetített DNS-átvitel).

## A baktériumok szerepe

- **Lebontók (dekomponensek)**: az elhalt szerves anyagot szervetlenné bontják, ezzel az anyagforgalom (pl. nitrogénkörforgás) nélkülözhetetlen résztvevői.
- **Nitrogénkötés**: egyes baktériumok (pl. *Rhizobium*, hüvelyesek gyökérgümőiben) a légköri nitrogént a növények számára felvehető formává alakítják.
- **Emberi hasznosítás**: élelmiszeriparban (joghurt, sajt, savanyú káposzta erjesztése), a bélflóra részeként (emésztés segítése, vitaminszintézis), biotechnológiában (pl. inzulin előállítása géntechnológiával módosított baktériumokkal).
- **Kórokozó baktériumok**: pl. a *Streptococcus*, *Salmonella*, *Mycobacterium tuberculosis* (tuberkulózis) fajok betegségeket okoznak; ellenük az **antibiotikumok** hatásosak, mivel ezek olyan baktériumspecifikus célpontokat (pl. sejtfalszintézis) gátolnak, amelyek az emberi sejtekben nincsenek meg.

## Az antibiotikum-rezisztencia problémája

A baktériumok gyors szaporodása és a plazmidok révén történő géncsere lehetővé teszi, hogy egy antibiotikum-rezisztens tulajdonság gyorsan elterjedjen egy populációban, illetve fajok között is átadódjon — ez a **rezisztens kórokozók** kialakulásának egyik fő mechanizmusa, komoly egészségügyi kihívást jelentve napjainkban.
`,
    key_concepts: [
      "Gram-pozitív és Gram-negatív baktérium",
      "endospóra",
      "autotróf és heterotróf anyagcsere",
      "binér osztódás",
      "konjugáció, transzformáció, transzdukció",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az alapja a Gram-festés szerinti csoportosításnak?",
        options: [
          "A sejtfal peptidoglikán rétegének vastagsága és a külső membrán megléte",
          "A baktérium mérete",
          "A baktérium mozgásképessége",
          "A baktérium színe természetes állapotban",
        ],
        correct_answer: "A sejtfal peptidoglikán rétegének vastagsága és a külső membrán megléte",
        explanation:
          "A Gram-pozitív baktériumoknak vastag peptidoglikán rétegük van, a Gram-negatívoknak vékonyabb, de van külső membránjuk is — ez adja a festési eredmény különbségét.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a baktériumok leggyakoribb szaporodási módja?",
        options: ["binér (kettéosztódásos) osztódás", "meiózis", "spórázás minden esetben", "ivaros szaporodás gaméták révén"],
        correct_answer: "binér (kettéosztódásos) osztódás",
        explanation:
          "A baktériumok jellemzően ivartalanul, kettéosztódással szaporodnak, ami kedvező körülmények között rendkívül gyors lehet.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Melyik folyamat során vesz fel egy baktériumsejt szabad DNS-darabokat közvetlenül a környezetéből?",
        options: ["transzformáció", "konjugáció", "transzdukció", "binér osztódás"],
        correct_answer: "transzformáció",
        explanation:
          "A transzformáció a környezetből (pl. elpusztult sejtekből felszabadult) szabad DNS-darabok felvétele; a konjugáció pilus révén, a transzdukció bakteriofág közvetítésével történő géncsere.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szerepet töltenek be a nitrogénkötő baktériumok (pl. Rhizobium) az ökoszisztémában?",
        options: [
          "A légköri nitrogént a növények számára felvehető formává alakítják",
          "Lebontják a talaj összes szerves anyagát oxigénné",
          "Megakadályozzák a növények fotoszintézisét",
          "Kizárólag kórokozóként viselkednek",
        ],
        correct_answer: "A légköri nitrogént a növények számára felvehető formává alakítják",
        explanation:
          "A Rhizobium fajok a hüvelyesek gyökérgümőiben élve a légköri N2-t ammóniává (majd nitráttá) alakítják, amit a növény felvehet — ez a nitrogénkörforgás kulcslépése.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért terjedhet gyorsan az antibiotikum-rezisztencia egy baktériumpopulációban?",
        options: [
          "A gyors szaporodás és a plazmidok konjugációval történő átadása révén a rezisztenciagén sejtről sejtre, akár fajok között is átadódhat",
          "Mert minden baktérium azonos genetikai állománnyal születik",
          "Mert az antibiotikumok maguk hordozzák a rezisztenciagéneket",
          "Mert a baktériumok csak meiózissal szaporodnak",
        ],
        correct_answer: "A gyors szaporodás és a plazmidok konjugációval történő átadása révén a rezisztenciagén sejtről sejtre, akár fajok között is átadódhat",
        explanation:
          "A rezisztenciagének gyakran plazmidokon helyezkednek el, amelyek konjugáció útján gyorsan átadódhatnak más baktériumsejteknek, ez segíti a rezisztencia elterjedését.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "gombak-orszaga",
    title: "Gombák országa",
    level: "mindketto",
    theme: "Gombák országa",
    order_index: 10,
    summary_markdown:
      "A gombák eukarióta, kitin sejtfalú, heterotróf élőlények, amelyek testfelépítése (fonalas hifák, micélium), táplálkozásmódja (lebontó, parazita, szimbionta) és szaporodása egyaránt sajátos, önálló országot alkotva a rendszertanban.",
    content_markdown: `
## A gombák általános jellemzői

A gombák saját, önálló **országot** alkotnak a rendszertanban, elkülönülve a növényektől és állatoktól. Eukarióta sejtfelépítésűek, sejtfaluk azonban — a növényekkel ellentétben — nem cellulóz, hanem **kitin** alapú. Nincs kloroplasztiszuk, tehát **nem fotoszintetizálnak** — kizárólag **heterotróf** táplálkozásúak: külső emésztéssel (extracelluláris enzimek kibocsátásával lebontják a környező szerves anyagot, majd felszívják a keletkező kisebb molekulákat) jutnak tápanyaghoz.

## Testfelépítés

A legtöbb gomba teste **hifákból** épül fel: ezek vékony, elágazó fonalak, amelyek együttesen a **micéliumot** alkotják — ez a gomba tápanyagfelvevő, a talajban vagy a szubsztrátumban rejtve futó "teste". A jól ismert termőtest (kalapos gomba "kalapja és tönkje") csak a szaporodás időszakára fejlődő, spóratermelő szervecske, a gomba egyedének csupán kis, látható része. A hifák felépítésétől függően megkülönböztetünk **szeptált** (keresztfalakkal osztott) és **nem szeptált (coenocytás)** hifákat.

## Táplálkozási típusok

- **Lebontó (szaprotróf)** gombák – elhalt szerves anyagot bontanak le (pl. sok kalapos gomba, penészgombák) — ezzel az anyagforgalom nélkülözhetetlen résztvevői.
- **Parazita** gombák – élő szervezeteken (növényeken, állatokon, embereken) élnek, károsítva a gazdát (pl. lisztharmat, sömörgomba).
- **Szimbionta** gombák – kölcsönösen előnyös kapcsolatban élnek más élőlényekkel: a **mikorrhiza** a gomba és a növény gyökere közötti kapcsolat (a gomba vizet, ásványi anyagot juttat a növénynek, a növénytől szerves anyagot kap), a **zuzmó** pedig gomba és fotoszintetizáló alga (vagy cianobaktérium) szimbiózisa.

## Szaporodás

A gombák szaporodása igen változatos, gyakran mind ivartalan, mind ivaros formában zajlik:

- **Ivartalan szaporodás**: sarjadzással (pl. élesztőgombák), fonaldarabokból (fragmentáció), vagy **spórák** (ivartalan úton, mitózissal létrejövő spórák) képzésével.
- **Ivaros szaporodás**: két, genetikailag különböző hifa egyesülése (plazmogámia, majd karyogámia) után **ivaros spórák** (pl. bazídiospórák, aszkospórák) keletkeznek, amelyek a rendszerezés alapját is adják (pl. bazídiumos gombák, tömlősgombák).

## A gombák rendszertani helye és jelentősége

A gombák (pl. kalapos gombák, penészgombák, élesztők) elkülönült országot alkotnak, mert bár heterotróf táplálkozásúak (mint az állatok), sejtfaluk van (mint a növényeknek), de az másféle (kitin). Jelentőségük:

- **Ökológiai**: fő lebontóként (dekomponensként) elengedhetetlenek az anyagforgalomban, elhalt növényi és állati szervezetek lebontásában.
- **Gazdasági**: élelmiszer (kalapos gombák, élesztő a sütő- és söriparban), gyógyszeripar (pl. penicillin — antibiotikum a *Penicillium* gombából).
- **Egészségügyi**: néhány gombafaj (pl. bőrgombák, *Candida*) betegségeket okoz emberben (mikózisok), más fajok mérgezőek (pl. gyilkos galóca).
`,
    key_concepts: [
      "hifa és micélium",
      "kitin sejtfal",
      "külső (extracelluláris) emésztés",
      "mikorrhiza és zuzmó",
      "lebontó, parazita, szimbionta táplálkozás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miből épül fel a gombák sejtfala, megkülönböztetve őket a növényektől?",
        options: ["kitin", "cellulóz", "peptidoglikán", "keratin"],
        correct_answer: "kitin",
        explanation:
          "A gombák sejtfala kitinből áll, szemben a növények cellulóz alapú sejtfalával — ez egyik fő ok, amiért a gombák önálló országot alkotnak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan táplálkoznak a gombák, mivel nincs kloroplasztiszuk?",
        options: [
          "Extracelluláris (külső) emésztéssel bontják le a környező szerves anyagot, majd felszívják a keletkezett molekulákat",
          "Fotoszintézissel szervetlen anyagból szerves anyagot állítanak elő",
          "Kizárólag más gombákat fogyasztanak fagocitózissal",
          "Gyökereken keresztül szervetlen ionokat vesznek fel, mint a növények",
        ],
        correct_answer: "Extracelluláris (külső) emésztéssel bontják le a környező szerves anyagot, majd felszívják a keletkezett molekulákat",
        explanation:
          "A gombák heterotróf élőlények: enzimeket bocsátanak ki a környezetükbe, amelyek lebontják a szerves anyagot, majd a keletkező kisebb molekulákat a hifák felszívják.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a mikorrhiza?",
        options: [
          "Gomba és növény gyökere közötti szimbiotikus kapcsolat",
          "A gomba spóratermelő szervecskéje",
          "A gomba egyik betegsége",
          "Két gombafonal ivaros egyesülése",
        ],
        correct_answer: "Gomba és növény gyökere közötti szimbiotikus kapcsolat",
        explanation:
          "A mikorrhizában a gomba vizet és ásványi anyagokat juttat a növénynek, a növény pedig szerves anyaggal (szerves szénforrással) 'fizet' a gombának — mindkét fél nyer a kapcsolatból.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a micélium?",
        options: [
          "A gomba hifáiból álló, tápanyagot felvevő teste",
          "A gomba szaporító szervecskéje, ami a talaj felett látható",
          "Egy gombafaj spórája",
          "A gomba sejtmagja",
        ],
        correct_answer: "A gomba hifáiból álló, tápanyagot felvevő teste",
        explanation:
          "A micélium a hifák összessége, amely a talajban vagy a szubsztrátumban rejtve fut, és a gomba tápanyagfelvevő 'testét' alkotja — ellentétben a csak időszakosan megjelenő termőtesttel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért alkotnak a gombák önálló, a növényektől és állatoktól elkülönülő országot a rendszertanban?",
        options: [
          "Heterotróf táplálkozásúak (mint az állatok), de van sejtfaluk (mint a növényeknek), amely azonban kitinből, nem cellulózból áll",
          "Mert nincs sejtfaluk és nincs anyagcseréjük sem",
          "Mert kizárólag prokarióta sejtekből állnak",
          "Mert minden gomba fotoszintetizál, mint a növények",
        ],
        correct_answer: "Heterotróf táplálkozásúak (mint az állatok), de van sejtfaluk (mint a növényeknek), amely azonban kitinből, nem cellulózból áll",
        explanation:
          "A gombák egyedi kombinációja — heterotróf táplálkozás, de kitin sejtfal, extracelluláris emésztés, hifás testfelépítés — indokolja, hogy sem a növények, sem az állatok országába nem sorolhatók.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "novenyek-orszaga-szovetek-es-szervek",
    title: "Növények országa — szövetek és szervek",
    level: "mindketto",
    theme: "Növények országa",
    order_index: 11,
    summary_markdown:
      "A szárazföldi növények testét alaptelepi és fejlett szövetrendszerek (bőrszövet, alapszövet, szállítószövet) építik fel, amelyekből a gyökér, szár és levél szervei szerveződnek — ez a szövet- és szervrendszer teszi lehetővé a nagy testű, szárazföldön élő növények anyag- és vízszállítását.",
    content_markdown: `
## A növények szövetrendszerei

A magasabb rendű (edényes) növények teste jól elkülönült szövetekből épül fel, amelyek egy adott funkcióra specializálódott, hasonló sejtekből állnak.

### Bőrszövet (epidermisz)

A növény külső, védő szövete. Sejtjei szorosan illeszkednek egymáshoz, felületüket gyakran vízhatlan **kutikula** (viaszos réteg) borítja, amely csökkenti a párologtatást. A levél és a szár epidermiszében találhatók a **gázcserenyílások (sztómák)** — két, alakjukat módosítani képes záró sejt által határolt nyílások, amelyek a gázcserét (CO2 felvétele, O2 és vízgőz leadása) és ezáltal a párologtatás (transzspiráció) mértékét szabályozzák.

### Alapszövet

A növénytest "kitöltő" szövete, amelyben a legfontosabb anyagcsere-folyamatok zajlanak. Ide tartozik az **assszimilációs alapszövet** (klorofillt tartalmazó sejtek, fő helyszíne a fotoszintézisnek, jellemzően a levél belsejében), a **raktározó alapszövet** (keményítő, cukor, víz tárolása, pl. gyökér, gumó) és a **szilárdító alapszövet** (a növény mechanikai megtámasztása).

### Szállítószövet

Két fő típusa a hosszú távú anyagszállítást biztosítja:

- **Xilém (farész)** – vizet és a benne oldott ásványi anyagokat szállítja a gyökértől a hajtás felé, elhalt sejtekből (tracheidák, edénytagok) áll, amelyek falait merevítő anyag (lignin) erősíti.
- **Flóem (háncsrész)** – a fotoszintézis során keletkezett szerves anyagokat (elsősorban szacharózt) szállítja a levelektől a növény minden más részéhez, élő sejtekből (rostacsősejtek, kísérősejtek) áll.

A xilém és a flóem együtt alkotja az **edénynyalábot**, ami a gyökértől a levelekig végigkíséri a növényt.

## A növény szervei

- **Gyökér** – rögzíti a növényt a talajhoz, vizet és ásványi anyagokat vesz fel (gyökérszőrök felületnövelő szerepe), egyeseknél raktározó funkciója is van (gyökérgumó).
- **Szár** – a víz- és tápanyagszállítás fő útvonala a gyökér és a levelek között, mechanikai tartást biztosít, egyeseknél zöld színű, fotoszintetizáló funkciója is lehet.
- **Levél** – a fotoszintézis fő helyszíne; lapos alakja nagy felületet biztosít a fényelnyeléshez, belsejében az assszimilációs szövet, felszínén a sztómák találhatók.

## Vízszállítás a növényben

A víz felvétele a gyökérszőrökön keresztül ozmózissal történik, majd a xilémben halad felfelé. Ezt három tényező hajtja: a **gyökérnyomás** (a gyökérsejtek ozmotikus aktivitása kis nyomást hoz létre alulról), a **kapilláris hatás** (a víz felhúzódása a szűk edényekben) és — a legfontosabb hajtóerő — a **transzspirációs húzás**: a levelek sztómáin keresztül elpárolgó víz "felszívja" magával a xilémben lévő vízoszlopot, a vízmolekulák közötti kohéziós erők (hidrogénkötések) miatt egy folytonos vízszál mozog felfelé.

## A növényi szövetek jelentősége a szárazföldi élet szempontjából

A szállítószövetek (xilém, flóem) és a szilárdító szövetek kialakulása tette lehetővé, hogy a növények a vízi élettérből a szárazföldre települjenek át és nagy testméretet érjenek el: a gyökér a talajból, a levél a levegőből nyeri a szükséges anyagokat, a szár pedig a köztük lévő anyagáramlást és a mechanikai tartást biztosítja.
`,
    key_concepts: [
      "bőrszövet és sztóma",
      "xilém és flóem",
      "gyökér, szár, levél funkciói",
      "transzspirációs húzás",
      "assszimilációs alapszövet",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik szövet szállítja a vizet és az ásványi anyagokat a gyökértől a levelek felé?",
        options: ["xilém", "flóem", "bőrszövet", "raktározó alapszövet"],
        correct_answer: "xilém",
        explanation:
          "A xilém elhalt sejtekből álló szállítószövet, amely a talajból felvett vizet és oldott ásványi anyagokat szállítja felfelé a növényben.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a sztómák (gázcserenyílások) fő szerepe a levél epidermiszében?",
        options: [
          "A gázcsere (CO2 felvétele, O2 és vízgőz leadása) szabályozása",
          "A fotoszintézis közvetlen végrehajtása",
          "A víz szállítása a gyökérből a levélbe",
          "A levél színének meghatározása",
        ],
        correct_answer: "A gázcsere (CO2 felvétele, O2 és vízgőz leadása) szabályozása",
        explanation:
          "A sztómák két záró sejt által határolt nyílások, amelyek nyitásával/zárásával a növény szabályozza a gázcserét és a párologtatás (transzspiráció) mértékét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a flóem (háncsrész) fő funkciója?",
        options: [
          "A fotoszintézis során keletkezett szerves anyagok (pl. szacharóz) szállítása a levelektől a növény más részeihez",
          "A víz szállítása a gyökértől felfelé",
          "A növény mechanikai megtámasztása kizárólag",
          "A gázcsere lebonyolítása",
        ],
        correct_answer: "A fotoszintézis során keletkezett szerves anyagok (pl. szacharóz) szállítása a levelektől a növény más részeihez",
        explanation:
          "A flóem élő sejtekből (rostacsősejtek, kísérősejtek) áll, és a levelekben keletkezett szerves anyagokat szállítja a növény minden olyan részébe, ahol azokra szükség van (pl. gyökér, növekvő hajtás).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik erő a legfontosabb hajtóereje a víz felfelé mozgásának a xilémben?",
        options: [
          "a transzspirációs húzás, amelyet a levelek sztómáin át elpárolgó víz okoz",
          "a gravitáció, amely felfelé húzza a vizet",
          "a fotoszintézis közvetlen mechanikai hatása",
          "az aktív transzport a xilém elhalt sejtjeiben",
        ],
        correct_answer: "a transzspirációs húzás, amelyet a levelek sztómáin át elpárolgó víz okoz",
        explanation:
          "A párologtatás a levél sejtjeiben negatív nyomást (szívóhatást) kelt, amely a vízmolekulák közötti kohéziós erők révén egy folytonos vízoszlopot húz felfelé a xilémben — ez a fő hajtóerő.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért volt kulcsfontosságú a szállítószövetek (xilém, flóem) kialakulása a növények szárazföldi életmódra való áttérésében?",
        options: [
          "Mert lehetővé tették, hogy a gyökér és a levél térben elkülönült szervekben legyen, és a két szerv között az anyagáramlás megvalósuljon nagy testméret mellett is",
          "Mert ezek nélkül a növények nem tudtak volna fotoszintetizálni",
          "Mert a szállítószövetek végzik a növény légzését",
          "Mert csak ezek biztosítják a növény színét",
        ],
        correct_answer: "Mert lehetővé tették, hogy a gyökér és a levél térben elkülönült szervekben legyen, és a két szerv között az anyagáramlás megvalósuljon nagy testméret mellett is",
        explanation:
          "A szállítószövetek nélkül a diffúzió nem lenne elég hatékony ahhoz, hogy egy nagy testű növényben a víz a gyökértől a magasban lévő levelekig, a szerves anyag pedig a levelektől a gyökérig eljusson.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "novenyek-anyagcsereje-fotoszintezis",
    title: "Növények anyagcseréje — fotoszintézis",
    level: "emelt",
    theme: "Növények országa",
    order_index: 12,
    summary_markdown:
      "A fotoszintézis a fényenergia kémiai energiává (szerves anyaggá) alakításának folyamata a kloroplasztiszban, amely fényfüggő és fényfüggetlen (szén-dioxid-megkötő) szakaszra bontható, és minden autotróf élőlény, végső soron a Föld légköre és élővilága szempontjából alapvető fontosságú.",
    content_markdown: `
## A fotoszintézis lényege és egyenlete

A **fotoszintézis** olyan anyagcsere-folyamat, amelynek során a fény energiáját felhasználva szervetlen anyagokból (szén-dioxid és víz) szerves anyag (glükóz) és oxigén keletkezik. Összefoglaló egyenlete:

**6 CO2 + 6 H2O + fényenergia → C6H12O6 (glükóz) + 6 O2**

A folyamat a **kloroplasztiszban** zajlik, és két, egymáshoz szorosan kapcsolódó szakaszra bontható: a **fényszakaszra (fényfüggő reakciók)** és a **sötétszakaszra (Calvin-ciklus, szén-dioxid-megkötés)**.

## A fényszakasz

A fényszakasz a kloroplasztisz **tilakoidmembránjában** zajlik, ahol a **klorofill** és egyéb pigmentek (karotinoidok) elnyelik a fényenergiát. A folyamat lépései:

1. A klorofill elnyeli a fényt, gerjesztett állapotba kerül, és elektronokat ad le egy elektrontranszport-láncnak.
2. A **vízbontás (fotolízis)** során víz molekulák hasadnak szét, ez pótolja a klorofill leadott elektronjait, és **oxigén** szabadul fel — ez a fotoszintézis során keletkező oxigén forrása.
3. Az elektrontranszport-lánc energiáját felhasználva a sejt **ATP-t** termel (fotofoszforiláció), és **NADPH** (redukált koenzim) keletkezik.

A fényszakasz termékei (ATP és NADPH) a sötétszakaszban kerülnek felhasználásra.

## A sötétszakasz (Calvin-ciklus)

A sötétszakasz a kloroplasztisz **sztrómájában** zajlik, és nem igényel közvetlenül fényt (de a fényszakasz termékeit felhasználja):

1. A légköri **szén-dioxid megkötése**: a CO2 egy 5 szénatomos vegyülethez kapcsolódik egy enzim (RuBisCO) segítségével.
2. A keletkezett vegyület a fényszakaszból származó ATP és NADPH felhasználásával **szerves (3 szénatomos) vegyületté** redukálódik.
3. E vegyületek egy része **glükózzá** (illetve keményítővé, cellulózzá) épül tovább, más része a ciklus folytatásához regenerálja a kiindulási 5 szénatomos vegyületet.

## A fotoszintézist befolyásoló tényezők

A fotoszintézis sebességét (intenzitását) korlátozó, azaz **limitáló tényezők** befolyásolják:

- **Fényintenzitás** – alacsony fénynél a fotoszintézis sebessége a fény mennyiségével nő, majd egy ponton (telítési szint felett) más tényező válik korlátozóvá.
- **Szén-dioxid koncentráció** – a légköri CO2-koncentráció növekedésével egy határig nő a fotoszintézis sebessége.
- **Hőmérséklet** – az enzimek (pl. RuBisCO) működési optimuma van; túl magas hőmérséklet a fehérjék denaturációjához vezethet.
- **Vízellátás** – a víz mind reaktáns, mind a sztómák nyitottságát (és így a CO2-felvételt) befolyásoló tényező.

## A fotoszintézis jelentősége

A fotoszintézis a Föld szinte teljes élővilágának **elsődleges energiaforrása**: az autotróf (önellátó) fotoszintetizáló élőlények (növények, algák, cianobaktériumok) építik fel azt a szerves anyagot, amelyre a heterotróf élőlények (állatok, gombák, legtöbb baktérium) táplálékként támaszkodnak. A folyamat mellékproduktumaként keletkező oxigén tartja fenn a légkör oxigéntartalmát, amely az aerob sejtlégzés (és így a legtöbb komplex élőlény) alapfeltétele. A fotoszintézis és a sejtlégzés egymás "ellentétes" folyamatai: az egyik szerves anyagot és oxigént épít fel fényenergiából, a másik ezeket lebontva nyeri ki a bennük tárolt kémiai energiát.
`,
    key_concepts: [
      "fényszakasz és sötétszakasz (Calvin-ciklus)",
      "klorofill és fotolízis",
      "ATP és NADPH szerepe",
      "RuBisCO enzim és CO2-megkötés",
      "limitáló tényezők",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik molekula szabadul fel oxigén formájában a fotoszintézis fényszakaszában?",
        options: ["víz (fotolízis során)", "szén-dioxid", "glükóz", "ATP"],
        correct_answer: "víz (fotolízis során)",
        explanation:
          "A fényszakaszban a víz molekulák hasadnak szét (fotolízis), ez pótolja a klorofill elektronjait, és ekkor szabadul fel az oxigén.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol zajlik a fotoszintézis fényszakasza a kloroplasztiszban?",
        options: ["a tilakoidmembránban", "a sztrómában", "a mitokondriumban", "a sejtmagban"],
        correct_answer: "a tilakoidmembránban",
        explanation:
          "A klorofill és a fényszakasz reakciói a tilakoidok membránjában zajlanak, ahol a fényenergia ATP és NADPH formájában kémiai energiává alakul.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a Calvin-ciklus (sötétszakasz) fő eredménye?",
        options: [
          "A CO2 megkötése és szerves (szerves szén) vegyületté, végül glükózzá alakítása a fényszakasz ATP-jét és NADPH-ját felhasználva",
          "Az oxigén felszabadítása vízbontással",
          "A klorofill lebontása",
          "A növény légzése",
        ],
        correct_answer: "A CO2 megkötése és szerves (szerves szén) vegyületté, végül glükózzá alakítása a fényszakasz ATP-jét és NADPH-ját felhasználva",
        explanation:
          "A sötétszakaszban a RuBisCO enzim megköti a CO2-t, majd a fényszakaszból származó ATP és NADPH energiáját felhasználva szerves vegyületek, végül glükóz keletkezik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy növényt egyre nagyobb fényintenzitásnak teszünk ki állandó, alacsony CO2-koncentráció mellett. Mi történik a fotoszintézis sebességével egy ponton túl?",
        options: [
          "Egy ponton nem nő tovább, mert a CO2-koncentráció válik limitáló tényezővé",
          "Korlátlanul, lineárisan nő a fényintenzitással",
          "Azonnal nulla lesz",
          "Csak a hőmérséklettől függ, a fénytől nem",
        ],
        correct_answer: "Egy ponton nem nő tovább, mert a CO2-koncentráció válik limitáló tényezővé",
        explanation:
          "Ha a CO2-koncentráció alacsony és rögzített, akkor egy bizonyos fényintenzitás felett már nem a fény, hanem a rendelkezésre álló CO2 mennyisége korlátozza a fotoszintézis sebességét (limitáló tényezők elve).",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen kapcsolat van a fotoszintézis és a sejtlégzés folyamata között?",
        options: [
          "Egymás 'ellentétes' folyamatai: a fotoszintézis fényenergiából szerves anyagot és oxigént épít fel, a sejtlégzés ezeket lebontva energiát nyer ki",
          "A két folyamat azonos, csak más sejtben zajlik",
          "A sejtlégzés csak állatokban, a fotoszintézis csak baktériumokban zajlik",
          "A fotoszintézis a sejtlégzés melléktermékeként keletkezik",
        ],
        correct_answer: "Egymás 'ellentétes' folyamatai: a fotoszintézis fényenergiából szerves anyagot és oxigént épít fel, a sejtlégzés ezeket lebontva energiát nyer ki",
        explanation:
          "A fotoszintézis a szervetlen anyagokból (CO2, H2O) fényenergia felhasználásával szerves anyagot és O2-t épít fel, míg a sejtlégzés a szerves anyagot O2 felhasználásával lebontva CO2-t, H2O-t és felhasználható (ATP-ben tárolt) energiát termel.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "novenyek-szaporodasa",
    title: "Növények szaporodása",
    level: "mindketto",
    theme: "Növények országa",
    order_index: 13,
    summary_markdown:
      "A növények szaporodhatnak ivartalanul (vegetatívan) és ivarosan; a virágos növényeknél a virág a szaporító szerv, a megporzást és megtermékenyítést a magvak és a termés kialakulása követi.",
    content_markdown: `
## Ivartalan (vegetatív) szaporodás

Az ivartalan szaporodás során az utódnövény genetikailag azonos (klón) az anyanövénnyel, hiszen mitózissal, ivarsejtek részvétele nélkül keletkezik. Természetes formái: **gyöktörzs, gumó, hagyma** (föld alatti raktározó és szaporító szervek, pl. burgonya gumója, tulipán hagymája), **inda, sarj** (a föld felszínén futó hajtás gyököket ereszt, pl. szamóca). A vegetatív szaporodás előnye a gyorsaság és a kedvező tulajdonságok biztos átvitele; hátránya, hogy nem hoz létre genetikai variabilitást, így az utódok egyformán érzékenyek lehetnek egy adott kórokozóra vagy környezeti változásra. Az emberi gyakorlatban (kertészet, mezőgazdaság) ide tartozik a **dugványozás** és az **oltás** is.

## A virág mint szaporító szerv

A virágos növények (zárvatermők) ivaros szaporodásának szerve a **virág**. Fő részei:

- **Csészelevelek (kehely)** – a bimbót védik.
- **Sziromlevelek (pártalevelek)** – gyakran színesek, a rovarok, madarak csábítására szolgálnak (rovarmegporzás esetén).
- **Porzók** – a hím ivarszervek; a **portokban** keletkezik a **pollen (virágpor)**, amely a hím ivarsejteket (spermiumsejteket) tartalmazza.
- **Termő (bibe, bibeszál, magház)** – a női ivarszerv; a **magházban** találhatók a **magkezdemények**, amelyekben a petesejt fejlődik.

## Megporzás

A **megporzás** a pollen eljutása a bibére. Ez lehet **önmegporzás** (ugyanazon virág vagy növény pollenje termékenyíti meg saját magát) vagy **idegenmegporzás** (más egyed pollenjével történik, ami nagyobb genetikai variabilitást biztosít). A megporzás közvetítő tényezője szerint lehet **szélmegporzású** (pl. fűfélék, sok fa — nagy mennyiségű, könnyű pollen) vagy **rovarmegporzású** (feltűnő virágok, illat, nektár csábítja a rovarokat, amelyek testükön szállítják a pollent).

## Megtermékenyítés és a mag kialakulása

A bibére került pollenszem **pollentömlőt** növeszt, amely a bibeszálon át a magházig hatol, és a benne lévő hím ivarsejtet a magkezdeményben lévő petesejtig vezeti — itt történik a **megtermékenyítés**, a hím és női ivarsejt egyesülése, létrehozva a **zigótát**. A megtermékenyített magkezdeményből **mag** fejlődik, amely tartalmazza a fejlődő embriót, a tápanyagraktárt és a védő maghéjat. A magház a megtermékenyítés után **terméssé** fejlődik, amely a magokat védi, és sok esetben a magok szétterjedését (terjesztését) is segíti (pl. húsos termések állatok általi elfogyasztás révén, szárnyas termések szél általi szóródással).

## A magok csírázása

Kedvező körülmények (megfelelő hőmérséklet, víz, oxigén) hatására a nyugalmi állapotú mag **csírázni** kezd: az embrió sejtjei osztódni kezdenek, a gyököcske gyökeret, a rügyecske hajtást hoz létre, a tápanyagraktár (pl. sziklevelek, endospermium) energiát biztosít a folyamathoz, amíg a fiatal növény önálló fotoszintézisre képessé nem válik.

## Az ivaros és ivartalan szaporodás összehasonlítása

| Jellemző | Ivartalan (vegetatív) | Ivaros (virág, mag) |
|---|---|---|
| Utódok genetikai állománya | azonos az anyanövénnyel | eltérő, variábilis |
| Sejtosztódás típusa | mitózis | meiózis (ivarsejt-képzés) |
| Sebesség | gyors | lassabb |
| Alkalmazkodóképesség a változó környezethez | kisebb | nagyobb |
`,
    key_concepts: [
      "vegetatív szaporodás (gumó, hagyma, inda)",
      "virág részei (porzó, termő)",
      "megporzás (szél-, rovarmegporzás)",
      "megtermékenyítés és zigóta",
      "mag és termés kialakulása",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik szervben keletkezik a virágos növények pollenje (virágpora)?",
        options: ["porzó (portok)", "bibe", "csészelevél", "magház"],
        correct_answer: "porzó (portok)",
        explanation:
          "A porzó a hím ivarszerv, amelynek portokjában keletkezik a pollen, amely a hím ivarsejteket tartalmazza.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az önmegporzás és az idegenmegporzás között?",
        options: [
          "Az önmegporzásnál ugyanazon egyed pollenje termékenyíti meg a bibét, az idegenmegporzásnál más egyed pollenje",
          "Az önmegporzás csak szél útján történhet",
          "Az idegenmegporzás sosem hoz létre magot",
          "Az önmegporzás mindig nagyobb genetikai variabilitást hoz létre",
        ],
        correct_answer: "Az önmegporzásnál ugyanazon egyed pollenje termékenyíti meg a bibét, az idegenmegporzásnál más egyed pollenje",
        explanation:
          "Az idegenmegporzás során más egyedtől származó pollen jut a bibére, ami nagyobb genetikai variabilitást eredményez, mint az önmegporzás.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi keletkezik a hím és a női ivarsejt egyesülésekor a magkezdeményben?",
        options: ["zigóta", "pollentömlő", "termés", "sziromlevél"],
        correct_answer: "zigóta",
        explanation:
          "A megtermékenyítés a hím és a női ivarsejt egyesülése, amelynek eredménye a zigóta, amelyből a magban fejlődő embrió lesz.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő hátránya a vegetatív (ivartalan) szaporodásnak az ivaros szaporodáshoz képest?",
        options: [
          "Nem hoz létre genetikai variabilitást, így a populáció egyformán érzékeny lehet egy adott kórokozóra vagy környezeti változásra",
          "Sokkal lassabb, mint az ivaros szaporodás",
          "Nem hozhat létre életképes utódot",
          "Mindig szükséges hozzá megporzás",
        ],
        correct_answer: "Nem hoz létre genetikai variabilitást, így a populáció egyformán érzékeny lehet egy adott kórokozóra vagy környezeti változásra",
        explanation:
          "Mivel a vegetatív szaporodás mitózisra épül, az utódok genetikailag azonosak az anyanövénnyel — ez gyors, de nem ad alkalmazkodási 'rugalmasságot' a változó körülményekhez.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik a magházzal a megtermékenyítés után, és mi ennek a biológiai jelentősége?",
        options: [
          "Terméssé fejlődik, amely védi a magokat, és sok esetben segíti azok szétterjedését",
          "Azonnal elpusztul, mivel funkciója befejeződött",
          "Visszafejlődik sziromlevéllé",
          "Pollentömlővé alakul át",
        ],
        correct_answer: "Terméssé fejlődik, amely védi a magokat, és sok esetben segíti azok szétterjedését",
        explanation:
          "A magház a megtermékenyítés után terméssé alakul, amely mechanikailag védi a benne fejlődő magokat, és gyakran alkalmazkodott azok terjesztésének elősegítésére (pl. húsos termések, szárnyas termések).",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "allatok-orszaga-attekintes-es-rendszerezes",
    title: "Állatok országa — áttekintés és rendszerezés",
    level: "mindketto",
    theme: "Állatok országa",
    order_index: 14,
    summary_markdown:
      "Az állatok országa heterotróf, sejtfal nélküli, mozgásra képes eukarióta élőlényeket foglal magába, amelyeket testszimmetriájuk, testüregük, valamint a gerinchúr/gerinc megléte alapján csoportosíthatunk a gerinctelenektől a gerincesekig.",
    content_markdown: `
## Az állatok általános jellemzői

Az állatok eukarióta, **többsejtű**, **heterotróf** (más élőlényekből táplálkoznak) élőlények, sejtjeiknek **nincs sejtfaluk** (ezért képesek mozgásra, alakváltozásra), és jellemzően **mozgásra képesek** legalább életciklusuk egy szakaszában. Az állatvilág rendszerezésének alapvető szempontjai:

## Testszimmetria

- **Sugaras (radiális) szimmetria** – a test középpontjából minden irányban hasonló felépítés (pl. medúzák, tengeri csillagok) — jellemzően helyben élő vagy lassan mozgó, minden irányból érkező ingerekre/táplálékra reagáló élőlényekre jellemző.
- **Kétoldali (bilaterális) szimmetria** – a test egy hosszanti síkra tükörszimmetrikus, jól elkülönül elülső-hátulsó és hasi-háti oldal — ez jellemző a legtöbb aktívan mozgó, irányba haladó állatra (pl. rovarok, gerincesek), és jár együtt a fej-testrészek (cephalizáció) kialakulásával.

## Testüreg

Az embrionális csíralemezek (ektoderma, mezoderma, endoderma) közötti testüreg megléte és típusa fontos rendszerezési szempont: a **valódi testüreggel (coelomával)** rendelkező állatoknál (pl. gerincesek, gyűrűsférgek) a belső szervek szabadon fejlődhetnek, elkülönülve a testfaltól, ami hatékonyabb szervrendszerek kialakulását teszi lehetővé.

## Gerinctelenek főbb csoportjai

- **Szivacsok** – legegyszerűbb testfelépítésű, valódi szövetek nélküli állatok.
- **Csalánozók** (medúzák, korallok, hidraállatok) – sugaras szimmetria, csalánsejtekkel (nematocysta) rendelkeznek zsákmányszerzéshez/védekezéshez.
- **Férgek** (laposférgek, hengeresférgek, gyűrűsférgek) – megnyúlt, hosszanti testű állatok, egyre bonyolultabb testüreggel és szervrendszerrel.
- **Puhatestűek** (kagylók, csigák, lábasfejűek) – lágy, jellemzően külső vagy belső mészházzal védett testű állatok.
- **Ízeltlábúak** – a legfajgazdagabb állattörzs; kitines külső kitikula (küticula), páros végtagok, szelvényezett test jellemzi őket (rovarok, rákok, pókszabásúak).

## Gerincesek főbb csoportjai

A gerincesek közös jellemzője a belső, mozgatható **gerincoszlop** és **belső csontos/kartilaginózus vázrendszer**:

| Osztály | Jellemző |
|---|---|
| Halak | vízi életmód, kopoltyús légzés, úszóhólyag |
| Kétéltűek | lárva vízben (kopoltyú), kifejlett szárazföldön (bőr- és tüdőlégzés) |
| Hüllők | szárazföldi, tüdőlégzés, szaruhomlyos bőr, meszes tojás |
| Madarak | tollazat, állandó testhőmérséklet (endoterm), tüdő+légzsákos légzés, repülésre specializált testfelépítés |
| Emlősök | szőrzet, állandó testhőmérséklet, tejmirigy, jellemzően eleveszülő |

## Rendszertani jelentőség

A rendszerezés (taxonómia) célja, hogy tükrözze az élőlények **evolúciós rokonsági viszonyait**: a modern rendszertan a hasonló testfelépítés mellett egyre inkább molekuláris (DNS-szekvencia) adatokra épít, hogy pontosabban rekonstruálja, mely csoportok állnak közelebbi evolúciós rokonságban egymással.
`,
    key_concepts: [
      "sugaras és kétoldali szimmetria",
      "testüreg (coeloma)",
      "gerinctelen főbb törzsek",
      "gerincesek osztályai",
      "evolúciós rokonság a rendszertanban",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik testszimmetria jellemző a legtöbb aktívan, irányba mozgó állatra (pl. rovarokra, gerincesekre)?",
        options: ["kétoldali (bilaterális) szimmetria", "sugaras (radiális) szimmetria", "aszimmetria", "pontszimmetria"],
        correct_answer: "kétoldali (bilaterális) szimmetria",
        explanation:
          "A kétoldali szimmetriájú testfelépítés jól elkülönült elülső-hátulsó véggel jár, ami az irányba történő aktív mozgáshoz kedvező, ellentétben a sugaras szimmetriával, amely a helyhez kötött vagy minden irányból érő ingerekre reagáló életmódot segíti.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik állattörzsre jellemző a kitines külső kitikula és a szelvényezett test?",
        options: ["ízeltlábúak", "puhatestűek", "csalánozók", "gyűrűsférgek"],
        correct_answer: "ízeltlábúak",
        explanation:
          "Az ízeltlábúak (rovarok, rákok, pókszabásúak) jellemzője a kitines kültikula, a szelvényezett test és a páros végtagok — ez a legfajgazdagabb állattörzs.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a madarak légzését, ami a rendkívüli oxigénigényű repülést lehetővé teszi?",
        options: [
          "Tüdő és légzsákok együttes rendszere, amely egyirányú levegőáramlást biztosít",
          "Kizárólag kopoltyús légzés",
          "Bőrlégzés",
          "Nincs önálló légzőszervük, a tojásból veszik fel az oxigént",
        ],
        correct_answer: "Tüdő és légzsákok együttes rendszere, amely egyirányú levegőáramlást biztosít",
        explanation:
          "A madarak légzsákokkal kiegészített tüdeje egyirányú, folyamatos levegőáramlást tesz lehetővé a tüdőn át, ami hatékonyabb oxigénfelvételt biztosít, mint az emlősök kétirányú légzése — ez elengedhetetlen a repüléshez szükséges nagy energiaigényhez.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a valódi testüreg (coeloma) jelentősége az állatok testfelépítésében?",
        options: [
          "Lehetővé teszi, hogy a belső szervek szabadon fejlődjenek, elkülönülve a testfaltól, ami bonyolultabb szervrendszereket eredményez",
          "Kizárólag a mozgást akadályozza",
          "Csak a gerinctelenekre jellemző, a gerincesekre nem",
          "Nincs semmilyen funkcionális jelentősége",
        ],
        correct_answer: "Lehetővé teszi, hogy a belső szervek szabadon fejlődjenek, elkülönülve a testfaltól, ami bonyolultabb szervrendszereket eredményez",
        explanation:
          "A valódi testüreggel rendelkező állatoknál (pl. gyűrűsférgek, gerincesek) a belső szervek a testfaltól függetlenül mozoghatnak és fejlődhetnek, ez teszi lehetővé a komplexebb emésztő-, keringési és egyéb szervrendszerek kialakulását.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a kétéltűeket a hüllőkkel szemben a fejlődésük és élőhelyük kapcsán?",
        options: [
          "A kétéltűek lárvája vízben él kopoltyúval, a kifejlett egyed szárazföldön él bőr- és tüdőlégzéssel; a hüllők egész életükben tüdővel lélegeznek és meszes tojást raknak",
          "A kétéltűek soha nem élnek vízben",
          "A hüllők lárvája vízben él, a kétéltűeké szárazföldön",
          "Mindkét csoport állandó testhőmérsékletű (endoterm)",
        ],
        correct_answer: "A kétéltűek lárvája vízben él kopoltyúval, a kifejlett egyed szárazföldön él bőr- és tüdőlégzéssel; a hüllők egész életükben tüdővel lélegeznek és meszes tojást raknak",
        explanation:
          "A kétéltűek jellegzetes kettős életmódot élnek (vízi lárva, szárazföldi kifejlett forma), míg a hüllők — vékonyabb, szaruhomlyos bőrrel és meszes, szárazságtűrő tojással — teljesen függetlenné váltak a vízi élettértől a szaporodásban is.",
        difficulty: 2,
      },
    ],
  },
];
