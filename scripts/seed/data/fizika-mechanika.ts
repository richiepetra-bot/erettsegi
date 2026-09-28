import type { TopicSeed } from "./angol";

export const fizikaMechanikaTopics: TopicSeed[] = [
  {
    slug: "mozgasok-leirasa-kinematika-alapjai",
    title: "Mozgások leírása — kinematika alapjai",
    level: "mindketto",
    theme: "Mechanika",
    order_index: 1,
    summary_markdown:
      "A kinematika a testek mozgását írja le anélkül, hogy a mozgást okozó erőkkel foglalkozna. Ebben a tételben az egyenes vonalú egyenletes és egyenletesen változó mozgás alapfogalmait, grafikonjait és képleteit tárgyaljuk.",
    content_markdown: `
## Alapfogalmak: hely, elmozdulás, út, sebesség

A mozgás leírásához mindig szükséges egy **vonatkoztatási rendszer** (koordináta-rendszer és óra), amelyhez a test helyzetét viszonyítjuk. Fontos fogalmak:

- **Helyvektor (r)**: a test pillanatnyi helyzetét megadó vektor a kezdőponthoz képest.
- **Elmozdulás (Δr, illetve egyenes vonalú mozgásnál Δs)**: a kezdő- és végpont közötti vektor, iránya és nagysága is van.
- **Megtett út (s)**: a pályán megtett tényleges hosszúság, mindig pozitív skalár, és görbe pálya esetén nagyobb lehet, mint az elmozdulás nagysága.
- **Sebesség (v)**: az elmozdulás időegységre eső változása, **v = Δs / Δt** [m/s]. Az **átlagsebesség** a teljes útra, a **pillanatnyi sebesség** egy adott időpontra vonatkozik.

## Egyenes vonalú egyenletes mozgás (EVEM)

Ha a sebesség állandó (nagysága és iránya sem változik), a mozgás **egyenes vonalú egyenletes**. Ekkor:

**s = s₀ + v·t**

ahol s₀ a kezdeti helykoordináta, v az állandó sebesség, t az idő. Az út–idő grafikon egy egyenes, amelynek meredeksége éppen a sebesség; a sebesség–idő grafikon egy vízszintes egyenes.

## Gyorsulás és az egyenletesen változó mozgás (EVGYM)

A **gyorsulás (a)** a sebesség időegységre eső változása: **a = Δv / Δt** [m/s²]. Ha a gyorsulás állandó, a mozgás **egyenes vonalú egyenletesen változó** (gyorsuló, ha a és v egyirányú, lassuló/fékeződő, ha ellentétes irányúak). Az alapegyenletek:

- **v = v₀ + a·t** (sebesség–idő összefüggés)
- **s = s₀ + v₀·t + ½·a·t²** (út–idő összefüggés)
- **v² = v₀² + 2·a·(s − s₀)** (sebesség és út kapcsolata, idő nélkül)

A sebesség–idő grafikon ferde egyenes, meredeksége a gyorsulás; a megtett út ezen a grafikonon a görbe (itt: trapéz vagy háromszög) alatti terület.

## Szabadesés

A **szabadesés** speciális, egyenes vonalú, egyenletesen gyorsuló mozgás, amelynél a testre (légellenállástól eltekintve) csak a nehézségi erő hat, gyorsulása állandó: **g ≈ 9,81 m/s²**, iránya lefelé. Nyugalmi helyzetből indított test esetén (v₀ = 0):

- **v = g·t**
- **h = ½·g·t²**

Ez lehetővé teszi, hogy a leesés idejéből kiszámítsuk a magasságot, vagy fordítva.

## Példa levezetés

Egy autó 20 m/s sebességről indulva 4 s alatt egyenletesen gyorsulva 28 m/s-ra gyorsul fel. Mekkora az gyorsulása, és mennyi utat tesz meg eközben?

1. **a = (v − v₀) / t = (28 − 20) / 4 = 2 m/s²**
2. **s = v₀·t + ½·a·t² = 20·4 + ½·2·16 = 80 + 16 = 96 m**

## Grafikonok összefoglalása

| Mozgás típusa | s–t grafikon | v–t grafikon | a–t grafikon |
|---|---|---|---|
| Egyenletes | egyenes (ferde) | vízszintes egyenes | vízszintes (a = 0) egyenes a 0-nál |
| Egyenletesen változó | parabola | ferde egyenes | vízszintes egyenes (a ≠ 0) |
`,
    key_concepts: [
      "elmozdulás és megtett út",
      "átlagsebesség és pillanatnyi sebesség",
      "egyenes vonalú egyenletes mozgás",
      "gyorsulás és egyenletesen változó mozgás",
      "szabadesés",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a megtett út és az elmozdulás között?",
        options: [
          "az út mindig pozitív skalár, az elmozdulás vektor, iránnyal is jellemezhető",
          "nincs köztük különbség",
          "az elmozdulás mindig nagyobb, mint az út",
          "az út csak görbe vonalú mozgásnál létezik",
        ],
        correct_answer: "az út mindig pozitív skalár, az elmozdulás vektor, iránnyal is jellemezhető",
        explanation: "A megtett út a pályán befutott hosszúság (skalár), az elmozdulás a kezdő- és végpont közötti vektor.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy test egyenletesen gyorsul 0 kezdősebességről. 3 s alatt gyorsulása 4 m/s². Mekkora sebességet ér el?",
        options: ["12 m/s", "4 m/s", "7 m/s", "3 m/s"],
        correct_answer: "12 m/s",
        explanation: "v = v₀ + a·t = 0 + 4·3 = 12 m/s.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy test 2 s alatt nyugalmi helyzetből szabadon esik (g = 10 m/s²). Mekkora utat tesz meg?",
        options: ["20 m", "10 m", "40 m", "5 m"],
        correct_answer: "20 m",
        explanation: "h = ½·g·t² = ½·10·4 = 20 m.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy egyenletesen változó mozgást ábrázoló sebesség–idő grafikonon a görbe alatti terület mit ad meg?",
        options: ["a megtett utat", "a gyorsulást", "a sebességet", "az elmozdulás irányát"],
        correct_answer: "a megtett utat",
        explanation: "A v–t grafikon egy adott időintervallum alatti területe a megtett úttal egyezik meg, hiszen az út a sebesség időbeli integrálja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy autó 10 m/s-ról indulva egyenletesen gyorsul, és 5 s múlva 30 m/s a sebessége. Mennyi utat tett meg eközben?",
        options: ["100 m", "150 m", "50 m", "200 m"],
        correct_answer: "100 m",
        explanation: "a = (30−10)/5 = 4 m/s²; s = v₀t + ½at² = 10·5 + ½·4·25 = 50 + 50 = 100 m.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "newton-torvenyei-dinamika",
    title: "Newton törvényei — dinamika",
    level: "mindketto",
    theme: "Mechanika",
    order_index: 2,
    summary_markdown:
      "A dinamika a mozgásokat okozó erőkkel foglalkozik. Newton három axiómája (tehetetlenség, F=ma, hatás-ellenhatás) a klasszikus mechanika alapja, kiegészítve a súly és a normálerő, illetve a súlytalanság fogalmával.",
    content_markdown: `
## Newton I. törvénye — a tehetetlenség törvénye

Minden test megtartja nyugalmi állapotát, vagy egyenes vonalú egyenletes mozgását, amíg egy külső erő ezen nem változtat. Ez a **tehetetlenség (inercia)** elve: a testeknek "ellenállásuk" van a mozgásállapot-változással szemben, amelynek mértéke a **tömeg (m)**. A törvény csak **inerciarendszerekben** (nem gyorsuló vonatkoztatási rendszerekben) érvényes.

## Newton II. törvénye — a mozgásegyenlet

Egy testre hatva az eredő erő a testet gyorsulásba hozza, amely egyenesen arányos az eredő erővel és fordítottan arányos a tömeggel:

**F_eredő = m · a**, azaz **a = F_eredő / m**

Az erő mértékegysége a **newton [N] = kg·m/s²**. Ha több erő hat egy testre, először a **vektoriális eredőt** kell meghatározni, és csak azt kell a mozgásegyenletbe behelyettesíteni.

## Newton III. törvénye — a hatás-ellenhatás törvénye

Ha egy A test erőt (hatás) fejt ki egy B testre, akkor a B test ugyanolyan nagyságú, de ellentétes irányú erőt (ellenhatás) fejt ki az A testre. Ezek az erők **egy időben** hatnak, **különböző testekre**, és **soha nem egyenlítik ki egymást** (mivel más-más testre hatnak).

## Súly és normálerő

- A **súlyerő (G = m·g)** a Föld (vagy más égitest) tömegvonzása miatt hat a testre, iránya mindig lefelé (a föld középpontja felé).
- A **normálerő (N)** az alátámasztás által a testre kifejtett, a felülettel merőleges erő, amely megakadályozza, hogy a test a felületbe süllyedjen.
- Vízszintes felületen nyugvó, más erőtől nem terhelt testnél **N = G = m·g**.
- Lejtőn a normálerő és a súly lejtő irányú összetevője eltérnek: **N = m·g·cos α**, a lejtő mentén ható összetevő **F = m·g·sin α** (α a lejtő hajlásszöge).

## Súlytalanság

A **súlytalanság** állapotában a test és a mérleg (vagy környezete) azonos gyorsulással mozog, ezért a normálerő (és a mérték szerinti "súly") nulla — ez nem azt jelenti, hogy a gravitációs erő megszűnik, hanem hogy nincs relatív erőhatás a test és alátámasztása között (pl. szabadon eső liftben, vagy Föld körül keringő űrhajóban).

## Példa levezetés

Egy 5 kg tömegű testre 20 N nagyságú, vízszintes erő hat, a talaj és a test közötti csúszási együttható μ = 0,2. Mekkora a test gyorsulása?

1. Súlyerő: G = m·g = 5·10 = 50 N, így N = 50 N.
2. Csúszási (közegellenállási) erő: F_cs = μ·N = 0,2·50 = 10 N, iránya a mozgással ellentétes.
3. Eredő erő: F_eredő = 20 − 10 = 10 N.
4. Gyorsulás: a = F_eredő / m = 10 / 5 = **2 m/s²**.
`,
    key_concepts: [
      "tehetetlenség törvénye (Newton I.)",
      "mozgásegyenlet: F = m·a (Newton II.)",
      "hatás-ellenhatás törvénye (Newton III.)",
      "súlyerő és normálerő",
      "súlytalanság",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit állít Newton I. törvénye (a tehetetlenség törvénye)?",
        options: [
          "minden test megtartja mozgásállapotát, amíg külső erő azt nem változtatja meg",
          "az erő egyenesen arányos a gyorsulással és a tömeggel",
          "minden hatásnak ellenhatása van",
          "a súlyerő mindig egyenlő a normálerővel",
        ],
        correct_answer: "minden test megtartja mozgásállapotát, amíg külső erő azt nem változtatja meg",
        explanation: "Newton I. törvénye a tehetetlenség elvét fogalmazza meg: külső erő hiányában a test nyugalomban marad, vagy egyenes vonalú egyenletes mozgást végez.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 2 kg tömegű testre 8 N eredő erő hat. Mekkora a gyorsulása?",
        options: ["4 m/s²", "16 m/s²", "2 m/s²", "0,25 m/s²"],
        correct_answer: "4 m/s²",
        explanation: "a = F/m = 8/2 = 4 m/s².",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem egyenlítik ki egymást a hatás-ellenhatás páros erők (Newton III.)?",
        options: [
          "mert két különböző testre hatnak",
          "mert eltérő nagyságúak",
          "mert nem egyszerre hatnak",
          "mert csak érintkezés esetén léteznek",
        ],
        correct_answer: "mert két különböző testre hatnak",
        explanation: "A hatás és ellenhatás azonos nagyságú, ellentétes irányú, de mindig két különböző testre hat, ezért nem eredményezhetnek nulla eredő erőt egyetlen testen.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 10 kg tömegű test 30°-os hajlásszögű lejtőn nyugszik. Mekkora a lejtő irányú erőkomponens (g = 10 m/s²)?",
        options: ["50 N", "100 N", "87 N", "10 N"],
        correct_answer: "50 N",
        explanation: "F = m·g·sin30° = 10·10·0,5 = 50 N.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy liftben szabadon (a gravitációval egyező gyorsulással) zuhanó ember miért érzi magát súlytalannak?",
        options: [
          "mert a test és a lift azonos gyorsulással mozog, így a normálerő nullára csökken",
          "mert a gravitációs erő ilyenkor megszűnik hatni",
          "mert a tömege lecsökken",
          "mert a hatás-ellenhatás törvénye ekkor nem érvényes",
        ],
        correct_answer: "mert a test és a lift azonos gyorsulással mozog, így a normálerő nullára csökken",
        explanation: "Súlytalanságban a gravitációs erő továbbra is hat, de mivel a test és alátámasztása azonos gyorsulással mozog, nincs közöttük relatív erőhatás (normálerő), ezért a mérleg nulla súlyt mutatna.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "newton-gravitacios-torvenye-bolygomozgas",
    title: "Newton gravitációs törvénye és a bolygómozgás",
    level: "mindketto",
    theme: "Mechanika",
    order_index: 3,
    summary_markdown:
      "Az általános tömegvonzás törvénye szerint minden tömeggel bíró test hat egymásra. Ez a törvény és Kepler három törvénye adja a bolygók és a keringő égitestek mozgásának fizikai magyarázatát.",
    content_markdown: `
## Az általános tömegvonzás törvénye

**Newton gravitációs törvénye** szerint két pontszerű (vagy gömbszimmetrikus) test között ható gravitációs erő egyenesen arányos a tömegeik szorzatával, és fordítottan arányos a köztük lévő távolság négyzetével:

**F = γ · (m₁·m₂) / r²**

ahol γ ≈ 6,674 · 10⁻¹¹ N·m²/kg² a **gravitációs állandó**, m₁ és m₂ a két test tömege, r a középpontjaik közötti távolság. Az erő mindig **vonzó** jellegű, és a két testre a hatás-ellenhatás törvénye szerint azonos nagyságú, ellentétes irányú erő hat.

## A nehézségi gyorsulás eredete

A Föld felszínén tapasztalt **g ≈ 9,81 m/s²** nehézségi gyorsulás éppen a Föld gravitációs erejéből adódik: egy m tömegű testre F = γ·M_Föld·m / R_Föld² erő hat, és mivel F = m·g, ezért **g = γ·M_Föld / R_Föld²**. Ez magyarázza, hogy g függ a magasságtól (a Föld középpontjától mért távolságtól) — nagyobb magasságban g kisebb.

## Kepler törvényei

A dán Tycho Brahe megfigyelései alapján Johannes Kepler három empirikus törvényt fogalmazott meg a bolygók Nap körüli mozgására, amelyeket később Newton gravitációs törvényéből matematikailag is levezettek:

1. **Kepler I. törvénye (a pályák törvénye)**: a bolygók ellipszis alakú pályán mozognak, amelynek egyik gyújtópontjában a Nap található.
2. **Kepler II. törvénye (a területek törvénye)**: a bolygót a Nappal összekötő vezérsugár egyenlő idők alatt egyenlő területeket súrol — ez azt jelenti, hogy a bolygó a Naphoz közelebb (napközelben) gyorsabban, tőle távolabb (naptávolban) lassabban mozog.
3. **Kepler III. törvénye (a periódusok törvénye)**: a bolygók keringési idejének négyzete arányos a pálya nagytengelyének (közelítőleg a Naptól mért átlagos távolságnak) a köbével: **T² / a³ = állandó** (minden, azonos központi test körül keringő testre azonos érték).

## Kozmikus sebességek

- **I. kozmikus sebesség**: az a sebesség, amellyel egy test a Föld felszínéhez közeli körpályán tud keringeni (kb. 7,9 km/s). Ekkor a gravitációs erő biztosítja a körmozgáshoz szükséges centripetális erőt: **γ·M·m/r² = m·v²/r**, amiből **v = √(γ·M/r)**.
- **II. kozmikus sebesség (szökési sebesség)**: az a minimális sebesség, amellyel egy test véglegesen elhagyhatja egy égitest gravitációs hatását (a Föld esetén kb. 11,2 km/s).

## Mesterséges holdak és a geostacionárius pálya

A mesterséges holdak mozgására is Kepler törvényei és a gravitációs törvény érvényesek. A **geostacionárius pálya** olyan magasságú (kb. 35 786 km) körpálya az Egyenítő felett, ahol a hold keringési ideje pontosan megegyezik a Föld tengely körüli forgási idejével (24 óra), így a Föld felszínéről nézve a hold látszólag mozdulatlan — ezt használják például a távközlési és meteorológiai holdak.
`,
    key_concepts: [
      "Newton gravitációs törvénye (F = γm₁m₂/r²)",
      "nehézségi gyorsulás eredete",
      "Kepler három törvénye",
      "kozmikus sebességek",
      "geostacionárius pálya",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mivel arányos a két tömegpont közötti gravitációs erő Newton gravitációs törvénye szerint?",
        options: [
          "a tömegek szorzatával, és fordítottan a távolság négyzetével",
          "a tömegek összegével és a távolsággal",
          "csak a nagyobb tömeggel",
          "a tömegek szorzatával és a távolsággal egyenesen",
        ],
        correct_answer: "a tömegek szorzatával, és fordítottan a távolság négyzetével",
        explanation: "F = γ·m₁·m₂/r², tehát a gravitációs erő a tömegek szorzatával egyenesen, a távolság négyzetével fordítottan arányos.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit mond ki Kepler II. törvénye (a területek törvénye)?",
        options: [
          "a bolygót a Nappal összekötő vezérsugár egyenlő idők alatt egyenlő területet súrol",
          "a bolygók pályája kör alakú",
          "a keringési idő négyzete arányos a pályasugár köbével",
          "minden bolygó azonos sebességgel mozog",
        ],
        correct_answer: "a bolygót a Nappal összekötő vezérsugár egyenlő idők alatt egyenlő területet súrol",
        explanation: "Kepler II. törvénye szerint a vezérsugár egyenlő idők alatt egyenlő területeket súrol, ezért a bolygó napközelben gyorsabban, naptávolban lassabban mozog.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az I. kozmikus sebesség fizikai jelentése?",
        options: [
          "az a sebesség, amellyel egy test a felszín közelében körpályán tud keringeni",
          "az a sebesség, amellyel egy test véglegesen elhagyja a Föld gravitációs hatását",
          "a Föld tengely körüli forgási sebessége",
          "a fény sebessége vákuumban",
        ],
        correct_answer: "az a sebesség, amellyel egy test a felszín közelében körpályán tud keringeni",
        explanation: "Az I. kozmikus sebesség az a sebesség, amelynél a gravitációs erő pontosan a körmozgáshoz szükséges centripetális erőt fedezi, kb. 7,9 km/s.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért látszik mozdulatlannak egy geostacionárius hold a Föld felszínéről nézve?",
        options: [
          "mert keringési ideje megegyezik a Föld tengely körüli forgási idejével",
          "mert nincs rá gravitációs erő",
          "mert a Föld felszínéhez rögzítve van",
          "mert a fénysebességgel mozog",
        ],
        correct_answer: "mert keringési ideje megegyezik a Föld tengely körüli forgási idejével",
        explanation: "A geostacionárius hold kb. 24 órás keringési ideje megegyezik a Föld forgási periódusával, ezért a Föld egy adott pontjához képest mozdulatlannak látszik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két azonos tömegű test közötti távolságot háromszorosára növelve, hogyan változik a köztük ható gravitációs erő?",
        options: [
          "kilencedére csökken",
          "harmadára csökken",
          "háromszorosára nő",
          "nem változik",
        ],
        correct_answer: "kilencedére csökken",
        explanation: "Az erő fordítottan arányos a távolság négyzetével, ezért a távolság háromszorosára növelésekor az erő 1/3² = 1/9-ed részére csökken.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "munka-energia-teljesitmeny",
    title: "Munka, energia, teljesítmény",
    level: "mindketto",
    theme: "Mechanika",
    order_index: 4,
    summary_markdown:
      "A munka, az energia és a teljesítmény a mechanika egyik legfontosabb, egymással szorosan összefüggő fogalomköre, amelynek csúcspontja a mechanikai energia megmaradásának tétele.",
    content_markdown: `
## A munka fogalma

A **munka (W)** akkor történik, ha egy erő a hatására létrejövő elmozdulás irányába (vagy annak egy komponensébe) mutat. Ha az erő állandó, és az elmozdulással α szöget zár be:

**W = F · s · cos α** [J, joule]

- Ha α = 0° (erő és elmozdulás egyirányú): W = F·s (maximális, pozitív munka).
- Ha α = 90° (erő merőleges az elmozdulásra): W = 0 (pl. körmozgásnál a centripetális erő nem végez munkát).
- Ha α = 180° (erő az elmozdulással ellentétes): W negatív (pl. a közegellenállás, a súrlódás munkája mozgás közben mindig negatív).

## Mozgási (kinetikus) energia

A mozgó test **mozgási energiája**:

**E_mozg = ½ · m · v²**

A **munkatétel** szerint egy testen végzett eredő munka megegyezik a mozgási energiájának megváltozásával: **W_eredő = ΔE_mozg = E_mozg,vég − E_mozg,kezdeti**.

## Helyzeti (potenciális) energia

- **Gravitációs helyzeti energia**: egy m tömegű test h magasságban (egy választott nullszinthez képest) **E_hely = m·g·h**.
- **Rugalmas (rugó-)energia**: egy k rugóállandójú, x megnyúlású/összenyomódású rugóban tárolt energia **E_rugó = ½ · k · x²** (Hooke-törvény: F = k·x).

## A mechanikai energia megmaradásának tétele

Ha egy rendszerre csak **konzervatív erők** hatnak (pl. gravitáció, rugóerő — amelyeknél a munka nem függ az úttól, csak a kezdő- és végponttól), akkor a mozgási és helyzeti energia összege, a **teljes mechanikai energia állandó**:

**E_mozg + E_hely = állandó**

Ha viszont **nem konzervatív erők** (pl. súrlódás, közegellenállás) is hatnak, a mechanikai energia egy része hővé, hanggá alakul — ilyenkor a teljes (mechanikai + hő stb.) energia marad meg, ami az **energiamegmaradás általános törvénye**.

## Teljesítmény

A **teljesítmény (P)** a munka időegységre eső mennyisége, illetve állandó sebesség esetén az erő és a sebesség szorzata:

**P = W / t = F · v** [W, watt]

A **hatásfok (η)** a hasznosan felhasznált (vagy kinyert) energia/teljesítmény és a befektetett (bevitt) energia/teljesítmény aránya: **η = P_hasznos / P_bevitt** (mindig 1-nél kisebb, gyakran százalékban adják meg).

## Példa levezetés

Egy 2 kg tömegű testet 5 m magasból (kezdősebesség nélkül) leejtünk. Mekkora a sebessége a talajérés pillanatában (légellenállástól eltekintve, g = 10 m/s²)?

1. Energiamegmaradás: E_hely(kezdet) = E_mozg(vég), mert kezdetben nincs mozgási energia, végül nincs helyzeti energia (nullszinten).
2. m·g·h = ½·m·v² ⟹ **v = √(2·g·h) = √(2·10·5) = √100 = 10 m/s.**
`,
    key_concepts: [
      "munka: W = F·s·cos α",
      "mozgási energia és a munkatétel",
      "helyzeti (gravitációs, rugalmas) energia",
      "a mechanikai energia megmaradásának tétele",
      "teljesítmény és hatásfok",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Egy 4 N nagyságú erő az elmozdulás irányában hat, és 3 m úton mozgatja a testet. Mekkora munkát végez az erő?",
        options: ["12 J", "7 J", "1,33 J", "0 J"],
        correct_answer: "12 J",
        explanation: "W = F·s·cos0° = 4·3·1 = 12 J.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem végez munkát a körmozgást fenntartó centripetális erő?",
        options: [
          "mert mindig merőleges az elmozdulásra (a sebességre)",
          "mert az erő nagysága nulla",
          "mert a test sebessége állandó",
          "mert az erő az elmozdulással egyirányú",
        ],
        correct_answer: "mert mindig merőleges az elmozdulásra (a sebességre)",
        explanation: "A centripetális erő mindig a kör középpontja felé, azaz a pillanatnyi sebességre (és így az elmozdulásra) merőlegesen hat, ezért W = F·s·cos90° = 0.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 3 kg tömegű test 4 m/s sebességgel mozog. Mekkora a mozgási energiája?",
        options: ["24 J", "12 J", "48 J", "6 J"],
        correct_answer: "24 J",
        explanation: "E_mozg = ½·m·v² = ½·3·16 = 24 J.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy motor 2 percben 60 000 J munkát végez. Mekkora a teljesítménye?",
        options: ["500 W", "30 000 W", "120 W", "1000 W"],
        correct_answer: "500 W",
        explanation: "P = W/t = 60 000 / 120 = 500 W (2 perc = 120 s).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy gördeszkás 8 m magas rámpa tetejéről indul kezdősebesség nélkül. Súrlódás és légellenállás mellett a rámpa alján a sebessége csak 10 m/s (nem a maximális, súrlódásmentes esethez tartozó érték). Mi történt a hiányzó mechanikai energiával?",
        options: [
          "egy része hővé és hanggá alakult a súrlódás és a légellenállás miatt",
          "megsemmisült, az energiamegmaradás ebben az esetben nem érvényes",
          "mind helyzeti energiává alakult vissza",
          "a gördeszkás tömege csökkent",
        ],
        correct_answer: "egy része hővé és hanggá alakult a súrlódás és a légellenállás miatt",
        explanation: "Nem konzervatív erők (súrlódás, közegellenállás) jelenlétében a mechanikai energia egy része hővé, hanggá alakul, de a teljes (kiterjesztett) energia továbbra is megmarad.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "impulzus-impulzusmegmaradas-utkozesek",
    title: "Impulzus és impulzusmegmaradás, ütközések",
    level: "mindketto",
    theme: "Mechanika",
    order_index: 5,
    summary_markdown:
      "Az impulzus (lendület) megmaradásának tétele a fizika egyik legáltalánosabb érvényű törvénye, amely az ütközések (rugalmas és rugalmatlan) leírásának alapja.",
    content_markdown: `
## Az impulzus fogalma

Egy m tömegű, v sebességgel mozgó test **impulzusa (lendülete)**:

**p = m · v** [kg·m/s]

Az impulzus vektormennyiség, iránya megegyezik a sebesség irányával. Newton II. törvénye impulzus segítségével általánosabban is megfogalmazható: **F = Δp / Δt**, azaz az eredő erő az impulzus időegységre eső változásával egyezik meg.

## Az impulzus-változás tétele (lökés)

Ha egy testre F erő hat Δt ideig, az impulzusa megváltozik:

**Δp = F · Δt**

Ezt a szorzatot **erőlökésnek (impulzusváltozásnak)** nevezzük. Ez magyarázza például, hogy miért csökkenti egy légzsák vagy egy puha leérkezés a sérülés kockázatát: azonos impulzusváltozáshoz (pl. a sebesség lecsökkentéséhez) hosszabb Δt esetén kisebb F erő szükséges.

## Az impulzusmegmaradás törvénye

Egy **zárt rendszerben** (amelyre külső erő nem hat, vagy a külső erők eredője nulla) a rendszer teljes impulzusa **állandó** marad, függetlenül attól, milyen belső kölcsönhatások (pl. ütközések, robbanások) történnek a rendszer testei között:

**p_összes(kezdet) = p_összes(vég)**, azaz Σm_i·v_i = állandó.

Ez azért igaz, mert a belső erők a hatás-ellenhatás törvénye miatt páronként kiegyenlítik egymást.

## Ütközések típusai

- **Tökéletesen rugalmas ütközés**: az ütköző testek mozgási energiája is megmarad (a testek nem deformálódnak tartósan, nem alakul hő). Egyenes vonalú, egydimenziós rugalmas ütközésnél egyszerre kell felírni az impulzus- és az energia-megmaradást.
- **Tökéletesen rugalmatlan ütközés**: az ütköző testek az ütközés után **együtt mozognak** (összekapcsolódnak), a mozgási energia egy része hővé, deformációs energiává alakul, csak az impulzus marad meg.
- **Részlegesen rugalmatlan ütközés**: a valóságban leggyakoribb eset, ahol a testek külön mozognak tovább, de a mozgási energia egy része elveszik.

## Példa levezetés — tökéletesen rugalmatlan ütközés

Egy 1000 kg tömegű, 20 m/s sebességgel mozgó autó frontálisan összeütközik egy álló, 1500 kg tömegű autóval, és a két autó az ütközés után összekapcsolódva mozog tovább. Mekkora a közös sebességük?

1. Impulzusmegmaradás: m₁·v₁ + m₂·v₂ = (m₁+m₂)·v_közös
2. 1000·20 + 1500·0 = 2500·v_közös
3. 20 000 = 2500·v_közös ⟹ **v_közös = 8 m/s**

## Rakéta-elv

A rakéta hajtása is az impulzusmegmaradáson alapul: a hátrafelé kilövellt égéstermékek impulzusváltozásával egyenlő nagyságú, de ellentétes irányú impulzusváltozást (és így előrehaladó gyorsulást) szereznek a rakéta, mivel a rakéta + kilövellt gáz zárt rendszer teljes impulzusa állandó (kezdetben nulla, ha nyugalomból indul).
`,
    key_concepts: [
      "impulzus: p = m·v",
      "impulzusváltozás (erőlökés): Δp = F·Δt",
      "impulzusmegmaradás törvénye zárt rendszerben",
      "rugalmas és rugalmatlan ütközés",
      "rakéta-elv",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mekkora egy 2 kg tömegű, 5 m/s sebességgel mozgó test impulzusa?",
        options: ["10 kg·m/s", "2,5 kg·m/s", "25 kg·m/s", "7 kg·m/s"],
        correct_answer: "10 kg·m/s",
        explanation: "p = m·v = 2·5 = 10 kg·m/s.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért marad meg egy zárt rendszer teljes impulzusa ütközés közben?",
        options: [
          "mert a belső (hatás-ellenhatás) erők páronként kiegyenlítik egymást",
          "mert nincs erő a rendszerben",
          "mert a mozgási energia is mindig megmarad",
          "mert a testek tömege állandó",
        ],
        correct_answer: "mert a belső (hatás-ellenhatás) erők páronként kiegyenlítik egymást",
        explanation: "A hatás-ellenhatás törvénye szerint a belső erőpárok azonos nagyságúak, ellentétes irányúak, ezért eredő hatásuk a teljes rendszer impulzusára nulla.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a tökéletesen rugalmatlan ütközést a rugalmas ütközéssel szemben?",
        options: [
          "az ütköző testek együtt mozognak tovább, és a mozgási energia egy része hővé alakul",
          "a mozgási energia teljesen megmarad",
          "az impulzus nem marad meg",
          "a testek nem érintkeznek egymással",
        ],
        correct_answer: "az ütköző testek együtt mozognak tovább, és a mozgási energia egy része hővé alakul",
        explanation: "Tökéletesen rugalmatlan ütközésnél a testek összekapcsolódnak, csak az impulzus marad meg, a mozgási energia egy része deformációs- és hőenergiává válik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért csökkenti a légzsák a balesetben sérülő utas sérülésének kockázatát?",
        options: [
          "mert megnöveli az impulzusváltozáshoz szükséges időt, így kisebb erő éri az utast",
          "mert megnöveli az utas tömegét",
          "mert lecsökkenti az utas impulzusváltozását",
          "mert megszünteti a hatás-ellenhatás törvényét",
        ],
        correct_answer: "mert megnöveli az impulzusváltozáshoz szükséges időt, így kisebb erő éri az utast",
        explanation: "Δp = F·Δt állandó impulzusváltozásnál: ha a légzsák megnöveli a fékezési időt (Δt), akkor a szükséges erő (F) csökken.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 800 kg tömegű, 15 m/s sebességgel mozgó autó frontálisan összekapcsolódik egy álló, 1200 kg tömegű autóval. Mekkora a közös sebességük az ütközés után?",
        options: ["6 m/s", "9 m/s", "12 m/s", "15 m/s"],
        correct_answer: "6 m/s",
        explanation: "m₁v₁ = (m₁+m₂)v: 800·15 = 2000·v ⟹ v = 12000/2000 = 6 m/s.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "egyenletes-kormozgas-forgomozgas",
    title: "Egyenletes körmozgás és forgómozgás",
    level: "emelt",
    theme: "Mechanika",
    order_index: 6,
    summary_markdown:
      "Az egyenletes körmozgás a legegyszerűbb periodikus mozgás, amelynek leírásához a szögsebesség, periódusidő és centripetális gyorsulás fogalmait használjuk; a forgó testek dinamikáját a forgatónyomaték és a tehetetlenségi nyomaték írja le.",
    content_markdown: `
## Az egyenletes körmozgás jellemzői

Egyenletes körmozgásnál a test **állandó sugarú körpályán, állandó nagyságú sebességgel** mozog — a sebesség iránya viszont folyamatosan változik, ezért a mozgás gyorsuló mozgás.

- **Periódusidő (T)**: egy teljes körülfordulás ideje [s].
- **Fordulatszám (f = 1/T)**: időegység alatti körülfordulások száma [1/s = Hz].
- **Szögsebesség (ω)**: az egységnyi idő alatt megtett szögelfordulás: **ω = 2π / T = 2π·f** [rad/s].
- **Kerületi (pályamenti) sebesség**: **v = ω · r**, ahol r a körpálya sugara.

## Centripetális gyorsulás és erő

Bár a sebesség nagysága állandó, a **sebesség irányának változása** miatt a test gyorsul: ezt a gyorsulást **centripetális (középpont felé mutató) gyorsulásnak** nevezzük:

**a_cp = v² / r = ω² · r**

A gyorsuláshoz szükséges erőt **centripetális erő** nevezzük, amely mindig a kör középpontja felé mutat, és nem egy önálló "új" erőtípus, hanem valamely valóságos erő (kötél feszítőereje, gravitáció, súrlódás, normálerő komponense) tölti be ezt a szerepet:

**F_cp = m · v² / r = m · ω² · r**

## Forgatónyomaték

Egy test forgásba hozásához (vagy forgásállapota megváltoztatásához) szükséges hatás mértéke a **forgatónyomaték (M)**: egy F erő M nagysága a forgástengelytől mért **erőkar (k, a tengely és az erő hatásvonala közötti legkisebb, merőleges távolság)** és az erő szorzata:

**M = F · k**  [N·m]

Az **egyensúly feltétele forgás esetén**: az összes forgatónyomaték (előjelesen, az óramutató járásával egyező és ellentétes irányúakat megkülönböztetve) összege nulla — ez az emelők, mérlegek működésének alapja.

## Tehetetlenségi nyomaték és a forgómozgás alapegyenlete

A forgó mozgásban a tömeg szerepét a **tehetetlenségi nyomaték (Θ, a tömegeloszlástól és a forgástengelytől függő mennyiség)** veszi át. A forgómozgás alapegyenlete Newton II. törvényének analógiája:

**M = Θ · β**

ahol β a szöggyorsulás. Minél távolabb helyezkedik el a tömeg a forgástengelytől, annál nagyobb a tehetetlenségi nyomaték (pl. egy m tömegű, R sugarú vékony gyűrűre Θ = m·R², egy homogén korongra Θ = ½·m·R²).

## Példa levezetés

Egy 0,5 kg tömegű testet 0,8 m hosszú fonálon 2 m/s kerületi sebességgel körbe forgatunk vízszintes síkban. Mekkora a fonálban ébredő feszítőerő?

1. A centripetális erőt a fonál feszítőereje biztosítja: F = m·v²/r
2. F = 0,5 · 2² / 0,8 = 0,5 · 4 / 0,8 = **2,5 N**
`,
    key_concepts: [
      "periódusidő, fordulatszám, szögsebesség",
      "centripetális gyorsulás és erő",
      "forgatónyomaték: M = F·k",
      "tehetetlenségi nyomaték",
      "a forgómozgás alapegyenlete: M = Θ·β",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért gyorsuló mozgás az egyenletes körmozgás, ha a sebesség nagysága állandó?",
        options: [
          "mert a sebesség iránya folyamatosan változik",
          "mert a sugár folyamatosan változik",
          "mert a periódusidő nem állandó",
          "valójában nem gyorsuló mozgás",
        ],
        correct_answer: "mert a sebesség iránya folyamatosan változik",
        explanation: "A gyorsulás a sebességvektor változásának mértéke; bár a sebesség nagysága állandó, iránya folyamatosan változik, ezért a mozgás gyorsuló (centripetális gyorsulású).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy test 2 m sugarú körpályán 4 m/s kerületi sebességgel mozog. Mekkora a centripetális gyorsulása?",
        options: ["8 m/s²", "2 m/s²", "16 m/s²", "0,5 m/s²"],
        correct_answer: "8 m/s²",
        explanation: "a_cp = v²/r = 16/2 = 8 m/s².",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi biztosítja a centripetális erőt egy autó számára kanyarban való haladáskor?",
        options: [
          "a gumik és az útfelület közötti súrlódási erő",
          "a motor teljesítménye",
          "a légellenállás",
          "a súlyerő",
        ],
        correct_answer: "a gumik és az útfelület közötti súrlódási erő",
        explanation: "Kanyarban a centripetális erőt jellemzően a gumik és az útfelület közötti súrlódási erő szolgáltatja, ami a kör középpontja felé mutat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mitől függ egy test tehetetlenségi nyomatéka?",
        options: [
          "a tömegétől és annak a forgástengelytől való távolság szerinti eloszlásától",
          "csak a tömegétől",
          "csak a sebességétől",
          "csak a forgatónyomatéktól",
        ],
        correct_answer: "a tömegétől és annak a forgástengelytől való távolság szerinti eloszlásától",
        explanation: "A tehetetlenségi nyomaték nemcsak a tömegtől, hanem attól is függ, hogy a tömeg mennyire van a forgástengelytől távol elhelyezve (pl. gyűrű vs. korong azonos tömeg és sugár esetén).",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 3 m hosszú emelőkarra a forgástengelytől 3 m-re 40 N erőt fejtünk ki, merőlegesen a karra. Mekkora a keletkező forgatónyomaték?",
        options: ["120 N·m", "40 N·m", "13,3 N·m", "3 N·m"],
        correct_answer: "120 N·m",
        explanation: "M = F·k = 40·3 = 120 N·m (merőleges erőnél az erőkar megegyezik a tengelytől mért távolsággal).",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "mechanikai-rezgesek",
    title: "Mechanikai rezgések",
    level: "mindketto",
    theme: "Rezgések és hullámok",
    order_index: 7,
    summary_markdown:
      "A mechanikai rezgések a valóság rendkívül sok jelenségének (rugó, inga, hangszer, épületek) alapját jelentik; a harmonikus rezgőmozgás matematikai leírása a szinuszos időfüggésre épül.",
    content_markdown: `
## A rezgőmozgás jellemzői

**Rezgőmozgásnak** nevezzük egy test valamely egyensúlyi helyzet körüli, periodikusan (időben ismétlődően) ismétlődő mozgását. Alapfogalmak:

- **Kitérés (y)**: a pillanatnyi távolság az egyensúlyi helyzettől.
- **Amplitúdó (A)**: a maximális kitérés.
- **Periódusidő (T)**: egy teljes rezgés (oda-vissza mozgás) ideje.
- **Frekvencia (f = 1/T)**: időegység alatti rezgések száma [Hz].

## Harmonikus rezgőmozgás

Ha a visszatérítő erő egyenesen arányos a kitéréssel, és mindig az egyensúlyi helyzet felé mutat (**F = −k·y**, ez a **Hooke-törvény** alakja), a mozgás **harmonikus rezgőmozgás**, amelynek kitérése időben szinuszosan változik:

**y(t) = A · sin(ω·t + φ₀)**

ahol ω = 2π/T a **körfrekvencia**, φ₀ a kezdőfázis. A sebesség és a gyorsulás a kitérésfüggvény deriváltjaiként adódik, és a gyorsulás mindig arányos a kitéréssel, azzal ellentétes irányban: **a = −ω²·y**.

## Rugóra akasztott test rezgése

Egy k rugóállandójú rugóra függesztett, m tömegű test harmonikus rezgőmozgást végez, ha kitérítve elengedjük. A rezgés periódusideje:

**T = 2π · √(m / k)**

Fontos, hogy a periódusidő **nem függ az amplitúdótól** — ez a harmonikus rezgések egyik jellemző tulajdonsága.

## Az egyszerű (matematikai) inga

Kis kitérésű (kb. 10°-nál kisebb) ingamozgás jó közelítéssel harmonikus rezgőmozgásnak tekinthető. Az egyszerű inga (pontszerű tömeg, súlytalan, nyújthatatlan fonál) periódusideje:

**T = 2π · √(l / g)**

ahol l a fonál hossza, g a nehézségi gyorsulás. Fontos, hogy ez a periódusidő **nem függ a tömegtől**, csak a fonál hosszától és a nehézségi gyorsulástól — ezt használták régen az ingaórák pontos időméréshez, és ezzel mérhető a helyi g értéke is.

## Energiaváltozás rezgés közben

A harmonikus rezgőmozgás során a mozgási és a helyzeti (rugalmas, illetve gravitációs) energia folyamatosan egymásba alakul, összegük (csillapítatlan esetben) állandó: a **legnagyobb kitérésnél (amplitúdónál)** a sebesség (és így a mozgási energia) nulla, míg az **egyensúlyi helyzetben** a sebesség (és a mozgási energia) maximális.

## Csillapított és kényszerrezgés, rezonancia

A valóságban a közegellenállás és a belső súrlódás miatt a rezgés amplitúdója fokozatosan csökken (**csillapított rezgés**). Ha a rendszerre külső, periodikus gerjesztő erő hat, **kényszerrezgés** jön létre; ha a gerjesztő erő frekvenciája megegyezik a rendszer saját frekvenciájával, **rezonancia** lép fel, amelynél az amplitúdó drasztikusan megnövekedhet (ez okozhatott már híd- és épületkárokat is).
`,
    key_concepts: [
      "kitérés, amplitúdó, periódusidő, frekvencia",
      "harmonikus rezgőmozgás és a Hooke-törvény",
      "rugóra akasztott test periódusideje",
      "egyszerű inga periódusideje",
      "rezonancia jelensége",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a harmonikus rezgőmozgást végző test visszatérítő erejét?",
        options: [
          "egyenesen arányos a kitéréssel, és mindig az egyensúlyi helyzet felé mutat",
          "állandó nagyságú és irányú",
          "fordítottan arányos a kitéréssel",
          "mindig az egyensúlyi helyzettel ellentétes irányban mutat",
        ],
        correct_answer: "egyenesen arányos a kitéréssel, és mindig az egyensúlyi helyzet felé mutat",
        explanation: "A harmonikus rezgőmozgás feltétele F = −k·y, azaz a visszatérítő erő a kitéréssel arányos, és mindig az egyensúlyi helyzet felé irányul.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy rugóra akasztott test tömegét négyszeresére növeljük, a rugóállandó nem változik. Hogyan változik a periódusidő?",
        options: [
          "kétszeresére nő",
          "négyszeresére nő",
          "felére csökken",
          "nem változik",
        ],
        correct_answer: "kétszeresére nő",
        explanation: "T = 2π√(m/k), ezért a tömeg négyszereződésekor T a √4 = 2-szeresére nő.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy egyszerű inga periódusideje mitől nem függ?",
        options: ["a rezgő test tömegétől", "a fonál hosszától", "a nehézségi gyorsulástól", "semmi mástól, csak ezektől"],
        correct_answer: "a rezgő test tömegétől",
        explanation: "Az egyszerű inga periódusideje T = 2π√(l/g), amely nem tartalmazza a tömeget — az inga periódusideje független a rezgő test tömegétől.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor maximális egy csillapítatlan harmonikus rezgést végző test mozgási energiája?",
        options: [
          "amikor áthalad az egyensúlyi helyzeten",
          "amikor a legnagyobb kitérésnél van",
          "a rezgés kezdetén mindig",
          "sosem, mindig állandó",
        ],
        correct_answer: "amikor áthalad az egyensúlyi helyzeten",
        explanation: "Az egyensúlyi helyzetben a sebesség (és így a mozgási energia) maximális, míg a legnagyobb kitérésnél (amplitúdónál) a sebesség nulla.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik rezonancia esetén egy kényszerrezgést végző rendszerben?",
        options: [
          "az amplitúdó drasztikusan megnövekedhet, ha a gerjesztő frekvencia megegyezik a saját frekvenciával",
          "a rezgés azonnal leáll",
          "a periódusidő lecsökken nullára",
          "a rendszer csillapítatlanná válik",
        ],
        correct_answer: "az amplitúdó drasztikusan megnövekedhet, ha a gerjesztő frekvencia megegyezik a saját frekvenciával",
        explanation: "Rezonanciánál a külső gerjesztő erő frekvenciája megegyezik a rendszer saját frekvenciájával, ami az amplitúdó jelentős, akár károsító mértékű megnövekedéséhez vezethet.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "mechanikai-hullamok-hangtan",
    title: "Mechanikai hullámok, hangtan",
    level: "mindketto",
    theme: "Rezgések és hullámok",
    order_index: 8,
    summary_markdown:
      "A mechanikai hullámok a rezgési állapot közegben történő tovaterjedését jelentik; a hangtan a mechanikai hullámok egyik legfontosabb, hallható frekvenciatartományba eső speciális esete.",
    content_markdown: `
## A hullám fogalma és jellemzői

A **mechanikai hullám** egy rezgési állapot közegben (rugalmas anyagban) történő tovaterjedése, amely közben energiát is szállít, de a közeg részecskéi (átlagosan) nem haladnak együtt a hullámmal, csak a saját egyensúlyi helyzetük körül rezegnek. Fontos jellemzők:

- **Hullámhossz (λ)**: két egymást követő, azonos fázisú pont (pl. két szomszédos hullámhegy) távolsága [m].
- **Periódusidő (T) és frekvencia (f)**: ugyanaz, mint a rezgéseknél — a hullám minden pontja ugyanazzal a frekvenciával rezeg, mint a hullámforrás.
- **Terjedési (fázis-) sebesség (c)**: a hullám alapegyenlete: **c = λ · f = λ / T**

## Hullámtípusok

- **Transzverzális (keresztirányú) hullám**: a közeg részecskéinek rezgési iránya merőleges a terjedési irányra (pl. egy megpendített húr, víz felszíni hullámai, elektromágneses hullámok).
- **Longitudinális (hosszirányú) hullám**: a részecskék rezgési iránya megegyezik a terjedési iránnyal, ilyen a hangterjedés (sűrűsödések és ritkulások váltakozása a közegben).

## A hang mint mechanikai hullám

A **hang** longitudinális mechanikai hullám, amely szilárd, folyékony és gáznemű közegben is terjedhet (vákuumban nem, mert nincs közvetítő közeg). Az emberi hallás számára az **20 Hz és 20 000 Hz közötti** frekvenciatartomány hallható; az ennél kisebb frekvenciájú hang az **infrahang**, a nagyobb frekvenciájú a **ultrahang**.

- A hang sebessége levegőben (20 °C-on) kb. **340 m/s**, ez függ a közeg anyagától és hőmérsékletétől (szilárd testekben és folyadékokban általában nagyobb, mint gázokban).
- A hangmagasságot a **frekvencia**, a hangerőt (hangintenzitást) az **amplitúdó** határozza meg.

## A Doppler-effektus

A **Doppler-effektus** akkor jelentkezik, ha a hullámforrás és a megfigyelő egymáshoz viszonyítva mozognak: a közeledő forrás hangja a valóságosnál **magasabbnak** (nagyobb frekvenciájúnak), a távolodó forrásé **alacsonyabbnak** (kisebb frekvenciájúnak) hallatszik. Ez a jelenség figyelhető meg pl. egy elhaladó mentőautó szirénájánál, és a csillagászatban a vörös- és kékeltolódás magyarázatában is (a Doppler-effektus fényre alkalmazott analógja).

## Állóhullámok és rezonancia húros/légoszlopos rendszerekben

Ha egy hullám egy határolt közegben (pl. megfeszített húr, zárt vagy nyitott légoszlop) halad, és a végekről visszaverődik, **állóhullám** alakulhat ki, amelyben vannak olyan pontok (**csomópontok**), amelyek soha nem térnek ki, és olyanok (**dudorok/hasak**), ahol a kitérés maximális. Ez a jelenség a hangszerek (húros és fúvós hangszerek) működésének fizikai alapja: a húr/légoszlop hossza és a peremfeltételek határozzák meg, mely frekvenciák (**felhangok, harmonikusok**) szólalhatnak meg rajta.

## Példa levezetés

Egy hullám frekvenciája 500 Hz, hullámhossza 0,68 m. Mekkora a terjedési sebessége, és milyen közegben terjedhet (levegőben vagy vízben)?

1. c = λ·f = 0,68 · 500 = **340 m/s**
2. Ez megegyezik a hang levegőben mért sebességével 20 °C-on, tehát valószínűleg levegőben terjedő hanghullámról van szó.
`,
    key_concepts: [
      "hullámhossz, periódusidő, frekvencia kapcsolata: c = λ·f",
      "transzverzális és longitudinális hullám",
      "a hang mint longitudinális mechanikai hullám",
      "Doppler-effektus",
      "állóhullámok, rezonancia hangszerekben",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a transzverzális és a longitudinális hullám között?",
        options: [
          "transzverzálisnál a rezgés merőleges, longitudinálisnál párhuzamos a terjedési iránnyal",
          "transzverzálisnál nincs energiaátvitel, longitudinálisnál van",
          "csak a longitudinális hullám terjed vákuumban",
          "nincs közöttük érdemi különbség",
        ],
        correct_answer: "transzverzálisnál a rezgés merőleges, longitudinálisnál párhuzamos a terjedési iránnyal",
        explanation: "Transzverzális hullámnál a részecskék rezgési iránya merőleges, longitudinálisnál párhuzamos a hullám terjedési irányával.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy hullám hullámhossza 2 m, frekvenciája 100 Hz. Mekkora a terjedési sebessége?",
        options: ["200 m/s", "50 m/s", "0,02 m/s", "102 m/s"],
        correct_answer: "200 m/s",
        explanation: "c = λ·f = 2·100 = 200 m/s.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem terjed a hang vákuumban?",
        options: [
          "mert a hang terjedéséhez rugalmas, részecskékből álló közeg szükséges",
          "mert a hang sebessége vákuumban nulla lenne",
          "mert vákuumban a frekvencia nullára csökken",
          "valójában a hang terjed vákuumban is",
        ],
        correct_answer: "mert a hang terjedéséhez rugalmas, részecskékből álló közeg szükséges",
        explanation: "A hang mechanikai (longitudinális) hullám, amely a közeg részecskéinek egymásra hatásával terjed; vákuumban nincs közvetítő közeg, ezért nem terjed.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit tapasztal egy álló megfigyelő, amikor egy hangosan szirénázó mentőautó közeledik felé, majd elhalad mellette?",
        options: [
          "közeledéskor magasabb, távolodáskor alacsonyabb hangot hall, mint a valódi frekvencia",
          "a hang frekvenciája mindkét esetben azonos marad",
          "közeledéskor alacsonyabb, távolodáskor magasabb hangot hall",
          "a hang hangereje nő, a frekvenciája nem változik",
        ],
        correct_answer: "közeledéskor magasabb, távolodáskor alacsonyabb hangot hall, mint a valódi frekvencia",
        explanation: "A Doppler-effektus miatt a közeledő hangforrás hangja magasabbnak (nagyobb frekvenciájúnak), a távolodóé alacsonyabbnak hallatszik a tényleges frekvenciához képest.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy megfeszített gitárhúron állóhullám alakul ki. Mi jellemzi a húr csomópontjait?",
        options: [
          "ezeken a pontokon a húr soha nem tér ki",
          "ezeken a pontokon a kitérés mindig maximális",
          "ezek a pontok folyamatosan elmozdulnak a húr mentén",
          "csomópont csak a húr közepén lehet",
        ],
        correct_answer: "ezeken a pontokon a húr soha nem tér ki",
        explanation: "Az állóhullám csomópontjaiban a kitérés mindig nulla, míg a hasakban (dudorokban) maximális; a húr két végén (rögzített pontokon) mindig csomópont van.",
        difficulty: 3,
      },
    ],
  },
];
