import type { TopicSeed } from "./angol";

export const informatikaTarsadalomAlapokTopics: TopicSeed[] = [
  {
    slug: "adatvedelem-es-gdpr",
    title: "Adatvédelem és a GDPR alapjai",
    level: "mindketto",
    theme: "Információs társadalom",
    order_index: 1,
    summary_markdown:
      "A személyes adatok védelme az információs társadalom egyik kulcskérdése. Ez a tétel a személyes adat fogalmát, az adatkezelés alapelveit és a GDPR (általános adatvédelmi rendelet) legfontosabb szabályait tekinti át.",
    content_markdown: `
## Mi számít személyes adatnak?

**Személyes adat** minden olyan információ, amely egy azonosított vagy azonosítható természetes személyre (érintettre) vonatkozik. Ide tartozik például:

- név, lakcím, születési dátum, anyja neve
- e-mail cím, telefonszám, IP-cím
- egészségügyi adatok, biometrikus adatok (ujjlenyomat, arcképmás)
- online azonosítók (sütik, felhasználónevek)

A **különleges adatok** (egészségi állapot, szexuális irányultság, politikai nézet, vallási meggyőződés) fokozott védelmet élveznek.

## A GDPR és alapelvei

A **GDPR** (General Data Protection Regulation, magyarul általános adatvédelmi rendelet) 2018 májusa óta érvényes az Európai Unióban, és minden szervezetre vonatkozik, amely uniós polgárok adatait kezeli. Legfontosabb alapelvei:

1. **Jogszerűség, tisztességes eljárás, átláthatóság** — az érintettnek tudnia kell, milyen adatát, miért kezelik.
2. **Célhoz kötöttség** — az adatot csak a megjelölt célra szabad felhasználni.
3. **Adattakarékosság** — csak a célhoz feltétlenül szükséges adatot szabad gyűjteni.
4. **Pontosság** — az adatoknak naprakésznek kell lenniük.
5. **Korlátozott tárolhatóság** — az adatot csak a szükséges ideig lehet megőrizni.
6. **Integritás és bizalmas jelleg** — az adatot megfelelő biztonsági intézkedésekkel kell védeni.

## Az érintett jogai

- **Hozzáférés joga**: bárki megkérdezheti, milyen adatait kezelik róla.
- **Helyesbítéshez való jog**: a pontatlan adat javítását kérheti.
- **Törléshez való jog** ("elfeledtetéshez való jog"): bizonyos esetekben kérheti adatai törlését.
- **Adathordozhatósághoz való jog**: kérheti, hogy adatait tagolt, géppel olvasható formában megkapja.
- **Tiltakozáshoz való jog**: megtilthatja adatai bizonyos célú (pl. közvetlen üzletszerzési) kezelését.

## Adatkezelő és adatfeldolgozó

Az **adatkezelő** az a szervezet, amely eldönti, milyen célra és hogyan kezeli az adatot (pl. egy webáruház). Az **adatfeldolgozó** az adatkezelő megbízásából, annak utasítására dolgozza fel az adatot (pl. egy tárhelyszolgáltató). Adatszivárgás esetén az adatkezelőnek 72 órán belül be kell jelentenie az esetet a hatóságnak (Magyarországon a **NAIH**, Nemzeti Adatvédelmi és Információszabadság Hatóság).

## Gyakorlati példák

- Amikor egy weboldal **süti (cookie) hozzájárulást** kér, ez a GDPR átláthatósági elvének való megfelelést szolgálja.
- Egy iskolai nyilvántartásban a diákok adatait csak az oktatási céllal arányos mértékben szabad tárolni.
- Ha egy cég feleslegesen évekig megőrzi a volt ügyfelek adatait, az sérti a korlátozott tárolhatóság elvét.

## Miért fontos ez?

A digitális korban szinte minden tevékenységünk adatnyomot hagy. A GDPR ismerete nemcsak vizsgakövetelmény, hanem gyakorlati tudás is: segít tudatosan dönteni arról, milyen adatokat osztunk meg magunkról, és milyen jogaink vannak, ha ezekkel visszaélnek.
`,
    key_concepts: [
      "személyes adat",
      "GDPR",
      "adatkezelő és adatfeldolgozó",
      "az érintett jogai",
      "adattakarékosság",
      "NAIH",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a GDPR magyar megfelelője?",
        options: [
          "Általános adatvédelmi rendelet",
          "Általános digitális rendelet",
          "Globális adatkezelési rendszer",
          "Génvédelmi és digitális rendelet",
        ],
        correct_answer: "Általános adatvédelmi rendelet",
        explanation: "A GDPR (General Data Protection Regulation) magyar megfelelője az általános adatvédelmi rendelet.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik NEM tartozik a különleges (fokozottan védett) adatok közé?",
        options: [
          "lakcím",
          "egészségi állapot",
          "szexuális irányultság",
          "vallási meggyőződés",
        ],
        correct_answer: "lakcím",
        explanation: "A lakcím sima személyes adat, míg az egészségi állapot, a szexuális irányultság és a vallási meggyőződés különleges, fokozottan védett adatnak minősül.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik alapelvet sérti, ha egy cég a szükségesnél sokkal több adatot gyűjt az ügyfeleiről 'biztos, ami biztos' alapon?",
        options: [
          "adattakarékosság",
          "átláthatóság",
          "pontosság",
          "adathordozhatóság",
        ],
        correct_answer: "adattakarékosság",
        explanation: "Az adattakarékosság elve szerint csak a célhoz feltétlenül szükséges mennyiségű adatot szabad gyűjteni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az adatkezelő és az adatfeldolgozó között?",
        options: [
          "Az adatkezelő dönt a cél és mód felől, az adatfeldolgozó az ő megbízásából dolgozza fel az adatot",
          "Az adatfeldolgozó dönt a cél és mód felől, az adatkezelő csak tárolja az adatot",
          "A kettő ugyanaz, csak más országban használt elnevezés",
          "Az adatkezelő csak állami szerv lehet, az adatfeldolgozó csak magáncég",
        ],
        correct_answer: "Az adatkezelő dönt a cél és mód felől, az adatfeldolgozó az ő megbízásából dolgozza fel az adatot",
        explanation: "Az adatkezelő határozza meg az adatkezelés célját és eszközeit, az adatfeldolgozó pedig az adatkezelő utasítására, megbízásából végzi a feldolgozást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Adatszivárgás esetén hány órán belül kell azt bejelenteni a felügyeleti hatóságnak a GDPR szerint?",
        options: ["72 órán belül", "24 órán belül", "7 napon belül", "30 napon belül"],
        correct_answer: "72 órán belül",
        explanation: "A GDPR főszabályként 72 órás bejelentési határidőt ír elő az adatvédelmi incidensek esetén.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "szerzoi-jog-es-szoftverlicencek",
    title: "Szerzői jog és szoftverlicencek",
    level: "mindketto",
    theme: "Információs társadalom",
    order_index: 2,
    summary_markdown:
      "A digitális tartalmak (szoftverek, képek, zenék, szövegek) felhasználását szerzői jogi szabályok és licencfeltételek határozzák meg. Ez a tétel a szerzői jog alapjait és a leggyakoribb szoftverlicenc-típusokat mutatja be.",
    content_markdown: `
## A szerzői jog alapjai

A **szerzői jog** (copyright) a szellemi alkotások (irodalmi, zenei, képzőművészeti, szoftveres alkotások) létrehozóját illeti meg, és automatikusan, a mű megalkotásának pillanatában keletkezik — nem kell hozzá regisztráció. A szerzőt megilletik:

- **vagyoni jogok**: a mű felhasználásáért (másolás, terjesztés, nyilvánosságra hozatal) díjazás jár, ezekkel rendelkezni is lehet (átruházni, licencbe adni).
- **személyhez fűződő jogok**: a névfeltüntetéshez, a mű integritásához való jog — ezek nem ruházhatók át.

A szerzői jogi védelem Magyarországon a szerző haláiát követő **70 évig** tart, utána a mű **közkincsnek (public domain)** minősül, szabadon felhasználható.

## Szoftverlicenc-típusok

A szoftvereket a gyártó által meghatározott **licencfeltételek** mellett lehet használni:

1. **Proprietary (zárt, kereskedelmi) szoftver**: forráskódja nem publikus, használata díjhoz és/vagy korlátozásokhoz kötött (pl. Microsoft Windows, Adobe Photoshop).
2. **Freeware**: ingyenesen használható, de a forráskód nem elérhető, és a szerzői jog a fejlesztőé marad (pl. Skype).
3. **Shareware**: kipróbálásra ingyenes, korlátozott ideig vagy funkcionalitással, teljes használatért fizetni kell.
4. **Nyílt forráskódú (open source) szoftver**: a forráskód nyilvánosan elérhető, módosítható és továbbfejleszthető (pl. Linux, LibreOffice, Firefox). Ilyenkor a licenc szabályozza, milyen feltételekkel terjeszthető a módosított változat (pl. **GPL**, **MIT licenc**).
5. **Közkincs (public domain) szoftver**: minden korlátozás nélkül szabadon felhasználható.

## Creative Commons licencek

Nem csak szoftverekre, hanem képekre, szövegekre, zenékre is léteznek szabványos licencek. A **Creative Commons (CC)** licenccsalád jelölései kombinálhatók:

- **BY** (Attribution) — a szerző feltüntetése kötelező.
- **NC** (NonCommercial) — kereskedelmi célra nem használható.
- **ND** (NoDerivatives) — a mű nem módosítható.
- **SA** (ShareAlike) — a származékos műveket ugyanolyan licenccel kell közzétenni.

Például egy "CC BY-NC-SA" jelölésű kép szabadon felhasználható, de a szerzőt fel kell tüntetni, kereskedelmi célra nem lehet használni, és a belőle készült származékos művet ugyanezen licenccel kell megosztani.

## Kalózkodás és jogkövetkezmények

A szerzői joggal védett mű engedély nélküli másolása, terjesztése **szerzői jogsértésnek (kalózkodásnak)** minősül, amely polgári jogi (kártérítés) és büntetőjogi következményekkel is járhat. Iskolai, oktatási felhasználásra léteznek kivételek (**szabad felhasználás**), de ezek is korlátozottak (pl. csak részlet idézhető, forrásmegjelöléssel).

## Miért fontos ez a mindennapokban?

Amikor egy diák egy internetes képet tesz be a prezentációjába, egy zenét tölt le, vagy egy szoftvert telepít, mindig érdemes megnézni a licencfeltételeket — ez nem csak jogi kötelezettség, hanem a szerzők munkájának tiszteletben tartása is.
`,
    key_concepts: [
      "szerzői jog",
      "vagyoni és személyhez fűződő jogok",
      "nyílt forráskódú szoftver",
      "freeware és shareware",
      "Creative Commons licenc",
      "közkincs (public domain)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik állítás igaz a nyílt forráskódú (open source) szoftverekre?",
        options: [
          "A forráskód nyilvánosan elérhető és módosítható",
          "A szoftver mindig kizárólag fizetős",
          "A forráskód titkos, csak a gyártó fér hozzá",
          "Csak oktatási célra használhatók",
        ],
        correct_answer: "A forráskód nyilvánosan elérhető és módosítható",
        explanation: "A nyílt forráskódú szoftverek lényege, hogy a forráskód nyilvános, bárki megtekintheti, módosíthatja és továbbfejlesztheti a licenc feltételei szerint.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a Creative Commons licencek 'NC' jelölése?",
        options: [
          "kereskedelmi célra nem használható",
          "a szerzőt kötelező feltüntetni",
          "a mű nem módosítható",
          "a mű csak nonprofit szervezetek számára elérhető",
        ],
        correct_answer: "kereskedelmi célra nem használható",
        explanation: "Az 'NC' (NonCommercial) jelölés azt jelenti, hogy a mű kereskedelmi célra nem használható fel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a shareware típusú szoftvereket?",
        options: [
          "Korlátozott ideig vagy funkcióval ingyenesen kipróbálhatók, teljes verzióért fizetni kell",
          "Teljesen ingyenesek és korlátlanul használhatók örökre",
          "A forráskódjuk mindig nyilvános",
          "Kizárólag állami intézmények használhatják",
        ],
        correct_answer: "Korlátozott ideig vagy funkcióval ingyenesen kipróbálhatók, teljes verzióért fizetni kell",
        explanation: "A shareware modell lényege a korlátozott (idő- vagy funkció-) kipróbálás, majd fizetés a teljes verzióért.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Magyarországon a szerzői jogi védelem meddig tart a szerző halálát követően?",
        options: ["70 évig", "10 évig", "25 évig", "korlátlan ideig"],
        correct_answer: "70 évig",
        explanation: "A magyar szerzői jogi törvény szerint a védelmi idő a szerző halálát követő 70 év, ezután a mű közkinccsé válik.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy kép 'CC BY-SA' licenccel érhető el. Mit jelent ez?",
        options: [
          "A szerzőt fel kell tüntetni, és a származékos művet ugyanolyan licenccel kell közzétenni",
          "A kép semmilyen körülmények között nem használható fel",
          "A kép csak eredeti, változtatás nélküli formában terjeszthető",
          "A kép kizárólag kereskedelmi célra használható",
        ],
        correct_answer: "A szerzőt fel kell tüntetni, és a származékos művet ugyanolyan licenccel kell közzétenni",
        explanation: "A 'BY' a névfeltüntetést, a 'SA' (ShareAlike) pedig azt írja elő, hogy a származékos mű is ugyanazon licenccel kerüljön közzétételre.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "netikett-digitalis-biztonsag",
    title: "Netikett, digitális biztonság és online veszélyek",
    level: "mindketto",
    theme: "Információs társadalom",
    order_index: 3,
    summary_markdown:
      "Az internetes kommunikáció íratlan szabályai (netikett), valamint a leggyakoribb online veszélyek (phishing, kártevők, zaklatás) és az ellenük való védekezés alapjai.",
    content_markdown: `
## Mi a netikett?

A **netikett** (network + etiquette) az internetes kommunikáció íratlan viselkedési szabályainak összessége. Néhány alapelve:

- Ne írj csupa nagybetűvel — ez az internetes kommunikációban **kiabálásnak** számít.
- Gondold át, mielőtt elküldesz egy üzenetet vagy hozzászólást — az interneten a leírt szó "megmarad" (screenshot, továbbküldés).
- Légy tisztelettel másokkal akkor is, ha nem látod az arcukat — a **flame war** (indulatos, személyeskedő vita) senkinek nem jó.
- Fórumokon, levelezőlistákon nézd meg, létezik-e már a kérdésedre válasz (GYIK/FAQ), mielőtt megkérdezed.
- Csoportos levelezésnél figyelj arra, kit teszel a "Válasz mindenkinek" listára.

## Digitális biztonsági alapfogalmak

- **Kártevő (malware)**: rosszindulatú szoftverek gyűjtőneve. Típusai: **vírus** (más programhoz csatolva terjed), **féreg (worm)** (önállóan, hálózaton terjed), **trójai program** (hasznos programnak álcázza magát), **zsarolóvírus (ransomware)** (titkosítja az adatokat, váltságdíjat követel), **kémprogram (spyware)** (adatokat lop).
- **Phishing (adathalászat)**: megtévesztő e-mail vagy weboldal, amely hiteles szervezetnek (banknak, szolgáltatónak) álcázza magát, hogy jelszavakat, bankkártyaadatokat csaljon ki.
- **Tűzfal (firewall)**: a hálózati forgalmat szűrő rendszer, amely megakadályozza az illetéktelen hozzáférést.
- **Kétfaktoros hitelesítés (2FA)**: a jelszó mellett egy második azonosítási módot (pl. SMS-kód, hitelesítő alkalmazás) is megkövetel a bejelentkezéshez.

## Hogyan ismerjük fel a phishinget?

- Gyanúsan sürgető hangnem ("azonnal cselekedj, különben zárolják a fiókodat").
- Elgépelt vagy szokatlan feladó e-mail cím (pl. "support@bank-info-login.com").
- Linkre kattintás helyett érdemes a hivatalos oldalt közvetlenül, böngészőbe beírva felkeresni.
- Kérés személyes adatra vagy jelszóra e-mailben — hiteles szolgáltató ezt szinte soha nem kéri.

## Online zaklatás és a digitális biztonság gyakorlati szabályai

A **cyberbullying (internetes zaklatás)** a digitális térben történő megfélemlítés, zaklatás, amely lehet nyílt (sértő üzenetek) vagy rejtett (kirekesztés, pletyka terjesztése). Védekezés: mentsük el a bizonyítékokat, blokkoljuk a zaklatót, jelezzük a platformnak vagy egy felnőttnek.

Alapvető digitális higiénia:

1. Használjunk **erős, egyedi jelszavakat** minden fiókhoz (jelszókezelő program segítségével).
2. Kapcsoljuk be a **kétfaktoros hitelesítést**, ahol lehetséges.
3. Rendszeresen **frissítsük** az operációs rendszert és a programokat (a frissítések gyakran biztonsági réseket javítanak).
4. Ne kattintsunk ismeretlen forrásból érkező linkekre vagy mellékletekre.
5. Nyilvános Wi-Fi hálózaton kerüljük az érzékeny adatok (banki jelszó) megadását.

## Összefoglalás

A netikett és a digitális biztonság ismerete nem elvont elmélet: napi szinten véd meg minket a kellemetlenségektől, az anyagi kártól és mások megbántásától is.
`,
    key_concepts: [
      "netikett",
      "malware (kártevő) típusai",
      "phishing (adathalászat)",
      "kétfaktoros hitelesítés",
      "cyberbullying",
      "tűzfal",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik kártevőtípus titkosítja az áldozat adatait, majd váltságdíjat követel?",
        options: ["ransomware (zsarolóvírus)", "spyware", "adware", "worm"],
        correct_answer: "ransomware (zsarolóvírus)",
        explanation: "A ransomware (zsarolóvírus) titkosítja a fájlokat, és csak fizetés (váltságdíj) ellenében ígéri a feloldásukat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a phishing (adathalászat) lényege?",
        options: [
          "Megtévesztő üzenettel próbálnak jelszót vagy bankkártyaadatot kicsalni",
          "A számítógép hardveres meghibásodása",
          "A háttértár tömörítése",
          "Egy weboldal legális reklámkampánya",
        ],
        correct_answer: "Megtévesztő üzenettel próbálnak jelszót vagy bankkártyaadatot kicsalni",
        explanation: "A phishing lényege, hogy hiteles szervezetnek álcázott, megtévesztő üzenettel próbálnak érzékeny adatokat kicsalni az áldozatból.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miben különbözik a féreg (worm) a vírustól?",
        options: [
          "A féreg önállóan, más program nélkül is képes terjedni a hálózaton",
          "A féreg soha nem okoz kárt a rendszerben",
          "A féreg csak floppy lemezen terjedhet",
          "A féreg és a vírus pontosan ugyanazt jelenti",
        ],
        correct_answer: "A féreg önállóan, más program nélkül is képes terjedni a hálózaton",
        explanation: "A vírus más programhoz csatolva terjed, míg a féreg önállóan, gazdaprogram nélkül is képes terjedni a hálózaton.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire szolgál a kétfaktoros hitelesítés (2FA)?",
        options: [
          "A jelszó mellett egy második azonosítási módszerrel növeli a fiók biztonságát",
          "Kizárólag a böngészési sebességet gyorsítja fel",
          "Automatikusan törli a régi jelszavakat",
          "Csökkenti az internet-előfizetés díját",
        ],
        correct_answer: "A jelszó mellett egy második azonosítási módszerrel növeli a fiók biztonságát",
        explanation: "A 2FA a jelszó mellé egy második, független azonosítási tényezőt (pl. SMS-kód) vezet be, így nehezebb illetéktelenül bejelentkezni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik jel utalhat leginkább egy adathalász (phishing) e-mailre?",
        options: [
          "Sürgető hangnem és gyanús, elgépelt feladói cím, amely jelszó azonnali megadását kéri",
          "A feladó neve pontosan megegyezik egy általunk ismert kollégáéval",
          "Az e-mail csak tájékoztató jellegű, nincs benne link",
          "Az üzenet a saját korábbi levelezésünkre válaszol",
        ],
        correct_answer: "Sürgető hangnem és gyanús, elgépelt feladói cím, amely jelszó azonnali megadását kéri",
        explanation: "A phishing tipikus jelei a mesterséges sürgetés, a gyanús feladói cím és az érzékeny adat (jelszó) közvetlen kérése.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kozossegi-media-alhirek-forraskritika",
    title: "Közösségi média, álhírek és forráskritika",
    level: "mindketto",
    theme: "Információs társadalom",
    order_index: 4,
    summary_markdown:
      "A közösségi média hatása a véleményformálásra, az álhírek (fake news) felismerése és a forráskritika módszertana — kulcskompetencia a digitális információdömpingben való eligazodáshoz.",
    content_markdown: `
## A közösségi média szerepe az információterjesztésben

A közösségi médiaplatformok (Facebook, Instagram, TikTok, X/Twitter) mára a hírfogyasztás egyik fő csatornájává váltak. Ennek következményei:

- **Algoritmikus szűrés**: a platformok algoritmusai azt mutatják, amivel korábban interakcióba léptünk, ez **"buborékhatáshoz" (filter bubble)** vezethet — csak a saját véleményünket megerősítő tartalmakat látjuk.
- **Visszhangkamra (echo chamber)**: hasonló gondolkodású emberek egymást erősítve terjesztik ugyanazt a nézőpontot, ami polarizációhoz vezethet.
- **Gyors, de ellenőrizetlen terjedés**: egy hír percek alatt milliókhoz eljuthat, mielőtt bárki ellenőrizhetné a valóságtartalmát.

## Az álhír (fake news) fogalma és típusai

**Álhírnek** nevezzük a szándékosan félrevezető, valótlan vagy megtévesztő módon tálalt információt, amelyet hírként terjesztenek. Típusai:

1. **Teljesen kitalált hír** — a történet elejétől végig hamis.
2. **Manipulált tartalom** — valós esemény torzított, kiragadott bemutatása (pl. félrevágott videó).
3. **Félrevezető cím (clickbait)** — a cím túlzó vagy féligazságot állít, hogy kattintásra ösztönözzön.
4. **Szatíra félreértése** — egy humoros, szatirikus tartalmat valós hírként osztanak meg.
5. **Deepfake** — mesterséges intelligenciával generált, hamis kép vagy videó, amely valósághűnek tűnik.

## A forráskritika módszertana

Egy információ hitelességének ellenőrzésekor érdemes az alábbi szempontokat végignézni:

- **Ki a szerző/forrás?** Ismert, megbízható médium vagy ismeretlen, gyanús oldal?
- **Mikor keletkezett?** Nem egy régi, más kontextusban igaz hírt osztanak-e meg újra?
- **Van-e más, független forrás**, amely megerősíti az állítást?
- **Milyen a nyelvezet?** Túlzó, érzelmekre ható, "SOKKOLÓ!" jellegű címek gyanúsak.
- **Van-e hivatkozás, forrásmegjelölés**, ellenőrizhető adat, statisztika?
- **Kereshető-e vissza kép- vagy videótalálattal** (fordított képkeresés), hogy a kép valóban ahhoz az eseményhez kapcsolódik-e?

## A lateral reading (oldalirányú olvasás) technikája

A szakértők ajánlása szerint egy ismeretlen forrás megbízhatóságát nem az oldalon belül, hanem **más, független forrásokon** keresztül érdemes ellenőrizni: nyissunk új böngészőfület, és nézzük meg, mit írnak más, megbízható hírportálok vagy tényellenőrző oldalak (pl. a magyar nyelvű tényellenőrző szolgáltatások) az adott témáról.

## Digitális jólét és tudatos médiahasználat

- Állítsunk be **napi képernyőidő-korlátot**, ha úgy érezzük, túl sok időt töltünk el a közösségi médián.
- Kövessünk **változatos, több nézőpontú** forrásokat, hogy elkerüljük a buborékhatást.
- Osszunk meg tartalmat csak akkor, ha meggyőződtünk a hitelességéről — az álhírek terjesztésében mindannyian felelősek vagyunk.

## Összefoglalás

A digitális korban a kritikus gondolkodás és a forráskritika alapkompetenciává vált: nem elég elolvasni egy hírt, meg is kell tudni ítélni annak hitelességét, mielőtt elhisszük vagy továbbadjuk.
`,
    key_concepts: [
      "álhír (fake news)",
      "filter bubble (buborékhatás)",
      "echo chamber (visszhangkamra)",
      "forráskritika",
      "lateral reading",
      "deepfake",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a 'filter bubble' (buborékhatás) kifejezés?",
        options: [
          "Az algoritmus főleg a saját véleményünket megerősítő tartalmakat mutatja",
          "A böngésző automatikusan törli a sütiket",
          "A közösségi média minden felhasználónak ugyanazt a tartalmat mutatja",
          "Egy vírusvédelmi technológia neve",
        ],
        correct_answer: "Az algoritmus főleg a saját véleményünket megerősítő tartalmakat mutatja",
        explanation: "A filter bubble azt jelenti, hogy a személyre szabott algoritmusok miatt főleg olyan tartalmakkal találkozunk, amelyek megerősítik a már meglévő véleményünket.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a 'deepfake' tartalmakat?",
        options: [
          "Mesterséges intelligenciával generált, valósághűnek tűnő, de hamis kép vagy videó",
          "Egy régi, de igaz hír újraközlése",
          "Egy hivatalos kormányzati közlemény",
          "Egy tudományosan ellenőrzött statisztikai adat",
        ],
        correct_answer: "Mesterséges intelligenciával generált, valósághűnek tűnő, de hamis kép vagy videó",
        explanation: "A deepfake technológia mesterséges intelligenciával hoz létre valósághűnek tűnő, de hamis vizuális tartalmakat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a 'lateral reading' (oldalirányú olvasás) lényege a forráskritikában?",
        options: [
          "Más, független forrásokon ellenőrizzük az adott állítás hitelességét",
          "Az egész cikket kétszer, lassan elolvassuk",
          "Csak a képeket nézzük meg egy cikkben",
          "A cikk végén lévő kommenteket olvassuk el",
        ],
        correct_answer: "Más, független forrásokon ellenőrizzük az adott állítás hitelességét",
        explanation: "A lateral reading lényege, hogy nem az adott oldalon belül, hanem más, független forrásokra kilépve ellenőrizzük az információt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik NEM tipikus jele egy megbízhatatlan online hírnek?",
        options: [
          "Több független, megbízható forrás is megerősíti ugyanazt az információt",
          "Túlzó, sokkoló hangvételű cím",
          "Ismeretlen, gyanús domainnév",
          "Nincs feltüntetve semmilyen forrás vagy szerző",
        ],
        correct_answer: "Több független, megbízható forrás is megerősíti ugyanazt az információt",
        explanation: "Ha több független, megbízható forrás is alátámasztja az információt, az éppen a megbízhatóságot erősíti, nem a megbízhatatlanságot jelzi.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hatást fejt ki az 'echo chamber' (visszhangkamra) jelenség a közösségi médiában?",
        options: [
          "Hasonló véleményű emberek egymást erősítve polarizálódnak",
          "Minden felhasználó ugyanolyan mennyiségű hirdetést lát",
          "A platform sebessége lelassul",
          "Az adatvédelmi beállítások automatikusan szigorodnak",
        ],
        correct_answer: "Hasonló véleményű emberek egymást erősítve polarizálódnak",
        explanation: "Az echo chamber jelenség során a hasonló nézeteket valló felhasználók egymás állításait erősítik meg, ami a vélemények polarizálódásához vezet.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-szamitogep-felepitese",
    title: "A számítógép felépítése (Neumann-elvek, hardver architektúra)",
    level: "mindketto",
    theme: "Az informatika alapjai",
    order_index: 5,
    summary_markdown:
      "A modern számítógépek felépítésének elméleti alapja a Neumann-elvek. Ez a tétel a Neumann-architektúrát és a legfontosabb hardverelemeket (CPU, memória, háttértár, ki- és bemeneti eszközök) mutatja be.",
    content_markdown: `
## A Neumann-elvek

A ma használt számítógépek túlnyomó többsége a **Neumann János** által 1945-ben megfogalmazott elveken alapul (**Neumann-architektúra**). Ennek fő elemei:

1. **Kettes (bináris) számrendszer** használata az adatok tárolására és feldolgozására.
2. **A program és az adat is a memóriában tárolódik**, azonos módon — ezt hívjuk **tárolt program elvének**.
3. **Szekvenciális (soros) utasítás-végrehajtás**: az utasítások alapesetben egymás után, sorban hajtódnak végre.
4. **Címezhető memória**: minden memóriarekesz egyedi címmel érhető el.
5. **Kizárólagos központi vezérlőegység**: a rendszer működését egy központi egység (CPU) irányítja.
6. **Univerzális, kétállapotú (0/1) automataként** működik.

## A hardverarchitektúra fő egységei

- **Központi feldolgozó egység (CPU, processzor)**: az "agy", amely az utasításokat végrehajtja. Két fő része:
  - **Vezérlőegység (CU)**: irányítja az utasítások végrehajtásának sorrendjét.
  - **Aritmetikai-logikai egység (ALU)**: elvégzi a matematikai és logikai műveleteket.
- **Memória (RAM)**: gyors, de felejtő (volatile) tár, ahol a futó programok és az aktuálisan használt adatok találhatók. Kikapcsoláskor tartalma elvész.
- **Háttértár**: tartós (nem felejtő) adattárolásra szolgál — merevlemez (HDD), SSD, pendrive. Lassabb, mint a RAM, de az adat megmarad áramtalanítás után is.
- **Ki- és bemeneti (I/O) eszközök**: billentyűzet, egér, monitor, nyomtató — ezek biztosítják a kapcsolatot a felhasználóval.
- **Alaplap (motherboard)**: az összes hardverelemet összekötő áramköri lap, buszrendszerekkel (adatbusz, címbusz, vezérlőbusz).

## Az utasításvégrehajtási ciklus

A CPU minden egyes utasítást egy ismétlődő ciklus szerint hajt végre:

1. **Fetch (lekérés)**: az utasítás betöltése a memóriából.
2. **Decode (dekódolás)**: az utasítás értelmezése.
3. **Execute (végrehajtás)**: az utasítás tényleges végrehajtása.

Ezt a ciklust a CPU **órajel (clock)** vezérli — minél nagyobb az órajelfrekvencia (GHz-ben mérve), annál több ciklust tud végrehajtani másodpercenként.

## Tárolási hierarchia

A számítógépben a tárolóeszközök egy hierarchiát alkotnak a sebesség és a kapacitás szerint:

**regiszterek (legyorsabb, legkisebb) → cache memória → RAM → SSD/HDD (leglassabb, legnagyobb)**

Minél közelebb van egy tár a CPU-hoz, annál gyorsabb, de annál kisebb kapacitású és drágább.

## Neumann-elvek korlátai

A tárolt program elve miatt a program és az adat ugyanazon a buszon "verseng" a memóriához való hozzáférésért — ezt hívják **Neumann-szűk keresztmetszetnek (von Neumann bottleneck)**. Ez az egyik oka annak, hogy a modern processzorok több szintű cache-t és párhuzamos (több magos) feldolgozást alkalmaznak a teljesítmény növelésére.

## Miért fontos ez?

A Neumann-elvek ismerete nélkül nem érthető meg, hogyan "gondolkodik" valójában egy számítógép: minden szoftver, program végső soron ezen az egyszerű, de zseniális architekturális alapon fut.
`,
    key_concepts: [
      "Neumann-elvek",
      "tárolt program elve",
      "CPU (vezérlőegység és ALU)",
      "RAM és háttértár",
      "utasításvégrehajtási ciklus",
      "tárolási hierarchia",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik a Neumann-elvek egyik alapvető jellemzője?",
        options: [
          "A program és az adat is ugyanabban a memóriában tárolódik",
          "A program mindig ROM-ban, az adat mindig RAM-ban tárolódik",
          "Az utasítások kizárólag párhuzamosan hajtódnak végre",
          "A számítógép tízes számrendszerben dolgozik",
        ],
        correct_answer: "A program és az adat is ugyanabban a memóriában tárolódik",
        explanation: "A Neumann-elvek egyik alappillére a tárolt program elve: a program és az adat azonos módon, ugyanabban a memóriában tárolódik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik CPU-egység végzi a matematikai és logikai műveleteket?",
        options: ["ALU (aritmetikai-logikai egység)", "CU (vezérlőegység)", "RAM", "cache memória"],
        correct_answer: "ALU (aritmetikai-logikai egység)",
        explanation: "Az aritmetikai-logikai egység (ALU) végzi el a matematikai számításokat és a logikai műveleteket a CPU-n belül.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő különbség a RAM és a háttértár között?",
        options: [
          "A RAM felejtő (kikapcsoláskor törlődik), a háttértár tartósan megőrzi az adatot",
          "A RAM lassabb, mint a háttértár",
          "A háttértár csak olvasható, nem írható",
          "A RAM és a háttértár funkciója teljesen azonos",
        ],
        correct_answer: "A RAM felejtő (kikapcsoláskor törlődik), a háttértár tartósan megőrzi az adatot",
        explanation: "A RAM felejtő (volatile) tár, tartalma kikapcsoláskor elvész, míg a háttértár (HDD/SSD) tartósan megőrzi az adatokat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a helyes sorrendje az utasításvégrehajtási ciklusnak?",
        options: [
          "lekérés (fetch) - dekódolás (decode) - végrehajtás (execute)",
          "végrehajtás - lekérés - dekódolás",
          "dekódolás - végrehajtás - lekérés",
          "lekérés - végrehajtás - dekódolás",
        ],
        correct_answer: "lekérés (fetch) - dekódolás (decode) - végrehajtás (execute)",
        explanation: "A CPU minden utasítást ebben a sorrendben dolgoz fel: először lekéri a memóriából, majd dekódolja, végül végrehajtja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk 'Neumann-szűk keresztmetszetnek' (von Neumann bottleneck)?",
        options: [
          "Azt a jelenséget, hogy a program és az adat ugyanazon a buszon versenyez a memóriaeléréséért",
          "Azt, amikor a monitor felbontása túl alacsony",
          "A háttértár tömörítési arányát",
          "Azt, amikor két billentyűzetet csatlakoztatunk egy géphez",
        ],
        correct_answer: "Azt a jelenséget, hogy a program és az adat ugyanazon a buszon versenyez a memóriaeléréséért",
        explanation: "A von Neumann bottleneck arra utal, hogy mivel a program és az adat ugyanazon a buszon keresztül éri el a memóriát, ez korlátozza az adatátvitel sebességét.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "szamrendszerek-es-kodolas",
    title: "Számrendszerek és kódolás (bináris, hexadecimális átváltás, karakterkódolás)",
    level: "mindketto",
    theme: "Az informatika alapjai",
    order_index: 6,
    summary_markdown:
      "A számítógépek belső világa kettes (bináris) és tizenhatos (hexadecimális) számrendszerben zajlik. Ez a tétel az átváltási módszereket és a karakterkódolás (ASCII, Unicode) alapjait mutatja be.",
    content_markdown: `
## Számrendszerek a számítógépben

A hétköznapokban a **tízes (decimális)** számrendszert használjuk, de a számítógép belsőleg mindent **kettes (bináris)** számrendszerben, két jellel (0 és 1, azaz **bit**) tárol és dolgoz fel — ez felel meg a legjobban az elektronikai áramkörök két állapotának (áram van/nincs).

A **8 bit = 1 bájt (byte)**. A nagyobb mértékegységek: 1 KB = 1024 bájt, 1 MB = 1024 KB, 1 GB = 1024 MB (a bináris prefixumok szerint).

A hosszú bináris számok kényelmetlenek leírni, ezért gyakran használjuk a **hexadecimális (16-os alapú)** számrendszert is (jelei: 0-9, A-F), mert 4 bit pontosan 1 hexadecimális jegynek felel meg.

## Átváltás decimálisból binárisba

Módszer: ismételt osztás 2-vel, a maradékokat visszafelé olvasva kapjuk a bináris alakot.

Példa: 25 (decimális) átváltása binárisba:
- 25 : 2 = 12, maradék 1
- 12 : 2 = 6, maradék 0
- 6 : 2 = 3, maradék 0
- 3 : 2 = 1, maradék 1
- 1 : 2 = 0, maradék 1

A maradékokat alulról felfelé olvasva: **11001** — tehát 25(10) = 11001(2).

## Átváltás binárisból decimálisba

Minden bináris jegyhez hozzárendeljük a helyiértékét (2 hatványai jobbról balra: 1, 2, 4, 8, 16...), és összeadjuk azoknak a helyiértéknek az értékét, ahol 1-es szerepel.

Példa: 1011(2) = 1×8 + 0×4 + 1×2 + 1×1 = 8+0+2+1 = **11**(10)

## Átváltás binárisból hexadecimálisba

A bináris számot jobbról indulva 4-es csoportokra osztjuk, és minden csoportot külön hexadecimális jeggyé alakítunk.

Példa: 10110110(2) → csoportosítva: 1011 0110 → 1011 = B, 0110 = 6 → tehát **B6**(16)

## Karakterkódolás: ASCII és Unicode

A szöveges karaktereket is számokkal kell reprezentálni a számítógépben:

- Az **ASCII (American Standard Code for Information Interchange)** kódrendszer 7 biten, 128 karaktert tud kódolni (angol betűk, számjegyek, alapvető írásjelek). Például az 'A' betű ASCII kódja 65, a kisbetűs 'a' kódja 97.
- Az ASCII nem elég a magyar ékezetes betűk (á, é, í, ö, ő, ü, ű) vagy más nyelvek (kínai, arab) karaktereinek kódolására, ezért jött létre a **Unicode** szabvány, amely gyakorlatilag a világ összes írásrendszerének karaktereit képes kódolni, akár több százezer karaktert is.
- A Unicode leggyakoribb tárolási formátuma a **UTF-8**, amely változó hosszúságú (1-4 bájtos) kódolást használ: az angol ábécé karaktereit 1 bájton, míg a ritkább karaktereket több bájton tárolja — ezáltal visszafelé kompatibilis az ASCII-vel.

## Miért fontos mindez?

A számrendszerek és a kódolás ismerete nélkülözhetetlen a hálózati címzés (IP-címek, MAC-címek gyakran hexadecimálisan jelennek meg), a színkódok (webes CSS színek, pl. #FF5733), a fájlméretek és a szöveges adatok belső tárolásának megértéséhez.
`,
    key_concepts: [
      "bináris (kettes) számrendszer",
      "hexadecimális számrendszer",
      "bit és bájt",
      "ASCII kódolás",
      "Unicode és UTF-8",
      "számrendszer-átváltás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hány bit alkot egy bájtot?",
        options: ["8 bit", "4 bit", "16 bit", "10 bit"],
        correct_answer: "8 bit",
        explanation: "1 bájt (byte) definíció szerint 8 bitből áll.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a decimális 25 helyes bináris alakja?",
        options: ["11001", "11010", "10101", "11101"],
        correct_answer: "11001",
        explanation: "25 = 16+8+1 = 1×16 + 1×8 + 0×4 + 0×2 + 1×1, azaz binárisan 11001.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi a bináris 1011 szám decimális értéke?",
        options: ["11", "13", "9", "15"],
        correct_answer: "11",
        explanation: "1011(2) = 1×8 + 0×4 + 1×2 + 1×1 = 8+0+2+1 = 11.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért jött létre a Unicode szabvány az ASCII mellett?",
        options: [
          "Mert az ASCII 128 karaktere nem elég a világ összes nyelvének (pl. ékezetes betűk) kódolásához",
          "Mert az ASCII csak számokat tud tárolni",
          "Mert az ASCII kizárólag képeket tud kódolni",
          "Mert az ASCII gyorsabb, mint a Unicode, ezért le kellett cserélni",
        ],
        correct_answer: "Mert az ASCII 128 karaktere nem elég a világ összes nyelvének (pl. ékezetes betűk) kódolásához",
        explanation: "Az ASCII csak 128 karaktert (alapvetően angol betűket) tud kódolni, a Unicode viszont a világ szinte összes írásrendszerének karakterét képes reprezentálni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a bináris 10110110 szám hexadecimális alakja?",
        options: ["B6", "6B", "A6", "B5"],
        correct_answer: "B6",
        explanation: "A számot 4-es csoportokra bontva: 1011 = B, 0110 = 6, tehát a hexadecimális alak B6.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "fajlrendszerek-es-jogosultsagok",
    title: "Fájlrendszerek, mappaszerkezet, jogosultságok",
    level: "mindketto",
    theme: "Operációs rendszer és állománykezelés",
    order_index: 7,
    summary_markdown:
      "Az operációs rendszer az állományokat fájlrendszerekben, hierarchikus mappaszerkezetben tárolja, és hozzáférési jogosultságokkal szabályozza, ki mit tehet velük.",
    content_markdown: `
## Mi a fájlrendszer?

A **fájlrendszer** az a módszer, ahogyan az operációs rendszer a háttértáron (HDD, SSD) tárolt adatokat szervezi, nevezi és eléri. Gyakori fájlrendszerek: **NTFS** és **exFAT** (Windows), **APFS** (macOS), **ext4** (Linux), **FAT32** (univerzális, kompatibilitási céllal, pl. pendrive-oknál).

A fájlrendszer feladata:
- nyilvántartani, mely lemezterületen mely fájl adatai találhatók,
- kezelni a fájlok metaadatait (méret, létrehozás/módosítás dátuma, tulajdonos, jogosultságok),
- biztosítani a hierarchikus mappaszerkezetet.

## Hierarchikus mappaszerkezet

A fájlok **mappákba (könyvtárakba)** szervezve, fastruktúrában helyezkednek el. A legfelső szintű mappa a **gyökérkönyvtár** (Windows-on pl. `C:\`, Linuxon `/`). Egy fájl helyét az elérési út (**path**) írja le:

- **Abszolút elérési út**: a gyökértől indulva írja le a teljes helyet, pl. `C:\Users\Diak\Dokumentumok\dolgozat.docx`.
- **Relatív elérési út**: az aktuális mappához viszonyítva ad meg egy helyet, pl. `..\Kepek\foto.jpg` (a szülő mappa Kepek almappája).

A **fájlnév kiterjesztése** (a pont utáni rész, pl. `.docx`, `.jpg`, `.pdf`) jelzi az operációs rendszernek, milyen típusú a fájl, és melyik programmal nyitható meg alapértelmezetten.

## Hozzáférési jogosultságok

A többfelhasználós rendszerek (és a modern egyfelhasználós rendszerek is) **jogosultságokkal** szabályozzák, ki mit tehet egy fájllal vagy mappával. A tipikus jogosultsági szintek:

- **olvasás (read, r)**: a fájl tartalma megtekinthető.
- **írás (write, w)**: a fájl módosítható, törölhető.
- **végrehajtás (execute, x)**: a fájl programként futtatható.

Linux-alapú rendszerekben ezeket a jogosultságokat külön lehet beállítani a **tulajdonos**, a **csoport** és **mindenki más** számára (pl. `rwxr-xr--`). Windows-on a **NTFS jogosultságok** hasonló, de részletesebb rendszert alkotnak (teljes hozzáférés, módosítás, olvasás, írás stb.), felhasználónként vagy csoportonként beállítva.

## Miért fontosak a jogosultságok?

- Megakadályozzák, hogy egy vendégfelhasználó hozzáférjen mások személyes fájljaihoz.
- Egy iskolai hálózaton a diákok nem tudják módosítani a rendszerfájlokat vagy más diákok anyagait.
- Egy megosztott céges meghajtón csak az arra jogosultak láthatják/szerkeszthetik a bizalmas dokumentumokat.
- Védelmet nyújtanak a kártevők (malware) ellen is: ha egy program nem rendelkezik írási joggal egy rendszermappához, nem tudja megfertőzni azt.

## Gyakorlati tanácsok az állománykezeléshez

1. Használj **beszédes, egyértelmű fájl- és mappaneveket** (ne "uj_dokumentum2_vegleges_FINAL.docx").
2. Alakíts ki **logikus mappaszerkezetet** (pl. tantárgyanként vagy projektenként külön mappa).
3. Rendszeresen **rendszerezd** és archiváld a régi, már nem aktív fájlokat.
4. Kerüld az érzékeny (jelszavas, személyes) fájlok megosztott mappában, jogosultság-korlátozás nélküli tárolását.

## Összefoglalás

A fájlrendszerek és jogosultságok megértése alapvető ahhoz, hogy hatékonyan és biztonságosan tudjunk dolgozni bármilyen operációs rendszeren, legyen szó otthoni gépről vagy iskolai/céges hálózatról.
`,
    key_concepts: [
      "fájlrendszer (NTFS, ext4, FAT32)",
      "hierarchikus mappaszerkezet",
      "abszolút és relatív elérési út",
      "fájlkiterjesztés",
      "hozzáférési jogosultságok (olvasás, írás, végrehajtás)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az abszolút és a relatív elérési út között?",
        options: [
          "Az abszolút a gyökértől indul, a relatív az aktuális mappához viszonyít",
          "Az abszolút mindig rövidebb, mint a relatív",
          "A relatív elérési út sosem tartalmazhat mappanevet",
          "A kettő között nincs érdemi különbség",
        ],
        correct_answer: "Az abszolút a gyökértől indul, a relatív az aktuális mappához viszonyít",
        explanation: "Az abszolút elérési út a gyökérkönyvtártól kezdve írja le a teljes útvonalat, míg a relatív az aktuális (jelenlegi) mappához képest ad meg egy helyet.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire utal jellemzően egy fájl kiterjesztése (pl. .docx, .jpg)?",
        options: [
          "A fájl típusára és arra, melyik programmal nyitható meg alapértelmezetten",
          "A fájl tulajdonosának nevére",
          "A fájl létrehozásának pontos időpontjára",
          "A merevlemez szabad kapacitására",
        ],
        correct_answer: "A fájl típusára és arra, melyik programmal nyitható meg alapértelmezetten",
        explanation: "A fájlkiterjesztés jelzi az operációs rendszernek a fájl típusát, ez alapján dönti el, melyik alkalmazással nyissa meg alapértelmezésben.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik NEM tartozik a jellemző hozzáférési jogosultsági szintek közé?",
        options: ["tömörítés", "olvasás", "írás", "végrehajtás"],
        correct_answer: "tömörítés",
        explanation: "A tipikus hozzáférési jogosultsági szintek az olvasás, írás és végrehajtás; a tömörítés nem jogosultsági szint, hanem külön művelet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontosak a hozzáférési jogosultságok egy iskolai hálózaton?",
        options: [
          "Megakadályozzák, hogy a diákok hozzáférjenek vagy módosítsák a rendszerfájlokat és mások adatait",
          "Kizárólag a hálózat sebességét növelik",
          "Csökkentik a merevlemez fájlméretét",
          "Automatikusan lefordítják a fájlneveket más nyelvre",
        ],
        correct_answer: "Megakadályozzák, hogy a diákok hozzáférjenek vagy módosítsák a rendszerfájlokat és mások adatait",
        explanation: "A jogosultságok elsődleges célja a biztonság: megakadályozzák az illetéktelen hozzáférést és módosítást a rendszerben.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy Linux-rendszerben a 'rwxr-xr--' jogosultság-string mire utal?",
        options: [
          "A tulajdonos, a csoport és a mindenki más számára külön-külön beállított olvasási, írási, végrehajtási jogokra",
          "Arra, hogy a fájl titkosítva van",
          "A fájl pontos méretére bájtban",
          "A fájlrendszer típusára (NTFS vagy ext4)",
        ],
        correct_answer: "A tulajdonos, a csoport és a mindenki más számára külön-külön beállított olvasási, írási, végrehajtási jogokra",
        explanation: "A Linux jogosultsági string három részre bomlik (tulajdonos, csoport, mindenki más), mindegyikhez külön r (olvasás), w (írás), x (végrehajtás) jog tartozhat.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "tomorites-es-biztonsagi-mentes",
    title: "Tömörítés és biztonsági mentés",
    level: "mindketto",
    theme: "Operációs rendszer és állománykezelés",
    order_index: 8,
    summary_markdown:
      "Az adattömörítés és a biztonsági mentés (backup) az adatkezelés két alapvető, egymást kiegészítő területe: az egyik helyet takarít meg, a másik az adatvesztés ellen véd.",
    content_markdown: `
## Az adattömörítés célja és típusai

A **tömörítés (compression)** célja, hogy egy fájl mérete kisebb legyen, kevesebb tárhelyet foglaljon, és/vagy gyorsabban továbbítható legyen hálózaton. Két fő típusa:

1. **Veszteségmentes (lossless) tömörítés**: a kicsomagolás után az eredeti adat **pontosan, bit szinten visszaáll** — semmilyen információ nem vész el. Ilyen a ZIP, RAR, 7z formátum, valamint a PNG képformátum. Szöveges dokumentumoknál, programfájloknál kizárólag ez alkalmazható, mert itt egyetlen hibás bit is használhatatlanná tehetné az állományt.
2. **Veszteséges (lossy) tömörítés**: a kisebb méret érdekében az emberi érzékelés számára kevésbé fontos részleteket **véglegesen elhagyja** — a kicsomagolt fájl már nem lesz azonos az eredetivel. Ilyen a JPEG (kép), az MP3 (hang) és sok videóformátum (pl. MP4/H.264).

## Hogyan működik a tömörítés? (alapötlet)

A veszteségmentes tömörítési algoritmusok (pl. a ZIP alapját képező **Huffman-kódolás**) az ismétlődő mintázatokat rövidebb kóddal helyettesítik: a gyakran előforduló karaktereket/mintázatokat rövidebb, a ritkábban előfordulókat hosszabb bitsorozattal kódolják, így összességében csökken a szükséges bitek száma.

## Tömörítési arány és felhasználási területek

A tömörítési hatékonyság függ az adat jellegétől: egy már tömörített fájlt (pl. egy JPEG képet) újra tömörítve alig érünk el további méretcsökkenést, míg egy szöveges dokumentum jelentősen tömöríthető az ismétlődő karakterek/szóminták miatt.

Gyakorlati alkalmazás: nagy méretű fájlok e-mailben küldése, archiválás, letölthető szoftvercsomagok terjesztése, weboldalak gyorsabb betöltése (tömörített képek, kód).

## A biztonsági mentés (backup) fontossága

A **biztonsági mentés** az adatok másolatának elkészítése egy másik, független adathordozón vagy helyen, hogy adatvesztés (hardverhiba, vírustámadás, véletlen törlés, lopás, tűzkár) esetén az adatok visszaállíthatók legyenek.

## Mentési stratégiák

1. **Teljes mentés (full backup)**: minden adat mentése — legbiztosabb, de a legtöbb helyet és időt igényli.
2. **Növekményes mentés (incremental backup)**: csak az előző mentés óta módosult adatokat menti — gyors, keveset foglal, de a visszaállítás több lépésből áll.
3. **Differenciális mentés (differential backup)**: a legutóbbi **teljes** mentés óta módosult összes adatot menti — a növekményesnél gyorsabb visszaállítást, de nagyobb helyigényt jelent.

## A "3-2-1" szabály

Az elterjedt jó gyakorlat szerint tartsunk fenn:

- **3** másolatot az adatokról (az eredeti + 2 biztonsági mentés),
- **2** különböző típusú adathordozón (pl. külső HDD és felhő),
- **1** másolatot fizikailag más helyen (pl. felhőben vagy másik épületben), hogy egy helyi katasztrófa (tűz, lopás) ne semmisítse meg az összes példányt.

## Felhőalapú mentés

Ma már elterjedt a **felhőalapú biztonsági mentés** (pl. Google Drive, OneDrive, Dropbox), amely automatikusan, az interneten keresztül szinkronizálja az adatokat egy távoli szerverre — ez megvéd a helyi hardverhibák ellen, de fontos, hogy a fiók jelszava és hitelesítése is erős legyen.

## Összefoglalás

A tömörítés helytakarékossági, a biztonsági mentés adatvédelmi célt szolgál — a kettő gyakran együtt is jelentkezik (pl. egy tömörített ZIP-archívum mentése külső meghajtóra).
`,
    key_concepts: [
      "veszteségmentes (lossless) tömörítés",
      "veszteséges (lossy) tömörítés",
      "biztonsági mentés (backup)",
      "teljes, növekményes, differenciális mentés",
      "3-2-1 szabály",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a veszteségmentes (lossless) tömörítést?",
        options: [
          "Kicsomagolás után az eredeti adat pontosan, bit szinten visszaáll",
          "A kicsomagolt fájl mindig kisebb lesz, mint az eredeti",
          "Csak videófájlokra alkalmazható",
          "Az adat egy része véglegesen elvész",
        ],
        correct_answer: "Kicsomagolás után az eredeti adat pontosan, bit szinten visszaáll",
        explanation: "A veszteségmentes tömörítés lényege, hogy a kicsomagolás után az adat pontosan megegyezik az eredetivel, semmi nem vész el.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik formátum alkalmaz jellemzően veszteséges (lossy) tömörítést?",
        options: ["JPEG", "ZIP", "PNG", "TXT"],
        correct_answer: "JPEG",
        explanation: "A JPEG képformátum veszteséges tömörítést alkalmaz, míg a ZIP és a PNG veszteségmentes eljárást használ.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a növekményes (incremental) biztonsági mentést?",
        options: [
          "Csak az előző mentés óta módosult adatokat menti",
          "Minden alkalommal az összes adatot újra lementi",
          "Kizárólag a képfájlokat menti",
          "Nem igényel eredeti (teljes) mentést sem",
        ],
        correct_answer: "Csak az előző mentés óta módosult adatokat menti",
        explanation: "A növekményes mentés mindig csak a legutóbbi (bármilyen típusú) mentés óta bekövetkezett változásokat menti, ezért gyors és helytakarékos.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit ír elő a '3-2-1' biztonsági mentési szabály?",
        options: [
          "3 másolat, 2 különböző adathordozón, 1 másolat más fizikai helyen",
          "3 percenkénti automatikus mentés",
          "2 jelszó és 1 felhasználónév minden fiókhoz",
          "1 mentés naponta, 2 hetente, 3 havonta",
        ],
        correct_answer: "3 másolat, 2 különböző adathordozón, 1 másolat más fizikai helyen",
        explanation: "A 3-2-1 szabály szerint 3 másolatot kell tartani az adatokról, 2 különböző típusú adathordozón, ebből legalább 1-et más fizikai helyszínen.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miben tér el a differenciális mentés a növekményestől?",
        options: [
          "A differenciális mindig a legutóbbi teljes mentés óta módosult összes adatot menti, nem csak az előző mentés óta változottat",
          "A differenciális mentés soha nem igényel teljes mentést",
          "A növekményes mentés mindig nagyobb helyet foglal, mint a differenciális",
          "A két fogalom szinonimája egymásnak, nincs köztük különbség",
        ],
        correct_answer: "A differenciális mindig a legutóbbi teljes mentés óta módosult összes adatot menti, nem csak az előző mentés óta változottat",
        explanation: "A differenciális mentés mindig a legutóbbi teljes mentéshez képest menti a változásokat, míg a növekményes csak a legutóbbi (bármilyen típusú) mentéshez képesti változást menti.",
        difficulty: 3,
      },
    ],
  },
];
