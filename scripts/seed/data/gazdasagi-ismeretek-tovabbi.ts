import { TopicSeed } from "./angol";

export const gazdasagiIsmeretekTovabbiTopics: TopicSeed[] = [
  {
    slug: "kulkereskedelem-es-a-fizetesi-merleg",
    title: "Külkereskedelem és a fizetési mérleg",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 13,
    summary_markdown:
      "A külkereskedelem az országok közötti áru- és szolgáltatáscserét jelenti, amelynek összesített pénzügyi nyilvántartása a fizetési mérleg — ez mutatja meg, hogy egy nemzetgazdaság többet költ-e a külfölddel folytatott tranzakciókra, mint amennyi bevétele keletkezik.",
    content_markdown: `
## A külkereskedelem szerepe

A **külkereskedelem** az országok közötti áru- és szolgáltatáscsere, amely lehetővé teszi, hogy a nemzetgazdaságok kihasználják a **komparatív előnyeiket** (azt, amiben relatíve hatékonyabban termelnek másokhoz képest), és olyan javakhoz is hozzájussanak, amelyeket maguk nem, vagy csak drágábban tudnának előállítani. A külkereskedelem nyitottsága (a GDP-hez viszonyított export-import arány) jól jelzi egy gazdaság nemzetközi beágyazottságát — Magyarország kifejezetten nyitott, exportorientált gazdaság.

## A külkereskedelmi mérleg

A **külkereskedelmi mérleg** az adott ország áruexportjának és áruimportjának egyenlegét mutatja egy adott időszakra (jellemzően egy évre) vonatkozóan. Ha az export meghaladja az importot, **külkereskedelmi többletről (aktívumról)** beszélünk; ha az import nagyobb, **külkereskedelmi hiányról (deficitről)**.

## A fizetési mérleg fogalma és szerkezete

A **fizetési mérleg** egy adott ország és a külföld közötti valamennyi gazdasági tranzakciót rendszerezetten összefoglaló statisztikai kimutatás egy adott időszakra vonatkozóan. A fizetési mérleg fő részei: a **folyó fizetési mérleg** (áru- és szolgáltatáskereskedelem, jövedelmek, viszonzatlan folyó átutalások egyenlege), a **tőkemérleg** (tőketranszferek), és a **pénzügyi mérleg** (közvetlen tőkebefektetések, portfólióbefektetések, egyéb befektetések és a tartalékok változása).

## A folyó fizetési mérleg elemei

A **folyó fizetési mérleg** legfontosabb tétele az **áruforgalmi egyenleg** (a külkereskedelmi mérleg), amelyet kiegészít a **szolgáltatásforgalmi egyenleg** (pl. turizmus, szállítás, informatikai szolgáltatások exportja-importja), a **jövedelmek egyenlege** (pl. külföldi munkavállalók hazautalásai, külföldi tőkebefektetések hozamai), valamint a **viszonzatlan folyó átutalások** (pl. uniós támogatások, segélyek).

## Fizetési módok a nemzetközi kereskedelemben

A nemzetközi kereskedelemben a fizetések gyakran banki átutalással, okmányos meghitelezéssel (akkreditívvel) vagy egyéb, a felek közötti bizalmat és biztonságot szolgáló eszközökkel történnek. A nemzetközi bankközi fizetési üzenetek továbbítására a **SWIFT (Society for Worldwide Interbank Financial Telecommunication)** rendszert használják, amely lehetővé teszi a bankok közötti biztonságos, szabványosított kommunikációt a világ szinte minden országában.

## Az euró mint közös valuta

Az **euró** az Európai Unió tagállamai egy részének (az eurózóna országainak) közös pénzneme, amelynek bevezetése megszüntette az árfolyamkockázatot és az átváltási költségeket az eurózónán belüli kereskedelemben, ugyanakkor a tagállamok elveszítették önálló monetáris politikájukat (saját kamat- és árfolyampolitikájukat). Magyarország az Európai Unió tagja, de egyelőre nem vezette be az eurót, saját nemzeti valutával (forint) rendelkezik.

## A fizetési mérleg egyensúlyának jelentősége

A fizetési mérleg tartós, jelentős hiánya (amikor egy ország többet költ külföldre, mint amennyi bevétele onnan származik) eladósodáshoz vezethet, és sebezhetővé teheti az országot a nemzetközi pénzügyi piacok bizalmának megingásával szemben. A tartós többlet ezzel szemben devizatartalék-felhalmozást és a nemzeti valuta erősödési nyomását eredményezheti.

## Jelentősége

A külkereskedelem és a fizetési mérleg ismerete alapvető a nyitott gazdaságok (mint Magyarországé) működésének megértéséhez: ezek a mutatók jelzik, mennyire versenyképes egy ország a nemzetközi piacokon, és milyen pénzügyi kapcsolatban áll a világgazdaság többi szereplőjével.
`,
    key_concepts: [
      "külkereskedelmi mérleg (export-import egyenlege)",
      "fizetési mérleg szerkezete (folyó, tőke-, pénzügyi mérleg)",
      "folyó fizetési mérleg elemei",
      "SWIFT rendszer",
      "euró és az eurózóna",
    ],
    source_refs: [
      { label: "A fizetési mérleg szerkezete és összetevői (Érettségik.hu)", url: "https://erettsegik.hu/2025/06/08/a-fizetesi-merleg-szerkezete-es-osszetevoi/" },
      { label: "Fizetési mérleg (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Fizetési_mérleg" },
      { label: "Külkereskedelem és fizetési mérleg (KSH)", url: "https://www.ksh.hu/kulkereskedelem-es-fizetesi-merleg" },
      { label: "Fizetési módok a külkereskedelemben – SWIFT, az euró jellemzői (Érettségi 2024)", url: "https://erettsegi.org/fizetesi-modok-a-kulkereskedelemben-a-s-w-i-f-t-nemzetkozi-penzugyi-intezmenyek-az-euro-jellemzoi.html" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit mutat a külkereskedelmi mérleg?",
        options: [
          "az áruexport és áruimport egyenlegét",
          "az állami költségvetés bevételeit és kiadásait",
          "a jegybank alapkamatát",
          "a munkanélküliségi rátát"
        ],
        correct_answer: "az áruexport és áruimport egyenlegét",
        explanation: "A külkereskedelmi mérleg az ország áruexportjának és áruimportjának egyenlegét mutatja egy adott időszakra.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik három fő részre tagolódik a fizetési mérleg?",
        options: [
          "folyó fizetési mérleg, tőkemérleg, pénzügyi mérleg",
          "bevételi, kiadási, egyenlegi mérleg",
          "export, import, tranzit mérleg",
          "állami, vállalati, lakossági mérleg"
        ],
        correct_answer: "folyó fizetési mérleg, tőkemérleg, pénzügyi mérleg",
        explanation: "A fizetési mérleg fő részei a folyó fizetési mérleg, a tőkemérleg és a pénzügyi mérleg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire szolgál a SWIFT rendszer?",
        options: [
          "a bankok közötti nemzetközi fizetési üzenetek biztonságos továbbítására",
          "a tőzsdei árfolyamok meghatározására",
          "az adóbevallások benyújtására",
          "a munkanélküliségi statisztikák gyűjtésére"
        ],
        correct_answer: "a bankok közötti nemzetközi fizetési üzenetek biztonságos továbbítására",
        explanation: "A SWIFT egy szabványosított bankközi kommunikációs rendszer, amely a nemzetközi fizetési üzeneteket továbbítja biztonságosan.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az eurózónát?",
        options: [
          "a tagállamok közös pénznemet (eurót) használnak, és elveszítik önálló monetáris politikájukat",
          "minden uniós tagállam automatikusan tagja",
          "Magyarország is bevezette már az eurót",
          "nincs köze a monetáris politikához"
        ],
        correct_answer: "a tagállamok közös pénznemet (eurót) használnak, és elveszítik önálló monetáris politikájukat",
        explanation: "Az eurózóna tagállamai közös valutát használnak, cserébe lemondanak saját nemzeti monetáris politikájukról.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történhet, ha egy ország fizetési mérlege tartósan és jelentősen hiányt mutat?",
        options: [
          "eladósodáshoz vezethet, és sebezhetővé teheti az országot",
          "automatikusan erősödik a nemzeti valuta",
          "nincs semmilyen gazdasági következménye",
          "azonnal megszűnik a külkereskedelem"
        ],
        correct_answer: "eladósodáshoz vezethet, és sebezhetővé teheti az országot",
        explanation: "A tartós fizetésimérleg-hiány eladósodáshoz és a nemzetközi pénzügyi piacok bizalmának megingásával szembeni sebezhetőséghez vezethet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a komparatív előny fogalma a külkereskedelemben?",
        options: [
          "azt, amiben egy ország relatíve hatékonyabban termel másokhoz képest",
          "az ország teljes önellátását",
          "a legmagasabb GDP-t elérő országot",
          "a legalacsonyabb inflációt elérő országot"
        ],
        correct_answer: "azt, amiben egy ország relatíve hatékonyabban termel másokhoz képest",
        explanation: "A komparatív előny azt jelenti, hogy egy ország relatíve hatékonyabban termel egy adott jószágot másokhoz képest, ami indokolja a külkereskedelmi specializációt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi Magyarország külkereskedelmi nyitottságát?",
        options: [
          "kifejezetten nyitott, exportorientált gazdaság",
          "zárt, önellátó gazdaság",
          "kizárólag importra épülő gazdaság",
          "nincs is nemzetközi kereskedelme"
        ],
        correct_answer: "kifejezetten nyitott, exportorientált gazdaság",
        explanation: "Magyarország kifejezetten nyitott, exportorientált gazdaság, amit a GDP-hez viszonyított magas export-import arány is jelez.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a külkereskedelmi többlet (aktívum)?",
        options: [
          "amikor az export meghaladja az importot",
          "amikor az import meghaladja az exportot",
          "amikor az export és az import megegyezik",
          "amikor megszűnik a külkereskedelem"
        ],
        correct_answer: "amikor az export meghaladja az importot",
        explanation: "Külkereskedelmi többletről (aktívumról) akkor beszélünk, ha egy ország exportja meghaladja az importját.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely tételek tartoznak a folyó fizetési mérleg elemei közé az áruforgalmi egyenlegen kívül?",
        options: [
          "a szolgáltatásforgalom, a jövedelmek egyenlege és a viszonzatlan folyó átutalások",
          "kizárólag az állami költségvetés bevételei",
          "a tőzsdei árfolyamok",
          "a munkanélküliségi ráta"
        ],
        correct_answer: "a szolgáltatásforgalom, a jövedelmek egyenlege és a viszonzatlan folyó átutalások",
        explanation: "A folyó fizetési mérleg az áruforgalmi egyenleg mellett tartalmazza a szolgáltatásforgalmi egyenleget, a jövedelmek egyenlegét és a viszonzatlan folyó átutalásokat (pl. uniós támogatások).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az akkreditív (okmányos meghitelezés)?",
        options: [
          "a nemzetközi kereskedelemben a felek közötti bizalmat és biztonságot szolgáló fizetési eszköz",
          "egyfajta devizaárfolyam-jegyzés",
          "az állami költségvetés bevételi tétele",
          "a tőzsdei kereskedés egy formája"
        ],
        correct_answer: "a nemzetközi kereskedelemben a felek közötti bizalmat és biztonságot szolgáló fizetési eszköz",
        explanation: "Az akkreditív (okmányos meghitelezés) a nemzetközi kereskedelemben a felek közötti bizalmat és biztonságot szolgáló fizetési mód.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi Magyarország helyzetét az euróval kapcsolatban?",
        options: [
          "az Európai Unió tagja, de egyelőre nem vezette be az eurót, saját nemzeti valutával (forint) rendelkezik",
          "már bevezette az eurót",
          "nem tagja az Európai Uniónak",
          "kizárólag dollárban kereskedik"
        ],
        correct_answer: "az Európai Unió tagja, de egyelőre nem vezette be az eurót, saját nemzeti valutával (forint) rendelkezik",
        explanation: "Magyarország az Európai Unió tagja, de egyelőre nem vezette be az eurót, saját nemzeti valutával (forint) rendelkezik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit eredményezhet a fizetési mérleg tartós többlete?",
        options: [
          "devizatartalék-felhalmozást és a nemzeti valuta erősödési nyomását",
          "kizárólag eladósodást",
          "a külkereskedelem teljes megszűnését",
          "a fogyasztói árindex csökkenését"
        ],
        correct_answer: "devizatartalék-felhalmozást és a nemzeti valuta erősödési nyomását",
        explanation: "A fizetési mérleg tartós többlete devizatartalék-felhalmozáshoz és a nemzeti valuta erősödési nyomásához vezethet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit tartalmaz a fizetési mérleg tőkemérlege?",
        options: [
          "a tőketranszfereket",
          "az áru- és szolgáltatáskereskedelem egyenlegét",
          "a portfólióbefektetéseket",
          "a devizatartalékok változását"
        ],
        correct_answer: "a tőketranszfereket",
        explanation: "A tőkemérleg a tőketranszfereket foglalja magába, elkülönülve a folyó fizetési mérlegtől és a pénzügyi mérlegtől.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi tartozik a fizetési mérleg pénzügyi mérlegéhez?",
        options: [
          "a közvetlen tőkebefektetések, portfólióbefektetések, egyéb befektetések és a tartalékok változása",
          "kizárólag a folyó fogyasztási kiadások",
          "az állami adóbevételek",
          "a munkabérek összessége"
        ],
        correct_answer: "a közvetlen tőkebefektetések, portfólióbefektetések, egyéb befektetések és a tartalékok változása",
        explanation: "A pénzügyi mérleg a közvetlen tőkebefektetéseket, a portfólióbefektetéseket, az egyéb befektetéseket és a devizatartalékok változását tartalmazza.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos a fizetési mérleg egyensúlyának fenntartása a nemzetközi pénzügyi piacok szempontjából?",
        options: [
          "mert a tartós hiány sebezhetővé teheti az országot a nemzetközi bizalom megingásával szemben",
          "mert csak az exportőrök profitját érinti",
          "mert nincs hatással a nemzetközi pénzügyi kapcsolatokra",
          "mert kizárólag a belföldi árakat befolyásolja"
        ],
        correct_answer: "mert a tartós hiány sebezhetővé teheti az országot a nemzetközi bizalom megingásával szemben",
        explanation: "A fizetési mérleg tartós, jelentős hiánya eladósodáshoz vezethet, és sebezhetővé teheti az országot a nemzetközi pénzügyi piacok bizalmának megingásával szemben.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "arfolyamok-es-a-devizapiac",
    title: "Árfolyamok és a devizapiac",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 14,
    summary_markdown:
      "A devizapiacon a különböző pénznemek egymáshoz viszonyított árát (árfolyamát) a kereslet és a kínálat alakítja ki; az árfolyamrendszerek (lebegő, rögzített) és az árfolyam-változások alapvetően befolyásolják egy ország külkereskedelmét és versenyképességét.",
    content_markdown: `
## A valuta és a deviza fogalma

A **valuta** egy adott ország törvényes fizetőeszköze külföldön (készpénz formájában, pl. egy eurobankjegy), míg a **deviza** valamely külföldi fizetőeszközre szóló, bankszámlán nyilvántartott követelés (pl. egy eurószámlán lévő egyenleg). A gyakorlatban a valuta- és a devizaárfolyam kis mértékben eltér egymástól (a valuta árfolyamának szélesebb a vétel-eladás közötti különbsége, a készpénzkezelés többletköltségei miatt).

## Az árfolyam fogalma

Az **árfolyam (devizaárfolyam)** két valuta (pénznem) egymáshoz viszonyított cserearányát fejezi ki: megmutatja, hogy egy adott pénznem egy egységéért mennyit kell fizetni egy másik pénznemben. Az árfolyamjegyzés lehet **közvetlen** (a hazai valuta a változó, a külföldi az állandó tényező, pl. "1 euró = 400 forint") vagy **közvetett** (fordítva).

## Az árfolyam kialakulása a devizapiacon

A **devizapiacon** — akárcsak bármely más piacon — az árfolyamot a **kereslet és a kínálat** határozza meg: ha egy adott pénznem iránti kereslet nő (pl. mert egy ország gazdasága vonzóbbá válik a külföldi befektetők számára), a pénznem **felértékelődik (erősödik)**; ha a kereslet csökken, vagy a kínálat nő, a pénznem **leértékelődik (gyengül)**.

## Az árfolyamrendszerek típusai

Az országok különféle **árfolyamrendszereket** alkalmazhatnak. A **lebegő (flexibilis) árfolyamrendszerben** az árfolyamot szabadon, a piaci kereslet és kínálat alakítja ki, jegybanki beavatkozás nélkül (vagy csak minimális beavatkozással). A **rögzített (fixált) árfolyamrendszerben** a jegybank egy meghatározott árfolyamhoz (paritáshoz) köti a nemzeti valutát, és szükség esetén devizapiaci beavatkozással (deviza vétele/eladása) tartja fenn ezt a szintet. Léteznek **köztes megoldások** is, mint a sávos lebegtetés, ahol az árfolyam egy meghatározott sávon belül szabadon mozoghat.

## Az árfolyam-változás hatásai

Egy nemzeti valuta **leértékelődése (gyengülése)** exportösztönző hatású (a hazai termékek relatíve olcsóbbá válnak külföldön), ugyanakkor drágítja az importot és importált inflációt okozhat. A valuta **felértékelődése (erősödése)** ezzel ellentétesen hat: olcsóbbá teszi az importot, de ronthatja az exportáló vállalatok versenyképességét.

## A konvertibilitás

Egy valuta **konvertibilis**, ha szabadon átváltható más valutákra, korlátozások nélkül. A teljes konvertibilitás a modern piacgazdaságok normális állapota, de egyes országok (jellemzően fejlődő vagy zárt gazdaságok) korlátozásokat alkalmazhatnak a tőkemozgásokra és a valutaváltásra.

## Jelentősége

Az árfolyamok és a devizapiac működésének ismerete alapvető a nyitott gazdaságok (mint Magyarországé) makrogazdasági folyamatainak megértéséhez: az árfolyam-változások közvetlenül befolyásolják a külkereskedelmet, az inflációt, a befektetési döntéseket, és ezért a jegybanki és kormányzati gazdaságpolitika egyik kiemelt figyelemmel kísért mutatói közé tartoznak.
`,
    key_concepts: [
      "valuta vs. deviza",
      "árfolyam: közvetlen és közvetett jegyzés",
      "lebegő és rögzített árfolyamrendszer",
      "leértékelődés és felértékelődés hatásai",
      "konvertibilitás",
    ],
    source_refs: [
      { label: "Hogyan működik a devizapiac? (Pénziránytű Alapítvány)", url: "https://penziranytu.hu/archivalt-pop-torzsanyag/konyv/az-en-penzem/ii-mindenhato-penz/6-ahany-orszag-annyi-bankjegy/2-hogyan-mukodik-devizapiac" },
      { label: "Árfolyamrendszer (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Árfolyamrendszer" },
      { label: "A nemzetközi pénzügyek alapfogalmai: valuta, deviza, konvertibilitás, árfolyamok (Érettségi 2024)", url: "https://erettsegi.org/a-nemzetkozi-penzugyek-alapfogalmai-valuta-deviza-konvertibilitas-arfolyamok-a-hazai-valuta-leertekelesenek-hatasai.html" },
      { label: "Árfolyamok (Pénzcentrum)", url: "https://www.penzcentrum.hu/arfolyam" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a valuta és a deviza között?",
        options: [
          "a valuta készpénz, a deviza bankszámlán nyilvántartott külföldi pénzkövetelés",
          "nincs közöttük különbség",
          "a deviza mindig hazai pénznem",
          "a valuta csak elektronikus formában létezik"
        ],
        correct_answer: "a valuta készpénz, a deviza bankszámlán nyilvántartott külföldi pénzkövetelés",
        explanation: "A valuta a külföldi fizetőeszköz készpénz formája, a deviza pedig bankszámlán nyilvántartott, külföldi fizetőeszközre szóló követelés.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi alakítja ki az árfolyamot lebegő árfolyamrendszerben?",
        options: [
          "a piaci kereslet és kínálat",
          "kizárólag a kormány rendelete",
          "az Európai Központi Bank döntése minden országra",
          "a világ átlagárfolyama"
        ],
        correct_answer: "a piaci kereslet és kínálat",
        explanation: "Lebegő árfolyamrendszerben az árfolyamot a devizapiaci kereslet és kínálat szabadon alakítja ki.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hatással jár egy nemzeti valuta leértékelődése (gyengülése) az exportra?",
        options: [
          "ösztönzi az exportot, mivel a hazai termékek relatíve olcsóbbá válnak külföldön",
          "visszaveti az exportot",
          "nincs hatással az exportra",
          "megszünteti a külkereskedelmet"
        ],
        correct_answer: "ösztönzi az exportot, mivel a hazai termékek relatíve olcsóbbá válnak külföldön",
        explanation: "A gyengébb valuta relatíve olcsóbbá teszi a hazai termékeket a külföldi vásárlók számára, ami ösztönzi az exportot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a rögzített (fixált) árfolyamrendszert?",
        options: [
          "a jegybank egy meghatározott paritáshoz köti a valutát, és beavatkozással tartja fenn azt",
          "az árfolyam korlátlanul szabadon mozog",
          "nincs szükség jegybanki beavatkozásra",
          "csak fejlődő országokban létezik"
        ],
        correct_answer: "a jegybank egy meghatározott paritáshoz köti a valutát, és beavatkozással tartja fenn azt",
        explanation: "A rögzített árfolyamrendszerben a jegybank aktívan beavatkozik (deviza vétele/eladása) az árfolyam adott szinten tartása érdekében.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent, ha egy valuta konvertibilis?",
        options: [
          "szabadon átváltható más valutákra, korlátozások nélkül",
          "csak az adott országban használható",
          "nem lehet devizapiacon kereskedni vele",
          "csak papírpénz formájában létezhet"
        ],
        correct_answer: "szabadon átváltható más valutákra, korlátozások nélkül",
        explanation: "A konvertibilitás azt jelenti, hogy a valuta korlátozás nélkül átváltható más pénznemekre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki az árfolyam (devizaárfolyam) fogalma?",
        options: [
          "két valuta egymáshoz viszonyított cserearányát",
          "egy ország teljes exportjának értékét",
          "a jegybanki alapkamat szintjét",
          "az államadósság mértékét"
        ],
        correct_answer: "két valuta egymáshoz viszonyított cserearányát",
        explanation: "Az árfolyam két valuta egymáshoz viszonyított cserearányát fejezi ki: megmutatja, hogy egy pénznem egy egységéért mennyit kell fizetni egy másik pénznemben.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a közvetlen árfolyamjegyzést?",
        options: [
          "a hazai valuta a változó, a külföldi valuta az állandó tényező (pl. „1 euró = 400 forint”)",
          "a külföldi valuta a változó tényező",
          "csak külföldön alkalmazzák",
          "kizárólag készpénzre vonatkozik"
        ],
        correct_answer: "a hazai valuta a változó, a külföldi valuta az állandó tényező (pl. „1 euró = 400 forint”)",
        explanation: "A közvetlen jegyzésnél a hazai valuta a változó, a külföldi valuta az állandó tényező, például „1 euró = 400 forint”.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor beszélünk egy pénznem felértékelődéséről (erősödéséről)?",
        options: [
          "amikor az adott pénznem iránti kereslet nő a devizapiacon",
          "amikor a kereslet csökken",
          "amikor a kínálat nő",
          "amikor a jegybank megszünteti a monetáris politikát"
        ],
        correct_answer: "amikor az adott pénznem iránti kereslet nő a devizapiacon",
        explanation: "Ha egy pénznem iránti kereslet nő a devizapiacon, a pénznem felértékelődik (erősödik).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a sávos lebegtetést mint köztes árfolyamrendszert?",
        options: [
          "az árfolyam egy meghatározott sávon belül szabadon mozoghat",
          "az árfolyamot teljesen szabadon, jegybanki beavatkozás nélkül alakítja ki a piac",
          "az árfolyamot egyetlen rögzített szinthez kötik korlátlan ideig",
          "az árfolyam kizárólag az állam döntésétől függ"
        ],
        correct_answer: "az árfolyam egy meghatározott sávon belül szabadon mozoghat",
        explanation: "A sávos lebegtetés köztes megoldás, amelynél az árfolyam egy meghatározott sávon belül szabadon mozoghat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hatással jár egy valuta felértékelődése (erősödése) az importra?",
        options: [
          "olcsóbbá teszi az importot",
          "drágítja az importot",
          "nincs hatással az importra",
          "megszünteti az importot"
        ],
        correct_answer: "olcsóbbá teszi az importot",
        explanation: "A valuta felértékelődése (erősödése) olcsóbbá teszi az importot, mivel kevesebb hazai valutáért lehet ugyanannyi külföldi valutát vásárolni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hatással jár egy valuta felértékelődése az exportáló vállalatokra?",
        options: [
          "ronthatja a versenyképességüket, mivel termékeik relatíve drágábbá válnak külföldön",
          "javítja a versenyképességüket",
          "nincs rájuk hatással",
          "megszünteti az exporttevékenységet"
        ],
        correct_answer: "ronthatja a versenyképességüket, mivel termékeik relatíve drágábbá válnak külföldön",
        explanation: "A valuta felértékelődése ronthatja az exportáló vállalatok versenyképességét, mivel termékeik relatíve drágábbá válnak a külföldi vásárlók számára.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért okozhat importált inflációt egy nemzeti valuta leértékelődése?",
        options: [
          "mert a leértékelődés drágítja az importot, ami megemeli a hazai árszínvonalat",
          "mert a leértékelődés mindig csökkenti az árakat",
          "mert a leértékelődés megszünteti a külkereskedelmet",
          "mert a leértékelődés nem befolyásolja az árakat"
        ],
        correct_answer: "mert a leértékelődés drágítja az importot, ami megemeli a hazai árszínvonalat",
        explanation: "A valuta leértékelődése drágítja az importot, ami importált inflációt okozhat, mivel a drágább importált termékek és nyersanyagok megemelik a hazai árszínvonalat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely országok alkalmazhatnak korlátozásokat a valuta konvertibilitására?",
        options: [
          "egyes fejlődő vagy zárt gazdaságok",
          "kizárólag az eurózóna tagjai",
          "minden modern piacgazdaság",
          "csak az Európai Unió tagállamai"
        ],
        correct_answer: "egyes fejlődő vagy zárt gazdaságok",
        explanation: "A teljes konvertibilitás a modern piacgazdaságok normális állapota, de egyes fejlődő vagy zárt gazdaságok korlátozásokat alkalmazhatnak a tőkemozgásokra és a valutaváltásra.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a közvetett árfolyamjegyzést a közvetlennel szemben?",
        options: [
          "a külföldi valuta a változó, a hazai valuta az állandó tényező",
          "a hazai valuta a változó tényező",
          "kizárólag a valutára vonatkozik, a devizára nem",
          "csak fix árfolyamrendszerben alkalmazható"
        ],
        correct_answer: "a külföldi valuta a változó, a hazai valuta az állandó tényező",
        explanation: "A közvetett jegyzésnél — a közvetlen jegyzéssel ellentétben — a külföldi valuta a változó, a hazai valuta az állandó tényező.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kiemelten fontos a devizapiac működése egy nyitott gazdaság, mint Magyarország számára?",
        options: [
          "mert az árfolyam-változások közvetlenül befolyásolják a külkereskedelmet, az inflációt és a befektetési döntéseket",
          "mert csak a turizmust érinti",
          "mert nincs hatással a hazai gazdaságra",
          "mert kizárólag az állami költségvetést érinti"
        ],
        correct_answer: "mert az árfolyam-változások közvetlenül befolyásolják a külkereskedelmet, az inflációt és a befektetési döntéseket",
        explanation: "A devizapiac és az árfolyam-változások közvetlenül befolyásolják a külkereskedelmet, az inflációt és a befektetési döntéseket egy nyitott gazdaságban.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-munkajog-alapjai",
    title: "A munkajog alapjai (munkaszerződés, munkavállalói jogok)",
    level: "mindketto",
    theme: "Mikroökonómia",
    order_index: 15,
    summary_markdown:
      "A munkajog a munkáltató és a munkavállaló közötti jogviszonyt szabályozza: a munkaszerződés írásba foglalt, kötelező tartalmi elemekkel rendelkező megállapodás, amely rögzíti mindkét fél jogait és kötelezettségeit.",
    content_markdown: `
## A munkajog tárgya

A **munkajog** a munkáltatók és a munkavállalók közötti, munkavégzésre irányuló jogviszonyokat szabályozó jogág. Magyarországon a munkajogi szabályozás alapja a **Munka törvénykönyvéről szóló 2012. évi I. törvény (Mt.)**, amely meghatározza a munkaviszony létesítésének, tartalmának és megszűnésének szabályait.

## A munkaviszony és a felek

A **munkaviszony** a munkáltató és a munkavállaló között munkaszerződéssel létrejövő jogviszony, amelyben a munkavállaló köteles a munkáltató irányítása szerint munkát végezni, a munkáltató pedig köteles a munkavállalót foglalkoztatni és munkabért fizetni. A **munkáltató** jogképes személy (természetes vagy jogi személy), aki munkavállalót foglalkoztat; a **munkavállaló** az a természetes személy, aki munkaszerződés alapján munkát végez.

## A munkaszerződés kötelező tartalmi elemei

A **munkaszerződést kötelezően írásba kell foglalni**. A munkaszerződésnek — a felek megállapodása alapján — tartalmaznia kell legalább a **munkavállaló munkakörét** (milyen feladatokat lát el) és az **alapbérét (munkabérét)**. Emellett jellemzően rögzítik a **munkavégzés helyét**, a **munkaviszony kezdetét**, valamint azt, hogy határozott vagy határozatlan idejű-e a szerződés.

## A munkaidő és a pihenőidő szabályozása

A munkajog szigorúan szabályozza a **munkaidőt** (a teljes napi munkaidő általános mértéke 8 óra) és a **pihenőidőt** (napi és heti pihenőidő, valamint az éves rendes szabadság mértéke), amelyek célja a munkavállalók egészségének és a munka-magánélet egyensúlyának védelme. A **túlmunka (rendkívüli munkavégzés)** csak korlátozott mértékben és külön díjazás (pótlék) ellenében rendelhető el.

## A munkabér és a minimálbér

A **munkabér** a munkavállaló által végzett munkáért járó ellenszolgáltatás, amelynek nem lehet alacsonyabbnak lennie a törvényben meghatározott **kötelező legkisebb munkabérnél (minimálbér)**, illetve a szakképzettséget igénylő munkakörökre vonatkozó **garantált bérminimumnál**. A munkabér-fizetési kötelezettség a munkáltató egyik legalapvetőbb kötelezettsége.

## A munkaviszony megszűnése

A munkaviszony többféleképpen szűnhet meg: **közös megegyezéssel**, **felmondással** (akár a munkáltató, akár a munkavállaló részéről, felmondási idő betartásával), **azonnali hatályú felmondással** (súlyos kötelezettségszegés esetén), vagy a **határozott idejű szerződés lejártával**. A munkáltatói felmondás esetén — bizonyos feltételek mellett — a munkavállalót **végkielégítés** illetheti meg.

## A munkavállalói érdekképviselet

A munkavállalók kollektív érdekérvényesítésének eszközei közé tartoznak a **szakszervezetek** és az **üzemi tanácsok**, amelyek a munkavállalók nevében tárgyalhatnak a munkáltatóval a munkafeltételekről, illetve **kollektív szerződéseket** köthetnek, amelyek az egyéni munkaszerződéseknél kedvezőbb feltételeket állapíthatnak meg.

## Jelentősége

A munkajog alapfogalmainak (munkaszerződés, munkaidő, munkabér, felmondás) ismerete gyakorlati szempontból is kiemelten fontos: minden munkavállalónak és leendő munkavállalónak ismernie kell alapvető jogait és kötelezettségeit ahhoz, hogy tudatosan és önérdek-érvényesítő módon léphessen be a munkaerőpiacra.
`,
    key_concepts: [
      "munkaszerződés kötelező tartalmi elemei",
      "munkáltató és munkavállaló fogalma",
      "munkaidő, pihenőidő, szabadság",
      "minimálbér és garantált bérminimum",
      "a munkaviszony megszűnésének módjai (felmondás)",
    ],
    source_refs: [
      { label: "Munkaszerződés (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Munkaszerződés" },
      { label: "A munka törvénykönyve (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Munka_Törvénykönyve" },
      { label: "Munkaügyi Kisokos (ELTE Karrierközpont)", url: "https://karrierkozpont.elte.hu/munkaugyi-kisokos-amit-erdemes-tudnod-a-munkajogi-szabalyokrol" },
      { label: "Munkaviszony (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Munkaviszony" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen formában kell megkötni a munkaszerződést?",
        options: ["kötelezően írásban", "szóban is elegendő", "csak elektronikusan", "nem kötelező megkötni"],
        correct_answer: "kötelezően írásban",
        explanation: "A munkaszerződést a törvény szerint kötelezően írásba kell foglalni.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely két elemet KELL kötelezően tartalmaznia a munkaszerződésnek?",
        options: ["a munkakört és az alapbért", "a munkáltató logóját és székhelyét", "a munkavállaló lakcímét és családi állapotát", "a korábbi munkahelyeket"],
        correct_answer: "a munkakört és az alapbért",
        explanation: "A munkaszerződésnek a felek megállapodása alapján legalább a munkakört és az alapbért kötelezően tartalmaznia kell.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a minimálbér szerepe?",
        options: [
          "meghatározza a törvényben rögzített legalacsonyabb kifizethető munkabért",
          "a legmagasabb kifizethető bér korlátja",
          "csak a közszférában érvényes",
          "nincs jogi kötőereje"
        ],
        correct_answer: "meghatározza a törvényben rögzített legalacsonyabb kifizethető munkabért",
        explanation: "A minimálbér az a törvényben meghatározott legkisebb összeg, amelynél alacsonyabb munkabért nem lehet fizetni.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen módokon szűnhet meg a munkaviszony?",
        options: [
          "közös megegyezéssel, felmondással, azonnali hatályú felmondással, vagy a határozott idő lejártával",
          "kizárólag a munkavállaló halálával",
          "csak bírósági ítélettel",
          "csak a munkáltató csődje esetén"
        ],
        correct_answer: "közös megegyezéssel, felmondással, azonnali hatályú felmondással, vagy a határozott idő lejártával",
        explanation: "A munkaviszony megszűnésének több törvényes módja van, ezek közül a leggyakoribbak a felsoroltak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a szakszervezetek és üzemi tanácsok szerepe?",
        options: [
          "a munkavállalók kollektív érdekképviselete és tárgyalás a munkáltatóval a munkafeltételekről",
          "a munkáltatók jogi képviselete",
          "kizárólag a bérek kifizetése",
          "az állami adóbeszedés"
        ],
        correct_answer: "a munkavállalók kollektív érdekképviselete és tárgyalás a munkáltatóval a munkafeltételekről",
        explanation: "A szakszervezetek és üzemi tanácsok a munkavállalók kollektív érdekeit képviselik a munkáltatóval szemben, akár kollektív szerződés megkötésével is.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik törvény alapozza meg Magyarországon a munkajogi szabályozást?",
        options: [
          "a Munka törvénykönyvéről szóló 2012. évi I. törvény",
          "a Polgári Törvénykönyv",
          "az Alaptörvény egyetlen cikkelye",
          "a fogyasztóvédelemről szóló törvény"
        ],
        correct_answer: "a Munka törvénykönyvéről szóló 2012. évi I. törvény",
        explanation: "A magyar munkajogi szabályozás alapja a Munka törvénykönyvéről szóló 2012. évi I. törvény (Mt.).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi a teljes napi munkaidő általános mértéke?",
        options: ["8 óra", "4 óra", "12 óra", "6 óra"],
        correct_answer: "8 óra",
        explanation: "A teljes napi munkaidő általános mértéke 8 óra, amit a munkajog szigorúan szabályoz.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a garantált bérminimum?",
        options: [
          "a szakképzettséget igénylő munkakörökre vonatkozó, a minimálbérnél magasabb bérküszöb",
          "a legmagasabb kifizethető bér korlátja",
          "a nyugdíjak minimális összege",
          "az állami tisztviselők fizetése"
        ],
        correct_answer: "a szakképzettséget igénylő munkakörökre vonatkozó, a minimálbérnél magasabb bérküszöb",
        explanation: "A garantált bérminimum a szakképzettséget igénylő munkakörökre vonatkozó, a minimálbérnél jellemzően magasabb bérküszöb.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a munkáltató alapvető kötelezettsége a munkaviszonyban?",
        options: [
          "a munkavállaló foglalkoztatása és munkabér fizetése",
          "kizárólag a munkaidő nyilvántartása",
          "a munkavállaló lakhatásának biztosítása",
          "a szabadság törvényi mértékének csökkentése"
        ],
        correct_answer: "a munkavállaló foglalkoztatása és munkabér fizetése",
        explanation: "A munkáltató köteles a munkavállalót foglalkoztatni és munkabért fizetni, míg a munkavállaló a munkáltató irányítása szerint köteles munkát végezni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor alkalmazható azonnali hatályú felmondás a munkaviszonyban?",
        options: [
          "súlyos kötelezettségszegés esetén",
          "kizárólag a próbaidő alatt",
          "csak a munkáltató kezdeményezésére",
          "minden munkaviszony megszüntetésekor automatikusan"
        ],
        correct_answer: "súlyos kötelezettségszegés esetén",
        explanation: "Az azonnali hatályú felmondás súlyos kötelezettségszegés esetén alkalmazható, felmondási idő betartása nélkül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi illethet meg egy munkavállalót munkáltatói felmondás esetén, bizonyos feltételek mellett?",
        options: ["végkielégítés", "automatikus fizetésemelés", "kötelező előléptetés", "élethosszig tartó fizetés"],
        correct_answer: "végkielégítés",
        explanation: "Munkáltatói felmondás esetén — bizonyos feltételek mellett — a munkavállalót végkielégítés illetheti meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a túlmunka (rendkívüli munkavégzés), és milyen díjazás jár érte?",
        options: [
          "a rendes munkaidőn felüli munkavégzés, amely külön díjazással (pótlékkal) jár",
          "a szabadság alatt végzett munka, amely nem jár díjazással",
          "a próbaidő alatti munka",
          "a részmunkaidős foglalkoztatás"
        ],
        correct_answer: "a rendes munkaidőn felüli munkavégzés, amely külön díjazással (pótlékkal) jár",
        explanation: "A túlmunka (rendkívüli munkavégzés) a rendes munkaidőn felüli munkavégzés, amely csak korlátozott mértékben és külön díjazás (pótlék) ellenében rendelhető el.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit rögzítenek jellemzően a munkaszerződésben a munkakör és az alapbér mellett?",
        options: [
          "a munkavégzés helyét, a munkaviszony kezdetét és a szerződés határozott vagy határozatlan idejét",
          "kizárólag a munkavállaló családi állapotát",
          "a korábbi munkahelyek listáját",
          "a munkáltató logóját"
        ],
        correct_answer: "a munkavégzés helyét, a munkaviszony kezdetét és a szerződés határozott vagy határozatlan idejét",
        explanation: "A munkaszerződésben jellemzően rögzítik a munkavégzés helyét, a munkaviszony kezdetét, valamint hogy határozott vagy határozatlan idejű-e a szerződés.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a kollektív szerződés szerepe?",
        options: [
          "az egyéni munkaszerződéseknél kedvezőbb feltételeket állapíthat meg a munkavállalók számára",
          "kizárólag a munkáltató jogait bővíti",
          "megszünteti a munkaidő-szabályozást",
          "helyettesíti az egyéni munkaszerződést minden esetben"
        ],
        correct_answer: "az egyéni munkaszerződéseknél kedvezőbb feltételeket állapíthat meg a munkavállalók számára",
        explanation: "A szakszervezetek és üzemi tanácsok által kötött kollektív szerződések az egyéni munkaszerződéseknél kedvezőbb feltételeket állapíthatnak meg.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a munkaviszony fogalma?",
        options: [
          "a munkáltató és a munkavállaló között munkaszerződéssel létrejövő jogviszony, amelyben a munkavállaló a munkáltató irányítása szerint dolgozik",
          "egy önálló vállalkozói tevékenység",
          "az állam és az egyén közötti adójogviszony",
          "a fogyasztó és az eladó közötti szerződés"
        ],
        correct_answer: "a munkáltató és a munkavállaló között munkaszerződéssel létrejövő jogviszony, amelyben a munkavállaló a munkáltató irányítása szerint dolgozik",
        explanation: "A munkaviszony a munkáltató és a munkavállaló között munkaszerződéssel létrejövő jogviszony, amelyben a munkavállaló köteles a munkáltató irányítása szerint munkát végezni.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "adozas-kozvetlen-es-kozvetett-adok",
    title: "Adózás: közvetlen és közvetett adók",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 16,
    summary_markdown:
      "Az adók az állami bevételek legfontosabb forrásai: közvetlen adó esetén az adófizető és az adóterhet viselő személy azonos (pl. SZJA), közvetett adó esetén az adóteher áthárul a végső fogyasztóra (pl. ÁFA).",
    content_markdown: `
## Az adózás alapfogalmai

Az **adó** olyan, törvény által előírt, kényszer jellegű, ellenszolgáltatás nélküli fizetési kötelezettség, amelyet az állam vet ki a természetes és jogi személyekre az állami feladatok finanszírozása érdekében. Az **adóalany (adófizető)** az a személy vagy szervezet, amelyet a törvény az adó megfizetésére kötelez. Az **adótárgy** az a dolog, jog vagy tevékenység, amelyre az adókötelezettség vonatkozik. Az **adóalap** az adótárgy pénzben vagy természetes mértékegységben kifejezett mennyisége, amely után az adót fizetni kell. Az **adókulcs (adómérték)** az adóalap egységére jutó adó összege, jellemzően százalékban kifejezve.

## A közvetlen adók

**Közvetlen adó** esetén az **adófizető és az adóterhet ténylegesen viselő személy azonos**: az adóalany a saját jövedelméből vagy vagyonából fizeti az adót, és nem tudja azt áthárítani másra. Tipikus közvetlen adó a **személyi jövedelemadó (SZJA)**, amelyet a magánszemélyek jövedelme után kell fizetni, valamint a **társasági adó**, amelyet a vállalkozások nyeresége után vetnek ki.

## A közvetett adók

**Közvetett adó** esetén az **adófizető és az adóterhet viselő személy nem azonos**: az adót formálisan a vállalkozás fizeti be az államnak, de a gyakorlatban áthárítja azt a termék vagy szolgáltatás árába, így ténylegesen a **végső fogyasztó** viseli az adóterhet. A legfontosabb közvetett adó az **általános forgalmi adó (ÁFA)**, amelyet a legtöbb termék és szolgáltatás értékesítésekor kell felszámítani. További közvetett adók a **jövedéki adó** (pl. alkohol, dohánytermékek, üzemanyagok esetén) és a **vámok**.

## A progresszív, lineáris és regresszív adózás

Az adókulcs és az adóalap közötti viszony szerint megkülönböztetünk **progresszív adózást** (az adókulcs a jövedelem növekedésével emelkedik, tehát a magasabb jövedelműek arányosan is többet fizetnek), **lineáris (egykulcsos) adózást** (mindenki azonos százalékos adókulccsal adózik, függetlenül a jövedelem nagyságától — Magyarországon az SZJA ilyen), és **regresszív adózást** (az adóteher aránya a jövedelem növekedésével csökken — ez jellemző a közvetett adókra, mivel az alacsonyabb jövedelműek jövedelmükhöz képest nagyobb arányban fogyasztanak, így relatíve nagyobb terhet visel az ÁFA formájában).

## Az adóbevételek szerepe és funkciói

Az adóztatásnak három fő funkciója van: a **fiskális funkció** (az állami feladatok — oktatás, egészségügy, honvédelem — finanszírozásához szükséges bevétel biztosítása), az **újraelosztási funkció** (a jövedelmi egyenlőtlenségek mérséklése, jellemzően a progresszív adózás és a szociális transzferek révén), valamint a **szabályozó (ösztönző) funkció** (bizonyos magatartások — pl. dohányzás visszaszorítása magas jövedéki adóval, vagy zöld beruházások ösztönzése adókedvezménnyel — befolyásolása az adórendszeren keresztül).

## Az adóhatóság szerepe

Magyarországon az adók beszedéséért, ellenőrzéséért és az adózással kapcsolatos ügyintézésért elsősorban a **Nemzeti Adó- és Vámhivatal (NAV)** felelős, amely az adóbevallások feldolgozásától az adóellenőrzéseken át a végrehajtási eljárásokig számos feladatot lát el.

## Jelentősége

A közvetlen és közvetett adók, valamint az adózás alapfogalmainak ismerete alapvető gazdasági és állampolgári tudás: az adórendszer szerkezete meghatározza, hogyan oszlik meg a közterhek viselése a társadalom tagjai között, és ez az egyik legfontosabb eszköze az állami újraelosztásnak és a gazdaságpolitikai szabályozásnak.
`,
    key_concepts: [
      "adóalany, adótárgy, adóalap, adókulcs",
      "közvetlen adók (SZJA, társasági adó)",
      "közvetett adók (ÁFA, jövedéki adó)",
      "progresszív, lineáris és regresszív adózás",
      "az adóztatás funkciói (fiskális, újraelosztási, szabályozó)",
    ],
    source_refs: [
      { label: "Adók (Érettségitételek.com)", url: "https://erettsegitetelek.com/2020/12/adok/" },
      { label: "Adó (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Adó" },
      { label: "Általános forgalmi adó (Nemzeti Adó- és Vámhivatal)", url: "https://nav.gov.hu/ado/afa" },
      { label: "NAV – Nemzeti Adó- és Vámhivatal", url: "https://www.nav.gov.hu/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a közvetlen adót?",
        options: [
          "az adófizető és az adóterhet viselő személy azonos",
          "az adóteher mindig a fogyasztóra hárul át",
          "csak vállalkozásokra vonatkozik",
          "nincs törvényi szabályozása"
        ],
        correct_answer: "az adófizető és az adóterhet viselő személy azonos",
        explanation: "Közvetlen adó esetén az adóalany saját jövedelméből fizeti az adót, azt nem tudja másra áthárítani.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik a legfontosabb közvetett adó Magyarországon?",
        options: ["általános forgalmi adó (ÁFA)", "személyi jövedelemadó (SZJA)", "társasági adó", "gépjárműadó"],
        correct_answer: "általános forgalmi adó (ÁFA)",
        explanation: "Az ÁFA a legfontosabb közvetett adó: a vállalkozás fizeti be, de az árba beépítve a végső fogyasztó viseli.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a progresszív adózás?",
        options: [
          "az adókulcs a jövedelem növekedésével emelkedik",
          "mindenki azonos összegű adót fizet",
          "az adókulcs a jövedelem növekedésével csökken",
          "csak vállalkozásokra vonatkozik"
        ],
        correct_answer: "az adókulcs a jövedelem növekedésével emelkedik",
        explanation: "A progresszív adózásnál a magasabb jövedelem magasabb adókulccsal adózik, így a jövedelemarányos teher is nő.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért tekinthető regresszív jellegűnek a közvetett adózás (pl. ÁFA)?",
        options: [
          "az alacsonyabb jövedelműek jövedelmükhöz képest nagyobb arányban fogyasztanak, így relatíve nagyobb terhet viselnek",
          "mert csak a gazdagok fizetik",
          "mert az állam visszatéríti a szegényeknek",
          "mert nincs is ÁFA Magyarországon"
        ],
        correct_answer: "az alacsonyabb jövedelműek jövedelmükhöz képest nagyobb arányban fogyasztanak, így relatíve nagyobb terhet viselnek",
        explanation: "Mivel az alacsonyabb jövedelműek jövedelmük nagyobb hányadát költik fogyasztásra, a fogyasztást terhelő ÁFA arányosan nagyobb terhet ró rájuk.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik magyar hatóság felelős az adók beszedéséért és ellenőrzéséért?",
        options: ["Nemzeti Adó- és Vámhivatal (NAV)", "Magyar Nemzeti Bank (MNB)", "Gazdasági Versenyhivatal", "Központi Statisztikai Hivatal (KSH)"],
        correct_answer: "Nemzeti Adó- és Vámhivatal (NAV)",
        explanation: "A NAV felelős Magyarországon az adók beszedéséért, az adóbevallások feldolgozásáért és az adóellenőrzésekért.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az adó fogalma?",
        options: [
          "törvény által előírt, kényszer jellegű, ellenszolgáltatás nélküli fizetési kötelezettség",
          "önkéntes adományozás az államnak",
          "a vállalatok közötti szerződéses díj",
          "a bankok által felszámított kezelési költség"
        ],
        correct_answer: "törvény által előírt, kényszer jellegű, ellenszolgáltatás nélküli fizetési kötelezettség",
        explanation: "Az adó olyan, törvény által előírt, kényszer jellegű, ellenszolgáltatás nélküli fizetési kötelezettség, amelyet az állam vet ki az állami feladatok finanszírozására.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az adóalany (adófizető)?",
        options: [
          "az a személy vagy szervezet, amelyet a törvény az adó megfizetésére kötelez",
          "az a dolog, amelyre az adókötelezettség vonatkozik",
          "az adó mértéke százalékban",
          "az állami adóhatóság neve"
        ],
        correct_answer: "az a személy vagy szervezet, amelyet a törvény az adó megfizetésére kötelez",
        explanation: "Az adóalany (adófizető) az a személy vagy szervezet, amelyet a törvény az adó megfizetésére kötelez.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az adóalap?",
        options: [
          "az adótárgy pénzben vagy természetes mértékegységben kifejezett mennyisége, amely után az adót fizetni kell",
          "az adó beszedéséért felelős hatóság",
          "az adófizetés határideje",
          "az adó törvényi elnevezése"
        ],
        correct_answer: "az adótárgy pénzben vagy természetes mértékegységben kifejezett mennyisége, amely után az adót fizetni kell",
        explanation: "Az adóalap az adótárgy pénzben vagy természetes mértékegységben kifejezett mennyisége, amely után az adót fizetni kell.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az adókulcs (adómérték)?",
        options: [
          "az adóalap egységére jutó adó összege, jellemzően százalékban kifejezve",
          "az adóalany neve",
          "az adóbevétel teljes összege",
          "az adóhatóság székhelye"
        ],
        correct_answer: "az adóalap egységére jutó adó összege, jellemzően százalékban kifejezve",
        explanation: "Az adókulcs (adómérték) az adóalap egységére jutó adó összege, amelyet jellemzően százalékban fejeznek ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik közvetlen adót vetik ki a vállalkozások nyeresége után?",
        options: ["a társasági adót", "az általános forgalmi adót", "a jövedéki adót", "a vámot"],
        correct_answer: "a társasági adót",
        explanation: "A társasági adó közvetlen adó, amelyet a vállalkozások nyeresége után vetnek ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik termékek adóztatására jellemző a jövedéki adó?",
        options: [
          "alkohol, dohánytermékek, üzemanyagok",
          "élelmiszerek általánosan",
          "szolgáltatások általánosan",
          "ingatlanok"
        ],
        correct_answer: "alkohol, dohánytermékek, üzemanyagok",
        explanation: "A jövedéki adó egy közvetett adó, amelyet jellemzően az alkohol, a dohánytermékek és az üzemanyagok esetében vetnek ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a lineáris (egykulcsos) adózás, és melyik magyar adó ilyen?",
        options: [
          "mindenki azonos százalékos adókulccsal adózik, függetlenül a jövedelem nagyságától — Magyarországon az SZJA ilyen",
          "az adókulcs a jövedelemmel arányosan emelkedik",
          "az adókulcs a jövedelemmel arányosan csökken",
          "csak a vállalatokra vonatkozik"
        ],
        correct_answer: "mindenki azonos százalékos adókulccsal adózik, függetlenül a jövedelem nagyságától — Magyarországon az SZJA ilyen",
        explanation: "A lineáris (egykulcsos) adózásnál mindenki azonos százalékos adókulccsal adózik — Magyarországon a személyi jövedelemadó (SZJA) ilyen.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a vámok szerepe a közvetett adók között?",
        options: [
          "a külföldről importált termékekre kivetett adóteher",
          "a hazai bérek adóztatása",
          "a vállalati nyereség adóztatása",
          "az ingatlanok adóztatása"
        ],
        correct_answer: "a külföldről importált termékekre kivetett adóteher",
        explanation: "A vámok a külföldről importált termékekre kivetett közvetett adóteher, amely a jövedéki adóhoz hasonlóan a fogyasztókra hárul át.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az adóztatás fiskális funkciója?",
        options: [
          "az állami feladatok (pl. oktatás, egészségügy) finanszírozásához szükséges bevétel biztosítását",
          "a jövedelmi egyenlőtlenségek mérséklését",
          "bizonyos magatartások szabályozását",
          "a piaci verseny megszüntetését"
        ],
        correct_answer: "az állami feladatok (pl. oktatás, egészségügy) finanszírozásához szükséges bevétel biztosítását",
        explanation: "A fiskális funkció az állami feladatok — oktatás, egészségügy, honvédelem — finanszírozásához szükséges bevétel biztosítását jelenti.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik példa illusztrálja legjobban az adóztatás szabályozó (ösztönző) funkcióját?",
        options: [
          "a magas jövedéki adó a dohányzás visszaszorítására",
          "az SZJA egykulcsos rendszere",
          "az ÁFA beszedése minden termékre",
          "a NAV ellenőrzési tevékenysége"
        ],
        correct_answer: "a magas jövedéki adó a dohányzás visszaszorítására",
        explanation: "A szabályozó (ösztönző) funkció példája a magas jövedéki adó a dohányzás visszaszorítására, vagy az adókedvezmény az innováció ösztönzésére.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-tozsde-es-az-ertekpapirpiac",
    title: "A tőzsde és az értékpapírpiac",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 17,
    summary_markdown:
      "A tőzsde szervezett piac, ahol értékpapírokat (részvényeket, kötvényeket) adnak-vesznek; a tőkepiac a vállalatok és a befektetők közötti forrásáramlás egyik legfontosabb csatornája, amely egyben a gazdaság állapotának egyik legfigyeltebb barométere is.",
    content_markdown: `
## Az értékpapír fogalma

Az **értékpapír** olyan forgatható (adásvétel tárgyát képező) okirat, amely valamilyen vagyoni értékű jogot (pl. tulajdonjogot, hitelezői követelést) testesít meg. Az értékpapírok gazdasági szerepe, hogy lehetővé teszik a pénz időbeli és szereplők közötti áramoltatását: a tőkét kínáló befektetők és a tőkét kereső vállalatok, illetve az állam között teremtenek kapcsolatot.

## Az értékpapírok fő típusai: részvény és kötvény

A **részvény** tulajdonosi jogot megtestesítő értékpapír: a részvényes a vállalat (részvénytársaság) résztulajdonosává válik, jogosult az osztalékra (a nyereség egy részére) és a közgyűlésen szavazati jogot gyakorolhat, ugyanakkor a vállalat esetleges veszteségét is viseli (a befektetett tőke elveszhet). A **kötvény** hitelviszonyt megtestesítő értékpapír: a kötvény vásárlója hitelezővé válik, a kibocsátó (vállalat vagy állam) meghatározott időpontban vállalja a tőke visszafizetését és rendszeres kamatfizetést — a kötvénytulajdonos nem válik tulajdonossá, de a kötvény jellemzően kisebb kockázattal jár, mint a részvény.

## A tőzsde fogalma és szerepe

A **tőzsde** szervezett, szabályozott piac, ahol értékpapírokat (és egyéb pénzügyi eszközöket) adnak-vesznek, meghatározott szabályok és felügyelet mellett. A tőzsdei kereskedés ma jellemzően elektronikus formában zajlik, ahol a vételi és eladási megbízások (ajánlatok) találkozása alakítja ki az árfolyamot. Magyarországon a legfontosabb tőzsde a **Budapesti Értéktőzsde (BÉT)**.

## Az elsődleges és a másodlagos piac

Az **elsődleges piacon** a vállalatok (vagy az állam) először bocsátanak ki új értékpapírokat, és az ebből befolyó tőkét közvetlenül a kibocsátó kapja meg (pl. egy tőzsdei bevezetés, IPO alkalmával). A **másodlagos piacon** (jellemzően magán a tőzsdén) a már kibocsátott értékpapírokkal kereskednek a befektetők egymás között — ez biztosítja az értékpapírok **likviditását** (könnyű eladhatóságát), ami alapvetően növeli vonzerejüket.

## A tőzsdei árfolyam alakulása

A tőzsdei árfolyamokat alapvetően a kereslet és a kínálat, valamint a befektetői várakozások alakítják: a vállalat teljesítményére, jövőbeli kilátásaira, a makrogazdasági környezetre (kamatok, infláció), valamint a piaci hangulatra vonatkozó információk mind befolyásolják az árfolyamokat. A tőzsdeindexek (pl. a BÉT BUX indexe) a piac egészének átlagos teljesítményét összegzik.

## A befektetés kockázata és a diverzifikáció

A tőzsdei befektetés — a magasabb várható hozam mellett — kockázattal is jár: az árfolyamok ingadozhatnak, és a befektetés akár veszteséget is okozhat. A kockázat mérséklésének egyik alapvető eszköze a **diverzifikáció**: a befektetés több különböző értékpapír (vagy eszközosztály) között történő szétosztása, amivel csökkenthető az egyetlen kibocsátóhoz köthető kockázat.

## Jelentősége

A tőzsde és az értékpapírpiac ismerete alapvető a modern piacgazdaság működésének megértéséhez: ezek a piacok teszik lehetővé, hogy a vállalatok forrást gyűjtsenek fejlesztéseikhez, a befektetők pedig megtakarításaikat gyümölcsöztessék — miközben a tőzsdei mutatók a gazdaság állapotának egyik legfontosabb, folyamatosan figyelt jelzőszámai.
`,
    key_concepts: [
      "értékpapír: részvény (tulajdonosi) vs. kötvény (hitelviszony)",
      "tőzsde mint szervezett piac (BÉT)",
      "elsődleges és másodlagos piac",
      "likviditás",
      "diverzifikáció mint kockázatcsökkentő eszköz",
    ],
    source_refs: [
      { label: "A tőkepiac – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-tokepiac/" },
      { label: "Tőzsde (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Tőzsde" },
      { label: "Az értékpapírok fogalma, csoportosításuk szempontjai (Érettségi 2024)", url: "https://erettsegi.org/az-ertekpapirok-fogalma-csoportositasuk-szempontjai-az-ertekpapirokba-torteno-befektetesek-szempontjai.html" },
      { label: "Budapesti Értéktőzsde (BÉT)", url: "https://www.bet.hu/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a részvény és a kötvény között?",
        options: [
          "a részvény tulajdonosi, a kötvény hitelviszonyt testesít meg",
          "mindkettő ugyanazt a jogot testesíti meg",
          "a kötvény tulajdonosi jogot ad",
          "a részvénytulajdonos mindig hitelező"
        ],
        correct_answer: "a részvény tulajdonosi, a kötvény hitelviszonyt testesít meg",
        explanation: "A részvényes résztulajdonossá válik a vállalatban, míg a kötvénytulajdonos hitelezővé válik, aki kamatot és tőketörlesztést kap.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik a legfontosabb magyarországi tőzsde?",
        options: ["Budapesti Értéktőzsde (BÉT)", "Magyar Nemzeti Bank", "Nemzeti Adó- és Vámhivatal", "Gazdasági Versenyhivatal"],
        correct_answer: "Budapesti Értéktőzsde (BÉT)",
        explanation: "A Budapesti Értéktőzsde (BÉT) Magyarország legfontosabb szervezett értékpapírpiaca.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik az elsődleges piacon?",
        options: [
          "a vállalatok új értékpapírokat bocsátanak ki, és a tőke közvetlenül hozzájuk kerül",
          "a befektetők egymás között kereskednek meglévő értékpapírokkal",
          "csak állampapírokkal lehet kereskedni",
          "kizárólag deviza kereskedés zajlik"
        ],
        correct_answer: "a vállalatok új értékpapírokat bocsátanak ki, és a tőke közvetlenül hozzájuk kerül",
        explanation: "Az elsődleges piacon történik az új értékpapírok kibocsátása, ahol a befolyó tőke közvetlenül a kibocsátóhoz kerül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a diverzifikáció a befektetések esetében?",
        options: [
          "a befektetés több különböző értékpapír között történő szétosztása a kockázat csökkentésére",
          "az összes pénz egyetlen részvénybe fektetése",
          "a befektetés teljes visszavonása",
          "a kötvények eladásának tilalma"
        ],
        correct_answer: "a befektetés több különböző értékpapír között történő szétosztása a kockázat csökkentésére",
        explanation: "A diverzifikáció a kockázat megosztásának eszköze: a befektetést több eszköz között szétosztva csökkenthető egyetlen kibocsátó kockázatának hatása.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az értékpapír likviditása?",
        options: [
          "milyen könnyen és gyorsan eladható a másodlagos piacon",
          "az értékpapír kamatlábát",
          "a kibocsátó vállalat méretét",
          "az osztalék összegét"
        ],
        correct_answer: "milyen könnyen és gyorsan eladható a másodlagos piacon",
        explanation: "A likviditás azt fejezi ki, hogy egy értékpapír mennyire könnyen váltható vissza készpénzre a másodlagos piacon.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az értékpapír fogalma?",
        options: [
          "olyan forgatható okirat, amely valamilyen vagyoni értékű jogot testesít meg",
          "kizárólag készpénzt jelentő okirat",
          "az állam által kibocsátott adóigazolás",
          "egy bank belső nyilvántartási dokumentuma"
        ],
        correct_answer: "olyan forgatható okirat, amely valamilyen vagyoni értékű jogot testesít meg",
        explanation: "Az értékpapír olyan forgatható okirat, amely valamilyen vagyoni értékű jogot (pl. tulajdonjogot vagy hitelezői követelést) testesít meg.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen jogok illetik meg a részvényest?",
        options: [
          "osztalékra jogosult, és szavazati jogot gyakorolhat a közgyűlésen",
          "garantált, fix kamatra jogosult",
          "az állam felé fennálló adójogosultságra",
          "kizárólag a vállalat vezetői pozíciójára"
        ],
        correct_answer: "osztalékra jogosult, és szavazati jogot gyakorolhat a közgyűlésen",
        explanation: "A részvényes a vállalat résztulajdonosává válik: jogosult az osztalékra, és szavazati jogot gyakorolhat a közgyűlésen.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire jogosult a kötvénytulajdonos?",
        options: [
          "a tőke visszafizetésére meghatározott időpontban és rendszeres kamatfizetésre",
          "a vállalat közgyűlésén szavazati jogra",
          "osztalékra a vállalat nyereségéből",
          "a vállalat tulajdonrészére"
        ],
        correct_answer: "a tőke visszafizetésére meghatározott időpontban és rendszeres kamatfizetésre",
        explanation: "A kötvény hitelviszonyt testesít meg: a kötvénytulajdonos a tőke visszafizetésére és rendszeres kamatfizetésre jogosult, tulajdonjog nélkül.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az IPO (tőzsdei bevezetés)?",
        options: [
          "amikor egy vállalat elsőként bocsát ki és vezet be értékpapírokat a tőzsdére",
          "amikor egy vállalat felszámolás alá kerül",
          "amikor egy kötvény lejár",
          "amikor egy befektető diverzifikálja portfólióját"
        ],
        correct_answer: "amikor egy vállalat elsőként bocsát ki és vezet be értékpapírokat a tőzsdére",
        explanation: "Az IPO azt jelenti, hogy egy vállalat elsőként bocsát ki és vezet be új értékpapírokat a tőzsdére az elsődleges piacon.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik a másodlagos piacon?",
        options: [
          "a már kibocsátott értékpapírokkal kereskednek a befektetők egymás között",
          "a vállalatok új értékpapírokat bocsátanak ki",
          "kizárólag az állam kereskedik",
          "megszűnik minden korábbi értékpapír"
        ],
        correct_answer: "a már kibocsátott értékpapírokkal kereskednek a befektetők egymás között",
        explanation: "A másodlagos piacon a már kibocsátott értékpapírokkal kereskednek a befektetők egymás között, ami biztosítja azok likviditását.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi befolyásolja alapvetően a tőzsdei árfolyamok alakulását?",
        options: [
          "a vállalat teljesítménye, a makrogazdasági környezet és a befektetői várakozások",
          "kizárólag az állami adópolitika",
          "a munkanélküliségi ráta önmagában",
          "a fogyasztóvédelmi szabályozás"
        ],
        correct_answer: "a vállalat teljesítménye, a makrogazdasági környezet és a befektetői várakozások",
        explanation: "A tőzsdei árfolyamokat a vállalat teljesítménye, jövőbeli kilátásai, a makrogazdasági környezet (kamatok, infláció) és a befektetői várakozások egyaránt befolyásolják.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki egy tőzsdeindex, mint például a BÉT BUX indexe?",
        options: [
          "a piac egészének átlagos teljesítményét",
          "egyetlen vállalat árfolyamát",
          "az állam költségvetési egyenlegét",
          "a jegybanki alapkamat szintjét"
        ],
        correct_answer: "a piac egészének átlagos teljesítményét",
        explanation: "A tőzsdeindexek, mint a BUX, a piac egészének átlagos teljesítményét összegzik, nem csak egyetlen vállalatét.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen összefüggés jellemző a várható hozam és a kockázat között a tőzsdei befektetéseknél?",
        options: [
          "a magasabb várható hozam jellemzően magasabb kockázattal jár együtt",
          "a magasabb hozam mindig kockázat nélkül elérhető",
          "nincs összefüggés a kettő között",
          "a kockázat mindig független a hozamtól"
        ],
        correct_answer: "a magasabb várható hozam jellemzően magasabb kockázattal jár együtt",
        explanation: "A tőzsdei befektetés a magasabb várható hozam mellett jellemzően magasabb kockázattal is jár, mivel az árfolyamok ingadozhatnak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért veszíthet a részvényes a befektetett tőkéjéből?",
        options: [
          "mert a részvényes a vállalat esetleges veszteségét is viseli",
          "mert a részvény mindig garantált hozamot biztosít",
          "mert a kötvénytulajdonosok mindig elsőbbséget kapnak minden helyzetben",
          "mert a részvények sosem veszíthetnek értékükből"
        ],
        correct_answer: "mert a részvényes a vállalat esetleges veszteségét is viseli",
        explanation: "A részvényes a vállalat résztulajdonosaként a vállalat esetleges veszteségét is viseli, így a befektetett tőkéje elveszhet.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért jár jellemzően kisebb kockázattal a kötvény, mint a részvény?",
        options: [
          "mert a kötvény kibocsátója vállalja a tőke visszafizetését és a rendszeres kamatfizetést, függetlenül a vállalat nyereségességétől",
          "mert a kötvényt sosem lehet elveszíteni",
          "mert a kötvénytulajdonos résztulajdonossá válik",
          "mert a kötvény árfolyama sosem ingadozik"
        ],
        correct_answer: "mert a kötvény kibocsátója vállalja a tőke visszafizetését és a rendszeres kamatfizetést, függetlenül a vállalat nyereségességétől",
        explanation: "A kötvény kevesebb kockázattal jár, mint a részvény, mivel a kibocsátó vállalja a tőke visszafizetését és a kamatfizetést, függetlenül attól, hogy a vállalat nyereséges-e.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "fogyasztovedelem-es-a-fenntarthato-fogyasztas",
    title: "Fogyasztóvédelem és a fenntartható fogyasztás",
    level: "mindketto",
    theme: "Mikroökonómia",
    order_index: 18,
    summary_markdown:
      "A fogyasztóvédelem a fogyasztók gazdasági érdekeinek, biztonságának és megfelelő tájékoztatáshoz való jogának védelmét szolgálja, míg a fenntartható fogyasztás a jövő generációk érdekeit is szem előtt tartó, tudatos vásárlói magatartást jelenti.",
    content_markdown: `
## A fogyasztóvédelem célja és fogalma

A **fogyasztóvédelem** a gazdaságpolitika egyik kiemelt területe, amelynek célja a fogyasztók gazdasági érdekeinek, testi épségének és biztonságának védelme. Feladata, hogy a piaci normák, jogszabályi előírások és hatósági eszközök révén biztosítsa a tisztességes kereskedelmi gyakorlatot, megelőzze a fogyasztók megtévesztését, és lehetőséget adjon a fogyasztóknak érdekeik érvényesítésére a gyártókkal, szolgáltatókkal és kereskedőkkel szemben.

## A fogyasztói alapjogok

A fogyasztóvédelem legfontosabb alapjogai közé tartozik a **biztonsághoz való jog** (a termékek és szolgáltatások ne veszélyeztessék az egészséget, testi épséget), a **tájékoztatáshoz való jog** (a fogyasztó jogosult megismerni a termék minden lényeges tulajdonságát, összetételét, gyártóját), a **választás szabadságához való jog** (a verseny biztosítása, hogy a fogyasztó valódi alternatívák közül választhasson), valamint a **jogorvoslathoz (panasztételhez) való jog** (jogsérelem esetén a fogyasztó hatékony eljárást indíthat).

## A fogyasztóvédelem jogi keretei Magyarországon

Magyarországon a fogyasztóvédelem alapjait a **fogyasztóvédelemről szóló 1997. évi CLV. törvény** rakja le, amely közel három évtizede biztosítja a fogyasztói jogok érvényesülésének kereteit. A törvény szabályozza többek között a termékbiztonságot, a fogyasztói szerződések tisztességes feltételeit, a reklámozás korlátait, valamint a fogyasztói panaszok kezelésének rendjét.

## A szavatosság és a jótállás

A fogyasztóvédelem gyakorlati eszközei közé tartozik a **szavatosság** (a törvény által biztosított jog, hogy a hibás terméket a fogyasztó kicseréltesse, kijavíttassa, vagy az árát visszakapja) és a **jótállás (garancia)** (a gyártó vagy forgalmazó önkéntes, jellemzően a törvényi szavatosságnál kedvezőbb vállalása a termék meghatározott ideig tartó hibátlan működésére).

## Az Európai Unió fogyasztóvédelmi politikája

Az Európai Unió közös fogyasztóvédelmi politikát alakított ki, amelynek célja az egységes belső piacon a fogyasztók magas szintű, egységes védelmének biztosítása, függetlenül attól, hogy az unió mely tagállamában vásárolnak. Ez magában foglalja a termékbiztonsági előírások harmonizálását, az online vásárlások (távollévők közötti szerződések) speciális védelmét, valamint a határon átnyúló jogviták rendezésének elősegítését.

## A fenntartható fogyasztás fogalma

A **fenntartható fogyasztás** olyan fogyasztói magatartást jelent, amely a jelen szükségleteinek kielégítése mellett figyelembe veszi a jövő generációk érdekeit és a környezeti korlátokat is. Ez magában foglalhatja a tudatos, mértéktartó vásárlást, a hosszabb élettartamú, javítható termékek preferálását, az újrahasznosítást, valamint a környezeti hatások (szén-lábnyom, erőforrás-felhasználás) mérlegelését a vásárlási döntések során.

## A tudatos fogyasztói magatartás elemei

A tudatos fogyasztói magatartás elemei közé tartozik az árak és minőségek **összehasonlítása** vásárlás előtt, a **reklámok kritikus szemlélete** (a marketingeszközök felismerése és tudatos kezelése), a **feleslegtelen fogyasztás elkerülése**, valamint a **környezettudatos döntések** (pl. energiahatékony termékek választása, a csomagolási hulladék minimalizálása).

## Jelentősége

A fogyasztóvédelem és a fenntartható fogyasztás ismerete gyakorlati szempontból kiemelten fontos minden fogyasztó számára: ezek a fogalmak segítenek abban, hogy a piaci szereplők (fogyasztók) tudatosan, jogaik ismeretében, és a hosszú távú (saját és társadalmi) érdekeiket szem előtt tartva hozzanak gazdasági döntéseket.
`,
    key_concepts: [
      "fogyasztói alapjogok (biztonság, tájékoztatás, választás, jogorvoslat)",
      "szavatosság és jótállás",
      "EU fogyasztóvédelmi politika",
      "fenntartható fogyasztás",
      "tudatos fogyasztói magatartás",
    ],
    source_refs: [
      { label: "A fogyasztói döntés elemzése – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-fogyasztoi-dontes-elemzese/" },
      { label: "Fogyasztóvédelem (Közszolgálati Online Lexikon)", url: "https://lexikon.uni-nke.hu/szocikk/fogyasztovedelem/" },
      { label: "A fogyasztóvédelmi politika: alapelvek és eszközök (Európai Parlament)", url: "https://www.europarl.europa.eu/factsheets/hu/sheet/46/a-fogyasztovedelmi-politika-alapelvek-es-eszkozok" },
      { label: "A fenntartható fejlődés mint gazdasági, társadalmi, politikai cél (Érettségitételek.com)", url: "https://erettsegitetelek.com/2020/11/a-fenntarthato-fejlodes-mint-gazdasagi-tarsadalmi-poiltikai-cel-hazai-es-nemzetkozi-egyuttmukodesek/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik NEM tartozik a fogyasztói alapjogok közé?",
        options: [
          "a korlátlan reklámozás joga",
          "a biztonsághoz való jog",
          "a tájékoztatáshoz való jog",
          "a jogorvoslathoz való jog"
        ],
        correct_answer: "a korlátlan reklámozás joga",
        explanation: "A fogyasztói alapjogok a fogyasztókat védik (biztonság, tájékoztatás, választás, jogorvoslat), nem a reklámozók jogait bővítik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a szavatosság és a jótállás között?",
        options: [
          "a szavatosság törvényi kötelezettség, a jótállás a gyártó/forgalmazó önkéntes vállalása",
          "nincs közöttük különbség",
          "a jótállás mindig kötelező törvényi előírás",
          "a szavatosság csak élelmiszerekre vonatkozik"
        ],
        correct_answer: "a szavatosság törvényi kötelezettség, a jótállás a gyártó/forgalmazó önkéntes vállalása",
        explanation: "A szavatosság törvény által biztosított jog, míg a jótállás a gyártó vagy forgalmazó önkéntes, kedvezőbb vállalása.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik törvény alapozza meg a magyar fogyasztóvédelmet?",
        options: [
          "az 1997. évi CLV. törvény a fogyasztóvédelemről",
          "a Munka törvénykönyve",
          "a Polgári Törvénykönyv kizárólagosan",
          "az Alaptörvény egyetlen cikkelye"
        ],
        correct_answer: "az 1997. évi CLV. törvény a fogyasztóvédelemről",
        explanation: "A magyar fogyasztóvédelem jogi alapja az 1997. évi CLV. törvény, amely közel három évtizede biztosítja a fogyasztói jogok kereteit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a fenntartható fogyasztás?",
        options: [
          "olyan fogyasztói magatartás, amely figyelembe veszi a jövő generációk érdekeit és a környezeti korlátokat",
          "a lehető legnagyobb mennyiségű vásárlás",
          "kizárólag az olcsó termékek keresése",
          "a fogyasztás teljes elkerülése"
        ],
        correct_answer: "olyan fogyasztói magatartás, amely figyelembe veszi a jövő generációk érdekeit és a környezeti korlátokat",
        explanation: "A fenntartható fogyasztás a jelen szükségletek kielégítését úgy végzi, hogy közben tekintettel van a jövő generációk érdekeire és a környezeti terhelésre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az EU közös fogyasztóvédelmi politikáját?",
        options: [
          "egységes, magas szintű fogyasztóvédelmet biztosít a belső piacon, tagállamtól függetlenül",
          "minden tagállam teljesen eltérő szabályokat alkalmazhat",
          "csak az élelmiszerekre vonatkozik",
          "nincs is közös uniós fogyasztóvédelmi politika"
        ],
        correct_answer: "egységes, magas szintű fogyasztóvédelmet biztosít a belső piacon, tagállamtól függetlenül",
        explanation: "Az EU fogyasztóvédelmi politikája harmonizált szabályokkal biztosítja a fogyasztók egységes, magas szintű védelmét az egész belső piacon.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fogyasztóvédelem célja?",
        options: [
          "a fogyasztók gazdasági érdekeinek, testi épségének és biztonságának védelme",
          "kizárólag a vállalatok profitjának növelése",
          "a piaci verseny teljes megszüntetése",
          "az árak folyamatos emelése"
        ],
        correct_answer: "a fogyasztók gazdasági érdekeinek, testi épségének és biztonságának védelme",
        explanation: "A fogyasztóvédelem célja a fogyasztók gazdasági érdekeinek, testi épségének és biztonságának védelme a piaci szereplőkkel szemben.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a fogyasztók biztonsághoz való joga?",
        options: [
          "hogy a termékek és szolgáltatások ne veszélyeztessék az egészséget, testi épséget",
          "hogy minden termék ingyenes legyen",
          "hogy a fogyasztó korlátlan mennyiséget vásárolhasson",
          "hogy a reklámok korlátlanul megtéveszthessék a vásárlókat"
        ],
        correct_answer: "hogy a termékek és szolgáltatások ne veszélyeztessék az egészséget, testi épséget",
        explanation: "A biztonsághoz való jog azt jelenti, hogy a termékek és szolgáltatások nem veszélyeztethetik a fogyasztók egészségét vagy testi épségét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a fogyasztók tájékoztatáshoz való joga?",
        options: [
          "a fogyasztó jogosult megismerni a termék minden lényeges tulajdonságát, összetételét, gyártóját",
          "a fogyasztó nem kaphat információt a termékről",
          "csak a gyártók jogosultak információra",
          "a reklámok tartalma nem befolyásolja a fogyasztói jogokat"
        ],
        correct_answer: "a fogyasztó jogosult megismerni a termék minden lényeges tulajdonságát, összetételét, gyártóját",
        explanation: "A tájékoztatáshoz való jog szerint a fogyasztó jogosult megismerni a termék lényeges tulajdonságait, összetételét és gyártóját.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a fogyasztók választás szabadságához való joga?",
        options: [
          "a verseny biztosítását, hogy a fogyasztó valódi alternatívák közül választhasson",
          "azt, hogy a fogyasztó köteles egyetlen márkát választani",
          "az árak állami rögzítését",
          "a reklámok teljes betiltását"
        ],
        correct_answer: "a verseny biztosítását, hogy a fogyasztó valódi alternatívák közül választhasson",
        explanation: "A választás szabadságához való jog a verseny biztosítását jelenti, hogy a fogyasztó valódi alternatívák közül választhasson.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a jogorvoslathoz (panasztételhez) való jog?",
        options: [
          "jogsérelem esetén a fogyasztó hatékony eljárást indíthat",
          "a fogyasztó sosem panaszkodhat",
          "csak a gyártók fordulhatnak bírósághoz",
          "a fogyasztói jogok érvényesítése kizárólag önkéntes"
        ],
        correct_answer: "jogsérelem esetén a fogyasztó hatékony eljárást indíthat",
        explanation: "A jogorvoslathoz való jog azt jelenti, hogy jogsérelem esetén a fogyasztó hatékony eljárást (panaszt, jogi utat) indíthat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan védi az EU fogyasztóvédelmi politikája az online vásárlásokat?",
        options: [
          "speciális védelmet biztosít a távollévők közötti szerződésekre",
          "megtiltja az online vásárlást",
          "csak a boltokban történő vásárlásra vonatkozik",
          "nem foglalkozik az online kereskedelemmel"
        ],
        correct_answer: "speciális védelmet biztosít a távollévők közötti szerződésekre",
        explanation: "Az EU fogyasztóvédelmi politikája speciális védelmet biztosít a távollévők közötti szerződésekre, azaz az online vásárlásokra.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a célja a termékbiztonsági előírások uniós harmonizálásának?",
        options: [
          "hogy a fogyasztók egységes, magas szintű védelmet kapjanak, függetlenül attól, mely tagállamban vásárolnak",
          "hogy minden tagállam eltérő szabályokat alkalmazzon",
          "hogy csak a nagyvállalatokra vonatkozzon",
          "hogy megszüntesse a termékbiztonsági ellenőrzést"
        ],
        correct_answer: "hogy a fogyasztók egységes, magas szintű védelmet kapjanak, függetlenül attól, mely tagállamban vásárolnak",
        explanation: "A termékbiztonsági előírások harmonizálásának célja, hogy a fogyasztók egységes, magas szintű védelmet kapjanak az egész belső piacon.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a tudatos fogyasztói magatartás egyik alapvető eleme?",
        options: [
          "az árak és minőségek összehasonlítása vásárlás előtt",
          "a reklámok kritikátlan elfogadása",
          "a lehető legtöbb impulzusvásárlás",
          "a legdrágább termék automatikus választása"
        ],
        correct_answer: "az árak és minőségek összehasonlítása vásárlás előtt",
        explanation: "A tudatos fogyasztói magatartás egyik eleme az árak és minőségek összehasonlítása vásárlás előtt, ami segít a megalapozott döntésben.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos a reklámok kritikus szemlélete a tudatos fogyasztói magatartásban?",
        options: [
          "mert segít felismerni és tudatosan kezelni a marketingeszközök hatását a vásárlási döntésekre",
          "mert minden reklám hamis információt közöl",
          "mert a reklámok sosem befolyásolják a döntéseket",
          "mert a reklámok betiltása az egyetlen megoldás"
        ],
        correct_answer: "mert segít felismerni és tudatosan kezelni a marketingeszközök hatását a vásárlási döntésekre",
        explanation: "A reklámok kritikus szemlélete segít a fogyasztóknak felismerni és tudatosan kezelni a marketingeszközök hatását, elkerülve a megalapozatlan vásárlási döntéseket.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szerepet tölt be az EU a határon átnyúló fogyasztói jogviták rendezésében?",
        options: [
          "elősegíti a jogviták rendezését, amikor a fogyasztó egy másik tagállamban vásárol",
          "megszünteti a határon átnyúló kereskedelmet",
          "kizárólag a hazai jogviták rendezésével foglalkozik",
          "nem foglalkozik jogvitákkal"
        ],
        correct_answer: "elősegíti a jogviták rendezését, amikor a fogyasztó egy másik tagállamban vásárol",
        explanation: "Az EU fogyasztóvédelmi politikája elősegíti a határon átnyúló jogviták rendezését, amikor a fogyasztó egy másik tagállamban vásárolt terméket vagy szolgáltatást.",
        difficulty: 3,
      },
    ],
  },
];
