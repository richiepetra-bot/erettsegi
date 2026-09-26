import { TopicSeed } from "./angol";

export const matekFuggvenyekGeometriaTopics: TopicSeed[] = [
  {
    slug: "sorozatok-szamtani-es-mertani-sorozat",
    title: "Sorozatok: számtani és mértani sorozat",
    level: "mindketto",
    theme: "Függvények, geometria, statisztika",
    order_index: 7,
    summary_markdown:
      "A számtani sorozatban egymást követő tagok különbsége, a mértani sorozatban a hányadosa állandó: a két sorozattípus képletei (n-edik tag, összegképlet) számos gyakorlati problémától (kamatszámítás, népességnövekedés) elválaszthatatlanok.",
    content_markdown: `
## A sorozat fogalma

A **sorozat** olyan függvény, amelynek értelmezési tartománya a pozitív egész számok halmaza (vagy annak egy kezdőszelete): minden pozitív egész számhoz (sorszámhoz, indexhez) egyetlen valós számot (a sorozat adott tagját) rendel. A sorozat tagjait jellemzően a₁, a₂, a₃, ..., aₙ jelöléssel írjuk, ahol az index a tag sorszámát jelöli.

## A számtani sorozat

A **számtani sorozat** olyan sorozat, amelyben a második tagtól kezdve bármely tag és az őt megelőző tag **különbsége állandó** — ezt az állandót **differenciának (d)** nevezzük. A számtani sorozat n-edik tagja az első tag és a differencia segítségével számítható: **aₙ = a₁ + (n-1)·d**. A számtani sorozat jellemzője, hogy bármely három egymást követő tag közül a középső a két szélső **számtani közepe** (átlaga).

## A számtani sorozat első n tagjának összege

A számtani sorozat első n tagjának összegére vonatkozó képlet: **Sₙ = n · (a₁ + aₙ) / 2**, vagyis az összeg az első és az utolsó tag átlagának és a tagok számának szorzata. Ez a képlet — amelyet állítólag már a fiatal Gauss is felfedezett, amikor 1-től 100-ig kellett összeadnia a számokat — rendkívül hatékony eszköz nagy mennyiségű, szabályosan növekvő vagy csökkenő adat összegzésére.

## A mértani sorozat

A **mértani sorozat** olyan sorozat, amelyben a második tagtól kezdve bármely tag és az őt megelőző tag **hányadosa állandó** — ezt az állandót **kvóciensnek (q)** nevezzük. A mértani sorozat n-edik tagja: **aₙ = a₁ · qⁿ⁻¹**. A mértani sorozat jellemzője, hogy (pozitív tagok esetén) bármely három egymást követő tag közül a középső a két szélső **mértani közepe** (a szélsők szorzatának négyzetgyöke).

## A mértani sorozat első n tagjának összege

A mértani sorozat első n tagjának összege (ha q ≠ 1): **Sₙ = a₁ · (qⁿ - 1) / (q - 1)**. Ha |q| < 1, és a sorozat tagjainak számát minden határon túl növeljük, az összeg egy véges értékhez (határértékhez) tart — ez vezet a **végtelen mértani sor** fogalmához, amelynek összege: S = a₁ / (1 - q).

## Számtani és mértani sorozatok a gyakorlatban

A **számtani sorozatok** jellemzően egyenletes, additív változást írnak le: pl. egy egyenletesen növekvő fizetés, egy egyenletes sebességgel megtett út, vagy egy szabályos ülésrend számozása. A **mértani sorozatok** ezzel szemben exponenciális, szorzó jellegű változást írnak le: pl. a **kamatos kamat** számítása (a tőke évről évre azonos arányban növekszik), a radioaktív bomlás (felezési idő), vagy a népességnövekedés (ha állandó a növekedési ráta).

## A kamatos kamat számítása

A mértani sorozat egyik legfontosabb gyakorlati alkalmazása a **kamatos kamat számítás**: ha egy T₀ összeget évi p% kamatos kamatra fektetünk be, akkor n év múlva a tőke értéke: **Tₙ = T₀ · (1 + p/100)ⁿ**. Ez a képlet lényegében egy mértani sorozat n-edik tagjának képlete, ahol a kvóciens q = 1 + p/100.

## Vegyes feladatok sorozatokra

Az érettségi feladatok gyakran kombinálják a számtani és mértani sorozatok tulajdonságait: pl. olyan feladatok, ahol egy sorozat egyszerre számtani és mértani résszorozatokból épül fel, vagy ahol a feladat szövege alapján kell eldönteni, hogy az adott probléma számtani vagy mértani modellel írható-e le pontosabban (additív vagy multiplikatív jellegű-e a változás).

## Jelentősége

A számtani és mértani sorozatok ismerete alapvető matematikai eszköz, amely szoros kapcsolatban áll a pénzügyi matematikával (kamatszámítás, hiteltörlesztés), a természettudományokkal (exponenciális folyamatok) és a függvénytannal (a sorozatok speciális, diszkrét értelmezési tartományú függvényként foghatók fel) is.
`,
    key_concepts: [
      "számtani sorozat: aₙ = a₁ + (n-1)d",
      "számtani sorozat összegképlete: Sₙ = n(a₁+aₙ)/2",
      "mértani sorozat: aₙ = a₁ · qⁿ⁻¹",
      "mértani sorozat összegképlete és a végtelen mértani sor",
      "kamatos kamatszámítás mértani sorozattal",
    ],
    source_refs: [
      { label: "Számtani sorozatok a gyakorlatban (zanza.tv)", url: "https://zanza.tv/matematika/osszefuggesek-fuggvenyek-sorozatok/szamtani-sorozatok-gyakorlatban" },
      { label: "Mértani sorozatok a hétköznapokban (zanza.tv)", url: "https://zanza.tv/matematika/osszefuggesek-fuggvenyek-sorozatok/mertani-sorozatok-hetkoznapokban" },
      { label: "Számtani sorozat (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Számtani_sorozat" },
      { label: "Milyen sorozatot nevezünk számtani, illetve mértani sorozatnak? – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/milyen-sorozatot-nevezunk-szamtani-illetve-mertani-sorozatnak/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a számtani sorozatot?",
        options: [
          "egymást követő tagjainak különbsége állandó",
          "egymást követő tagjainak hányadosa állandó",
          "minden tagja azonos",
          "csak pozitív tagjai lehetnek"
        ],
        correct_answer: "egymást követő tagjainak különbsége állandó",
        explanation: "A számtani sorozatban a második tagtól kezdve bármely tag és az előző tag különbsége állandó (differencia).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy számtani sorozat első tagja 3, differenciája 4. Mennyi a 6. tagja?",
        options: ["23", "27", "19", "24"],
        correct_answer: "23",
        explanation: "aₙ = a₁ + (n-1)·d = 3 + 5·4 = 3 + 20 = 23.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a mértani sorozat n-edik tagjának képlete?",
        options: ["aₙ = a₁ · qⁿ⁻¹", "aₙ = a₁ + (n-1)·d", "aₙ = a₁ · n", "aₙ = a₁ + qⁿ"],
        correct_answer: "aₙ = a₁ · qⁿ⁻¹",
        explanation: "A mértani sorozat n-edik tagja az első tag és a kvóciens (n-1)-edik hatványának szorzata.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik gyakorlati jelenség írható le jól mértani sorozattal?",
        options: ["kamatos kamat számítása", "egyenletes sebességgel megtett út", "egy szabályos ülésrend számozása", "azonos növekményű fizetésemelés"],
        correct_answer: "kamatos kamat számítása",
        explanation: "A kamatos kamat számítás mértani sorozatot követ, mivel a tőke évről évre azonos arányban (szorzóval) növekszik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a számtani sorozat első n tagjának összegképlete?",
        options: ["Sₙ = n · (a₁ + aₙ) / 2", "Sₙ = a₁ · qⁿ⁻¹", "Sₙ = a₁ + aₙ", "Sₙ = n · a₁"],
        correct_answer: "Sₙ = n · (a₁ + aₙ) / 2",
        explanation: "A számtani sorozat első n tagjának összege az első és az utolsó tag átlagának és a tagok számának szorzata.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "fuggvenyek-es-alapveto-tulajdonsagaik",
    title: "Függvények és alapvető tulajdonságaik",
    level: "mindketto",
    theme: "Függvények, geometria, statisztika",
    order_index: 8,
    summary_markdown:
      "A függvény két halmaz közötti egyértelmű hozzárendelés, amelynek alapvető tulajdonságai — értelmezési tartomány, értékkészlet, monotonitás, szélsőérték, paritás — teszik lehetővé a valós folyamatok matematikai leírását és elemzését.",
    content_markdown: `
## A függvény fogalma

A **függvény** olyan speciális hozzárendelés (leképezés) egy **alaphalmaz (értelmezési tartomány, É.T.)** és egy **képhalmaz (értékkészlet, É.K.)** elemei között, amelyben az alaphalmaz **minden egyes eleméhez pontosan egy** elemet rendelünk a képhalmazból. A hozzárendelés megadható halmazábrával, nyíldiagrammal, táblázattal, utasítással (szöveggel), képlettel vagy koordináta-rendszerbeli ábrázolással (grafikonnal).

## Az értelmezési tartomány és az értékkészlet

Az **értelmezési tartomány (É.T.)** azoknak az x értékeknek a halmaza, amelyekre a függvény értelmezve van (amelyekhez tartozik függvényérték). Az **értékkészlet (É.K.)** azoknak az y értékeknek a halmaza, amelyeket a függvény ténylegesen felvesz. Fontos, hogy az értékkészlet nem feltétlenül azonos a képhalmazzal: előfordulhat, hogy a képhalmaz elemeinek csak egy része jelenik meg ténylegesen mint függvényérték.

## A monotonitás

Egy függvény egy adott intervallumon **monoton növekvő**, ha az intervallumon nagyobb x-értékhez nagyobb (vagy egyenlő) függvényérték tartozik; **monoton csökkenő**, ha nagyobb x-értékhez kisebb (vagy egyenlő) függvényérték tartozik. Ha a nagyobb x-értékhez szigorúan nagyobb, illetve szigorúan kisebb érték tartozik, **szigorú monotonitásról** beszélünk.

## A szélsőérték

Egy függvénynek egy adott pontban **maximuma (legnagyobb értéke)** van, ha ott a függvényérték nem kisebb, mint bármely más pontban felvett értéke egy környezetben (vagy az egész értelmezési tartományon, ha globális szélsőértékről van szó); hasonlóan definiálható a **minimum (legkisebb érték)** is. A szélsőértékek meghatározása kulcsfontosságú optimalizálási feladatokban (pl. maximális terület, minimális költség meghatározása).

## A paritás: páros és páratlan függvények

Egy függvény **páros**, ha minden x-re f(-x) = f(x) — grafikonja szimmetrikus az y-tengelyre (pl. f(x) = x²). Egy függvény **páratlan**, ha minden x-re f(-x) = -f(x) — grafikonja szimmetrikus az origóra (pl. f(x) = x³). Sok függvény sem nem páros, sem nem páratlan.

## Alapvető függvénytípusok

A középiskolai matematika számos **nevezetes függvénytípust** vizsgál: a **lineáris függvényt** (f(x) = mx + b, egyenes vonalú grafikon), a **másodfokú függvényt** (f(x) = ax² + bx + c, parabola alakú grafikon), az **abszolútérték-függvényt** (f(x) = |x|, V alakú grafikon), a **fordított arányosságot** (f(x) = a/x, hiperbola alakú grafikon), az **exponenciális függvényt** (f(x) = aˣ, gyors növekedés vagy csökkenés) és a **négyzetgyökfüggvényt** (f(x) = √x).

## A függvénytranszformációk

A nevezetes függvények grafikonjaiból **transzformációkkal** (eltolás, nyújtás, összenyomás, tükrözés) új függvények grafikonjai vezethetők le. Például f(x) + c a grafikont függőlegesen, f(x+c) pedig vízszintesen tolja el; -f(x) az x-tengelyre, f(-x) az y-tengelyre tükrözi a grafikont. A transzformációk ismerete lehetővé teszi, hogy bonyolultabb függvények grafikonját is gyorsan, az alapfüggvényből kiindulva vázoljuk fel.

## A függvény inverze

Egy függvénynek akkor létezik **inverze**, ha kölcsönösen egyértelmű (injektív), azaz minden értékkészletbeli elemhez pontosan egy értelmezési tartománybeli elem tartozik. Az inverz függvény grafikonja az eredeti függvény grafikonjának az y = x egyenesre vonatkozó tükörképe.

## Jelentősége

A függvények és alapvető tulajdonságaik (értelmezési tartomány, értékkészlet, monotonitás, szélsőérték, paritás) ismerete a matematika egyik legfontosabb, gyakorlati alkalmazásokban is nélkülözhetetlen eszköze: a fizikai, gazdasági és társadalmi folyamatok modellezésének alapvető nyelve.
`,
    key_concepts: [
      "értelmezési tartomány és értékkészlet",
      "monotonitás (növekvő, csökkenő)",
      "szélsőérték (maximum, minimum)",
      "páros és páratlan függvények",
      "függvénytranszformációk és az inverz függvény",
    ],
    source_refs: [
      { label: "Függvények I. (zanza.tv)", url: "https://zanza.tv/matematika/osszefuggesek-fuggvenyek-sorozatok/fuggvenyek-i" },
      { label: "Függvény (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Függvény" },
      { label: "Mit ért egy függvény értelmezési tartományán, ill. értékkészletén? – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/mit-ert-egy-fuggveny-ertelmezesi-tartomanyan-ill-ertekkeszleten/" },
      { label: "Függvény és inverze – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/fuggveny-es-inverze/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk egy függvény értelmezési tartományának?",
        options: [
          "azon x értékek halmazát, amelyekre a függvény értelmezve van",
          "a függvény által felvett y értékek halmazát",
          "a függvény grafikonjának alakját",
          "a függvény szélsőértékét"
        ],
        correct_answer: "azon x értékek halmazát, amelyekre a függvény értelmezve van",
        explanation: "Az értelmezési tartomány azoknak az x értékeknek a halmaza, amelyekhez a függvény hozzárendel egy értéket.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor páros egy függvény?",
        options: ["ha minden x-re f(-x) = f(x)", "ha minden x-re f(-x) = -f(x)", "ha csak pozitív értékeket vesz fel", "ha monoton növekvő"],
        correct_answer: "ha minden x-re f(-x) = f(x)",
        explanation: "A páros függvény grafikonja szimmetrikus az y-tengelyre, azaz f(-x) = f(x) minden x-re.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen alakú az f(x) = ax² + bx + c másodfokú függvény grafikonja?",
        options: ["parabola", "egyenes", "hiperbola", "kör"],
        correct_answer: "parabola",
        explanation: "A másodfokú függvény grafikonja parabola alakú.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan hat az f(x) + c transzformáció a függvény grafikonjára?",
        options: ["függőlegesen eltolja c egységgel", "vízszintesen tolja el c egységgel", "tükrözi az x-tengelyre", "megnyújtja vízszintesen"],
        correct_answer: "függőlegesen eltolja c egységgel",
        explanation: "Az f(x) + c hozzáadás a teljes grafikont függőlegesen (felfelé vagy lefelé) tolja el c egységgel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a feltétele annak, hogy egy függvénynek létezzen inverze?",
        options: [
          "kölcsönösen egyértelmű (injektív) legyen",
          "páros legyen",
          "monoton csökkenő legyen az egész értelmezési tartományon",
          "szélsőértéke legyen"
        ],
        correct_answer: "kölcsönösen egyértelmű (injektív) legyen",
        explanation: "Egy függvénynek csak akkor létezik inverze, ha kölcsönösen egyértelmű, azaz minden értékkészletbeli elemhez pontosan egy értelmezési tartománybeli elem tartozik.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "sikgeometria-haromszogek-es-negyszogek",
    title: "Síkgeometria: háromszögek és négyszögek",
    level: "mindketto",
    theme: "Függvények, geometria, statisztika",
    order_index: 9,
    summary_markdown:
      "A háromszögek és négyszögek tulajdonságainak (nevezetes vonalak, pontok, kerület- és területképletek) ismerete a síkgeometria alapja, amelyre a koordinátageometria és a trigonometria további eredményei is épülnek.",
    content_markdown: `
## A háromszög alapvető tulajdonságai

A **háromszög** a legegyszerűbb sokszög, amelynek belső szögösszege mindig **180°**. A háromszögek csoportosíthatók oldalaik szerint (szabályos/egyenlő oldalú, egyenlő szárú, általános) és szögeik szerint (hegyesszögű, derékszögű, tompaszögű). A háromszög bármely két oldalának összege nagyobb, mint a harmadik oldal (**háromszög-egyenlőtlenség**).

## A háromszög nevezetes vonalai és pontjai

A háromszögnek négy nevezetes ponthoz kapcsolódó nevezetes vonalrendszere van. A három **magasságvonal** (a csúcsokból a szemközti oldalra, vagy annak meghosszabbítására állított merőleges) egy pontban, a **magasságpontban** metszi egymást. A három **súlyvonal** (a csúcsokat a szemközti oldal felezőpontjával összekötő szakasz) a **súlypontban** metszi egymást, amely minden súlyvonalat 2:1 arányban oszt. A három oldal **felezőmerőlegese** a **körülírt kör középpontjában** metszi egymást (ez egyenlő távolságra van mind a három csúcstól). A három **szögfelező** a **beírt kör középpontjában** metszi egymást (ez egyenlő távolságra van mind a három oldaltól).

## A háromszög kerülete és területe

A háromszög **kerülete** a három oldal összege. A **területe** többféleképpen számítható: a legismertebb képlet T = (alap · magasság) / 2, de kiszámítható két oldal és a közbezárt szög szinuszának segítségével is (T = (a·b·sin γ) / 2), vagy — ha csak a három oldal ismert — a **Héron-képlettel**: T = √(s(s-a)(s-b)(s-c)), ahol s a kerület fele.

## A Pitagorasz-tétel

A **Pitagorasz-tétel** derékszögű háromszögekre vonatkozik: a befogók négyzetének összege egyenlő az átfogó négyzetével (**a² + b² = c²**, ahol c az átfogó). Ez a tétel a geometria egyik legfontosabb és legszélesebb körben alkalmazott eredménye, amely a távolságszámítás, a koordinátageometria és a trigonometria alapjául is szolgál.

## A négyszögek csoportosítása

A **négyszögek** csoportosításának alapja a szemközti oldalak párhuzamossága és az oldalak, szögek egyenlősége. A **paralelogramma** olyan négyszög, amelynek szemközti oldalai párhuzamosak és egyenlők; speciális esetei a **téglalap** (minden szöge derékszög), a **rombusz** (minden oldala egyenlő) és a **négyzet** (minden oldala egyenlő és minden szöge derékszög). A **trapéz** olyan négyszög, amelynek legalább egy pár szemközti oldala párhuzamos (ezeket alapoknak nevezzük).

## A négyszögek kerülete és területe

A **téglalap** területe: T = a · b (a szomszédos oldalak szorzata). A **paralelogramma** területe: T = alap · hozzátartozó magasság. A **trapéz** területe: T = ((a+c)/2) · m, ahol a és c a két alap, m a magasság. A **rombusz** területe kiszámítható a két átló szorzatának felével is: T = (e·f)/2.

## A hasonlóság és a háromszögek hasonlósági tételei

Két alakzat **hasonló**, ha egyik a másiknak nagyítással vagy kicsinyítéssel (arányos nagyítással) megkapható. A háromszögek hasonlóságának eldöntésére szolgálnak a **hasonlósági alapesetek** (két szög egyenlősége, két oldal aránya és a közbezárt szög egyenlősége, három oldal aránya egyenlő). Hasonló háromszögeknél a megfelelő oldalak aránya állandó (hasonlósági arány), a területek aránya pedig a hasonlósági arány négyzetével egyezik meg.

## Jelentősége

A háromszögek és négyszögek tulajdonságainak, nevezetes vonalainak és terület-kerület képleteinek ismerete a síkgeometria alapja: ez teszi lehetővé bonyolultabb geometriai (koordinátageometriai, trigonometriai, térgeometriai) problémák megoldását, és számos gyakorlati (építészeti, mérnöki, térképészeti) alkalmazás alapja is.
`,
    key_concepts: [
      "háromszög nevezetes vonalai (magasság-, súly-, szögfelező, felezőmerőleges)",
      "Pitagorasz-tétel: a² + b² = c²",
      "Héron-képlet a háromszög területére",
      "négyszögek típusai (paralelogramma, trapéz, rombusz)",
      "hasonlóság és hasonlósági alapesetek",
    ],
    source_refs: [
      { label: "A háromszög (zanza.tv)", url: "https://zanza.tv/matematika/geometria/haromszog" },
      { label: "Háromszög (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Háromszög" },
      { label: "Háromszög tételek – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/haromszog-tetelek/" },
      { label: "Síkgeometria (Mateking)", url: "https://www.mateking.hu/matematika-feladatgyujtemeny/kozepiskolai-matek/sikgeometria" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mennyi egy háromszög belső szögeinek összege?",
        options: ["180°", "360°", "90°", "270°"],
        correct_answer: "180°",
        explanation: "Bármely háromszög belső szögeinek összege mindig 180°.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit mond ki a Pitagorasz-tétel?",
        options: [
          "derékszögű háromszögben a befogók négyzetének összege egyenlő az átfogó négyzetével",
          "minden háromszög szögeinek összege 180°",
          "a kör kerülete 2πr",
          "a paralelogramma átlói felezik egymást"
        ],
        correct_answer: "derékszögű háromszögben a befogók négyzetének összege egyenlő az átfogó négyzetével",
        explanation: "A Pitagorasz-tétel szerint derékszögű háromszögben a² + b² = c², ahol c az átfogó.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik pontban metszi egymást a háromszög három súlyvonala?",
        options: ["a súlypontban", "a magasságpontban", "a beírt kör középpontjában", "a körülírt kör középpontjában"],
        correct_answer: "a súlypontban",
        explanation: "A három súlyvonal a súlypontban metszi egymást, amely minden súlyvonalat 2:1 arányban oszt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a trapéz területképlete, ha a és c az alapok, m a magasság?",
        options: ["T = ((a+c)/2) · m", "T = a · c · m", "T = a · c", "T = (a-c) · m"],
        correct_answer: "T = ((a+c)/2) · m",
        explanation: "A trapéz területe az alapok átlagának és a magasságnak a szorzata.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha két háromszög hasonlósági aránya 3, mekkora a területeik aránya?",
        options: ["9", "3", "6", "27"],
        correct_answer: "9",
        explanation: "Hasonló alakzatoknál a területek aránya a hasonlósági arány négyzetével egyezik meg: 3² = 9.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "trigonometria-hegyesszogek-es-a-derekszogu-haromszog",
    title: "Trigonometria: hegyesszögek és a derékszögű háromszög",
    level: "mindketto",
    theme: "Függvények, geometria, statisztika",
    order_index: 10,
    summary_markdown:
      "A trigonometria a szögek és az oldalhosszak közötti összefüggéseket vizsgálja: a hegyesszögek szögfüggvényei (szinusz, koszinusz, tangens) a derékszögű háromszögből indulnak ki, majd a szinusz- és koszinusztétel révén tetszőleges háromszögre is kiterjeszthetők.",
    content_markdown: `
## A hegyesszögek szögfüggvényei

Egy derékszögű háromszögben egy hegyesszög **szögfüggvényeit** a szög melletti befogó, a szöggel szemközti befogó és az átfogó hosszának arányaként definiáljuk. A **szinusz (sin)** a szöggel szemközti befogó és az átfogó aránya. A **koszinusz (cos)** a szög melletti befogó és az átfogó aránya. A **tangens (tg, tan)** a szöggel szemközti és a szög melletti befogó aránya (vagyis tg α = sin α / cos α). A **kotangens (ctg)** a tangens reciproka.

## A szögfüggvények közötti összefüggések

A szögfüggvények között több alapvető azonosság áll fenn. A **Pitagorasz-azonosság**: sin²α + cos²α = 1 minden α szögre. A **komplementer szögek összefüggése**: ha két hegyesszög összege 90°, akkor az egyik szinusza egyenlő a másik koszinuszával (sin α = cos(90° - α)). Ezek az összefüggések lehetővé teszik, hogy egy szögfüggvény ismeretében a többi szögfüggvény értékét is meghatározzuk.

## A szögfüggvények kiterjesztése

A szögfüggvények eredetileg csak hegyesszögekre (0° és 90° között) voltak értelmezve a derékszögű háromszög oldalainak arányaként, de a matematika kiterjeszti ezeket **tetszőleges szögekre** az egységsugarú körben (egységkörben) történő értelmezéssel: egy tetszőleges szög szinusza és koszinusza az egységkörön a szöghöz tartozó pont y-, illetve x-koordinátája.

## A szinusztétel

A **szinusztétel** tetszőleges (nem csak derékszögű) háromszögre érvényes összefüggés: egy háromszög oldalainak és a velük szemközti szögek szinuszainak aránya állandó, és megegyezik a háromszög köré írható kör átmérőjével: **a/sin α = b/sin β = c/sin γ = 2R**, ahol R a körülírt kör sugara. A szinusztétel segítségével kiszámítható egy háromszög ismeretlen oldala vagy szöge, ha két szög és egy oldal, vagy két oldal és egy szemközti szög adott.

## A koszinusztétel

A **koszinusztétel** a Pitagorasz-tétel általánosítása tetszőleges háromszögre: **c² = a² + b² - 2ab·cos γ**, ahol γ az a és b oldalak által bezárt szög. Ha γ = 90°, a koszinusztétel visszaadja a Pitagorasz-tételt (mivel cos 90° = 0). A koszinusztétel akkor alkalmazható, ha két oldal és a közbezárt szög, vagy mindhárom oldal ismert.

## A trigonometria alkalmazásai

A trigonometria alapvető szerepet játszik a **távolság- és magasságmérésben** (pl. egy torony magasságának meghatározása a hozzá tartozó látószög és a mérési pont távolságának ismeretében), a **navigációban és térképészetben** (háromszögelés), valamint a **fizikában** (hullámmozgás, rezgések leírása szinusz- és koszinuszfüggvényekkel).

## Nevezetes szögek szögfüggvényei

Bizonyos nevezetes szögek (30°, 45°, 60°) szögfüggvényei egzakt (gyökös) alakban is felírhatók, és ezeket érdemes fejből ismerni: pl. sin 30° = 1/2, cos 30° = √3/2, sin 45° = cos 45° = √2/2, sin 60° = √3/2, cos 60° = 1/2. Ezek az értékek gyakran szükségesek a feladatok gyors, számológép nélküli megoldásához.

## Jelentősége

A trigonometria a geometria és az algebra közötti hidat képezi: a szögek és oldalhosszak közötti pontos összefüggések ismerete elengedhetetlen a síkgeometriai és térgeometriai számításokhoz, és számos gyakorlati (mérnöki, navigációs, fizikai) alkalmazásban is nélkülözhetetlen eszköz.
`,
    key_concepts: [
      "szinusz, koszinusz, tangens a derékszögű háromszögben",
      "Pitagorasz-azonosság: sin²α + cos²α = 1",
      "szinusztétel: a/sin α = b/sin β = c/sin γ",
      "koszinusztétel: c² = a² + b² - 2ab·cos γ",
      "nevezetes szögek szögfüggvényei (30°, 45°, 60°)",
    ],
    source_refs: [
      { label: "Hegyesszögek szögfüggvényei I. (zanza.tv)", url: "https://zanza.tv/matematika/geometria/hegyesszogek-szogfuggvenyei-i" },
      { label: "Nevezetes tételek a derékszögű háromszögben (zanza.tv)", url: "https://zanza.tv/matematika/geometria/nevezetes-tetelek-derekszogu-haromszogben" },
      { label: "Trigonometria (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Trigonometria" },
      { label: "Derékszögű háromszögek (Érettségitételek.com)", url: "https://erettsegitetelek.com/2020/12/derekszogu-haromszogek/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hogyan definiáljuk egy hegyesszög szinuszát derékszögű háromszögben?",
        options: [
          "a szöggel szemközti befogó és az átfogó aránya",
          "a szög melletti befogó és az átfogó aránya",
          "a két befogó aránya",
          "az átfogó és a szög melletti befogó aránya"
        ],
        correct_answer: "a szöggel szemközti befogó és az átfogó aránya",
        explanation: "A szinusz a szöggel szemközti befogó és az átfogó arányaként van definiálva derékszögű háromszögben.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit mond ki a Pitagorasz-azonosság?",
        options: ["sin²α + cos²α = 1", "sin α + cos α = 1", "sin α · cos α = 1", "tg α = cos α"],
        correct_answer: "sin²α + cos²α = 1",
        explanation: "Bármely szögre igaz, hogy a szinuszának és koszinuszának négyzetösszege 1.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor alkalmazható a koszinusztétel egy háromszög megoldására?",
        options: [
          "ha két oldal és a közbezárt szög, vagy mindhárom oldal ismert",
          "csak derékszögű háromszögekre",
          "csak akkor, ha a háromszög egyenlő szárú",
          "csak ha egy szög és egy oldal ismert"
        ],
        correct_answer: "ha két oldal és a közbezárt szög, vagy mindhárom oldal ismert",
        explanation: "A koszinusztétel akkor használható, ha két oldal és a köztük lévő szög, vagy mindhárom oldal adott.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi sin 30° pontos értéke?",
        options: ["1/2", "√2/2", "√3/2", "1"],
        correct_answer: "1/2",
        explanation: "A 30°-os szög szinusza pontosan 1/2 — ez az egyik nevezetes szögfüggvényérték.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a koszinusztétel kapcsolata a Pitagorasz-tétellel?",
        options: [
          "ha a szög 90°, a koszinusztétel visszaadja a Pitagorasz-tételt",
          "nincs köztük kapcsolat",
          "a koszinusztétel csak egyenlő szárú háromszögre igaz",
          "a Pitagorasz-tétel a koszinusztétel általánosítása"
        ],
        correct_answer: "ha a szög 90°, a koszinusztétel visszaadja a Pitagorasz-tételt",
        explanation: "Mivel cos 90° = 0, a koszinusztétel γ=90° esetén c² = a² + b² alakra egyszerűsödik, ami éppen a Pitagorasz-tétel.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "tergeometria-testek-felszine-es-terfogata",
    title: "Térgeometria: testek felszíne és térfogata",
    level: "mindketto",
    theme: "Függvények, geometria, statisztika",
    order_index: 11,
    summary_markdown:
      "A térgeometria a háromdimenziós testek (hasábok, hengerek, gúlák, kúpok, gömbök) felszínének és térfogatának kiszámításával foglalkozik, amelynek képletei számos gyakorlati (építészeti, mérnöki) probléma megoldásának alapját adják.",
    content_markdown: `
## A hasáb

A **hasáb** olyan test, amelynek két, egymással párhuzamos és egybevágó sokszög alapja van (alaplapok), az oldallapjai pedig paralelogrammák. Ha a hasáb oldalélei merőlegesek az alaplapokra, **egyenes hasábról** beszélünk (ekkor az oldallapok téglalapok); ellenkező esetben **ferde hasábról**. A hasáb **térfogata**: V = alapterület · magasság (T·m). A hasáb **felszíne**: A = 2 · alapterület + palást (az oldallapok területének összege).

## A téglatest és a kocka

A **téglatest** olyan egyenes hasáb, amelynek minden lapja téglalap; élei három, egymásra páronként merőleges élcsoportba (a, b, c) sorolhatók. Térfogata: V = a·b·c, felszíne: A = 2(ab+bc+ca). A **kocka** speciális téglatest, amelynek minden éle egyenlő hosszú (a): térfogata V = a³, felszíne A = 6a². A téglatest (és így a kocka) **testátlójának** hossza a térbeli Pitagorasz-tétellel számítható ki.

## A henger

A **henger** olyan test, amelyet két párhuzamos, egybevágó kör (alaplapok) és egy, az alapköröket összekötő palást határol. Egyenes körhenger esetén a térfogat: **V = r²π · m** (ahol r az alapkör sugara, m a magasság), a felszín pedig: **A = 2r²π + 2rπ·m** (a két alapkör területe plusz a palást — a palást egy téglalappá kiteríthető, amelynek egyik oldala a kör kerülete, 2rπ, másik oldala a magasság, m).

## A gúla

A **gúla** olyan test, amelynek egy sokszög alapja van, és az alaplap minden csúcsát egy közös, az alaplapon kívüli pont (csúcs) köti össze. A gúla térfogata: **V = (T·m) / 3**, ahol T az alapterület, m a gúla magassága (a csúcsból az alaplapra állított merőleges hossza) — vagyis egy gúla térfogata egyharmada egy vele azonos alapterületű és magasságú hasáb térfogatának.

## A kúp

A **kúp** olyan test, amelynek egy kör az alapja, és az alapkör minden pontját egy közös csúcs köti össze. Az egyenes körkúp térfogata: **V = (r²π · m) / 3** (a gúlához hasonlóan a megfelelő henger térfogatának harmada). A kúp felszíne: A = r²π + rπ·a, ahol a az alkotó (a csúcstól az alapkör kerületéig húzott szakasz) hossza.

## A gömb

A **gömb** azon térbeli pontok halmaza, amelyek egy adott ponttól (a középponttól) adott távolságra (a sugárra, r) helyezkednek el. A gömb térfogata: **V = (4/3) · r³ · π**, a gömb felszíne: **A = 4 · r² · π**.

## A hasonló testek

Ha két test **hasonló** (egymás nagyításával vagy kicsinyítésével egymásba vihetők), és a hasonlósági arány k, akkor a **felszíneik aránya k²**, a **térfogataik aránya pedig k³**. Ez az összefüggés kulcsfontosságú olyan feladatokban, ahol egy test méretének megváltozása esetén kell meghatározni a felszín vagy a térfogat változását.

## Jelentősége

A térgeometriai testek felszín- és térfogatszámítási képleteinek ismerete nélkülözhetetlen gyakorlati eszköz: az építészeti és mérnöki tervezéstől (anyagszükséglet, űrtartalom meghatározása) a mindennapi élet számításain át (pl. egy tartály, egy csomagolás méretezése) számos területen alkalmazandó.
`,
    key_concepts: [
      "hasáb térfogata és felszíne (V = T·m)",
      "henger térfogata (V = r²π·m) és felszíne",
      "gúla és kúp térfogata (a hasáb/henger harmada)",
      "gömb térfogata (4/3·r³·π) és felszíne (4r²π)",
      "hasonló testek felszín- és térfogatarányai (k² és k³)",
    ],
    source_refs: [
      { label: "Térgeometria (Mateking)", url: "https://www.mateking.hu/matek-12-osztaly/tergeometria" },
      { label: "Testek térfogata és felszíne (Mateking)", url: "https://www.mateking.hu/felsos-matek-teljes/testek-terfogata-es-felszine" },
      { label: "Hasáb (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Hasáb" },
      { label: "Térgeometria (Matekarcok)", url: "https://matekarcok.hu/kategoria/matek-temakorok/geometria/tergeometria/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a hasáb térfogatának képlete?",
        options: ["V = alapterület · magasság", "V = alapterület · magasság / 3", "V = 4/3 · r³ · π", "V = kerület · magasság"],
        correct_answer: "V = alapterület · magasság",
        explanation: "A hasáb térfogata az alapterület és a magasság szorzata.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a gömb térfogatának képlete?",
        options: ["V = (4/3) · r³ · π", "V = r² · π · m", "V = 4 · r² · π", "V = r³ · π / 3"],
        correct_answer: "V = (4/3) · r³ · π",
        explanation: "A gömb térfogatának képlete V = (4/3)·r³·π, ahol r a gömb sugara.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan aránylik egy gúla térfogata egy azonos alapterületű és magasságú hasáb térfogatához?",
        options: ["a gúla térfogata a hasáb térfogatának harmada", "egyenlő a kettő", "a gúla térfogata kétszerese a hasábénak", "a gúla térfogata a hasáb felével egyenlő"],
        correct_answer: "a gúla térfogata a hasáb térfogatának harmada",
        explanation: "A gúla térfogata (T·m)/3, ami az azonos alapterületű és magasságú hasáb (T·m) térfogatának harmada.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha két hasonló test hasonlósági aránya 2, mekkora a térfogataik aránya?",
        options: ["8", "2", "4", "16"],
        correct_answer: "8",
        explanation: "Hasonló testeknél a térfogatok aránya a hasonlósági arány köbével egyezik meg: 2³ = 8.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a kocka térfogatának képlete, ha éle a?",
        options: ["V = a³", "V = a²", "V = 6a²", "V = a · 6"],
        correct_answer: "V = a³",
        explanation: "A kocka minden éle egyenlő (a), térfogata a három él szorzata: V = a·a·a = a³.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "valoszinusegszamitas-es-statisztika",
    title: "Valószínűségszámítás és statisztika",
    level: "mindketto",
    theme: "Függvények, geometria, statisztika",
    order_index: 12,
    summary_markdown:
      "A valószínűségszámítás a véletlen jelenségek törvényszerűségeit vizsgálja a kedvező és összes eset arányával, míg a statisztika az adatok gyűjtésével, rendszerezésével és jellemző mutatókkal (átlag, medián, módusz, szórás) történő elemzésével foglalkozik.",
    content_markdown: `
## A véletlen esemény és a klasszikus valószínűségi modell

A **valószínűségszámítás** olyan véletlen tömegjelenségekkel (kísérletekkel) foglalkozik, amelyek kimenetele előre nem határozható meg biztosan, de azonos körülmények között tetszőlegesen sokszor megismételhetők. A **klasszikus valószínűségi modellben** (amikor minden kimenetel egyenlő eséllyel következhet be) egy esemény valószínűségét a **kedvező esetek számának** és az **összes lehetséges eset számának** hányadosaként definiáljuk: **P(A) = kedvező esetek száma / összes eset száma**.

## Az események és a köztük lévő műveletek

Egy véletlen kísérlet lehetséges kimeneteleit **eseménytérnek** nevezzük, egy adott kimenetelt vagy kimenetelek egy csoportját pedig **eseménynek**. Az eseményekkel a halmazokhoz hasonló műveleteket végezhetünk: két esemény **uniója** ("A vagy B bekövetkezik"), **metszete** ("A és B is bekövetkezik"), és egy esemény **ellentett eseménye** ("A nem következik be", jele: Ā). Két esemény **egymást kizáró (diszjunkt)**, ha nem következhetnek be egyszerre.

## A valószínűség alaptulajdonságai

A valószínűség mindig egy **0 és 1 közötti** szám (vagy százalékban kifejezve 0% és 100% között): P(A) = 0 azt jelenti, hogy az esemény lehetetlen, P(A) = 1 azt, hogy biztos. Egy esemény és ellentett eseményének valószínűsége összesen 1: **P(A) + P(Ā) = 1**. Ha két esemény egymást kizáró, uniójuk valószínűsége az egyes valószínűségek összege: P(A ∪ B) = P(A) + P(B).

## A kombinatorikus valószínűségi modell

Sok valószínűségszámítási feladat a **kombinatorika** eszközeivel oldható meg: a kedvező és az összes eset számának meghatározásához gyakran permutációkat, variációkat vagy kombinációkat kell számolnunk. Például egy lottóhúzás nyerési esélyének kiszámítása kombinációkkal történik: a kedvező kombinációk száma osztva az összes lehetséges kombináció számával.

## A mintavétel: visszatevéssel és visszatevés nélkül

A valószínűségi modellekben fontos megkülönböztetni a **visszatevéses mintavételt** (amikor egy kihúzott elemet visszateszünk, mielőtt a következőt húznánk, így minden húzásnál ugyanazok a feltételek állnak fenn) a **visszatevés nélküli mintavételtől** (amikor a kihúzott elemeket nem tesszük vissza, így a következő húzás valószínűségei megváltoznak az előzőekhez képest).

## A statisztika alapfogalmai

A **statisztika** az adatok gyűjtésével, rendszerezésével, bemutatásával és elemzésével foglalkozó tudományterület. Az adatok jellemzésére **középértékeket** és **szóródási mutatókat** használunk. A **számtani átlag** az adatok összegének és számuknak a hányadosa. A **medián** a nagyság szerint sorba rendezett adatsor középső eleme (páros elemszám esetén a két középső elem átlaga). A **módusz** a leggyakrabban előforduló érték. Ezek a mutatók különböző szempontból jellemzik az adatok "közepét", és eltérő adatsoroknál eltérő mértékben lehetnek informatívak (pl. szélsőséges kiugró értékek esetén a medián stabilabb jellemző, mint az átlag).

## A szóródás mérése

Az adatok "szétszóródásának" jellemzésére szolgál a **terjedelem** (a legnagyobb és a legkisebb érték különbsége), valamint a **szórás**, amely az egyes adatok átlagtól való eltérésének (átlagos) mértékét fejezi ki — minél nagyobb a szórás, annál inkább "szétszórtak" az adatok az átlag körül. Az adatok ábrázolására gyakran használt eszköz a **dobozdiagram (box plot)**, amely az adatsor mediánját, kvartiliseit és szélsőértékeit szemlélteti egyetlen ábrán.

## Jelentősége

A valószínűségszámítás és a statisztika ismerete napjaink egyik legfontosabb, gyakorlatban is nélkülözhetetlen matematikai eszköztára: ez teszi lehetővé a véletlen jelenségek (időjárás-előrejelzés, biztosítási kockázatok, orvosi vizsgálatok) és a nagy adathalmazok (közvélemény-kutatások, tudományos mérések, gazdasági mutatók) tudományosan megalapozott elemzését és értelmezését.
`,
    key_concepts: [
      "klasszikus valószínűségi modell: P(A) = kedvező/összes eset",
      "esemény, ellentett esemény, egymást kizáró események",
      "visszatevéses és visszatevés nélküli mintavétel",
      "átlag, medián, módusz",
      "terjedelem és szórás",
    ],
    source_refs: [
      { label: "Valószínűség-számítás (zanza.tv)", url: "https://zanza.tv/matematika/valoszinuseg-statisztika/valoszinuseg-szamitas" },
      { label: "Statisztika II. (zanza.tv)", url: "https://zanza.tv/matematika/valoszinuseg-statisztika/statisztika-ii" },
      { label: "Valószínűségszámítás (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Valószínűségszámítás" },
      { label: "Statisztika feladatok a matek érettségiben – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/statisztika-feladatok-a-matek-erettsegiben/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hogyan definiáljuk a klasszikus valószínűségi modellben egy esemény valószínűségét?",
        options: [
          "a kedvező esetek számának és az összes lehetséges eset számának hányadosaként",
          "a kedvező esetek számának négyzeteként",
          "az összes eset számának és a kedvező esetek számának különbségeként",
          "mindig 1/2-ként"
        ],
        correct_answer: "a kedvező esetek számának és az összes lehetséges eset számának hányadosaként",
        explanation: "A klasszikus valószínűségi modellben P(A) = kedvező esetek száma / összes eset száma, feltéve, hogy minden kimenetel egyenlő eséllyel következik be.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi P(A) + P(Ā) értéke bármely A eseményre?",
        options: ["1", "0", "0,5", "2"],
        correct_answer: "1",
        explanation: "Egy esemény és ellentett eseményének valószínűségei mindig összeadódnak 1-re.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a medián?",
        options: [
          "a nagyság szerint sorba rendezett adatsor középső eleme",
          "a leggyakrabban előforduló érték",
          "az adatok összegének és számuknak a hányadosa",
          "a legnagyobb és legkisebb érték különbsége"
        ],
        correct_answer: "a nagyság szerint sorba rendezett adatsor középső eleme",
        explanation: "A medián a rendezett adatsor középső eleme (páros elemszám esetén a két középső elem átlaga).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a visszatevéses és a visszatevés nélküli mintavétel között?",
        options: [
          "visszatevésnél a kihúzott elemet visszatesszük, így minden húzás azonos feltételek mellett történik",
          "nincs közöttük különbség",
          "visszatevés nélkül végtelen sok elemet lehet húzni",
          "visszatevéses mintavétel csak véges halmazoknál értelmezhető"
        ],
        correct_answer: "visszatevésnél a kihúzott elemet visszatesszük, így minden húzás azonos feltételek mellett történik",
        explanation: "Visszatevéses mintavételnél minden húzás azonos valószínűségi feltételek mellett zajlik, mert a kihúzott elemet visszatesszük.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki a szórás egy adatsorban?",
        options: [
          "az adatok átlagtól való eltérésének átlagos mértékét",
          "az adatok legnagyobb és legkisebb értékének különbségét",
          "a leggyakoribb értéket",
          "az adatok összegét"
        ],
        correct_answer: "az adatok átlagtól való eltérésének átlagos mértékét",
        explanation: "A szórás azt mutatja meg, mennyire szóródnak szét az adatok az átlag körül; minél nagyobb, annál nagyobb a szóródás.",
        difficulty: 2,
      },
    ],
  },
];
