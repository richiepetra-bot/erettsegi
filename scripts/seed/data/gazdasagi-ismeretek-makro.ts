import { TopicSeed } from "./angol";

export const gazdasagiIsmeretekMakroTopics: TopicSeed[] = [
  {
    slug: "a-munkaeropiac-es-a-munkanelkuliseg",
    title: "A munkaerőpiac és a munkanélküliség",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 7,
    summary_markdown:
      "A munkaerőpiacon a vállalatok munkaerő-kereslete és a háztartások munkaerő-kínálata találkozik: amikor a munkát vállalni akaró, de munkát nem találó emberek száma jelentős, munkanélküliségről beszélünk, amelynek több típusa és súlyos gazdasági-társadalmi következménye van.",
    content_markdown: `
## A munkaerőpiac működése

A **munkaerőpiac** a munkaerő mint termelési tényező piaca, ahol a **munkakeresletet** a munkaerőt alkalmazó vállalatok, a **munkakínálatot** pedig a munkát vállalni képes és akaró háztartások (munkavállalók) alkotják. A munkaerőpiacon kialakuló ár a **bér (munkabér)**, amely — a klasszikus piaci mechanizmushoz hasonlóan — a munkakereslet és a munkakínálat találkozásából alakul ki. A munkaerőpiac sajátossága, hogy a bérek „lefelé rugalmatlanok” lehetnek (nehezen csökkennek), ami tartós munkanélküliséghez vezethet még akkor is, ha a piac egyébként egyensúlyba kerülne.

## A munkanélküliség fogalma és mérése

**Munkanélkülinek** nevezzük azt a személyt, aki egy adott időpontban képes és akar is dolgozni, aktívan keres munkát, mégsem talál. A **munkanélküliségi ráta** a munkanélküliek számát viszonyítja a gazdaságilag aktív népességhez (a foglalkoztatottak és a munkanélküliek együttes létszámához). Fontos megkülönböztetni a **regisztrált munkanélküliséget** (akik hivatalosan bejelentkeztek álláskeresőként) a **tényleges munkanélküliségtől**, amely a rejtett munkanélkülieket (pl. akik feladták az álláskeresést) is magában foglalhatja.

## A munkanélküliség típusai

A munkanélküliségnek több típusát különböztetjük meg kiváltó okuk szerint. A **súrlódásos (frikciós) munkanélküliség** átmeneti jellegű, amikor valaki munkahelyet vált, vagy éppen most lép be a munkaerőpiacra, és rövid ideig keresi az új állását — ez normális jelenség egy dinamikus gazdaságban. A **strukturális munkanélküliség** akkor alakul ki, amikor a munkaerő-kínálat képzettsége és a munkaerő-kereslet igényei nem fedik egymást (pl. a gazdaság szerkezetváltása miatt egyes szakmák leértékelődnek, míg mások felértékelődnek). A **konjunkturális (ciklikus) munkanélküliség** a gazdasági ciklusok hullámzásával függ össze: gazdasági visszaesés idején a vállalatok csökkentik a termelést és elbocsátásokat hajtanak végre. A **szezonális (idényjellegű) munkanélküliség** bizonyos ágazatokban (mezőgazdaság, turizmus, építőipar) az évszakok váltakozásával jár együtt.

## A munkanélküliség gazdasági és társadalmi következményei

A munkanélküliség súlyos következményekkel jár mind az egyén, mind a gazdaság egésze számára. Az egyén szintjén jövedelemkiesést, létbizonytalanságot, a képzettség és a munkatapasztalat leértékelődését, valamint pszichés és társadalmi problémákat (elszigetelődés, önbecsülés csökkenése) okozhat. A gazdaság szintjén a munkanélküliség kihasználatlan termelési kapacitást (elmaradt GDP-t) jelent, növeli az állami szociális kiadásokat (munkanélküli-ellátás), miközben csökkenti az adóbevételeket.

## Az állami munkaerőpiaci szabályozás eszközei

Az állam több eszközzel avatkozhat be a munkaerőpiac működésébe: **passzív eszközök** közé tartozik a munkanélküli-ellátás (álláskeresési járadék), amely átmeneti jövedelemtámogatást nyújt; **aktív eszközök** közé tartozik az átképzés, a foglalkoztatást ösztönző támogatások, a közfoglalkoztatás és a munkaerő-közvetítés, amelyek célja a munkanélküliek mielőbbi visszavezetése a munkaerőpiacra. A **minimálbér** szabályozása szintén az állami munkaerőpiaci politika fontos eszköze, amely azonban — ha túl magasra kerül megállapításra a piaci egyensúlyi bér fölé — önmagában is munkanélküliséget okozhat.

## A természetes munkanélküliségi ráta

A közgazdaságtan elismeri, hogy a teljes (0%-os) munkanélküliség egy dinamikus gazdaságban nem reális és nem is kívánatos cél: mindig lesz bizonyos mértékű súrlódásos és strukturális munkanélküliség. Az ezt a szintet jelző **természetes munkanélküliségi rátát** tekintjük a „teljes foglalkoztatottság” gazdaságpolitikai céljának, amely fölött már a konjunkturális munkanélküliség jelenik meg.

## A munkanélküliség és az infláció kapcsolata

A közgazdaságtan hagyományosan feltételezi, hogy rövid távon fordított kapcsolat (átváltás) áll fenn a munkanélküliség és az infláció között (**Phillips-görbe**): az alacsonyabb munkanélküliség jellemzően magasabb inflációval jár együtt, és fordítva — bár ez az összefüggés hosszabb távon és bizonyos gazdasági helyzetekben (stagfláció) nem mindig érvényesül.

## Jelentősége

A munkaerőpiac és a munkanélküliség vizsgálata a makroökonómia egyik központi témája: a munkanélküliségi ráta a gazdaság állapotának egyik legfontosabb mutatója, amelynek alakulása közvetlenül befolyásolja a lakosság életszínvonalát, valamint alapvető gazdaságpolitikai (foglalkoztatáspolitikai) döntések tárgyát képezi.
`,
    key_concepts: [
      "munkanélküliségi ráta és mérése",
      "súrlódásos, strukturális, konjunkturális, szezonális munkanélküliség",
      "aktív és passzív munkaerőpiaci eszközök",
      "természetes munkanélküliségi ráta",
      "Phillips-görbe (munkanélküliség-infláció kapcsolat)",
    ],
    source_refs: [
      { label: "A munkapiac – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-munkapiac/" },
      { label: "Munkanélküliség (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Munkanélküliség" },
      { label: "Munkanélküliség fajtái: mi mit jelent pontosan? (Viapan.hu)", url: "https://www.viapan.hu/hu/blog/hr-szakmai-blog/munkanelkuliseg-fajtai" },
      { label: "Munkaerő (Központi Statisztikai Hivatal)", url: "https://www.ksh.hu/munkaero" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Kit tekintünk munkanélkülinek?",
        options: [
          "aki képes és akar dolgozni, aktívan keres munkát, de nem talál",
          "mindenkit, aki nem dolgozik",
          "csak azokat, akik regisztráltak a munkaügyi hivatalnál",
          "azokat, akik nyugdíjasok"
        ],
        correct_answer: "aki képes és akar dolgozni, aktívan keres munkát, de nem talál",
        explanation: "A munkanélküli fogalma azokra vonatkozik, akik munkaképesek, munkát akarnak vállalni és aktívan keresnek is, de nem találnak állást.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik munkanélküliség-típus jár együtt a gazdasági ciklusok hullámzásával?",
        options: ["konjunkturális (ciklikus) munkanélküliség", "súrlódásos munkanélküliség", "szezonális munkanélküliség", "strukturális munkanélküliség"],
        correct_answer: "konjunkturális (ciklikus) munkanélküliség",
        explanation: "A konjunkturális munkanélküliség a gazdasági fellendülés és visszaesés ciklusaihoz kapcsolódik: recesszió idején nő, fellendüléskor csökken.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi okozza a strukturális munkanélküliséget?",
        options: [
          "a munkaerő-kínálat képzettsége és a munkaerő-kereslet igényei nem fedik egymást",
          "az évszakok váltakozása",
          "a munkahelyváltás átmeneti időszaka",
          "a gazdasági fellendülés"
        ],
        correct_answer: "a munkaerő-kínálat képzettsége és a munkaerő-kereslet igényei nem fedik egymást",
        explanation: "A strukturális munkanélküliség a gazdaság szerkezetváltása miatt alakul ki, amikor egyes szakmák leértékelődnek, míg mások felértékelődnek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az aktív és a passzív munkaerőpiaci eszközök között?",
        options: [
          "az aktív eszközök (átképzés, közvetítés) a visszavezetést segítik, a passzívak (ellátás) átmeneti jövedelmet biztosítanak",
          "nincs közöttük különbség",
          "az aktív eszközök kizárólag a vállalatoknak szólnak",
          "a passzív eszközök megszüntetik a munkanélküliséget"
        ],
        correct_answer: "az aktív eszközök (átképzés, közvetítés) a visszavezetést segítik, a passzívak (ellátás) átmeneti jövedelmet biztosítanak",
        explanation: "Az aktív eszközök (átképzés, közfoglalkoztatás) a munkaerőpiacra való visszatérést segítik, a passzív eszközök (munkanélküli-ellátás) átmeneti jövedelemtámogatást nyújtanak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki a Phillips-görbe?",
        options: [
          "a munkanélküliség és az infláció közötti (rövid távú) fordított kapcsolatot",
          "a GDP és a népesség kapcsolatát",
          "a kereslet és a kínálat egyensúlyát",
          "az állami költségvetés bevételeit és kiadásait"
        ],
        correct_answer: "a munkanélküliség és az infláció közötti (rövid távú) fordított kapcsolatot",
        explanation: "A Phillips-görbe hagyományosan azt feltételezi, hogy alacsonyabb munkanélküliség jellemzően magasabb inflációval jár együtt, és fordítva.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mihez viszonyítja a munkanélküliségi ráta a munkanélküliek számát?",
        options: [
          "a gazdaságilag aktív népességhez (foglalkoztatottak és munkanélküliek együttes létszámához)",
          "a teljes népességhez, gyermekeket is beleértve",
          "az állami költségvetés kiadásaihoz",
          "a GDP nagyságához"
        ],
        correct_answer: "a gazdaságilag aktív népességhez (foglalkoztatottak és munkanélküliek együttes létszámához)",
        explanation: "A munkanélküliségi ráta a munkanélküliek számát a gazdaságilag aktív népességhez, azaz a foglalkoztatottak és munkanélküliek együttes létszámához viszonyítja.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik munkanélküliség-típus átmeneti, munkahelyváltás vagy a munkaerőpiacra való belépés idején jelentkezik?",
        options: [
          "a súrlódásos (frikciós) munkanélküliség",
          "a strukturális munkanélküliség",
          "a konjunkturális munkanélküliség",
          "a szezonális munkanélküliség"
        ],
        correct_answer: "a súrlódásos (frikciós) munkanélküliség",
        explanation: "A súrlódásos (frikciós) munkanélküliség átmeneti jellegű, amikor valaki munkahelyet vált vagy éppen belép a munkaerőpiacra.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely ágazatokban jellemző elsősorban a szezonális (idényjellegű) munkanélküliség?",
        options: [
          "mezőgazdaság, turizmus, építőipar",
          "banki szolgáltatások",
          "informatikai szektor",
          "közigazgatás"
        ],
        correct_answer: "mezőgazdaság, turizmus, építőipar",
        explanation: "A szezonális munkanélküliség olyan ágazatokban jelentkezik, ahol az évszakok váltakozása jelentősen befolyásolja a munkaerő-igényt, mint a mezőgazdaság, a turizmus vagy az építőipar.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi alakítja ki a bért a munkaerőpiacon?",
        options: [
          "a munkakereslet és a munkakínálat találkozása",
          "kizárólag az állami rendelet",
          "a fogyasztói árindex",
          "a tőzsdei árfolyamok"
        ],
        correct_answer: "a munkakereslet és a munkakínálat találkozása",
        explanation: "A munkaerőpiacon kialakuló ár, a bér, a munkakereslet (vállalatok igénye) és a munkakínálat (munkavállalók kínálata) találkozásából alakul ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért vezethet tartós munkanélküliséghez a bérek „lefelé rugalmatlansága”?",
        options: [
          "mert a bérek nehezen csökkennek, így a piac nem tud egyensúlyba kerülni még kínálati többlet esetén sem",
          "mert a bérek mindig azonnal csökkennek egyensúly hiányában",
          "mert az állam megtiltja a bérek emelését",
          "mert a munkanélküliség sosem függ a bérek szintjétől"
        ],
        correct_answer: "mert a bérek nehezen csökkennek, így a piac nem tud egyensúlyba kerülni még kínálati többlet esetén sem",
        explanation: "Ha a bérek nehezen csökkennek (lefelé rugalmatlanok), a munkaerőpiac nem tud egyensúlyba kerülni, ami tartós munkanélküliséghez vezethet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a regisztrált és a tényleges munkanélküliség között?",
        options: [
          "a tényleges munkanélküliség a rejtett munkanélkülieket (pl. az álláskeresést feladókat) is magában foglalhatja, a regisztrált csak a hivatalosan bejelentkezetteket",
          "nincs közöttük különbség",
          "a regisztrált munkanélküliség mindig magasabb",
          "a tényleges munkanélküliség csak a fiatalokra vonatkozik"
        ],
        correct_answer: "a tényleges munkanélküliség a rejtett munkanélkülieket (pl. az álláskeresést feladókat) is magában foglalhatja, a regisztrált csak a hivatalosan bejelentkezetteket",
        explanation: "A regisztrált munkanélküliség csak a hivatalosan bejelentkezett álláskeresőket számolja, míg a tényleges munkanélküliség a rejtett munkanélkülieket is magában foglalhatja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen következménnyel jár a munkanélküliség az egyén számára?",
        options: [
          "jövedelemkiesést, létbizonytalanságot és a képzettség leértékelődését okozhatja",
          "automatikusan magasabb jövedelmet biztosít",
          "nincs hatással az egyén életére",
          "mindig gyors visszatérést jelent a munkaerőpiacra"
        ],
        correct_answer: "jövedelemkiesést, létbizonytalanságot és a képzettség leértékelődését okozhatja",
        explanation: "A munkanélküliség az egyén szintjén jövedelemkiesést, létbizonytalanságot, valamint a képzettség és munkatapasztalat leértékelődését okozhatja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hatással van a munkanélküliség a gazdaság egészére?",
        options: [
          "kihasználatlan termelési kapacitást (elmaradt GDP-t) jelent, és növeli az állami szociális kiadásokat",
          "mindig növeli az adóbevételeket",
          "csökkenti az állami kiadásokat",
          "nincs hatással a GDP-re"
        ],
        correct_answer: "kihasználatlan termelési kapacitást (elmaradt GDP-t) jelent, és növeli az állami szociális kiadásokat",
        explanation: "A munkanélküliség a gazdaság szintjén kihasználatlan termelési kapacitást (elmaradt GDP-t) jelent, miközben növeli a szociális kiadásokat és csökkenti az adóbevételeket.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen kockázatot hordoz, ha a minimálbért a piaci egyensúlyi bér fölé állítják?",
        options: [
          "önmagában is munkanélküliséget okozhat",
          "automatikusan megszünteti a munkanélküliséget",
          "nincs hatással a foglalkoztatásra",
          "csökkenti az állami kiadásokat"
        ],
        correct_answer: "önmagában is munkanélküliséget okozhat",
        explanation: "Ha a minimálbér a piaci egyensúlyi bér fölé kerül megállapításra, önmagában is munkanélküliséget okozhat, mivel a vállalatok kevesebb munkaerőt hajlandóak felvenni.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a természetes munkanélküliségi ráta?",
        options: [
          "azt a szintet, amely a súrlódásos és strukturális munkanélküliségből mindig fennáll, és a teljes foglalkoztatottság célját jelzi",
          "a 0%-os munkanélküliséget",
          "a konjunkturális munkanélküliség szintjét",
          "az államilag garantált munkanélküliségi rátát"
        ],
        correct_answer: "azt a szintet, amely a súrlódásos és strukturális munkanélküliségből mindig fennáll, és a teljes foglalkoztatottság célját jelzi",
        explanation: "A természetes munkanélküliségi ráta azt a szintet jelzi, amely a dinamikus gazdaságban mindig meglévő súrlódásos és strukturális munkanélküliségből fakad, és a „teljes foglalkoztatottság” gazdaságpolitikai céljának tekintik.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-nemzetgazdasag-teljesitmenye-gdp-es-gni",
    title: "A nemzetgazdaság teljesítménye: GDP és GNI",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 8,
    summary_markdown:
      "A nemzetgazdaság teljesítményét elsősorban a GDP (bruttó hazai termék) és a GNI (bruttó nemzeti jövedelem) mutatókkal mérjük, amelyek egy adott ország gazdasági szereplői által egy év alatt előállított javak és szolgáltatások értékét fejezik ki, és a gazdaságpolitika egyik legfontosabb viszonyítási alapját jelentik.",
    content_markdown: `
## A GDP fogalma

A **GDP (bruttó hazai termék, Gross Domestic Product)** egy adott ország területén egy év alatt előállított, végső felhasználásra szánt termékek és szolgáltatások összesített piaci értékét fejezi ki. A GDP **területi elven** alapul: magában foglalja a külföldi tulajdonú vállalatok belföldön előállított termelését is, ugyanakkor nem tartalmazza a belföldi tulajdonú vállalatok külföldön előállított termelését.

## A GDP mérésének módszerei

A GDP-t háromféle megközelítésből mérhetjük, amelyeknek elméletileg azonos eredményt kell adniuk. A **termelési oldali megközelítés** az egyes gazdasági ágazatokban létrehozott hozzáadott érték összegzésével számítja ki a GDP-t. A **jövedelmi oldali megközelítés** a termelési tényezők tulajdonosainak jövedelmeit (bérek, kamatok, profitok, földjáradékok) összegzi. A **felhasználási oldali megközelítés** a végső felhasználásra fordított kiadásokat (fogyasztás, beruházás, állami kiadások, nettó export) adja össze — ez az ún. **GDP = C + I + G + (X-M)** képlet, ahol C a fogyasztás, I a beruházás, G az állami kiadások, X-M pedig a nettó export (export mínusz import).

## A GNI fogalma és különbsége a GDP-től

A **GNI (bruttó nemzeti jövedelem, Gross National Income)** — korábbi nevén GNP (bruttó nemzeti termék) — az adott ország **tulajdonában lévő** termelési tényezők (állampolgárok, hazai vállalatok) által egy év alatt, akár belföldön, akár külföldön megszerzett jövedelmet fejezi ki. A GNI tehát **tulajdoni elven** alapul: magában foglalja a külföldön dolgozó állampolgárok hazautalt jövedelmét és a külföldön működő hazai vállalatok profitját, ugyanakkor nem tartalmazza a belföldön működő külföldi tulajdonú vállalatok profitját (amelyet azok kivisznek az országból). A GDP és a GNI közötti különbség jól mutatja, hogy egy ország gazdasága mennyire nyitott a külföldi tőkebefektetések és a migráció felé.

## A reál- és a nominál GDP

Fontos megkülönböztetni a **nominál GDP-t** (a folyó, adott évi árakon számított értéket) a **reál GDP-től** (amelyet egy bázisév árain számítanak ki, kiszűrve az árszínvonal-változás, azaz az infláció hatását). A gazdasági növekedés valódi mértékét a **reál GDP** változása mutatja meg, hiszen a nominál GDP növekedhet pusztán az árak emelkedése (infláció) miatt is, anélkül, hogy a ténylegesen előállított javak mennyisége nőne.

## Az egy főre jutó GDP

Az országok gazdasági fejlettségének és életszínvonalának összehasonlítására gyakran az **egy főre jutó GDP-t** használják, amely a teljes GDP-t osztja el a lakosság létszámával. Ez a mutató lehetővé teszi a különböző méretű országok gazdasági teljesítményének összemérését, bár fontos korlátai vannak: nem mutatja a jövedelem eloszlását (egyenlőtlenségeket), és nem veszi figyelembe a nem piaci tevékenységeket (háztartási munka, önkéntesség) vagy a környezeti hatásokat.

## A GDP mint jóléti mutató korlátai

Bár a GDP a leggyakrabban használt gazdasági teljesítménymutató, számos kritika éri **jóléti mutatóként** való alkalmazását: nem méri a jövedelemelosztás egyenlőtlenségét, figyelmen kívül hagyja a nem piaci (feketegazdasági, önkéntes, háztartási) tevékenységeket, nem veszi figyelembe a környezeti károkat és a fenntarthatóságot, és nem tükrözi közvetlenül a szubjektív jóllétet vagy életminőséget. Emiatt egyre inkább alkalmaznak kiegészítő mutatókat (pl. Human Development Index, boldogságindexek) a GDP mellett.

## Jelentősége

A GDP és a GNI a nemzetgazdaság teljesítményének legfontosabb mérőszámai: ezek alapján hasonlítják össze az országok gazdasági fejlettségét, ezekre épülnek a gazdaságpolitikai döntések (pl. az uniós támogatások elosztása, a költségvetési hiánycélok GDP-arányos meghatározása), és ezek változása (a gazdasági növekedés üteme) alapvetően meghatározza egy ország lakosságának életszínvonalát.
`,
    key_concepts: [
      "GDP (bruttó hazai termék) — területi elv",
      "GNI (bruttó nemzeti jövedelem) — tulajdoni elv",
      "termelési, jövedelmi, felhasználási oldali GDP-számítás",
      "reál- és nominál GDP",
      "egy főre jutó GDP és a GDP mint jóléti mutató korlátai",
    ],
    source_refs: [
      { label: "A nemzetgazdasági teljesítmény mérése – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-nemzetgazdasagi-teljesitmeny-merese/" },
      { label: "Bruttó hazai termék (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Bruttó_hazai_termék" },
      { label: "Állam feladatai, GDP-GNI – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/foldrajz/allam-feladatai-gdp-gni/" },
      { label: "Nemzetgazdasági teljesítmények mérése (Érettségitételek.com)", url: "https://erettsegitetelek.com/2020/11/nemzetgazdasagi-teljesitmenyek-merese/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen elven alapul a GDP számítása?",
        options: ["területi elven", "tulajdoni elven", "állampolgársági elven", "lakóhelyi elven"],
        correct_answer: "területi elven",
        explanation: "A GDP az ország területén előállított termelést méri, függetlenül attól, hogy hazai vagy külföldi tulajdonú vállalat állította-e elő.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen elven alapul a GNI számítása?",
        options: ["tulajdoni elven", "területi elven", "vallási elven", "nyelvi elven"],
        correct_answer: "tulajdoni elven",
        explanation: "A GNI az adott ország tulajdonában lévő termelési tényezők által szerzett jövedelmet méri, függetlenül attól, hogy bel- vagy külföldön keletkezett-e.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a reál- és a nominál GDP között?",
        options: [
          "a reál GDP kiszűri az árváltozás (infláció) hatását, a nominál GDP a folyó árakon számított érték",
          "a reál GDP mindig kisebb, mint a nominál GDP",
          "nincs közöttük különbség",
          "a nominál GDP csak a mezőgazdaságot méri"
        ],
        correct_answer: "a reál GDP kiszűri az árváltozás (infláció) hatását, a nominál GDP a folyó árakon számított érték",
        explanation: "A reál GDP egy bázisév árain számítva mutatja a valódi termelésváltozást, míg a nominál GDP a folyó évi árakat tükrözi, amit az infláció is befolyásol.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik képlet írja le a GDP felhasználási oldali számítását?",
        options: ["GDP = C + I + G + (X-M)", "GDP = bér + kamat + profit", "GDP = export - import", "GDP = adóbevétel - államadósság"],
        correct_answer: "GDP = C + I + G + (X-M)",
        explanation: "A felhasználási oldali megközelítésben a GDP a fogyasztás (C), a beruházás (I), az állami kiadások (G) és a nettó export (X-M) összege.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a GDP mint jóléti mutató egyik fő korlátja?",
        options: [
          "nem méri a jövedelemelosztás egyenlőtlenségét és a nem piaci tevékenységeket",
          "csak a mezőgazdasági termelést méri",
          "nem lehet nemzetközileg összehasonlítani",
          "kizárólag az állami kiadásokat tartalmazza"
        ],
        correct_answer: "nem méri a jövedelemelosztás egyenlőtlenségét és a nem piaci tevékenységeket",
        explanation: "A GDP nem tükrözi a jövedelmi egyenlőtlenségeket, a nem piaci (háztartási, önkéntes) tevékenységeket és a környezeti hatásokat sem.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a GNI korábbi elnevezése?",
        options: [
          "GNP (bruttó nemzeti termék)",
          "GDP (bruttó hazai termék)",
          "CPI (fogyasztói árindex)",
          "PPP (vásárlóerő-paritás)"
        ],
        correct_answer: "GNP (bruttó nemzeti termék)",
        explanation: "A GNI korábbi neve GNP (bruttó nemzeti termék) volt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik mutatót használják jellemzően az országok gazdasági fejlettségének és életszínvonalának összehasonlítására?",
        options: [
          "az egy főre jutó GDP-t",
          "a nominál GDP abszolút értékét",
          "a költségvetési hiányt",
          "a munkanélküliségi rátát"
        ],
        correct_answer: "az egy főre jutó GDP-t",
        explanation: "Az egy főre jutó GDP a teljes GDP-t a lakosság létszámával osztva teszi lehetővé a különböző méretű országok teljesítményének összehasonlítását.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik kiegészítő mutatót alkalmazzák egyre inkább a GDP mellett a jólét mérésére?",
        options: [
          "Human Development Index (HDI)",
          "fogyasztói árindex (CPI)",
          "munkanélküliségi ráta",
          "államadósság-ráta"
        ],
        correct_answer: "Human Development Index (HDI)",
        explanation: "A GDP korlátai miatt egyre inkább alkalmaznak kiegészítő mutatókat, mint a Human Development Index (HDI) vagy a boldogságindexek.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan számítja ki a GDP-t a termelési oldali megközelítés?",
        options: [
          "az egyes gazdasági ágazatokban létrehozott hozzáadott érték összegzésével",
          "a fogyasztás, beruházás, állami kiadás és nettó export összegzésével",
          "a bérek, kamatok, profitok összegzésével",
          "az export és import különbségeként"
        ],
        correct_answer: "az egyes gazdasági ágazatokban létrehozott hozzáadott érték összegzésével",
        explanation: "A termelési oldali megközelítés az egyes gazdasági ágazatokban létrehozott hozzáadott érték összegzésével számítja ki a GDP-t.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit összegez a jövedelmi oldali GDP-számítási megközelítés?",
        options: [
          "a termelési tényezők tulajdonosainak jövedelmeit (bérek, kamatok, profitok, földjáradékok)",
          "a fogyasztási kiadásokat és a beruházásokat",
          "az exportot és az importot",
          "az állami költségvetés bevételeit"
        ],
        correct_answer: "a termelési tényezők tulajdonosainak jövedelmeit (bérek, kamatok, profitok, földjáradékok)",
        explanation: "A jövedelmi oldali megközelítés a termelési tényezők tulajdonosainak jövedelmeit (bér, kamat, profit, földjáradék) összegzi.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelez a GDP és a GNI közötti különbség egy ország esetében?",
        options: [
          "mennyire nyitott a gazdaság a külföldi tőkebefektetések és a migráció felé",
          "a gazdaság inflációs rátáját",
          "az állam költségvetési hiányát",
          "a munkanélküliségi ráta szintjét"
        ],
        correct_answer: "mennyire nyitott a gazdaság a külföldi tőkebefektetések és a migráció felé",
        explanation: "A GDP és a GNI közötti különbség jól mutatja, mennyire nyitott egy ország gazdasága a külföldi tőkebefektetések és a migráció (munkaerő-mozgás) felé.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az egy főre jutó GDP egyik fontos korlátja?",
        options: [
          "nem mutatja a jövedelem eloszlását (egyenlőtlenségeket) a lakosság körében",
          "csak fejlődő országokra alkalmazható",
          "nem lehet nemzetközileg összehasonlítani",
          "kizárólag a mezőgazdasági termelést méri"
        ],
        correct_answer: "nem mutatja a jövedelem eloszlását (egyenlőtlenségeket) a lakosság körében",
        explanation: "Az egy főre jutó GDP nem mutatja meg, hogyan oszlik el a jövedelem a lakosság körében, azaz nem tükrözi az egyenlőtlenségeket.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem tükrözi jól a GDP a nem piaci tevékenységeket?",
        options: [
          "mert figyelmen kívül hagyja a háztartási munkát, önkéntességet és a feketegazdaságot",
          "mert csak az állami szektort méri",
          "mert kizárólag a szolgáltatásokat veszi figyelembe",
          "mert a GDP mindig alábecsüli az ipari termelést"
        ],
        correct_answer: "mert figyelmen kívül hagyja a háztartási munkát, önkéntességet és a feketegazdaságot",
        explanation: "A GDP figyelmen kívül hagyja a nem piaci (háztartási, önkéntes, feketegazdasági) tevékenységeket, ezért nem teljes körű jóléti mutató.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos, hogy a GDP három mérési módszere (termelési, jövedelmi, felhasználási oldal) elméletileg azonos eredményt adjon?",
        options: [
          "mert ez igazolja, hogy a gazdaság körforgásában a kibocsátás, a jövedelem és a kiadás értéke megegyezik",
          "mert csak így számolható ki az államadósság",
          "mert ez határozza meg a jegybanki alapkamatot",
          "mert csak így mérhető az infláció"
        ],
        correct_answer: "mert ez igazolja, hogy a gazdaság körforgásában a kibocsátás, a jövedelem és a kiadás értéke megegyezik",
        explanation: "A három megközelítés azonos eredménye azt tükrözi, hogy a gazdaság körforgásában a kibocsátás, a jövedelem és a felhasználás (kiadás) értéke egyensúlyban van egymással.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az egyik fő tartalmi eltérés a GDP és a GNI között?",
        options: [
          "a GNI magában foglalja a külföldön dolgozó állampolgárok hazautalt jövedelmét, a GDP nem",
          "a GDP mindig magasabb, mint a GNI minden országban",
          "a GNI nem veszi figyelembe semmilyen külföldi jövedelmet",
          "a GDP és a GNI mindig pontosan megegyezik"
        ],
        correct_answer: "a GNI magában foglalja a külföldön dolgozó állampolgárok hazautalt jövedelmét, a GDP nem",
        explanation: "A GNI a tulajdoni elv alapján magában foglalja a külföldön dolgozó állampolgárok hazautalt jövedelmét is, amit a területi elvű GDP nem tartalmaz.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "az-inflacio",
    title: "Az infláció",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 9,
    summary_markdown:
      "Az infláció az árszínvonal tartós és általános emelkedése, amely csökkenti a pénz vásárlóerejét: kiváltó okai szerint megkülönböztetünk kereslet- és kínálatvezérelt inflációt, mértéke szerint pedig kúszó, vágtató és hiperinflációt.",
    content_markdown: `
## Az infláció fogalma

Az **infláció** az árszínvonal tartós, általános (nem csak egyes termékekre korlátozódó) emelkedését jelenti egy gazdaságban, aminek következtében a pénz **vásárlóereje csökken**: ugyanannyi pénzért egyre kevesebb terméket és szolgáltatást tudunk megvásárolni. Az infláció ellentéte a **defláció** (az árszínvonal tartós csökkenése), amely szintén komoly gazdasági problémákat okozhat (halasztott fogyasztás, csökkenő beruházási kedv).

## Az infláció mérése: a fogyasztói árindex

Az inflációt jellemzően a **fogyasztói árindexszel (KSH: fogyasztói árindex, angolul CPI)** mérik, amely egy jellemző fogyasztói „kosár” (élelmiszerek, szolgáltatások, közüzemi díjak stb.) árváltozását követi nyomon egy meghatározott bázisidőszakhoz képest. Az infláció mértékét jellemzően éves szinten, százalékos formában fejezik ki.

## Az infláció fajtái mértéke szerint

Az infláció mértéke szerint megkülönböztetünk **kúszó inflációt** (évi néhány százalékos, a gazdaság számára viszonylag kezelhető mértékű áremelkedés), **vágtató inflációt** (évi kétszámjegyű vagy magasabb, már súlyosan torzító hatású áremelkedés) és **hiperinflációt** (extrém mértékű, gyakran havi több tíz- vagy százszázalékos áremelkedés, amely gyakorlatilag ellehetetleníti a pénz funkcióinak betöltését — Magyarország az 1945-46-os pengőinfláció idején a világtörténelem legsúlyosabb hiperinflációját szenvedte el).

## Az infláció okai szerinti típusai

Az infláció kiváltó oka szerint megkülönböztetünk **keresleti inflációt**, amely akkor alakul ki, amikor a makrogazdasági összkereslet — változatlan kínálat mellett — megnő, vagy a kereslet bővülése meghaladja a kínálat bővülését (pl. túlzott állami vagy fogyasztói költekezés esetén). A **kínálati (költség-) infláció** akkor jelentkezik, amikor a termelési költségek (nyersanyagárak, bérek, energiaárak) emelkednek, és a vállalatok ezt beépítik az áraikba (pl. az energiaválságok gyakran kínálati inflációt okoznak). Emellett létezik a **importált infláció** (amikor a külföldi árszínvonal-emelkedés vagy az árfolyam-gyengülés begyűrűzik a hazai árakba), valamint az **inflációs várakozásokból** fakadó öngerjesztő infláció is (ha a szereplők magas inflációra számítanak, ez befolyásolja béralku- és árazási döntéseiket, ami önmagában is inflációt gerjeszthet).

## Az infláció következményei

Az infláció számos negatív hatással jár: csökkenti a **reáljövedelmet** és a megtakarítások reálértékét (különösen a fix jövedelműek — nyugdíjasok, közalkalmazottak — számára hátrányos, ha a jövedelmek nem követik az árak emelkedését), torzítja a gazdasági döntéseket (nehezebb hosszú távú tervezés, beruházási döntés), rontja az ország nemzetközi versenyképességét, és társadalmi feszültségeket okozhat a vagyoni egyenlőtlenségek növelésével (az adósok relatíve nyernek, a hitelezők és megtakarítók vesztenek a nem várt infláción).

## Az infláció elleni gazdaságpolitikai eszközök

Az infláció mérséklésére elsősorban a **jegybank monetáris politikája** szolgál: az alapkamat emelésével a jegybank drágítja a hitelfelvételt, ami visszafogja a keresletet és mérsékli az inflációt. Emellett a fiskális (költségvetési) politika (az állami kiadások visszafogása) és — extrém esetekben — közvetlen árszabályozás is alkalmazható, bár utóbbi torzíthatja a piaci mechanizmusokat.

## Jelentősége

Az infláció a makrogazdaság egyik legfontosabb, a lakosság mindennapi életét közvetlenül érintő jelensége: alakulása alapvetően befolyásolja a reáljövedelmeket, a megtakarítási és beruházási döntéseket, valamint a jegybanki és kormányzati gazdaságpolitika legfontosabb célkitűzései közé tartozik az árstabilitás fenntartása.
`,
    key_concepts: [
      "árszínvonal-emelkedés és vásárlóerő-csökkenés",
      "fogyasztói árindex (CPI)",
      "kúszó, vágtató és hiperinfláció",
      "keresleti és kínálati (költség-) infláció",
      "monetáris politika mint inflációkezelő eszköz",
    ],
    source_refs: [
      { label: "Az infláció – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/az-inflacio/" },
      { label: "Infláció (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Infláció" },
      { label: "Infláció kalkulátor (Money.hu)", url: "https://www.money.hu/megtakaritas/inflacio" },
      { label: "Az infláció (Érettségitételek.com)", url: "https://erettsegitetelek.com/2020/11/az-inflacio/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az infláció?",
        options: [
          "az árszínvonal tartós, általános emelkedését",
          "a munkanélküliség csökkenését",
          "a GDP növekedését",
          "az árfolyam erősödését"
        ],
        correct_answer: "az árszínvonal tartós, általános emelkedését",
        explanation: "Az infláció az árszínvonal tartós, általános emelkedése, amely csökkenti a pénz vásárlóerejét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mivel mérik jellemzően az inflációt?",
        options: ["fogyasztói árindexszel", "munkanélküliségi rátával", "GDP-vel", "kamatlábbal"],
        correct_answer: "fogyasztói árindexszel",
        explanation: "Az inflációt a fogyasztói kosár árváltozását nyomon követő fogyasztói árindexszel mérik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik inflációtípus jelentkezik, amikor a makrogazdasági összkereslet a kínálatnál gyorsabban bővül?",
        options: ["keresleti infláció", "kínálati (költség-) infláció", "importált infláció", "defláció"],
        correct_answer: "keresleti infláció",
        explanation: "A keresleti infláció akkor alakul ki, amikor az összkereslet változatlan vagy lassabban bővülő kínálat mellett megnő.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik magyarországi esemény a világtörténelem legsúlyosabb hiperinflációja volt?",
        options: ["az 1945-46-os pengőinfláció", "a 2008-as gazdasági világválság", "a rendszerváltás utáni infláció", "az 1929-33-as világválság"],
        correct_answer: "az 1945-46-os pengőinfláció",
        explanation: "A második világháború utáni magyarországi pengőinfláció a történelem legsúlyosabb hiperinflációja volt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen eszközzel próbálja a jegybank elsősorban mérsékelni az inflációt?",
        options: ["az alapkamat emelésével", "az állami kiadások növelésével", "a minimálbér emelésével", "vámok bevezetésével"],
        correct_answer: "az alapkamat emelésével",
        explanation: "A jegybank az alapkamat emelésével drágítja a hitelfelvételt, ami visszafogja a keresletet és mérsékli az inflációs nyomást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a defláció?",
        options: [
          "az árszínvonal tartós csökkenése",
          "az árszínvonal tartós emelkedése",
          "a munkanélküliség növekedése",
          "a GDP növekedése"
        ],
        correct_answer: "az árszínvonal tartós csökkenése",
        explanation: "A defláció az infláció ellentéte: az árszínvonal tartós csökkenése, amely halasztott fogyasztást és csökkenő beruházási kedvet okozhat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a kúszó infláció?",
        options: [
          "évi néhány százalékos, viszonylag kezelhető mértékű áremelkedést",
          "évi kétszámjegyű vagy magasabb áremelkedést",
          "havi több tíz- vagy százszázalékos áremelkedést",
          "az árszínvonal csökkenését"
        ],
        correct_answer: "évi néhány százalékos, viszonylag kezelhető mértékű áremelkedést",
        explanation: "A kúszó infláció évi néhány százalékos, a gazdaság számára viszonylag kezelhető mértékű áremelkedést jelent.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a hiperinfláció?",
        options: [
          "extrém mértékű, gyakran havi több tíz- vagy százszázalékos áremelkedést",
          "évi 2-3%-os, kezelhető áremelkedést",
          "az árszínvonal csökkenését",
          "a munkanélküliség csökkenését"
        ],
        correct_answer: "extrém mértékű, gyakran havi több tíz- vagy százszázalékos áremelkedést",
        explanation: "A hiperinfláció extrém mértékű, gyakran havi több tíz- vagy százszázalékos áremelkedést jelent, amely ellehetetleníti a pénz funkcióinak betöltését.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a vágtató infláció?",
        options: [
          "évi kétszámjegyű vagy magasabb, már súlyosan torzító hatású áremelkedést",
          "évi néhány százalékos áremelkedést",
          "havi százszázalékos áremelkedést",
          "az árszínvonal stagnálását"
        ],
        correct_answer: "évi kétszámjegyű vagy magasabb, már súlyosan torzító hatású áremelkedést",
        explanation: "A vágtató infláció évi kétszámjegyű vagy magasabb, már súlyosan torzító hatású áremelkedést jelent.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi okozza a kínálati (költség-) inflációt?",
        options: [
          "a termelési költségek (nyersanyagárak, bérek, energiaárak) emelkedése, amit a vállalatok beépítenek az áraikba",
          "az összkereslet túlzott bővülése",
          "a jegybank alapkamat-emelése",
          "a munkanélküliség csökkenése"
        ],
        correct_answer: "a termelési költségek (nyersanyagárak, bérek, energiaárak) emelkedése, amit a vállalatok beépítenek az áraikba",
        explanation: "A kínálati (költség-) infláció akkor jelentkezik, amikor a termelési költségek emelkednek, és a vállalatok ezt beépítik az áraikba, például energiaválságok idején.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az importált infláció?",
        options: [
          "amikor a külföldi árszínvonal-emelkedés vagy az árfolyam-gyengülés begyűrűzik a hazai árakba",
          "amikor a hazai infláció exportálódik külföldre",
          "amikor a jegybank importból fedezi az árstabilitást",
          "amikor az állam importvámot vet ki"
        ],
        correct_answer: "amikor a külföldi árszínvonal-emelkedés vagy az árfolyam-gyengülés begyűrűzik a hazai árakba",
        explanation: "Az importált infláció akkor jelentkezik, amikor a külföldi árszínvonal-emelkedés vagy a hazai valuta gyengülése begyűrűzik a hazai árakba.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az inflációs várakozásokból fakadó öngerjesztő infláció?",
        options: [
          "ha a szereplők magas inflációra számítanak, ez befolyásolja béralku- és árazási döntéseiket, ami önmagában is inflációt gerjeszthet",
          "amikor az infláció mindig azonnal megszűnik várakozás nélkül",
          "amikor a kormány garantálja az árstabilitást",
          "amikor a defláció önmagát erősíti"
        ],
        correct_answer: "ha a szereplők magas inflációra számítanak, ez befolyásolja béralku- és árazási döntéseiket, ami önmagában is inflációt gerjeszthet",
        explanation: "Ha a gazdasági szereplők magas inflációra számítanak, ez befolyásolja béralku- és árazási döntéseiket, ami önmagában is inflációt gerjeszthet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kik járnak rosszabbul jellemzően egy váratlan infláció esetén?",
        options: [
          "a fix jövedelműek (pl. nyugdíjasok, közalkalmazottak), ha jövedelmük nem követi az árak emelkedését",
          "kizárólag a vállalatok tulajdonosai",
          "az adósok minden esetben",
          "a jegybank alkalmazottai"
        ],
        correct_answer: "a fix jövedelműek (pl. nyugdíjasok, közalkalmazottak), ha jövedelmük nem követi az árak emelkedését",
        explanation: "Az infláció különösen a fix jövedelműek — nyugdíjasok, közalkalmazottak — számára hátrányos, ha jövedelmük nem követi az árak emelkedését.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan hat a nem várt infláció az adósok és a hitelezők helyzetére?",
        options: [
          "az adósok relatíve nyernek, a hitelezők és megtakarítók vesztenek rajta",
          "a hitelezők mindig nyernek, az adósok mindig vesztenek",
          "sem az adósokra, sem a hitelezőkre nincs hatással",
          "csak az államra van hatással"
        ],
        correct_answer: "az adósok relatíve nyernek, a hitelezők és megtakarítók vesztenek rajta",
        explanation: "A nem várt infláción az adósok relatíve nyernek (mivel reálértékben kevesebbet kell visszafizetniük), míg a hitelezők és megtakarítók vesztenek.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen egyéb gazdaságpolitikai eszközzel mérsékelhető az infláció a monetáris politika mellett?",
        options: [
          "fiskális (költségvetési) politikával, például az állami kiadások visszafogásával",
          "kizárólag a minimálbér emelésével",
          "az export teljes betiltásával",
          "a munkanélküliségi ráta növelésével törvényileg"
        ],
        correct_answer: "fiskális (költségvetési) politikával, például az állami kiadások visszafogásával",
        explanation: "Az infláció mérséklésére a monetáris politika mellett a fiskális politika (az állami kiadások visszafogása) és extrém esetben közvetlen árszabályozás is alkalmazható.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "gazdasagi-novekedes-es-a-gazdasagi-ciklusok",
    title: "Gazdasági növekedés és a gazdasági ciklusok",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 10,
    summary_markdown:
      "A gazdasági növekedés a nemzetgazdaság teljesítményének (a reál GDP-nek) hosszú távú bővülését jelenti, amelyet rövidebb távon a gazdasági (konjunktúra-) ciklusok fellendülés-visszaesés hullámzása kísér.",
    content_markdown: `
## A gazdasági növekedés fogalma

A **gazdasági növekedés** a nemzetgazdaság teljesítményének, jellemzően a **reál GDP-nek** a hosszú távú, tartós bővülését jelenti, amely a fogyasztási és szükségletkielégítési lehetőségek, végső soron a lakosság jóléti szintjének emelkedését jelzi. A gazdasági növekedés forrásai lehetnek **extenzív** jellegűek (az erőforrások — munkaerő, tőke — mennyiségi bővítése) vagy **intenzív** jellegűek (a termelési tényezők hatékonyságának, termelékenységének növelése, jellemzően technológiai fejlődés révén).

## A gazdasági növekedés forrásai

A hosszú távú gazdasági növekedést alapvetően négy tényező határozza meg: a **munkaerő mennyiségének és minőségének** (képzettségének) növekedése, a **tőkeállomány bővülése** (beruházások), a **technológiai fejlődés (innováció)**, amely a termelékenységet növeli, valamint az **intézményi és szabályozási környezet** minősége (jogbiztonság, piaci verseny, korrupció mértéke), amely alapvetően befolyásolja, mennyire hatékonyan tudják a gazdasági szereplők kihasználni a rendelkezésre álló erőforrásokat.

## A gazdasági (konjunktúra-) ciklus fogalma

A **gazdasági ciklus (konjunktúraciklus)** egy adott gazdaság termelésének, fogyasztásának és beruházásainak periodikusan hullámzó alakulását jelenti, amely a hosszú távú növekedési trend körüli ingadozásokból áll. A ciklus fázisai jellemzően a következők: a **fellendülés (expanzió)** szakaszában a GDP folyamatosan nő, új munkahelyek jönnek létre, a vállalati profitok emelkednek; a **csúcspont** a gazdasági aktivitás maximumát jelzi; ezt követi a **visszaesés (recesszió)**, amikor a GDP csökken, nő a munkanélküliség, visszaesnek a beruházások; végül a **mélypont**, ahonnan újra megindulhat a fellendülés.

## A recesszió és a depresszió

**Recessziónak** nevezzük azt az állapotot, amikor a GDP legalább két egymást követő negyedévben csökken. Ha a visszaesés különösen elhúzódó és mély (mint az 1929-33-as nagy gazdasági világválság idején), akkor **depresszióról** beszélünk, amely súlyos, tartós munkanélküliséggel és a gazdasági kibocsátás drasztikus visszaesésével jár.

## A gazdasági ciklusok okai

A gazdasági ciklusok kialakulásának okait többféleképpen magyarázza a közgazdaságtan: a **keresleti sokkok** (pl. a fogyasztói vagy beruházási kedv hirtelen megváltozása), a **kínálati sokkok** (pl. nyersanyagár-robbanások, olajválságok), a **monetáris tényezők** (a hitelezés és a pénzmennyiség változása), valamint a **pénzügyi piacok** ingadozásai (tőzsdei buborékok és összeomlások) egyaránt hozzájárulhatnak a ciklikus hullámzáshoz.

## A gazdasági ciklusok mérésére használt mutatók

A gazdasági ciklus fázisainak nyomon követésére több mutatót is használnak: a **GDP növekedési ütemét**, a **munkanélküliségi rátát**, az **ipari termelés alakulását**, a **fogyasztói és üzleti bizalmi indexeket**, valamint a tőzsdeindexek mozgását — ezek együttesen adnak képet arról, hogy a gazdaság a ciklus melyik szakaszában található.

## A gazdaságpolitika szerepe a ciklusok kezelésében

A modern gazdaságpolitika — elsősorban a keynesi elméletek nyomán — aktívan igyekszik tompítani a gazdasági ciklusok szélsőségeit: recesszió idején élénkítő (expanzív) fiskális és monetáris politikával (állami kiadások növelése, kamatcsökkentés) próbálja serkenteni a gazdaságot, míg túlfűtött fellendülés idején szigorító (restriktív) intézkedésekkel (kamatemelés, kiadáscsökkentés) próbálja megelőzni a túlzott inflációt és a "gazdasági buborékok" kialakulását.

## Jelentősége

A gazdasági növekedés és a gazdasági ciklusok megértése alapvető a makroökonómiában: ez magyarázza meg, miért váltakoznak a fellendülés és a visszaesés időszakai egy gazdaságban, és milyen eszközökkel próbálja a gazdaságpolitika mérsékelni ezen ingadozások negatív társadalmi hatásait, miközben hosszú távon fenntartja a gazdasági növekedést.
`,
    key_concepts: [
      "extenzív és intenzív gazdasági növekedés",
      "konjunktúraciklus fázisai (fellendülés, csúcs, recesszió, mélypont)",
      "recesszió és depresszió",
      "keresleti és kínálati sokkok",
      "anticiklikus gazdaságpolitika",
    ],
    source_refs: [
      { label: "Konjuktúra, dekonjuktúra (Érettségitételek.com)", url: "https://erettsegitetelek.com/2020/12/konjuktura-dekonjuktura/" },
      { label: "Gazdasági növekedés (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Gazdasági_növekedés" },
      { label: "Gazdasági, üzleti ciklusok: mit jelent? (Elemzésközpont)", url: "https://elemzeskozpont.hu/gazdasagi-uzleti-ciklusok-mit-jelent-hogyan-fugg-ossze-tozsdevel" },
      { label: "Gazdaságpolitika a makrogazdasági célok szolgálatában – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/gazdasagpolitika-a-makrogazdasagi-celok-szolgalataban/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a gazdasági növekedés?",
        options: [
          "a nemzetgazdaság teljesítményének (reál GDP-nek) hosszú távú bővülését",
          "az árszínvonal emelkedését",
          "a munkanélküliség csökkenését önmagában",
          "az állami költségvetés egyensúlyát"
        ],
        correct_answer: "a nemzetgazdaság teljesítményének (reál GDP-nek) hosszú távú bővülését",
        explanation: "A gazdasági növekedés a reál GDP hosszú távú, tartós bővülését jelenti, ami a fogyasztási lehetőségek bővülésével jár.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az extenzív és az intenzív gazdasági növekedés között?",
        options: [
          "az extenzív az erőforrások mennyiségi bővítésén, az intenzív a hatékonyság növelésén alapul",
          "az extenzív mindig gyorsabb, mint az intenzív",
          "nincs közöttük különbség",
          "az intenzív növekedés csak fejlődő országokban fordul elő"
        ],
        correct_answer: "az extenzív az erőforrások mennyiségi bővítésén, az intenzív a hatékonyság növelésén alapul",
        explanation: "Az extenzív növekedés forrása az erőforrások mennyiségi bővítése, az intenzív növekedésé a termelékenység, hatékonyság javulása (technológiai fejlődés).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor beszélünk recesszióról?",
        options: [
          "amikor a GDP legalább két egymást követő negyedévben csökken",
          "amikor az infláció meghaladja a 10%-ot",
          "amikor a munkanélküliség 0%-ra csökken",
          "amikor a tőzsdeindex emelkedik"
        ],
        correct_answer: "amikor a GDP legalább két egymást követő negyedévben csökken",
        explanation: "A recesszió technikai definíciója szerint a GDP legalább két egymást követő negyedévben csökken.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a gazdasági ciklus fellendülési (expanziós) szakaszát?",
        options: [
          "a GDP folyamatosan nő, új munkahelyek jönnek létre, a profitok emelkednek",
          "a GDP csökken, nő a munkanélküliség",
          "az árszínvonal csökken",
          "megszűnik a gazdasági tevékenység"
        ],
        correct_answer: "a GDP folyamatosan nő, új munkahelyek jönnek létre, a profitok emelkednek",
        explanation: "A fellendülés szakaszában a gazdasági aktivitás nő: emelkedik a GDP, bővül a foglalkoztatás, nőnek a vállalati profitok.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen gazdaságpolitikai lépést tesz jellemzően a kormányzat recesszió idején?",
        options: [
          "expanzív (élénkítő) fiskális és monetáris politikát alkalmaz",
          "csökkenti az állami kiadásokat és emeli a kamatokat",
          "beszünteti a gazdaságpolitikai beavatkozást",
          "azonnal emeli az adókat"
        ],
        correct_answer: "expanzív (élénkítő) fiskális és monetáris politikát alkalmaz",
        explanation: "Recesszió idején a gazdaságpolitika jellemzően élénkítő intézkedésekkel (állami kiadások növelése, kamatcsökkentés) próbálja serkenteni a gazdaságot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelöl a gazdasági ciklus csúcspontja?",
        options: [
          "a gazdasági aktivitás maximumát",
          "a gazdasági aktivitás minimumát",
          "az árszínvonal csökkenését",
          "a munkanélküliség maximumát"
        ],
        correct_answer: "a gazdasági aktivitás maximumát",
        explanation: "A csúcspont a gazdasági ciklus azon szakasza, amikor a gazdasági aktivitás eléri a maximumát, mielőtt a visszaesés megkezdődne.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelöl a gazdasági ciklus mélypontja?",
        options: [
          "azt a pontot, ahonnan újra megindulhat a fellendülés",
          "a gazdasági aktivitás maximumát",
          "az árstabilitás elérését",
          "a teljes foglalkoztatottságot"
        ],
        correct_answer: "azt a pontot, ahonnan újra megindulhat a fellendülés",
        explanation: "A mélypont a visszaesés legalsó pontja, ahonnan a gazdaság újra a fellendülés fázisába léphet.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik történelmi esemény a depresszió klasszikus példája?",
        options: [
          "az 1929-33-as nagy gazdasági világválság",
          "a 2020-as koronavírus-járvány",
          "az 1945-46-os pengőinfláció",
          "a 2008-as bankválság önmagában"
        ],
        correct_answer: "az 1929-33-as nagy gazdasági világválság",
        explanation: "Az 1929-33-as nagy gazdasági világválság a depresszió klasszikus példája: elhúzódó, mély visszaesés súlyos munkanélküliséggel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik négy tényező határozza meg alapvetően a hosszú távú gazdasági növekedést?",
        options: [
          "a munkaerő, a tőkeállomány, a technológiai fejlődés és az intézményi környezet",
          "az árszínvonal, a kamatláb, az adókulcs és a vámok",
          "a fogyasztói bizalom, a tőzsdeindex, az export és az import",
          "a munkanélküliségi ráta, az infláció, a GDP és a kamat"
        ],
        correct_answer: "a munkaerő, a tőkeállomány, a technológiai fejlődés és az intézményi környezet",
        explanation: "A hosszú távú gazdasági növekedést a munkaerő mennyisége és minősége, a tőkeállomány bővülése, a technológiai fejlődés és az intézményi-szabályozási környezet minősége határozza meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a keresleti sokk?",
        options: [
          "a fogyasztói vagy beruházási kedv hirtelen megváltozása",
          "a nyersanyagárak hirtelen emelkedése",
          "a technológiai fejlődés lassulása",
          "az állami tervezés bevezetése"
        ],
        correct_answer: "a fogyasztói vagy beruházási kedv hirtelen megváltozása",
        explanation: "A keresleti sokk a fogyasztói vagy beruházási kedv hirtelen megváltozását jelenti, amely a gazdasági ciklusok kialakulásának egyik oka.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a kínálati sokk?",
        options: [
          "pl. nyersanyagár-robbanások, olajválságok, amelyek a kínálati oldalt érintik",
          "a fogyasztói kedv hirtelen javulása",
          "a jegybanki alapkamat csökkentése",
          "a munkanélküliségi ráta csökkenése"
        ],
        correct_answer: "pl. nyersanyagár-robbanások, olajválságok, amelyek a kínálati oldalt érintik",
        explanation: "A kínálati sokk olyan váratlan esemény (pl. olajválság, nyersanyagár-robbanás), amely a termelés kínálati oldalát érinti és ciklikus hullámzást okozhat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen mutatókkal követik nyomon a gazdasági ciklus fázisait?",
        options: [
          "a GDP növekedési ütemét, a munkanélküliségi rátát, az ipari termelést és a bizalmi indexeket",
          "kizárólag az államadósság szintjét",
          "csak a tőzsdeindexeket",
          "kizárólag a fogyasztói árindexet"
        ],
        correct_answer: "a GDP növekedési ütemét, a munkanélküliségi rátát, az ipari termelést és a bizalmi indexeket",
        explanation: "A ciklus fázisainak követésére a GDP növekedési ütemét, a munkanélküliségi rátát, az ipari termelést, a bizalmi indexeket és a tőzsdeindexeket egyaránt használják.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a restriktív gazdaságpolitikát túlfűtött fellendülés idején?",
        options: [
          "kamatemeléssel és kiadáscsökkentéssel próbálja megelőzni a túlzott inflációt",
          "az állami kiadások növelésével serkenti a gazdaságot",
          "a kamatok csökkentésével élénkíti a hitelezést",
          "megszünteti az adózást"
        ],
        correct_answer: "kamatemeléssel és kiadáscsökkentéssel próbálja megelőzni a túlzott inflációt",
        explanation: "Túlfűtött fellendülés idején a gazdaságpolitika szigorító (restriktív) intézkedésekkel — kamatemelés, kiadáscsökkentés — próbálja megelőzni a túlzott inflációt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos az intézményi és szabályozási környezet minősége a gazdasági növekedés szempontjából?",
        options: [
          "mert alapvetően befolyásolja, mennyire hatékonyan tudják a szereplők kihasználni a rendelkezésre álló erőforrásokat",
          "mert kizárólag a külkereskedelmet érinti",
          "mert csak a fejlődő országokban van jelentősége",
          "mert nincs hatással a gazdasági teljesítményre"
        ],
        correct_answer: "mert alapvetően befolyásolja, mennyire hatékonyan tudják a szereplők kihasználni a rendelkezésre álló erőforrásokat",
        explanation: "Az intézményi és szabályozási környezet (jogbiztonság, verseny, korrupció mértéke) alapvetően befolyásolja, mennyire hatékonyan tudják a gazdasági szereplők kihasználni az erőforrásaikat.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő különbség a recesszió és a depresszió között?",
        options: [
          "a depresszió különösen elhúzódó és mély visszaesés, súlyos tartós munkanélküliséggel, szemben a rövidebb recesszióval",
          "nincs közöttük különbség",
          "a recesszió mindig súlyosabb, mint a depresszió",
          "a depresszió az árszínvonal emelkedését jelenti"
        ],
        correct_answer: "a depresszió különösen elhúzódó és mély visszaesés, súlyos tartós munkanélküliséggel, szemben a rövidebb recesszióval",
        explanation: "A depresszió a recessziónál különösen elhúzódó és mélyebb visszaesés, amely súlyos, tartós munkanélküliséggel és a kibocsátás drasztikus csökkenésével jár.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "az-allam-szerepe-a-gazdasagban-es-a-koltsegvetesi-politika",
    title: "Az állam szerepe a gazdaságban és a költségvetési politika",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 11,
    summary_markdown:
      "A modern piacgazdaságokban az állam a piaci kudarcok korrigálása, a jövedelmi egyenlőtlenségek mérséklése és a gazdasági stabilitás fenntartása érdekében avatkozik be a gazdaságba, elsősorban a költségvetési (fiskális) politika eszközeivel.",
    content_markdown: `
## Az állam gazdasági szerepvállalásának indokai

A modern piacgazdaságokban az állam több okból is beavatkozik a gazdaság működésébe. Egyrészt korrigálnia kell a **piaci kudarcokat**: az externáliákat (pl. környezetszennyezés), a közjavak (pl. honvédelem, közvilágítás) alulkínálatát, amelyeket a piac önmagában nem old meg hatékonyan, valamint a monopóliumok és a versenykorlátozó magatartások szabályozását. Másrészt az állam feladata a **jövedelmi egyenlőtlenségek mérséklése** (újraelosztás adók és szociális juttatások révén), valamint a **gazdasági stabilitás** biztosítása (a gazdasági ciklusok szélsőségeinek tompítása, az árstabilitás és a teljes foglalkoztatottság elősegítése).

## Az állami költségvetés fogalma

Az **állami költségvetés** az állam éves pénzügyi terve, amely rendszerezett, számszerű formában veti össze a várható állami bevételeket és kiadásokat. A költségvetés bevételi oldalát elsősorban az **adóbevételek** (személyi jövedelemadó, társasági adó, általános forgalmi adó, járulékok) alkotják, míg a kiadási oldalon szerepelnek a közszolgáltatások finanszírozása (oktatás, egészségügy, honvédelem, közigazgatás), a szociális kiadások (nyugdíjak, segélyek), valamint az állami beruházások.

## Költségvetési egyensúly, hiány és többlet

Ha az állam kiadásai megegyeznek a bevételeivel, **kiegyensúlyozott költségvetésről** beszélünk. Ha a kiadások meghaladják a bevételeket, **költségvetési hiány (deficit)** keletkezik, amelyet az állam jellemzően hitelfelvétellel (államkötvények kibocsátásával) fedez — ez az **államadósság** növekedéséhez vezet. Ha a bevételek meghaladják a kiadásokat, **költségvetési többlet** jön létre. A tartós és magas költségvetési hiány, valamint az ebből fakadó növekvő államadósság súlyos gazdasági és társadalmi kockázatokat hordoz (kamatterhek növekedése, a jövő generációk terhelése, a befektetői bizalom megrendülése).

## A fiskális politika eszközei

A **fiskális (költségvetési) politika** az állam bevételi és kiadási oldalán keresztül megvalósuló gazdaságpolitikai beavatkozás. Az **expanzív (élénkítő) fiskális politika** az állami kiadások növelésével és/vagy az adók csökkentésével igyekszik ösztönözni a gazdasági aktivitást (jellemzően recesszió idején). A **restriktív (szigorító) fiskális politika** ezzel ellentétben az állami kiadások csökkentésével és/vagy az adók emelésével próbálja visszafogni a túlfűtött gazdaságot vagy csökkenteni a költségvetési hiányt.

## Az adóztatás alapelvei és funkciói

Az adóztatásnak alapvetően három funkciója van: a **fiskális funkció** (az állami feladatok finanszírozásához szükséges bevétel biztosítása), az **újraelosztási funkció** (a jövedelmi egyenlőtlenségek mérséklése, jellemzően progresszív adózással) és a **szabályozó (ösztönző) funkció** (bizonyos magatartások — pl. dohányzás, környezetszennyezés — visszaszorítása vagy éppen ösztönzése — pl. adókedvezmények innovációra — az adórendszeren keresztül).

## Az állami újraelosztás és a jóléti állam

Az állam a megtermelt jövedelem jelentős részét **újraosztja** a társadalom tagjai között, elsősorban az adók beszedésén és a szociális transzferek (nyugdíj, munkanélküli-ellátás, családi támogatások, egészségügyi és oktatási közszolgáltatások) kifizetésén keresztül. Ez a **jóléti állam** koncepciója, amelynek mértéke és formája országonként jelentősen eltér (pl. a skandináv jóléti modell magasabb adóterhelést és kiterjedtebb szociális ellátórendszert alkalmaz, mint az angolszász modellek).

## Jelentősége

Az állam gazdasági szerepvállalásának és a költségvetési politikának a megértése kulcsfontosságú a makroökonómiában: ez magyarázza meg, hogyan próbálja a kormányzat korrigálni a piaci kudarcokat, mérsékelni az egyenlőtlenségeket és stabilizálni a gazdaságot, miközben a költségvetési fegyelem fenntartása (a túlzott hiány és eladósodás elkerülése) is alapvető gazdaságpolitikai cél.
`,
    key_concepts: [
      "piaci kudarcok korrigálása (externáliák, közjavak)",
      "állami költségvetés bevételei és kiadásai",
      "költségvetési hiány, többlet és államadósság",
      "expanzív és restriktív fiskális politika",
      "adóztatás funkciói és a jóléti állam",
    ],
    source_refs: [
      { label: "A költségvetési politika – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-koltsegvetesi-politika/" },
      { label: "Államháztartás (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Államháztartás" },
      { label: "Az állami és önkormányzati költségvetés (Érettségitételek.com)", url: "https://erettsegitetelek.com/2020/12/az-allami-es-onkormanyzati-koltsegvetes/" },
      { label: "A makrogazdasági körforgás – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-makrogazdasagi-korforgas/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az egyik fő indoka az állam gazdasági beavatkozásának?",
        options: [
          "a piaci kudarcok (pl. externáliák, közjavak) korrigálása",
          "a piaci verseny megszüntetése",
          "kizárólag az árak emelése",
          "a magántulajdon felszámolása"
        ],
        correct_answer: "a piaci kudarcok (pl. externáliák, közjavak) korrigálása",
        explanation: "Az állam egyik legfontosabb gazdasági szerepe a piaci mechanizmus önmagában nem hatékony működésének (piaci kudarcoknak) a korrigálása.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a költségvetési hiány (deficit)?",
        options: [
          "amikor az állami kiadások meghaladják a bevételeket",
          "amikor a bevételek meghaladják a kiadásokat",
          "amikor a bevételek és kiadások megegyeznek",
          "amikor megszűnik az adóztatás"
        ],
        correct_answer: "amikor az állami kiadások meghaladják a bevételeket",
        explanation: "A költségvetési hiány akkor keletkezik, ha az állam kiadásai meghaladják a bevételeit, amit jellemzően hitelfelvétellel fedeznek.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az expanzív fiskális politikát?",
        options: [
          "az állami kiadások növelése és/vagy az adók csökkentése",
          "az állami kiadások csökkentése és az adók emelése",
          "az alapkamat emelése",
          "a pénzkínálat szűkítése"
        ],
        correct_answer: "az állami kiadások növelése és/vagy az adók csökkentése",
        explanation: "Az expanzív (élénkítő) fiskális politika az állami kiadások növelésével vagy az adók csökkentésével ösztönzi a gazdasági aktivitást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik NEM tartozik az adóztatás alapvető funkciói közé?",
        options: [
          "a piaci verseny teljes megszüntetése",
          "fiskális funkció (bevétel biztosítása)",
          "újraelosztási funkció",
          "szabályozó (ösztönző) funkció"
        ],
        correct_answer: "a piaci verseny teljes megszüntetése",
        explanation: "Az adóztatás funkciói a fiskális, az újraelosztási és a szabályozó funkció — a piaci verseny megszüntetése nem tartozik ezek közé.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miből fedezi az állam a költségvetési hiányt?",
        options: [
          "hitelfelvétellel, jellemzően államkötvények kibocsátásával",
          "kizárólag a jegybanki pénznyomtatással",
          "külföldi segélyekkel",
          "az adók azonnali megszüntetésével"
        ],
        correct_answer: "hitelfelvétellel, jellemzően államkötvények kibocsátásával",
        explanation: "A költségvetési hiányt az állam jellemzően hitelfelvétellel (államkötvények kibocsátásával) fedezi, ami növeli az államadósságot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az állami költségvetés?",
        options: [
          "az állam éves pénzügyi terve, amely összeveti a várható bevételeket és kiadásokat",
          "csak a nemzeti bank éves jelentése",
          "kizárólag az adótörvények gyűjteménye",
          "a GDP-t mérő statisztikai kimutatás"
        ],
        correct_answer: "az állam éves pénzügyi terve, amely összeveti a várható bevételeket és kiadásokat",
        explanation: "Az állami költségvetés az állam éves pénzügyi terve, amely rendszerezett formában veti össze a várható állami bevételeket és kiadásokat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi alkotja elsősorban az állami költségvetés bevételi oldalát?",
        options: [
          "az adóbevételek (SZJA, társasági adó, ÁFA, járulékok)",
          "kizárólag az uniós támogatások",
          "az állami vállalatok osztaléka",
          "a devizatartalékok hozama"
        ],
        correct_answer: "az adóbevételek (SZJA, társasági adó, ÁFA, járulékok)",
        explanation: "A költségvetés bevételi oldalát elsősorban az adóbevételek — SZJA, társasági adó, ÁFA, járulékok — alkotják.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor beszélünk kiegyensúlyozott költségvetésről?",
        options: [
          "amikor az állam kiadásai megegyeznek a bevételeivel",
          "amikor a kiadások meghaladják a bevételeket",
          "amikor a bevételek meghaladják a kiadásokat",
          "amikor megszűnik az adóztatás"
        ],
        correct_answer: "amikor az állam kiadásai megegyeznek a bevételeivel",
        explanation: "Kiegyensúlyozott költségvetésről akkor beszélünk, ha az állam kiadásai megegyeznek a bevételeivel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a költségvetési többlet?",
        options: [
          "amikor az állami bevételek meghaladják a kiadásokat",
          "amikor a kiadások meghaladják a bevételeket",
          "amikor a bevételek és kiadások megegyeznek",
          "amikor megszűnik az államadósság"
        ],
        correct_answer: "amikor az állami bevételek meghaladják a kiadásokat",
        explanation: "Költségvetési többlet akkor jön létre, ha az állam bevételei meghaladják a kiadásait.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a restriktív (szigorító) fiskális politikát?",
        options: [
          "az állami kiadások csökkentése és/vagy az adók emelése",
          "az állami kiadások növelése és az adók csökkentése",
          "a jegybanki alapkamat csökkentése",
          "az államadósság korlátlan növelése"
        ],
        correct_answer: "az állami kiadások csökkentése és/vagy az adók emelése",
        explanation: "A restriktív fiskális politika az állami kiadások csökkentésével és/vagy az adók emelésével próbálja visszafogni a túlfűtött gazdaságot vagy csökkenteni a hiányt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az adóztatás fiskális funkciója?",
        options: [
          "az állami feladatok finanszírozásához szükséges bevétel biztosítását",
          "a jövedelmi egyenlőtlenségek mérséklését",
          "a dohányzás visszaszorítását",
          "a piaci verseny szabályozását"
        ],
        correct_answer: "az állami feladatok finanszírozásához szükséges bevétel biztosítását",
        explanation: "A fiskális funkció az állami feladatok (oktatás, egészségügy, honvédelem) finanszírozásához szükséges bevétel biztosítását jelenti.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az adóztatás újraelosztási funkciója?",
        options: [
          "a jövedelmi egyenlőtlenségek mérséklését, jellemzően progresszív adózással",
          "az állami bevételek maximalizálását",
          "a piaci kudarcok teljes megszüntetését",
          "a külkereskedelem ösztönzését"
        ],
        correct_answer: "a jövedelmi egyenlőtlenségek mérséklését, jellemzően progresszív adózással",
        explanation: "Az újraelosztási funkció a jövedelmi egyenlőtlenségek mérséklését célozza, jellemzően a progresszív adózás révén.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az adóztatás szabályozó (ösztönző) funkciója?",
        options: [
          "bizonyos magatartások (pl. dohányzás) visszaszorítását vagy éppen ösztönzését (pl. innováció adókedvezménye) az adórendszeren keresztül",
          "kizárólag az állami bevételek növelését",
          "a jövedelmi egyenlőtlenségek megszüntetését",
          "a költségvetési hiány automatikus eltüntetését"
        ],
        correct_answer: "bizonyos magatartások (pl. dohányzás) visszaszorítását vagy éppen ösztönzését (pl. innováció adókedvezménye) az adórendszeren keresztül",
        explanation: "A szabályozó funkció bizonyos magatartások visszaszorítását (pl. magas jövedéki adó a dohányra) vagy ösztönzését (pl. adókedvezmény innovációra) jelenti.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a jóléti állam koncepcióját, és melyik modell alkalmaz magasabb adóterhelést és kiterjedtebb szociális ellátást?",
        options: [
          "a skandináv jóléti modell magasabb adóterhelést és kiterjedtebb szociális ellátórendszert alkalmaz, mint az angolszász modellek",
          "minden ország azonos jóléti modellt alkalmaz",
          "az angolszász modell mindig magasabb adóterhelést jelent",
          "a jóléti állam kizárólag a nyugdíjrendszerre korlátozódik"
        ],
        correct_answer: "a skandináv jóléti modell magasabb adóterhelést és kiterjedtebb szociális ellátórendszert alkalmaz, mint az angolszász modellek",
        explanation: "A jóléti állam mértéke és formája országonként eltér: a skandináv modell magasabb adóterhelést és kiterjedtebb szociális ellátórendszert alkalmaz, mint az angolszász modellek.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos az állam gazdasági stabilizáló szerepe?",
        options: [
          "mert segít tompítani a gazdasági ciklusok szélsőségeit és elősegíteni az árstabilitást és a teljes foglalkoztatottságot",
          "mert megszünteti a piaci mechanizmust",
          "mert kizárólag az államadósságot növeli",
          "mert nincs hatással a gazdasági ingadozásokra"
        ],
        correct_answer: "mert segít tompítani a gazdasági ciklusok szélsőségeit és elősegíteni az árstabilitást és a teljes foglalkoztatottságot",
        explanation: "Az állam gazdasági stabilizáló szerepe abban áll, hogy tompítja a gazdasági ciklusok szélsőségeit, és elősegíti az árstabilitást, illetve a teljes foglalkoztatottságot.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-modern-penz-es-a-jegybank-szerepe-monetaris-politika",
    title: "A modern pénz és a jegybank szerepe (monetáris politika)",
    level: "mindketto",
    theme: "Makroökonómia",
    order_index: 12,
    summary_markdown:
      "A modern pénz alapvetően hitelpénz és bankjegyek formájában létezik, amelynek mennyiségét és a hitelezés feltételeit a jegybank monetáris politikája — elsősorban az alapkamat meghatározásával — szabályozza, hogy elérje az árstabilitást és támogassa a gazdasági növekedést.",
    content_markdown: `
## A pénz funkciói

A **pénz** olyan általánosan elfogadott csereeszköz, amely három alapvető funkciót tölt be a gazdaságban. **Csereeszköz (forgalmi eszköz)** funkciójában lehetővé teszi az árucserét anélkül, hogy a felek igényeinek pontosan egybe kellene esniük (kiküszöböli a barterkereskedelem nehézségeit). **Értékmérő (elszámolási egység)** funkciójában a javak és szolgáltatások értékét egységes mértékegységben fejezi ki, lehetővé téve az árak összehasonlítását. **Értékőrző (felhalmozási eszköz)** funkciójában lehetővé teszi a vásárlóerő időbeli átvitelét, azaz a megtakarítást — bár ezt a funkciót az infláció ronthatja.

## A modern pénz jellemzői

A modern pénzrendszerekben a pénz túlnyomó többsége nem fizikai bankjegy vagy érme, hanem **hitelpénz**: a bankok számláin nyilvántartott, elektronikus formában létező pénz, amely a bankok passzívájaként (tartozásaként) jelenik meg, és amely a mindennapi gazdasági tranzakciók (átutalások, kártyás fizetések) során azonnal felhasználható. A modern pénz **fedezet nélküli (fiat) pénz**: értékét nem nemesfém-fedezet, hanem a kibocsátó állam és a gazdasági szereplők közötti bizalom, illetve a jogszabályi törvényes fizetőeszköz-jelleg biztosítja.

## A pénzteremtés folyamata

A modern bankrendszerben a pénz jelentős részét a **kereskedelmi bankok** teremtik a hitelezés folyamatában: amikor egy bank hitelt nyújt egy ügyfélnek, a hitel összegét jóváírja az ügyfél számláján, ezzel új pénzt hozva létre a gazdaságban (nem szükséges, hogy a bank a teljes hitelösszeget előzetesen mástól gyűjtött betétből fedezze). A bankok pénzteremtő képességét a jegybank által előírt **tartalékráta** korlátozza: a bankoknak a betéteik egy meghatározott hányadát tartalékként kell tartaniuk a jegybanknál, ami korlátozza a hitelezés és így a pénzteremtés mértékét (**pénzmultiplikátor-hatás**).

## A jegybank szerepe és feladatai

A **jegybank** (Magyarországon a **Magyar Nemzeti Bank, MNB**) a monetáris rendszer csúcsintézménye, amelynek elsődleges célja jellemzően az **árstabilitás** fenntartása. A jegybank feladatai közé tartozik a bankjegy- és érmekibocsátás monopóliuma, a kereskedelmi bankok felügyelete és „bankok bankjaként” való működése (végső hitelezői szerep), a devizatartalékok kezelése, valamint a **monetáris politika** irányítása.

## A monetáris politika eszközei

A jegybank elsődleges monetáris politikai eszköze az **alapkamat (jegybanki alapkamat)** meghatározása: az alapkamat emelésével a jegybank drágítja a bankközi és a lakossági/vállalati hitelezést, ami visszafogja a keresletet és mérsékli az inflációt, míg az alapkamat csökkentésével élénkíti a hitelezést és a gazdasági aktivitást. Emellett a jegybank alkalmazhat **kötelező tartalékrátát** (amely közvetlenül szabályozza a bankok hitelezési képességét), valamint **nyíltpiaci műveleteket** (állampapírok vétele vagy eladása, amellyel közvetlenül befolyásolja a pénzpiaci likviditást).

## A Magyar Nemzeti Bank döntéshozatali rendje

A Magyar Nemzeti Bankban a monetáris politikai döntéseket a **Monetáris Tanács** hozza meg, amely rendszeresen (havonta) ülésezik, és dönt többek között az alapkamat szintjéről. A jegybank függetlensége — vagyis hogy döntéseit a napi politikai befolyástól elzárva, szakmai szempontok alapján hozza meg — kulcsfontosságú az árstabilitás hiteles fenntartásához.

## Jelentősége

A modern pénz és a jegybanki monetáris politika megértése alapvető a makroökonómiában: ez magyarázza meg, hogyan keletkezik és áramlik a pénz a modern gazdaságban, és hogyan próbálja a jegybank — elsősorban a kamatpolitikán keresztül — egyensúlyban tartani az árstabilitást és a gazdasági növekedést támogató hitelezési feltételeket.
`,
    key_concepts: [
      "a pénz funkciói (csereeszköz, értékmérő, értékőrző)",
      "hitelpénz és fedezet nélküli (fiat) pénz",
      "pénzteremtés és pénzmultiplikátor",
      "jegybank (MNB) és az árstabilitás célja",
      "alapkamat és a monetáris politika eszközei",
    ],
    source_refs: [
      { label: "A modern pénz – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-modern-penz/" },
      { label: "Magyar Nemzeti Bank (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Magyar_Nemzeti_Bank" },
      { label: "A monetáris politika – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/egyeb/a-monetaris-politika/" },
      { label: "Monetáris politika (Magyar Nemzeti Bank)", url: "https://www.mnb.hu/monetaris-politika" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik NEM tartozik a pénz alapvető funkciói közé?",
        options: ["termelési tényező funkció", "csereeszköz funkció", "értékmérő funkció", "értékőrző funkció"],
        correct_answer: "termelési tényező funkció",
        explanation: "A pénz három alapvető funkciója a csereeszköz, az értékmérő és az értékőrző funkció — a pénz önmagában nem termelési tényező.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan keletkezik a modern pénz nagy része?",
        options: [
          "a kereskedelmi bankok hitelezési tevékenysége révén",
          "kizárólag a jegybanki bankjegynyomtatás révén",
          "az állami költségvetésből",
          "a tőzsdei kereskedésből"
        ],
        correct_answer: "a kereskedelmi bankok hitelezési tevékenysége révén",
        explanation: "A modern pénz döntő része a kereskedelmi bankok hitelezése során, a hitelösszeg számlán történő jóváírásával keletkezik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi Magyarország jegybankjának neve?",
        options: ["Magyar Nemzeti Bank (MNB)", "Magyar Fejlesztési Bank", "Államadósság Kezelő Központ", "Pénzügyminisztérium"],
        correct_answer: "Magyar Nemzeti Bank (MNB)",
        explanation: "Magyarországon a Magyar Nemzeti Bank tölti be a jegybank szerepét, amelynek elsődleges célja az árstabilitás fenntartása.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a jegybanki alapkamat elsődleges szerepe?",
        options: [
          "a hitelezés drágításával vagy olcsóbbá tételével befolyásolja a keresletet és az inflációt",
          "közvetlenül meghatározza az állami költségvetés kiadásait",
          "az adók mértékét szabályozza",
          "a munkanélküliségi rátát rögzíti"
        ],
        correct_answer: "a hitelezés drágításával vagy olcsóbbá tételével befolyásolja a keresletet és az inflációt",
        explanation: "Az alapkamat változtatásával a jegybank befolyásolja a hitelfelvétel költségét, ezáltal a keresletet és az inflációs folyamatokat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik testület hozza meg a Magyar Nemzeti Bank monetáris politikai döntéseit?",
        options: ["a Monetáris Tanács", "az Országgyűlés", "a Kormány", "a Gazdasági Versenyhivatal"],
        correct_answer: "a Monetáris Tanács",
        explanation: "Az MNB Monetáris Tanácsa dönt rendszeres üléseken többek között az alapkamat szintjéről.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a pénz csereeszköz (forgalmi eszköz) funkciója?",
        options: [
          "lehetővé teszi az árucserét anélkül, hogy a felek igényeinek pontosan egybe kellene esniük",
          "megméri a javak értékét egységes mértékegységben",
          "lehetővé teszi a vásárlóerő időbeli átvitelét",
          "az árstabilitást biztosítja"
        ],
        correct_answer: "lehetővé teszi az árucserét anélkül, hogy a felek igényeinek pontosan egybe kellene esniük",
        explanation: "A csereeszköz funkcióban a pénz lehetővé teszi az árucserét anélkül, hogy a felek igényeinek pontosan egybe kellene esniük, kiküszöbölve a barterkereskedelem nehézségeit.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a pénz értékmérő (elszámolási egység) funkciója?",
        options: [
          "a javak és szolgáltatások értékét egységes mértékegységben fejezi ki",
          "lehetővé teszi a megtakarítást",
          "kiküszöböli a barterkereskedelmet",
          "biztosítja az árstabilitást"
        ],
        correct_answer: "a javak és szolgáltatások értékét egységes mértékegységben fejezi ki",
        explanation: "Az értékmérő funkcióban a pénz a javak és szolgáltatások értékét egységes mértékegységben fejezi ki, lehetővé téve az árak összehasonlítását.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a pénz értékőrző (felhalmozási eszköz) funkciója?",
        options: [
          "lehetővé teszi a vásárlóerő időbeli átvitelét, azaz a megtakarítást",
          "az árucserét egyszerűsíti le",
          "a javak értékét méri",
          "megszünteti az inflációt"
        ],
        correct_answer: "lehetővé teszi a vásárlóerő időbeli átvitelét, azaz a megtakarítást",
        explanation: "Az értékőrző funkcióban a pénz lehetővé teszi a vásárlóerő időbeli átvitelét (megtakarítást), bár ezt a funkciót az infláció ronthatja.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a modern, fedezet nélküli (fiat) pénzt?",
        options: [
          "értékét nem nemesfém-fedezet, hanem a bizalom és a törvényes fizetőeszköz-jelleg biztosítja",
          "minden bankjegyet arannyal fedeznek",
          "csak elektronikus formában létezik",
          "nincs jogszabályi háttere"
        ],
        correct_answer: "értékét nem nemesfém-fedezet, hanem a bizalom és a törvényes fizetőeszköz-jelleg biztosítja",
        explanation: "A modern pénz fedezet nélküli (fiat) pénz: értékét nem nemesfém-fedezet, hanem a kibocsátó állam és a gazdasági szereplők közötti bizalom, illetve a törvényes fizetőeszköz-jelleg biztosítja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a kötelező tartalékráta szerepe?",
        options: [
          "korlátozza a bankok hitelezési, tehát pénzteremtő képességét",
          "meghatározza az állami költségvetés kiadásait",
          "rögzíti a munkanélküliségi rátát",
          "az árfolyamot szabályozza"
        ],
        correct_answer: "korlátozza a bankok hitelezési, tehát pénzteremtő képességét",
        explanation: "A jegybank által előírt tartalékráta korlátozza, hogy a bankok betéteik mekkora hányadát hitelezhetik ki, ezzel korlátozva a pénzteremtést.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a pénzmultiplikátor-hatás?",
        options: [
          "azt, hogy a bankrendszer a tartalékráta korlátai között a betétek többszörösét képes hitelezés révén pénzzé alakítani",
          "azt, hogy a jegybank megsokszorozza a bankjegyek fizikai mennyiségét",
          "azt, hogy az árfolyam megsokszorozódik",
          "azt, hogy az állam megsokszorozza az adóbevételeit"
        ],
        correct_answer: "azt, hogy a bankrendszer a tartalékráta korlátai között a betétek többszörösét képes hitelezés révén pénzzé alakítani",
        explanation: "A pénzmultiplikátor-hatás azt fejezi ki, hogy a bankrendszer a tartalékráta korlátai mellett a betétek többszörösét képes hitelezéssel pénzzé alakítani.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik alapvető feladata a jegybanknak a bankjegykibocsátás terén?",
        options: [
          "a bankjegy- és érmekibocsátás monopóliuma",
          "a kereskedelmi bankok versenyének megszüntetése",
          "az állami költségvetés összeállítása",
          "az adók beszedése"
        ],
        correct_answer: "a bankjegy- és érmekibocsátás monopóliuma",
        explanation: "A jegybank egyik alapvető feladata a bankjegy- és érmekibocsátás monopóliuma egy adott országban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent, hogy a jegybank a „bankok bankjaként” működik?",
        options: [
          "felügyeli a kereskedelmi bankokat, és végső hitelezőként léphet fel szükség esetén",
          "közvetlenül hitelt nyújt a lakosságnak",
          "kizárólag a kormánynak nyújt hitelt",
          "megszünteti a kereskedelmi bankok tevékenységét"
        ],
        correct_answer: "felügyeli a kereskedelmi bankokat, és végső hitelezőként léphet fel szükség esetén",
        explanation: "A jegybank „bankok bankjaként” felügyeli a kereskedelmi bankokat, és szükség esetén végső hitelezőként léphet fel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a nyíltpiaci műveletek szerepe a monetáris politikában?",
        options: [
          "állampapírok vétele vagy eladása révén közvetlenül befolyásolják a pénzpiaci likviditást",
          "az adókulcsok módosítása",
          "az állami kiadások közvetlen szabályozása",
          "a minimálbér megállapítása"
        ],
        correct_answer: "állampapírok vétele vagy eladása révén közvetlenül befolyásolják a pénzpiaci likviditást",
        explanation: "A nyíltpiaci műveletek során a jegybank állampapírok vételével vagy eladásával közvetlenül befolyásolja a pénzpiaci likviditást.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kulcsfontosságú a jegybank függetlensége?",
        options: [
          "mert lehetővé teszi, hogy a döntéseket a napi politikai befolyástól elzárva, szakmai szempontok alapján hozzák meg, ami hiteles az árstabilitás szempontjából",
          "mert így a kormány közvetlenül irányíthatja az alapkamatot",
          "mert megszünteti a monetáris politika szükségességét",
          "mert csak így fizethetők ki az állami nyugdíjak"
        ],
        correct_answer: "mert lehetővé teszi, hogy a döntéseket a napi politikai befolyástól elzárva, szakmai szempontok alapján hozzák meg, ami hiteles az árstabilitás szempontjából",
        explanation: "A jegybank függetlensége — hogy döntéseit a napi politikai befolyástól elzárva hozza meg — kulcsfontosságú az árstabilitás hiteles fenntartásához.",
        difficulty: 3,
      },
    ],
  },
];
