import type { TopicSeed } from "./angol";

export const informatikaAlgoritmizalasProgramozasTopics: TopicSeed[] = [
  {
    slug: "alapveto-algoritmusok-kereses-rendezes",
    title: "Alapvető algoritmusok: keresés és rendezés",
    level: "mindketto",
    theme: "Algoritmizálás és adatmodellezés",
    order_index: 18,
    summary_markdown:
      "A keresési és rendezési algoritmusok az informatika legalapvetőbb, leggyakrabban használt eljárásai. Ez a tétel a lineáris és bináris keresést, valamint a buborékrendezést és a kiválasztásos rendezést mutatja be.",
    content_markdown: `
## Keresési algoritmusok

### Lineáris (szekvenciális) keresés

A **lineáris keresés** a legegyszerűbb módszer: az elemeket sorban, egyesével vizsgáljuk végig, amíg meg nem találjuk a keresett értéket, vagy végig nem értünk a listán. Bármilyen (rendezett vagy rendezetlen) adatszerkezeten működik.

- Legrosszabb esetben (ha az elem a végén van, vagy nincs is benne a listában) **n** összehasonlítást igényel egy n elemű listánál.
- Egyszerű, de nagy adathalmaznál lassú.

### Bináris (logaritmikus) keresés

A **bináris keresés** csak **rendezett** listán működik, de sokkal hatékonyabb: mindig a lista középső elemét vizsgálja, és a keresett érték nagysága alapján eldönti, hogy a bal vagy a jobb felében kell-e tovább keresnie, majd ezt a felezést ismétli.

- Egy n elemű, rendezett listában legfeljebb **log2(n)** lépésben megtalálja az elemet (vagy megállapítja, hogy nincs benne).
- Például egy 1000 elemű listában a lineáris keresés legrosszabb esetben 1000 lépést igényelhet, a bináris keresés viszont legfeljebb 10 lépésben (2^10 = 1024) célt ér.

## Rendezési algoritmusok

### Buborékrendezés (bubble sort)

A **buborékrendezés** a szomszédos elemeket hasonlítja össze, és ha nincsenek helyes sorrendben, megcseréli őket. Ezt a folyamatot addig ismétli, amíg a teljes lista rendezett nem lesz (egy teljes végigjárás során a legnagyobb elem "felbuborékol" a lista végére).

- Könnyen érthető, egyszerűen megvalósítható.
- Nagy adathalmaznál lassú: legrosszabb esetben kb. n²/2 összehasonlítást igényel.

### Kiválasztásos rendezés (selection sort)

A **kiválasztásos rendezés** minden lépésben megkeresi a rendezetlen rész legkisebb (vagy legnagyobb) elemét, és azt a rendezetlen rész elejére cseréli. Ezt ismétli, amíg az egész lista rendezett nem lesz.

- Szintén O(n²) időbonyolultságú, de kevesebb cserét igényel, mint a buborékrendezés.

### Beszúrásos rendezés (insertion sort)

A **beszúrásos rendezés** úgy dolgozik, mint amikor kártyalapokat rendezünk kézben: minden újabb elemet a már rendezett rész megfelelő helyére szúr be. Kis, majdnem rendezett listáknál nagyon hatékony.

## Az algoritmusok hatékonyságának összehasonlítása

Az algoritmusok hatékonyságát az elvégzett műveletek számának a bemenet méretétől (n) való függésével, az úgynevezett **időbonyolultsággal** (Big O jelölés) szokás jellemezni:

- lineáris keresés: O(n)
- bináris keresés: O(log n)
- buborék-, kiválasztásos, beszúrásos rendezés: O(n²)

Ez azt jelenti, hogy nagy adathalmaz esetén a bináris keresés és a hatékonyabb rendezési algoritmusok (pl. gyorsrendezés, összefésülő rendezés — ezekkel emelt szinten találkozhatunk részletesebben) drasztikusan gyorsabbak lehetnek, mint az egyszerű, "naiv" módszerek.

## Gyakorlati összefüggés: keresés előtt rendezés

Ha egy adathalmazon **sokszor** kell keresést végezni, gyakran megéri először **rendezni** az adatokat (még ha ez egyszeri többletmunkát is jelent), mert utána minden egyes keresés bináris kereséssel, sokkal gyorsabban elvégezhető, mintha minden alkalommal lineárisan kellene végigmenni a listán.

## Összefoglalás

A keresési és rendezési algoritmusok megértése alapozza meg a hatékony programozói gondolkodást: ugyanazt a feladatot (pl. egy elem megkeresése) sokféleképpen meg lehet oldani, de a választott módszer drasztikusan befolyásolja a program sebességét nagy adatmennyiség esetén.
`,
    key_concepts: [
      "lineáris keresés",
      "bináris keresés",
      "buborékrendezés",
      "kiválasztásos rendezés",
      "időbonyolultság (Big O)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen feltétele van a bináris keresés alkalmazásának?",
        options: [
          "A listának rendezettnek kell lennie",
          "A listának pontosan 100 elemből kell állnia",
          "A listának csak szöveges elemeket kell tartalmaznia",
          "Nincs semmilyen feltétele, bármilyen listán működik",
        ],
        correct_answer: "A listának rendezettnek kell lennie",
        explanation: "A bináris keresés csak rendezett listán működik helyesen, mert a középső elem alapján dönt, merre folytassa a keresést.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan működik a buborékrendezés alapötlete?",
        options: [
          "A szomszédos elemeket hasonlítja össze és cseréli meg, ha nincsenek helyes sorrendben",
          "Mindig a lista közepét vizsgálja",
          "Az elemeket véletlenszerűen keveri össze",
          "Csak a lista első és utolsó elemét cseréli meg",
        ],
        correct_answer: "A szomszédos elemeket hasonlítja össze és cseréli meg, ha nincsenek helyes sorrendben",
        explanation: "A buborékrendezés lényege a szomszédos elemek összehasonlítása és szükség esetén cseréje, amit ismételve a legnagyobb elem fokozatosan a lista végére 'buborékol'.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 1000 elemű rendezett listában hozzávetőleg hány lépésben talál meg egy elemet a bináris keresés legrosszabb esetben?",
        options: ["kb. 10 lépésben", "kb. 1000 lépésben", "kb. 500 lépésben", "kb. 100 lépésben"],
        correct_answer: "kb. 10 lépésben",
        explanation: "A bináris keresés log2(n) lépést igényel; 1000 elem esetén ez körülbelül 10 lépés (2^10 = 1024), szemben a lineáris keresés akár 1000 lépésével.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a kiválasztásos rendezés (selection sort) működését?",
        options: [
          "Minden lépésben megkeresi a rendezetlen rész legkisebb elemét, és a rendezetlen rész elejére helyezi",
          "Csak páros indexű elemeket rendez",
          "Kizárólag már rendezett listákon alkalmazható",
          "A lista utolsó elemét mindig törli",
        ],
        correct_answer: "Minden lépésben megkeresi a rendezetlen rész legkisebb elemét, és a rendezetlen rész elejére helyezi",
        explanation: "A kiválasztásos rendezés minden körben megkeresi a rendezetlen rész legkisebb (vagy legnagyobb) elemét, és azt a megfelelő helyre cseréli.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért érdemes egy adathalmazt előbb rendezni, ha azon sokszor kell keresést végezni?",
        options: [
          "Mert rendezett adaton bináris kereséssel sokkal gyorsabban (O(log n)) lehet keresni, mint lineárisan (O(n))",
          "Mert rendezés nélkül egyáltalán nem lehet keresést végezni",
          "Mert a rendezés csökkenti a lista elemeinek számát",
          "Mert a rendezetlen listák nem tárolhatók a memóriában",
        ],
        correct_answer: "Mert rendezett adaton bináris kereséssel sokkal gyorsabban (O(log n)) lehet keresni, mint lineárisan (O(n))",
        explanation: "Bár a rendezés egyszeri költséggel jár, utána minden egyes keresés jelentősen gyorsabb lehet bináris kereséssel, ami sok keresés esetén busásan megtérül.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "folyamatabrak-es-pszeudokod",
    title: "Folyamatábrák és pszeudokód",
    level: "mindketto",
    theme: "Algoritmizálás és adatmodellezés",
    order_index: 19,
    summary_markdown:
      "Az algoritmusok programozási nyelvtől független leírására két eszközt használunk: a vizuális folyamatábrát és a szöveges pszeudokódot. Mindkettő célja, hogy a megoldás logikáját érthetően, egyértelműen rögzítsük.",
    content_markdown: `
## Miért van szükség az algoritmusok leírására, mielőtt kódolnánk?

Mielőtt egy feladatot konkrét programozási nyelven (pl. Pythonban) megírnánk, érdemes előbb **megtervezni a megoldás logikáját** — ez csökkenti a hibázás esélyét, és programozási nyelvtől függetlenül is érthetővé teszi a megoldást mások (és önmagunk) számára.

## A folyamatábra (flowchart)

A **folyamatábra** szabványos geometriai alakzatokkal, nyilakkal összekötve ábrázolja az algoritmus lépéseit és a köztük lévő vezérlési kapcsolatokat:

- **ovális (lekerekített téglalap)**: a program kezdete és vége (Start / Stop).
- **téglalap**: egy művelet, utasítás (pl. "X := X + 1").
- **rombusz**: elágazás, feltétel vizsgálata (pl. "X > 10?"), amelyből két ág (Igen/Nem) indulhat ki.
- **paralelogramma**: be- vagy kimeneti művelet (pl. adat beolvasása vagy kiírása).
- **nyilak**: a végrehajtás sorrendjét, irányát jelölik.

A folyamatábra előnye, hogy **vizuálisan azonnal átlátható** a program szerkezete, különösen az elágazások és ciklusok esetén, de bonyolultabb algoritmusoknál nagyon hosszú és nehezen kezelhető lehet.

## A pszeudokód

A **pszeudokód** egy köztes, emberi nyelvhez közeli, de a programozási struktúrákat (elágazás, ciklus, változó) is tükröző, szöveges leírási forma, amely nem kötődik egyetlen konkrét programozási nyelvhez sem. Jellemző elemei:

- kulcsszavak: **HA...AKKOR...KÜLÖNBEN**, **CIKLUS...AMÍG**, **BEOLVAS**, **KIÍR**, **ELJÁRÁS**
- behúzásokkal jelzett blokkstruktúra (mely utasítások tartoznak egy elágazáshoz vagy ciklushoz)

### Példa pszeudokódra

Feladat: kérjünk be egy számot, és írjuk ki, hogy páros vagy páratlan.

\`\`\`
BEOLVAS(szam)
HA szam MOD 2 == 0 AKKOR
    KIÍR("A szám páros")
KÜLÖNBEN
    KIÍR("A szám páratlan")
VÉGE HA
\`\`\`

## Folyamatábra vs. pszeudokód — melyiket mikor használjuk?

- A **folyamatábra** jobban szemlélteti a vezérlési szerkezet vizuális "alakját", jó bemutatóknak, oktatásnak, egyszerűbb algoritmusoknak.
- A **pszeudokód** gyorsabban leírható, jobban skálázódik bonyolultabb algoritmusoknál, és közelebb áll a végső programkódhoz, így könnyebb belőle valódi programozási nyelvre "lefordítani".

## A három alapvető vezérlési szerkezet

Mindkét leírási mód ugyanazt a három alapszerkezetet fejezi ki, amelyekből — a strukturált programozás elmélete szerint (Böhm-Jacopini-tétel) — bármilyen algoritmus felépíthető:

1. **Szekvencia**: az utasítások egymás után, sorban hajtódnak végre.
2. **Szelekció (elágazás)**: a program a feltétel értékétől függően különböző utasítás(oka)t hajt végre.
3. **Iteráció (ciklus)**: egy utasítás vagy utasításblokk ismételt végrehajtása egy feltétel teljesüléséig.

## Összefoglalás

A folyamatábra és a pszeudokód nem "felesleges extra lépés" a programozás előtt, hanem a hibák korai kiszűrésének és az algoritmikus gondolkodás fejlesztésének kulcseszköze.
`,
    key_concepts: [
      "folyamatábra alakzatai",
      "pszeudokód",
      "szekvencia, szelekció, iteráció",
      "Böhm-Jacopini-tétel",
      "strukturált programozás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen alakzat jelöli a folyamatábrán az elágazást (feltétel vizsgálatát)?",
        options: ["rombusz", "téglalap", "ovális", "paralelogramma"],
        correct_answer: "rombusz",
        explanation: "A folyamatábrán a rombusz alakzat jelöli az elágazást, azaz egy feltétel vizsgálatát, amelyből két ág (Igen/Nem) indulhat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a pszeudokód fő jellemzője?",
        options: [
          "Emberi nyelvhez közeli, de programozási struktúrákat tükröző, nyelvfüggetlen leírási forma",
          "Egy konkrét programozási nyelv (pl. Python) hivatalos szintaxisa",
          "Kizárólag folyamatábrákból áll",
          "Csak matematikai képletek felírására alkalmas",
        ],
        correct_answer: "Emberi nyelvhez közeli, de programozási struktúrákat tükröző, nyelvfüggetlen leírási forma",
        explanation: "A pszeudokód egy programozási nyelvtől független, de annak logikáját (elágazás, ciklus) tükröző, emberi nyelvhez közeli leírási mód.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik HÁROM alapvető vezérlési szerkezetből építhető fel a strukturált programozás elmélete szerint bármilyen algoritmus?",
        options: [
          "szekvencia, szelekció, iteráció",
          "változó, függvény, osztály",
          "input, output, tárolás",
          "keresés, rendezés, szűrés",
        ],
        correct_answer: "szekvencia, szelekció, iteráció",
        explanation: "A Böhm-Jacopini-tétel szerint bármilyen algoritmus felépíthető szekvenciából (egymás utáni utasítások), szelekcióból (elágazás) és iterációból (ciklus).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért érdemes egy bonyolultabb algoritmust pszeudokóddal leírni, mielőtt egy konkrét programozási nyelven megírnánk?",
        options: [
          "Segít átgondolni és tisztázni a megoldás logikáját, csökkentve a kódolási hibák esélyét",
          "Mert a pszeudokód automatikusan lefordítható géppel futtatható programmá",
          "Mert a pszeudokód gyorsabban fut, mint a valódi program",
          "Mert enélkül a számítógép nem tudja értelmezni a programot",
        ],
        correct_answer: "Segít átgondolni és tisztázni a megoldás logikáját, csökkentve a kódolási hibák esélyét",
        explanation: "A pszeudokód (vagy folyamatábra) megírása a tervezési fázis eszköze: segít a logika tisztázásában, mielőtt a technikai megvalósítás (konkrét kód) elkezdődne.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor előnyösebb a folyamatábra a pszeudokóddal szemben?",
        options: [
          "Amikor a vezérlési szerkezetet vizuálisan, oktatási vagy bemutatási céllal szemléltetni akarjuk",
          "Amikor egy nagyon bonyolult, sok elágazású algoritmust kell tömören leírni",
          "Amikor közvetlenül futtatható programkódra van szükség",
          "A folyamatábra minden esetben jobb választás, mint a pszeudokód",
        ],
        correct_answer: "Amikor a vezérlési szerkezetet vizuálisan, oktatási vagy bemutatási céllal szemléltetni akarjuk",
        explanation: "A folyamatábra vizuális jellege miatt jól szemlélteti a vezérlési szerkezetet egyszerűbb algoritmusoknál és oktatási, bemutatási céllal, de bonyolult algoritmusoknál nehezen kezelhetővé válik.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "adattipusok-es-adatszerkezetek",
    title: "Adattípusok és adatszerkezetek (tömb, lista, verem, sor)",
    level: "emelt",
    theme: "Algoritmizálás és adatmodellezés",
    order_index: 20,
    summary_markdown:
      "A programozás során az adatokat típusuk és szervezésük szerint kell megválasztani. Ez a tétel az alapvető adattípusokat, valamint a tömb, lista, verem (stack) és sor (queue) adatszerkezeteket mutatja be.",
    content_markdown: `
## Egyszerű (primitív) adattípusok

Minden programozási nyelv definiál néhány alapvető, **egyszerű adattípust**:

- **egész szám (integer)**: pl. 5, -12, 1000 — tört rész nélküli szám.
- **valós/lebegőpontos szám (float/double)**: pl. 3.14, -0.5 — tizedestört értékek tárolására.
- **logikai (boolean)**: csak két értéket vehet fel: igaz (true) vagy hamis (false).
- **karakter (char)**: egyetlen betű, szám vagy szimbólum, pl. 'A', '7', '#'.
- **szöveg (string)**: karakterek sorozata, pl. "Szia, világ!".

## Összetett adatszerkezetek

Ha sok, összetartozó adatot kell kezelnünk, **adatszerkezeteket** használunk:

### Tömb (array)

A **tömb** azonos típusú elemek **fix méretű**, indexelt sorozata. Az elemek egy indexszel (jellemzően 0-tól kezdődően) közvetlenül, gyorsan elérhetők (O(1) idő alatt). Hátránya, hogy mérete a létrehozás után jellemzően nem változtatható, és beszúrás/törlés a tömb közepén a többi elem eltolását igényli.

### Lista (list)

A **lista** (pl. dinamikus tömb vagy láncolt lista formájában) rugalmasabb, mint a hagyományos tömb: mérete futás közben is növelhető/csökkenthető, elemeket bárhová be lehet szúrni vagy onnan törölni. A láncolt lista minden eleme tárolja a következő (esetleg az előző) elemre mutató hivatkozást is.

### Verem (stack) — LIFO elv

A **verem** olyan adatszerkezet, amelyben az utoljára betett elemet lehet elsőként kivenni: **LIFO (Last In, First Out — utoljára be, elsőként ki)** elv szerint működik, mint egy egymásra pakolt tányérkupac. Alapműveletei:

- **push**: elem betevése a verem tetejére,
- **pop**: a legfelső elem kivétele és eltávolítása,
- **peek/top**: a legfelső elem megtekintése eltávolítás nélkül.

Tipikus alkalmazás: a böngésző "vissza" gombjának működése, a függvényhívások (call stack) kezelése, a zárójelek helyes párosításának ellenőrzése, "visszavonás (undo)" funkció.

### Sor (queue) — FIFO elv

A **sor** olyan adatszerkezet, amelyben az elsőként betett elemet lehet elsőként kivenni: **FIFO (First In, First Out — elsőként be, elsőként ki)** elv szerint működik, mint egy pénztári sorban állás. Alapműveletei:

- **enqueue**: elem betevése a sor végére,
- **dequeue**: a sor elején lévő elem kivétele.

Tipikus alkalmazás: nyomtatási sorok kezelése, feladatok (folyamatok) ütemezése egy operációs rendszerben, üzenetek feldolgozása érkezési sorrendben.

## Melyik adatszerkezetet mikor válasszuk?

- Ha a méret előre ismert és gyors, közvetlen indexelt elérésre van szükség → **tömb**.
- Ha az elemek száma gyakran változik, sok beszúrás/törlés várható → **lista** (különösen láncolt lista).
- Ha "visszavonás" jellegű, legutóbb hozzáadott elemet kell először feldolgozni → **verem**.
- Ha érkezési sorrendben kell feldolgozni az elemeket → **sor**.

## Összefoglalás

A megfelelő adatszerkezet kiválasztása alapvetően befolyásolja egy program hatékonyságát és érthetőségét — ugyanazt a problémát rossz adatszerkezettel jóval bonyolultabban és lassabban lehet csak megoldani.
`,
    key_concepts: [
      "primitív adattípusok (egész, valós, logikai, string)",
      "tömb (array)",
      "verem (stack) — LIFO",
      "sor (queue) — FIFO",
      "láncolt lista",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik adattípus vehet fel kizárólag 'igaz' vagy 'hamis' értéket?",
        options: ["logikai (boolean)", "egész szám (integer)", "karakter (char)", "valós szám (float)"],
        correct_answer: "logikai (boolean)",
        explanation: "A logikai (boolean) adattípus csak két lehetséges értéket vehet fel: igaz (true) vagy hamis (false).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen elven működik a verem (stack) adatszerkezet?",
        options: [
          "LIFO — utoljára betett elemet lehet elsőként kivenni",
          "FIFO — elsőként betett elemet lehet elsőként kivenni",
          "Véletlenszerű sorrendben adja vissza az elemeket",
          "Csak egyetlen elemet tud tárolni egyszerre",
        ],
        correct_answer: "LIFO — utoljára betett elemet lehet elsőként kivenni",
        explanation: "A verem a LIFO (Last In, First Out) elv szerint működik: a legutoljára betett elem kerül elsőként kivételre.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik adatszerkezet alkalmazása jellemző a nyomtatási sorok vagy feladatütemezés kezelésére?",
        options: ["sor (queue)", "verem (stack)", "tömb (array)", "logikai változó"],
        correct_answer: "sor (queue)",
        explanation: "A sor (queue) FIFO elve szerint az érkezési sorrendnek megfelelően dolgozza fel a feladatokat, ez felel meg a nyomtatási vagy ütemezési sorok logikájának.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő különbség a tömb és a láncolt lista között?",
        options: [
          "A tömb fix méretű és indexelt, a láncolt lista dinamikusan bővíthető, és elemei hivatkozásokkal kapcsolódnak",
          "A tömb csak szöveget tárolhat, a lista csak számokat",
          "A láncolt lista mindig gyorsabb minden művelethez, mint a tömb",
          "A tömb és a lista között nincs érdemi különbség",
        ],
        correct_answer: "A tömb fix méretű és indexelt, a láncolt lista dinamikusan bővíthető, és elemei hivatkozásokkal kapcsolódnak",
        explanation: "A tömb fix méretű, indexelt, gyors elérésű szerkezet, míg a láncolt lista rugalmasan bővíthető, és minden eleme tárolja a következő elemre mutató hivatkozást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik művelet-pár tartozik a verem (stack) alapműveletei közé?",
        options: ["push és pop", "enqueue és dequeue", "insert és delete", "read és write"],
        correct_answer: "push és pop",
        explanation: "A verem alapműveletei a push (elem betevése a tetejére) és a pop (a legfelső elem kivétele); az enqueue/dequeue a sor (queue) műveletei.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "valtozok-kifejezesek-be-kimenet",
    title: "Változók, kifejezések, bemenet/kimenet",
    level: "mindketto",
    theme: "Programozás alapjai",
    order_index: 21,
    summary_markdown:
      "A programozás legalapvetőbb építőkövei a változók, a kifejezések (operátorokkal felépített számítások) és a bemeneti/kimeneti műveletek, amelyekkel a program kommunikál a felhasználóval.",
    content_markdown: `
## Mi a változó?

A **változó** egy elnevezett memóriaterület, amely egy adott típusú értéket tárol, és amelynek értéke a program futása közben megváltozhat. A változóhoz három dolog tartozik:

- **név (azonosító)**: amivel hivatkozunk rá a programban (pl. "eletkor", "nev"),
- **típus**: milyen fajta adatot tárolhat (egész szám, szöveg, logikai stb.),
- **érték**: az aktuálisan benne tárolt adat.

Jó gyakorlat: a változóneveket érdemes **beszédesen**, a tartalmukra utalóan megválasztani (pl. "diakok_szama" jobb, mint "x").

## Értékadás

Az **értékadó utasítás** (jelölése sok nyelvben := vagy =) egy kifejezés kiértékelt eredményét helyezi el egy változóban. Fontos, hogy az értékadás jobb oldala mindig **előbb kiértékelődik**, majd az eredmény kerül a bal oldali változóba:

eletkor := eletkor + 1

Ez a sor nem matematikai egyenlőséget fejez ki, hanem azt jelenti: "vedd az eletkor jelenlegi értékét, adj hozzá 1-et, majd az eredményt tedd vissza az eletkor változóba".

## Kifejezések és operátorok

A **kifejezés** változókból, konstansokból és operátorokból felépülő szerkezet, amelynek kiértékelése egy értéket eredményez. Operátortípusok:

- **Aritmetikai operátorok**: + (összeadás), - (kivonás), * (szorzás), / (osztás), % vagy MOD (maradékos osztás maradéka), DIV (egész osztás hányadosa).
- **Relációs (összehasonlító) operátorok**: = (egyenlő), <> vagy != (nem egyenlő), <, >, <=, >= — az eredményük mindig logikai (igaz/hamis) érték.
- **Logikai operátorok**: ÉS (AND), VAGY (OR), NEM (NOT) — logikai értékek kombinálására.

A műveletek végrehajtási sorrendjét a **precedencia (elsőbbségi sorrend)** határozza meg: a zárójelek a legerősebbek, utána a szorzás/osztás, majd az összeadás/kivonás következik — ugyanúgy, mint a matematikában.

## Bemenet és kimenet

A programok a külvilággal (felhasználóval) a **bemeneti (input)** és **kimeneti (output)** műveleteken keresztül kommunikálnak:

- **Bemenet (BEOLVAS/input)**: a felhasználó által begépelt (vagy más forrásból, pl. fájlból érkező) adat beolvasása egy változóba.
- **Kimenet (KIÍR/print/output)**: egy érték vagy szöveg megjelenítése a képernyőn (vagy más célon, pl. fájlba írás).

### Egyszerű pszeudokód-példa

\`\`\`
KIÍR("Add meg az életkorod:")
BEOLVAS(eletkor)
HA eletkor >= 18 AKKOR
    KIÍR("Nagykorú vagy.")
KÜLÖNBEN
    KIÍR("Kiskorú vagy.")
VÉGE HA
\`\`\`

## Típuskonverzió

Gyakori hiba, hogy a bemenetről beolvasott adat alapértelmezetten **szövegként (string)** érkezik, amelyet — ha számításra akarjuk használni — explicit módon **számmá kell konvertálni** (pl. Pythonban int() vagy float() függvénnyel). Ennek elmulasztása jellemző kezdő programozói hiba, amely futási hibát vagy hibás eredményt okozhat.

## Összefoglalás

A változók, kifejezések és a be-/kimenet ismerete nélkül egyetlen működő program sem írható meg — ez minden további programozási fogalom (elágazás, ciklus, függvény) alapja.
`,
    key_concepts: [
      "változó (név, típus, érték)",
      "értékadó utasítás",
      "aritmetikai, relációs, logikai operátorok",
      "bemenet és kimenet",
      "típuskonverzió",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi történik az \"eletkor := eletkor + 1\" értékadó utasítás végrehajtásakor?",
        options: [
          "A program kiszámítja az eletkor jelenlegi értékét plusz 1-et, és az eredményt visszaírja az eletkor változóba",
          "Hibát dob, mert egy változó nem szerepelhet mindkét oldalon",
          "Létrehoz egy új, 'eletkor2' nevű változót",
          "Törli az eletkor változó értékét",
        ],
        correct_answer: "A program kiszámítja az eletkor jelenlegi értékét plusz 1-et, és az eredményt visszaírja az eletkor változóba",
        explanation: "Az értékadás jobb oldala előbb kiértékelődik (a régi érték + 1), majd az eredmény felülírja a bal oldali változó tartalmát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik operátorcsoportba tartozik a '<=' (kisebb vagy egyenlő) jel?",
        options: ["relációs (összehasonlító) operátor", "aritmetikai operátor", "logikai operátor", "értékadó operátor"],
        correct_answer: "relációs (összehasonlító) operátor",
        explanation: "A relációs (összehasonlító) operátorok (=, <>, <, >, <=, >=) két érték viszonyát vizsgálják, és eredményük mindig logikai (igaz/hamis) érték.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos a bemenetről beolvasott adatot számmá konvertálni, mielőtt számítást végzünk vele?",
        options: [
          "Mert a bemenet alapértelmezetten szövegként (string) érkezik, amivel nem lehet közvetlenül matematikai műveletet végezni",
          "Mert a szám típusú adat kisebb helyet foglal a memóriában",
          "Mert enélkül a program automatikusan leáll egy perc múlva",
          "Mert a konverzió mindig gyorsítja a program futását",
        ],
        correct_answer: "Mert a bemenet alapértelmezetten szövegként (string) érkezik, amivel nem lehet közvetlenül matematikai műveletet végezni",
        explanation: "A felhasználói bemenet jellemzően szövegként érkezik; ha ezt matematikai számításhoz akarjuk használni, explicit típuskonverzióra (pl. szövegből egész számmá) van szükség.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a helyes kiértékelési sorrend (precedencia) az alábbi kifejezésben: 2 + 3 * 4?",
        options: ["Először a szorzás (3*4=12), majd az összeadás (2+12=14)", "Balról jobbra, sorban: 2+3=5, majd 5*4=20", "Mindig jobbról balra kell számolni", "A szorzás és összeadás egyszerre történik"],
        correct_answer: "Először a szorzás (3*4=12), majd az összeadás (2+12=14)",
        explanation: "A matematikai precedencia szabályai szerint a szorzás elsőbbséget élvez az összeadással szemben, így az eredmény 2 + 12 = 14.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért érdemes beszédes változóneveket (pl. 'diakok_szama') használni az egyszerű, jelentés nélküli nevek (pl. 'x') helyett?",
        options: [
          "Mert javítja a kód olvashatóságát és karbantarthatóságát",
          "Mert a program csak így fordítható le hiba nélkül",
          "Mert a hosszabb változónevek gyorsítják a program futását",
          "Mert enélkül a változó típusa automatikusan hibás lesz",
        ],
        correct_answer: "Mert javítja a kód olvashatóságát és karbantarthatóságát",
        explanation: "A beszédes változónevek nem befolyásolják a program futási sebességét, viszont jelentősen javítják a kód érthetőségét és karbantarthatóságát mások (és a jövőbeli önmagunk) számára.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "vezerlesi-szerkezetek",
    title: "Vezérlési szerkezetek: elágazás és ciklusok",
    level: "mindketto",
    theme: "Programozás alapjai",
    order_index: 22,
    summary_markdown:
      "A vezérlési szerkezetek (elágazás és ciklus) teszik lehetővé, hogy a program ne csak lineárisan, egymás után hajtsa végre az utasításokat, hanem feltételtől függően döntsön, vagy műveleteket ismételjen.",
    content_markdown: `
## Az elágazás (szelekció)

Az **elágazás** lehetővé teszi, hogy a program a feltétel értékétől (igaz/hamis) függően különböző utasítás(oka)t hajtson végre.

### Egyágú elágazás

HA feltétel AKKOR
    utasítás(ok)
VÉGE HA

Csak akkor fut le az utasítás, ha a feltétel igaz; egyébként a program folytatja a következő sorral.

### Kétágú elágazás

HA feltétel AKKOR
    utasítás_A
KÜLÖNBEN
    utasítás_B
VÉGE HA

### Többágú elágazás (elágazás-lánc)

HA feltétel1 AKKOR
    utasítás_A
KÜLÖNBEN HA feltétel2 AKKOR
    utasítás_B
KÜLÖNBEN
    utasítás_C
VÉGE HA

Sok nyelvben létezik erre egy kompaktabb szerkezet is (pl. **switch/case**, vagy magyarul **eset szerkezet**), amely egyetlen változó több lehetséges értékéhez rendel külön ágakat — ez olvashatóbb, ha sok lehetséges esetet kell megkülönböztetni.

## A ciklusok (iteráció)

A **ciklus** egy utasítás vagy utasításblokk ismételt végrehajtását teszi lehetővé.

### Elöltesztelő ciklus (amíg / while)

CIKLUS AMÍG feltétel
    utasítás(ok)
CIKLUS VÉGE

A feltételt **minden ismétlés előtt** megvizsgálja — ha már az első vizsgálatkor hamis, a ciklus törzse **egyszer sem** fut le.

### Hátultesztelő ciklus (ismételd...amíg)

ISMÉTELD
    utasítás(ok)
AMÍG feltétel

A feltételt **minden ismétlés után** vizsgálja — a ciklus törzse mindig **legalább egyszer** lefut, még akkor is, ha a feltétel már kezdetben hamis lenne.

### Számláló ciklus (for)

CIKLUS i := 1-TŐL 10-IG
    utasítás(ok)
CIKLUS VÉGE

Akkor használjuk, ha előre tudjuk, **hányszor** kell ismételni a ciklus törzsét (pl. 1-től 10-ig számolva).

## Végtelen ciklus — gyakori hiba

Ha egy ciklus feltétele soha nem válik hamissá (mert elfelejtjük módosítani a feltételben szereplő változót a ciklustörzsben), **végtelen ciklus** jön létre, amely lefagyasztja vagy leblokkolja a programot. Ez az egyik leggyakoribb kezdő programozói hiba.

### Példa végtelen ciklusra (hibás kód)

\`\`\`
i := 1
CIKLUS AMÍG i <= 10
    KIÍR(i)
CIKLUS VÉGE
\`\`\`

Itt hiányzik az "i := i + 1" sor a ciklus törzséből, ezért i értéke soha nem éri el a 11-et — a ciklus végtelen ideig fut.

## Beágyazott vezérlési szerkezetek

Az elágazások és ciklusok **egymásba ágyazhatók** (pl. egy ciklus törzsében elágazás, vagy egy ciklus egy másik ciklus belsejében). Ez teszi lehetővé bonyolultabb feladatok (pl. egy kétdimenziós táblázat minden elemének bejárása két egymásba ágyazott ciklussal) megoldását.

## Összefoglalás

Az elágazás és a ciklus a "döntés" és az "ismétlés" alapvető programozási eszközei — ezek kombinálásával gyakorlatilag bármilyen algoritmikus feladat megoldható.
`,
    key_concepts: [
      "egyágú és kétágú elágazás",
      "elöltesztelő ciklus (while)",
      "hátultesztelő ciklus (do-while)",
      "számláló ciklus (for)",
      "végtelen ciklus",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő különbség az elöltesztelő és a hátultesztelő ciklus között?",
        options: [
          "A hátultesztelő ciklus törzse mindig legalább egyszer lefut, az elöltesztelőé nem feltétlenül",
          "Az elöltesztelő ciklus mindig gyorsabb, mint a hátultesztelő",
          "A hátultesztelő ciklus nem tartalmazhat feltételt",
          "A kettő között nincs érdemi különbség",
        ],
        correct_answer: "A hátultesztelő ciklus törzse mindig legalább egyszer lefut, az elöltesztelőé nem feltétlenül",
        explanation: "Az elöltesztelő ciklus a feltételt a törzs végrehajtása előtt vizsgálja (így akár nulla alkalommal is lefuthat), míg a hátultesztelő a törzs után vizsgál, ezért az legalább egyszer biztosan lefut.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor érdemes számláló (for) ciklust használni elöltesztelő (while) ciklus helyett?",
        options: [
          "Ha előre pontosan tudjuk, hányszor kell ismételni a ciklus törzsét",
          "Ha a ciklus feltétele bonyolult logikai kifejezés",
          "Ha a ciklusnak soha nem szabad véget érnie",
          "A for ciklus minden esetben helyettesíti a while ciklust, nincs különbség",
        ],
        correct_answer: "Ha előre pontosan tudjuk, hányszor kell ismételni a ciklus törzsét",
        explanation: "A számláló (for) ciklus akkor a legmegfelelőbb választás, amikor előre ismert az ismétlések pontos száma.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi okozza a végtelen ciklust az alábbi kódrészletben? i := 1 / CIKLUS AMÍG i <= 10 / KIÍR(i) / CIKLUS VÉGE",
        options: [
          "Hiányzik az i változó növelése a ciklus törzsében, ezért a feltétel soha nem válik hamissá",
          "A KIÍR utasítás szintaktikai hibát tartalmaz",
          "Az i változó kezdőértéke túl nagy",
          "A ciklus feltétele hibásan van megfogalmazva, fordítva kellene lennie",
        ],
        correct_answer: "Hiányzik az i változó növelése a ciklus törzsében, ezért a feltétel soha nem válik hamissá",
        explanation: "Mivel az i értéke sosem növekszik a ciklus törzsében, az 'i <= 10' feltétel örökké igaz marad, így a ciklus soha nem ér véget.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire használható a többágú elágazás (pl. switch/case szerkezet)?",
        options: [
          "Egyetlen változó több lehetséges értékéhez tartozó, külön-külön ágak olvashatóbb megkülönböztetésére",
          "Kizárólag ciklusok belsejében használható",
          "Csak logikai (igaz/hamis) típusú változókkal működik",
          "Helyettesíti a változók deklarálását",
        ],
        correct_answer: "Egyetlen változó több lehetséges értékéhez tartozó, külön-külön ágak olvashatóbb megkülönböztetésére",
        explanation: "A switch/case (eset) szerkezet akkor hasznos, ha egy változó sok lehetséges értékéhez kell külön-külön, jól olvasható ágakat rendelni, sok egymásba ágyazott HA/KÜLÖNBEN HA helyett.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az, hogy egy ciklus egy másik ciklusba van 'ágyazva'?",
        options: [
          "A külső ciklus minden egyes ismétlésekor a belső ciklus teljes egészében lefut",
          "A két ciklus párhuzamosan, egymástól függetlenül fut",
          "A belső ciklus csak egyszer futhat le összesen",
          "Ez szintaktikailag tilos a legtöbb programozási nyelvben",
        ],
        correct_answer: "A külső ciklus minden egyes ismétlésekor a belső ciklus teljes egészében lefut",
        explanation: "Beágyazott ciklusok esetén a külső ciklus minden egyes körében a belső ciklus a maga teljes ismétlési sorozatát végigfuttatja, mielőtt a külső ciklus a következő körére lépne.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "fuggvenyek-es-eljarasok",
    title: "Függvények és eljárások, paraméterátadás",
    level: "emelt",
    theme: "Programozás alapjai",
    order_index: 23,
    summary_markdown:
      "A függvények és eljárások a kód újrafelhasználhatóságának alapjai: egy adott feladatot megvalósító kódrészletet egyszer írunk meg, majd sokszor meghívhatjuk, akár különböző paraméterekkel.",
    content_markdown: `
## Miért van szükség függvényekre és eljárásokra?

Ha egy program több helyen is ugyanazt (vagy nagyon hasonló) műveletsorozatot hajtja végre, felesleges és hibalehetőséget rejt magában, ha ezt a kódot mindenhol újra és újra leírjuk. A megoldás: a kódot egyszer, **egy néven elnevezett, önálló egységben (alprogramban)** írjuk meg, amelyet aztán bárhonnan **meghívhatunk**.

## Függvény és eljárás — mi a különbség?

- **Eljárás (procedure)**: egy önálló, elnevezett kódrészlet, amely elvégez egy műveletet, de **nem ad vissza értéket** (pl. kiír valamit a képernyőre).
- **Függvény (function)**: hasonló az eljáráshoz, de a végrehajtás után **visszaad (return) egy értéket**, amelyet a hívó kód felhasználhat egy kifejezésben.

Sok modern nyelvben (pl. Python) a fogalmak egybeolvadnak: mindent "függvénynek" hívnak, és ha nincs explicit visszatérési érték, a függvény implicit "üres" (None/void) értéket ad vissza.

## Paraméterek és argumentumok

A **paraméter** a függvény/eljárás definíciójában szereplő "beviteli" változó, az **argumentum** pedig a híváskor ténylegesen átadott konkrét érték.

FÜGGVÉNY négyzet(szam)
    VISSZA szam * szam
FÜGGVÉNY VÉGE

...

eredmeny := négyzet(5)   // 5 az argumentum, eredmeny értéke 25 lesz

## Paraméterátadási módok

- **Érték szerinti paraméterátadás (call by value)**: a függvény a paraméter **másolatát** kapja meg — ha a függvényen belül módosítja azt, ez **nem** hat vissza a hívó kódban lévő eredeti változóra.
- **Referencia (cím) szerinti paraméterátadás (call by reference)**: a függvény magára a **memóriacímre (az eredeti változóra)** kap hivatkozást — ha módosítja a paraméter értékét, az a hívó kódban lévő eredeti változót is megváltoztatja.

Ez a különbség kulcsfontosságú: ha egy eljárásnak egy tömböt vagy struktúrát kell "helyben" módosítania (pl. rendeznie), referencia szerinti átadásra van szükség; ha csak egy bemenő adatot akarunk feldolgozni anélkül, hogy az eredetit megváltoztatnánk, érték szerinti átadás a biztonságosabb.

## Lokális és globális változók (érvényességi kör)

- **Lokális változó**: csak azon a függvényen/eljáráson belül létezik és érhető el, ahol deklarálták; a függvény lefutása után megszűnik.
- **Globális változó**: a program egész futása alatt létezik, és bárhonnan elérhető.

A globális változók túlzott használata megnehezíti a kód átláthatóságát és hibakeresését (nem világos, mely függvény módosíthatja az értéküket), ezért jó gyakorlat a lokális változók és a paraméterátadás előnyben részesítése.

## A visszatérési érték (return)

Egy függvény a **VISSZA (return)** utasítással adja vissza az eredményét, és ezzel egyben be is fejeződik a függvény végrehajtása — a return utáni utasítások már nem futnak le abban a hívásban.

## Miért fontos ez emelt szinten?

A függvények és eljárások, valamint a paraméterátadási módok pontos megértése a **moduláris, jól szervezett, könnyen tesztelhető** programok írásának alapja — ez az egyik legfontosabb különbség a kezdő és a tapasztaltabb programozói gondolkodás között.
`,
    key_concepts: [
      "függvény és eljárás",
      "paraméter és argumentum",
      "érték szerinti paraméterátadás",
      "referencia szerinti paraméterátadás",
      "lokális és globális változó",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő különbség a függvény és az eljárás között?",
        options: [
          "A függvény visszaad egy értéket, az eljárás nem",
          "Az eljárás mindig gyorsabban fut, mint a függvény",
          "A függvény nem hívható meg paraméterekkel",
          "Az eljárás csak ciklusok belsejében hívható meg",
        ],
        correct_answer: "A függvény visszaad egy értéket, az eljárás nem",
        explanation: "A függvény a végrehajtás után egy értéket ad vissza (return), amelyet a hívó kód felhasználhat, míg az eljárás csak elvégez egy műveletet, visszatérési érték nélkül.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a paraméter és az argumentum között?",
        options: [
          "A paraméter a definícióban szereplő beviteli változó, az argumentum a híváskor átadott konkrét érték",
          "A kettő pontosan ugyanazt jelenti, felcserélhető fogalmak",
          "A paraméter csak számokra, az argumentum csak szövegre vonatkozhat",
          "Az argumentum csak globális változó lehet",
        ],
        correct_answer: "A paraméter a definícióban szereplő beviteli változó, az argumentum a híváskor átadott konkrét érték",
        explanation: "A paraméter a függvény/eljárás definíciójában szereplő formális változó neve, míg az argumentum a konkrét érték, amit a híváskor ténylegesen átadunk.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az érték szerinti (call by value) paraméterátadást?",
        options: [
          "A függvény a paraméter másolatát kapja meg, a függvényen belüli módosítás nem hat vissza az eredeti változóra",
          "A függvény közvetlenül az eredeti változót módosítja",
          "Csak szöveges (string) adatokkal használható",
          "Mindig gyorsabb, mint a referencia szerinti átadás, minden esetben",
        ],
        correct_answer: "A függvény a paraméter másolatát kapja meg, a függvényen belüli módosítás nem hat vissza az eredeti változóra",
        explanation: "Érték szerinti átadásnál a függvény egy másolatot kap a paraméterről, így a belső módosítások nem befolyásolják a hívó kódban lévő eredeti változót.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért van szükség referencia (cím) szerinti paraméterátadásra, ha egy eljárásnak egy tömböt 'helyben' kell rendeznie?",
        options: [
          "Mert így az eljárás közvetlenül az eredeti tömböt módosítja, nem csak egy másolatát",
          "Mert a referencia szerinti átadás mindig gyorsabban fut le, függetlenül a céltól",
          "Mert érték szerinti átadással egyáltalán nem lehet tömböt átadni",
          "Mert a referencia szerinti átadás csak egész számokkal működik",
        ],
        correct_answer: "Mert így az eljárás közvetlenül az eredeti tömböt módosítja, nem csak egy másolatát",
        explanation: "Ha a cél az eredeti adatszerkezet (pl. tömb) tartós, helyben történő módosítása, akkor referencia szerinti átadásra van szükség, mert csak így hat a módosítás az eredeti változóra.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem jó gyakorlat globális változókat túlzottan használni a lokális változók és paraméterátadás helyett?",
        options: [
          "Mert megnehezíti annak átlátását, mely függvény módosíthatja az értéküket, így bonyolítja a hibakeresést",
          "Mert a globális változók lassítják a számítógép processzorát",
          "Mert a legtöbb programozási nyelv egyáltalán nem is engedélyezi a globális változókat",
          "Mert a globális változók nem tárolhatnak szöveges adatot",
        ],
        correct_answer: "Mert megnehezíti annak átlátását, mely függvény módosíthatja az értéküket, így bonyolítja a hibakeresést",
        explanation: "A globális változók bárhonnan módosíthatók, ezért nagy programokban nehéz nyomon követni, hol és miért változott meg az értékük — ez megnehezíti a hibakeresést és a kód átláthatóságát.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "tombok-feldolgozasa-es-rekurzio",
    title: "Tömbök feldolgozása és rekurzió alapjai",
    level: "emelt",
    theme: "Programozás alapjai",
    order_index: 24,
    summary_markdown:
      "A tömbök bejárása ciklusokkal, valamint a rekurzió (önmagát hívó függvény) fogalma és alapesetei a programozás emelt szintű, gyakran vizsgáztatott témái.",
    content_markdown: `
## Tömbök feldolgozása ciklussal

Egy tömb elemeinek feldolgozásához (bejárásához) leggyakrabban egy **számláló (for) ciklust** használunk, amely a tömb indexein (0-tól a tömb méret-1-ig) fut végig:

CIKLUS i := 0-TÓL (n-1)-IG
    KIÍR(tomb[i])
CIKLUS VÉGE

### Gyakori tömbfeldolgozási feladattípusok

- **Összegzés**: egy összegző változó (kezdetben 0) minden ciklusban megnöveljük a tömb aktuális elemével.
- **Maximum/minimum keresés**: egy változóban tároljuk az eddig talált legnagyobb (vagy legkisebb) elemet, minden újabb elemnél összehasonlítjuk, és szükség esetén frissítjük.
- **Szűrés/számlálás**: végigmegyünk a tömbön, és megszámoljuk (vagy egy új tömbbe/listába gyűjtjük) azokat az elemeket, amelyek egy adott feltételnek megfelelnek.
- **Keresés**: lineáris vagy (rendezett tömb esetén) bináris kereséssel megkeressük egy adott érték helyét.

### Példa: maximum keresése

max := tomb[0]
CIKLUS i := 1-TŐL (n-1)-IG
    HA tomb[i] > max AKKOR
        max := tomb[i]
    VÉGE HA
CIKLUS VÉGE

## A rekurzió fogalma

A **rekurzió** olyan megoldási módszer, amelyben egy függvény **közvetlenül vagy közvetve önmagát hívja meg**, egy egyszerűbb (kisebb méretű) részfeladat megoldására. Minden helyesen megírt rekurzív függvénynek két fő része van:

1. **Alapeset (bázisállapot)**: az a legegyszerűbb eset, amelyre a függvény közvetlenül, rekurzív hívás nélkül tud választ adni — ez állítja meg a rekurziót.
2. **Rekurzív eset (lépés)**: a probléma egy kisebb, egyszerűbb változatára hívja meg saját magát, majd ennek eredményét felhasználva állítja elő a végső választ.

### Klasszikus példa: faktoriális számítása

FÜGGVÉNY faktorialis(n)
    HA n == 0 AKKOR
        VISSZA 1                          // alapeset
    KÜLÖNBEN
        VISSZA n * faktorialis(n - 1)     // rekurzív eset
    VÉGE HA
FÜGGVÉNY VÉGE

Ha n=4: faktorialis(4) = 4 * faktorialis(3) = 4 * 3 * faktorialis(2) = 4 * 3 * 2 * faktorialis(1) = 4 * 3 * 2 * 1 * faktorialis(0) = 4 * 3 * 2 * 1 * 1 = 24.

## Miért fontos az alapeset?

Ha egy rekurzív függvényből **hiányzik az alapeset**, vagy azt hibásan fogalmazzuk meg (soha nem teljesül), a függvény **végtelenül hívja önmagát**, ami előbb-utóbb **veremtúlcsordulási hibát (stack overflow)** okoz — a call stack (a függvényhívásokat nyilvántartó verem) betelik, és a program leáll.

## Rekurzió vs. iteráció

Sok feladat (pl. faktoriális, Fibonacci-sorozat, fájlrendszer bejárása mappákon keresztül) megoldható **mind ciklussal (iteratívan), mind rekurzióval**. A rekurzió gyakran **elegánsabb és rövidebb** kódot eredményez olyan problémáknál, amelyek természetükből adódóan "önhasonlóak" (pl. fastruktúrák bejárása), de **több memóriát és futásidőt** igényelhet a sok egymásba ágyazott függvényhívás miatt, mint egy egyenértékű iteratív megoldás.

## Összefoglalás

A tömbök ciklusos feldolgozása és a rekurzió megértése olyan alapvető programozási készség, amely számos későbbi, bonyolultabb algoritmus (rendezések, fastruktúrák, gráfbejárás) megértésének előfeltétele.
`,
    key_concepts: [
      "tömb bejárása ciklussal",
      "maximum/minimum keresés tömbben",
      "rekurzió",
      "alapeset és rekurzív eset",
      "veremtúlcsordulás (stack overflow)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az, hogy egy függvény 'rekurzív'?",
        options: [
          "Közvetlenül vagy közvetve önmagát hívja meg",
          "Soha nem ad vissza értéket",
          "Csak tömbökkel dolgozhat",
          "Mindig gyorsabban fut, mint egy ciklussal megírt megoldás",
        ],
        correct_answer: "Közvetlenül vagy közvetve önmagát hívja meg",
        explanation: "A rekurzió lényege, hogy a függvény a probléma egy kisebb változatára önmagát hívja meg, közvetlenül vagy egy másik függvényen keresztül közvetve.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az alapeset (bázisállapot) szerepe egy rekurzív függvényben?",
        options: [
          "Megállítja a rekurziót azzal, hogy rekurzív hívás nélkül közvetlenül ad választ",
          "Ez az a rész, amely mindig hibát okoz",
          "Ez határozza meg a függvény nevét",
          "Az alapeset opcionális, elhagyható bármely rekurzív függvényből",
        ],
        correct_answer: "Megállítja a rekurziót azzal, hogy rekurzív hívás nélkül közvetlenül ad választ",
        explanation: "Az alapeset a rekurzió megállításáért felelős: ez az az eset, amelyre a függvény közvetlenül, további önhívás nélkül tud választ adni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik, ha egy rekurzív függvényből hiányzik a helyes alapeset?",
        options: [
          "A függvény végtelenül hívja önmagát, ami veremtúlcsordulási hibát okoz",
          "A program automatikusan kijavítja a hibát",
          "A függvény lefut, de mindig 0-t ad vissza",
          "Semmilyen probléma nem keletkezik, csak lassabb lesz a futás",
        ],
        correct_answer: "A függvény végtelenül hívja önmagát, ami veremtúlcsordulási hibát okoz",
        explanation: "Alapeset nélkül (vagy hibás alapesettel) a rekurzió soha nem áll meg, a call stack egyre telítődik, ami végül veremtúlcsordulási hibához (stack overflow) vezet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Az alábbi kódrészlet egy tömb maximumát keresi: max := tomb[0]; CIKLUS i := 1-TŐL (n-1)-IG HA tomb[i] > max AKKOR max := tomb[i]. Miért kezdődik a ciklus i=1-től, nem i=0-tól?",
        options: [
          "Mert a max kezdőértékét már a tomb[0] elemből vettük, azt nem kell újra összehasonlítani",
          "Mert a tömb indexelése mindig 1-től kezdődik",
          "Mert a 0. index mindig hibás értéket tartalmaz",
          "Ez csak stilisztikai választás, nincs technikai oka",
        ],
        correct_answer: "Mert a max kezdőértékét már a tomb[0] elemből vettük, azt nem kell újra összehasonlítani",
        explanation: "Mivel a max kezdőértéke már a tömb 0. eleme, felesleges (bár nem hibás) lenne ezt saját magával is összehasonlítani, ezért a ciklus az 1. indextől indul.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő hátránya a rekurzív megoldásnak egy egyenértékű iteratív (ciklusos) megoldáshoz képest?",
        options: [
          "Jellemzően több memóriát és futásidőt igényelhet a sok egymásba ágyazott függvényhívás miatt",
          "A rekurzió soha nem adhat helyes eredményt",
          "A rekurzív függvények nem hívhatók meg paraméterekkel",
          "A rekurzió csak szöveges adatokkal működik",
        ],
        correct_answer: "Jellemzően több memóriát és futásidőt igényelhet a sok egymásba ágyazott függvényhívás miatt",
        explanation: "Bár a rekurzió gyakran elegánsabb kódot eredményez, a sok egymásba ágyazott függvényhívás miatt jellemzően több memóriát (call stack) és futásidőt igényel, mint egy azonos feladatot megoldó ciklus.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "halozati-alapfogalmak-es-felho",
    title: "Hálózati alapfogalmak és felhőalapú együttműködés",
    level: "mindketto",
    theme: "Infokommunikáció",
    order_index: 25,
    summary_markdown:
      "A számítógépes hálózatok alapfogalmai (IP-cím, protokoll, kliens-szerver modell) és a felhőalapú szolgáltatások szerepe a mai infokommunikációban.",
    content_markdown: `
## Mi a számítógépes hálózat?

A **számítógépes hálózat** két vagy több eszköz összekapcsolása, amely lehetővé teszi az adatok és erőforrások (fájlok, nyomtatók, internetkapcsolat) megosztását. Kiterjedés szerint megkülönböztetünk:

- **LAN (Local Area Network)**: helyi hálózat, pl. egy iskola vagy iroda épületén belül.
- **WAN (Wide Area Network)**: nagy kiterjedésű hálózat, amely földrajzilag távoli helyeket köt össze — az **internet** a legnagyobb WAN.
- **WLAN**: vezeték nélküli (Wi-Fi) helyi hálózat.

## IP-cím és protokollok

Minden hálózatra kapcsolódó eszköznek egyedi **IP-címe (Internet Protocol cím)** van, amely azonosítja a hálózaton. Az **IPv4** cím négy, ponttal elválasztott számból áll (pl. 192.168.1.10, ahol minden szám 0-255 közötti), de a világon rendelkezésre álló IPv4-címek korlátozottak, ezért terjed egyre inkább az **IPv6**, amely lényegesen nagyobb címtartományt biztosít.

A **protokoll** egy szabványosított "nyelv" vagy szabályrendszer, amely meghatározza, hogyan kommunikálnak egymással a hálózati eszközök. Fontosabb protokollok:

- **HTTP/HTTPS**: weboldalak megjelenítéséhez használt protokoll (a HTTPS titkosítva továbbítja az adatokat).
- **TCP/IP**: az internet alapját képező protokollcsalád, amely biztosítja az adatok megbízható, célba érő továbbítását.
- **FTP**: fájlok hálózaton keresztüli átvitelére szolgáló protokoll.
- **DNS (Domain Name System)**: az emberek számára könnyen megjegyezhető domainneveket (pl. www.pelda.hu) alakítja át a géphez szükséges IP-címre.

## A kliens-szerver modell

A legtöbb hálózati szolgáltatás a **kliens-szerver modell** szerint működik:

- A **szerver** egy erőforrást vagy szolgáltatást biztosít (pl. egy weboldal tárhelye, egy e-mail szerver).
- A **kliens** (pl. a böngészőnk) kérést küld a szervernek, és fogadja a választ.

Ezzel szemben áll a **P2P (peer-to-peer, osztott) modell**, ahol nincs központi szerver: minden résztvevő eszköz egyszerre kliens és szerver is lehet (pl. fájlmegosztó rendszerek).

## Felhőalapú együttműködés és szolgáltatások

A **felhőalapú (cloud) szolgáltatások** lényege, hogy az adatokat és a számítási kapacitást nem a saját gépünkön, hanem távoli szerverközpontokban tárolják/futtatják, amelyekhez az interneten keresztül férünk hozzá. Típusai:

- **Felhőalapú tárhely**: (pl. Google Drive, OneDrive, Dropbox) — fájlok tárolása, szinkronizálása több eszköz között.
- **Felhőalapú együttműködési eszközök**: (pl. Google Docs, Microsoft 365 Online) — több felhasználó egyidejűleg, valós időben szerkesztheti ugyanazt a dokumentumot, láthatja egymás módosításait.
- **SaaS (Software as a Service)**: a szoftvert nem telepítjük, hanem böngészőn keresztül, előfizetéssel használjuk (pl. egy online levelezőrendszer).

## A felhőalapú együttműködés előnyei és kockázatai

**Előnyök**: bárhonnan, bármilyen eszközről elérhető az adat; automatikus verziókezelés és mentés; egyszerű, valós idejű csoportmunka.

**Kockázatok**: a szolgáltatás internetkapcsolatot igényel; az adatok egy harmadik fél szerverén tárolódnak, ami adatvédelmi (GDPR) kérdéseket vet fel; a fiók feltörése esetén az összes tárolt adat veszélybe kerülhet, ezért itt is kiemelten fontos az erős jelszó és a kétfaktoros hitelesítés.

## Összefoglalás

A hálózati alapfogalmak és a felhőalapú szolgáltatások ismerete elengedhetetlen a mai, hálózatba kötött, együttműködésre épülő digitális munkakörnyezetben való eligazodáshoz.
`,
    key_concepts: [
      "LAN, WAN, WLAN",
      "IP-cím és protokoll (HTTP, TCP/IP, DNS)",
      "kliens-szerver modell",
      "felhőalapú (cloud) szolgáltatások",
      "SaaS",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mire szolgál a DNS (Domain Name System)?",
        options: [
          "Az emberek számára könnyen megjegyezhető domainneveket IP-címekké alakítja",
          "Titkosítja a weboldalak közötti kommunikációt",
          "Fájlok tömörítésére szolgáló protokoll",
          "A hálózati kábelek fizikai csatlakoztatását végzi",
        ],
        correct_answer: "Az emberek számára könnyen megjegyezhető domainneveket IP-címekké alakítja",
        explanation: "A DNS feladata, hogy a könnyen megjegyezhető domainneveket (pl. www.pelda.hu) a hozzájuk tartozó, géppel értelmezhető IP-címre fordítsa le.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a kliens-szerver modellt?",
        options: [
          "A szerver szolgáltatást biztosít, a kliens kérést küld és fogadja a választ",
          "Minden résztvevő gép egyenrangú, nincs megkülönböztetés",
          "Kizárólag vezeték nélküli hálózatokon alkalmazható",
          "Csak egyetlen eszközből állhat a hálózat",
        ],
        correct_answer: "A szerver szolgáltatást biztosít, a kliens kérést küld és fogadja a választ",
        explanation: "A kliens-szerver modellben egyértelmű szerepmegosztás van: a szerver biztosítja az erőforrást/szolgáltatást, a kliens pedig kéréseket küld és a válaszokat fogadja.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő különbség a LAN és a WAN hálózat között?",
        options: [
          "A LAN helyi, korlátozott kiterjedésű hálózat, a WAN nagy, akár földrajzilag távoli helyeket is összeköt",
          "A LAN mindig vezeték nélküli, a WAN mindig vezetékes",
          "A WAN csak egyetlen épületen belül működhet",
          "A LAN és a WAN között nincs érdemi különbség",
        ],
        correct_answer: "A LAN helyi, korlátozott kiterjedésű hálózat, a WAN nagy, akár földrajzilag távoli helyeket is összeköt",
        explanation: "A LAN (Local Area Network) egy helyi, korlátozott területű hálózat, míg a WAN (Wide Area Network) nagy, akár kontinenseket átívelő kiterjedésű, aminek legnagyobb példája az internet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik állítás igaz a felhőalapú együttműködési eszközökre (pl. Google Docs)?",
        options: [
          "Több felhasználó egyidejűleg, valós időben szerkesztheti ugyanazt a dokumentumot",
          "Kizárólag offline, internetkapcsolat nélkül használhatók",
          "Nem támogatják a dokumentumok verziókezelését",
          "Csak egyetlen felhasználó férhet hozzá egyszerre egy dokumentumhoz",
        ],
        correct_answer: "Több felhasználó egyidejűleg, valós időben szerkesztheti ugyanazt a dokumentumot",
        explanation: "A felhőalapú együttműködési eszközök egyik legnagyobb előnye, hogy több felhasználó egyszerre, valós időben dolgozhat ugyanazon a dokumentumon, látva egymás módosításait.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen kockázatot vet fel a felhőalapú szolgáltatások GDPR szempontjából?",
        options: [
          "Az adatok egy harmadik fél (a szolgáltató) szerverén tárolódnak, ami adatvédelmi kérdéseket vet fel",
          "A felhőalapú szolgáltatások soha nem tárolnak személyes adatot",
          "A GDPR csak a helyi (nem felhőalapú) tárolásra vonatkozik",
          "A felhőalapú szolgáltatások automatikusan mentesülnek minden adatvédelmi szabályozás alól",
        ],
        correct_answer: "Az adatok egy harmadik fél (a szolgáltató) szerverén tárolódnak, ami adatvédelmi kérdéseket vet fel",
        explanation: "Mivel a felhőalapú szolgáltatásoknál az adatok egy külső, harmadik fél szerverén tárolódnak, ez felveti a GDPR szerinti adatkezelői/adatfeldolgozói felelősség és az adatbiztonság kérdését.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "digitalis-kep-hang-video",
    title: "Digitális média: kép, hang és videó",
    level: "mindketto",
    theme: "Médiainformatika",
    order_index: 26,
    summary_markdown:
      "A digitális képek (bittérkép és vektorgrafika), valamint a hang és videó digitalizálásának alapfogalmai és a leggyakoribb formátumok áttekintése.",
    content_markdown: `
## Bittérképes (raszteres) grafika

A **bittérképes (raszteres) kép** apró, négyzet alakú képpontokból (**pixelekből**) épül fel, amelyek mindegyikéhez tartozik egy színérték. Jellemzői:

- **Felbontás (resolution)**: a kép szélessége és magassága pixelben megadva (pl. 1920×1080), ez határozza meg a kép részletgazdagságát.
- **Színmélység**: hány bit tárolja egy pixel színét — minél nagyobb, annál több szín jeleníthető meg (pl. 24 bites "true color" kb. 16,7 millió színt tesz lehetővé).
- **Nagyítás hátránya**: ha egy bittérképes képet felnagyítunk, a pixelek láthatóvá, "pixelesedetté" válnak, mert nincs több információ, amit meg lehetne jeleníteni.
- Gyakori formátumok: **JPEG** (veszteséges tömörítés, fotókhoz), **PNG** (veszteségmentes, átlátszóságot is támogat), **GIF** (korlátozott, 256 színű paletta, animációt is támogat), **BMP** (tömörítetlen).

## Vektorgrafika

A **vektorgrafikus kép** nem pixelekből, hanem matematikai **alakzatokból** (pontok, vonalak, görbék, ezek pozíciója és tulajdonságai) épül fel. Jellemzői:

- **Végtelenül nagyítható** minőségromlás nélkül, mivel a kép bármekkora méretben újraszámolható a matematikai leírásból.
- Jellemzően **logók, ikonok, illusztrációk, betűtípusok** készítésére alkalmas, ahol éles vonalakra, könnyű átméretezésre van szükség.
- Gyakori formátumok: **SVG** (webes vektorgrafika), **AI** (Adobe Illustrator), **EPS**.

## Mikor melyiket használjuk?

- **Fénykép, valósághű, sok színátmenetet tartalmazó kép** → bittérképes formátum (JPEG/PNG).
- **Logó, ikon, olyan grafika, amit sokféle méretben (kis ikontól óriásplakátig) kell használni** → vektorgrafika (SVG).

## Hang digitalizálása

Az analóg (folytonos) hangjelet digitálissá alakításhoz **mintavételezésre (sampling)** van szükség: a hangot meghatározott időközönként "lefényképezzük" (megmérjük a pillanatnyi amplitúdóját), és ezeket a mért értékeket tároljuk számokként.

- **Mintavételi frekvencia (sample rate)**: másodpercenként hányszor mintavételezünk (pl. 44 100 Hz = CD-minőség — másodpercenként 44 100 mérés).
- **Bitmélység**: egy-egy mintát hány biten tárolunk, ez befolyásolja a dinamikatartományt (leghalkabb és leghangosabb hang közti különbséget).
- Formátumok: **WAV** (tömörítetlen, nagy méretű, kiváló minőségű), **MP3** (veszteséges tömörítés, kisebb fájlméret), **FLAC** (veszteségmentes tömörítés).

## Videó digitalizálása

A digitális videó lényegében **képkockák (frame-ek) gyors egymásutánja**, kiegészítve a hangsávval:

- **Képkockasebesség (frame rate, fps)**: másodpercenként megjelenített képkockák száma (pl. 24, 30, 60 fps) — minél nagyobb, annál folyamatosabb a mozgás érzete.
- **Kodek (codec)**: a videó- és hangadat tömörítésére/kicsomagolására szolgáló algoritmus (pl. H.264, H.265/HEVC) — a videó minőségét és fájlméretét egyaránt jelentősen befolyásolja.
- **Konténerformátum**: a videó- és hangsávot, feliratokat egybefogó fájlformátum (pl. MP4, MKV, AVI) — nem tévesztendő össze a kodekkel, hiszen egy MP4 fájlban többféle kodekkel tömörített tartalom is lehet.

## Összefoglalás

A médiafájlok (kép, hang, videó) digitális reprezentációjának és formátumainak ismerete elengedhetetlen a helyes fájlválasztáshoz: rossz formátum vagy beállítás választása feleslegesen nagy fájlmérethez vagy gyenge minőséghez vezethet.
`,
    key_concepts: [
      "bittérképes (raszteres) grafika",
      "vektorgrafika",
      "mintavételezés (hang digitalizálása)",
      "képkockasebesség (fps)",
      "kodek és konténerformátum",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi történik, ha egy bittérképes (raszteres) képet jelentősen felnagyítunk?",
        options: [
          "A pixelek láthatóvá válnak, a kép 'pixelesedik'",
          "A kép automatikusan élesebb lesz",
          "A fájlmérete lecsökken",
          "A kép vektorgrafikává alakul át",
        ],
        correct_answer: "A pixelek láthatóvá válnak, a kép 'pixelesedik'",
        explanation: "Mivel a bittérképes kép fix számú pixelből áll, nagyításkor nincs több információ a megjelenítéshez, ezért az egyes pixelek láthatóvá, a kép pixelesedetté válik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért alkalmasabb a vektorgrafika logók és ikonok készítésére, mint a bittérképes formátum?",
        options: [
          "Mert bármekkora méretre nagyítható minőségromlás nélkül",
          "Mert mindig kisebb a fájlmérete, mint bármely bittérképes fájlnak",
          "Mert csak vektorgrafikában lehet színes képet készíteni",
          "Mert a vektorgrafika nem igényel számítógépet a megjelenítéshez",
        ],
        correct_answer: "Mert bármekkora méretre nagyítható minőségromlás nélkül",
        explanation: "A vektorgrafika matematikai alakzatokból épül fel, ezért tetszőleges méretre újraszámolható és nagyítható minőségvesztés nélkül, ami logóknál és ikonoknál kulcsfontosságú.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a hang digitalizálásánál a mintavételi frekvencia (sample rate)?",
        options: [
          "Azt, hogy másodpercenként hányszor mérjük meg a hang pillanatnyi amplitúdóját",
          "A hangfájl teljes időtartamát másodpercben",
          "A hangszóró teljesítményét wattban",
          "A hang hangerejének maximális szintjét",
        ],
        correct_answer: "Azt, hogy másodpercenként hányszor mérjük meg a hang pillanatnyi amplitúdóját",
        explanation: "A mintavételi frekvencia azt adja meg, hogy másodpercenként hányszor vesszük mintát (mérjük meg) az analóg hangjel amplitúdóját a digitalizálás során.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a kodek és a konténerformátum között egy videófájl esetében?",
        options: [
          "A kodek a tömörítési algoritmus, a konténer a kép-, hang- és feliratsávokat egybefogó fájlformátum",
          "A kettő pontosan ugyanazt jelenti",
          "A kodek csak a hangsávra, a konténer csak a képsávra vonatkozik",
          "A konténerformátum határozza meg a videó felbontását",
        ],
        correct_answer: "A kodek a tömörítési algoritmus, a konténer a kép-, hang- és feliratsávokat egybefogó fájlformátum",
        explanation: "A kodek (pl. H.264) a tömörítés/kicsomagolás algoritmusa, míg a konténerformátum (pl. MP4) az a fájlformátum, amely egybefogja a különböző (kép, hang, felirat) sávokat.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik formátum alkalmaz jellemzően veszteségmentes tömörítést, megőrizve az átlátszóságot is?",
        options: ["PNG", "JPEG", "MP3", "AVI"],
        correct_answer: "PNG",
        explanation: "A PNG formátum veszteségmentes tömörítést használ, és támogatja az átlátszóságot (alfa csatorna) is, szemben a veszteséges JPEG-gel.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "konyvtarhasznalat-es-forraskritika",
    title: "Könyvtárhasználat és forráskritika tudományos munkákban",
    level: "mindketto",
    theme: "Könyvtárhasználat és forráskritika",
    order_index: 27,
    summary_markdown:
      "A könyvtári rendszerezés alapelvei és a tudományos munkákban használt hivatkozási rendszerek (forrásjegyzék, idézés) ismerete elengedhetetlen az önálló kutatómunkához és a plágium elkerüléséhez.",
    content_markdown: `
## A könyvtári rendszerezés alapjai

A könyvtárak nagy mennyiségű dokumentumot rendszereznek úgy, hogy azok gyorsan megtalálhatók legyenek. Ennek alapja jellemzően egy **szakrendi (tematikus) osztályozási rendszer**, amely a könyveket témakörök szerint csoportosítja, és minden témakörhöz egy jelzetet (kód) rendel — így egy adott témában lévő könyvek egymás mellett, könnyen áttekinthetően helyezkednek el a polcokon.

A könyvtári **katalógus** (ma jellemzően online, elektronikus formában — **OPAC**, Online Public Access Catalog) tartalmazza az összes dokumentum bibliográfiai adatait (szerző, cím, kiadás éve, jelzet), amely alapján a látogató megkeresheti, hol található a keresett mű.

## Dokumentumtípusok és megbízhatóságuk

Egy kutatómunka során fontos megkülönböztetni a különböző forrástípusokat és azok megbízhatóságát:

- **Lektorált tudományos folyóiratcikk**: szakértők (más kutatók) által ellenőrzött, magas megbízhatóságú forrás.
- **Szakkönyv, tankönyv**: általában megbízható, de érdemes az kiadás évét is figyelembe venni (elavulhat).
- **Enciklopédia, lexikon**: jó kiindulópont az áttekintéshez, de tudományos munkában önmagában ritkán elegendő elsődleges forrásnak.
- **Ismeretterjesztő weboldal, blog**: változó megbízhatóságú, mindig ellenőrizni kell a szerzőt és a forrásokat.
- **Közösségi média bejegyzés**: tudományos munkában önmagában nem tekinthető megbízható elsődleges forrásnak.

## Hivatkozás tudományos munkákban

Egy tudományos igényű dolgozatban minden átvett gondolatot, adatot, idézetet **forrásmegjelöléssel** kell ellátni — ez nemcsak etikai, hanem szerzői jogi kötelezettség is (lásd a szerzői jogi tételt).

### Szövegen belüli hivatkozás

A leggyakoribb hivatkozási stílusok (pl. **APA**, **MLA**, **Chicago**) mind előírják, hogy a szövegben az átvett gondolat mellett zárójelben fel kell tüntetni legalább a szerzőt és az évszámot, pl. (Kovács, 2020).

### Irodalomjegyzék (forrásjegyzék)

A dolgozat végén szereplő **irodalomjegyzék** tartalmazza a felhasznált források teljes bibliográfiai adatait (szerző, cím, kiadó, megjelenés éve, esetleg oldalszám vagy URL), egységes formátumban, jellemzően a szerzők vezetékneve szerint ábécésorrendbe rendezve.

## Idézés és parafrázis

- **Szó szerinti idézet**: az eredeti szöveg pontos, változtatás nélküli átvétele, idézőjelbe téve, forrásmegjelöléssel.
- **Parafrázis (átfogalmazás)**: a forrás gondolatának saját szavainkkal történő visszaadása — ez esetben is kötelező a forrás megjelölése, hiszen az ötlet, a gondolat nem a miénk.

## A plágium elkerülése

A **plágium** más szellemi tulajdonának saját munkaként való feltüntetése — ez akkor is fennáll, ha csak átfogalmazzuk (de nem hivatkozzuk) a forrást. A plágium elkerülésének alapszabályai:

1. Minden felhasznált forrást tüntessünk fel, akár szó szerint idézünk, akár csak átfogalmazzuk a gondolatot.
2. Jegyezzük fel a forrásokat már a kutatás/jegyzetelés közben, ne a végén, utólag próbáljuk rekonstruálni.
3. Használjunk konzisztensen egyetlen hivatkozási stílust a teljes dolgozatban.

## Összefoglalás

A könyvtárhasználat és a helyes hivatkozáskezelés az önálló, tudományos igényű kutatómunka (pl. egy iskolai projektmunka vagy szakdolgozat) alapkövetelménye, amely egyben a forráskritikus, etikus tudásfelhasználást is biztosítja.
`,
    key_concepts: [
      "szakrendi osztályozás és jelzet",
      "könyvtári katalógus (OPAC)",
      "hivatkozási stílusok (APA, MLA)",
      "irodalomjegyzék",
      "plágium és parafrázis",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mire szolgál a könyvtári jelzet?",
        options: [
          "Azonosítja a dokumentum témakörét és helyét a polcon a szakrendi rendszerben",
          "A könyv árát jelöli",
          "A könyv szerzőjének személyi adatait tartalmazza",
          "Kizárólag a könyv kiadási évét mutatja",
        ],
        correct_answer: "Azonosítja a dokumentum témakörét és helyét a polcon a szakrendi rendszerben",
        explanation: "A jelzet a szakrendi osztályozási rendszer szerint azonosítja egy dokumentum témakörét, és megmutatja, hol található a könyvtár polcain.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a plágium?",
        options: [
          "Más szellemi tulajdonának forrásmegjelölés nélküli, sajátként való feltüntetése",
          "Egy könyv kölcsönzése a könyvtárból",
          "Egy forrás pontos, idézőjeles és hivatkozott átvétele",
          "Egy tudományos cikk lektorálása",
        ],
        correct_answer: "Más szellemi tulajdonának forrásmegjelölés nélküli, sajátként való feltüntetése",
        explanation: "A plágium lényege, hogy valaki más gondolatát, szövegét forrásmegjelölés nélkül saját munkájaként tünteti fel, ami etikai és szerzői jogi vétség egyaránt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kell egy parafrázisnál (saját szavakkal történő átfogalmazásnál) is forrást megjelölni?",
        options: [
          "Mert az átvett gondolat, ötlet ekkor sem a miénk, csak a megfogalmazás",
          "Mert a parafrázis mindig hosszabb, mint az eredeti szöveg",
          "Mert enélkül a szöveg nyelvtanilag hibás lesz",
          "A parafrázisnál valójában nem is kötelező forrást megjelölni",
        ],
        correct_answer: "Mert az átvett gondolat, ötlet ekkor sem a miénk, csak a megfogalmazás",
        explanation: "Parafrázis esetén csak a szöveg megfogalmazása változik, az eredeti gondolat, ötlet változatlanul a forrás szerzőjétől származik, ezért a hivatkozás ekkor is kötelező.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik forrástípus tekinthető jellemzően a legmegbízhatóbbnak egy tudományos kutatáshoz?",
        options: [
          "Lektorált tudományos folyóiratcikk",
          "Ellenőrizetlen közösségi média bejegyzés",
          "Egy ismeretlen szerzőjű blogbejegyzés",
          "Egy fórumon található hozzászólás",
        ],
        correct_answer: "Lektorált tudományos folyóiratcikk",
        explanation: "A lektorált (peer-reviewed) tudományos folyóiratcikkeket más szakértők ellenőrzik megjelenés előtt, ezért ezek számítanak a legmegbízhatóbb forrástípusnak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a helyes gyakorlat a források kezelésével kapcsolatban egy hosszabb kutatómunka során?",
        options: [
          "A forrásokat már a kutatás/jegyzetelés közben fel kell jegyezni, nem a végén utólag rekonstruálni",
          "Elég csak a dolgozat teljes elkészülte után visszaemlékezni, mely forrásokat használtuk",
          "Elegendő csak a szó szerinti idézeteket hivatkozni, a parafrázisokat nem",
          "A hivatkozási stílust dolgozaton belül érdemes fejezetenként váltogatni",
        ],
        correct_answer: "A forrásokat már a kutatás/jegyzetelés közben fel kell jegyezni, nem a végén utólag rekonstruálni",
        explanation: "A megbízható, pontos hivatkozás érdekében a forrásokat már a kutatómunka és jegyzetelés folyamán érdemes rögzíteni, mert utólag, a dolgozat végén rekonstruálni ezeket nehéz és hibalehetőséggel jár.",
        difficulty: 3,
      },
    ],
  },
];
