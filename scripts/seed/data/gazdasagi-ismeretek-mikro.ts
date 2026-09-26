import { TopicSeed } from "./angol";

export const gazdasagiIsmeretekMikroTopics: TopicSeed[] = [
  {
    slug: "a-kozgazdasagtan-alapfogalmai-es-alapkerdesei",
    title: "A közgazdaságtan alapfogalmai és alapkérdései",
    level: "mindketto",
    theme: "Mikroökonómia",
    order_index: 1,
    summary_markdown:
      "A közgazdaságtan a szűkös erőforrások és a korlátlan szükségletek közötti feszültségből fakadó gazdálkodási kényszert vizsgálja: mit, hogyan és kinek termeljünk — ezek a kérdések minden gazdasági rendszer alapproblémáját jelentik.",
    content_markdown: `
## A szükséglet fogalma

A **szükséglet** valamilyen hiányérzet, amely cselekvésre — a hiány megszüntetésére — ösztönöz. A szükségletek köre koronként, társadalmanként és egyénenként változó, és jellemzően bővíthető, sőt korlátlan: egy kielégített szükséglet helyébe újabb, magasabb szintű szükséglet lép. A szükségleteket többféleképpen csoportosíthatjuk: létfenntartási szükségletek (élelem, lakhatás), kulturális szükségletek (oktatás, szórakozás) és luxusszükségletek szerint, vagy egyéni és társadalmi (közösségi) szükségletek szerint.

## Javak és erőforrások

A szükségletek kielégítésére szolgáló eszközöket **javaknak** nevezzük. A javakat alapvetően két nagy csoportba soroljuk: a **szabad javak** korlátlanul állnak rendelkezésre (pl. a levegő), nincs piaci áruk, és nem kell értük gazdálkodni; a **gazdasági javak** ezzel szemben korlátozottan állnak rendelkezésre a szükségletekhez képest, ezért piaci áruk van, és elosztásukról dönteni kell. A javak előállításához szükséges eszközöket **erőforrásoknak (termelési tényezőknek)** nevezzük: ide tartozik a föld (természeti erőforrások), a munka (emberi munkavégző képesség) és a tőke (a termeléshez felhasznált korábban előállított javak, gépek, épületek, pénzeszközök).

## A szűkösség és a gazdálkodás kényszere

A közgazdaságtan alapproblémája a **szűkösség**: a szükségletek korlátlanok, míg az erőforrások mindig végesek. Ez a feszültség kényszeríti a gazdasági szereplőket **gazdálkodásra**, vagyis a rendelkezésre álló szűkös erőforrások leghatékonyabb felhasználására a legfontosabb szükségletek kielégítése érdekében. A szűkösségből fakad az **alternatívaköltség (lehetőségköltség)** fogalma is: amikor egy erőforrást az egyik cél érdekében használunk fel, lemondunk arról a haszonról, amit egy másik, alternatív felhasználás hozott volna — ez a lemondott haszon a döntés valódi (gazdasági) költsége.

## A közgazdaságtan alapkérdései

Minden gazdasági rendszernek választ kell adnia három alapvető kérdésre: **mit** termeljünk (mely javakat és milyen mennyiségben), **hogyan** termeljünk (milyen technológiával, erőforrás-kombinációval), és **kinek** termeljünk (hogyan osszuk el a megtermelt javakat a társadalom tagjai között). E kérdések megválaszolásának módja alapvetően különbözteti meg egymástól a különböző gazdasági rendszereket.

## Gazdasági rendszerek

Történelmileg és elméletileg többféle **gazdasági rendszer** alakult ki annak alapján, hogyan válaszolják meg az alapkérdéseket. A **hagyományos (tradicionális) gazdaság** a szokások és a hagyományok alapján osztja el az erőforrásokat és a javakat. A **parancsuralmi (tervgazdasági) rendszerben** a központi állami tervezés dönt a mit-hogyan-kinek kérdésekről (pl. a szocialista tervgazdaságok). A **piacgazdaságban** a döntéseket decentralizáltan, a piaci árak és a magántulajdon alapján, a kereslet és a kínálat összjátéka hozza meg. A gyakorlatban a legtöbb modern gazdaság **vegyes gazdaság**, amely a piaci mechanizmust állami szabályozással és beavatkozással kombinálja.

## A mikroökonómia és a makroökonómia

A közgazdaságtan két nagy vizsgálódási területre oszlik. A **mikroökonómia** az egyes gazdasági szereplők (háztartások, vállalatok) döntéseit és az egyes piacok (termék- és tényezőpiacok) működését vizsgálja — például hogyan alakul ki egy adott termék ára, hogyan dönt egy vállalat a termelés mennyiségéről. A **makroökonómia** ezzel szemben a nemzetgazdaság egészét, az összesített (aggregált) mutatókat (GDP, infláció, munkanélküliség, gazdasági növekedés) és ezek összefüggéseit tanulmányozza.

## A termelési lehetőségek határa

A szűkösség szemléltetésére a közgazdaságtan gyakran alkalmazza a **termelési lehetőségek határának (görbéjének)** modelljét, amely bemutatja, hogy egy adott gazdaság — adott erőforrásokkal és technológiával — milyen maximális kombinációkban képes két különböző jószágot előállítani. A görbén belüli pontok a nem hatékony (kihasználatlan erőforrásokat jelző) állapotot, a görbén kívüli pontok az adott erőforrásokkal elérhetetlen kombinációkat, a görbén lévő pontok pedig a hatékony, de egymással szemben álló (trade-off) választásokat jelenítik meg.

## Jelentősége

A közgazdaságtan alapfogalmainak (szükséglet, javak, szűkösség, alternatívaköltség, gazdasági rendszerek) megértése nélkülözhetetlen ahhoz, hogy átlássuk, miért kell a gazdasági szereplőknek — egyénektől az államig — folyamatosan választaniuk a korlátozott erőforrások felhasználásáról, és ez a választási kényszer minden további gazdasági jelenség (piac, ár, verseny, gazdaságpolitika) megértésének alapja.
`,
    key_concepts: [
      "szükséglet és javak (szabad és gazdasági javak)",
      "erőforrások (föld, munka, tőke)",
      "szűkösség és alternatívaköltség",
      "a gazdaság alapkérdései: mit, hogyan, kinek",
      "gazdasági rendszerek (piac-, terv- és vegyes gazdaság)",
    ],
    source_refs: [
      { label: "A közgazdaságtan tárgya – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-kozgazdasagtan-targya/" },
      { label: "Közgazdaságtan (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Közgazdaságtan" },
      { label: "A piacgazdaság alapkategóriái: piac, kereslet, kínálat, ár (Pénziránytű Alapítvány)", url: "https://penziranytu.hu/archivalt-pop-torzsanyag/konyv/az-en-penzem/i-utra-kelunk/2-az-aruk-es-penz-vilagaban-elunk/3-piacgazdasag-alapkategoriai-piac-kereslet-kinalat-ar" },
      { label: "A közgazdaságtan alapfogalmai (szükséglet, erőforrás, szűkösség, gazdálkodás) (Érettségik.hu)", url: "https://erettsegik.hu/2025/06/04/a-kozgazdasagtan-alapfogalmai-szukseglet-eroforras-szukosseg-gazdalkodas/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a szűkösség fogalma?",
        options: [
          "a korlátlan szükségletek és a véges erőforrások közötti feszültség",
          "amikor egy jószágból túl sok áll rendelkezésre",
          "a szabad javak elérhetetlensége",
          "az állami tervezés hiánya"
        ],
        correct_answer: "a korlátlan szükségletek és a véges erőforrások közötti feszültség",
        explanation: "A szűkösség a közgazdaságtan alapproblémája: a szükségletek korlátlanok, míg az erőforrások végesek, ez kényszeríti a szereplőket gazdálkodásra.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik jószágot nevezzük szabad jószágnak?",
        options: ["a levegőt", "a kenyeret", "a gépkocsit", "a lakást"],
        correct_answer: "a levegőt",
        explanation: "A szabad javak (mint a levegő) korlátlanul állnak rendelkezésre, nincs piaci áruk, ezért nem kell gazdálkodni velük.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik három tényezőt soroljuk a klasszikus termelési tényezők közé?",
        options: ["föld, munka, tőke", "pénz, hitel, kamat", "kereslet, kínálat, ár", "GDP, infláció, munkanélküliség"],
        correct_answer: "föld, munka, tőke",
        explanation: "A klasszikus közgazdaságtan a földet, a munkát és a tőkét tekinti a termeléshez szükséges alapvető erőforrásoknak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az alternatívaköltség (lehetőségköltség) fogalma?",
        options: [
          "az elmulasztott legjobb alternatíva hasznát, amelyről egy döntés meghozatalakor lemondunk",
          "a termék piaci árát",
          "az állam által kivetett adót",
          "a munkabér összegét"
        ],
        correct_answer: "az elmulasztott legjobb alternatíva hasznát, amelyről egy döntés meghozatalakor lemondunk",
        explanation: "Az alternatívaköltség azt fejezi ki, hogy egy erőforrás egyik célra történő felhasználásakor lemondunk a legjobb alternatív felhasználás hasznáról.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik gazdasági rendszerben döntenek decentralizáltan, a piaci árak alapján a mit-hogyan-kinek kérdésekről?",
        options: ["piacgazdaságban", "parancsuralmi (tervgazdasági) rendszerben", "hagyományos gazdaságban", "egyikben sem"],
        correct_answer: "piacgazdaságban",
        explanation: "A piacgazdaságban a kereslet és kínálat, valamint a magántulajdon alapján decentralizáltan születnek a gazdasági döntések, szemben a központi tervezéssel.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "a-piac-es-a-piaci-mechanizmus",
    title: "A piac és a piaci mechanizmus",
    level: "mindketto",
    theme: "Mikroökonómia",
    order_index: 2,
    summary_markdown:
      "A piac a vevők és eladók cseretranszakcióinak rendszere, amelyet a kereslet és a kínálat egymásra hatása szabályoz: a piaci egyensúlyi ár ott alakul ki, ahol a vásárolni szándékozott és a felkínált mennyiség megegyezik.",
    content_markdown: `
## A piac fogalma

A **piac** a tényleges és potenciális eladók és vevők, valamint az ő cserekapcsolataik rendszere egy adott termékre, termékcsoportra vagy földrajzi területre vonatkozóan. A piac nem passzív csereszínhely, hanem élő, önszabályozó rendszer, amelyben a szereplőknek alapvető törvényszerűségekkel (kereslet, kínálat, ár) kell szembenézniük. A piacok sokféleképpen csoportosíthatók: termékpiacok (áruk és szolgáltatások piaca) és tényezőpiacok (munkaerőpiac, tőkepiac, földpiac) szerint, vagy földrajzi kiterjedés szerint (helyi, országos, nemzetközi piac).

## A kereslet

A **kereslet** a vevők fizetőképes vásárlási szándékát fejezi ki: azt mutatja meg, hogy egy adott termékből mennyit hajlandóak és képesek megvásárolni a vevők különböző árszinteken. A **keresleti függvény (D)** jellemzően negatív meredekségű: minél alacsonyabb egy termék ára, annál nagyobb a rá irányuló kereslet, és fordítva — ezt nevezzük a **kereslet törvényének**. A keresletet az áron kívül számos egyéb tényező is befolyásolja: a fogyasztók jövedelme, ízlése, a helyettesítő és kiegészítő termékek árai, valamint a jövőbeli árváltozásra vonatkozó várakozások.

## A kínálat

A **kínálat** azt mutatja meg, hogy a termelők mekkora mennyiséget hajlandóak és képesek piacra vinni egy adott terméknél, különböző árszinteken. A **kínálati függvény (S)** jellemzően pozitív meredekségű: minél magasabb az ár, a termelők annál nagyobb mennyiséget hajlandóak kínálni, mivel ez nagyobb profitot ígér. A kínálatot befolyásoló tényezők közé tartozik a termelési költségek alakulása, a technológiai fejlődés, a termelők száma és a jövőbeli várakozások.

## A piaci egyensúly

A piac akkor van **egyensúlyban**, amikor egy adott áron a kereslet és a kínálat mennyisége megegyezik — ezt az árat **egyensúlyi (piactisztító) árnak** nevezzük. Ha a piaci ár az egyensúlyi ár felett van, **túlkínálat** (felesleg) alakul ki, ami lefelé nyomja az árat; ha az ár az egyensúlyi szint alatt van, **túlkereslet** (hiány) keletkezik, ami felfelé nyomja az árat. A piaci mechanizmus így — külső beavatkozás nélkül is — az egyensúly felé mozdítja el az árakat és a mennyiségeket ("láthatatlan kéz" — Adam Smith fogalma).

## A kereslet és a kínálat eltolódása

Fontos megkülönböztetni a **mennyiség változását** (elmozdulás a keresleti/kínálati görbe mentén, amit kizárólag az ár változása okoz) a **görbe eltolódásától** (amikor az áron kívüli tényezők — jövedelem, ízlés, technológia, várakozások — változnak meg, ami az egész görbét jobbra vagy balra tolja el, új egyensúlyi árat és mennyiséget eredményezve).

## A piaci mechanizmus szerepe és korlátai

A piaci mechanizmus előnye, hogy decentralizáltan, gyorsan és hatékonyan koordinálja a gazdasági szereplők döntéseit, jelezve az erőforrások szűkösségét az árak révén. Ugyanakkor a piaci mechanizmus önmagában nem tökéletes: bizonyos esetekben **piaci kudarcok** (externáliák, közjavak, információs aszimmetria, monopóliumok) léphetnek fel, amelyek indokolttá tehetik az állami beavatkozást.

## Jelentősége

A kereslet-kínálat modellje és a piaci mechanizmus megértése a mikroökonómia alapköve: ez magyarázza meg, hogyan alakulnak ki az árak a piacgazdaságban, hogyan reagálnak a gazdasági szereplők az árváltozásokra, és hogyan koordinálja a piac — jellemzően hatékonyan, de nem hibátlanul — a milliónyi decentralizált gazdasági döntést.
`,
    key_concepts: [
      "kereslet és keresleti függvény",
      "kínálat és kínálati függvény",
      "piaci egyensúly és egyensúlyi ár",
      "túlkínálat és túlkereslet",
      "a görbe eltolódása vs. elmozdulás a görbén",
    ],
    source_refs: [
      { label: "Piac (Econom.hu)", url: "http://www.econom.hu/piac/" },
      { label: "Piac (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Piac" },
      { label: "Kereslet-kínálat (Econom.hu)", url: "http://www.econom.hu/kereslet-kinalat/" },
      { label: "A piac és működése – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-piac-es-mukodese/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki a kereslet törvénye?",
        options: [
          "minél alacsonyabb az ár, annál nagyobb a kereslet",
          "minél magasabb az ár, annál nagyobb a kereslet",
          "az ár nem befolyásolja a keresletet",
          "a kereslet mindig állandó"
        ],
        correct_answer: "minél alacsonyabb az ár, annál nagyobb a kereslet",
        explanation: "A keresleti függvény jellemzően negatív meredekségű: az árcsökkenés növeli, az áremelkedés csökkenti a keresett mennyiséget.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor van egy piac egyensúlyban?",
        options: [
          "amikor egy adott áron a kereslet és a kínálat mennyisége megegyezik",
          "amikor csak egy eladó van a piacon",
          "amikor az árak folyamatosan emelkednek",
          "amikor nincs verseny a piacon"
        ],
        correct_answer: "amikor egy adott áron a kereslet és a kínálat mennyisége megegyezik",
        explanation: "A piaci egyensúly az az állapot, amikor a keresett és a kínált mennyiség megegyezik egy adott (egyensúlyi) áron.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik, ha a piaci ár az egyensúlyi ár fölé emelkedik?",
        options: ["túlkínálat (felesleg) alakul ki", "túlkereslet (hiány) alakul ki", "a kínálat eltűnik", "nincs változás"],
        correct_answer: "túlkínálat (felesleg) alakul ki",
        explanation: "Az egyensúlyi ár fölötti áron a kínált mennyiség meghaladja a keresett mennyiséget, ami túlkínálatot (felesleget) eredményez.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi okozza a keresleti görbe egészének eltolódását (nem csak az elmozdulást a görbén)?",
        options: [
          "az áron kívüli tényezők (pl. jövedelem, ízlés) megváltozása",
          "kizárólag a termék árának változása",
          "a kínálati görbe alakja",
          "a piaci egyensúly megléte"
        ],
        correct_answer: "az áron kívüli tényezők (pl. jövedelem, ízlés) megváltozása",
        explanation: "A görbe egészének eltolódását az áron kívüli tényezők (jövedelem, ízlés, helyettesítő termékek ára, várakozások) változása okozza, míg a görbén belüli elmozdulást az ár változása.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki fogalmazta meg a piac önszabályozó mechanizmusát jelképező „láthatatlan kéz” fogalmát?",
        options: ["Adam Smith", "John Maynard Keynes", "Karl Marx", "Milton Friedman"],
        correct_answer: "Adam Smith",
        explanation: "Adam Smith klasszikus közgazdász alkotta meg a „láthatatlan kéz” metaforát a piac önszabályozó mechanizmusának leírására.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "a-fogyasztoi-magatartas-es-a-kereslet",
    title: "A fogyasztói magatartás és a kereslet",
    level: "mindketto",
    theme: "Mikroökonómia",
    order_index: 3,
    summary_markdown:
      "A fogyasztó korlátozott jövedelme mellett igyekszik a lehető legnagyobb hasznosságot (elégedettséget) elérni: döntéseit a termékek hasznossága, ára és a rendelkezésre álló jövedelem együttesen határozza meg.",
    content_markdown: `
## A fogyasztó mint gazdasági szereplő

A **fogyasztó (háztartás)** a gazdaság egyik alapvető szereplője, amely jövedelméből (munkabér, egyéb jövedelmek) javakat és szolgáltatásokat vásárol szükségletei kielégítésére. A fogyasztói döntéseket alapvetően a **hasznosság-maximalizálás** elve vezérli: a fogyasztó a rendelkezésére álló korlátozott jövedelemből igyekszik a lehető legnagyobb elégedettséget (hasznosságot) elérni.

## A hasznosság fogalma

A **hasznosság** azt az elégedettséget, szükségletkielégítést fejezi ki, amelyet egy adott jószág fogyasztása nyújt az egyénnek. Mivel a hasznosság szubjektív és nehezen mérhető közvetlenül, a közgazdaságtan a **határhasznosság** fogalmával dolgozik: ez azt mutatja meg, mekkora hasznosságnövekedést eredményez egy adott jószágból elfogyasztott eggyel több egység. A **csökkenő határhasznosság törvénye** szerint egy jószág fogyasztásának növekedésével az egyes további egységek által nyújtott többlethaszon fokozatosan csökken (pl. az első pohár víz szomjas állapotban sokkal nagyobb hasznosságot nyújt, mint a tizedik).

## A fogyasztói döntést befolyásoló tényezők

A fogyasztói kereslet kialakulását több tényező befolyásolja: a termék **ára**, a fogyasztó **jövedelme** (a jövedelem növekedése általában növeli a keresletet — kivéve az ún. inferior javaknál), a **helyettesítő és kiegészítő termékek** árai, a fogyasztó **ízlése és preferenciái**, valamint a jövőbeli árváltozásokra vonatkozó **várakozások**. Ezek együttesen alakítják ki az egyéni és — összesítve — a piaci keresletet.

## A jövedelmi és helyettesítési hatás

Egy termék árváltozása két csatornán keresztül hat a fogyasztásra. A **helyettesítési hatás** azt fejezi ki, hogy egy termék drágulása esetén a fogyasztó a relatíve olcsóbbá váló helyettesítő termékek felé fordul. A **jövedelmi hatás** azt mutatja, hogy egy termék árváltozása hogyan befolyásolja a fogyasztó reáljövedelmét (vásárlóerejét): egy drágulás — jövedelme változatlansága mellett — csökkenti a fogyasztó tényleges vásárlóerejét.

## A fogyasztói magatartást befolyásoló marketingeszközök

A vállalatok a fogyasztói döntéseket különféle marketingeszközökkel igyekeznek befolyásolni: reklám és promóció, árazási stratégiák (kedvezmények, csomagajánlatok), termékdifferenciálás (márkaépítés), valamint az értékesítési csatornák kialakítása mind hozzájárulnak ahhoz, hogy a fogyasztók egy adott termék vagy márka mellett döntsenek. A modern fogyasztói magatartás vizsgálata figyelembe veszi a pszichológiai, társadalmi és kulturális tényezőket is (referenciacsoportok hatása, impulzusvásárlás, márkahűség).

## A fogyasztói többlet

A **fogyasztói többlet** azt a hasznot fejezi ki, amelyet a fogyasztó abból nyer, hogy egy terméket alacsonyabb áron tud megvásárolni, mint amennyit ténylegesen hajlandó lett volna érte fizetni. Ez a fogalom a keresleti görbe és a piaci ár közötti terület nagyságával szemléltethető, és a piaci hatékonyság egyik fontos mércéje.

## Fogyasztói magatartás válsághelyzetekben

A gazdasági válságok és bizonytalan időszakok jelentősen átalakítják a fogyasztói magatartást: a fogyasztók jellemzően óvatosabbá válnak, csökkentik a nem alapvető (luxus-) kiadásaikat, és felértékelődik számukra az ár-érték arány, valamint a megtakarítás szerepe — ezt a jelenséget a közelmúlt gazdasági válságai (2008-as világválság, a koronavírus-járvány gazdasági hatásai) is jól szemléltették.

## Jelentősége

A fogyasztói magatartás és a kereslet megértése alapvető a mikroökonómiában: ez magyarázza meg, hogyan születnek az egyéni vásárlási döntések, és hogyan aggregálódnak ezek a piaci keresletté, amely — a kínálattal együtt — meghatározza a piaci árakat és mennyiségeket.
`,
    key_concepts: [
      "hasznosság és határhasznosság",
      "csökkenő határhasznosság törvénye",
      "helyettesítési és jövedelmi hatás",
      "fogyasztói magatartást befolyásoló tényezők",
      "fogyasztói többlet",
    ],
    source_refs: [
      { label: "Fogyasztói magatartás és a kereslet – kidolgozott tétel (Érettségitételek.com)", url: "https://erettsegitetelek.com/2022/09/fogyasztoi-magatartas-es-a-kereslet/" },
      { label: "Fogyasztói magatartás (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Fogyasztói_magatartás" },
      { label: "Egyre inkább válságok formálják a fogyasztók döntéseit (Index)", url: "https://index.hu/gazdasag/2023/03/03/valsagok-es-fogyasztoi-szokasok-ujabb-kutatasok-usa-magyarorszag/" },
      { label: "Gazdasági és jogi alapismeretek – Mikrogazdasági alapok – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/gazdasagi-es-jogi-alapismeretek-mikrogazdasagi-alapok/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki a határhasznosság fogalma?",
        options: [
          "az elfogyasztott eggyel több egység által nyújtott hasznosságnövekedést",
          "a termék piaci árát",
          "a fogyasztó teljes jövedelmét",
          "a kínálat mennyiségét"
        ],
        correct_answer: "az elfogyasztott eggyel több egység által nyújtott hasznosságnövekedést",
        explanation: "A határhasznosság azt mutatja meg, mekkora többlethasznot nyújt egy jószág fogyasztásának egy további egysége.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit mond ki a csökkenő határhasznosság törvénye?",
        options: [
          "a fogyasztás növekedésével az egyes további egységek többlethaszna fokozatosan csökken",
          "minden egység fogyasztása azonos hasznosságot nyújt",
          "a hasznosság a jövedelemtől független",
          "a határhasznosság mindig nő"
        ],
        correct_answer: "a fogyasztás növekedésével az egyes további egységek többlethaszna fokozatosan csökken",
        explanation: "A csökkenő határhasznosság törvénye szerint egy jószágból egyre többet fogyasztva az újabb egységek egyre kisebb hasznosságnövekedést nyújtanak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a helyettesítési hatás?",
        options: [
          "egy termék drágulása esetén a fogyasztó az olcsóbb helyettesítő termékek felé fordul",
          "a jövedelem növekedése automatikusan növeli a keresletet",
          "a kínálat és a kereslet mindig megegyezik",
          "a fogyasztó soha nem vált márkát"
        ],
        correct_answer: "egy termék drágulása esetén a fogyasztó az olcsóbb helyettesítő termékek felé fordul",
        explanation: "A helyettesítési hatás azt írja le, hogy az árváltozás miatt a fogyasztó a relatíve olcsóbbá váló helyettesítő termékek felé mozdul el.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fogyasztói többlet?",
        options: [
          "a haszon, amelyet a fogyasztó abból nyer, hogy alacsonyabb áron vásárol, mint amennyit hajlandó lett volna fizetni",
          "a vállalat profitja",
          "az állam adóbevétele",
          "a munkabér összege"
        ],
        correct_answer: "a haszon, amelyet a fogyasztó abból nyer, hogy alacsonyabb áron vásárol, mint amennyit hajlandó lett volna fizetni",
        explanation: "A fogyasztói többlet a fizetési hajlandóság és a ténylegesen fizetett ár közötti különbségből fakadó haszon.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan változik jellemzően a fogyasztói magatartás gazdasági válság idején?",
        options: [
          "a fogyasztók óvatosabbá válnak, csökkentik a luxuskiadásokat, és felértékelődik a megtakarítás",
          "a fogyasztók korlátlanul növelik luxuskiadásaikat",
          "a fogyasztói magatartás nem változik",
          "megszűnik a márkahűség szerepe"
        ],
        correct_answer: "a fogyasztók óvatosabbá válnak, csökkentik a luxuskiadásokat, és felértékelődik a megtakarítás",
        explanation: "Válsághelyzetekben a fogyasztók jellemzően visszafogják a nem alapvető kiadásaikat, és nagyobb hangsúlyt fektetnek az ár-érték arányra és a megtakarításra.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "a-vallalkozasok-es-a-vallalkozasi-formak",
    title: "A vállalkozások és a vállalkozási formák",
    level: "mindketto",
    theme: "Mikroökonómia",
    order_index: 4,
    summary_markdown:
      "A vállalkozás a piaci szereplők profitszerzés céljából, saját felelősségükre végzett gazdasági tevékenysége, amely Magyarországon egyéni vállalkozás vagy különféle gazdasági társasági formák (bt., kft., rt.) keretében működhet.",
    content_markdown: `
## A vállalkozás fogalma

A **vállalkozás** olyan emberi gazdasági tevékenység, amelynek alapvető célja a fogyasztói szükségletek kielégítése mellett a **profit (nyereség)** elérése. A vállalkozó a piaci szereplőktől elkülönült, saját nevében és felelősségére végzi tevékenységét, piaci kapcsolatokon keresztül kötődik a többi gazdasági szereplőhöz, és tevékenysége szükségszerűen **kockázatvállalással** jár, hiszen a jövőbeli piaci feltételek bizonytalanok.

## A vállalkozások céljai

A vállalkozások elsődleges célja a **profitmaximalizálás**, de emellett további célokat is követhetnek: a piaci részesedés növelése, a hosszú távú fennmaradás és stabilitás biztosítása, a vállalat értékének (piaci értékelésének) növelése, valamint egyre inkább a társadalmi felelősségvállalás (fenntarthatóság, etikus működés) szempontjai is megjelennek a vállalati célrendszerekben.

## Az egyéni vállalkozás

Az **egyéni vállalkozás** a legegyszerűbb vállalkozási forma: egy természetes személy önállóan, saját nevében folytat gazdasági tevékenységet. Az egyéni vállalkozó **teljes vagyonával, korlátlanul felel** a vállalkozás kötelezettségeiért, vagyis nincs jogi elkülönülés a vállalkozó személyes és üzleti vagyona között. Ez a forma alacsony alapítási költséggel és egyszerű adminisztrációval jár, de a korlátlan felelősség komoly kockázatot jelent.

## A gazdasági társaságok típusai

A **gazdasági társaságok** két nagy csoportra oszthatók: a **személyegyesítő társaságokra** (ahol a tagok személyes közreműködése meghatározó) és a **tőkeegyesítő társaságokra** (ahol a befektetett tőke a meghatározó, a tagok felelőssége korlátozott). A közkereseti társaság (kkt.) és a betéti társaság (bt.) személyegyesítő formák: a bt.-ben a beltag korlátlanul, a kültag csak a vagyoni betétje erejéig felel. A tőkeegyesítő formák közé tartozik a **korlátolt felelősségű társaság (kft.)** — Magyarország legnépszerűbb vállalkozási formája —, amelyben a tagok felelőssége alapvetően a törzsbetétjük összegére korlátozódik, valamint a **részvénytársaság (rt.)**, amely nagyobb, tőkeigényes vállalkozások esetén jellemző, és részvények kibocsátásával gyűjt tőkét.

## A vállalkozás finanszírozása

A vállalkozások működésükhöz és fejlesztéseikhez **finanszírozásra** szorulnak, amelynek forrásai lehetnek **saját források** (a tulajdonosok befektetett tőkéje, a visszaforgatott nyereség) és **idegen források** (banki hitel, kötvénykibocsátás, szállítói hitel). A finanszírozási döntések (a saját és idegen tőke aránya, azaz a tőkeáttétel mértéke) alapvetően befolyásolják a vállalkozás kockázati profilját és növekedési lehetőségeit.

## A vállalkozásalapítás lépései

Egy vállalkozás alapításához jellemzően szükséges egy életképes üzleti ötlet és **üzleti terv** kidolgozása, a megfelelő vállalkozási forma kiválasztása, a szükséges tőke (saját és/vagy idegen forrás) előteremtése, valamint a jogszabályi (cégbírósági bejegyzés, adószám igénylése, engedélyek) követelmények teljesítése.

## A kis- és középvállalkozások szerepe

A **kis- és középvállalkozások (kkv-k)** a magyar és az európai gazdaság gerincét alkotják: a vállalkozások túlnyomó többsége ebbe a kategóriába tartozik, és jelentős szerepet játszanak a foglalkoztatásban és a GDP előállításában, ugyanakkor jellemzően nehezebben jutnak finanszírozáshoz és forrásokhoz, mint a nagyvállalatok.

## Jelentősége

A vállalkozások és a vállalkozási formák ismerete alapvető a piacgazdaság működésének megértéséhez: a vállalkozók kockázatvállalása, innovációja és profitorientált tevékenysége hajtja a gazdasági növekedést, míg a megfelelő vállalkozási forma kiválasztása alapvetően meghatározza a felelősségvállalás mértékét, az adózást és a finanszírozási lehetőségeket.
`,
    key_concepts: [
      "vállalkozás fogalma és célrendszere",
      "egyéni vállalkozás és korlátlan felelősség",
      "személyegyesítő és tőkeegyesítő társaságok (bt., kft., rt.)",
      "saját és idegen finanszírozási források",
      "kis- és középvállalkozások szerepe",
    ],
    source_refs: [
      { label: "A vállalkozások csoportosítása méret, tevékenységi kör, vállalkozási forma szerint (Érettségitételek.com)", url: "https://erettsegitetelek.com/2020/12/a-vallalkozasok-csoportositasa-meret-tevekenysegi-kor-vallalkozasi-forma-szerint/" },
      { label: "Vállalat (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Vállalat" },
      { label: "Vállalkozási formák (Budapesti Kereskedelmi és Iparkamara)", url: "https://bkik.hu/vallalkozasi-formak" },
      { label: "Gazdasági és jogi alapismeretek – Mikrogazdasági alapok – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/gazdasagi-es-jogi-alapismeretek-mikrogazdasagi-alapok/2/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a vállalkozás elsődleges célja?",
        options: ["a profit (nyereség) elérése", "kizárólag a foglalkoztatás növelése", "az állami támogatások megszerzése", "a piaci verseny megszüntetése"],
        correct_answer: "a profit (nyereség) elérése",
        explanation: "A vállalkozás alapvető célja a fogyasztói szükségletek kielégítése mellett a profit elérése, kockázatvállalás mellett.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan felel az egyéni vállalkozó a vállalkozás kötelezettségeiért?",
        options: [
          "teljes vagyonával, korlátlanul",
          "csak a befektetett tőke erejéig",
          "egyáltalán nem felel",
          "csak az állam felel helyette"
        ],
        correct_answer: "teljes vagyonával, korlátlanul",
        explanation: "Az egyéni vállalkozó esetében nincs jogi elkülönülés a személyes és az üzleti vagyon között, ezért korlátlan felelősséggel tartozik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik Magyarország legnépszerűbb tőkeegyesítő vállalkozási formája?",
        options: ["korlátolt felelősségű társaság (kft.)", "betéti társaság (bt.)", "egyéni vállalkozás", "közkereseti társaság (kkt.)"],
        correct_answer: "korlátolt felelősségű társaság (kft.)",
        explanation: "A kft. a legnépszerűbb magyarországi vállalkozási forma, amelyben a tagok felelőssége alapvetően a törzsbetétjük összegére korlátozódik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a betéti társaság (bt.) beltagját?",
        options: [
          "korlátlanul felel a társaság kötelezettségeiért",
          "csak a vagyoni betétje erejéig felel",
          "nem vehet részt az ügyvezetésben",
          "kizárólag külföldi állampolgár lehet"
        ],
        correct_answer: "korlátlanul felel a társaság kötelezettségeiért",
        explanation: "A bt.-ben a beltag korlátlanul felel, míg a kültag felelőssége a vagyoni betétje összegére korlátozódik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelentenek az idegen finanszírozási források egy vállalkozás esetében?",
        options: [
          "banki hitel, kötvénykibocsátás, szállítói hitel",
          "a tulajdonosok befektetett tőkéje",
          "a visszaforgatott nyereség",
          "az állami tulajdon"
        ],
        correct_answer: "banki hitel, kötvénykibocsátás, szállítói hitel",
        explanation: "Az idegen források olyan külső finanszírozási eszközök, mint a banki hitel vagy a kötvénykibocsátás, szemben a saját forrásokkal (tulajdonosi tőke, nyereség).",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "a-termeles-eroforrasai-termelesi-tenyezok",
    title: "A termelés erőforrásai (termelési tényezők)",
    level: "mindketto",
    theme: "Mikroökonómia",
    order_index: 5,
    summary_markdown:
      "A termeléshez szükséges erőforrásokat (föld, munka, tőke, illetve a modern felfogásban a vállalkozói tudás) termelési tényezőknek nevezzük, amelyek kombinálásával és felhasználásának hatékonyságával a vállalatok a termelési költségeiket és profitjukat alakítják.",
    content_markdown: `
## A termelési tényezők fogalma

**Termelési tényezőknek (erőforrásoknak)** nevezzük mindazokat az elemeket, amelyek a javak (termékek és szolgáltatások) előállításához szükségesek. A klasszikus közgazdaságtan három alapvető termelési tényezőt különböztet meg: a **földet**, a **munkát** és a **tőkét** — a modern közgazdaságtan ehhez gyakran negyedik tényezőként hozzáadja a **vállalkozói készséget (know-how)** is, amely a termelési tényezők összekapcsolásáért és a kockázatvállalásért felelős.

## A föld mint termelési tényező

A **föld** termelési tényezőbe tartozik a mezőgazdaságban megművelt terület, a telkek, az építési területek, valamint a természeti erőforrások (ásványkincsek, vízkészletek, erdők). A föld sajátossága, hogy — legalábbis rövid távon — kínálata rögzített (nem szaporítható), ezért a földhasználat hatékonysága és a technológiai fejlesztés kiemelt jelentőségű.

## A munka mint termelési tényező

A **munka** a háztartások (munkavállalók) által a termelésre fordított fizikai és szellemi tevékenységet jelenti. A munka mint termelési tényező ára a **bér**, amely a munkaerőpiacon a munkakereslet (vállalatok munkaerő-igénye) és a munkakínálat (a munkavállalók rendelkezésre álló munkaidő-kínálata) találkozásából alakul ki. A munka termelékenységét befolyásolja a képzettség (humán tőke), a technológiai ellátottság és a munkaszervezés hatékonysága.

## A tőke mint termelési tényező

A **tőke** azokat a tartós javakat jelenti, amelyeket azért hoztak létre, hogy más javak előállítását szolgálják — ide tartoznak a gépek, berendezések, épületek, infrastruktúra (**reáltőke**), valamint a termeléshez szükséges pénzeszközök (**pénztőke**). A tőke ára a **kamat**, amely a tőke felhasználásáért fizetett ellenszolgáltatás. A tőkeberuházások (beruházási döntések) alapvetően meghatározzák egy gazdaság hosszú távú növekedési képességét.

## A vállalkozói készség

A **vállalkozói készség (vállalkozói tudás)** a negyedik termelési tényező: az a képesség, amellyel a vállalkozó összekapcsolja a földet, a munkát és a tőkét egy termelési folyamatban, innovatív megoldásokat visz be a gazdaságba, és kockázatot vállal a bizonytalan jövőbeli eredmény reményében. Ennek "ára" a **profit (vállalkozói nyereség)**.

## A termelési tényezők piacai (tényezőpiacok)

A termelési tényezőknek is saját piacaik vannak (**tényezőpiacok**): a munkaerőpiac, a tőkepiac és a földpiac, ahol a keresletet a termelést folytató vállalatok, a kínálatot pedig a tényezők tulajdonosai (háztartások) alkotják. A tényezőpiacokon kialakuló árak (bér, kamat, földjáradék, profit) egyben a háztartások jövedelmének forrásai is — ez a gazdaság **körforgásának** alapja: a háztartások termelési tényezőket adnak el a vállalatoknak, cserébe jövedelmet kapnak, amelyet aztán a vállalatok által előállított javak megvásárlására fordítanak.

## A termelési költségek és a hatékonyság

A vállalatok termelési döntéseiben kulcsszerepet játszik a termelési tényezők hatékony kombinálása: az **explicit költségek** (ténylegesen kifizetett kiadások, pl. bér, nyersanyag) mellett az **implicit költségeket** (alternatívaköltségeket, például a tulajdonos saját munkájának vagy tőkéjének elmaradt hozamát) is figyelembe kell venni a valódi gazdasági profit megállapításához, amely eltér a puszta számviteli nyereségtől.

## Jelentősége

A termelési tényezők és azok piacainak ismerete alapvető a mikroökonómiában: ez magyarázza meg, hogyan jönnek létre a javak, hogyan alakulnak ki a jövedelmek (bér, kamat, profit) a gazdaságban, és hogyan függ össze a termelési tényezők hatékony felhasználása a vállalatok versenyképességével és a gazdaság egészének teljesítményével.
`,
    key_concepts: [
      "föld, munka, tőke mint klasszikus termelési tényezők",
      "vállalkozói készség mint negyedik tényező",
      "tényezőpiacok (munkaerőpiac, tőkepiac, földpiac)",
      "bér, kamat, földjáradék, profit",
      "explicit és implicit költségek",
    ],
    source_refs: [
      { label: "Termelési tényezők (Econom.hu)", url: "http://www.econom.hu/termelesi-tenyezok-2/" },
      { label: "Termelési tényező (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Termelési_tényező" },
      { label: "A vállalat termelői magatartása (Érettségitételek.com)", url: "https://erettsegitetelek.com/2022/09/a-vallalat-termeloi-magatartasa/" },
      { label: "Gazdasági elemzések költségoldalról – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/gazdasagi-elemzesek-koltsegoldalrol/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik három tényezőt tekinti a klasszikus közgazdaságtan alapvető termelési tényezőnek?",
        options: ["föld, munka, tőke", "kereslet, kínálat, ár", "GDP, infláció, munkanélküliség", "bank, tőzsde, biztosító"],
        correct_answer: "föld, munka, tőke",
        explanation: "A klasszikus termelési tényezők a föld, a munka és a tőke; a modern felfogás ehhez hozzáadja a vállalkozói készséget is.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a munka mint termelési tényező ára?",
        options: ["a bér", "a kamat", "a profit", "a földjáradék"],
        correct_answer: "a bér",
        explanation: "A munka ára a bér, amely a munkaerőpiacon a munkakereslet és a munkakínálat találkozásából alakul ki.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a tőke ára?",
        options: ["a kamat", "a bér", "a földjáradék", "az adó"],
        correct_answer: "a kamat",
        explanation: "A tőke felhasználásáért fizetett ellenszolgáltatás a kamat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a vállalkozói készség (negyedik termelési tényező) szerepe?",
        options: [
          "a termelési tényezők összekapcsolása és a kockázatvállalás",
          "kizárólag a munkaerő biztosítása",
          "a föld megművelése",
          "az állami szabályozás betartatása"
        ],
        correct_answer: "a termelési tényezők összekapcsolása és a kockázatvállalás",
        explanation: "A vállalkozói készség a föld, a munka és a tőke innovatív összekapcsolását és a bizonytalan jövőbeli eredmény melletti kockázatvállalást jelenti.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az explicit és az implicit költségek között?",
        options: [
          "az explicit költség ténylegesen kifizetett kiadás, az implicit az elmaradt alternatív hozam",
          "az implicit költség mindig magasabb, mint az explicit",
          "csak a nagyvállalatoknak vannak implicit költségeik",
          "nincs közöttük különbség"
        ],
        correct_answer: "az explicit költség ténylegesen kifizetett kiadás, az implicit az elmaradt alternatív hozam",
        explanation: "Az explicit költségek a ténylegesen kifizetett kiadások, az implicit költségek pedig az alternatívaköltségek (pl. a tulajdonos elmaradt saját hozama).",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "piaci-formak-tokeletes-verseny-monopolium-oligopolium",
    title: "Piaci formák (tökéletes verseny, monopólium, oligopólium)",
    level: "mindketto",
    theme: "Mikroökonómia",
    order_index: 6,
    summary_markdown:
      "A piaci szerkezeteket a szereplők száma és piaci ereje alapján tökéletes versenytől a monopóliumig terjedő skálán helyezhetjük el: minél kevesebb a piaci szereplő, annál nagyobb az árbefolyásoló képességük, és annál távolabb kerül a piac a társadalmilag optimális kimenettől.",
    content_markdown: `
## A piaci formák csoportosítása

A **piaci formákat (piaci szerkezeteket)** aszerint csoportosítjuk, hogy hány eladó és vevő van jelen a piacon, és mekkora az egyes szereplők árbefolyásoló képessége. A négy alapvető piaci forma — a verseny fokának csökkenő sorrendjében — a tökéletes verseny, a monopolisztikus verseny, az oligopólium és a monopólium.

## A tökéletes verseny

A **tökéletes verseny** olyan piaci forma, ahol nagyon sok kicsi eladó és vevő van jelen, egyikük sem képes egyedül befolyásolni a piaci árat (**árelfogadók**), a termékek homogének (egymással teljesen helyettesíthetők), a piacra való be- és kilépés szabad, és minden szereplő tökéletes információval rendelkezik. Ilyen piac a valóságban ritkán fordul elő tiszta formában, de egyes homogén termékek (pl. mezőgazdasági alaptermékek) piaca megközelíti ezt a modellt. A tökéletes verseny biztosítja — azonos technikai és költségszint mellett — a legalacsonyabb árat és a legnagyobb termelési mennyiséget, valamint a gazdaság erőforrásainak legjobb allokációját.

## A monopólium

A **monopólium** olyan piac, ahol egyetlen eladó látja el a teljes piaci keresletet, versenytárs nélkül. Megkülönböztetünk **természetes monopóliumot** (ahol a magas fix költségek miatt egyetlen szereplőnek éri meg működnie, pl. vezetékes közműszolgáltatások) és **mesterséges monopóliumot** (ahol jogi-intézményi védelem — pl. szabadalom, állami koncesszió — óvja az egyetlen szereplőt a versenytől, pl. a Paksi Atomerőmű az atomenergia-termelésben). A monopolista profitmaximalizáló mennyiséget úgy határozza meg, hogy határköltsége megegyezzen a határbevételével, ám ennek eredményeként magasabb árat szab és kevesebbet termel, mint amennyi társadalmilag optimális lenne — ezért a monopolizált iparágakban a jóléti szempontból nem optimális az erőforrás-elosztás.

## Az oligopólium

Az **oligopólium** olyan piaci forma, ahol néhány nagyobb szereplő látja el a teljes piacot (pl. mobiltelefon-szolgáltatók, autógyártók). Az oligopolisták döntései kölcsönösen függnek egymástól: az egyik szereplő árazási vagy termelési döntése közvetlenül befolyásolja a versenytársak stratégiáját, ami gyakran vezet hallgatólagos vagy kifejezett összejátszáshoz (kartell), illetve élénk nem árjellegű versenyhez (termékdifferenciálás, reklám).

## A monopolisztikus verseny

A **monopolisztikus verseny** olyan piacokon alakul ki, ahol sok eladó van jelen, de termékeiket márkázással, minőségi vagy egyéb jellemzőkkel megkülönböztetik egymástól (termékdifferenciálás), miközben alapvetően ugyanazt a szükségletet elégítik ki (pl. éttermek, ruházati márkák). Ez a piaci forma a tökéletes verseny és a monopólium közötti átmenetet képviseli: sok szereplő van, de mindegyiküknek van bizonyos fokú árbefolyásoló képessége a termékdifferenciálás révén.

## A versenyszabályozás szerepe

Mivel a monopóliumok és az oligopolisztikus összejátszás (kartellezés) károsíthatja a fogyasztói jólétet (magasabb árak, alacsonyabb kínálat, innováció visszafogása), a modern gazdaságokban **versenyszabályozó hatóságok** (Magyarországon a Gazdasági Versenyhivatal, az Európai Unióban az Európai Bizottság versenypolitikai főigazgatósága) felügyelik a piacokat, tiltják a versenykorlátozó megállapodásokat, és szabályozzák a természetes monopóliumok (pl. energiaszolgáltatók) árazását.

## Jelentősége

A piaci formák (tökéletes verseny, monopolisztikus verseny, oligopólium, monopólium) rendszerének ismerete alapvető a mikroökonómiában: ez magyarázza meg, miért térnek el jelentősen az árak és a termelési mennyiségek a különböző iparágakban, és miért indokolt az állami versenyszabályozás a piaci hatékonyság és a fogyasztói érdekek védelme érdekében.
`,
    key_concepts: [
      "tökéletes verseny és árelfogadó szereplők",
      "monopólium (természetes és mesterséges)",
      "oligopólium és kölcsönös függőség",
      "monopolisztikus verseny és termékdifferenciálás",
      "versenyszabályozás (Gazdasági Versenyhivatal)",
    ],
    source_refs: [
      { label: "Piaci formák jellemzése, versenyszabályozás – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/piaci-formak-jellemzese-versenyszabalyozas/" },
      { label: "Monopólium (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Monopólium" },
      { label: "Oligopólium (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Oligopólium" },
      { label: "A tökéletesen versenyző vállalat piaci stratégiája – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-tokeletesen-versenyzo-vallalat-piaci-strategiaja/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a tökéletes versenyt?",
        options: [
          "sok kicsi árelfogadó szereplő, homogén termékek, szabad piacra lépés",
          "egyetlen eladó a piacon",
          "néhány nagy szereplő kölcsönös függőséggel",
          "termékdifferenciálás sok eladó között"
        ],
        correct_answer: "sok kicsi árelfogadó szereplő, homogén termékek, szabad piacra lépés",
        explanation: "A tökéletes versenyt sok kicsi, árat elfogadó szereplő, homogén termékek és a szabad piacra lépés jellemzi.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a természetes és a mesterséges monopólium között?",
        options: [
          "a természetes monopóliumnál a magas fix költségek, a mesterségesnél jogi védelem indokolja az egyeduralmat",
          "nincs közöttük különbség",
          "a mesterséges monopólium mindig állami tulajdonban van",
          "a természetes monopólium mindig illegális"
        ],
        correct_answer: "a természetes monopóliumnál a magas fix költségek, a mesterségesnél jogi védelem indokolja az egyeduralmat",
        explanation: "A természetes monopóliumnál a magas fix költségek miatt egy szereplőnek éri meg működnie, míg a mesterséges monopóliumot jogi-intézményi védelem (pl. szabadalom) óvja a versenytől.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az oligopol piacokat?",
        options: [
          "néhány nagy szereplő, akiknek döntései kölcsönösen függenek egymástól",
          "megszámlálhatatlanul sok kicsi szereplő",
          "egyetlen eladó és sok vevő",
          "teljes árelfogadás minden szereplő részéről"
        ],
        correct_answer: "néhány nagy szereplő, akiknek döntései kölcsönösen függenek egymástól",
        explanation: "Az oligopóliumban néhány nagy szereplő osztja fel a piacot, és döntéseik szorosan összefüggnek egymással.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a monopolisztikus versenyt?",
        options: [
          "sok eladó, akik termékdifferenciálással különböztetik meg kínálatukat",
          "egyetlen eladó a piacon",
          "csak két szereplő van a piacon",
          "a termékek teljesen homogének"
        ],
        correct_answer: "sok eladó, akik termékdifferenciálással különböztetik meg kínálatukat",
        explanation: "A monopolisztikus versenyben sok eladó van jelen, de termékeiket márkázással vagy egyéb jellemzőkkel megkülönböztetik egymástól.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik magyar hatóság felügyeli a versenyszabályozást?",
        options: ["Gazdasági Versenyhivatal", "Magyar Nemzeti Bank", "Központi Statisztikai Hivatal", "Nemzeti Adó- és Vámhivatal"],
        correct_answer: "Gazdasági Versenyhivatal",
        explanation: "Magyarországon a Gazdasági Versenyhivatal felelős a versenykorlátozó magatartások (pl. kartellek) felügyeletéért és szankcionálásáért.",
        difficulty: 2,
      },
    ],
  },
];
