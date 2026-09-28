import type { TopicSeed } from "./angol";

export const kemiaFizikaiSzervetlenTopics: TopicSeed[] = [
  {
    slug: "reakciokinetika-reakciosebesseg",
    title: "Reakciókinetika — reakciósebesség és a sebességet befolyásoló tényezők",
    level: "emelt",
    theme: "Fizikai kémia",
    order_index: 9,
    summary_markdown:
      "A reakciósebesség fogalma és mérése, valamint az azt befolyásoló tényezők: koncentráció, hőmérséklet, szemcseméret és katalizátor, az ütközési elmélet és az aktiválási energia alapján.",
    content_markdown: `
## A reakciósebesség fogalma

A **reakciósebesség** megmutatja, hogy egységnyi idő alatt mennyivel változik egy reaktáns vagy produktum koncentrációja:

$$v = -\\frac{\\Delta c(reaktáns)}{\\Delta t} = \\frac{\\Delta c(produktum)}{\\Delta t}$$

A reakciók sebessége a reakció előrehaladásával általában **csökken**, mert a reaktánsok koncentrációja fogy.

## Az ütközési elmélet

Egy kémiai reakció csak akkor mehet végbe, ha:

1. A reagáló részecskék **összeütköznek**,
2. az ütközés **megfelelő térbeli orientációjú** (a reakcióképes atomcsoportok találkoznak),
3. az ütközés energiája **eléri vagy meghaladja az aktiválási energiát (E_a)** — csak ekkor alakulhat ki az átmeneti, aktivált komplexum, amelyből a produktumok keletkezhetnek.

Minél **több hatásos ütközés** történik időegység alatt, annál nagyobb a reakciósebesség.

## A reakciósebességet befolyásoló tényezők

**1. Koncentráció (töménység)**
- Nagyobb koncentráció esetén a részecskék sűrűbben vannak jelen, ezért **több ütközés** történik időegység alatt → nagyobb reakciósebesség.
- Gázoknál a nyomás növelése hasonló hatású, mivel az is a koncentrációt (részecskesűrűséget) növeli.

**2. Hőmérséklet**
- A hőmérséklet emelésével a részecskék **mozgási energiája (átlagos sebessége) nő**, ezért gyakoribbak és energikusabbak lesznek az ütközések, több részecske éri el az aktiválási energiát.
- Ökölszabály (közelítő): **10 °C hőmérséklet-emelkedés a reakciósebességet kb. 2-4-szeresére növeli** sok reakciónál.

**3. Szemcseméret (érintkezési felület)**
- Szilárd reaktánsoknál a **kisebb szemcseméret nagyobb fajlagos felületet** jelent, így több részecske van közvetlen kapcsolatban a másik reaktánssal → nagyobb reakciósebesség (pl. a porított kréta gyorsabban reagál sósavval, mint egy nagy krétadarab).

**4. Katalizátor**
- A **katalizátor** olyan anyag, amely **csökkenti az aktiválási energiát** azáltal, hogy más reakcióutat (mechanizmust) biztosít a reakciónak, így a reakció gyorsabban megy végbe.
- A katalizátor **nem fogy el** a reakció során (a folyamat végén regenerálódik), és **nem változtatja meg a reakció ΔH-ját**, sem az egyensúly helyzetét — csak azt, milyen gyorsan éri el a rendszer az egyensúlyt.
- Példa: MnO₂ katalizálja a H₂O₂ bomlását; a biológiai katalizátorok az **enzimek**.
- **Negatív katalizátor (inhibitor)**: lassítja a reakciót.

## Energiadiagram és a katalizátor hatása

A reakció energiadiagramján a katalizátor egy **alacsonyabb energiagátú** (kisebb E_a) alternatív útvonalat biztosít a reaktánsok és produktumok között, míg a kezdeti és végállapot energiaszintje (és így a ΔH) változatlan marad.

## Összefoglaló táblázat

| Tényező | Hatás a sebességre | Magyarázat |
|---|---|---|
| Koncentráció nő | nő | több ütközés időegység alatt |
| Hőmérséklet nő | nő | gyorsabb, energikusabb részecskék, több hatásos ütközés |
| Szemcseméret csökken | nő | nagyobb érintkezési felület |
| Katalizátor | nő | kisebb aktiválási energia |
`,
    key_concepts: [
      "reakciósebesség",
      "ütközési elmélet",
      "aktiválási energia",
      "katalizátor",
      "a koncentráció és hőmérséklet hatása",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért gyorsítja a hőmérséklet-emelés a kémiai reakciókat?",
        options: [
          "Mert a részecskék mozgási energiája nő, így több és energikusabb ütközés történik időegység alatt",
          "Mert a hőmérséklet-emelés megnöveli a reaktánsok tömegét",
          "Mert a hőmérséklet-emelés mindig csökkenti az aktiválási energiát",
          "Mert magasabb hőmérsékleten kevesebb részecske van jelen",
        ],
        correct_answer: "Mert a részecskék mozgási energiája nő, így több és energikusabb ütközés történik időegység alatt",
        explanation: "A hőmérséklet emelése a részecskék átlagos kinetikus energiáját növeli, ezáltal több részecske éri el az aktiválási energiát és gyakoribbak a hatásos ütközések.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a katalizátor szerepe egy kémiai reakcióban?",
        options: [
          "Csökkenti az aktiválási energiát, így meggyorsítja a reakciót, önmaga nem fogy el",
          "Megváltoztatja a reakció ΔH-ját",
          "Elfogy a reakció során, mint bármely reaktáns",
          "Mindig lassítja a reakciót",
        ],
        correct_answer: "Csökkenti az aktiválási energiát, így meggyorsítja a reakciót, önmaga nem fogy el",
        explanation: "A katalizátor alternatív, alacsonyabb energiagátú reakcióutat biztosít, és a reakció végén regenerálódik, nem fogy el.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért reagál gyorsabban a porrá tört mészkő sósavval, mint egy nagy mészkődarab?",
        options: [
          "Mert a porított mészkőnek nagyobb a fajlagos (érintkezési) felülete, így több részecske léphet reakcióba egyszerre",
          "Mert a porított mészkő kémiailag más anyag",
          "Mert a porított mészkő hidegebb",
          "Mert a nagy mészkődarabnak nagyobb a tömege",
        ],
        correct_answer: "Mert a porított mészkőnek nagyobb a fajlagos (érintkezési) felülete, így több részecske léphet reakcióba egyszerre",
        explanation: "A kisebb szemcseméret nagyobb felület/tömeg arányt jelent, ez növeli az érintkezési felületet és így a reakciósebességet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Az ütközési elmélet szerint mikor eredményez egy részecskeütközés kémiai reakciót?",
        options: [
          "Ha az ütközés energiája eléri az aktiválási energiát és az orientáció megfelelő",
          "Minden ütközés reakcióhoz vezet, függetlenül az energiától",
          "Csak akkor, ha a részecskék azonos mérete",
          "Csak alacsony hőmérsékleten",
        ],
        correct_answer: "Ha az ütközés energiája eléri az aktiválási energiát és az orientáció megfelelő",
        explanation: "Az ütközési elmélet szerint egy ütközés csak elegendő energia és megfelelő térbeli orientáció esetén vezet reakcióhoz — ezt nevezzük hatásos ütközésnek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy exoterm reakciónál a katalizátor alkalmazása hogyan hat a reakció ΔH-jára és az egyensúly helyzetére?",
        options: [
          "Sem a ΔH-t, sem az egyensúly helyzetét nem változtatja meg, csak az egyensúly gyorsabb elérését segíti",
          "Csökkenti a ΔH abszolút értékét",
          "Az egyensúlyt a produktumok irányába mozdítja el",
          "Növeli a reakcióhő nagyságát",
        ],
        correct_answer: "Sem a ΔH-t, sem az egyensúly helyzetét nem változtatja meg, csak az egyensúly gyorsabb elérését segíti",
        explanation: "A katalizátor csak a reakció sebességét (az energiagátat) módosítja, a kezdeti és végállapot energiaszintje, tehát a ΔH és az egyensúlyi helyzet változatlan marad.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kemiai-egyensuly-le-chatelier",
    title: "Kémiai egyensúly — Le Chatelier-elv",
    level: "emelt",
    theme: "Fizikai kémia",
    order_index: 10,
    summary_markdown:
      "A dinamikus kémiai egyensúly fogalma, az egyensúlyi állandó (K) jelentése, és a Le Chatelier-elv alkalmazása az egyensúly eltolódásának előrejelzésére koncentráció-, hőmérséklet- és nyomásváltozás esetén.",
    content_markdown: `
## Megfordítható reakciók és a dinamikus egyensúly

Sok kémiai reakció **megfordítható (reverzibilis)**: a produktumok visszaalakulhatnak a reaktánsokká. Ezt kettős nyíllal jelöljük:

$$aA + bB \\rightleftharpoons cC + dD$$

Ha egy megfordítható reakciót zárt rendszerben hagyunk lezajlani, egy idő után beáll a **dinamikus egyensúly**: az **oda- és visszaalakulás sebessége megegyezik**, ezért a reaktánsok és produktumok koncentrációja **makroszkopikusan állandónak** látszik, miközben a reakció mikroszkopikus szinten (mindkét irányban) folytonosan zajlik.

## Az egyensúlyi állandó (K)

Az egyensúlyi állandó (K) számszerűen kifejezi, hogy egyensúlyban milyen arányban vannak a produktumok és a reaktánsok koncentrációi:

$$K = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$

- **K > 1**: egyensúlyban a produktumok koncentrációja a nagyobb (a reakció "jobbra" van eltolva).
- **K < 1**: egyensúlyban a reaktánsok koncentrációja a nagyobb (a reakció "balra" van eltolva).
- A K értéke **adott hőmérsékleten állandó**, csak a hőmérséklet változtatja meg (a koncentráció, nyomás, katalizátor nem).

## Le Chatelier-elv (a legkisebb kényszer elve)

*"Ha egy egyensúlyi rendszert valamilyen külső hatással (kényszerrel) megzavarunk, a rendszer olyan irányba mozdul el, hogy csökkentse ennek a kényszernek a hatását, és új egyensúlyt alakítson ki."*

**1. Koncentrációváltozás hatása**
- Ha egy reaktáns (vagy produktum) koncentrációját **növeljük**, az egyensúly úgy mozdul el, hogy ezt "fogyassza" — azaz a hozzáadott anyag felhasználásának irányába (pl. reaktáns hozzáadása → az egyensúly a produktum(ok) irányába mozdul).
- Ha egy anyagot **elvonunk** a rendszerből, az egyensúly az adott anyag pótlásának irányába mozdul el.

**2. Hőmérsékletváltozás hatása**
- Exoterm reakciónál (ΔH<0) a hőmérséklet **emelése** az egyensúlyt a **reaktánsok** (endoterm irány) felé mozdítja el, mivel a rendszer így "elnyeli" a felesleges hőt.
- Endoterm reakciónál (ΔH>0) a hőmérséklet emelése az egyensúlyt a **produktumok** felé mozdítja el.
- Fontos: a hőmérséklet-változás az egyetlen tényező, amely az **egyensúlyi állandó (K) értékét is megváltoztatja**, nem csak az egyensúly helyzetét.

**3. Nyomásváltozás hatása (csak gázreakciókra)**
- Ha a nyomást **növeljük** (a térfogat csökkentésével), az egyensúly a **kisebb anyagmennyiségű (kevesebb gázmolekulájú) oldal** felé mozdul el.
- Ha az egyenlet két oldalán a gázmolekulák száma egyenlő, a nyomásváltozás nem befolyásolja az egyensúly helyzetét.

**4. Katalizátor hatása**
- A katalizátor **egyformán gyorsítja** az oda- és a visszaalakulást, ezért **nem mozdítja el az egyensúlyt**, csak gyorsabban éri el a rendszer az egyensúlyi állapotot.

## Ipari alkalmazás: az ammóniaszintézis (Haber–Bosch-eljárás)

$$N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad \\Delta H < 0$$

- Mivel a reakció **exoterm** és a bal oldalon **több** gázmolekula van (4 mol) mint a jobb oldalon (2 mol), a Le Chatelier-elv szerint a **magas nyomás** és az **alacsonyabb hőmérséklet** kedvezne a nagyobb NH₃-hozamnak.
- A gyakorlatban azonban **túl alacsony hőmérsékleten a reakció túl lassú lenne**, ezért egy **közepes hőmérsékletet** (kb. 400-500 °C) és **katalizátort** (vas-alapú) alkalmaznak, amely kompromisszumot jelent a hozam és a sebesség között.
`,
    key_concepts: [
      "dinamikus egyensúly",
      "egyensúlyi állandó (K)",
      "Le Chatelier-elv",
      "koncentráció, hőmérséklet és nyomás hatása",
      "Haber–Bosch-eljárás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a 'dinamikus egyensúly' fogalma egy megfordítható reakcióban?",
        options: [
          "Az oda- és visszaalakulás sebessége megegyezik, ezért a koncentrációk makroszkopikusan állandónak látszanak",
          "A reakció teljesen leállt, semmi nem történik",
          "Csak az egyik irányú reakció zajlik",
          "A reaktánsok koncentrációja folyamatosan nő",
        ],
        correct_answer: "Az oda- és visszaalakulás sebessége megegyezik, ezért a koncentrációk makroszkopikusan állandónak látszanak",
        explanation: "Dinamikus egyensúlyban mindkét irányú reakció folytonosan zajlik, de azonos sebességgel, így a koncentrációk nem változnak tovább.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik egy exoterm egyensúlyi reakcióval, ha a hőmérsékletet növeljük?",
        options: [
          "Az egyensúly a reaktánsok (endoterm irány) felé mozdul el",
          "Az egyensúly a produktumok felé mozdul el",
          "Az egyensúlyi állandó nem változik",
          "A reakció leáll",
        ],
        correct_answer: "Az egyensúly a reaktánsok (endoterm irány) felé mozdul el",
        explanation: "A Le Chatelier-elv szerint hőmérséklet-emelésre a rendszer az endoterm irányba (itt: a reaktánsok felé) mozdul el, hogy csökkentse a hőmérséklet-kényszert.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem mozdítja el az egyensúlyt a katalizátor hozzáadása?",
        options: [
          "Mert egyformán gyorsítja az oda- és a visszaalakulást is",
          "Mert a katalizátor csak endoterm reakciókra hat",
          "Mert a katalizátor megváltoztatja az egyensúlyi állandót",
          "Mert a katalizátor csak a reaktánsok koncentrációját növeli",
        ],
        correct_answer: "Mert egyformán gyorsítja az oda- és a visszaalakulást is",
        explanation: "A katalizátor mindkét irányú reakció aktiválási energiáját egyformán csökkenti, így csak az egyensúly elérésének sebességét növeli, a helyzetét nem.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A N₂(g) + 3H₂(g) ⇌ 2NH₃(g) egyensúlyi reakciónál a nyomás növelése (térfogat csökkentése) milyen irányba mozdítja el az egyensúlyt?",
        options: [
          "Az NH₃ (kevesebb gázmolekulát tartalmazó oldal) irányába",
          "Az N₂ és H₂ (több gázmolekulát tartalmazó oldal) irányába",
          "Nem befolyásolja az egyensúlyt",
          "Az egyensúlyi állandó nullára csökken",
        ],
        correct_answer: "Az NH₃ (kevesebb gázmolekulát tartalmazó oldal) irányába",
        explanation: "A bal oldalon 4 mol, a jobb oldalon 2 mol gázmolekula van; nyomásnövelésre a rendszer a kisebb gázmolekula-számú oldal felé mozdul el, hogy csökkentse a nyomást.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért alkalmaznak az ipari ammóniaszintézisnél (Haber–Bosch-eljárás) csak közepes hőmérsékletet, ha az alacsonyabb hőmérséklet a Le Chatelier-elv szerint nagyobb NH₃-hozamot adna?",
        options: [
          "Mert túl alacsony hőmérsékleten a reakció sebessége gazdaságilag elfogadhatatlanul lecsökkenne",
          "Mert alacsony hőmérsékleten az NH₃ elbomlana",
          "Mert a katalizátor csak magas hőmérsékleten aktív",
          "Mert az egyensúlyi állandó alacsony hőmérsékleten negatívvá válna",
        ],
        correct_answer: "Mert túl alacsony hőmérsékleten a reakció sebessége gazdaságilag elfogadhatatlanul lecsökkenne",
        explanation: "A hozam (egyensúly helyzete) és a sebesség (kinetika) között kompromisszumot kell találni: az ipari eljárás egy közepes hőmérsékletet és katalizátort használ elfogadható sebesség mellett is jó hozam elérésére.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "sav-bazis-reakciok-ph",
    title: "Sav-bázis reakciók, pH és indikátorok",
    level: "mindketto",
    theme: "Fizikai kémia",
    order_index: 11,
    summary_markdown:
      "A sav és bázis fogalmának Arrhenius- és Brønsted–Lowry-féle meghatározása, a pH-skála és számítása, valamint az indikátorok és a semlegesítési reakció.",
    content_markdown: `
## Sav-bázis elméletek

**Arrhenius-elmélet** (egyszerűbb, vízre korlátozott):
- **Sav**: vízben oldva H⁺-iont (pontosabban H₃O⁺-t, hidrónium-iont) képez. Pl. $HCl \\rightarrow H^+ + Cl^-$
- **Bázis**: vízben oldva OH⁻-iont képez. Pl. $NaOH \\rightarrow Na^+ + OH^-$

**Brønsted–Lowry-elmélet** (általánosabb, nem csak vizes oldatokra):
- **Sav**: proton- (H⁺-) leadó anyag.
- **Bázis**: proton- (H⁺-) felvevő anyag.
- Egy sav-bázis reakcióban mindig **konjugált sav-bázis pár** alakul ki, pl.:
$$HCl + H_2O \\rightleftharpoons H_3O^+ + Cl^-$$
itt a HCl a sav, a H₂O a bázis, a H₃O⁺ a H₂O konjugált savja, a Cl⁻ a HCl konjugált bázisa.

## Erős és gyenge savak/bázisok

- **Erős savak/bázisok**: vízben (közel) **teljesen disszociálnak** (pl. HCl, HNO₃, H₂SO₄, NaOH, KOH).
- **Gyenge savak/bázisok**: vízben csak **részlegesen disszociálnak**, egyensúlyi reakció áll be (pl. ecetsav CH₃COOH, ammónia NH₃, szénsav H₂CO₃).

## A víz autoprotolízise és a pH

A víz maga is enyhén disszociál: $H_2O \\rightleftharpoons H^+ + OH^-$, ennek egyensúlyi állandója (vízionszorzat) 25 °C-on:
$$K_v = [H^+][OH^-] = 10^{-14}$$

A **pH** a H⁺-ion koncentráció negatív, tízes alapú logaritmusa:
$$pH = -\\lg[H^+]$$

- **pH = 7**: neutrális (semleges) oldat (tiszta víz, 25 °C-on)
- **pH < 7**: savas oldat (minél kisebb a pH, annál savasabb)
- **pH > 7**: lúgos (bázikus) oldat (minél nagyobb a pH, annál lúgosabb)

A **pOH** hasonlóan definiálható: $pOH = -\\lg[OH^-]$, és $pH + pOH = 14$ (25 °C-on).

**Példa**: Mennyi a pH-ja egy 0,001 mol/dm³ koncentrációjú HCl-oldatnak (erős sav, teljesen disszociál)?
$$[H^+] = 0,001 = 10^{-3}\\ mol/dm^3 \\Rightarrow pH = -\\lg(10^{-3}) = 3$$

## Indikátorok

Az **indikátorok** olyan (gyakran organikus) anyagok, amelyek színe a közeg pH-jától (a H⁺-koncentrációtól) függően megváltozik, ezért felhasználhatók a savasság/lúgosság gyors, közelítő becslésére.

| Indikátor | Savas közegben | Lúgos közegben |
|---|---|---|
| Lakmusz | piros | kék |
| Fenolftalein | színtelen | rózsaszín/lila |
| Metilorange | piros | sárga |
| Univerzál indikátor | pH-tól függő színskála | pH-tól függő színskála |

## Semlegesítési (neutralizációs) reakció

Sav és bázis reakciója **sót és vizet** eredményez, ez exoterm reakció:
$$HCl + NaOH \\rightarrow NaCl + H_2O$$

Ionos szinten a lényeg a $H^+ + OH^- \\rightarrow H_2O$ folyamat. A semlegesítés a titrálás (mennyiségi sav-bázis meghatározás) alapja is, amelynél ismert koncentrációjú oldattal (pl. lúggal) határozzák meg egy ismeretlen koncentrációjú sav mennyiségét, indikátor színváltozásának (a "végpont" elérésének) segítségével.
`,
    key_concepts: [
      "Arrhenius- és Brønsted–Lowry-sav/bázis",
      "erős és gyenge sav/bázis",
      "pH = -lg[H⁺]",
      "vízionszorzat (Kv)",
      "indikátor",
      "semlegesítés",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "A Brønsted–Lowry-elmélet szerint mi a sav definíciója?",
        options: ["proton- (H⁺-) leadó anyag", "elektronleadó anyag", "OH⁻-iont felvevő anyag", "vízben oldódó anyag"],
        correct_answer: "proton- (H⁺-) leadó anyag",
        explanation: "A Brønsted–Lowry-elmélet szerint a sav proton- (H⁺-) donor, a bázis proton-akceptor.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi a pH-ja egy 0,01 mol/dm³ koncentrációjú erős sav (HCl) oldatnak?",
        options: ["2", "12", "0,01", "7"],
        correct_answer: "2",
        explanation: "[H+] = 10⁻² mol/dm³, pH = -lg(10⁻²) = 2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen színű a fenolftalein indikátor lúgos közegben?",
        options: ["rózsaszín/lila", "színtelen", "piros", "sárga"],
        correct_answer: "rózsaszín/lila",
        explanation: "A fenolftalein savas/neutrális közegben színtelen, lúgos közegben rózsaszínűre-lilára változik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy oldat pOH-ja 4. Mennyi a pH-ja, és az oldat savas vagy lúgos jellegű?",
        options: [
          "pH = 10, lúgos",
          "pH = 4, savas",
          "pH = 10, savas",
          "pH = 4, lúgos",
        ],
        correct_answer: "pH = 10, lúgos",
        explanation: "pH + pOH = 14, tehát pH = 14 - 4 = 10, ami 7-nél nagyobb, így az oldat lúgos.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nevezzük az ecetsavat (CH₃COOH) gyenge savnak, szemben a sósavval (HCl), amely erős sav?",
        options: [
          "Mert az ecetsav vízben csak részlegesen disszociál, egyensúlyi reakciót alakítva ki, míg a HCl közel teljesen disszociál",
          "Mert az ecetsav nem tartalmaz hidrogénatomot",
          "Mert az ecetsav lúgos kémhatású",
          "Mert az ecetsav nem old fel vízben",
        ],
        correct_answer: "Mert az ecetsav vízben csak részlegesen disszociál, egyensúlyi reakciót alakítva ki, míg a HCl közel teljesen disszociál",
        explanation: "A sav erőssége a disszociáció mértékétől függ: a gyenge savak csak részben disszociálnak, dinamikus egyensúlyt alakítva ki a disszociálatlan és disszociált forma között.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "redoxireakciok-alapjai",
    title: "Redoxireakciók alapjai",
    level: "mindketto",
    theme: "Fizikai kémia",
    order_index: 12,
    summary_markdown:
      "Az oxidáció és redukció fogalma elektronátadás alapján, az oxidációs szám meghatározása és változása, valamint a redoxiegyenletek felírásának alapjai.",
    content_markdown: `
## Oxidáció és redukció

A **redoxireakciók** olyan kémiai reakciók, amelyekben **elektronátadás** történik a részt vevő atomok/ionok között:

- **Oxidáció**: elektron**leadás** (az oxidációs szám nő). Pl. $Na \\rightarrow Na^+ + e^-$
- **Redukció**: elektron**felvétel** (az oxidációs szám csökken). Pl. $Cl_2 + 2e^- \\rightarrow 2Cl^-$

Oxidáció és redukció **mindig együtt** történik (egyik elektronja a másiknak "kell") — ezért nevezzük együttesen redoxireakciónak.

- **Oxidálószer**: az az anyag, amely **elektront vesz fel** (tehát maga redukálódik), és így más anyagot oxidál.
- **Redukálószer**: az az anyag, amely **elektront ad le** (tehát maga oxidálódik), és így más anyagot redukál.

## Az oxidációs szám

Az **oxidációs szám** azt a (formális) töltést jelöli, amelyet egy atom akkor kapna, ha a kötő elektronpárokat teljesen a nagyobb elektronegativitású atomnak "ítélnénk oda". Meghatározási szabályok:

- Szabad elemek atomjainak oxidációs száma **0** (pl. O₂, Fe, H₂).
- Egyatomos ion oxidációs száma megegyezik az ion töltésével (pl. Na⁺: +1, Cl⁻: −1).
- A hidrogén oxidációs száma vegyületeiben (majdnem) mindig **+1** (kivéve fém-hidrideknél, ahol −1).
- Az oxigén oxidációs száma vegyületeiben (majdnem) mindig **−2** (kivéve peroxidoknál, ahol −1).
- Egy semleges vegyületben az oxidációs számok összege **0**, egy ionban megegyezik az ion töltésével.

**Példa**: Mennyi a kén oxidációs száma a H₂SO₄-ben?
$$2\\times(+1) + x + 4\\times(-2) = 0 \\Rightarrow x = +6$$

## Redoxireakció felismerése

Egy reakció redoxireakció, ha legalább egy atom oxidációs száma **megváltozik** a reakció során. Példák:

- **Fémek reakciója savval**: $Zn + 2HCl \\rightarrow ZnCl_2 + H_2$ — a Zn oxidációs száma 0-ról +2-re nő (oxidálódik), a H oxidációs száma +1-ről 0-ra csökken (redukálódik).
- **Égés**: a tüzelőanyagban lévő szén és hidrogén oxidálódik, az oxigén redukálódik.
- **Korrózió (rozsdásodás)**: $4Fe + 3O_2 \\rightarrow 2Fe_2O_3$ — a vas oxidálódik (0 → +3), az oxigén redukálódik (0 → −2).

## Az elektronmérleg elve

A redoxiegyenletek rendezésénél alapelv, hogy a **leadott és a felvett elektronok száma megegyezzen** — ez az elektronmérleg (elektronegyenleg) elve, amely az egyenletrendezés (sztöchiometriai együtthatók meghatározásának) alapja bonyolultabb redoxireakcióknál is.

**Egyszerű példa**: $Fe^{2+} \\rightarrow Fe^{3+} + e^-$ (1 elektron leadás) és $Cl_2 + 2e^- \\rightarrow 2Cl^-$ (2 elektron felvétel) — az elektronmérleg kiegyenlítéséhez 2 mol Fe²⁺-ra van szükség 1 mol Cl₂-hez:
$$2Fe^{2+} + Cl_2 \\rightarrow 2Fe^{3+} + 2Cl^-$$

## Miért fontosak a redoxireakciók?

A redoxireakciók rendkívül elterjedtek: az égés, a légzés (sejtszintű oxidáció), a fémek korróziója, a fotoszintézis, és az elektrokémiai cellák (galvánelemek, elektrolízis) mind redoxireakciókon alapulnak.
`,
    key_concepts: [
      "oxidáció (elektronleadás)",
      "redukció (elektronfelvétel)",
      "oxidálószer és redukálószer",
      "oxidációs szám",
      "elektronmérleg elve",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az oxidáció fogalma redoxireakcióban?",
        options: ["elektronleadás, az oxidációs szám nő", "elektronfelvétel, az oxidációs szám csökken", "protonleadás", "protonfelvétel"],
        correct_answer: "elektronleadás, az oxidációs szám nő",
        explanation: "Az oxidáció elektronleadással jár, amely az oxidációs szám növekedését eredményezi.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi a kén oxidációs száma a SO₃-ban?",
        options: ["+6", "+4", "+2", "-2"],
        correct_answer: "+6",
        explanation: "Az oxigén oxidációs száma -2, három oxigén: -6. A semleges molekula összege 0, ezért a kén oxidációs száma +6.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A Zn + 2HCl → ZnCl₂ + H₂ reakcióban melyik anyag az oxidálószer?",
        options: ["HCl (a H⁺-ion)", "Zn", "ZnCl₂", "H₂"],
        correct_answer: "HCl (a H⁺-ion)",
        explanation: "A H⁺-ion veszi fel az elektront (redukálódik +1-ről 0-ra), így ez az oxidálószer; a Zn adja le az elektront (oxidálódik), ez a redukálószer.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért kell mindig együtt vizsgálni az oxidációt és a redukciót egy redoxireakcióban?",
        options: [
          "Mert az egyik részecske által leadott elektront egy másik részecskének fel kell vennie, elektron önmagában nem 'tűnhet el'",
          "Mert a redukció mindig gyorsabb, mint az oxidáció",
          "Mert az oxidáció és redukció mindig azonos anyagban történik",
          "Mert a redoxireakciók sosem járnak elektronátadással",
        ],
        correct_answer: "Mert az egyik részecske által leadott elektront egy másik részecskének fel kell vennie, elektron önmagában nem 'tűnhet el'",
        explanation: "Az elektronmegmaradás elve miatt minden leadott elektronnak van egy felvevője, ezért oxidáció és redukció elválaszthatatlanul együtt zajlik.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A 2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻ reakcióban hány elektront ad le összesen a vas, és hány elektront vesz fel a klór, hogy az elektronmérleg kiegyenlítve legyen?",
        options: [
          "2 elektront ad le a vas (2×1), és 2 elektront vesz fel a klór",
          "1 elektront ad le a vas, és 1 elektront vesz fel a klór",
          "2 elektront ad le a vas, és 1 elektront vesz fel a klór",
          "4 elektront ad le a vas, és 2 elektront vesz fel a klór",
        ],
        correct_answer: "2 elektront ad le a vas (2×1), és 2 elektront vesz fel a klór",
        explanation: "Egy Fe²⁺ 1 elektront ad le, két Fe²⁺ így 2-t; a Cl₂ molekula 2 elektront vesz fel (2 Cl⁻ keletkezéséhez), így az elektronmérleg kiegyenlített.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "elektrokemia-galvanelemek-elektrolizis",
    title: "Elektrokémia — galvánelemek és elektrolízis",
    level: "emelt",
    theme: "Fizikai kémia",
    order_index: 13,
    summary_markdown:
      "A galvánelemek (elsődleges/másodlagos telepek) és az elektrolízis működési elve, az anód/katód fogalma, valamint a Faraday-törvények alkalmazása elektrolízisnél.",
    content_markdown: `
## Elektrokémiai alapfogalmak: anód és katód

Minden elektrokémiai cellában (galvánelemben és elektrolízisnél is) két elektród van:

- **Anód**: ahol az **oxidáció** (elektronleadás) történik.
- **Katód**: ahol a **redukció** (elektronfelvétel) történik.

(Fontos: galvánelemben az anód a negatív, elektrolízisnél az anód a pozitív pólus — a definíció (oxidáció helye) viszont mindkét esetben azonos!)

## Galvánelem (elektrokémiai áramforrás)

A galvánelem egy **spontán (önként végbemenő) redoxireakció** kémiai energiáját alakítja **elektromos energiává**.

**Felépítés (pl. Daniell-elem)**:
- Egy **cink elektród** cink-szulfát oldatba merítve: itt oxidáció zajlik: $Zn \\rightarrow Zn^{2+} + 2e^-$ (ez az **anód**, negatív pólus)
- Egy **réz elektród** réz-szulfát oldatba merítve: itt redukció zajlik: $Cu^{2+} + 2e^- \\rightarrow Cu$ (ez a **katód**, pozitív pólus)
- A két oldatot **sóhidas** (elektrolitot tartalmazó cső) köti össze, amely biztosítja az ionok áramlását és a töltésegyensúlyt, míg a két elektródot külső fémes vezető (a terhelés/fogyasztó) köti össze, amelyen az elektronok áramlanak.
- Az elektronok a **külső áramkörön** az anódtól (Zn) a katódig (Cu) áramlanak — ez adja az elektromos áramot.

**Elsődleges (nem újratölthető) telepek**: pl. a hagyományos szárazelem (Zn–MnO₂ rendszer) — a reakció nem fordítható meg.

**Másodlagos (újratölthető) akkumulátorok**: pl. az ólomakkumulátor (autó-akkumulátor, Pb/PbO₂), lítium-ion akkumulátor — feltöltéskor a redoxireakció fordított irányban zajlik (itt elektromos energia hajtja a nem spontán irányú reakciót).

## Elektrolízis

Az elektrolízis a galvánelem "ellentéte": **külső elektromos áram** hatására megy végbe egy **nem spontán** redoxireakció, azaz elektromos energiából kémiai energia keletkezik.

- Az elektrolizáló cellába merített elektródokra **külső áramforrásból** kapcsolunk feszültséget.
- **Katód** (a külső áramforrás negatív pólusához kapcsolva): itt zajlik a **redukció** (pl. kationok redukciója, fémleválás vagy H₂-fejlődés).
- **Anód** (a külső áramforrás pozitív pólusához kapcsolva): itt zajlik az **oxidáció** (pl. anionok oxidációja, gázfejlődés, pl. O₂ vagy Cl₂).

**Példa: olvadt NaCl elektrolízise**
- Katódon: $Na^+ + e^- \\rightarrow Na$ (fémnátrium leválása)
- Anódon: $2Cl^- \\rightarrow Cl_2 + 2e^-$ (klórgáz fejlődése)

**Alkalmazások**: fémek előállítása/tisztítása (elektrolitos finomítás, pl. alumínium előállítása olvadt Al₂O₃-ból, réz elektrolitos tisztítása), galvanizálás (fémbevonat felvitele, pl. krómozás, aranyozás), víz elektrolízise (H₂ és O₂ előállítása).

## Faraday-törvényei

A Faraday-törvények mennyiségi összefüggést adnak az elektrolízis során átáramló elektromos töltés és a leváló/átalakuló anyag mennyisége között:

$$m = \\frac{M \\times I \\times t}{z \\times F}$$

ahol m a leválasztott anyag tömege, M a moláris tömege, I az áramerősség (A), t az idő (s), z az ion töltésszáma (az átvitt elektronok száma), F a Faraday-állandó (≈ 96 500 C/mol).

Ez azt fejezi ki, hogy a leváló anyag anyagmennyisége egyenesen arányos az átáramlott elektromos töltéssel (Q = I×t), és fordítottan arányos az ion töltésszámával.
`,
    key_concepts: [
      "anód (oxidáció) és katód (redukció)",
      "galvánelem",
      "elektrolízis",
      "akkumulátor és elsődleges telep",
      "Faraday-törvény",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi zajlik az anódon, elektrokémiai celláktól (galvánelem vagy elektrolízis) függetlenül?",
        options: ["oxidáció (elektronleadás)", "redukció (elektronfelvétel)", "semlegesítés", "hidrogénkötés kialakulása"],
        correct_answer: "oxidáció (elektronleadás)",
        explanation: "Az anód definíció szerint az az elektród, ahol oxidáció (elektronleadás) zajlik, mind galvánelemben, mind elektrolízisnél.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő különbség a galvánelem és az elektrolízis között?",
        options: [
          "A galvánelemben spontán redoxireakció termel elektromos áramot, elektrolízisnél külső áram hajt egy nem spontán reakciót",
          "A galvánelemben mindig fémek olvadnak meg, elektrolízisnél nem",
          "Az elektrolízisnél nincs elektronátadás",
          "A galvánelemben nincs anód és katód",
        ],
        correct_answer: "A galvánelemben spontán redoxireakció termel elektromos áramot, elektrolízisnél külső áram hajt egy nem spontán reakciót",
        explanation: "A galvánelem kémiai energiát elektromos energiává alakít spontán folyamattal, az elektrolízis pedig ennek megfordítottja: külső áram kényszerít ki egy nem spontán redoxireakciót.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy Daniell-elemben a cinkelektród miért az anód (negatív pólus)?",
        options: [
          "Mert itt zajlik az oxidáció: a Zn atomok elektront adnak le, Zn²⁺ ionokká alakulva",
          "Mert itt zajlik a redukció",
          "Mert a cink nagyobb elektronegativitású, mint a réz",
          "Mert a cink elektród mindig a pozitív pólus",
        ],
        correct_answer: "Mert itt zajlik az oxidáció: a Zn atomok elektront adnak le, Zn²⁺ ionokká alakulva",
        explanation: "A cink oxidálódik (Zn → Zn²⁺ + 2e⁻), az elektronokat leadva, ez teszi anóddá és negatív pólussá a galvánelemben.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Olvadt NaCl elektrolízisénél mi történik a katódon és az anódon?",
        options: [
          "Katódon Na fémmé redukálódik a Na⁺, anódon Cl₂ gázzá oxidálódik a Cl⁻",
          "Katódon Cl₂ keletkezik, anódon Na fém",
          "Mindkét elektródon Na fém keletkezik",
          "Mindkét elektródon Cl₂ gáz keletkezik",
        ],
        correct_answer: "Katódon Na fémmé redukálódik a Na⁺, anódon Cl₂ gázzá oxidálódik a Cl⁻",
        explanation: "A katódon (redukció) a Na⁺ elektront vesz fel és fémmé redukálódik, az anódon (oxidáció) a Cl⁻ elektront ad le és Cl₂ gázzá alakul.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Egy elektrolízis során 2 A áramerősséggel 965 másodpercig elektrolizálunk egy Ag⁺-tartalmú oldatot (z=1, M(Ag)=108 g/mol, F=96500 C/mol). Kb. hány gramm ezüst válik le a katódon?",
        options: ["kb. 2,16 g", "kb. 1,08 g", "kb. 4,32 g", "kb. 0,5 g"],
        correct_answer: "kb. 2,16 g",
        explanation: "Q = I×t = 2×965 = 1930 C. m = M×Q/(z×F) = 108×1930/(1×96500) = 2,16 g.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "hidrogen-es-nemesgazok",
    title: "Hidrogén és a nemesgázok",
    level: "mindketto",
    theme: "Szervetlen kémia",
    order_index: 14,
    summary_markdown:
      "A hidrogén sajátos helyzete a periódusos rendszerben, előállítási módjai, jellemző reakciói, valamint a nemesgázok stabil elektronszerkezete és korlátozott reakciókészsége.",
    content_markdown: `
## A hidrogén sajátos helyzete

A hidrogén (H, Z=1) a legkönnyebb és leggyakoribb elem a világegyetemben, ugyanakkor a periódusos rendszerben nehezen elhelyezhető: egyetlen elektronja miatt hasonlíthat az alkálifémekhez (1 vegyértékelektron), de a nemfémekhez is (egy elektron felvételével nemesgázszerkezetet érhet el, mint a halogének).

- Szobahőmérsékleten színtelen, szagtalan, kétatomos molekulákból (H₂) álló gáz, vízben rosszul oldódik.
- Legkönnyebb elem, sűrűsége igen kicsi.

## A hidrogén előállítása

- **Iparilag**: metán (földgáz) és víz reakciója (gőz-reformálás): $CH_4 + 2H_2O \\rightarrow CO_2 + 4H_2$ (magas hőmérsékleten, katalizátorral)
- **Laboratóriumban**: fémek (pl. cink) reakciója savval: $Zn + 2HCl \\rightarrow ZnCl_2 + H_2$
- **Víz elektrolízisével**: $2H_2O \\rightarrow 2H_2 + O_2$ (elektromos áram hatására)

## A hidrogén reakciói

- **Égés**: $2H_2 + O_2 \\rightarrow 2H_2O$, erősen exoterm reakció, "durranógáz"-reakció néven is ismert, ha H₂ és O₂ (vagy levegő) keveréke gyullad meg.
- **Fémekkel**: aktív fémekkel (pl. Na, Ca) hidrideket képez, amelyekben a hidrogén oxidációs száma **−1** (pl. NaH).
- **Nemfémekkel**: pl. nitrogénnel ammóniát képez ($N_2 + 3H_2 \\rightarrow 2NH_3$, Haber–Bosch-eljárás), halogénekkel hidrogén-halogenideket (pl. $H_2 + Cl_2 \\rightarrow 2HCl$).
- **Redukálószerként**: sok fémoxidot fémmé redukál magas hőmérsékleten (pl. $CuO + H_2 \\rightarrow Cu + H_2O$) — ipari alkalmazás fémek előállításánál.

## Felhasználás

Üzemanyagcellák (jövőbeli "hidrogén-gazdaság" alapja), margaringyártás (zsírok hidrogénezése), ammóniaszintézis, rakétahajtóanyag (folyékony H₂ + O₂).

## A nemesgázok (VIII. főcsoport / 18. csoport)

A nemesgázok (He, Ne, Ar, Kr, Xe, Rn) a periódusos rendszer legjobboldali csoportját alkotják:

- **Elektronszerkezetük telített** (a legkülső héjukon 8 elektron, He esetén 2), ezért **kémiailag rendkívül kevés reakciókészségűek** ("inert" gázok) — ez az egyetlen olyan csoport, amelynek elemei egyatomos gázmolekulaként (nem kétatomos molekulaként) léteznek.
- Színtelenek, szagtalanok, szobahőmérsékleten mind gáz halmazállapotúak, nagyon alacsony az olvadási/forráspontjuk (csak diszperziós erő hat közöttük).
- Sokáig azt hitték, egyáltalán nem képezhetnek vegyületet, de a nagyobb, könnyebben polarizálható elektronfelhőjű, nagyobb nemesgázoknál (Kr, Xe, Rn) sikerült néhány vegyületet előállítani (pl. XeF₂, XeF₄) igen erős oxidálószerekkel (pl. F₂-vel), extrém körülmények között.

## Felhasználás

- **Hélium (He)**: léghajók, ballonok töltése (nem gyúlékony, ellentétben a hidrogénnel), mélyhűtés (folyékony He, szupravezetők hűtésére).
- **Neon (Ne)**: fényreklámok ("neonfény", jellegzetes vörös-narancs fény).
- **Argon (Ar)**: izzólámpák töltőgáza (inert közeg, nem reagál a wolfram szállal), hegesztésnél védőgáz.
`,
    key_concepts: [
      "hidrogén előállítása",
      "hidrogén redukálószer szerepe",
      "nemesgázok telített elektronszerkezete",
      "inert gáz",
      "nemesgáz-vegyületek (XeF₂)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért nehéz a hidrogént egyértelműen elhelyezni a periódusos rendszerben?",
        options: [
          "Mert egyetlen vegyértékelektronja miatt hasonlíthat az alkálifémekhez is, de egy elektron felvételével nemesgázszerkezetet is elérhet, mint a halogének",
          "Mert nincs elektronja",
          "Mert csak vízben létezik",
          "Mert a legnehezebb elem",
        ],
        correct_answer: "Mert egyetlen vegyértékelektronja miatt hasonlíthat az alkálifémekhez is, de egy elektron felvételével nemesgázszerkezetet is elérhet, mint a halogének",
        explanation: "A hidrogén egyetlen elektronja miatt kettős jellegű: hasonló az alkálifémekhez (1 vegyértékelektron), de a halogénekhez is (egy elektronnal telítheti héját).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kémiailag kevéssé reakcióképesek a nemesgázok?",
        options: [
          "Mert elektronszerkezetük telített (8, He esetén 2 vegyértékelektron), így nincs szükségük további elektron leadására/felvételére",
          "Mert nincs elektronjuk",
          "Mert mindig szilárd halmazállapotúak",
          "Mert ionos kötést alkotnak egymással",
        ],
        correct_answer: "Mert elektronszerkezetük telített (8, He esetén 2 vegyértékelektron), így nincs szükségük további elektron leadására/felvételére",
        explanation: "A telített, stabil elektronszerkezet miatt a nemesgázoknak nincs 'hajtóerejük' kémiai kötés kialakítására, ezért rendkívül kevés reakciókészségűek.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Melyik reakció írja le helyesen a hidrogén ipari előállítását metánból (gőz-reformálás)?",
        options: [
          "CH₄ + 2H₂O → CO₂ + 4H₂",
          "CH₄ + O₂ → CO₂ + 2H₂O",
          "2H₂O → 2H₂ + O₂",
          "Zn + 2HCl → ZnCl₂ + H₂",
        ],
        correct_answer: "CH₄ + 2H₂O → CO₂ + 4H₂",
        explanation: "Az ipari gőz-reformálás során metán és vízgőz reagál magas hőmérsékleten, katalizátor jelenlétében, széndioxidot és hidrogént termelve.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért használnak héliumot léghajókban és ballonokban a gyúlékony hidrogén helyett, jóllehet a hidrogén könnyebb és nagyobb felhajtóerőt adna?",
        options: [
          "Mert a hélium kémiailag inert, nem gyúlékony, így biztonságosabb, míg a hidrogén levegővel robbanásveszélyes keveréket alkothat",
          "Mert a hélium nehezebb, mint a hidrogén",
          "Mert a hidrogén mérgező gáz",
          "Mert a hélium olcsóbban előállítható, mint a hidrogén",
        ],
        correct_answer: "Mert a hélium kémiailag inert, nem gyúlékony, így biztonságosabb, míg a hidrogén levegővel robbanásveszélyes keveréket alkothat",
        explanation: "A hidrogén levegővel (oxigénnel) durranógáz-keveréket képezhet, amely könnyen berobban, ezért a nem gyúlékony, inert hélium biztonságosabb választás, jóllehet kisebb felhajtóerőt ad.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért sikerült a nagyobb nemesgázoknál (pl. Xe) vegyületeket (pl. XeF₂) előállítani, míg a héliumnál és a neonnál eddig nem?",
        options: [
          "Mert a nagyobb nemesgázok elektronfelhője lazábban kötött és könnyebben polarizálható, ezért erős oxidálószerekkel reakcióba léphet",
          "Mert a xenon nem nemesgáz",
          "Mert a xenon több protonnal rendelkezik, mint amennyi elektronja van",
          "Mert a hélium és a neon radioaktívak",
        ],
        correct_answer: "Mert a nagyobb nemesgázok elektronfelhője lazábban kötött és könnyebben polarizálható, ezért erős oxidálószerekkel reakcióba léphet",
        explanation: "A nagyobb rendszámú nemesgázoknál a legkülső elektronok távolabb vannak a magtól és gyengébben kötöttek, ezért extrém körülmények között, igen erős oxidálószerekkel (pl. F₂) reakcióba vihetők.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "halogenek-es-vegyuleteik",
    title: "Halogének és vegyületeik",
    level: "mindketto",
    theme: "Szervetlen kémia",
    order_index: 15,
    summary_markdown:
      "A halogének (F, Cl, Br, I) csoportjellemzői, reakciókészségük trendje, a hidrogén-halogenidek és a legfontosabb halogénvegyületek (pl. klór, sósav, kloridok) tulajdonságai és felhasználása.",
    content_markdown: `
## A halogének csoportja (VII. főcsoport / 17. csoport)

A halogének (fluor F, klór Cl, bróm Br, jód I, asztácium At) a periódusos rendszer 17. csoportjának elemei, közös jellemzőjük, hogy **7 vegyértékelektronnal** rendelkeznek — egyetlen elektron felvételével nemesgázszerkezetet érhetnek el, ezért **erős oxidálószerek** és nagy reakciókészségűek.

## Fizikai tulajdonságok és trendek

| Elem | Halmazállapot (szobahőm.) | Szín |
|---|---|---|
| F₂ | gáz | sárgászöld |
| Cl₂ | gáz | sárgászöld/zöldessárga |
| Br₂ | folyékony | vörösbarna |
| I₂ | szilárd | fekete-lila, szublimál |

A csoportban lefelé haladva **nő** a molekulatömeg és az olvadási/forráspont (erősebb diszperziós erők), és **csökken** az elektronegativitás, az oxidálóképesség és a reakciókészség (F₂ > Cl₂ > Br₂ > I₂ oxidálóképesség szerint).

## Kémiai jellemzők

- Mind kétatomos molekulákat (X₂) alkotnak, apoláris kovalens kötéssel.
- **Kiszorítási sor**: az erősebb oxidálószer halogén kiszorítja a gyengébbet a sójából, pl. $Cl_2 + 2NaBr \\rightarrow 2NaCl + Br_2$ (a klór oxidálja a bromidiont, miközben ő maga redukálódik).
- Fémekkel közvetlenül ionos vegyületeket (halogenideket) képeznek, pl. $2Na + Cl_2 \\rightarrow 2NaCl$.
- Hidrogénnel hidrogén-halogenideket képeznek: $H_2 + Cl_2 \\rightarrow 2HCl$.

## Hidrogén-halogenidek és a halogén-hidrogénsavak

A hidrogén-halogenidek (HF, HCl, HBr, HI) vízben oldva savakat képeznek:

- **HCl (hidrogén-klorid, gáz) → sósav (vizes oldata)**: erős sav, teljesen disszociál. Ipari és laboratóriumi felhasználása igen elterjedt (fémek marására, pH-beállításra, a gyomorsav is HCl-t tartalmaz).
- **HF (hidrogén-fluorid) → hidrogén-fluorid-sav**: gyenge sav (kivételes a halogénhidrogén-savak között), de rendkívül veszélyes és korrozív, mert az üveget (SiO₂) is megtámadja: $SiO_2 + 4HF \\rightarrow SiF_4 + 2H_2O$.
- A sav erőssége a csoportban lefelé haladva **nő**: HF < HCl < HBr < HI (a H–X kötés gyengülése miatt könnyebben disszociál).

## Fontos vegyületek és felhasználásuk

- **Klór (Cl₂)**: ivóvíz fertőtlenítése, uszodák klórozása, PVC és számos műanyag alapanyaga, fehérítés.
- **Nátrium-klorid (NaCl, konyhasó)**: nélkülözhetetlen élettani szerep, élelmiszertartósítás, klóralkáli-elektrolízis alapanyaga (Cl₂, NaOH és H₂ ipari előállítása).
- **Jód (I₂)**: fertőtlenítő oldatok (jódtinktúra), a pajzsmirigyhormonok (tiroxin) építőköve — jódhiány esetén golyva alakulhat ki, ezért jódozzák a konyhasót.
- **Fluor vegyületei**: fogkrémek fluoridtartalma (fogzománc-erősítés), hűtőközegek (freonok, ma már erősen korlátozottan használt vegyületek az ózonréteg védelme miatt).

## A halogének biológiai jelentősége

A klorid-ion (Cl⁻) létfontosságú a sejtek ozmotikus egyensúlyában és az idegműködésben, a jód a pajzsmirigyhormonok elengedhetetlen alkotórésze — ezért mindkettő nélkülözhetetlen a szervezet számára, megfelelő (nem túlzott) mennyiségben.
`,
    key_concepts: [
      "halogének (VII. főcsoport)",
      "oxidálóképesség trendje (F₂ > Cl₂ > Br₂ > I₂)",
      "kiszorítási sor",
      "hidrogén-halogenidek savereje",
      "klóralkáli-elektrolízis",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hogyan változik a halogének oxidálóképessége a csoportban lefelé haladva?",
        options: ["Csökken (F₂ a legerősebb oxidálószer)", "Nő", "Nem változik", "Csak a jódnál van oxidálóképesség"],
        correct_answer: "Csökken (F₂ a legerősebb oxidálószer)",
        explanation: "A csoportban lefelé haladva csökken az elektronegativitás és az oxidálóképesség, ezért F₂ > Cl₂ > Br₂ > I₂ az oxidálóerősség sorrendje.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen halmazállapotú a bróm (Br₂) szobahőmérsékleten?",
        options: ["folyékony", "gáz", "szilárd", "plazma"],
        correct_answer: "folyékony",
        explanation: "A halogének közül egyedül a bróm folyékony szobahőmérsékleten (vörösbarna, illó folyadék).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A Cl₂ + 2NaBr → 2NaCl + Br₂ reakcióban miért szorítja ki a klór a brómot a nátrium-bromidból?",
        options: [
          "Mert a klór erősebb oxidálószer, mint a bróm, ezért képes elektront elvonni a bromidiontól",
          "Mert a klór nagyobb atomrádiuszú, mint a bróm",
          "Mert a klór gyengébb oxidálószer, mint a bróm",
          "Mert a nátrium reagál a klórral",
        ],
        correct_answer: "Mert a klór erősebb oxidálószer, mint a bróm, ezért képes elektront elvonni a bromidiontól",
        explanation: "A halogének oxidálóképessége a csoportban felfelé nő, így a klór (erősebb oxidálószer) kiszorítja a gyengébb oxidálószer brómot a sójából.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért kivételes a hidrogén-fluorid (HF) a hidrogén-halogenidek sorában abból a szempontból, hogy milyen erősségű savat képez vízben?",
        options: [
          "A HF gyenge sav, míg a többi hidrogén-halogenid (HCl, HBr, HI) erős sav",
          "A HF erős sav, míg a többi gyenge sav",
          "A HF nem old vízben",
          "A HF nem képez savat vízben",
        ],
        correct_answer: "A HF gyenge sav, míg a többi hidrogén-halogenid (HCl, HBr, HI) erős sav",
        explanation: "A H-F kötés viszonylag erős (rövid, poláris kötés), ezért a HF csak részlegesen disszociál vízben, gyenge savként viselkedve, míg a nagyobb halogénatomú HCl, HBr, HI erős savak.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért kell jódozni a konyhasót sok országban, közegészségügyi okokból?",
        options: [
          "Mert a jód a pajzsmirigyhormonok elengedhetetlen alkotórésze, és hiánya golyva kialakulásához vezethet",
          "Mert a jód javítja a só ízét",
          "Mert a jód tartósítja az élelmiszert",
          "Mert a jód szükséges a fogzománc erősítéséhez",
        ],
        correct_answer: "Mert a jód a pajzsmirigyhormonok elengedhetetlen alkotórésze, és hiánya golyva kialakulásához vezethet",
        explanation: "A jód nélkülözhetetlen a pajzsmirigyhormonok (pl. tiroxin) felépítéséhez; a jódhiányos táplálkozás golyva és egyéb pajzsmirigy-problémák kialakulásának kockázatát növeli, ezért jódozzák a sót.",
        difficulty: 2,
      },
    ],
  },
];
