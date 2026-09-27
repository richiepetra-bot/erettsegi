import { TopicSeed } from "./angol";

export const matekTovabbiTemak2Topics: TopicSeed[] = [
  {
    slug: "egyenletrendszerek-megoldasa-linearis-es-masodfoku",
    title: "Egyenletrendszerek megoldása (lineáris és másodfokú)",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 25,
    summary_markdown:
      "Az egyenletrendszer olyan egyenletekből álló együttes feltételrendszer, amelynek megoldása az összes egyenletet egyszerre kielégítő számpár (vagy számhármas) — a lineáris rendszerek behelyettesítéssel vagy az egyenlő együtthatók módszerével, a másodfokúak jellemzően behelyettesítéssel oldhatók meg.",
    content_markdown: `
## Az egyenletrendszer fogalma

Egy **egyenletrendszer** két vagy több egyenletből áll, amelyeknek **közös megoldását** keressük — vagyis olyan számokat (két ismeretlen esetén számpárt), amelyek az összes egyenletet egyszerre, egyidejűleg kielégítik. Ha a rendszer két elsőfokú (lineáris) egyenletből áll két ismeretlennel, **lineáris (elsőfokú) kétismeretlenes egyenletrendszerről** beszélünk; ha valamelyik egyenlet másodfokú, **másodfokú (vegyes) egyenletrendszerről**.

## A behelyettesítő módszer

A **behelyettesítő módszer** lényege, hogy az egyik egyenletből kifejezzük az egyik ismeretlent a másik segítségével, majd ezt a kifejezést a másik egyenletbe helyettesítve egyismeretlenes egyenletet kapunk. Például az x + y = 7 és x - y = 1 rendszerben az első egyenletből x = 7 - y, ezt a másodikba helyettesítve: (7-y) - y = 1, azaz 7 - 2y = 1, tehát y = 3, és ebből x = 4. A módszer lineáris és másodfokú rendszerek esetén egyaránt jól alkalmazható.

## Az egyenlő együtthatók módszere (addíciós módszer)

Az **egyenlő együtthatók módszerénél** az egyenleteket (szükség esetén egy-egy számmal megszorozva) úgy alakítjuk át, hogy az egyik ismeretlen együtthatói megegyezzenek vagy egymás ellentettjei legyenek, majd az egyenleteket összeadva vagy kivonva az egyik ismeretlen kiesik. Például a 4x - y = 10 és 2x + y = 8 egyenleteket összeadva: 6x = 18, tehát x = 3, és ebből y = 8 - 2·3 = 2.

## Grafikus megoldás

Lineáris kétismeretlenes egyenletrendszer esetén mindkét egyenlet egy-egy **egyenest** ír le a koordinátasíkon; a rendszer megoldása a két egyenes **metszéspontjának koordinátái**. Ez a szemléletes kép segít megérteni, miért lehet a megoldások száma háromféle: ha a két egyenes **metsző**, pontosan egy megoldás van; ha **párhuzamos, de nem azonos**, nincs megoldás; ha a két egyenes **egybeesik**, végtelen sok megoldás van (a közös egyenes minden pontja megoldás).

## Háromismeretlenes lineáris egyenletrendszerek

Három egyenletből és három ismeretlenből álló rendszerek megoldására a **kiküszöbölés (eliminálás)** módszere terjeszthető ki: két egyenletpárból egy-egy ismeretlent kiküszöbölve két kétismeretlenes egyenletet kapunk, amelyeket a korábban tanult módszerekkel oldunk meg, majd a kapott értékeket visszahelyettesítjük az eredeti egyenletek egyikébe a harmadik ismeretlen meghatározásához.

## Másodfokú (vegyes) egyenletrendszerek

Ha az egyenletrendszer egyik egyenlete másodfokú (pl. egy parabola vagy kör egyenlete), a másik pedig elsőfokú, a megoldás jellemzően **behelyettesítéssel** történik: az elsőfokú egyenletből kifejezett ismeretlent a másodfokú egyenletbe helyettesítve egyismeretlenes másodfokú egyenletet kapunk, amelyet a megoldóképlettel oldunk meg. Például az y = x² és y = x + 2 rendszernél: x² = x + 2, azaz x² - x - 2 = 0, amelynek gyökei x = 2 és x = -1, így a megoldások (2,4) és (-1,1).

Két ismeretlen **összegét és szorzatát** megadó rendszerek (pl. x + y = 5, x·y = 6) a Viète-formulák megfordításával is megoldhatók: x és y az t² - 5t + 6 = 0 másodfokú egyenlet gyökei lesznek, tehát t = 2 vagy t = 3, így a megoldások (2,3) és (3,2).

## A megoldások ellenőrzése

Bármelyik módszert is alkalmazzuk, a kapott megoldást **mindig érdemes visszahelyettesíteni** az eredeti egyenletekbe, hogy ellenőrizzük annak helyességét — ez különösen fontos másodfokú rendszerek esetén, ahol a négyzetre emelés vagy a behelyettesítés során hamis (nem odaillő) gyökök is keletkezhetnek.

## Az egyenlő együtthatók módszere általánosabb esetben

Ha egyik ismeretlen együtthatói sem egyeznek meg, és nem is egymás ellentettjei, **mindkét egyenletet meg kell szorozni** egy-egy alkalmas számmal, hogy a kiválasztott ismeretlen együtthatói megegyezzenek (vagy ellentettek legyenek). Például a 3x + 4y = 25, 2x + 3y = 18 rendszernél szorozzuk az első egyenletet 3-mal, a másodikat 4-gyel: 9x + 12y = 75 és 8x + 12y = 72. A két egyenletet kivonva egymásból: x = 3, majd ezt visszahelyettesítve a második eredeti egyenletbe: 2·3 + 3y = 18, azaz 3y = 12, tehát y = 4.

## Ekvivalens átalakítások és a hamis gyökök veszélye

Egyenletrendszerek megoldása során fontos, hogy csak **ekvivalens átalakításokat** (mindkét oldal azonos számmal való szorzása, az egyenletek összeadása-kivonása, kifejezés behelyettesítése) alkalmazzunk, amelyek nem változtatják meg a megoldáshalmazt. Másodfokú (vegyes) rendszereknél gyakran szükség van négyzetre emelésre vagy szorzatra bontásra, ami **nem mindig ekvivalens átalakítás**: ilyenkor a levezetés során "hamis gyökök" (olyan számok, amelyek az átalakított egyenletet kielégítik, de az eredetit nem) keletkezhetnek, ezért minden megoldást vissza kell helyettesíteni az eredeti egyenletekbe.

## Háromismeretlenes lineáris egyenletrendszer — részletes példa

Tekintsük az x + y + z = 6, 2x - y + z = 3, x + 2y - z = 2 rendszert. Az első két egyenletet összeadva a y kiesik: 3x + 2z = 9. Az első egyenletet (-2)-vel szorozva és a harmadikhoz adva szintén az y-t küszöböljük ki: -2x - 2y - 2z = -12, ehhez hozzáadva a harmadik egyenletet (x + 2y - z = 2): -x - 3z = -10, azaz x + 3z = 10. A két kapott (kétismeretlenes) egyenletből — 3x + 2z = 9 és x + 3z = 10 — kifejezve x = 10 - 3z-t, és ezt behelyettesítve: 3(10-3z) + 2z = 9, azaz 30 - 7z = 9, tehát z = 3. Ebből x = 10 - 9 = 1, majd az első egyenletből y = 6 - 1 - 3 = 2. A megoldás tehát x = 1, y = 2, z = 3, amit érdemes mindhárom eredeti egyenletbe visszahelyettesítve ellenőrizni.

## Grafikus megoldás — részletes példa

Tekintsük az y = 2x - 1 és y = -x + 5 egyeneseket. Mindkettőt egy közös koordinátarendszerben ábrázolva két, egymást metsző egyenest kapunk. A metszéspont meghatározásához a két kifejezést egyenlővé tesszük: 2x - 1 = -x + 5, amiből 3x = 6, tehát x = 2, és ebből y = 2·2 - 1 = 3. A metszéspont tehát (2,3) — ez az érték egyben a megfelelő lineáris egyenletrendszer algebrai úton (pl. behelyettesítéssel) kapott megoldásával is megegyezik, ami jól szemlélteti, hogy a grafikus és az algebrai megoldás ugyanarra az eredményre vezet.

## Kör és egyenes egyenletéből álló rendszer

A másodfokú-lineáris rendszerek egy fontos speciális esete, amikor az egyik egyenlet egy kör egyenlete. Az x² + y² = 25 (origó középpontú, 5 sugarú kör) és az y = x - 1 (egyenes) egyenletéből álló rendszer megoldásához az y = x - 1 kifejezést behelyettesítjük a kör egyenletébe: x² + (x-1)² = 25, azaz 2x² - 2x - 24 = 0, egyszerűsítve x² - x - 12 = 0. Ennek gyökei (szorzattá bontással: (x-4)(x+3)=0) x = 4 és x = -3, amelyekhez y = 3, illetve y = -4 tartozik. A rendszernek tehát két megoldása van, ami geometriailag azt jelenti, hogy az egyenes metszi a kört két pontban.

## Paraméteres egyenletrendszerek

Az érettségin (különösen emelt szinten) előfordulnak **paraméteres egyenletrendszerek** is, amelyekben az együtthatók egy p paramétertől függenek. Ilyenkor a feladat gyakran az, hogy határozzuk meg, mely p érték(ek) esetén van a rendszernek egyetlen, végtelen sok, vagy egyáltalán nincs megoldása. A vizsgálat alapja ugyanaz a geometriai szemlélet, mint a konstans együtthatós esetben: azt kell megnézni, hogy a p paraméter mely értéke mellett válik a két egyenes (illetve egyenlet) párhuzamossá vagy egybeesővé.

## Szöveges feladatok egyenletrendszerekkel

Az egyenletrendszerek egyik legfontosabb gyakorlati alkalmazása a **szöveges feladatok** megoldása: ha egy feladatban két (vagy több) ismeretlen mennyiség szerepel, és ezekre két (vagy több) egymástól független feltétel adott, a feladat egyenletrendszerré alakítható. Például: "Két szám összege 20, különbsége 4" — ez az x + y = 20, x - y = 4 rendszerre vezet, amelynek megoldása x = 12, y = 8. Hasonló elven épülnek fel a **keverési feladatok** (pl. két különböző koncentrációjú oldat összekeverésekor az anyagmennyiség és a térfogat is egy-egy egyenletet ad), valamint a **mozgásos feladatok** (pl. két, egymással szemben induló jármű találkozási idejének és helyének meghatározása), amelyekben az idő és a sebesség (vagy a távolság) közötti összefüggések vezetnek egyenletrendszerhez.

## Jelentősége

Az egyenletrendszerek megoldási módszereinek (behelyettesítés, egyenlő együtthatók módszere, grafikus szemlélet) ismerete alapvető algebrai eszköz, amely nemcsak önmagában fontos érettségi témakör, hanem a koordinátageometria (egyenesek és körök metszéspontjai), a fizika és a közgazdaságtan számos feladatának megoldásához is nélkülözhetetlen.
`,
    key_concepts: [
      "lineáris (elsőfokú) és másodfokú egyenletrendszer",
      "behelyettesítő módszer",
      "egyenlő együtthatók (addíciós) módszere",
      "megoldások száma: egy, végtelen sok, nincs megoldás",
      "másodfokú rendszer megoldása behelyettesítéssel",
    ],
    source_refs: [
      { label: "Elsőfokú kétismeretlenes egyenletrendszerek (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/elsofoku-ketismeretlenes-egyenletrendszerek" },
      { label: "A másodfokú egyenletrendszer (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/masodfoku-egyenletrendszer" },
      { label: "Egyenletrendszer (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Egyenletrendszer" },
      { label: "Egyenletrendszerek (Mateking, középszintű érettségi)", url: "https://www.mateking.hu/kozepszintu-matek-erettsegi/egyenletrendszerek" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk egy egyenletrendszer megoldásának?",
        options: [
          "az összes egyenletet egyidejűleg kielégítő számot (vagy számpárt)",
          "bármelyik egyenletet kielégítő számot",
          "csak az első egyenlet gyökét",
          "a legnagyobb együtthatót"
        ],
        correct_answer: "az összes egyenletet egyidejűleg kielégítő számot (vagy számpárt)",
        explanation: "Az egyenletrendszer megoldása az a szám (vagy számpár), amely az összes egyenletet egyszerre kielégíti.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a lényege a behelyettesítő módszernek?",
        options: [
          "az egyik egyenletből kifejezünk egy ismeretlent, és a másik egyenletbe helyettesítjük",
          "mindkét egyenletet négyzetre emeljük",
          "az egyenleteket összeszorozzuk",
          "csak grafikusan lehet alkalmazni"
        ],
        correct_answer: "az egyik egyenletből kifejezünk egy ismeretlent, és a másik egyenletbe helyettesítjük",
        explanation: "A behelyettesítő módszernél az egyik ismeretlent kifejezzük az egyik egyenletből, majd ezt helyettesítjük a másik egyenletbe.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg az x + y = 7, x - y = 1 egyenletrendszert. Mennyi x és y értéke?",
        options: ["x = 4, y = 3", "x = 3, y = 4", "x = 5, y = 2", "x = 4, y = 4"],
        correct_answer: "x = 4, y = 3",
        explanation: "A két egyenletet összeadva: 2x = 8, tehát x = 4; ebből y = 7 - 4 = 3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg a 2x + y = 7, x - y = 2 egyenletrendszert.",
        options: ["x = 3, y = 1", "x = 1, y = 3", "x = 2, y = 3", "x = 4, y = -1"],
        correct_answer: "x = 3, y = 1",
        explanation: "A két egyenletet összeadva: 3x = 9, tehát x = 3; ebből y = 3 - 2 = 1.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg a 4x - y = 10, 2x + y = 8 egyenletrendszert az egyenlő együtthatók módszerével.",
        options: ["x = 3, y = 2", "x = 2, y = 3", "x = 3, y = -2", "x = 4, y = 6"],
        correct_answer: "x = 3, y = 2",
        explanation: "Az egyenleteket összeadva: 6x = 18, tehát x = 3; ebből y = 8 - 2·3 = 2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit ábrázolunk a grafikus megoldás során egy lineáris kétismeretlenes egyenletrendszer esetén?",
        options: [
          "két egyenest, és a metszéspontjuk adja a megoldást",
          "két parabolát",
          "egy kört és egy egyenest",
          "két, egymással párhuzamos síkot"
        ],
        correct_answer: "két egyenest, és a metszéspontjuk adja a megoldást",
        explanation: "A két lineáris egyenlet egy-egy egyenest ír le, és metszéspontjuk koordinátái adják a rendszer megoldását.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor nincs megoldása egy lineáris kétismeretlenes egyenletrendszernek?",
        options: [
          "ha a két egyenes párhuzamos, de nem esik egybe",
          "ha a két egyenes metszi egymást",
          "ha a két egyenes egybeesik",
          "ha mindkét egyenes átmegy az origón"
        ],
        correct_answer: "ha a két egyenes párhuzamos, de nem esik egybe",
        explanation: "Ha a két egyenes párhuzamos, de nem azonos, nincs közös pontjuk, tehát az egyenletrendszernek nincs megoldása.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor van végtelen sok megoldása egy lineáris kétismeretlenes egyenletrendszernek?",
        options: [
          "ha a két egyenes egybeesik",
          "ha a két egyenes merőleges",
          "ha a két egyenes metsző, de nem párhuzamos",
          "soha nincs végtelen sok megoldás"
        ],
        correct_answer: "ha a két egyenes egybeesik",
        explanation: "Ha a két egyenes egybeesik, minden pontjuk közös, ezért az egyenletrendszernek végtelen sok megoldása van.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg az y = x², y = x + 2 egyenletrendszert. Melyek a megoldások (x,y) párjai?",
        options: [
          "(2,4) és (-1,1)",
          "(2,4) és (1,-1)",
          "(-2,4) és (1,1)",
          "(2,4) és (1,1)"
        ],
        correct_answer: "(2,4) és (-1,1)",
        explanation: "Behelyettesítve: x² = x + 2, azaz x² - x - 2 = 0, amelynek gyökei x = 2 és x = -1; a hozzájuk tartozó y-értékek 4 és 1.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy szám x, a másik y. Tudjuk, hogy x + y = 5 és x·y = 6. Melyek a lehetséges (x,y) számpárok?",
        options: [
          "(2,3) és (3,2)",
          "(1,4) és (4,1)",
          "(2,4) és (4,2)",
          "(1,5) és (5,1)"
        ],
        correct_answer: "(2,3) és (3,2)",
        explanation: "x és y a t² - 5t + 6 = 0 egyenlet gyökei, amelyek t = 2 és t = 3, tehát a megoldások (2,3) és (3,2).",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan oldható meg egy háromismeretlenes, három egyenletből álló lineáris egyenletrendszer?",
        options: [
          "két egyenletpárból kiküszöbölve egy-egy ismeretlent, kétismeretlenes rendszerre vezetjük vissza",
          "csak grafikusan lehet megoldani",
          "az egyenleteket összeszorozva",
          "nem oldható meg algebrai úton"
        ],
        correct_answer: "két egyenletpárból kiküszöbölve egy-egy ismeretlent, kétismeretlenes rendszerre vezetjük vissza",
        explanation: "A kiküszöbölés módszerével az egyik ismeretlent két egyenletpárból kiejtve két kétismeretlenes egyenletet kapunk, amit tovább egyszerűsítünk.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit érdemes tenni, miután megoldottunk egy másodfokú (vegyes) egyenletrendszert?",
        options: [
          "visszahelyettesíteni a megoldásokat az eredeti egyenletekbe, ellenőrzésképpen",
          "elfelejteni az egyik megoldást",
          "csak a pozitív megoldást elfogadni",
          "nincs szükség ellenőrzésre"
        ],
        correct_answer: "visszahelyettesíteni a megoldásokat az eredeti egyenletekbe, ellenőrzésképpen",
        explanation: "A megoldásokat mindig vissza kell helyettesíteni az eredeti egyenletekbe, mert a levezetés során hamis gyökök is keletkezhetnek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két szám összege 20, különbsége 4. Melyik ez a két szám?",
        options: ["12 és 8", "14 és 6", "11 és 9", "13 és 7"],
        correct_answer: "12 és 8",
        explanation: "x + y = 20, x - y = 4 összeadva: 2x = 24, x = 12, ebből y = 20 - 12 = 8.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg az 5x - 2y = 16, x = 4 egyenletrendszert.",
        options: ["x = 4, y = 2", "x = 4, y = -2", "x = 4, y = 4", "x = 4, y = 0"],
        correct_answer: "x = 4, y = 2",
        explanation: "Behelyettesítve: 5·4 - 2y = 16, azaz 20 - 2y = 16, tehát 2y = 4, y = 2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg az x² + y² = 25, y = x - 1 egyenletrendszert. Hány és melyek a megoldásai?",
        options: [
          "két megoldás: (4,3) és (-3,-4)",
          "egy megoldás: (4,3)",
          "nincs megoldása",
          "három megoldás: (4,3), (-3,-4) és (0,-1)"
        ],
        correct_answer: "két megoldás: (4,3) és (-3,-4)",
        explanation: "Behelyettesítve: x² + (x-1)² = 25, azaz 2x² - 2x - 24 = 0, vagyis x² - x - 12 = 0, amelynek gyökei x = 4 és x = -3; ezekhez y = 3, illetve y = -4 tartozik.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "hasonlosag-es-a-hasonlosagi-transzformacio",
    title: "Hasonlóság és a hasonlósági transzformáció",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 26,
    summary_markdown:
      "A hasonlósági transzformáció egy középpontos nagyítás (vagy kicsinyítés) és egy egybevágósági transzformáció összetétele; két alakzat akkor hasonló, ha egymásba vihetők ilyen transzformációval, ami a méretaránytól függően a hossz-, terület- és térfogatarányokra is jellegzetes összefüggéseket ad.",
    content_markdown: `
## A hasonlósági transzformáció fogalma

A **hasonlósági transzformáció** olyan geometriai transzformáció, amely egy adott O középpont és egy λ (lambda) **arányossági tényező (hasonlósági arány)** segítségével minden P ponthoz egy P' pontot rendel úgy, hogy OP' = λ · OP, és P' az OP félegyenesen (λ > 0 esetén) vagy annak O-ra vonatkozó tükörképén (λ < 0 esetén) helyezkedik el. Ez az alapesete a **középpontos hasonlóság (nagyítás-kicsinyítés)**; ha λ > 1, nagyítást, ha 0 < λ < 1, kicsinyítést, ha λ = 1, az azonosságot (helybenhagyást) kapjuk.

## A hasonlóság definíciója

Két alakzatot **hasonlónak** nevezünk, ha az egyik a másikba átvihető egy hasonlósági transzformáció (azaz egy középpontos nagyítás-kicsinyítés és egy egybevágósági transzformáció — pl. eltolás, elforgatás, tükrözés — összetétele) segítségével. A hasonlóság jele: ~. A hasonló alakzatok **alakja megegyezik**, csak a méretük különbözhet.

## Háromszögek hasonlóságának alapesetei

Két háromszög hasonlóságát a következő **alapesetek** valamelyikének teljesülésével igazolhatjuk: **AA (szög-szög) hasonlóság** — ha a két háromszög két-két szöge páronként egyenlő (ekkor a harmadik szögpár is automatikusan egyenlő, hiszen a szögösszeg mindkét háromszögben 180°); **SSS (oldal-oldal-oldal) hasonlóság** — ha a megfelelő oldalak aránya páronként egyenlő; **SAS (oldal-szög-oldal) hasonlóság** — ha két-két oldal aránya egyenlő, és a közbezárt szögek is egyenlők.

## A hasonlósági transzformáció tulajdonságai

A hasonlósági transzformáció **szögtartó** (a megfelelő szögek nagysága nem változik), **egyenestartó** (egyenest egyenesbe visz át), és minden szakasz hossza a hasonlósági arány (|λ|) szorosára változik — vagyis a hasonlósági transzformáció **nem hossztartó** (kivéve, ha λ = 1). Az alakzatok **körüljárási iránya** λ > 0 esetén megmarad, λ < 0 esetén megfordul (a kép a középpontra nézve az ellentétes oldalra kerül, mintha egy középpontos tükrözés és egy nagyítás szorzata történt volna).

## Hasonló alakzatok kerülete, területe és hasonló testek térfogata

Ha két alakzat hasonlósági aránya λ, akkor: a **megfelelő szakaszok (és a kerület) aránya** λ; a **területek aránya** λ² (a hasonlósági arány négyzete); hasonló **testek esetén a térfogatok aránya** λ³ (a hasonlósági arány köbe). Ez azt jelenti, hogy ha egy alakzat minden lineáris méretét duplájára növeljük (λ = 2), a területe négyszeresére, egy hasonló test térfogata pedig nyolcszorosára nő.

## A párhuzamos szelők tétele és alkalmazásai

A hasonlóság egyik legfontosabb alkalmazása a **párhuzamos szelők tétele**: ha egy szög szárait párhuzamos egyenesekkel metsszük, a szárakon keletkező szakaszok aránya megegyezik. Ez az összefüggés a háromszögek középvonalának, a hasonló háromszögeket tartalmazó szerkesztéseknek és számos gyakorlati számításnak (pl. magasságok közvetett meghatározásának) az alapja.

## A hasonlóság és az egybevágóság kapcsolata

Az **egybevágóság** (kongruencia) a hasonlóság speciális esetének tekinthető, amikor a hasonlósági arány λ = 1 (vagy λ = -1): ekkor a transzformáció nemcsak a szögeket, hanem a szakaszok hosszát is megtartja. Éppen ezért minden egybevágó alakzatpár egyben hasonló is, de fordítva ez nem igaz: két hasonló alakzat csak akkor egybevágó, ha a méretarányuk éppen 1.

## Hasonlósági transzformáció koordinátákkal

Ha a hasonlósági transzformáció középpontja az origó, és a hasonlósági arány λ, a transzformáció koordinátás alakban egyszerűen felírható: egy P(x,y) pont képe **P'(λx, λy)**. Ez az összefüggés teszi lehetővé, hogy a hasonlósági transzformációt koordinátageometriai feladatokban (pl. alakzatok képének kiszámításában, vagy hasonlósági arány meghatározásában koordináták alapján) algebrai úton, szerkesztés nélkül is kezeljük. Ha a középpont nem az origó, hanem egy tetszőleges O(x₀,y₀) pont, a képlet: P'(x₀ + λ(x-x₀), y₀ + λ(y-y₀)).

## Minden kör hasonló egymáshoz

Érdemes megjegyezni, hogy míg a háromszögek (és általában a sokszögek) hasonlóságához külön feltételeket (AA, SSS, SAS) kell igazolni, **bármely két kör automatikusan hasonló** egymáshoz, hiszen egy kör egyértelműen meg van határozva a sugarával, és bármely két kör egymásba vihető egy alkalmas középpontos nagyítással (a hasonlósági arány a két sugár hányadosa) és szükség esetén egy eltolással. Ugyanez igaz minden szabályos n-szögre is (azonos n mellett): két szabályos ötszög, hatszög stb. mindig hasonló egymáshoz, függetlenül a méretüktől.

## Az aranymetszés mint hasonlósági arány

A hasonlóság egyik nevezetes, esztétikai szempontból is fontos speciális esete az **aranymetszés**: egy szakaszt aranymetszés szerint osztunk ketté, ha a nagyobb rész úgy aránylik a kisebb részhez, mint az egész szakasz a nagyobb részhez. Ez az arány egy irracionális szám, körülbelül 1,618, és számos művészeti, építészeti alkotásban (pl. az ókori görög templomok arányrendszerében) megjelenik — a hozzá tartozó téglalapok (aranymetszés-arányú téglalapok) önmagukhoz hasonló téglalapokra bonthatók.

## A hasonlóság és a Thálész-tétel kapcsolata

A hasonlóság elmélete szorosan összefügg a **Thálész-tétellel (párhuzamos szelők tételének megfordításával)** is: ha egy egyenes egy háromszög két oldalát úgy metszi, hogy a harmadik oldallal párhuzamos, a levágott kis háromszög hasonló az eredeti háromszöghöz (AA-hasonlóság, hiszen a metsző egyenes és az oldal által bezárt szögek — mint párhuzamos szárú szögek — megegyeznek, a csúcsnál lévő szög pedig közös). Ez az összefüggés a hasonlósági transzformáció egyik legfontosabb bizonyítási eszköze, és sok klasszikus geometriai tétel (pl. a súlyvonalak harmadolópontja, a magasságpont tulajdonságai, a középvonal tétele) igazolásában is alapvető, gyakran visszatérő szerepet játszik.

## Középpontos hasonlóság szerkesztése

A **középpontos hasonlóság szerkesztése** során egy O középpontból az alakzat minden P pontjához úgy rendelünk egy P' pontot, hogy az OP' szakasz az OP szakasz λ-szorosa legyen, és P' az OP egyenesen helyezkedjen el (λ előjelétől függő oldalon). Ez a szerkesztési eljárás teszi lehetővé, hogy egy adott alakzathoz tetszőleges méretarányú, azzal hasonló alakzatot rajzoljunk — ezen az elven alapul például a rajzeszközként használt **pantográf** működése is, amely mechanikus szerkezettel valósítja meg a középpontos nagyítást.

## Számpélda: összetett hasonlósági feladat

Egy háromszög oldalai 6 cm, 8 cm és 10 cm (ez egy derékszögű háromszög, hiszen 6²+8²=36+64=100=10²). Egy vele hasonló háromszög kerülete 72 cm. Mivel az eredeti háromszög kerülete 6+8+10=24 cm, a hasonlósági arány 72/24=3, tehát a hasonló háromszög oldalai 18 cm, 24 cm és 30 cm, területe pedig az eredeti háromszög (T=(6·8)/2=24 cm²) területének 3²=9-szerese, azaz 216 cm².

## Gyakorlati alkalmazások: magasság- és távolságszámítás

A hasonlóságot gyakran használjuk **közvetett magasságmérésre**: ha egy tárgy (pl. fa vagy épület) és egy ismert magasságú tárgy (pl. ember) árnyéka ugyanabban a pillanatban keletkezik (a napsugarak párhuzamosak), a két tárgy és árnyékuk hasonló háromszögeket alkot, ezért a magasságok aránya megegyezik az árnyékok arányával. Hasonlóan épül a **térképek, alaprajzok és makettek** léptéke is a hasonlósági arányra: egy 1:25000 léptékű térképen 1 cm a valóságban 25000 cm = 250 méternek felel meg.

## Hasonló sokszögek általános definíciója

Nemcsak háromszögekre, hanem tetszőleges **sokszögekre** is értelmezhető a hasonlóság: két sokszög akkor hasonló, ha megfelelő szögeik páronként egyenlők, és a megfelelő oldalak aránya minden oldalpárra ugyanaz a λ hasonlósági arány. Fontos, hogy — szemben a háromszögekkel, ahol elég a szögek egyenlősége (AA) — általános sokszögeknél mindkét feltételt (szögegyenlőség és oldalarány-egyenlőség) egyszerre kell ellenőrizni, mert pusztán az egyenlő szögek (pl. két téglalap esetén, amelyek minden szöge 90°) nem garantálják a hasonlóságot, ha az oldalak aránya különböző.

## A hasonlóság szerepe a trigonometriában

A derékszögű háromszögek **szögfüggvényeinek (szinusz, koszinusz, tangens)** értelmezése is a hasonlóságon alapul: egy adott hegyesszöghöz tartozó, egymással hasonló derékszögű háromszögekben a megfelelő oldalak aránya (pl. a szöggel szemközti befogó és az átfogó aránya) mindig ugyanaz marad, függetlenül a háromszög méretétől — éppen ez teszi lehetővé, hogy a szögfüggvények értékét egyetlen számmal (a szög nagyságával) jellemezzük, a háromszög konkrét méretétől függetlenül.

## Jelentősége

A hasonlóság és a hasonlósági transzformáció ismerete a középiskolai geometria egyik legszélesebb körben alkalmazott témaköre: a háromszögek nevezetes tételeinek bizonyításától a gyakorlati mérési feladatokon át egészen a térképészetig és a műszaki tervezésig (méretarányos rajzok, makettek) nélkülözhetetlen eszköz, és rendszeresen visszatérő eleme mind a közép-, mind az emelt szintű érettségi feladatsoroknak, akár önálló, önmagában álló feladatként, akár egy összetettebb geometriai bizonyítás egyik közbülső lépéseként.
`,
    key_concepts: [
      "hasonlósági transzformáció és a hasonlósági arány (λ)",
      "háromszögek hasonlóságának alapesetei (AA, SSS, SAS)",
      "hasonló alakzatok: kerület aránya λ, terület aránya λ²",
      "hasonló testek térfogatának aránya λ³",
      "párhuzamos szelők tétele és gyakorlati alkalmazásai",
    ],
    source_refs: [
      { label: "A hasonlósági transzformáció (zanza.tv)", url: "https://zanza.tv/matematika/geometria/hasonlosagi-transzformacio" },
      { label: "Egybevágó és hasonló alakzatok (zanza.tv)", url: "https://zanza.tv/matematika/geometria/egybevago-es-hasonlo-alakzatok" },
      { label: "Hasonlóság (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Hasonl%C3%B3s%C3%A1g" },
      { label: "A hasonlóság és alkalmazásai háromszögekre vonatkozó tételek bizonyításában (Érettségi tételek)", url: "https://erettsegitetelek.com/2020/12/a-hasonlosag-es-alkalmazasai-haromszogekre-vonatkozo-tetelek-bizonyitasaban/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk hasonlósági transzformációnak?",
        options: [
          "egy középpontos nagyítás-kicsinyítés és egy egybevágósági transzformáció összetételét",
          "csak egy eltolást",
          "csak egy tükrözést",
          "egy tetszőleges görbe transzformációt"
        ],
        correct_answer: "egy középpontos nagyítás-kicsinyítés és egy egybevágósági transzformáció összetételét",
        explanation: "A hasonlósági transzformáció egy középpontos nagyítás-kicsinyítés és egy egybevágósági transzformáció (eltolás, elforgatás, tükrözés) összetétele.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki a hasonlósági arány (λ)?",
        options: [
          "azt a számot, ahányszorosára a hasonlósági transzformáció a szakaszok hosszát változtatja",
          "a szögek nagyságát",
          "a kerület és a terület hányadosát",
          "mindig 1-et jelent"
        ],
        correct_answer: "azt a számot, ahányszorosára a hasonlósági transzformáció a szakaszok hosszát változtatja",
        explanation: "A hasonlósági arány (λ) az a szám, amellyel a hasonlósági transzformáció minden szakasz hosszát megszorozza.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két hasonló háromszög hasonlósági aránya 3. A kisebb háromszög egyik oldala 4 cm. Mekkora a megfelelő oldal a nagyobb háromszögben?",
        options: ["12 cm", "7 cm", "4/3 cm", "9 cm"],
        correct_answer: "12 cm",
        explanation: "Hasonló alakzatok megfelelő oldalainak aránya a hasonlósági arány, tehát 4 cm · 3 = 12 cm.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha két hasonló síkidom hasonlósági aránya 2, hányszorosára nő a terület?",
        options: ["4-szeresére", "2-szeresére", "8-szorosára", "nem változik"],
        correct_answer: "4-szeresére",
        explanation: "A területek aránya a hasonlósági arány négyzete: 2² = 4.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha két hasonló test hasonlósági aránya 3, hányszorosára nő a térfogat?",
        options: ["27-szeresére", "9-szeresére", "3-szorosára", "6-szorosára"],
        correct_answer: "27-szeresére",
        explanation: "A térfogatok aránya a hasonlósági arány köbe: 3³ = 27.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik hasonlósági alapesetről van szó: két háromszög két-két oldalának aránya egyenlő, és a közbezárt szögek is egyenlők?",
        options: ["SAS (oldal-szög-oldal) hasonlóság", "AA (szög-szög) hasonlóság", "SSS (oldal-oldal-oldal) hasonlóság", "nincs ilyen hasonlósági alapeset"],
        correct_answer: "SAS (oldal-szög-oldal) hasonlóság",
        explanation: "Ha két oldal aránya és a közbezárt szög egyenlő, az az SAS (oldal-szög-oldal) hasonlósági alapeset.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két hasonló háromszög területe 16 cm² és 144 cm². Mekkora a hasonlósági arányuk?",
        options: ["3", "9", "4", "2"],
        correct_answer: "3",
        explanation: "A területek aránya 144/16 = 9, a hasonlósági arány ennek négyzetgyöke: √9 = 3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy makett 1:50 arányú kicsinyítés. Ha a valódi épület magassága 20 méter, milyen magas a makett?",
        options: ["40 cm", "50 cm", "4 cm", "2 méter"],
        correct_answer: "40 cm",
        explanation: "20 m / 50 = 0,4 m = 40 cm.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor hasonló két háromszög az AA (szög-szög) hasonlósági alapeset szerint?",
        options: [
          "ha két-két szögük páronként egyenlő",
          "ha egy szögük egyenlő",
          "ha minden oldaluk egyenlő",
          "ha területük megegyezik"
        ],
        correct_answer: "ha két-két szögük páronként egyenlő",
        explanation: "Ha két háromszög két-két szöge páronként egyenlő, a harmadik szögpár is szükségképpen egyenlő (a szögösszeg 180°), tehát a háromszögek hasonlók.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy háromszög oldalai 3, 4 és 5 cm. Egy hozzá hasonló háromszög legkisebb oldala 9 cm. Mekkorák a hasonló háromszög többi oldala?",
        options: ["12 cm és 15 cm", "13 cm és 16 cm", "8 cm és 10 cm", "18 cm és 20 cm"],
        correct_answer: "12 cm és 15 cm",
        explanation: "A hasonlósági arány 9/3 = 3, tehát a másik két oldal 4·3=12 cm és 5·3=15 cm.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hasonló síkidomok esetén hogyan viszonyul a kerületek aránya a hasonlósági aránymoz?",
        options: [
          "megegyezik a hasonlósági aránnyal",
          "a hasonlósági arány négyzete",
          "a hasonlósági arány köbe",
          "mindig 1"
        ],
        correct_answer: "megegyezik a hasonlósági aránnyal",
        explanation: "A kerület (mint hosszúság jellegű mennyiség) aránya megegyezik a hasonlósági aránnyal, nem annak négyzetével vagy köbével.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Két hasonló test térfogata 8 cm³ és 216 cm³. Mekkora a hasonlósági arányuk?",
        options: ["3", "27", "6", "2"],
        correct_answer: "3",
        explanation: "A térfogatok aránya 216/8 = 27, a hasonlósági arány ennek köbgyöke: ³√27 = 3.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy fa árnyéka 12 méter, egy ugyanakkor mért, 1,5 méter magas ember árnyéka 2 méter. Milyen magas a fa?",
        options: ["9 méter", "8 méter", "16 méter", "10 méter"],
        correct_answer: "9 méter",
        explanation: "A fa és az ember (valamint árnyékaik) hasonló háromszögeket alkotnak: fa magassága / 12 = 1,5 / 2, tehát a fa magassága = 12·1,5/2 = 9 méter.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik egy alakzattal, ha λ = -2 aránnyal középpontosan hasonlóvá alakítjuk?",
        options: [
          "mérete kétszeresére nő, és a középpontra nézve az ellentétes oldalra kerül (körüljárása megfordul)",
          "mérete a felére csökken",
          "mérete nem változik, csak eltolódik",
          "a mérete kétszeresére nő, de helyzete nem változik"
        ],
        correct_answer: "mérete kétszeresére nő, és a középpontra nézve az ellentétes oldalra kerül (körüljárása megfordul)",
        explanation: "Negatív hasonlósági arány esetén a kép mérete |λ|-szorosára változik, de a középpontra nézve az ellentétes oldalra kerül, ami a körüljárási irányt is megfordítja.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik tulajdonságot NEM tartja meg feltétlenül a hasonlósági transzformáció (λ ≠ 1 esetén)?",
        options: [
          "a szakaszok hosszát",
          "a szögek nagyságát",
          "az egyenesekhez tartozó egyenes voltot",
          "az alakzat alakját"
        ],
        correct_answer: "a szakaszok hosszát",
        explanation: "A hasonlósági transzformáció szögtartó és egyenestartó, de a szakaszok hosszát a hasonlósági arány szorosára változtatja, tehát nem hossztartó (kivéve λ=1 esetén).",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "abszolutertekes-egyenletek-es-egyenlotlensegek",
    title: "Abszolútértékes egyenletek és egyenlőtlenségek",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 27,
    summary_markdown:
      "Az abszolútérték egy szám számegyenesen mért, előjel nélküli távolságát fejezi ki a nullától; az abszolútértékes egyenletek és egyenlőtlenségek megoldása jellemzően esetszétválasztással vagy a geometriai (távolság-) szemlélet segítségével történik.",
    content_markdown: `
## Az abszolútérték fogalma

Egy x valós szám **abszolútértéke (|x|)** a szám számegyenesen mért, nullától vett **távolsága**, tehát mindig nemnegatív: |x| = x, ha x ≥ 0, és |x| = -x, ha x < 0. Például |7| = 7, |-7| = 7, |0| = 0. Általánosabban, |a - b| az a és b számok **egymástól mért távolságát** fejezi ki a számegyenesen.

## Az |x| = a alakú egyenlet

Az **|x| = a** alakú egyenlet megoldása attól függ, milyen előjelű a: ha **a < 0**, az egyenletnek **nincs megoldása** (hiszen az abszolútérték nem lehet negatív); ha **a = 0**, az egyetlen megoldás x = 0; ha **a > 0**, két megoldás van: **x = a vagy x = -a**. Például |x| = 5 esetén x = 5 vagy x = -5.

## Az |x - b| = a alak és a geometriai jelentés

Az **|x - b| = a** (a ≥ 0) alakú egyenlet azokat az x pontokat keresi, amelyek a b ponttól pontosan a távolságra vannak: **x = b + a vagy x = b - a**. Például |x - 3| = 5 esetén x = 3 + 5 = 8 vagy x = 3 - 5 = -2. Összetettebb esetben, pl. |2x + 1| = 7, az abszolútérték alatti kifejezést tesszük egyenlővé ±7-tel: 2x + 1 = 7, ahonnan x = 3, illetve 2x + 1 = -7, ahonnan x = -4.

## Két abszolútértékes kifejezés egyenlősége

Az **|x - a| = |x - b|** alakú egyenlet azokat a pontokat keresi, amelyek egyenlő távolságra vannak a és b-től — ez geometriailag az a és b felezőpontja, tehát x = (a+b)/2. Ha az abszolútérték alatt bonyolultabb kifejezések állnak, esetszétválasztással (az abszolútérték előjelének vizsgálatával az egyes intervallumokon) oldjuk meg az egyenletet.

## Abszolútértékes egyenlőtlenségek: |x| < a és |x| > a

Az abszolútértékes egyenlőtlenségek megoldása is a **geometriai (távolság-) szemléletre** épül. Az **|x| < a** (a > 0) egyenlőtlenség azokat a pontokat írja le, amelyek 0-tól a-nál kisebb távolságra vannak: **-a < x < a**. Az **|x| > a** (a > 0) egyenlőtlenség ennek ellentettje: azok a pontok, amelyek a-nál nagyobb távolságra vannak 0-tól: **x < -a vagy x > a**.

## Eltolt abszolútértékes egyenlőtlenségek

Az **|x - b| < a** egyenlőtlenség megoldáshalmaza a b középpontú, a sugarú intervallum: **b - a < x < b + a**. Például |x - 2| ≤ 3 esetén -1 ≤ x ≤ 5. Az **|x - b| > a** egyenlőtlenség megoldáshalmaza ennek komplementere: **x < b - a vagy x > b + a**. Például |3x - 6| > 9 esetén 3x - 6 > 9 (azaz x > 5) vagy 3x - 6 < -9 (azaz x < -1).

## Az abszolútérték-függvény grafikonja

Az f(x) = |x| **abszolútérték-függvény** grafikonja egy origó csúcsú, felfelé nyíló "V" alakú törtvonal, amely az y-tengelyre (páros függvényként) szimmetrikus. Az abszolútértékes egyenletek és egyenlőtlenségek grafikusan is megoldhatók: az |x| = a egyenlet megoldásai az y = |x| és y = a (vízszintes egyenes) grafikonjainak metszéspontjai, az egyenlőtlenségek megoldásai pedig azok az x-értékek, ahol az egyik grafikon a másik alatt vagy fölött halad. Az y = |x - b| + c alakú függvények grafikonja az alapfüggvény b-vel vízszintesen, c-vel függőlegesen eltolt képe, aminek csúcspontja a (b,c) pont.

## Az abszolútérték azonosságai

Az abszolútértékre több fontos **azonosság** is érvényes, amelyeket a bonyolultabb kifejezések egyszerűsítésénél használunk: **|a·b| = |a|·|b|** (szorzat abszolútértéke a tényezők abszolútértékének szorzata), **|a/b| = |a|/|b|** (b ≠ 0 esetén), valamint a **háromszög-egyenlőtlenség**: **|a+b| ≤ |a| + |b|**, amely szerint két szám összegének abszolútértéke sosem nagyobb a két abszolútérték összegénél (egyenlőség pontosan akkor áll fenn, ha a és b azonos előjelű, vagy valamelyikük nulla).

## Esetszétválasztás bonyolultabb kifejezéseknél

Ha egy egyenletben vagy egyenlőtlenségben **kétféle abszolútértékes kifejezés** szerepel (pl. |x-1| + |x-4| = 7), a megoldást célszerű **esetszétválasztással** végezni: a számegyenest a kritikus pontok (itt x=1 és x=4) mentén három részre osztjuk (x<1; 1≤x<4; x≥4), és mindegyik részintervallumon az abszolútértékek előjelét figyelembe véve, abszolútérték-jel nélküli (egyszerű, elsőfokú) egyenletet oldunk meg, majd ellenőrizzük, hogy a kapott megoldás valóban az adott intervallumba esik-e. Ilyen feladatoknál a végeredmény gyakran egy teljes intervallum, nem csak véges sok szám.

## A négyzetgyök és az abszolútérték kapcsolata

Fontos, gyakran alábecsült összefüggés, hogy **√(x²) = |x|**, és **nem** egyenlő x-szel — ez a tévedés az egyik leggyakoribb hiba abszolútértékes feladatok négyzetgyökvonással történő megoldásánál. Ez az összefüggés azért is fontos, mert lehetővé teszi, hogy bizonyos abszolútértékes egyenleteket négyzetre emeléssel (majd a kapott egyenlet gyökvonásával) is megoldjunk: az |A| = |B| alakú egyenlet ekvivalens az A² = B² egyenlettel, hiszen mindkét oldal négyzetre emelése (A² = B² ⟺ (A-B)(A+B) = 0 ⟺ A = B vagy A = -B) pontosan az abszolútértékes eset szétválasztását adja vissza.

## Abszolútértékes egyenlőtlenség másodfokú egyenlőtlenségként

Az |kifejezés| ≤ a (a ≥ 0) alakú egyenlőtlenség a fenti azonosság alapján átírható **(kifejezés)² ≤ a²** másodfokú egyenlőtlenséggé is, amelyet a másodfokú egyenlőtlenségek szokásos módszerével (a hozzá tartozó másodfokú egyenlet gyökeinek meghatározásával, majd a parabola előjelének vizsgálatával) oldhatunk meg. Ez a megközelítés különösen hasznos, ha a feladatban egyszerre több abszolútértékes és nem abszolútértékes tag is szerepel.

## Abszolútérték a számelméletben és a becslésekben

Az abszolútérték fogalma nem csak egyenletek és egyenlőtlenségek megoldásában hasznos: a matematika számos területén (pl. a **hibabecslésben**, a **sorozatok konvergenciájának** vizsgálatában, vagy a **numerikus közelítő módszerekben**) az abszolútérték segítségével fejezzük ki, hogy két mennyiség "mennyire van közel" egymáshoz, függetlenül attól, hogy melyik a nagyobb. Ez a szemlélet áll a matematikai analízis olyan alapfogalmainak hátterében is, mint a határérték vagy a folytonosság pontos, egzakt definíciója, amelyekben szintén abszolútértékes egyenlőtlenségek (pl. |f(x) - L| < ε) jelennek meg, jól mutatva, hogy a középiskolában tanult egyszerű esetszétválasztásos technika a felsőbb matematikában is alapvető marad.

## Abszolútérték másodfokú kifejezés alatt

Az esetszétválasztásos módszer másodfokú kifejezést tartalmazó abszolútértékes egyenleteknél is alkalmazható. Például az |x² - 4| = 5 egyenletnél két esetet vizsgálunk: ha x² - 4 ≥ 0, az egyenlet x² - 4 = 5, azaz x² = 9, tehát x = 3 vagy x = -3 (mindkettő teljesíti az x² - 4 ≥ 0 feltételt, hiszen 9-4=5≥0); ha x² - 4 < 0, az egyenlet -(x² - 4) = 5, azaz x² = -1, aminek nincs valós megoldása. Az egyenlet tehát két megoldással rendelkezik: x = 3 és x = -3.

## Gyakori hibák

Az abszolútértékes egyenletek megoldásánál gyakori hiba, hogy elfelejtjük megvizsgálni az **a < 0 esetet** (amikor az egyenletnek nincs megoldása), vagy hogy **egyenlőtlenségnél felcseréljük** a "kisebb, mint" (metszet jellegű, egy intervallum) és a "nagyobb, mint" (unió jellegű, két külön félegyenes) eseteket. Fontos megjegyezni, hogy az |kifejezés| < a (a>0) mindig egyetlen (korlátos) intervallumot ad, míg az |kifejezés| > a (a>0) mindig két, egymástól diszjunkt félegyenes uniójaként írható fel.

## Gyakorlati alkalmazások

Az abszolútérték és a hozzá kapcsolódó egyenlőtlenségek fontos szerepet játszanak a **mérési hibák és tűréshatárok** leírásában (pl. "a mérési hiba legfeljebb 0,5 egység", ami |mért érték - valódi érték| ≤ 0,5 alakban írható fel), valamint a **távolság alapú feltételek** (pl. egy adott ponttól meghatározott távolságon belüli tartomány) matematikai megfogalmazásában.

## Jelentősége

Az abszolútértékes egyenletek és egyenlőtlenségek megoldási technikáinak (esetszétválasztás, geometriai szemlélet, grafikus megközelítés) ismerete alapvető algebrai készség, amely szorosan kapcsolódik a függvénytanhoz és a számegyenesen való gondolkodáshoz, és számos alkalmazott (mérési, statisztikai) probléma megfogalmazásának is eszköze — ezért az érettségi vizsgák rendszeresen tartalmaznak ilyen típusú feladatokat.
`,
    key_concepts: [
      "abszolútérték: |x| ≥ 0, a nullától mért távolság",
      "|x| = a megoldása: x = a vagy x = -a (a ≥ 0 esetén)",
      "|x - b| = a geometriai jelentése: távolság b-től",
      "|x| < a ⟺ -a < x < a; |x| > a ⟺ x < -a vagy x > a",
      "esetszétválasztás és grafikus megközelítés",
    ],
    source_refs: [
      { label: "Abszolútértéket tartalmazó egyenletek (zanza.tv)", url: "https://zanza.tv/matematika/szamtan-algebra/abszoluterteket-tartalmazo-egyenletek" },
      { label: "Abszolútérték (Mateking képletgyűjtemény)", url: "https://www.mateking.hu/matematika-kepletgyujtemeny/abszolutertek" },
      { label: "Abszolútérték-függvény (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Abszol%C3%BAt%C3%A9rt%C3%A9k-f%C3%BCggv%C3%A9ny" },
      { label: "Ábrázoljuk és jellemezzük az abszolútérték függvényt! (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/abszolutertek_fuggveny/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az abszolútérték geometriai jelentése?",
        options: [
          "a szám számegyenesen mért, nullától vett távolsága",
          "a szám négyzete",
          "a szám reciproka",
          "a szám kerekített értéke"
        ],
        correct_answer: "a szám számegyenesen mért, nullától vett távolsága",
        explanation: "Az abszolútérték a szám nullától mért, mindig nemnegatív távolságát fejezi ki a számegyenesen.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi |-7| értéke?",
        options: ["7", "-7", "0", "14"],
        correct_answer: "7",
        explanation: "Az abszolútérték mindig nemnegatív, |-7| = 7.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |x| = 5.",
        options: ["x = 5 vagy x = -5", "x = 5 csak", "x = -5 csak", "nincs megoldás"],
        correct_answer: "x = 5 vagy x = -5",
        explanation: "Az |x| = a (a>0) egyenlet két megoldása x = a és x = -a, tehát x = 5 vagy x = -5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |x - 3| = 5.",
        options: ["x = 8 vagy x = -2", "x = 8 vagy x = 2", "x = -8 vagy x = 2", "x = 5 vagy x = -5"],
        correct_answer: "x = 8 vagy x = -2",
        explanation: "|x-3|=5 azt jelenti, hogy x-3 = 5 (x=8) vagy x-3 = -5 (x=-2).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |2x + 1| = 7.",
        options: ["x = 3 vagy x = -4", "x = 4 vagy x = -3", "x = 3 vagy x = 4", "x = -3 vagy x = -4"],
        correct_answer: "x = 3 vagy x = -4",
        explanation: "2x+1 = 7 esetén x = 3; 2x+1 = -7 esetén x = -4.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány megoldása van az |x| = -3 egyenletnek?",
        options: ["nincs megoldása", "egy megoldása van", "két megoldása van", "végtelen sok megoldása van"],
        correct_answer: "nincs megoldása",
        explanation: "Az abszolútérték nem lehet negatív, ezért az |x| = -3 egyenletnek nincs valós megoldása.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |x| < 4.",
        options: ["-4 < x < 4", "x < 4", "x > -4", "x < -4 vagy x > 4"],
        correct_answer: "-4 < x < 4",
        explanation: "Az |x| < a (a>0) egyenlőtlenség megoldása -a < x < a, tehát -4 < x < 4.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |x - 2| ≤ 3.",
        options: ["-1 ≤ x ≤ 5", "-1 ≤ x ≤ 3", "-5 ≤ x ≤ 1", "2 ≤ x ≤ 5"],
        correct_answer: "-1 ≤ x ≤ 5",
        explanation: "|x-2| ≤ 3 azt jelenti, hogy -3 ≤ x-2 ≤ 3, azaz -1 ≤ x ≤ 5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |x| > 6.",
        options: ["x < -6 vagy x > 6", "-6 < x < 6", "x > 6", "x < -6"],
        correct_answer: "x < -6 vagy x > 6",
        explanation: "Az |x| > a (a>0) egyenlőtlenség megoldása x < -a vagy x > a, tehát x < -6 vagy x > 6.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |3x - 6| > 9.",
        options: ["x < -1 vagy x > 5", "-1 < x < 5", "x > 5", "x < -1"],
        correct_answer: "x < -1 vagy x > 5",
        explanation: "3x-6 > 9 esetén x > 5; 3x-6 < -9 esetén x < -1.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki geometriailag |x - b|?",
        options: [
          "az x és b pontok távolságát a számegyenesen",
          "a b pont abszolútértékét",
          "az x pont négyzetét",
          "mindig nullát"
        ],
        correct_answer: "az x és b pontok távolságát a számegyenesen",
        explanation: "|x - b| az x és b pontok egymástól mért távolságát jelenti a számegyenesen.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |x + 4| = 0.",
        options: ["x = -4 (egyetlen megoldás)", "x = 4 (egyetlen megoldás)", "x = -4 vagy x = 4", "nincs megoldás"],
        correct_answer: "x = -4 (egyetlen megoldás)",
        explanation: "Az |kifejezés| = 0 egyenletnek pontosan egy megoldása van, ahol a kifejezés nulla: x + 4 = 0, tehát x = -4.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |x - 1| = |x - 5|.",
        options: ["x = 3", "x = 2", "x = 4", "x = 6"],
        correct_answer: "x = 3",
        explanation: "Az egyenlet azokat a pontokat keresi, amelyek egyenlő távolságra vannak 1-től és 5-től, ez a felezőpont: x = (1+5)/2 = 3.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen alakú az y = |x| függvény grafikonja?",
        options: [
          "origó csúcsú, felfelé nyíló \"V\" alakú, az y-tengelyre szimmetrikus törtvonal",
          "parabola",
          "egyenes",
          "hiperbola"
        ],
        correct_answer: "origó csúcsú, felfelé nyíló \"V\" alakú, az y-tengelyre szimmetrikus törtvonal",
        explanation: "Az abszolútérték-függvény grafikonja egy origó csúcsú V alakú törtvonal, amely páros függvényként szimmetrikus az y-tengelyre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: |2x - 3| ≤ 5.",
        options: ["-1 ≤ x ≤ 4", "-1 ≤ x ≤ 5", "-4 ≤ x ≤ 1", "1 ≤ x ≤ 4"],
        correct_answer: "-1 ≤ x ≤ 4",
        explanation: "|2x-3| ≤ 5 azt jelenti, hogy -5 ≤ 2x-3 ≤ 5, azaz -2 ≤ 2x ≤ 8, tehát -1 ≤ x ≤ 4.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kup-gula-es-csonkakup-felszine-es-terfogata",
    title: "Kúp, gúla és csonkakúp felszíne és térfogata",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 28,
    summary_markdown:
      "A kúp és a gúla térfogata az alapterület és a magasság szorzatának harmada, felszínük az alaplap és a palást összege; ha e testeket az alappal párhuzamos síkkal elmetsszük, csonkakúpot vagy csonkagúlát kapunk, amelyek térfogat- és felszínképlete a két alap adataiból számítható.",
    content_markdown: `
## A kúp fogalma és jellemzői

A **kúp** egy olyan test, amelyet egy körlap (az **alapkör**, sugara r) és egy, a körvonal síkján kívül fekvő csúcspont (a **csúcs**) határoz meg: a testet a csúcsból az alapkör minden pontjába húzott szakaszok (alkotók) alkotják. **Egyenes kúp** esetén a csúcs merőlegesen az alapkör középpontja fölött helyezkedik el; ekkor a **magasság (m)**, az **alkotó (a)** és az alapkör **sugara (r)** egy derékszögű háromszöget alkotnak, amelyre a Pitagorasz-tétel érvényes: **a² = r² + m²**.

## A kúp térfogata és felszíne

A kúp **térfogata**: **V = (1/3) · r² · π · m**, vagyis az alapkör területének és a magasságnak a szorzatának harmada. A kúp **felszíne** az alapkör területéből és a **palást** (a kiterített oldalfelület, amely egy körcikk) területéből tevődik össze: **A = r²π + rπa = rπ(r + a)**.

## A gúla fogalma és jellemzői

A **gúla** egy sokszög alapú test, amelynek csúcsai a sokszög (az **alaplap**) minden csúcsát egy közös, az alaplap síkján kívül fekvő ponttal (a **csúcs**) kötik össze. A gúla oldallapjai háromszögek. **Szabályos gúla** esetén az alaplap szabályos sokszög, és a csúcs merőlegesen az alaplap középpontja fölött van.

## A gúla térfogata és felszíne

A gúla **térfogata**: **V = (1/3) · T · m**, ahol T az alaplap területe, m a gúla magassága — ez a képlet minden gúlára érvényes, alakjától függetlenül (Cavalieri elve alapján). A gúla **felszíne** az alaplap területéből és az oldallapok (háromszögek) területének összegéből (a **palástból**) áll: **A = T + palást**.

## A csonkakúp

Ha egy kúpot az alapjával **párhuzamos síkkal elmetszünk**, és a csúcs felőli (kisebb) részt elhagyjuk, a megmaradó testet **csonkakúpnak** nevezzük. A csonkakúpnak két, párhuzamos köralapja van: az alsó (nagyobb, sugara R) és a felső (kisebb, sugara r), valamint magassága (m) és alkotója (a), amelyre **a² = (R - r)² + m²**.

## A csonkakúp térfogata és felszíne

A csonkakúp **térfogata**: **V = (m · π / 3) · (R² + R·r + r²)**. A csonkakúp **felszíne** a két alapkör területéből és a palástból (amely egy körgyűrűcikk) áll: **A = R²π + r²π + (R + r)·π·a**.

## A csonkagúla

Hasonlóan, ha egy gúlát az alapjával párhuzamos síkkal elmetszünk, **csonkagúlát** kapunk, amelynek két, egymáshoz hasonló sokszög alapja van (alsó alapterület T, felső alapterület t). A csonkagúla **térfogata**: **V = (m/3) · (T + √(T·t) + t)**, ahol m a csonkagúla magassága. A csonkagúla felszíne a két alapterület és az oldallapok (trapézok) területének összege.

## Forgástest: a kúp mint speciális gúla

A kúp és a gúla rokon fogalmak: mindkettő egy síkidomból (alaplapból) és egy azon kívül fekvő csúcspontból építhető fel, csak a kúp alaplapja kör, a gúláé sokszög. Valójában a kúp felfogható úgy is, mint egy szabályos sokszög alapú gúla **határesete**, amikor az alapsokszög oldalainak száma minden határon túl nő, és a sokszög egyre jobban megközelíti a kört — ez az oka annak, hogy a két test térfogatképlete (V = alapterület · magasság / 3) formailag azonos. A kúp emellett egy **forgástest** is: úgy is előállítható, hogy egy derékszögű háromszöget az egyik befogója körül 360°-kal megforgatunk — az átfogó ekkor az alkotót, a másik befogó az alapkör sugarát rajzolja ki.

## A csonkakúp térfogatképletének eredete

A csonkakúp térfogatképlete levezethető úgy, hogy a nagy, R sugarú, teljes kúp térfogatából kivonjuk a "hiányzó", a csúcsnál lévő kis, r sugarú kúp térfogatát. Mivel a kis kúp a naggyal hasonló (az r/R hasonlósági aránnyal), magassága és térfogata is ennek megfelelően, a köbös aránynak megfelelően viszonyul a nagy kúpéhoz — ez a gondolatmenet vezet el a V = (mπ/3)(R² + Rr + r²) képlethez, amely már csak a csonkakúp saját (megmaradt) adataival, a nagy kúp kiegészítő magasságának kiszámítása nélkül fejezhető ki.

## Összetett (kombinált) testek

Az érettségi feladatokban gyakran előfordulnak **összetett testek**, amelyek több alaptest (pl. henger és kúp, vagy hasáb és gúla) összeillesztéséből állnak — például egy jégkrémtölcsér modellezhető egy kúp és egy arra illesztett félgömb összegeként, egy templomtorony pedig egy hasáb és egy rá helyezett gúla (vagy kúp) kombinációjaként. Ilyenkor a teljes test térfogatát az egyes részek térfogatának **összegeként**, a felszínt pedig a külső (látható) felületek összegeként számítjuk ki — ügyelve arra, hogy az összeillesztésnél "eltűnő" (belső, nem látható) lapokat ne vegyük figyelembe a felszínszámításnál.

## A kúp és a henger térfogatának kapcsolata

Szemléletesen jól megjegyezhető összefüggés, hogy egy **azonos alapkörű és azonos magasságú kúp térfogata pontosan a hengerének harmada** (mindkettő térfogatképletében szerepel az r²π szorzat, a kúpnál 1/3-os szorzóval). Ez a tény — amelyet szigorúan Cavalieri elvével vagy integrálszámítással lehet igazolni — segít megjegyezni a kúp és a gúla térfogatképletében szereplő 1/3-os szorzót: mindkét test úgy fogható fel, mint egy hasáb, illetve henger "lecsúcsosodása" egyetlen pontig, ami a térfogatot a harmadára csökkenti.

## Számpélda: csonkagúla felszíne

Egy szabályos négyoldalú csonkagúla alsó alapéle 8 cm, felső alapéle 4 cm, magassága 3 cm. Az alapterületek: T = 8² = 64 cm², t = 4² = 16 cm². Az oldallap (trapéz) magassága (az ún. palástmagasság, m_p) a csonkagúla magasságából és az alapélek féloldal-különbségéből Pitagorasz-tétellel számítható: az alapélek különbségének fele (8-4)/2 = 2 cm, ezért m_p = √(3² + 2²) = √13 cm. A négy oldallap (egyenlő szárú trapéz) területének összege ((8+4)/2)·√13·4 = 24√13 cm², a teljes felszín pedig A = T + t + 24√13 = 64 + 16 + 24√13 = 80 + 24√13 cm² (≈ 166,5 cm²).

## Történelmi és mérnöki vonatkozások

A gúla térfogatképletének ismerete már az **ókori Egyiptomban** is megjelent (a Moszkvai papirusz egy csonkagúla térfogatának helyes kiszámítását tartalmazza, amely a piramisépítés gyakorlati igényéből fakadhatott), a kúpra és a csonkakúpra vonatkozó pontos térfogatképletet pedig már az ókori görög matematikusok (Eudoxosz, majd Arkhimédész) vezették le a kimerítés (exhaustiós) módszerrel — ez a klasszikus geometria egyik legkorábbi, a mai integrálszámítás gondolatát előlegező eredménye.

## Mértékegységek és gyakori tévesztések

Térfogat- és felszínszámításnál kiemelten fontos a **mértékegységek pontos kezelése**: ha a hosszúságot centiméterben adjuk meg, a felszín cm²-ben, a térfogat pedig cm³-ben értendő, és minden adatot azonos mértékegységre kell átváltani a számolás előtt. Gyakori hiba, hogy a gúla **oldalélét** (a csúcsot az alaplap egy csúcsával összekötő szakaszt) összekeverik a szabályos gúla **oldallap-magasságával (apotémájával)**, amelyek csak szabályos, speciális esetekben esnek egybe egyszerű összefüggés szerint; ezek gondos megkülönböztetése elengedhetetlen a felszín helyes kiszámításához.

## Gyakorlati alkalmazások

A kúp, a gúla és e testek csonka változatainak felszín- és térfogatszámítása számos gyakorlati területen alkalmazott: az építészetben (tetőszerkezetek, tornyok), az iparban (tölcsérek, tartályok, közlekedési eszközök alkatrészei), valamint a mindennapi életben (pl. jégkrémtölcsér, lámpaernyő) is előfordul. Fontos megfigyelés, hogy ha egy kúp vagy gúla lineáris méreteit (pl. az alapkör sugarát vagy az alapél hosszát) λ-szorosára növeljük a magasság változatlanul hagyása mellett is, a térfogat a méret négyzetével (r²-tel) arányosan változik, míg ha minden lineáris méretet (a magasságot is) λ-szorosára növeljük, a térfogat λ³-szorosára nő — ez a hasonló testekre vonatkozó általános összefüggés speciális esete.

## Jelentősége

A kúp, a gúla, valamint csonka változataik felszín- és térfogatképleteinek pontos ismerete és alkalmazási készsége a térgeometria egyik legfontosabb, rendszeresen számon kért érettségi témaköre, amely egyszerre igényli a síkgeometriai (Pitagorasz-tétel, körcikk, trapéz) és a térbeli szemléletmódot. A képletek biztos ismerete mellett legalább ilyen fontos az adatok (sugár, magasság, alkotó, alapterület) gondos azonosítása egy-egy feladat szövegéből vagy ábrájáról, hiszen a leggyakoribb hibaforrás nem a képlet elfelejtése, hanem a rossz adat rossz helyre való behelyettesítése — ezt a kockázatot egy jól megrajzolt, méretarányos vázlat, valamint a mértékegységek következetes feltüntetése és a köztes eredmények ellenőrzése jelentősen csökkentheti.
`,
    key_concepts: [
      "kúp térfogata: V=(1/3)r²πm; alkotó: a²=r²+m²",
      "gúla térfogata: V=(1/3)Tm",
      "csonkakúp térfogata: V=(mπ/3)(R²+Rr+r²)",
      "csonkagúla térfogata: V=(m/3)(T+√(Tt)+t)",
      "felszín = alaplap(ok) + palást",
    ],
    source_refs: [
      { label: "Csonka gúla, csonka kúp (zanza.tv)", url: "https://zanza.tv/matematika/geometria/csonka-gula-csonka-kup" },
      { label: "A kúp tulajdonságai (zanza.tv)", url: "https://zanza.tv/matematika/geometria/kup-tulajdonsagai" },
      { label: "Kúp (Wikipédia)", url: "https://hu.wikipedia.org/wiki/K%C3%BAp" },
      { label: "Térgeometria (10,3 pont) (Mateking, középszintű érettségi)", url: "https://www.mateking.hu/kozepszintu-matek-erettsegi/tergeometria-10-3-pont" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a kúp térfogatának képlete?",
        options: ["V = (1/3)·r²·π·m", "V = r²·π·m", "V = 2·r·π·m", "V = (1/2)·r²·π·m"],
        correct_answer: "V = (1/3)·r²·π·m",
        explanation: "A kúp térfogata az alapkör területének és a magasságnak a szorzatának harmada: V = (1/3)·r²·π·m.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan számítható ki az egyenes kúp alkotója (a) az alapkör sugarából (r) és a magasságból (m)?",
        options: ["a = √(r² + m²)", "a = r + m", "a = r · m", "a = √(r² - m²)"],
        correct_answer: "a = √(r² + m²)",
        explanation: "A sugár, a magasság és az alkotó derékszögű háromszöget alkot, ezért a Pitagorasz-tétel szerint a = √(r² + m²).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy kúp alapkörének sugara 3 cm, magassága 4 cm. Mekkora az alkotója?",
        options: ["5 cm", "7 cm", "6 cm", "4,5 cm"],
        correct_answer: "5 cm",
        explanation: "a = √(3² + 4²) = √(9+16) = √25 = 5 cm.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora az előző kúp (r = 3 cm, m = 4 cm) térfogata?",
        options: ["12π cm³", "36π cm³", "9π cm³", "4π cm³"],
        correct_answer: "12π cm³",
        explanation: "V = (1/3)·3²·π·4 = (1/3)·9·π·4 = 12π cm³.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora az előző kúp (r = 3 cm, m = 4 cm, a = 5 cm) felszíne?",
        options: ["24π cm²", "20π cm²", "15π cm²", "8π cm²"],
        correct_answer: "24π cm²",
        explanation: "A = rπ(r+a) = 3π·(3+5) = 3π·8 = 24π cm².",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a gúla térfogatának képlete?",
        options: ["V = (1/3)·T·m", "V = T·m", "V = (1/2)·T·m", "V = 2·T·m"],
        correct_answer: "V = (1/3)·T·m",
        explanation: "A gúla térfogata az alaplap területének és a magasságnak a szorzatának harmada: V = (1/3)·T·m.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy négyzet alapú gúla alapéle 4 cm, magassága 6 cm. Mekkora a térfogata?",
        options: ["32 cm³", "96 cm³", "16 cm³", "48 cm³"],
        correct_answer: "32 cm³",
        explanation: "Az alapterület T = 4² = 16 cm², a térfogat V = (1/3)·16·6 = 32 cm³.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan keletkezik a csonkakúp?",
        options: [
          "egy kúpot az alapjával párhuzamos síkkal elmetszünk, és a csúcs felőli részt elhagyjuk",
          "két kúpot összeragasztunk az alapjuknál",
          "egy hengert kettévágunk",
          "egy gömböt elmetszünk"
        ],
        correct_answer: "egy kúpot az alapjával párhuzamos síkkal elmetszünk, és a csúcs felőli részt elhagyjuk",
        explanation: "A csonkakúp úgy keletkezik, hogy egy kúpot az alapjával párhuzamos síkkal elmetszünk, és a csúcshoz közelebbi kisebb kúpot elhagyjuk.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a csonkakúp térfogatának képlete (R és r a két alapkör sugara, m a magasság)?",
        options: [
          "V = (m·π/3)·(R² + R·r + r²)",
          "V = m·π·(R + r)",
          "V = (m·π/3)·(R² - r²)",
          "V = m·π·(R² + r²)"
        ],
        correct_answer: "V = (m·π/3)·(R² + R·r + r²)",
        explanation: "A csonkakúp térfogata V = (m·π/3)·(R² + R·r + r²), ahol R és r a két alapkör sugara, m a magasság.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy csonkakúp alsó sugara 6 cm, felső sugara 3 cm, magassága 4 cm. Mekkora a térfogata?",
        options: ["84π cm³", "63π cm³", "36π cm³", "108π cm³"],
        correct_answer: "84π cm³",
        explanation: "V = (4π/3)·(6² + 6·3 + 3²) = (4π/3)·(36+18+9) = (4π/3)·63 = 84π cm³.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora az előző csonkakúp (R = 6 cm, r = 3 cm, m = 4 cm) alkotója?",
        options: ["5 cm", "7 cm", "4 cm", "6 cm"],
        correct_answer: "5 cm",
        explanation: "a = √((R-r)² + m²) = √((6-3)² + 4²) = √(9+16) = √25 = 5 cm.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a csonkagúla térfogatának képlete (T és t a két alapterület, m a magasság)?",
        options: [
          "V = (m/3)·(T + √(T·t) + t)",
          "V = m·(T + t)",
          "V = (m/3)·(T - t)",
          "V = (m/2)·(T + t)"
        ],
        correct_answer: "V = (m/3)·(T + √(T·t) + t)",
        explanation: "A csonkagúla térfogata V = (m/3)·(T + √(T·t) + t), ahol T és t a két alapterület, m a magasság.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy csonkagúla alsó alapterülete 36 cm², felső alapterülete 9 cm², magassága 6 cm. Mekkora a térfogata?",
        options: ["126 cm³", "270 cm³", "90 cm³", "63 cm³"],
        correct_answer: "126 cm³",
        explanation: "V = (6/3)·(36 + √(36·9) + 9) = 2·(36 + 18 + 9) = 2·63 = 126 cm³.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ha egy kúp alapkörének sugarát megduplázzuk, de a magasságát változatlanul hagyjuk, hányszorosára nő a térfogata?",
        options: ["4-szeresére", "2-szeresére", "8-szorosára", "nem változik"],
        correct_answer: "4-szeresére",
        explanation: "A térfogat r²-tel arányos, ezért ha r duplájára nő (a magasság változatlan), a térfogat 2²=4-szeresére nő.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a kúp felszínének képlete az alapkör területéből és a palástból összeadva?",
        options: ["A = r²π + rπa", "A = r²π", "A = rπa", "A = 2r²π"],
        correct_answer: "A = r²π + rπa",
        explanation: "A kúp felszíne az alapkör (r²π) és a palást (rπa, egy körcikk területe) összege.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "komplex-szamok-alapjai",
    title: "Komplex számok alapjai",
    level: "emelt",
    theme: "Koordinátageometria és további algebra",
    order_index: 29,
    summary_markdown:
      "A komplex számok a valós számok halmazának olyan bővítései, amelyekben a negatív számokból is vonható négyzetgyök; a z = a + bi algebrai alak és a hozzá kapcsolódó műveletek (összeadás, szorzás, konjugálás) teszik lehetővé, hogy minden másodfokú egyenlet — a valós diszkrimináns előjelétől függetlenül — megoldható legyen.",
    content_markdown: `
## Miért van szükség a komplex számokra

A valós számok halmazán a **negatív számoknak nincs négyzetgyöke** — ezért az x² = -1 típusú egyenleteknek (illetve általánosabban a negatív diszkriminánsú másodfokú egyenleteknek) a valós számok körében nincs megoldásuk. Ennek a hiánynak a kiküszöbölésére vezették be a **komplex számokat**, amelyek a valós számhalmaz bővítéseként lehetővé teszik, hogy minden másodfokú (sőt minden algebrai) egyenletnek legyen megoldása.

## A képzetes egység és a komplex szám algebrai alakja

A **képzetes egységet (i)** úgy definiáljuk, hogy **i² = -1**. Egy **komplex szám** ezután **z = a + bi** alakban írható fel, ahol a és b valós számok: a-t a komplex szám **valós részének** (jelölése Re(z) = a), b-t **képzetes részének** (jelölése Im(z) = b) nevezzük. Ha b = 0, a szám valós; ha a = 0 (és b ≠ 0), **tisztán képzetes számról** beszélünk. A komplex számok halmazát ℂ jelöli, és ℝ ⊂ ℂ, vagyis minden valós szám egyben komplex szám is.

## Műveletek komplex számokkal: összeadás és kivonás

Két komplex szám **összeadásakor és kivonásakor** a valós és a képzetes részeket külön-külön adjuk össze, illetve vonjuk ki egymásból: **(a+bi) + (c+di) = (a+c) + (b+d)i**, illetve **(a+bi) - (c+di) = (a-c) + (b-d)i**. Például (3+2i) + (1-5i) = 4 - 3i.

## Komplex számok szorzása

A **szorzás** a valós számoknál megszokott disztributív szabály szerint történik, felhasználva, hogy i² = -1: **(a+bi)(c+di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i**. Például (2+3i)(1-i) = 2 - 2i + 3i - 3i² = 2 + i + 3 = 5 + i.

## A komplex szám konjugáltja és az osztás

A z = a + bi komplex szám **konjugáltja**: **z̄ = a - bi** (a képzetes rész előjelet vált). Fontos tulajdonság, hogy egy komplex szám és konjugáltjának szorzata mindig **valós** és nemnegatív: **z · z̄ = (a+bi)(a-bi) = a² + b²**. Ez teszi lehetővé a **komplex számokkal való osztást**: a törtet a nevező konjugáltjával bővítjük, hogy a nevező valóssá váljon: (a+bi)/(c+di) = (a+bi)(c-di) / (c²+d²).

## A komplex számsík és az abszolútérték

A komplex számokat egy kétdimenziós koordinátarendszerben, a **komplex számsíkon (Gauss-síkon)** ábrázoljuk: a vízszintes tengely a valós részt (**valós tengely**), a függőleges tengely a képzetes részt (**képzetes tengely**) mutatja, a z = a+bi számnak megfelelő pont koordinátái (a,b). A z komplex szám **abszolútértéke** az origótól mért távolsága, a Pitagorasz-tétel alapján: **|z| = √(a² + b²)**. Például |3+4i| = √(9+16) = √25 = 5.

## A trigonometrikus alak

Minden z komplex szám felírható **trigonometrikus alakban** is: **z = r·(cos φ + i·sin φ)**, ahol r = |z| a szám abszolútértéke, φ pedig a valós tengely pozitív irányával bezárt szög (**argumentum**). Ez az alak különösen praktikus szorzás, osztás és hatványozás (Moivre-képlet) elvégzésekor.

## Másodfokú egyenletek megoldása a komplex számok körében

Ha egy ax² + bx + c = 0 másodfokú egyenlet **diszkriminánsa negatív** (D < 0), a valós számok körében nincs megoldás, de a komplex számok körében **mindig van két (egymás konjugáltjaként adódó) megoldás**: x = (-b ± i·√|D|) / (2a). Például az x² + 9 = 0 egyenlet esetén x² = -9, tehát x = 3i vagy x = -3i. Az x² - 4x + 13 = 0 egyenletnél D = 16 - 52 = -36, tehát x = (4 ± √(-36))/2 = (4 ± 6i)/2 = 2 ± 3i.

## Történeti háttér

A komplex számok gondolata már a **16. századi olasz algebrában** megjelent: Gerolamo Cardano és Rafael Bombelli a harmadfokú egyenletek megoldóképletének alkalmazása közben szembesültek azzal, hogy a képletben negatív szám négyzetgyöke szerepel, miközben a végeredmény valós szám. Sokáig "képzetes" (nem valóban létező) mennyiségként kezelték ezeket a kifejezéseket — innen ered az "imaginárius" elnevezés is —, és csak a 18–19. században (elsősorban Euler és Gauss munkássága nyomán) vált világossá, hogy a komplex számok éppolyan jogosan léteznek matematikai objektumként, mint a valós számok, csak egy kétdimenziós számsíkon ábrázolhatók.

## Az exponenciális (Euler-) alak

A trigonometrikus alak egy még tömörebb változata az **Euler-formulán** alapuló exponenciális alak: **z = r·e^(iφ)**, ahol e a természetes alapú exponenciális függvény alapja. Az Euler-formula (e^(iφ) = cos φ + i·sin φ) a matematika egyik legszebb, több területet (algebra, analízis, geometria) összekötő összefüggése, és φ = π esetén az e^(iπ) + 1 = 0 alakban az öt legfontosabb matematikai konstanst (0, 1, e, i, π) egyetlen egyenletbe fűzi össze.

## A diszkrimináns előjelének három esete

Összefoglalva, egy valós együtthatós ax² + bx + c = 0 másodfokú egyenlet gyökeinek jellege a diszkrimináns (D = b² - 4ac) előjelétől függ: ha **D > 0**, két különböző valós gyök van; ha **D = 0**, egy (kétszeres) valós gyök van; ha **D < 0**, nincs valós gyök, de a **komplex számok körében két, egymás konjugáltjaként adódó gyök** létezik. Ez a három eset együtt mutatja meg, hogy a komplex számok bevezetésével a másodfokú egyenletek megoldhatósága a diszkrimináns előjelétől függetlenül mindig biztosított.

## Az i hatványainak periodikussága

Az i képzetes egység hatványai **négyes periódussal ismétlődnek**: i¹ = i, i² = -1, i³ = i²·i = -i, i⁴ = i²·i² = (-1)·(-1) = 1, majd i⁵ = i és a ciklus újrakezdődik. Ennek köszönhetően bármely in (n pozitív egész) hatvány gyorsan kiszámítható úgy, hogy n-et elosztjuk 4-gyel, és a maradék alapján az i, -1, -i, 1 értékek közül választunk — például i¹⁰ = i^(4·2+2) = i² = -1.

## Geometriai szemlélet: összeadás és szorzás a komplex számsíkon

A komplex számok műveletei szemléletes **geometriai jelentéssel** is bírnak. Az **összeadás** a komplex számsíkon a vektorösszeadásnak felel meg (a paralelogramma-szabály szerint). A **szorzás** trigonometrikus alakban különösen egyszerűen írható le: két komplex szám szorzatának abszolútértéke a két abszolútérték szorzata, argumentuma (szöge) pedig a két argumentum összege — vagyis a szorzás a komplex számsíkon egy **nyújtást (az abszolútértékek szorzása) és egy elforgatást (az argumentumok összeadása)** valósít meg. Speciálisan, az i-vel való szorzás mindig egy 90°-os elforgatást jelent az origó körül, hiszen |i|=1 és az i argumentuma 90°.

## A Moivre-képlet és a komplex számok hatványozása, gyökvonása

A trigonometrikus alak egyik legfontosabb alkalmazása a **Moivre-képlet**: [r·(cos φ + i·sin φ)]ⁿ = rⁿ·(cos(nφ) + i·sin(nφ)), amely lehetővé teszi komplex számok tetszőleges egész kitevőjű hatványának gyors kiszámítását anélkül, hogy a szorzást ismételten el kellene végezni. A Moivre-képlet megfordításával komplex számok **n-edik gyökei** is meghatározhatók: egy nullától különböző komplex számnak pontosan n darab, egyenlő távolságra (a komplex számsíkon egy szabályos n-szög csúcsaiban) elhelyezkedő n-edik gyöke van.

## Az algebra alaptétele

Carl Friedrich **Gauss** (1777–1855) bizonyította be elsőként szigorúan az **algebra alaptételét**, amely kimondja, hogy minden legalább elsőfokú, komplex együtthatós polinomnak van komplex gyöke — ebből következik, hogy egy n-edfokú polinomegyenletnek a komplex számok körében (a multiplicitásokat is számolva) pontosan n gyöke van. Ez az eredmény zárja le a számfogalom bővítésének folyamatát abban az értelemben, hogy a komplex számok körében már nincs szükség további bővítésre a polinomegyenletek megoldhatóságához.

## Jelentősége és alkalmazásai

A komplex számok bevezetése lezárja a számfogalom bővítésének folyamatát abban az értelemben, hogy a komplex számok körében **minden n-edfokú polinomegyenletnek pontosan n gyöke van** (az algebra alaptétele). A komplex számoknak emelt szintű matematikai jelentőségük mellett kiemelkedő gyakorlati alkalmazásuk is van: a **váltakozó áramú elektrotechnikában** (ahol az ellenállás, az induktivitás és a kapacitás együttes hatása egyetlen komplex mennyiséggel, az impedanciával írható le), a **rezgések és hullámok** (fizika) leírásában, a **jelfeldolgozásban** (pl. a Fourier-transzformáció komplex számokra épül), valamint a modern számítógépes grafikában használt **fraktálok** (pl. a Mandelbrot-halmaz) megalkotásában is nélkülözhetetlen eszközök.
`,
    key_concepts: [
      "képzetes egység: i² = -1",
      "algebrai alak: z = a + bi (valós és képzetes rész)",
      "műveletek: összeadás, kivonás, szorzás, konjugálás (z̄ = a-bi)",
      "abszolútérték: |z| = √(a²+b²), komplex számsík (Gauss-sík)",
      "másodfokú egyenlet negatív diszkriminánssal: komplex gyökök",
    ],
    source_refs: [
      { label: "Mik azok a komplex számok (Mateking)", url: "https://www.mateking.hu/matek-1/komplex-szamok/mik-azok-a-komplex-szamok" },
      { label: "Komplex számok (Mateking, analízis)", url: "https://www.mateking.hu/analizis-1/komplex-szamok" },
      { label: "Komplex számok (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Komplex_sz%C3%A1mok" },
      { label: "Számhalmazok, a valós számok halmaza és részhalmazai (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/szamhalmazok-a-valos-szamok-halmaza-es-reszhalmazai-halmazok-szamossaga/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a képzetes egység (i) definiáló tulajdonsága?",
        options: ["i² = -1", "i² = 1", "i = 0", "i² = 0"],
        correct_answer: "i² = -1",
        explanation: "A képzetes egységet úgy definiáljuk, hogy a négyzete -1: i² = -1.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a z = a + bi komplex szám valós része?",
        options: ["a", "b", "bi", "a+b"],
        correct_answer: "a",
        explanation: "A z = a+bi komplex szám valós része a, jelölése Re(z) = a.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a z = a + bi komplex szám képzetes része?",
        options: ["b", "a", "bi", "-b"],
        correct_answer: "b",
        explanation: "A z = a+bi komplex szám képzetes része b (nem bi), jelölése Im(z) = b.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Add össze: (3 + 2i) + (1 - 5i).",
        options: ["4 - 3i", "4 + 3i", "2 + 7i", "4 - 7i"],
        correct_answer: "4 - 3i",
        explanation: "A valós részeket és a képzetes részeket külön összeadva: (3+1) + (2-5)i = 4 - 3i.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Vond ki: (5 - 3i) - (2 + 4i).",
        options: ["3 - 7i", "3 + 7i", "7 - 7i", "3 - i"],
        correct_answer: "3 - 7i",
        explanation: "(5-2) + (-3-4)i = 3 - 7i.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Szorozd meg: (2 + 3i)(1 - i).",
        options: ["5 + i", "5 - i", "-1 + i", "2 - 3i"],
        correct_answer: "5 + i",
        explanation: "(2+3i)(1-i) = 2 - 2i + 3i - 3i² = 2 + i - 3·(-1) = 2 + i + 3 = 5 + i.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a 4 - 3i komplex szám konjugáltja?",
        options: ["4 + 3i", "-4 - 3i", "4 - 3i", "-4 + 3i"],
        correct_answer: "4 + 3i",
        explanation: "A konjugálás során a képzetes rész előjelet vált: 4 - 3i konjugáltja 4 + 3i.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi |3 + 4i|?",
        options: ["5", "7", "25", "1"],
        correct_answer: "5",
        explanation: "|3+4i| = √(3²+4²) = √(9+16) = √25 = 5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi (3 + 4i)(3 - 4i) szorzat értéke?",
        options: ["25", "-7", "7", "25i"],
        correct_answer: "25",
        explanation: "Egy komplex szám és konjugáltjának szorzata z·z̄ = a²+b² = 3²+4² = 25, ami valós szám.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol ábrázoljuk a komplex számokat?",
        options: [
          "a komplex számsíkon (Gauss-síkon), a valós és képzetes tengely által meghatározott koordináta-rendszerben",
          "kizárólag a számegyenesen",
          "egy háromdimenziós térben",
          "nem ábrázolhatók"
        ],
        correct_answer: "a komplex számsíkon (Gauss-síkon), a valós és képzetes tengely által meghatározott koordináta-rendszerben",
        explanation: "A komplex számokat a komplex számsíkon (Gauss-síkon) ábrázoljuk, ahol a vízszintes tengely a valós, a függőleges a képzetes részt mutatja.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg a valós számok körén megoldhatatlan x² + 9 = 0 egyenletet a komplex számok körében.",
        options: ["x = 3i vagy x = -3i", "x = 3 vagy x = -3", "x = 9i vagy x = -9i", "nincs megoldás"],
        correct_answer: "x = 3i vagy x = -3i",
        explanation: "x² = -9, tehát x = ±√(-9) = ±3i.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Oldd meg: x² - 4x + 13 = 0 a komplex számok halmazán.",
        options: ["x = 2 + 3i vagy x = 2 - 3i", "x = 2 + 9i vagy x = 2 - 9i", "x = 4 + 3i vagy x = 4 - 3i", "x = -2 + 3i vagy x = -2 - 3i"],
        correct_answer: "x = 2 + 3i vagy x = 2 - 3i",
        explanation: "D = 16 - 52 = -36, tehát x = (4 ± √(-36))/2 = (4 ± 6i)/2 = 2 ± 3i.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a z komplex szám trigonometrikus alakja?",
        options: [
          "z = r·(cos φ + i·sin φ), ahol r = |z|",
          "z = r·φ",
          "z = a + bi csak",
          "z = r² · φ"
        ],
        correct_answer: "z = r·(cos φ + i·sin φ), ahol r = |z|",
        explanation: "A trigonometrikus alak z = r·(cos φ + i·sin φ), ahol r a szám abszolútértéke, φ pedig az argumentuma.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mennyi i³ értéke?",
        options: ["-i", "i", "1", "-1"],
        correct_answer: "-i",
        explanation: "i³ = i²·i = (-1)·i = -i.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért volt szükség a komplex számok bevezetésére?",
        options: [
          "mert a valós számok körében nincs megoldása pl. az x² = -1 egyenletnek (negatív szám négyzetgyöke nem értelmezett)",
          "mert a valós számok halmaza véges",
          "mert az összeadás nem értelmezhető valós számokkal",
          "csak történelmi hagyomány, matematikai szükség nem indokolta"
        ],
        correct_answer: "mert a valós számok körében nincs megoldása pl. az x² = -1 egyenletnek (negatív szám négyzetgyöke nem értelmezett)",
        explanation: "A komplex számokat azért vezették be, hogy a negatív diszkriminánsú (a valós számok körében megoldhatatlan) másodfokú egyenleteknek is legyen megoldásuk.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "kozepertekek-atlag-median-modusz-es-kvartilisek",
    title: "Középértékek: átlag, medián, módusz és a kvartilisek",
    level: "mindketto",
    theme: "Koordinátageometria és további algebra",
    order_index: 30,
    summary_markdown:
      "Az átlag, a medián és a módusz az adatsorok jellemzésére szolgáló középértékek, amelyek eltérő módon érzékenyek a kiugró adatokra; a kvartilisek ezt a képet egészítik ki azzal, hogy megmutatják, az adatok hogyan oszlanak el négy egyenlő részre.",
    content_markdown: `
## A számtani átlag

A **számtani átlag** (röviden átlag) egy adatsor legismertebb középértéke: az adatok **összegét elosztjuk a darabszámukkal**. Ha az adatsor n darab adatból áll (x₁, x₂, ..., xₙ), az átlag: **x̄ = (x₁+x₂+...+xₙ) / n**. Az átlag figyelembe veszi az összes adatot, de emiatt **érzékeny a kiugró (extrém) értékekre**: egyetlen nagyon nagy vagy nagyon kicsi adat jelentősen eltolhatja.

## A súlyozott átlag

Ha az adatok különböző **gyakorisággal (súllyal)** fordulnak elő, **súlyozott átlagot** számolunk: az egyes értékeket a hozzájuk tartozó gyakorisággal (súllyal) megszorozzuk, összeadjuk, majd elosztjuk a gyakoriságok összegével. Például ha egy osztályban 10 tanuló kapott 4-es jegyet és 15 tanuló 5-öst, a súlyozott átlag: (10·4 + 15·5) / (10+15) = (40+75)/25 = 115/25 = 4,6.

## A medián fogalma

A **medián** az adatsort — nagyság szerint **sorba rendezve** — pontosan két egyenlő részre osztó érték. **Páratlan elemszám** esetén a medián a rendezett adatsor **középső eleme**; **páros elemszám** esetén a **két középső elem átlaga**. Például a 2, 3, 3, 5, 7, 8, 10 (már rendezett, 7 elemű) adatsor mediánja az (n+1)/2 = 4. elem, azaz 5. A 4, 4, 6, 8 (4 elemű, rendezett) adatsor mediánja a két középső elem (4 és 6) átlaga: (4+6)/2 = 5.

## A módusz fogalma

A **módusz** az adatsorban **leggyakrabban előforduló érték**. Egy adatsornak lehet egy módusza (unimodális), több módusza (multimodális), vagy — ha minden érték egyformán gyakori — egyáltalán nincs módusza. A 2, 3, 3, 5, 7, 8, 10 adatsorban a 3 fordul elő kétszer, minden más érték egyszer, tehát a módusz 3.

## A kvartilisek

A **kvartilisek** az adatsort — nagyság szerint rendezve — **négy egyenlő részre** osztó három érték: az **alsó kvartilis (Q1)** az adatok alsó felének mediánja, a **medián (Q2)** a teljes adatsor mediánja, a **felső kvartilis (Q3)** az adatok felső felének mediánja. Például az 1, 3, 5, 7, 9, 11, 13 (7 elemű) adatsornál a medián (Q2) a 4. elem, azaz 7; az alsó fél (1,3,5) mediánja Q1 = 3; a felső fél (9,11,13) mediánja Q3 = 11.

## Az interkvartilis terjedelem

Az **interkvartilis terjedelem (IQR)** a felső és az alsó kvartilis különbsége: **IQR = Q3 - Q1**. Ez a mérőszám az adatok "középső 50%-ának" szóródását mutatja, és — mivel nem veszi figyelembe a legszélsőségesebb (legkisebb és legnagyobb) adatokat — kevésbé érzékeny a kiugró értékekre, mint a teljes terjedelem (a legnagyobb és legkisebb adat különbsége).

## Osztályba sorolt (csoportosított) adatok átlaga

Nagy adathalmazoknál gyakran **osztályközökbe (kategóriákba)** csoportosítják az adatokat, és csak az egyes osztályok gyakoriságát adják meg. Ilyenkor az átlagot úgy közelítjük, hogy minden osztályt az **osztályközép** (az osztály alsó és felső határának átlaga) reprezentál, és ezekkel az osztályközepekkel számolunk súlyozott átlagot, ahol a súlyok az egyes osztályok gyakoriságai. Ez a becslés annál pontosabb, minél kisebbek (szűkebbek) az osztályközök.

## A relatív gyakoriság és a percentilisek

Az egyes adatok (vagy osztályok) **relatív gyakorisága** az adott érték előfordulási gyakoriságának és az összes adat számának hányadosa, amelyet gyakran százalékban fejezünk ki. A kvartilisek általánosítása a **percentilisek (századrészek)**: a k-adik percentilis az az érték, amely alatt az adatok k százaléka helyezkedik el — eszerint az alsó kvartilis a 25., a medián az 50., a felső kvartilis pedig a 75. percentilissel egyezik meg.

## Az átlag és a medián viszonya ferde eloszlásoknál

Szimmetrikus eloszlású adatsorok esetén az **átlag és a medián közel azonos**. Ha az eloszlás **jobbra elnyúló (jobbra ferde)**, azaz van néhány kiugróan nagy érték (mint a korábbi 1, 2, 2, 2, 100 példában), az átlag jellemzően **nagyobb a mediánnál**, mert az átlagot a nagy értékek felfelé húzzák, míg a medián csak a sorrendre érzékeny. Fordítva, **balra elnyúló** eloszlásnál az átlag jellemzően kisebb a mediánnál. Ez a megfigyelés az egyik leggyakoribb módszer arra, hogy egy adatsor eloszlásának ferdeségéről (aszimmetriájáról) következtetést vonjunk le pusztán a két középérték összehasonlításával.

## Az ötszámos összefoglalás (five-number summary)

Egy adatsor gyors, tömör jellemzésére gyakran az úgynevezett **ötszámos összefoglalást** használjuk: a minimumot, az alsó kvartilist (Q1), a mediánt (Q2), a felső kvartilist (Q3) és a maximumot adjuk meg. Ez az öt érték együtt jó képet ad az adatsor elhelyezkedéséről, szóródásáról és esetleges aszimmetriájáról, és éppen ez az öt érték jelenik meg közvetlenül a dobozábrán is.

## A középértékek összehasonlítása

A három középérték (átlag, medián, módusz) eltérő tulajdonságokkal rendelkezik: az **átlag** minden adatot figyelembe vesz, de erősen érzékeny a kiugró értékekre; a **medián** csak az adatok sorrendjét veszi figyelembe, ezért **kevésbé érzékeny a kiugró értékekre**, és aszimmetrikus eloszlások esetén gyakran jobban jellemzi a "tipikus" adatot; a **módusz** kategorikus (nem numerikus) adatoknál is értelmezhető, de nem minden adatsornak van egyértelmű módusza. Például az 1, 2, 2, 2, 100 adatsor átlaga (1+2+2+2+100)/5 = 107/5 = 21,4, míg mediánja 2 — ez utóbbi sokkal jobban jellemzi az adatsor "tipikus" értékét, mivel az átlagot a 100-as kiugró érték jelentősen eltorzítja.

## A terjedelem mint egyszerű szóródási mutató

A középértékek (átlag, medián, módusz) önmagukban nem mondanak semmit az adatok **szóródásáról**, csak az adatsor "közepét" jellemzik. A legegyszerűbb szóródási mutató a **terjedelem**, amely a legnagyobb és a legkisebb adat különbsége: terjedelem = max - min. A terjedelem könnyen kiszámítható, de — mivel csak a két szélső értéket veszi figyelembe — nagyon érzékeny egyetlen kiugró adatra is; ezért a gyakorlatban gyakran az ennél stabilabb interkvartilis terjedelmet (IQR), illetve a részletesebb szóródást jellemző szórást (amely minden adat átlagtól való eltérését figyelembe veszi) részesítik előnyben.

## Kiugró értékek azonosítása az IQR alapján

A statisztikában elterjedt gyakorlati szabály, hogy egy adatot **kiugró (outlier) értéknek** tekintünk, ha az alsó kvartilisnél az interkvartilis terjedelem 1,5-szeresével többel kisebb, vagy a felső kvartilisnél 1,5-szeresével többel nagyobb — vagyis ha az érték a [Q1 - 1,5·IQR ; Q3 + 1,5·IQR] intervallumon kívül esik. Ez a szabály (más néven a "Tukey-féle kerítés") objektív, számszerű kritériumot ad arra, hogy mikor tekintsünk egy adatot szokatlanul szélsőségesnek, és ez alapozza meg a dobozábrán külön pontként feltüntetett kiugró értékek jelölését is.

## Számpélda: csoportosított adatok átlaga

Egy felmérésben 50 tanuló napi tanulással töltött idejét (órában) mérték, és az eredményeket osztályokba sorolták: 20 tanuló 1-2 óra között, 25 tanuló 2-3 óra között, 5 tanuló 3-4 óra között tanult. Az osztályközepekkel (1,5; 2,5; 3,5 óra) számolt közelítő átlag: (20·1,5 + 25·2,5 + 5·3,5) / 50 = (30 + 62,5 + 17,5) / 50 = 110/50 = 2,2 óra. Ez a becslés annál pontosabb, minél szűkebbek az egyes osztályközök, hiszen az osztályközép csak egy közelítés az adott osztályba eső valódi értékekre.

## A dobozábra (box plot)

A kvartilisek szemléltetésének elterjedt eszköze a **dobozábra (box plot)**: egy téglalap (doboz) mutatja az alsó és felső kvartilis közötti tartományt (a dobozon belül jelölve a mediánt), a dobozból kiinduló "bajuszok" pedig a minimum és maximum (vagy egy adott tartományon belüli szélső) értékekig terjednek. A dobozábra egyetlen áttekintő képen mutatja meg az adatok elhelyezkedését, szóródását és az esetleges kiugró értékeket.

## Jelentősége

Az átlag, a medián, a módusz és a kvartilisek ismerete és helyes alkalmazása a leíró statisztika alapja: ezek a mutatók teszik lehetővé, hogy nagy adathalmazokat néhány jellemző számmal tömören leírjunk, és megalapozott döntéseket hozzunk gazdasági, társadalomtudományi és természettudományos kontextusban egyaránt. Az érettségi feladatokban ezek a mutatók gyakran egy adott adatsorra (pl. osztályzatok, mérési eredmények) vonatkozó több részkérdés formájában jelennek meg, ezért különösen fontos a fogalmak pontos megkülönböztetése és a számítási lépések gondos, ellenőrizhető dokumentálása, beleértve az adatok nagyság szerinti rendezését is, amely a medián és a kvartilisek meghatározásának elengedhetetlen, gyakran figyelmen kívül hagyott első lépése.
`,
    key_concepts: [
      "számtani átlag: az adatok összege osztva a darabszámmal",
      "medián: a rendezett adatsor középső eleme (vagy a két középső átlaga)",
      "módusz: a leggyakrabban előforduló érték",
      "kvartilisek (Q1, Q2, Q3) és az interkvartilis terjedelem (Q3-Q1)",
      "a középértékek eltérő érzékenysége a kiugró adatokra",
    ],
    source_refs: [
      { label: "Statisztika IV. – Statisztikai mutatók (zanza.tv)", url: "https://zanza.tv/matematika/valoszinuseg-statisztika/statisztika-iv-statisztikai-mutatok" },
      { label: "Módusz, medián, átlag, kvartilisek (Mateking)", url: "https://www.mateking.hu/statisztika-1/egy-ismerv-szerinti-elemzes/modusz-median-atlag-kvartilisek" },
      { label: "Medián (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Medi%C3%A1n" },
      { label: "Statisztika feladatok a matek érettségiben (Érettségi.com)", url: "https://erettsegi.com/tetelek/matematika/statisztika-feladatok-a-matek-erettsegiben/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hogyan számítjuk ki a számtani átlagot?",
        options: [
          "az adatok összegét elosztjuk a darabszámukkal",
          "az adatok szorzatát vesszük",
          "a legnagyobb és legkisebb adat átlagát vesszük",
          "a középső adatot vesszük"
        ],
        correct_answer: "az adatok összegét elosztjuk a darabszámukkal",
        explanation: "A számtani átlag az adatok összege osztva a darabszámmal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk módusznak?",
        options: [
          "az adatsorban leggyakrabban előforduló értéket",
          "az adatok átlagát",
          "az adatsor középső elemét",
          "a legnagyobb adatot"
        ],
        correct_answer: "az adatsorban leggyakrabban előforduló értéket",
        explanation: "A módusz az adatsorban leggyakrabban előforduló érték.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan határozzuk meg a mediánt páratlan elemszámú, rendezett adatsor esetén?",
        options: [
          "a rendezett adatsor középső eleme lesz a medián",
          "az első és utolsó elem átlaga",
          "a leggyakoribb elem",
          "az elemek összege"
        ],
        correct_answer: "a rendezett adatsor középső eleme lesz a medián",
        explanation: "Páratlan elemszám esetén a nagyság szerint rendezett adatsor középső eleme a medián.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Számítsd ki a 2, 3, 3, 5, 7, 8, 10 adatsor átlagát!",
        options: ["≈ 5,43", "5", "3", "38"],
        correct_answer: "≈ 5,43",
        explanation: "Az átlag (2+3+3+5+7+8+10)/7 = 38/7 ≈ 5,43.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a 2, 3, 3, 5, 7, 8, 10 (rendezett) adatsor mediánja?",
        options: ["5", "3", "≈5,43", "7"],
        correct_answer: "5",
        explanation: "7 elem esetén a középső (4.) elem a medián: a rendezett sorban ez az 5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a 2, 3, 3, 5, 7, 8, 10 adatsor módusza?",
        options: ["3", "5", "7", "nincs módusza"],
        correct_answer: "3",
        explanation: "A 3 érték fordul elő kétszer, minden más érték csak egyszer, tehát a módusz 3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mekkora a 4, 4, 6, 8 (rendezett) adatsor mediánja?",
        options: ["5", "4", "6", "22"],
        correct_answer: "5",
        explanation: "Páros elemszám (4 elem) esetén a medián a két középső elem (4 és 6) átlaga: (4+6)/2 = 5.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk kvartiliseknek?",
        options: [
          "az adatsort négy egyenlő részre osztó három értéket (Q1, Q2=medián, Q3)",
          "az adatsor két szélső értékét",
          "az adatok szórását",
          "az adatsor átlagát és móduszát"
        ],
        correct_answer: "az adatsort négy egyenlő részre osztó három értéket (Q1, Q2=medián, Q3)",
        explanation: "A kvartilisek (Q1, Q2, Q3) az adatsort négy egyenlő részre osztó három érték.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az interkvartilis terjedelem (IQR) képlete?",
        options: ["Q3 - Q1", "Q3 + Q1", "Q3 / Q1", "Q2 - Q1"],
        correct_answer: "Q3 - Q1",
        explanation: "Az interkvartilis terjedelem a felső és alsó kvartilis különbsége: IQR = Q3 - Q1.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Az 1, 3, 5, 7, 9, 11, 13 adatsor esetén mekkora az alsó kvartilis (Q1)?",
        options: ["3", "5", "7", "1"],
        correct_answer: "3",
        explanation: "A medián (Q2) a 7. Az alsó fél (1,3,5) mediánja Q1 = 3.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ugyanennél az adatsornál (1, 3, 5, 7, 9, 11, 13) mekkora a felső kvartilis (Q3)?",
        options: ["11", "9", "13", "7"],
        correct_answer: "11",
        explanation: "A felső fél (9,11,13) mediánja Q3 = 11.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy osztályban 10 tanuló kapott 4-es jegyet, 15 tanuló 5-öst. Mekkora a súlyozott átlag?",
        options: ["4,6", "4,5", "5", "4"],
        correct_answer: "4,6",
        explanation: "Súlyozott átlag = (10·4 + 15·5) / 25 = (40+75)/25 = 115/25 = 4,6.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik középérték a legkevésbé érzékeny a kiugró (extrém) értékekre?",
        options: ["a medián", "az átlag", "mindkettő egyformán érzékeny", "a súlyozott átlag"],
        correct_answer: "a medián",
        explanation: "A medián csak az adatok sorrendjét veszi figyelembe, ezért kevésbé torzítja el egy-egy kiugró érték, mint az átlagot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy adatsor: 1, 2, 2, 2, 100. Mennyi az átlag és a medián, és melyik jellemzi jobban a \"tipikus\" értéket?",
        options: [
          "átlag = 21,4, medián = 2; a medián jellemzi jobban, mert az átlagot a kiugró 100-as érték eltorzítja",
          "átlag = 2, medián = 21,4; az átlag jellemzi jobban",
          "átlag = 21,4, medián = 21,4; egyformán jellemzik",
          "átlag = 2, medián = 2; mindkettő ugyanaz"
        ],
        correct_answer: "átlag = 21,4, medián = 2; a medián jellemzi jobban, mert az átlagot a kiugró 100-as érték eltorzítja",
        explanation: "Átlag = (1+2+2+2+100)/5 = 107/5 = 21,4; medián (rendezett: 1,2,2,2,100) a középső elem = 2. A medián jobban jellemzi a tipikus értéket, mert nem érzékeny a kiugró 100-as adatra.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan nevezzük azt az értéket, amely a rendezett adatsort pontosan két egyenlő részre osztja?",
        options: ["medián", "módusz", "átlag", "szórás"],
        correct_answer: "medián",
        explanation: "A medián az az érték, amely a nagyság szerint rendezett adatsort két egyenlő részre osztja.",
        difficulty: 2,
      },
    ],
  },
];
