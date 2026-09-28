import type { TopicSeed } from "./angol";

export const foldrajzVilagreszekMagyarorszagTopics: TopicSeed[] = [
  {
    slug: "europa-termeszetfoldrajza",
    title: "Európa természetföldrajza",
    level: "mindketto",
    theme: "Regionális földrajz",
    order_index: 23,
    summary_markdown:
      "Európa a leginkább tagolt kontinens, változatos domborzattal, mérsékelt övi éghajlati típusokkal és gazdag vízrajzzal. E tétel a kontinens nagytájait, éghajlati öveit és folyóhálózatát tekinti át.",
    content_markdown: `
## Európa helyzete és tagoltsága

Európa az eurázsiai szárazföldtömb nyugati féltszigete, amelyet keleten hagyományosan az **Urál-hegység, az Urál-folyó és a Kaszpi-tenger** választ el Ázsiától. Európa a Föld egyik legjobban **tagolt** kontinense: partvonalának hossza a területéhez viszonyítva rendkívül nagy, számos félsziget (Skandináv-, Ibériai-, Appennini-, Balkán-félsziget), öböl és szigetvilág (Brit-szigetek, Izland) tartozik hozzá. Ez a tagoltság kedvez a tengeri kereskedelemnek és az éghajlat tenger általi kiegyenlítésének.

## Nagy domborzati egységek

Európa domborzata észak-déli irányban jellegzetes övekre tagolódik:

- **Fennoskandia (Skandináv- és Kola-félsziget)**: ősi, lepusztult röghegységekkel (Skandináv-hegység) és jégkorszaki eredetű formakinccsel (fjordok, tavak, morénák);
- **Kelet-európai-síkság**: hatalmas, enyhén hullámos ősi tábla, Oroszország és Ukrajna nagy részét lefedi;
- **Közép-európai-alföld**: Németország északi részétől Lengyelországon át húzódó síkvidék;
- **Középhegységi öv**: a variszkuszi hegységrendszer maradványai (Cseh-erdő, Fekete-erdő, Ardennek, a Kárpát-medencét körülvevő középhegységek);
- **Fiatal, alpi (harmadidőszaki) redőhegységek**: az **Alpok**, a **Kárpátok**, a **Pireneusok**, az **Appenninek** és a **Balkán-hegység**, amelyek a legfiatalabb, legmagasabb európai hegyláncok, és ma is aktív szeizmikus-vulkáni övezetekkel (pl. Vezúv, Etna) rendelkeznek.

## Éghajlati övek

Európa túlnyomó része a **mérsékelt övben** fekszik, amelyen belül nyugatról kelet felé haladva három fő éghajlati típus különíthető el:

| Éghajlati típus | Jellemző terület | Fő jellemzők |
|---|---|---|
| Óceáni (nyugat-európai) éghajlat | Brit-szigetek, Franciaország nyugati része | kiegyenlített hőmérséklet, egész évben bőséges csapadék |
| Kontinentális éghajlat | Kelet-Európa, Kárpát-medence | nagyobb évi hőingás, nyári csapadékmaximum |
| Mediterrán éghajlat | Dél-Európa (Ibériai-, Appennini-, Balkán-félsziget) | forró, száraz nyár, enyhe, csapadékos tél |

Emellett Észak-Európa (Skandinávia északi része, Izland) a **szubarktikus és sarkvidéki övbe** nyúlik át, ahol rövid, hűvös nyár és hosszú, hideg tél jellemző.

## Vízrajz

Európa folyóhálózata sűrű és hajózásra kiválóan alkalmas. A legfontosabb folyók: a **Volga** (Európa leghosszabb folyója, a Kaszpi-tengerbe torkollik), a **Duna** (a kontinens második leghosszabb folyója, tíz országon át folyik a Fekete-tengerbe), a **Rajna** (Nyugat-Európa egyik legforgalmasabb hajózó útvonala), valamint a **Loire, Elba, Visztula és Odera**. Az **Alpok** olvadékvize táplálja Európa több nagy folyóját is. Jelentős tavai közé tartozik a skandináviai és alpi jégkorszaki eredetű tavak (Ladoga-tó, Genfi-tó, Boden-tó), valamint a sekély **Balaton**.

## Jelentősége

Európa változatos domborzata, éghajlata és vízrajza alapozza meg a kontinens sokszínű táji és gazdasági adottságait, valamint a régiók közötti természetföldrajzi különbségeket, amelyek a társadalmi-gazdasági fejlődésre is hatással vannak.
`,
    key_concepts: [
      "Európa tagoltsága és félszigetei",
      "fiatal (alpi) és variszkuszi hegységek",
      "óceáni, kontinentális, mediterrán éghajlat",
      "Volga, Duna, Rajna",
      "jégkorszaki eredetű tavak",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik hegységrendszer választja el hagyományosan Európát Ázsiától?",
        options: ["az Urál-hegység", "az Alpok", "a Kárpátok", "a Kaukázus előtere nyugaton"],
        correct_answer: "az Urál-hegység",
        explanation: "Európa és Ázsia hagyományos határát keleten az Urál-hegység, az Urál-folyó és a Kaszpi-tenger vonala jelöli ki.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik éghajlati típusra jellemző a forró, száraz nyár és az enyhe, csapadékos tél?",
        options: ["mediterrán éghajlat", "óceáni éghajlat", "kontinentális éghajlat", "szubarktikus éghajlat"],
        correct_answer: "mediterrán éghajlat",
        explanation: "A mediterrán éghajlat Dél-Európa félszigetein (Ibériai-, Appennini-, Balkán-félsziget) jellemző, forró, száraz nyárral és enyhe, csapadékos téllel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik Európa leghosszabb folyója?",
        options: ["a Volga", "a Duna", "a Rajna", "a Loire"],
        correct_answer: "a Volga",
        explanation: "A Volga Európa leghosszabb folyója, Oroszország területén folyik végig, és a Kaszpi-tengerbe torkollik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kedvez Európa erős tagoltsága a tengeri kereskedelemnek és az éghajlat kiegyenlítettségének?",
        options: [
          "a hosszú partvonal és a sok félsziget, öböl miatt a tenger hatása mélyen behatol a szárazföld belsejébe",
          "mert Európa partvonala rendkívül rövid a területéhez képest",
          "mert Európának nincsenek szigetei",
          "mert a tagoltság kizárólag a domborzatot befolyásolja, az éghajlatot nem",
        ],
        correct_answer: "a hosszú partvonal és a sok félsziget, öböl miatt a tenger hatása mélyen behatol a szárazföld belsejébe",
        explanation: "A tagolt partvonal miatt a tenger mérséklő hatása (óceáni éghajlat) messze benyúlik a kontinens belsejébe, és megkönnyíti a kikötők, tengeri útvonalak kialakítását is.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért aktívak ma is szeizmikusan és vulkanikusan a fiatal, alpi redőhegységek (pl. Appenninek, Balkán-hegység) övezetei?",
        options: [
          "mert az Afrikai- és az Eurázsiai-lemez ütközése, illetve az ehhez kapcsolódó lemeztektonikai mozgások napjainkban is tartanak",
          "mert ezek a hegységek vulkanikus eredetűek és sosem nyugszanak el",
          "mert ezek a legrégebbi, legjobban lepusztult hegységek Európában",
          "mert itt található Európa legmélyebb tava",
        ],
        correct_answer: "mert az Afrikai- és az Eurázsiai-lemez ütközése, illetve az ehhez kapcsolódó lemeztektonikai mozgások napjainkban is tartanak",
        explanation: "A fiatal, alpi hegységek (Alpok, Appenninek, Balkán-hegység) az Afrikai- és az Eurázsiai-lemez folyamatos közeledéséből erednek, ezért ezen a területen ma is gyakoriak a földrengések és a vulkánkitörések (pl. Vezúv, Etna).",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "europa-tarsadalmi-gazdasagi-foldrajza-es-az-europai-unio",
    title: "Európa társadalmi-gazdasági földrajza és az Európai Unió",
    level: "emelt",
    theme: "Regionális földrajz",
    order_index: 24,
    summary_markdown:
      "Európa gazdasági fejlettsége jelentős területi különbségeket mutat nyugat és kelet, valamint észak és dél között. Az Európai Unió a kontinens gazdasági-politikai integrációjának legfontosabb szervezete, amely négy alapszabadságra és közös politikákra épül.",
    content_markdown: `
## Népesség és társadalmi jellemzők

Európa lakossága kb. 740 millió fő, a világ népességének mintegy 9%-a, de a globális népességnövekedésben betöltött szerepe csökken: a kontinens jelentős részén a **társadalom elöregedése** és a természetes fogyás jellemző (pl. Németország, Olaszország, Magyarország). Az urbanizációs szint magas (70-80% feletti), a régi ipari városok mellett kiemelkedő szerepük van a **globális városoknak** (London, Párizs) és a fővárosi agglomerációknak.

## Regionális fejlettségi különbségek

Európán belül jelentős a fejlettségi szakadék:

- **Nyugat- és Észak-Európa** (Németország, Franciaország, Benelux államok, skandináv országok): magas GDP/fő, fejlett ipar és szolgáltatási szektor, erős innovációs kapacitás;
- **Dél-Európa** (Görögország, Spanyolország, Olaszország egyes régiói, Portugália): alacsonyabb ipari fejlettség, jelentős turisztikai bevétel, esetenként magas munkanélküliség;
- **Kelet-Közép-Európa** (Magyarország, Lengyelország, Csehország, a balti államok): a rendszerváltás óta gyors felzárkózás, jelentős külföldi működőtőke-beáramlás, de a nyugat-európai szinttől még elmaradó jövedelmek.

## Az európai integráció története

Az **Európai Unió** elődje az **Európai Szén- és Acélközösség** (1951, hat alapító tag: Franciaország, Nyugat-Németország, Olaszország, Belgium, Hollandia, Luxemburg) volt, amelyet az 1957-es **Római Szerződés** nyomán az **Európai Gazdasági Közösség** követett. Az integráció fokozatosan mélyült és bővült: a **Maastrichti Szerződés** (1992) hozta létre a mai értelemben vett Európai Uniót, bevezetve az uniós polgárság és a közös valuta, az **euró** koncepcióját (bevezetve 1999/2002-től). Magyarország **2004-ben** csatlakozott az EU-hoz a nagy keleti bővítés keretében.

## Az EU intézményrendszere és alapszabadságai

Az Unió működésének alapja a **négy alapszabadság**: az áruk, a szolgáltatások, a tőke és a munkaerő szabad áramlása a tagállamok között, amelyet a **közös piac (belső piac)** és a legtöbb tagállamban vízumkötelezettséget megszüntető **schengeni övezet** is támogat. Legfontosabb intézményei: az **Európai Parlament** (a polgárok által közvetlenül választott testület), az **Európai Tanács** (a tagállamok állam- és kormányfői), az **Európai Bizottság** (végrehajtó szerv) és az **Európai Unió Tanácsa** (a tagállami miniszterek tanácsa).

## Közös politikák és kihívások

Az EU legjelentősebb közös politikái közé tartozik a **Közös Agrárpolitika (KAP)**, amely a mezőgazdasági termelők támogatásával az élelmiszer-biztonságot és a vidéki térségek fenntarthatóságát célozza, valamint a **kohéziós politika**, amely uniós fejlesztési forrásokkal (strukturális alapok) segíti a kevésbé fejlett régiók (pl. Kelet-Közép-Európa) felzárkózását. Az Unió jelentős kihívásokkal is szembesül: a migrációs nyomás kezelése, az energiafüggőség csökkentése, a klímasemlegességi célok (Európai Zöld Megállapodás) és a tagállamok közötti gazdasági egyenlőtlenségek mérséklése.

## Jelentősége

Az Európai Unió a világ egyik legfejlettebb gazdasági-politikai integrációja, amely jelentősen meghatározza a tagállamok, köztük Magyarország gazdasági fejlődését, kereskedelmi kapcsolatait és szabályozási környezetét.
`,
    key_concepts: [
      "regionális fejlettségi különbségek Európában",
      "az európai integráció története (ESZAK, EGK, Maastricht)",
      "négy alapszabadság és schengeni övezet",
      "EU intézményei",
      "Közös Agrárpolitika és kohéziós politika",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mikor csatlakozott Magyarország az Európai Unióhoz?",
        options: ["2004-ben", "1999-ben", "2007-ben", "1995-ben"],
        correct_answer: "2004-ben",
        explanation: "Magyarország 2004-ben csatlakozott az Európai Unióhoz a nagy keleti bővítés (tíz ország egyidejű csatlakozása) keretében.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szerződés hozta létre a mai értelemben vett Európai Uniót?",
        options: ["a Maastrichti Szerződés (1992)", "a Római Szerződés (1957)", "a Schengeni Egyezmény", "a Lisszaboni Szerződés"],
        correct_answer: "a Maastrichti Szerződés (1992)",
        explanation: "A Maastrichti Szerződés 1992-ben hozta létre az Európai Uniót, és megalapozta az uniós polgárság és a közös valuta bevezetését is.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi tartozik az EU négy alapszabadsága közé?",
        options: [
          "az áruk, a szolgáltatások, a tőke és a munkaerő szabad áramlása",
          "a szólásszabadság, a vallásszabadság, a gyülekezési és a sajtószabadság",
          "az oktatás, az egészségügy, a honvédelem és a közigazgatás szabadsága",
          "csak az áruk és a tőke szabad mozgása",
        ],
        correct_answer: "az áruk, a szolgáltatások, a tőke és a munkaerő szabad áramlása",
        explanation: "Az EU belső piacának alapját a négy alapszabadság — az áruk, a szolgáltatások, a tőke és a munkaerő szabad áramlása — jelenti a tagállamok között.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a célja az EU kohéziós politikájának?",
        options: [
          "a kevésbé fejlett régiók felzárkózásának támogatása uniós fejlesztési forrásokból",
          "a mezőgazdasági termelők jövedelmének kizárólagos biztosítása",
          "a tagállamok hadseregeinek egyesítése",
          "a schengeni övezet határellenőrzésének megszüntetése",
        ],
        correct_answer: "a kevésbé fejlett régiók felzárkózásának támogatása uniós fejlesztési forrásokból",
        explanation: "A kohéziós politika strukturális és kohéziós alapokon keresztül támogatja a kevésbé fejlett tagállamok és régiók (pl. Kelet-Közép-Európa) gazdasági felzárkózását.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért maradnak fenn jelentős jövedelmi különbségek Kelet-Közép-Európa és Nyugat-Európa között a rendszerváltás utáni gyors felzárkózás ellenére is?",
        options: [
          "a történelmi fejlődési lemaradás, az eltérő ipari szerkezet és a beruházási tőke koncentrációja hosszú távú, lassan mérséklődő különbségeket okoz",
          "mert Kelet-Közép-Európa nem tagja az Európai Uniónak",
          "mert a régió országai nem részesülnek uniós fejlesztési forrásokból",
          "mert a nyugat-európai országok gazdasága stagnál",
        ],
        correct_answer: "a történelmi fejlődési lemaradás, az eltérő ipari szerkezet és a beruházási tőke koncentrációja hosszú távú, lassan mérséklődő különbségeket okoz",
        explanation: "Bár az uniós csatlakozás és a külföldi működőtőke-beáramlás felgyorsította a kelet-közép-európai országok fejlődését, a hosszú évtizedes lemaradás és a fejlett gazdaságokban koncentrálódó tőke, tudás és infrastruktúra miatt a felzárkózás fokozatos, több évtizedes folyamat.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "azsia-foldrajza",
    title: "Ázsia földrajza",
    level: "mindketto",
    theme: "Regionális földrajz",
    order_index: 25,
    summary_markdown:
      "Ázsia a Föld legnagyobb és legnépesebb kontinense, rendkívül változatos domborzattal, éghajlattal és gazdasági fejlettséggel. A monszunövezet, a sivatagi térségek és a gyorsan iparosodó kelet- és délkelet-ázsiai országok egyaránt jellemzik.",
    content_markdown: `
## Ázsia mérete és domborzata

Ázsia a Föld legnagyobb kontinense (kb. 44,6 millió km²), és egyben a legnépesebb is (a világ népességének kb. 60%-a). Domborzata rendkívül változatos: itt található a Föld legmagasabb hegyrendszere, a **Himalája** a **Mount Everesttel (8849 m)**, valamint a hozzá kapcsolódó hatalmas fennsík, a **Tibeti-fennsík** (a "világ teteje"). A kontinens belsejében húzódnak a nagy ázsiai sivatagok (**Gobi, Takla-Makán**), míg a Föld legmélyebb szárazföldi pontja, a **Holt-tenger** partja (-430 m) szintén Ázsiához (Közel-Kelethez) tartozik. Szibéria hatalmas síkságai és a Nyugat-szibériai-alföld a kontinens északi részét foglalják el.

## Éghajlati övezetesség és a monszun

Ázsia az egyenlítőtől a sarkvidékig szinte minden éghajlati övet magába foglal. A kontinens déli és keleti részének éghajlatát alapvetően meghatározza a **monszun**: nyáron az óceán felől a szárazföld belseje felé áramló, nedves, csapadékos szél (**nyári monszun**), télen pedig az ellenkező irányú, száraz kontinentális légtömeg (**téli monszun**). A monszun jelentős szerepet játszik India, Délkelet-Ázsia és Kelet-Ázsia mezőgazdaságában (rizstermesztés), ugyanakkor pusztító áradásokat is okozhat. Ázsia belső, óceántól távoli térségei (Közép-Ázsia) éles kontinentális, száraz éghajlatúak, míg a Közel-Kelet nagy részét sivatagi éghajlat jellemzi.

## Kína és India — a két ázsiai óriás

**Kína** (kb. 1,4 milliárd lakos) a világ egyik vezető gazdasági hatalma, "a világ gyára": exportvezérelt, erőteljesen iparosodott gazdasággal, amelyben kiemelt szerepe van a keleti parti nagyvárosoknak (Sanghaj, Peking, Shenzhen) és a feldolgozóiparnak. **India** (a világ legnépesebb országa) gyors gazdasági növekedésen megy át, erős informatikai és szolgáltatási szektorral (pl. Bengaluru "az indiai Szilícium-völgy"), miközben a lakosság jelentős része még mezőgazdaságból él.

## Délkelet- és Kelet-Ázsia feltörekvő gazdaságai

A második világháború után Japán, majd a **"kelet-ázsiai tigrisek"** (Dél-Korea, Tajvan, Hongkong, Szingapúr) gyors iparosodáson mentek át, exportorientált gazdaságpolitikával váltak fejlett gazdasággá. Ezt a mintát követték később Délkelet-Ázsia országai (Vietnám, Thaiföld, Malajzia, Indonézia), ahol napjainkban is jelentős a feldolgozóipari beruházások és a globális ellátási láncokba való bekapcsolódás.

## A Közel-Kelet és az olaj

A Közel-Kelet (Szaúd-Arábia, Irak, Irán, az Öböl-menti államok) a világ egyik legjelentősebb **kőolaj- és földgázkészletével** rendelkezik, ami meghatározza a térség gazdasági szerkezetét és geopolitikai jelentőségét. Az olajexportból származó bevételek egy részét a térség egyes országai (pl. Egyesült Arab Emírségek, Katar) a gazdaság diverzifikálására (turizmus, pénzügyi szolgáltatások) fordítják.

## Jelentősége

Ázsia gazdasági súlya és népessége miatt napjaink világgazdaságának meghatározó térsége, amelynek fejlődési mintái (exportvezérelt iparosodás, monszun-mezőgazdaság, energiahordozó-kitermelés) sokféle utat mutatnak a gazdasági fejlődésre.
`,
    key_concepts: [
      "Himalája és Tibeti-fennsík",
      "nyári és téli monszun",
      "Kína és India gazdasága",
      "kelet-ázsiai tigrisek",
      "Közel-Kelet és a kőolaj",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik hegység a Föld legmagasabb hegyrendszere, és hol található?",
        options: ["a Himalája, Ázsiában", "az Andok, Dél-Amerikában", "az Alpok, Európában", "a Sziklás-hegység, Észak-Amerikában"],
        correct_answer: "a Himalája, Ázsiában",
        explanation: "A Himalája a Föld legmagasabb hegyrendszere, itt található a Mount Everest (8849 m), a legmagasabb csúcs.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a nyári monszunt Dél- és Délkelet-Ázsiában?",
        options: [
          "az óceán felől a szárazföld felé áramló, nedves, csapadékos szél",
          "a szárazföld felől az óceán felé áramló, száraz szél",
          "állandó, egész évben azonos irányú szélrendszer",
          "kizárólag a sivatagi területekre jellemző jelenség",
        ],
        correct_answer: "az óceán felől a szárazföld felé áramló, nedves, csapadékos szél",
        explanation: "A nyári monszun az óceán felől a felmelegedő szárazföld belseje felé áramló, nedves légtömeg, amely bőséges csapadékot hoz, ez alapozza meg a régió rizstermesztését.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik országcsoportot nevezzük 'kelet-ázsiai tigriseknek'?",
        options: ["Dél-Korea, Tajvan, Hongkong, Szingapúr", "Kína, India, Japán, Oroszország", "Vietnám, Thaiföld, Malajzia, Fülöp-szigetek", "Szaúd-Arábia, Irak, Irán, Katar"],
        correct_answer: "Dél-Korea, Tajvan, Hongkong, Szingapúr",
        explanation: "A 'kelet-ázsiai tigrisek' kifejezés Dél-Koreát, Tajvant, Hongkongot és Szingapúrt jelöli, amelyek a 20. század második felében gyors, exportorientált iparosodáson mentek keresztül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kulcsfontosságú Bengaluru India gazdasága szempontjából?",
        options: [
          "az informatikai és szolgáltatási szektor egyik vezető központja, ezért nevezik 'az indiai Szilícium-völgynek'",
          "India legnagyobb kőolaj-finomítója található itt",
          "India fővárosa és politikai központja",
          "India legnagyobb mezőgazdasági exportkikötője",
        ],
        correct_answer: "az informatikai és szolgáltatási szektor egyik vezető központja, ezért nevezik 'az indiai Szilícium-völgynek'",
        explanation: "Bengaluru India informatikai és szoftverfejlesztési iparának központja, ahol jelentős hazai és nemzetközi technológiai vállalatok koncentrálódnak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért okozhat a monszunéghajlat egyaránt mezőgazdasági hasznot és súlyos károkat Dél-Ázsiában?",
        options: [
          "a nyári monszun csapadéka nélkülözhetetlen az öntözéses rizstermesztéshez, de intenzitása pusztító áradásokat is előidézhet",
          "mert a monszun kizárólag télen okoz csapadékot, ami fagykárokat okoz",
          "mert a monszun sosem hoz csapadékot, ezért aszályt okoz minden évben",
          "mert a monszun csak a hegyvidéki térségeket érinti",
        ],
        correct_answer: "a nyári monszun csapadéka nélkülözhetetlen az öntözéses rizstermesztéshez, de intenzitása pusztító áradásokat is előidézhet",
        explanation: "A nyári monszun bőséges csapadéka alapfeltétele a régió intenzív rizstermesztésének, ugyanakkor a csapadék szélsőséges intenzitása és időbeli ingadozása súlyos árvizeket, illetve elmaradása aszályt okozhat.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "afrika-foldrajza",
    title: "Afrika földrajza",
    level: "mindketto",
    theme: "Regionális földrajz",
    order_index: 26,
    summary_markdown:
      "Afrika a Föld második legnagyobb kontinense, amelyet az egyenlítő közel középen szel át, ezért éghajlati övezetei szimmetrikusan ismétlődnek. A kontinenst gazdag ásványkincs, ugyanakkor súlyos fejlődési kihívások (szegénység, konfliktusok, gyors népességnövekedés) jellemzik.",
    content_markdown: `
## Afrika domborzata

Afrika a Föld második legnagyobb kontinense, amelyet túlnyomórészt ősi, lepusztult **táblás fennsíkok** építenek fel — ezért a kontinens domborzata viszonylag egyveretű, kevés a magas hegység. Kiemelkedik ez alól a kelet-afrikai **Nagy-Hasadékvölgy (Kelet-afrikai-árokrendszer)**, amely a lemeztektonikai szétcsúszás miatt alakult ki, és amelynek mentén Afrika legmagasabb csúcsa, a vulkanikus eredetű **Kilimandzsáró (5895 m)**, valamint jelentős tavak (Tanganyika-tó, Viktória-tó) találhatók. Afrika partvonala kevéssé tagolt, természetes kikötésre alkalmas öblökben szegény.

## Éghajlati övezetesség

Mivel az egyenlítő közel a kontinens közepén húzódik át, Afrika éghajlati övei az egyenlítőtől északra és délre szimmetrikusan ismétlődnek:

- **egyenlítői (trópusi esőerdő) öv**: egész évben meleg és csapadékos, itt található a **Kongó-medence** esőerdője;
- **szavanna öv**: váltakozó esős és száraz évszakkal, a kontinens legnagyobb kiterjedésű öve, gazdag vadvilággal (Kelet- és Közép-Afrika szavannái);
- **trópusi sivatagi öv**: a Ráktérítő és a Baktérítő mentén — északon a **Szahara** (a Föld legnagyobb forró sivataga), délen a **Namib**- és a **Kalahári-sivatag**;
- **mediterrán éghajlat**: a kontinens legészakibb (Atlasz-vidék) és legdélibb csücskén (Fokföld).

## Vízrajz

Afrika legfontosabb folyói: a **Nílus** (a Föld egyik leghosszabb folyója, amely Egyiptom életét már az ókor óta meghatározza áradásaival és a Nasszer-tó víztározójával), a **Kongó** (vízhozamát tekintve Afrika legnagyobb folyója), a **Niger** és a **Zambezi** (amelyen a látványos **Viktória-vízesés** található).

## Népesség és társadalmi kihívások

Afrika a világ leggyorsabban növekvő népességű kontinense: a demográfiai átmenet korai szakaszában lévő országok (pl. Niger, Csád) termékenységi rátája a világ legmagasabbjai közé tartozik. A gyors népességnövekedés, az alacsony gazdasági fejlettség, valamint a gyarmati múltból örökölt, gyakran mesterségesen meghúzott országhatárok (amelyek nem vették figyelembe az etnikai-nyelvi határokat) számos országban politikai instabilitáshoz, konfliktusokhoz és tömeges elvándorláshoz vezettek.

## Gazdaság és ásványkincsek

Afrika gazdasága jelentős részben a **nyersanyag-kitermelésre** épül: Nigéria és Angola kőolaj-, a Kongói Demokratikus Köztársaság réz- és kobalt-, Dél-Afrika arany- és gyémántkészletei a világ egyik legfontosabb bányászati térségévé teszik a kontinenst. Ugyanakkor a nyersanyag-export túlsúlya (feldolgozóipar hiányában) sok országot kiszolgáltatottá tesz a világpiaci áringadozásokkal szemben, ezt nevezzük **"nyersanyag-átoknak"**. A mezőgazdaság (kakaó, kávé, gyapot termesztése) és az egyre bővülő turizmus (safari-turizmus Kelet-Afrikában) szintén fontos bevételi forrás.

## Jelentősége

Afrika természeti adottságainak és társadalmi-gazdasági helyzetének ismerete elengedhetetlen a globális fejlődési egyenlőtlenségek, a migrációs folyamatok és a nyersanyagpiacok megértéséhez.
`,
    key_concepts: [
      "Nagy-Hasadékvölgy és Kilimandzsáró",
      "szimmetrikus éghajlati övezetesség",
      "Szahara, Nílus, Kongó",
      "gyors népességnövekedés",
      "nyersanyag-kitermelés és nyersanyag-átok",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik afrikai hegy a kontinens legmagasabb csúcsa?",
        options: ["Kilimandzsáró", "Atlasz", "Drakensberg", "Fokvárosi Asztal-hegy"],
        correct_answer: "Kilimandzsáró",
        explanation: "A Kilimandzsáró (5895 m) egy vulkanikus eredetű hegy Kelet-Afrikában, a Nagy-Hasadékvölgy közelében, Afrika legmagasabb csúcsa.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik a Föld legnagyobb forró sivataga, amely Afrika északi részét foglalja el?",
        options: ["Szahara", "Namib-sivatag", "Kalahári-sivatag", "Gobi-sivatag"],
        correct_answer: "Szahara",
        explanation: "A Szahara Afrika északi részén húzódik, a Föld legnagyobb kiterjedésű forró sivataga.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért szimmetrikusak Afrika éghajlati övei az egyenlítőhöz képest?",
        options: [
          "mert az egyenlítő közel a kontinens közepén húzódik át, ezért az éghajlati övek északra és délre hasonlóan ismétlődnek",
          "mert Afrika egésze a mérsékelt övben fekszik",
          "mert Afrikának nincs éghajlati övezetessége",
          "mert a kontinens kizárólag a déli féltekén fekszik",
        ],
        correct_answer: "mert az egyenlítő közel a kontinens közepén húzódik át, ezért az éghajlati övek északra és délre hasonlóan ismétlődnek",
        explanation: "Mivel az egyenlítő Afrika közepe táján húzódik át, az egyenlítői, szavanna-, sivatagi és mediterrán övek szimmetrikusan jelennek meg mind az északi, mind a déli félteke felé haladva.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a 'nyersanyag-átok' fogalma egyes afrikai országok gazdaságában?",
        options: [
          "a nyersanyag-export túlsúlya kiszolgáltatottá teszi az országot a világpiaci árváltozásoknak, feldolgozóipar nélkül",
          "a nyersanyagkincs teljes hiányát jelenti egy országban",
          "azt jelenti, hogy egy ország nem exportál semmilyen nyersanyagot",
          "kizárólag a mezőgazdasági termékek exportjára vonatkozik",
        ],
        correct_answer: "a nyersanyag-export túlsúlya kiszolgáltatottá teszi az országot a világpiaci árváltozásoknak, feldolgozóipar nélkül",
        explanation: "A nyersanyag-átok azt a jelenséget írja le, amikor egy ország gazdasága túlzottan a nyersanyag-kitermelésre és -exportra épül, feldolgozóipar és diverzifikáció nélkül, ami kiszolgáltatottá teszi a világpiaci ártingadozásoknak.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért vezettek a gyarmati múltból örökölt országhatárok gyakran politikai konfliktusokhoz Afrikában?",
        options: [
          "mert a határokat a gyarmatosító hatalmak gyakran az etnikai-nyelvi csoportok figyelembevétele nélkül húzták meg",
          "mert Afrikában nem léteztek etnikai csoportok a gyarmatosítás előtt",
          "mert a gyarmati határok mindig egybeestek a természetes tájhatárokkal",
          "mert a független afrikai államok maguk húzták meg határaikat etnikai alapon",
        ],
        correct_answer: "mert a határokat a gyarmatosító hatalmak gyakran az etnikai-lelki csoportok figyelembevétele nélkül húzták meg",
        explanation: "A gyarmatosító európai hatalmak sokszor önkényesen, a helyi etnikai és nyelvi viszonyoktól függetlenül jelölték ki a határokat, ami a függetlenné válás után gyakran etnikai feszültségekhez és konfliktusokhoz vezetett.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "amerika-foldrajza-eszak-es-del-amerika",
    title: "Amerika földrajza (Észak- és Dél-Amerika)",
    level: "mindketto",
    theme: "Regionális földrajz",
    order_index: 27,
    summary_markdown:
      "Amerika a Föld leghosszabb kiterjedésű kontinenspárja, amelyet nyugaton egy folyamatos, fiatal hegységrendszer (Kordillerák-Andok) kísér végig. Észak-Amerikát fejlett gazdaság, Dél-Amerikát változatos, de egyenlőtlen fejlődés jellemzi.",
    content_markdown: `
## Domborzat — a nyugati hegységvonulat és a keleti ősmasszívumok

Amerika (Észak- és Dél-Amerika együtt) a Föld egyik legnagyobb kiterjedésű, szinte a sarkkörtől a sarkkörig húzódó szárazföldtömbje. Nyugati peremén egy folyamatos, fiatal, ma is aktív hegységrendszer húzódik: Észak-Amerikában a **Kordillerák (Sziklás-hegység)**, Közép-Amerikában a mexikói-közép-amerikai hegyvidék, Dél-Amerikában pedig az **Andok** — a Föld leghosszabb szárazföldi hegyláncrendszere, amely a Csendes-óceáni-lemez alábukásából (szubdukció) keletkezett, ezért gyakoriak itt a földrengések és a vulkánkitörések. A kontinensek keleti, belső részét ezzel szemben ősi, lepusztult táblás vidékek (Kanadai-pajzs, Brazil-fennsík, Guyanai-fennsík) és nagy síkságok (Nagy-síkság, Amazonas-medence, Pampa) építik fel.

## Éghajlat és a nagy folyók

Észak-Amerika éghajlata rendkívül változatos, a sarkvidéki övtől (Alaszka, Kanada északi része) a trópusi övig (Közép-Amerika, a Karib-térség) terjed, jelentős szerepe van a **Mississippi** folyórendszerének, amely a kontinens legfontosabb vízi útvonala. Dél-Amerikában az egyenlítő menti **Amazonas-medence** a Föld legkiterjedtebb trópusi esőerdejének ad otthont, amelyet a **Föld vízhozam szerint legnagyobb folyója, az Amazonas** vízgyűjt. Dél-Amerika déli részén (Argentína, Chile) mérsékelt övi és sivatagi (Atacama-sivatag, a Föld egyik legszárazabb területe) éghajlat is előfordul.

## Észak-Amerika gazdasága

Az **Egyesült Államok** a világ egyik vezető gazdasági hatalma, fejlett mezőgazdasággal (a középső Nagy-síkság gabonaövezete, a "world's breadbasket"), erős feldolgozóiparral és a világ vezető csúcstechnológiai központjával, a **Szilícium-völggyel**. **Kanada** nyersanyagokban (kőolaj, fa, ásványkincs) gazdag, fejlett gazdaság. Észak-Amerika gazdasági integrációját az **USMCA (az Egyesült Államok, Kanada és Mexikó szabadkereskedelmi egyezménye)** biztosítja, amely megkönnyíti a régión belüli kereskedelmet és a termelési láncok összekapcsolódását.

## Dél-Amerika gazdasága és társadalma

Dél-Amerika gazdaságát jelentős részben a nyersanyag-export (Brazília — vasérc, szója; Venezuela és Ecuador — kőolaj; Chile — réz) és a mezőgazdaság (brazil kávé- és szójatermelés, argentin marhahústermelés a Pampán) határozza meg. A kontinens fejlettségi szintje egyenlőtlen: **Brazília** és **Argentína** a régió legnagyobb gazdaságai, míg a kisebb, kevésbé diverzifikált gazdaságú országok (Bolívia, Paraguay) fejlettsége elmarad. A gyors, kontrollálatlan urbanizáció miatt Dél-Amerika nagyvárosaiban (São Paulo, Rio de Janeiro, Lima) jelentős nyomornegyedek (**favelák**) alakultak ki.

## Az Amazonas esőerdő és a fenntarthatóság kérdése

Az Amazonas esőerdő a Föld oxigéntermelésének és szén-dioxid-megkötésének kulcsfontosságú térsége, amelyet a mezőgazdasági terjeszkedés (szójaültetvények, legelők) és az illegális fakitermelés miatt folyamatos **erdőirtás** fenyeget — ez globális klímavédelmi aggodalmakat vet fel, és a fenntartható erdőgazdálkodás nemzetközi összefogást igénylő kérdés.

## Jelentősége

Amerika két kontinensének természetföldrajzi és gazdasági sokfélesége — a fejlett észak-amerikai gazdaságtól a nyersanyag-exportáló dél-amerikai országokig — jól szemlélteti a globális fejlettségi egyenlőtlenségeket és a természeti erőforrások gazdasági jelentőségét.
`,
    key_concepts: [
      "Kordillerák és Andok",
      "Amazonas-medence és esőerdő-irtás",
      "USA és Kanada gazdasága",
      "Brazília és Argentína nyersanyag-exportja",
      "USMCA szabadkereskedelmi egyezmény",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik hegységrendszer húzódik végig Dél-Amerika nyugati peremén?",
        options: ["az Andok", "a Kordillerák", "a Sziklás-hegység", "a Brazil-fennsík"],
        correct_answer: "az Andok",
        explanation: "Az Andok a Föld leghosszabb szárazföldi hegyláncrendszere, Dél-Amerika nyugati peremén húzódik, a Csendes-óceáni-lemez szubdukciója miatt alakult ki.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik folyó a Föld vízhozam szerint legnagyobb folyója?",
        options: ["az Amazonas", "a Mississippi", "a Nílus", "a Kongó"],
        correct_answer: "az Amazonas",
        explanation: "Az Amazonas a Föld vízhozam szerint legnagyobb folyója, amely a hasonló nevű esőerdő vízgyűjtő területét táplálja.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az USMCA?",
        options: [
          "az Egyesült Államok, Kanada és Mexikó szabadkereskedelmi egyezménye",
          "az Amazonas-medence országainak környezetvédelmi szervezete",
          "Dél-Amerika közös valutaövezete",
          "az andoki országok bányászati szövetsége",
        ],
        correct_answer: "az Egyesült Államok, Kanada és Mexikó szabadkereskedelmi egyezménye",
        explanation: "Az USMCA az Egyesült Államok, Kanada és Mexikó közötti szabadkereskedelmi egyezmény, amely megkönnyíti az észak-amerikai régión belüli kereskedelmet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kiemelten fontos globális klímavédelmi szempontból az Amazonas esőerdő megőrzése?",
        options: [
          "jelentős szerepet játszik a szén-dioxid megkötésében és az oxigéntermelésben, míg irtása felgyorsítja az éghajlatváltozást",
          "mert kizárólag itt élnek veszélyeztetett állatfajok",
          "mert az esőerdő területén található a világ legnagyobb kőolajkészlete",
          "mert az esőerdő teljes egészében védett, ember nem él a közelében",
        ],
        correct_answer: "jelentős szerepet játszik a szén-dioxid megkötésében és az oxigéntermelésben, míg irtása felgyorsítja az éghajlatváltozást",
        explanation: "Az Amazonas esőerdő hatalmas szén-dioxid-megkötő és oxigéntermelő kapacitása miatt kulcsfontosságú a globális klímarendszer stabilitásában, ezért az erdőirtás (mezőgazdasági terjeszkedés, fakitermelés) komoly nemzetközi aggodalmat vált ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nevezik gyakran a Nagy-síkságot (Great Plains) 'a világ kenyereskosarának'?",
        options: [
          "mert kiterjedt, gépesített gabonatermő területei az Egyesült Államok és a világ jelentős búza- és kukoricaexportját adják",
          "mert itt található a világ legnagyobb kőolajmezője",
          "mert a terület kizárólag állattenyésztésre alkalmas",
          "mert itt húzódik az USA legnagyobb ipari övezete",
        ],
        correct_answer: "mert kiterjedt, gépesített gabonatermő területei az Egyesült Államok és a világ jelentős búza- és kukoricaexportját adják",
        explanation: "A Nagy-síkság kiterjedt, gépesített, extenzív gabonatermesztése (búza, kukorica) miatt az Egyesült Államok egyik legfontosabb mezőgazdasági térsége, amely jelentős mennyiségű gabonát exportál a világpiacra.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "ausztralia-es-oceania-foldrajza",
    title: "Ausztrália és Óceánia földrajza",
    level: "mindketto",
    theme: "Regionális földrajz",
    order_index: 28,
    summary_markdown:
      "Ausztrália a Föld legszárazabb lakott kontinense, amelynek belsejét kiterjedt sivatagok foglalják el, népessége a partvidékre koncentrálódik. Óceánia szigetvilágát a korallzátonyok, a vulkáni eredetű szigetek és az éghajlatváltozás okozta tengerszint-emelkedés veszélye jellemzi.",
    content_markdown: `
## Ausztrália domborzata és éghajlata

Ausztrália a Föld legkisebb kontinense, ugyanakkor a legszárazabb lakott kontinens is egyben. Domborzata viszonylag egyhangú: a keleti partvidéket az idős, lepusztult **Nagy-Vízválasztó-hegység** kíséri, a kontinens belsejét pedig kiterjedt, alacsony **fennsíkok és sivatagok** (Nagy-Viktória-sivatag, Nagy-Homok-sivatag) foglalják el, amelyeket összefoglalóan **"outback"** néven is említenek. A kontinens középső részén emelkedik a világhírű, szent jelentőségű homokkőszikla, az **Uluru (Ayers Rock)**. Ausztrália éghajlata a belső területeken sivatagi-száraz, a keleti és déli partvidéken mérsékelt-szubtrópusi, míg az északi részen trópusi-monszun jellegű.

## Népesség és gazdaság

Ausztrália népessége (kb. 26 millió fő) rendkívül egyenlőtlenül oszlik el: a lakosság túlnyomó része a keleti és délkeleti partvidék nagyvárosaiban (**Sydney, Melbourne, Brisbane**) koncentrálódik, míg a kontinens száraz belseje szinte lakatlan. Ausztrália gazdasága fejlett, jelentős szerepet játszik benne a **bányászat** (vasérc, szén, arany, bauxit — jelentős részük exportra, elsősorban Kelet-Ázsiába kerül) és az **extenzív állattenyésztés** (a világ egyik vezető gyapjú- és juhhústermelője a száraz belső területek legelőin). Az őslakos **ausztrál aboriginal** népesség a gyarmatosítás előtt évtizezredek óta élt a kontinensen, kultúrájuk és földhöz fűződő jogaik napjainkban is fontos társadalmi-politikai kérdést jelentenek.

## Óceánia szigetvilága

**Óceánia** a Csendes-óceán trópusi és szubtrópusi szigetvilágát foglalja magába, amelyet hagyományosan három nagy régióra osztanak:

- **Melanézia**: Pápua Új-Guinea, Fidzsi, Salamon-szigetek — nagyobb, hegyvidékes, vulkanikus eredetű szigetek;
- **Mikronézia**: kisebb szigetek és korallzátony-szigetek (atollok) az egyenlítőtől északra (pl. Marshall-szigetek, Kiribati);
- **Polinézia**: a Csendes-óceán keleti-déli részén elszórt szigetcsoportok (Hawaii, Tonga, Szamoa, Új-Zéland).

Az óceániai szigetek két fő típusa a **vulkanikus eredetű, hegyes szigetek** (pl. Hawaii, Fidzsi) és az alacsony fekvésű **korallzátony-szigetek (atollok)**, amelyek jellemzően egy elsüllyedt vulkáni sziget körüli korallgyűrűből alakultak ki.

## Éghajlatváltozás és a szigetállamok fenyegetettsége

Az alacsony fekvésű csendes-óceáni atollállamok (pl. **Tuvalu, Kiribati, Marshall-szigetek**) különösen ki vannak téve a globális éghajlatváltozás okozta **tengerszint-emelkedésnek**: mivel átlagos tengerszint feletti magasságuk mindössze néhány méter, a folyamatos tengerszint-emelkedés hosszú távon a szigetek teljes elárasztásával, lakhatatlanná válásával fenyegethet, ami a lakosság kényszerű áttelepítését (**klímamenekültek**) vetheti fel.

## Jelentősége

Ausztrália és Óceánia sajátos természetföldrajzi adottságai (szárazság, elszigeteltség, korallzátonyok) és az éghajlatváltozással szembeni kiszolgáltatottsága a régiót a globális környezeti kihívások egyik legfontosabb szemléltető példájává teszi.
`,
    key_concepts: [
      "outback és a belső sivatagok",
      "Uluru",
      "Melanézia, Mikronézia, Polinézia",
      "vulkanikus szigetek és korallzátony-atollok",
      "tengerszint-emelkedés és klímamenekültek",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hol koncentrálódik Ausztrália népességének túlnyomó része?",
        options: [
          "a keleti és délkeleti partvidék nagyvárosaiban",
          "a kontinens száraz belső területein",
          "az északi trópusi partvidéken egyenletesen",
          "egyenlő arányban a kontinens egész területén",
        ],
        correct_answer: "a keleti és délkeleti partvidék nagyvárosaiban",
        explanation: "Ausztrália lakosságának döntő többsége a keleti és délkeleti partvidék nagyvárosaiban (Sydney, Melbourne, Brisbane) él, mivel a kontinens belseje rendkívül száraz és gyéren lakott.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik régió tartozik Óceánia három nagy földrajzi egysége közé?",
        options: ["Polinézia", "Patagónia", "Szahel-öv", "Balkán"],
        correct_answer: "Polinézia",
        explanation: "Óceániát hagyományosan Melanéziára, Mikronéziára és Polinéziára osztják, ezek egyike a Csendes-óceán keleti-déli részén fekvő Polinézia.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért veszélyezteti különösen erősen az éghajlatváltozás az olyan csendes-óceáni államokat, mint Tuvalu vagy Kiribati?",
        options: [
          "alacsony, néhány méteres átlagos tengerszint feletti magasságuk miatt a tengerszint-emelkedés a teljes szigetet elárasztással fenyegeti",
          "mert ezek az államok a kontinens belsejében fekszenek, távol a tengertől",
          "mert ezekben az országokban nincs mezőgazdaság",
          "mert ezek az államok vulkanikusan aktívak",
        ],
        correct_answer: "alacsony, néhány méteres átlagos tengerszint feletti magasságuk miatt a tengerszint-emelkedés a teljes szigetet elárasztással fenyegeti",
        explanation: "Az alacsony fekvésű korallzátony-atollokból álló szigetállamok tengerszint feletti magassága mindössze néhány méter, ezért a globális tengerszint-emelkedés hosszú távon a teljes lakott terület elárasztásával fenyegetheti őket.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi Ausztrália gazdaságában a bányászati ágazatot?",
        options: [
          "jelentős vasérc-, szén-, arany- és bauxitexportot bonyolít le, elsősorban Kelet-Ázsia felé",
          "kizárólag belföldi felhasználásra termel, exportja elhanyagolható",
          "csak kőolaj-kitermelésre korlátozódik",
          "teljesen leállt a 21. században",
        ],
        correct_answer: "jelentős vasérc-, szén-, arany- és bauxitexportot bonyolít le, elsősorban Kelet-Ázsia felé",
        explanation: "Ausztrália gazdaságának egyik pillére a bányászat: a kitermelt vasérc, szén, arany és bauxit jelentős része exportra, elsősorban a kelet-ázsiai piacokra (Kína, Japán, Dél-Korea) kerül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miből alakulnak ki jellemzően a korallzátony-szigetek (atollok)?",
        options: [
          "egy elsüllyedt vulkáni sziget körül kialakuló korallgyűrűből",
          "a szárazföldi lepusztulás tengerbe hordott üledékéből",
          "kizárólag folyami hordalék tengerbe torkolásából",
          "gleccserek által szállított morénaanyagból",
        ],
        correct_answer: "egy elsüllyedt vulkáni sziget körül kialakuló korallgyűrűből",
        explanation: "Az atollok jellemzően egy fokozatosan elsüllyedő vulkáni sziget köré épült korallzátonyból alakulnak ki, miközben a sziget maga a tenger szintje alá süllyed.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "magyarorszag-termeszetfoldrajza",
    title: "Magyarország természetföldrajza",
    level: "mindketto",
    theme: "Magyarország földrajza",
    order_index: 29,
    summary_markdown:
      "Magyarország a Kárpát-medence központi részén fekszik, felszínét jellemzően síkságok és alacsony-közepes magasságú középhegységek építik fel. Az ország vízrajzát a Duna és a Tisza folyórendszere, éghajlatát a mérsékelt övi kontinentális jelleg határozza meg.",
    content_markdown: `
## Magyarország helyzete a Kárpát-medencében

Magyarország a **Kárpát-medence** központi, legmélyebb fekvésű részén helyezkedik el, amelyet minden oldalról hegyvonulatok — nyugaton az Alpok keleti nyúlványai, északon és keleten a Kárpátok íve, délen a Dinári-hegység — vesznek körül. Ez a medencejelleg alapvetően meghatározza az ország éghajlatát (a hegyek felfogják a nedves légtömegeket) és vízrajzát (az ország szinte egész területe egyetlen vízgyűjtő terület, a Duna vízgyűjtője részét képezi).

## Nagytájak

Magyarország felszínét négy nagy tájegységre oszthatjuk:

- **Alföld (Nagyalföld)**: az ország legnagyobb, legalacsonyabb fekvésű nagytája, a Duna-Tisza közén és a Tiszántúlon húzódik, jellemzően folyóvízi és szélhordta (löszös, futóhomokos) üledékekkel fedett síkság, kiváló mezőgazdasági adottságokkal;
- **Kisalföld**: az ország északnyugati részén fekvő, szintén síksági jellegű terület, a Győri-medence tartozik hozzá;
- **Dunántúli-dombság és a Dunántúli-középhegység**: a Dunától nyugatra fekvő terület, ahol a dombvidékek (Somogyi-dombság, Mecsek) mellett a **Bakony**, a **Vértes** és a **Mecsek** középhegységei emelkednek;
- **Északi-középhegység**: az ország északi részén húzódó, viszonylag idős, vulkanikus eredetű hegyvonulat, amelyhez a **Mátra** (benne az ország legmagasabb pontja, a **Kékes, 1014 m**), a **Bükk** és a **Zempléni-hegység** tartozik.

## Vízrajz

Magyarország legfontosabb folyói a **Duna** (amely az országot északról délre, Budapesten át szeli át) és a **Tisza** (amely az Alföldön kanyarog keresztül, hazánk leghosszabb, teljes egészében magyarországi szakasszal rendelkező nagy folyója). Mindkét folyó árvízveszélyes, ezért az Alföldön a 19. századtól kiterjedt **folyószabályozási és árvízvédelmi (gátépítési)** munkálatok folytak (pl. Vásárhelyi Pál tiszai szabályozásai). Az ország legnagyobb tava a sekély, kontinentális éghajlatú **Balaton**, amely az ország egyik legfontosabb üdülőkörzete; emellett jelentős a **Velencei-tó** és a Hévízi-tó, valamint az ország gazdag hévízkészlete (termálvizek, gyógyfürdők).

## Éghajlat

Magyarország éghajlata a **mérsékelt övi kontinentális éghajlat** típusába tartozik, amelyben nyugat felől óceáni, kelet felől kontinentális, dél felől mediterrán hatások is érvényesülnek — ezt nevezzük **átmeneti (mérsékelt kontinentális) éghajlatnak**. Jellemző rá a négy jól elkülönülő évszak, a viszonylag nagy évi hőingás és a nyári csapadékmaximum, bár az ország keleti, alföldi részein (pl. a Hortobágy környékén) már a szárazabb, sztyeppei jelleg is megjelenik.

## Talajok és növényzet

Az Alföld löszös vidékein a kiváló termékenységű **csernozjom (mezőségi) talajok** a jellemzőek, a Duna-Tisza közének futóhomokos területein viszont kevésbé termékeny homoktalajok találhatók. Az ország eredeti növénytakarója a lombhullató tölgyes-bükkös erdő volt, amelynek nagy részét az évszázados mezőgazdasági művelés szántóvá alakította; a hegyvidékeken (Bükk, Mátra) ma is összefüggő erdők találhatók.

## Jelentősége

Magyarország természetföldrajzi adottságainak — a medencehelyzetnek, a termékeny alföldi talajoknak és a mérsékelt kontinentális éghajlatnak — ismerete alapvető az ország mezőgazdasági, vízgazdálkodási és környezetvédelmi kérdéseinek megértéséhez.
`,
    key_concepts: [
      "Kárpát-medence és nagytájak",
      "Alföld, Kisalföld, Dunántúli-középhegység, Északi-középhegység",
      "Duna és Tisza folyószabályozása",
      "Balaton és hévízkincs",
      "csernozjom talajok",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik nagytáj Magyarország legnagyobb, legalacsonyabb fekvésű területe?",
        options: ["az Alföld", "a Kisalföld", "a Dunántúli-középhegység", "az Északi-középhegység"],
        correct_answer: "az Alföld",
        explanation: "Az Alföld (Nagyalföld) Magyarország legnagyobb kiterjedésű és legalacsonyabb fekvésű nagytája, amely a Duna-Tisza közét és a Tiszántúlt foglalja magába.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik hegység és csúcs jelöli Magyarország legmagasabb pontját?",
        options: ["a Mátra, Kékes (1014 m)", "a Bükk, Istállós-kő", "a Bakony, Kőris-hegy", "a Mecsek, Zengő"],
        correct_answer: "a Mátra, Kékes (1014 m)",
        explanation: "Magyarország legmagasabb pontja a Mátrában található Kékes-csúcs, amely 1014 méter magas.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kellett a 19. századtól kiterjedt folyószabályozásokat végezni a Tisza mentén?",
        options: [
          "a Tisza kanyargós, árvízveszélyes folyása gyakori áradásokat okozott az Alföldön",
          "mert a Tisza vize sótartalma miatt alkalmatlan volt öntözésre",
          "mert a Tisza medre teljesen kiszáradt",
          "mert a Tiszán nem lehetett hajózni",
        ],
        correct_answer: "a Tisza kanyargós, árvízveszélyes folyása gyakori áradásokat okozott az Alföldön",
        explanation: "A Tisza erősen kanyargós, kis esésű folyása gyakori és pusztító áradásokhoz vezetett, ezért Vásárhelyi Pál vezetésével a 19. századtól kiterjedt folyószabályozási és gátépítési munkálatokat végeztek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kiváló mezőgazdasági adottságú az Alföld löszös vidéke?",
        options: [
          "a lösz alapkőzeten kialakuló csernozjom talajok rendkívül termékenyek",
          "mert a terület egész évben vízzel borított",
          "mert a talaj kizárólag futóhomokból áll",
          "mert az Alföld éghajlata trópusi jellegű",
        ],
        correct_answer: "a lösz alapkőzeten kialakuló csernozjom talajok rendkívül termékenyek",
        explanation: "Az Alföld löszös területein kialakuló csernozjom (mezőségi) talajok kiváló termékenységűek, magas humusztartalmuk miatt kiemelkedően alkalmasak mezőgazdasági művelésre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért határozza meg alapvetően Magyarország éghajlatát és vízrajzát a Kárpát-medencei fekvés?",
        options: [
          "a medencét körülvevő hegyek befolyásolják a légtömegek mozgását, és az ország szinte egésze a Duna vízgyűjtőjéhez tartozik",
          "mert a Kárpátok teljesen elzárják Magyarországot minden csapadéktól",
          "mert a medencehelyzet miatt Magyarországon nincsenek folyók",
          "mert a Kárpát-medence trópusi éghajlati övbe tartozik",
        ],
        correct_answer: "a medencét körülvevő hegyek befolyásolják a légtömegek mozgását, és az ország szinte egésze a Duna vízgyűjtőjéhez tartozik",
        explanation: "A Kárpátok és az Alpok nyúlványai felfogják és módosítják a beáramló légtömegeket, ami az átmeneti, mérsékelt kontinentális éghajlatot eredményezi, miközben a medence lefolyási rendszere szinte teljes egészében a Duna vízgyűjtő területéhez kapcsolódik.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "magyarorszag-tarsadalmi-gazdasagi-foldrajza-es-fenntarthatosag",
    title:
      "Magyarország társadalmi-gazdasági földrajza, globális környezeti problémák és fenntartható fejlődés",
    level: "emelt",
    theme: "Magyarország földrajza",
    order_index: 30,
    summary_markdown:
      "Magyarország társadalmi-gazdasági szerkezetét a rendszerváltás utáni piacgazdasági átalakulás, az uniós integráció és a fővárosi túlsúly jellemzi. A tétel emellett a globális környezeti problémákat (klímaváltozás, biodiverzitás-csökkenés) és a fenntartható fejlődés alapelveit is áttekinti.",
    content_markdown: `
## Népesség és településhálózat

Magyarország lakossága (kb. 9,6-9,7 millió fő) évtizedek óta **fogyó tendenciát** mutat, amelynek fő oka az alacsony születésszám és — kisebb részben — az elvándorlás, elsősorban a fiatal, képzett munkaerő körében (EU-n belüli munkavállalási migráció). A településhálózatot jelentős **főváros-vidék egyenlőtlenség** jellemzi: **Budapest** és agglomerációja koncentrálja a GDP, a felsőoktatás és a magas hozzáadott értékű szolgáltatások jelentős részét, míg az ország keleti és déli megyéi (pl. Szabolcs-Szatmár-Bereg, Békés) fejlettsége elmarad az országos átlagtól.

## Gazdasági szerkezetváltás a rendszerváltás óta

Az 1989-90-es rendszerváltás után Magyarország gazdasága tervgazdaságból piacgazdasággá alakult át, amit kezdetben jelentős **ipari leépülés (dezindusztrializáció)** és munkanélküliség kísért, különösen a nehézipari térségekben (Borsod, Ózd környéke). A 2000-es évektől — az **Európai Unióhoz való csatlakozással (2004)** párhuzamosan — jelentős **külföldi működőtőke-beáramlás** (elsősorban a járműipar és az elektronikai ipar területén, pl. Győr, Kecskemét, Debrecen autóipari beruházásai) alakította át az ország gazdasági szerkezetét, exportorientált feldolgozóiparra építve.

## Mezőgazdaság és a Közös Agrárpolitika hatása

Magyarország mezőgazdasága a kiváló alföldi talajadottságokra (csernozjom) építve hagyományosan erős gabonatermesztő és állattenyésztő ország, jelentős búza-, kukorica- és napraforgó-exporttal. Az **uniós Közös Agrárpolitika (KAP)** keretében Magyarország jelentős agrártámogatásokat kap, amelyek a termelők jövedelmét és a vidéki térségek fejlesztését segítik, ugyanakkor versenyt is jelentenek a nagyobb nyugat-európai agrárvállalkozásokkal szemben.

## Globális környezeti problémák

A globális gazdasági fejlődés súlyos környezeti terheléssel jár. A legfontosabb globális környezeti problémák:

- **globális felmelegedés és éghajlatváltozás**: az üvegházhatású gázok (elsősorban a szén-dioxid) kibocsátásának növekedése emeli a Föld átlaghőmérsékletét, ami szélsőséges időjárási jelenségeket (aszályok, áradások, hőhullámok), a sarki jégtakaró olvadását és tengerszint-emelkedést okoz;
- **biodiverzitás-csökkenés**: az élőhelyek pusztulása (erdőirtás, monokultúrás mezőgazdaság), a túlhalászat és a klímaváltozás miatt fajok tűnnek el gyorsuló ütemben;
- **talajdegradáció és elsivatagosodás**: a túlzott vízkivétel, az erózió és a nem fenntartható mezőgazdasági gyakorlat termékeny talajok pusztulásához vezet (pl. a Száhel-övezetben);
- **vízhiány és a vízkészletek szennyezése**: egyes régiókban (Közel-Kelet, Észak-Afrika, Dél-Ázsia) az ivóvízhiány súlyos társadalmi-politikai feszültségeket okoz.

## A fenntartható fejlődés fogalma és eszközei

A **fenntartható fejlődés** olyan fejlődési modellt jelöl, amely "kielégíti a jelen szükségleteit anélkül, hogy veszélyeztetné a jövő nemzedékek esélyét saját szükségleteik kielégítésére" (Brundtland-jelentés, 1987). Három pillére a **gazdasági, a társadalmi és a környezeti fenntarthatóság** egyensúlya. Gyakorlati eszközei közé tartozik a **megújuló energiaforrások** (nap-, szél-, vízenergia, geotermikus energia) térnyerése a fosszilis energiahordozókkal szemben, a **körforgásos gazdaság** (a hulladék minimalizálása, újrahasznosítás), valamint a nemzetközi klímavédelmi együttműködés, mint a **2015-ös Párizsi Klímaegyezmény**, amely a globális felmelegedés 2 °C (törekvés szerint 1,5 °C) alatt tartását tűzte ki célul.

## Magyarország és a fenntarthatóság

Magyarország is részt vállal a klímavédelmi célok teljesítésében: a megújuló energiaforrások (elsősorban a **napenergia**) aránya az elmúlt években jelentősen nőtt a hazai villamosenergia-termelésben, és az ország az EU tagjaként részese az Európai Zöld Megállapodás céljainak (klímasemlegesség 2050-re). Ugyanakkor a hazai energiaszerkezet még mindig jelentős mértékben függ a fosszilis energiahordozóktól és az importált földgáztól, ami energiabiztonsági kihívást is jelent.

## Jelentősége

A társadalmi-gazdasági folyamatok és a globális környezeti kihívások összekapcsolt vizsgálata rávilágít arra, hogy Magyarország fejlődése szorosan összefügg a nemzetközi gazdasági-környezeti trendekkel, és a fenntartható fejlődés elvei nélkülözhetetlenek a jövő nemzedékek életminőségének megőrzéséhez.
`,
    key_concepts: [
      "főváros-vidék egyenlőtlenség",
      "rendszerváltás utáni gazdasági szerkezetváltás",
      "Közös Agrárpolitika hatása Magyarországon",
      "globális felmelegedés és biodiverzitás-csökkenés",
      "fenntartható fejlődés és Párizsi Klímaegyezmény",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi Magyarország népesedési folyamatait az elmúlt évtizedekben?",
        options: [
          "fogyó népesség, alacsony születésszám és jelentős elvándorlás",
          "gyors népességnövekedés a magas termékenység miatt",
          "állandó, változatlan népességszám",
          "kizárólag bevándorlás okozta népességnövekedés",
        ],
        correct_answer: "fogyó népesség, alacsony születésszám és jelentős elvándorlás",
        explanation: "Magyarország népessége évtizedek óta csökken, amit az alacsony születésszám és a fiatal, képzett munkaerő EU-n belüli elvándorlása is súlyosbít.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben csatlakozott Magyarország az Európai Unióhoz?",
        options: ["2004-ben", "1999-ben", "2010-ben", "1996-ban"],
        correct_answer: "2004-ben",
        explanation: "Magyarország 2004-ben csatlakozott az Európai Unióhoz, ami jelentős külföldi működőtőke-beáramlást és gazdasági szerkezetváltást is elősegített.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a fenntartható fejlődés fogalma a Brundtland-jelentés (1987) szerint?",
        options: [
          "olyan fejlődés, amely kielégíti a jelen szükségleteit anélkül, hogy veszélyeztetné a jövő nemzedékek esélyét saját szükségleteik kielégítésére",
          "a gazdasági növekedés korlátlan folytatását minden áron",
          "kizárólag a környezetvédelmi szempontok érvényesítését, a gazdasági fejlődés figyelmen kívül hagyásával",
          "a fosszilis energiahordozók kizárólagos használatát",
        ],
        correct_answer: "olyan fejlődés, amely kielégíti a jelen szükségleteit anélkül, hogy veszélyeztetné a jövő nemzedékek esélyét saját szükségleteik kielégítésére",
        explanation: "A fenntartható fejlődés Brundtland-jelentésben megfogalmazott definíciója a jelen és a jövő nemzedékek szükségleteinek egyidejű figyelembevételét hangsúlyozza, a gazdasági, társadalmi és környezeti pillérek egyensúlyában.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a 2015-ös Párizsi Klímaegyezmény fő célkitűzése?",
        options: [
          "a globális felmelegedés 2 °C (törekvés szerint 1,5 °C) alatt tartása az iparosodás előtti szinthez képest",
          "a fosszilis energiahordozók azonnali, teljes betiltása",
          "kizárólag a fejlett országok kibocsátásának szabályozása",
          "a világ népességnövekedésének korlátozása",
        ],
        correct_answer: "a globális felmelegedés 2 °C (törekvés szerint 1,5 °C) alatt tartása az iparosodás előtti szinthez képest",
        explanation: "A Párizsi Klímaegyezmény a globális átlaghőmérséklet-növekedés 2 °C, lehetőség szerint 1,5 °C alatt tartását tűzte ki célul az iparosodás előtti szinthez viszonyítva, nemzetközi együttműködés keretében.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért jelentett kettős hatást a rendszerváltás utáni gazdasági átalakulás Magyarország ipari térségeiben?",
        options: [
          "kezdetben jelentős dezindusztrializációt és munkanélküliséget okozott, majd a 2000-es évektől a külföldi működőtőke-beáramlás új, exportorientált feldolgozóipari kapacitásokat hozott létre",
          "a rendszerváltás azonnal, átmenet nélkül modern, fejlett ipari szerkezetet hozott létre",
          "az ipari termelés a rendszerváltás után folyamatosan és egyenletesen nőtt",
          "a rendszerváltásnak nem volt hatása a magyar ipari szerkezetre",
        ],
        correct_answer: "kezdetben jelentős dezindusztrializációt és munkanélküliséget okozott, majd a 2000-es évektől a külföldi működőtőke-beáramlás új, exportorientált feldolgozóipari kapacitásokat hozott létre",
        explanation: "A tervgazdaságból piacgazdaságba való átmenet kezdetben számos elavult nehézipari üzem bezárásával és munkanélküliséggel járt, majd az EU-csatlakozást követő külföldi tőkebeáramlás (pl. autóipari beruházások) új, versenyképes ipari szerkezetet alakított ki.",
        difficulty: 3,
      },
    ],
  },
];
