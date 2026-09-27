import { TopicSeed } from "./angol";

export const tortenelem19SzazadTopics: TopicSeed[] = [
  {
    slug: "az-ipari-forradalom",
    title: "Az ipari forradalom",
    level: "mindketto",
    theme: "19. század",
    order_index: 17,
    summary_markdown:
      "A 18. század végi Angliából induló ipari forradalom (gőzgép, gyáripar, vasút) gyökeresen átalakította a termelést és a társadalmat, megteremtve a modern munkásosztályt és a városiasodást, majd a 19. század végi második ipari forradalommal folytatódott.",
    content_markdown: `
## Az ipari forradalom kezdete Angliában

Az **ipari forradalom** a termelés gépesítésének és a gyáripar kialakulásának folyamata, amely a 18. század második felében **Angliában** indult meg. Anglia több okból is kedvező feltételekkel rendelkezett: hatalmas **gyarmatbirodalma** olcsó nyersanyagot és piacot biztosított, fejlett **tőkés bankrendszere** finanszírozni tudta a beruházásokat, bőséges **munkaerő** állt rendelkezésre (részben a mezőgazdaságból felszabaduló, korábban jobbágyi státuszú lakosság), és az ország gazdag volt a kulcsfontosságú nyersanyagokban (szén, vasérc).

## A textilipar és a gépesítés

A klasszikus ipari forradalom vezető ágazata a **textilipar** (elsősorban a pamutfeldolgozás) volt, mivel ez igényelte a legkisebb kezdő tőkebefektetést, és gyakorlatilag korlátlanul állt rendelkezésre hozzá nyersanyag (gyapot a gyarmatokról). Az ágazatot forradalmasító találmányok közé tartozott **John Kay repülő vetélője**, **James Hargreaves és Samuel Crompton fonógépei**, valamint **Edmund Cartwright szövőszéke** (amely akár 50-100 ember munkáját is képes volt kiváltani).

## A gőzgép és az energiaforradalom

Az ipari forradalom legfontosabb technikai áttörése **James Watt gőzgépe** volt, amelyet 1769-ben szabadalmaztatott: a gőzgép — amely a víz mellett bármilyen fűthető helyen működtethető volt, ellentétben a korábbi vízi energiával — alapvetően új energiaforrást biztosított az iparnak, és lehetővé tette a gyárak elhelyezését a víztől független helyeken is. A gőzenergia később a közlekedésben is forradalmi változást hozott: **George Stephenson** mozdonyával 1825-ben nyílt meg az **első vasútvonal**, ezzel megindult a vasúthálózatok kiépülése egész Európában.

## Társadalmi következmények

Az ipari forradalom alapvetően átalakította a társadalmi szerkezetet: tömeges **urbanizáció** (a vidéki lakosság városokba, gyárak köré költözése) indult meg, és kialakult a modern **munkásosztály (proletariátus)**. A korai gyáripari munkakörülmények rendkívül súlyosak voltak: hosszú munkaidő, alacsony bérek, egészségtelen, veszélyes munkakörnyezet, és széles körben elterjedt **gyermekmunka** jellemezte a korszakot — ez hosszú távon munkásmozgalmak és szociális reformok kiindulópontjává vált.

## A második ipari forradalom

A 19. század utolsó harmadától (kb. 1870-től) kezdve új technológiai hullám, a **második ipari forradalom** bontakozott ki: az **elektromosság**, a **vegyipar**, az **acélgyártás** (Bessemer-eljárás) és a **tömegtermelés** (futószalag-elvű gyártás előfutárai) jellemezték. Ez a korszak minőségileg és mennyiségileg is jelentős fejlődést hozott az első ipari forradalomhoz képest, és gyors ütemben terjedt túl Anglia határain, elsősorban Németországban és az Egyesült Államokban.

## Jelentősége

Az ipari forradalom a modern gazdaság és társadalom megszületésének alapvető fordulópontja: a gépesített tömegtermelés, az urbanizáció és a munkásosztály kialakulása gyökeresen átformálta az emberi életmódot, és megalapozta mindazokat a gazdasági-társadalmi folyamatokat (kapitalizmus, szociális kérdés, munkásmozgalmak), amelyek a 19-20. század történelmét meghatározták.
`,
    key_concepts: [
      "textilipar gépesítése",
      "James Watt gőzgépe",
      "urbanizáció és munkásosztály",
      "gyermekmunka",
      "második ipari forradalom",
    ],
    source_refs: [
      { label: "Az ipari forradalom és következményei (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-felvilagosodas-forradalmak-es-polgarosodas-kora/az-ipari-forradalom-es" },
      { label: "Ipari forradalom (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Ipari_forradalom" },
      { label: "Gőzerővel indította el az ipari forradalmat James Watt találmánya (Múlt-kor)", url: "https://mult-kor.hu/gozerovel-inditotta-el-az-ipari-forradalmat-james-watt-talalmanya-20190318" },
      { label: "Az ipari forradalom – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/az-ipari-forradalom/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik országban indult meg az ipari forradalom a 18. század második felében?",
        options: ["Angliában", "Franciaországban", "Németországban", "Magyarországon"],
        correct_answer: "Angliában",
        explanation: "Az ipari forradalom Angliában indult meg, ahol a gyarmatbirodalom, a tőke, a munkaerő és a nyersanyagok kedvező feltételeket teremtettek.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik volt a klasszikus ipari forradalom vezető ágazata?",
        options: ["a textilipar", "a vegyipar", "az elektromos ipar", "az autóipar"],
        correct_answer: "a textilipar",
        explanation: "A textilipar (elsősorban a pamutfeldolgozás) volt a klasszikus ipari forradalom vezető ágazata, mivel kis tőkebefektetést igényelt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki szabadalmaztatta a gőzgépet 1769-ben?",
        options: ["James Watt", "George Stephenson", "James Hargreaves", "Edmund Cartwright"],
        correct_answer: "James Watt",
        explanation: "James Watt 1769-ben szabadalmaztatta a gőzgépet, amely alapvetően új energiaforrást biztosított az iparnak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte elsősorban a korai gyáripari munkakörülményeket?",
        options: [
          "hosszú munkaidő, alacsony bérek, gyermekmunka",
          "rövid munkaidő, magas bérek, szakszervezeti védelem",
          "teljes munkanélküli-ellátás",
          "automatizált, veszélytelen munkakörnyezet"
        ],
        correct_answer: "hosszú munkaidő, alacsony bérek, gyermekmunka",
        explanation: "A korai gyáripari munkakörülmények rendkívül súlyosak voltak: hosszú munkaidő, alacsony bérek és elterjedt gyermekmunka jellemezte őket.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik technológiák jellemezték a második ipari forradalmat?",
        options: [
          "elektromosság, vegyipar, acélgyártás",
          "gőzgép és textilipar",
          "számítógépek és internet",
          "atomenergia"
        ],
        correct_answer: "elektromosság, vegyipar, acélgyártás",
        explanation: "A második ipari forradalom (kb. 1870-től) az elektromosság, a vegyipar, az acélgyártás és a tömegtermelés korszaka volt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi biztosított Angliának olcsó nyersanyagot és piacot az ipari forradalom idején?",
        options: ["a gyarmatbirodalma", "a Habsburg Birodalommal kötött szövetsége", "a Balkán-félsziget gyarmatai", "a Német Császársággal kötött vámunió"],
        correct_answer: "a gyarmatbirodalma",
        explanation: "Anglia hatalmas gyarmatbirodalma olcsó nyersanyagot és piacot biztosított az iparosodáshoz.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik találmányt nevezik \"repülő vetélőnek\"?",
        options: ["John Kay találmányát", "James Watt gőzgépét", "Edmund Cartwright szövőszékét", "George Stephenson mozdonyát"],
        correct_answer: "John Kay találmányát",
        explanation: "John Kay repülő vetélője az egyik legfontosabb találmány volt a textilipar gépesítésében.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kik fejlesztették ki a textilipari fonógépeket a klasszikus ipari forradalom idején?",
        options: ["James Hargreaves és Samuel Crompton", "John Kay és Edmund Cartwright", "James Watt és George Stephenson", "Bessemer és Cartwright"],
        correct_answer: "James Hargreaves és Samuel Crompton",
        explanation: "James Hargreaves és Samuel Crompton fonógépei forradalmasították a textilipart.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kinek a szövőszéke akár 50-100 ember munkáját is képes volt kiváltani?",
        options: ["Edmund Cartwright", "James Watt", "John Kay", "George Stephenson"],
        correct_answer: "Edmund Cartwright",
        explanation: "Edmund Cartwright szövőszéke akár 50-100 ember munkáját is ki tudta váltani.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miben jelentett alapvető előnyt a gőzgép a korábbi vízi energiával szemben?",
        options: [
          "bármilyen fűthető helyen működtethető volt, nem csak víz mellett",
          "kizárólag tengerparton lehetett használni",
          "nem igényelt szenet",
          "csak a textiliparban volt alkalmazható"
        ],
        correct_answer: "bármilyen fűthető helyen működtethető volt, nem csak víz mellett",
        explanation: "A gőzgép a víz mellett bármilyen fűthető helyen működtethető volt, így a gyárak nem függtek a vízenergiától.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kinek a mozdonyával nyílt meg 1825-ben az első vasútvonal?",
        options: ["George Stephenson", "James Watt", "John Kay", "Edmund Cartwright"],
        correct_answer: "George Stephenson",
        explanation: "George Stephenson mozdonyával 1825-ben nyílt meg az első vasútvonal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen társadalmi folyamatot indított el az ipari forradalom a vidéki lakosság körében?",
        options: [
          "tömeges urbanizációt, a gyárak köré költözést",
          "a nemesség elszegényedését",
          "a jobbágyság visszaállítását",
          "a városi lakosság vidékre költözését"
        ],
        correct_answer: "tömeges urbanizációt, a gyárak köré költözést",
        explanation: "Az ipari forradalom nyomán tömeges urbanizáció indult meg, a vidéki lakosság a városokba, gyárak köré költözött.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely országokban terjedt el gyorsan a második ipari forradalom Anglián túl?",
        options: ["Németországban és az Egyesült Államokban", "Franciaországban és Spanyolországban", "Oroszországban és Japánban", "Magyarországon és Ausztriában"],
        correct_answer: "Németországban és az Egyesült Államokban",
        explanation: "A második ipari forradalom gyors ütemben terjedt túl Anglia határain, elsősorban Németországban és az Egyesült Államokban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik eljárás forradalmasította az acélgyártást a második ipari forradalom idején?",
        options: ["a Bessemer-eljárás", "a Cartwright-eljárás", "a Watt-eljárás", "a Stephenson-eljárás"],
        correct_answer: "a Bessemer-eljárás",
        explanation: "A Bessemer-eljárás jelentősen fellendítette az acélgyártást a második ipari forradalom időszakában.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hosszú távú gazdasági-társadalmi folyamatokat alapozott meg az ipari forradalom?",
        options: [
          "a kapitalizmust, a szociális kérdést és a munkásmozgalmakat",
          "a feudalizmus visszaállítását",
          "a gyarmati rendszer megszűnését",
          "a rendi társadalom megerősödését"
        ],
        correct_answer: "a kapitalizmust, a szociális kérdést és a munkásmozgalmakat",
        explanation: "Az ipari forradalom megalapozta azokat a gazdasági-társadalmi folyamatokat, amelyek a 19-20. század történelmét meghatározták.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-reformkor-magyarorszagon",
    title: "A reformkor Magyarországon",
    level: "mindketto",
    theme: "19. század",
    order_index: 18,
    summary_markdown:
      "Az 1825-től 1848-ig tartó reformkor Széchenyi István fokozatos, együttműködő és Kossuth Lajos radikálisabb reformprogramja között feszült, miközben Magyarország gazdasági-kulturális modernizációja (Lánchíd, vasút, Akadémia) is elindult.",
    content_markdown: `
## A reformkor időszaka és jellege

A **reformkor** az 1825-ös országgyűlés összehívásától az 1848-as forradalomig tartó időszak, amelynek során a magyar politikai elit egyre szélesebb köre ismerte fel a feudális berendezkedés (jobbágyság, rendi kiváltságok, elmaradott gazdaság) reformjának szükségességét. A korszak fő kérdései közé tartozott a **jobbágyfelszabadítás**, a **közteherviselés** (a nemesség adómentességének megszüntetése), a gazdasági modernizáció, valamint a Habsburg udvarhoz fűződő viszony rendezése.

## Széchenyi István reformprogramja

**Széchenyi István** gróf 1830-ban megjelent *Hitel* című művével indította el a reformkort: a könyvben — saját, hitelfelvételi nehézségeiből is merítve — amellett érvelt, hogy a magyar gazdaság elmaradottsága elsősorban a tőkehiányra és az elavult birtokviszonyokra (pl. az ősiség intézménye, amely megnehezítette a birtokok szabad adásvételét és jelzáloghitel-felvételét) vezethető vissza. Széchenyi továbbá a *Világ* és a *Stádium* című műveiben fejtette ki nézeteit, tizenkét pontban foglalva össze reformjavaslatait (ősiség eltörlése, tőkefelhalmozás, közteherviselés, jobbágy-földesúri viszony rendezése stb.). Széchenyi módszere a **fokozatosság** és az arisztokráciával, illetve a bécsi udvarral való **együttműködés** volt — nem akart éles konfliktust a Habsburgokkal.

## Kossuth Lajos és a radikálisabb irányvonal

**Kossuth Lajos** az 1840-es évek elejétől, fogságból szabadulása után vált az ellenzék vezéralakjává: a **Pesti Hírlap** szerkesztőjeként (az első valóban tömeghatású magyar politikai lap élén) országos ismertségre tett szert. Kossuth elismerte Széchenyi érdemeit (őt nevezte "a legnagyobb magyarnak"), de nála **radikálisabb, gyorsabb ütemű reformokat** sürgetett, és nem riadt vissza a Habsburg udvarral való nyíltabb konfrontációtól sem, ha az a reformok érdekét szolgálta.

## A reformkori gazdaság és kultúra fejlődése

A reformkor évtizedei alatt jelentős gazdasági-kulturális modernizáció zajlott: az 1830–40-es években gőzhajók jelentek meg a Dunán és a Balatonon, **1846-ban megnyílt az első magyar vasútvonal** (Pest–Vác), megjelentek az első hitelintézetek, és felépült a **Lánchíd** (amely Pestet és Budát kötötte össze, és Széchenyi kezdeményezésére valósult meg). Kulturális téren **1825-ben** alapították meg a **Magyar Tudós Társaságot** (a későbbi Magyar Tudományos Akadémiát) — szintén Széchenyi felajánlásának köszönhetően.

## A reformkor fő vitakérdései

A reformkor politikai vitáinak legfontosabb tétje az volt, hogyan lehet a jobbágyi terheket és a rendi kiváltságokat úgy megreformálni, hogy az egyszerre szolgálja a gazdasági fejlődést és a társadalmi békét, valamint hogyan viszonyuljon Magyarország a Habsburg Birodalomhoz — Széchenyi az együttműködést, Kossuth és a radikálisabb ellenzék inkább az önállóság erősítését részesítette előnyben.

## Jelentősége

A reformkor a modern magyar politikai gondolkodás és a polgári átalakulás előkészítésének korszaka volt: az itt megfogalmazott programok (jobbágyfelszabadítás, közteherviselés, alkotmányos berendezkedés) valósultak meg — jelentős részben — az 1848-as áprilisi törvényekben, így a reformkor közvetlen előzménye és szellemi megalapozója volt az 1848–49-es forradalomnak és szabadságharcnak.
`,
    key_concepts: [
      "Széchenyi István: Hitel (1830)",
      "ősiség",
      "Kossuth Lajos és a Pesti Hírlap",
      "közteherviselés",
      "első magyar vasútvonal (1846)",
    ],
    source_refs: [
      { label: "A reformmozgalom kibontakozása Magyarországon (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-reformkor-forradalom-es-szabadsagharc-magyarorszagon/reformmozgalom-kibontakozasa" },
      { label: "Reformkor (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Reformkor" },
      { label: "Valóban nem tudott Széchenyi István hitelt felvenni 1828-ban? (Múlt-kor)", url: "https://mult-kor.hu/valoban-nem-tudott-szechenyi-istvan-hitelt-felvenni-1828-ban-20201207" },
      { label: "Széchenyi és Kossuth – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/szechenyi-es-kossuth/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik művével indította el Széchenyi István a reformkort 1830-ban?",
        options: ["Hitel", "Világ", "Stádium", "Pesti Hírlap"],
        correct_answer: "Hitel",
        explanation: "Széchenyi 1830-ban megjelent Hitel című műve indította el a reformkort, a tőkehiányra és elavult birtokviszonyokra rámutatva.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen lap szerkesztőjeként vált Kossuth Lajos országosan ismertté?",
        options: ["Pesti Hírlap", "Nemzeti Újság", "Magyar Hírmondó", "Budapesti Közlöny"],
        correct_answer: "Pesti Hírlap",
        explanation: "Kossuth a Pesti Hírlap szerkesztőjeként vált az ellenzék vezéralakjává az 1840-es évek elejétől.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miben különbözött Kossuth és Széchenyi reformfelfogása?",
        options: [
          "Kossuth radikálisabb, gyorsabb reformokat sürgetett, Széchenyi a fokozatosságot és együttműködést részesítette előnyben",
          "Kossuth teljesen elutasította a jobbágyfelszabadítást",
          "Széchenyi köztársaságot akart, Kossuth monarchiát",
          "nem volt köztük érdemi különbség"
        ],
        correct_answer: "Kossuth radikálisabb, gyorsabb reformokat sürgetett, Széchenyi a fokozatosságot és együttműködést részesítette előnyben",
        explanation: "Kossuth radikálisabb, gyorsabb ütemű reformokat sürgetett, míg Széchenyi a fokozatos, együttműködő utat választotta.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor nyílt meg az első magyar vasútvonal?",
        options: ["1846-ban", "1825-ben", "1830-ban", "1848-ban"],
        correct_answer: "1846-ban",
        explanation: "1846-ban nyílt meg az első magyar vasútvonal, Pest és Vác között.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit alapított Széchenyi felajánlása nyomán 1825-ben?",
        options: ["a Magyar Tudós Társaságot (a későbbi Akadémiát)", "a Lánchidat", "a Pesti Hírlapot", "a Nemzeti Színházat"],
        correct_answer: "a Magyar Tudós Társaságot (a későbbi Akadémiát)",
        explanation: "Széchenyi 1825-ös felajánlása nyomán alapították meg a Magyar Tudós Társaságot, a későbbi Magyar Tudományos Akadémiát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikortól meddig tartott a reformkor időszaka?",
        options: ["1825-től 1848-ig", "1848-tól 1867-ig", "1867-től 1918-ig", "1790-től 1825-ig"],
        correct_answer: "1825-től 1848-ig",
        explanation: "A reformkor az 1825-ös országgyűlés összehívásától az 1848-as forradalomig tartó időszak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen elnevezéssel illette Kossuth Lajos Széchenyi Istvánt, elismerve érdemeit?",
        options: ["a legnagyobb magyarnak", "a nemzet ébresztőjének", "a haza megmentőjének", "a reformkor atyjának"],
        correct_answer: "a legnagyobb magyarnak",
        explanation: "Kossuth elismerte Széchenyi érdemeit, és őt nevezte a legnagyobb magyarnak.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik jogintézmény nehezítette meg a birtokok szabad adásvételét és a jelzáloghitel-felvételt?",
        options: ["az ősiség", "a közteherviselés", "a jobbágyfelszabadítás", "a passzív ellenállás"],
        correct_answer: "az ősiség",
        explanation: "Az ősiség intézménye megnehezítette a birtokok szabad adásvételét és a jelzáloghitel-felvételét, ezt bírálta Széchenyi is.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány pontban foglalta össze Széchenyi István a reformjavaslatait a Világ és a Stádium című műveiben?",
        options: ["tizenkét pontban", "négy pontban", "húsz pontban", "egy törvénycikkben"],
        correct_answer: "tizenkét pontban",
        explanation: "Széchenyi a Világ és a Stádium című műveiben tizenkét pontban foglalta össze reformjavaslatait.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik híd megépítése volt Széchenyi István kezdeményezésének eredménye?",
        options: ["a Lánchíd", "az Erzsébet híd", "a Szabadság híd", "a Margit híd"],
        correct_answer: "a Lánchíd",
        explanation: "A Lánchíd, amely Pestet és Budát kötötte össze, Széchenyi kezdeményezésére valósult meg.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen közlekedési eszközök jelentek meg az 1830-40-es években a Dunán és a Balatonon?",
        options: ["gőzhajók", "vitorlás hajók", "gőzmozdonyok", "tutajok"],
        correct_answer: "gőzhajók",
        explanation: "Az 1830-40-es években gőzhajók jelentek meg a Dunán és a Balatonon.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit tekintett Széchenyi a magyar gazdaság elmaradottsága fő okának a Hitel című művében?",
        options: ["a tőkehiányt és az elavult birtokviszonyokat", "a nemzetiségi kérdést", "a Habsburgok katonai túlerejét", "a vasúthiányt"],
        correct_answer: "a tőkehiányt és az elavult birtokviszonyokat",
        explanation: "Széchenyi a magyar gazdaság elmaradottságát elsősorban a tőkehiányra és az elavult birtokviszonyokra vezette vissza.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik reformkori követelés a nemesség adómentességének megszüntetését jelentette?",
        options: ["a közteherviselés", "az ősiség eltörlése", "a jobbágyfelszabadítás", "a sajtószabadság"],
        correct_answer: "a közteherviselés",
        explanation: "A közteherviselés a nemesség adómentességének megszüntetését jelentette.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a jobbágyi terhek reformja mellett a reformkor politikai vitáinak másik legfontosabb tétje?",
        options: [
          "Magyarország viszonya a Habsburg Birodalomhoz",
          "a valutareform",
          "a hadsereg szervezete",
          "a fővárosi közigazgatás átalakítása"
        ],
        correct_answer: "Magyarország viszonya a Habsburg Birodalomhoz",
        explanation: "A reformkor vitáinak fontos tétje volt, hogyan viszonyuljon Magyarország a Habsburg Birodalomhoz.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely 1848-as törvényekben valósultak meg jelentős részben a reformkor programjai?",
        options: ["az áprilisi törvényekben", "a nürnbergi törvényekben", "a kiegyezési törvényekben", "a trianoni békeszerződésben"],
        correct_answer: "az áprilisi törvényekben",
        explanation: "A reformkorban megfogalmazott programok jelentős része az 1848-as áprilisi törvényekben valósult meg.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "1848-49-es-forradalom-es-szabadsagharc",
    title: "Az 1848–49-es forradalom és szabadságharc",
    level: "mindketto",
    theme: "19. század",
    order_index: 19,
    summary_markdown:
      "A pesti forradalom és az áprilisi törvények elindította a polgári átalakulást, majd a Habsburgok és a nemzetiségi mozgalmak elleni honvédő háború orosz intervencióval és a világosi fegyverletétellel zárult 1849-ben.",
    content_markdown: `
## A pesti forradalom (1848. március 15.)

1848. március 13-án Bécsben forradalom tört ki, amelynek híre másnap érkezett Pest-Budára. A **Pilvax kávéházban** összegyűlt fiatalok (köztük Petőfi Sándor, Jókai Mór, Vasvári Pál) azonnali cselekvés mellett döntöttek: **1848. március 15-én** Pesten vér nélküli forradalom zajlott le — a fiatalok felolvasták a **12 pontot** (a reformkövetelések programját) és Petőfi *Nemzeti dal* című versét, cenzúra nélkül nyomtatták ki követeléseiket, és kivívták a pozsonyi országgyűléstől a reformtörvények elfogadását.

## Az áprilisi törvények

Az uralkodó által 1848 áprilisában szentesített **áprilisi törvények** valósították meg a reformkor legfontosabb követeléseit: **eltörölték a jobbágyságot** (a jobbágyi föld a parasztok tulajdonába került, állami kártalanítás mellett), bevezették a **közteherviselést** (a nemesség adómentességének megszüntetését), biztosították a **sajtószabadságot**, és létrehozták Magyarország első **felelős, önálló minisztériumát** (miniszterelnök: Batthyány Lajos gróf) — ezzel Magyarország gyakorlatilag alkotmányos, polgári állammá vált a Habsburg Birodalmon belül.

## A honvédő háború kezdete

A forradalmi vívmányokat hamarosan katonai fenyegetés érte: **1848 szeptemberében** Jellasics horvát bán, a bécsi udvar hallgatólagos támogatásával, Magyarország ellen indított támadást. A magyar honvédsereg **Pákozdnál** (szeptember 29.) aratott győzelmet Jellasics felett — ez volt a szabadságharc első jelentős katonai sikere, és egyben a nyílt fegyveres konfliktus kezdete a Habsburgokkal.

## A tavaszi hadjárat és a függetlenségi nyilatkozat

1849 tavaszán a honvédsereg, **Görgei Artúr** vezetésével, sikeres **tavaszi hadjáratot** vezetett, amelynek során visszafoglalta a Duna-vidék jelentős részét, és felmentette a fővárost. Ebben a sikeres, magabiztos hangulatban mondta ki a debreceni országgyűlés **1849. április 14-én** a **Habsburg-ház trónfosztását** és **Magyarország függetlenségét** — Kossuth Lajos, mint kormányzó-elnök, állt az új, immár teljesen független magyar állam élén.

## Az orosz intervenció és a bukás

A magyar sikerek nyomán Ferenc József segítséget kért **I. Miklós orosz cártól**, aki — a forradalmak visszaszorítására törekvő "Szent Szövetség" szellemében — hatalmas orosz sereget küldött Magyarország ellen. A kétfrontos, immár osztrák és orosz túlerővel szembeni harc esélytelenné vált: **1849. augusztus 13-án**, Világosnál Görgei Artúr letette a fegyvert az orosz csapatok előtt.

## A megtorlás

A szabadságharc bukása után a Habsburg hatalom kegyetlen megtorlást vezetett be: **1849. október 6-án Aradon** kivégezték a magyar honvédsereg tizenhárom tábornokát (az **aradi vértanúkat**), ugyanezen a napon Pesten kivégezték **Batthyány Lajos** első miniszterelnököt is. A megtorlást évekig tartó, szigorú **önkényuralmi rendszer** (Bach-korszak) követte.

## Jelentősége

Az 1848–49-es forradalom és szabadságharc a modern magyar történelem és nemzeti önazonosság egyik legmeghatározóbb eseménysora: a polgári átalakulás (jobbágyfelszabadítás, alkotmányosság) és a nemzeti önvédelem ügyét egyesítette, és — bár katonai vereséggel zárult — erkölcsi-politikai öröksége (a honvédő harc, az aradi vértanúk emléke) a mai napig a magyar nemzeti emlékezet egyik alapköve.
`,
    key_concepts: [
      "12 pont és a Nemzeti dal",
      "áprilisi törvények",
      "pákozdi csata",
      "függetlenségi nyilatkozat (1849. április 14.)",
      "aradi vértanúk",
    ],
    source_refs: [
      { label: "A magyar szabadságharc története 1848–49-ben (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-reformkor-forradalom-es-szabadsagharc-magyarorszagon/magyar-szabadsagharc-tortenete" },
      { label: "1848–49-es forradalom és szabadságharc (Wikipédia)", url: "https://hu.wikipedia.org/wiki/1848%E2%80%9349-es_forradalom_%C3%A9s_szabads%C3%A1gharc" },
      { label: "1848. március 15., a példátlanul hétköznapi forradalom (Múlt-kor)", url: "https://mult-kor.hu/1848-marcius-15-a-peldatlanul-hetkoznapi-forradalom-20230315" },
      { label: "1848-49-es forradalom és szabadságharc – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/1848-49-es-forradalom-es-szabadsagharc/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi történt 1848. március 15-én Pesten?",
        options: [
          "vér nélküli forradalom zajlott, felolvasták a 12 pontot",
          "véres utcai harcok törtek ki",
          "aláírták az áprilisi törvényeket",
          "Jellasics horvát bán megtámadta a várost",
        ],
        correct_answer: "vér nélküli forradalom zajlott, felolvasták a 12 pontot",
        explanation: "1848. március 15-én vér nélküli forradalom zajlott Pesten, a fiatalok felolvasták a 12 pontot és a Nemzeti dalt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit szüntettek meg az áprilisi törvények?",
        options: ["a jobbágyságot és a nemesi adómentességet", "kizárólag a cenzúrát", "kizárólag a Habsburg-uralmat", "a magyar nyelv hivatalos használatát"],
        correct_answer: "a jobbágyságot és a nemesi adómentességet",
        explanation: "Az áprilisi törvények eltörölték a jobbágyságot és bevezették a közteherviselést, megszüntetve a nemesi adómentességet.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor mondta ki a debreceni országgyűlés a Habsburg-ház trónfosztását?",
        options: ["1849. április 14-én", "1848. március 15-én", "1849. augusztus 13-án", "1849. október 6-án"],
        correct_answer: "1849. április 14-én",
        explanation: "1849. április 14-én mondta ki a debreceni országgyűlés a Habsburg-ház trónfosztását és Magyarország függetlenségét.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki küldött katonai segítséget Ferenc Józsefnek a magyar szabadságharc leverésére?",
        options: ["I. Miklós orosz cár", "a porosz király", "a francia császár", "az angol királynő"],
        correct_answer: "I. Miklós orosz cár",
        explanation: "I. Miklós orosz cár hatalmas sereget küldött Magyarország ellen, ami esélytelenné tette a magyar ellenállást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol és mikor végezték ki a magyar honvédsereg tizenhárom tábornokát?",
        options: ["Aradon, 1849. október 6-án", "Világoson, 1849. augusztus 13-án", "Budán, 1849 márciusában", "Pákozdnál, 1848 szeptemberében"],
        correct_answer: "Aradon, 1849. október 6-án",
        explanation: "Az aradi vértanúkat 1849. október 6-án végezték ki Aradon, ugyanaznap, amikor Batthyány Lajost Pesten.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol gyűltek össze a fiatalok 1848. március 15-e előtt, hogy megtervezzék a cselekvést?",
        options: ["a Pilvax kávéházban", "a Nemzeti Múzeumban", "a Nemzeti Színházban", "a Károlyi-kastélyban"],
        correct_answer: "a Pilvax kávéházban",
        explanation: "A Pilvax kávéházban összegyűlt fiatalok (köztük Petőfi, Jókai, Vasvári) döntöttek az azonnali cselekvés mellett.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kinek a versét olvasták fel 1848. március 15-én a pesti tömeg előtt?",
        options: ["Petőfi Sándorét", "Kossuth Lajosét", "Batthyány Lajosét", "Görgei Artúrét"],
        correct_answer: "Petőfi Sándorét",
        explanation: "Március 15-én felolvasták a 12 pontot és Petőfi Sándor Nemzeti dal című versét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki lett Magyarország első felelős miniszterelnöke az áprilisi törvények nyomán?",
        options: ["Batthyány Lajos", "Kossuth Lajos", "Görgei Artúr", "Deák Ferenc"],
        correct_answer: "Batthyány Lajos",
        explanation: "Az áprilisi törvények létrehozták Magyarország első felelős minisztériumát, Batthyány Lajos gróf vezetésével.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki indított támadást Magyarország ellen 1848 szeptemberében, a bécsi udvar hallgatólagos támogatásával?",
        options: ["Jellasics horvát bán", "I. Miklós orosz cár", "Ferenc József", "Windischgrätz"],
        correct_answer: "Jellasics horvát bán",
        explanation: "1848 szeptemberében Jellasics horvát bán indított támadást Magyarország ellen a bécsi udvar hallgatólagos támogatásával.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol aratott győzelmet a magyar honvédsereg Jellasics felett 1848 szeptemberében?",
        options: ["Pákozdnál", "Világosnál", "Aradnál", "Debrecenben"],
        correct_answer: "Pákozdnál",
        explanation: "A magyar honvédsereg Pákozdnál aratott győzelmet Jellasics felett, ez volt a szabadságharc első jelentős katonai sikere.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki vezette az 1849 tavaszi hadjáratot, amely visszafoglalta a Duna-vidék jelentős részét?",
        options: ["Görgei Artúr", "Batthyány Lajos", "Petőfi Sándor", "Jellasics"],
        correct_answer: "Görgei Artúr",
        explanation: "Görgei Artúr vezetésével a honvédsereg sikeres tavaszi hadjáratot vezetett 1849 tavaszán.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen tisztséget töltött be Kossuth Lajos a független Magyarország élén 1849-ben?",
        options: ["kormányzó-elnök", "miniszterelnök", "király", "hadügyminiszter"],
        correct_answer: "kormányzó-elnök",
        explanation: "Kossuth Lajos kormányzó-elnökként állt az új, függetlenné nyilvánított magyar állam élén.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor és hol tette le a fegyvert Görgei Artúr az orosz csapatok előtt?",
        options: [
          "1849. augusztus 13-án, Világosnál",
          "1849. október 6-án, Aradon",
          "1849. április 14-én, Debrecenben",
          "1848. szeptember 29-én, Pákozdnál"
        ],
        correct_answer: "1849. augusztus 13-án, Világosnál",
        explanation: "1849. augusztus 13-án, Világosnál tette le a fegyvert Görgei Artúr az orosz csapatok előtt.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen néven ismert az a szigorú önkényuralmi rendszer, amely a szabadságharc bukását követte?",
        options: ["Bach-korszak", "Rákosi-korszak", "Horthy-korszak", "Kádár-korszak"],
        correct_answer: "Bach-korszak",
        explanation: "A megtorlást évekig tartó, szigorú önkényuralmi rendszer, a Bach-korszak követte.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kik tartoztak a Pilvax kávéházban összegyűlt fiatalok közé 1848. március 15-e előtt?",
        options: ["Jókai Mór és Vasvári Pál", "Deák Ferenc és Andrássy Gyula", "Görgei Artúr és Klapka György", "Bethlen István és Tisza Kálmán"],
        correct_answer: "Jókai Mór és Vasvári Pál",
        explanation: "A Pilvax kávéházban összegyűlt fiatalok közé tartozott Petőfi Sándor, Jókai Mór és Vasvári Pál is.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-kiegyezes-es-a-dualizmus-kora",
    title: "A kiegyezés és a dualizmus kora",
    level: "mindketto",
    theme: "19. század",
    order_index: 20,
    summary_markdown:
      "Deák Ferenc passzív ellenállási politikája és a Habsburgok katonai vereségei vezettek az 1867-es kiegyezéshez, amely létrehozta az Osztrák-Magyar Monarchia dualista államberendezkedését és megnyitotta Magyarország ötven éves gazdasági fellendülésének korszakát.",
    content_markdown: `
## Az önkényuralom kora és az előzmények

A szabadságharc leverése után Magyarországot évekig szigorú **önkényuralmi rendszer** (az ún. Bach-korszak) sújtotta, amely felszámolta a magyar rendi-alkotmányos intézményeket. A Habsburg Birodalom nemzetközi pozícióját azonban egymást követő katonai vereségek gyengítették: az **1859-es solferinói vereség** (Ausztria–Franciaország–Szárdínia háborújában) és különösen az **1866-os königgrätzi vereség** (a porosz–osztrák háborúban) meggyőzték a bécsi udvart arról, hogy a birodalom belső stabilitásának megőrzéséhez elengedhetetlen a magyarokkal való megegyezés.

## Deák Ferenc politikája

**Deák Ferenc**, a szabadságharc utáni magyar politika meghatározó alakja, a passzív ellenállás (a Habsburg intézményekkel való együttműködés megtagadása, de fegyveres ellenállás nélkül) politikáját képviselte, majd fokozatosan a megegyezés felé mozdult el. 1865-ben megjelent **"Húsvéti cikke"** (a Pesti Naplóban) nyitotta meg hivatalosan is a kiegyezési tárgyalások útját, amelyben Deák az 1848-as áprilisi törvények és a Habsburg Birodalom fennmaradásának összeegyeztetésére tett javaslatot.

## A kiegyezés (1867)

**1867-ben** megszülettek a kiegyezési törvények, amelyek létrehozták a **dualista** államberendezkedést: Magyarországnak és Ausztriának (a birodalom másik felének) közös uralkodója (Ferenc József, akit 1867. június 8-án koronáztak meg magyar királlyá is), közös külügye, hadügye és az ezekhez kapcsolódó pénzügye volt, egyébként azonban mindkét fél önálló kormánnyal és parlamenttel rendelkezett. Az így létrejött állam neve **Osztrák–Magyar Monarchia** lett, két fővárossal (Bécs és Budapest). Magyarország első miniszterelnöke a kiegyezés után **Andrássy Gyula** gróf lett.

## A dualista állam működése

A közös ügyek finanszírozására tíz évenként megújítandó **kvótarendszert** vezettek be (Ausztria 70%, Magyarország 30% arányban járult hozzá a közös kiadásokhoz). A dualista rendszer politikai pártstruktúráját alapvetően a kiegyezéshez való viszony határozta meg: a kormánypártok elfogadták a kiegyezést, míg az ellenzéki pártok (pl. a Függetlenségi Párt) a teljes önállóság mellett érveltek.

## Gazdasági fellendülés

A kiegyezés politikai stabilitása és a vámunió (a belső vámhatárok megszüntetése Ausztriával) kedvezett a magyar gazdasági fejlődésnek: a **Magyar Királyi Államvasutak** megalakulásával a vasúthálózat rohamosan bővült (1914-re meghaladta a 20 000 km-t), fejlődött a hitelintézeti rendszer (pl. Magyar Általános Hitelbank), és a mezőgazdaság is jelentős technológiai fejlődésen (nemesített vetőmagok, vetésforgó, műtrágyázás) ment keresztül.

## Jelentősége

A kiegyezés a magyar történelem egyik legfontosabb, pragmatikus politikai kompromisszuma volt: bár nem hozta el a teljes nemzeti függetlenséget, biztosította Magyarország belső önállóságát és ötven éves, viszonylag békés gazdasági-társadalmi fejlődését (az ún. "boldog békeidők" korszakát) egészen az első világháború kitöréséig.
`,
    key_concepts: [
      "passzív ellenállás (Deák Ferenc)",
      "Húsvéti cikk (1865)",
      "közös ügyek és kvótarendszer",
      "Osztrák-Magyar Monarchia",
      "vasúthálózat fejlődése",
    ],
    source_refs: [
      { label: "A kiegyezéshez vezető út (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-kiegyezeshez-vezeto-ut-es-dualizmus-kora-magyarorszagon/kiegyezeshez-vezeto-ut" },
      { label: "Kiegyezés (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Kiegyez%C3%A9s" },
      { label: "Részleges autonómiát hozott a kis kiegyezés (Múlt-kor)", url: "https://mult-kor.hu/20081117_reszleges_autonomiat_hozott_a_kis_kiegyezes" },
      { label: "A kiegyezés előzményei, megszületése és tartalma – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/a-kiegyezes-elozmenyei-megszuletese-es-tartalma/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik vereség győzte meg leginkább a bécsi udvart a magyarokkal való megegyezés szükségességéről?",
        options: ["az 1866-os königgrätzi vereség", "az 1848-as pákozdi vereség", "az 1526-os mohácsi vereség", "az 1526-os mohácsi vereség (elírás)"],
        correct_answer: "az 1866-os königgrätzi vereség",
        explanation: "Az 1866-os porosz-osztrák háborúban elszenvedett königgrätzi vereség döntően hozzájárult a kiegyezési hajlandósághoz.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik írásával nyitotta meg Deák Ferenc hivatalosan is a kiegyezési tárgyalások útját?",
        options: ["a Húsvéti cikk (1865)", "a Hitel", "a 12 pont", "az áprilisi törvények"],
        correct_answer: "a Húsvéti cikk (1865)",
        explanation: "Deák Ferenc 1865-ös Húsvéti cikke nyitotta meg hivatalosan is a kiegyezési tárgyalások útját.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen ügyeket kezeltek közösen Ausztria és Magyarország a kiegyezés után?",
        options: [
          "külügy, hadügy és az ezekhez kapcsolódó pénzügy",
          "oktatás és egészségügy",
          "mezőgazdaság és ipar",
          "minden ügyet közösen kezeltek"
        ],
        correct_answer: "külügy, hadügy és az ezekhez kapcsolódó pénzügy",
        explanation: "A dualista rendszerben csak a külügy, a hadügy és az ezekhez kapcsolódó pénzügy volt közös, egyébként önálló kormányok működtek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki lett Magyarország első miniszterelnöke a kiegyezés után?",
        options: ["Andrássy Gyula", "Deák Ferenc", "Batthyány Lajos", "Kossuth Lajos"],
        correct_answer: "Andrássy Gyula",
        explanation: "Andrássy Gyula gróf lett Magyarország első miniszterelnöke a kiegyezés után 1867-ben.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen arányban osztozott Ausztria és Magyarország a közös kiadásokon a kvótarendszerben?",
        options: ["Ausztria 70%, Magyarország 30%", "50-50%", "Ausztria 30%, Magyarország 70%", "Magyarország nem fizetett semmit"],
        correct_answer: "Ausztria 70%, Magyarország 30%",
        explanation: "A tíz évenként megújítandó kvótarendszerben Ausztria 70%, Magyarország 30% arányban járult hozzá a közös kiadásokhoz.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen politikát képviselt Deák Ferenc a szabadságharc után, mielőtt a megegyezés felé mozdult el?",
        options: ["a passzív ellenállást", "a fegyveres felkelést", "a teljes együttműködést a Habsburgokkal", "a köztársaság kikiáltását"],
        correct_answer: "a passzív ellenállást",
        explanation: "Deák Ferenc kezdetben a passzív ellenállás politikáját képviselte, majd fokozatosan a megegyezés felé mozdult el.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik 1859-es vereség gyengítette a Habsburg Birodalom pozícióját, a königgrätzi vereség előtt?",
        options: ["a solferinói vereség", "a pákozdi vereség", "a világosi fegyverletétel", "a mohácsi vereség"],
        correct_answer: "a solferinói vereség",
        explanation: "Az 1859-es solferinói vereség (Ausztria–Franciaország–Szárdínia háborújában) is gyengítette a Habsburg Birodalom pozícióját.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor koronázták magyar királlyá Ferenc Józsefet?",
        options: ["1867. június 8-án", "1848. március 15-én", "1867. január 1-jén", "1866-ban"],
        correct_answer: "1867. június 8-án",
        explanation: "Ferenc Józsefet 1867. június 8-án koronázták meg magyar királlyá.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi lett a kiegyezéssel létrejött állam neve?",
        options: ["Osztrák–Magyar Monarchia", "Német Császárság", "Habsburg Birodalom", "Szent Szövetség"],
        correct_answer: "Osztrák–Magyar Monarchia",
        explanation: "A kiegyezéssel létrejött dualista állam neve Osztrák–Magyar Monarchia lett, két fővárossal (Bécs és Budapest).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik ellenzéki párt képviselte a dualizmus korában a teljes önállóság gondolatát?",
        options: ["a Függetlenségi Párt", "a Kisgazdapárt", "a Szociáldemokrata Párt", "a Nyilaskeresztes Párt"],
        correct_answer: "a Függetlenségi Párt",
        explanation: "A Függetlenségi Párt az ellenzéki pártok közül a teljes önállóság mellett érvelt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik vállalat megalakulása segítette a magyar vasúthálózat fejlődését a dualizmus korában?",
        options: ["a Magyar Királyi Államvasutak", "a Magyar Tudós Társaság", "a Nemzeti Kerekasztal", "a Népszövetség"],
        correct_answer: "a Magyar Királyi Államvasutak",
        explanation: "A Magyar Királyi Államvasutak megalakulásával a vasúthálózat rohamosan bővült a dualizmus korában.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen technológiai fejlődés jellemezte a dualizmus kori magyar mezőgazdaságot?",
        options: [
          "nemesített vetőmagok, vetésforgó, műtrágyázás elterjedése",
          "a jobbágyrendszer visszaállítása",
          "az ipari termelés teljes leállása",
          "a gőzhajózás megszűnése"
        ],
        correct_answer: "nemesített vetőmagok, vetésforgó, műtrágyázás elterjedése",
        explanation: "A mezőgazdaság technológiai fejlődésen ment keresztül: elterjedt a nemesített vetőmag, a vetésforgó és a műtrágyázás.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen néven emlegetik a kiegyezés utáni, viszonylag békés ötven éves korszakot?",
        options: ["\"boldog békeidők\"", "\"vasfüggöny\"", "\"gulyáskommunizmus\"", "\"reformkor\""],
        correct_answer: "\"boldog békeidők\"",
        explanation: "A kiegyezés ötven éves, viszonylag békés gazdasági-társadalmi fejlődésének korszakát \"boldog békeidőknek\" nevezik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik hitelintézet tartozott a dualizmus kori magyar bankrendszer meghatározó szereplői közé?",
        options: ["a Magyar Általános Hitelbank", "a Magyar Nemzeti Bank", "az Osztrák Nemzeti Bank", "a Postabank"],
        correct_answer: "a Magyar Általános Hitelbank",
        explanation: "A hitelintézeti rendszer fejlődésének fontos szereplője volt például a Magyar Általános Hitelbank.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi határozta meg alapvetően a dualista rendszer politikai pártstruktúráját?",
        options: [
          "a kiegyezéshez való viszony",
          "kizárólag a nemzetiségi hovatartozás",
          "kizárólag a vallási hovatartozás",
          "a pártok nem különböztek egymástól"
        ],
        correct_answer: "a kiegyezéshez való viszony",
        explanation: "A dualista rendszer pártstruktúráját alapvetően a kiegyezéshez való viszony határozta meg: a kormánypártok elfogadták, az ellenzék nem.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "nacionalizmus-es-a-nagyhatalmak-europaban",
    title: "Nacionalizmus és a nagyhatalmak Európában",
    level: "mindketto",
    theme: "19. század",
    order_index: 21,
    summary_markdown:
      "A 19. századi nacionalizmus hullámai (német és olasz egyesítés, balkáni nemzeti mozgalmak) és a nagyhatalmak gyarmatosító versenye a századfordulóra szövetségi rendszerek kialakulásához és egyre éleződő nemzetközi feszültségekhez vezettek.",
    content_markdown: `
## A nacionalizmus fogalma és típusai

A **nacionalizmus** olyan politikai eszmeáramlat, amely a nemzetet tekinti a legfontosabb politikai értéknek, és a nemzet önrendelkezését, egységét, érdekeinek érvényesítését állítja céljai középpontjába. A történettudomány jellemzően két fő típusát különbözteti meg: az **etnikai-nyelvi (kulturális) nacionalizmust** — amely szerint a nemzet határai egybeesnek egy közös nyelvet és kultúrát beszélők közösségével (jellemzően a német nacionalizmusra jellemző) —, és a **politikai (állampolgári) nacionalizmust** — amely szerint egy állam határain belül élő minden ember, nyelvi-kulturális hovatartozástól függetlenül, a nemzet része (ez inkább a francia hagyományra jellemző).

## A német egység

A 19. század közepén még széttagolt német területek egyesítését **Poroszország**, elsősorban **Otto von Bismarck** kancellár irányításával hajtotta végre, három háború (a dán, az osztrák és a francia-porosz háború) révén. **1871-ben** kiáltották ki a **Német Császárságot**, porosz vezetéssel — ez a folyamat egy csapásra Európa egyik legerősebb hatalmává tette a most egyesült Németországot, alapvetően átrendezve a kontinens erőviszonyait.

## Az olasz egység

Hasonló egyesítési folyamat zajlott Itáliában is: **Cavour** piemonti miniszterelnök diplomáciai ügyességgel, **Garibaldi** pedig katonai-forradalmi akciókkal (az "Ezrek" hadjárata Szicíliában és Dél-Itáliában) járult hozzá az olasz államok egyesítéséhez, amely 1861-re, majd Róma 1870-es csatlakozásával teljesedett ki.

## A Balkán és a nemzeti mozgalmak

A 19. század folyamán az **Oszmán Birodalom** fokozatos meggyengülése ("Európa beteg embere") nyomán a Balkán-félszigeten sorra bontakoztak ki nemzeti függetlenségi mozgalmak: a görögök (1830 körül nyerték el függetlenségüket), a szerbek, majd a bolgárok is fokozatosan kivívták önállóságukat vagy autonómiájukat. A térség rendkívül feszült maradt, mivel a különböző balkáni népek nemzeti törekvései gyakran egymással is ütköztek, miközben a nagyhatalmak (Oroszország, Ausztria–Magyarország) is versengő érdekeket érvényesítettek a régióban.

## A nagyhatalmak gyarmatosító politikája

A 19. század második felétől felgyorsult a nagyhatalmak **gyarmatosító versenye**, különösen Afrikában (az ún. "Afrika felosztása"): **Nagy-Britannia** észak-déli irányú (kairó–fokvárosi), **Franciaország** pedig kelet-nyugati irányú gyarmatbirodalom kiépítésére törekedett, emellett Németország, Belgium és más hatalmak is jelentős afrikai és ázsiai területeket szereztek meg.

## A szövetségi rendszerek kialakulása

A századforduló idejére Európa nagyhatalmai két nagy, egymással szemben álló **szövetségi rendszerbe** tömörültek: a **Hármas szövetségbe** (Németország, Ausztria–Magyarország, Olaszország) és a későbbi **Antantba** (Franciaország, Oroszország, majd Nagy-Britannia). Ezek a szövetségi rendszerek, a fegyverkezési verseny és a Balkán feszültségei együttesen alapozták meg azt a robbanékony nemzetközi helyzetet, amely végül **1914-ben az első világháború kitöréséhez** vezetett.

## Jelentősége

A 19. századi nacionalizmus és a nagyhatalmi versengés alapvetően átformálta Európa politikai térképét (Németország és Olaszország egyesülése, a Balkán fokozatos átrendeződése), miközben a gyarmatosítási verseny és a szövetségi rendszerek kialakulása egyre feszültebb nemzetközi légkört teremtett — ez a folyamat közvetlen előzménye és magyarázó tényezője az első világháború kitörésének.
`,
    key_concepts: [
      "etnikai-nyelvi és politikai nacionalizmus",
      "német egység (Bismarck, 1871)",
      "olasz egység (Cavour, Garibaldi)",
      "Afrika felosztása",
      "Hármas szövetség és Antant",
    ],
    source_refs: [
      { label: "A nagyhatalmi ellentétek kiéleződése az I. világháború előtt (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-nemzetallamok-es-birodalmi-politika-kora/nagyhatalmi-ellentetek-kielezodese-az-i" },
      { label: "Nacionalizmus (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Nacionalizmus" },
      { label: "Nagyhatalmak és katonai-, politikai szövetségek a századfordulón – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/nagyhatalmak-es-katonai-politikai-szovetsegek-a-szazadfordulon/" },
      { label: "Rubicon: 1789. július 14. A Bastille bevétele (kalendárium)", url: "https://rubicon.hu/hu/kalendarium/1789-julius-14-a-bastille-bevetele" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Ki irányította a német egyesítést, amely 1871-ben a Német Császárság kikiáltásához vezetett?",
        options: ["Otto von Bismarck", "Cavour", "Garibaldi", "Metternich"],
        correct_answer: "Otto von Bismarck",
        explanation: "Bismarck porosz kancellár három háború révén irányította a német területek egyesítését, amely 1871-ben teljesedett ki.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki vezette az \"Ezrek\" hadjáratát Szicíliában és Dél-Itáliában az olasz egyesítés során?",
        options: ["Garibaldi", "Cavour", "Bismarck", "Napóleon"],
        correct_answer: "Garibaldi",
        explanation: "Garibaldi katonai-forradalmi akciókkal, az Ezrek hadjáratával járult hozzá az olasz egyesítéshez.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik birodalom meggyengülése nyomán bontakoztak ki a balkáni nemzeti mozgalmak a 19. században?",
        options: ["az Oszmán Birodalom", "az Osztrák-Magyar Monarchia", "az Orosz Birodalom", "a Brit Birodalom"],
        correct_answer: "az Oszmán Birodalom",
        explanation: "Az Oszmán Birodalom fokozatos meggyengülése nyomán bontakoztak ki a görög, szerb, bolgár nemzeti mozgalmak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik két szövetségi rendszer állt szemben egymással a századfordulón?",
        options: [
          "a Hármas szövetség és az Antant",
          "a NATO és a Varsói Szerződés",
          "a Szent Szövetség és a Bécsi Kongresszus",
          "a Hanza-szövetség és a Liga"
        ],
        correct_answer: "a Hármas szövetség és az Antant",
        explanation: "A Hármas szövetség (Németország, Ausztria-Magyarország, Olaszország) és az Antant (Franciaország, Oroszország, Nagy-Britannia) álltak szemben egymással.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik kontinensen zajlott a nagyhatalmak legintenzívebb gyarmatosító versenye a 19. század végén?",
        options: ["Afrikában", "Dél-Amerikában", "Ausztráliában", "Antarktiszon"],
        correct_answer: "Afrikában",
        explanation: "Az ún. \"Afrika felosztása\" volt a nagyhatalmak (elsősorban Nagy-Britannia és Franciaország) legintenzívebb gyarmatosítási versenyének színtere.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit tekint a nacionalizmus a legfontosabb politikai értéknek?",
        options: ["a nemzetet", "az egyházat", "a birodalmat", "az osztályt"],
        correct_answer: "a nemzetet",
        explanation: "A nacionalizmus a nemzetet tekinti a legfontosabb politikai értéknek, és önrendelkezését állítja céljai középpontjába.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik nacionalizmus-típus szerint a nemzet határai egybeesnek a közös nyelvet és kultúrát beszélők közösségével?",
        options: ["az etnikai-nyelvi (kulturális) nacionalizmus", "a politikai (állampolgári) nacionalizmus", "a gazdasági nacionalizmus", "a vallási nacionalizmus"],
        correct_answer: "az etnikai-nyelvi (kulturális) nacionalizmus",
        explanation: "Az etnikai-nyelvi nacionalizmus szerint a nemzet határai a közös nyelvet és kultúrát beszélők közösségével esnek egybe, jellemzően a német nacionalizmusra jellemző.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik nemzeti hagyományra jellemzőbb a politikai (állampolgári) nacionalizmus?",
        options: ["a francia hagyományra", "a német hagyományra", "az orosz hagyományra", "az oszmán hagyományra"],
        correct_answer: "a francia hagyományra",
        explanation: "A politikai (állampolgári) nacionalizmus, amely szerint az állam határain belül élő minden ember a nemzet része, inkább a francia hagyományra jellemző.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt az a piemonti miniszterelnök, aki diplomáciai ügyességgel járult hozzá az olasz egyesítéshez?",
        options: ["Cavour", "Garibaldi", "Bismarck", "Metternich"],
        correct_answer: "Cavour",
        explanation: "Cavour piemonti miniszterelnök diplomáciai ügyességgel járult hozzá az olasz államok egyesítéséhez.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évre teljesedett ki az olasz egység Róma csatlakozásával?",
        options: ["1870-re", "1861-re", "1871-re", "1848-ra"],
        correct_answer: "1870-re",
        explanation: "Az olasz egység 1861-re, majd Róma 1870-es csatlakozásával teljesedett ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik nép nyerte el függetlenségét az Oszmán Birodalomtól 1830 körül?",
        options: ["a görögök", "a szerbek", "a bolgárok", "a horvátok"],
        correct_answer: "a görögök",
        explanation: "A görögök 1830 körül nyerték el függetlenségüket az Oszmán Birodalomtól.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen irányú gyarmatbirodalom kiépítésére törekedett Nagy-Britannia Afrikában?",
        options: ["kairó–fokvárosi (észak-déli) irányú", "kelet-nyugati irányú", "csak nyugat-afrikai irányú", "csak dél-afrikai irányú"],
        correct_answer: "kairó–fokvárosi (észak-déli) irányú",
        explanation: "Nagy-Britannia észak-déli irányú (kairó–fokvárosi) gyarmatbirodalom kiépítésére törekedett Afrikában.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen irányú gyarmatbirodalom kiépítésére törekedett Franciaország Afrikában?",
        options: ["kelet-nyugati irányú", "kairó–fokvárosi irányú", "csak észak-afrikai irányú", "csak dél-afrikai irányú"],
        correct_answer: "kelet-nyugati irányú",
        explanation: "Franciaország kelet-nyugati irányú gyarmatbirodalom kiépítésére törekedett Afrikában.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte a balkáni nemzeti mozgalmak egymáshoz való viszonyát a 19. században?",
        options: [
          "a különböző balkáni népek nemzeti törekvései gyakran egymással is ütköztek",
          "teljes békés együttélés jellemezte a régiót",
          "az Oszmán Birodalom megerősödött általuk",
          "nem volt nagyhatalmi érdekütközés a régióban"
        ],
        correct_answer: "a különböző balkáni népek nemzeti törekvései gyakran egymással is ütköztek",
        explanation: "A Balkán rendkívül feszült maradt, mivel a különböző népek nemzeti törekvései gyakran egymással is ütköztek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen tényezők alapozták meg együttesen az első világháborúhoz vezető feszült nemzetközi helyzetet?",
        options: [
          "a szövetségi rendszerek, a fegyverkezési verseny és a Balkán feszültségei",
          "kizárólag a gyarmatosítás",
          "kizárólag a német egyesítés",
          "kizárólag az olasz egyesítés"
        ],
        correct_answer: "a szövetségi rendszerek, a fegyverkezési verseny és a Balkán feszültségei",
        explanation: "A szövetségi rendszerek, a fegyverkezési verseny és a Balkán feszültségei együttesen alapozták meg az 1914-es háborús kirobbanást.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "magyarorszag-gazdasaga-es-tarsadalma-a-dualizmus-koraban",
    title: "Magyarország gazdasága és társadalma a dualizmus korában",
    level: "mindketto",
    theme: "19. század",
    order_index: 22,
    summary_markdown:
      "A kiegyezés utáni ötven év gyors gazdasági fejlődést hozott (vasút, bankrendszer, Budapest világvárossá válása), miközben a társadalom kettős, \"torlódott\" szerkezetű maradt: a modernizálódó és a hagyományos agrártársadalom élt egymás mellett.",
    content_markdown: `
## Gazdasági fellendülés

A kiegyezés (1867) utáni évtizedekben Magyarország gyors ütemű gazdasági fejlődésen ment keresztül. Az Ausztriával kötött **vámunió** megszüntette a belső vámhatárokat, ami különösen a magyar mezőgazdasági exportot segítette, míg a védővámok a hazai ipar fejlődését ösztönözték. A **Magyar Királyi Államvasutak** létrehozásával és a vasútvonalak túlnyomó részének államosításával a vasúthálózat rendkívüli ütemben bővült: **1914-re meghaladta a 20 000 kilométert**, ami európai összehasonlításban is jelentős fejlettségi szintet jelentett.

## A hitelintézeti rendszer és az ipar fejlődése

A gazdasági növekedés fontos alapját a **hitelintézeti rendszer** kiépülése adta: nagybankokat alapítottak, jellemzően külföldi (osztrák, francia, német) tőke bevonásával — ilyen volt például a **Magyar Általános Hitelbank** és a **Magyar Földhitelintézet**. Az ipar is fejlődésnek indult (élelmiszeripar, gépipar, vegyipar), bár Magyarország gazdasági szerkezete a Monarchián belül továbbra is inkább az agrártermelésre és a nyersanyag-kitermelésre specializálódott, míg a nehézipar súlypontja inkább az osztrák tartományokban maradt.

## A mezőgazdaság korszerűsödése

A mezőgazdaság is jelentős technológiai fejlődésen ment keresztül: elterjedt a **nemesített vetőmagok** használata, a **vetésforgó** és a **műtrágyázás**, ami jelentősen növelte a termelékenységet. Magyarország ebben az időszakban vált **"Európa éléskamrájává"**, jelentős gabona- és lisztexportot bonyolítva le, elsősorban Ausztria és Nyugat-Európa felé.

## A társadalom kettős ("torlódott") szerkezete

A dualizmus kori magyar társadalmat gyakran jellemzik **kettős ("torlódott") társadalmi szerkezetként**: a régi, hagyományos agrártársadalom (nagybirtokos arisztokrácia, dzsentri, parasztság) és az új, modernizálódó, ipari-polgári társadalom (bankárok, gyárosok, hivatalnokok, munkásosztály) egyidejűleg, egymás mellett létezett, sokszor éles feszültségekkel. A **munkásosztály** volt a leggyorsabban növekvő társadalmi csoport: taglétszáma a korszak végére meghaladta az egymillió főt.

## Budapest világvárossá válása

A korszak egyik legszembetűnőbb fejleménye Budapest rohamos fejlődése volt: az 1873-ban egyesült Pest-Buda-Óbuda néhány évtized alatt Európa egyik jelentős nagyvárosává vált. A fejlődés csúcspontját az **1896-os millenniumi ünnepségek** jelentették (a honfoglalás 1000. évfordulója alkalmából), amelyekhez kapcsolódóan épült meg a kontinens **első földalatti vasútja** (a mai 1-es metró elődje), valamint számos reprezentatív középület (Országház, Szépművészeti Múzeum előfutárai).

## A nemzetiségi kérdés

A Monarchia, és azon belül Magyarország is, rendkívül **soknemzetiségű** volt: a magyar mellett jelentős német, szlovák, román, szerb, horvát és egyéb nemzetiségű lakosság élt az ország területén. A magyar kormányzat **magyarosítási törekvései** (elsősorban az oktatás és a közigazgatás nyelvhasználatában) egyre növekvő feszültségeket okoztak a nem magyar nemzetiségek körében — ez a probléma hosszú távon jelentősen hozzájárult a Monarchia I. világháború utáni felbomlásához.

## Jelentősége

A dualizmus kora Magyarország történetének egyik leggyorsabb gazdasági-társadalmi fejlődési szakasza volt — az ún. "boldog békeidők" korszaka —, amely azonban strukturálisan megoldatlan feszültségeket (a kettős társadalmi szerkezet, a nemzetiségi kérdés) is magában hordozott, ezek a feszültségek pedig alapvetően hozzájárultak a korszakot lezáró, 1918-as összeomláshoz és az azt követő trianoni tragédiához.
`,
    key_concepts: [
      "vámunió",
      "kettős (torlódott) társadalmi szerkezet",
      "Budapest világvárossá válása",
      "millenniumi ünnepségek (1896)",
      "nemzetiségi kérdés",
    ],
    source_refs: [
      { label: "A dualista Magyarország gazdasága (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-kiegyezeshez-vezeto-ut-es-dualizmus-kora-magyarorszagon/dualista-magyarorszag" },
      { label: "Osztrák–Magyar Monarchia (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Osztr%C3%A1k%E2%80%93Magyar_Monarchia" },
      { label: "10 tény a dualizmus kori Magyarországról (Múlt-kor)", url: "https://mult-kor.hu/10-teny-a-dualizmus-kori-magyarorszagrol-20180209" },
      { label: "A dualizmus korának társadalma – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/a-dualizmus-koranak-tarsadalma/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen hosszú volt Magyarország vasúthálózata 1914-re?",
        options: ["meghaladta a 20 000 km-t", "kevesebb mint 1000 km volt", "kb. 5000 km volt", "kb. 50 000 km volt"],
        correct_answer: "meghaladta a 20 000 km-t",
        explanation: "A dualizmus kora alatt a vasúthálózat rendkívüli ütemben bővült, 1914-re meghaladva a 20 000 km-t.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a \"kettős (torlódott) társadalmi szerkezet\" fogalma?",
        options: [
          "a hagyományos agrártársadalom és az új, modernizálódó ipari-polgári társadalom egyidejű, feszültséggel teli együttélését",
          "a magyar és osztrák társadalom teljes egyesülését",
          "a nemesség és a papság közötti konfliktust",
          "a fővárosi és vidéki lakosság azonos életszínvonalát"
        ],
        correct_answer: "a hagyományos agrártársadalom és az új, modernizálódó ipari-polgári társadalom egyidejű, feszültséggel teli együttélését",
        explanation: "A dualizmus kori magyar társadalom kettős szerkezete a régi agrártársadalom és az új, modernizálódó társadalom egymás melletti létét jelentette.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen esemény alkalmából épült meg a kontinens első földalatti vasútja Budapesten?",
        options: [
          "az 1896-os millenniumi ünnepségek",
          "a kiegyezés 1867-es aláírása",
          "az 1848-as forradalom 50. évfordulója",
          "Ferenc József koronázása"
        ],
        correct_answer: "az 1896-os millenniumi ünnepségek",
        explanation: "Az 1896-os millenniumi ünnepségekhez (a honfoglalás 1000. évfordulója) kapcsolódóan épült meg Európa első földalatti vasútja Budapesten.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik társadalmi csoport nőtt a leggyorsabban a dualizmus korában?",
        options: ["a munkásosztály", "a nagybirtokos arisztokrácia", "a papság", "a parasztság"],
        correct_answer: "a munkásosztály",
        explanation: "A munkásosztály volt a leggyorsabban növekvő társadalmi csoport, taglétszáma meghaladta az egymillió főt a korszak végére.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hosszú távú következménye lett a magyarosítási törekvéseknek a nemzetiségek körében?",
        options: [
          "növekvő feszültségek, amelyek hozzájárultak a Monarchia I. világháború utáni felbomlásához",
          "a nemzetiségek teljes asszimilálódása",
          "azonnali, békés együttélés minden nemzetiséggel",
          "a nemzetiségek önkéntes kivándorlása"
        ],
        correct_answer: "növekvő feszültségek, amelyek hozzájárultak a Monarchia I. világháború utáni felbomlásához",
        explanation: "A magyarosítási törekvések növekvő feszültségeket okoztak, amelyek hosszú távon hozzájárultak a Monarchia felbomlásához.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit szüntetett meg az Ausztriával kötött vámunió, segítve a magyar mezőgazdasági exportot?",
        options: ["a belső vámhatárokat", "a közös hadsereget", "a közös külügyet", "a nemzetiségi konfliktusokat"],
        correct_answer: "a belső vámhatárokat",
        explanation: "Az Ausztriával kötött vámunió megszüntette a belső vámhatárokat, ami segítette a magyar mezőgazdasági exportot.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen elnevezést kapott Magyarország a jelentős gabona- és lisztexport miatt?",
        options: ["\"Európa éléskamrája\"", "\"Európa beteg embere\"", "\"a legvidámabb barakk\"", "\"boldog békeidők\""],
        correct_answer: "\"Európa éléskamrája\"",
        explanation: "Magyarország ebben az időszakban vált \"Európa éléskamrájává\", jelentős gabona- és lisztexportot bonyolítva le.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik bank tartozott a dualizmus kori magyar nagybankok közé?",
        options: ["a Magyar Általános Hitelbank", "a Magyar Nemzeti Bank", "az Osztrák Nemzeti Bank", "a Postabank"],
        correct_answer: "a Magyar Általános Hitelbank",
        explanation: "A Magyar Általános Hitelbank és a Magyar Földhitelintézet is a dualizmus kori nagybankok közé tartozott.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben egyesült Pest, Buda és Óbuda egyetlen várossá?",
        options: ["1873-ban", "1896-ban", "1848-ban", "1867-ben"],
        correct_answer: "1873-ban",
        explanation: "Az 1873-ban egyesült Pest-Buda-Óbuda néhány évtized alatt Európa egyik jelentős nagyvárosává vált.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan specializálódott Magyarország gazdasági szerkezete a Monarchián belül?",
        options: ["inkább az agrártermelésre és a nyersanyag-kitermelésre", "kizárólag a nehéziparra", "kizárólag a hadiiparra", "kizárólag a szolgáltató szektorra"],
        correct_answer: "inkább az agrártermelésre és a nyersanyag-kitermelésre",
        explanation: "Magyarország gazdasági szerkezete a Monarchián belül továbbra is inkább az agrártermelésre és a nyersanyag-kitermelésre specializálódott.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol maradt inkább a nehézipar súlypontja a Monarchián belül?",
        options: ["az osztrák tartományokban", "Magyarországon", "a Balkánon", "egyenlő arányban Magyarországon és Ausztriában"],
        correct_answer: "az osztrák tartományokban",
        explanation: "A nehézipar súlypontja inkább az osztrák tartományokban maradt, míg Magyarország az agrártermelésre specializálódott.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen tőke bevonásával alapították jellemzően a dualizmus kori magyar nagybankokat?",
        options: ["külföldi (osztrák, francia, német) tőke bevonásával", "kizárólag magyar állami tőkével", "kizárólag brit tőkével", "kizárólag amerikai tőkével"],
        correct_answer: "külföldi (osztrák, francia, német) tőke bevonásával",
        explanation: "A nagybankokat jellemzően külföldi, osztrák, francia és német tőke bevonásával alapították.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely nemzetiségek éltek jelentős számban Magyarország területén a dualizmus korában, a magyar mellett?",
        options: ["német, szlovák, román, szerb, horvát", "kizárólag olasz és francia", "kizárólag lengyel és cseh", "kizárólag orosz és ukrán"],
        correct_answer: "német, szlovák, román, szerb, horvát",
        explanation: "A magyar mellett jelentős német, szlovák, román, szerb, horvát és egyéb nemzetiségű lakosság élt az ország területén.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen célt szolgáltak elsősorban a magyar kormányzat magyarosítási törekvései?",
        options: ["az oktatás és a közigazgatás nyelvhasználatát", "a hadsereg szervezetét", "a vasúthálózat fejlesztését", "a bankrendszer átalakítását"],
        correct_answer: "az oktatás és a közigazgatás nyelvhasználatát",
        explanation: "A magyarosítási törekvések elsősorban az oktatás és a közigazgatás nyelvhasználatát célozták.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen eszközzel ösztönözte a vámunió mellett a hazai ipar fejlődését a gazdaságpolitika?",
        options: ["védővámokkal", "ingyenes hitelekkel", "a jobbágyfelszabadítással", "a nemzetiségi autonómiával"],
        correct_answer: "védővámokkal",
        explanation: "Míg a vámunió a mezőgazdasági exportot segítette, a védővámok a hazai ipar fejlődését ösztönözték.",
        difficulty: 3,
      },
    ],
  },
];
