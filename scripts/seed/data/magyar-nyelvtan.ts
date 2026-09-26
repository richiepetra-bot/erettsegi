import { TopicSeed } from "./angol";

export const magyarNyelvtanTopics: TopicSeed[] = [
  {
    slug: "kommunikacio-alapjai",
    title: "Kommunikáció alapjai",
    level: "mindketto",
    theme: "Nyelvtan és kommunikáció",
    order_index: 1,
    summary_markdown:
      "A kommunikáció tényezői (feladó, vevő, üzenet, kód, csatorna, kontextus) és funkciói (tájékoztató, felszólító, érzelemkifejező, kapcsolatteremtő stb.), valamint a verbális és nem verbális kifejezőeszközök rendszere.",
    content_markdown: `
## A kommunikáció fogalma

A kommunikáció információcsere két vagy több fél között, jelek (nyelvi vagy nem nyelvi) segítségével. A kommunikációs folyamat klasszikus modellje (Roman Jakobson nyelvész nevéhez köthető leírás nyomán) hat tényezőt különböztet meg:

- **feladó** — aki a közlést létrehozza és elindítja
- **vevő/címzett** — aki a közlést fogadja és értelmezi
- **üzenet** — maga a közölt tartalom
- **kód** — az a jelrendszer (pl. egy nyelv), amelyet mindkét fél ismer, és amelyen az üzenet megfogalmazódik
- **csatorna** — az a közeg, amelyen az üzenet eljut a feladótól a vevőig (pl. levegő/hang, papír/írás, elektronikus jel)
- **kontextus (valóságvonatkozás)** — az a helyzet/téma, amelyre az üzenet vonatkozik

## A kommunikáció funkciói

Jakobson modellje szerint minden kommunikációs tényezőhöz tartozik egy-egy nyelvi funkció, amelyek közül egy adott közlésben általában egy vagy néhány dominál:

- **tájékoztató (referenciális) funkció** — a valóságra, a témára irányul, célja az ismeretközlés
- **érzelemkifejező (emotív) funkció** — a feladó érzéseit, viszonyulását fejezi ki
- **felszólító (konatív) funkció** — a vevő befolyásolására, cselekvésre ösztönzésére irányul (kérés, felszólítás)
- **kapcsolatteremtő, -fenntartó, -lezáró (fatikus) funkció** — a kommunikációs csatorna nyitva tartására szolgál (pl. köszönési formulák, "hallasz engem?")
- **metanyelvi funkció** — amikor maga a kód (a nyelv) válik témává (pl. egy szó jelentésének tisztázása)
- **poétikai (esztétikai) funkció** — amikor az üzenet megformáltsága, nyelvi szépsége kerül előtérbe (jellemzően a szépirodalomban)

## Verbális és nem verbális kommunikáció

A kommunikáció alapvetően két nagy csoportra osztható:

- **Verbális kommunikáció**: nyelvi jelek (beszéd, írás) felhasználásával történik, a szavak, mondatok jelentésén keresztül közvetíti az üzenetet.
- **Nem verbális kommunikáció (metakommunikáció)**: nem nyelvi jelekkel (testbeszéd, hanglejtés, arckifejezés) történik, gyakran a verbális üzenetet kíséri, erősíti vagy éppen ellentmond neki. Fő típusai:
  - **kinezikus jelek** — testtartás, gesztusok, arckifejezés (mimika), szemkontaktus
  - **proxemikai jelek** — a térközszabályozás, a beszélgetőpartnerek közötti távolság
  - **akusztikus (paralingvisztikai) jelek** — hangszín, hanglejtés, hangerő, beszédtempó, szünetek

## Kommunikációs zavarok

A sikeres kommunikációt számos tényező akadályozhatja: a **zaj** (bármilyen, az üzenet felfogását zavaró tényező — lehet fizikai, pl. háttérzaj, vagy szemantikai, pl. félreértés), a kód nem megfelelő ismerete (pl. szaknyelvi kifejezések, amelyeket a vevő nem ért), vagy a kontextus eltérő értelmezése a felek között.

## Tömegkommunikáció

A tömegkommunikáció a nagyközönséghez, technikai csatornákon (sajtó, rádió, televízió, internet) eljutó, jellemzően egyirányú kommunikáció, amelyben a visszacsatolás (feedback) korlátozott vagy késleltetett — ez alapvetően megkülönbözteti a személyközi (interperszonális) kommunikációtól.

## Jelentősége

A kommunikáció tényezőinek és funkcióinak ismerete alapvető ahhoz, hogy egy szöveget vagy megnyilatkozást elemezni tudjunk: minden konkrét közlés (egy vers, egy hivatalos levél, egy reklám) elemezhető aszerint, hogy mely tényezők és funkciók dominálnak benne, és ez segít megérteni a szöveg célját és hatásmechanizmusát.
`,
    key_concepts: [
      "kommunikációs tényezők",
      "kommunikációs funkciók",
      "verbális és nem verbális kommunikáció",
      "metakommunikáció",
      "tömegkommunikáció",
    ],
    source_refs: [
      { label: "A kommunikáció tényezői és funkciói (zanza.tv)", url: "https://zanza.tv/magyar-nyelv/kommunikacio/kommunikacio-tenyezoi-es-funkcioi" },
      { label: "Kommunikáció (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Kommunik%C3%A1ci%C3%B3" },
      { label: "A kommunikáció célja – nyelvi kommunikacionizmus (nyest.hu)", url: "https://m.nyest.hu/hirek/a-nyelv-celja-a-kommunikacio-a-nyelvi-kommunikacionizmus" },
      { label: "A kommunikáció – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/nyelvtan/a-kommunikacio/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik kommunikációs tényező az a jelrendszer, amelyet a feladó és a vevő is ismer, és amelyen az üzenet megfogalmazódik?",
        options: ["kód", "csatorna", "kontextus", "üzenet"],
        correct_answer: "kód",
        explanation: "A kód az a közösen ismert jelrendszer (pl. egy nyelv), amelyen a felek kommunikálnak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik funkció szolgál a kommunikációs csatorna nyitva tartására (pl. köszönési formulák)?",
        options: ["fatikus (kapcsolatteremtő) funkció", "referenciális funkció", "poétikai funkció", "metanyelvi funkció"],
        correct_answer: "fatikus (kapcsolatteremtő) funkció",
        explanation: "A fatikus funkció a kapcsolat létrehozására, fenntartására és lezárására szolgál.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely jelek tartoznak a kinezikus jelek közé?",
        options: [
          "testtartás, gesztusok, arckifejezés",
          "hangszín és hanglejtés",
          "a beszélgetőpartnerek közötti térköz",
          "az írott szöveg tipográfiája",
        ],
        correct_answer: "testtartás, gesztusok, arckifejezés",
        explanation: "A kinezikus jelek a testbeszédhez tartoznak: testtartás, gesztusok, mimika, szemkontaktus.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk \"zajnak\" a kommunikációelméletben?",
        options: [
          "bármilyen tényezőt, amely zavarja az üzenet felfogását vagy megértését",
          "kizárólag a fizikai, hallható hangzavart",
          "a feladó és vevő közötti fizikai távolságot",
          "a kommunikáció poétikai funkcióját",
        ],
        correct_answer: "bármilyen tényezőt, amely zavarja az üzenet felfogását vagy megértését",
        explanation: "A zaj tágabb fogalom: lehet fizikai (háttérzaj) vagy szemantikai (félreértés, eltérő kódismeret) is.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi elsősorban a tömegkommunikációt a személyközi kommunikációval szemben?",
        options: [
          "egyirányú, technikai csatornán zajló, korlátozott visszacsatolású kommunikáció",
          "mindig kétirányú, azonnali visszacsatolással",
          "kizárólag írásbeli formában valósul meg",
          "csak négyszemközti helyzetekben fordul elő",
        ],
        correct_answer: "egyirányú, technikai csatornán zajló, korlátozott visszacsatolású kommunikáció",
        explanation: "A tömegkommunikáció jellemzően egyirányú, nagyközönséghez szól, és a visszacsatolás korlátozott vagy késleltetett.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "magyar-nyelv-eredete-es-rokonsaga",
    title: "A magyar nyelv eredete és rokonsága",
    level: "mindketto",
    theme: "Nyelvtan és kommunikáció",
    order_index: 2,
    summary_markdown:
      "A magyar nyelv az uráli nyelvcsalád finnugor ágához tartozik. A rokonságot hangmegfelelések, alapszókincs-egyezések és nyelvtipológiai hasonlóságok bizonyítják, amit Sajnovics János és Gyarmathi Sámuel kutatásai alapoztak meg.",
    content_markdown: `
## A magyar nyelv helye a nyelvek rendszerében

A magyar nyelv az **uráli nyelvcsalád** tagja, azon belül a **finnugor ág**, még szűkebben az **ugor alcsoport** része — legközelebbi rokonai a manysi (vogul) és a hanti (osztják) nyelv, amelyeket Nyugat-Szibériában beszélnek. A finnugor ág távolabbi tagjai közé tartozik a finn és az észt nyelv is, amelyekkel a magyar rokonsága jóval távolabbi, mint gyakran vélik — a finn és a magyar közötti hasonlóság a hétköznapi nyelvhasználatban alig érzékelhető, a rokonság tudományos, nem felszíni hasonlóságon alapul.

## A nyelvrokonság-kutatás úttörői

A magyar nyelv finnugor rokonságának tudományos felismerése a 18. század végére tehető. **Sajnovics János** csillagász-nyelvész 1770-ben megjelent *Demonstratio* című munkájában mutatta ki a magyar és a lapp (számi) nyelv rokonságát, ezzel megalapozva a finnugor nyelvrokonság-elméletet. Munkáját **Gyarmathi Sámuel** folytatta és mélyítette el *Affinitas* (1799) című művében, amely már szélesebb körben, rendszerezett módon bizonyította a magyar nyelv finnugor kapcsolatait.

## A rokonság bizonyítékai

A nyelvrokonság tudományos bizonyítása három fő területre épül:

- **Szabályos hangmegfelelések**: a rokon nyelvek szavai között kimutatható, rendszeres hangváltozási szabályszerűségek (pl. a finnugor szókezdő *p hang a magyarban gyakran f-fé vált: finnugor *pälä → magyar fél).
- **Alapszókincsbeli egyezések**: azok a szavak egyeznek meg (közös eredetűek) a rokon nyelvekben, amelyek a legalapvetőbb, legrégebbi fogalmakat jelölik — testrészek (szem, száj, szív), rokonságnevek (anya, apa — bár ez vitatott is), számnevek, alapvető cselekvések (van, lesz, eszik, iszik), valamint a vadászó-halászó-gyűjtögető életmódhoz kapcsolódó szavak.
- **Nyelvtipológiai egyezések**: szerkezeti hasonlóságok, mint a magánhangzó-harmónia (a toldalékok magánhangzói igazodnak a szótő magánhangzóihoz), a gazdag toldalékrendszer (agglutináló nyelvtípus), a birtokos személyjelek megléte, és az, hogy a jelző mindig megelőzi a jelzett szót.

## Az uráli őshaza kérdése

Az uráli alapnyelvet beszélő közösség feltételezett őshazájának pontos helye a mai napig vitatott kérdés a nyelvtudományban — a jelenlegi feltételezések az Urál-hegység közép-déli vidékét és Nyugat-Szibéria határos területeit valószínűsítik, mintegy a Kr.e. 4-3. évezredre datálva az uráli alapnyelv szétválásának kezdetét.

## Áltudományos elméletek

A tudományos nyelvészeti konszenzussal szemben időről időre felbukkannak alternatív, ún. "délibábos" nyelvrokonítási elméletek (pl. sumer-magyar, türk-magyar, japán-magyar rokonítás), amelyeket a nemzetközi és hazai nyelvtudomány módszertani okokból (a szabályos hangmegfelelések és rendszerszerű egyezések hiánya miatt) nem fogad el tudományosan megalapozottnak.

## Jelentősége

A magyar nyelv finnugor eredetének és rokonságának ismerete alapvető a magyar nyelvtörténet és a nyelv szerkezetének megértéséhez: rávilágít arra, hogy a magyar nyelv — bár földrajzilag és kulturálisan Európa közepén helyezkedik el — nyelvrokonai tekintetében élesen elkülönül a környező indoeurópai nyelvektől.
`,
    key_concepts: [
      "uráli nyelvcsalád",
      "finnugor rokonság",
      "hangmegfelelés",
      "Sajnovics János",
      "magánhangzó-harmónia",
    ],
    source_refs: [
      { label: "A magyar nyelv eredete és rokonsága (zanza.tv)", url: "https://zanza.tv/magyar-nyelv/nyelvtortenet/magyar-nyelv-eredete-es-rokonsaga" },
      { label: "Finnugor nyelvrokonság (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Finnugor_nyelvrokons%C3%A1g" },
      { label: "Finnugor-e a magyar nyelv? (nyest.hu)", url: "https://www.nyest.hu/hirek/finnugor-e-a-magyar-nyelv" },
      { label: "A magyar nyelv eredete és rokonsága – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/nyelvtan/a-magyar-nyelv-eredete-es-rokonsaga/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik nyelvcsaládba és ágba tartozik a magyar nyelv?",
        options: [
          "uráli nyelvcsalád, finnugor ág (ezen belül ugor alcsoport)",
          "indoeurópai nyelvcsalád, szláv ág",
          "altaji nyelvcsalád, török ág",
          "sémi nyelvcsalád",
        ],
        correct_answer: "uráli nyelvcsalád, finnugor ág (ezen belül ugor alcsoport)",
        explanation: "A magyar az uráli nyelvcsalád finnugor ágának ugor alcsoportjába tartozik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik két nyelv a magyar legközelebbi rokona?",
        options: ["a manysi (vogul) és a hanti (osztják)", "a finn és az észt", "a török és a bolgár", "a lapp (számi) és a finn"],
        correct_answer: "a manysi (vogul) és a hanti (osztják)",
        explanation: "A magyar legközelebbi rokonai az ugor alcsoport másik két tagja, a manysi és a hanti nyelv.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki mutatta ki elsőként tudományosan a magyar és a lapp nyelv rokonságát 1770-ben?",
        options: ["Sajnovics János", "Gyarmathi Sámuel", "Kazinczy Ferenc", "Révai Miklós"],
        correct_answer: "Sajnovics János",
        explanation: "Sajnovics János Demonstratio című 1770-es munkája alapozta meg a finnugor nyelvrokonság-elméletet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik nyelvtipológiai jelenség szintén a magyar-finnugor rokonságot támasztja alá?",
        options: [
          "a magánhangzó-harmónia és a gazdag toldalékrendszer",
          "a nyelvtani nem (hím-, nő- és semlegesnem) megléte",
          "a hangsúly szófaji szerepe",
          "a mellékmondatok kötőszó nélküli kapcsolása",
        ],
        correct_answer: "a magánhangzó-harmónia és a gazdag toldalékrendszer",
        explanation: "A magánhangzó-harmónia és az agglutináló, toldalékoló nyelvtípus tipológiai egyezés a finnugor nyelvekkel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan viszonyul a tudományos nyelvészet az olyan elméletekhez, mint a sumer-magyar vagy türk-magyar nyelvrokonítás?",
        options: [
          "nem fogadja el tudományosan megalapozottnak, mivel hiányoznak a szabályos hangmegfelelések",
          "teljes mértékben elfogadja őket a finnugor elmélet alternatívájaként",
          "csak részben, csak a szókincs tekintetében fogadja el",
          "nem foglalkozik a kérdéssel"
        ],
        correct_answer: "nem fogadja el tudományosan megalapozottnak, mivel hiányoznak a szabályos hangmegfelelések",
        explanation: "Ezek az ún. \"délibábos\" elméletek módszertani okokból (rendszerszerű bizonyítékok hiánya) nem elfogadottak a nyelvtudományban.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "nyelvtortenet-es-nyelvujitas",
    title: "Nyelvtörténet és nyelvújítás",
    level: "mindketto",
    theme: "Nyelvtan és kommunikáció",
    order_index: 3,
    summary_markdown:
      "A magyar nyelv történetének korszakai és legrégebbi nyelvemlékei, valamint a 18-19. századi nyelvújítás mozgalma, amely Kazinczy Ferenc vezetésével alkalmassá tette a magyar nyelvet a modern tudomány és irodalom kifejezésére.",
    content_markdown: `
## A magyar nyelvtörténet korszakai

A magyar nyelvtörténet hagyományos korszakolása a következő nagy szakaszokat különbözteti meg: **ősmagyar kor** (a honfoglalás előtti időszak, kb. az önálló magyar nyelv kiválásától a 9. századig), **ómagyar kor** (kb. 896-tól a 16. század elejéig, a mohácsi vészig), **középmagyar kor** (kb. 1526-tól 1772-ig, a felvilágosodás kezdetéig), és **újmagyar kor** (1772-től napjainkig, amelyen belül külön korszakként tartják számon a nyelvújítás időszakát).

## A legrégebbi nyelvemlékek

A magyar nyelv írásos emlékei két nagy csoportba sorolhatók:

- **Szórványemlékek**: idegen nyelvű (jellemzően latin) szövegekbe ékelt magyar szavak, nevek. Legkorábbi jelentős példája a **Tihanyi alapítólevél** (1055), amely latin nyelvű, de tartalmaz magyar szórványokat (pl. "feheruuaru rea meneh hodu utu rea" — "Fehérvárra menő hadi útra").
- **Szövegemlékek**: teljes egészében magyar nyelvű, összefüggő szövegek. A legkorábbi fennmaradt ilyen emlék a **Halotti beszéd és könyörgés** (kb. 1192–1195), amely egy temetési prédikáció szövege, és a magyar nyelv legrégebbi összefüggő szövegemléke. A legkorábbi fennmaradt magyar nyelvű **vers** az **Ómagyar Mária-siralom** (13. század vége), amely Mária fájdalmát fejezi ki fia, Jézus kereszthalála felett.

## A nyelvújítás

A **nyelvújítás** a magyar nyelv tudatos, szervezett, tömeges megújítási mozgalma, amely nagyjából a 18. század utolsó harmadától (Bessenyei György fellépésétől, az 1770-es évektől) a **Magyar Nyelvőr** című folyóirat megindulásáig (1872) tartott — bár a mozgalom legintenzívebb, legharcosabb szakasza a 19. század első két-három évtizedére esik.

**Célja**: a magyar nyelvet alkalmassá tenni a modern polgári élet, a tudomány, a filozófia és az irodalom minden területének kifejezésére — ekkoriban a magyar nyelvből hiányoztak a modern fogalmak (absztrakt tudományos, jogi, technikai kifejezések) megnevezésére szolgáló szavak, mivel az addigi hivatalos és tudományos nyelv a latin volt.

**Vezéralakja Kazinczy Ferenc** volt, aki széphalmi birtokáról szervezte, levelezés útján irányította a mozgalmat, és aki nemcsak szóalkotóként, hanem a stílus megújítójaként (elsőként alkalmazott tudatos esztétikai-stiláris elveket a magyar prózában) is meghatározó szerepet játszott.

## A nyelvújítás módszerei

- **Szóalkotás**: új szavak létrehozása szóösszetétellel (pl. *gőzhajó*), szóelvonással (egy toldaléknak vélt szórészt levágva új szótövet alkotva, pl. *gyár* a "gyárt" igéből), új képzők alkalmazásával, valamint régi, elavult vagy tájnyelvi szavak felelevenítésével.
- **Idegen szavak magyarítása vagy honosítása**: egyes idegen szavakat lefordítottak vagy magyaros alakra hoztak, másokat egyszerűen átvettek és a magyar nyelv rendszeréhez illesztettek.

## Az "ortológus-neológus" vita

A nyelvújítás körül éles vita ("nyelvújítási harc") bontakozott ki a **neológusok** (Kazinczy és követői, akik a merész, akár erőltetett szóalkotást is elfogadták a nyelv gazdagítása érdekében) és az **ortológusok** (a hagyományos, "helyes" nyelvhasználat védelmezői, akik elutasították a túlzottan mesterkélt, nyelvtanilag szabálytalan új szavakat) között. A vita végül a neológusok győzelmével, illetve a két irányzat gyakorlati kiegyezésével zárult — sok nyelvújítási szó (pl. *szabadság, mozdony, gyár, tanár*) mind a mai napig a magyar köznyelv szerves része.

## Jelentősége

A nyelvújítás a magyar nyelvtörténet egyik legmeghatározóbb korszaka: enélkül a mozgalom nélkül a magyar nyelv nem vált volna alkalmassá a modern tudományos, jogi, irodalmi és köznapi fogalmak kifejezésére, és a mai magyar szókincs jelentős része (több ezer, ma is használt szó) egyenesen a nyelvújítás korszakából származik.
`,
    key_concepts: [
      "ómagyar kor",
      "Halotti beszéd és könyörgés",
      "nyelvújítás",
      "Kazinczy Ferenc",
      "ortológus-neológus vita",
    ],
    source_refs: [
      { label: "A magyar nyelvet érő hatások: jövevényszavak, nyelvújítás (zanza.tv)", url: "https://zanza.tv/magyar-nyelv/nyelvtortenet/magyar-nyelvet-ero-hatasok-jovevenyszavak-nyelvujitas" },
      { label: "Nyelvújítás (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Nyelv%C3%BAj%C3%ADt%C3%A1s" },
      { label: "A nyelvújítás többnyelvű kontextusban (e-nyelvmagazin.hu)", url: "https://e-nyelvmagazin.hu/2016/03/22/a-nyelvujitas-tobbnyelvu-kontextusban/" },
      { label: "A nyelvújítás – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/nyelvtan/a-nyelvujitas/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik a magyar nyelv legrégebbi fennmaradt, összefüggő szövegemléke?",
        options: ["Halotti beszéd és könyörgés", "Ómagyar Mária-siralom", "Tihanyi alapítólevél", "Königsbergi töredék"],
        correct_answer: "Halotti beszéd és könyörgés",
        explanation: "A Halotti beszéd és könyörgés (kb. 1192-1195) a legrégebbi fennmaradt, teljes egészében magyar nyelvű, összefüggő szöveg.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik a legkorábbi fennmaradt magyar nyelvű vers?",
        options: ["Ómagyar Mária-siralom", "Halotti beszéd és könyörgés", "Tihanyi alapítólevél", "Szent István intelmei"],
        correct_answer: "Ómagyar Mária-siralom",
        explanation: "Az Ómagyar Mária-siralom (13. század vége) a legkorábbi fennmaradt magyar nyelvű vers.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt a nyelvújítás mozgalmának vezéralakja?",
        options: ["Kazinczy Ferenc", "Kölcsey Ferenc", "Berzsenyi Dániel", "Sajnovics János"],
        correct_answer: "Kazinczy Ferenc",
        explanation: "Kazinczy Ferenc szervezte és irányította széphalmi birtokáról levelezés útján a nyelvújítás mozgalmát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a nyelvújítási harc két szembenálló tábora?",
        options: ["neológusok és ortológusok", "romantikusok és klasszicisták", "urbánusok és népiek", "ódaköltők és balladaköltők"],
        correct_answer: "neológusok és ortológusok",
        explanation: "A neológusok a merész szóalkotást pártolták, az ortológusok a hagyományos nyelvhasználatot védték.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a nyelvújítás fő célja?",
        options: [
          "a magyar nyelvet alkalmassá tenni a modern tudomány, jog és irodalom kifejezésére",
          "a magyar nyelv régies formáinak visszaállítása",
          "a magyar nyelv latinná alakítása",
          "a tájnyelvi különbségek teljes megszüntetése",
        ],
        correct_answer: "a magyar nyelvet alkalmassá tenni a modern tudomány, jog és irodalom kifejezésére",
        explanation: "A nyelvújítás célja a modern polgári élet és tudomány kifejezésére alkalmas szókincs megteremtése volt.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "szovegtipusok",
    title: "Szövegtípusok",
    level: "mindketto",
    theme: "Nyelvtan és kommunikáció",
    order_index: 4,
    summary_markdown:
      "A szöveg mondatoknál nagyobb, összefüggő egység, amely a kommunikáció résztvevőinek száma, funkciója, megjelenési formája és kommunikációs színtere szerint különböző típusokba sorolható: elbeszélő, leíró, érvelő szövegek, gyakorlati szövegfajták.",
    content_markdown: `
## A szöveg fogalma

A szöveg a nyelv és a beszéd legnagyobb egysége: egymással összefüggő mondatok sorából álló, szerkesztett, lezárt egész, amelyet a **szövegkohézió** (a mondatok közötti nyelvi, formai kapcsolóelemek: névmások, kötőszavak, ismétlések) és a **szövegkoherencia** (a tartalmi-logikai összefüggés, a szöveg egészének értelmi egysége) tart össze.

## A szövegtípusok csoportosítási szempontjai

A szövegeket sokféle szempont szerint lehet típusokba sorolni — nincs egyetlen, minden esetben egyértelmű, kizárólagos tipológia:

- **a kommunikáció résztvevőinek száma szerint**: monologikus (egy beszélő fejti ki mondanivalóját, pl. előadás), dialogikus (két fél párbeszéde), illetve több ember közötti (multilogikus, pl. vitaest) szöveg
- **funkció szerint**: elbeszélő, leíró és érvelő szöveg (lásd lentebb részletesen)
- **megjelenési forma szerint**: szóbeli és írásbeli szövegek — ezek eltérő jellemzőkkel bírnak (a szóbeli jellemzően kevésbé megtervezett, spontánabb, a testbeszéd és a hanglejtés is részt vesz a jelentés közvetítésében, míg az írásbeli jellemzően megtervezettebb, választékosabb)
- **kommunikációs színtér szerint**: magánéleti/társalgási, közéleti/hivatalos, tudományos, publicisztikai, szépirodalmi szövegek

## A szövegek típusai funkció szerint

- **Elbeszélő szöveg**: az időbeliséget, az ok-okozati összefüggéseket és a cselekményt állítja középpontba — jellemzően eseménysort, történést mesél el (pl. novella, mese, anekdota, hír).
- **Leíró szöveg**: egy tárgy, személy, helyszín, jelenség vagy folyamat bemutatására irányul, jellemzően statikus, állapotot rögzít (pl. jellemzés, tájleírás).
- **Érvelő szöveg**: célja a hallgatóság/olvasó meggyőzése, álláspontjának befolyásolása — jellemző szerkezete a tézis (állítás) megfogalmazása, azt alátámasztó érvek (esetleg ellenérvek megcáfolása), majd a konklúzió (összegző következtetés) felállítása.

## Monologikus és dialogikus szövegek jellemzői

A **monologikus szövegekben** a kommunikáció egyirányú: egy beszélő fejti ki mondanivalóját, jellemzően előre megtervezhető, terjedelmesebb, jobban megszerkesztett, részletesebben kifejtett tartalommal. A **dialogikus szövegek** ezzel szemben kétirányúak, a felek folyamatosan reagálnak egymásra, jellemzően kevésbé megtervezettek, rövidebb, tagoltabb egységekből (replikákból) épülnek fel.

## Gyakorlati szövegtípusok

Az érettségi és a mindennapi élet szempontjából kiemelten fontosak a **gyakorlati (a munka és a továbbtanulás világához kapcsolódó) szövegtípusok**: önéletrajz, motivációs levél, kérvény, hivatalos levél, meghatalmazás — ezek mindegyikének megvannak a saját, kötött formai és tartalmi szabályai (pl. a hivatalos levél esetében a megszólítás, a tárgymegjelölés, az aláírás rögzített helye és formája).

## Jelentősége

A szövegtípusok ismerete azért alapvető, mert egy konkrét szöveg (legyen az egy vers, egy újságcikk vagy egy önéletrajz) elemzésekor először mindig azonosítani kell, milyen típusú szövegről van szó — ez határozza meg, milyen elvárásokkal, milyen szempontok szerint közelíthetünk hozzá, és milyen nyelvi-stiláris eszközök használata indokolt benne.
`,
    key_concepts: [
      "szövegkohézió és szövegkoherencia",
      "monologikus és dialogikus szöveg",
      "elbeszélő, leíró, érvelő szöveg",
      "kommunikációs színtér",
      "gyakorlati szövegtípusok",
    ],
    source_refs: [
      { label: "A szövegtípusok csoportosítása (zanza.tv)", url: "https://zanza.tv/magyar-nyelv/szoveg/szovegtipusok-csoportositasa" },
      { label: "Szövegnyelvészet (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Sz%C3%B6vegnyelv%C3%A9szet" },
      { label: "A munka világának szövegtípusai (zanza.tv)", url: "https://zanza.tv/magyar-nyelv/szoveg/munka-vilaganak-szovegtipusai" },
      { label: "A szöveg – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/nyelvtan/a-szoveg/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi tartja össze a szöveget mint egységet?",
        options: [
          "a szövegkohézió (formai) és a szövegkoherencia (tartalmi-logikai összefüggés)",
          "kizárólag a helyesírási szabályok betartása",
          "kizárólag a szöveg hossza",
          "kizárólag a szerző szándéka, függetlenül a nyelvi megformálástól",
        ],
        correct_answer: "a szövegkohézió (formai) és a szövegkoherencia (tartalmi-logikai összefüggés)",
        explanation: "A szövegkohézió a nyelvi kapcsolóelemekre, a szövegkoherencia a tartalmi-logikai egységre vonatkozik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szövegtípust jellemzi elsősorban az időbeliség és az ok-okozati összefüggés?",
        options: ["elbeszélő szöveg", "leíró szöveg", "érvelő szöveg", "hivatalos levél"],
        correct_answer: "elbeszélő szöveg",
        explanation: "Az elbeszélő szöveget az időbeliség, az ok-okozati összefüggések és a cselekmény jellemzi.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a jellemző szerkezete egy érvelő szövegnek?",
        options: [
          "tézis, érvek (esetleg ellenérvek cáfolata), konklúzió",
          "bevezetés, helyszínleírás, párbeszéd",
          "cím, dátum, aláírás",
          "expozíció, bonyodalom, tetőpont, megoldás",
        ],
        correct_answer: "tézis, érvek (esetleg ellenérvek cáfolata), konklúzió",
        explanation: "Az érvelő szöveg jellemzően egy állítást (tézist) fogalmaz meg, érvekkel támasztja alá, majd konklúzióval zár.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a monologikus szövegeket a dialogikusokkal szemben?",
        options: [
          "egyirányúak, jellemzően megtervezettebbek és jobban megszerkesztettek",
          "mindig rövidebbek, mint a dialogikus szövegek",
          "kizárólag szóban valósulhatnak meg",
          "nincs bennük semmilyen szerkesztettség",
        ],
        correct_answer: "egyirányúak, jellemzően megtervezettebbek és jobban megszerkesztettek",
        explanation: "A monologikus szövegben egy beszélő fejti ki mondanivalóját, jellemzően előre megtervezve, részletesen kifejtve.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik az a szövegtípus-csoport, amelybe az önéletrajz és a motivációs levél tartozik?",
        options: [
          "gyakorlati (munka világához kapcsolódó) szövegtípusok",
          "szépirodalmi szövegtípusok",
          "tudományos szövegtípusok",
          "publicisztikai szövegtípusok",
        ],
        correct_answer: "gyakorlati (munka világához kapcsolódó) szövegtípusok",
        explanation: "Az önéletrajz és motivációs levél a munka és továbbtanulás világához kapcsolódó gyakorlati szövegtípusok közé tartozik.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "retorika-a-meggyozes-eszkozei",
    title: "Retorika – a meggyőzés eszközei",
    level: "mindketto",
    theme: "Nyelvtan és kommunikáció",
    order_index: 5,
    summary_markdown:
      "A retorika (szónoklattan) az ókori Görögországban kialakult tudomány és művészet, amely a hallgatóság meggyőzésének eszközeit tanulmányozza. Arisztotelész éthosz-pátosz-logosz hármassága és a beszéd felépítésének öt szakasza a mai napig meghatározó modell.",
    content_markdown: `
## A retorika fogalma és eredete

A **retorika** (szónoklattan) a meggyőzés művészete és tudománya: azoknak a nyelvi és előadásbeli eszközöknek a rendszere, amelyekkel egy szónok hallgatóságát egy adott álláspont elfogadására, egy döntés meghozatalára vagy egy cselekvésre próbálja rávenni. A retorika az ókori görög demokráciákban (elsősorban Athénban) alakult ki, ahol a politikai és jogi életben (népgyűlés, bíróság) alapvető fontosságú volt a meggyőző beszéd képessége. A retorika elméleti alapjait **Arisztotelész** *Rétorika* című munkája fektette le, amely a mai napig a retorikaelmélet egyik alapműve.

## A szónoki beszédek fajtái

Arisztotelész három fő beszédtípust különböztetett meg aszerint, hogy milyen színtéren és milyen céllal hangzik el:

- **politikai (tanácsadó) beszéd** — a népgyűlés előtt, jövőbeli döntésekről (pl. háború vagy béke kérdésében)
- **törvényszéki beszéd** — a bíróság előtt, egy múltbeli cselekmény (vád vagy védelem) megítéléséről
- **alkalmi (epideiktikus) beszéd** — ünnepi, dicsőítő vagy gyászbeszéd, amely a jelenre, egy személy vagy esemény méltatására irányul

## A meggyőzés három eszköze

Arisztotelész szerint a hallgatóság meggyőzésének három fő eszköze van:

- **éthosz** — a szónok személyes hitelessége, erkölcsi tekintélye: mennyire tartja hitelesnek, megbízhatónak a hallgatóság magát a beszélőt
- **pátosz** — az érzelmekre hatás: a hallgatóság érzelmi bevonása, meghatása, felindítása
- **logosz** — a logikai érvelés: a racionális, ésszerű bizonyítás, érvek és következtetések rendszere

A leghatékonyabb meggyőzés jellemzően mindhárom eszközt együttesen, egymást erősítve alkalmazza.

## A beszéd megalkotásának szakaszai

A klasszikus retorika a szónoki beszéd elkészítésének öt egymást követő szakaszát (az ún. retorikai "kánont") különbözteti meg:

1. **inventio** (feltalálás/anyaggyűjtés) — a téma átgondolása, az érvek, adatok összegyűjtése
2. **dispositio** (elrendezés) — az összegyűjtött anyag logikus sorrendbe állítása
3. **elocutio** (megfogalmazás/stílus) — a beszéd nyelvi-stiláris kidolgozása
4. **memoria** (megtanulás) — a beszéd memorizálása
5. **pronuntiatio/actio** (előadás) — a beszéd tényleges elmondása, amelyben a hangsúly, a hanglejtés és a testbeszéd is szerepet kap

## A beszéd felépítése

A klasszikus szónoki beszéd jellemző szerkezeti egységei: a **bevezetés** (exordium, amely felkelti a hallgatóság figyelmét és jóindulatát), a **tárgyalás** (narratio — a tények, előzmények ismertetése, majd argumentatio — az érvek kifejtése), és a **befejezés** (peroratio, amely összegez és érzelmi csúcspontra fut ki).

## Retorikai eszközök

A meggyőzés szolgálatában számos nyelvi-stilisztikai eszköz áll, például a **retorikai kérdés** (olyan kérdés, amelyre nem információszerzés, hanem állásfoglalásra ösztönzés a célja), az **ismétlés**, a **fokozás** és az **ellentét** — ezek mind a hallgatóság figyelmének fenntartását és az üzenet emlékezetessé tételét szolgálják.

## Magyar szónoki hagyomány

A magyar történelem és irodalom számos kiemelkedő szónokot adott: **Pázmány Péter** barokk kori hitszónoki beszédei, **Kölcsey Ferenc** országgyűlési beszédei, valamint **Kossuth Lajos** és **Deák Ferenc** reformkori és kiegyezés-kori szónoki teljesítménye egyaránt a magyar retorikai hagyomány csúcspontjai közé tartozik.

## Jelentősége

A retorika ismerete nemcsak történeti-irodalmi érdekesség, hanem gyakorlati haszna is van: a meggyőző kommunikáció alapelvei (éthosz-pátosz-logosz, a beszéd tudatos felépítése) ma is alkalmazhatók vitákban, prezentációkban, esszéírásban — az érettségi szóbeli és írásbeli vizsgarészeiben egyaránt.
`,
    key_concepts: [
      "éthosz, pátosz, logosz",
      "szónoki beszédfajták",
      "a retorika öt szakasza (inventio-dispositio-elocutio-memoria-actio)",
      "retorikai kérdés",
      "bevezetés-tárgyalás-befejezés",
    ],
    source_refs: [
      { label: "A retorika (zanza.tv)", url: "https://zanza.tv/magyar-nyelv/retorika/retorika" },
      { label: "Retorika (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Retorika" },
      { label: "Jó szónok és jó beszéd (zanza.tv)", url: "https://zanza.tv/magyar-nyelv/retorika/jo-szonok-es-jo-beszed" },
      { label: "Retorika – szónoklattan – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/nyelvtan/retorika-szonoklattan/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Ki fektette le a retorika elméleti alapjait az ókori Görögországban?",
        options: ["Arisztotelész", "Platón", "Szophoklész", "Homérosz"],
        correct_answer: "Arisztotelész",
        explanation: "Arisztotelész Rétorika című munkája a retorikaelmélet egyik alapműve.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik fogalom jelöli a szónok személyes hitelességét a meggyőzés eszközei közül?",
        options: ["éthosz", "pátosz", "logosz", "mítosz"],
        correct_answer: "éthosz",
        explanation: "Az éthosz a szónok személyes hitelességére, erkölcsi tekintélyére utal Arisztotelész rendszerében.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szakasz a retorikai \"kánon\" ötödik, a beszéd tényleges elmondását jelentő lépése?",
        options: ["pronuntiatio/actio", "inventio", "dispositio", "elocutio"],
        correct_answer: "pronuntiatio/actio",
        explanation: "A pronuntiatio/actio a beszéd tényleges elmondása, amelyben a hanglejtés és testbeszéd is szerepet kap.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen célt szolgál a retorikai kérdés?",
        options: [
          "nem információszerzés, hanem a hallgatóság állásfoglalásra ösztönzése a célja",
          "kizárólag a beszéd időtartamának növelése",
          "a hallgatóság szórakoztatása vicces kérdésekkel",
          "a szónok saját bizonytalanságának kifejezése",
        ],
        correct_answer: "nem információszerzés, hanem a hallgatóság állásfoglalásra ösztönzése a célja",
        explanation: "A retorikai kérdésre nem várunk tényleges választ, célja a hallgatóság gondolkodásra, állásfoglalásra ösztönzése.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik magyar szónok ismert a reformkori és kiegyezés-kori országgyűlési beszédeiről?",
        options: ["Kossuth Lajos és Deák Ferenc", "Petőfi Sándor és Arany János", "Kazinczy Ferenc és Berzsenyi Dániel", "Babits Mihály és Kosztolányi Dezső"],
        correct_answer: "Kossuth Lajos és Deák Ferenc",
        explanation: "Kossuth Lajos és Deák Ferenc a magyar retorikai hagyomány kiemelkedő, reformkori és kiegyezés-kori alakjai.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "stilusretegek-es-stiluseszkozok",
    title: "Stílusrétegek és stíluseszközök",
    level: "mindketto",
    theme: "Nyelvtan és kommunikáció",
    order_index: 6,
    summary_markdown:
      "A stílus a nyelvi elemek kiválasztásának és elrendezésének módja. A hat hagyományos stílusréteg (társalgási, tudományos, hivatalos, publicisztikai, szónoki, szépirodalmi) és a stíluseszközök (szóképek és alakzatok) rendszere.",
    content_markdown: `
## A stílus fogalma

A **stílus** a nyelvi elemek kiválasztásának és elrendezésének azon módja, amely kifejezi a közlő szándékát, a témához és a hallgatósághoz/olvasóhoz való viszonyát, valamint a kommunikációs helyzet jellegét. Ugyanaz a tartalom nagyon eltérő stílusban fogalmazható meg attól függően, hogy ki, kinek, milyen céllal és milyen helyzetben kommunikál.

## A stílusrétegek

A hagyományos stilisztika hat fő **stílusréteget** különböztet meg, amelyek mindegyikének megvan a maga jellemző szóhasználata, mondatszerkesztése és hangneme:

- **Társalgási (bizalmas) stílusréteg**: a mindennapi, közvetlen, személyes kommunikációra jellemző — egyszerű mondatszerkesztés, köznyelvi és néha szleng szókincs, közvetlenség.
- **Tudományos stílusréteg**: a valóság tényeinek, összefüggéseinek pontos, tárgyilagos bemutatására szolgál — jellemzője a szakszókincs, a személytelenség, a logikus, precíz megfogalmazás.
- **Hivatalos (közéleti) stílusréteg**: a hivatalos ügyintézés, közigazgatás nyelve — szabványosított, személytelen, kötött formulákra épülő.
- **Publicisztikai stílusréteg**: a sajtó, a média nyelvhasználata — a témától, közönségtől és médiumtól függően rendkívül változatos, gyakran alkalmaz neologizmusokat, szóviccet, különböző nyelvváltozatokat, elsődleges célja a tájékoztatás és a figyelem felkeltése.
- **Szónoki (előadói) stílusréteg**: nyilvános beszédhelyzetekre jellemző — retorikai eszközökkel (ismétlés, fokozás, retorikai kérdés), a hallgatóság meggyőzésére, befolyásolására törekszik.
- **Szépirodalmi stílusréteg**: az esztétikai, művészi hatás elérése a cél — itt a szavaknak gyakran a hétköznapitól eltérő, átvitt jelentése is szerepet kap, és az egyéni, eredeti nyelvhasználat különösen fontos.

Minden stílusréteg rendelkezik szóbeli és írásbeli változattal is, és legalább három **stílusszinttel** (választékos, közepesen választékos és igénytelen/durva nyelvhasználat).

## Stíluseszközök: szóképek

A **szóképek** a szépirodalmi (és részben a szónoki, publicisztikai) nyelv jellegzetes kifejezőeszközei, amelyek egy dolog, jelenség vagy fogalom nevét egy másik dologra/fogalomra viszik át valamilyen összefüggés alapján:

- **metafora** — névátvitel hasonlóság alapján (pl. "a szemem fénye")
- **metonímia** — névátvitel érintkezés (ok-okozat, rész-egész más típusú tényleges kapcsolat) alapján (pl. "kiitta a poharat" — nem magát a poharat issza ki)
- **szinekdoché** — a metonímia egy fajtája, rész-egész (vagy általánosabb-egyedibb) viszonyon alapuló névátvitel (pl. "sok szem látja" — az emberre utalva)
- **megszemélyesítés** — élettelen tárgy vagy elvont fogalom emberi tulajdonságokkal, cselekvésekkel való felruházása (pl. "sír az ég")
- **hasonlat** — két dolog kifejezett (hasonlító szóval jelölt) összevetése valamely közös tulajdonság alapján

## Stíluseszközök: alakzatok

Az **alakzatok** a mondat- és szövegszerkezet szintjén ható stíluseszközök, amelyek nem a szavak jelentését, hanem elrendezését, ismétlődését használják ki hatáskeltésre:

- **ismétlés** — egy szó, kifejezés vagy szerkezet többszöri megismétlése nyomatékosítás céljából
- **fokozás** — egyre erősödő jelentésű kifejezések sorozata
- **ellentét** — egymással szembeállított fogalmak, kifejezések együttes szerepeltetése
- **retorikai kérdés** — nem valódi információkérés, hanem állásfoglalásra ösztönző kérdésforma
- **inverzió** — a megszokott szórendtől való eltérés, nyomatékosítás céljából

## Jelentősége

A stílusrétegek és stíluseszközök ismerete elengedhetetlen minden szöveg (különösen szépirodalmi mű) elemzéséhez: segít megérteni, hogyan éri el egy szöveg a hatását, milyen eszközökkel formálja a befogadó gondolatait és érzéseit — ez az elemzési készség az érettségi szövegértési és -elemzési feladatainak egyik alapköve.
`,
    key_concepts: [
      "stílusréteg",
      "szókép (metafora, metonímia, megszemélyesítés)",
      "alakzat (ismétlés, fokozás, ellentét)",
      "retorikai kérdés",
      "stílusszint",
    ],
    source_refs: [
      { label: "Stilisztikai alapismeretek (zanza.tv)", url: "https://zanza.tv/magyar-nyelv/stilisztikai-alapismeretek" },
      { label: "Stilisztika (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Stilisztika" },
      { label: "A képszerűség stíluseszközei a szépirodalmi szövegekben (zanza.tv)", url: "https://zanza.tv/magyar-nyelv/stilisztikai-alapismeretek/kepszeruseg-stiluseszkozei-szepirodalmi-szovegekben" },
      { label: "A stílus – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/nyelvtan/a-stilus/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hány fő stílusréteget különböztet meg a hagyományos stilisztika?",
        options: ["hatot", "hármat", "négyet", "nyolcat"],
        correct_answer: "hatot",
        explanation: "A hagyományos stilisztika hat fő stílusréteget különböztet meg: társalgási, tudományos, hivatalos, publicisztikai, szónoki, szépirodalmi.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szókép esetén beszélünk érintkezésen (pl. ok-okozat, rész-egész) alapuló névátvitelről?",
        options: ["metonímia", "metafora", "megszemélyesítés", "hasonlat"],
        correct_answer: "metonímia",
        explanation: "A metonímia érintkezésen alapuló névátvitel, szemben a metaforával, amely hasonlóságon alapul.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a hivatalos (közéleti) stílusréteget?",
        options: [
          "szabványosított, személytelen, kötött formulákra épülő nyelvhasználat",
          "közvetlen, bizalmas, szleng szókincsű nyelvhasználat",
          "átvitt jelentésű, esztétikai célú nyelvhasználat",
          "kizárólag szóbeli megnyilatkozásokban létező nyelvhasználat",
        ],
        correct_answer: "szabványosított, személytelen, kötött formulákra épülő nyelvhasználat",
        explanation: "A hivatalos stílusréteg a közigazgatás nyelve: szabványosított, személytelen, kötött formulákkal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik stíluseszköz a mondat- és szövegszerkezet szintjén ható, nem a szavak jelentésén alapuló eszköz?",
        options: ["alakzat (pl. ismétlés, fokozás, ellentét)", "szókép (pl. metafora)", "hasonlat", "megszemélyesítés"],
        correct_answer: "alakzat (pl. ismétlés, fokozás, ellentét)",
        explanation: "Az alakzatok a mondat- és szövegszerkezet szintjén hatnak, szemben a szóképekkel, amelyek a szavak jelentésén alapulnak.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a megszemélyesítés?",
        options: [
          "élettelen tárgy vagy elvont fogalom emberi tulajdonságokkal való felruházása",
          "két dolog kifejezett összevetése hasonlító szóval",
          "egy szó vagy kifejezés többszöri megismétlése",
          "a megszokott szórendtől való eltérés",
        ],
        correct_answer: "élettelen tárgy vagy elvont fogalom emberi tulajdonságokkal való felruházása",
        explanation: "A megszemélyesítés egy szókép, amelyben élettelen dolgok emberi tulajdonságokat, cselekvéseket kapnak (pl. \"sír az ég\").",
        difficulty: 2,
      },
    ],
  },
];
