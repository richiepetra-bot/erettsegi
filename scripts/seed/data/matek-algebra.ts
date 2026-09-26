import { TopicSeed } from "./angol";

export const matekAlgebraTopics: TopicSeed[] = [
  {
    slug: "halmazok-es-halmazmuveletek",
    title: "Halmazok és halmazműveletek",
    level: "mindketto",
    theme: "Algebra és számelmélet",
    order_index: 1,
    summary_markdown:
      "A halmaz jól meghatározott, különböző dolgok (elemek) összessége; a halmazokkal végzett alapműveletek (unió, metszet, különbség, komplementer) a matematika egyik legalapvetőbb, a többi terület (logika, valószínűségszámítás, függvények) számára is nélkülözhetetlen eszközrendszerét adják.",
    content_markdown: `
## A halmaz fogalma

A **halmaz** a matematika egyik alapfogalma: jól meghatározott, egymástól különböző dolgok (elemek) összessége, amelyről minden objektumról egyértelműen eldönthető, hogy hozzátartozik-e a halmazhoz vagy sem. Egy halmazt megadhatunk elemeinek felsorolásával (pl. A = {1, 2, 3, 4}), egy tulajdonság megadásával (pl. B = {páros számok, amelyek 10-nél kisebbek}), vagy Venn-diagrammal (szemléltető ábrával).

## Halmazok közötti alapvető viszonyok

Két halmaz **egyenlő**, ha pontosan ugyanazok az elemeik. Egy halmaz **részhalmaza** egy másiknak (A ⊆ B), ha A minden eleme B-nek is eleme. Az **üres halmaz** (∅) egyetlen elemet sem tartalmaz, és minden halmaznak részhalmaza. Egy halmaz **elemszáma (számossága)** a benne lévő elemek számát jelenti; véges halmaz esetén ez egy természetes szám, de léteznek végtelen halmazok is (pl. a természetes számok halmaza).

## Az alaphalmaz és a komplementer

A feladatok megoldásához gyakran szükség van egy **alaphalmazra (univerzumra)**, amely tartalmazza az összes szóba jöhető elemet. Egy adott A halmaz **komplementere (kiegészítő halmaza)** az alaphalmaz azon elemeiből áll, amelyek nem tartoznak A-hoz — jelölése: A' vagy Ā.

## A halmazműveletek

A halmazokkal alapvető **műveleteket** végezhetünk. Az **unió (egyesítés, A ∪ B)** azokat az elemeket tartalmazza, amelyek A-hoz vagy B-hez (vagy mindkettőhöz) tartoznak. A **metszet (közös rész, A ∩ B)** azokat az elemeket tartalmazza, amelyek egyszerre tartoznak A-hoz és B-hez is. A **különbség (A \\ B)** az A halmaz azon elemeiből áll, amelyek nem tartoznak B-hez. Ha A ∩ B = ∅, azaz a két halmaznak nincs közös eleme, a halmazokat **diszjunktnak** nevezzük.

## A halmazműveletek szemléltetése Venn-diagrammal

A halmazműveletek szemléltetésére széles körben használjuk a **Venn-diagramot**, amely körökkel (vagy más zárt görbékkel) ábrázolja a halmazokat egy közös alaphalmazon belül, és az egyes műveletek eredményét a körök átfedő vagy nem átfedő területeivel jeleníti meg. Ez a szemléltetés nemcsak didaktikailag hasznos, hanem konkrét feladatok (pl. logikai szitaformula, elemszámok kiszámítása) megoldásában is nélkülözhetetlen.

## Az elemszámok közötti összefüggés (szitaformula)

Két véges halmaz uniójának elemszámára érvényes az alapvető összefüggés: **|A ∪ B| = |A| + |B| - |A ∩ B|**, vagyis az unió elemszámát úgy kapjuk, hogy összeadjuk a két halmaz elemszámát, majd levonjuk a közös rész elemszámát (mivel azt kétszer számoltuk). Ez az összefüggés — amelyet **szitaformulának (befoglalás-kizárás elvének)** is neveznek — általánosítható három vagy több halmaz esetére is, és számos gyakorlati (statisztikai, kombinatorikai) feladat megoldásának alapja.

## Nevezetes számhalmazok

A matematika számos **nevezetes számhalmazt** különböztet meg, amelyek egymás bővítéseként épülnek fel: a **természetes számok (ℕ)**, az **egész számok (ℤ)**, a **racionális számok (ℚ, a törtként felírható számok)**, a **valós számok (ℝ, amelyek a racionális és az irracionális számokat egyaránt tartalmazzák)**. Ezek a halmazok egymás valódi részhalmazai: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.

## A halmazelmélet alkalmazásai

A halmazelmélet nemcsak önmagában fontos terület, hanem a matematika szinte minden ágának (logika, függvények, valószínűségszámítás, kombinatorika) alapját is képezi: egy függvény értelmezési tartománya és értékkészlete halmazokkal írható le, a valószínűségszámításban az eseményeket halmazokként kezeljük, a logikai műveletek pedig szoros analógiát mutatnak a halmazműveletekkel (Boole-algebra).

## Jelentősége

A halmazok és a halmazműveletek ismerete alapvető matematikai gondolkodási eszköz: ez teszi lehetővé, hogy pontosan és egyértelműen fogalmazzunk meg matematikai állításokat és összefüggéseket, és ez az alapja számos további matematikai terület (logika, kombinatorika, függvények, valószínűségszámítás) fogalomrendszerének is.
`,
    key_concepts: [
      "halmaz, elem, részhalmaz",
      "unió, metszet, különbség, komplementer",
      "diszjunkt halmazok",
      "Venn-diagram",
      "szitaformula: |A ∪ B| = |A| + |B| - |A ∩ B|",
    ],
    source_refs: [
      { label: "Halmazelmélet (zanza.tv)", url: "https://zanza.tv/matematika/gondolkodasi-es-megismeresi-modszerek/halmazelmelet" },
      { label: "Halmazműveletek (zanza.tv)", url: "https://zanza.tv/matematika/gondolkodasi-es-megismeresi-modszerek/halmazmuveletek" },
      { label: "Halmaz (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Halmaz" },
      { label: "Halmazok – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/halmazok/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az A ∩ B jelölés?",
        options: [
          "az A és B halmazok közös részét (metszetét)",
          "az A és B halmazok egyesítését",
          "az A halmaz komplementerét",
          "az A és B halmazok különbségét"
        ],
        correct_answer: "az A és B halmazok közös részét (metszetét)",
        explanation: "Az A ∩ B jelölés a metszetet jelenti: azokat az elemeket, amelyek egyszerre tartoznak A-hoz és B-hez is.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor diszjunkt két halmaz?",
        options: [
          "ha nincs közös elemük (A ∩ B = ∅)",
          "ha minden elemük közös",
          "ha az egyik halmaz üres",
          "ha egyenlő az elemszámuk"
        ],
        correct_answer: "ha nincs közös elemük (A ∩ B = ∅)",
        explanation: "Két halmaz akkor diszjunkt, ha metszetük az üres halmaz, azaz nincs közös elemük.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha |A| = 8, |B| = 5, és |A ∩ B| = 3, mennyi |A ∪ B|?",
        options: ["10", "13", "8", "3"],
        correct_answer: "10",
        explanation: "A szitaformula szerint |A ∪ B| = |A| + |B| - |A ∩ B| = 8 + 5 - 3 = 10.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik számhalmazok közötti tartalmazás igaz?",
        options: ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ", "ℝ ⊂ ℚ ⊂ ℤ ⊂ ℕ", "ℚ ⊂ ℕ ⊂ ℤ ⊂ ℝ", "ℤ ⊂ ℕ ⊂ ℝ ⊂ ℚ"],
        correct_answer: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",
        explanation: "A természetes számok részhalmazai az egész számoknak, azok a racionális számoknak, azok pedig a valós számoknak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az A halmaz komplementere (A') egy adott alaphalmazon belül?",
        options: [
          "az alaphalmaz azon elemeit, amelyek nem tartoznak A-hoz",
          "az A halmaz összes elemét",
          "az A és az alaphalmaz közös részét",
          "az üres halmazt"
        ],
        correct_answer: "az alaphalmaz azon elemeit, amelyek nem tartoznak A-hoz",
        explanation: "A komplementer az alaphalmaznak azokat az elemeit tartalmazza, amelyek nincsenek benne A-ban.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "logika-es-allitasok",
    title: "Logika és állítások",
    level: "mindketto",
    theme: "Algebra és számelmélet",
    order_index: 2,
    summary_markdown:
      "A matematikai logika az igaz vagy hamis értékkel rendelkező kijelentésekkel (állításokkal) és azok logikai műveletekkel (negáció, konjunkció, diszjunkció, implikáció) történő összekapcsolásával foglalkozik, megalapozva a matematikai bizonyítások szigorú felépítését.",
    content_markdown: `
## A kijelentés (állítás) fogalma

A matematikai logika alapfogalma a **kijelentés (állítás)**: olyan mondat, amelyről egyértelműen eldönthető, hogy igaz vagy hamis, de nem lehet egyszerre mindkettő. Például "17 prímszám" igaz kijelentés, "4 páratlan szám" hamis kijelentés, míg a "Hány óra van?" kérdő mondat nem kijelentés, mert nincs igazságértéke.

## A negáció (tagadás)

A **negáció (tagadás)** egyváltozós logikai művelet: egy P állítás negációja (¬P, "nem P") pontosan akkor igaz, ha P hamis, és fordítva. Például a "Ma esik az eső" állítás negációja: "Ma nem esik az eső."

## A konjunkció és a diszjunkció

A **konjunkció (és-kapcsolat, P ∧ Q)** akkor és csak akkor igaz, ha mindkét állítás (P is és Q is) igaz. A **diszjunkció (vagy-kapcsolat, P ∨ Q)** akkor igaz, ha legalább az egyik állítás (P vagy Q, vagy mindkettő) igaz — ez a matematikai "vagy" a hétköznapitól eltérően **megengedő** jellegű (nem zárja ki, hogy mindkét állítás egyszerre igaz legyen).

## Az implikáció

Az **implikáció (ha-akkor kapcsolat, P ⇒ Q)** kijelentése akkor hamis, ha P igaz, de Q hamis — minden más esetben igaz. Az implikációt gyakran fogalmazzuk meg úgy, hogy "P **elégséges feltétele** Q-nak" (ha P teljesül, akkor Q biztosan teljesül), illetve "Q **szükséges feltétele** P-nek" (Q teljesülése nélkül P nem teljesülhet). Ha P ⇒ Q és Q ⇒ P is igaz, akkor a két állítás **ekvivalens** (P ⇔ Q, "P akkor és csak akkor, ha Q") — ekkor P szükséges és elégséges feltétele Q-nak.

## Az igazságtáblázat

A logikai műveletek pontos jelentését **igazságtáblázattal** ábrázolhatjuk, amely felsorolja az összes lehetséges igazságérték-kombinációt a bemeneti állításokra, és megadja hozzájuk a művelet eredményét. Az igazságtáblázatok segítségével bizonyítható, hogy két, formailag különböző logikai kifejezés valójában logikailag ekvivalens-e egymással (pl. De Morgan-azonosságok: ¬(P ∧ Q) = ¬P ∨ ¬Q).

## Az egzisztenciális és univerzális kvantor

A matematikai állítások gyakran tartalmaznak **kvantorokat**: az **univerzális kvantor** ("minden", jele: ∀) azt állítja, hogy egy tulajdonság a vizsgált halmaz minden elemére igaz; az **egzisztenciális kvantor** ("van olyan", jele: ∃) azt állítja, hogy létezik legalább egy olyan elem, amelyre a tulajdonság igaz. Egy univerzális állítás cáfolatához elegendő egyetlen **ellenpéldát** találni.

## A bizonyítási módszerek

A matematikai állítások igazolására több **bizonyítási módszert** alkalmazunk. A **direkt bizonyítás** a feltételekből lépésről lépésre, logikai következtetésekkel jut el az állításig. Az **indirekt bizonyítás** feltételezi az állítás tagadását, majd ebből ellentmondásra jut, ami igazolja az eredeti állítást. A **teljes indukció** természetes számokra vonatkozó állítások bizonyítására szolgál: igazoljuk az állítást az első esetre (n=1), majd megmutatjuk, hogy ha igaz egy n-re, akkor igaz n+1-re is — ebből következik, hogy minden n-re igaz.

## Jelentősége

A matematikai logika és a bizonyítási módszerek ismerete alapvető a matematika szigorú, ellentmondásmentes felépítéséhez: ez teszi lehetővé, hogy egyértelműen megfogalmazzuk és bebizonyítsuk a matematikai állításokat, és ez a gondolkodásmód a matematikán túl is (informatika, jog, tudományos érvelés) széles körben alkalmazható.
`,
    key_concepts: [
      "kijelentés (állítás) és igazságérték",
      "negáció, konjunkció, diszjunkció",
      "implikáció, szükséges és elégséges feltétel",
      "univerzális és egzisztenciális kvantor",
      "direkt, indirekt bizonyítás és teljes indukció",
    ],
    source_refs: [
      { label: "Logikai műveletek (zanza.tv)", url: "https://zanza.tv/matematika/gondolkodasi-es-megismeresi-modszerek/logikai-muveletek" },
      { label: "Matematikai logika (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Matematikai_logika" },
      { label: "A logika tárgya, eredete, kapcsolata a szaktudományokkal – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/a-logika-targya-eredete-kapcsolata-a-szaktudomanyokkal-a-formalis-a-matematikai-es-a-szimbolikus-logika/" },
      { label: "Matematikai logika: ítéletek, műveletek, kifejezések (Érettségi 2024)", url: "https://erettsegi.org/matematikai-logika-iteletek-muveletek-kifejezesek.html" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mikor igaz a P ∧ Q (konjunkció)?",
        options: [
          "csak akkor, ha mindkét állítás igaz",
          "ha legalább az egyik állítás igaz",
          "ha egyik állítás sem igaz",
          "mindig igaz"
        ],
        correct_answer: "csak akkor, ha mindkét állítás igaz",
        explanation: "A konjunkció (és-kapcsolat) csak akkor igaz, ha P is és Q is egyaránt igaz.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor hamis a P ⇒ Q implikáció?",
        options: [
          "amikor P igaz, de Q hamis",
          "amikor P hamis és Q igaz",
          "amikor mindkettő hamis",
          "soha nem hamis"
        ],
        correct_answer: "amikor P igaz, de Q hamis",
        explanation: "Az implikáció csak abban az egyetlen esetben hamis, ha az előtag (P) igaz, de az utótag (Q) hamis.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent, ha P ⇔ Q (ekvivalencia) igaz?",
        options: [
          "P szükséges és elégséges feltétele Q-nak (mindkét irányú implikáció igaz)",
          "csak P ⇒ Q igaz",
          "csak Q ⇒ P igaz",
          "P és Q mindig hamis"
        ],
        correct_answer: "P szükséges és elégséges feltétele Q-nak (mindkét irányú implikáció igaz)",
        explanation: "Az ekvivalencia azt jelenti, hogy P ⇒ Q és Q ⇒ P is igaz, vagyis a két állítás egymással egyenértékű.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan cáfolható meg egy univerzális ('minden elemre igaz') állítás?",
        options: [
          "egyetlen ellenpélda találásával",
          "csak az összes eset végigpróbálásával",
          "nem lehet megcáfolni",
          "egy másik univerzális állítás megfogalmazásával"
        ],
        correct_answer: "egyetlen ellenpélda találásával",
        explanation: "Egy univerzális állítás cáfolatához elegendő egyetlen olyan elemet (ellenpéldát) találni, amelyre a tulajdonság nem igaz.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik bizonyítási módszer alapja, hogy az állítás tagadásából ellentmondásra jutunk?",
        options: ["indirekt bizonyítás", "teljes indukció", "direkt bizonyítás", "Venn-diagram"],
        correct_answer: "indirekt bizonyítás",
        explanation: "Az indirekt bizonyítás során feltételezzük az állítás tagadását, majd ebből vezetünk le ellentmondást, ami igazolja az eredeti állítást.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "kombinatorika-alapjai",
    title: "Kombinatorika alapjai",
    level: "mindketto",
    theme: "Algebra és számelmélet",
    order_index: 3,
    summary_markdown:
      "A kombinatorika a véges halmazok elemeinek sorba rendezésével és kiválasztásával foglalkozik: a permutáció, a variáció és a kombináció alapfogalmai teszik lehetővé, hogy pontosan megszámoljuk egy adott feladat összes lehetséges esetét.",
    content_markdown: `
## A kombinatorika tárgya

A **kombinatorika** a véges halmazok elemeinek sorba rendezésével, csoportosításával és kiválasztásával, valamint az ilyen lehetőségek számának meghatározásával foglalkozó matematikai terület. A kombinatorikai gondolkodás alapkérdése mindig az: "hányféleképpen lehetséges" egy adott feladatot elvégezni — ehhez pontosan meg kell határozni, hogy a sorrend számít-e, és hogy egy elem felhasználható-e többször.

## A permutáció

A **permutáció** adott elemek egy meghatározott sorrendbe rendezését jelenti. Az **ismétlés nélküli permutáció** esetén n különböző elemet rendezünk sorba, a lehetséges sorrendek száma **n! (n faktoriális) = n · (n-1) · (n-2) · ... · 2 · 1**. Ha az elemek között vannak egyformák (pl. k1, k2, ..., kr darab egyforma elem az egyes csoportokban), akkor **ismétléses permutációról** beszélünk, amelynek képlete: n! / (k1! · k2! · ... · kr!).

## A variáció

A **variáció** azt jelenti, hogy n különböző elem közül kiválasztunk és sorba rendezünk k darabot (k ≤ n), ahol a sorrend számít. Az **ismétlés nélküli variáció** száma: n · (n-1) · ... · (n-k+1) = n! / (n-k)!. Az **ismétléses variáció** esetén az elemek többször is felhasználhatók a kiválasztás során, ekkor a lehetőségek száma n^k (n a k-adikon).

## A kombináció

A **kombináció** n különböző elem közül k darab kiválasztását jelenti, ahol a **sorrend nem számít** (csak az számít, mely elemeket választottuk ki, nem az, milyen sorrendben). Az ismétlés nélküli kombinációk száma a **binomiális együtthatóval** fejezhető ki: C(n,k) = n! / (k! · (n-k)!), amelyet "n alatt a k"-nak is neveznek.

## A sorrend számít vagy nem — a döntő kérdés

A kombinatorikai feladatok megoldásának kulcsa annak eldöntése, hogy **számít-e a sorrend**, és hogy **ismétlődhetnek-e az elemek**. Ha minden elemet felhasználunk és a sorrend számít: permutáció. Ha csak néhány elemet választunk ki és a sorrend számít: variáció. Ha csak néhány elemet választunk ki és a sorrend nem számít: kombináció.

## A Pascal-háromszög és a binomiális tétel

A binomiális együtthatók (a kombinációk száma) szemléletesen ábrázolhatók a **Pascal-háromszöggel**, amelyben minden szám a fölötte lévő két szám összege. A binomiális együtthatók szoros kapcsolatban állnak a **binomiális tétellel** is, amely (a+b)^n kifejtésének együtthatóit adja meg.

## Gyakorlati alkalmazások

A kombinatorika számos gyakorlati területen alkalmazható: a **lottó- és szerencsejátékok** nyerési esélyeinek kiszámításától kezdve a **jelszavak és kódok** lehetséges kombinációinak meghatározásán át az **informatikai algoritmusok** (rendezési és keresési eljárások) elemzéséig. A kombinatorika a valószínűségszámítás alapvető eszköze is: sok valószínűségi feladat végső soron kombinatorikai leszámlálásra vezethető vissza (kedvező esetek száma osztva az összes eset számával).

## Jelentősége

A kombinatorika alapfogalmainak (permutáció, variáció, kombináció) pontos megkülönböztetése és alkalmazása alapvető matematikai készség: ez teszi lehetővé, hogy szisztematikusan és hibamentesen számoljuk meg egy adott probléma összes lehetséges kimenetelét, ami nélkülözhetetlen a valószínűségszámításban és számos gyakorlati alkalmazásban is.
`,
    key_concepts: [
      "permutáció (ismétlés nélküli és ismétléses)",
      "variáció (ismétlés nélküli és ismétléses)",
      "kombináció és binomiális együttható",
      "n! (faktoriális) és C(n,k) képletek",
      "Pascal-háromszög",
    ],
    source_refs: [
      { label: "A kombinatorika alapjai (zanza.tv)", url: "https://zanza.tv/matematika/gondolkodasi-es-megismeresi-modszerek/kombinatorika-alapjai" },
      { label: "Kombinációk (zanza.tv)", url: "https://zanza.tv/matematika/gondolkodasi-es-megismeresi-modszerek/kombinaciok" },
      { label: "Kombinatorika (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Kombinatorika" },
      { label: "Kombinatorika – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/kombinatorika/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hányféleképpen rendezhető sorba 5 különböző könyv egy polcon?",
        options: ["120", "25", "20", "5"],
        correct_answer: "120",
        explanation: "5 különböző elem sorba rendezésének száma 5! = 5·4·3·2·1 = 120.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik kombinatorikai fogalomra jellemző, hogy a sorrend nem számít?",
        options: ["kombináció", "permutáció", "ismétléses variáció", "ismétlés nélküli variáció"],
        correct_answer: "kombináció",
        explanation: "A kombinációnál csak az számít, mely elemeket választottuk ki, a sorrend nem befolyásolja az eredményt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány négyjegyű kód képezhető a 0-9 számjegyekből, ha egy számjegy többször is szerepelhet?",
        options: ["10 000", "5 040", "10", "40"],
        correct_answer: "10 000",
        explanation: "Ismétléses variációról van szó: 10 lehetséges számjegy, 4 pozíció, tehát 10^4 = 10 000 lehetőség.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 10 fős csoportból hányféleképpen választható ki egy 3 fős bizottság (a sorrend nem számít)?",
        options: ["C(10,3) = 120", "10! = 3 628 800", "10 · 9 · 8 = 720", "10^3 = 1000"],
        correct_answer: "C(10,3) = 120",
        explanation: "Mivel a sorrend nem számít, kombinációt kell számolni: C(10,3) = 10!/(3!·7!) = 120.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a variáció és a kombináció között?",
        options: [
          "a variációnál számít a kiválasztott elemek sorrendje, a kombinációnál nem",
          "a kombinációnál mindig az összes elemet felhasználjuk",
          "nincs közöttük különbség",
          "a variáció csak ismétléssel értelmezhető"
        ],
        correct_answer: "a variációnál számít a kiválasztott elemek sorrendje, a kombinációnál nem",
        explanation: "A variációnál a kiválasztás sorrendje is számít, míg a kombinációnál csak az, mely elemek kerültek kiválasztásra.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "szamelmelet-oszthatosag-es-primszamok",
    title: "Számelmélet: oszthatóság és prímszámok",
    level: "mindketto",
    theme: "Algebra és számelmélet",
    order_index: 4,
    summary_markdown:
      "A számelmélet az egész számok, elsősorban az oszthatósági tulajdonságok, a prímszámok és a legnagyobb közös osztó/legkisebb közös többszörös vizsgálatával foglalkozik, amelynek csúcspontja a számelmélet alaptétele a prímtényezős felbontásról.",
    content_markdown: `
## Az oszthatóság fogalma

Egy **a** egész szám **osztható** egy **b** egész számmal (b ≠ 0), ha létezik olyan **c** egész szám, amelyre a = b · c. Ilyenkor b-t a **osztójának**, a-t b **többszörösének** nevezzük. Az oszthatóság vizsgálatához hasznosak az **oszthatósági szabályok**: egy szám osztható 2-vel, ha utolsó számjegye páros; osztható 5-tel, ha utolsó számjegye 0 vagy 5; osztható 3-mal (illetve 9-cel), ha számjegyeinek összege osztható 3-mal (illetve 9-cel); osztható 10-zel, ha utolsó számjegye 0.

## A prímszámok

A **prímszám** olyan 1-nél nagyobb természetes szám, amelynek pontosan két pozitív osztója van: 1 és önmaga (pl. 2, 3, 5, 7, 11, 13...). Az olyan 1-nél nagyobb számot, amelynek kettőnél több osztója van, **összetett számnak** nevezzük. Az 1 speciális eset: sem nem prím, sem nem összetett szám, mivel csak egy osztója van. **Eukleidész** már az ókorban bebizonyította, hogy **végtelen sok prímszám létezik**.

## Az Eratosztenészi szita

A prímszámok szisztematikus meghatározására szolgáló klasszikus módszer az **Eratosztenészi szita**: felsoroljuk 2-től egy adott n határig az egész számokat, majd sorra kihúzzuk a 2, 3, 5, 7... prímszámok többszöröseit (magukat a prímeket meghagyva) — a végén megmaradó, ki nem húzott számok lesznek a prímszámok.

## A számelmélet alaptétele

A **számelmélet alaptétele** kimondja, hogy minden 1-nél nagyobb egész szám a tényezők sorrendjétől eltekintve **egyértelműen felbontható prímszámok szorzatára** (prímtényezős felbontás). Például 60 = 2² · 3 · 5. Ez az egyértelmű felbonthatóság a számelmélet egyik legfontosabb, számos további tétel alapjául szolgáló eredménye.

## A legnagyobb közös osztó (LNKO) és a legkisebb közös többszörös (LKKT)

Két (vagy több) egész szám **legnagyobb közös osztója (LNKO, jelölése gyakran (a,b))** a legnagyobb olyan szám, amely mindkét számnak osztója. A **legkisebb közös többszörös (LKKT, jelölése [a,b])** a legkisebb olyan pozitív szám, amelynek mindkét szám osztója. Ha két szám LNKO-ja 1, a számokat **relatív prímnek** nevezzük. Az LNKO és az LKKT kiszámítható a prímtényezős felbontásból (a közös prímtényezők legkisebb, illetve legnagyobb hatványainak szorzataként), vagy hatékonyabban az **euklideszi algoritmussal** (egymást követő osztási maradékok képzésével).

## Az euklideszi algoritmus

Az **euklideszi algoritmus** két szám LNKO-jának meghatározására szolgáló hatékony eljárás: elosztjuk a nagyobb számot a kisebbel, majd a kisebb számot az így kapott maradékkal, és ezt addig folytatjuk, amíg a maradék nullává nem válik — az utolsó nem nulla maradék lesz az LNKO. Ez az algoritmus az egyik legrégebbi ismert, ma is aktívan alkalmazott matematikai eljárás, amely a modern kriptográfiában (pl. RSA-titkosítás) is kulcsszerepet játszik.

## Gyakorlati alkalmazások

Az oszthatóság és a prímszámok vizsgálata nemcsak elméleti jelentőségű: a modern **kriptográfia** (pl. az internetes adatforgalom titkosítása) nagymértékben épít a nagy prímszámok szorzatának nehéz felbonthatóságára, az LNKO és LKKT fogalma pedig gyakorlati problémák (pl. törtek egyszerűsítése, közös nevező keresése, periodikus jelenségek szinkronizálása) megoldásában is nélkülözhetetlen.

## Jelentősége

A számelmélet alapfogalmainak (oszthatóság, prímszámok, LNKO, LKKT) ismerete a matematika egyik legrégebbi és legszilárdabb alapokon nyugvó területe: ez alapozza meg a törtekkel, egyenletekkel és a modern információbiztonsággal kapcsolatos további matematikai ismereteket is.
`,
    key_concepts: [
      "oszthatóság és oszthatósági szabályok",
      "prímszám és összetett szám",
      "a számelmélet alaptétele (prímtényezős felbontás)",
      "legnagyobb közös osztó (LNKO) és legkisebb közös többszörös (LKKT)",
      "euklideszi algoritmus",
    ],
    source_refs: [
      { label: "Oszthatóság a pozitív egész számok körében (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/oszthatosag-pozitiv-egesz-szamok-koreben" },
      { label: "Prímszámok és összetett számok, LNKO, LKKT (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/primszamok-es-osszetett-szamok-lnko-lkkt" },
      { label: "Prímszám (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Prímszám" },
      { label: "Milyen számot nevezünk prímszámnak? Mikor relatív prím két szám? – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/milyen-szamot-nevezunk-primszamnak-mikor-mondjuk-hogy-ket-vagy-tobb-szam-relativ-prim/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a prímszám definíciója?",
        options: [
          "1-nél nagyobb természetes szám, amelynek pontosan két pozitív osztója van (1 és önmaga)",
          "bármely páratlan szám",
          "bármely 1-nél nagyobb szám",
          "olyan szám, amelynek nincs osztója"
        ],
        correct_answer: "1-nél nagyobb természetes szám, amelynek pontosan két pozitív osztója van (1 és önmaga)",
        explanation: "A prímszám definíció szerint 1-nél nagyobb, és pontosan két pozitív osztója van: 1 és önmaga.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit mond ki a számelmélet alaptétele?",
        options: [
          "minden 1-nél nagyobb egész szám egyértelműen felbontható prímszámok szorzatára",
          "minden szám osztható 2-vel",
          "végtelen sok összetett szám van",
          "az 1 prímszám"
        ],
        correct_answer: "minden 1-nél nagyobb egész szám egyértelműen felbontható prímszámok szorzatára",
        explanation: "A számelmélet alaptétele szerint minden 1-nél nagyobb egész szám a tényezők sorrendjétől eltekintve egyértelműen felírható prímszámok szorzataként.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a legnagyobb közös osztója 12-nek és 18-nak?",
        options: ["6", "3", "36", "1"],
        correct_answer: "6",
        explanation: "12 = 2²·3, 18 = 2·3²; a közös prímtényezők legkisebb hatványainak szorzata: 2·3 = 6.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent, ha két szám relatív prím?",
        options: [
          "legnagyobb közös osztójuk 1",
          "mindkettő prímszám",
          "összegük prímszám",
          "szorzatuk 1"
        ],
        correct_answer: "legnagyobb közös osztójuk 1",
        explanation: "Két számot akkor nevezünk relatív prímnek, ha a legnagyobb közös osztójuk 1, azaz nincs 1-nél nagyobb közös osztójuk.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik algoritmus szolgál két szám legnagyobb közös osztójának hatékony meghatározására?",
        options: ["az euklideszi algoritmus", "az Eratosztenészi szita", "a Pascal-háromszög", "a binomiális tétel"],
        correct_answer: "az euklideszi algoritmus",
        explanation: "Az euklideszi algoritmus egymást követő osztási maradékok képzésével hatékonyan meghatározza két szám LNKO-ját.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "egyenletek-es-egyenlotlensegek-megoldasa",
    title: "Egyenletek és egyenlőtlenségek megoldása",
    level: "mindketto",
    theme: "Algebra és számelmélet",
    order_index: 5,
    summary_markdown:
      "Az egyenletek és egyenlőtlenségek megoldása az algebra központi témája: az elsőfokú egyenletektől az egyenletrendszereken át a grafikus megoldási módszerekig terjedő eszköztár teszi lehetővé az ismeretlenek meghatározását adott feltételek mellett.",
    content_markdown: `
## Az egyenlet fogalma

Az **egyenlet** olyan nyitott mondat (kifejezés), amely egy vagy több ismeretlent tartalmaz, és két kifejezés egyenlőségét állítja. Az egyenlet **megoldása (gyöke)** az ismeretlen azon értéke (vagy értékei), amelyre behelyettesítve az egyenlet mindkét oldala azonos értéket vesz fel, vagyis igaz állítást kapunk. Az **alaphalmaz** azoknak az értékeknek a köre, amelyek közül az ismeretlen értékét keressük, az **igazsághalmaz (megoldáshalmaz)** pedig az alaphalmaznak azon elemeiből áll, amelyek kielégítik az egyenletet.

## Az elsőfokú egyenletek

Az **elsőfokú (lineáris) egyenlet** olyan egyenlet, amelyben az ismeretlen csak első hatványon szerepel (ax + b = 0 alakra hozható, ahol a ≠ 0). Az elsőfokú egyenletek megoldása **mérlegelvvel** történik: mindkét oldalhoz ugyanazt a mennyiséget hozzáadhatjuk vagy kivonhatjuk, illetve mindkét oldalt megszorozhatjuk vagy eloszthatjuk ugyanazzal a nullától különböző számmal, anélkül hogy az egyenlet megoldáshalmaza megváltozna (**ekvivalens átalakítások**).

## Az egyenletrendszerek megoldási módszerei

Két vagy több egyenletből álló **egyenletrendszer** megoldására több módszer létezik. A **behelyettesítéses módszer** során az egyik egyenletből kifejezzük az egyik ismeretlent, és behelyettesítjük a másik egyenletbe. Az **egyenlő együtthatók módszere** során az egyenleteket úgy szorozzuk meg (vagy osztjuk el) egy-egy számmal, hogy az egyik ismeretlen együtthatói ellentettek vagy egyenlők legyenek, majd összeadással vagy kivonással kiküszöböljük azt az ismeretlent. Az **összehasonlító módszer** során mindkét egyenletből kifejezzük ugyanazt az ismeretlent, majd a két kifejezést egyenlővé tesszük egymással.

## Az egyenlőtlenségek megoldása

Az **egyenlőtlenségek (<, >, ≤, ≥ relációt tartalmazó kifejezések)** megoldása hasonló elveken alapul, mint az egyenleteké, egy fontos különbséggel: ha az egyenlőtlenség mindkét oldalát egy **negatív számmal szorozzuk vagy osztjuk**, az egyenlőtlenség iránya megfordul. Az egyenlőtlenségek megoldáshalmaza jellemzően nem egyetlen szám, hanem egy **intervallum** (számhalmaz), amelyet számegyenesen ábrázolhatunk.

## A grafikus megoldási módszer

Az egyenletek és egyenlőtlenségek egy szemléletes megoldási módja a **grafikus (rajzos) módszer**: mindkét oldalt egy-egy függvényként értelmezzük, ábrázoljuk őket a koordináta-rendszerben, és a metszéspontok x-koordinátái adják az egyenlet megoldásait. Egyenlőtlenség esetén azt vizsgáljuk, mely x-értékeknél van az egyik függvény grafikonja a másik fölött vagy alatt.

## Az ellenőrzés fontossága

Az egyenletek megoldása során — különösen, ha négyzetre emeléssel, gyökjel eltávolításával vagy nevezővel való szorzással dolgozunk — előfordulhat, hogy **hamis gyökök (idegen gyökök)** keletkeznek, amelyek nem elégítik ki az eredeti egyenletet. Emiatt minden ilyen átalakítás után elengedhetetlen a kapott megoldások **visszahelyettesítéssel történő ellenőrzése** az eredeti egyenletbe.

## Szöveges feladatok egyenletekkel

Az egyenletek egyik legfontosabb gyakorlati alkalmazása a **szöveges feladatok** megoldása: a feladat szövegében megfogalmazott összefüggéseket egyenlet (vagy egyenletrendszer) formájában írjuk fel, majd a kapott matematikai modellt megoldjuk, végül az eredményt visszahelyettesítjük az eredeti szövegkörnyezetbe és ellenőrizzük annak értelmességét (pl. egy életkor vagy egy mennyiség nem lehet negatív).

## Jelentősége

Az egyenletek és egyenlőtlenségek megoldási technikáinak elsajátítása a matematika egyik legfontosabb, legszélesebb körben alkalmazható készsége: ez teszi lehetővé, hogy ismeretlen mennyiségeket határozzunk meg konkrét feltételek alapján, és ez az alapja a matematika szinte minden további területének (függvények, geometria, alkalmazott matematika).
`,
    key_concepts: [
      "egyenlet, alaphalmaz, megoldáshalmaz",
      "ekvivalens átalakítások és a mérlegelv",
      "egyenletrendszerek megoldási módszerei",
      "egyenlőtlenségek és az irányváltás negatív szorzónál",
      "grafikus megoldás és az ellenőrzés (hamis gyökök)",
    ],
    source_refs: [
      { label: "Egyenletek megoldása rajzosan (zanza.tv)", url: "https://zanza.tv/matematika/osszefuggesek-fuggvenyek-sorozatok/egyenletek-megoldasa-rajzosan" },
      { label: "Egyenlet (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Egyenlet" },
      { label: "Egyenlőtlenségek megoldása (Mateking)", url: "https://www.mateking.hu/matematika-kepletgyujtemeny/egyenlotlensegek-megoldasa" },
      { label: "Elsőfokú egyenletek (Mateking)", url: "https://www.mateking.hu/kozepiskolai-matek-teljes/elsofoku-egyenletek" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi történik egy egyenlőtlenség irányával, ha mindkét oldalt negatív számmal szorozzuk?",
        options: ["megfordul", "változatlan marad", "az egyenlőtlenség megszűnik", "egyenletté válik"],
        correct_answer: "megfordul",
        explanation: "Ha egy egyenlőtlenség mindkét oldalát negatív számmal szorozzuk vagy osztjuk, az egyenlőtlenség jele megfordul.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik módszerrel oldható meg egyenletrendszer úgy, hogy az egyik egyenletből kifejezett ismeretlent a másikba helyettesítjük?",
        options: ["behelyettesítéses módszer", "egyenlő együtthatók módszere", "grafikus módszer", "teljes indukció"],
        correct_answer: "behelyettesítéses módszer",
        explanation: "A behelyettesítéses módszer során az egyik egyenletből kifejezett ismeretlent helyettesítjük be a másik egyenletbe.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos ellenőrizni egy egyenlet megoldását négyzetre emelés után?",
        options: [
          "mert hamis (idegen) gyökök keletkezhetnek, amelyek nem elégítik ki az eredeti egyenletet",
          "mert az egyenletnek soha nincs megoldása",
          "mert négyzetre emelés után az egyenlet mindig hamis lesz",
          "nem szükséges ellenőrizni"
        ],
        correct_answer: "mert hamis (idegen) gyökök keletkezhetnek, amelyek nem elégítik ki az eredeti egyenletet",
        explanation: "A négyzetre emelés (és más nem ekvivalens átalakítások) hamis gyököket hozhatnak létre, ezért szükséges a visszahelyettesítéses ellenőrzés.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a grafikus megoldási módszer lényege egy egyenletnél?",
        options: [
          "mindkét oldalt függvényként ábrázoljuk, és a metszéspontok x-koordinátái adják a megoldásokat",
          "az egyenletet mindig algebrailag kell megoldani",
          "csak egyenlőtlenségeknél alkalmazható",
          "csak másodfokú egyenleteknél működik"
        ],
        correct_answer: "mindkét oldalt függvényként ábrázoljuk, és a metszéspontok x-koordinátái adják a megoldásokat",
        explanation: "A grafikus módszernél az egyenlet mindkét oldalát függvényként ábrázoljuk, és a grafikonok metszéspontjainak x-koordinátái adják a megoldásokat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az alaphalmaz szerepe egy egyenlet megoldásakor?",
        options: [
          "megadja azoknak az értékeknek a körét, amelyek közül az ismeretlen értékét keressük",
          "az egyenlet bal oldalát jelenti",
          "mindig a valós számok halmaza",
          "a megoldások számát adja meg"
        ],
        correct_answer: "megadja azoknak az értékeknek a körét, amelyek közül az ismeretlen értékét keressük",
        explanation: "Az alaphalmaz azoknak az értékeknek a halmaza, amelyek közül az egyenlet megoldását keressük.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "masodfoku-egyenletek-es-a-megoldokeplet",
    title: "Másodfokú egyenletek és a megoldóképlet",
    level: "mindketto",
    theme: "Algebra és számelmélet",
    order_index: 6,
    summary_markdown:
      "A másodfokú egyenlet (ax² + bx + c = 0) megoldására szolgáló megoldóképlet a diszkrimináns előjelétől függően nulla, egy vagy két valós gyököt ad, míg a Viète-formulák a gyökök és az együtthatók közötti közvetlen összefüggést fejezik ki.",
    content_markdown: `
## A másodfokú egyenlet fogalma

A **másodfokú egyenlet** általános alakja: **ax² + bx + c = 0**, ahol a, b, c valós számok és a ≠ 0 (ha a = 0 lenne, az egyenlet elsőfokúvá válna). A másodfokú egyenlet megoldásai (gyökei) azok az x értékek, amelyekre behelyettesítve az egyenlet baloldala nullát ad.

## A megoldóképlet

A másodfokú egyenlet gyökei a **megoldóképlettel** számíthatók ki:

**x₁,₂ = (-b ± √(b² - 4ac)) / (2a)**

Ez a képlet minden a ≠ 0 esetén alkalmazható, és a négyzetgyök alatti kifejezés előjelétől függően különböző számú valós megoldást ad.

## A diszkrimináns

A megoldóképletben szereplő **D = b² - 4ac** kifejezést **diszkriminánsnak** nevezzük, és ez dönti el a valós gyökök számát. Ha **D > 0**, az egyenletnek **két különböző valós gyöke** van. Ha **D = 0**, az egyenletnek **egy (kétszeres) valós gyöke** van (x₁ = x₂ = -b/2a). Ha **D < 0**, az egyenletnek **nincs valós gyöke** (a valós számok halmazán nem oldható meg, mivel negatív szám négyzetgyökét kellene venni).

## A Viète-formulák

A **Viète-formulák (gyökök és együtthatók összefüggése)** közvetlen kapcsolatot teremtenek a másodfokú egyenlet gyökei és együtthatói között, a megoldóképlet kiszámítása nélkül: a két gyök **összege: x₁ + x₂ = -b/a**, a két gyök **szorzata: x₁ · x₂ = c/a**. Ezek az összefüggések különösen hasznosak, ha nem magukat a gyököket kell meghatároznunk, hanem azokkal kapcsolatos kifejezéseket (pl. a gyökök négyzetösszegét) kell kiszámítanunk, vagy ha a gyökök ismeretében szeretnénk felírni az egyenletet.

## A gyöktényezős alak

Ha egy másodfokú egyenletnek x₁ és x₂ a gyökei, akkor a másodfokú kifejezés felírható **gyöktényezős alakban** is: **a(x - x₁)(x - x₂)**. Ez az alak különösen hasznos a másodfokú egyenlőtlenségek megoldásában és a másodfokú függvény zérushelyeinek szemléltetésében.

## A másodfokú egyenlet megoldásának egyéb módszerei

A megoldóképlet mellett bizonyos esetekben egyszerűbb módszerek is alkalmazhatók: a **szorzattá alakítás (faktorizálás)**, ha az egyenlet könnyen felírható gyöktényezős alakban; a **teljes négyzetté alakítás**, amely a megoldóképlet levezetésének alapja is; valamint a **grafikus módszer**, amelynél a másodfokú függvény (parabola) grafikonjának x-tengellyel való metszéspontjait keressük.

## Gyakorlati alkalmazások

A másodfokú egyenletek számos gyakorlati problémában jelennek meg: fizikai mozgások (pl. szabadesés, hajítás), területszámítási feladatok, optimalizálási problémák (pl. maximális terület vagy minimális költség meghatározása), valamint gazdasági modellek (pl. profitmaximalizálás) mind vezethetnek másodfokú egyenletekhez vagy egyenlőtlenségekhez.

## Jelentősége

A másodfokú egyenletek megoldóképletének és a hozzá kapcsolódó fogalmaknak (diszkrimináns, Viète-formulák, gyöktényezős alak) az ismerete a középiskolai matematika egyik központi témája: ez alapozza meg a másodfokú függvények, egyenlőtlenségek és számos alkalmazott matematikai probléma megoldását.
`,
    key_concepts: [
      "másodfokú egyenlet: ax² + bx + c = 0",
      "megoldóképlet: x = (-b ± √D) / (2a)",
      "diszkrimináns (D = b² - 4ac) és a gyökök száma",
      "Viète-formulák (gyökök összege és szorzata)",
      "gyöktényezős alak",
    ],
    source_refs: [
      { label: "A másodfokú egyenlet megoldóképlete (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/masodfoku-egyenlet-megoldokeplete" },
      { label: "Másodfokú egyenlet (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Másodfokú_egyenlet" },
      { label: "Mit értünk a másodfokú egyenlet diszkriminánsán? – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/mit-ertunk-a-masodfoku-egyenlet-diszkriminansan/" },
      { label: "Viète-formulák – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/viet-formulak/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a másodfokú egyenlet megoldóképlete?",
        options: [
          "x = (-b ± √(b² - 4ac)) / (2a)",
          "x = -b / a",
          "x = (b ± √(b² + 4ac)) / (2a)",
          "x = c / b"
        ],
        correct_answer: "x = (-b ± √(b² - 4ac)) / (2a)",
        explanation: "Ez a másodfokú egyenlet általános megoldóképlete, amely az a, b, c együtthatókból számítja ki a gyököket.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány valós gyöke van a másodfokú egyenletnek, ha a diszkrimináns negatív (D < 0)?",
        options: ["nulla (nincs valós gyök)", "egy", "kettő", "végtelen sok"],
        correct_answer: "nulla (nincs valós gyök)",
        explanation: "Negatív diszkrimináns esetén nem oldható meg az egyenlet a valós számok halmazán, mert negatív szám négyzetgyökét kellene venni.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejeznek ki a Viète-formulák?",
        options: [
          "a gyökök összegét (-b/a) és szorzatát (c/a)",
          "a diszkrimináns értékét",
          "a gyöktényezős alakot",
          "az egyenlet fokszámát"
        ],
        correct_answer: "a gyökök összegét (-b/a) és szorzatát (c/a)",
        explanation: "A Viète-formulák a gyökök és az együtthatók közötti közvetlen összefüggést fejezik ki: x₁+x₂ = -b/a és x₁·x₂ = c/a.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha D = 0 egy másodfokú egyenletben, hány (különböző) valós gyöke van?",
        options: ["egy (kétszeres gyök)", "kettő különböző", "nulla", "három"],
        correct_answer: "egy (kétszeres gyök)",
        explanation: "D = 0 esetén az egyenletnek egyetlen (kétszeres) valós gyöke van: x₁ = x₂ = -b/2a.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a gyöktényezős alak jelentése, ha x₁ és x₂ az ax²+bx+c=0 egyenlet gyökei?",
        options: [
          "a(x - x₁)(x - x₂)",
          "a(x + x₁)(x + x₂)",
          "(x₁ - x₂)²",
          "a · x₁ · x₂"
        ],
        correct_answer: "a(x - x₁)(x - x₂)",
        explanation: "A gyöktényezős alak a másodfokú kifejezést a gyökök segítségével szorzat alakban írja fel: a(x - x₁)(x - x₂).",
        difficulty: 2,
      },
    ],
  },
];
