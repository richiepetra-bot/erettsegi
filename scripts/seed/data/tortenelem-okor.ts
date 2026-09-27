import { TopicSeed } from "./angol";

export const tortenelemOkorTopics: TopicSeed[] = [
  {
    slug: "az-okori-kelet",
    title: "Az ókori Kelet (Egyiptom, Mezopotámia)",
    level: "mindketto",
    theme: "Ókor",
    order_index: 1,
    summary_markdown:
      "Az emberiség első nagy civilizációi nagy folyók völgyében jöttek létre. Mezopotámia és Egyiptom despotikus államberendezkedése, öntözéses gazdálkodása és írásbelisége (ékírás, hieroglifa) alapozta meg a szervezett állami élet kereteit.",
    content_markdown: `
## A folyami civilizációk kialakulása

Az emberiség első nagy, magas kultúrájú civilizációi a Kr.e. 4-3. évezredben, nagy folyók (Tigris-Eufrátesz, Nílus) völgyében alakultak ki. Közös jellemzőjük, hogy az **öntözéses gazdálkodás** tette lehetővé a nagy termésfelesleget, ami eltartotta a nem földműveléssel foglalkozó rétegeket (hivatalnokok, papok, katonák) — ez alapozta meg az állami szervezettséget és a munkamegosztást.

## Mezopotámia

A Tigris és az Eufrátesz "két folyó közén" (ez a görög eredetű "Mezopotámia" szó jelentése) alakult ki a **sumér civilizáció**, az emberiség első városállamokból (pl. Ur, Uruk, Lagas) álló kultúrája. A sumérok találták fel az **ékírást** (agyagtáblákra nyomott, ék alakú jelekből álló írásrendszer), amely a legkorábbi ismert írásbeliség.

A későbbi mezopotámiai birodalmak közül kiemelkedik a **Babiloni Birodalom**: uralkodója, **Hammurapi** (Kr.e. 18. század) alkotta meg a történelem egyik legkorábbi, fennmaradt írott törvénygyűjteményét, a **Hammurapi törvénykönyvét**, amely a "szemet szemért, fogat fogért" (talio) elvére épülő, ugyanakkor rendkívül részletes jogi szabályozást tartalmazott — jól mutatva a mezopotámiai állam fejlett jogi-közigazgatási szervezettségét.

## Egyiptom

Egyiptom civilizációja a **Nílus** áradásainak köszönhető termékeny földsávra épült: az évenkénti kiszámítható áradás iszapja tette lehetővé a rendkívül intenzív mezőgazdaságot. Az egyiptomi állam élén a **fáraó** állt, akit isteni eredetűnek tekintettek — ez a **despotikus (korlátlan uralkodói hatalmon alapuló) államberendezkedés** klasszikus példája.

Az Óbirodalom korában (Kr.e. 3. évezred) épültek a nagy **piramisok** (pl. a gízai piramisegyüttes), amelyek a fáraók síremlékei és egyben hatalmuk, valamint a túlvilági életbe vetett hit monumentális kifejezői voltak. Az egyiptomiak **hieroglif írást** használtak, és fejlett **mumifikálási** eljárást dolgoztak ki, amely a test túlvilági megőrzésének hitéhez kapcsolódott. Az Újbirodalom korában (Kr.e. 2. évezred második fele) Egyiptom katonai nagyhatalommá vált (pl. II. Ramszesz uralkodása), és intenzív kapcsolatba került a mezopotámiai térség államaival is.

## A despotikus államberendezkedés jellemzői

Mind Mezopotámiában, mind Egyiptomban jellemző volt: az uralkodó (király vagy fáraó) korlátlan, gyakran isteni eredetűnek tekintett hatalma; egy erősen központosított, újraelosztó gazdaság (az állam gyűjtötte be és osztotta szét a termést); valamint egy befolyásos papi réteg, amely a vallási élet mellett gyakran a közigazgatásban, az írásbeliségben és a tudományokban (csillagászat, matematika) is meghatározó szerepet játszott.

## Jelentősége

Az ókori Kelet civilizációi teremtették meg az első szervezett államokat, az írásbeliséget, a jogi szabályozás kezdeteit és számos tudományos-technikai alapot (naptár, matematika, építészet), amelyek a későbbi mediterrán (görög, majd római) civilizációk fejlődésének is alapjául szolgáltak.
`,
    key_concepts: [
      "öntözéses gazdálkodás",
      "despotikus államberendezkedés",
      "ékírás és hieroglifa",
      "Hammurapi törvénykönyve",
      "fáraó isteni hatalma",
    ],
    source_refs: [
      { label: "Az őskor és az ókori Kelet (zanza.tv)", url: "https://zanza.tv/tortenelem/az-oskor-es-az-okori-kelet" },
      { label: "Mezopotámia (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Mezopot%C3%A1mia" },
      { label: "Egyiptomiak és mezopotámiaiak közös múltja (Múlt-kor)", url: "https://mult-kor.hu/egyiptomiak-es-mezopotamiaiak-kozos-multat-jelez-a-kulonleges-dns-lelet-20250703" },
      { label: "Az ókori kelet nagy birodalmainak története – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/az-okori-kelet-nagy-birodalmainak-tortenete/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi tette lehetővé a nagy termésfelesleget és ezáltal a szervezett állami élet kialakulását az ókori Keleten?",
        options: ["az öntözéses gazdálkodás", "a vasfeldolgozás elterjedése", "a tengeri kereskedelem", "a lótenyésztés"],
        correct_answer: "az öntözéses gazdálkodás",
        explanation: "A nagy folyók (Tigris-Eufrátesz, Nílus) menti öntözéses gazdálkodás biztosította a termésfelesleget, amely eltartotta a nem földműves rétegeket.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik uralkodó alkotta meg a történelem egyik legkorábbi fennmaradt törvénykönyvét?",
        options: ["Hammurapi", "Tutanhamon", "II. Ramszesz", "Szulejmán"],
        correct_answer: "Hammurapi",
        explanation: "Hammurapi babiloni uralkodó (Kr.e. 18. század) alkotta meg a talio elvére épülő törvénykönyvet.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen írásrendszert használtak a sumérok?",
        options: ["ékírás", "hieroglif írás", "latin betűs írás", "rovásírás"],
        correct_answer: "ékírás",
        explanation: "A sumérok az agyagtáblákra nyomott, ék alakú jelekből álló ékírást fejlesztették ki - ez a legkorábbi ismert írásbeliség.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi elsősorban a despotikus államberendezkedést?",
        options: [
          "az uralkodó korlátlan, gyakran isteni eredetűnek tekintett hatalma",
          "a hatalom megosztása több választott tisztségviselő között",
          "a nép közvetlen részvétele a döntéshozatalban",
          "a hatalom teljes hiánya, anarchia",
        ],
        correct_answer: "az uralkodó korlátlan, gyakran isteni eredetűnek tekintett hatalma",
        explanation: "A despotikus berendezkedés lényege az uralkodó (király/fáraó) korlátlan, isteni eredetűnek tekintett hatalma.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mihez kapcsolódott az egyiptomiak mumifikálási eljárása?",
        options: [
          "a túlvilági élet és a test megőrzésének hitéhez",
          "kizárólag higiéniai okokhoz",
          "a hadviselés gyakorlatához",
          "a mezőgazdasági termelés növeléséhez",
        ],
        correct_answer: "a túlvilági élet és a test megőrzésének hitéhez",
        explanation: "A mumifikálás az egyiptomi túlvilághithez kapcsolódott: a test megőrzése szükséges volt a túlvilági élethez.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a görög eredetű \"Mezopotámia\" szó?",
        options: ["két folyó köze", "szent város", "napisten földje", "termékeny félhold"],
        correct_answer: "két folyó köze",
        explanation: "A \"Mezopotámia\" görög eredetű szó, jelentése a Tigris és az Eufrátesz \"két folyó közén\" fekvő terület.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen felsorolás tartalmaz kizárólag sumér városállamokat?",
        options: ["Ur, Uruk, Lagas", "Memphis, Thébai, Abüdosz", "Athén, Spárta, Korinthosz", "Róma, Karthágó, Milétosz"],
        correct_answer: "Ur, Uruk, Lagas",
        explanation: "A sumér civilizáció olyan városállamokból állt, mint Ur, Uruk vagy Lagas.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen jogelvre épült Hammurapi törvénykönyve?",
        options: [
          "a talio (\"szemet szemért, fogat fogért\") elvére",
          "a kollektív felelősség elvére",
          "az irgalom és megbocsátás elvére",
          "a vagyoni egyenlőség elvére",
        ],
        correct_answer: "a talio (\"szemet szemért, fogat fogért\") elvére",
        explanation: "Hammurapi törvénykönyve a talio, azaz a \"szemet szemért, fogat fogért\" elvére épült, ugyanakkor rendkívül részletes jogi szabályozást tartalmazott.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi biztosította Egyiptomban az intenzív mezőgazdaság alapját?",
        options: [
          "a Nílus évenkénti kiszámítható áradása",
          "a rendszeres, bőséges esőzések",
          "egy kiterjedt mesterséges csatornarendszer az Eufráteszből",
          "az importált gabona",
        ],
        correct_answer: "a Nílus évenkénti kiszámítható áradása",
        explanation: "Az évenkénti kiszámítható áradás iszapja tette lehetővé Egyiptomban a rendkívül intenzív mezőgazdaságot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik korszakban épültek Egyiptom nagy piramisai, például a gízai piramisegyüttes?",
        options: ["az Óbirodalom korában", "az Újbirodalom korában", "a hellenisztikus korban", "a Középbirodalom bukása után"],
        correct_answer: "az Óbirodalom korában",
        explanation: "Az Óbirodalom korában (Kr.e. 3. évezred) épültek a nagy piramisok, a fáraók síremlékei.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik fáraó uralkodása jelzi Egyiptom katonai nagyhatalommá válását az Újbirodalom korában?",
        options: ["II. Ramszesz", "Hammurapi", "Tutanhamon kizárólag", "Nagy Konstantin"],
        correct_answer: "II. Ramszesz",
        explanation: "Az Újbirodalom korában (pl. II. Ramszesz uralkodása) Egyiptom katonai nagyhatalommá vált.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte a despotikus államok gazdasági berendezkedését?",
        options: [
          "erősen központosított, újraelosztó gazdaság",
          "szabad piaci verseny, állami beavatkozás nélkül",
          "teljesen decentralizált, önellátó falvak rendszere",
          "kizárólag pénzalapú csereforgalom",
        ],
        correct_answer: "erősen központosított, újraelosztó gazdaság",
        explanation: "A despotikus államberendezkedésre jellemző volt egy erősen központosított, újraelosztó gazdaság: az állam gyűjtötte be és osztotta szét a termést.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "A vallási feladatok mellett milyen egyéb területeken játszott meghatározó szerepet a papi réteg Mezopotámiában és Egyiptomban?",
        options: [
          "a közigazgatásban, az írásbeliségben és a tudományokban",
          "kizárólag a hadviselésben",
          "kizárólag a kereskedelemben",
          "kizárólag a sportversenyek rendezésében",
        ],
        correct_answer: "a közigazgatásban, az írásbeliségben és a tudományokban",
        explanation: "A befolyásos papi réteg a vallási élet mellett gyakran a közigazgatásban, az írásbeliségben és a tudományokban (csillagászat, matematika) is meghatározó szerepet játszott.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit alapoztak meg az ókori Kelet civilizációi a későbbi mediterrán civilizációk számára?",
        options: [
          "az írásbeliséget, a jogi szabályozás kezdeteit és tudományos-technikai alapokat",
          "a demokratikus kormányzást",
          "a kereszténység elterjedését",
          "a köztársasági államformát",
        ],
        correct_answer: "az írásbeliséget, a jogi szabályozás kezdeteit és tudományos-technikai alapokat",
        explanation: "Az ókori Kelet civilizációi teremtették meg az írásbeliséget, a jogi szabályozás kezdeteit és számos tudományos-technikai alapot, amelyek a görög és római civilizációk fejlődésének is alapjául szolgáltak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik birodalomhoz kötődik Hammurapi és törvénykönyve?",
        options: ["a Babiloni Birodalom", "az Asszír Birodalom", "az Óegyiptomi Birodalom", "a Perzsa Birodalom"],
        correct_answer: "a Babiloni Birodalom",
        explanation: "A mezopotámiai birodalmak közül kiemelkedő Babiloni Birodalom uralkodója volt Hammurapi, aki megalkotta a nevét viselő törvénykönyvet.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "az-okori-gorogorszag-atheni-demokracia",
    title: "Az ókori Görögország (polisz, athéni demokrácia)",
    level: "mindketto",
    theme: "Ókor",
    order_index: 2,
    summary_markdown:
      "A görög poliszrendszer és az athéni demokrácia kialakulása Szolóntól Kleiszthenészen át Periklészig. A világtörténelem első demokráciája, korlátaival (csak a szabad férfi polgárok jogai) és intézményeivel (népgyűlés, tisztségviselők sorsolása) együtt.",
    content_markdown: `
## A poliszrendszer

Az ókori görög civilizáció jellegzetes politikai-társadalmi egysége a **polisz** (városállam) volt: önálló, szuverén, jellemzően egy várost és környező földjeit magába foglaló közösség, saját törvényekkel, hadsereggel és vallási kultusszal. A hegyvidékes terep és a szigetvilág elősegítette a poliszok politikai önállóságát és sokféleségét — nem alakult ki egységes görög állam, helyette versengő és időnként szövetkező poliszok hálózata jött létre. A népességnövekedés és a földhiány miatt a poliszok a Kr.e. 8-6. században intenzív **gyarmatosításba** kezdtek a Földközi- és a Fekete-tenger partvidékén.

## Az athéni demokrácia kialakulása

Az athéni demokrácia fokozatosan, több reform eredményeként alakult ki:

- **Szolón** (Kr.e. 6. század eleje) reformjai eltörölték az adósrabszolgaságot, és vagyoni alapon (nem születési előjogok alapján) tagolta a polgárokat politikai jogosultság szempontjából.
- **Kleiszthenész** reformjai (Kr.e. 508 körül) hozták el a tényleges demokráciát: tíz új, területi alapú **phülét** (törzset) hozott létre a régi, arisztokrata befolyású nemzetségi tagozódás felváltására, és bevezette az **osztrakiszmoszt** (cserépszavazást), amellyel a polgárok megszavazhatták egy, a demokráciára veszélyesnek tartott politikus tíz évre szóló száműzetését.
- **Periklész** korában (Kr.e. 5. század közepe) érte el az athéni demokrácia fénykorát: bevezették a napidíjat a közéleti feladatokat (esküdtbíráskodás, tisztségviselés) ellátó polgárok számára, hogy a szegényebbek is részt tudjanak venni a közéletben.

## A demokrácia intézményei és korlátai

Az athéni demokrácia legfőbb döntéshozó szerve a **népgyűlés (ekklészia)** volt, amelyen minden felnőtt férfi polgár részt vehetett, szavazhatott törvényekről, hadüzenetről, békéről. A legtöbb tisztséget **sorsolással** töltötték be (nem választással), hogy elkerüljék a hatalom tartós koncentrálódását egyes családok kezében.

Fontos ugyanakkor hangsúlyozni a demokrácia korlátait a mai fogalmakhoz képest: politikai jogokkal kizárólag a **szabad, felnőtt férfi polgárok** rendelkeztek — ez a teljes lakosságnak mindössze kb. 10%-át jelentette. A **nők**, a **metoikoszok** (idegen származású, Athénban élő szabad emberek) és a **rabszolgák** teljesen ki voltak zárva a politikai életből.

## A görög-perzsa háborúk hatása

A görög-perzsa háborúk (Kr.e. 490–479, kiemelkedő ütközetei Marathón és Szalamisz) idején Athén a görög ellenállás vezető ereje volt; a háborúkban aratott győzelem tovább erősítette Athén önbizalmát és demokratikus intézményeit, egyben megalapozta az Athén vezette **déloszi szövetség** létrejöttét, amelynek bevételeiből épült ki a periklészi demokrácia gazdasági háttere.

## Athén és Spárta összevetése

Athén demokratikus berendezkedésével szemben állt **Spárta** katonai-oligarchikus államszervezete: Spártában szigorú katonai fegyelem, kollektivizált nevelés (agógé) és korlátozott, csak a szűk spártai polgárság kezében lévő politikai jogok jellemezték a társadalmat.

## Jelentősége

Az athéni demokrácia a világtörténelem első ismert demokratikus kormányzati formája, amely — korlátai ellenére — a modern demokráciák politikai fogalomkészletének (népgyűlés, választott/sorsolt tisztségviselők, a nép közvetlen részvétele a döntéshozatalban) egyik legfontosabb történeti előképe.
`,
    key_concepts: [
      "polisz",
      "Kleiszthenész reformjai",
      "osztrakiszmosz",
      "népgyűlés (ekklészia)",
      "athéni demokrácia korlátai",
    ],
    source_refs: [
      { label: "Az ókori Athén – a demokrácia kialakulása (zanza.tv)", url: "https://zanza.tv/tortenelem/az-okori-hellasz/az-okori-athen-demokracia-kialakulasa" },
      { label: "Ókori Athén (Wikipédia)", url: "https://hu.wikipedia.org/wiki/%C3%93kori_Ath%C3%A9n" },
      { label: "Kik rendelkeztek szavazati joggal az athéni demokráciában? (Múlt-kor)", url: "https://mult-kor.hu/kik-rendelkeztek-szavazati-joggal-az-atheni-demokraciaban-20250317" },
      { label: "Az athéni demokrácia – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/az-atheni-demokracia/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az a politikai-társadalmi egység, amely az ókori görög civilizáció jellegzetes formája volt?",
        options: ["polisz (városállam)", "birodalom", "törzsi konföderáció", "tartomány"],
        correct_answer: "polisz (városállam)",
        explanation: "A polisz önálló, szuverén görög városállam volt, saját törvényekkel és politikai berendezkedéssel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik reformer hozta létre a tíz területi alapú phülét és az osztrakiszmoszt?",
        options: ["Kleiszthenész", "Szolón", "Periklész", "Drakón"],
        correct_answer: "Kleiszthenész",
        explanation: "Kleiszthenész Kr.e. 508 körüli reformjai hozták el a tényleges athéni demokráciát a tíz phüle és az osztrakiszmosz bevezetésével.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt az osztrakiszmosz (cserépszavazás) célja?",
        options: [
          "egy demokráciára veszélyesnek tartott politikus száműzése tíz évre",
          "az adósrabszolgaság eltörlése",
          "a hadsereg toborzása",
          "a bírák kiválasztása",
        ],
        correct_answer: "egy demokráciára veszélyesnek tartott politikus száműzése tíz évre",
        explanation: "Az osztrakiszmosz lehetővé tette, hogy a polgárok megszavazzák egy politikus tízéves száműzetését.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kik voltak kizárva az athéni demokrácia politikai jogaiból?",
        options: [
          "a nők, a metoikoszok és a rabszolgák",
          "kizárólag a rabszolgák",
          "csak a fiatal, 20 év alatti férfiak",
          "senki, mindenki rendelkezett politikai joggal",
        ],
        correct_answer: "a nők, a metoikoszok és a rabszolgák",
        explanation: "Csak a szabad, felnőtt férfi polgárok (kb. a lakosság 10%-a) rendelkeztek politikai jogokkal Athénban.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte Spárta államberendezkedését Athénnal szemben?",
        options: [
          "katonai-oligarchikus rendszer, szigorú fegyelemmel és kollektív neveléssel",
          "teljes demokrácia, mindenki számára biztosított politikai jogokkal",
          "abszolút monarchia egyetlen király korlátlan hatalmával",
          "vallási teokrácia, papi uralommal",
        ],
        correct_answer: "katonai-oligarchikus rendszer, szigorú fegyelemmel és kollektív neveléssel",
        explanation: "Spártában szigorú katonai fegyelem és kollektivizált nevelés (agógé) jellemezte a szűk polgárságra korlátozott oligarchikus rendszert.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte Szolón reformjait a Kr.e. 6. század elején?",
        options: [
          "eltörölte az adósrabszolgaságot, és vagyoni alapon tagolta a polgárokat",
          "bevezette az osztrakiszmoszt",
          "létrehozta a tíz területi alapú phülét",
          "bevezette a napidíjat a köztisztségekért",
        ],
        correct_answer: "eltörölte az adósrabszolgaságot, és vagyoni alapon tagolta a polgárokat",
        explanation: "Szolón reformjai eltörölték az adósrabszolgaságot, és vagyoni alapon (nem születési előjogok alapján) tagolták a polgárokat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kezdtek a görög poliszok intenzív gyarmatosításba a Kr.e. 8-6. században?",
        options: [
          "a népességnövekedés és a földhiány miatt",
          "a perzsa hódítás elől menekülve",
          "a spártai hódítások elől menekülve",
          "a római terjeszkedés hatására",
        ],
        correct_answer: "a népességnövekedés és a földhiány miatt",
        explanation: "A népességnövekedés és a földhiány miatt kezdtek a poliszok gyarmatosításba a Földközi- és Fekete-tenger partvidékén.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit vezettek be Periklész korában a közéleti feladatokat (esküdtbíráskodás, tisztségviselés) ellátó polgárok számára?",
        options: [
          "napidíjat",
          "az osztrakiszmoszt",
          "az adósrabszolgaság eltörlését",
          "a tíz phülét",
        ],
        correct_answer: "napidíjat",
        explanation: "Periklész korában bevezették a napidíjat, hogy a szegényebb polgárok is részt tudjanak venni a közéletben.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik testület volt az athéni demokrácia legfőbb döntéshozó szerve?",
        options: ["a népgyűlés (ekklészia)", "a szenátus", "az areiopagosz kizárólag", "a konzulok tanácsa"],
        correct_answer: "a népgyűlés (ekklészia)",
        explanation: "A népgyűlésen (ekklészián) minden felnőtt férfi polgár részt vehetett és szavazhatott törvényekről, hadüzenetről, békéről.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért töltötték be sorsolással a legtöbb athéni tisztséget, nem választással?",
        options: [
          "hogy elkerüljék a hatalom tartós koncentrálódását egyes családok kezében",
          "mert nem volt elegendő jelölt a tisztségekre",
          "mert a választás túl költséges lett volna",
          "mert a törvény kifejezetten tiltotta a választást",
        ],
        correct_answer: "hogy elkerüljék a hatalom tartós koncentrálódását egyes családok kezében",
        explanation: "A sorsolás célja az volt, hogy elkerüljék a hatalom tartós koncentrálódását egyes családok kezében.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kik voltak a metoikoszok?",
        options: [
          "idegen származású, Athénban élő szabad emberek",
          "a rabszolgákat felügyelő tisztviselők",
          "a spártai katonai vezetők",
          "a papi réteg tagjai",
        ],
        correct_answer: "idegen származású, Athénban élő szabad emberek",
        explanation: "A metoikoszok idegen származású, Athénban élő szabad emberek voltak, akik ki voltak zárva a politikai életből.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik két ütközet volt a görög-perzsa háborúk kiemelkedő csatája?",
        options: ["Marathón és Szalamisz", "Mohács és Muhi", "Actium és Cannae", "Trója és Ithaka"],
        correct_answer: "Marathón és Szalamisz",
        explanation: "A görög-perzsa háborúk (Kr.e. 490-479) kiemelkedő ütközetei Marathón és Szalamisz voltak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szövetség bevételeiből épült ki a periklészi demokrácia gazdasági háttere?",
        options: [
          "a déloszi szövetség",
          "a peloponnészoszi szövetség",
          "a boiótiai szövetség",
          "az akháj szövetség",
        ],
        correct_answer: "a déloszi szövetség",
        explanation: "Az Athén vezette déloszi szövetség bevételeiből épült ki a periklészi demokrácia gazdasági háttere.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Körülbelül hány százalékát tette ki a politikai jogokkal rendelkező szabad férfi polgárság az athéni teljes lakosságnak?",
        options: ["kb. 10%-át", "kb. 50%-át", "kb. 90%-át", "a teljes lakosságot"],
        correct_answer: "kb. 10%-át",
        explanation: "A politikai jogokkal rendelkező szabad, felnőtt férfi polgárok a teljes lakosságnak mindössze kb. 10%-át jelentették.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi segítette elő a görög poliszok politikai önállóságát és sokféleségét?",
        options: [
          "a hegyvidékes terep és a szigetvilág",
          "az egységes birodalmi közigazgatás",
          "a despotikus államberendezkedés",
          "a mediterrán tengeri jog egységesítése",
        ],
        correct_answer: "a hegyvidékes terep és a szigetvilág",
        explanation: "A hegyvidékes terep és a szigetvilág elősegítette a poliszok politikai önállóságát, ezért nem alakult ki egységes görög állam.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-gorog-kultura-es-hitvilag",
    title: "A görög kultúra és hitvilág",
    level: "mindketto",
    theme: "Ókor",
    order_index: 3,
    summary_markdown:
      "A görög mitológia és politeista vallás, a filozófia születése (Szókratész, Platón, Arisztotelész), a színház és az olimpiai játékok — az ókori görög kultúra máig ható öröksége a nyugati civilizáció alapjait fektette le.",
    content_markdown: `
## A görög vallás és mitológia

Az ókori görögök **politeista** (sokistenhívő) vallást gyakoroltak: isteneiket emberi alakban (antropomorf módon), emberi tulajdonságokkal (féltékenység, harag, szerelem) ruházták fel, és az Olümposz hegyén elképzelt lakhelyükön képzelték el őket. A legfőbb istenek közé tartozott **Zeusz** (az istenek királya), **Athéné** (a bölcsesség istennője, Athén védistene), **Poszeidón** (a tenger ura) és **Dionüszosz** (a bor és a mámor istene, akinek kultuszából a görög színház is kinőtt).

A **mítoszok** — istenekről, héroszokról szóló elbeszélések — eredetileg szóbeli hagyomány útján terjedtek, és csak jóval később, írásban rögzítve (pl. Homérosz eposzaiban) váltak a görög kulturális önazonosság alapjává. A mítoszok nemcsak vallási, hanem a világ és az emberi lét magyarázatára szolgáló funkciót is betöltöttek.

## A görög filozófia születése

A görög gondolkodás egyik legnagyobb újítása, hogy a **milétoszi természetfilozófusok** (Kr.e. 6. század, pl. Thalész) elsőként kezdték racionális, mítoszoktól független magyarázatokkal keresni a világ jelenségeinek okait — ezzel megszületett a nyugati filozófia és tudomány gondolkodásmódja.

- **Szókratész** (Kr.e. 5. század) az önismeretet és az erkölcsi kérdéseket állította filozófiája középpontjába; jellegzetes módszere, a **dialektika** (kérdés-felelet alapú, a beszélgetőpartner állításait folyamatosan próbára tevő vitamódszer) a mai napig a filozófiai és pedagógiai gondolkodás egyik alapmódszere.
- **Platón**, Szókratész tanítványa, az **ideatan** megalkotója: szerinte az érzékelhető világ csak tökéletlen másolata egy tökéletes, örök "ideák" világának.
- **Arisztotelész**, Platón tanítványa, a nyugati tudományosság egyik legnagyobb alakja: logikai, biológiai, fizikai, etikai és politikai munkássága évszázadokra meghatározta a nyugati gondolkodást — a retorika elméletének is ő az egyik megalapozója.

## A görög színház

A görög **színház** (dráma) a Dionüszosz-kultuszból nőtt ki: a tragédia (pl. Szophoklész, Euripidész művei) és a komédia (pl. Arisztophanész) egyaránt vallási ünnepségek (a Dionüszia) részeként, versenyszerű formában adták elő. A görög tragédia a sorsszerűség, az istenek és emberek viszonyának, valamint az erkölcsi dilemmáknak a feldolgozására szolgált, és formai elemei (kórus, színészek, szerkezeti felépítés) az egész későbbi nyugati drámairodalom alapjává váltak.

## Az olimpiai játékok

Az **olimpiai játékok** (első feljegyzett megrendezésük Kr.e. 776-ra tehető) pánhellén (minden görögöt összefogó), elsődlegesen vallási jellegű sportesemény volt Zeusz tiszteletére, amelyre a görög poliszok — még háborúskodás közepette is — szent béke (ekhekheiria) idejére felfüggesztették egymással szembeni ellenségeskedésüket.

## Jelentősége

A görög kultúra és hitvilág öröksége felmérhetetlen hatással volt a nyugati civilizációra: a filozófia, a tudományos gondolkodás, a színház, a politikai gondolkodás (demokrácia) és a művészi esztétikai eszmények mind a görög gondolkodás talaján fejlődtek ki, és a mai napig a nyugati kultúra egyik legfontosabb referenciapontjai maradtak.
`,
    key_concepts: [
      "politeizmus",
      "milétoszi természetfilozófusok",
      "Szókratész, Platón, Arisztotelész",
      "görög tragédia",
      "olimpiai játékok",
    ],
    source_refs: [
      { label: "A görög tudomány és művészet (zanza.tv)", url: "https://zanza.tv/tortenelem/az-okori-hellasz/gorog-tudomany-es-muveszet" },
      { label: "Ókori görög vallás (Wikipédia)", url: "https://hu.wikipedia.org/wiki/%C3%93kori_g%C3%B6r%C3%B6g_vall%C3%A1s" },
      { label: "Görög mitológia (Wikipédia)", url: "https://hu.wikipedia.org/wiki/G%C3%B6r%C3%B6g_mitol%C3%B3gia" },
      { label: "Az antik hitvilág, művészet és tudomány – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/az-antik-hitvilag-muveszet-es-tudomany/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Kik kezdték elsőként racionális, mítoszoktól független magyarázatokat keresni a világ jelenségeire?",
        options: ["a milétoszi természetfilozófusok", "a spártai hadvezérek", "az egyiptomi papok", "a római jogtudósok"],
        correct_answer: "a milétoszi természetfilozófusok",
        explanation: "A milétoszi természetfilozófusok (pl. Thalész) alapozták meg a racionális, filozófiai-tudományos gondolkodást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik filozófus dolgozta ki az ideatant?",
        options: ["Platón", "Szókratész", "Arisztotelész", "Thalész"],
        correct_answer: "Platón",
        explanation: "Platón szerint az érzékelhető világ csak tökéletlen másolata egy tökéletes, örök ideavilágnak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik isten kultuszából nőtt ki a görög színház?",
        options: ["Dionüszosz", "Zeusz", "Poszeidón", "Athéné"],
        correct_answer: "Dionüszosz",
        explanation: "A görög tragédia és komédia egyaránt a bor és mámor istenének, Dionüszosznak a kultuszából, a Dionüszia ünnepségekből ered.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte az olimpiai játékokat az ókori Görögországban?",
        options: [
          "pánhellén, vallási jellegű esemény, amely idejére szent béke lépett életbe",
          "kizárólag katonai kiképzési gyakorlat volt",
          "csak egyetlen polisz belső ünnepsége volt",
          "politikai választásokhoz kapcsolódó esemény volt",
        ],
        correct_answer: "pánhellén, vallási jellegű esemény, amely idejére szent béke lépett életbe",
        explanation: "Az olimpiai játékok minden görögöt összefogó, Zeusz tiszteletére rendezett esemény volt, amely idejére szent béke (ekhekheiria) lépett életbe.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik módszer köthető Szókratészhez?",
        options: ["a dialektika (kérdés-felelet alapú vitamódszer)", "az ideatan", "a formális logika rendszerezése", "a biológiai osztályozás"],
        correct_answer: "a dialektika (kérdés-felelet alapú vitamódszer)",
        explanation: "Szókratész jellegzetes módszere a dialektika, amely kérdés-felelet formájában próbára teszi a beszélgetőpartner állításait.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte a görög politeista vallást?",
        options: [
          "az isteneket emberi alakban és emberi tulajdonságokkal ruházták fel",
          "egyetlen, testetlen istenséget tiszteltek",
          "az isteneknek nem volt kultuszhelyük",
          "kizárólag a halottak tiszteletén alapult",
        ],
        correct_answer: "az isteneket emberi alakban és emberi tulajdonságokkal ruházták fel",
        explanation: "A görögök politeista vallása antropomorf volt: isteneiket emberi alakban, emberi tulajdonságokkal (féltékenység, harag, szerelem) ruházták fel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik istennő volt a bölcsesség istennője és Athén védistene?",
        options: ["Athéné", "Dionüszosz", "Poszeidón", "Zeusz"],
        correct_answer: "Athéné",
        explanation: "Athéné a bölcsesség istennője és Athén védistene volt a görög mitológiában.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt a tenger ura a görög mitológiában?",
        options: ["Poszeidón", "Zeusz", "Athéné", "Dionüszosz"],
        correct_answer: "Poszeidón",
        explanation: "Poszeidón volt a görög mitológiában a tenger ura, a legfőbb istenek egyike.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan terjedtek eredetileg a görög mítoszok, mielőtt írásban rögzítették volna őket?",
        options: [
          "szóbeli hagyomány útján",
          "kizárólag festett vázákon",
          "papi feljegyzésekben, titkosan",
          "kőbe faragott törvényekként",
        ],
        correct_answer: "szóbeli hagyomány útján",
        explanation: "A mítoszok eredetileg szóbeli hagyomány útján terjedtek, és csak később, írásban rögzítve (pl. Homérosz eposzaiban) váltak a görög kulturális önazonosság alapjává.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik filozófus volt Platón tanítványa, és vált a nyugati tudományosság egyik legnagyobb alakjává?",
        options: ["Arisztotelész", "Szókratész", "Thalész", "Periklész"],
        correct_answer: "Arisztotelész",
        explanation: "Arisztotelész Platón tanítványaként logikai, biológiai, fizikai, etikai és politikai munkásságával évszázadokra meghatározta a nyugati gondolkodást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen tudományterületnek volt az egyik megalapozója Arisztotelész a logika, biológia, fizika és etika mellett?",
        options: ["a retorika", "a geometria", "az orvostudomány", "a csillagászat"],
        correct_answer: "a retorika",
        explanation: "Arisztotelész a retorika elméletének is egyik megalapozója volt.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kik voltak a görög tragédia jelentős szerzői?",
        options: [
          "Szophoklész és Euripidész",
          "Arisztophanész és Menandrosz",
          "Homérosz és Hésziodosz",
          "Thalész és Anaximandrosz",
        ],
        correct_answer: "Szophoklész és Euripidész",
        explanation: "A görög tragédia jelentős szerzői közé tartozott Szophoklész és Euripidész.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt a görög komédia jelentős szerzője?",
        options: ["Arisztophanész", "Szophoklész", "Euripidész", "Platón"],
        correct_answer: "Arisztophanész",
        explanation: "A görög komédia egyik jelentős szerzője Arisztophanész volt, akinek művei a Dionüszia ünnepségek részeként kerültek színre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen témák feldolgozására szolgált jellemzően a görög tragédia?",
        options: [
          "a sorsszerűség, az istenek-emberek viszonya és erkölcsi dilemmák",
          "kizárólag politikai szatíra",
          "kizárólag háborús csatajelenetek",
          "kizárólag mindennapi családi konfliktusok",
        ],
        correct_answer: "a sorsszerűség, az istenek-emberek viszonya és erkölcsi dilemmák",
        explanation: "A görög tragédia a sorsszerűség, az istenek és emberek viszonyának, valamint az erkölcsi dilemmáknak a feldolgozására szolgált.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikorra tehető az olimpiai játékok első feljegyzett megrendezése?",
        options: ["Kr.e. 776-ra", "Kr.e. 508-ra", "Kr.e. 490-re", "Kr.e. 336-ra"],
        correct_answer: "Kr.e. 776-ra",
        explanation: "Az olimpiai játékok első feljegyzett megrendezése Kr.e. 776-ra tehető.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "az-okori-roma",
    title: "Az ókori Róma (köztársaságtól a császárságig)",
    level: "mindketto",
    theme: "Ókor",
    order_index: 4,
    summary_markdown:
      "Róma fejlődése egy kis városállamból a Földközi-tenger urává: a köztársaság intézményei, a hódítások (pun háborúk), Caesar és Augustus, a császárkor öröksége (jog, közigazgatás), valamint a kereszténység államvallássá válása.",
    content_markdown: `
## A királyságtól a köztársaságig

A hagyomány szerint Kr.e. 753-ban alapított Róma kezdetben királyság volt, majd Kr.e. 509 körül a patrícius családok elűzték az utolsó királyt, és létrehozták a **köztársaságot (res publica)**. A köztársaság élén évente választott **consulok** (kettő, egymást kölcsönösen ellenőrző tisztségviselő) álltak; a legtekintélyesebb testület a **senatus** volt, amelynek tagjai korábbi tisztségviselőkből kerültek ki, és amely a kormányzás folytonosságát biztosította. A korai köztársaság idején éles küzdelem zajlott a **patríciusok** (ősi, kiváltságos nemesi családok) és a **plebejusok** (a szabad, de politikai jogokkal kevésbé rendelkező köznép) között — ennek eredményeként a plebejusok fokozatosan politikai jogokat (pl. néptribunusi intézmény) vívtak ki maguknak.

## Hódítások és a köztársaság válsága

A köztársaság korában Róma folyamatos háborúk révén először az Itáliai-félszigetet, majd a **pun háborúkban** (Kr.e. 264–146, Karthágó ellen, Hannibál híres itáliai hadjáratával) a nyugat-mediterrán térséget is meghódította, és fokozatosan a teljes Földközi-tenger medencéjének urává vált. A hatalmas hódítások és a rabszolgák tömeges beáramlása gyökeresen átalakította a római társadalmat, és a Kr.e. 1. században polgárháborúkhoz, a köztársasági intézmények válságához vezetett.

## Caesar és Augustus: a principátus kialakulása

**Iulius Caesar** katonai sikerei és egyeduralmi törekvései (diktátori hatalom) a köztársasági rend felbomlásának egyik csúcspontját jelentették; meggyilkolása (Kr.e. 44) után újabb polgárháborús időszak következett. Caesar unokaöccse és örököse, **Augustus** zárta le a polgárháborúkat, és Kr.e. 27-ben létrehozta a **principátus** rendszerét: formálisan megőrizte a köztársasági intézményeket, valójában azonban egyeduralkodóként (princeps, azaz "első polgár") kormányzott — ezzel gyakorlatilag megalapította a **Római Birodalmat (császárkort)**.

## A császárkor öröksége

A császárkor (kb. Kr.e. 27 – Kr.u. 476 Nyugaton) alatt Róma a történelem egyik legnagyobb kiterjedésű birodalmává vált, amelyet fejlett **provinciarendszer** (a meghódított területek tartományokká szervezése) és úthálózat kötött össze. A **pax Romana** ("római béke", kb. Kr.u. 1-2. század) idején a birodalom belső békéje és stabilitása virágzó kereskedelmet és kulturális fejlődést tett lehetővé. A **római jog** — a magánjog, a szerződési jog és a jogi eljárások kidolgozott rendszere — a mai napig alapvető hatással van a kontinentális európai jogrendszerekre.

## A kereszténység elterjedése

A kereszténység a Kr.u. 1. században, a birodalom keleti tartományaiban (Palesztina) született, és — kezdeti üldöztetések ellenére — fokozatosan elterjedt a birodalom egész területén. **Constantinus** császár 313-ban kiadott **milánói ediktuma** vallásszabadságot biztosított a keresztényeknek, majd 380-ban I. Theodosius császár rendelete **államvallássá** tette a kereszténységet a Római Birodalomban.

## Hanyatlás és bukás

A Kr.u. 4-5. században a birodalmat egyre súlyosabb belső válságok (gazdasági nehézségek, politikai instabilitás) és külső nyomás (a **népvándorlás** germán törzseinek betörései) gyengítették. A Nyugatrómai Birodalom végül **476-ban** szűnt meg, amikor Odoaker germán hadvezér letette az utolsó nyugatrómai császárt — ez a dátum a hagyományos történetírásban az ókor végét és a középkor kezdetét jelzi.

## Jelentősége

Az ókori Róma öröksége (jog, közigazgatás, nyelv — a latin nyelv a modern újlatin nyelvek alapja, várostervezés, mérnöki tudás) a mai napig alapvetően meghatározza az európai civilizációt; a köztársasági és császári kormányzati formák modelljei pedig a modern politikai gondolkodás egyik fontos történeti referenciapontjai.
`,
    key_concepts: [
      "köztársaság (res publica)",
      "patríciusok és plebejusok",
      "principátus",
      "pax Romana",
      "milánói ediktum",
    ],
    source_refs: [
      { label: "Az ókori Róma (zanza.tv)", url: "https://zanza.tv/tortenelem/az-okori-roma" },
      { label: "Ókori Róma (Wikipédia)", url: "https://hu.wikipedia.org/wiki/%C3%93kori_R%C3%B3ma" },
      { label: "Római Köztársaság (Wikipédia)", url: "https://hu.wikipedia.org/wiki/R%C3%B3mai_K%C3%B6zt%C3%A1rsas%C3%A1g" },
      { label: "Az ókori Róma – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/az-okora-roma/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mikor jött létre a Római Köztársaság?",
        options: ["Kr.e. 509 körül", "Kr.e. 753-ban", "Kr.e. 27-ben", "Kr.u. 476-ban"],
        correct_answer: "Kr.e. 509 körül",
        explanation: "Kr.e. 509 körül a patrícius családok elűzték a királyt, és létrehozták a köztársaságot.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki alapította meg a principátus rendszerét, ezzel gyakorlatilag a Római Birodalmat?",
        options: ["Augustus", "Iulius Caesar", "Hannibál", "Constantinus"],
        correct_answer: "Augustus",
        explanation: "Augustus, Caesar örököse, Kr.e. 27-ben hozta létre a principátus rendszerét, amellyel egyeduralkodóként kormányzott.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik háborús sorozatban győzte le Róma Karthágót?",
        options: ["pun háborúk", "perzsa háborúk", "gall háborúk", "punkháborúk (elírás - nincs ilyen)"],
        correct_answer: "pun háborúk",
        explanation: "A pun háborúk (Kr.e. 264-146) során győzte le Róma Karthágót, és vált a nyugat-mediterrán térség urává.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik rendelet biztosított vallásszabadságot a keresztényeknek 313-ban?",
        options: ["a milánói ediktum", "a Hammurapi törvénykönyv", "az Aranybulla", "a XII táblás törvény"],
        correct_answer: "a milánói ediktum",
        explanation: "Constantinus császár 313-as milánói ediktuma biztosított vallásszabadságot a kereszténység számára.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor szűnt meg a Nyugatrómai Birodalom?",
        options: ["476-ban", "313-ban", "380-ban", "44-ben (Kr.e.)"],
        correct_answer: "476-ban",
        explanation: "A Nyugatrómai Birodalom 476-ban szűnt meg, amikor Odoaker letette az utolsó nyugatrómai császárt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor alapították a hagyomány szerint Rómát?",
        options: ["Kr.e. 753-ban", "Kr.e. 509-ben", "Kr.e. 264-ben", "Kr.u. 27-ben"],
        correct_answer: "Kr.e. 753-ban",
        explanation: "A hagyomány szerint Rómát Kr.e. 753-ban alapították, kezdetben királyságként.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány consult választottak évente a köztársaság korában, és mi volt közöttük a viszony?",
        options: [
          "kettőt, akik kölcsönösen ellenőrizték egymást",
          "egyet, aki élethosszig tisztségben maradt",
          "hármat, akik sorsolással osztották meg a hatalmat",
          "tízet, akik a néptribunusokkal együtt kormányoztak",
        ],
        correct_answer: "kettőt, akik kölcsönösen ellenőrizték egymást",
        explanation: "A köztársaság élén évente választott két consul állt, akik egymást kölcsönösen ellenőrizték.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kik között zajlott éles küzdelem a korai köztársaság idején, amely végül a néptribunusi intézmény kialakulásához vezetett?",
        options: [
          "a patríciusok és a plebejusok között",
          "a consulok és a senatus között",
          "a rómaiak és a görögök között",
          "a keresztények és a pogányok között",
        ],
        correct_answer: "a patríciusok és a plebejusok között",
        explanation: "A patríciusok és a plebejusok küzdelme eredményeként a plebejusok fokozatosan politikai jogokat (pl. néptribunusi intézmény) vívtak ki maguknak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik hadvezér vezetett híres itáliai hadjáratot a pun háborúk során Karthágó oldalán?",
        options: ["Hannibál", "Iulius Caesar", "Augustus", "Odoaker"],
        correct_answer: "Hannibál",
        explanation: "A pun háborúk során Hannibál vezetett híres itáliai hadjáratot Karthágó oldalán Róma ellen.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor gyilkolták meg Iulius Caesart?",
        options: ["Kr.e. 44-ben", "Kr.e. 27-ben", "Kr.u. 313-ban", "Kr.u. 380-ban"],
        correct_answer: "Kr.e. 44-ben",
        explanation: "Iulius Caesart Kr.e. 44-ben gyilkolták meg, ami újabb polgárháborús időszakot indított el.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte a \"pax Romana\" (kb. Kr.u. 1-2. század) időszakát?",
        options: [
          "a birodalom belső békéje és stabilitása, virágzó kereskedelemmel",
          "folytonos polgárháborúk a trónért",
          "a provinciarendszer teljes felbomlása",
          "a kereszténység azonnali államvallássá tétele",
        ],
        correct_answer: "a birodalom belső békéje és stabilitása, virágzó kereskedelemmel",
        explanation: "A pax Romana idején a birodalom belső békéje és stabilitása virágzó kereskedelmet és kulturális fejlődést tett lehetővé.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen rendszer szervezte tartományokba a meghódított területeket, és kötötte össze azokat fejlett úthálózattal?",
        options: [
          "a provinciarendszer",
          "a hűbéri lánc",
          "a szandzsákrendszer",
          "a vármegyerendszer",
        ],
        correct_answer: "a provinciarendszer",
        explanation: "A császárkorban Rómát fejlett provinciarendszer és úthálózat kötötte össze a meghódított területekkel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol született a kereszténység a Kr.u. 1. században?",
        options: [
          "a birodalom keleti tartományaiban, Palesztinában",
          "Rómában, a senatus körében",
          "Egyiptomban, a fáraók udvarában",
          "Galliában, a druida papok között",
        ],
        correct_answer: "a birodalom keleti tartományaiban, Palesztinában",
        explanation: "A kereszténység a Kr.u. 1. században, a birodalom keleti tartományaiban (Palesztinában) született.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik uralkodó rendelete tette 380-ban államvallássá a kereszténységet a Római Birodalomban?",
        options: ["I. Theodosius", "Constantinus", "Augustus", "Iulius Caesar"],
        correct_answer: "I. Theodosius",
        explanation: "380-ban I. Theodosius császár rendelete tette államvallássá a kereszténységet, míg korábban Constantinus 313-as milánói ediktuma csak vallásszabadságot biztosított.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi vezetett a köztársasági intézmények válságához és polgárháborúkhoz a Kr.e. 1. században?",
        options: [
          "a hatalmas hódítások és a rabszolgák tömeges beáramlása",
          "a kereszténység elterjedése",
          "a pun háborúk elvesztése",
          "a provinciák egyidejű fellázadása",
        ],
        correct_answer: "a hatalmas hódítások és a rabszolgák tömeges beáramlása",
        explanation: "A hatalmas hódítások és a rabszolgák tömeges beáramlása gyökeresen átalakította a római társadalmat, és polgárháborúkhoz vezetett.",
        difficulty: 2,
      },
    ],
  },
];
