import type { TopicSeed } from "./angol";

export const biologiaGenetikaEvolucioEkologiaTopics: TopicSeed[] = [
  {
    slug: "genetika-alapjai-mendel-torvenyei",
    title: "Genetika alapjai — Mendel törvényei",
    level: "mindketto",
    theme: "Öröklődés",
    order_index: 25,
    summary_markdown:
      "Gregor Mendel borsónövényeken végzett keresztezési kísérletei alapozták meg a klasszikus genetikát: törvényei írják le, hogyan öröklődnek a jellegek a szülőktől az utódokra diszkrét, egymástól függetlenül szétváló öröklődési egységek (gének) formájában.",
    content_markdown: `
## Alapfogalmak

A **genetika** az öröklődéssel és a variabilitással foglalkozó tudományág. Egy adott tulajdonságot (pl. a borsó magszíne) egy **gén** határoz meg, amelynek több változata, **allélje** lehet (pl. sárga vagy zöld magszínt meghatározó allél). Az egyed egy adott génre nézve lehet **homozigóta** (a két allélja azonos, pl. AA vagy aa) vagy **heterozigóta** (a két allélja különböző, pl. Aa). A **genotípus** az egyed öröklött allélkombinációja, a **fenotípus** ennek ténylegesen megnyilvánuló, látható formája (amelyet a genotípus és a környezet együtt alakít ki). Ha egy heterozigóta egyedben csak az egyik allél hatása látszik a fenotípuson, azt **domináns** (jelölése nagybetű, pl. A), a "elnyomott" hatásút **recesszív** allélnek nevezzük (jelölése kisbetű, pl. a) — a recesszív tulajdonság csak homozigóta recesszív állapotban (aa) jelenik meg.

## Mendel kísérletei

Gregor Mendel (1822–1884) morva szerzetes a XIX. század közepén **kerti borsón (Pisum sativum)** végzett szisztematikus keresztezési kísérleteket. A borsót azért választotta, mert gyorsan szaporodik, sok, jól elkülöníthető, kétféle formában megjelenő tulajdonsága van (pl. sárga/zöld mag, sima/ráncos mag, magas/alacsony szár), és önmegporzó, így a szülői vonalak (P generáció) fajtatisztán (tisztán öröklődő, homozigóta) tarthatók fenn.

## Az uniformitás és a hasadás törvénye (egygénes öröklődés)

Amikor Mendel két, egyetlen tulajdonságban különböző, fajtatiszta szülőt (pl. sárga × zöld magvú borsó) keresztezett, az első utódnemzedék (**F1**) minden egyede egyforma volt, és csak a domináns tulajdonságot mutatta (**az uniformitás törvénye**, azaz az I. Mendel-törvény). Amikor az F1 egyedeket egymással keresztezte (önmegporozta), a második nemzedékben (**F2**) mindkét tulajdonság újra megjelent, jellegzetesen **3:1 arányban** (domináns : recesszív fenotípus) — ez **a szétválás (hasadás) törvénye**, azaz a II. Mendel-törvény: a szülőktől kapott allélpárok az ivarsejt-képzés (meiózis) során egymástól függetlenül szétválnak, majd az utódokban véletlenszerűen újra párba állnak.

### Példa Punnett-négyzettel (Aa × Aa keresztezés)

|   | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

Genotípus-arány: 1 AA : 2 Aa : 1 aa. Fenotípus-arány (A domináns esetén): 3 domináns : 1 recesszív.

## A függetlenségi (kombinálódási) törvény

Amikor Mendel egyszerre két tulajdonságban különböző szülőket (pl. sárga-sima × zöld-ráncos mag) keresztezett (**dihibrid keresztezés**), az F2 nemzedékben a két tulajdonság egymástól **függetlenül** kombinálódott, jellegzetesen **9:3:3:1** fenotípus-arányt eredményezve. Ez a **III. Mendel-törvény (a független öröklődés törvénye)**: a különböző génpárok — ha különböző kromoszómákon helyezkednek el — egymástól függetlenül öröklődnek a meiózis során. (Fontos kiegészítés, amit Mendel korában még nem ismertek: az azonos kromoszómán, egymáshoz közel elhelyezkedő gének, az ún. **kapcsolt gének**, nem szabadon, hanem együtt öröklődnek, kivéve ha crossing over választja el őket.)

## Egyéb öröklődési mintázatok

A valóságban sok jelleg öröklődése ennél összetettebb:
- **Intermedier öröklődés**: a heterozigóta fenotípusa a két homozigóta szülő fenotípusa közötti, átmeneti jelleget mutat (pl. piros × fehér csodatölcsér keresztezéséből rózsaszín utód).
- **Kodominancia**: mindkét allél önállóan, egyszerre megnyilvánul a heterozigótában (pl. az AB vércsoport, ahol az A és B allél is kifejeződik).
- **Többallélos öröklődés**: egy génnek kettőnél több allélváltozata is lehet a populációban (pl. az ABO vércsoport-rendszer három allélje: I^A, I^B, i).

## Mendel törvényeinek jelentősége

Mendel munkássága (1865-ben publikálva) megalapozta a genetikát mint tudományt, bár jelentőségét kortársai csak halála után, a XX. század elején (1900 körül, De Vries, Correns és Tschermak újrafelfedezése nyomán) ismerték fel. Törvényei ma is az emberi öröklődés (pl. családfaelemzés, genetikai tanácsadás) alapját képezik.
`,
    key_concepts: [
      "gén, allél, genotípus, fenotípus",
      "domináns-recesszív öröklődés",
      "uniformitás és hasadás törvénye (3:1 arány)",
      "függetlenségi törvény (9:3:3:1 arány)",
      "Punnett-négyzet",
      "intermedier öröklődés, kodominancia",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az, hogy egy egyed heterozigóta egy adott génre nézve?",
        options: [
          "A két allélja különböző (pl. Aa)",
          "A két allélja azonos (pl. AA)",
          "Csak egyetlen allélt hordoz",
          "A génje egyáltalán nem fejeződik ki",
        ],
        correct_answer: "A két allélja különböző (pl. Aa)",
        explanation:
          "A heterozigóta egyed az adott génre nézve két különböző allélt hordoz (pl. egy domináns A-t és egy recesszív a-t), szemben a homozigótával, ahol a két allél megegyezik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen fenotípus-arány jellemző az F2 nemzedékben egy egygénes (Aa × Aa) keresztezés esetén?",
        options: ["3:1 (domináns : recesszív)", "1:1", "9:3:3:1", "1:2:1"],
        correct_answer: "3:1 (domináns : recesszív)",
        explanation:
          "Az Aa × Aa keresztezésből 1 AA : 2 Aa : 1 aa genotípus-arány adódik, ami fenotípusban 3 domináns : 1 recesszív arányt jelent, mivel az AA és az Aa egyaránt a domináns fenotípust mutatja.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért volt a borsó (Pisum sativum) ideális kísérleti alany Mendel számára?",
        options: [
          "Gyorsan szaporodik, jól elkülöníthető tulajdonságai vannak, és önmegporzóként fajtatiszta vonalak tarthatók fenn",
          "Mert a borsó ivartalanul szaporodik",
          "Mert a borsónak nincsenek megfigyelhető tulajdonságai",
          "Mert a borsó genomja rendkívül kicsi és egygénes",
        ],
        correct_answer: "Gyorsan szaporodik, jól elkülöníthető tulajdonságai vannak, és önmegporzóként fajtatiszta vonalak tarthatók fenn",
        explanation:
          "A borsó gyors életciklusa, könnyen megkülönböztethető tulajdonságpárjai és az önmegporzásból adódó fajtatiszta (homozigóta) szülővonalak tették lehetővé Mendel számára a szisztematikus, jól kiértékelhető keresztezési kísérleteket.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a lényege a függetlenségi (III.) Mendel-törvénynek?",
        options: [
          "A különböző kromoszómákon elhelyezkedő génpárok egymástól függetlenül öröklődnek a meiózis során",
          "Minden gén mindig ugyanazon a kromoszómán helyezkedik el",
          "A domináns allél mindig elnyomja a recesszívet minden nemzedékben véglegesen",
          "Az allélpárok sosem válnak szét a meiózis során",
        ],
        correct_answer: "A különböző kromoszómákon elhelyezkedő génpárok egymástól függetlenül öröklődnek a meiózis során",
        explanation:
          "A III. Mendel-törvény szerint két (vagy több), különböző kromoszómán lévő génpár egymástól függetlenül rendeződik az ivarsejtekbe, ez okozza a dihibrid keresztezés jellegzetes 9:3:3:1 F2-arányát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nem érvényesül a szabad kombinálódás elve két olyan gén esetén, amelyek ugyanazon a kromoszómán, egymáshoz közel helyezkednek el?",
        options: [
          "Mert ezek a kapcsolt gének jellemzően együtt öröklődnek, kivéve ha crossing over elválasztja őket",
          "Mert a kapcsolt gének sosem fejeződnek ki",
          "Mert az ilyen gének mindig recesszívek",
          "Mert a kapcsolt gének kizárólag az X-kromoszómán helyezkedhetnek el",
        ],
        correct_answer: "Mert ezek a kapcsolt gének jellemzően együtt öröklődnek, kivéve ha crossing over elválasztja őket",
        explanation:
          "Az azonos kromoszómán elhelyezkedő, egymáshoz közeli gének fizikailag össze vannak kapcsolva, ezért nem szabadon, hanem együtt (kapcsoltan) öröklődnek, hacsak a meiózis során bekövetkező crossing over (kromoszómadarab-csere) szét nem választja őket — ezt Mendel korában még nem ismerték.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "molekularis-genetika-dns-rns-feherjeszintezis",
    title: "Molekuláris genetika — DNS, RNS, fehérjeszintézis",
    level: "emelt",
    theme: "Öröklődés",
    order_index: 26,
    summary_markdown:
      "A DNS az öröklődés molekuláris hordozója, amelynek bázissorrendje kódolja a fehérjéket meghatározó információt; ez a genetikai információ a transzkripció és a transzláció (fehérjeszintézis) két lépésén keresztül valósul meg a sejtben.",
    content_markdown: `
## A DNS szerkezete

A **DNS (dezoxiribonukleinsav)** két, egymással ellentétes irányú (**antiparallel**) polinukleotid-szálból álló **kettős hélix** (Watson és Crick, 1953). Minden nukleotid három részből áll: **dezoxiribóz cukor**, **foszfátcsoport** és egy **nitrogéntartalmú bázis** — ez utóbbi négyféle lehet: **adenin (A)**, **timin (T)**, **guanin (G)**, **citozin (C)**. A két szálat a bázisok közötti **hidrogénkötések** kapcsolják össze a **komplementaritás szabálya** szerint: A mindig T-vel (2 hidrogénkötés), G mindig C-vel (3 hidrogénkötés) párosodik. Ez a szigorú párosodás teszi lehetővé a DNS pontos **replikációját (megkettőződését)**: a két szál szétválik, és mindegyik mintaként szolgál egy-egy új, komplementer szál felépítéséhez (**szemikonzervatív replikáció** — minden utód-DNS-molekula egy régi és egy új szálból áll).

## Az RNS és típusai

Az **RNS (ribonukleinsav)** egyszálú, cukorkomponense **ribóz**, és a timin helyett **uracilt (U)** tartalmazza bázisként. Három fő típusa vesz részt a fehérjeszintézisben:

| RNS-típus | Funkció |
|---|---|
| **mRNS** (hírvivő) | a DNS genetikai információját másolja és szállítja a riboszómához |
| **tRNS** (szállító) | aminosavakat szállít a riboszómához, antikodonja felismeri a kodont |
| **rRNS** (riboszómális) | a riboszóma szerkezeti-funkcionális alkotóeleme |

## A genetikai kód

A DNS/mRNS bázissorrendje hárombetűs egységekben, **kodonokban** kódolja az aminosavakat (**triplet kód**): 4 bázisból képzett 3 hosszú kombinációk száma 4³ = 64 lehetséges kodon, ezek a 20-féle aminosavat kódolják — a kód tehát **degenerált (többértelmű)**, azaz több kodon is kódolhatja ugyanazt az aminosavat. Három kodon (pl. UAA, UAG, UGA) nem aminosavat kódol, hanem **stop kodonként** jelzi a fehérjeszintézis végét, az AUG (metionin) jellemzően **start kodonként** is szolgál. A genetikai kód **univerzális**: az élővilág szinte minden szervezetében ugyanazt jelenti egy adott kodon — ez az élővilág közös eredetének (evolúciós rokonságának) egyik erős bizonyítéka.

## A transzkripció (átírás)

A fehérjeszintézis első lépése a sejtmagban zajlik: az **RNS-polimeráz** enzim a DNS egyik szálát (mintaszál) használva, azzal komplementer **mRNS-t** szintetizál. Az eukarióta sejtekben az így keletkező elsődleges RNS-átiratból még ki kell vágni a fehérjét nem kódoló szakaszokat (**intronok**), és összeilleszteni a kódoló szakaszokat (**exonok**) — ezt a folyamatot **splicingnak (RNS-érésnek)** nevezzük. Az érett mRNS ezután a sejtmagból a citoplazmába jut.

## A transzláció (fordítás)

A citoplazmában a **riboszómán** zajlik a fehérjeszintézis második lépése: a **tRNS** molekulák — antikodonjukkal a mRNS kodonjaihoz komplementer módon kapcsolódva — sorban a megfelelő aminosavakat szállítják a riboszómához, ahol azok **peptidkötéssel** kapcsolódnak egymáshoz, kialakítva a fehérje **polipeptidláncát**. A folyamat a start kodonnál kezdődik és a stop kodonnál ér véget, amikor a kész fehérjelánc leválik a riboszómáról.

## A "génexpresszió központi dogmája"

Az információáramlás jellemző iránya a sejtben: **DNS → (transzkripció) → RNS → (transzláció) → fehérje**. Ezt nevezzük a molekuláris biológia **központi dogmájának** — bár ismertek kivételek is (pl. egyes vírusoknál a **reverz transzkripció**, amikor RNS-ről íródik át DNS).
`,
    key_concepts: [
      "DNS kettős hélix és komplementaritás (A-T, G-C)",
      "szemikonzervatív replikáció",
      "mRNS, tRNS, rRNS szerepe",
      "genetikai kód (kodon, univerzalitás, degeneráltság)",
      "transzkripció és transzláció",
      "intron, exon, splicing",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik bázispár jellemzi a DNS kettős hélixét?",
        options: ["adenin-timin és guanin-citozin", "adenin-guanin és timin-citozin", "adenin-uracil és guanin-citozin", "timin-citozin és adenin-guanin"],
        correct_answer: "adenin-timin és guanin-citozin",
        explanation:
          "A DNS-ben a komplementaritás szabálya szerint az adenin mindig a timinnel (2 hidrogénkötéssel), a guanin mindig a citozinnal (3 hidrogénkötéssel) párosodik; az uracil csak az RNS-ben, a timin helyett fordul elő.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol zajlik a transzkripció (az mRNS szintézise) eukarióta sejtben?",
        options: ["a sejtmagban", "a citoplazmában, a riboszómán", "a mitokondriumban kizárólag", "a sejtmembránban"],
        correct_answer: "a sejtmagban",
        explanation:
          "A transzkripció a sejtmagban zajlik, ahol az RNS-polimeráz a DNS mintaszála alapján mRNS-t szintetizál; az érett mRNS ezután jut ki a citoplazmába a transzlációhoz.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a tRNS szerepe a fehérjeszintézisben?",
        options: [
          "Antikodonja révén felismeri az mRNS kodonját, és a megfelelő aminosavat szállítja a riboszómához",
          "A DNS-ről közvetlenül másolja a genetikai információt a sejtmagban",
          "A riboszóma szerkezeti alapját alkotja",
          "Kizárólag a splicing folyamatában vesz részt",
        ],
        correct_answer: "Antikodonja révén felismeri az mRNS kodonját, és a megfelelő aminosavat szállítja a riboszómához",
        explanation:
          "A tRNS antikodonja a bázispárosodás szabálya szerint kapcsolódik az mRNS adott kodonjához, és az adott kodonnak megfelelő aminosavat juttatja a növekvő polipeptidlánchoz a riboszómán.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért jelenti a genetikai kód univerzalitása fontos bizonyítékot az evolúció mellett?",
        options: [
          "Mert szinte minden élőlény ugyanazokat a kodon-aminosav hozzárendeléseket használja, ami közös eredetre utal",
          "Mert minden élőlénynek pontosan ugyanannyi kromoszómája van",
          "Mert a genetikai kód fajonként teljesen eltérő",
          "Mert csak az emberi sejtekben létezik genetikai kód",
        ],
        correct_answer: "Mert szinte minden élőlény ugyanazokat a kodon-aminosav hozzárendeléseket használja, ami közös eredetre utal",
        explanation:
          "Az, hogy a baktériumtól az emberig gyakorlatilag ugyanaz a kodon ugyanazt az aminosavat jelenti, arra utal, hogy minden élőlény egy közös őstől származik, amelyben ez a kód már kialakult.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik a splicing (RNS-érés) során az eukarióta sejtmagban?",
        options: [
          "Az elsődleges RNS-átiratból kivágódnak az intronok, és összeilleszkednek az exonok",
          "A DNS két szála véglegesen szétválik",
          "Az aminosavak peptidkötéssel kapcsolódnak egymáshoz",
          "A riboszóma két alegysége összekapcsolódik",
        ],
        correct_answer: "Az elsődleges RNS-átiratból kivágódnak az intronok, és összeilleszkednek az exonok",
        explanation:
          "A splicing során a fehérjét nem kódoló szakaszokat (intronokat) kivágják az elsődleges RNS-átiratból, a kódoló szakaszokat (exonokat) pedig összeillesztik, így keletkezik az érett, citoplazmába kerülő mRNS.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "mutaciok-es-genetikai-betegsegek",
    title: "Mutációk és genetikai betegségek",
    level: "mindketto",
    theme: "Öröklődés",
    order_index: 27,
    summary_markdown:
      "A mutációk a genetikai állomány hirtelen, örökölhető megváltozásai, amelyek a genetikai variabilitás és az evolúció forrásai, ugyanakkor számos öröklődő betegség hátterében is állnak.",
    content_markdown: `
## A mutáció fogalma és típusai a hatás mérete szerint

A **mutáció** a DNS bázissorrendjének (vagy a kromoszómák szerkezetének/számának) hirtelen, véletlenszerű, örökölhető megváltozása. Kiváltó okuk lehet spontán (pl. a DNS-replikáció hibája) vagy **mutagén hatás** (pl. UV-sugárzás, ionizáló sugárzás, egyes vegyi anyagok — mutagének). Hatásuk szerint a mutáció lehet **káros** (a fehérje működését rontja vagy megszünteti), **semleges** (nincs érdemi hatása a fenotípusra, pl. mert a genetikai kód degenerált) vagy — ritkán — **előnyös** (új, hasznos tulajdonságot ad, az evolúció egyik nyersanyaga).

## Génmutációk

A **génmutáció** egyetlen gén DNS-szekvenciáján belüli változás:
- **Pontmutáció (báziscsere)** – egyetlen bázis kicserélődik egy másikra. Lehet **néma** (a kodon aminosav-jelentése a genetikai kód degeneráltsága miatt nem változik), **misszensz** (más aminosav épül be, ez megváltoztathatja a fehérje szerkezetét/működését — pl. a sarlósejtes vérszegénységet okozó mutáció) vagy **nonszensz** (a kodon stop kodonná alakul, a fehérje idő előtt, csonkán fejeződik ki).
- **Inzerció/deléció** – egy vagy több bázis beépülése vagy kiesése. Ha a beépült/kiesett bázisok száma nem osztható hárommal, ez **kereteltolódásos (frameshift) mutációt** okoz, amely a mutáció helyétől kezdve teljesen elrontja a leolvasási keretet, így a fehérje jellemzően teljesen működésképtelenné válik.

## Kromoszómamutációk

A **kromoszómamutáció** egy kromoszóma szerkezetét érinti: **deléció** (kromoszómadarab elvesztése), **duplikáció** (egy szakasz megkettőződése), **inverzió** (egy szakasz megfordulása) vagy **transzlokáció** (egy szakasz átkerülése egy másik, nem homológ kromoszómára).

## Genommutációk

A **genommutáció** a kromoszómák számát változtatja meg, jellemzően a meiózis hibája (**nondiszjunkció**, azaz a homológ kromoszómák vagy testvér kromatidák nem válnak szét megfelelően) miatt. Ha egy adott kromoszómából a szokásos két helyett három van jelen, ezt **triszómiának** nevezzük — a leggyakoribb és leginkább ismert emberi példája a **Down-szindróma (21-es triszómia)**, amelyben a 21-es kromoszómából három példány van jelen a szokásos két helyett; jellemzői közé tartozik a jellegzetes arcvonás, az értelmi elmaradás és a fokozott szív- és egyéb egészségügyi kockázat.

## Öröklődő emberi betegségek típusai

| Öröklődés típusa | Példa | Jellemző |
|---|---|---|
| Autoszomális recesszív | fenilketonuria, cisztás fibrózis | mindkét szülőtől recesszív allélt kell örökölni; a hordozó (heterozigóta) szülők egészségesek |
| Autoszomális domináns | Huntington-kór | már egy domináns allél is elegendő a betegség kialakulásához |
| X-hez kötött recesszív | vörös-zöld színtévesztés, hemofília | az érintett gén az X-kromoszómán van, ezért a férfiakat (XY) gyakrabban érinti, mint a nőket (XX) |
| Kromoszómarendellenesség | Down-szindróma | a kromoszómák számának eltérése (triszómia) |

## Genetikai tanácsadás és szűrés

A modern orvosi genetika **genetikai tanácsadással** és **prenatális (magzati) szűrővizsgálatokkal** (pl. ultrahang, magzatvíz-vizsgálat, illetve non-invazív genetikai vérvizsgálat) segít felmérni egy adott genetikai betegség kialakulásának kockázatát egy családban, illetve egy adott terhesség esetén, valamint családfaelemzéssel (rokonsági ábra elemzésével) meghatározható egy adott öröklődő betegség öröklésmenete (domináns/recesszív, autoszomális/X-hez kötött).
`,
    key_concepts: [
      "génmutáció (pontmutáció, frameshift)",
      "kromoszómamutáció és genommutáció",
      "nondiszjunkció és triszómia (Down-szindróma)",
      "autoszomális domináns/recesszív öröklődés",
      "X-hez kötött öröklődés",
      "genetikai tanácsadás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a mutáció?",
        options: [
          "A DNS bázissorrendjének vagy a kromoszómák szerkezetének/számának hirtelen, örökölhető megváltozása",
          "Az RNS lebontása a sejtben",
          "A fehérjék normál, mindennapi cseréje a sejtben",
          "Az ivarsejtek egyesülése megtermékenyítéskor",
        ],
        correct_answer: "A DNS bázissorrendjének vagy a kromoszómák szerkezetének/számának hirtelen, örökölhető megváltozása",
        explanation:
          "A mutáció a genetikai állomány (DNS-szekvencia, kromoszómaszerkezet vagy -szám) véletlenszerű, örökölhető megváltozása, amely lehet spontán vagy mutagén hatásra bekövetkező.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik kromoszóma-rendellenesség áll a Down-szindróma hátterében?",
        options: ["a 21-es kromoszómából három példány van a szokásos két helyett (triszómia)", "hiányzik az egyik X-kromoszóma", "egy gén pontmutációja", "egy kromoszómaszakasz inverziója"],
        correct_answer: "a 21-es kromoszómából három példány van a szokásos két helyett (triszómia)",
        explanation:
          "A Down-szindróma genommutáció (21-es triszómia) következménye: nondiszjunkció miatt a 21-es kromoszómából három példány kerül az utódba a szokásos két helyett.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért okoz jellemzően súlyosabb fehérjeműködési zavart egy inzerció/deléció, ha a beépült/kiesett bázisok száma nem osztható hárommal?",
        options: [
          "Mert kereteltolódást (frameshift mutációt) okoz, amely a mutáció helyétől kezdve teljesen megváltoztatja a leolvasási keretet",
          "Mert ilyenkor a DNS egyáltalán nem replikálódik tovább",
          "Mert ez mindig néma mutációt eredményez",
          "Mert ilyenkor kizárólag a mitokondriumban történik a hiba",
        ],
        correct_answer: "Mert kereteltolódást (frameshift mutációt) okoz, amely a mutáció helyétől kezdve teljesen megváltoztatja a leolvasási keretet",
        explanation:
          "Mivel a genetikai kód hármas (triplet) egységekben olvasódik le, egy nem hárommal osztható számú bázis be- vagy kiesése eltolja az összes utána következő kodon határát, ami a fehérje nagy részét teljesen megváltoztatja vagy működésképtelenné teszi.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért érinti az X-hez kötött recesszív betegségek (pl. színtévesztés) a férfiakat gyakrabban, mint a nőket?",
        options: [
          "A férfiaknak csak egy X-kromoszómájuk van (XY), ezért egyetlen recesszív allél is elég a betegség megjelenéséhez, míg a nőknek (XX) mindkét X-en recesszívnek kell lennie",
          "Mert a férfiak Y-kromoszómája hordozza a hibás allélt",
          "Mert az X-hez kötött betegségek kizárólag a férfiaknál fordulnak elő biológiai okokból",
          "Mert a nők genetikai anyaga eltérő kémiai felépítésű",
        ],
        correct_answer: "A férfiaknak csak egy X-kromoszómájuk van (XY), ezért egyetlen recesszív allél is elég a betegség megjelenéséhez, míg a nőknek (XX) mindkét X-en recesszívnek kell lennie",
        explanation:
          "Mivel a férfiaknak egyetlen X-kromoszómájuk van, egy recesszív allél az X-en nem 'takarható el' egy másik, domináns (normál) allél által, mint a két X-kromoszómás nőknél — ezért nagyobb eséllyel jelentkezik náluk a fenotípus.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az autoszomális recesszív öröklődésmenetet (pl. cisztás fibrózis esetén)?",
        options: [
          "A betegség csak akkor jelenik meg, ha az egyén mindkét szülőjétől megkapja a recesszív allélt, a heterozigóta hordozók egészségesek",
          "Egyetlen domináns allél is elegendő a betegség kialakulásához",
          "A betegséget kizárólag az X-kromoszómán lévő gén okozza",
          "A betegség sosem öröklődik, mindig új mutációból ered",
        ],
        correct_answer: "A betegség csak akkor jelenik meg, ha az egyén mindkét szülőjétől megkapja a recesszív allélt, a heterozigóta hordozók egészségesek",
        explanation:
          "Az autoszomális recesszív betegségeknél csak a homozigóta recesszív genotípusú (mindkét szülőtől a hibás allélt öröklő) egyén betegszik meg; a heterozigóta ('hordozó') szülők tünetmentesek, de átadhatják az allélt.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "populaciogenetika-es-evolucio",
    title: "Populációgenetika és evolúció",
    level: "emelt",
    theme: "Evolúció",
    order_index: 28,
    summary_markdown:
      "Az evolúció a populációk genetikai összetételének nemzedékeken átívelő megváltozása; a populációgenetika ennek matematikai-genetikai törvényszerűségeit, a természetes szelekció pedig a folyamat legfontosabb hajtóerejét írja le.",
    content_markdown: `
## Az evolúció mint a populációk genetikai változása

Modern (szintetikus) értelemben az **evolúció** egy populáció **allélgyakoriságának** (génkészletének, más néven **génállományának**) nemzedékről nemzedékre bekövetkező, tartós megváltozása. Az evolúció vizsgálatának alapegysége tehát nem az egyed, hanem a **populáció** (egy adott fajhoz tartozó, egy területen élő, egymással szaporodni képes egyedek csoportja).

## Az evolúció forrásai és mechanizmusai

- **Mutáció** – új alléleket hoz létre, ez a genetikai variabilitás elsődleges forrása (önmagában lassú folyamat).
- **Rekombináció** – a meiózis (crossing over, a kromoszómák véletlenszerű szétválása) és az ivaros szaporodás új allélkombinációkat hoz létre a már meglévő allélokból.
- **Migráció (génáramlás)** – egyedek (és alléljeik) be- vagy kivándorlása egy populációból megváltoztatja annak allélgyakoriságát.
- **Genetikai sodródás (drift)** – az allélgyakoriságok véletlenszerű ingadozása, amely kis létszámú populációkban különösen erős hatású, és akár egy allél teljes eltűnéséhez (vagy rögzüléséhez) is vezethet, a szelekciós előnytől függetlenül.
- **Természetes szelekció** – Charles Darwin által leírt mechanizmus, amely nem véletlenszerű: azok az egyedek, amelyek génjei (és az általuk meghatározott tulajdonságaik) az adott környezetben nagyobb túlélési és szaporodási sikert (**rátermettséget, fitneszt**) biztosítanak, több utódot hagynak hátra, így alléljeik gyakorisága nemzedékről nemzedékre nő a populációban.

## A Hardy–Weinberg-egyensúly

A **Hardy–Weinberg-elv** egy elméleti "null-modell": megadja azokat a feltételeket, amelyek mellett egy populáció allél- és genotípusgyakoriságai nemzedékről nemzedékre **változatlanok** maradnak (nincs evolúció): nincs mutáció, nincs migráció, nincs szelekció, a populáció végtelenül nagy (nincs genetikai sodródás), és a párosodás véletlenszerű. Két allél (A és a, gyakoriságuk p és q, ahol p + q = 1) esetén a genotípusgyakoriságok egyensúlyban: **p² (AA) + 2pq (Aa) + q² (aa) = 1**. Mivel a valóságban ezek a feltételek szinte sosem teljesülnek maradéktalanul, a Hardy–Weinberg-egyensúlytól való eltérés éppen azt jelzi, hogy a populációban evolúciós folyamat (pl. szelekció) zajlik — ez a modell fontos viszonyítási alap a genetikai változás kimutatásához.

## A természetes szelekció típusai

- **Stabilizáló szelekció** – a szélsőséges fenotípusokat hátrányba hozza, a köztes (átlagos) fenotípust részesíti előnyben, csökkentve a variabilitást (pl. az emberi születési testtömeg optimuma).
- **Irányító (direkcionális) szelekció** – az egyik szélsőséges fenotípust részesíti előnyben, eltolva a populáció átlagát egy irányba (pl. antibiotikum-rezisztens baktériumok elszaporodása antibiotikum-kezelés hatására).
- **Szétválasztó (diverzifikáló) szelekció** – mindkét szélsőséges fenotípust előnyben részesíti a köztessel szemben, ez akár a populáció két csoportra válásához (és hosszú távon fajkeletkezéshez) is vezethet.

## Fajkeletkezés (speciáció)

Új faj akkor jön létre, ha egy eredetileg egységes populáció két (vagy több) alcsoportja genetikailag annyira eltávolodik egymástól, hogy a köztük lévő szaporodás megszűnik vagy termékeny utód nem születik belőle. Leggyakoribb útja az **allopatrikus (földrajzi) speciáció**: egy földrajzi akadály (hegylánc, tenger, folyó) elválasztja a populáció két részét, amelyek egymástól függetlenül, eltérő szelekciós nyomás és genetikai sodródás hatására annyira eltérnek, hogy újra találkozva már nem képesek egymással szaporodni (**reproduktív izoláció**).

## Bizonyítékok az evolúció mellett

Az evolúcióelméletet számos, egymástól független bizonyítékvonal támasztja alá: a **kövületek (fosszíliák)** rétegtani sorrendje, az élőlények **homológ szervei** (közös eredetű, de eltérő funkciójú testrészek, pl. az emlősök végtagcsontjainak azonos alapfelépítése), a **molekuláris (DNS- és fehérje-) hasonlóságok** a fajok között, valamint a **közvetlenül megfigyelt evolúció** (pl. antibiotikum-rezisztencia kialakulása, rovarok rezisztenciája rovarirtó szerekkel szemben).
`,
    key_concepts: [
      "allélgyakoriság és populáció génállománya",
      "mutáció, sodródás, génáramlás, szelekció",
      "Hardy–Weinberg-egyensúly",
      "stabilizáló, irányító, szétválasztó szelekció",
      "allopatrikus fajkeletkezés",
      "homológ szervek, fosszíliák mint bizonyítékok",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Modern genetikai értelemben mit jelent az evolúció?",
        options: [
          "Egy populáció allélgyakoriságának nemzedékről nemzedékre bekövetkező, tartós megváltozását",
          "Egyetlen egyed élete során bekövetkező alkalmazkodását",
          "A fajok számának állandó csökkenését",
          "Egy sejt egyszeri osztódását",
        ],
        correct_answer: "Egy populáció allélgyakoriságának nemzedékről nemzedékre bekövetkező, tartós megváltozását",
        explanation:
          "A szintetikus evolúcióelmélet szerint az evolúció alapegysége a populáció, és lényege a génállomány (allélgyakoriságok) nemzedékek közötti tartós változása, nem egyetlen egyed élete során bekövetkező változás.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a genetikai sodródás (drift)?",
        options: [
          "Az allélgyakoriságok véletlenszerű ingadozása, amely kis populációkban különösen erős",
          "A természetes szelekció szinonimája",
          "Egyedek be- és kivándorlása egy populációból",
          "A DNS replikációja során fellépő hiba",
        ],
        correct_answer: "Az allélgyakoriságok véletlenszerű ingadozása, amely kis populációkban különösen erős",
        explanation:
          "A genetikai sodródás a szelekciós előnytől független, véletlenszerű allélgyakoriság-változás, amelynek hatása kis létszámú populációkban aránytalanul nagy lehet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen feltételek mellett marad egy populáció allélgyakorisága a Hardy–Weinberg-elv szerint állandó (nincs evolúció)?",
        options: [
          "Nincs mutáció, migráció, szelekció és genetikai sodródás, a párosodás véletlenszerű",
          "Csak akkor, ha a populációban erős a természetes szelekció",
          "Csak akkor, ha a populáció létszáma nagyon kicsi",
          "Csak akkor, ha gyakori a mutáció",
        ],
        correct_answer: "Nincs mutáció, migráció, szelekció és genetikai sodródás, a párosodás véletlenszerű",
        explanation:
          "A Hardy–Weinberg-egyensúly egy elméleti modell, amely öt feltétel (nincs mutáció, migráció, szelekció, sodródás; véletlenszerű párosodás) teljesülése esetén ír le állandó allél- és genotípusgyakoriságot — ezek hiánya jelzi, hogy evolúció zajlik.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szelekciótípusra jellemző, hogy egy antibiotikum-kezelés hatására a rezisztens baktériumtörzs válik uralkodóvá a populációban?",
        options: ["irányító (direkcionális) szelekció", "stabilizáló szelekció", "szétválasztó (diverzifikáló) szelekció", "genetikai sodródás"],
        correct_answer: "irányító (direkcionális) szelekció",
        explanation:
          "Az irányító szelekció egy szélsőséges fenotípust (itt: a rezisztenciát) részesíti előnyben, eltolva a populáció átlagát ebbe az irányba — ezt láthatjuk az antibiotikum-rezisztencia gyors terjedésénél.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos bizonyíték az evolúcióelmélet mellett a homológ szervek megléte a különböző fajoknál?",
        options: [
          "Mert az eltérő funkciójú, de azonos alapfelépítésű testrészek közös eredetre (közös ősre) utalnak",
          "Mert a homológ szervek minden fajnál pontosan ugyanazt a funkciót látják el",
          "Mert a homológ szervek bizonyítják, hogy a fajok egymástól teljesen függetlenül, párhuzamosan alakultak ki",
          "Mert a homológ szervek kizárólag a növényekre jellemzőek",
        ],
        correct_answer: "Mert az eltérő funkciójú, de azonos alapfelépítésű testrészek közös eredetre (közös ősre) utalnak",
        explanation:
          "A homológ szervek (pl. az emlősök elülső végtagjának azonos csontelrendezése denevérszárnyban, bálnaúszóban, emberi karban) eltérő funkciót látnak el, de azonos fejlődési-szerkezeti alapra vezethetők vissza, ami egy közös ős melletti erős bizonyíték.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "okologia-populaciok-es-eletkozossegek",
    title: "Ökológia — populációk és életközösségek",
    level: "mindketto",
    theme: "Ökológia",
    order_index: 29,
    summary_markdown:
      "Az ökológia a populációk (egy fajhoz tartozó, egy területen élő egyedek) és az életközösségek (több faj populációinak együttese) jellemzőit, valamint a fajok közötti kapcsolatrendszereket vizsgálja.",
    content_markdown: `
## A populáció jellemzői

A **populáció** egy adott fajhoz tartozó, egy meghatározott területen élő, egymással szaporodni képes egyedek csoportja. Jellemző, mérhető tulajdonságai:

- **Populációméret és populációsűrűség** – az egyedek száma, illetve egységnyi területre/térfogatra jutó száma.
- **Térbeli eloszlás** – lehet **egyenletes** (pl. territoriális madarak fészkei), **véletlenszerű** (nincs egymásra hatás) vagy **csoportos (aggregált)** (pl. csordák, falkák — leggyakoribb a természetben).
- **Korösszetétel** – a fiatal, ivarérett és idős egyedek aránya, amely előre jelzi a populáció jövőbeli növekedési tendenciáját.
- **Ivararány** – a hím és nőstény egyedek aránya.

## Populációnövekedési modellek

- **Exponenciális növekedés** – korlátlan erőforrások mellett a populáció mérete egyre gyorsuló ütemben nő (J-alakú görbe); a természetben csak rövid ideig, korlátozó tényezők hiányában figyelhető meg (pl. új élőhelyre került, versenytárs nélküli faj esetén).
- **Logisztikus növekedés** – a valóságban jellemzőbb modell: a növekedés lelassul, majd megáll, ahogy a populáció mérete megközelíti az adott élőhely **eltartóképességét (K)** — ezt a rendelkezésre álló erőforrások (táplálék, terület, víz) korlátozzák. Az így kialakuló görbe S-alakú (szigmoid).

A populáció méretét szabályozó tényezők lehetnek **sűrűségfüggők** (hatásuk a populációsűrűséggel arányosan nő, pl. táplálékhiány, ragadozás, járványok terjedése) vagy **sűrűségfüggetlenek** (a populáció méretétől függetlenül hatnak, pl. időjárási szélsőségek, természeti katasztrófák).

## Az életközösség (biocönózis) és a fajok kapcsolatai

Az **életközösség (biocönózis)** egy adott területen élő, egymással kölcsönhatásban álló, különböző fajokhoz tartozó populációk összessége. A fajok közötti kapcsolatok típusai:

| Kapcsolat | Az egyik fél | A másik fél | Példa |
|---|---|---|---|
| Versengés (kompetíció) | hátrány | hátrány | két faj azonos táplálékforrásért versenyez |
| Ragadozás | előny | hátrány (elpusztul) | róka és nyúl |
| Élősködés (parazitizmus) | előny | hátrány (nem pusztul el azonnal) | bélféreg és gazdaszervezete |
| Mutualizmus (kölcsönös előny) | előny | előny | méh és virágos növény (beporzás – nektár) |
| Kommenzalizmus | előny | semleges | orchidea a fa kérgén (csak megtelepszik, nem árt) |

## Az ökológiai niche

Az **ökológiai niche (fülke)** egy faj adott életközösségen belüli összes ökológiai "szerepének" összessége: mit fogyaszt, milyen élőhelyet foglal el, milyen a napi/évszakos aktivitása, kikkel áll versengésben vagy más kapcsolatban. A **versengési kizárás elve (Gause-elv)** szerint két faj, amely pontosan ugyanazt a niche-t foglalja el egy életközösségben, tartósan nem élhet együtt — a gyengébb versenyző kiszorul, kipusztul, vagy niche-t vált (**niche-elkülönülés, niche differenciáció**).

## Szukcesszió

A **szukcesszió** az életközösségek időbeli, fokozatos, rendezett átalakulása. **Elsődleges szukcesszió** egy korábban élettelen felszínen (pl. friss vulkáni kőzet, gleccser visszahúzódása után feltáruló terület) indul meg, úttörő fajokkal (pl. zuzmók), és sok évtized-évszázad alatt jut el a **klímax** (az adott éghajlati viszonyok között stabil, önfenntartó) állapotig. **Másodlagos szukcesszió** egy korábban már élő, de valamilyen zavarás (tűz, erdőirtás, árvíz) által megbolygatott területen indul, és — mivel a talaj és a magbank már adott — jellemzően gyorsabban éri el a klímaállapotot.
`,
    key_concepts: [
      "populáció jellemzői (sűrűség, korösszetétel, eloszlás)",
      "exponenciális és logisztikus növekedés, eltartóképesség (K)",
      "fajok közötti kapcsolatok (kompetíció, ragadozás, mutualizmus)",
      "ökológiai niche és versengési kizárás elve",
      "elsődleges és másodlagos szukcesszió",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a logisztikus populációnövekedési modellt az exponenciálishoz képest?",
        options: [
          "A növekedés lelassul, ahogy a populáció mérete megközelíti az élőhely eltartóképességét, S-alakú görbét adva",
          "A populáció mérete korlátlanul, egyre gyorsulva nő",
          "A populáció mérete állandó marad, sosem változik",
          "Csak kihalófélben lévő fajokra jellemző",
        ],
        correct_answer: "A növekedés lelassul, ahogy a populáció mérete megközelíti az élőhely eltartóképességét, S-alakú görbét adva",
        explanation:
          "A logisztikus növekedési modell figyelembe veszi a korlátozott erőforrásokat: ahogy a populációméret közelít az eltartóképességhez (K), a növekedés lelassul, majd megáll — ez adja az S-alakú (szigmoid) görbét, szemben az exponenciális modell korlátlan, J-alakú növekedésével.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik fajok közötti kapcsolatra jellemző, hogy mindkét résztvevő fél számára előnyös?",
        options: ["mutualizmus", "versengés (kompetíció)", "ragadozás", "élősködés (parazitizmus)"],
        correct_answer: "mutualizmus",
        explanation:
          "A mutualizmus (pl. a méh és a virágos növény kapcsolata) mindkét fél számára előnyös; a versengés mindkettőnek hátrányos, a ragadozás és az élősködés az egyik félnek előnyös, a másiknak hátrányos.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az elsődleges és a másodlagos szukcesszió között?",
        options: [
          "Az elsődleges egy korábban élettelen felszínen indul (pl. friss vulkáni kőzeten), a másodlagos egy már megbolygatott, de korábban élő területen, ezért gyorsabban zajlik",
          "Az elsődleges szukcesszió mindig gyorsabb, mint a másodlagos",
          "A másodlagos szukcesszió sosem ér el klímaállapotot",
          "A kettő között nincs érdemi különbség",
        ],
        correct_answer: "Az elsődleges egy korábban élettelen felszínen indul (pl. friss vulkáni kőzeten), a másodlagos egy már megbolygatott, de korábban élő területen, ezért gyorsabban zajlik",
        explanation:
          "Az elsődleges szukcesszió talaj és magbank nélküli, teljesen élettelen felszínen kezdődik, ezért lassabb; a másodlagos szukcesszió már meglévő talajon és magbankkal induló, zavarás utáni folyamat, ezért jellemzően gyorsabban ér el klímaállapotot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit mond ki a versengési kizárás elve (Gause-elv)?",
        options: [
          "Két faj, amely pontosan ugyanazt az ökológiai niche-t foglalja el, tartósan nem élhet együtt egy életközösségben",
          "Két faj sosem élhet együtt egy életközösségben, függetlenül a niche-üktől",
          "A versengés mindig mindkét fajnak előnyös",
          "A ragadozó és zsákmánya sosem versenghet egymással",
        ],
        correct_answer: "Két faj, amely pontosan ugyanazt az ökológiai niche-t foglalja el, tartósan nem élhet együtt egy életközösségben",
        explanation:
          "A Gause-elv szerint az azonos niche-ért (azonos erőforrásokért, élőhelyért) versengő fajok közül hosszú távon az egyik kiszorítja a másikat, kivéve ha niche-differenciáció révén elkülönülnek egymástól.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik tényező sűrűségfüggő szabályozó hatás egy populáció méretére?",
        options: ["táplálékhiány, amelynek hatása a populációsűrűség növekedésével fokozódik", "egy hirtelen földrengés", "egy szélsőséges hideghullám", "egy vulkánkitörés"],
        correct_answer: "táplálékhiány, amelynek hatása a populációsűrűség növekedésével fokozódik",
        explanation:
          "A sűrűségfüggő tényezők (pl. táplálékhiány, ragadozás, járvány) hatása a populáció sűrűségével arányosan erősödik; a természeti katasztrófák (földrengés, hideghullám, vulkánkitörés) jellemzően sűrűségfüggetlen hatásúak.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "okoszisztemak-bioszfera-es-kornyezetvedelem",
    title: "Ökoszisztémák, a bioszféra és környezetvédelem",
    level: "mindketto",
    theme: "Ökológia",
    order_index: 30,
    summary_markdown:
      "Az ökoszisztéma az élőlények és élettelen környezetük anyag- és energiaforgalommal összekapcsolt rendszere; a bioszféra ennek globális szintje, amelynek egyensúlyát ma jelentős emberi hatások (élőhelyvesztés, klímaváltozás, szennyezés) fenyegetik.",
    content_markdown: `
## Az ökoszisztéma felépítése

Az **ökoszisztéma** egy adott terület életközösségének (biocönózisának) és élettelen környezetének (**biotóp**: éghajlat, talaj, víz, fény) egymással kölcsönható egysége. Az ökoszisztéma élőlényei táplálkozási szerepük szerint csoportosíthatók:

- **Termelők (producensek)** – fotoszintetizáló szervezetek (növények, algák, cianobaktériumok), amelyek a Nap fényenergiáját szerves anyagba (kémiai energiává) alakítják — ők az ökoszisztéma energiaforgalmának elsődleges bemeneti pontjai.
- **Fogyasztók (konzumensek)** – a termelők (**elsődleges fogyasztók/növényevők**) vagy más fogyasztók (**másodlagos, harmadlagos fogyasztók/ragadozók**) szerves anyagát hasznosítják.
- **Lebontók (dekomponensek)** – gombák, baktériumok, amelyek az elhalt szerves anyagot (elpusztult élőlények, ürülék) szervetlen anyaggá bontják, ezzel visszajuttatva a tápanyagokat a körforgásba.

## Táplálékláncok, táplálékhálózatok és a trofikus szintek

Az egymást tápláló élőlények sorát **táplálékláncnak** nevezzük (pl. fű → nyúl → róka), a valóságban azonban ezek összefonódó, elágazó **táplálékhálózatot** alkotnak. Az egyes szinteket **trofikus szinteknek** hívjuk. A **10%-os szabály** szerint egy trofikus szintről a következőre az energia mintegy 10%-a adódik tovább (a többi hő formájában elvész, illetve légzésre, mozgásra, anyagcserére fordítódik) — ez az oka, hogy a táplálékláncok jellemzően csak 4-5 szintből állnak, és a csúcsragadozók mindig lényegesen kisebb egyedszámban/biomasszában vannak jelen, mint a termelők (**ökológiai piramis**).

## Anyagforgalom (biogeokémiai körforgások)

Az ökoszisztémákban az anyagok (szemben az energiával, amely csak egyszer, egyirányban áramlik át a rendszeren) körforgásban, újrahasznosulva mozognak:
- **Szénkörforgás** – a légköri CO2-t a termelők fotoszintézissel szerves anyaggá alakítják, a légzés és az égés (elhalás, lebontás, tüzek, fosszilis tüzelőanyag-égetés) visszajuttatja a CO2-t a légkörbe.
- **Nitrogénkörforgás** – a légköri nitrogént (N2) csak speciális, nitrogénkötő baktériumok (pl. *Rhizobium*) tudják a növények számára felvehető formává alakítani; a lebontók és nitrifikáló/denitrifikáló baktériumok zárják a kört.
- **Vízkörforgás** – párolgás, csapadékképződés, lefolyás és a talajvízbe szivárgás folyamatos globális ciklusa.

## A bioszféra és globális környezeti problémák

A **bioszféra** a Föld valamennyi élőlényét és élőhelyét magába foglaló, legátfogóbb ökológiai szerveződési szint. Napjaink legjelentősebb, emberi tevékenység okozta globális környezeti problémái:

- **Éghajlatváltozás (globális felmelegedés)** – a fosszilis tüzelőanyagok elégetéséből, erdőirtásból származó **üvegházhatású gázok** (elsősorban CO2, metán) felhalmozódása a légkörben fokozza az üvegházhatást, emelve a Föld átlaghőmérsékletét, ami szélsőséges időjárást, a sarki jég olvadását, tengerszint-emelkedést okoz.
- **Élőhelyvesztés és fragmentáció** – az erdőirtás, a városiasodás, a mezőgazdasági terjeszkedés csökkenti és feldarabolja az élőhelyeket, ez a biodiverzitás-csökkenés egyik fő oka.
- **Biodiverzitás-csökkenés** – a fajok kihalási üteme jelentősen meghaladja a természetes ("háttér-") kihalási rátát, ezt sokan a Föld hatodik nagy kihalási hullámaként említik.
- **Környezetszennyezés** – víz-, talaj- és légszennyezés (pl. műanyaghulladék, nehézfémek, műtrágyák és peszticidek lemosódása), amelyek felhalmozódhatnak a táplálékláncban (**biológiai felhalmozódás, bioakkumuláció**), a csúcsragadozókban (pl. emberben is) érve el a legmagasabb koncentrációt.
- **Invazív fajok** – az ember által (szándékosan vagy véletlenül) új élőhelyre juttatott fajok, amelyeknek nincsenek természetes ellenségeik az új környezetben, kiszoríthatják az őshonos fajokat.

## Fenntarthatóság és környezetvédelem

A **fenntartható fejlődés** olyan gazdasági-társadalmi fejlődés, amely a jelen szükségleteit úgy elégíti ki, hogy nem veszélyezteti a jövő nemzedékek lehetőségét saját szükségleteik kielégítésére. Gyakorlati eszközei közé tartozik a megújuló energiaforrások (nap-, szél-, vízenergia) használata, a természetvédelmi területek (nemzeti parkok, védett élőhelyek) létrehozása, a hulladékcsökkentés és -újrahasznosítás, valamint a nemzetközi együttműködés (pl. éghajlatvédelmi egyezmények) a globális problémák kezelésére.
`,
    key_concepts: [
      "termelők, fogyasztók, lebontók",
      "tápláléklánc, trofikus szint, 10%-os szabály",
      "szén- és nitrogénkörforgás",
      "üvegházhatás és globális felmelegedés",
      "biodiverzitás-csökkenés és bioakkumuláció",
      "fenntartható fejlődés",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a lebontók (dekomponensek) szerepe az ökoszisztémában?",
        options: [
          "Az elhalt szerves anyagot szervetlen anyaggá bontják, visszajuttatva a tápanyagokat a körforgásba",
          "Fényenergiát alakítanak szerves anyaggá",
          "Kizárólag más fogyasztókat esznek meg",
          "Nem vesznek részt az anyagforgalomban",
        ],
        correct_answer: "Az elhalt szerves anyagot szervetlen anyaggá bontják, visszajuttatva a tápanyagokat a körforgásba",
        explanation:
          "A lebontók (gombák, baktériumok) az elpusztult élőlények és hulladékanyagok szerves anyagát szervetlenné alakítják, ezzel biztosítva a tápanyagok (pl. nitrogén, szén) körforgásának folytonosságát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit mond ki a táplálékláncokra vonatkozó '10%-os szabály'?",
        options: [
          "Egy trofikus szintről a következőre átlagosan az energia mintegy 10%-a adódik tovább",
          "Minden trofikus szinten 10%-kal nő az egyedszám",
          "A táplálékláncok mindig pontosan 10 szintből állnak",
          "A termelők 10%-a mindig elpusztul évente",
        ],
        correct_answer: "Egy trofikus szintről a következőre átlagosan az energia mintegy 10%-a adódik tovább",
        explanation:
          "A trofikus szintek közötti energiaátadás hatékonysága alacsony (kb. 10%), a többi energia hő formájában, légzésre és egyéb életfunkciókra elhasználódik — ez korlátozza a táplálékláncok hosszát és magyarázza az ökológiai piramis alakját.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért különbözik az energia és az anyag mozgása egy ökoszisztémában?",
        options: [
          "Az energia csak egyszer, egyirányban áramlik át a rendszeren, míg az anyagok (pl. szén, nitrogén) körforgásban, újrahasznosulva mozognak",
          "Az energia is körforgásban mozog, ugyanúgy, mint az anyag",
          "Az anyagok egyirányban áramlanak, az energia körforgásban mozog",
          "Sem az energia, sem az anyag nem mozog egy ökoszisztémában",
        ],
        correct_answer: "Az energia csak egyszer, egyirányban áramlik át a rendszeren, míg az anyagok (pl. szén, nitrogén) körforgásban, újrahasznosulva mozognak",
        explanation:
          "Az energia a Naptól a termelőkön, fogyasztókon át végül hő formájában távozik a rendszerből (nem forog vissza), míg a kémiai elemek (szén, nitrogén, víz) biogeokémiai körforgásokban folyamatosan újrahasznosulnak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a bioakkumuláció (biológiai felhalmozódás) jelensége?",
        options: [
          "Egyes szennyező anyagok a táplálékláncban haladva egyre nagyobb koncentrációban halmozódnak fel, legmagasabb szinten a csúcsragadozókban",
          "A termelők fotoszintézis során energiát halmoznak fel",
          "A lebontók felhalmozzák a szerves anyagot a talajban",
          "A víz körforgása során a csapadék mennyisége folyamatosan nő",
        ],
        correct_answer: "Egyes szennyező anyagok a táplálékláncban haladva egyre nagyobb koncentrációban halmozódnak fel, legmagasabb szinten a csúcsragadozókban",
        explanation:
          "Egyes nehezen lebomló szennyező anyagok (pl. nehézfémek, egyes peszticidek) minden trofikus szinten feldúsulnak a szövetekben, ezért a táplálékláncban feljebb lévő fogyasztókban (különösen a csúcsragadozókban, köztük az emberben) mérhető a legmagasabb koncentráció.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a fenntartható fejlődés fogalma?",
        options: [
          "Olyan fejlődés, amely a jelen szükségleteit úgy elégíti ki, hogy nem veszélyezteti a jövő nemzedékek lehetőségét saját szükségleteik kielégítésére",
          "A gazdasági növekedés korlátlan, mindenáron történő maximalizálását",
          "A természeti erőforrások mielőbbi, teljes kiaknázását",
          "Kizárólag a fosszilis energiahordozók használatának növelését",
        ],
        correct_answer: "Olyan fejlődés, amely a jelen szükségleteit úgy elégíti ki, hogy nem veszélyezteti a jövő nemzedékek lehetőségét saját szükségleteik kielégítésére",
        explanation:
          "A fenntartható fejlődés klasszikus (Brundtland-jelentés szerinti) meghatározása a jelen és a jövő nemzedékek szükségleteinek egyensúlyát hangsúlyozza, szemben a korlátlan, hosszú távon fenntarthatatlan erőforrás-kiaknázással.",
        difficulty: 2,
      },
    ],
  },
];
