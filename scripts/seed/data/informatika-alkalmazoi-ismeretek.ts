import type { TopicSeed } from "./angol";

export const informatikaAlkalmazoiIsmeretekTopics: TopicSeed[] = [
  {
    slug: "szovegszerkesztes-stilusok-sablonok",
    title: "Szövegszerkesztés: stílusok, sablonok, tartalomjegyzék",
    level: "mindketto",
    theme: "Szövegszerkesztés",
    order_index: 9,
    summary_markdown:
      "A profi dokumentumkészítés alapja a stílusok és sablonok tudatos használata: ezek biztosítják az egységes megjelenést és teszik lehetővé az automatikus tartalomjegyzék elkészítését.",
    content_markdown: `
## Miért nem jó a "kézi" formázás?

Sok kezdő felhasználó minden egyes címsort külön, kézzel formáz (kijelöli, félkövérre teszi, betűméretet állít). Ennek hátrányai:

- ha később módosítani kell a formázást, minden előfordulást külön-külön kell átírni,
- könnyen inkonzisztens lesz a dokumentum (más-más méretű, típusú címsorok),
- nem lehet belőle automatikus tartalomjegyzéket generálni.

## A stílusok fogalma

A **stílus (style)** formázási beállítások (betűtípus, méret, szín, sorköz, behúzás) egy névvel ellátott, újrafelhasználható csoportja. A legfontosabb beépített stílustípusok:

- **Címsor stílusok (Heading 1, Heading 2, Heading 3...)**: a dokumentum szerkezetét (fejezet, alfejezet) jelölik.
- **Törzsszöveg (Normal/Alapszöveg)**: a folyó szöveg alapformázása.
- **Idézet, kiemelés** stílusok speciális szövegrészekhez.

Ha egy stílust módosítunk (pl. a Címsor 1 betűszínét kékre állítjuk), a stílust használó **összes** címsor automatikusan frissül a dokumentumban — ez a stílushasználat legnagyobb előnye.

## Sablonok (template)

A **sablon** egy előre elkészített dokumentumváz, amely tartalmazza a stílusokat, az oldalbeállításokat, esetleg fejléc/lábléc elemeket és akár helykitöltő szövegeket is. Sablonból kiindulva nem kell nulláról felépíteni a formázást (pl. hivatalos levél sablon, önéletrajz sablon, szakdolgozat sablon). A sablonfájlok kiterjesztése jellemzően .dotx (Word) vagy .ott (LibreOffice Writer).

## Automatikus tartalomjegyzék készítése

Ha a dokumentum címsorai **címsor stílusokkal** vannak formázva, a szövegszerkesztő képes automatikusan legenerálni a **tartalomjegyzéket (table of contents)**, amely:

- tartalmazza a fejezetek/alfejezetek címét a megfelelő szintezéssel (behúzással),
- feltünteti az oldalszámokat,
- egy kattintással frissíthető, ha változik a dokumentum szerkezete vagy hossza (pl. "Tartalomjegyzék frissítése" gomb).

Ha valaki manuálisan, szóközökkel és pontokkal próbál tartalomjegyzéket "rajzolni", az minden szerkesztés után elcsúszik és frissítésre szorul — ezért fontos a stílusalapú megközelítés.

## Egyéb hasznos szövegszerkesztési eszközök

- **Élőfej és élőláb (fejléc/lábléc)**: minden oldalon megjelenő, ismétlődő tartalom (pl. cím, oldalszám, dátum).
- **Hasábtörés, oldaltörés**: a szöveg kényszerített továbbvitele új oldalra/hasábba, anélkül hogy üres bekezdéseket kellene beszúrni.
- **Stílusalapú listák**: számozott és felsorolásos listák konzisztens formázása.
- **Nyomon követett változtatások (track changes)**: a szerkesztések rögzítése és elfogadása/elutasítása, csoportmunkánál hasznos.

## Miért fontos ez a gyakorlatban?

Egy hosszabb dokumentum (szakdolgozat, projektmunka, jegyzőkönyv) esetén a stílusok és az automatikus tartalomjegyzék használata rengeteg időt takarít meg, és professzionálisabb, egységesebb végeredményt ad, mint a kézi formázás.
`,
    key_concepts: [
      "stílus (style)",
      "sablon (template)",
      "automatikus tartalomjegyzék",
      "élőfej és élőláb",
      "nyomon követett változtatások",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő előnye a stílusok használatának a kézi formázással szemben?",
        options: [
          "Egy stílus módosítása az összes, azt a stílust használó szövegrészt automatikusan frissíti",
          "A stílusokkal formázott szöveg nem menthető el",
          "A stílusok csak képekre alkalmazhatók",
          "A stílusok lassítják a dokumentum megnyitását",
        ],
        correct_answer: "Egy stílus módosítása az összes, azt a stílust használó szövegrészt automatikusan frissíti",
        explanation: "A stílusok lényege, hogy egy helyen módosítva a formázást, az minden olyan helyen frissül, ahol az adott stílust alkalmazták.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi szükséges ahhoz, hogy egy szövegszerkesztő automatikusan generáljon tartalomjegyzéket?",
        options: [
          "A fejezetcímeket címsor stílusokkal (Heading) kell formázni",
          "Minden bekezdést egyenként alá kell húzni",
          "A dokumentumot PDF formátumban kell menteni",
          "A szöveget csupa nagybetűvel kell írni",
        ],
        correct_answer: "A fejezetcímeket címsor stílusokkal (Heading) kell formázni",
        explanation: "Az automatikus tartalomjegyzék-generálás a címsor stílusok (Heading 1, 2, 3...) felismerésén alapul.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire szolgál a sablon (template) egy szövegszerkesztőben?",
        options: [
          "Előre elkészített dokumentumvázat ad stílusokkal és oldalbeállításokkal",
          "Kizárólag a helyesírás-ellenőrzést végzi",
          "Automatikusan lefordítja a szöveget más nyelvre",
          "Csak képek beillesztésére alkalmas eszköz",
        ],
        correct_answer: "Előre elkészített dokumentumvázat ad stílusokkal és oldalbeállításokkal",
        explanation: "A sablon egy előre megformázott dokumentumváz, amely tartalmazza a stílusokat és az elrendezést, hogy ne kelljen nulláról kezdeni a formázást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik, ha egy hosszú dokumentumban manuálisan (szóközökkel, pontokkal) készítünk tartalomjegyzéket?",
        options: [
          "A dokumentum szerkesztésekor elcsúszhat, és nem frissül automatikusan",
          "Automatikusan szinkronizálódik a fejezetcímekkel",
          "Gyorsabb, mint az automatikus tartalomjegyzék",
          "Nem lehet szerkeszteni utólag",
        ],
        correct_answer: "A dokumentum szerkesztésekor elcsúszhat, és nem frissül automatikusan",
        explanation: "A manuálisan készített tartalomjegyzék statikus, minden szerkesztés után külön frissíteni kell, és könnyen elcsúszik az oldalszámozás.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire használható a 'nyomon követett változtatások' (track changes) funkció?",
        options: [
          "Több szerző szerkesztéseinek rögzítésére és elfogadására/elutasítására",
          "A dokumentum automatikus lefordítására",
          "A betűtípusok listázására",
          "A fájl tömörítésére",
        ],
        correct_answer: "Több szerző szerkesztéseinek rögzítésére és elfogadására/elutasítására",
        explanation: "A track changes funkció csoportmunkánál hasznos: rögzíti, ki mit módosított, és ezek a változtatások egyenként elfogadhatók vagy elutasíthatók.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "korlevel-es-hivatkozaskezeles",
    title: "Körlevél és hivatkozáskezelés",
    level: "mindketto",
    theme: "Szövegszerkesztés",
    order_index: 10,
    summary_markdown:
      "A körlevél (mail merge) segítségével egy dokumentumsablonból sok, egyénre szabott példány generálható automatikusan egy adatforrás alapján; a hivatkozáskezelés pedig a lábjegyzetek, keresztlábjegyzetek és irodalomjegyzék kezelésének eszköze.",
    content_markdown: `
## Mi a körlevél (mail merge)?

A **körlevél** funkció lehetővé teszi, hogy egyetlen dokumentumsablonból (pl. meghívó, értesítő, bizonyítvány) sok, személyre szabott példányt generáljunk automatikusan, egy **adatforrás** (pl. táblázat vagy adatbázis névsorral, címekkel) felhasználásával.

### A körlevél elkészítésének lépései

1. **Főlevél (fődokumentum) elkészítése**: a szöveg azon része, amely minden példányban azonos.
2. **Adatforrás csatolása**: pl. egy táblázatkezelő fájl, amely oszloponként tartalmazza a nevet, címet, egyéb egyedi adatokat.
3. **Egyesítési mezők (merge fields) beszúrása**: a személyre szabott részek helyére (pl. «Név», «Cím») egy-egy mezőt szúrunk be, amely az adatforrás megfelelő oszlopára hivatkozik.
4. **Egyesítés (merge) végrehajtása**: a program minden sorhoz (minden személyhez) legenerál egy-egy egyedi példányt, amelyben a mezők helyén a tényleges adatok jelennek meg.

### Gyakorlati alkalmazás

- Osztálynévsor alapján generált **bizonyítványok vagy oklevelek**.
- Ügyfelek adatai alapján generált **személyre szabott értesítő levelek**.
- Meghívók, ahol csak a címzett neve és címe változik.

## Hivatkozáskezelés

A hosszabb, tudományos igényű dokumentumokban fontos a források és megjegyzések következetes kezelése:

- **Lábjegyzet (footnote)**: az oldal alján megjelenő magyarázó megjegyzés vagy forráshivatkozás, automatikusan számozva.
- **Végjegyzet (endnote)**: hasonló a lábjegyzethez, de a dokumentum/fejezet végén gyűjti össze a jegyzeteket.
- **Kereszthivatkozás (cross-reference)**: egy másik fejezetre, ábrára vagy táblázatra mutató, automatikusan frissülő hivatkozás (pl. "lásd a 3. ábrát" — ha az ábra száma változik, a hivatkozás is frissül).
- **Irodalomjegyzék (bibliography) generálása**: sok szövegszerkesztő képes a beszúrt forráshivatkozások alapján automatikusan, egységes formátumban (pl. APA, MLA, Chicago stílus) legenerálni az irodalomjegyzéket.

## Miért fontosak ezek az eszközök?

A körlevél funkció **rengeteg időt takarít meg** ismétlődő, de személyre szabott dokumentumok tömeges előállításánál. A hivatkozáskezelő eszközök pedig biztosítják, hogy egy tudományos vagy iskolai dolgozatban a források következetesen, hitelesen és könnyen ellenőrizhető módon legyenek feltüntetve — ami a forráskritika és a plágiumkerülés szempontjából is alapvető.

## Gyakori hiba

Sokan a körlevél adatforrását kézzel, minden alkalommal újraírják, ahelyett hogy egy jól karbantartott táblázatot használnának forrásként — ez feleslegesen megnöveli a hibalehetőséget és az időráfordítást.
`,
    key_concepts: [
      "körlevél (mail merge)",
      "egyesítési mezők",
      "lábjegyzet és végjegyzet",
      "kereszthivatkozás",
      "irodalomjegyzék generálása",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mire szolgál a körlevél (mail merge) funkció?",
        options: [
          "Egy sablonból sok, személyre szabott dokumentumpéldány automatikus generálására",
          "Kizárólag a helyesírás ellenőrzésére",
          "A dokumentum tömörítésére",
          "Az internetes levelek automatikus törlésére",
        ],
        correct_answer: "Egy sablonból sok, személyre szabott dokumentumpéldány automatikus generálására",
        explanation: "A körlevél funkció egyetlen sablonból, egy adatforrás alapján generál automatikusan sok, egyénre szabott dokumentumpéldányt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a körlevél elkészítéséhez szükséges két fő elem?",
        options: [
          "Fődokumentum (sablon) és adatforrás",
          "Két különböző szövegszerkesztő program",
          "Nyomtató és szkenner",
          "Egy videó és egy hangfájl",
        ],
        correct_answer: "Fődokumentum (sablon) és adatforrás",
        explanation: "A körlevélhez szükség van egy fődokumentumra (a közös szövegváz) és egy adatforrásra (amely az egyedi adatokat, pl. neveket, címeket tartalmazza).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a kereszthivatkozás (cross-reference) funkciója?",
        options: [
          "Egy másik fejezetre, ábrára vagy táblázatra mutat, és automatikusan frissül, ha a hivatkozott elem száma változik",
          "Kizárólag az oldalszámokat számolja",
          "A dokumentum nyelvét fordítja le",
          "Törli a felesleges szóközöket",
        ],
        correct_answer: "Egy másik fejezetre, ábrára vagy táblázatra mutat, és automatikusan frissül, ha a hivatkozott elem száma változik",
        explanation: "A kereszthivatkozás dinamikusan kapcsolódik egy másik dokumentumelemhez, és automatikusan frissül, ha az elem pozíciója vagy száma megváltozik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a lábjegyzet és a végjegyzet között?",
        options: [
          "A lábjegyzet az oldal alján, a végjegyzet a dokumentum/fejezet végén jelenik meg",
          "A lábjegyzet csak képekhez, a végjegyzet csak szöveghez társítható",
          "A végjegyzet nem számozható automatikusan",
          "A kettő között nincs érdemi különbség",
        ],
        correct_answer: "A lábjegyzet az oldal alján, a végjegyzet a dokumentum/fejezet végén jelenik meg",
        explanation: "A lábjegyzet az adott oldal alján, a végjegyzet pedig a dokumentum vagy fejezet végén gyűjti össze a jegyzeteket.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért előnyös, ha a körlevél adatforrása egy jól karbantartott táblázat, nem pedig kézzel, alkalmanként újraírt lista?",
        options: [
          "Csökkenti a hibalehetőséget és időt takarít meg az ismétlődő adatbevitelnél",
          "Mert a szövegszerkesztő csak táblázatból tud adatot beolvasni",
          "Mert a táblázat automatikusan javítja a nyelvtani hibákat",
          "Mert a táblázatformátum kisebb fájlméretet eredményez mindig",
        ],
        correct_answer: "Csökkenti a hibalehetőséget és időt takarít meg az ismétlődő adatbevitelnél",
        explanation: "Egy karbantartott, strukturált adatforrás használata megbízhatóbb és gyorsabb, mint az adatok ismételt, kézi újragépelése.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "tablazatkezeles-alapfuggvenyek",
    title: "Táblázatkezelés: alapfüggvények (SZUM, ÁTLAG, HA, DARABTELI)",
    level: "mindketto",
    theme: "Táblázatkezelés",
    order_index: 11,
    summary_markdown:
      "A táblázatkezelés alapja a leggyakrabban használt függvények (SZUM, ÁTLAG, HA, DARABTELI) ismerete, amelyekkel adatokat összesíthetünk, feltételesen vizsgálhatunk és számlálhatunk.",
    content_markdown: `
## A cellahivatkozások alapjai

Mielőtt a függvényeket megnéznénk, fontos tisztázni a hivatkozástípusokat:

- **Relatív hivatkozás** (pl. A1): másolásnál a hivatkozás automatikusan "elcsúszik" az új pozícióhoz képest.
- **Abszolút hivatkozás** (pl. $A$1): másolásnál a hivatkozás rögzítve marad, nem változik. A dollárjel ($) rögzíti az oszlopot és/vagy a sort.
- **Vegyes hivatkozás** (pl. $A1 vagy A$1): csak az oszlop vagy csak a sor van rögzítve.

## Az alapvető összesítő függvények

- **SZUM(tartomány)**: a megadott cellatartomány értékeinek összege. Példa: =SZUM(B2:B20) — összeadja a B2-től B20-ig terjedő cellák értékeit.
- **ÁTLAG(tartomány)**: a tartomány számtani átlaga. Példa: =ÁTLAG(C2:C20).
- **MAX(tartomány) / MIN(tartomány)**: a tartomány legnagyobb, illetve legkisebb értéke.
- **DARAB(tartomány)**: megszámolja, hány numerikus (szám) érték van a tartományban.
- **DARAB2(tartomány)**: megszámolja az összes nem üres cellát (szöveget is beleértve).

## A HA (feltételes) függvény

A **HA** függvény egy logikai feltétel eredményétől függően más-más értéket ad vissza. Szintaxisa:

=HA(feltétel; igaz_érték; hamis_érték)

Példa: =HA(B2>=50;"Megfelelt";"Nem felelt meg") — ha a B2 cella értéke legalább 50, a cella "Megfelelt" szöveget mutat, egyébként "Nem felelt meg"-et.

A HA függvények **egymásba ágyazhatók** (beágyazott HA), így több feltétel is vizsgálható egyszerre, például osztályzatok kiszámításához:

=HA(B2>=90;"Jeles";HA(B2>=75;"Jó";HA(B2>=60;"Közepes";HA(B2>=40;"Elégséges";"Elégtelen"))))

## A DARABTELI függvény

A **DARABTELI (COUNTIF)** függvény megszámolja, hány olyan cella van egy tartományban, amely megfelel egy adott feltételnek. Szintaxisa:

=DARABTELI(tartomány; feltétel)

Példa: =DARABTELI(C2:C30;">=60") — megszámolja, hány tanuló ért el legalább 60 pontot.
Példa: =DARABTELI(D2:D30;"Jeles") — megszámolja, hányan kaptak "Jeles" osztályzatot.

A rokon **SZUMHA (SUMIF)** függvény hasonlóan működik, de nem számlál, hanem összegez a feltételnek megfelelő cellák alapján: =SZUMHA(D2:D30;"Fiú";E2:E30) — a fiúk pontszámait összesíti.

## Gyakori hibák

- **Körkörös hivatkozás**: ha egy képlet közvetve vagy közvetlenül önmagára hivatkozik, a program hibát jelez.
- **Relatív/abszolút hivatkozás összekeverése**: ha egy állandó értékre (pl. egy adóhatár cellára) hivatkozó képletet lefelé másolunk, és elfelejtjük rögzíteni ($ jellel), a hivatkozás helytelenül "elcsúszik".
- **Szöveg és szám összekeverése**: ha egy cellában szövegként van tárolva egy szám (pl. bal oldalra igazítva jelenik meg), a SZUM és ÁTLAG figyelmen kívül hagyhatja.

## Miért fontos ez?

Ezek az alapfüggvények képezik minden bonyolultabb táblázatkezelési feladat (osztályzatok, költségvetés, statisztikák) alapját — enélkül nem érthetők meg a haladóbb, összetett képletek sem.
`,
    key_concepts: [
      "relatív és abszolút hivatkozás",
      "SZUM és ÁTLAG függvény",
      "HA (feltételes) függvény",
      "beágyazott HA",
      "DARABTELI és SZUMHA",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a relatív és az abszolút cellahivatkozás között?",
        options: [
          "Az abszolút hivatkozás másoláskor rögzítve marad, a relatív elcsúszik",
          "A relatív hivatkozás mindig gyorsabb számítást eredményez",
          "Az abszolút hivatkozást nem lehet függvényben használni",
          "A kettő között nincs érdemi különbség",
        ],
        correct_answer: "Az abszolút hivatkozás másoláskor rögzítve marad, a relatív elcsúszik",
        explanation: "Az abszolút hivatkozás ($ jellel rögzítve) másoláskor nem változik, míg a relatív hivatkozás automatikusan a másolás irányába tolódik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik képlet adja vissza helyesen a B2:B20 tartomány számtani átlagát?",
        options: ["=ÁTLAG(B2:B20)", "=SZUM(B2:B20)", "=DARAB(B2:B20)", "=MAX(B2:B20)"],
        correct_answer: "=ÁTLAG(B2:B20)",
        explanation: "Az ÁTLAG függvény számítja ki a megadott tartomány számtani átlagát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik képlet írja le helyesen: 'ha a B2 érték legalább 50, akkor Megfelelt, egyébként Nem felelt meg'?",
        options: [
          '=HA(B2>=50;"Megfelelt";"Nem felelt meg")',
          '=HA(B2>=50;"Nem felelt meg";"Megfelelt")',
          "=DARABTELI(B2;50)",
          '=SZUMHA(B2;">=50";"Megfelelt")',
        ],
        correct_answer: '=HA(B2>=50;"Megfelelt";"Nem felelt meg")',
        explanation: "A HA függvény szintaxisa: =HA(feltétel;igaz_érték;hamis_érték), tehát a feltétel teljesülése esetén az első, egyébként a második szöveg jelenik meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire használjuk a DARABTELI (COUNTIF) függvényt?",
        options: [
          "Megszámolja, hány cella felel meg egy adott feltételnek egy tartományban",
          "Összeadja egy tartomány összes numerikus értékét",
          "Kiszámítja egy tartomány átlagát",
          "Rendezi ábécésorrendbe a cellák tartalmát",
        ],
        correct_answer: "Megszámolja, hány cella felel meg egy adott feltételnek egy tartományban",
        explanation: "A DARABTELI függvény egy megadott feltételnek megfelelő cellák darabszámát adja vissza egy tartományban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy osztályzat-számító képletben beágyazott HA függvényeket használunk: =HA(B2>=90;\"Jeles\";HA(B2>=75;\"Jó\";\"Közepes\")). Mit kap az a tanuló, akinek B2 értéke 80?",
        options: ["Jó", "Jeles", "Közepes", "Elégséges"],
        correct_answer: "Jó",
        explanation: "80 nem éri el a 90-et, de eléri a 75-öt, ezért a belső HA feltétele (B2>=75) teljesül, és az eredmény 'Jó' lesz.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "tablazatkezeles-keresofuggvenyek",
    title: "Táblázatkezelés: keresőfüggvények (FKERES/XKERES, INDEX/HOL.VAN)",
    level: "emelt",
    theme: "Táblázatkezelés",
    order_index: 12,
    summary_markdown:
      "A keresőfüggvények (FKERES, XKERES, INDEX és HOL.VAN) lehetővé teszik, hogy egy táblázatban egy ismert érték alapján megkeressünk és visszaadjunk egy hozzá tartozó másik értéket — az emelt szintű érettségi egyik kulcstémája.",
    content_markdown: `
## Miért van szükség keresőfüggvényekre?

Gyakori feladat, hogy egy nagy táblázatban egy azonosító (pl. termékkód, törzsszám, név) alapján meg kell találni a hozzá tartozó másik adatot (pl. ár, osztályzat, cím) — ezt kézzel átnézni nagy táblázatban lassú és hibalehetőséggel jár. Erre valók a keresőfüggvények.

## Az FKERES (VLOOKUP) függvény

Az **FKERES** (angolul VLOOKUP, "függőleges keresés") egy táblázat **első oszlopában** keres egy megadott értéket, majd egy megadott oszlopból adja vissza a hozzá tartozó adatot. Szintaxisa:

=FKERES(keresési_érték; tábla; oszlopindex; [egyezés_típusa])

Példa: =FKERES(A2;Termékek!A:C;3;HAMIS) — az A2 cellában lévő termékkódot megkeresi a "Termékek" munkalap A oszlopában, és a találat sorának 3. oszlopából (C oszlop) adja vissza az árat. A negyedik paraméter (HAMIS/0) **pontos egyezést** kér, ami a legtöbb esetben javasolt.

**Korlátja**: az FKERES csak jobbra tud keresni (a keresett oszlopnak balra kell lennie a visszaadott oszloptól), és ha egy oszlopot beszúrunk/törölünk, az oszlopindex elromolhat.

## Az XKERES (XLOOKUP) függvény

Az **XKERES** (XLOOKUP) az FKERES modernebb, rugalmasabb utódja (újabb Excel-verziókban érhető el):

=XKERES(keresési_érték; keresési_tömb; visszaadási_tömb; [ha_nincs_találat])

Előnyei az FKERES-hez képest: kereshet **balra is**, nem oszlopindexre, hanem közvetlenül a visszaadandó oszlopra hivatkozik (ezért oszlopbeszúrás nem töri el), és van beépített kezelése annak az esetnek, ha nincs találat.

## Az INDEX és a HOL.VAN függvények

Az **INDEX** függvény egy tartomány adott sorában és oszlopában lévő értéket adja vissza:

=INDEX(tömb; sor_szám; [oszlop_szám])

A **HOL.VAN (MATCH)** függvény egy érték relatív **pozícióját (sorszámát)** adja vissza egy tartományban:

=HOL.VAN(keresési_érték; keresési_tömb; [egyezés_típusa])

Az **INDEX+HOL.VAN kombináció** az FKERES egyik legrugalmasabb alternatívája: a HOL.VAN megkeresi a sor pozícióját, az INDEX pedig ez alapján adja vissza a kívánt oszlop értékét. Előnye, hogy mindkét irányban kereshet, és nem érzékeny az oszlopok sorrendjének változására:

=INDEX(C:C;HOL.VAN(A2;A:A;0))

## Melyiket mikor érdemes használni?

- **FKERES**: egyszerű, jobbra irányuló keresésnél, ha nem várható oszlopszerkezet-változás.
- **XKERES**: ha elérhető (újabb szoftververzió), ez a legrugalmasabb, legbiztonságosabb választás.
- **INDEX+HOL.VAN**: ha régebbi szoftverkörnyezetben dolgozunk, de rugalmasságra (balra keresés, oszlopbeszúrás-biztosság) van szükség.

## Gyakori hiba

Az FKERES negyedik paraméterének elhagyása (vagy IGAZ/1 megadása) **közelítő egyezést** eredményez, ami rendezetlen adatoknál hibás, véletlenszerű találatokhoz vezethet — emelt szinten fontos tudni, hogy pontos egyezéshez mindig HAMIS (0) paramétert kell megadni.
`,
    key_concepts: [
      "FKERES (VLOOKUP)",
      "XKERES (XLOOKUP)",
      "INDEX függvény",
      "HOL.VAN (MATCH) függvény",
      "pontos és közelítő egyezés",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit csinál az FKERES (VLOOKUP) függvény?",
        options: [
          "Egy táblázat első oszlopában keres, és egy megadott oszlopból adja vissza a hozzá tartozó értéket",
          "Rendezi a táblázat sorait ábécésorrendbe",
          "Összeadja egy tartomány numerikus értékeit",
          "Törli a duplikált sorokat egy táblázatból",
        ],
        correct_answer: "Egy táblázat első oszlopában keres, és egy megadott oszlopból adja vissza a hozzá tartozó értéket",
        explanation: "Az FKERES az első oszlopban keres egy megadott értéket, majd egy megadott oszlopszámú cellából adja vissza a hozzá tartozó adatot.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért javasolt az FKERES negyedik paramétereként HAMIS (0) értéket megadni?",
        options: [
          "Mert így pontos egyezést kér, elkerülve a véletlenszerű, hibás találatokat",
          "Mert enélkül a függvény egyáltalán nem fut le",
          "Mert ez teszi lehetővé a balra keresést",
          "Mert ez felgyorsítja a fájl mentését",
        ],
        correct_answer: "Mert így pontos egyezést kér, elkerülve a véletlenszerű, hibás találatokat",
        explanation: "A HAMIS (0) paraméter pontos egyezést kér; enélkül (IGAZ/1 esetén) a függvény közelítő egyezést keres, ami rendezetlen adatoknál hibás eredményhez vezethet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az INDEX és HOL.VAN függvények kombinációjának egyik fő előnye az FKERES-hez képest?",
        options: [
          "Nem érzékeny arra, ha új oszlopot szúrunk be a keresett és a visszaadott oszlop közé",
          "Kizárólag szöveges adatok keresésére alkalmas",
          "Nem igényel keresési tartományt",
          "Automatikusan tömöríti az adatokat",
        ],
        correct_answer: "Nem érzékeny arra, ha új oszlopot szúrunk be a keresett és a visszaadott oszlop közé",
        explanation: "Mivel az INDEX közvetlenül a visszaadandó oszlopra hivatkozik (nem egy fix oszlopindexre), egy oszlop beszúrása vagy törlése nem töri el a képletet, szemben az FKERES-szel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az XKERES (XLOOKUP) egyik legfontosabb előnye az FKERES-hez képest?",
        options: [
          "Balra irányban is tud keresni, nem csak jobbra",
          "Csak numerikus adatokkal működik",
          "Nem igényel keresési értéket",
          "Kizárólag egyetlen munkalapon belül használható",
        ],
        correct_answer: "Balra irányban is tud keresni, nem csak jobbra",
        explanation: "Az XKERES egyik legnagyobb előnye, hogy a keresési oszlophoz képest balra elhelyezkedő adatot is vissza tudja adni, ellentétben az FKERES-szel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Adott a képlet: =INDEX(C:C;HOL.VAN(A2;A:A;0)). Mit csinál ez a képlet?",
        options: [
          "Megkeresi az A2 értékét az A oszlopban, majd a találat sorához tartozó C oszlopbeli értéket adja vissza",
          "Összeadja a C oszlop összes celláját",
          "Megszámolja, hányszor fordul elő az A2 érték az A oszlopban",
          "Rendezi az A oszlopot növekvő sorrendbe",
        ],
        correct_answer: "Megkeresi az A2 értékét az A oszlopban, majd a találat sorához tartozó C oszlopbeli értéket adja vissza",
        explanation: "A HOL.VAN megadja, hányadik sorban van az A2 értéke az A oszlopban, az INDEX pedig ez alapján a sor alapján adja vissza a C oszlop megfelelő cellájának értékét.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "diagramok-es-adatvizualizacio",
    title: "Diagramok és adatvizualizáció",
    level: "mindketto",
    theme: "Táblázatkezelés",
    order_index: 13,
    summary_markdown:
      "A táblázatkezelő programok beépített diagramtípusai (oszlop-, kör-, vonal-, pontdiagram) segítenek az adatok szemléltetésében — a tétel bemutatja, melyik típust mikor érdemes használni.",
    content_markdown: `
## Miért van szükség diagramokra?

Egy nagy táblázat számsorai nehezen áttekinthetők; egy jól megválasztott **diagram (chart)** azonnal szemlélteti a tendenciákat, arányokat és összefüggéseket, amelyeket puszta számokból nehéz lenne kiolvasni.

## A leggyakoribb diagramtípusok és felhasználásuk

- **Oszlopdiagram (bar/column chart)**: kategóriák közötti összehasonlításra alkalmas (pl. osztályok átlagai, termékek eladási száma). Az oszlopdiagram lehet függőleges (column) vagy vízszintes (bar) elrendezésű.
- **Vonaldiagram (line chart)**: időbeli tendenciák, változások bemutatására (pl. havi árbevétel alakulása egy éven át). A vonal folytonossága a folyamatos, időbeli összefüggést hangsúlyozza.
- **Kördiagram (pie chart)**: egy egész részekre bontását, az összetevők arányát mutatja be (pl. egy iskola tanulóinak megoszlása évfolyamok szerint). Csak akkor jó választás, ha a részek összege egy egészet (100%-ot) ad, és nem túl sok kategória van (ideálisan legfeljebb 5-6).
- **Pontdiagram (XY/scatter chart)**: két numerikus változó közötti összefüggés (korreláció) vizsgálatára alkalmas (pl. tanulási idő és elért pontszám kapcsolata).
- **Halmozott oszlopdiagram**: egyszerre mutatja az összesített értéket és annak összetevőit (pl. összes bevétel, termékkategóriánkénti bontásban).

## Melyik diagramtípust mikor válasszuk?

A helytelen diagramtípus félrevezető lehet:

- **Ne használjunk kördiagramot** időbeli tendencia bemutatására — arra a vonaldiagram alkalmas.
- **Ne használjunk vonaldiagramot** kategóriák (pl. települések) összehasonlítására, ha nincs közöttük folytonos, időbeli vagy sorrendi kapcsolat — ott az oszlopdiagram a jó választás.
- **Sok kategória (10+)** esetén a kördiagram átláthatatlanná válik — ilyenkor oszlopdiagram vagy táblázat jobb.

## A jó diagram jellemzői

1. **Egyértelmű cím**, amely megmondja, mit ábrázol a diagram.
2. **Feliratozott tengelyek** (mértékegységgel együtt).
3. **Jelmagyarázat (legend)**, ha több adatsor is szerepel.
4. Ne legyen túlzsúfolt — felesleges 3D-effektek, díszítőelemek elvonják a figyelmet az adatoktól.
5. A színek legyenek jól megkülönböztethetők, és lehetőleg vegyék figyelembe a színtévesztők szempontjait is.

## Adatvizualizáció a döntéshozatalban

A jól megválasztott diagram nemcsak "szép", hanem eszköz is: segít gyorsan felismerni a trendeket, kiugró (outlier) értékeket, mintázatokat, amelyek alapján megalapozott döntéseket lehet hozni — legyen szó iskolai projektmunkáról, üzleti jelentésről vagy tudományos kutatásról.

## Dinamikus diagramok

Ha a diagram egy táblázat celláira hivatkozik (nem statikus képként van beillesztve), akkor az **adatok módosításakor a diagram automatikusan frissül** — ez az egyik legnagyobb előnye annak, ha a diagramot magában a táblázatkezelő programban, nem pedig külön rajzprogramban készítjük el.
`,
    key_concepts: [
      "oszlopdiagram",
      "vonaldiagram",
      "kördiagram",
      "pontdiagram (scatter)",
      "diagramtípus megválasztása",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik diagramtípus a legalkalmasabb egy adathalmaz időbeli tendenciájának (pl. havi árbevétel egy éven át) bemutatására?",
        options: ["vonaldiagram", "kördiagram", "pontdiagram", "halmozott oszlopdiagram"],
        correct_answer: "vonaldiagram",
        explanation: "A vonaldiagram kifejezetten az időbeli változások, tendenciák szemléltetésére alkalmas leginkább.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor NEM javasolt kördiagramot használni?",
        options: [
          "Ha sok (10+) kategóriát kell egyszerre megjeleníteni",
          "Ha egy egész részekre bontását szeretnénk bemutatni",
          "Ha kevés (3-5) kategória van, amelyek összege 100%",
          "Ha az arányokat szeretnénk kiemelni",
        ],
        correct_answer: "Ha sok (10+) kategóriát kell egyszerre megjeleníteni",
        explanation: "Sok kategória esetén a kördiagram átláthatatlanná válik; ilyenkor inkább oszlopdiagramot vagy táblázatot érdemes használni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik diagramtípus alkalmas két numerikus változó közötti összefüggés (korreláció) vizsgálatára?",
        options: ["pontdiagram (scatter)", "kördiagram", "oszlopdiagram", "halmozott oszlopdiagram"],
        correct_answer: "pontdiagram (scatter)",
        explanation: "A pontdiagram (XY/scatter chart) kifejezetten két numerikus változó közötti kapcsolat, korreláció bemutatására szolgál.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik, ha egy táblázatkezelőben a diagram közvetlenül a táblázat celláira hivatkozik, és megváltoztatjuk az adatokat?",
        options: [
          "A diagram automatikusan frissül az új adatok alapján",
          "A diagram törlődik",
          "A diagram statikus marad, kézzel kell újrarajzolni",
          "A táblázat adatai visszaállnak az eredeti értékre",
        ],
        correct_answer: "A diagram automatikusan frissül az új adatok alapján",
        explanation: "Ha a diagram a táblázat celláihoz van kötve (nem statikus kép), az adatok módosításakor automatikusan frissül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért félrevezető, ha egy iskolák közötti (kategorikus) összehasonlítást vonaldiagrammal ábrázolunk?",
        options: [
          "A vonal folytonossága folyamatos, időbeli vagy sorrendi kapcsolatot sugall, amely az önálló kategóriák között nem létezik",
          "A vonaldiagram nem tud több adatsort megjeleníteni",
          "A vonaldiagramban nem lehet feliratozni a tengelyeket",
          "A vonaldiagram csak numerikus tengelyeket tud kezelni",
        ],
        correct_answer: "A vonaldiagram folytonossága folyamatos, időbeli vagy sorrendi kapcsolatot sugall, amely az önálló kategóriák között nem létezik",
        explanation: "A vonaldiagram vizuálisan folytonosságot, trendet sugall, ami félrevezető, ha a kategóriák (pl. iskolák) között nincs valós sorrendi vagy időbeli összefüggés.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kimutatas-pivot-tabla-alapjai",
    title: "Kimutatás (pivot) tábla alapjai",
    level: "emelt",
    theme: "Táblázatkezelés",
    order_index: 14,
    summary_markdown:
      "A kimutatástábla (pivot table) nagy adathalmazok gyors összegzésére, csoportosítására és többszempontú elemzésére szolgáló eszköz — emelt szintű táblázatkezelési alaptudás.",
    content_markdown: `
## Mi a kimutatástábla (pivot table)?

A **kimutatástábla** egy dinamikus, interaktív táblázat, amely egy nagy, "nyers" adathalmazból (pl. több ezer soros értékesítési lista) néhány kattintással képes összegző, csoportosított nézeteket készíteni — anélkül, hogy bonyolult képleteket kellene írni.

## Az alapadatok szerkezete

A kimutatás alapjául szolgáló táblázatnak **"tiszta", táblázatos szerkezetűnek** kell lennie:

- minden oszlop egy-egy jellemzőt (mező) tartalmaz (pl. Dátum, Termék, Régió, Eladó, Mennyiség, Bevétel),
- minden sor egy-egy rekordot (egy konkrét tranzakciót) képvisel,
- nincsenek összevont cellák vagy üres sorok/oszlopok az adatok között,
- az első sor tartalmazza az oszlopfejléceket (mezőneveket).

## A kimutatástábla négy fő területe

A kimutatás létrehozásakor a mezőket négy területre húzhatjuk:

1. **Sorok (Rows)**: az egyes kategóriák, amelyek szerint a sorokat csoportosítjuk (pl. Régió).
2. **Oszlopok (Columns)**: az egyes kategóriák, amelyek szerint az oszlopokat csoportosítjuk (pl. Év).
3. **Értékek (Values)**: a ténylegesen összesített (összegzett, átlagolt, számlált) numerikus mező (pl. Bevétel összesítése SZUM-mal).
4. **Szűrők (Filters)**: olyan mezők, amelyek alapján az egész kimutatást leszűkíthetjük (pl. csak egy adott Termékkategóriára).

## Gyakorlati példa

Van egy 5000 soros értékesítési táblázatunk (Dátum, Régió, Termék, Eladó, Bevétel oszlopokkal). Ha meg akarjuk tudni, **régiónként és termékkategóriánként mennyi volt az összes bevétel**, ezt kimutatással pár másodperc alatt megkapjuk:

- Sorok: Régió
- Oszlopok: Termékkategória
- Értékek: Bevétel összege (SZUM)

Ha ezt hagyományos képletekkel (pl. sok egymásba ágyazott SZUMHATÖBB függvénnyel) akarnánk megoldani, az sokkal időigényesebb és hibalehetőség-érzékenyebb lenne.

## Az összesítés módjának megváltoztatása

Az Értékek területre húzott mező alapértelmezett összesítése (általában SZUM numerikus adatnál, DARAB szövegesnél) megváltoztatható: választhatunk **átlagot, maximumot, minimumot, darabszámot** vagy százalékos megoszlást is.

## Csoportosítás és részletek megjelenítése

A kimutatásban a dátumokat automatikusan csoportosíthatjuk (pl. napi adatokból hónap vagy év szerinti bontás), és egy adott összesített cellára duplán kattintva a program egy új munkalapon megjeleníti a mögötte lévő **részletes, eredeti sorokat** — ez nagyban segíti az ellenőrzést és a mélyebb elemzést.

## Miért emelt szintű téma ez?

A kimutatástábla használata megköveteli az adatszerkezet, a csoportosítási logika és a többdimenziós adatelemzés megértését, ezért ez a témakör jellemzően az emelt szintű érettségi vizsga részét képezi, de a gyakorlati (irodai, üzleti) adatelemzésben is alapkészségnek számít.
`,
    key_concepts: [
      "kimutatástábla (pivot table)",
      "táblázatos (tiszta) adatszerkezet",
      "sorok, oszlopok, értékek, szűrők",
      "összesítés módjának megváltoztatása",
      "csoportosítás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a kimutatástábla (pivot table) fő célja?",
        options: [
          "Nagy adathalmazok gyors összegzése és csoportosítása bonyolult képletek nélkül",
          "A fájl tömörítése kisebb méretűre",
          "A helyesírási hibák automatikus javítása",
          "Diagramok színeinek beállítása",
        ],
        correct_answer: "Nagy adathalmazok gyors összegzése és csoportosítása bonyolult képletek nélkül",
        explanation: "A kimutatástábla lényege, hogy nagy adathalmazokból gyorsan, interaktívan lehet összesített, csoportosított nézeteket készíteni bonyolult képletek írása nélkül.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szerkezetűnek kell lennie az alapadatoknak egy kimutatástábla létrehozásához?",
        options: [
          "Táblázatos szerkezetűnek, ahol minden oszlop egy jellemzőt, minden sor egy rekordot tartalmaz, összevont cellák nélkül",
          "Kizárólag numerikus adatokat tartalmazhat, szöveget nem",
          "Legfeljebb 10 sorból állhat",
          "Minden sorban azonos értékeknek kell szerepelniük",
        ],
        correct_answer: "Táblázatos szerkezetűnek, ahol minden oszlop egy jellemzőt, minden sor egy rekordot tartalmaz, összevont cellák nélkül",
        explanation: "A kimutatás megbízható működéséhez az alapadatoknak 'tiszta', táblázatos szerkezetűnek kell lenniük: oszloponként egy mező, soronként egy rekord, összevonások nélkül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik terület felelős a kimutatástáblában a ténylegesen összesített numerikus adat megjelenítéséért?",
        options: ["Értékek (Values)", "Szűrők (Filters)", "Sorok (Rows)", "Oszlopok (Columns)"],
        correct_answer: "Értékek (Values)",
        explanation: "Az Értékek területre húzott mező az, amelyet a program ténylegesen összesít (pl. összeg, átlag, darabszám formájában).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történik, ha egy kimutatástábla összesített cellájára duplán kattintunk?",
        options: [
          "A program egy új munkalapon megjeleníti a cella mögötti részletes, eredeti sorokat",
          "A cella tartalma automatikusan törlődik",
          "A teljes kimutatás bezárul",
          "A fájl automatikusan mentésre kerül",
        ],
        correct_answer: "A program egy új munkalapon megjeleníti a cella mögötti részletes, eredeti sorokat",
        explanation: "A duplakattintás egy összesített cellán megnyitja a mögötte lévő, az összesítést alkotó eredeti (részletes) sorokat egy új munkalapon.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért előnyösebb egy kimutatástábla, mint sok egymásba ágyazott SZUMHATÖBB képlet egy összetett, többszempontú összesítéshez?",
        options: [
          "Sokkal gyorsabban és kevesebb hibalehetőséggel állítható elő, és interaktívan átrendezhető",
          "Mert a kimutatástábla kizárólag szöveges adatokkal működik",
          "Mert a képletek soha nem tudnak több feltételt kezelni",
          "Mert a kimutatástábla nem igényel semmilyen alapadatot",
        ],
        correct_answer: "Sokkal gyorsabban és kevesebb hibalehetőséggel állítható elő, és interaktívan átrendezhető",
        explanation: "A kimutatástábla drag-and-drop módon, néhány másodperc alatt, hibalehetőség nélkül hoz létre olyan összesítéseket, amelyekhez képletekkel sok, bonyolult, egymásba ágyazott függvényre lenne szükség.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "relacios-adatmodell-es-normalizalas",
    title: "Relációs adatmodell és normalizálás",
    level: "emelt",
    theme: "Adatbázis-kezelés",
    order_index: 15,
    summary_markdown:
      "A relációs adatmodell a mai adatbázis-kezelő rendszerek alapja: táblákban, sorokban és oszlopokban tárolja az adatokat. A normalizálás célja a redundancia és az adatanomáliák elkerülése.",
    content_markdown: `
## A relációs adatmodell alapfogalmai

A **relációs adatbázis** az adatokat **táblákban (relációkban)** tárolja, ahol:

- egy **tábla (tábla/reláció)** egy adott típusú entitás (pl. Diákok, Tantárgyak) adatait tartalmazza,
- egy **sor (rekord/tuple)** egy konkrét példányt képvisel (pl. egy adott diák adatai),
- egy **oszlop (mező/attribútum)** egy jellemzőt ír le (pl. Név, Születési dátum),
- a **kulcs (kulcsmező)** egyedi azonosításra szolgál.

## Kulcstípusok

- **Elsődleges kulcs (primary key)**: egy oszlop (vagy oszlopok kombinációja), amely a táblán belül **egyedien** azonosítja a rekordokat, nem lehet üres (NULL), és nem ismétlődhet.
- **Idegen kulcs (foreign key)**: egy oszlop, amely egy **másik tábla elsődleges kulcsára** hivatkozik, így teremtve kapcsolatot a táblák között.
- **Másodlagos (kandidáns) kulcs**: olyan mező, amely szintén alkalmas lenne elsődleges kulcsnak, de nem azt választották (pl. adóazonosító jel egy diáktáblában, ahol a diákazonosító az elsődleges kulcs).

## Miért kell normalizálni?

A **normalizálás** célja, hogy megszüntessük az **adatredundanciát** (ugyanaz az adat feleslegesen többször szerepel) és az ebből fakadó **anomáliákat**:

- **Beszúrási anomália**: nem tudunk új adatot rögzíteni, mert egy másik, hozzá nem kapcsolódó adat hiányzik.
- **Módosítási anomália**: egy adat módosításakor sok helyen kellene egyszerre javítani, és ha ez elmarad, ellentmondás keletkezik.
- **Törlési anomália**: egy rekord törlésével véletlenül más, fontos információ is elvész.

## A normálformák (áttekintés)

1. **Első normálforma (1NF)**: minden mező **atomi (oszthatatlan)** értéket tartalmaz (nincs pl. egy cellában felsorolva több telefonszám), és nincsenek ismétlődő oszlopcsoportok.
2. **Második normálforma (2NF)**: teljesíti az 1NF-et, és minden nem kulcs mező **teljesen függ** az elsődleges kulcstól (összetett kulcs esetén nem csak annak egy részétől).
3. **Harmadik normálforma (3NF)**: teljesíti a 2NF-et, és nincs **tranzitív függés** — egy nem kulcs mező nem függhet egy másik, szintén nem kulcs mezőtől.

## Egyszerű példa a normalizálásra

Ha egy táblában minden rendeléshez feltüntetjük az ügyfél nevét és címét is (nem külön Ügyfél táblában), akkor minden egyes rendelésnél megismétlődik ugyanaz a név és cím — ez redundancia. Ha az ügyfél elköltözik, minden egyes rendelési sorban külön-külön kellene módosítani a címet (módosítási anomália). A helyes megoldás: külön **Ügyfelek** tábla (Ügyfél_ID, Név, Cím) és külön **Rendelések** tábla (Rendelés_ID, Ügyfél_ID mint idegen kulcs, Dátum, Összeg) — így az ügyfél adatai csak egyszer szerepelnek.

## A normalizálás ára

A magasabb normálforma kevesebb redundanciát, de több táblát és több összekapcsolást (JOIN műveletet) jelent a lekérdezéseknél — a gyakorlatban ezért néha tudatosan **denormalizálnak** (visszavisznek redundanciát) a lekérdezések gyorsítása érdekében, különösen nagy, olvasásintenzív rendszereknél.

## Összefoglalás

A relációs adatmodell és a normalizálás megértése alapvető ahhoz, hogy egy adatbázist hatékonyan, ellentmondásmentesen és könnyen karbantarthatóan tudjunk megtervezni.
`,
    key_concepts: [
      "relációs adatmodell (tábla, sor, oszlop)",
      "elsődleges és idegen kulcs",
      "adatredundancia és anomáliák",
      "normálformák (1NF, 2NF, 3NF)",
      "denormalizálás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi az elsődleges kulcs (primary key) feladata egy relációs táblában?",
        options: [
          "Egyedien azonosítja a tábla minden egyes rekordját",
          "Meghatározza a tábla oszlopainak színét",
          "Kizárólag a numerikus mezőket jelöli",
          "Automatikusan törli a duplikált táblákat",
        ],
        correct_answer: "Egyedien azonosítja a tábla minden egyes rekordját",
        explanation: "Az elsődleges kulcs olyan mező (vagy mezőkombináció), amely a táblán belül egyedien azonosítja az egyes rekordokat, és nem lehet üres vagy ismétlődő.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az idegen kulcs (foreign key) fogalma?",
        options: [
          "Egy oszlop, amely egy másik tábla elsődleges kulcsára hivatkozik, kapcsolatot teremtve a táblák között",
          "Egy oszlop, amely mindig szöveges adatot tartalmaz",
          "Egy tábla, amely nem tartozik az adatbázishoz",
          "Egy kulcs, amelyet csak külföldi felhasználók használhatnak",
        ],
        correct_answer: "Egy oszlop, amely egy másik tábla elsődleges kulcsára hivatkozik, kapcsolatot teremtve a táblák között",
        explanation: "Az idegen kulcs egy olyan mező, amely egy másik tábla elsődleges kulcsára mutat, ezáltal létrehozva a táblák közötti kapcsolatot.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a normalizálás fő célja?",
        options: [
          "Az adatredundancia és az ebből fakadó anomáliák (beszúrási, módosítási, törlési) megszüntetése",
          "Az adatbázis fájlméretének minden áron való növelése",
          "A táblák számának csökkentése egyetlen táblára",
          "A lekérdezések futási idejének garantált csökkentése minden esetben",
        ],
        correct_answer: "Az adatredundancia és az ebből fakadó anomáliák (beszúrási, módosítási, törlési) megszüntetése",
        explanation: "A normalizálás célja a felesleges adatismétlődés (redundancia) és az ebből eredő beszúrási, módosítási és törlési anomáliák kiküszöbölése.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit ír elő az első normálforma (1NF)?",
        options: [
          "Minden mező atomi (oszthatatlan) értéket tartalmazzon, ne legyenek ismétlődő oszlopcsoportok",
          "Minden táblának pontosan öt oszlopa legyen",
          "Csak numerikus adatok szerepelhetnek a táblákban",
          "Minden táblának legalább két idegen kulccsal kell rendelkeznie",
        ],
        correct_answer: "Minden mező atomi (oszthatatlan) értéket tartalmazzon, ne legyenek ismétlődő oszlopcsoportok",
        explanation: "Az 1NF megköveteli, hogy minden mező oszthatatlan (atomi) értéket tartalmazzon, és ne legyenek ismétlődő oszlopcsoportok a táblában.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy táblában minden rendeléshez újra feltüntetik az ügyfél teljes nevét és címét. Milyen probléma keletkezik, ha az ügyfél elköltözik?",
        options: [
          "Módosítási anomália: minden érintett rendelési sorban külön-külön kellene javítani a címet",
          "Beszúrási anomália: nem lehet új rendelést rögzíteni",
          "A tábla automatikusan törlődik",
          "Nincs semmilyen probléma, mert a redundancia mindig előnyös",
        ],
        correct_answer: "Módosítási anomália: minden érintett rendelési sorban külön-külön kellene javítani a címet",
        explanation: "Mivel az ügyfél adatai redundánsan, minden rendelési sorban külön szerepelnek, egy változás (költözés) esetén minden előfordulást külön kellene módosítani — ez a módosítási anomália klasszikus példája.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "er-diagramok-es-kapcsolattipusok",
    title: "ER-diagramok és kapcsolattípusok",
    level: "emelt",
    theme: "Adatbázis-kezelés",
    order_index: 16,
    summary_markdown:
      "Az entitás-kapcsolat (ER) diagram az adatbázis-tervezés vizuális eszköze: az entitásokat, attribútumaikat és a köztük lévő kapcsolatokat (1:1, 1:N, N:M) ábrázolja.",
    content_markdown: `
## Mi az ER-diagram?

Az **entitás-kapcsolat diagram (Entity-Relationship diagram, ER-diagram)** egy vizuális eszköz, amellyel az adatbázis tervezésekor még a tényleges táblák létrehozása előtt modellezzük, milyen entitások (dolgok, fogalmak) és milyen kapcsolatok szerepelnek a rendszerben.

## Az ER-diagram alapelemei

- **Entitás (entity)**: egy önállóan azonosítható "dolog" vagy fogalom, amelyről adatot tárolunk (pl. Diák, Tanár, Kurzus). A diagramon jellemzően téglalappal jelöljük.
- **Attribútum (attribútum/tulajdonság)**: az entitás jellemzője (pl. a Diák entitás attribútumai: Név, Születési dátum, Diákazonosító). Ovális alakzattal jelöljük.
- **Kapcsolat (reláció)**: két (vagy több) entitás közötti összefüggés (pl. egy Diák "felvesz" egy Kurzust). Rombusz alakzattal jelöljük.
- **Kulcsattribútum**: az entitást egyedien azonosító attribútum, aláhúzással jelölve a diagramon.

## Kapcsolattípusok (számosság)

A kapcsolatok jellemzésére a **számosságot (cardinality)** használjuk, amely megmutatja, hány példány kapcsolódhat egymáshoz:

1. **Egy-az-egyhez (1:1)**: egy entitáspéldány pontosan egy másik entitáspéldányhoz kapcsolódik. Példa: egy Személy egy Személyi igazolványhoz tartozik, és fordítva.
2. **Egy-a-többhöz (1:N)**: egy entitáspéldányhoz több másik entitáspéldány kapcsolódhat, de fordítva csak egy. Példa: egy Tanár több Osztályt is taníthat, de (egy egyszerűsített modellben) egy Osztálynak csak egy osztályfőnöke van.
3. **Több-a-többhöz (N:M)**: mindkét oldalon több példány kapcsolódhat egymáshoz. Példa: egy Diák több Kurzust vehet fel, és egy Kurzusra több Diák is jelentkezhet.

## Az N:M kapcsolat feloldása

Mivel a relációs adatbázisokban egy tábla nem tud közvetlenül N:M kapcsolatot megvalósítani, egy **kapcsolótáblát (junction/köztes tábla)** kell létrehozni, amely mindkét entitás elsődleges kulcsát idegen kulcsként tartalmazza. Példa: a Diák és Kurzus közötti N:M kapcsolatot egy "Beiratkozás" tábla oldja fel (Diák_ID, Kurzus_ID, esetleg Dátum, Érdemjegy).

## Gyenge entitás

Egy **gyenge entitás** olyan entitás, amelynek nincs önálló, elegendő kulcsattribútuma az egyedi azonosításhoz, és egy másik (erős) entitástól függ a létezése — például egy "Számlatétel" entitás csak egy adott "Számla" kontextusában azonosítható egyértelműen.

## Az ER-diagram szerepe a fejlesztési folyamatban

Az ER-diagram a **koncepcionális tervezési fázis** eszköze: még azelőtt tisztázza az adatok szerkezetét és összefüggéseit, mielőtt a tényleges adatbázis-táblákat (SQL CREATE TABLE utasításokkal) létrehoznánk. Egy jól elkészített ER-diagram jelentősen csökkenti a későbbi tervezési hibák (pl. rossz kapcsolattípus-választás) kockázatát.

## Összefoglalás

Az ER-diagramok segítségével az adatbázis-tervező átlátható, egyértelmű módon rögzítheti az entitásokat, attribútumokat és kapcsolatokat, mielőtt a technikai megvalósításra (táblák, kulcsok) rátérne.
`,
    key_concepts: [
      "entitás és attribútum",
      "kapcsolat (reláció) és számosság",
      "1:1, 1:N, N:M kapcsolat",
      "kapcsolótábla (junction table)",
      "gyenge entitás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit ábrázol egy ER-diagram rombusz alakú eleme?",
        options: [
          "Egy kapcsolatot (relációt) két entitás között",
          "Egy entitást",
          "Egy attribútumot",
          "Egy adatbázis-táblát fizikai formában",
        ],
        correct_answer: "Egy kapcsolatot (relációt) két entitás között",
        explanation: "Az ER-diagramban a rombusz alakzat jelöli a kapcsolatot (relációt) két vagy több entitás között.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik példa illusztrálja legjobban az 1:N (egy-a-többhöz) kapcsolatot?",
        options: [
          "Egy Tanár több Osztályt taníthat, de egy Osztálynak csak egy osztályfőnöke van",
          "Egy Diák több Kurzust vehet fel, és egy Kurzusra több Diák is jelentkezhet",
          "Egy Személy pontosan egy Személyi igazolvánnyal rendelkezik",
          "Egy Könyv pontosan egy ISBN-számmal rendelkezik",
        ],
        correct_answer: "Egy Tanár több Osztályt taníthat, de egy Osztálynak csak egy osztályfőnöke van",
        explanation: "Az 1:N kapcsolatban az egyik oldalon (Tanár) egy példányhoz több a másik oldalon (Osztály) kapcsolódhat, de fordítva csak egy.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan valósítható meg egy N:M (több-a-többhöz) kapcsolat egy relációs adatbázisban?",
        options: [
          "Egy kapcsolótáblával, amely mindkét entitás elsődleges kulcsát idegen kulcsként tartalmazza",
          "Egyszerűen egy közös oszloppal mindkét eredeti táblában",
          "N:M kapcsolat nem valósítható meg relációs adatbázisban",
          "Az egyik entitást törölni kell",
        ],
        correct_answer: "Egy kapcsolótáblával, amely mindkét entitás elsődleges kulcsát idegen kulcsként tartalmazza",
        explanation: "Mivel a relációs modell közvetlenül nem tud N:M kapcsolatot kezelni, egy köztes (kapcsoló) táblát kell létrehozni, amely mindkét eredeti tábla kulcsát idegen kulcsként tartalmazza.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a 'gyenge entitást' egy ER-diagramban?",
        options: [
          "Nincs önálló, elegendő kulcsattribútuma, és egy másik entitástól függ a létezése",
          "Mindig a legfontosabb entitás a modellben",
          "Soha nem lehet attribútuma",
          "Csak numerikus adatokat tartalmazhat",
        ],
        correct_answer: "Nincs önálló, elegendő kulcsattribútuma, és egy másik entitástól függ a létezése",
        explanation: "A gyenge entitás olyan entitás, amely önmagában nem azonosítható egyedien, létezése egy másik (erős) entitáshoz kötődik.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az ER-diagram szerepe az adatbázis-fejlesztési folyamatban?",
        options: [
          "A koncepcionális tervezési fázisban tisztázza az entitásokat és kapcsolataikat a táblák tényleges létrehozása előtt",
          "Ez az SQL lekérdezések futtatására szolgáló program",
          "Kizárólag a végleges adatbázis biztonsági mentésére használják",
          "Az adatbázis fizikai tárhelyét jelöli ki a szerveren",
        ],
        correct_answer: "A koncepcionális tervezési fázisban tisztázza az entitásokat és kapcsolataikat a táblák tényleges létrehozása előtt",
        explanation: "Az ER-diagram a tervezés korai, koncepcionális szakaszában segít átgondolni és vizualizálni az adatok szerkezetét, mielőtt a fizikai táblákat létrehoznánk.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "sql-lekerdezesek-alapjai",
    title: "SQL lekérdezések alapjai (SELECT, WHERE, JOIN, csoportosítás)",
    level: "emelt",
    theme: "Adatbázis-kezelés",
    order_index: 17,
    summary_markdown:
      "Az SQL (Structured Query Language) a relációs adatbázisok lekérdezésének szabványos nyelve. Ez a tétel a SELECT, WHERE, JOIN és a csoportosító (GROUP BY) utasítások alapjait mutatja be.",
    content_markdown: `
## Mi az SQL?

Az **SQL (Structured Query Language)** a relációs adatbázisok kezelésére (lekérdezés, módosítás, létrehozás) szolgáló szabványos nyelv. Az érettségin jellemzően az adatlekérdező (SELECT) utasításokra fókuszálnak.

## A SELECT alapszerkezete

SELECT oszlop1, oszlop2 FROM tábla_neve;

Példa: ha van egy "Diakok" táblánk (Diak_ID, Nev, Osztaly, Pontszam oszlopokkal), akkor az összes diák nevét és pontszámát így kérdezhetjük le:

SELECT Nev, Pontszam FROM Diakok;

Ha minden oszlopra kíváncsiak vagyunk, a csillag (*) jokerkaraktert használjuk: SELECT * FROM Diakok;

## Szűrés a WHERE záradékkal

A **WHERE** záradékkal feltételt adhatunk meg, amely alapján a program csak a megfelelő sorokat adja vissza:

SELECT Nev, Pontszam FROM Diakok WHERE Pontszam >= 80;

Több feltétel kombinálható logikai operátorokkal (**AND**, **OR**, **NOT**):

SELECT Nev FROM Diakok WHERE Osztaly = '11.A' AND Pontszam >= 80;

A **LIKE** operátor mintaillesztésre szolgál (% jokerkarakterrel): WHERE Nev LIKE 'K%' — a K betűvel kezdődő neveket adja vissza.

## Rendezés: ORDER BY

Az eredménysorok sorrendjét az **ORDER BY** záradékkal állíthatjuk be:

SELECT Nev, Pontszam FROM Diakok ORDER BY Pontszam DESC;

A DESC (csökkenő) vagy ASC (növekvő, ez az alapértelmezett) kulcsszóval adhatjuk meg a rendezés irányát.

## Táblák összekapcsolása: JOIN

Ha az adatok több, egymással kapcsolatban álló táblában (pl. Diakok és Osztalyok) találhatók, a **JOIN** utasítással kapcsolhatjuk össze őket a közös (kulcs) mező alapján:

SELECT Diakok.Nev, Osztalyok.Osztalynev
FROM Diakok
JOIN Osztalyok ON Diakok.Osztaly_ID = Osztalyok.Osztaly_ID;

A **belső összekapcsolás (INNER JOIN)** csak azokat a sorokat adja vissza, amelyeknél mindkét táblában van egyezés. A **bal oldali összekapcsolás (LEFT JOIN)** az első (bal oldali) tábla összes sorát megtartja, még akkor is, ha a másik táblában nincs hozzá egyező rekord (ilyenkor a hiányzó mezők értéke NULL lesz).

## Csoportosítás: GROUP BY és aggregáló függvények

A **GROUP BY** záradékkal az azonos értékű sorokat csoportokba rendezhetjük, és minden csoportra alkalmazhatunk **aggregáló (összesítő) függvényeket**: COUNT (darabszám), SUM (összeg), AVG (átlag), MAX, MIN.

SELECT Osztaly, AVG(Pontszam) AS Atlag
FROM Diakok
GROUP BY Osztaly;

Ez osztályonként kiszámolja az átlagpontszámot. Ha a csoportokra is szeretnénk feltételt alkalmazni (pl. csak azok az osztályok érdekelnek, ahol az átlag 70 fölött van), a **HAVING** záradékot kell használni (a WHERE csak az összesítés előtti, egyedi sorokra alkalmazható, a HAVING pedig a már csoportosított eredményekre):

SELECT Osztaly, AVG(Pontszam) AS Atlag
FROM Diakok
GROUP BY Osztaly
HAVING AVG(Pontszam) > 70;

## Összefoglaló utasítás-sorrend

A lekérdezés logikai (nem feltétlenül írási) végrehajtási sorrendje: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.

## Miért fontos ez?

Az SQL a világ egyik legelterjedtebb, gyakorlatban is azonnal hasznosítható informatikai nyelve — webalkalmazások, üzleti rendszerek, adatelemzés szinte mindegyike épít relációs adatbázisokra és SQL lekérdezésekre.
`,
    key_concepts: [
      "SELECT és WHERE",
      "JOIN (INNER, LEFT)",
      "GROUP BY és aggregáló függvények",
      "HAVING záradék",
      "ORDER BY",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik SQL utasítás adja vissza csak azokat a diákokat, akiknek pontszáma legalább 80?",
        options: [
          "SELECT Nev FROM Diakok WHERE Pontszam >= 80;",
          "SELECT Nev FROM Diakok ORDER BY Pontszam >= 80;",
          "SELECT Nev FROM Diakok GROUP BY Pontszam >= 80;",
          "SELECT Nev FROM Diakok HAVING Pontszam >= 80;",
        ],
        correct_answer: "SELECT Nev FROM Diakok WHERE Pontszam >= 80;",
        explanation: "A WHERE záradék szolgál a lekérdezés eredményeként visszaadott sorok szűrésére egy feltétel alapján, csoportosítás előtt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mire szolgál a JOIN utasítás az SQL-ben?",
        options: [
          "Két vagy több tábla összekapcsolására egy közös (kulcs) mező alapján",
          "Egy tábla összes sorának törlésére",
          "Egy új tábla létrehozására",
          "A lekérdezés eredményének rendezésére",
        ],
        correct_answer: "Két vagy több tábla összekapcsolására egy közös (kulcs) mező alapján",
        explanation: "A JOIN utasítással kapcsolhatók össze a lekérdezésben a különböző táblák egy közös mező (jellemzően kulcs-idegen kulcs kapcsolat) alapján.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a WHERE és a HAVING záradék között?",
        options: [
          "A WHERE az egyedi sorokat szűri az összesítés előtt, a HAVING a csoportosított eredményekre alkalmazható",
          "A WHERE csak szöveges mezőkre, a HAVING csak numerikus mezőkre használható",
          "A kettő pontosan ugyanazt csinálja, felcserélhetők",
          "A HAVING csak akkor használható, ha nincs GROUP BY az utasításban",
        ],
        correct_answer: "A WHERE az egyedi sorokat szűri az összesítés előtt, a HAVING a csoportosított eredményekre alkalmazható",
        explanation: "A WHERE a csoportosítás előtt, az egyedi rekordokra alkalmazott szűrés, míg a HAVING a GROUP BY után létrejött csoportosított eredményekre alkalmazott feltétel.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit csinál az alábbi lekérdezés? SELECT Osztaly, AVG(Pontszam) FROM Diakok GROUP BY Osztaly;",
        options: [
          "Osztályonként kiszámítja az átlagpontszámot",
          "Törli az osztályok adatait",
          "Rendezi a diákokat ábécésorrendbe",
          "Megszámolja, hány osztály van összesen",
        ],
        correct_answer: "Osztályonként kiszámítja az átlagpontszámot",
        explanation: "A GROUP BY Osztaly az azonos osztályba tartozó sorokat csoportosítja, az AVG(Pontszam) pedig minden csoportra kiszámítja az átlagpontszámot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az INNER JOIN és a LEFT JOIN között?",
        options: [
          "Az INNER JOIN csak az egyező sorokat adja vissza, a LEFT JOIN a bal oldali tábla összes sorát megtartja egyezés hiányában is",
          "Az INNER JOIN mindig gyorsabb, mint a LEFT JOIN, minden esetben",
          "A LEFT JOIN csak numerikus oszlopokkal működik",
          "A kettő között nincs érdemi különbség",
        ],
        correct_answer: "Az INNER JOIN csak az egyező sorokat adja vissza, a LEFT JOIN a bal oldali tábla összes sorát megtartja egyezés hiányában is",
        explanation: "Az INNER JOIN csak azokat a sorokat tartja meg, ahol mindkét táblában van egyezés, míg a LEFT JOIN megtartja a bal oldali tábla összes sorát, a hiányzó jobb oldali adatokat NULL-lal töltve fel.",
        difficulty: 3,
      },
    ],
  },
];
