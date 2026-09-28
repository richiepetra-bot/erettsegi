import type { TopicSeed } from "./angol";

export const fizikaElektromagnessegOptikaTopics: TopicSeed[] = [
  {
    slug: "elektromos-munka-teljesitmeny",
    title: "Elektromos munka és teljesítmény",
    level: "mindketto",
    theme: "Elektromosság",
    order_index: 17,
    summary_markdown:
      "Az elektromos áram munkát végez és teljesítményt szolgáltat, amikor átfolyik egy fogyasztón; ez az energiaátalakulás az elektromos energiaellátás és a fogyasztók (izzók, fűtőtestek) számításának alapja.",
    content_markdown: `
## Az elektromos munka

Amikor egy Q töltés U feszültségkülönbségen mozog át (pl. átfolyik egy fogyasztón), az elektromos mező munkát végez:

**W = U · Q = U · I · t**

mivel Q = I·t. Ohm törvényét (U = I·R) behelyettesítve a munka más alakban is felírható:

**W = I² · R · t = U² / R · t**

Ez az energia a fogyasztóban jellemzően **hővé** alakul (pl. fűtőtest, izzószál — ezt nevezzük **Joule-hőnek**), de átalakulhat fénnyé, mozgási energiává (motor) vagy más energiaformává is, az adott eszköz működési elvétől függően.

## Az elektromos teljesítmény

A **teljesítmény (P)** az egységnyi idő alatt átadott (elvégzett) munka:

**P = W / t = U · I = I² · R = U² / R**

Ez a négy alak matematikailag egyenértékű, de a feladat adataitól függően más-más alak a legpraktikusabb. A teljesítmény mértékegysége a **watt [W = J/s]**.

## Joule-hő

A vezetőkben (ellenállásokban) hővé alakuló elektromos energiát **Joule-hőnek** nevezzük: **Q_hő = I² · R · t**. Ez egyrészt hasznos (fűtőtestek, izzószálak, hajszárítók), másrészt veszteséget is jelent (pl. a vezetékek felmelegedése az elektromos energia szállítása közben) — ez az oka annak, hogy a nagy távolságú energiaátvitelnél magas feszültséget (és emiatt kisebb áramerősséget) alkalmaznak, hiszen a veszteség I²-tel arányos.

## A háztartási energiaszámla és a kilowattóra

A háztartásokban az elektromos energiát gyakorlati okokból nem joule-ban, hanem **kilowattórában (kWh)** szokás mérni: **1 kWh = 1000 W · 3600 s = 3,6 · 10⁶ J = 3,6 MJ**. Egy készülék energiafogyasztása: **E = P · t** (ha P kW-ban, t órában van megadva, E kWh-ban adódik).

## Példa levezetés

Egy 60 W teljesítményű izzó naponta átlagosan 5 órán át van bekapcsolva. Mennyi energiát fogyaszt egy hónap (30 nap) alatt, kWh-ban, és mennyi ez joule-ban?

1. Napi energiafogyasztás: E_nap = P·t = 0,06 kW · 5 h = 0,3 kWh
2. Havi energiafogyasztás: E_hó = 0,3 · 30 = **9 kWh**
3. Joule-ban: E_hó = 9 · 3,6 · 10⁶ = **3,24 · 10⁷ J**

## Példa levezetés — ellenállás teljesítménye

Egy 20 Ω ellenálláson 3 A áram folyik keresztül. Mekkora teljesítményt vesz fel, és mennyi hő fejlődik benne 10 másodperc alatt?

1. P = I²·R = 9·20 = 180 W
2. Q_hő = P·t = 180·10 = **1800 J**
`,
    key_concepts: [
      "elektromos munka: W = U·I·t",
      "elektromos teljesítmény: P = U·I = I²R = U²/R",
      "Joule-hő és a vezetékveszteség",
      "kilowattóra (kWh) mint energia-mértékegység",
      "nagyfeszültségű energiaátvitel indoklása",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik képlet adja meg helyesen az elektromos teljesítményt?",
        options: ["P = U·I", "P = U/I", "P = U + I", "P = U − I"],
        correct_answer: "P = U·I",
        explanation: "Az elektromos teljesítmény a feszültség és az áramerősség szorzata: P = U·I.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 100 Ω-os ellenálláson 2 A áram folyik. Mekkora a teljesítménye?",
        options: ["400 W", "200 W", "50 W", "800 W"],
        correct_answer: "400 W",
        explanation: "P = I²·R = 4·100 = 400 W.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért alkalmaznak magas feszültséget a nagy távolságú elektromosenergia-átvitelnél?",
        options: [
          "mert azonos teljesítmény átvitelénél magasabb feszültség mellett kisebb az áramerősség, ami csökkenti a vezetékekben keletkező Joule-hő veszteséget",
          "mert magas feszültségnél a vezetékek ellenállása nulla lesz",
          "mert magas feszültségnél nincs energia veszteség",
          "mert ez törvényi előírás, fizikai oka nincs",
        ],
        correct_answer: "mert azonos teljesítmény átvitelénél magasabb feszültség mellett kisebb az áramerősség, ami csökkenti a vezetékekben keletkező Joule-hő veszteséget",
        explanation: "A vezetékben keletkező veszteség I²R-rel arányos; azonos átvitt teljesítmény (P = UI) mellett magasabb U esetén kisebb I szükséges, ami jelentősen csökkenti a veszteséget.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi 1 kWh joule-ban kifejezve?",
        options: ["3,6 · 10⁶ J", "1000 J", "3600 J", "6 · 10³ J"],
        correct_answer: "3,6 · 10⁶ J",
        explanation: "1 kWh = 1000 W · 3600 s = 3,6 · 10⁶ J.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 1200 W-os hajszárítót napi 15 percig használnak. Mennyi energiát fogyaszt 20 nap alatt kWh-ban?",
        options: ["6 kWh", "3,6 kWh", "12 kWh", "60 kWh"],
        correct_answer: "6 kWh",
        explanation: "Napi fogyasztás: 1,2 kW · 0,25 h = 0,3 kWh; 20 napra: 0,3·20 = 6 kWh.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "magneses-mezo-elektromagneses-ero",
    title: "Mágneses mező és az elektromágneses erő",
    level: "mindketto",
    theme: "Elektromágnesség",
    order_index: 18,
    summary_markdown:
      "A mágneses mező az árammal, illetve a mozgó töltésekkel kapcsolatban álló erőtér, amely erőt fejt ki más árammal átjárt vezetőkre és mozgó töltésekre — ezen alapul az elektromotorok működése.",
    content_markdown: `
## A mágneses mező forrásai

A mágneses mezőt (indukcióvektorral, **B**-vel jellemzett teret) permanens mágnesek és **mozgó elektromos töltések (elektromos áram)** hozzák létre. Egyenes, hosszú áramvezető körül a mágneses erővonalak koncentrikus körök, amelyek irányát a **jobbkéz-szabály** adja meg: ha a jobb kéz hüvelykujja az áram irányába mutat, a behajlított ujjak a mágneses mező körüljárási irányát jelzik.

## A mágneses indukció (térerősség) és mértékegysége

A mágneses mező erősségét a **mágneses indukcióvektor (B)** jellemzi, mértékegysége a **tesla [T]**. A Föld mágneses mezője viszonylag gyenge (kb. 5·10⁻⁵ T), míg egy erős laboratóriumi elektromágnes akár néhány T nagyságú mezőt is létrehozhat.

## Az árammal átjárt vezetőre hatő erő (Lorentz-erő speciális esete)

Ha egy I áramerősségű, l hosszúságú vezetőrészt B indukciójú, homogén mágneses mezőbe helyezünk, és a vezető nem párhuzamos a mezővel, a vezetőre erő hat:

**F = B · I · l · sin α**

ahol α a vezető és a mágneses mező iránya közötti szög. Az erő iránya a **bal-kéz-szabállyal** (motor-szabály) határozható meg: ha a bal kéz mutatóujja a mágneses mező, középső ujja az áram irányába mutat, a hüvelykujj az erő irányát adja.

## Mozgó töltésre hatő Lorentz-erő

Egy v sebességgel mozgó, q töltésű részecskére mágneses mezőben ható erő (a **Lorentz-erő**):

**F = q · v · B · sin α**

ahol α a sebesség és a mágneses mező közötti szög. Ez az erő mindig **merőleges** a sebességre és a mágneses mezőre is, ezért **nem végez munkát**, csak a mozgás irányát változtatja meg — ha a sebesség merőleges a homogén mezőre, a részecske **körpályán** mozog (ezen alapul a részecskegyorsítók és a régi képernyők elektronsugár-vezérlése).

## Az elektromotor működési elve

Az **elektromotor** az árammal átjárt vezetőre (tekercsre) mágneses mezőben ható erőt (forgatónyomatékot) hasznosítja: egy mágneses mezőbe helyezett, árammal átjárt keretre ható erőpár forgatónyomatékot fejt ki, amely a keretet (rotor) forgásba hozza. A forgásirány folytonos fenntartásához az áram irányát periodikusan meg kell fordítani (kommutátor, illetve váltóáramnál automatikusan a hálózat biztosítja ezt).

## Példa levezetés

Egy 0,5 m hosszú, 4 A áramerősségű vezetőt 0,3 T indukciójú, a vezetőre merőleges mágneses mezőbe helyezünk. Mekkora erő hat a vezetőre?

1. F = B·I·l·sin90° = 0,3 · 4 · 0,5 · 1 = **0,6 N**
`,
    key_concepts: [
      "mágneses indukció (B) és a jobbkéz-szabály",
      "árammal átjárt vezetőre hatő erő: F = B·I·l·sinα",
      "Lorentz-erő mozgó töltésre: F = q·v·B·sinα",
      "körmozgás homogén mágneses mezőben",
      "az elektromotor működési elve",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi hozza létre a mágneses mezőt egy egyenes vezető körül?",
        options: ["a vezetőben folyó elektromos áram", "a vezető anyagi minősége önmagában", "a vezető hőmérséklete", "a vezetőre kapcsolt feszültség önmagában, áram nélkül"],
        correct_answer: "a vezetőben folyó elektromos áram",
        explanation: "Az elektromos áram (mozgó töltések) mágneses mezőt hoz létre a vezető körül, amelynek irányát a jobbkéz-szabály adja meg.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 2 m hosszú, 5 A áramerősségű vezetőt egy rá merőleges, 0,4 T indukciójú mágneses mezőbe helyezünk. Mekkora erő hat a vezetőre?",
        options: ["4 N", "10 N", "0,4 N", "2,5 N"],
        correct_answer: "4 N",
        explanation: "F = B·I·l·sin90° = 0,4·5·2·1 = 4 N.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem végez munkát a mozgó töltésre hatő Lorentz-erő?",
        options: [
          "mert mindig merőleges a töltés sebességére, ezért csak az irányt, nem a sebesség nagyságát változtatja",
          "mert az erő nagysága mindig nulla",
          "mert a töltés tömege állandó",
          "mert a mágneses mező nem hat mozgó töltésekre",
        ],
        correct_answer: "mert mindig merőleges a töltés sebességére, ezért csak az irányt, nem a sebesség nagyságát változtatja",
        explanation: "A Lorentz-erő mindig merőleges a sebességvektorra, így csak a mozgás irányát változtatja (körmozgást okozva), munkát nem végez, mert W = F·s·cosα, és α = 90°.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi biztosítja az elektromotor folytonos forgását?",
        options: [
          "az áram irányának periodikus megfordítása a tekercsben (kommutátorral vagy váltóárammal)",
          "a tekercs anyagának mágnesessége önmagában",
          "a motor hőmérséklete",
          "a tekercsre kapcsolt állandó irányú áram, változtatás nélkül",
        ],
        correct_answer: "az áram irányának periodikus megfordítása a tekercsben (kommutátorral vagy váltóárammal)",
        explanation: "A forgás fenntartásához az áram irányát periodikusan meg kell fordítani, hogy a forgatónyomaték iránya ne váljon ellentétessé — ezt kommutátor vagy (váltóáramú motoroknál) a hálózat automatikusan biztosítja.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 3·10⁻¹⁹ C töltésű részecske 2·10⁶ m/s sebességgel, a mágneses mezőre merőlegesen mozog egy 0,5 T indukciójú mezőben. Mekkora a rá hatő Lorentz-erő?",
        options: ["3·10⁻¹³ N", "1,5·10⁻¹³ N", "6·10⁻¹³ N", "3·10⁻¹⁹ N"],
        correct_answer: "3·10⁻¹³ N",
        explanation: "F = q·v·B·sin90° = 3·10⁻¹⁹ · 2·10⁶ · 0,5 = 3·10⁻¹³ N.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "elektromagneses-indukcio-lenz-transzformator",
    title: "Elektromágneses indukció — Lenz-törvény, transzformátor",
    level: "emelt",
    theme: "Elektromágnesség",
    order_index: 19,
    summary_markdown:
      "Az elektromágneses indukció jelensége szerint a változó mágneses mező elektromos feszültséget (áramot) kelt; ez az elv a generátorok, dinamók és a transzformátor működésének alapja.",
    content_markdown: `
## A mágneses fluxus

Az indukció leírásához szükséges mennyiség a **mágneses fluxus (Φ)**, amely egy adott felületen áthaladó mágneses "erővonalak számát" jellemzi:

**Φ = B · A · cos α**

ahol B a mágneses indukció, A a felület területe, α a felület normálisa és a B vektor közötti szög. Mértékegysége a **weber [Wb = T·m²]**.

## Faraday indukciós törvénye

**Faraday** fedezte fel, hogy ha egy zárt vezetőhurkot átjáró mágneses fluxus **időben változik**, a hurokban feszültség (**indukált feszültség**) keletkezik:

**U_ind = − N · ΔΦ / Δt**

ahol N a menetek száma (tekercsnél). A fluxus változhat a mágneses mező erősségének, a felület nagyságának, vagy a felület és a mező közötti szög változása miatt — mindhárom esetben indukció jön létre. Ez a jelenség (nem az áram, hanem a **változás**!) az elektromágneses indukció alapja.

## Lenz törvénye

**Lenz törvénye** az indukált feszültség (és az általa keltett áram) **irányát** határozza meg: az indukált áram mindig olyan irányú mágneses mezőt hoz létre, amely **ellene hat** a fluxus változásának, azaz "akadályozza" a kiváltó okot. Ez a törvény az energiamegmaradás elvének következménye — ha az indukált áram a változást segítené (nem gátolná), energiát "teremtenénk", ami fizikailag lehetetlen. A fenti képlet negatív előjele éppen ezt a törvényt fejezi ki.

## Mozgási indukció

Ha egy vezetőrudat mágneses mezőben mozgatunk (vagy a vezető mozog a mezőhöz képest), a rúdban is indukálódik feszültség (**mozgási indukció**):

**U_ind = B · l · v**

ahol l a rúd hossza, v a mező irányára és a rúdra is merőleges sebességkomponens. Ez az elv a **generátorok (dinamók)** működésének alapja: egy mágneses mezőben forgó tekercsben az áthaladó fluxus folyamatosan változik, ezáltal feszültséget indukál, amely váltóáramot (vagy egyenirányítás után egyenáramot) hoz létre.

## A transzformátor

A **transzformátor** két, közös vasmagra csévélt tekercsből (**primer** és **szekunder**) áll, és a primer tekercsen átfolyó váltóáram által keltett, változó mágneses fluxus a szekunder tekercsben feszültséget indukál. Ideális (veszteségmentes) transzformátornál a feszültségek aránya megegyezik a menetszámok arányával:

**U₁ / U₂ = N₁ / N₂**

Ha N₂ > N₁, a transzformátor **feszültséget növel (feszültségemelő)**, ha N₂ < N₁, **feszültséget csökkent (feszültségcsökkentő)**. Ideális esetben a teljesítmény is megmarad: U₁·I₁ = U₂·I₂, ezért a feszültségnövelés áramerősség-csökkenéssel jár együtt (és fordítva) — ez az elektromos energia hosszú távú, kis veszteséggel történő szállításának alapja (magas feszültség, kis áramerősség a távvezetékeken).

## Példa levezetés

Egy transzformátor primer tekercse 400, szekunder tekercse 100 menetből áll. A primer oldalon 230 V feszültséget kapcsolunk rá. Mekkora a szekunder feszültség, és ha a szekunder oldalon 2 A áram folyik, mekkora a primer áramerősség (ideális transzformátort feltételezve)?

1. U₂ = U₁ · N₂/N₁ = 230 · 100/400 = **57,5 V**
2. Teljesítmény megmaradása: U₁·I₁ = U₂·I₂ ⟹ I₁ = U₂·I₂/U₁ = 57,5·2/230 = **0,5 A**
`,
    key_concepts: [
      "mágneses fluxus: Φ = B·A·cosα",
      "Faraday indukciós törvénye: U_ind = −N·ΔΦ/Δt",
      "Lenz törvénye és az energiamegmaradás",
      "mozgási indukció és a generátor elve",
      "transzformátor: U₁/U₂ = N₁/N₂",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi váltja ki az elektromágneses indukciót Faraday törvénye szerint?",
        options: [
          "a hurkot átjáró mágneses fluxus időbeli változása",
          "az állandó nagyságú mágneses mező megléte",
          "a vezető anyagának hőmérséklete",
          "a vezető keresztmetszete önmagában",
        ],
        correct_answer: "a hurkot átjáró mágneses fluxus időbeli változása",
        explanation: "Az indukció feltétele a fluxus időbeli megváltozása (ΔΦ/Δt ≠ 0), nem az állandó fluxus vagy mező megléte.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki Lenz törvénye?",
        options: [
          "az indukált áram mindig olyan irányú, hogy mágneses mezőjével akadályozza a fluxusváltozást",
          "az indukált feszültség mindig egyenesen arányos az idővel",
          "az indukált áram mindig segíti a fluxus növekedését",
          "a fluxus soha nem változhat",
        ],
        correct_answer: "az indukált áram mindig olyan irányú, hogy mágneses mezőjével akadályozza a fluxusváltozást",
        explanation: "Lenz törvénye szerint az indukált áram iránya olyan, hogy a keltett mágneses mező ellene hat (gátolja) a kiváltó fluxusváltozásnak — ez az energiamegmaradás következménye.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy transzformátor primer tekercse 1000, szekunder tekercse 250 menetből áll. Ha a primer feszültség 400 V, mekkora a szekunder feszültség?",
        options: ["100 V", "1600 V", "250 V", "400 V"],
        correct_answer: "100 V",
        explanation: "U₂ = U₁·N₂/N₁ = 400 · 250/1000 = 100 V.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért csökken az áramerősség egy ideális transzformátor szekunder oldalán, ha a feszültséget megnöveli?",
        options: [
          "mert a teljesítmény állandó marad (U₁I₁ = U₂I₂), ezért a feszültség növekedésével az áramerősség csökken",
          "mert a menetszám nem befolyásolja az áramerősséget",
          "mert a szekunder tekercs ellenállása mindig nagyobb",
          "az áramerősség valójában nem csökken feszültségnövelésnél",
        ],
        correct_answer: "mert a teljesítmény állandó marad (U₁I₁ = U₂I₂), ezért a feszültség növekedésével az áramerősség csökken",
        explanation: "Ideális (veszteségmentes) transzformátornál a bemenő és kimenő teljesítmény azonos, ezért a feszültség és az áramerősség fordítottan arányosan változnak.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 0,8 m hosszú vezetőrudat 0,6 T indukciójú, rá merőleges mágneses mezőben 5 m/s sebességgel mozgatunk, a mezőre és a rúdra is merőlegesen. Mekkora az indukált feszültség?",
        options: ["2,4 V", "0,24 V", "4 V", "24 V"],
        correct_answer: "2,4 V",
        explanation: "U_ind = B·l·v = 0,6·0,8·5 = 2,4 V.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "valtoaram-alapjai",
    title: "Váltóáram alapjai",
    level: "emelt",
    theme: "Elektromágnesség",
    order_index: 20,
    summary_markdown:
      "A háztartási és ipari elektromos hálózatokban váltóáram (szinuszosan váltakozó áram) folyik, amelynek jellemzéséhez a csúcsérték és az effektív érték fogalmait, illetve — ellenállás mellett kondenzátort/tekercset is tartalmazó áramkörökben — az impedancia fogalmát használjuk.",
    content_markdown: `
## A váltóáram fogalma

A **váltóáram** olyan elektromos áram, amelynek erőssége (és iránya) időben periodikusan, jellemzően szinuszosan változik — ezzel szemben az **egyenáram** iránya és (ideális esetben) nagysága időben állandó. A háztartási hálózati feszültség Európában (Magyarországon is) szinuszos váltóáram, **50 Hz** frekvenciával.

A pillanatnyi feszültség és áramerősség időfüggése:

**u(t) = U_max · sin(ω·t)**, **i(t) = I_max · sin(ω·t + φ)**

ahol U_max, I_max a **csúcsértékek (amplitúdók)**, ω = 2π·f a **körfrekvencia**, φ a feszültség és az áram közötti fáziskülönbség (amely ellenállás mellett kondenzátor vagy tekercs jelenlétében nem nulla).

## Effektív érték

A gyakorlatban a váltóáram jellemzésére nem a csúcsértéket, hanem az **effektív (RMS) értéket** használjuk, amely azt az egyenáramú értéket jelenti, amely azonos idő alatt azonos hőt (Joule-hőt) fejlesztene egy ellenálláson:

**U_eff = U_max / √2 ≈ 0,707 · U_max**, **I_eff = I_max / √2**

A háztartási hálózat "230 V"-os feszültsége éppen az **effektív** feszültséget jelenti; a csúcsérték ennél nagyobb: U_max = U_eff · √2 ≈ 325 V.

## Ohmikus ellenállás váltóáramú körben

Egy tisztán **ohmikus (csak ellenállásból álló)** áramkörben a feszültség és az áram fázisban van (φ = 0), és a teljesítmény kiszámítható az effektív értékekkel, ugyanúgy, mint egyenáramnál: **P = U_eff · I_eff = I_eff² · R**.

## Kondenzátor és tekercs váltóáramú körben (kvalitatív áttekintés)

- Egy **kondenzátor** váltóáramú körben "áteresztő" jellegű: az áram fáziban 90°-kal megelőzi a feszültséget, és a kondenzátor **kapacitív reaktanciája** (X_C = 1/(ω·C)) a frekvencia növekedésével csökken — nagyfrekvenciás áramok könnyebben "áthaladnak" rajta.
- Egy **tekercs (induktivitás)** ezzel szemben "gátló" jellegű: az áram 90°-kal lemarad a feszültséghez képest, és a tekercs **induktív reaktanciája** (X_L = ω·L) a frekvencia növekedésével nő.

Mindkét esetben (tiszta reaktancián) a fázisszög miatt az átlagos teljesítmény (hosszú távon) nulla — a reaktáns elemek nem alakítanak (időátlagban) elektromos energiát hővé, csak "tárolják és visszaadják" azt periodikusan.

## Miért effektív érték alapján méred a fogyasztást?

Az effektív érték bevezetésének gyakorlati oka, hogy a háztartási készülékek (fűtőtestek, izzók) teljesítménye és hőfejlesztése pontosan úgy számolható, mint egyenáramnál, ha az effektív feszültséget/áramerősséget használjuk — így a méréstechnika és a számla-elszámolás egyszerűsíthető.

## Példa levezetés

A hálózati feszültség csúcsértéke 325 V. Mekkora az effektív értéke, és mennyi teljesítményt vesz fel egy 50 Ω-os, tisztán ohmikus fűtőszál ezen a hálózaton?

1. U_eff = U_max/√2 = 325/1,414 ≈ **230 V**
2. P = U_eff²/R = 230²/50 = 52900/50 = **1058 W**
`,
    key_concepts: [
      "váltóáram és szinuszos időfüggés",
      "csúcsérték és effektív (RMS) érték",
      "ohmikus ellenállás váltóáramú körben (fázisban)",
      "kondenzátor és tekercs reaktanciája",
      "230 V-os hálózati feszültség mint effektív érték",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a váltóáramot az egyenáramhoz képest?",
        options: [
          "erőssége (és iránya) időben periodikusan változik",
          "iránya és nagysága időben állandó",
          "csak egyenirányítók után létezik",
          "nincs frekvenciája",
        ],
        correct_answer: "erőssége (és iránya) időben periodikusan változik",
        explanation: "A váltóáram jellemzője, hogy erőssége (jellemzően szinuszosan) periodikusan változik időben, ellentétben az állandó egyenáraммal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "A magyar hálózati feszültség effektív értéke 230 V. Mekkora a csúcsértéke?",
        options: ["kb. 325 V", "230 V", "kb. 163 V", "460 V"],
        correct_answer: "kb. 325 V",
        explanation: "U_max = U_eff·√2 ≈ 230·1,414 ≈ 325 V.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért az effektív értéket használjuk a háztartási váltóáram jellemzésére, nem a csúcsértéket?",
        options: [
          "mert az effektív érték az az egyenáramú érték, amely azonos idő alatt azonos hőt (teljesítményt) fejlesztene egy ellenálláson",
          "mert a csúcsérték mindig nulla",
          "mert a hálózati áram valójában nem szinuszos",
          "mert az effektív érték mindig nagyobb, mint a csúcsérték",
        ],
        correct_answer: "mert az effektív érték az az egyenáramú érték, amely azonos idő alatt azonos hőt (teljesítményt) fejlesztene egy ellenálláson",
        explanation: "Az effektív (RMS) érték definíciója éppen ez: az az egyenáramú érték, amely az ellenálláson ugyanannyi hőt fejlesztene ugyanannyi idő alatt, ezért gyakorlati számításokra alkalmas.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan változik egy tekercs induktív reaktanciája (X_L) a váltóáram frekvenciájának növekedésével?",
        options: ["nő", "csökken", "nem változik", "nullára csökken"],
        correct_answer: "nő",
        explanation: "X_L = ω·L = 2π·f·L, tehát a frekvencia növekedésével a induktív reaktancia egyenesen arányosan nő.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy tisztán ohmikus, 20 Ω ellenállású fogyasztón 5 A effektív áramerősség folyik. Mekkora az átlagos teljesítménye?",
        options: ["500 W", "100 W", "4 W", "25 W"],
        correct_answer: "500 W",
        explanation: "P = I_eff²·R = 25·20 = 500 W.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "elektromagneses-hullamok-feny-kettos-termeszete",
    title: "Elektromágneses hullámok és a fény kettős természete",
    level: "emelt",
    theme: "Optika",
    order_index: 21,
    summary_markdown:
      "Az elektromágneses hullámok (fény, rádióhullám, röntgen stb.) egységes spektrumot alkotnak, amelyek terjedéséhez nincs szükség közegre; a fény kettős — hullám- és részecske- (foton-) természetét a modern fizika egyik alapvető felismerése.",
    content_markdown: `
## Az elektromágneses hullám keletkezése

Az **elektromágneses hullám** egymásra merőleges, egymást gerjesztő, változó elektromos és mágneses mező tovaterjedése, amely — ellentétben a mechanikai hullámokkal — **nem igényel közeget**, vákuumban is terjed. Elektromágneses hullámot gyorsuló (pl. rezgő) elektromos töltés kelt.

## Az elektromágneses spektrum

Az elektromágneses hullámok egységes családot alkotnak, amelyeket a hullámhosszuk (illetve frekvenciájuk) alapján csoportosítunk, a hosszú hullámhossztól a rövid felé:

| Tartomány | Jellemző hullámhossz | Fő alkalmazás/forrás |
|---|---|---|
| Rádióhullám | > 1 m | rádió, TV, mobilkommunikáció |
| Mikrohullám | 1 mm – 1 m | mikrosütő, radar, mobilhálózat |
| Infravörös | 700 nm – 1 mm | hősugárzás, távirányítók |
| Látható fény | kb. 400–700 nm | emberi szem által érzékelhető |
| Ultraviola | 10–400 nm | napozás/napégés, fertőtlenítés |
| Röntgensugárzás | 0,01–10 nm | orvosi diagnosztika |
| Gamma-sugárzás | < 0,01 nm | radioaktív bomlás, magfolyamatok |

Minden elektromágneses hullám vákuumban azonos sebességgel, a **fénysebességgel (c ≈ 3 · 10⁸ m/s)** terjed, és rájuk is érvényes a hullámok alapegyenlete: **c = λ · f**.

## A fény kettős természete

A 20. század fizikájának egyik alapvető felismerése, hogy a fény (és általában az elektromágneses sugárzás) egyszerre viselkedik **hullámként** és **részecskeként** (**hullám–részecske kettősség, dualitás**):

- **Hullámtermészetre** utaló jelenségek: interferencia, elhajlás (diffrakció), polarizáció — ezek csak hullámmodellel érthetők meg.
- **Részecsketermészetre** utaló jelenségek: a fényelektromos jelenség (fotoeffektus), a Compton-szórás — ezek csak úgy magyarázhatók, ha a fényt discrét energiaadagokból, **fotonokból** álló sugárzásnak tekintjük.

Egy foton energiája a frekvenciával (illetve fordítottan a hullámhosszal) áll kapcsolatban:

**E = h · f = h · c / λ**

ahol h ≈ 6,626 · 10⁻³⁴ J·s a **Planck-állandó**. A kettős természet azt jelenti, hogy sem a tisztán hullám-, sem a tisztán részecskemodell nem írja le önmagában teljesen a fény viselkedését — melyik modell "látszik" dominánsnak, az a vizsgált kísérlettől (jelenségtől) függ.

## Példa levezetés

Egy vörös fény hullámhossza 650 nm. Mekkora a frekvenciája, és mekkora egy fotonjának energiája?

1. f = c/λ = 3·10⁸ / 650·10⁻⁹ ≈ **4,6 · 10¹⁴ Hz**
2. E = h·f = 6,626·10⁻³⁴ · 4,6·10¹⁴ ≈ **3,05 · 10⁻¹⁹ J**
`,
    key_concepts: [
      "elektromágneses hullám és keletkezése",
      "az elektromágneses spektrum tartományai",
      "c = λ·f minden elektromágneses hullámra",
      "a fény hullám–részecske kettőssége",
      "foton energiája: E = h·f",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért terjedhet az elektromágneses hullám vákuumban is, ellentétben a mechanikai hullámokkal?",
        options: [
          "mert egymást gerjesztő elektromos és mágneses mező tovaterjedése, amely nem igényel közeget",
          "mert az elektromágneses hullámoknak nincs sebességük",
          "mert vákuumban nincs gravitáció",
          "valójában az elektromágneses hullám sem terjed vákuumban",
        ],
        correct_answer: "mert egymást gerjesztő elektromos és mágneses mező tovaterjedése, amely nem igényel közeget",
        explanation: "Az elektromágneses hullám a változó elektromos és mágneses mező egymást fenntartó tovaterjedése, ami mechanikai közvetítő közeg nélkül, vákuumban is végbemegy.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik jelenség utal a fény hullámtermészetére?",
        options: ["interferencia", "fényelektromos jelenség", "Compton-szórás", "a foton fogalma"],
        correct_answer: "interferencia",
        explanation: "Az interferencia (és a diffrakció) tisztán hullámjelenség, csak a fény hullámtermészetével magyarázható; a fotoeffektus és a Compton-szórás a részecsketermészetre utal.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 500 nm hullámhosszú zöld fény frekvenciája mekkora (c = 3·10⁸ m/s)?",
        options: ["6·10¹⁴ Hz", "1,5·10¹⁷ Hz", "6·10¹¹ Hz", "3·10⁸ Hz"],
        correct_answer: "6·10¹⁴ Hz",
        explanation: "f = c/λ = 3·10⁸ / 5·10⁻⁷ = 6·10¹⁴ Hz.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Az elektromágneses spektrumban melyik tartomány hullámhossza a legnagyobb?",
        options: ["rádióhullám", "látható fény", "röntgensugárzás", "gamma-sugárzás"],
        correct_answer: "rádióhullám",
        explanation: "Az elektromágneses spektrumban a rádióhullámok hullámhossza a legnagyobb (méteres vagy annál is nagyobb), a gamma-sugárzásé a legkisebb.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a fény hullám–részecske kettőssége?",
        options: [
          "a fény bizonyos jelenségekben hullámként, másokban részecskeként (fotonként) viselkedik",
          "a fény mindig csak hullámként viselkedik",
          "a fény mindig csak részecskeként viselkedik",
          "a fénynek nincs se hullám-, se részecsketermészete",
        ],
        correct_answer: "a fény bizonyos jelenségekben hullámként, másokban részecskeként (fotonként) viselkedik",
        explanation: "A hullám–részecske kettősség szerint a fény viselkedése (hullám- vagy részecskejelleg dominanciája) a vizsgált kísérlettől/jelenségtől függ; sem a tisztán hullám-, sem a tisztán részecskemodell nem elegendő önmagában.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "geometriai-optika-fenyvisszaverodes-fenytores",
    title: "Geometriai optika — fényvisszaverődés és fénytörés",
    level: "mindketto",
    theme: "Optika",
    order_index: 22,
    summary_markdown:
      "A geometriai optika a fényt egyenes vonalú fénysugarakkal modellezi, és a visszaverődés, illetve a törés (fénytörés) alaptörvényeivel írja le a fény útját különböző közegek határán.",
    content_markdown: `
## A fény egyenes vonalú terjedése és a fénysugár-modell

Homogén közegben a fény **egyenes vonalban** terjed — ezen a modellen (a **geometriai optikán**) alapul az árnyékok, a fényképezés és a legtöbb optikai eszköz működésének leírása. A fény útját **fénysugarakkal** ábrázoljuk.

## A fényvisszaverődés törvénye

Ha a fény egy sima felületre (határfelületre) esik, egy része **visszaverődik**. A visszaverődés törvénye:

- A beeső sugár, a visszavert sugár és a beesési pontban a felületre állított **beesési merőleges (normális)** egy síkban vannak.
- A **beesési szög (α, a beeső sugár és a normális közötti szög) megegyezik a visszaverődési szöggel (α')**: **α = α'**

Sima (tükröző) felületen **szórt (irányított) visszaverődés**, egyenetlen felületen **szórt (diffúz) visszaverődés** történik.

## A fénytörés (refrakció) törvénye

Ha a fény két, eltérő optikai tulajdonságú közeg határára érkezik, egy része behatol a másik közegbe, de iránya (általában) megváltozik — ezt nevezzük **fénytörésnek**. A **Snellius–Descartes-törvény**:

**n₁ · sin α = n₂ · sin β**

ahol α a beesési szög, β a törési szög, n₁ és n₂ a két közeg **törésmutatója**. A törésmutató egy közeg optikai "sűrűségét" jellemzi: **n = c / v**, ahol c a fény sebessége vákuumban, v a fény sebessége az adott közegben (mindig n ≥ 1).

- Ha a fény **optikailag ritkább közegből sűrűbbe** lép (n₁ < n₂), a fénysugár a **normálishoz közelebb törik** (β < α).
- Ha a fény **optikailag sűrűbb közegből ritkábba** lép (n₁ > n₂), a fénysugár a **normálistól távolabb törik** (β > α).

## A teljes visszaverődés és a határszög

Ha a fény optikailag sűrűbb közegből ritkább felé halad, létezik egy **határszög (α_h)**, amelynél a törési szög éppen 90° lenne. Ennél nagyobb beesési szögnél a fény már nem lép át a másik közegbe, hanem **teljesen visszaverődik** a határfelületről (**teljes visszaverődés**):

**sin α_h = n₂ / n₁** (n₁ > n₂)

Ez a jelenség az **optikai szálak (üvegszálas kommunikáció, endoszkópok)** működésének fizikai alapja: a fény a szál belsejében ismételt teljes visszaverődésekkel halad tovább, jelentős veszteség nélkül.

## Példa levezetés

A fény levegőből (n₁ = 1) vízbe (n₂ = 1,33) lép be, 40°-os beesési szöggel. Mekkora a törési szög?

1. sinα · n₁ = sinβ · n₂ ⟹ sin40° · 1 = sinβ · 1,33
2. sinβ = 0,643 / 1,33 ≈ 0,483
3. **β ≈ 28,9°**
`,
    key_concepts: [
      "a fényvisszaverődés törvénye: α = α'",
      "Snellius–Descartes-törvény: n₁sinα = n₂sinβ",
      "törésmutató: n = c/v",
      "teljes visszaverődés és a határszög",
      "optikai szálak működési elve",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit állít a fényvisszaverődés törvénye?",
        options: [
          "a beesési szög megegyezik a visszaverődési szöggel",
          "a beesési szög mindig nagyobb, mint a visszaverődési szög",
          "a visszavert sugár mindig merőleges a beeső sugárra",
          "a visszaverődés csak sötét felületeken történik",
        ],
        correct_answer: "a beesési szög megegyezik a visszaverődési szöggel",
        explanation: "A fényvisszaverődés törvénye szerint a beesési szög (α) mindig megegyezik a visszaverődési szöggel (α'), és mindkettőt a normálistól mérjük.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a törésmutató fizikai jelentése (n = c/v)?",
        options: [
          "azt fejezi ki, hányszor kisebb a fény sebessége az adott közegben, mint vákuumban",
          "a beesési szög és a törési szög hányadosa",
          "a közeg sűrűsége kg/m³-ben",
          "a közegben terjedő fény hullámhossza",
        ],
        correct_answer: "azt fejezi ki, hányszor kisebb a fény sebessége az adott közegben, mint vákuumban",
        explanation: "n = c/v, ahol c a fény sebessége vákuumban, v a közegben — a törésmutató megmutatja, hányszor lassabban terjed a fény az adott közegben a vákuumbeli sebességéhez képest.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor lép fel teljes visszaverődés egy határfelületen?",
        options: [
          "amikor a fény optikailag sűrűbb közegből ritkább felé halad, és a beesési szög a határszögnél nagyobb",
          "amikor a fény optikailag ritkább közegből sűrűbb felé halad",
          "minden fénytörésnél, kivétel nélkül",
          "csak akkor, ha a beesési szög nulla",
        ],
        correct_answer: "amikor a fény optikailag sűrűbb közegből ritkább felé halad, és a beesési szög a határszögnél nagyobb",
        explanation: "Teljes visszaverődés csak sűrűbb közegből ritkább felé haladó fénynél léphet fel, ha a beesési szög meghaladja a határszöget.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "A fény vízből (n = 1,33) levegőbe (n = 1) lép, a határszög kb. 48,8°. Mi történik, ha a beesési szög 60°?",
        options: [
          "teljes visszaverődés lép fel, a fény nem hagyja el a vizet",
          "a fény 60°-os szögben törik meg és kilép a levegőbe",
          "a fény pontosan 90°-ban törik meg",
          "a fény elnyelődik a határfelületen",
        ],
        correct_answer: "teljes visszaverődés lép fel, a fény nem hagyja el a vizet",
        explanation: "Mivel a beesési szög (60°) nagyobb, mint a határszög (kb. 48,8°), a víz–levegő határon teljes visszaverődés következik be, a fény visszafordul a vízbe.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért haladhat a fény jelentős veszteség nélkül egy optikai szál belsejében nagy távolságokon?",
        options: [
          "mert a szál falán a fény ismételt teljes visszaverődésekkel halad tovább",
          "mert a szál belsejében vákuum van",
          "mert a fénysebesség a szálban nagyobb, mint a vákuumban",
          "mert a szál teljesen átlátszó, így nincs is törésmutatója",
        ],
        correct_answer: "mert a szál falán a fény ismételt teljes visszaverődésekkel halad tovább",
        explanation: "Az optikai szál megfelelő geometriájának és a köpeny kisebb törésmutatójának köszönhetően a szálban haladó fény a fal minden pontján teljes visszaverődést szenved, ezért alig veszít energiájából.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "optikai-eszkozok-lencsek-tukrok",
    title: "Optikai eszközök — lencsék, tükrök",
    level: "mindketto",
    theme: "Optika",
    order_index: 23,
    summary_markdown:
      "A lencsék és tükrök képalkotásának törvényei (leképezési törvény, nagyítás) a szemüvegek, mikroszkópok, távcsövek és a szem működésének fizikai alapját adják.",
    content_markdown: `
## Gömbtükrök

A **gömbtükrök** lehetnek **homorú (konkáv)** és **domború (konvex)** tükrök. A homorú tükör a rá párhuzamosan beérkező fénysugarakat egy pontban, a **fókuszpontban (F)** gyűjti össze; a domború tükör a sugarakat szétszórja, a fókuszpont a tükör mögött, virtuálisan helyezkedik el. A fókusztávolság (f) a **görbületi sugár (r)** felével egyezik meg: **f = r / 2**.

## Lencsék

A **lencsék** lehetnek **gyűjtőlencsék (konvex, domború)**, amelyek a párhuzamos fénysugarakat egy valós fókuszpontban gyűjtik össze, és **szórólencsék (konkáv, homorú)**, amelyek szétszórják azokat (a fókuszpont ekkor virtuális). A lencse fénytörő képessége a **dioptriában (D)** mért **törőerő**: **D = 1/f** (f méterben), amely gyűjtőlencsénél pozitív, szórólencsénél negatív előjelű.

## A leképezési (lencse-) törvény

A tárgy (t, tárgytávolság), a kép (k, képtávolság) és a fókusztávolság (f) közötti kapcsolatot a **leképezési törvény** adja meg (mind lencsékre, mind gömbtükrökre azonos alakban, előjelszabályok figyelembevételével):

**1/f = 1/t + 1/k**

A képalkotás **nagyítása (N)**:

**N = k / t = kép mérete / tárgy mérete**

## Valódi és látszólagos (virtuális) kép

- **Valódi (reális) kép**: a sugarak valóban egy pontban metszik egymást, ernyőn felfogható, gyűjtőlencsénél a fókusztávolságnál távolabb elhelyezett tárgy esetén jön létre, és fejjel lefelé áll (fordított állású).
- **Látszólagos (virtuális) kép**: a sugarak (meghosszabbítva) csak látszólag metszik egymást, ernyőn nem fogható fel, csak szemmel (vagy továbbá optikai eszközzel) érzékelhető — ilyen kép jön létre pl. egy nagyítóként használt gyűjtőlencsénél (a fókusztávolságon belül elhelyezett tárgynál), és mindig egyenes állású (nem fordított).

## Optikai eszközök alkalmazásai

- **Szemüveg**: rövidlátásnál (myopia, a szem túl erősen tör) szórólencsét, távollátásnál (hypermetropia, a szem gyengén tör) gyűjtőlencsét alkalmazunk a fénytörés korrigálására, hogy a kép pontosan a retinára essen.
- **Nagyító**: egy gyűjtőlencse, amelyet úgy helyezünk el (a fókusztávolságon belül), hogy nagyított, egyenes állású, virtuális képet adjon.
- **Mikroszkóp és távcső**: két (vagy több) lencse (objektív és okulár) kombinációjával érnek el nagy nagyítást; a mikroszkóp közeli, apró tárgyak, a távcső távoli tárgyak megfigyelésére szolgál.

## Példa levezetés

Egy 20 cm fókusztávolságú gyűjtőlencsétől 30 cm távolságra teszünk egy tárgyat. Hol keletkezik a kép, és mekkora a nagyítás?

1. 1/f = 1/t + 1/k ⟹ 1/20 = 1/30 + 1/k
2. 1/k = 1/20 − 1/30 = 3/60 − 2/60 = 1/60 ⟹ **k = 60 cm**
3. N = k/t = 60/30 = **2** (a kép kétszer nagyobb, és fordított állású, mivel t > f).
`,
    key_concepts: [
      "homorú és domború gömbtükör",
      "gyűjtőlencse és szórólencse, dioptria",
      "leképezési törvény: 1/f = 1/t + 1/k",
      "valódi és látszólagos (virtuális) kép",
      "szemüveg, nagyító, mikroszkóp, távcső elve",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a gyűjtőlencse és a szórólencse között?",
        options: [
          "a gyűjtőlencse a párhuzamos fénysugarakat egy valós pontban egyesíti, a szórólencse szétszórja azokat",
          "a gyűjtőlencse mindig kisebb, mint a szórólencse",
          "csak a szórólencse ad valódi képet",
          "nincs köztük fizikai különbség, csak elnevezésben",
        ],
        correct_answer: "a gyűjtőlencse a párhuzamos fénysugarakat egy valós pontban egyesíti, a szórólencse szétszórja azokat",
        explanation: "A gyűjtőlencse (konvex) a rá eső, egymással párhuzamos sugarakat egy valós fókuszpontban gyűjti össze, a szórólencse (konkáv) szétszórja azokat, virtuális fókuszpontot eredményezve.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy lencse fókusztávolsága 0,5 m. Mekkora a törőereje dioptriában?",
        options: ["2 D", "0,5 D", "5 D", "0,2 D"],
        correct_answer: "2 D",
        explanation: "D = 1/f = 1/0,5 = 2 D.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy 10 cm fókusztávolságú gyűjtőlencsétől 40 cm-re elhelyezett tárgy képe hol keletkezik?",
        options: ["13,3 cm-re a lencsétől", "40 cm-re a lencsétől", "10 cm-re a lencsétől", "50 cm-re a lencsétől"],
        correct_answer: "13,3 cm-re a lencsétől",
        explanation: "1/f = 1/t + 1/k ⟹ 1/10 = 1/40 + 1/k ⟹ 1/k = 1/10 − 1/40 = 4/40 − 1/40 = 3/40 ⟹ k = 40/3 ≈ 13,3 cm.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen típusú szemüveglencsét alkalmazunk rövidlátás (myopia) korrigálására?",
        options: ["szórólencsét", "gyűjtőlencsét", "sík üveglapot", "prizmát"],
        correct_answer: "szórólencsét",
        explanation: "Rövidlátásnál a szem túl erősen tör, a kép a retina előtt keletkezik; ezt szórólencsével (negatív dioptriával) korrigálják, amely csökkenti a fénytörést.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért egyenes állású (nem fordított) a nagyítóként használt gyűjtőlencse által adott kép?",
        options: [
          "mert a tárgyat a fókusztávolságon belül helyezzük el, ekkor virtuális, egyenes állású kép keletkezik",
          "mert minden lencse mindig egyenes állású képet ad",
          "mert a nagyító valójában szórólencse",
          "mert a kép ilyenkor valódi kép",
        ],
        correct_answer: "mert a tárgyat a fókusztávolságon belül helyezzük el, ekkor virtuális, egyenes állású kép keletkezik",
        explanation: "Ha a tárgy a gyűjtőlencse fókusztávolságán belül van, a keletkező kép mindig virtuális (nem fogható fel ernyőn) és egyenes állású — ez a nagyító működési elve.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "hullamoptika-interferencia-diffrakcio",
    title: "Hullámoptika — interferencia és diffrakció",
    level: "emelt",
    theme: "Optika",
    order_index: 24,
    summary_markdown:
      "A hullámoptika olyan jelenségeket (interferencia, elhajlás/diffrakció, polarizáció) vizsgál, amelyek csak a fény hullámtermészetével magyarázhatók, és amelyek a geometriai optika egyszerű sugármodelljével nem írhatók le.",
    content_markdown: `
## A hullámok interferenciája

Két (vagy több) koherens (állandó fáziskülönbségű, azonos frekvenciájú) fényhullám találkozásakor **interferencia** jön létre: a hullámok erősíthetik (**erősítő, konstruktív interferencia**) vagy gyengíthetik, akár ki is olthatják (**kioltó, destruktív interferencia**) egymást, az útkülönbségüktől függően.

- **Erősítés (maximum)** akkor jön létre, ha az útkülönbség a hullámhossz egész számú többszöröse: **Δ = k · λ** (k = 0, 1, 2, ...).
- **Kioltás (minimum)** akkor jön létre, ha az útkülönbség a hullámhossz félegész számú többszöröse: **Δ = (2k+1) · λ/2**.

## A Young-féle kétréses kísérlet

**Thomas Young** kísérletében egy fényforrásból (koherens fény) két, egymáshoz közeli, párhuzamos résre irányítjuk a fényt, és az ezek mögötti ernyőn **interferenciacsíkokat (világos és sötét csíkok sorozatát)** figyelhetjük meg. Ez a kísérlet történelmileg az egyik legfontosabb bizonyíték volt a fény hullámtermészetére. A szomszédos világos csíkok közötti távolság a résköztől (d), az ernyő távolságától (L) és a hullámhossztól (λ) függ: **Δx ≈ λ·L / d**.

## Az elhajlás (diffrakció)

Az **elhajlás (diffrakció)** azt a jelenséget jelenti, amikor a hullám (fény) egy akadály (pl. rés vagy tárgy) szélén "behajlik" a geometriai árnyék tartományába is — ez a jelenség csak hullámtermészettel magyarázható, geometriai (sugár-) optikával nem. A diffrakció mértéke annál jelentősebb, minél közelebb van egymáshoz a rés (vagy akadály) mérete és a hullámhossz.

## Optikai rács

Az **optikai rács** sok, egyenlő távolságra elhelyezett, párhuzamos réssel ellátott eszköz, amely a rajta áthaladó fényt erősen elhajlítja és interferencia útján felbontja a különböző hullámhosszú (színű) komponenseire — ezen alapul a **spektroszkópia**, amely a csillagászatban és a kémiai analitikában is alapvető vizsgálati módszer. A rács maximumainak feltétele:

**d · sin θ = k · λ**

ahol d a rácsállandó (a szomszédos rések távolsága), θ az elhajlási szög, k a maximum rendje (0, ±1, ±2, ...).

## Polarizáció

A fény **transzverzális** elektromágneses hullám, ezért **polarizálható**: **polarizált fénynél** az elektromos térerősség-vektor csak egy meghatározott síkban rezeg (ellentétben a természetes fénnyel, ahol minden irányban rezeg). A polarizáció ténye önmagában is bizonyítja, hogy a fény transzverzális hullám (longitudinális hullám, mint a hang, nem polarizálható). Polarizációs szűrők (napszemüvegek, fényképészeti szűrők) a nem kívánt irányú rezgéskomponenseket kiszűrik.

## Példa levezetés

Egy Young-féle kísérletben a résköz 0,2 mm, az ernyő távolsága 2 m, a szomszédos világos csíkok távolsága 6 mm. Mekkora a használt fény hullámhossza?

1. Δx = λ·L/d ⟹ λ = Δx·d/L = 6·10⁻³ · 0,2·10⁻³ / 2
2. λ = 1,2·10⁻⁶ / 2 = **6·10⁻⁷ m = 600 nm** (ez a látható fény sárga-narancssárga tartományába esik).
`,
    key_concepts: [
      "erősítő és kioltó interferencia",
      "Young-féle kétréses kísérlet",
      "elhajlás (diffrakció) mint hullámjelenség",
      "optikai rács és a spektroszkópia",
      "a fény polarizációja",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mikor jön létre erősítő (konstruktív) interferencia két koherens hullám találkozásakor?",
        options: [
          "ha az útkülönbségük a hullámhossz egész számú többszöröse",
          "ha az útkülönbségük a hullámhossz félegész számú többszöröse",
          "csak akkor, ha a hullámok fázisban ellentétesek",
          "az útkülönbségtől függetlenül, mindig",
        ],
        correct_answer: "ha az útkülönbségük a hullámhossz egész számú többszöröse",
        explanation: "Erősítő interferencia feltétele Δ = k·λ (k egész szám), ilyenkor a hullámok azonos fázisban találkoznak és összeadódnak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért bizonyította Young kétréses kísérlete a fény hullámtermészetét?",
        options: [
          "mert az ernyőn megjelenő interferenciacsíkok csak hullámok találkozásával magyarázhatók",
          "mert kimutatta a fotonok létezését",
          "mert a fény sebességét mérte meg vele",
          "mert bebizonyította, hogy a fény részecskékből áll",
        ],
        correct_answer: "mert az ernyőn megjelenő interferenciacsíkok csak hullámok találkozásával magyarázhatók",
        explanation: "Az interferenciacsíkok (erősítés-kioltás váltakozása) csak hullámtermészettel (útkülönbségtől függő erősítés/kioltás) magyarázhatók, ezért a kísérlet a fény hullámtermészetét bizonyította.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a diffrakció (elhajlás) jelensége?",
        options: [
          "a hullám behajlik a geometriai árnyék tartományába egy akadály vagy rés szélén",
          "a fény mindig egyenes vonalban terjed, kivétel nélkül",
          "a fény visszaverődése egy tükörről",
          "a fény törése két közeg határán",
        ],
        correct_answer: "a hullám behajlik a geometriai árnyék tartományába egy akadály vagy rés szélén",
        explanation: "A diffrakció a hullámok azon tulajdonsága, hogy akadályok vagy rések szélén 'behajlanak', ami a geometriai (sugár-) optikával nem magyarázható.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem polarizálható a hang, ellentétben a fénnyel?",
        options: [
          "mert a hang longitudinális hullám, a fény pedig transzverzális",
          "mert a hangnak nincs frekvenciája",
          "mert a hang sebessége kisebb, mint a fényé",
          "valójában a hang is polarizálható",
        ],
        correct_answer: "mert a hang longitudinális hullám, a fény pedig transzverzális",
        explanation: "A polarizáció csak transzverzális hullámoknál lehetséges, mivel csak ott van értelme a rezgési irány síkjának korlátozásáról beszélni; a hang longitudinális hullám, ezért nem polarizálható.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy optikai rácsban a rácsállandó 2·10⁻⁶ m. Az első (k=1) maximum 17,5°-os szögnél jelenik meg. Kb. mekkora a fény hullámhossza (sin17,5° ≈ 0,3)?",
        options: ["600 nm", "300 nm", "1200 nm", "60 nm"],
        correct_answer: "600 nm",
        explanation: "d·sinθ = k·λ ⟹ λ = d·sinθ/k = 2·10⁻⁶ · 0,3 / 1 = 6·10⁻⁷ m = 600 nm.",
        difficulty: 3,
      },
    ],
  },
];
