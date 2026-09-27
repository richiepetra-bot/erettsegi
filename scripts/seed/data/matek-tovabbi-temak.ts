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
    ],
  },
];
