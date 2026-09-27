import { TopicSeed } from "./angol";

export const matekTovabbiTemakTopics: TopicSeed[] = [
  {
    slug: "negyzetgyok-es-a-negyzetgyokos-kifejezesek-azonossagai",
    title: "Négyzetgyök és a négyzetgyökös kifejezések azonosságai",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 19,
    summary_markdown:
      "A négyzetgyök (és általánosabban az n-edik gyök) az azonos alapú hatványozás megfordítása; a gyökvonás azonosságai teszik lehetővé a gyökös kifejezések egyszerűsítését és a négyzetgyökös egyenletek megoldását.",
    content_markdown: `
## A négyzetgyök fogalma

Egy nemnegatív valós szám **négyzetgyöke (√a)** az a nemnegatív valós szám, amelynek négyzete a-val egyenlő. A négyzetgyök tehát csak nemnegatív számokra van értelmezve a valós számok halmazán, és maga a négyzetgyök is mindig nemnegatív (**√a ≥ 0** minden a ≥ 0 esetén).

## Az n-edik gyök általánosítása

A négyzetgyök fogalma általánosítható **n-edik gyökre** is: az ⁿ√a (n pozitív egész, n ≥ 2) az a szám, amelyet n-edik hatványra emelve a-t kapunk. Páros n esetén (négyzetgyök, negyedik gyök stb.) csak nemnegatív számoknak van valós gyöke, és a gyök maga is nemnegatív. Páratlan n esetén (köbgyök, ötödik gyök stb.) minden valós számnak van valós gyöke, beleértve a negatív számokat is.

## A gyökvonás azonosságai

A gyökvonásra vonatkozó legfontosabb azonosságok: **√(a·b) = √a · √b** (a, b ≥ 0 esetén — szorzat gyöke a gyökök szorzata); **√(a/b) = √a / √b** (a ≥ 0, b > 0 esetén — hányados gyöke a gyökök hányadosa); **(√a)² = a** (a ≥ 0 esetén). Fontos, hogy **√(a+b) ≠ √a + √b** általában — ez az egyik leggyakoribb hibaforrás.

## A racionális kitevőjű hatvány és a gyökvonás kapcsolata

A gyökvonás felírható **törtkitevős hatványként** is: **a^(1/n) = ⁿ√a**, általánosabban **a^(m/n) = ⁿ√(aᵐ)**. Ez az azonosság összeköti a hatványozás és a gyökvonás szabályrendszerét, lehetővé téve, hogy a gyökös kifejezéseket a korábban tanult hatványazonosságokkal (aᵐ·aⁿ=aᵐ⁺ⁿ stb.) kezeljük.

## A nevezetes azonosságok és a gyöktelenítés

A gyökös kifejezések egyszerűsítéséhez gyakran alkalmazzuk a **nevezetes azonosságokat** (pl. (a+b)² = a²+2ab+b², (a-b)(a+b) = a²-b²) gyökös kifejezésekre is. A **nevező gyöktelenítése** olyan technika, amellyel egy törtben a nevezőben szereplő gyökös kifejezést eltávolítjuk (a számláló és a nevező egyaránt megszorzásával a nevező "konjugáltjával"), például: 1/√2 = √2/2.

## Négyzetgyökös egyenletek

A **négyzetgyökös egyenletek** megoldásának alapötlete a gyökjel eltávolítása mindkét oldal négyzetre emelésével. Mivel a négyzetre emelés **nem ekvivalens átalakítás** (hamis gyököket hozhat létre), minden megoldást **kötelezően vissza kell helyettesíteni** az eredeti egyenletbe az ellenőrzéshez. Az egyenlet **értelmezési tartományát** is figyelembe kell venni: a gyökjel alatti kifejezés nem lehet negatív.

## Gyakorlati alkalmazások

A négyzetgyökvonás számos gyakorlati és matematikai probléma alapja: a Pitagorasz-tételből adódó távolságszámítás, a másodfokú egyenlet megoldóképlete, a statisztikai szórás kiszámítása, valamint a fizika számos képlete (pl. szabadesés ideje) mind négyzetgyökvonást igényel.

## Jelentősége

A négyzetgyök és az n-edik gyök fogalmának, azonosságainak és a hozzájuk kapcsolódó egyenlettípusoknak az ismerete alapvető algebrai eszköz, amely szorosan összekapcsolódik a hatványozással, és számos további matematikai terület (geometria, statisztika, egyenletek) megoldásában nélkülözhetetlen.
`,
    key_concepts: [
      "négyzetgyök: √a ≥ 0, (√a)² = a",
      "n-edik gyök (páros és páratlan kitevő)",
      "gyökvonás azonosságai: √(ab)=√a·√b",
      "törtkitevős hatvány: a^(1/n) = ⁿ√a",
      "négyzetgyökös egyenletek és az ellenőrzés szükségessége",
    ],
    source_refs: [
      { label: "A négyzetgyökvonás definíciója és azonosságai (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/negyzetgyokvonas-definicioja-es-azonossagai" },
      { label: "Négyzetgyökös egyenletek (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/negyzetgyokos-egyenletek" },
      { label: "Négyzetgyök (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Négyzetgyök" },
      { label: "Gyökfogalom – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/gyokfogalom/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mennyi √(16·9) értéke?",
        options: ["12", "144", "5", "25"],
        correct_answer: "12",
        explanation: "√(16·9) = √16 · √9 = 4 · 3 = 12.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik állítás igaz a négyzetgyökre?",
        options: ["√a mindig nemnegatív, ha a ≥ 0", "√a lehet negatív", "√(a+b) = √a + √b mindig", "√a csak negatív számokra értelmezhető"],
        correct_answer: "√a mindig nemnegatív, ha a ≥ 0",
        explanation: "A négyzetgyök definíció szerint mindig nemnegatív szám, és csak nemnegatív a esetén értelmezett a valós számok halmazán.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan írható fel a^(1/3) gyökös alakban?",
        options: ["³√a", "√a", "a³", "1/a³"],
        correct_answer: "³√a",
        explanation: "A törtkitevő 1/n az n-edik gyökvonásnak felel meg: a^(1/3) = ³√a (köbgyök).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kell mindig ellenőrizni a négyzetgyökös egyenlet megoldását az eredeti egyenletbe való visszahelyettesítéssel?",
        options: [
          "mert a négyzetre emelés nem ekvivalens átalakítás, hamis gyököket hozhat létre",
          "mert a négyzetgyöknek soha nincs megoldása",
          "mert az ellenőrzés opcionális és felesleges",
          "mert minden négyzetgyökös egyenletnek végtelen sok megoldása van"
        ],
        correct_answer: "mert a négyzetre emelés nem ekvivalens átalakítás, hamis gyököket hozhat létre",
        explanation: "A négyzetre emelés során olyan hamis (idegen) gyökök keletkezhetnek, amelyek nem elégítik ki az eredeti egyenletet, ezért az ellenőrzés kötelező.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a nevező gyöktelenítésének célja az 1/√2 kifejezésnél?",
        options: [
          "hogy a nevezőből eltávolítsuk a gyökös kifejezést (pl. √2/2 alakra hozva)",
          "hogy a számlálót négyzetre emeljük",
          "hogy az egész kifejezést negatívvá tegyük",
          "hogy a törtet egésszé alakítsuk"
        ],
        correct_answer: "hogy a nevezőből eltávolítsuk a gyökös kifejezést (pl. √2/2 alakra hozva)",
        explanation: "A gyöktelenítés célja, hogy a tört nevezőjében ne maradjon gyökös kifejezés, ami megkönnyíti a további számításokat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi (√11)² értéke?",
        options: ["11", "√11", "121", "-11"],
        correct_answer: "11",
        explanation: "A (√a)² = a azonosság alapján (√11)² = 11.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi √(25/16) értéke?",
        options: ["5/4", "25/16", "5/16", "2,5"],
        correct_answer: "5/4",
        explanation: "√(a/b) = √a/√b alapján √(25/16) = √25/√16 = 5/4.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egyszerűsítsd: √50.",
        options: ["5√2", "10√5", "25√2", "2√5"],
        correct_answer: "5√2",
        explanation: "√50 = √(25·2) = √25·√2 = 5√2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az 1/√3 kifejezés gyöktelenített (nevező nélküli gyökös) alakja?",
        options: ["√3/3", "3/√3", "1/3", "√3"],
        correct_answer: "√3/3",
        explanation: "A számlálót és nevezőt √3-mal szorozva: 1/√3 = √3/(√3·√3) = √3/3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Van-e valós köbgyöke a -8 számnak?",
        options: [
          "igen, mert páratlan (n=3) gyöknek minden valós számra van valós értéke, ³√(-8) = -2",
          "nem, negatív számnak sosem lehet gyöke",
          "igen, de csak pozitív érték lehet",
          "nem lehet meghatározni"
        ],
        correct_answer: "igen, mert páratlan (n=3) gyöknek minden valós számra van valós értéke, ³√(-8) = -2",
        explanation: "Páratlan n esetén minden valós számnak (a negatívoknak is) van valós n-edik gyöke; (-2)³ = -8, tehát ³√(-8) = -2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan írható fel a^(2/3) gyökös alakban?",
        options: ["³√(a²)", "²√(a³)", "√a²/3", "a²/3"],
        correct_answer: "³√(a²)",
        explanation: "Az a^(m/n) = ⁿ√(aᵐ) azonosság alapján a^(2/3) = ³√(a²).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg és ellenőrizd: √(x+1) = 3.",
        options: ["x = 8", "x = 9", "x = 2", "x = 10"],
        correct_answer: "x = 8",
        explanation: "Négyzetre emelve: x+1=9, tehát x=8; ellenőrzés: √(8+1)=√9=3, ami igaz.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg és ellenőrizd: √(2x-3) = x-3.",
        options: ["x = 6 (mert x = 2 hamis gyök)", "x = 2 és x = 6", "x = 2 (mert x = 6 hamis gyök)", "nincs megoldás"],
        correct_answer: "x = 6 (mert x = 2 hamis gyök)",
        explanation: "Négyzetre emelve x²-8x+12=0, azaz x=2 vagy x=6. Ellenőrzéssel x=2-nél a jobb oldal negatív (-1), ami nem lehet egyenlő a nemnegatív bal oldallal, tehát hamis gyök; x=6 esetén √9=3=6-3, ez igaz.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi (√3+1)² egyszerűsített alakja?",
        options: ["4+2√3", "4+√3", "3+2√3", "10"],
        correct_answer: "4+2√3",
        explanation: "(√3+1)² = (√3)²+2·√3·1+1² = 3+2√3+1 = 4+2√3.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik állítás igaz √a-ra és √b-re (a,b ≥ 0)?",
        options: ["√(a·b) = √a·√b", "√(a+b) = √a+√b", "√a·√b = a+b", "√(a·b) = a·b"],
        correct_answer: "√(a·b) = √a·√b",
        explanation: "A szorzat gyöke a gyökök szorzata: √(a·b) = √a·√b (a,b≥0 esetén); fontos, hogy √(a+b) ≠ √a+√b általában.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "grafok-alapfogalmai-grafelmelet",
    title: "Gráfok alapfogalmai (gráfelmélet)",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 20,
    summary_markdown:
      "A gráf pontokból (csúcsokból) és a köztük húzott élekből álló matematikai struktúra, amely a Königsbergi hidak problémájától a mai közlekedési és informatikai hálózatok modellezéséig számos gyakorlati probléma absztrakt leírására szolgál.",
    content_markdown: `
## A gráf fogalma

A **gráf** pontokból (**csúcsokból**) és a csúcsokat összekötő vonalakból (**élekből**) álló matematikai struktúra, amelyben minden élre legalább egy, legfeljebb két csúcs illeszkedik. A gráfok alkalmasak arra, hogy objektumok közötti **kapcsolatokat** szemléltessenek — a konkrét geometriai elhelyezkedés (a csúcsok pontos pozíciója, az élek hossza vagy alakja) általában nem számít, csak az, hogy mely csúcsok vannak összekötve.

## A gráfelmélet története: a königsbergi hidak problémája

A gráfelmélet a matematika egyik viszonylag fiatal ága, amelynek születése **Leonhard Euler 1736-os** tanulmányához köthető: Euler megoldotta a königsbergi hidak problémáját (lehetséges-e úgy sétát tenni a városban, hogy mind a hét hídon pontosan egyszer haladjunk át), és bebizonyította, hogy ez lehetetlen — ezzel megalapozta a gráfelmélet tudományát.

## Alapfogalmak: fokszám, egyszerű gráf, teljes gráf

Egy csúcsba befutó élek száma a csúcs **fokszáma**. Egy csúcs, amelynek fokszáma nulla, **izolált csúcs**. **Egyszerű gráfnak** nevezzük azt a gráfot, amelyben nincs hurokél (egy csúcsot önmagával összekötő él) és két csúcs között legfeljebb egy él fut. **Teljes gráfnak** nevezzük azt az egyszerű gráfot, amelyben minden csúcspár között fut él.

## A fokszámok összegére vonatkozó tétel

Alapvető tétel a gráfelméletben, hogy **bármely véges gráfban a fokszámok összege az élek számának kétszerese** (mivel minden él a két végpontjánál egyszer-egyszer, összesen kétszer kerül beleszámításra a fokszámok összegébe). Ebből az is következik, hogy egy gráfban a **páratlan fokszámú csúcsok száma mindig páros**.

## Út és kör a gráfban

Egy gráfban **útnak** nevezzük a csúcsok és élek olyan váltakozó sorozatát, amelyben egymást követő csúcsok éllel vannak összekötve, és minden csúcs (és él) legfeljebb egyszer szerepel. Ha az út kezdő- és végpontja megegyezik, **körről** beszélünk. Egy gráf **összefüggő**, ha bármely két csúcsa között vezet út.

## Az Euler-séta és az Euler-kör

Egy gráfban **Euler-sétának** nevezzük azt a sétát, amely a gráf minden élét pontosan egyszer érinti. Euler tétele szerint egy összefüggő gráfban akkor és csak akkor létezik Euler-kör (olyan Euler-séta, amely visszatér a kiindulási pontba), ha a gráf minden csúcsának fokszáma páros — ez magyarázza, miért volt lehetetlen a königsbergi hidak bejárása (ahol volt páratlan fokszámú csúcs).

## Gráfok gyakorlati alkalmazásai

A gráfelmélet rendkívül széles körben alkalmazható: **térképek színezése** (hány szín szükséges úgy, hogy szomszédos országok/régiók ne kapjanak azonos színt — négyszín-tétel), **közlekedési és útvonaltervezési** problémák (legrövidebb út keresése), **számítógépes hálózatok** modellezése, **közösségi hálók** elemzése, valamint **ütemezési feladatok** (pl. vizsgaidőpontok ütközésmentes beosztása) mind gráfelméleti eszközökkel oldhatók meg hatékonyan.

## Jelentősége

A gráfelmélet alapfogalmainak (csúcs, él, fokszám, út, kör, Euler-séta) ismerete a modern alkalmazott matematika egyik legfontosabb területére nyit ablakot: a gráfok absztrakt, mégis rendkívül gyakorlatias modellje szinte minden tudományágban — matematikán, informatikán, fizikán, biológián, közgazdaságtanon — megjelenik komplex kapcsolatrendszerek leírására.
`,
    key_concepts: [
      "gráf: csúcsok és élek",
      "fokszám és a fokszámösszeg tétele",
      "út, kör, összefüggő gráf",
      "Euler-séta és Euler-kör",
      "königsbergi hidak problémája",
    ],
    source_refs: [
      { label: "Gráfok (zanza.tv)", url: "https://zanza.tv/matematika/gondolkodasi-es-megismeresi-modszerek/grafok" },
      { label: "Gráfok alkalmazása a gyakorlatban (zanza.tv)", url: "https://zanza.tv/matematika/gondolkodasi-es-megismeresi-modszerek/grafok-alkalmazasa-gyakorlatban" },
      { label: "Gráfelmélet (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Gráfelmélet" },
      { label: "Gráfelmélet – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/grafelmelet/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a gráf fokszám-összegére vonatkozó tétel?",
        options: [
          "a fokszámok összege az élek számának kétszerese",
          "a fokszámok összege a csúcsok számával egyenlő",
          "a fokszámok összege mindig páratlan",
          "a fokszámok összege az élek számával egyenlő"
        ],
        correct_answer: "a fokszámok összege az élek számának kétszerese",
        explanation: "Minden él két csúcsánál egyszer-egyszer számít bele a fokszámba, ezért a fokszámok összege mindig az élek számának kétszerese.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki oldotta meg elsőként a königsbergi hidak problémáját, ezzel megalapozva a gráfelméletet?",
        options: ["Leonhard Euler", "Pitagorasz", "Carl Friedrich Gauss", "Blaise Pascal"],
        correct_answer: "Leonhard Euler",
        explanation: "Euler 1736-os tanulmánya, amely a königsbergi hidak problémáját oldotta meg, a gráfelmélet megszületésének kiindulópontja.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk izolált csúcsnak?",
        options: ["olyan csúcsot, amelynek fokszáma nulla", "olyan csúcsot, amely minden más csúccsal össze van kötve", "a gráf legnagyobb fokszámú csúcsát", "egy kör kezdőpontját"],
        correct_answer: "olyan csúcsot, amelynek fokszáma nulla",
        explanation: "Az izolált csúcsból nem indul ki egyetlen él sem, tehát fokszáma nulla.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor létezik Euler-kör egy összefüggő gráfban?",
        options: [
          "ha minden csúcs fokszáma páros",
          "ha minden csúcs fokszáma páratlan",
          "ha a gráf teljes gráf",
          "soha nem létezik"
        ],
        correct_answer: "ha minden csúcs fokszáma páros",
        explanation: "Euler tétele szerint egy összefüggő gráfban pontosan akkor létezik Euler-kör, ha minden csúcs fokszáma páros.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk teljes gráfnak?",
        options: [
          "olyan egyszerű gráfot, amelyben minden csúcspár között fut él",
          "olyan gráfot, amelynek nincs éle",
          "olyan gráfot, amelynek csak egy csúcsa van",
          "olyan gráfot, amelyben minden csúcs izolált"
        ],
        correct_answer: "olyan egyszerű gráfot, amelyben minden csúcspár között fut él",
        explanation: "A teljes gráf definíció szerint olyan egyszerű gráf, amelyben bármely két csúcs között van él.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk egyszerű gráfnak?",
        options: [
          "olyan gráfot, amelyben nincs hurokél, és két csúcs között legfeljebb egy él fut",
          "olyan gráfot, amelyben minden csúcs izolált",
          "olyan gráfot, amelynek nincs éle",
          "olyan gráfot, amelyben minden élre három csúcs illeszkedik"
        ],
        correct_answer: "olyan gráfot, amelyben nincs hurokél, és két csúcs között legfeljebb egy él fut",
        explanation: "Az egyszerű gráfban nincs hurokél (önmagával összekötő él), és két csúcs között legfeljebb egy él húzható.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk összefüggő gráfnak?",
        options: [
          "olyan gráfot, amelyben bármely két csúcs között vezet út",
          "olyan gráfot, amelynek nincsenek élei",
          "olyan gráfot, amelyben minden csúcs izolált",
          "olyan gráfot, amelynek pontosan egy éle van"
        ],
        correct_answer: "olyan gráfot, amelyben bármely két csúcs között vezet út",
        explanation: "Egy gráf összefüggő, ha a csúcsai közül bármely kettő között létezik út.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az út és a kör között egy gráfban?",
        options: ["a kör kezdő- és végpontja megegyezik, az útnál nem", "az útnak nincs kezdőpontja", "a kör mindig hosszabb, mint az út", "nincs különbség köztük"],
        correct_answer: "a kör kezdő- és végpontja megegyezik, az útnál nem",
        explanation: "Ha az út kezdő- és végpontja megegyezik, körről beszélünk; egyébként útról.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy gráfnak 6 éle van. Mennyi a csúcsok fokszámainak összege?",
        options: ["12", "6", "3", "36"],
        correct_answer: "12",
        explanation: "A fokszámok összege az élek számának kétszerese: 2·6 = 12.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy gráf csúcsainak fokszámösszege 20. Hány éle van a gráfnak?",
        options: ["10", "20", "40", "5"],
        correct_answer: "10",
        explanation: "A fokszámok összege az élek számának kétszerese, tehát az élek száma 20/2 = 10.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor létezik egy gráfban Euler-séta (nem feltétlenül Euler-kör)?",
        options: ["ha legfeljebb két páratlan fokszámú csúcs van (0 vagy 2)", "ha minden csúcs páratlan fokszámú", "ha a gráfnak nincs éle", "csak teljes gráfban létezhet"],
        correct_answer: "ha legfeljebb két páratlan fokszámú csúcs van (0 vagy 2)",
        explanation: "Euler-séta akkor létezik, ha a gráf páratlan fokszámú csúcsainak száma 0 (ekkor Euler-kör is van) vagy 2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik állítás igaz a páratlan fokszámú csúcsok számára egy véges gráfban?",
        options: ["mindig páros", "mindig páratlan", "mindig nulla", "mindig egyenlő az élek számával"],
        correct_answer: "mindig páros",
        explanation: "A fokszámösszeg tételéből következik, hogy egy gráfban a páratlan fokszámú csúcsok száma mindig páros.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért volt lehetetlen a königsbergi hidak bejárása Euler tétele szerint?",
        options: ["mert a gráfban páratlan fokszámú csúcsok voltak, nem csak páros", "mert túl sok híd volt", "mert a gráf nem volt összefüggő", "mert nem volt semmilyen él a gráfban"],
        correct_answer: "mert a gráfban páratlan fokszámú csúcsok voltak, nem csak páros",
        explanation: "A königsbergi hidak gráfjában voltak páratlan fokszámú csúcsok, így Euler tétele szerint nem létezhetett Euler-kör (a teljes bejárás).",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy teljes gráfnak 5 csúcsa van. Hány éle van?",
        options: ["10", "5", "20", "25"],
        correct_answer: "10",
        explanation: "Teljes gráfban minden csúcspár között fut él, az élek száma n(n-1)/2 = 5·4/2 = 10.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik gyakorlati problémára alkalmazható jellemzően a gráfelmélet a \"négyszín-tétel\" kapcsán?",
        options: ["térképek (országok/régiók) színezése", "hangok frekvenciájának mérése", "valószínűségek számítása", "statisztikai szórás kiszámítása"],
        correct_answer: "térképek (országok/régiók) színezése",
        explanation: "A négyszín-tétel a térképszínezési problémákkal kapcsolatos: hány szín szükséges úgy, hogy szomszédos régiók ne kapjanak azonos színt.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "masodfoku-egyenlotlensegek-es-egyenlotlensegrendszerek",
    title: "Másodfokú egyenlőtlenségek és egyenlőtlenségrendszerek",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 21,
    summary_markdown:
      "A másodfokú egyenlőtlenségek grafikus (parabola alapú) vagy előjelvizsgálati módszerrel oldhatók meg; több feltétel együttes teljesülése esetén egyenlőtlenségrendszerről beszélünk, amelynek megoldása az egyes megoldáshalmazok metszete.",
    content_markdown: `
## A másodfokú egyenlőtlenség fogalma

A **másodfokú egyenlőtlenség** ax² + bx + c > 0 (vagy <, ≥, ≤) alakú, ahol a ≠ 0. A megoldás megkereséséhez a kifejezést először **nullára rendezzük**, majd a hozzá tartozó másodfokú függvényt (parabolát) vizsgáljuk.

## A grafikus megoldási módszer

A másodfokú egyenlőtlenség grafikus megoldásának lépései: (1) megoldjuk a hozzá tartozó másodfokú **egyenletet** (megoldóképlettel meghatározzuk a parabola zérushelyeit); (2) felvázoljuk a **parabola grafikonját** (figyelve, hogy a főegyüttható előjele szerint felfelé vagy lefelé nyitott-e); (3) leolvassuk, mely x-értékeknél van a parabola az x-tengely **fölött** (pozitív értékek) vagy **alatt** (negatív értékek), a kérdéses egyenlőtlenségi jelnek megfelelően.

## Az előjelvizsgálati (szorzattá alakításos) módszer

Ha a másodfokú kifejezés **szorzattá alakítható** (gyöktényezős alakra hozható: a(x-x₁)(x-x₂)), a megoldás **előjelvizsgálattal** is meghatározható: a számegyenesen berajzoljuk a gyököket, amelyek felosztják a számegyenest intervallumokra, majd minden intervallumban megvizsgáljuk (egy próbaérték behelyettesítésével), hogy a kifejezés pozitív vagy negatív-e az adott intervallumban.

## A diszkrimináns szerepe

A diszkrimináns (D = b²-4ac) előjele meghatározza a megoldás jellegét is. Ha **D > 0**, a parabolának két zérushelye van, és a megoldáshalmaz jellemzően egy intervallum vagy két félegyenes uniója (az egyenlőtlenségi jeltől és a főegyüttható előjelétől függően). Ha **D = 0**, a parabola érinti az x-tengelyt egyetlen pontban. Ha **D < 0**, a parabolának nincs zérushelye, ekkor a másodfokú kifejezés előjele állandó (mindig pozitív vagy mindig negatív, a főegyüttható előjelétől függően) — ilyenkor az egyenlőtlenség vagy minden valós számra, vagy egyetlen számra sem teljesül.

## Az egyenlőtlenségrendszerek

Az **egyenlőtlenségrendszer** két vagy több egyenlőtlenség együttes teljesülését írja elő. Az egyenlőtlenségrendszer **megoldáshalmaza** az egyes egyenlőtlenségek megoldáshalmazainak **metszete** — vagyis azok az x-értékek, amelyek minden egyes egyenlőtlenséget egyszerre kielégítenek. A megoldás megtalálásának hatékony módja, hogy minden egyenlőtlenség megoldáshalmazát külön-külön ábrázoljuk a számegyenesen, majd megkeressük a közös részt.

## Törtes egyenlőtlenségek

A **törtet tartalmazó egyenlőtlenségek** megoldásánál különös figyelmet kell fordítani arra, hogy a nevező **nem lehet nulla** (értelmezési tartomány), és hogy a nevezővel való szorzás iránya a nevező előjelétől függ — emiatt ezeket a feladatokat is jellemzően előjeltáblázattal (a számláló és a nevező előjelének külön-külön vizsgálatával) oldjuk meg, nem pedig egyszerű szorzással.

## Gyakorlati alkalmazások

A másodfokú egyenlőtlenségek és egyenlőtlenségrendszerek számos optimalizálási és korlátozási feladatban jelennek meg: pl. egy vállalkozás nyereséges működési tartományának meghatározása (mikor pozitív a profitfüggvény), fizikai mozgások időtartományának vizsgálata, vagy erőforrás-korlátok közötti optimális megoldások keresése.

## Jelentősége

A másodfokú egyenlőtlenségek és egyenlőtlenségrendszerek megoldási technikáinak (grafikus módszer, előjelvizsgálat) ismerete szorosan kapcsolódik a másodfokú egyenletekhez és függvényekhez, és számos alkalmazott matematikai probléma (optimalizálás, korlátozott tartományok) megoldásának alapja.
`,
    key_concepts: [
      "másodfokú egyenlőtlenség grafikus megoldása",
      "előjelvizsgálat gyöktényezős alakkal",
      "diszkrimináns hatása a megoldáshalmazra",
      "egyenlőtlenségrendszer: megoldáshalmazok metszete",
      "törtes egyenlőtlenségek és az értelmezési tartomány",
    ],
    source_refs: [
      { label: "Másodfokú egyenlőtlenségek (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/masodfoku-egyenlotlensegek" },
      { label: "A másodfokú egyenletrendszer (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/masodfoku-egyenletrendszer" },
      { label: "Egyenlőtlenség (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Egyenlőtlenség" },
      { label: "Másodfokú egyenlőtlenségek megoldása – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/videok/matematika/masodfoku-egyenlotlensegek-megoldasa/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az első lépés egy másodfokú egyenlőtlenség megoldásánál?",
        options: [
          "nullára rendezzük a kifejezést",
          "azonnal négyzetre emeljük mindkét oldalt",
          "elosztjuk a nagyobb együtthatóval",
          "kizárjuk a negatív számokat"
        ],
        correct_answer: "nullára rendezzük a kifejezést",
        explanation: "A megoldás első lépése, hogy a kifejezést nullára rendezzük, hogy a hozzá tartozó másodfokú függvényt (parabolát) vizsgálhassuk.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a diszkrimináns D < 0 esete egy másodfokú kifejezésnél?",
        options: [
          "a parabolának nincs zérushelye, a kifejezés előjele állandó",
          "a parabolának két zérushelye van",
          "a parabola érinti az x-tengelyt",
          "a kifejezés mindig nulla"
        ],
        correct_answer: "a parabolának nincs zérushelye, a kifejezés előjele állandó",
        explanation: "D<0 esetén a parabola nem metszi az x-tengelyt, ezért a kifejezés előjele minden x-re azonos (mindig pozitív vagy mindig negatív).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az egyenlőtlenségrendszer megoldáshalmaza?",
        options: [
          "az egyes egyenlőtlenségek megoldáshalmazainak metszete",
          "az egyes egyenlőtlenségek megoldáshalmazainak uniója",
          "csak az első egyenlőtlenség megoldása",
          "mindig az üres halmaz"
        ],
        correct_answer: "az egyes egyenlőtlenségek megoldáshalmazainak metszete",
        explanation: "Az egyenlőtlenségrendszer megoldása azokból az értékekből áll, amelyek MINDEN egyenlőtlenséget egyszerre kielégítenek — ez a metszet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kell külön figyelni a törtes egyenlőtlenségeknél a nevező előjelére?",
        options: [
          "mert a nevezővel való szorzás iránya a nevező előjelétől függ, és a nevező nem lehet nulla",
          "mert a törtekben soha nincs megoldás",
          "mert a nevező mindig pozitív",
          "mert csak egész számokkal lehet dolgozni"
        ],
        correct_answer: "mert a nevezővel való szorzás iránya a nevező előjelétől függ, és a nevező nem lehet nulla",
        explanation: "Ha negatív nevezővel szorzunk, az egyenlőtlenség iránya megfordul, ráadásul a nevező nem lehet nulla (értelmezési tartomány korlátozása).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen módszerrel oldható meg egy szorzattá alakítható másodfokú egyenlőtlenség a grafikus módszer mellett?",
        options: [
          "előjelvizsgálattal a gyökök által meghatározott intervallumokon",
          "kizárólag négyzetgyökvonással",
          "kizárólag logaritmus segítségével",
          "csak számítógép segítségével"
        ],
        correct_answer: "előjelvizsgálattal a gyökök által meghatározott intervallumokon",
        explanation: "A gyöktényezős alakra hozott kifejezés előjele az egyes gyökök által meghatározott intervallumokon próbaértékek behelyettesítésével vizsgálható.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a D = 0 eset egy másodfokú kifejezésnél?",
        options: ["a parabola érinti az x-tengelyt egyetlen pontban", "a parabolának két zérushelye van", "a parabolának nincs zérushelye", "a parabola nem létezik"],
        correct_answer: "a parabola érinti az x-tengelyt egyetlen pontban",
        explanation: "D = 0 esetén a parabolának egyetlen (kétszeres) zérushelye van, tehát érinti az x-tengelyt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a D > 0 eset egy másodfokú kifejezésnél?",
        options: ["a parabolának két zérushelye van", "a parabolának nincs zérushelye", "a parabola érinti az x-tengelyt", "a parabola egy egyenes"],
        correct_answer: "a parabolának két zérushelye van",
        explanation: "D > 0 esetén a másodfokú egyenletnek két különböző valós megoldása, azaz a parabolának két zérushelye van.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: x² - 5x + 6 > 0.",
        options: ["x < 2 vagy x > 3", "2 < x < 3", "x < 3 vagy x > 2 (mindig igaz)", "nincs megoldás"],
        correct_answer: "x < 2 vagy x > 3",
        explanation: "A kifejezés gyöktényezős alakja (x-2)(x-3); a felfelé nyíló parabola a gyökökön kívül pozitív, tehát x<2 vagy x>3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: x² - 4 ≤ 0.",
        options: ["-2 ≤ x ≤ 2", "x ≤ -2 vagy x ≥ 2", "x < -2", "minden valós x"],
        correct_answer: "-2 ≤ x ≤ 2",
        explanation: "A gyökök ±2; a felfelé nyíló parabola a gyökök között negatív vagy nulla, tehát -2 ≤ x ≤ 2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: (x+3)(x-4) ≤ 0.",
        options: ["-3 ≤ x ≤ 4", "x ≤ -3 vagy x ≥ 4", "x < -3", "nincs megoldás"],
        correct_answer: "-3 ≤ x ≤ 4",
        explanation: "A gyökök -3 és 4; a felfelé nyíló parabola a gyökök között negatív vagy nulla, tehát -3 ≤ x ≤ 4.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik a másodfokú egyenlőtlenség megoldáshalmazával, ha a főegyüttható (a) negatív, és D > 0?",
        options: [
          "a parabola lefelé nyílik, a gyökök közötti tartományon pozitív, azon kívül negatív",
          "a parabola felfelé nyílik",
          "nincs hatása a főegyüttható előjelének",
          "a megoldáshalmaz mindig üres"
        ],
        correct_answer: "a parabola lefelé nyílik, a gyökök közötti tartományon pozitív, azon kívül negatív",
        explanation: "Ha a < 0, a parabola lefelé nyílik, ezért a gyökök közötti tartományon pozitív, azokon kívül negatív az előjele.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg az egyenlőtlenségrendszert: x > 1 és x < 5.",
        options: ["1 < x < 5", "x < 1 vagy x > 5", "x = 3", "nincs megoldás"],
        correct_answer: "1 < x < 5",
        explanation: "A két feltétel metszete (a közös megoldáshalmaz) az 1 < x < 5 intervallum.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: (x-1)/(x+2) > 0.",
        options: ["x < -2 vagy x > 1", "-2 < x < 1", "x > -2", "minden valós x, kivéve x = 1"],
        correct_answer: "x < -2 vagy x > 1",
        explanation: "A számláló zérushelye x=1, a nevezőé x=-2 (kizárt); előjelvizsgálattal a tört pozitív, ha x<-2 vagy x>1.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy vállalkozás profitfüggvénye P(x) = -x² + 8x - 12. Mely x értékekre nyereséges (P(x) > 0) a vállalkozás?",
        options: ["2 < x < 6", "x < 2 vagy x > 6", "x > 6", "0 < x < 12"],
        correct_answer: "2 < x < 6",
        explanation: "-x²+8x-12>0 egyenértékű x²-8x+12<0-val, melynek gyökei 2 és 6; a felfelé nyíló parabola a gyökök között negatív, tehát 2<x<6.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az egyenlőtlenségrendszer megoldásának megtalálásának hatékony módja?",
        options: [
          "minden egyenlőtlenség megoldáshalmazát a számegyenesen ábrázoljuk, majd megkeressük a közös részt",
          "csak az első egyenlőtlenséget oldjuk meg",
          "összeadjuk az egyenlőtlenségeket",
          "kizárólag grafikus szoftvert kell használni"
        ],
        correct_answer: "minden egyenlőtlenség megoldáshalmazát a számegyenesen ábrázoljuk, majd megkeressük a közös részt",
        explanation: "A hatékony megoldási mód, hogy az egyes egyenlőtlenségek megoldáshalmazát külön ábrázoljuk, majd megkeressük a közös részüket.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "a-szog-ivmerteke-korcikk-es-korszelet",
    title: "A szög ívmértéke, körcikk és körszelet",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 22,
    summary_markdown:
      "A szögek fokok mellett radiánban (ívmértékben) is mérhetők, ami a trigonometrikus függvények és a körrel kapcsolatos területszámítások (körcikk, körszelet) természetes mértékegysége.",
    content_markdown: `
## A szög ívmértéke (radián)

A szögek hagyományos fokmérése (0°-360°) mellett a matematikában gyakran használjuk az **ívmértéket (radiánt)** is. Az **1 radián** az a középponti szög, amelyhez a kör sugarával egyenlő hosszúságú körív tartozik. Mivel a teljes kör kerülete 2πr, a teljes szög (360°) ívmértéke **2π radián** — ebből következik, hogy 180° = π radián, és az átváltás képlete: **radián = fok · (π/180)**, illetve **fok = radián · (180/π)**.

## Miért fontos a radián?

A radián a matematikában "természetesebb" mértékegység, mint a fok, mivel közvetlenül a kör sugarához és kerületéhez kapcsolódik, ezért az analízisben (differenciál- és integrálszámításban) és a trigonometrikus függvények vizsgálatánál szinte kizárólag radiánban dolgoznak. Emiatt a szögfüggvények (szinusz, koszinusz) függvényként való ábrázolásakor is jellemzően radiánban mérjük a vízszintes tengelyt.

## A kör részei: körcikk

A **körcikk** a körlapnak azon része, amelyet egy középponti szög két szára és a hozzá tartozó körív határol — olyan, mint egy "szelet" a körből. A körcikk **területe** a teljes körterület olyan hányada, amilyen hányadát a középponti szög a teljes szögnek (360°, illetve 2π radián) kiteszi: **T_körcikk = (α/360°) · r²π** (fokban), vagy **T_körcikk = (α/2) · r²** (radiánban, ahol α a középponti szög radiánban).

## A körív hossza

A körcikkhez tartozó **körív hossza** hasonlóan számítható: **ív hossza = (α/360°) · 2rπ** (fokban), vagy egyszerűen **ív hossza = α · r** (radiánban) — ez utóbbi képlet szemlélteti jól, miért is "természetes" a radián mértékegység: a radiánban mért szög egyenesen arányos az ívhosszal, a sugár mint arányossági tényezővel.

## A kör részei: körszelet

A **körszelet** a körlapnak azon része, amelyet egy húr és a hozzá tartozó körív határol. A körszelet **területe** úgy számítható ki, hogy a körcikk területéből kivonjuk a középponti szög és a húr által meghatározott háromszög területét: **T_körszelet = T_körcikk - T_háromszög**, ahol a háromszög területe a T = (r² · sin α)/2 képlettel számítható (két oldala a sugár, közbezárt szöge a középponti szög).

## A kör egyéb részei

A kör további jellemző részei közé tartozik a **húr** (a kör két pontját összekötő szakasz), az **érintő** (a kört pontosan egy pontban érintő egyenes, amely merőleges az érintési pontba mutató sugárra), és a **szelő** (a kört két pontban metsző egyenes).

## Gyakorlati alkalmazások

A körcikk és körszelet területképletei, valamint a radián mértékegység számos gyakorlati problémában (kör alakú telkek, medencék, csővezetékek, óralapok, kerékpárkerekek elfordulása) alkalmazhatók, és a trigonometria, a forgómozgások leírása (szögsebesség) szempontjából is alapvető fontosságúak.

## Jelentősége

A szög ívmértékének, valamint a körcikk és körszelet fogalmának és területképletének ismerete összeköti a klasszikus síkgeometriát a trigonometriával és a későbbi analízissel, és számos gyakorlati geometriai számítás alapja.
`,
    key_concepts: [
      "radián (ívmérték): 180° = π radián",
      "körcikk területe: T = (α/2)·r² (radiánban)",
      "körív hossza: s = α·r (radiánban)",
      "körszelet területe: körcikk - háromszög",
      "a kör részei: húr, érintő, szelő",
    ],
    source_refs: [
      { label: "A szög mérése (zanza.tv)", url: "https://zanza.tv/matematika/geometria/szog-merese" },
      { label: "A kör és a részei (zanza.tv)", url: "https://zanza.tv/matematika/geometria/kor-es-reszei" },
      { label: "Fejezze ki a körcikk és a körszelet területét! – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/fejezze-ki-a-korcikk-es-a-korszelet-teruletet-a-sugar-es-a-kozepponti-szog-ivhossz-segitsegevel/" },
      { label: "körcikk (zanza.tv)", url: "https://zanza.tv/fogalom/korcikk" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hány radián a 180°?",
        options: ["π radián", "2π radián", "π/2 radián", "90 radián"],
        correct_answer: "π radián",
        explanation: "A 180° és a π radián egymásnak megfeleltethető alapértékek, mivel a teljes szög (360°) 2π radián.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a körcikk?",
        options: [
          "a körlapnak a középponti szög szárai és a hozzá tartozó körív által határolt része",
          "a kör két pontját összekötő szakasz",
          "a kört egy pontban érintő egyenes",
          "a teljes körvonal"
        ],
        correct_answer: "a körlapnak a középponti szög szárai és a hozzá tartozó körív által határolt része",
        explanation: "A körcikk a kör egy 'szelete', amelyet egy középponti szög két szára és a köztük lévő körív határol.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a körívhossz képlete radiánban mért α középponti szög és r sugár esetén?",
        options: ["s = α · r", "s = α / r", "s = 2πr", "s = α² · r"],
        correct_answer: "s = α · r",
        explanation: "Radiánban mért szög esetén a körívhossz egyszerűen a szög és a sugár szorzata: s = α·r.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan számítható ki a körszelet területe?",
        options: [
          "a körcikk területéből kivonva a középponti szög és húr által meghatározott háromszög területét",
          "a körcikk területét megszorozva kettővel",
          "a teljes kör területének felével",
          "a húr hosszának négyzetével"
        ],
        correct_answer: "a körcikk területéből kivonva a középponti szög és húr által meghatározott háromszög területét",
        explanation: "A körszelet a körcikkből a hozzá tartozó háromszög levonásával adódik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a kör érintőjének jellemzője?",
        options: [
          "pontosan egy pontban érinti a kört, és merőleges az érintési pontba mutató sugárra",
          "két pontban metszi a kört",
          "mindig átmegy a középponton",
          "soha nem merőleges semmire"
        ],
        correct_answer: "pontosan egy pontban érinti a kört, és merőleges az érintési pontba mutató sugárra",
        explanation: "Az érintő egyenes egyetlen közös ponttal rendelkezik a körrel, és merőleges az adott pontba húzott sugárra.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány radián a teljes szög (360°)?",
        options: ["2π radián", "π radián", "π/2 radián", "360 radián"],
        correct_answer: "2π radián",
        explanation: "A teljes kör kerülete 2πr, ezért a teljes szög (360°) ívmértéke 2π radián.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik képlet adja meg a körcikk területét, ha α a középponti szög fokban mérve?",
        options: ["(α/360°) · r²π", "(α/2) · r²", "α · r", "2πr"],
        correct_answer: "(α/360°) · r²π",
        explanation: "A körcikk területe a teljes körterület olyan hányada, amilyen hányadát α a 360°-hoz képest kitesz: T = (α/360°)·r²π.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány radián a 90°?",
        options: ["π/2 radián", "π radián", "2π radián", "π/4 radián"],
        correct_answer: "π/2 radián",
        explanation: "Mivel 180° = π radián, ezért 90° = π/2 radián.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora egy r = 6 sugarú kör 60°-os középponti szögű körcikkének területe?",
        options: ["6π", "36π", "12π", "3π"],
        correct_answer: "6π",
        explanation: "T = (60°/360°)·r²π = (1/6)·36π = 6π.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora az ívhossz egy r = 10 sugarú körben, ha a középponti szög π/5 radián?",
        options: ["2π", "π", "10π", "π/2"],
        correct_answer: "2π",
        explanation: "Radiánban az ívhossz s = α·r = (π/5)·10 = 2π.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk húrnak egy körben?",
        options: ["a kör két pontját összekötő szakaszt", "a kört egy pontban érintő egyenest", "a kört két pontban metsző egyenest", "a kör középpontját a kerülettel összekötő szakaszt"],
        correct_answer: "a kör két pontját összekötő szakaszt",
        explanation: "A húr a kör két pontját összekötő szakasz.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk szelőnek egy körnél?",
        options: ["a kört két pontban metsző egyenest", "a kör két pontját összekötő szakaszt", "a kört pontosan egy pontban érintő egyenest", "a kör átmérőjét"],
        correct_answer: "a kört két pontban metsző egyenest",
        explanation: "A szelő olyan egyenes, amely a kört két pontban metszi.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora egy r = 4 sugarú kör 90°-os középponti szögű körcikkének területe (radiánban számolva)?",
        options: ["4π", "8π", "2π", "16π"],
        correct_answer: "4π",
        explanation: "90° = π/2 radián, T = (α/2)·r² = (π/4)·16 = 4π.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért \"természetesebb\" mértékegység a radián a foknál az analízis szempontjából?",
        options: [
          "mert közvetlenül a kör sugarához és kerületéhez kapcsolódik (az ívhossz egyenesen arányos vele)",
          "mert könnyebb kiszámolni fejben",
          "mert a fok nem létezik",
          "mert a radián mindig egész szám"
        ],
        correct_answer: "mert közvetlenül a kör sugarához és kerületéhez kapcsolódik (az ívhossz egyenesen arányos vele)",
        explanation: "A radián a kör sugarához kapcsolódik: radiánban mérve az ívhossz egyenesen arányos a szöggel, a sugár arányossági tényezővel.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen mértékegységekben mérhetjük a szögeket a matematikában?",
        options: ["fokban és radiánban (ívmértékben)", "csak fokban", "csak radiánban", "csak grádban"],
        correct_answer: "fokban és radiánban (ívmértékben)",
        explanation: "A szögek hagyományos fokmérése mellett gyakran használjuk az ívmértéket (radiánt) is.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "statisztikai-mutatok-szoras-es-variancia",
    title: "Statisztikai mutatók: szórás és variancia",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 23,
    summary_markdown:
      "A szórás és a variancia az adatok átlagtól való eltérésének mértékét fejezik ki: minél nagyobb a szórás, annál inkább szétszóródnak az adatok az átlag körül — ez a statisztika egyik legfontosabb, sok területen (minőségbiztosítás, pénzügy, tudomány) alkalmazott mutatópárja.",
    content_markdown: `
## A szóródási mutatók szerepe

A korábban megismert középértékek (átlag, medián, módusz) önmagukban nem adnak teljes képet egy adatsorról: két adatsornak lehet azonos átlaga, miközben az egyik adatai szorosan az átlag körül csoportosulnak, a másiké pedig erősen szóródnak. Ezt a különbséget a **szóródási mutatók** (terjedelem, variancia, szórás) ragadják meg.

## A variancia (szórásnégyzet)

A **variancia (szórásnégyzet, jele σ² vagy s²)** kiszámításának lépései: (1) meghatározzuk az adatsor **átlagát**; (2) minden egyes adatból kivonjuk az átlagot, és a kapott eltéréseket **négyzetre emeljük** (ezzel biztosítva, hogy a pozitív és negatív eltérések ne "kioltsák" egymást); (3) ezeknek a négyzetes eltéréseknek vesszük az **átlagát**. Képlettel: **σ² = Σ(xᵢ - x̄)² / n**, ahol x̄ az átlag, n az adatok száma.

## A szórás

A **szórás (σ vagy s)** a variancia **négyzetgyöke**: **σ = √(Σ(xᵢ - x̄)² / n)**. A négyzetgyökvonásra azért van szükség, hogy a szóródási mutató **ugyanabban a mértékegységben** legyen kifejezve, mint az eredeti adatok (a variancia mértékegysége az eredeti adatok mértékegységének négyzete, ami nehezen értelmezhető gyakorlati mennyiség).

## A szórás értelmezése

A szórás azt fejezi ki, hogy az adatok **átlagosan mekkora távolságra** helyezkednek el az átlagtól. **Kis szórás** azt jelenti, hogy az adatok szorosan az átlag körül csoportosulnak (homogén adatsor); **nagy szórás** azt jelenti, hogy az adatok erősen szétszóródnak (heterogén adatsor). Két azonos átlagú adatsor összehasonlításakor a kisebb szórású adatsor "kiszámíthatóbb", "megbízhatóbb".

## A terjedelem mint egyszerűbb szóródási mutató

A **terjedelem** a legegyszerűbb szóródási mutató: a legnagyobb és a legkisebb adat különbsége. Előnye az egyszerű kiszámíthatóság, hátránya, hogy csak a két szélsőértéket veszi figyelembe, és nem érzékeny az adatok "belső" eloszlására — emiatt a szórás sokkal informatívabb, gyakrabban használt mutató.

## A szórás gyakorlati alkalmazásai

A szórás számos területen alapvető fontosságú: a **minőségbiztosításban** (egy gyártási folyamat mennyire egyenletes), a **pénzügyekben** (egy befektetés kockázatának, volatilitásának mérése — nagyobb szórás nagyobb kockázatot jelent), a **tudományos mérésekben** (a mérési eredmények szórása jelzi a mérés pontosságát/megbízhatóságát), és a **közvélemény-kutatásokban** (a válaszok szóródásának elemzése).

## A szórás és a normális eloszlás

Sok természetes és társadalmi jelenség (testmagasság, mérési hibák, IQ-pontszámok) közelítőleg **normális eloszlást** követ, amelynek jellegzetessége, hogy az adatok mintegy 68%-a az átlagtól egy szóráson belül, 95%-a két szóráson belül helyezkedik el — ez az összefüggés (az "empirikus szabály") a statisztika egyik legfontosabb, gyakorlati becslésekre is alkalmas eredménye.

## Jelentősége

A variancia és a szórás fogalmának, kiszámítási módjának és értelmezésének ismerete alapvető statisztikai készség: ezek a mutatók teszik lehetővé, hogy ne csak az adatok "közepét", hanem azok szóródását, megbízhatóságát, kiszámíthatóságát is objektíven jellemezzük és összehasonlítsuk.
`,
    key_concepts: [
      "variancia (szórásnégyzet): σ² = Σ(xᵢ-x̄)²/n",
      "szórás: σ = √variancia",
      "terjedelem (legnagyobb - legkisebb érték)",
      "kis vs. nagy szórás értelmezése",
      "szórás alkalmazása (kockázat, minőségbiztosítás)",
    ],
    source_refs: [
      { label: "Statisztika IV. – Statisztikai mutatók (zanza.tv)", url: "https://zanza.tv/matematika/valoszinuseg-statisztika/statisztika-iv-statisztikai-mutatok" },
      { label: "szórás (zanza.tv)", url: "https://zanza.tv/fogalom/szoras" },
      { label: "Statisztika feladatok a matek érettségiben – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/statisztika-feladatok-a-matek-erettsegiben/" },
      { label: "Statisztika III. (zanza.tv)", url: "https://zanza.tv/matematika/valoszinuseg-statisztika/statisztika-iii" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a variancia és a szórás kapcsolata?",
        options: [
          "a szórás a variancia négyzetgyöke",
          "a variancia a szórás négyzetgyöke",
          "a kettő mindig egyenlő",
          "nincs köztük matematikai kapcsolat"
        ],
        correct_answer: "a szórás a variancia négyzetgyöke",
        explanation: "A szórás a variancia (szórásnégyzet) négyzetgyöke: σ = √σ².",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért vesszük az eltérések négyzetét a variancia kiszámításánál?",
        options: [
          "hogy a pozitív és negatív eltérések ne oltsák ki egymást",
          "hogy az adatok nagyobbak legyenek",
          "mert csak így lehet átlagot számolni",
          "hogy csökkentsük az adatok számát"
        ],
        correct_answer: "hogy a pozitív és negatív eltérések ne oltsák ki egymást",
        explanation: "Ha nem emelnénk négyzetre, a pozitív és negatív eltérések összeadva mindig nullát adnának, ami hasznavehetetlenné tenné a mutatót.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a nagy szórás egy adatsorban?",
        options: [
          "az adatok erősen szétszóródnak az átlag körül",
          "az adatok szorosan az átlag körül csoportosulnak",
          "az adatsor átlaga nulla",
          "az adatsornak nincs átlaga"
        ],
        correct_answer: "az adatok erősen szétszóródnak az átlag körül",
        explanation: "A nagy szórás azt jelzi, hogy az egyes adatok átlagosan nagy távolságra vannak az átlagtól, tehát az adatsor heterogén.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a terjedelem legfőbb hátránya a szóráshoz képest?",
        options: [
          "csak a két szélsőértéket veszi figyelembe, nem érzékeny a belső eloszlásra",
          "nem lehet kiszámítani",
          "mindig nagyobb, mint a szórás",
          "csak negatív számokra értelmezhető"
        ],
        correct_answer: "csak a két szélsőértéket veszi figyelembe, nem érzékeny a belső eloszlásra",
        explanation: "A terjedelem csupán a legnagyobb és legkisebb érték különbsége, így nem tükrözi az adatok tényleges eloszlását az átlag körül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos a szórás a pénzügyi befektetések értékelésénél?",
        options: [
          "nagyobb szórás nagyobb kockázatot (volatilitást) jelez",
          "a szórás mindig megegyezik a hozammal",
          "a szórás csak a nyereséget mutatja",
          "a pénzügyekben nincs jelentősége a szórásnak"
        ],
        correct_answer: "nagyobb szórás nagyobb kockázatot (volatilitást) jelez",
        explanation: "A pénzügyi elemzésben a hozamok szórása a kockázat (volatilitás) egyik legfontosabb mérőszáma.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy adatsor minden eleme megegyezik egymással (pl. 5, 5, 5, 5). Mennyi a szórása?",
        options: ["0", "5", "1", "nem definiálható"],
        correct_answer: "0",
        explanation: "Ha minden adat megegyezik az átlaggal, az eltérések nullák, tehát a variancia és a szórás is 0.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik képlet adja meg a variancia (szórásnégyzet) kiszámítását?",
        options: ["σ² = Σ(xᵢ-x̄)²/n", "σ² = Σxᵢ/n", "σ² = Σ(xᵢ-x̄)/n", "σ² = (max-min)"],
        correct_answer: "σ² = Σ(xᵢ-x̄)²/n",
        explanation: "A variancia az egyes adatok átlagtól való eltérése négyzetének átlaga: σ² = Σ(xᵢ-x̄)²/n.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Adatsor: 2, 4, 4, 6. Mennyi a variancia?",
        options: ["2", "8", "4", "1,5"],
        correct_answer: "2",
        explanation: "Az átlag 4; az eltérések -2,0,0,2, négyzeteik 4,0,0,4, összegük 8, a variancia 8/4=2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Adatsor: 3, 3, 7, 7. Mennyi a szórása (σ)?",
        options: ["2", "4", "5", "16"],
        correct_answer: "2",
        explanation: "Az átlag 5; az eltérések -2,-2,2,2, négyzeteik összege 16, a variancia 16/4=4, a szórás √4=2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a terjedelme a 3, 7, 2, 9, 5 adatsornak?",
        options: ["7", "9", "5,2", "26"],
        correct_answer: "7",
        explanation: "A terjedelem a legnagyobb és legkisebb adat különbsége: 9-2=7.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "A normális eloszlás \"empirikus szabálya\" szerint az adatok hány százaléka esik az átlagtól egy szóráson belül?",
        options: ["kb. 68%", "kb. 95%", "kb. 50%", "100%"],
        correct_answer: "kb. 68%",
        explanation: "A normális eloszlásnál az adatok mintegy 68%-a helyezkedik el az átlagtól egy szóráson belül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két adatsornak azonos az átlaga, de az egyiknek kisebb a szórása. Melyik állítás igaz?",
        options: [
          "a kisebb szórású adatsor kiszámíthatóbb, adatai szorosabban az átlag körül csoportosulnak",
          "a nagyobb szórású adatsor megbízhatóbb",
          "a szórás nem befolyásolja az adatok eloszlását",
          "a két adatsor biztosan azonos"
        ],
        correct_answer: "a kisebb szórású adatsor kiszámíthatóbb, adatai szorosabban az átlag körül csoportosulnak",
        explanation: "Azonos átlag esetén a kisebb szórású adatsor homogénebb, adatai szorosabban csoportosulnak az átlag körül, ezért kiszámíthatóbb.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kell a varianciából négyzetgyököt vonni a szórás meghatározásához?",
        options: ["hogy a mértékegység megegyezzen az eredeti adatok mértékegységével", "hogy a szórás mindig negatív legyen", "hogy csökkentsük az adatok számát", "mert a variancia mindig negatív"],
        correct_answer: "hogy a mértékegység megegyezzen az eredeti adatok mértékegységével",
        explanation: "A variancia mértékegysége az eredeti adatok mértékegységének négyzete; a négyzetgyökvonással a szórás visszakapja az eredeti mértékegységet.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Adatsor: 10, 12, 14, 16, 18. Mennyi a variancia?",
        options: ["8", "40", "2√2", "4"],
        correct_answer: "8",
        explanation: "Az átlag 14; az eltérések -4,-2,0,2,4, négyzeteik összege 40, a variancia 40/5=8.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik statisztikai mutató a legegyszerűbb, és csak a szélsőértékeket veszi figyelembe?",
        options: ["terjedelem", "szórás", "variancia", "átlag"],
        correct_answer: "terjedelem",
        explanation: "A terjedelem a legegyszerűbb szóródási mutató, a legnagyobb és legkisebb adat különbsége.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "rekurziv-sorozatok-es-a-teljes-indukcio-modszere",
    title: "Rekurzív sorozatok és a teljes indukció módszere",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 24,
    summary_markdown:
      "A sorozatok rekurzív megadásánál az egyes tagokat a korábbi tagokból számítjuk ki; a teljes indukció olyan bizonyítási módszer, amely a pozitív egész számokra vonatkozó állítások igazolására szolgál egy kezdőlépés és egy öröklődési lépés segítségével.",
    content_markdown: `
## A sorozat megadásának módjai

Egy sorozatot megadhatunk **explicit (zárt) alakban**, amikor a képlet közvetlenül az n sorszám alapján számítja ki az n-edik tagot (pl. aₙ = 2n+1), vagy **rekurzív alakban**, amikor megadjuk a sorozat első néhány tagját, valamint azt a szabályt, amellyel egy tetszőleges tag a korábbi tag(ok)ból kiszámítható.

## A rekurzív megadás

A **rekurzív megadás** klasszikus példája a számtani sorozat: a₁ adott, és aₙ₊₁ = aₙ + d (minden tag az előzőből a differencia hozzáadásával adódik). Egy másik híres példa a **Fibonacci-sorozat**: a₁ = 1, a₂ = 1, és aₙ = aₙ₋₁ + aₙ₋₂ (n ≥ 3 esetén) — vagyis bármely tag, a harmadiktól kezdve, az előző két tag összege (1, 1, 2, 3, 5, 8, 13, 21...).

## A rekurzív és az explicit alak közötti átváltás

Egyes rekurzívan megadott sorozatokhoz meghatározható **explicit (zárt) képlet** is — például a számtani sorozat rekurzív megadásából (a₁, aₙ₊₁=aₙ+d) levezethető az explicit képlet: aₙ = a₁+(n-1)d. Más sorozatoknál (mint a Fibonacci-sorozat) az explicit alak felírása jóval bonyolultabb, és nem mindig praktikus.

## A teljes indukció módszere

A **teljes indukció** olyan bizonyítási módszer, amellyel egy pozitív egész számoktól (n-től) függő állítást igazolunk minden n-re. A módszer két lépésből áll: az **indukciós kezdőlépésben** igazoljuk, hogy az állítás igaz a legkisebb n értékre (jellemzően n=1). Az **indukciós lépésben (öröklődési lépésben)** feltételezzük, hogy az állítás igaz valamely n=k esetén (**indukciós feltevés**), és ebből levezetjük, hogy akkor n=k+1 esetén is igaz. Ha mindkét lépés sikeres, az **indukció elve** alapján az állítás minden n ≥ 1 egész számra igaz.

## Egy klasszikus példa a teljes indukcióra

A teljes indukció klasszikus alkalmazása annak bizonyítása, hogy **1+2+3+...+n = n(n+1)/2** minden pozitív egész n-re. A kezdőlépés: n=1 esetén a bal oldal 1, a jobb oldal 1·2/2=1, tehát igaz. Az indukciós lépés: feltéve, hogy 1+2+...+k = k(k+1)/2, be kell látni, hogy 1+2+...+k+(k+1) = (k+1)(k+2)/2 — ami a feltevéshez (k+1)-et hozzáadva algebrai átalakítással igazolható.

## A teljes indukció alkalmazási területei

A teljes indukciót gyakran alkalmazzák sorozatokra vonatkozó összegképletek (számtani, mértani sorozat összegképlete), oszthatósági állítások (pl. bizonyos kifejezés mindig osztható egy adott számmal), valamint egyenlőtlenségek (pl. 2ⁿ > n minden n-re) bizonyítására.

## A rekurzió jelentősége az informatikában

A rekurzív gondolkodásmód nemcsak a matematikában, hanem az **informatikában** is alapvető: a rekurzív algoritmusok (amelyek önmagukat hívják meg kisebb részproblémákra) számos feladat (pl. rendezési algoritmusok, fastruktúrák bejárása) hatékony megoldását teszik lehetővé, és szoros rokonságban állnak a teljes indukció logikájával.

## Jelentősége

A rekurzív sorozatok és a teljes indukció módszerének ismerete alapvető matematikai gondolkodásmódot fejleszt: megtanít arra, hogyan lehet egy végtelen sok esetre vonatkozó állítást véges lépésben, szigorúan bebizonyítani, ami a matematika egészének, valamint az informatika algoritmikus gondolkodásának is alapköve.
`,
    key_concepts: [
      "rekurzív megadás (pl. Fibonacci-sorozat)",
      "explicit (zárt) alak vs. rekurzív alak",
      "teljes indukció: kezdőlépés és öröklődési lépés",
      "indukciós feltevés",
      "a teljes indukció alkalmazásai (összegképletek, oszthatóság)",
    ],
    source_refs: [
      { label: "rekurzív alak (zanza.tv)", url: "https://zanza.tv/fogalom/rekurziv-alak" },
      { label: "Sorozatok (zanza.tv)", url: "https://zanza.tv/matematika/osszefuggesek-fuggvenyek-sorozatok/sorozatok" },
      { label: "Teljes indukció (Mateking)", url: "https://www.mateking.hu/matematika-kepletgyujtemeny/teljes-indukcio" },
      { label: "A teljes indukció (emelt szint) (Mateking)", url: "https://www.mateking.hu/kozepiskolai-matek-teljes/a-teljes-indukcio-emelt-szint" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a rekurzív sorozat-megadást?",
        options: [
          "megadjuk az első tag(oka)t és egy szabályt, amellyel a további tagok a korábbiakból számíthatók",
          "közvetlenül megadjuk az n-edik tag képletét n alapján",
          "csak véges sorozatoknál alkalmazható",
          "soha nem alkalmazható számtani sorozatra"
        ],
        correct_answer: "megadjuk az első tag(oka)t és egy szabályt, amellyel a további tagok a korábbiakból számíthatók",
        explanation: "A rekurzív megadás lényege, hogy a sorozat tagjait a korábbi tag(ok) ismeretében, lépésről lépésre számítjuk ki.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a Fibonacci-sorozat rekurzív szabálya?",
        options: [
          "aₙ = aₙ₋₁ + aₙ₋₂ (minden tag az előző kettő összege)",
          "aₙ = aₙ₋₁ · 2",
          "aₙ = aₙ₋₁ - aₙ₋₂",
          "aₙ = n²"
        ],
        correct_answer: "aₙ = aₙ₋₁ + aₙ₋₂ (minden tag az előző kettő összege)",
        explanation: "A Fibonacci-sorozatban (a harmadik tagtól kezdve) minden tag az előző két tag összege.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a teljes indukció két fő lépése?",
        options: [
          "indukciós kezdőlépés és indukciós (öröklődési) lépés",
          "csak egy lépés: az állítás behelyettesítése",
          "négyzetre emelés és gyökvonás",
          "grafikus ábrázolás és számítás"
        ],
        correct_answer: "indukciós kezdőlépés és indukciós (öröklődési) lépés",
        explanation: "A teljes indukció a kezdőlépésből (n=1 esetére igazolás) és az öröklődési lépésből (n=k-ból n=k+1-re következtetés) áll.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az indukciós feltevés a teljes indukció módszerében?",
        options: [
          "feltételezzük, hogy az állítás igaz n=k esetén, majd ebből vezetjük le n=k+1 esetét",
          "az állítás automatikusan igaz minden esetre bizonyítás nélkül",
          "csak a legnagyobb n értékre vonatkozik",
          "az állítás mindig hamis feltevés"
        ],
        correct_answer: "feltételezzük, hogy az állítás igaz n=k esetén, majd ebből vezetjük le n=k+1 esetét",
        explanation: "Az indukciós feltevés az öröklődési lépés kiindulópontja: feltesszük az állítás igazságát egy tetszőleges k esetére.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen típusú állítások bizonyítására alkalmas jellemzően a teljes indukció?",
        options: [
          "pozitív egész számoktól függő összegképletek, oszthatósági és egyenlőtlenségi állítások",
          "kizárólag geometriai szerkesztési feladatok",
          "csak valószínűségszámítási problémák",
          "kizárólag komplex számokra vonatkozó állítások"
        ],
        correct_answer: "pozitív egész számoktól függő összegképletek, oszthatósági és egyenlőtlenségi állítások",
        explanation: "A teljes indukciót jellemzően olyan állítások bizonyítására használjuk, amelyek minden pozitív egész n-re vonatkoznak, mint összegképletek, oszthatóság vagy egyenlőtlenségek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az explicit (zárt) alakban megadott sorozatot?",
        options: ["közvetlenül az n sorszám alapján számítja ki az n-edik tagot", "csak az első tagot adja meg", "csak rekurzív módon számítható ki", "nincs képlete"],
        correct_answer: "közvetlenül az n sorszám alapján számítja ki az n-edik tagot",
        explanation: "Az explicit (zárt) alak közvetlenül, az n sorszám alapján adja meg az n-edik tagot, korábbi tagok kiszámítása nélkül.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Számítsd ki a Fibonacci-sorozat 5. tagját (a₁=1, a₂=1, aₙ=aₙ₋₁+aₙ₋₂)!",
        options: ["5", "8", "3", "4"],
        correct_answer: "5",
        explanation: "A sorozat: 1, 1, 2, 3, 5, ..., tehát a₅ = 5 (az előző két tag, a₃=2 és a₄=3 összege).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy számtani sorozat rekurzív megadása: a₁=3, aₙ₊₁=aₙ+4. Mi a sorozat explicit (zárt) alakja?",
        options: ["aₙ = 3 + (n-1)·4", "aₙ = 3ⁿ", "aₙ = 4 + (n-1)·3", "aₙ = n·4"],
        correct_answer: "aₙ = 3 + (n-1)·4",
        explanation: "A számtani sorozat explicit alakja aₙ = a₁+(n-1)d, itt a₁=3, d=4, tehát aₙ = 3+(n-1)·4.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "A fenti (a₁=3, aₙ₊₁=aₙ+4) sorozatnak mennyi a 6. tagja?",
        options: ["23", "19", "27", "24"],
        correct_answer: "23",
        explanation: "aₙ = 3+(n-1)·4 alapján a₆ = 3+5·4 = 3+20 = 23.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az indukciós kezdőlépés szerepe a teljes indukcióban?",
        options: [
          "igazolja, hogy az állítás igaz a legkisebb n értékre (jellemzően n=1)",
          "igazolja az állítást minden n-re egyszerre",
          "helyettesítéssel ellenőrzi az állítást n=100-ra",
          "nincs szerepe, elhagyható"
        ],
        correct_answer: "igazolja, hogy az állítás igaz a legkisebb n értékre (jellemzően n=1)",
        explanation: "Az indukciós kezdőlépésben azt igazoljuk, hogy az állítás igaz a legkisebb (jellemzően n=1) esetre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ellenőrizd az 1+2+3+...+n = n(n+1)/2 formulát n=4 esetén!",
        options: ["igen, mindkét oldal 10", "nem, a bal oldal 10, a jobb oldal 20", "nem, a bal oldal 9", "csak n=1-re igaz"],
        correct_answer: "igen, mindkét oldal 10",
        explanation: "1+2+3+4=10, és 4·5/2=10, tehát a formula n=4-re is teljesül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire szolgál a rekurzió az informatikában?",
        options: [
          "önmagukat hívó algoritmusok írására, amelyek kisebb részproblémákra bontják a feladatot",
          "csak grafikonok rajzolására",
          "kizárólag adatbázis-kezelésre",
          "a rekurzió nem használható informatikában"
        ],
        correct_answer: "önmagukat hívó algoritmusok írására, amelyek kisebb részproblémákra bontják a feladatot",
        explanation: "A rekurzív algoritmusok önmagukat hívják meg kisebb részproblémákra, ez szoros rokonságban áll a teljes indukció logikájával.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik, ha az indukciós kezdőlépés bizonyítása sikertelen (hamis)?",
        options: [
          "az egész indukciós bizonyítás érvénytelen, még ha az öröklődési lépés igaz is",
          "nem befolyásolja a bizonyítást",
          "elég csak az öröklődési lépést igazolni",
          "az állítás automatikusan igaz marad"
        ],
        correct_answer: "az egész indukciós bizonyítás érvénytelen, még ha az öröklődési lépés igaz is",
        explanation: "A teljes indukció csak akkor érvényes, ha mindkét lépés (a kezdőlépés és az öröklődési lépés is) sikeres; a kezdőlépés hiánya érvényteleníti a bizonyítást.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy mértani sorozat rekurzív megadása: b₁=2, bₙ₊₁=3·bₙ. Mi a sorozat explicit alakja?",
        options: ["bₙ = 2·3ⁿ⁻¹", "bₙ = 3·2ⁿ⁻¹", "bₙ = 2+3(n-1)", "bₙ = 6ⁿ"],
        correct_answer: "bₙ = 2·3ⁿ⁻¹",
        explanation: "A mértani sorozat explicit alakja bₙ = b₁·qⁿ⁻¹, itt b₁=2, q=3, tehát bₙ = 2·3ⁿ⁻¹.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik sorozat esetében nehezebb felírni az explicit (zárt) alakot a tanult példák közül?",
        options: ["a Fibonacci-sorozat", "a számtani sorozat", "a mértani sorozat", "mindegyik egyformán egyszerű"],
        correct_answer: "a Fibonacci-sorozat",
        explanation: "A Fibonacci-sorozatnál (a számtani és mértani sorozattal ellentétben) az explicit alak felírása jóval bonyolultabb, és nem mindig praktikus.",
        difficulty: 1,
      },
    ],
  },
];
