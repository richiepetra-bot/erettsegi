import type { TopicSeed } from "./angol";

export const kemiaAltalanosTopics: TopicSeed[] = [
  {
    slug: "atomszerkezet-periodusos-rendszer",
    title: "Atomszerkezet és a periódusos rendszer",
    level: "mindketto",
    theme: "Általános kémia",
    order_index: 1,
    summary_markdown:
      "Az atom felépítése (atommag, elektronfelhő), az elektronkonfiguráció és a periódusos rendszer szerkezete, valamint a periodikus tulajdonságok (atomrádiusz, ionizációs energia, elektronegativitás) trendjei.",
    content_markdown: `
## Az atom felépítése

Az atom két fő részből áll:

- **Atommag**: itt található a **proton** (pozitív töltésű, tömege kb. 1 amu) és a **neutron** (töltés nélküli, tömege kb. 1 amu). A mag adja az atom tömegének majdnem egészét.
- **Elektronfelhő**: a mag körül mozgó, negatív töltésű **elektronok** (tömegük elhanyagolható a protonhoz/neutronhoz képest).

Fontos jellemzők:

- **Rendszám (Z)**: a protonok száma, ez határozza meg az elem kémiai azonosságát, és ez a periódusos rendszerben az elem sorszáma.
- **Tömegszám (A)**: a protonok és neutronok együttes száma (A = Z + N).
- **Izotópok**: ugyanazon elem olyan atomjai, amelyeknek azonos a rendszáma, de különböző a neutronszáma (pl. ¹²C és ¹⁴C). Kémiai tulajdonságaik gyakorlatilag megegyeznek, fizikai tulajdonságaik (pl. radioaktivitás) eltérhetnek.
- Semleges atomban a protonok száma = elektronok száma. Ha egy atom elektront veszít vagy nyer, **ion** keletkezik (kation: pozitív, anion: negatív).

## Elektronszerkezet

Az elektronok **héjakon** (fő energiaszinteken, n = 1, 2, 3...) és azokon belül **alhéjakon** (s, p, d, f) helyezkednek el, meghatározott sorrendben (feltöltési sorrend), a Pauli-elv és a Hund-szabály figyelembevételével.

Elektronkonfiguráció példák:
- Na (Z=11): 1s² 2s² 2p⁶ 3s¹
- Cl (Z=17): 1s² 2s² 2p⁶ 3s² 3p⁵
- Ca (Z=20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s²

A kémiai reakciókban legfontosabb szerepet a **vegyértékelektronok** (a legkülső héj elektronjai) töltik be — ezek határozzák meg az elem kémiai viselkedését, reakciókészségét.

## A periódusos rendszer felépítése

A periódusos rendszer az elemeket **növekvő rendszám** szerint, de úgy rendezi táblázatba, hogy a hasonló elektronszerkezetű (és így hasonló tulajdonságú) elemek egymás alá kerüljenek.

- **Periódus** (sor): az adott elem legkülső héjának főkvantumszáma (n) — pl. a 3. periódusban lévő elemeknek a 3. héjon vannak a vegyértékelektronjaik.
- **Csoport** (oszlop): a **főcsoportokban** (I–VIII., ill. 1., 2., 13–18. csoport) az azonos számú vegyértékelektronnal rendelkező elemek állnak, ezért hasonló kémiai tulajdonságúak (pl. az alkálifémek mind egy vegyértékelektronnal rendelkeznek).
- **Mellékcsoportok (átmenetifémek)**: ezeknél a d-alhéj fokozatosan töltődik fel, kémiai tulajdonságaik összetettebbek (változó oxidációs szám, színes vegyületek, komplexképzés).

## Periodikus tulajdonságok (trendek)

| Tulajdonság | Csoportban lefelé | Periódusban jobbra |
|---|---|---|
| Atomrádiusz | nő (több héj) | csökken (nő a mag vonzása) |
| Ionizációs energia | csökken | nő |
| Elektronegativitás | csökken | nő |
| Fémes jelleg | nő | csökken |

- **Ionizációs energia**: az az energia, amely egy gáz halmazállapotú atomból egy elektron leszakításához szükséges. A nemesgázoknál a legnagyobb (stabil, telített elektronszerkezet).
- **Elektronegativitás**: az atom azon képessége, hogy egy kötésben magához vonzza a kötő elektronpárt. A Pauling-skálán a **fluor** a legnagyobb (3,98), a legkisebb értékek az alkálifémeknél (pl. Cs ~0,79) találhatók.
- Az elektronegativitás és az ionizációs energia periódusban jobbra és csoportban felfelé haladva nő — ez a két trend segít megjósolni a kötéstípust és a reakciókészséget.

## Miért fontos ez a kémiai viselkedés szempontjából?

Az elemek periódusos rendszerben elfoglalt helye (csoport, periódus) közvetlenül megmutatja a vegyértékelektronok számát, ez pedig meghatározza, hogy az elem milyen kötéstípusban, milyen vegyértékkel, milyen reakciókészséggel vesz részt kémiai átalakulásokban.
`,
    key_concepts: [
      "rendszám és tömegszám",
      "izotóp",
      "elektronkonfiguráció",
      "vegyértékelektron",
      "periódus és csoport",
      "elektronegativitás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent egy atom rendszáma (Z)?",
        options: [
          "A protonok számát az atommagban",
          "A neutronok számát az atommagban",
          "A protonok és neutronok együttes számát",
          "Az elektronok számát a legkülső héjon",
        ],
        correct_answer: "A protonok számát az atommagban",
        explanation: "A rendszám megegyezik a protonok számával, és ez határozza meg az elem kémiai azonosságát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A ¹²C és a ¹⁴C atomok egymáshoz viszonyítva mit alkotnak?",
        options: [
          "Izotópokat, mert azonos a rendszámuk, de eltérő a neutronszámuk",
          "Ionokat, mert eltérő az elektronszámuk",
          "Allotróp módosulatokat",
          "Különböző elemeket, mert eltérő a tömegszámuk",
        ],
        correct_answer: "Izotópokat, mert azonos a rendszámuk, de eltérő a neutronszámuk",
        explanation: "Az izotópok azonos rendszámú, de különböző neutronszámú (tömegszámú) atomok ugyanazon elemből.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik elektronkonfiguráció tartozik a nátrium (Na, Z=11) atomjához?",
        options: [
          "1s² 2s² 2p⁶ 3s¹",
          "1s² 2s² 2p⁵ 3s²",
          "1s² 2s² 2p⁶ 3s² 3p¹",
          "1s² 2s² 2p⁶",
        ],
        correct_answer: "1s² 2s² 2p⁶ 3s¹",
        explanation: "A nátrium 11 elektronja a feltöltési sorrend szerint: 1s² 2s² 2p⁶ 3s¹, egyetlen vegyértékelektronnal.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nő az elektronegativitás egy periódusban balról jobbra haladva?",
        options: [
          "Mert a magtöltés nő, míg a vegyértékelektronok ugyanazon héjon maradnak, így erősebb az elektronvonzás",
          "Mert nő az atomok mérete, ezért gyengébb a mag vonzása",
          "Mert csökken a protonok száma",
          "Mert egyre több héj alakul ki, ami gyengíti a magvonzást",
        ],
        correct_answer:
          "Mert a magtöltés nő, míg a vegyértékelektronok ugyanazon héjon maradnak, így erősebb az elektronvonzás",
        explanation: "Balról jobbra haladva a protonszám (magtöltés) nő, de az elektronok ugyanazon héjon vannak, ezért erősebben vonzza a mag a kötő elektronpárt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy főcsoportba tartozó elem miért hasonló kémiai tulajdonságú a csoport másik elemeihez?",
        options: [
          "Mert azonos a legkülső héjon lévő vegyértékelektronok száma",
          "Mert azonos a tömegszámuk",
          "Mert azonos a neutronszámuk",
          "Mert azonos periódusban vannak",
        ],
        correct_answer: "Mert azonos a legkülső héjon lévő vegyértékelektronok száma",
        explanation: "A főcsoportban lévő elemek vegyértékelektron-száma megegyezik, ez a kémiai hasonlóság alapja.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kemiai-kotesek-ionos-kovalens-femes",
    title: "Kémiai kötések — ionos, kovalens, fémes kötés",
    level: "mindketto",
    theme: "Általános kémia",
    order_index: 2,
    summary_markdown:
      "A három fő kémiai kötéstípus (ionos, kovalens, fémes) kialakulása, jellemzői, és az, hogy az elektronegativitás-különbség és az elemek típusa hogyan határozza meg, melyik kötés jön létre.",
    content_markdown: `
## Miért alakulnak ki kémiai kötések?

Az atomok azért lépnek kémiai kötésbe, hogy **stabilabb, kisebb energiájú elektronszerkezetet** érjenek el — jellemzően a nemesgázokra jellemző telített (8, ill. He esetén 2) elektronhéjat ("nemesgázszabály", oktettszabály).

## Ionos kötés

- **Fém és nemfém** atomok között jön létre, amikor az elektronegativitás-különbség **nagy** (jellemzően Δχ > 1,7).
- A fématom leadja vegyértékelektron(jai)t (kationná válik), a nemfém felveszi azokat (anionná válik).
- Példa: Na → Na⁺ + e⁻, majd Cl + e⁻ → Cl⁻, így NaCl.
- Az ionok közötti **elektrosztatikus vonzás** tartja össze a rácsot (ionrács).
- Jellemző tulajdonságok: magas olvadási/forráspont, kristályos, szilárd állapotban nem vezeti az áramot, oldatban vagy megolvasztva viszont igen (az ionok mozgásképesek).

## Kovalens kötés

- **Két nemfém atom** között alakul ki, közös **elektronpár(ok)** kialakításával.
- **Apoláris kovalens kötés**: azonos (vagy közel azonos) elektronegativitású atomok között, a kötő elektronpár egyenlően oszlik el (pl. H₂, O₂, Cl₂).
- **Poláris kovalens kötés**: eltérő elektronegativitású atomok között, a kötő elektronpár a nagyobb elektronegativitású atom felé húzódik, részleges töltések (δ+, δ−) jönnek létre (pl. H–Cl, H₂O).
- Lehet **egyes, kettes, hármas kötés** (pl. C=C, C≡C, N≡N), a kötésrend nő → a kötés erősebb és rövidebb.
- **Datív (koordinatív) kötés**: az egyik atom adja mindkét elektront (pl. NH₄⁺ képződésekor az NH₃ nitrogénjének magános elektronpárja köt H⁺-hoz).

## Fémes kötés

- **Fématomok** között jön létre: a vegyértékelektronok **delokalizálódnak**, "elektrontengert" alkotva a pozitív fématomtörzsek (kationok) között.
- Ez magyarázza a fémek jellemző tulajdonságait: **jó elektromos és hővezetés** (a delokalizált elektronok szabadon mozognak), **fényesség (fémes csillogás)**, **nyújthatóság, kovácsolhatóság** (a rácsréteg elcsúszhat anélkül, hogy a kötés megszakadna).

## Összefoglaló táblázat

| Kötéstípus | Résztvevők | Mi tartja össze | Jellemző tulajdonság |
|---|---|---|---|
| Ionos | fém + nemfém | elektrosztatikus vonzás | magas op., olvadva vezet |
| Kovalens | nemfém + nemfém | közös elektronpár | molekularács, sokféle op./fp. |
| Fémes | fém + fém | delokalizált elektronok | vezeti az áramot, alakítható |

## Az elektronegativitás-különbség és a kötéstípus

Az elektronegativitás-különbség (Δχ) alapján durván megbecsülhető a kötés jellege:
- Δχ ≈ 0: apoláris kovalens kötés
- 0 < Δχ < ~1,7: poláris kovalens kötés
- Δχ > ~1,7: ionos kötés

Ez azonban csak közelítés — a valóságban folytonos átmenet van a tisztán kovalens és a tisztán ionos kötés között.
`,
    key_concepts: [
      "ionos kötés",
      "kovalens kötés (apoláris, poláris)",
      "fémes kötés",
      "oktettszabály",
      "elektronegativitás-különbség",
      "delokalizált elektronok",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik kötéstípus jellemző a nátrium-klorid (NaCl) esetében?",
        options: ["ionos kötés", "apoláris kovalens kötés", "fémes kötés", "datív kötés"],
        correct_answer: "ionos kötés",
        explanation: "A nagy elektronegativitás-különbségű fém (Na) és nemfém (Cl) között ionos kötés alakul ki.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért vezetik jól az áramot a fémek?",
        options: [
          "Mert a delokalizált vegyértékelektronok szabadon mozoghatnak a fémrácsban",
          "Mert ionokból állnak, amelyek szabadon mozognak",
          "Mert kovalens kötésekkel kapcsolódnak egymáshoz",
          "Mert magas az olvadáspontjuk",
        ],
        correct_answer: "Mert a delokalizált vegyértékelektronok szabadon mozoghatnak a fémrácsban",
        explanation: "A fémes kötésben a vegyértékelektronok nem egy-egy atomhoz kötöttek, hanem szabadon mozognak, ez biztosítja a jó vezetést.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A H₂O molekulában az O–H kötés miért poláris kovalens kötés?",
        options: [
          "Mert az oxigén és a hidrogén elektronegativitása különbözik, de a különbség nem elég nagy ionos kötéshez",
          "Mert az oxigén és a hidrogén fématomok",
          "Mert a kötő elektronpár egyenlően oszlik el a két atom között",
          "Mert a molekula lineáris szerkezetű",
        ],
        correct_answer:
          "Mert az oxigén és a hidrogén elektronegativitása különbözik, de a különbség nem elég nagy ionos kötéshez",
        explanation: "A közepes elektronegativitás-különbség miatt a kötő elektronpár az oxigén felé húzódik, poláris kovalens kötést eredményezve.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Az NH₄⁺ ion kialakulásakor a nitrogén magános elektronpárja hidrogénionhoz (H⁺) kapcsolódik. Ez milyen kötéstípus?",
        options: ["datív (koordinatív) kötés", "ionos kötés", "fémes kötés", "van der Waals kölcsönhatás"],
        correct_answer: "datív (koordinatív) kötés",
        explanation: "A datív kötésnél az egyik fél (itt a nitrogén magános elektronpárja) adja mindkét kötő elektront.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nyújthatók és kovácsolhatók a fémek, miközben a fémes kötés nem szakad meg?",
        options: [
          "Mert a fématomtörzsek rétegei egymáson elcsúszhatnak úgy, hogy a delokalizált elektronok továbbra is összetartják őket",
          "Mert a fémek ionrácsból állnak, amely rugalmasan deformálódik",
          "Mert a fémekben nincs kémiai kötés, csak gyenge másodrendű kölcsönhatás",
          "Mert a fémek olvadáspontja alacsony",
        ],
        correct_answer:
          "Mert a fématomtörzsek rétegei egymáson elcsúszhatnak úgy, hogy a delokalizált elektronok továbbra is összetartják őket",
        explanation: "A delokalizált elektronfelhő iránytól függetlenül tartja össze a fématomtörzseket, ezért a rétegek elcsúszhatnak törés nélkül.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "molekulak-kozotti-kolcsonhatasok",
    title: "Molekulák közötti kölcsönhatások (van der Waals, hidrogénkötés)",
    level: "mindketto",
    theme: "Általános kémia",
    order_index: 3,
    summary_markdown:
      "A másodrendű (molekulák közötti) kölcsönhatások típusai — diszperziós erők, dipólus-dipólus kölcsönhatás, hidrogénkötés — és hatásuk az anyagok halmazállapotára, olvadási/forráspontjára.",
    content_markdown: `
## Elsőrendű és másodrendű kötések

Az eddig tárgyalt ionos, kovalens és fémes kötések **elsőrendű (erős) kémiai kötések**, amelyek az atomokat/ionokat tartják össze egy vegyületen/rácson belül. Ezen felül léteznek **másodrendű (gyenge) kölcsönhatások**, amelyek a **molekulák között** hatnak, és sokkal gyengébbek (kb. 1-10%-a az elsőrendű kötések erejének), de meghatározzák az anyag halmazállapotát, olvadási- és forráspontját.

## Van der Waals-kölcsönhatások

Ezek gyűjtőneve a molekulák közötti gyenge, elektromos eredetű vonzásoknak:

**1. Diszperziós (London-) erők**
- Minden molekula között fellépnek, apoláris molekuláknál ez az egyetlen kölcsönhatás.
- Oka: az elektronfelhő pillanatnyi, véletlen eloszlásegyenetlensége pillanatnyi dipólust hoz létre, amely a szomszédos molekulában is dipólust indukál.
- Erőssége nő a **molekulatömeggel** és a molekula felületével (pl. a halogének olvadás-/forráspontja F₂ < Cl₂ < Br₂ < I₂ sorrendben nő).

**2. Dipólus-dipólus kölcsönhatás**
- **Poláris molekulák** között lép fel: az egyik molekula δ+ vége a másik molekula δ− végét vonzza.
- Erősebb, mint a tisztán diszperziós erő azonos molekulatömeg esetén (pl. HCl forráspontja magasabb, mint egy hasonló tömegű apoláris molekuláé).

## Hidrogénkötés

A hidrogénkötés a dipólus-dipólus kölcsönhatás különösen erős speciális esete:

- Akkor jön létre, ha egy **H atom** egy erősen elektronegatív atomhoz (**F, O, N**) kapcsolódik kovalensen, és ez a részlegesen pozitív H atom egy **másik molekula** F, O vagy N atomjának magános elektronpárjához kapcsolódik.
- Jelentősen megnöveli az olvadási/forráspontot a hasonló móltömegű, hidrogénkötést nem képző anyagokhoz képest — ezért van a víznek (H₂O, M=18) meglepően magas forráspontja (100 °C) a H₂S-hez (M=34, fp. −60 °C) képest.
- **Kulcsszerepe van**:
  - a víz különleges tulajdonságaiban (nagy fajhő, a jég kisebb sűrűsége a víznél, felületi feszültség),
  - a DNS kettős spirál szerkezetének stabilizálásában (bázispárok közötti H-kötések),
  - a fehérjék másodlagos szerkezetében (α-hélix, β-redő).

## Összehasonlítás: erősség sorrendje

Ionos/kovalens/fémes kötés (elsőrendű) ≫ hidrogénkötés > dipólus-dipólus kölcsönhatás > diszperziós erő

## Hatás a fizikai tulajdonságokra

| Anyag | Kölcsönhatás típusa | Forráspont |
|---|---|---|
| CH₄ (metán) | diszperziós | −162 °C |
| HCl | dipólus-dipólus + diszperziós | −85 °C |
| H₂O | hidrogénkötés | 100 °C |
| NaCl (ionos rács, nem molekularács) | ionos kötés | 1465 °C |

Minél erősebb a molekulák közötti kölcsönhatás, annál **több energia** (hő) szükséges a halmazállapot-változáshoz, ezért annál magasabb az olvadási és forráspont.
`,
    key_concepts: [
      "van der Waals-kölcsönhatás",
      "diszperziós (London-) erő",
      "dipólus-dipólus kölcsönhatás",
      "hidrogénkötés",
      "másodrendű kölcsönhatás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az oka a víz meglepően magas forráspontjának a hasonló móltömegű H₂S-hez képest?",
        options: [
          "A vízmolekulák között hidrogénkötés alakul ki",
          "A víz ionos kötésű vegyület",
          "A víz molekulái fémes kötést létesítenek",
          "A víz apoláris molekula",
        ],
        correct_answer: "A vízmolekulák között hidrogénkötés alakul ki",
        explanation: "A H és O közötti nagy elektronegativitás-különbség és az O magános elektronpárjai erős hidrogénkötést eredményeznek, ami sok energiát igényel a felszakításhoz.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi okozza a diszperziós (London-) erőt apoláris molekulák között?",
        options: [
          "Az elektronfelhő pillanatnyi egyenetlen eloszlása által indukált pillanatnyi dipólusok",
          "A molekulák közötti kovalens kötés",
          "Az állandó dipólusmomentum a molekulákban",
          "A protonok közötti elektrosztatikus taszítás",
        ],
        correct_answer: "Az elektronfelhő pillanatnyi egyenetlen eloszlása által indukált pillanatnyi dipólusok",
        explanation: "A diszperziós erő az elektronfelhő véletlen ingadozásából adódó pillanatnyi dipólusok egymást indukáló hatásán alapul.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nő a halogének (F₂, Cl₂, Br₂, I₂) olvadási- és forráspontja a csoportban lefelé haladva?",
        options: [
          "Mert nő a molekulatömeg és a molekula felülete, így erősebb a diszperziós kölcsönhatás",
          "Mert nő a molekulák közötti hidrogénkötés",
          "Mert csökken az elektronegativitás",
          "Mert ionos kötés alakul ki a nagyobb halogénmolekulák között",
        ],
        correct_answer: "Mert nő a molekulatömeg és a molekula felülete, így erősebb a diszperziós kölcsönhatás",
        explanation: "A halogénmolekulák apolárisak, közöttük csak diszperziós erő hat, amely a molekulatömeg (és a felület) növekedésével erősödik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Melyik kölcsönhatás felelős a DNS két szála közötti bázispárok összetartásáért?",
        options: [
          "hidrogénkötés",
          "fémes kötés",
          "ionos kötés a foszfátcsoportok között",
          "diszperziós erő"
        ],
        correct_answer: "hidrogénkötés",
        explanation: "A DNS bázispárjai (A–T, G–C) között hidrogénkötések alakulnak ki, amelyek stabilizálják a kettős spirált.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy apoláris molekula (pl. CH₄) és egy hidrogénkötést kialakító molekula (pl. H₂O) hasonló móltömege esetén melyiknek várható magasabb forráspontja, és miért?",
        options: [
          "A H₂O-nak, mert a hidrogénkötés erősebb, mint a csak diszperziós erővel rendelkező molekulák közötti kölcsönhatás",
          "A CH₄-nek, mert az apoláris molekulák között erősebb kölcsönhatás van",
          "Egyformának, mert a móltömeg egyedül határozza meg a forráspontot",
          "A CH₄-nek, mert nagyobb a moláris térfogata",
        ],
        correct_answer:
          "A H₂O-nak, mert a hidrogénkötés erősebb, mint a csak diszperziós erővel rendelkező molekulák közötti kölcsönhatás",
        explanation: "A hidrogénkötés jelentősen erősebb másodrendű kölcsönhatás, mint a tisztán diszperziós erő, ezért magasabb forráspontot eredményez azonos móltömeg mellett is.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "anyagi-rendszerek-halmazallapotok",
    title: "Anyagi rendszerek és halmazállapotok",
    level: "mindketto",
    theme: "Általános kémia",
    order_index: 4,
    summary_markdown:
      "Az anyagi rendszerek osztályozása (homogén, heterogén; elem, vegyület, keverék), valamint a három (négy) halmazállapot jellemzői és a halmazállapot-változások.",
    content_markdown: `
## Az anyagi rendszerek osztályozása

Az anyagi rendszereket összetételük szerint két nagy csoportba osztjuk:

**Tiszta anyagok** (állandó, jellemző összetétel):
- **Elemek**: egyfajta atomból állnak (pl. O₂, Fe, S).
- **Vegyületek**: kémiailag kötött, kétféle vagy több atomból állnak, állandó, meghatározott tömegarányban (pl. H₂O, NaCl, CO₂). A vegyületek kémiai reakcióval bonthatók elemeikre.

**Keverékek** (változó összetétel, az összetevők kémiai kötés nélkül, egyszerű összekeverődéssel vannak együtt):
- **Homogén keverék (oldat)**: az összetevők molekuláris/ionos szinten elkeveredtek, egynemű (pl. sós víz, levegő, ötvözetek).
- **Heterogén keverék**: az összetevők szabad szemmel vagy mikroszkóppal megkülönböztethetők (pl. homok és víz, olaj és víz, szuszpenzió, emulzió).

## Keverékek szétválasztási módjai

| Módszer | Elv | Alkalmazás |
|---|---|---|
| Szűrés | szemcseméret-különbség | szilárd-folyékony heterogén keverék |
| Ülepítés, centrifugálás | sűrűségkülönbség | szilárd-folyékony |
| Desztilláció | forráspont-különbség | folyékony-folyékony homogén keverék |
| Kristályosítás | oldhatóság hőmérsékletfüggése | oldott szilárd anyag |
| Kromatográfia | megkötődés/oldhatóság különbsége | összetett keverékek komponensei |

## Halmazállapotok

A három klasszikus halmazállapot a részecskék rendezettsége és mozgási energiája szerint különbözik:

- **Szilárd**: a részecskék (atomok, ionok, molekulák) rendezett, rögzített helyzetűek, csak helyükön vibrálnak; alakja és térfogata állandó.
- **Folyékony**: a részecskék szabadon mozognak egymás mellett, de a köztük lévő kölcsönhatás még összetartja őket; alakja változó (a tartó edény alakját veszi fel), térfogata közel állandó.
- **Gáz halmazállapot**: a részecskék szabadon, rendezetlenül mozognak, köztük nagy távolság és gyenge kölcsönhatás van; alakja és térfogata is változó, a rendelkezésre álló teret kitölti.
- (Extra: **plazma állapot** — igen magas hőmérsékleten ionizált gáz, ez a negyedik halmazállapot, a Nap és a csillagok anyaga is ilyen.)

## Halmazállapot-változások

\`\`\`
        olvadás →           forrás/párolgás →
szilárd --------→ folyékony --------------→ gáz
        ← fagyás            ← lecsapódás (kondenzáció)

szilárd  --- szublimáció --->  gáz  (közvetlenül, pl. jód, száraz jég)
gáz      --- deszublimáció ---> szilárd
\`\`\`

- Mindegyik halmazállapot-váltás **hőfelvétellel** (olvadás, forrás, szublimáció — endoterm) vagy **hőleadással** (fagyás, lecsapódás, deszublimáció — exoterm) jár, a hőmérséklet a fázisátalakulás közben **nem változik** (a felvett/leadott hő a részecskék közötti kölcsönhatás felszakítására/kialakítására megy el, nem a mozgási energia növelésére).
- Az **olvadáspont** és a **forráspont** anyagra jellemző állandó (adott nyomáson), ezért felhasználható tiszta anyagok azonosítására és a keverékektől való megkülönböztetésükre (a tiszta anyagok olvadása/forrása közben a hőmérséklet állandó, a keverékeké fokozatosan változik).

## Gáztörvények (áttekintés)

Ideális gázokra érvényes az egyesített gáztörvény: **pV = nRT**, ahol p a nyomás, V a térfogat, n az anyagmennyiség, R az univerzális gázállandó (8,314 J/(mol·K)), T a hőmérséklet (kelvinben).
`,
    key_concepts: [
      "elem, vegyület, keverék",
      "homogén és heterogén keverék",
      "halmazállapot-változások",
      "szublimáció",
      "gáztörvény (pV=nRT)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik állítás igaz a vegyületekre?",
        options: [
          "Legalább kétféle atomból állnak, állandó, meghatározott tömegarányban kémiailag kötve",
          "Csak egyfajta atomból állnak",
          "Összetételük tetszőlegesen változtatható",
          "Mindig heterogén rendszert alkotnak",
        ],
        correct_answer: "Legalább kétféle atomból állnak, állandó, meghatározott tömegarányban kémiailag kötve",
        explanation: "A vegyületek kémiailag kötött, állandó összetételű, kétféle vagy több atomból álló tiszta anyagok.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik módszerrel választható szét két, eltérő forráspontú, egymással elkeveredő folyadék?",
        options: ["desztilláció", "szűrés", "ülepítés", "kristályosítás"],
        correct_answer: "desztilláció",
        explanation: "A desztilláció a forráspont-különbséget használja fel a folyékony-folyékony homogén keverékek szétválasztására.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nem változik a hőmérséklet egy tiszta anyag olvadása közben, folyamatos hőközlés mellett?",
        options: [
          "Mert a bevitt hőenergia a részecskék közötti kölcsönhatások felszakítására megy el, nem a mozgási energia növelésére",
          "Mert az olvadás közben nem történik energiaváltozás",
          "Mert a hőmérő nem tudja mérni a hőmérsékletet olvadás közben",
          "Mert az anyag ilyenkor lehűl",
        ],
        correct_answer: "Mert a bevitt hőenergia a részecskék közötti kölcsönhatások felszakítására megy el, nem a mozgási energia növelésére",
        explanation: "Fázisátalakulás közben a hő az anyag belső szerkezetének (részecskék kölcsönhatásainak) megváltoztatására, nem a hőmérséklet (mozgási energia) növelésére fordítódik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A száraz jég (szilárd CO₂) melegítés hatására közvetlenül gáz halmazállapotúvá válik, folyékony fázis nélkül. Ezt a jelenséget minek nevezzük?",
        options: ["szublimáció", "olvadás", "lecsapódás", "fagyás"],
        correct_answer: "szublimáció",
        explanation: "A szublimáció a szilárd anyag közvetlen gázzá alakulása, folyékony fázis közbeiktatása nélkül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy ismeretlen fehér, szilárd anyag olvadását vizsgálva azt találjuk, hogy a hőmérséklet fokozatosan, folytonosan emelkedik olvadás közben, nem egy állandó értéken marad. Mire következtethetünk ebből?",
        options: [
          "Az anyag valószínűleg keverék, nem tiszta anyag",
          "Az anyag biztosan tiszta elem",
          "Az anyag ionos vegyület",
          "Az anyagnak nincs olvadáspontja",
        ],
        correct_answer: "Az anyag valószínűleg keverék, nem tiszta anyag",
        explanation: "A tiszta anyagok olvadása közben a hőmérséklet állandó marad; a folytonos hőmérséklet-emelkedés arra utal, hogy az anyag több komponensű keverék.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "oldatok-koncentracio",
    title: "Oldatok és koncentráció (tömegszázalék, mólkoncentráció)",
    level: "mindketto",
    theme: "Általános kémia",
    order_index: 5,
    summary_markdown:
      "Az oldatok fogalma, az oldódás folyamata, valamint a koncentráció legfontosabb kifejezési módjai: tömegszázalék és mólkoncentráció (anyagmennyiség-koncentráció), számítási feladatokkal.",
    content_markdown: `
## Az oldat fogalma

Az **oldat** olyan homogén keverék, amelyben az **oldott anyag** (kisebb mennyiségben lévő komponens) egyenletesen eloszlik az **oldószerben** (nagyobb mennyiségben lévő komponens, leggyakrabban víz). Az oldódás során a oldott anyag részecskéi (ionok vagy molekulák) körül az oldószer molekulái rendeződnek el (**hidratáció**, ha az oldószer víz).

- **Telítetlen oldat**: még oldható benne további anyag adott hőmérsékleten.
- **Telített oldat**: adott hőmérsékleten már nem old fel több anyagot, a feloldott és a kicsapódó anyag mennyisége dinamikus egyensúlyban van.
- **Túltelített oldat**: instabil állapot, amikor a telítettségi pontnál is több anyag van oldott állapotban (pl. lehűtés vagy elpárologtatás után), a legkisebb zavarásra kikristályosodik.
- Az oldhatóság a legtöbb szilárd anyagnál **nő a hőmérséklettel**, a gázoknál (pl. O₂ vízben) általában **csökken** a hőmérséklet növelésével.

## Tömegszázalék (w%)

A tömegszázalék megmutatja, hogy 100 g oldatban hány gramm oldott anyag van:

$$w\\% = \\frac{m_{oldott anyag}}{m_{oldat}} \\times 100$$

ahol $m_{oldat} = m_{oldott anyag} + m_{oldószer}$.

**Példa**: 20 g konyhasót oldunk fel 180 g vízben. Az oldat tömege 200 g.
$$w\\% = \\frac{20}{200} \\times 100 = 10\\%$$

## Mólkoncentráció (anyagmennyiség-koncentráció, c)

A mólkoncentráció megmutatja, hogy 1 dm³ (1 liter) oldatban hány mol oldott anyag van:

$$c = \\frac{n}{V}$$

ahol n az oldott anyag anyagmennyisége (mol), V az oldat térfogata (dm³). Mértékegysége: mol/dm³ (jelölése gyakran M, pl. "0,1 M oldat").

**Példa**: Mennyi a mólkoncentrációja annak az oldatnak, amelyet 4 g NaOH (M = 40 g/mol) 500 cm³ (0,5 dm³) oldatban oldunk fel?

1. $n(NaOH) = \\frac{m}{M} = \\frac{4\\ g}{40\\ g/mol} = 0,1\\ mol$
2. $c = \\frac{n}{V} = \\frac{0,1\\ mol}{0,5\\ dm^3} = 0,2\\ mol/dm^3$

## Hígítás és keverés

Hígításnál az oldott anyag anyagmennyisége (mol) nem változik, csak a térfogat nő:

$$c_1 V_1 = c_2 V_2$$

**Példa**: Hány cm³ vizet kell 100 cm³ 2 mol/dm³-es oldathoz önteni, hogy 0,5 mol/dm³-es oldatot kapjunk?
$$2 \\times 100 = 0,5 \\times V_2 \\Rightarrow V_2 = 400\\ cm^3$$
Tehát 400 − 100 = 300 cm³ vizet kell hozzáönteni.

## Összefoglaló táblázat

| Koncentrációfajta | Jele | Definíció | Mértékegység |
|---|---|---|---|
| Tömegszázalék | w% | oldott anyag tömege / oldat tömege × 100 | % |
| Mólkoncentráció | c | oldott anyag anyagmennyisége / oldat térfogata | mol/dm³ |

Fontos, hogy a két mennyiség **nem egymásba számítható közvetlenül** — a tömegszázalékból mólkoncentrációba az oldat **sűrűségét** is figyelembe kell venni (ρ = m/V).
`,
    key_concepts: [
      "oldat, oldott anyag, oldószer",
      "telített, telítetlen, túltelített oldat",
      "tömegszázalék",
      "mólkoncentráció (c = n/V)",
      "hígítási törvény (c₁V₁ = c₂V₂)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mennyi a tömegszázaléka annak az oldatnak, amelyben 15 g cukrot oldunk fel 135 g vízben?",
        options: ["10%", "15%", "11,1%", "13,5%"],
        correct_answer: "10%",
        explanation: "Az oldat tömege 15+135=150 g, w% = 15/150×100 = 10%.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent, ha egy oldatot 'túltelítettnek' nevezünk?",
        options: [
          "Több oldott anyagot tartalmaz, mint amennyi az adott hőmérsékleten stabilan oldva maradhatna",
          "Kevesebb oldott anyagot tartalmaz, mint amennyi még oldódhatna",
          "Pontosan annyi oldott anyagot tartalmaz, amennyi a telítettségi határ",
          "Az oldószer elpárolgott belőle teljesen",
        ],
        correct_answer: "Több oldott anyagot tartalmaz, mint amennyi az adott hőmérsékleten stabilan oldva maradhatna",
        explanation: "A túltelített oldat instabil állapot, amelyben a telítettségi pontnál is több oldott anyag van jelen oldott formában.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Hány mol/dm³ a mólkoncentrációja annak az oldatnak, amelyet 8 g NaOH (M = 40 g/mol) feloldásával kapunk 400 cm³ oldatban?",
        options: ["0,5 mol/dm³", "0,2 mol/dm³", "2 mol/dm³", "0,05 mol/dm³"],
        correct_answer: "0,5 mol/dm³",
        explanation: "n = 8/40 = 0,2 mol; V = 0,4 dm³; c = 0,2/0,4 = 0,5 mol/dm³.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "300 cm³ 1 mol/dm³-es oldatot hígítunk vízzel 1,5 dm³ össztérfogatra. Mennyi lesz a hígított oldat mólkoncentrációja?",
        options: ["0,2 mol/dm³", "0,3 mol/dm³", "5 mol/dm³", "0,5 mol/dm³"],
        correct_answer: "0,2 mol/dm³",
        explanation: "c₁V₁ = c₂V₂ ⇒ 1 × 0,3 = c₂ × 1,5 ⇒ c₂ = 0,2 mol/dm³.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nem lehet egy oldat tömegszázalékát közvetlenül, sűrűség megadása nélkül átszámítani mólkoncentrációra?",
        options: [
          "Mert a tömegszázalék a tömegre, a mólkoncentráció a térfogatra vonatkozik, és a tömeg-térfogat kapcsolatot a sűrűség adja meg",
          "Mert a tömegszázalék és a mólkoncentráció ugyanazt a mennyiséget méri más egységben, ezért egyenlők",
          "Mert a mólkoncentráció csak gázokra érvényes",
          "Mert a tömegszázalék csak szilárd anyagokra vonatkozik",
        ],
        correct_answer:
          "Mert a tömegszázalék a tömegre, a mólkoncentráció a térfogatra vonatkozik, és a tömeg-térfogat kapcsolatot a sűrűség adja meg",
        explanation: "A tömeg és a térfogat közötti átszámításhoz szükség van az oldat sűrűségére (ρ = m/V), különben a két koncentrációfajta nem alakítható át egymásba.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kemiai-reakciok-tipusai-egyenletrendezes",
    title: "Kémiai reakciók típusai és egyenletei, egyenletrendezés",
    level: "mindketto",
    theme: "Általános kémia",
    order_index: 6,
    summary_markdown:
      "A kémiai reakciók fő típusai (egyesülés, bomlás, kicserélődés, redoxireakció), a kémiai egyenletek felírásának szabályai és az egyenletrendezés (sztöchiometriai együtthatók) módszere.",
    content_markdown: `
## A kémiai reakció fogalma és a megmaradási törvények

Kémiai reakció során a kiindulási anyagok (**reaktánsok**) új anyagokká (**produktumok**) alakulnak át, kémiai kötések szakadnak fel és/vagy jönnek létre. Két alapvető megmaradási törvény érvényes minden kémiai reakcióra:

- **A tömeg megmaradásának törvénye** (Lavoisier): egy zárt rendszerben a reakció előtti és utáni anyagok össztömege egyenlő — atomok nem keletkeznek és nem tűnnek el, csak átrendeződnek.
- Az **atomok száma** (fajtánként) a reakcióegyenlet két oldalán meg kell egyezzen.

## A kémiai reakciók fő típusai

**1. Egyesülés (szintézis)**: két vagy több anyagból egy új anyag keletkezik.
$$A + B \\rightarrow AB$$
Példa: $2Mg + O_2 \\rightarrow 2MgO$

**2. Bomlás (analízis)**: egy vegyület két vagy több egyszerűbb anyaggá esik szét, gyakran hő, fény vagy elektromos áram hatására.
$$AB \\rightarrow A + B$$
Példa: $2H_2O_2 \\rightarrow 2H_2O + O_2$ (hidrogén-peroxid bomlása)
Példa: $CaCO_3 \\xrightarrow{h\\Delta} CaO + CO_2$ (mészkő hevítése, "égetés")

**3. Kicserélődési reakciók**
- **Egyszerű kicserélődés**: egy elem kiszorít egy másikat egy vegyületből (jellemzően fématomok reakciója sóoldattal, az aktívabb fém kiszorítja a kevésbé aktívat).
  $$Zn + CuSO_4 \\rightarrow ZnSO_4 + Cu$$
- **Kettős kicserélődés (metatézis)**: két vegyület "kicseréli" az ionjaikat, gyakran csapadék, gáz vagy víz keletkezésével.
  $$AgNO_3 + NaCl \\rightarrow AgCl\\downarrow + NaNO_3$$
  $$HCl + NaOH \\rightarrow NaCl + H_2O$$

**4. Redoxireakciók**: elektronátadással járó reakciók (részletesen lásd a redoxi témakört) — pl. égés, korrózió, fémek reakciója savakkal.

**5. Semlegesítés (sav-bázis reakció)**: sav és lúg reakciója sót és vizet eredményez — ez tulajdonképpen a kettős kicserélődés speciális esete.

## Az egyenletrendezés (sztöchiometriai együtthatók)

Az egyenletrendezés célja, hogy minden atomfajta száma egyenlő legyen a nyíl két oldalán, **sztöchiometriai együtthatók** (a vegyületek elé írt számok) beírásával — az **indexeket** (a vegyjelek után álló számokat, pl. H₂O-ban a 2-t) soha nem szabad megváltoztatni, mert az más anyagot jelentene!

**Példa: a propán égésének egyenlete**
$$C_3H_8 + O_2 \\rightarrow CO_2 + H_2O$$

1. Rendezzük a szenet: 3 C van a bal oldalon → 3 CO₂ kell a jobb oldalra.
$$C_3H_8 + O_2 \\rightarrow 3CO_2 + H_2O$$
2. Rendezzük a hidrogént: 8 H van a bal oldalon → 4 H₂O kell (4×2=8).
$$C_3H_8 + O_2 \\rightarrow 3CO_2 + 4H_2O$$
3. Rendezzük az oxigént: jobb oldalon 3×2 + 4×1 = 10 O atom → 5 O₂ kell a bal oldalra.
$$C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O$$

Ellenőrzés: C: 3=3 ✓, H: 8=8 ✓, O: 10=10 ✓ — az egyenlet rendezett.

## Halmazállapot-jelölések és egyéb jelölések

A rendezett egyenletekben gyakran jelölik a halmazállapotokat: (s) szilárd, (l) folyékony, (g) gáz, (aq) vízben oldott (oldat). A csapadékképződést lefele mutató nyíllal (↓), a gázfejlődést felfele mutató nyíllal (↑) is szokás jelölni.
`,
    key_concepts: [
      "tömegmegmaradás törvénye",
      "egyesülés és bomlás",
      "egyszerű és kettős kicserélődés",
      "sztöchiometriai együttható",
      "egyenletrendezés",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen típusú reakció a CaCO₃ → CaO + CO₂ egyenlettel leírt átalakulás?",
        options: ["bomlás (analízis)", "egyesülés (szintézis)", "kettős kicserélődés", "semlegesítés"],
        correct_answer: "bomlás (analízis)",
        explanation: "Egy vegyület (CaCO₃) két egyszerűbb anyaggá (CaO és CO₂) esik szét, ez bomlási reakció.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki a tömegmegmaradás törvénye?",
        options: [
          "Egy zárt rendszerben a reakció előtti és utáni anyagok össztömege megegyezik",
          "A reakció során mindig energia keletkezik",
          "A reaktánsok tömege mindig nagyobb, mint a produktumok tömege",
          "Csak gázreakciókra érvényes",
        ],
        correct_answer: "Egy zárt rendszerben a reakció előtti és utáni anyagok össztömege megegyezik",
        explanation: "A tömegmegmaradás törvénye szerint zárt rendszerben az atomok száma és így az össztömeg nem változik kémiai reakció során.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a helyesen rendezett egyenlet a metán (CH₄) égésére?",
        options: [
          "CH₄ + 2O₂ → CO₂ + 2H₂O",
          "CH₄ + O₂ → CO₂ + H₂O",
          "CH₄ + 2O₂ → CO₂ + 2H₂",
          "2CH₄ + 2O₂ → 2CO₂ + 4H₂O",
        ],
        correct_answer: "CH₄ + 2O₂ → CO₂ + 2H₂O",
        explanation: "Ellenőrzés: C: 1=1, H: 4=4 (2×2), O: bal 2×2=4, jobb 2+2×1=4. Minden atomfajta egyenlő.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A Zn + CuSO₄ → ZnSO₄ + Cu reakcióban a cink kiszorítja a rezet a rézszulfát-oldatból. Ez milyen reakciótípus?",
        options: [
          "egyszerű kicserélődés (egy elem kiszorít egy másikat egy vegyületből)",
          "kettős kicserélődés",
          "bomlás",
          "semlegesítés",
        ],
        correct_answer: "egyszerű kicserélődés (egy elem kiszorít egy másikat egy vegyületből)",
        explanation: "Itt egy fématom (Zn) helyettesíti a vegyületben lévő másik fématomot (Cu), ez az egyszerű kicserélődés jellemzője.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nem szabad az egyenletrendezés során az indexeket (pl. H₂O-ban a 2-t) megváltoztatni, csak a sztöchiometriai együtthatókat?",
        options: [
          "Mert az index megváltoztatása egy másik anyagot (más kémiai összetételt) eredményezne, míg az együttható csak a mennyiséget változtatja",
          "Mert az index csak esztétikai jelölés, nincs kémiai jelentése",
          "Mert az együtthatók megváltoztatása tiltott, csak az indexek módosíthatók",
          "Mert az indexek és együtthatók ugyanazt jelentik, bármelyik módosítható",
        ],
        correct_answer:
          "Mert az index megváltoztatása egy másik anyagot (más kémiai összetételt) eredményezne, míg az együttható csak a mennyiséget változtatja",
        explanation: "Az index a molekula összetételét (pl. H₂O vs H₂O₂) rögzíti, míg a sztöchiometriai együttható csak azt mutatja, hány részecske/mol vesz részt a reakcióban.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "sztochiometria-molfogalom",
    title: "Sztöchiometria és a mólfogalom",
    level: "mindketto",
    theme: "Általános kémia",
    order_index: 7,
    summary_markdown:
      "A mólfogalom, a moláris tömeg, az Avogadro-szám és a mólusi térfogat, valamint a rendezett kémiai egyenletek alapján történő sztöchiometriai (mennyiségi) számítások.",
    content_markdown: `
## A mól és az Avogadro-szám

A **mól** az anyagmennyiség (n) SI-mértékegysége. 1 mol anyag pontosan **6,022 × 10²³ db** részecskét (atomot, molekulát, iont) tartalmaz — ezt a számot **Avogadro-számnak** (N_A) nevezzük.

$$N = n \\times N_A$$

A mól bevezetésének célja, hogy a láthatatlanul kicsi részecskéket **mérhető, "makroszkopikus" mennyiségekhez** (tömeg, térfogat) tudjuk kapcsolni.

## Moláris tömeg (M)

A moláris tömeg megmutatja, hogy **1 mol** anyag hány gramm tömegű. Számszerű értéke megegyezik az anyag relatív atom-/molekulatömegével, csak g/mol mértékegységben (a periódusos rendszerből, ill. a molekula atomjainak összegzéséből olvasható ki).

$$M(H_2O) = 2\\times1 + 16 = 18\\ g/mol$$
$$M(CO_2) = 12 + 2\\times16 = 44\\ g/mol$$

Az anyagmennyiség (n), a tömeg (m) és a moláris tömeg (M) kapcsolata:

$$n = \\frac{m}{M} \\qquad (mol)$$

## Moláris térfogat gázokra

Normál állapotban (0 °C, 101,325 kPa, ún. STP) **1 mol bármely ideális gáz térfogata 22,4 dm³** (moláris térfogat, V_m). Ez lehetővé teszi, hogy gázok anyagmennyiségét a térfogatukból számítsuk:

$$n = \\frac{V}{V_m} = \\frac{V}{22,4\\ dm^3/mol}$$

## Sztöchiometriai számítások (mennyiségi feladatok)

A rendezett kémiai egyenlet együtthatói megmutatják, hogy az anyagok **hányad-mol arányban** reagálnak egymással — ez a sztöchiometriai számítások alapja. A megoldás lépései:

1. Rendezzük az egyenletet.
2. Számítsuk ki a megadott anyag anyagmennyiségét (n = m/M vagy n = V/22,4).
3. Az egyenlet együtthatóinak arányából számítsuk ki a keresett anyag anyagmennyiségét.
4. Váltsuk át a kívánt mennyiségre (tömeg, térfogat, részecskeszám).

**Példa**: Mennyi CO₂ (dm³, normál állapoton) keletkezik 12 g szén (M=12 g/mol) teljes elégetésekor?

Egyenlet: $C + O_2 \\rightarrow CO_2$ (1 mol C-ből 1 mol CO₂ keletkezik)

1. $n(C) = \\frac{12\\ g}{12\\ g/mol} = 1\\ mol$
2. Az egyenlet 1:1 arányából: $n(CO_2) = 1\\ mol$
3. $V(CO_2) = n \\times V_m = 1 \\times 22,4 = 22,4\\ dm^3$

**Példa 2**: Hány gramm vizet kapunk 4 g hidrogéngáz (M=2 g/mol) elégetésekor?

Egyenlet: $2H_2 + O_2 \\rightarrow 2H_2O$

1. $n(H_2) = \\frac{4}{2} = 2\\ mol$
2. Az egyenlet 2:2 (=1:1) arányából: $n(H_2O) = 2\\ mol$
3. $m(H_2O) = n \\times M = 2 \\times 18 = 36\\ g$

## Korlátozó (limitáló) reagens

Ha két reagens nem pontosan sztöchiometriai (az egyenlet arányának megfelelő) mennyiségben van jelen, akkor az egyik **elfogy előbb** — ez a **korlátozó reagens**, amely meghatározza a keletkező produktum maximális mennyiségét. A másik reagensből fölösleg marad.
`,
    key_concepts: [
      "mól, Avogadro-szám",
      "moláris tömeg (M)",
      "moláris térfogat (22,4 dm³/mol)",
      "n = m/M összefüggés",
      "korlátozó reagens",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hány db részecskét tartalmaz 2 mol anyag?",
        options: ["1,2044 × 10²⁴", "6,022 × 10²³", "3,011 × 10²³", "1,2044 × 10²³"],
        correct_answer: "1,2044 × 10²⁴",
        explanation: "N = n × N_A = 2 × 6,022×10²³ = 1,2044×10²⁴ részecske.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi 88 g CO₂ (M = 44 g/mol) anyagmennyisége?",
        options: ["2 mol", "1 mol", "4 mol", "0,5 mol"],
        correct_answer: "2 mol",
        explanation: "n = m/M = 88/44 = 2 mol.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Hány dm³ térfogatú (normál állapoton) az a metángáz (CH₄), amelynek anyagmennyisége 0,5 mol?",
        options: ["11,2 dm³", "22,4 dm³", "5,6 dm³", "44,8 dm³"],
        correct_answer: "11,2 dm³",
        explanation: "V = n × V_m = 0,5 × 22,4 = 11,2 dm³.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A 2Mg + O₂ → 2MgO reakcióban 4 mol magnéziumot égetünk el elegendő oxigénben. Hány mol MgO keletkezik?",
        options: ["4 mol", "2 mol", "8 mol", "1 mol"],
        correct_answer: "4 mol",
        explanation: "Az egyenlet szerint a Mg és az MgO mólaránya 2:2, azaz 1:1, így 4 mol Mg-ból 4 mol MgO keletkezik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A N₂ + 3H₂ → 2NH₃ reakcióban 2 mol nitrogént és 3 mol hidrogént reagáltatunk össze. Melyik anyag a korlátozó reagens, és miért?",
        options: [
          "A hidrogén, mert az egyenlet szerint 2 mol N₂-höz 6 mol H₂ kellene, de csak 3 mol áll rendelkezésre",
          "A nitrogén, mert kevesebb mol áll rendelkezésre belőle",
          "Nincs korlátozó reagens, mindkettő pontosan elegendő",
          "A hidrogén, mert nagyobb a moláris tömege",
        ],
        correct_answer:
          "A hidrogén, mert az egyenlet szerint 2 mol N₂-höz 6 mol H₂ kellene, de csak 3 mol áll rendelkezésre",
        explanation: "Az 1:3 mólarány szerint 2 mol N₂-hez 6 mol H₂ szükséges; mivel csak 3 mol H₂ van, ez fogy el előbb, ez a korlátozó reagens.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "termokemia-reakciohő",
    title: "Termokémia — reakcióhő és energiaváltozások",
    level: "emelt",
    theme: "Általános kémia",
    order_index: 8,
    summary_markdown:
      "Az exoterm és endoterm folyamatok, a reakcióhő és a képződési entalpia fogalma, valamint a Hess-tétel alkalmazása reakcióhő számítására.",
    content_markdown: `
## Exoterm és endoterm folyamatok

A kémiai reakciók mindig együtt járnak energiaváltozással, mivel a kötések felszakítása energiát igényel, a kötések kialakulása pedig energiát szabadít fel.

- **Exoterm folyamat**: a rendszer **hőt ad le** a környezetének (a produktumok energiaszintje alacsonyabb, mint a reaktánsoké). Példák: égés, semlegesítés, a legtöbb oxidációs folyamat, kondenzáció, fagyás.
- **Endoterm folyamat**: a rendszer **hőt vesz fel** a környezetéből (a produktumok energiaszintje magasabb, mint a reaktánsoké). Példák: fotoszintézis, jég olvadása, sok bomlási reakció (pl. mészkő égetése), oldódás egyes sóknál (pl. ammónium-nitrát vízben).

## Reakcióhő és entalpia

A **reakcióhő (ΔH)** az a hőmennyiség, amely egy kémiai reakció során állandó nyomáson felszabadul vagy elnyelődik.

- **ΔH < 0**: exoterm reakció (hő szabadul fel)
- **ΔH > 0**: endoterm reakció (hő nyelődik el)

A reakcióhőt a reakcióegyenlet mellett szokás megadni, pl.:
$$C(sz) + O_2(g) \\rightarrow CO_2(g) \\quad \\Delta H = -393,5\\ kJ/mol$$

## Képződési entalpia (ΔH_f°)

A **standard képződési entalpia** az a reakcióhő, amely 1 mol vegyület elemeiből, standard állapotban (25 °C, 101,325 kPa) történő képződésekor felszabadul vagy elnyelődik. Az elemek (standard állapotukban, pl. O₂(g), C(grafit)) standard képződési entalpiája **definíció szerint 0**.

## Hess-tétel

A Hess-tétel szerint egy kémiai reakció reakcióhője **független attól, hogy a reakció egy vagy több lépésben megy végbe** — csak a kezdeti és a végállapot határozza meg. Ez lehetővé teszi, hogy nehezen mérhető reakcióhőket közvetve, ismert reakcióhőkből, "kémiai egyenletek összeadásával/kivonásával" számítsunk ki.

**Alkalmazás — a reakcióhő számítása képződési entalpiákból:**

$$\\Delta H_{reakció} = \\sum \\Delta H_f^\\circ (produktumok) - \\sum \\Delta H_f^\\circ (reaktánsok)$$

**Példa**: Számítsuk ki a metán égésének reakcióhőjét!
$$CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(l)$$

Adott: ΔH_f°(CH₄) = −74,8 kJ/mol; ΔH_f°(CO₂) = −393,5 kJ/mol; ΔH_f°(H₂O, l) = −285,8 kJ/mol; ΔH_f°(O₂) = 0

$$\\Delta H = [(-393,5) + 2\\times(-285,8)] - [(-74,8) + 2\\times 0]$$
$$\\Delta H = [-393,5 - 571,6] - [-74,8] = -965,1 + 74,8 = -890,3\\ kJ/mol$$

A reakció erősen exoterm (ez az égés jellemzője).

## Aktiválási energia és a reakció energiadiagramja

A reakcióhő csak a kezdeti és végállapot energiakülönbségét adja meg, de a reakció végbemenetéhez a részecskéknek egy **energiagátat (aktiválási energiát, E_a)** kell leküzdeniük, amíg egy köztes, magasabb energiájú **átmeneti állapotba** (aktivált komplexum) kerülnek. Ez a fogalom köti össze a termokémiát a reakciókinetikával.

- Exoterm reakciónál a produktumok energiaszintje alacsonyabb a reaktánsokénál, de a reakció útja közben mindig van egy energiagát (E_a), amelyet a részecskéknek le kell küzdeniük — ez az oka annak, hogy még exoterm reakciók sem mennek végbe önmaguktól, katalizátor vagy hő (aktiválás) nélkül.
`,
    key_concepts: [
      "exoterm és endoterm folyamat",
      "reakcióhő (ΔH)",
      "standard képződési entalpia",
      "Hess-tétel",
      "aktiválási energia",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az exoterm folyamatokat?",
        options: [
          "A rendszer hőt ad le a környezetének",
          "A rendszer hőt vesz fel a környezetétől",
          "Nincs energiaváltozás",
          "Csak endoterm reakciók lehetnek kémiai reakciók",
        ],
        correct_answer: "A rendszer hőt ad le a környezetének",
        explanation: "Exoterm folyamatnál a produktumok energiaszintje alacsonyabb, a különbség hő formájában szabadul fel a környezet felé.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora egy elem (standard állapotban) standard képződési entalpiája definíció szerint?",
        options: ["0 kJ/mol", "100 kJ/mol", "mindig negatív", "mindig pozitív"],
        correct_answer: "0 kJ/mol",
        explanation: "Az elemek standard állapotban (pl. O₂(g)) standard képződési entalpiája definíció szerint nulla, mivel ezekhez viszonyítjuk a vegyületek képződési entalpiáját.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit állít a Hess-tétel?",
        options: [
          "A reakcióhő csak a kezdeti és végállapottól függ, független attól, hány lépésben megy végbe a reakció",
          "A reakcióhő mindig arányos a reakció sebességével",
          "A reakcióhő csak exoterm reakcióknál számítható ki",
          "A reakcióhő mindig egyenlő az aktiválási energiával",
        ],
        correct_answer: "A reakcióhő csak a kezdeti és végállapottól függ, független attól, hány lépésben megy végbe a reakció",
        explanation: "A Hess-tétel az energia állapotfüggvény jellegét fejezi ki: a reakcióhő útfüggetlen, csak a kezdő- és végállapot számít.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy reakció ΔH_f° (produktumok) összege −800 kJ/mol, a reaktánsoké −300 kJ/mol. Mennyi a reakció reakcióhője, és exoterm vagy endoterm a folyamat?",
        options: [
          "−500 kJ/mol, exoterm",
          "+500 kJ/mol, endoterm",
          "−1100 kJ/mol, exoterm",
          "+1100 kJ/mol, endoterm",
        ],
        correct_answer: "−500 kJ/mol, exoterm",
        explanation: "ΔH = ΣΔH_f°(produktum) − ΣΔH_f°(reaktáns) = (−800) − (−300) = −500 kJ/mol, negatív érték, tehát exoterm.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nem indul be egy exoterm reakció (pl. papír égése) önmagától, hő hozzáadása (gyújtás) nélkül, ha a folyamat energiát szabadít fel?",
        options: [
          "Mert a részecskéknek le kell küzdeniük egy aktiválási energiagátat, mielőtt a produktumok kialakulnának",
          "Mert az exoterm folyamatok valójában sosem szabadítanak fel energiát",
          "Mert a papír nem tartalmaz elegendő szenet",
          "Mert az exoterm reakciók mindig lassúak, függetlenül a hőmérséklettől",
        ],
        correct_answer: "Mert a részecskéknek le kell küzdeniük egy aktiválási energiagátat, mielőtt a produktumok kialakulnának",
        explanation: "Az exoterm jelleg csak azt mondja meg, hogy a végállapot energiája alacsonyabb, de a reakció beindulásához az aktiválási energiát mindenképp biztosítani kell.",
        difficulty: 3,
      },
    ],
  },
];
