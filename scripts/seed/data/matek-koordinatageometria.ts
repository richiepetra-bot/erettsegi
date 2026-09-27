import { TopicSeed } from "./angol";

export const matekKoordinatageometriaTopics: TopicSeed[] = [
  {
    slug: "hatvanyozas-exponencialis-es-logaritmusfuggvenyek",
    title: "Hatványozás, exponenciális és logaritmusfüggvények",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 13,
    summary_markdown:
      "A hatványozás azonosságainak kiterjesztése negatív és tört kitevőkre vezet el az exponenciális függvényhez, amelynek inverze a logaritmusfüggvény — ezek az eszközök teszik lehetővé a gyors növekedési és csökkenési folyamatok (kamat, radioaktív bomlás) matematikai leírását.",
    content_markdown: `
## A hatványozás azonosságai

A **hatványozás** olyan művelet, amely azonos tényezők szorzataként indul (aⁿ = a·a·...·a, n darab a), és amelyet fokozatosan kiterjesztünk. A legfontosabb **azonosságok**: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ / aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐ·ⁿ; (a·b)ⁿ = aⁿ·bⁿ. A **nulladik kitevő**: a⁰ = 1 (ha a ≠ 0). A **negatív kitevő**: a⁻ⁿ = 1/aⁿ. A **törtkitevő**: a^(1/n) = ⁿ√a (az n-edik gyök), általánosan a^(m/n) = ⁿ√(aᵐ).

## Az exponenciális függvény

Az **exponenciális függvény** f(x) = aˣ alakú (ahol a > 0 és a ≠ 1), és alapvetően különbözik a hatványfüggvényektől, mivel itt a **kitevőben** szerepel a változó. Ha az alap **a > 1**, a függvény **szigorúan monoton növekvő** (minél nagyobb x, annál gyorsabban nő a függvényérték); ha **0 < a < 1**, a függvény **szigorúan monoton csökkenő**. Az exponenciális függvény értékkészlete minden esetben a pozitív valós számok halmaza, és grafikonja soha nem metszi az x-tengelyt (aszimptotikusan közelíti azt).

## A logaritmus fogalma

A **logaritmus** az exponenciális függvény **inverz művelete**: ha aˣ = b (a > 0, a ≠ 1, b > 0), akkor x = log_a(b), vagyis a logaritmus megadja azt a kitevőt, amelyre az alapot emelve a megadott számot kapjuk. Speciális esetek: a **tízes alapú logaritmus** jelölése lg (vagy log), a **természetes alapú (e alapú) logaritmus** jelölése ln.

## A logaritmus azonosságai

A logaritmusfüggvény alapvető azonosságai: **log_a(x·y) = log_a(x) + log_a(y)** (szorzat logaritmusa), **log_a(x/y) = log_a(x) - log_a(y)** (hányados logaritmusa), **log_a(xⁿ) = n · log_a(x)** (hatvány logaritmusa). Ezek az azonosságok teszik lehetővé, hogy bonyolult szorzási-osztási műveleteket egyszerűbb összeadássá-kivonássá alakítsunk (ez volt a logaritmus eredeti, számolást megkönnyítő szerepe a számítógépek elterjedése előtt).

## Az exponenciális és a logaritmusfüggvény kapcsolata

Az exponenciális és a logaritmusfüggvény egymás **inverz függvényei** (azonos alap esetén): grafikonjaik szimmetrikusak az y = x egyenesre. Ez azt jelenti, hogy amíg az exponenciális függvény a kitevőből számol értéket, a logaritmusfüggvény az értékből számolja vissza a kitevőt.

## Exponenciális és logaritmusos egyenletek

Az **exponenciális egyenletekben** az ismeretlen a kitevőben szerepel (pl. 2ˣ = 8); ezek megoldásának egyik módszere, hogy mindkét oldalt azonos alapú hatvánnyá alakítjuk, és az alapok egyenlősége esetén a kitevőket tesszük egyenlővé. Ha ez nem lehetséges, **logaritmust veszünk** mindkét oldalból. A **logaritmusos egyenletekben** az ismeretlen a logaritmus argumentumában (vagy alapjában) szerepel; ezek megoldásánál mindig ellenőrizni kell, hogy a kapott megoldás **értelmezési tartományba esik-e** (a logaritmus argumentuma pozitív kell legyen).

## Gyakorlati alkalmazások

Az exponenciális függvények számos valós folyamatot írnak le: a **kamatos kamat** számítását, a **népességnövekedést**, a **radioaktív bomlást** (felezési idő), valamint a **baktériumtenyészetek** szaporodását. A logaritmus gyakorlati alkalmazásai közé tartozik a **Richter-skála** (földrengések erősségének mérése) és a **pH-skála** (savasság mérése a kémiában) — mindkettő logaritmikus skála, mivel a mért mennyiségek nagyságrendekben térnek el egymástól.

## Jelentősége

A hatványozás kiterjesztett azonosságainak, valamint az exponenciális és logaritmusfüggvényeknek az ismerete elengedhetetlen a gyors (exponenciális) növekedési és csökkenési folyamatok matematikai leírásához, amelyek a pénzügyektől a természettudományokig számos területen megjelennek.
`,
    key_concepts: [
      "hatványozás azonosságai (negatív, tört kitevő)",
      "exponenciális függvény: f(x) = aˣ",
      "logaritmus: ha aˣ = b, akkor x = log_a(b)",
      "logaritmus azonosságai (szorzat, hányados, hatvány)",
      "exponenciális és logaritmusos egyenletek",
    ],
    source_refs: [
      { label: "A csodálatos logaritmus (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/csodalatos-logaritmus" },
      { label: "Exponenciális függvények (zanza.tv)", url: "https://zanza.tv/matematika/osszefuggesek-fuggvenyek-sorozatok/exponencialis-fuggvenyek" },
      { label: "Hatványozás – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/hatvanyozas/" },
      { label: "Logaritmus – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/logaritmus/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mennyi 2⁻³ értéke?",
        options: ["1/8", "-8", "8", "-1/8"],
        correct_answer: "1/8",
        explanation: "A negatív kitevő reciprokot jelent: 2⁻³ = 1/2³ = 1/8.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor szigorúan monoton csökkenő az f(x) = aˣ exponenciális függvény?",
        options: ["ha 0 < a < 1", "ha a > 1", "ha a = 1", "soha nem csökkenő"],
        correct_answer: "ha 0 < a < 1",
        explanation: "Ha az alap 0 és 1 közé esik, a függvény szigorúan monoton csökkenő; ha a > 1, szigorúan monoton növekvő.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent log₂(8)?",
        options: ["3, mert 2³ = 8", "4, mert 2·4 = 8", "8, mert log alapja 2", "16, mert 2·8 = 16"],
        correct_answer: "3, mert 2³ = 8",
        explanation: "A logaritmus azt a kitevőt adja meg, amelyre az alapot emelve a megadott számot kapjuk: 2³ = 8, tehát log₂(8) = 3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik azonosság írja le helyesen a szorzat logaritmusát?",
        options: [
          "log_a(x·y) = log_a(x) + log_a(y)",
          "log_a(x·y) = log_a(x) · log_a(y)",
          "log_a(x·y) = log_a(x) - log_a(y)",
          "log_a(x·y) = log_a(x) / log_a(y)"
        ],
        correct_answer: "log_a(x·y) = log_a(x) + log_a(y)",
        explanation: "A szorzat logaritmusa a tényezők logaritmusainak összege.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az exponenciális és a logaritmusfüggvény kapcsolata azonos alap esetén?",
        options: [
          "egymás inverz függvényei",
          "azonos függvények",
          "nincs köztük kapcsolat",
          "mindkettő lineáris függvény"
        ],
        correct_answer: "egymás inverz függvényei",
        explanation: "Az exponenciális és a logaritmusfüggvény (azonos alap mellett) egymás inverzei, grafikonjaik szimmetrikusak az y=x egyenesre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi a⁰ értéke, ha a ≠ 0?",
        options: ["1", "0", "a", "-1"],
        correct_answer: "1",
        explanation: "A nulladik kitevőre érvényes azonosság szerint a⁰ = 1, ha a ≠ 0.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelöl a \"lg\" jelölés?",
        options: ["tízes alapú logaritmus", "természetes alapú logaritmus", "kettes alapú logaritmus", "logikai függvény"],
        correct_answer: "tízes alapú logaritmus",
        explanation: "A tízes alapú logaritmus jelölése lg (vagy log), a természetes (e alapú) logaritmusé ln.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egyszerűsítsd: a⁵ · a³ = ?",
        options: ["a⁸", "a¹⁵", "a²", "a⁵³"],
        correct_answer: "a⁸",
        explanation: "A hatványozás azonossága szerint aᵐ · aⁿ = aᵐ⁺ⁿ, tehát a⁵ · a³ = a⁵⁺³ = a⁸.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi (a³)⁴ egyszerűsített alakja?",
        options: ["a¹²", "a⁷", "a⁶⁴", "a¹"],
        correct_answer: "a¹²",
        explanation: "A (aᵐ)ⁿ = aᵐ·ⁿ azonosság szerint (a³)⁴ = a³·⁴ = a¹².",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik azonosság írja le helyesen a hányados logaritmusát?",
        options: [
          "log_a(x/y) = log_a(x) - log_a(y)",
          "log_a(x/y) = log_a(x) / log_a(y)",
          "log_a(x/y) = log_a(x) + log_a(y)",
          "log_a(x/y) = log_a(y) - log_a(x)"
        ],
        correct_answer: "log_a(x/y) = log_a(x) - log_a(y)",
        explanation: "A hányados logaritmusa a logaritmusok különbsége: log_a(x/y) = log_a(x) - log_a(y).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik azonosság írja le helyesen a hatvány logaritmusát?",
        options: [
          "log_a(xⁿ) = n · log_a(x)",
          "log_a(xⁿ) = log_a(x)ⁿ",
          "log_a(xⁿ) = log_a(x) + n",
          "log_a(xⁿ) = n / log_a(x)"
        ],
        correct_answer: "log_a(xⁿ) = n · log_a(x)",
        explanation: "A hatvány logaritmusa: log_a(xⁿ) = n · log_a(x).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: 2ˣ = 32.",
        options: ["x = 5", "x = 4", "x = 16", "x = 6"],
        correct_answer: "x = 5",
        explanation: "32 = 2⁵, tehát mindkét oldalt azonos alapú hatvánnyá alakítva x = 5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg a log₃(x) = 2 egyenletet.",
        options: ["x = 9", "x = 6", "x = 1,5", "x = 8"],
        correct_answer: "x = 9",
        explanation: "log₃(x) = 2 azt jelenti, hogy 3² = x, tehát x = 9.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora az exponenciális függvény (f(x) = aˣ, a > 0, a ≠ 1) értékkészlete?",
        options: [
          "a pozitív valós számok halmaza",
          "minden valós szám",
          "a negatív valós számok halmaza",
          "csak a pozitív egész számok"
        ],
        correct_answer: "a pozitív valós számok halmaza",
        explanation: "Az exponenciális függvény értékkészlete minden esetben a pozitív valós számok halmaza, grafikonja soha nem metszi az x-tengelyt.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "A radioaktív bomlás és a kamatos kamat számítása milyen függvénytípussal írható le?",
        options: ["exponenciális függvénnyel", "lineáris függvénnyel", "másodfokú függvénnyel", "abszolútérték-függvénnyel"],
        correct_answer: "exponenciális függvénnyel",
        explanation: "Az exponenciális függvények írják le a kamatos kamat számítását, a népességnövekedést és a radioaktív bomlást is.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "az-egyenes-egyenlete-a-koordinatageometriaban",
    title: "Az egyenes egyenlete a koordinátageometriában",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 14,
    summary_markdown:
      "A koordinátageometriában az egyenes egy kétismeretlenes elsőfokú egyenlettel írható le, amelyet megadhatunk irányvektorral, normálvektorral vagy meredekséggel — ez teszi lehetővé geometriai problémák algebrai (számolással történő) megoldását.",
    content_markdown: `
## Az egyenes megadásának módjai

A koordinátageometriában egy egyenest többféleképpen adhatunk meg: **két ponttal** (amelyeken átmegy), **egy ponttal és egy irányvektorral** (amely az egyenes irányát mutatja), **egy ponttal és egy normálvektorral** (amely merőleges az egyenesre), vagy **egy ponttal és a meredekséggel (iránytangenssel)**.

## Az egyenes egyenletének felírása

Egy egyenes egyenlete egy **kétismeretlenes, elsőfokú egyenlet**: **Ax + By + C = 0** alakban írható fel, ahol (A, B) az egyenes egy normálvektorának koordinátái. Ha ismerjük az egyenes egy P(x₀, y₀) pontját és egy n(A, B) normálvektorát, az egyenlet felírható: A(x - x₀) + B(y - y₀) = 0.

## A meredekség (iránytangens)

Az egyenes **meredeksége (iránytangense, m)** az egyenesnek az x-tengely pozitív irányával bezárt szögének tangense: m = tg(α). Két pont — P₁(x₁,y₁) és P₂(x₂,y₂) — ismeretében a meredekség: **m = (y₂-y₁) / (x₂-x₁)**. Az egyenes **iránytangens alakú egyenlete**: y = mx + b, ahol b az y-tengellyel vett metszéspont (kezdőérték).

## Párhuzamos és merőleges egyenesek

Két egyenes akkor és csak akkor **párhuzamos**, ha meredekségeik megegyeznek (m₁ = m₂), vagy — normálvektorral megadva — normálvektoraik párhuzamosak (egymás számszorosai). Két egyenes akkor **merőleges** egymásra, ha meredekségeik szorzata -1 (m₁ · m₂ = -1), vagy normálvektoraik merőlegesek egymásra (skaláris szorzatuk nulla).

## Két egyenes metszéspontja

Két egyenes **metszéspontjának** meghatározásához a két egyenes egyenletéből álló **egyenletrendszert** kell megoldani (behelyettesítéssel vagy az egyenlő együtthatók módszerével). Ha a két egyenes párhuzamos (de nem azonos), az egyenletrendszernek nincs megoldása; ha a két egyenes egybeesik, végtelen sok megoldás van.

## Egy pont és egy egyenes távolsága

Egy P(x₀, y₀) pont és egy Ax + By + C = 0 egyenletű egyenes **távolsága** kiszámítható a következő képlettel: **d = |Ax₀ + By₀ + C| / √(A² + B²)**. Ez a képlet számos geometriai feladat (pl. magasságvonal hosszának, kör és egyenes viszonyának) megoldásában alapvető.

## Geometriai feladatok koordinátageometriai megoldása

A koordinátageometria lehetővé teszi, hogy klasszikus geometriai problémákat (háromszög nevezetes vonalainak, pontjainak meghatározása, szimmetria vizsgálata, területek kiszámítása) **algebrai számolással**, koordináták és egyenletek segítségével oldjunk meg, ahelyett hogy szerkesztésekre és szintetikus geometriai tételekre hagyatkoznánk.

## Jelentősége

Az egyenes koordinátageometriai egyenletének, valamint a hozzá kapcsolódó összefüggéseknek (meredekség, párhuzamosság, merőlegesség, pont-egyenes távolság) az ismerete alapvető eszköz: ez teremti meg a kapcsolatot az algebra és a geometria között, és számos alkalmazott (mérnöki, informatikai, grafikai) probléma megoldásának is alapja.
`,
    key_concepts: [
      "egyenes egyenlete: Ax + By + C = 0",
      "meredekség (iránytangens): m = (y₂-y₁)/(x₂-x₁)",
      "párhuzamosság (m₁=m₂) és merőlegesség (m₁·m₂=-1)",
      "két egyenes metszéspontja",
      "pont és egyenes távolsága",
    ],
    source_refs: [
      { label: "Az egyenes egyenlete (zanza.tv)", url: "https://zanza.tv/matematika/geometria/az-egyenes-egyenlete" },
      { label: "Párhuzamos és merőleges egyenesek egyenlete (zanza.tv)", url: "https://zanza.tv/matematika/geometria/parhuzamos-es-meroleges-egyenesek-egyenlete" },
      { label: "Egyenes (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Egyenes" },
      { label: "Koordinátageometria (Mateking)", url: "https://www.mateking.hu/kozepiskolai-matek-teljes/koordinatageometria" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az egyenes egyenletének általános alakja?",
        options: ["Ax + By + C = 0", "y = ax² + bx + c", "x² + y² = r²", "y = a/x"],
        correct_answer: "Ax + By + C = 0",
        explanation: "Az egyenes egyenlete egy kétismeretlenes, elsőfokú egyenlet, amely Ax + By + C = 0 alakra hozható.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor párhuzamos két egyenes?",
        options: ["ha meredekségeik megegyeznek", "ha meredekségeik szorzata -1", "ha átmennek az origón", "ha metszik egymást"],
        correct_answer: "ha meredekségeik megegyeznek",
        explanation: "Két egyenes pontosan akkor párhuzamos, ha meredekségeik (iránytangenseik) egyenlők.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi a meredeksége az A(1,2) és B(3,6) pontokon átmenő egyenesnek?",
        options: ["2", "4", "1/2", "8"],
        correct_answer: "2",
        explanation: "m = (y₂-y₁)/(x₂-x₁) = (6-2)/(3-1) = 4/2 = 2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor merőleges egymásra két egyenes?",
        options: ["ha meredekségeik szorzata -1", "ha meredekségeik megegyeznek", "ha párhuzamosak", "ha nem metszik egymást"],
        correct_answer: "ha meredekségeik szorzata -1",
        explanation: "Két egyenes akkor merőleges egymásra, ha meredekségeik szorzata -1 (m₁·m₂=-1).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire szolgál a d = |Ax₀ + By₀ + C| / √(A² + B²) képlet?",
        options: [
          "egy pont és egy egyenes távolságának kiszámítására",
          "két pont távolságának kiszámítására",
          "egy kör területének kiszámítására",
          "egy háromszög szögeinek kiszámítására"
        ],
        correct_answer: "egy pont és egy egyenes távolságának kiszámítására",
        explanation: "Ez a képlet egy adott pont és egy Ax+By+C=0 egyenletű egyenes közötti távolságot adja meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit ad meg az egyenes m paramétere az y = mx + b egyenletben?",
        options: ["a meredekséget (iránytangenst)", "az y-tengellyel vett metszéspontot", "az x-tengellyel vett metszéspontot", "a normálvektor hosszát"],
        correct_answer: "a meredekséget (iránytangenst)",
        explanation: "Az egyenes iránytangens alakú egyenletében y = mx + b, az m a meredekséget (iránytangenst) adja meg.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit ad meg b az y = mx + b egyenletben?",
        options: ["az y-tengellyel vett metszéspontot (kezdőértéket)", "a meredekséget", "a normálvektor koordinátáit", "az egyenes hosszát"],
        correct_answer: "az y-tengellyel vett metszéspontot (kezdőértéket)",
        explanation: "A b az egyenesnek az y-tengellyel vett metszéspontja, azaz a kezdőérték.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy egyenes átmegy a P(2,-1) ponton, és normálvektora n(3,4). Mi az egyenes egyenlete?",
        options: ["3x + 4y - 2 = 0", "3x + 4y + 2 = 0", "4x + 3y - 2 = 0", "3x - 4y - 2 = 0"],
        correct_answer: "3x + 4y - 2 = 0",
        explanation: "A(x-x₀)+B(y-y₀)=0 alapján: 3(x-2)+4(y+1)=0, azaz 3x-6+4y+4=0, ami 3x+4y-2=0 alakra rendezhető.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi a meredeksége a P(0,5) és Q(5,0) pontokon átmenő egyenesnek?",
        options: ["-1", "1", "5", "-5"],
        correct_answer: "-1",
        explanation: "m = (y₂-y₁)/(x₂-x₁) = (0-5)/(5-0) = -5/5 = -1.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor nincs megoldása a két egyenes egyenletéből álló egyenletrendszernek?",
        options: ["ha a két egyenes párhuzamos, de nem azonos", "ha a két egyenes merőleges", "ha a két egyenes metszi egymást", "ha a két egyenes egybeesik"],
        correct_answer: "ha a két egyenes párhuzamos, de nem azonos",
        explanation: "Ha a két egyenes párhuzamos, de nem esik egybe, az egyenletrendszernek nincs megoldása.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor van végtelen sok megoldása a két egyenes egyenletéből álló egyenletrendszernek?",
        options: ["ha a két egyenes egybeesik", "ha a két egyenes merőleges", "ha a két egyenes metsző, de nem párhuzamos", "soha"],
        correct_answer: "ha a két egyenes egybeesik",
        explanation: "Ha a két egyenes egybeesik, minden pontjuk közös, ezért az egyenletrendszernek végtelen sok megoldása van.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Határozd meg az y = 2x + 1 és y = -x + 4 egyenesek metszéspontjának x koordinátáját.",
        options: ["x = 1", "x = 2", "x = 3", "x = 0"],
        correct_answer: "x = 1",
        explanation: "2x+1 = -x+4, tehát 3x = 3, azaz x = 1.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora a P(0,0) pont távolsága a 3x + 4y - 10 = 0 egyenletű egyenestől?",
        options: ["2", "5", "10", "0,5"],
        correct_answer: "2",
        explanation: "d = |3·0+4·0-10| / √(3²+4²) = 10/5 = 2.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen egyenes egyenlete írható fel A(x-x₀) + B(y-y₀) = 0 alakban?",
        options: [
          "az egyenes egy P(x₀,y₀) pontján áthaladó, n(A,B) normálvektorú egyenes",
          "az egyenes, amely átmegy az origón",
          "egy kör egyenlete",
          "egy parabola egyenlete"
        ],
        correct_answer: "az egyenes egy P(x₀,y₀) pontján áthaladó, n(A,B) normálvektorú egyenes",
        explanation: "Ha ismerjük az egyenes egy pontját és egy normálvektorát, az egyenlet A(x-x₀)+B(y-y₀)=0 alakban írható fel.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit ad meg egy egyenes irányvektora?",
        options: ["az egyenes irányát mutatja", "az egyenesre merőleges vektort", "az egyenes hosszát", "az egyenes és az x-tengely metszéspontját"],
        correct_answer: "az egyenes irányát mutatja",
        explanation: "Az irányvektor az egyenes irányát mutatja, míg a normálvektor merőleges rá.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "a-kor-egyenlete-es-a-kor-egyenes-metszespontjai",
    title: "A kör egyenlete és a kör-egyenes metszéspontjai",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 15,
    summary_markdown:
      "A koordinátasíkon a kör egyenlete a középpont és a sugár ismeretében írható fel; a kör és az egyenes viszonyának (metsző, érintő, kívülálló) vizsgálata a köréjük felírt egyenletrendszer megoldásszámán alapul.",
    content_markdown: `
## A kör egyenlete

A koordinátasíkon egy C(u, v) középpontú, r sugarú kör egyenlete: **(x - u)² + (y - v)² = r²**. Ez az egyenlet a kör azon definíciójából következik, hogy a kör a C ponttól r távolságra lévő pontok halmaza — a képlet valójában a C és egy tetszőleges (x, y) pont közötti távolság (a Pitagorasz-tétel alapján felírt) négyzete.

## A kör egyenletének felismerése és átalakítása

Egy másodfokú, kétismeretlenes egyenlet (x² + y² + Dx + Ey + F = 0 alakú) akkor és csak akkor ír le kört, ha a **teljes négyzetté alakítás** után a jobb oldalon pozitív szám áll. Ha az átalakítás után nulla áll a jobb oldalon, a "kör" egyetlen pontra (a középpontra) zsugorodik; ha negatív szám áll ott, az egyenletnek nincs valós megoldáshalmaza (nem létezik ilyen kör).

## Az egyenes és a kör közös pontjai

Egy egyenes és egy kör közös pontjainak meghatározásához a két egyenletből álló **egyenletrendszert** kell megoldani, amely egy másodfokú egyenletre vezet. A megoldások száma (a diszkrimináns előjele alapján) háromféle lehet: ha **D > 0**, az egyenes **metsző** (két közös pontban metszi a kört); ha **D = 0**, az egyenes **érintő** (egyetlen közös pontja van a körrel); ha **D < 0**, az egyenes **kívülálló** (nincs közös pontja a körrel).

## A kör érintője

A kör egy adott P pontjában húzott **érintő** merőleges a P pontba mutató sugárra (a középpontot P-vel összekötő szakaszra). Ez az összefüggés lehetővé teszi az érintő egyenletének felírását: ismerve a kör középpontját és az érintési pontot, az érintő normálvektora megegyezik a középpontból az érintési pontba mutató vektorral.

## Két kör közös pontjai

Két kör közös pontjainak (metszéspontjainak) meghatározásához a két kör egyenletéből álló egyenletrendszert oldjuk meg — ennek egyik hatékony módszere, hogy a két egyenletet kivonjuk egymásból, amely (mivel a másodfokú tagok kiesnek) egy **elsőfokú egyenletet (az úgynevezett hatványvonal egyenletét)** eredményez, amelyet aztán az egyik kör egyenletével együtt oldunk meg.

## Két kör kölcsönös helyzete

Két kör egymáshoz viszonyított helyzete a középpontjaik távolsága és a sugaraik alapján határozható meg: lehetnek **egymáson kívül helyezkedők**, **kívülről érintkezők**, **metszők** (két közös pont), **belülről érintkezők**, vagy az egyik **a másik belsejében helyezkedhet el** (közös pont nélkül).

## Gyakorlati alkalmazások

A kör koordinátageometriai egyenletének és a kör-egyenes viszony vizsgálatának számos gyakorlati alkalmazása van: a navigációtól (lefedettségi körzetek) a számítógépes grafikán át (ütközésdetektálás) a mérnöki tervezésig (íves pályák, csővezetékek metszéspontjai) terjedő területeken merül fel.

## Jelentősége

A kör koordinátageometriai leírásának és a kör-egyenes, illetve kör-kör viszony vizsgálatának ismerete a középiskolai matematika egyik fontos, a klasszikus geometria és az algebra összekapcsolását szemléltető témaköre.
`,
    key_concepts: [
      "kör egyenlete: (x-u)² + (y-v)² = r²",
      "teljes négyzetté alakítás",
      "kör és egyenes viszonya (metsző, érintő, kívülálló)",
      "a kör érintőjének egyenlete",
      "két kör kölcsönös helyzete",
    ],
    source_refs: [
      { label: "A kör egyenlete (zanza.tv)", url: "https://zanza.tv/matematika/geometria/kor-egyenlete" },
      { label: "Egyenes és kör közös pontja, a kör érintője (zanza.tv)", url: "https://zanza.tv/matematika/geometria/egyenes-es-kor-kozos-pontja-kor-erintoje" },
      { label: "Kör (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Kör" },
      { label: "Két egyenes közös pontja, kör és egyenes közös pontjai (zanza.tv)", url: "https://zanza.tv/matematika/geometria/ket-egyenes-kozos-pontja-kor-es-egyenes-kozos-pontjai" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a C(2,3) középpontú, 5 sugarú kör egyenlete?",
        options: ["(x-2)² + (y-3)² = 25", "(x+2)² + (y+3)² = 5", "(x-2)² + (y-3)² = 5", "x² + y² = 25"],
        correct_answer: "(x-2)² + (y-3)² = 25",
        explanation: "A kör egyenlete (x-u)²+(y-v)²=r², ahol u=2, v=3, r=5, tehát r²=25.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor nevezünk egy egyenest a körhöz képest érintőnek?",
        options: [
          "ha a diszkrimináns nulla, egyetlen közös pont van",
          "ha a diszkrimináns pozitív, két közös pont van",
          "ha a diszkrimináns negatív, nincs közös pont",
          "ha az egyenes átmegy a középponton"
        ],
        correct_answer: "ha a diszkrimináns nulla, egyetlen közös pont van",
        explanation: "Az érintő egyenes pontosan egy közös ponttal rendelkezik a körrel, ami a másodfokú egyenletrendszer D=0 diszkriminánsánál teljesül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire merőleges a kör egy P pontjában húzott érintő?",
        options: [
          "a középpontot P-vel összekötő sugárra",
          "az x-tengelyre",
          "az y-tengelyre",
          "semmire nem merőleges"
        ],
        correct_answer: "a középpontot P-vel összekötő sugárra",
        explanation: "A kör érintője merőleges az érintési pontba mutató sugárra.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik, ha egy másodfokú kétismeretlenes egyenlet teljes négyzetté alakítása után negatív szám marad a jobb oldalon?",
        options: [
          "az egyenletnek nincs valós megoldáshalmaza, nem létezik ilyen kör",
          "az egyenlet egy egyenest ír le",
          "az egyenlet egy pontra zsugorodó kört ír le",
          "az egyenlet mindig egy nagy kört ír le"
        ],
        correct_answer: "az egyenletnek nincs valós megoldáshalmaza, nem létezik ilyen kör",
        explanation: "Negatív érték a jobb oldalon azt jelenti, hogy nincs olyan valós (x,y) pár, amely kielégítené az egyenletet, tehát nincs ilyen kör.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan határozható meg hatékonyan két kör metszéspontja?",
        options: [
          "a két kör egyenletét kivonva egymásból egy elsőfokú egyenletet kapunk, amit az egyik kör egyenletével együtt oldunk meg",
          "csak grafikusan lehet meghatározni",
          "a két sugarat összeadva",
          "a középpontok távolságát elosztva a sugarak összegével"
        ],
        correct_answer: "a két kör egyenletét kivonva egymásból egy elsőfokú egyenletet kapunk, amit az egyik kör egyenletével együtt oldunk meg",
        explanation: "A két másodfokú egyenlet kivonásakor a másodfokú tagok kiesnek, egy elsőfokú egyenletet (hatványvonal) kapunk, amit tovább oldva megkapjuk a metszéspontokat.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan nevezzük azt a \"kört\", amelynél a teljes négyzetté alakítás után a jobb oldalon nulla áll?",
        options: ["egyetlen pontra zsugorodó alakzat (csak a középpont)", "két pontból álló kör", "nem létező alakzat", "egy egyenes"],
        correct_answer: "egyetlen pontra zsugorodó alakzat (csak a középpont)",
        explanation: "Ha a teljes négyzetté alakítás után nulla áll a jobb oldalon, a \"kör\" egyetlen pontra, a középpontra zsugorodik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány közös pontja van egy egyenesnek és egy körnek, ha az egyenes metsző?",
        options: ["kettő", "egy", "nulla", "három"],
        correct_answer: "kettő",
        explanation: "A metsző egyenes két közös pontban metszi a kört (ekkor a diszkrimináns pozitív).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy origó középpontú, 5 sugarú kör P(3,4) pontjában húzott érintőjének normálvektora melyik vektorral egyezik meg?",
        options: ["(3,4)", "(4,-3)", "(-4,3)", "(5,0)"],
        correct_answer: "(3,4)",
        explanation: "A kör érintőjének normálvektora megegyezik a középpontból az érintési pontba mutató vektorral, ami itt (3,4).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a középpontja és sugara a (x-3)² + (y+2)² = 16 egyenletű körnek?",
        options: ["középpont (3,-2), sugár 4", "középpont (-3,2), sugár 4", "középpont (3,-2), sugár 16", "középpont (3,2), sugár 4"],
        correct_answer: "középpont (3,-2), sugár 4",
        explanation: "Az (x-u)²+(y-v)²=r² alakból u=3, v=-2, r²=16, tehát r=4.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Rajta van-e a P(5,3) pont a (x-2)² + (y-3)² = 9 egyenletű körön?",
        options: [
          "igen, mivel a bal oldal értéke 9, egyenlő a jobb oldallal",
          "nem, mert a pont a kör belsejében van",
          "nem, mert a pont a kör külsején van",
          "nem lehet eldönteni"
        ],
        correct_answer: "igen, mivel a bal oldal értéke 9, egyenlő a jobb oldallal",
        explanation: "(5-2)²+(3-3)² = 9+0 = 9, amely egyenlő a jobb oldallal, tehát a pont illeszkedik a körre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor helyezkedik el két kör egymáshoz \"kívülről érintve\"?",
        options: [
          "ha a középpontok távolsága egyenlő a sugarak összegével",
          "ha a középpontok távolsága nagyobb a sugarak összegénél",
          "ha a középpontok távolsága kisebb a sugarak különbségénél",
          "ha a középpontok egybeesnek"
        ],
        correct_answer: "ha a középpontok távolsága egyenlő a sugarak összegével",
        explanation: "Két kör kívülről érinti egymást, ha a középpontjaik távolsága pontosan a két sugár összegével egyezik meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi igaz, ha egy egyenes és egy kör közös pontjait meghatározó másodfokú egyenlet diszkriminánsa negatív?",
        options: ["az egyenes kívülálló, nincs közös pontjuk", "az egyenes érintő, egy közös pontjuk van", "az egyenes metsző, két közös pontjuk van", "az egyenes átmegy a középponton"],
        correct_answer: "az egyenes kívülálló, nincs közös pontjuk",
        explanation: "Ha D < 0, az egyenletnek nincs valós megoldása, tehát az egyenes kívülálló, nincs közös pontja a körrel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a középpontja és sugara az x² + y² - 4x + 6y - 12 = 0 egyenletű körnek?",
        options: ["középpont (2,-3), sugár 5", "középpont (-2,3), sugár 5", "középpont (2,-3), sugár 25", "középpont (4,-6), sugár 5"],
        correct_answer: "középpont (2,-3), sugár 5",
        explanation: "Teljes négyzetté alakítva: (x-2)²-4 + (y+3)²-9 - 12 = 0, tehát (x-2)²+(y+3)² = 25, így a középpont (2,-3), a sugár 5.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy x² + y² + Dx + Ey + F = 0 alakú egyenlet mikor ír le valóban kört a teljes négyzetté alakítás után?",
        options: ["ha a jobb oldalon (a konstans átvitele után) pozitív szám áll", "ha a jobb oldalon negatív szám áll", "ha a jobb oldalon nulla áll", "mindig kört ír le"],
        correct_answer: "ha a jobb oldalon (a konstans átvitele után) pozitív szám áll",
        explanation: "Csak akkor létezik valódi kör (pozitív sugárral), ha a teljes négyzetté alakítás után a jobb oldalon pozitív szám marad.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az origó középpontú, 6 sugarú kör egyenlete?",
        options: ["x² + y² = 36", "x² + y² = 6", "(x-6)² + y² = 36", "x² + y² = √6"],
        correct_answer: "x² + y² = 36",
        explanation: "Origó középpont esetén u=v=0, így az egyenlet x²+y²=r² = 6² = 36.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "vektorok-vektormuveletek-es-a-skalaris-szorzat",
    title: "Vektorok, vektorműveletek és a skaláris szorzat",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 16,
    summary_markdown:
      "A vektor irányított mennyiség, amelyre az összeadás, kivonás és számmal való szorzás mellett a skaláris szorzat is értelmezhető — ez utóbbi teszi lehetővé két vektor hajlásszögének és a merőlegességnek az egyszerű algebrai vizsgálatát.",
    content_markdown: `
## A vektor fogalma

A **vektor** irányított szakasz, amelyet nagysága (hossza) és iránya jellemez — ellentétben a **skalár** mennyiségekkel, amelyeknek csak nagyságuk van. Két vektor **egyenlő**, ha azonos hosszúságú és azonos irányú (helyzetüktől függetlenül) — ez a **szabad vektor** szemlélete, amely lehetővé teszi a vektorok tetszőleges eltolását.

## Vektorműveletek

Két vektor **összeadása** a paralelogramma-szabállyal vagy a vektorok "egymás után fűzésével" (a második vektor kezdőpontját az első végpontjához illesztve) végezhető el. A **kivonás** az ellentett vektor hozzáadásaként értelmezhető: a - b = a + (-b). A **számmal való szorzás** (λ · a) a vektor hosszát λ-szorosára nyújtja (vagy zsugorítja), és ha λ negatív, a vektor iránya is megfordul.

## A vektor koordinátái

Egy koordináta-rendszerben minden vektor megadható **koordinátáival**: v(v₁, v₂). Ha egy vektor kezdőpontja A(x₁,y₁), végpontja B(x₂,y₂), akkor a vektor koordinátái: AB(x₂-x₁, y₂-y₁). A vektorműveletek koordinátákkal rendkívül egyszerűen elvégezhetők: összeadáskor és kivonáskor a megfelelő koordinátákat adjuk össze/vonjuk ki, számmal szorzáskor minden koordinátát megszorzunk a számmal.

## A vektor abszolútértéke (hossza)

Egy v(v₁, v₂) koordinátájú vektor **abszolútértéke (hossza)** a Pitagorasz-tétel alapján számítható: **|v| = √(v₁² + v₂²)**.

## A helyvektor és a szakasz felezőpontja

Egy pont **helyvektora** az origóból a ponthoz mutató vektor. A helyvektorok segítségével egyszerűen kiszámítható egy szakasz **felezőpontjának** koordinátái: az A(x₁,y₁) és B(x₂,y₂) pontok közötti szakasz felezőpontja F((x₁+x₂)/2, (y₁+y₂)/2) — vagyis a végpontok koordinátáinak számtani közepe.

## A skaláris szorzat

Két vektor **skaláris szorzata** egy új vektorművelet, amelynek eredménye — a névvel ellentétben az összeadástól és a számmal szorzástól eltérően — nem vektor, hanem **egy valós szám (skalár)**. Definíció szerint: **a · b = |a| · |b| · cos(ε)**, ahol ε a két vektor által bezárt szög. Koordinátákkal kifejezve: **a · b = a₁·b₁ + a₂·b₂**.

## A skaláris szorzat alkalmazásai

A skaláris szorzat legfontosabb alkalmazása a **merőlegesség vizsgálata**: két (nem nullvektor) vektor pontosan akkor merőleges egymásra, ha skaláris szorzatuk **nulla** (a·b = 0, mivel cos 90° = 0). A skaláris szorzat felhasználható két vektor **hajlásszögének** kiszámítására is: cos(ε) = (a·b) / (|a|·|b|).

## Jelentősége

A vektorok, a rajtuk értelmezett műveletek (összeadás, kivonás, számmal szorzás, skaláris szorzat) és a hozzájuk kapcsolódó fogalmak (helyvektor, felezőpont, merőlegesség) alapvető eszközei a koordinátageometriának, és széles körben alkalmazhatók a fizikában (erők, sebességek leírása) és a számítógépes grafikában is.
`,
    key_concepts: [
      "vektor és vektorműveletek (összeadás, kivonás, számmal szorzás)",
      "vektor koordinátái és abszolútértéke: |v| = √(v₁²+v₂²)",
      "szakasz felezőpontja: helyvektorok átlaga",
      "skaláris szorzat: a·b = a₁b₁ + a₂b₂",
      "merőlegesség vizsgálata skaláris szorzattal (a·b=0)",
    ],
    source_refs: [
      { label: "A vektorok bevezetése (zanza.tv)", url: "https://zanza.tv/matematika/geometria/vektorok-bevezetese" },
      { label: "Két vektor skaláris szorzata (zanza.tv)", url: "https://zanza.tv/matematika/geometria/ket-vektor-skalaris-szorzata" },
      { label: "Vektor (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Vektor" },
      { label: "Vektorok – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/vektorok/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi különbözteti meg a vektort a skalártól?",
        options: [
          "a vektornak nagysága és iránya is van, a skalárnak csak nagysága",
          "a vektor mindig pozitív szám",
          "a skalár mindig negatív",
          "nincs közöttük különbség"
        ],
        correct_answer: "a vektornak nagysága és iránya is van, a skalárnak csak nagysága",
        explanation: "A vektor irányított mennyiség (nagyság + irány), míg a skalár csak egy szám (nagyság).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha A(1,2) és B(4,6), mekkora az AB vektor abszolútértéke (hossza)?",
        options: ["5", "7", "3", "25"],
        correct_answer: "5",
        explanation: "AB vektor koordinátái (3,4), |AB| = √(3²+4²) = √(9+16) = √25 = 5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a skaláris szorzat eredménye: vektor vagy szám?",
        options: ["valós szám (skalár)", "mindig vektor", "mátrix", "komplex szám"],
        correct_answer: "valós szám (skalár)",
        explanation: "A skaláris szorzat eredménye — az elnevezésnek megfelelően — egy valós szám, nem vektor.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor merőleges egymásra két (nem nulla) vektor?",
        options: ["ha skaláris szorzatuk nulla", "ha hosszuk egyenlő", "ha ellentétes irányúak", "ha koordinátáik megegyeznek"],
        correct_answer: "ha skaláris szorzatuk nulla",
        explanation: "Két vektor pontosan akkor merőleges, ha skaláris szorzatuk nulla, mivel cos 90° = 0.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az A(2,4) és B(6,8) végpontú szakasz felezőpontjának koordinátája?",
        options: ["(4,6)", "(8,12)", "(2,2)", "(3,4)"],
        correct_answer: "(4,6)",
        explanation: "A felezőpont koordinátái a végpontok koordinátáinak átlaga: ((2+6)/2, (4+8)/2) = (4,6).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik egy vektorral, ha -1-gyel (negatív számmal) szorozzuk?",
        options: ["az iránya megfordul, hossza nem változik", "a hossza megduplázódik", "az iránya nem változik", "nullvektorrá válik"],
        correct_answer: "az iránya megfordul, hossza nem változik",
        explanation: "Számmal szorzáskor a vektor hossza |λ|-szorosára változik, és ha λ negatív, az iránya megfordul; λ=-1 esetén a hossz nem változik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az a - b vektor-kivonás?",
        options: ["a + (-b), az ellentett vektor hozzáadását", "a és b hosszának különbségét", "a és b szorzatát", "egy nem definiált műveletet"],
        correct_answer: "a + (-b), az ellentett vektor hozzáadását",
        explanation: "A vektorkivonás az ellentett vektor hozzáadásaként értelmezhető: a - b = a + (-b).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha A(3,1) és B(7,4), mik az AB vektor koordinátái?",
        options: ["(4,3)", "(3,4)", "(10,5)", "(7,4)"],
        correct_answer: "(4,3)",
        explanation: "AB(x₂-x₁, y₂-y₁) = (7-3, 4-1) = (4,3).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Legyen a(2,3) és b(4,-1). Mennyi a·b (skaláris szorzat)?",
        options: ["5", "8", "-3", "11"],
        correct_answer: "5",
        explanation: "a·b = a₁b₁+a₂b₂ = 2·4 + 3·(-1) = 8-3 = 5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Legyen a(3,4). Mik a 2a vektor koordinátái?",
        options: ["(6,8)", "(3,4)", "(9,16)", "(1,5;2)"],
        correct_answer: "(6,8)",
        explanation: "Számmal szorzáskor minden koordinátát megszorzunk a számmal: 2·(3,4) = (6,8).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a helyvektor?",
        options: ["az origóból a ponthoz mutató vektor", "egy tetszőleges két pont közötti vektor", "egy vektor abszolútértéke", "egy vektor merőlegese"],
        correct_answer: "az origóból a ponthoz mutató vektor",
        explanation: "Egy pont helyvektora az origóból a ponthoz mutató vektor.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan számítható ki két vektor hajlásszögének koszinusza a koordinátáik ismeretében?",
        options: ["cos(ε) = (a·b) / (|a|·|b|)", "cos(ε) = |a|·|b|", "cos(ε) = a·b", "cos(ε) = |a|+|b|"],
        correct_answer: "cos(ε) = (a·b) / (|a|·|b|)",
        explanation: "A skaláris szorzat definíciójából (a·b = |a||b|cos ε) átrendezve cos(ε) = (a·b)/(|a|·|b|).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Legyen a(1,0) és b(0,1). Mennyi a két vektor skaláris szorzata, és mit jelent ez?",
        options: [
          "0, tehát a és b merőlegesek egymásra",
          "1, tehát párhuzamosak",
          "0, tehát párhuzamosak",
          "nem definiált"
        ],
        correct_answer: "0, tehát a és b merőlegesek egymásra",
        explanation: "a·b = 1·0 + 0·1 = 0, tehát a két vektor merőleges egymásra, mivel a skaláris szorzatuk nulla.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi a c(5,12) vektor abszolútértéke (hossza)?",
        options: ["13", "17", "169", "8,5"],
        correct_answer: "13",
        explanation: "|c| = √(5²+12²) = √(25+144) = √169 = 13.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szabály alkalmazható két vektor összeadására?",
        options: [
          "a paralelogramma-szabály vagy a vektorok egymás után fűzése",
          "csak koordináta-rendszerben lehet összeadni",
          "csak azonos irányú vektorok adhatók össze",
          "az összeadás eredménye mindig skalár"
        ],
        correct_answer: "a paralelogramma-szabály vagy a vektorok egymás után fűzése",
        explanation: "Két vektor összeadása a paralelogramma-szabállyal vagy a vektorok egymás után fűzésével végezhető el.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "aranyossagi-es-szoveges-feladatok",
    title: "Arányossági és szöveges feladatok",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 17,
    summary_markdown:
      "Az egyenes és a fordított arányosság felismerése és képlettel történő kezelése alapvető eszköz a szöveges feladatok (munkavégzési, keverési, sebességi feladatok) matematikai modellé alakításához és megoldásához.",
    content_markdown: `
## Az egyenes arányosság

Két mennyiség **egyenesen arányos**, ha az egyik mennyiség valahányszorosára változása esetén a másik mennyiség is ugyanannyiszorosára változik — vagyis a két mennyiség **hányadosa állandó**: y/x = k (állandó), azaz y = k·x. Tipikus példa: egy adott sebességgel megtett út és az eltelt idő (állandó sebesség esetén), vagy egy termék ára és a megvásárolt mennyiség (állandó egységár esetén).

## A fordított arányosság

Két mennyiség **fordítottan arányos**, ha az egyik mennyiség valahányszorosára változása esetén a másik mennyiség a reciprokára (1/valahányszorosára) változik — vagyis a két mennyiség **szorzata állandó**: x·y = k (állandó), azaz y = k/x. Tipikus példa: adott távolság megtétele esetén a sebesség és a szükséges idő (minél nagyobb a sebesség, annál kisebb az idő), vagy adott munka elvégzése esetén a munkások száma és a szükséges idő.

## Az arányossági feladatok megoldási stratégiája

Egy szöveges feladat megoldásának első és legfontosabb lépése annak eldöntése, hogy **egyenes vagy fordított arányosságról van-e szó** — ehhez érdemes feltenni a kérdést: "ha az egyik mennyiség nő, a másik is nő, vagy éppen csökken?" Ha mindkettő nő (vagy csökken) együtt: egyenes arányosság. Ha az egyik nő, miközben a másik csökken: fordított arányosság.

## Az arányos osztás

Az **arányos osztás** olyan feladattípus, amelyben egy adott mennyiséget (összeget, mennyiséget) egy megadott arány szerint kell szétosztani több rész között. Például ha 60 000 forintot kell 2:3:5 arányban szétosztani, a teljes arányösszeg 10 rész, tehát minden "rész" 6000 forintot ér, így a felosztás 12 000, 18 000 és 30 000 forint.

## Keverési feladatok

A **keverési feladatok** jellemzően két vagy több különböző koncentrációjú/árú anyag összekeverésével foglalkoznak, és a végső keverék koncentrációjának/árának meghatározását kérik (vagy fordítva: adott végkoncentráció eléréséhez szükséges arányokat). Ezek a feladatok tipikusan **mérlegelvvel** (a "hozzáadott mennyiségek szorzatösszegének" felírásával) oldhatók meg: pl. ha x liter 20%-os és y liter 50%-os oldatot keverünk össze, a keverék alkoholtartalma: (0,2x + 0,5y) / (x+y).

## Munkavégzési feladatok

A **munkavégzési feladatok** (pl. "hány nap alatt végeznek el egy munkát ketten együtt, ha külön-külön ennyi és ennyi idő alatt végeznék el") jellemzően a **munkasebességek (az időegység alatt elvégzett munkarész) összeadásával** oldhatók meg: ha az egyik munkás a munka 1/a részét, a másik az 1/b részét végzi el egy nap alatt, együtt naponta 1/a + 1/b részt végeznek el, így a közös munkaidő az (1/a + 1/b) reciproka.

## A grafikonos ábrázolás szerepe

Az egyenes arányosság grafikonja mindig egy **origón átmenő egyenes**, a fordított arányosság grafikonja egy **hiperbola** (amely soha nem metszi a tengelyeket). Ezek a grafikonok segítenek szemléltetni és ellenőrizni, hogy a feladat valóban a feltételezett arányossági típust követi-e.

## Jelentősége

Az egyenes és fordított arányosság, valamint a hozzájuk kapcsolódó szöveges feladattípusok (arányos osztás, keverési és munkavégzési feladatok) ismerete alapvető gyakorlati matematikai készség, amely a mindennapi élet számos problémájának (receptek átszámítása, sebesség-idő számítások, pénzügyi elosztások) megoldásához szükséges.
`,
    key_concepts: [
      "egyenes arányosság: y = k·x",
      "fordított arányosság: y = k/x",
      "arányos osztás",
      "keverési feladatok",
      "munkavégzési feladatok (munkasebességek összeadása)",
    ],
    source_refs: [
      { label: "Függvények V. – A fordított arányosság függvény (zanza.tv)", url: "https://zanza.tv/matematika/osszefuggesek-fuggvenyek-sorozatok/fuggvenyek-v-forditott-aranyossag-fuggveny" },
      { label: "fordított arányosság (zanza.tv)", url: "https://zanza.tv/fogalom/forditott-aranyossag" },
      { label: "Egyenes és fordított arányosság, arányos osztás, szöveges feladatok (Mateking)", url: "https://www.mateking.hu/kozepszintu-matek-erettsegi/egyenes-es-forditott-aranyossag-aranyos-osztas-szoveges-feladatok-3-8-pont" },
      { label: "Egyenes arányosság, fordított arányosság (Mateking)", url: "https://www.mateking.hu/matek-6-osztaly/egyenes-aranyossag-forditott-aranyossag" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik jellemzi az egyenes arányosságot?",
        options: [
          "a két mennyiség hányadosa állandó (y/x = k)",
          "a két mennyiség szorzata állandó (x·y = k)",
          "a két mennyiség összege állandó",
          "a két mennyiség különbsége állandó"
        ],
        correct_answer: "a két mennyiség hányadosa állandó (y/x = k)",
        explanation: "Egyenes arányosság esetén a két mennyiség hányadosa állandó, azaz y = k·x alakban írható fel a kapcsolat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha egy munkát A egyedül 6 nap, B egyedül 12 nap alatt végezne el, hány nap alatt végeznék el együtt?",
        options: ["4 nap", "9 nap", "6 nap", "18 nap"],
        correct_answer: "4 nap",
        explanation: "A napi munkavégzésük: 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4, tehát együtt 4 nap alatt végeznek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha 4 munkás 15 nap alatt végez el egy munkát, hány nap alatt végezné el 6 munkás (fordított arányosság alapján)?",
        options: ["10 nap", "22,5 nap", "15 nap", "24 nap"],
        correct_answer: "10 nap",
        explanation: "Fordított arányosság: 4·15 = 60 = 6·x, tehát x = 60/6 = 10 nap.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "90 000 forintot kell 2:3:4 arányban szétosztani. Mennyi a legnagyobb rész?",
        options: ["40 000 Ft", "30 000 Ft", "20 000 Ft", "45 000 Ft"],
        correct_answer: "40 000 Ft",
        explanation: "Az arányösszeg 2+3+4=9 rész, egy rész 90000/9=10000 Ft, a legnagyobb rész 4·10000=40000 Ft.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen alakú a fordított arányosság grafikonja?",
        options: ["hiperbola", "origón átmenő egyenes", "parabola", "kör"],
        correct_answer: "hiperbola",
        explanation: "A fordított arányosság (y = k/x) grafikonja hiperbola, amely soha nem metszi a koordinátatengelyeket.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik jellemzi a fordított arányosságot?",
        options: ["a két mennyiség szorzata állandó (x·y = k)", "a két mennyiség hányadosa állandó", "a két mennyiség összege állandó", "a két mennyiség különbsége állandó"],
        correct_answer: "a két mennyiség szorzata állandó (x·y = k)",
        explanation: "Fordított arányosság esetén a két mennyiség szorzata állandó: x·y = k, azaz y = k/x.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen alakú az egyenes arányosság grafikonja?",
        options: ["origón átmenő egyenes", "hiperbola", "parabola", "kör"],
        correct_answer: "origón átmenő egyenes",
        explanation: "Az egyenes arányosság (y=k·x) grafikonja mindig egy origón átmenő egyenes.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy autó állandó sebességgel 3 óra alatt 240 km-t tesz meg. Mennyi idő alatt tenne meg 400 km-t?",
        options: ["5 óra", "4 óra", "6 óra", "3,5 óra"],
        correct_answer: "5 óra",
        explanation: "A sebesség 240/3 = 80 km/h, ezért 400 km megtételéhez 400/80 = 5 óra szükséges (egyenes arányosság).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "60 000 forintot kell 1:2:3 arányban szétosztani. Mennyi a legkisebb rész?",
        options: ["10 000 Ft", "20 000 Ft", "30 000 Ft", "15 000 Ft"],
        correct_answer: "10 000 Ft",
        explanation: "Az arányösszeg 1+2+3=6 rész, egy rész 60000/6=10000 Ft, a legkisebb rész 1·10000=10000 Ft.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két szivattyú együtt 6 óra alatt tölt fel egy medencét. Ha az egyik szivattyú egyedül 10 óra alatt töltené fel, mennyi idő alatt töltené fel a másik egyedül?",
        options: ["15 óra", "4 óra", "16 óra", "60 óra"],
        correct_answer: "15 óra",
        explanation: "Együtt óránként 1/6 részt töltenek fel, az első szivattyú 1/10 részt; a másodiké 1/6-1/10=1/15, tehát egyedül 15 óra alatt végezne.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy autó 60 km/h sebességgel 5 óra alatt ér a célba. Mennyi idő alatt érne oda 100 km/h sebességgel (fordított arányosság alapján)?",
        options: ["3 óra", "2 óra", "4 óra", "8,3 óra"],
        correct_answer: "3 óra",
        explanation: "A távolság 60·5=300 km, ezért 100 km/h sebességgel 300/100=3 óra alatt érne oda.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "1 liter 30%-os és 1 liter 60%-os alkoholtartalmú oldatot összekeverünk. Mennyi lesz a keverék alkoholtartalma?",
        options: ["45%", "30%", "60%", "90%"],
        correct_answer: "45%",
        explanation: "A keverék alkoholtartalma (0,3·1+0,6·1)/(1+1) = 0,9/2 = 0,45, azaz 45%.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány liter 20%-os oldatot kell összekeverni 40%-os oldattal, hogy összesen 10 liter 30%-os oldatot kapjunk?",
        options: ["5 liter", "10 liter", "2,5 liter", "7,5 liter"],
        correct_answer: "5 liter",
        explanation: "Ha x liter 20%-os oldat kell, akkor 0,2x + 0,4(10-x) = 3, amiből -0,2x = -1, tehát x = 5 liter.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "A és B együtt egy munkát 3 nap alatt végeznek el. Ha A egyedül 5 nap alatt végezné el, hány nap alatt végezné el B egyedül?",
        options: ["7,5 nap", "2 nap", "8 nap", "15 nap"],
        correct_answer: "7,5 nap",
        explanation: "Együtt napi 1/3 részt végeznek, A napi 1/5 részt; B napi munkasebessége 1/3-1/5=2/15, tehát B egyedül 15/2=7,5 nap alatt végezne.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha egy szöveges feladatban az egyik mennyiség növekedésével a másik mennyiség is nő (azonos arányban), milyen arányosságról van szó?",
        options: ["egyenes arányosságról", "fordított arányosságról", "nincs összefüggés", "másodfokú összefüggésről"],
        correct_answer: "egyenes arányosságról",
        explanation: "Ha mindkét mennyiség együtt nő (vagy csökken), egyenes arányosságról van szó.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "valos-szamok-es-abszolutertek",
    title: "Valós számok és abszolútérték",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 18,
    summary_markdown:
      "A valós számok halmaza a racionális és irracionális számok egyesítéséből áll; egy szám abszolútértéke a számegyenesen mért, nullától vett távolságát fejezi ki, amely az abszolútértéket tartalmazó egyenletek és az abszolútérték-függvény alapja.",
    content_markdown: `
## A valós számok halmaza

A **valós számok (ℝ)** halmaza a **racionális számok (ℚ)** — amelyek felírhatók két egész szám hányadosaként — és az **irracionális számok** egyesítéséből áll. Az irracionális számok nem írhatók fel törtként, tizedestört alakjuk végtelen és nem szakaszos (pl. √2, π, e). A racionális számok tizedestört alakja mindig véges vagy végtelen szakaszos.

## Az abszolútérték fogalma

Egy valós szám **abszolútértéke** azt fejezi ki, hogy a szám milyen távol van a számegyenesen a nullától (az origótól), a szám előjelétől függetlenül. Definíció szerint: **|a| = a, ha a ≥ 0**, és **|a| = -a, ha a < 0**. Fontos, hogy az abszolútérték mindig **nemnegatív** szám.

## Az abszolútérték tulajdonságai

Az abszolútérték számos hasznos tulajdonsággal rendelkezik: **|a·b| = |a|·|b|** (szorzat abszolútértéke a tényezők abszolútértékeinek szorzata); **|a/b| = |a|/|b|** (b≠0 esetén); **|a+b| ≤ |a|+|b|** (háromszög-egyenlőtlenség). Két szám távolsága a számegyenesen az **|a-b|** kifejezéssel adható meg.

## Az abszolútértéket tartalmazó egyenletek

Az abszolútértéket tartalmazó egyenletek megoldásának alapötlete, hogy az abszolútérték definíciója szerint **esetszétválasztást** végzünk: pl. az |x - 3| = 5 egyenlet megoldásához két esetet vizsgálunk — vagy x - 3 = 5 (ekkor x = 8), vagy x - 3 = -5 (ekkor x = -2). Geometriailag |x - a| = b azokat az x pontokat keresi, amelyek a-tól pontosan b távolságra vannak a számegyenesen.

## Az abszolútérték-függvény

Az **abszolútérték-függvény** f(x) = |x| grafikonja egy "V" alakú törtvonal, amelynek csúcspontja az origóban van: az x ≥ 0 tartományon a grafikon az y = x egyenessel, az x < 0 tartományon az y = -x egyenessel esik egybe. A függvény értékkészlete a nemnegatív valós számok halmaza, és a függvény páros (grafikonja szimmetrikus az y-tengelyre).

## Intervallumok

A valós számok bizonyos részhalmazait **intervallumokkal** írjuk le: a **zárt intervallum** [a,b] tartalmazza a végpontokat is; a **nyílt intervallum** (a,b) nem tartalmazza a végpontokat; léteznek **félig nyílt (félig zárt)** intervallumok is [a,b) vagy (a,b] formában. Az abszolútértékes egyenlőtlenségek megoldáshalmaza gyakran intervallum (vagy intervallumok uniója) formájában adható meg.

## Abszolútértékes egyenlőtlenségek

Az |x| < a (a > 0) egyenlőtlenség megoldáshalmaza a (-a, a) nyílt intervallum, míg az |x| > a egyenlőtlenség megoldáshalmaza a (-∞,-a) ∪ (a,∞) halmaz. Ezek az összefüggések általánosíthatók |x-c| < a és |x-c| > a alakú egyenlőtlenségekre is, ahol c körüli, a sugarú intervallumról van szó.

## Jelentősége

A valós számok halmazának és az abszolútérték fogalmának, tulajdonságainak ismerete alapvető matematikai eszköz: az abszolútérték a távolság, a hiba, az eltérés matematikai megragadásának kulcsfogalma, amely a geometriától a statisztikáig (szórás) számos további területen felbukkan.
`,
    key_concepts: [
      "valós számok: racionális és irracionális számok uniója",
      "abszolútérték: |a| = a ha a≥0, |a| = -a ha a<0",
      "háromszög-egyenlőtlenség: |a+b| ≤ |a|+|b|",
      "abszolútérték-függvény (V alakú grafikon)",
      "intervallumok és abszolútértékes egyenlőtlenségek",
    ],
    source_refs: [
      { label: "Abszolútértéket tartalmazó egyenletek (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/abszoluterteket-tartalmazo-egyenletek" },
      { label: "Függvények III. – Az abszolútérték-függvényről (zanza.tv)", url: "https://zanza.tv/matematika/osszefuggesek-fuggvenyek-sorozatok/fuggvenyek-iii-az-abszolutertek-fuggvenyrol" },
      { label: "Ábrázolja és jellemezze az abszolútérték függvényt! – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/abszolutertek_fuggveny/" },
      { label: "Számhalmazok, halmazok számossága (Érettségitételek.com)", url: "https://erettsegitetelek.com/2020/12/szamhalmazok-halmazok-szamossaga/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mennyi |-7| értéke?",
        options: ["7", "-7", "0", "14"],
        correct_answer: "7",
        explanation: "Az abszolútérték mindig nemnegatív: |-7| = 7, mivel -7 < 0, ezért |-7| = -(-7) = 7.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szám irracionális?",
        options: ["√2", "3/4", "0,5", "-6"],
        correct_answer: "√2",
        explanation: "A √2 nem írható fel két egész szám hányadosaként, tizedestört alakja végtelen és nem szakaszos, tehát irracionális.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az |x - 3| = 5 egyenlet megoldáshalmaza?",
        options: ["x = 8 vagy x = -2", "x = 8 csak", "x = 2 vagy x = -8", "nincs megoldás"],
        correct_answer: "x = 8 vagy x = -2",
        explanation: "Esetszétválasztással: x-3=5 esetén x=8, x-3=-5 esetén x=-2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen alakú az f(x) = |x| függvény grafikonja?",
        options: ["V alakú törtvonal", "parabola", "hiperbola", "egyenes"],
        correct_answer: "V alakú törtvonal",
        explanation: "Az abszolútérték-függvény grafikonja V alakú, csúcspontja az origóban van.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az |x| < 3 egyenlőtlenség megoldáshalmaza?",
        options: ["(-3, 3) nyílt intervallum", "(3, ∞)", "(-∞, -3) ∪ (3, ∞)", "csak x = 3"],
        correct_answer: "(-3, 3) nyílt intervallum",
        explanation: "Az |x| < a (a>0) egyenlőtlenség megoldáshalmaza mindig a (-a, a) nyílt intervallum.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szám racionális?",
        options: ["0,75", "√3", "π", "√5"],
        correct_answer: "0,75",
        explanation: "A 0,75 felírható törtként (3/4), tizedestört alakja véges, tehát racionális; a többi felsorolt szám irracionális.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az abszolútérték-függvényt szimmetria szempontjából?",
        options: ["páros, grafikonja szimmetrikus az y-tengelyre", "páratlan, szimmetrikus az origóra", "nincs szimmetriája", "szimmetrikus az x-tengelyre"],
        correct_answer: "páros, grafikonja szimmetrikus az y-tengelyre",
        explanation: "Az f(x)=|x| függvény páros, mivel f(-x)=f(x), grafikonja szimmetrikus az y-tengelyre.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi |3 · (-4)| értéke?",
        options: ["12", "-12", "7", "1"],
        correct_answer: "12",
        explanation: "|a·b| = |a|·|b|, tehát |3·(-4)| = |3|·|-4| = 3·4 = 12.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi |-15| / |3| értéke?",
        options: ["5", "-5", "45", "12"],
        correct_answer: "5",
        explanation: "|a/b| = |a|/|b|, tehát |-15|/|3| = 15/3 = 5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora a 8 és a 3 szám távolsága a számegyenesen?",
        options: ["5", "11", "-5", "24"],
        correct_answer: "5",
        explanation: "Két szám távolsága |a-b|, tehát |8-3| = 5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |x + 2| = 7.",
        options: ["x = 5 vagy x = -9", "x = 5 csak", "x = 9 vagy x = -5", "nincs megoldás"],
        correct_answer: "x = 5 vagy x = -9",
        explanation: "Esetszétválasztással: x+2=7 esetén x=5, x+2=-7 esetén x=-9.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az |x| > 4 egyenlőtlenség megoldáshalmaza?",
        options: ["(-∞,-4) ∪ (4,∞)", "(-4,4)", "[-4,4]", "csak x = 4"],
        correct_answer: "(-∞,-4) ∪ (4,∞)",
        explanation: "Az |x| > a (a>0) egyenlőtlenség megoldáshalmaza (-∞,-a) ∪ (a,∞).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a zárt [a,b] intervallumot?",
        options: ["tartalmazza a végpontokat is", "nem tartalmazza a végpontokat", "csak az egyik végpontot tartalmazza", "nincsenek végpontjai"],
        correct_answer: "tartalmazza a végpontokat is",
        explanation: "A zárt intervallum [a,b] a végpontokat (a-t és b-t) is tartalmazza.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik egyenlőtlenség fejezi ki a háromszög-egyenlőtlenséget?",
        options: ["|a+b| ≤ |a|+|b|", "|a+b| = |a|+|b|", "|a+b| ≥ |a|+|b|", "|a-b| ≤ |a|-|b|"],
        correct_answer: "|a+b| ≤ |a|+|b|",
        explanation: "A háromszög-egyenlőtlenség szerint |a+b| ≤ |a|+|b| minden valós a, b esetén.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a félig nyílt (félig zárt) [a,b) intervallumot?",
        options: ["tartalmazza az a végpontot, de a b végpontot nem", "tartalmazza mindkét végpontot", "nem tartalmazza sem a-t, sem b-t", "csak b-t tartalmazza"],
        correct_answer: "tartalmazza az a végpontot, de a b végpontot nem",
        explanation: "A [a,b) félig zárt intervallum az a végpontot tartalmazza, a b végpontot nem.",
        difficulty: 3,
      },
    ],
  },
];
