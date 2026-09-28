import type { TopicSeed } from "./angol";

export const biologiaEmberiSzervrendszerekTopics: TopicSeed[] = [
  {
    slug: "az-emberi-mozgasrendszer-csontok-izmok",
    title: "Az emberi mozgásrendszer (csontok, izmok)",
    level: "mindketto",
    theme: "Az ember szervezete",
    order_index: 15,
    summary_markdown:
      "A mozgásrendszert a passzív (csontok, ízületek) és az aktív (izmok) elemek együttműködése alkotja: a csontok tartják és védik a testet, az izmok pedig — az idegrendszer irányítása alatt — mozgatják azt.",
    content_markdown: `
## A csontrendszer felépítése és funkciói

A csontrendszer (kb. 206 csontból áll a felnőtt emberben) funkciói: **tartás** (a test formájának megadása), **védelem** (pl. a koponya védi az agyat, a mellkas a szívet és a tüdőt), **mozgás** (az izmok eredési és tapadási helyeként), **vérképzés** (a csontvelőben) és **ásványianyag-raktározás** (kalcium, foszfor).

Csonttípusok alak szerint: **hosszúcsontok** (pl. combcsont — mozgatásra, emelőként működnek), **lapos csontok** (pl. lapocka, koponyacsontok — védelem, nagy felület izomeredéshez), **rövid csontok** (pl. csigolyák, kéztőcsontok) és **szabálytalan csontok**.

A csont szövetileg **csontszövetből** épül fel, amelyben a csontsejtek (osteocyták) kollagénrostokból és ásványi sókból (elsősorban kalcium-foszfátból) álló csontállományt választanak ki — ez adja a csont egyedi kombinációját: rugalmasság (kollagén) és merevség/keménység (ásványi sók).

## Ízületek

A csontok találkozási pontjait **ízületeknek** nevezzük. A **valódi (szabad) ízületekben** a két csontvég ízületi felszínét **ízületi porc** fedi, közöttük **ízületi rés** és azt kitöltő **ízületi folyadék (synovia)** csökkenti a csontok közötti súrlódást; az ízületet **ízületi szalagok** stabilizálják. Az ízület típusa (pl. gömbízület a csípőben — sok irányú mozgás, sarokízület a térdben — egy síkú mozgás) meghatározza a mozgás lehetséges irányát és terjedelmét.

## Az izomrendszer típusai

Az emberi testben háromféle izomszövet található:

| Izomtípus | Jellemző | Előfordulás |
|---|---|---|
| Harántcsíkolt (vázizom) | akaratlagosan irányítható, gyors, gyorsan fárad | csontokhoz kapcsolódó izmok |
| Szívizom | akaratlan, ritmikusan önműködő, nem fárad ki | csak a szívben |
| Simaizom | akaratlan, lassú, tartós összehúzódásra képes | belső szervek fala (bélcsatorna, erek) |

## A vázizom felépítése és működése

A vázizom **inakkal** kapcsolódik a csontokhoz: az **eredés** a mozgás során rögzített, a **tapadás** a mozgatott pont. Az izom összehúzódásáért az izomrostokban lévő **aktin és miozin** filamentumok felelősek: idegi inger hatására a miozin fejek az aktinhoz kapcsolódnak, és egy "csúszó filamentum" mechanizmus révén az izomrost megrövidül — ehhez **ATP-energia** szükséges. Az izmok a legtöbb esetben **antagonista párokban** működnek: amíg az egyik izom összehúzódik (pl. bicepsz — a kar hajlítása), a másik (pl. tricepsz — a kar nyújtása) elernyed, majd fordítva.

## Csontritkulás és izomsorvadás

A csontszövet folyamatosan átépül (csontlebontás és csontépítés egyensúlya); ha ez az egyensúly a lebontás felé tolódik el (pl. idősebb korban, kalciumhiány, hormonális változás — különösen nőknél a menopauza után az ösztrogénszint csökkenése miatt), **csontritkulás (osteoporosis)** léphet fel, amely növeli a csonttörés kockázatát. Rendszeres mozgás, megfelelő kalcium- és D-vitamin-bevitel csökkenti ennek kockázatát.
`,
    key_concepts: [
      "csont felépítése (kollagén, ásványi sók)",
      "ízület és ízületi folyadék",
      "harántcsíkolt, szívizom, simaizom",
      "aktin-miozin csúszó filamentum mechanizmus",
      "antagonista izompárok",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért van a csontnak egyszerre rugalmassága és keménysége?",
        options: [
          "A kollagénrostok rugalmasságot, az ásványi sók (kalcium-foszfát) keménységet adnak neki",
          "Kizárólag a kollagén adja a keménységet",
          "A csontban nincs semmilyen szervesanyag, csak ásványi só",
          "A csont keménysége az izmoktól függ",
        ],
        correct_answer: "A kollagénrostok rugalmasságot, az ásványi sók (kalcium-foszfát) keménységet adnak neki",
        explanation:
          "A csontszövet szerves (kollagén) és szervetlen (ásványi só) komponensének kombinációja adja a csont egyedi, rugalmas és mégis kemény szerkezetét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik izomtípus akaratlan, önműködően ritmikusan összehúzódó, és nem fárad ki?",
        options: ["szívizom", "harántcsíkolt (váz)izom", "simaizom", "mindhárom egyformán fárad"],
        correct_answer: "szívizom",
        explanation:
          "A szívizom akaratlanul, önműködően, ritmikusan húzódik össze egész életen át, kifáradás nélkül — ez különbözteti meg a vázizomtól és a simaizomtól is.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az aktin és miozin filamentumok szerepe az izom-összehúzódásban?",
        options: [
          "A miozin fejek az aktinhoz kapcsolódva, ATP energiáját felhasználva egymáshoz csúsznak, ez rövidíti meg az izomrostot",
          "Csak a csontok mozgatásához kapcsolódó inakban találhatók",
          "Kizárólag a csontszövet felépítésében vesznek részt",
          "Az aktin és miozin az idegsejtek jelátviteléért felelős",
        ],
        correct_answer: "A miozin fejek az aktinhoz kapcsolódva, ATP energiáját felhasználva egymáshoz csúsznak, ez rövidíti meg az izomrostot",
        explanation:
          "A csúszó filamentum mechanizmus szerint a miozin fejek ATP-energia felhasználásával az aktinfilamentumokon 'elhúzzák magukat', ez okozza az izomrost összehúzódását.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért működnek az izmok jellemzően antagonista párokban (pl. bicepsz-tricepsz)?",
        options: [
          "Mert az izom csak összehúzódásra képes, ezért egy ellentétes irányú mozgáshoz egy másik izom ellentétes összehúzódása szükséges",
          "Mert egy izom sosem tud önállóan összehúzódni",
          "Mert az izmok mindig egyszerre húzódnak össze",
          "Mert a csontok maguktól mozognak, az izmoknak csak díszítő szerepük van",
        ],
        correct_answer: "Mert az izom csak összehúzódásra képes, ezért egy ellentétes irányú mozgáshoz egy másik izom ellentétes összehúzódása szükséges",
        explanation:
          "Az izom aktívan csak összehúzódni tud, nyújtásra nem — ezért a kar visszahajlításához egy másik izom (az ellentétes hatású, azaz antagonista izom) összehúzódására van szükség, míg az előző elernyed.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nő a csontritkulás (osteoporosis) kockázata idősebb nőknél a menopauza után?",
        options: [
          "Az ösztrogénszint csökkenése miatt a csontlebontás és csontépítés egyensúlya a lebontás irányába tolódik el",
          "Mert a csontokban több lesz a kollagén",
          "Mert a menopauza növeli a testmozgás mennyiségét",
          "Mert az izmok teljesen leállnak",
        ],
        correct_answer: "Az ösztrogénszint csökkenése miatt a csontlebontás és csontépítés egyensúlya a lebontás irányába tolódik el",
        explanation:
          "Az ösztrogén hormon szabályozó hatással van a csontanyagcserére; szintjének csökkenésével a csontlebontó folyamatok felerősödhetnek a csontépítéshez képest, ez okozza a csontritkulást.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "az-emberi-legzorendszer",
    title: "Az emberi légzőrendszer",
    level: "mindketto",
    theme: "Az ember szervezete",
    order_index: 16,
    summary_markdown:
      "A légzőrendszer feladata az oxigén felvétele és a szén-dioxid leadása; a levegő a légutakon át a tüdő alveolusaiba jut, ahol diffúzióval zajlik a gázcsere a vérrel.",
    content_markdown: `
## A légutak felépítése

A levegő útja: **orrüreg/szájüreg → garat → gége → légcső (trachea) → hörgők (bronchusok) → hörgőcskék (bronchiolusok) → légzőhólyagocskák (alveolusok)**. Az orrüreg megszűri, felmelegíti és megnedvesíti a beáramló levegőt. A légcső és a nagyobb hörgők falában **porcgyűrűk** biztosítják, hogy a légutak ne essenek össze, felszínüket **csillós hámsejtek** és nyáktermelő sejtek bélelik, amelyek a beszívott port, kórokozókat kifelé (a garat felé) szállítják — ez a légutak öntisztuló mechanizmusa.

## A tüdő és az alveolusok

A tüdőben a hörgőcskék apró, szőlőfürtszerű **légzőhólyagocskákban (alveolusokban)** végződnek — egy felnőtt tüdejében kb. 300-500 millió alveolus található, ez rendkívül nagy (kb. 70-100 m²) gázcserefelületet biztosít. Az alveolusok fala egyetlen sejtréteg vastagságú, és sűrű hajszálér-hálózat (kapilláris) veszi körül — ez a minimális diffúziós távolság és a nagy felület teszi lehetővé a hatékony gázcserét.

## A gázcsere mechanizmusa

A gázcsere mindkét helyen (a tüdőben és a szövetekben) egyszerű **diffúzióval** zajlik, a parciális nyomáskülönbségek mentén:

- **Tüdőben**: az alveolusok levegőjében nagyobb az oxigén koncentrációja, mint a hajszálérben áramló, oxigénszegény vérben → az O2 a vérbe diffundál. A vérben nagyobb a CO2 koncentrációja, mint a levegőben → a CO2 az alveolusokba diffundál, majd kilégzéskor a szervezetből eltávozik.
- **Szövetekben**: a sejtek folyamatosan fogyasztják az oxigént (sejtlégzés) és termelik a CO2-t, ezért itt éppen ellentétes irányú a gázcsere: O2 a vérből a szövetekbe, CO2 a szövetekből a vérbe diffundál.

## A légzés mechanikája

A levegő be- és kiáramlását a mellüreg térfogatának változása hozza létre. Belégzéskor a **rekeszizom** összehúzódik és lelapul, a **külső bordaközti izmok** megemelik a mellkast — ez megnöveli a mellüreg térfogatát, csökkenti a tüdőben a nyomást a külső légnyomáshoz képest, így levegő áramlik be. Kilégzéskor ezek az izmok elernyednek (nyugodt kilégzésnél passzív folyamat), a mellüreg térfogata csökken, a tüdőben a nyomás megnő, levegő áramlik ki.

## A légzés szabályozása

A légzés ritmusát az agytörzsben (nyúltvelő) található **légzőközpont** szabályozza, amely elsősorban a vér **szén-dioxid-koncentrációjára** (illetve a belőle képződő szénsav pH-csökkentő hatására) érzékeny — ha a CO2-szint megemelkedik, a légzőközpont gyorsítja és mélyíti a légzést. Ez egy tipikus **negatív visszacsatolási (homeosztatikus)** szabályozó kör.

## Légzési térfogatok és betegségek

A légzőrendszer működésének jellemzésére használt fogalom a **légzési térfogat** (egy nyugodt légvétel során be- és kilélegzett levegő mennyisége) és a **vitálkapacitás** (a maximális be- és kilégzés közötti térfogatkülönbség). Gyakori légzőrendszeri betegségek: **asztma** (a hörgők átmeneti szűkülete, gyakran allergiás eredetű), **krónikus obstruktív légúti betegség (COPD)** és a **tüdőgyulladás** (az alveolusok gyulladása, ami rontja a gázcserét).
`,
    key_concepts: [
      "légutak (légcső, hörgők, alveolusok)",
      "gázcsere diffúzióval",
      "rekeszizom és bordaközti izmok",
      "légzőközpont és CO2-érzékenység",
      "vitálkapacitás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hol zajlik a gázcsere a levegő és a vér között a légzőrendszerben?",
        options: ["az alveolusokban (légzőhólyagocskákban)", "a légcsőben", "az orrüregben", "a gégében"],
        correct_answer: "az alveolusokban (légzőhólyagocskákban)",
        explanation:
          "Az alveolusok vékony fala és a körülöttük futó sűrű hajszálérháló teszi lehetővé a hatékony diffúziós gázcserét az O2 és a CO2 között.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik a rekeszizommal belégzés során?",
        options: ["összehúzódik és lelapul, megnövelve a mellüreg térfogatát", "elernyed és domborúbbá válik", "teljesen leáll", "a hörgőket szűkíti"],
        correct_answer: "összehúzódik és lelapul, megnövelve a mellüreg térfogatát",
        explanation:
          "A rekeszizom összehúzódásával lelapul, ez a bordaközti izmok mozgásával együtt megnöveli a mellüreg térfogatát, csökkenti a tüdőben a nyomást, így levegő áramlik be.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen irányban zajlik az oxigén és a szén-dioxid diffúziója a szövetekben (nem a tüdőben)?",
        options: [
          "Az O2 a vérből a szövetekbe, a CO2 a szövetekből a vérbe diffundál",
          "Az O2 a szövetekből a vérbe, a CO2 a vérből a szövetekbe diffundál",
          "Mindkét gáz azonos irányban mozog",
          "A szövetekben nincs gázcsere",
        ],
        correct_answer: "Az O2 a vérből a szövetekbe, a CO2 a szövetekből a vérbe diffundál",
        explanation:
          "A szövetek folyamatosan fogyasztják az oxigént és termelik a szén-dioxidot a sejtlégzés során, ezért ott az O2 koncentrációja alacsonyabb, a CO2-é magasabb, mint a vérben — a diffúzió ennek megfelelő irányban zajlik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire a legérzékenyebb a nyúltvelői légzőközpont, amely a légzés ritmusát szabályozza?",
        options: ["a vér szén-dioxid-koncentrációjára (illetve a belőle adódó pH-csökkenésre)", "a vér glükózszintjére", "a testhőmérsékletre", "a vér oxigén-koncentrációjára elsődlegesen"],
        correct_answer: "a vér szén-dioxid-koncentrációjára (illetve a belőle adódó pH-csökkenésre)",
        explanation:
          "A légzőközpont elsősorban a vér CO2-szintjének (és az általa okozott pH-változásnak) az emelkedésére reagál gyorsabb, mélyebb légzéssel — ez egy homeosztatikus negatív visszacsatolási mechanizmus.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért teszi lehetővé az alveolusok szerkezete (nagy szám, vékony fal, sűrű hajszálér-hálózat) a hatékony gázcserét?",
        options: [
          "Nagy összfelületet és minimális diffúziós távolságot biztosítanak a levegő és a vér között",
          "Mert az alveolusokban izomsejtek vannak, amelyek aktívan pumpálják a gázokat",
          "Mert az alveolusok falában porc található",
          "Mert az alveolusok nyáktermelő sejteket tartalmaznak, amelyek szállítják az oxigént",
        ],
        correct_answer: "Nagy összfelületet és minimális diffúziós távolságot biztosítanak a levegő és a vér között",
        explanation:
          "A diffúzió sebessége egyenesen arányos a felülettel és fordítottan arányos a diffúziós távolsággal; az alveolusok rendkívül nagy száma és vékony fala ezt optimalizálja.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "az-emberi-keringesi-rendszer-sziv-ver-errendszer",
    title: "Az emberi keringési rendszer (szív, vér, érrendszer)",
    level: "mindketto",
    theme: "Az ember szervezete",
    order_index: 17,
    summary_markdown:
      "A zárt, kettős vérkörös emberi keringési rendszer a szívet mint izompumpát, az artériákból, vénákból és hajszálerekből álló érrendszert, valamint a vért mint szállítóközeget foglalja magába, biztosítva az anyagok szállítását a szervezetben.",
    content_markdown: `
## A szív felépítése és működése

Az emberi szív négyüregű: két **pitvar** (fent) és két **kamra** (lent), a bal és jobb oldalt a sövény választja el, így a vénás (oxigénszegény) és artériás (oxigéndús) vér nem keveredik — ez a **kettős vérkör** (kis és nagy vérkör) alapja. A pitvarok és kamrák között, illetve a kamrák kilépésénél **billentyűk** (pl. mitrális, tricuspidális, majd a félhold alakú aorta- és pulmonális billentyűk) akadályozzák meg a vér visszafolyását, egyirányú áramlást biztosítva.

A szívizom **automatikusan, ritmikusan** húzódik össze, amit a szív saját ingerképző és ingervezető rendszere (**szinusz csomó → pitvar-kamrai csomó → Purkinje-rostok**) irányít — ez teszi lehetővé, hogy a szív a testtől leválasztva is (pl. transzplantáció során rövid ideig) tovább dobogjon.

## A kis és a nagy vérkör

- **Kis (kisvérköri, pulmonális) vérkör**: a jobb kamrából a **verőér (artéria pulmonalis)** oxigénszegény vért szállít a tüdőbe, ahol az gázcsere révén oxigénben feldúsul, majd a **tüdővénákon** át a bal pitvarba tér vissza.
- **Nagy (nagyvérköri, szisztémás) vérkör**: a bal kamrából az **aortán** át oxigéndús vér áramlik a test minden szövetéhez, ahol leadja az oxigént és felveszi a CO2-t, majd vénákon (végül a felső és alsó üres vénán) át a jobb pitvarba tér vissza.

## Az érrendszer típusai

| Értípus | Fal jellemzője | Funkció |
|---|---|---|
| Artéria (verőér) | vastag, rugalmas izomfal | a szívtől elvezeti a vért, magas nyomást bír |
| Kapilláris (hajszálér) | egyetlen sejtréteg vastag fal | anyagcsere (gázok, tápanyagok) helyszíne |
| Véna (gyűjtőér) | vékonyabb fal, billentyűkkel | a szív felé vezeti a vért, alacsony nyomáson |

A vénákban a vér visszaáramlását a **véna-billentyűk** és a körülvevő izmok összehúzódása (izompumpa-hatás) segíti, mivel a vénás oldalon a vérnyomás alacsony.

## A vér összetétele és funkciói

A vér **plazmából** (víz, fehérjék, ionok, tápanyagok, hormonok — a folyékony rész) és alakos elemekből áll:

- **Vörösvértestek (eritrociták)** – hemoglobint tartalmaznak, ez köti meg és szállítja az oxigént (és részben a CO2-t is).
- **Fehérvérsejtek (leukociták)** – az immunrendszer részei, kórokozók elleni védekezésben vesznek részt.
- **Vérlemezkék (thrombociták)** – a véralvadásban játszanak szerepet, sérülés esetén megakadályozzák a véesztést.

## A vérnyomás és szabályozása

A **vérnyomás** a vér által az érfalra kifejtett nyomás, amelyet jellemzően két értékkel (szisztolés/diasztolés, pl. 120/80 mmHg) adunk meg — a szisztolés a szívkamra összehúzódásakor (systole), a diasztolés a kamra elernyedésekor (diastole) mért nyomás. A vérnyomást idegi (szimpatikus/paraszimpatikus idegrendszer) és hormonális (pl. adrenalin) mechanizmusok szabályozzák, alkalmazkodva a szervezet aktuális igényeihez (pl. terhelés során nő a vérnyomás és a pulzus).
`,
    key_concepts: [
      "kettős vérkör (kis és nagy vérkör)",
      "szívbillentyűk és ingerképző rendszer",
      "artéria, kapilláris, véna",
      "vér alakos elemei (vörös-, fehérvérsejt, vérlemezke)",
      "vérnyomás (szisztolés, diasztolés)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik vérkör szállítja az oxigénszegény vért a jobb kamrától a tüdőbe?",
        options: ["kis (pulmonális) vérkör", "nagy (szisztémás) vérkör", "portális vérkör", "nyirokrendszer"],
        correct_answer: "kis (pulmonális) vérkör",
        explanation:
          "A kis vérkör a jobb kamrától az artéria pulmonalison át szállítja az oxigénszegény vért a tüdőbe, ahol az feldúsul oxigénben.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik alakos elem felelős az oxigén szállításáért a vérben?",
        options: ["vörösvértestek (hemoglobin révén)", "fehérvérsejtek", "vérlemezkék", "plazmafehérjék"],
        correct_answer: "vörösvértestek (hemoglobin révén)",
        explanation:
          "A vörösvértestekben található hemoglobin fehérje köti meg reverzibilisen az oxigént, és szállítja a tüdőtől a szövetekig.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért van vékonyabb fala a hajszálereknek (kapillárisoknak) az artériákhoz képest?",
        options: [
          "Mert itt zajlik az anyagcsere (diffúzió), amit a vékony, egysejtrétegű fal tesz hatékonnyá",
          "Mert a kapillárisokban nincs vér",
          "Mert a kapillárisok a legmagasabb nyomású érszakaszok",
          "Mert a kapillárisok csak a szívben találhatók",
        ],
        correct_answer: "Mert itt zajlik az anyagcsere (diffúzió), amit a vékony, egysejtrétegű fal tesz hatékonnyá",
        explanation:
          "A kapillárisok fő funkciója az anyagcsere (gázok, tápanyagok, hulladékanyagok) helyszíneként szolgálni, amit az egyetlen sejtréteg vastagságú fal minimális diffúziós távolsággal segít.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a szisztolés és diasztolés vérnyomásérték?",
        options: [
          "A szisztolés a kamra összehúzódásakor, a diasztolés a kamra elernyedésekor mért nyomás",
          "A szisztolés a pitvarban, a diasztolés a kamrában mért nyomás",
          "A két érték egyszerűen a bal és jobb szívfél nyomása",
          "A szisztolés a vénákban, a diasztolés az artériákban mért nyomás",
        ],
        correct_answer: "A szisztolés a kamra összehúzódásakor, a diasztolés a kamra elernyedésekor mért nyomás",
        explanation:
          "A vérnyomást a szívciklus két fázisában mérjük: systole (összehúzódás, magasabb érték) és diastole (elernyedés, alacsonyabb érték).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért nem keveredik össze az oxigéndús és az oxigénszegény vér az emberi szívben?",
        options: [
          "A szív négy üregre van osztva egy sövénnyel, amely elkülöníti a bal (artériás) és jobb (vénás) oldalt",
          "Mert a vér természetes módon nem keveredik semmilyen szívben",
          "Mert csak egyetlen kamra van a szívben",
          "Mert a billentyűk megakadályozzák a vér áramlását teljesen",
        ],
        correct_answer: "A szív négy üregre van osztva egy sövénnyel, amely elkülöníti a bal (artériás) és jobb (vénás) oldalt",
        explanation:
          "Az emberi (és általában az emlős/madár) szív teljesen elkülönített bal és jobb felére a sövény miatt nem keveredik a vénás és artériás vér, ez teszi hatékonnyá a kettős vérkört.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "az-emberi-emesztorendszer-es-anyagcsere",
    title: "Az emberi emésztőrendszer és anyagcsere",
    level: "mindketto",
    theme: "Az ember szervezete",
    order_index: 18,
    summary_markdown:
      "Az emésztőrendszer a táplálékban lévő nagy molekulákat mechanikai és kémiai (enzimes) úton kisebb, felszívható egységekre bontja le, amelyek aztán a szervezet anyagcseréjében energiaforrásként és építőelemként hasznosulnak.",
    content_markdown: `
## Az emésztőcsatorna szakaszai

Az emésztés a **szájüregben** kezdődik: a fogak mechanikailag aprítják a táplálékot, a nyál enzime (**amiláz**) elkezdi a keményítő bontását, a nyelv segíti a nyelést. A táplálék a **nyelőcsövön** át a **gyomorba** jut, ahol a gyomornedv (sósav és **pepszin** enzim) megkezdi a fehérjék bontását, és erősen savas közege elpusztítja a kórokozók nagy részét. A legtöbb emésztés és a felszívódás a **vékonybélben** történik, ahová a **máj** (epe — zsírok emulgálása) és a **hasnyálmirigy** (számos emésztőenzim: amiláz, lipáz, tripszin) is nedveket juttat. A vékonybél felszínét **bélbolyhok** borítják, amelyek hatalmasra növelik a felszívó felületet. A megemésztetlen, illetve fel nem szívott anyagok a **vastagbélbe** jutnak, ahol a víz nagy része visszaszívódik, és a bélbaktériumok tovább dolgozzák a rostokat.

## Enzimek szerepe az emésztésben

Az emésztőenzimek **hidrolízissel** (víz felvételével történő bontással) darabolják a nagy molekulákat kisebb egységekre:

| Makromolekula | Bontó enzim | Végprodukt |
|---|---|---|
| Keményítő (szénhidrát) | amiláz | glükóz (és kisebb szénhidrátok) |
| Fehérje | pepszin, tripszin | aminosavak |
| Zsír (lipid) | lipáz | zsírsavak és glicerin |

Minden enzim specifikus **szubsztráthoz** kötődik, és jellemző hőmérséklet- és pH-optimuma van (pl. a pepszin a gyomor savas közegében, a bélenzimek a vékonybél enyhén lúgos közegében a leghatékonyabbak).

## Felszívódás és a bélbolyhok

A megemésztett tápanyagok (glükóz, aminosavak, zsírsav-glicerin) a bélbolyhok felszínén, azok hajszálér-hálózatán (illetve a zsírok esetében a nyirokerekbe) keresztül szívódnak fel a vérbe/nyirokba, majd a **kapuvénán** át elsőként a **májba** kerülnek, ahol feldolgozásuk, raktározásuk (pl. glükózból glikogén) történik.

## Az anyagcsere alapjai

Az **anyagcsere (metabolizmus)** két nagy folyamattípusból áll: az **anyag- és energia-felszabadító (katabolikus)** folyamatok (pl. sejtlégzés — nagy molekulák lebontása, energia felszabadítása) és az **anyag- és energiafelhasználó (anabolikus, felépítő)** folyamatok (pl. fehérjeszintézis — kisebb molekulákból nagyobb, komplex molekulák felépítése energiafelhasználással). A szervezet **alapanyagcseréje** az a minimális energiamennyiség, amelyre a nyugalmi állapotú, alapvető életfunkciók fenntartásához szükség van.

## A táplálkozás alapelvei

Az egészséges táplálkozás megfelelő arányban biztosítja a makronutriensek (szénhidrát, fehérje, zsír) és a mikronutriensek (vitaminok, ásványi anyagok) bevitelét. A **vitaminok** kis mennyiségben szükséges, a szervezet által jellemzően nem (vagy csak korlátozottan) szintetizált szerves anyagok, amelyek enzimek működését segítik (pl. C-vitamin, D-vitamin); hiányuk jellegzetes hiánybetegségeket okoz (pl. C-vitamin-hiány → skorbut).
`,
    key_concepts: [
      "emésztőcsatorna szakaszai (száj, gyomor, vékonybél, vastagbél)",
      "emésztőenzimek (amiláz, pepszin, lipáz)",
      "bélbolyhok és felszívódás",
      "katabolikus és anabolikus folyamatok",
      "alapanyagcsere",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hol történik a legtöbb emésztés és a tápanyagok felszívódásának nagy része?",
        options: ["vékonybél", "gyomor", "vastagbél", "szájüreg"],
        correct_answer: "vékonybél",
        explanation:
          "A vékonybélbe jutnak a máj és a hasnyálmirigy emésztőnedvei, itt zajlik a legnagyobb mennyiségű emésztés, és a bélbolyhok itt biztosítják a hatékony felszívódást.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik enzim bontja a fehérjéket a gyomorban?",
        options: ["pepszin", "amiláz", "lipáz", "tripszin"],
        correct_answer: "pepszin",
        explanation:
          "A gyomornedv pepszin enzime a savas közegben kezdi meg a fehérjék lebontását aminosavakká/peptidekké; a tripszin a hasnyálmirigyből a vékonybélbe kerülő fehérjebontó enzim.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fontos a bélbolyhok nagy felülete a vékonybélben?",
        options: [
          "Megnöveli a tápanyagok felszívódásának hatékonyságát",
          "Csökkenti az emésztőenzimek mennyiségét",
          "Megakadályozza a víz felszívódását",
          "Csak a vastagbélben található meg",
        ],
        correct_answer: "Megnöveli a tápanyagok felszívódásának hatékonyságát",
        explanation:
          "A bélbolyhok (és rajtuk a mikrobolyhok) drasztikusan megnövelik a vékonybél belső felszínét, ami hatékonyabbá teszi a diffúzión és aktív transzporton alapuló felszívódást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a katabolikus és az anabolikus anyagcsere-folyamat között?",
        options: [
          "A katabolikus lebont nagy molekulákat energiafelszabadítással, az anabolikus energiafelhasználással épít fel komplexebb molekulákat",
          "A katabolikus mindig csak a sejtmagban zajlik",
          "Az anabolikus folyamatok sosem igényelnek enzimet",
          "A katabolikus és anabolikus folyamat ugyanaz, csak más névvel jelölik",
        ],
        correct_answer: "A katabolikus lebont nagy molekulákat energiafelszabadítással, az anabolikus energiafelhasználással épít fel komplexebb molekulákat",
        explanation:
          "A katabolizmus (pl. sejtlégzés) nagy molekulák lebontásával energiát szabadít fel, míg az anabolizmus (pl. fehérjeszintézis) ezt az energiát felhasználva kisebb egységekből nagyobb molekulákat épít fel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kerül a felszívott tápanyagok nagy része elsőként a májba, még mielőtt a szervezet többi részéhez eljutna?",
        options: [
          "A bélbolyhok kapillárisai a kapuvénába gyűjtik a vért, amely közvetlenül a májba vezet feldolgozás és raktározás céljából",
          "Mert a máj készíti az emésztőenzimeket, amelyeket vissza kell juttatni",
          "Mert a máj a tüdőn keresztül kapja a vért",
          "Mert csak a máj képes lebontani a szénhidrátokat",
        ],
        correct_answer: "A bélbolyhok kapillárisai a kapuvénába gyűjtik a vért, amely közvetlenül a májba vezet feldolgozás és raktározás céljából",
        explanation:
          "A vékonybélből felszívódott anyagok a kapuvénán (véna portae) keresztül elsőként a májba jutnak, ahol méregtelenítés, raktározás (pl. glikogénképzés) és további anyagcsere-feldolgozás történik, mielőtt a nagyvérkörbe kerülnének.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "az-emberi-kivalaszto-rendszer",
    title: "Az emberi kiválasztó rendszer",
    level: "mindketto",
    theme: "Az ember szervezete",
    order_index: 19,
    summary_markdown:
      "A kiválasztó rendszer feladata a szervezet anyagcseréje során keletkező bomlásproduktumok (különösen a nitrogéntartalmú végproduktumok) eltávolítása, valamint a víz- és ásványianyag-egyensúly, illetve a vér összetételének finomhangolása a nefronok működésén keresztül.",
    content_markdown: `
## A vese felépítése

A **vese** pár szervű, bab alakú szerv, amelynek funkcionális egysége a **nefron** (egy vesében kb. 1 millió található). Minden nefron egy **Bowman-tokból** (amely egy hajszálér-gombolyagot, a **glomerulust** öleli körbe) és az ebből induló, hosszú, kanyargó **vesecsatornácskából (tubulusból)** áll, amely a **gyűjtőcsatornákba** vezeti a keletkező vizeletet.

## A vizeletképzés három lépése

1. **Szűrés (filtráció)** – a glomerulusban a vér magas nyomása kipréseli a vér folyékony, sejtmentes részét (víz, glükóz, ionok, kis molekulák, karbamid) a Bowman-tokba; a nagy molekulák (fehérjék) és a vérsejtek a vérben maradnak. Az így keletkező folyadék az **elsődleges (primer) vizelet**.
2. **Visszaszívás (reabszorpció)** – a tubulusban a szervezet számára hasznos anyagokat (glükóz, aminosavak, a víz nagy része, szükséges ionok) a hajszálerek visszaszívják a vérbe — ez aktív transzporttal és diffúzióval zajlik.
3. **Kiválasztás (szekréció)** – egyes anyagok (pl. bizonyos ionok, gyógyszer-metabolitok) a vérből aktívan a tubulus lumenébe kerülnek, tovább finomítva a vizelet összetételét.

A folyamat végén a **másodlagos (végleges) vizelet** a húgyvezetőn át a húgyhólyagba, majd a húgycsövön keresztül a szervezetből kiürül.

## A nitrogéntartalmú anyagcsere-végproduktumok

A fehérjék és nukleinsavak lebontásakor keletkező nitrogéntartalmú melléktermékek (elsősorban az **ammónia**, amely erősen mérgező) a májban ártalmatlanabb **karbamiddá (ureává)** alakulnak át, amelyet a vese választ ki a vizelettel. Ez a folyamat elengedhetetlen, mert az ammónia felhalmozódása súlyosan károsítaná az idegrendszert.

## A vese szerepe a homeosztázisban

A vese nem csak "szűrő", hanem a szervezet belső egyensúlyának (homeosztázisának) egyik legfontosabb fenntartója:

- **Víz- és sóegyensúly** – a víz és az ionok (Na⁺, K⁺) visszaszívásának finomhangolásával szabályozza a testfolyadékok mennyiségét és koncentrációját. Ezt a folyamatot hormonok (pl. **ADH — antidiuretikus hormon**, amely fokozza a víz visszaszívását) is befolyásolják.
- **Vérnyomás-szabályozás** – a vese által kiválasztott enzim (renin) hormonrendszeri kaszkádon (renin-angiotenzin-aldoszteron rendszer) keresztül hat a vérnyomásra.
- **Sav-bázis egyensúly** – a vese szabályozza a vér pH-ját azáltal, hogy szükség szerint több vagy kevesebb savas/lúgos komponenst választ ki.

## Vesebetegségek

A vese működésének károsodása (pl. krónikus vesebetegség, amelyet gyakran cukorbetegség vagy magas vérnyomás okoz) a méreganyagok felhalmozódásához vezet a vérben; súlyos esetben **dialízis (vérmosás)** vagy vesetranszplantáció szükséges a szűrőfunkció helyettesítésére.
`,
    key_concepts: [
      "nefron és glomerulus",
      "szűrés, visszaszívás, kiválasztás",
      "karbamid keletkezése (ammónia méregtelenítése)",
      "ADH hormon és víz-visszaszívás",
      "homeosztázis fenntartása",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a nefron?",
        options: ["a vese funkcionális egysége, amely a vizeletképzést végzi", "a húgyhólyag fala", "a máj legkisebb egysége", "a vese külső burka"],
        correct_answer: "a vese funkcionális egysége, amely a vizeletképzést végzi",
        explanation:
          "A nefron a Bowman-tokból, a glomerulusból és a tubulusból áll, ez a vese vizeletképző alapegysége — egy vesében kb. 1 millió található.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik lépés során préselődik ki a vér folyékony része a glomerulusból a Bowman-tokba?",
        options: ["szűrés (filtráció)", "visszaszívás (reabszorpció)", "kiválasztás (szekréció)", "emésztés"],
        correct_answer: "szűrés (filtráció)",
        explanation:
          "A szűrés a glomerulusban zajlik: a vér magas nyomása miatt a vér folyékony, sejt- és fehérjementes része a Bowman-tokba préselődik, létrehozva az elsődleges vizeletet.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért alakul át a mérgező ammónia karbamiddá a szervezetben?",
        options: [
          "Mert a karbamid kevésbé mérgező, biztonságosabban szállítható és kiválasztható a vizelettel",
          "Mert a karbamid energiaforrásként szolgál a sejtek számára",
          "Mert a vese csak karbamidot képes felismerni",
          "Mert az ammónia nem oldódik vízben",
        ],
        correct_answer: "Mert a karbamid kevésbé mérgező, biztonságosabban szállítható és kiválasztható a vizelettel",
        explanation:
          "Az ammónia erősen mérgező az idegrendszerre, ezért a máj a karbamidciklus során kevésbé toxikus karbamiddá alakítja, amelyet a vese biztonságosan tud kiválasztani.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hatása van az ADH (antidiuretikus hormon) fokozott kiválasztásának a vizeletképzésre?",
        options: [
          "Fokozza a víz visszaszívását a tubulusokban, így kevesebb, koncentráltabb vizelet keletkezik",
          "Csökkenti a víz visszaszívását, így sok, híg vizelet keletkezik",
          "Teljesen leállítja a vizeletképzést",
          "Nincs hatása a vizeletképzésre",
        ],
        correct_answer: "Fokozza a víz visszaszívását a tubulusokban, így kevesebb, koncentráltabb vizelet keletkezik",
        explanation:
          "Az ADH a tubulusok és gyűjtőcsatornák víz-áteresztő képességét növeli, ezáltal több víz szívódik vissza a vérbe, ami kisebb mennyiségű, koncentráltabb vizeletet eredményez — ez kiszáradás esetén védő mechanizmus.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért tekinthető a vese a homeosztázis egyik legfontosabb szervének, nem csak 'szűrőnek'?",
        options: [
          "Mert a víz-, só- és sav-bázis egyensúlyt, illetve hormonális útvonalon a vérnyomást is aktívan szabályozza, nem csak a bomlásanyagokat távolítja el",
          "Mert kizárólag a vörösvértestek képzéséért felelős",
          "Mert csak a fehérjék lebontását végzi",
          "Mert a vese az egyetlen szerv, ami vizet tartalmaz",
        ],
        correct_answer: "Mert a víz-, só- és sav-bázis egyensúlyt, illetve hormonális útvonalon a vérnyomást is aktívan szabályozza, nem csak a bomlásanyagokat távolítja el",
        explanation:
          "A vese a szűrésen és a bomlásanyagok eltávolításán túl a testfolyadékok mennyiségét, összetételét, pH-ját és — a renin-angiotenzin-aldoszteron rendszeren át — a vérnyomást is finomhangolja, ezért kulcsszerepű homeosztatikus szerv.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "az-idegrendszer-felepitese-es-mukodese",
    title: "Az idegrendszer felépítése és működése",
    level: "emelt",
    theme: "Az ember szervezete",
    order_index: 20,
    summary_markdown:
      "Az idegrendszer az idegsejtek (neuronok) hálózatán keresztül gyors, elektromos és kémiai jelek formájában irányítja és koordinálja a szervezet működését; felépítése a központi és a környéki idegrendszerre, működése az ingerület keletkezésére és átvitelére bontható.",
    content_markdown: `
## Az idegsejt (neuron) felépítése

A neuron az idegrendszer alapvető funkcionális egysége. Fő részei: a **sejttest (soma)**, amely tartalmazza a sejtmagot és a legtöbb sejtorganellumot; a **dendritek**, rövid, elágazó nyúlványok, amelyek más neuronoktól érkező ingereket vesznek fel; és az **axon**, egyetlen, gyakran hosszú nyúlvány, amely az ingerületet a sejttesttől távolabbi célpont (másik neuron, izom, mirigy) felé vezeti. Sok axont **myelinhüvely** (Schwann-sejtek vagy oligodendrociták alkotta zsíros burok) borít, amely szigetel és jelentősen felgyorsítja az ingerületvezetést (**ugrásos, saltatorikus vezetés** a myelinhüvely megszakításainál, a Ranvier-befűződéseknél).

## Az ingerület keletkezése és vezetése

Nyugalmi állapotban a neuron membránján egy elektromos potenciálkülönbség (**nyugalmi membránpotenciál**, kb. -70 mV) áll fenn, amelyet a Na⁺-K⁺-pumpa és az ionos csatornák tartanak fenn. Egy elég erős inger hatására a membrán feszültségfüggő Na⁺-csatornái megnyílnak, Na⁺ ionok áramlanak be, ez rövid, nagy amplitúdójú **akciós potenciált (idegimpulzust)** hoz létre, amely "mind vagy semmi" jellegű (küszöbérték feletti inger mindig ugyanolyan erősségű választ ad). Az akciós potenciál önmagát gerjesztve terjed végig az axonon.

## A szinapszis és a kémiai ingerületátvitel

Két neuron (vagy egy neuron és egy izom/mirigysejt) találkozási pontja a **szinapszis**. Az elektromos ingerület az axon végén (**preszinaptikus véggomb**) **neurotranszmitter** (pl. acetilkolin, dopamin, szerotonin) molekulák felszabadulását idézi elő, amelyek a szinaptikus résen átdiffundálva a következő sejt (**posztszinaptikus**) membránján lévő specifikus receptorokhoz kötődnek, ott új elektromos választ (izgató vagy gátló hatást) keltve. Ez a mechanizmus biztosítja az ingerület egyirányú továbbítását, és lehetőséget ad a jel finomhangolására (erősítés, gátlás, integrálás).

## A központi idegrendszer felépítése

A **központi idegrendszer (KIR)** az agyból és a gerincvelőből áll.

- **Nagyagy** – a legnagyobb agyi rész, kérgében (a szürkeállományban) zajlik a tudatos érzékelés, mozgásszervezés, gondolkodás, beszéd, memória. Két féltekére osztott, mindkettő specializált funkciókkal (pl. a legtöbb embernél a bal félteke dominál a beszédben).
- **Kisagy** – a mozgáskoordinációért, egyensúlyért, testtartásért felelős.
- **Agytörzs (nyúltvelő, híd, középagy)** – az élet fenntartásához nélkülözhetetlen automatikus funkciókat (légzés, szívritmus, vérnyomás) szabályozza.
- **Gerincvelő** – az agy és a test közötti ingerületvezetés fő útvonala, valamint a **reflexek** (gyors, tudattól független válaszreakciók, pl. térdreflex) központja.

## A környéki idegrendszer

A **környéki (perifériás) idegrendszer** a KIR-t köti össze a szervezet többi részével. Két nagy funkcionális alrendszere:

- **Szomatikus idegrendszer** – a vázizmok akaratlagos mozgását irányítja.
- **Autonóm (vegetatív) idegrendszer** – a belső szervek akaratlan működését szabályozza, két, egymással ellentétes hatású ága van: a **szimpatikus** ("üss vagy menekülj" válasz — pl. gyorsítja a szívritmust, tágítja a hörgőket) és a **paraszimpatikus** (nyugalmi, "pihenés és emésztés" állapot — pl. lassítja a szívritmust, fokozza az emésztést) idegrendszer.
`,
    key_concepts: [
      "neuron felépítése (dendrit, axon, myelinhüvely)",
      "nyugalmi potenciál és akciós potenciál",
      "szinapszis és neurotranszmitter",
      "központi idegrendszer (agy, gerincvelő)",
      "szimpatikus és paraszimpatikus idegrendszer",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik neuronrész vezeti az ingerületet a sejttesttől távolabbi célpont felé?",
        options: ["axon", "dendrit", "sejttest (soma)", "myelinhüvely"],
        correct_answer: "axon",
        explanation:
          "Az axon az egyetlen, jellemzően hosszú nyúlvány, amely az ingerületet a sejttesttől a célsejt (másik neuron, izom, mirigy) felé vezeti; a dendritek az ingerek felvételéért felelősek.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik a szinapszisban az ingerület átvitelekor?",
        options: [
          "A preszinaptikus sejt neurotranszmittert bocsát ki, amely a posztszinaptikus sejt receptoraihoz kötődve új elektromos választ kelt",
          "Az elektromos áram közvetlenül átugrik egyik sejtből a másikba",
          "A két neuron sejtmagja összeolvad",
          "A neurotranszmitter csak izomsejtek között fordul elő",
        ],
        correct_answer: "A preszinaptikus sejt neurotranszmittert bocsát ki, amely a posztszinaptikus sejt receptoraihoz kötődve új elektromos választ kelt",
        explanation:
          "A kémiai szinapszisban az elektromos ingerület neurotranszmitter felszabadulását idézi elő, ami a szinaptikus résen átjutva a következő sejt receptoraihoz kötődve hozza létre az új választ.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik agyi terület felelős a mozgáskoordinációért és egyensúlyért?",
        options: ["kisagy", "nagyagy kérge", "nyúltvelő", "gerincvelő"],
        correct_answer: "kisagy",
        explanation:
          "A kisagy elsődleges feladata a finom mozgáskoordináció, az egyensúly és a testtartás szabályozása.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért gyorsítja fel a myelinhüvely az ingerület vezetését az axonon?",
        options: [
          "Szigetelő hatása miatt az ingerület a Ranvier-befűződéseknél 'ugrásszerűen' halad, ami sokkal gyorsabb, mint a folytonos vezetés",
          "Mert a myelinhüvely maga generálja az akciós potenciált",
          "Mert megnöveli az axon átmérőjét jelentősen",
          "Mert lecsökkenti a nyugalmi membránpotenciál értékét",
        ],
        correct_answer: "Szigetelő hatása miatt az ingerület a Ranvier-befűződéseknél 'ugrásszerűen' halad, ami sokkal gyorsabb, mint a folytonos vezetés",
        explanation:
          "A myelinhüvely szigetel, ezért az ionáramlás (és így az akciós potenciál újragerjesztése) csak a befűződéseknél történhet — ez a saltatorikus (ugrásos) vezetés sokkal gyorsabb, mint a myelinizálatlan rostok folytonos vezetése.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a szimpatikus idegrendszer aktiválódását ('üss vagy menekülj' válasz)?",
        options: [
          "Gyorsítja a szívritmust és tágítja a hörgőket, felkészítve a szervezetet a megerőltető aktivitásra",
          "Lassítja a szívritmust és fokozza az emésztést",
          "Kizárólag a vázizmok akaratlagos mozgását irányítja",
          "Csak alvás közben aktív",
        ],
        correct_answer: "Gyorsítja a szívritmust és tágítja a hörgőket, felkészítve a szervezetet a megerőltető aktivitásra",
        explanation:
          "A szimpatikus idegrendszer stresszhelyzetben, veszély esetén aktiválódik, és olyan élettani válaszokat idéz elő (pulzusszám-növekedés, hörgőtágulás, izomvér-ellátás fokozása), amelyek a gyors reagálást (menekülés vagy harc) szolgálják — ellentétben a nyugalmi állapotot fenntartó paraszimpatikus rendszerrel.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "erzekszervek",
    title: "Érzékszervek",
    level: "mindketto",
    theme: "Az ember szervezete",
    order_index: 21,
    summary_markdown:
      "Az érzékszervek (szem, fül, bőr, íz- és szaglószervek) specializált receptorokkal alakítják át a külső és belső ingereket idegi jelekké, amelyeket az idegrendszer tovább feldolgoz és tudatos érzékeléssé alakít.",
    content_markdown: `
## Az érzékelés általános elve

Minden érzékszerv működésének alapja, hogy specializált **receptorsejtek** egy adott típusú ingert (fény, hang, kémiai anyag, nyomás, hőmérséklet) képesek felfogni, és azt idegi jellé (akciós potenciállá) alakítani (**transzdukció**), amelyet érző (szenzoros) idegek vezetnek a központi idegrendszerbe további feldolgozásra. A receptorokat az ingertípus szerint csoportosíthatjuk: **fotoreceptorok** (fény), **mechanoreceptorok** (nyomás, hang, gravitáció), **kemoreceptorok** (kémiai anyagok — íz, szag), **termoreceptorok** (hőmérséklet) és **nociceptorok** (fájdalom).

## A szem és a látás

A szemgolyó fő rétegei kívülről befelé: a **ínhártya (sclera)** — a szem külső, védő, fehér színű rétege, elülső részén átlátszó a **szaruhártya (cornea)**, amely a fény első törését végzi; az **érhártya (choroidea)** — erekben gazdag, elülső részén a **szivárványhártya (írisz)** szabályozza a **pupilla** méretét, tehát a szembe jutó fény mennyiségét; a **retina (ideghártya)** a legbelső réteg, itt találhatók a fényérzékeny receptorsejtek: a **csapok** (nappali, színlátásért felelős, kis fényérzékenységű) és a **pálcikák** (éjszakai, fekete-fehér, nagy fényérzékenységű látásért felelős) sejtek. A szem belsejében lévő **lencse** rugalmas alakváltozással (**alkalmazkodás, akkomodáció**) élesíti a képet a retinára, közeli és távoli tárgyakra fókuszálva.

## A fül és a hallás/egyensúlyozás

A fül három részre osztható: a **külső fül** (fülkagyló, hallójárat) a hanghullámokat a **dobhártyához** vezeti, amely a hang hatására rezeg; a **középfül** ürege a hallócsontocskákat (kalapács, üllő, kengyel) tartalmazza, amelyek mechanikusan felerősítik és tovább vezetik a rezgést a belső fülbe; a **belső fül csigájában (cochlea)** találhatók a hangreceptor (szőr)sejtek, amelyek a mechanikai rezgést idegi jellé alakítják. A belső fülben található a **egyensúlyszerv (vestibuláris apparátus)** is: a félkörös ívjáratok a fej elfordulását, a tömlőcske és zsákocska a fej lineáris gyorsulását és a gravitációhoz viszonyított helyzetét érzékeli.

## Kémiai érzékszervek: szaglás és ízlelés

A **szaglás** receptorai az orrüreg felső részén, a szaglóhámban találhatók, és a levegőben lévő illékony kémiai anyagokat érzékelik közvetlenül a nagyagyi szaglóközponthoz kapcsolódva (ez az egyetlen érzékszerv, amelynek jele nem a talamuszon keresztül jut a kéregbe). Az **ízlelés** receptorai a nyelv **ízlelőbimbóiban** találhatók, és alapvetően öt íz minőséget különböztetnek meg: édes, savanyú, sós, keserű és umami (fehérjedús, "húsos" íz).

## A bőr mint érzékszerv

A bőrben elhelyezkedő különböző receptorok (mechanoreceptorok, termoreceptorok, nociceptorok) érzékelik az érintést, nyomást, hőmérsékletet és a fájdalmat — ez az egyik legkiterjedtebb érzékszervünk, amely emellett a szervezet védelmét (kórokozók, UV-sugárzás, kiszáradás ellen) és a hőháztartás szabályozását (erek szűkülete/tágulása, verejtékezés) is szolgálja.
`,
    key_concepts: [
      "receptor és transzdukció",
      "retina — csapok és pálcikák",
      "középfül és a cochlea",
      "egyensúlyszerv",
      "kemoreceptorok (szaglás, ízlelés)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik szemréteg tartalmazza a fényérzékeny csap- és pálcikasejteket?",
        options: ["retina (ideghártya)", "ínhártya (sclera)", "érhártya (choroidea)", "szaruhártya (cornea)"],
        correct_answer: "retina (ideghártya)",
        explanation:
          "A retina a szem legbelső rétege, amely a fényérzékeny csapokat (színlátás) és pálcikákat (fekete-fehér, éjszakai látás) tartalmazza.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a csapok és a pálcikák funkciója között?",
        options: [
          "A csapok a nappali, színes látásért, a pálcikák az éjszakai, fekete-fehér látásért felelősek",
          "A csapok csak a hallásban vesznek részt",
          "A pálcikák felelősek a színlátásért, a csapok az éjszakai látásért",
          "Mindkettő azonos funkciót lát el",
        ],
        correct_answer: "A csapok a nappali, színes látásért, a pálcikák az éjszakai, fekete-fehér látásért felelősek",
        explanation:
          "A csapok kisebb fényérzékenységűek, de színlátásra képesek (nappali fényben aktívak), a pálcikák nagyobb fényérzékenységűek, de csak fekete-fehér látást biztosítanak (gyenge fényben, éjszaka aktívak).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a hallócsontocskák (kalapács, üllő, kengyel) szerepe a középfülben?",
        options: [
          "Mechanikusan felerősítik és tovább vezetik a dobhártya rezgését a belső fül felé",
          "Ezek érzékelik közvetlenül a hangot idegi jelként",
          "Ezek felelősek az egyensúlyozásért",
          "Ezek szabályozzák a pupilla méretét",
        ],
        correct_answer: "Mechanikusan felerősítik és tovább vezetik a dobhártya rezgését a belső fül felé",
        explanation:
          "A hallócsontocskák mechanikai erősítőként működnek, a dobhártya rezgését hatékonyan továbbítják a belső fül csigájáig, ahol a valódi érzékelés (transzdukció) történik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért különleges a szaglás a többi érzékszervhez képest az idegi jel útját illetően?",
        options: [
          "A szagló idegi jel nem a talamuszon keresztül, hanem közvetlenül a nagyagyi szaglóközponthoz jut",
          "A szaglásnak nincs is idegi kapcsolata az aggyal",
          "A szaglás az egyetlen érzékszerv, amely nem receptorokra épül",
          "A szaglás jele mindig a kisagyba jut először",
        ],
        correct_answer: "A szagló idegi jel nem a talamuszon keresztül, hanem közvetlenül a nagyagyi szaglóközponthoz jut",
        explanation:
          "A legtöbb érzékszervi információ a talamuszon áthaladva jut a kéreg megfelelő területére, a szaglás azonban ez alól kivétel, közvetlen kapcsolatban áll a szaglóközponttal (ami magyarázza a szagok erős emlékezeti/érzelmi hatását is).",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik belső fül-struktúra érzékeli a fej elfordulását (rotációját)?",
        options: ["félkörös ívjáratok", "cochlea (csiga)", "dobhártya", "hallócsontocskák"],
        correct_answer: "félkörös ívjáratok",
        explanation:
          "A belső fül félkörös ívjáratai a fej elfordulását (angular gyorsulást) érzékelik, míg a tömlőcske és zsákocska a lineáris gyorsulást és a fej gravitációhoz viszonyított helyzetét.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "a-hormonrendszer-endokrin-rendszer",
    title: "A hormonrendszer (endokrin rendszer)",
    level: "emelt",
    theme: "Az ember szervezete",
    order_index: 22,
    summary_markdown:
      "A hormonrendszer belső elválasztású mirigyek (endokrin mirigyek) hálózata, amelyek a vérbe juttatott hormonokkal, lassabb, de tartósabb és szélesebb körű hatással szabályozzák a szervezet működését, jellemzően negatív visszacsatolási körökben.",
    content_markdown: `
## A hormonális szabályozás alapelvei

A hormonok az **endokrin mirigyek** (belső elválasztású mirigyek, amelyeknek nincs kivezető csatornájuk, közvetlenül a vérbe választják ki termékeiket) által termelt kémiai jelmolekulák, amelyek a vérárammal a szervezet távoli pontjaira szállítva, ott a megfelelő **receptorral** rendelkező **célsejteken** fejtik ki hatásukat. A hormonális szabályozás — az idegi szabályozással szemben — lassabb (másodperc-óra időskála), de tartósabb és gyakran szélesebb körű (egyszerre több szervre kiterjedő) hatású.

## A legfontosabb endokrin mirigyek és hormonjaik

| Mirigy | Fontosabb hormon(ok) | Hatás |
|---|---|---|
| Agyalapi mirigy (hipofízis) | növekedési hormon, TSH, ADH | növekedés szabályozása, más mirigyek irányítása |
| Pajzsmirigy | tiroxin | anyagcsere-sebesség szabályozása |
| Mellékpajzsmirigy | parathormon | vér kalciumszintjének szabályozása |
| Mellékvék (velő/kéreg) | adrenalin, kortizol | stresszválasz, vércukorszint |
| Hasnyálmirigy (szigetsejtek) | inzulin, glukagon | vércukorszint szabályozása |
| Ivarmirigyek | ösztrogén, progeszteron, tesztoszteron | nemi jellegek, szaporodás |

## A vércukorszint hormonális szabályozása

Az inzulin és a glukagon egymással ellentétes hatású, a **negatív visszacsatolás** klasszikus példáját mutatva: étkezés után, amikor a vércukorszint megemelkedik, a hasnyálmirigy szigetsejtjei **inzulint** választanak ki, amely fokozza a sejtek glükózfelvételét és a glükóz glikogénné alakítását a májban/izomban — ez csökkenti a vércukorszintet. Ha a vércukorszint túl alacsonyra csökken (pl. éhezés során), a hasnyálmirigy **glukagont** választ ki, amely a májban tárolt glikogén glükózzá bontását serkenti, növelve a vércukorszintet. Ez a két, ellentétes hatású hormon tartja a vércukorszintet szűk határok között.

## A hipofízis és a hipotalamusz szabályozó szerepe

A **hipotalamusz** (az agy egy része) és a hozzá kapcsolódó **hipofízis (agyalapi mirigy)** az endokrin rendszer "irányítóközpontja": a hipotalamusz idegi és hormonális jeleket integrál, és ennek alapján szabályozza a hipofízis hormonkibocsátását, amely aztán számos más endokrin mirigyet (pajzsmirigy, mellékvékek, ivarmirigyek) irányít — ez a **hipotalamusz-hipofízis tengely**.

## Negatív visszacsatolás mint általános elv

A hormonrendszer működésének fő szabályozási elve a **negatív visszacsatolás**: amikor egy hormon hatására a célváltozó (pl. vércukorszint, kalciumszint, hormonszint maga) elér egy megfelelő értéket, ez gátló jelet ad a hormont kibocsátó mirigy felé, csökkentve a további hormonkibocsátást — ez tartja a szervezet belső változóit szűk, stabil tartományban (homeosztázis).

## Endokrin betegségek

Ha egy mirigy túl sok vagy túl kevés hormont termel, jellegzetes betegségek keletkeznek: a **1-es típusú cukorbetegség** az inzulintermelő sejtek pusztulása miatti inzulinhiányból ered, a **pajzsmirigy-túlműködés (hyperthyreosis)** a felgyorsult anyagcserét, a **pajzsmirigy-alulműködés (hypothyreosis)** a lassult anyagcserét okozza.
`,
    key_concepts: [
      "endokrin mirigy és hormon",
      "inzulin és glukagon (vércukorszint-szabályozás)",
      "hipotalamusz-hipofízis tengely",
      "negatív visszacsatolás",
      "endokrin betegségek",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a hormonális szabályozást az idegi szabályozáshoz képest?",
        options: ["lassabb, de tartósabb és gyakran szélesebb körű hatású", "mindig gyorsabb, mint az idegi szabályozás", "csak egyetlen sejtre hat mindig", "nem igényel receptort a célsejten"],
        correct_answer: "lassabb, de tartósabb és gyakran szélesebb körű hatású",
        explanation:
          "A hormonok a véráramban terjednek, ez lassabb, mint az idegi ingerület, de a hatás gyakran tartósabb és több szervre, sejttípusra is kiterjedhet egyszerre.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik hormon csökkenti a vércukorszintet étkezés után?",
        options: ["inzulin", "glukagon", "adrenalin", "tiroxin"],
        correct_answer: "inzulin",
        explanation:
          "Az inzulin fokozza a sejtek glükózfelvételét és a glikogénképzést, ezzel csökkenti a magas vércukorszintet; a glukagon ezzel ellentétes hatású, alacsony vércukorszint esetén emeli azt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a hipotalamusz-hipofízis tengely szerepe az endokrin rendszerben?",
        options: [
          "A hipotalamusz irányítja a hipofízis hormonkibocsátását, amely aztán más endokrin mirigyeket szabályoz — ez az endokrin rendszer 'irányítóközpontja'",
          "A hipofízis kizárólag az emésztést szabályozza",
          "A hipotalamusz csak a szaglásért felelős",
          "Ez a kapcsolat csak gyermekkorban aktív",
        ],
        correct_answer: "A hipotalamusz irányítja a hipofízis hormonkibocsátását, amely aztán más endokrin mirigyeket szabályoz — ez az endokrin rendszer 'irányítóközpontja'",
        explanation:
          "A hipotalamusz idegi és hormonális jeleket integrálva szabályozza a hipofízis működését, amely azután más mirigyek (pajzsmirigy, mellékvék, ivarmirigyek) hormonkibocsátását irányítja — ez a rendszer hierarchikus felépítését adja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a negatív visszacsatolás elvét a hormonrendszerben?",
        options: [
          "Egy célváltozó megfelelő szintje gátló jelet ad a hormont kibocsátó mirigynek, csökkentve a további hormonkibocsátást",
          "A hormonkibocsátás mindig fokozódik, ha a célváltozó megfelelő szinten van",
          "A negatív visszacsatolás csak az idegrendszerben működik",
          "A negatív visszacsatolás megszünteti a mirigy működését véglegesen",
        ],
        correct_answer: "Egy célváltozó megfelelő szintje gátló jelet ad a hormont kibocsátó mirigynek, csökkentve a további hormonkibocsátást",
        explanation:
          "A negatív visszacsatolás a leggyakoribb homeosztatikus mechanizmus: a célváltozó (pl. hormonszint, vércukorszint) emelkedése gátolja a további hormonkibocsátást, ez tartja a rendszert egyensúlyban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Miért vezet az inzulintermelő sejtek pusztulása (1-es típusú cukorbetegség) tartósan magas vércukorszinthez?",
        options: [
          "Inzulin hiányában a sejtek nem tudják hatékonyan felvenni a glükózt a vérből, és a máj sem alakítja azt glikogénné",
          "Mert az inzulin hiánya fokozza a glükóz felszívódását a bélből",
          "Mert az inzulin hiánya növeli a glukagon lebontását",
          "Mert az inzulinnak nincs hatása a vércukorszintre",
        ],
        correct_answer: "Inzulin hiányában a sejtek nem tudják hatékonyan felvenni a glükózt a vérből, és a máj sem alakítja azt glikogénné",
        explanation:
          "Az inzulin nélkülözhetetlen a sejtek glükózfelvételéhez és a máj glikogénraktározásához; hiányában a glükóz a vérben marad, ez okozza a krónikusan magas vércukorszintet (hyperglykaemia).",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "az-immunrendszer-es-vedekezes",
    title: "Az immunrendszer és védekezés",
    level: "emelt",
    theme: "Az ember szervezete",
    order_index: 23,
    summary_markdown:
      "Az immunrendszer a szervezetet kórokozók és idegen anyagok ellen védő, nem specifikus (természetes) és specifikus (szerzett) mechanizmusok együttese, amely felismerő sejtjei és az antitestek révén immunológiai memóriát is képez.",
    content_markdown: `
## A nem specifikus (természetes) immunitás

A **nem specifikus immunitás** minden kórokozóval szemben azonos módon, azonnal reagál, nem igényel korábbi találkozást a kórokozóval:

- **Mechanikai és kémiai gátak** – a bőr és a nyálkahártyák fizikai akadályt, a bőrön és a nyálkahártyákon található savas pH, enzimek (pl. könny lizozimja) kémiai akadályt jelentenek.
- **Gyulladásos reakció** – sérülés vagy fertőzés esetén a sérült szövet kémiai jelzőanyagokat (pl. hisztamin) bocsát ki, ami érbővülést és fokozott érfal-áteresztést idéz elő — ez okozza a jellegzetes tüneteket (pirosság, duzzanat, melegség, fájdalom), és megkönnyíti a fehérvérsejtek odajutását.
- **Fagocitózis** – bizonyos fehérvérsejtek (pl. makrofágok) bekebelezik és elpusztítják a kórokozókat.
- **Láz** – a magasabb testhőmérséklet gátolja számos kórokozó szaporodását, és fokozza az immunválasz sebességét.

## A specifikus (szerzett) immunitás

A **specifikus immunitás** egy adott kórokozóra (**antigénre**) szabott, lassabban indul be, de **immunológiai memóriát** hoz létre, ami gyorsabb és erősebb választ tesz lehetővé egy újbóli fertőzés esetén. Két fő sejttípusa:

- **B-limfociták** – aktiválódásukkor plazmasejtekké alakulnak, amelyek **antitesteket (immunglobulinokat)** választanak ki. Az antitestek specifikusan kötődnek egy adott antigénhez, semlegesítve azt vagy megjelölve a fagocitózisra.
- **T-limfociták** – a **citotoxikus (ölő) T-sejtek** közvetlenül elpusztítják a fertőzött vagy rákos sejteket; a **segítő T-sejtek** koordinálják az immunválaszt, aktiválva más immunsejteket (pl. B-limfocitákat).

## Az immunológiai memória és az oltás

Egy kórokozóval való első találkozás után a specifikus immunválasz egy része **memóriasejtekké** differenciálódik, amelyek hosszú ideig (akár egy életen át) a szervezetben maradnak. Egy második találkozás esetén ezek a memóriasejtek sokkal gyorsabb és erősebb immunválaszt tesznek lehetővé, mielőtt a kórokozó betegséget okozhatna. Ezen az elven alapul a **védőoltás**: legyengített vagy elölt kórokozóval, illetve annak egy jellegzetes darabjával (antigénjével, pl. mRNS-vakcina esetén annak "receptjével") "megtanítjuk" az immunrendszert a kórokozó felismerésére anélkül, hogy a betegséget végig kellene szenvedni.

## Az immunrendszer zavarai

- **Allergia** – az immunrendszer túlreagál egy egyébként ártalmatlan anyaggal (allergénnel) szemben.
- **Autoimmun betegségek** – az immunrendszer hibásan a szervezet saját sejtjeit ismeri fel idegenként, és azok ellen indít támadást (pl. 1-es típusú cukorbetegség, amelyben a saját inzulintermelő sejteket pusztítja el).
- **Immunhiányos állapotok** – az immunrendszer gyengült vagy hiányos működése (pl. HIV-fertőzés, amely a segítő T-sejteket pusztítja, súlyosan legyengítve a specifikus immunválaszt).
`,
    key_concepts: [
      "nem specifikus immunitás (gyulladás, fagocitózis)",
      "B-limfocita és antitest",
      "T-limfocita (citotoxikus, segítő)",
      "immunológiai memória és oltás",
      "autoimmun betegség",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a nem specifikus (természetes) immunitást?",
        options: [
          "Minden kórokozóval szemben azonos módon, azonnal reagál, korábbi találkozás nélkül is",
          "Csak egy adott kórokozóra szabott, memóriát hoz létre",
          "Kizárólag antitestek termeléséből áll",
          "Csak az oltás után aktiválódik",
        ],
        correct_answer: "Minden kórokozóval szemben azonos módon, azonnal reagál, korábbi találkozás nélkül is",
        explanation:
          "A nem specifikus immunitás (bőr, gyulladás, fagocitózis, láz) minden kórokozóra hasonlóan, gyorsan reagál, ellentétben a specifikus immunitással, amely egy adott antigénre szabott és memóriát is képez.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik sejttípus alakul plazmasejtté, és választ ki antitesteket?",
        options: ["B-limfocita", "citotoxikus T-sejt", "makrofág", "vörösvértest"],
        correct_answer: "B-limfocita",
        explanation:
          "A B-limfociták aktiválódás után plazmasejtekké differenciálódnak, amelyek nagy mennyiségben termelnek antigén-specifikus antitesteket.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a citotoxikus (ölő) T-sejtek fő feladata?",
        options: [
          "Közvetlenül elpusztítják a fertőzött vagy rákos sejteket",
          "Antitesteket választanak ki",
          "Fagocitózissal bekebelezik a baktériumokat",
          "Csökkentik a testhőmérsékletet",
        ],
        correct_answer: "Közvetlenül elpusztítják a fertőzött vagy rákos sejteket",
        explanation:
          "A citotoxikus T-sejtek felismerik és közvetlenül elpusztítják azokat a sejteket, amelyek felszínén kórokozó-eredetű vagy rákos antigén jelenik meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért reagál a szervezet gyorsabban és erősebben egy kórokozó második támadására, mint az elsőre?",
        options: [
          "Az első találkozás után memóriasejtek keletkeznek, amelyek gyors és erős immunválaszt tesznek lehetővé",
          "Mert a szervezet a második alkalommal magasabb lázat produkál automatikusan",
          "Mert a második fertőzés mindig gyengébb kórokozóval történik",
          "Mert a nem specifikus immunitás ekkor már nem működik",
        ],
        correct_answer: "Az első találkozás után memóriasejtek keletkeznek, amelyek gyors és erős immunválaszt tesznek lehetővé",
        explanation:
          "Az immunológiai memória az alapja annak, hogy egy második fertőzés esetén a memória B- és T-sejtek sokkal gyorsabban aktiválódnak és hatékonyabb választ adnak, mint az első találkozáskor — ezen alapul a védőoltás elve is.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az autoimmun betegségeket?",
        options: [
          "Az immunrendszer hibásan a szervezet saját sejtjeit ismeri fel idegenként, és azok ellen indít támadást",
          "Az immunrendszer teljesen leáll",
          "Az immunrendszer csak allergénekre reagál túlzottan",
          "Az immunrendszer nem képes antitestet termelni",
        ],
        correct_answer: "Az immunrendszer hibásan a szervezet saját sejtjeit ismeri fel idegenként, és azok ellen indít támadást",
        explanation:
          "Az autoimmun betegségekben (pl. 1-es típusú cukorbetegség) az immunrendszer felismerési mechanizmusa hibásan a szervezet saját, egészséges sejtjeit célozza meg, mintha idegen antigének lennének.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "az-emberi-szaporodas-es-egyedfejlodes",
    title: "Az emberi szaporodás és egyedfejlődés",
    level: "mindketto",
    theme: "Az ember szervezete",
    order_index: 24,
    summary_markdown:
      "Az emberi szaporodás a férfi és a női ivarszervek működésén, a hormonálisan szabályozott menstruációs cikluson és a megtermékenyítésen alapul; az egyedfejlődés a magzati fejlődés szakaszaiból és a születés utáni növekedésből áll.",
    content_markdown: `
## A férfi ivarszervek

A hím ivarsejtek (**spermiumok**) a **hímivarmirigyekben (testisekben)** keletkeznek meiózissal (spermiogenezis), amit a hipofízis hormonjai (FSH, LH) és a testisek saját hormonja, a **tesztoszteron** szabályoz. A tesztoszteron felelős a másodlagos (serdülőkorban megjelenő) férfi nemi jellegekért is (szőrnövekedés, hangmélyülés, izomtömeg-növekedés). A spermiumok a mellékhere-vezetéken, ondóvezetéken keresztül jutnak a húgycsőbe, útközben az ondóhólyagcsék és a prosztata váladékával (amely tápanyagokat és a mozgást segítő anyagokat tartalmaz) keverednek.

## A női ivarszervek és a menstruációs ciklus

A női ivarsejtek (**petesejtek**) a **petefészkekben** érnek meiózissal (oogenezis). A **menstruációs ciklus** (átlagosan 28 napos) két, hormonálisan összefonódó folyamatot koordinál:

- **Petefészek-ciklus**: a hipofízis **FSH** (tüszőérlelő) hormonja hatására egy tüsző megérik a petefészekben, közben a tüsző **ösztrogént** választ ki. A ciklus közepén az LH (luteinizáló hormon) hirtelen megemelkedése kiváltja az **ovulációt** (petesejt kiszabadulása). Az ovuláció után a visszamaradó tüszőszövet **sárgatestté** alakul, amely **progeszteront** termel.
- **Méhciklus (endometrium-ciklus)**: az ösztrogén és a progeszteron hatására a méh nyálkahártyája (endometrium) megvastagszik, felkészülve egy esetleges megtermékenyített petesejt beágyazódására; ha nem történik megtermékenyítés, a hormonszintek lecsökkennek, és az endometrium leválik (**menstruáció**).

## Megtermékenyítés és a magzati fejlődés

A megtermékenyítés jellemzően a petevezetőben történik, amikor egy spermium egyesül a petesejttel, létrehozva a **zigótát**. A zigóta már az első napokban osztódni kezd (mitózisokkal), és a méhbe vándorolva **beágyazódik** az endometriumba. A fejlődés szakaszai:

- **Embrionális szak** (kb. az első 8 hét) – ez alatt alakulnak ki az alapvető szervek és testrészek (organogenezis); ez a legérzékenyebb időszak a károsító hatásokra (pl. alkohol, egyes gyógyszerek, fertőzések) nézve.
- **Magzati szak** (kb. a 9. héttől a születésig) – a már kialakult szervek további növekedése, érése, funkcionális finomodása jellemzi.

A magzatot a **méhlepény (placenta)** köti össze az anya vérkörével: itt zajlik — anélkül, hogy a két vér közvetlenül keveredne — a tápanyagok, oxigén, és a magzat anyagcsere-hulladékának (pl. CO2) diffúziós cseréje az anyai és a magzati vér között.

## Szülés és a születés utáni fejlődés

A terhesség végén (kb. 40. hét) hormonális jelek (elsősorban oxitocin) indítják el a méhösszehúzódásokat, ami a szüléshez vezet. Születés után az egyedfejlődés folytatódik a **csecsemőkor, gyermekkor, serdülőkor** (a nemi hormonok felszabaduló hatására másodlagos nemi jellegek kialakulása és nemi érés), majd a **felnőttkor** szakaszain át.
`,
    key_concepts: [
      "spermiogenezis és oogenezis",
      "menstruációs ciklus (FSH, LH, ösztrogén, progeszteron)",
      "megtermékenyítés és beágyazódás",
      "embrionális és magzati fejlődés",
      "méhlepény (placenta)",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik hormon hirtelen megemelkedése váltja ki az ovulációt a menstruációs ciklusban?",
        options: ["LH (luteinizáló hormon)", "tesztoszteron", "inzulin", "adrenalin"],
        correct_answer: "LH (luteinizáló hormon)",
        explanation:
          "A ciklus közepén az LH hirtelen megemelkedő szintje (LH-csúcs) váltja ki a petesejt kiszabadulását (ovuláció) a petefészekből.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol történik jellemzően a megtermékenyítés az emberi szaporodás során?",
        options: ["petevezetőben", "méhben", "petefészekben", "húgycsőben"],
        correct_answer: "petevezetőben",
        explanation:
          "A spermium a petevezetőben találkozik és egyesül a petesejttel, itt keletkezik a zigóta, amely aztán a méh felé vándorol tovább.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a méhlepény (placenta) fő funkciója?",
        options: [
          "Az anyai és a magzati vér közötti anyagcsere (tápanyag, oxigén, hulladékanyag) biztosítása, anélkül hogy a két vér közvetlenül keveredne",
          "A petesejt megtermékenyítése",
          "A magzat mozgásának korlátozása",
          "A menstruáció kiváltása",
        ],
        correct_answer: "Az anyai és a magzati vér közötti anyagcsere (tápanyag, oxigén, hulladékanyag) biztosítása, anélkül hogy a két vér közvetlenül keveredne",
        explanation:
          "A placenta a diffúziós anyagcsere helyszíne az anyai és magzati vérellátás között, biztosítva a magzat tápanyag- és oxigénellátását, illetve a hulladékanyagok eltávolítását, a két vérkör elkülönítése mellett.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért különösen érzékeny az embrionális szak (kb. az első 8 hét) a károsító hatásokra?",
        options: [
          "Ekkor alakulnak ki az alapvető szervek és testrészek (organogenezis), így egy zavaró hatás súlyos fejlődési rendellenességet okozhat",
          "Mert ekkor a magzat már önállóan lélegzik",
          "Mert ekkor még nincs méhlepény, és a magzat nem kap tápanyagot",
          "Mert ekkor a magzat mérete a legnagyobb",
        ],
        correct_answer: "Ekkor alakulnak ki az alapvető szervek és testrészek (organogenezis), így egy zavaró hatás súlyos fejlődési rendellenességet okozhat",
        explanation:
          "Az embrionális szakban zajlik a szervek és testrészek alapvető kialakulása; egy ekkor ható károsító tényező (pl. alkohol, egyes gyógyszerek, fertőzések) a normál fejlődés folyamatát tartósan megzavarhatja.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik a méh nyálkahártyájával (endometrium), ha nem történik megtermékenyítés egy ciklusban?",
        options: [
          "A hormonszintek lecsökkennek, és az endometrium leválik (menstruáció)",
          "Az endometrium tovább vastagszik a következő ciklusig",
          "Azonnal beágyazódik egy petesejt nélküli embrió",
          "A petefészek leáll véglegesen",
        ],
        correct_answer: "A hormonszintek lecsökkennek, és az endometrium leválik (menstruáció)",
        explanation:
          "Ha nincs megtermékenyítés (és így nincs beágyazódó embrió, amely fenntartaná a hormonszinteket), a sárgatest elsorvad, az ösztrogén- és progeszteronszint csökken, ami az endometrium leválását (menstruáció) idézi elő.",
        difficulty: 2,
      },
    ],
  },
];
