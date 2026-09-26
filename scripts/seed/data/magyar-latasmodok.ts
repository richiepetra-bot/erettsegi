import { TopicSeed } from "./angol";

export const magyarLatasmodokTopics: TopicSeed[] = [
  {
    slug: "zrinyi-miklos-szigeti-veszedelem",
    title: "Zrínyi Miklós: Szigeti veszedelem",
    level: "mindketto",
    theme: "Látásmódok",
    order_index: 15,
    summary_markdown:
      "A magyar barokk eposz megteremtője, hadvezér és költő egy személyben. A Szigeti veszedelem dédapja, a szigetvári hős Zrínyi Miklós önfeláldozó halálát emeli a nemzet bűneiért hozott vallásos-erkölcsi áldozattá.",
    content_markdown: `
## Élete és pályaképe

Zrínyi Miklós 1620-ban született a horvát-magyar főúri Zrínyi családban; dédapja, az azonos nevű Zrínyi Miklós volt Szigetvár 1566-os, hősi halállal végződő védelmének parancsnoka a török ostrommal szemben. A fiatal Zrínyi kiváló neveltetést kapott (jezsuita iskolák, itáliai tanulmányutak), és korán kitűnt mind katonai, mind szellemi téren — kortársai "a magyar Mars és Pallas" jelzővel illették, utalva arra, hogy egyszerre volt kiváló hadvezér és művelt, tudós költő. Horvátországi bánként és végvári hadvezérként több sikeres hadjáratot vezetett a törökök ellen (leghíresebb az 1664-es "téli hadjárat" és az eszéki híd felégetése).

Politikai röpirataiban (legismertebb a *Az török áfium ellen való orvosság*) szenvedélyesen érvelt amellett, hogy Magyarországnak önerőből, nemzeti hadsereggel kell megvédenie magát — nemcsak a törökkel, hanem a bécsi udvar tétlenségével szemben is. 1664-ben, vadászat közben, rejtélyes körülmények között egy vadkan ölte meg a csáktornyai erdőben — halála körül a mai napig felmerülnek összeesküvés-elméletek, mivel politikai nézetei sok ellenséget szereztek neki mind a török, mind a Habsburg udvar körében.

## A Szigeti veszedelem

Zrínyi fő műve, a *Szigeti veszedelem* (megírása 1645–46 körülre tehető, megjelenése 1651-ben, az *Adriai tengernek Syrenája* című verseskötetben) a magyar barokk irodalom legjelentősebb eposza. A 15 énekes, hexameter helyett magyaros, ún. Zrínyi-strófában (négysoros, egységesen rímelő strófa) írt mű dédapja, a szigetvári Zrínyi Miklós 1566-os hősi halálát dolgozza fel — de nem egyszerű történeti krónikaként, hanem vallásos-erkölcsi allegóriaként.

**A mű alapkoncepciója**: a magyarok bűneik miatt Isten büntetését vonják magukra (a török pusztítás formájában), de Zrínyi Miklós önfeláldozó, tudatosan vállalt hősi halála (amikor a várvédők az utolsó rohamban kitörnek és mind elesnek) engeszteli ki Istent, és váltja meg jelképesen a nemzetet. Ez a gondolat a barokk vallásosság és a nemzeti sorsértelmezés sajátos ötvözete.

**Formai és tartalmi hatások**: Zrínyi tudatosan követte a klasszikus és kortárs európai eposzi hagyományt — Vergilius *Aeneisét* (a hős nemzetalapító/-megváltó szerepe), Tasso *A megszabadított Jeruzsálemét* (a keresztény-pogány szembenállás, a csodás-vallásos elemek), valamint részben Homéroszt és Ariostót. Az eposz cselekményében a történeti-katonai események mellett természetfeletti szereplők (Isten, angyalok, illetve a törökök oldalán allegorikus alakok, pl. Alekto fúria) is beavatkoznak, ezzel emelve a történetet eposzi-mitikus szintre.

## Kiemelt mozzanatok

A mű nyitányában Zrínyi a hagyományos eposzi invokációt (múzsahívás helyett Istenhez, illetve Szűz Máriához fordul) alkalmazza, ezzel is jelezve művének keresztény-vallásos jellegét. A záró énekekben a szigetvári védők tudatos, önfeláldozó kitörése és pusztulása a mű erkölcsi-vallásos csúcspontja: a hősi halál itt nem tragikus vereség, hanem üdvözítő, megváltó tett.

## Jelentősége

Zrínyi Miklós a magyar barokk irodalom és a nemzeti eposzi hagyomány megteremtője: a Szigeti veszedelem az első olyan magyar nyelvű eposz, amely a klasszikus és kortárs európai epikai hagyomány színvonalán, ugyanakkor mélyen magyar nemzeti-vallásos tartalommal szólal meg. Politikai gondolkodóként és hadvezérként is a magyar történelem egyik legjelentősebb 17. századi alakja, aki a nemzeti önvédelem és önreflexió gondolatát irodalmi és politikai téren egyaránt megfogalmazta.
`,
    key_concepts: [
      "barokk eposz",
      "Zrínyi-strófa",
      "önfeláldozó hősi halál",
      "nemzeti bűn és bűnhődés",
      "vallásos allegória",
    ],
    source_refs: [
      { label: "Zrínyi Miklós: Szigeti veszedelem (MEK)", url: "https://mek.oszk.hu/10000/10054/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Zrínyi Miklós (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Zr%C3%ADnyi_Mikl%C3%B3s_(k%C3%B6lt%C5%91)" },
      { label: "Zrínyi Miklós – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/konyvtar/zrinyi-miklos/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Kinek a hősi halálát dolgozza fel a Szigeti veszedelem?",
        options: [
          "a szerző dédapjának, a szigetvári Zrínyi Miklósnak",
          "a szerző saját, elképzelt jövőbeli halálát",
          "Hunyadi János hősi halálát",
          "II. Rákóczi Ferencét",
        ],
        correct_answer: "a szerző dédapjának, a szigetvári Zrínyi Miklósnak",
        explanation: "A költő Zrínyi Miklós dédapjának, az 1566-os szigetvári ostrom hősi halált halt védőjének emléket állító eposzt írt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen alapgondolatra épül a mű vallásos-erkölcsi koncepciója?",
        options: [
          "a magyarok bűnei miatti isteni büntetést Zrínyi önfeláldozó halála engeszteli ki",
          "a törökök végső győzelmét dicsőíti",
          "a Habsburg-ház isteni jogát hirdeti",
          "a pogány istenek büntetését ábrázolja",
        ],
        correct_answer: "a magyarok bűnei miatti isteni büntetést Zrínyi önfeláldozó halála engeszteli ki",
        explanation: "A mű szerint a magyarok bűnei vonják magukra Isten büntetését (a török pusztítást), amit Zrínyi önfeláldozása enged ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik két európai eposzi hagyomány hatása mutatható ki legerősebben Zrínyi művében?",
        options: [
          "Vergilius Aeneise és Tasso A megszabadított Jeruzsáleme",
          "Dante Isteni Színjátéka és Petrarca szonettjei",
          "Homérosz Odüsszeiája és Ovidius Átváltozásai kizárólagosan",
          "Milton Elveszett Paradicsoma és Cervantes Don Quijoteja",
        ],
        correct_answer: "Vergilius Aeneise és Tasso A megszabadított Jeruzsáleme",
        explanation: "Zrínyi tudatosan követte Vergilius és Tasso eposzi hagyományát a hős szerepe és a csodás-vallásos elemek terén.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik politikai röpiratában érvel a nemzeti önvédelem szükségessége mellett?",
        options: ["Az török áfium ellen való orvosság", "Szigeti veszedelem", "Adriai tengernek Syrenája", "Vitéz hadnagy"],
        correct_answer: "Az török áfium ellen való orvosság",
        explanation: "Ebben a röpiratban Zrínyi a nemzeti, önerőből felállított hadsereg szükségessége mellett érvel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan halt meg Zrínyi Miklós 1664-ben?",
        options: [
          "vadászat közben egy vadkan ölte meg, rejtélyes körülmények között",
          "csatában esett el a törökök ellen",
          "betegségben halt meg",
          "kivégezték politikai nézetei miatt",
        ],
        correct_answer: "vadászat közben egy vadkan ölte meg, rejtélyes körülmények között",
        explanation: "Zrínyi halála a csáktornyai erdőben, vadászaton történt, és a mai napig felmerülnek összeesküvés-elméletek.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "madach-imre-az-ember-tragediaja",
    title: "Madách Imre: Az ember tragédiája",
    level: "mindketto",
    theme: "Látásmódok",
    order_index: 16,
    summary_markdown:
      "A magyar irodalom egyik legnagyobb filozófiai drámai költeménye. Ádám álomutazása az emberi történelem nagy korszakain át azt a kérdést járja körül, van-e értelme a küzdelemnek egy olyan világban, ahol a nagy eszmék újra és újra megbuknak.",
    content_markdown: `
## Élete és pályaképe

Madách Imre 1823-ban született nógrádi birtokos nemesi családban. Jogot végzett, majd birtokán gazdálkodott és vármegyei tisztségeket viselt. Magánéletét mély tragédiák árnyékolták be: felesége, Fráter Erzsébet hűtlensége és az ebből fakadó válás (1854–55 körül) megrendítő csalódást okozott számára, amely nyomot hagyott világképén és emberábrázolásán. Az 1848–49-es szabadságharc bukása, majd az azt követő megtorlás idején politikai okokból (öccse, majd egy barátja bujtatása miatt) egy évet börtönben töltött (1852–53) — ez az élmény, a nemzeti és személyes csalódások sorozata alapozta meg *Az ember tragédiája* átfogó, pesszimizmusba hajló, ugyanakkor végül mégis reményt sugárzó világlátását.

## Az ember tragédiája (1859–60, megjelent 1861)

A mű **drámai költemény** — olyan műfaj, amely dráma formájú (párbeszédes, színekre tagolt), de elsősorban olvasásra, nem színpadi előadásra készült (bár később, először 1883-ban, Paulay Ede rendezésében mégis színre vitték, és azóta a magyar színházi kultúra egyik állandó, sokszor újraértelmezett darabja). A mű 15 "színre" (jelenetre) tagolódik.

**A keretcselekmény**: a Mennyben Lucifer, aki az Úrral szemben a tagadás és a kétely szellemét képviseli, jutalmul két fát kap Ádámtól és Évától a Paradicsomban — ez okozza a bűnbeesést és a kiűzetést. A földre kerülő Ádám kétségbeesésében meg akarja ölni magát, de Lucifer egy álmot bocsát rá, amelyben végigvezeti őt (és rajta keresztül Évát is, aki minden színben újra megjelenik) az emberi történelem nagy korszakain: az egyiptomi (rabszolgatartó), az athéni (a demokrácia és Miltiadész bukása), a római (Kepler-szín — a tudomány és a hatalom viszonya), a bizánci, a prágai, a párizsi (francia forradalom), a londoni (a korai kapitalizmus és a "szabadverseny" világa), majd a jövőbe tekintő falanszter-szín (egy utópisztikus-disztópikus, technokrata jövőtársadalom) és végül az eszkimó-szín (az emberiség pusztulása egy jövőbeli, kihűlő Föld jégkorszakában).

**A végkifejlet**: Ádám minden színben más-más társadalmi szerepben (király, hadvezér, tudós, forradalmár stb.) éli át egy-egy nagy eszme (szabadság, tudomány, egyenlőség) felemelkedését és elbukását vagy eltorzulását. Az álomból felébredve Ádám úgy dönt, öngyilkos lesz, mivel úgy látja, minden emberi küzdelem hiábavaló — ám Éva bejelenti, hogy gyermeket vár, ami új reményt ad. A mű záró sora, az Úr szava ("Mondottam, ember: küzdj és bízva bízzál!") a küzdelem és a remény fenntartásának parancsát fogalmazza meg minden csalódás ellenére.

## Filozófiai mag

A mű központi kérdése az emberi történelem ismétlődő mintázata: a nagy eszmék újra és újra megszületnek, majd elbuknak vagy eltorzulnak — ez a ciklikusság veti fel a kérdést, van-e egyáltalán értelme a történelmi haladásnak és az egyéni küzdelemnek. A három főszereplő szimbolikus szerepet tölt be: **Ádám** a cselekvő akaratot és a mindig újrakezdő reményt, **Lucifer** a kételkedő, racionalista-nihilista értelmet, **Éva** pedig az életet folytonosan megújító érzelmet és a jövőt (a gyermek, az utódnemzés) képviseli.

## Jelentősége

Az ember tragédiája a magyar irodalom egyik legnagyobb filozófiai igényű alkotása, amelyet gyakran hasonlítanak Goethe *Faustjához* vagy Byron *Manfrédjához* az emberi lét nagy kérdéseit feszegető, kozmikus léptékű drámai költemény műfajában. A mű állandó témája marad a haladásba vetett hit és a történelmi csalódottság feszültségének, ezért minden korban újra aktuálissá válik — ez magyarázza folyamatos jelenlétét a magyar színházi életben, sokféle rendezői értelmezésben.
`,
    key_concepts: [
      "drámai költemény",
      "Ádám-Éva-Lucifer szimbolika",
      "történelmi ciklikusság",
      "falanszter-szín",
      "küzdj és bízva bízzál",
    ],
    source_refs: [
      { label: "Madách Imre: Az ember tragédiája (MEK)", url: "https://mek.oszk.hu/00800/00849/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Madách Imre (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Mad%C3%A1ch_Imre" },
      { label: "Madách Imre – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/konyvtar/madach-imre/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen műfajba sorolható Az ember tragédiája?",
        options: ["drámai költemény", "regény", "eposz", "novellaciklus"],
        correct_answer: "drámai költemény",
        explanation: "A mű drámai formájú, de elsősorban olvasásra készült; ezt a műfajt nevezzük drámai költeménynek.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki bocsát álmot Ádámra, hogy végigvezesse őt az emberi történelem korszakain?",
        options: ["Lucifer", "az Úr", "Éva", "egy angyal"],
        correct_answer: "Lucifer",
        explanation: "Lucifer, a tagadás és kétely szellemeként bocsátja Ádámra az álmot, amelyben a történelem nagy korszakain vezeti végig.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit szimbolizál Éva alakja a három főszereplő közül?",
        options: [
          "az életet folytonosan megújító érzelmet és a jövőt",
          "a kételkedő, racionalista értelmet",
          "a vak, cél nélküli akaratot",
          "az isteni büntetést"
        ],
        correct_answer: "az életet folytonosan megújító érzelmet és a jövőt",
        explanation: "Éva minden színben újra megjelenik, és a mű végén bejelentett várandóssága a jövő és a remény szimbóluma.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szín ábrázol egy utópisztikus-disztópikus, technokrata jövőtársadalmat?",
        options: ["a falanszter-szín", "az egyiptomi szín", "a párizsi szín", "a bizánci szín"],
        correct_answer: "a falanszter-szín",
        explanation: "A falanszter-szín egy jövőbeli, technokrata, egyéniséget elnyomó utópikus-disztópikus társadalmat mutat be.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit mond az Úr záró szava a mű végén?",
        options: [
          "\"Mondottam, ember: küzdj és bízva bízzál!\"",
          "\"Minden hiábavaló.\"",
          "\"A történelemnek nincs értelme.\"",
          "\"Térj vissza a Paradicsomba!\""
        ],
        correct_answer: "\"Mondottam, ember: küzdj és bízva bízzál!\"",
        explanation: "A záró sor a küzdelem és a remény fenntartásának parancsát fogalmazza meg minden csalódás ellenére.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "krudy-gyula-prozaja",
    title: "Krúdy Gyula prózája",
    level: "mindketto",
    theme: "Látásmódok",
    order_index: 17,
    summary_markdown:
      "A \"lírai novella\" magyar megteremtője. Krúdy Szindbád-novellái az emlékezés, az álom és a valóság összemosódó, nosztalgikus, impresszionista-szecessziós prózanyelvén idézik fel a századforduló letűnt, úri Magyarországát.",
    content_markdown: `
## Élete és pályaképe

Krúdy Gyula 1878-ban született Nyíregyházán, régi, de anyagilag fokozatosan lecsúszó nemesi családban. Fiatalon Budapestre került, ahol újságíróként kezdte pályáját, és rendkívül termékeny író lett: élete során mintegy nyolcvanhat regényt, több mint kétezer novellát és számos publicisztikai írást jelentetett meg. Élete jelentős részét anyagi bizonytalanság és egyre súlyosbodó alkoholizmus árnyékolta be; 1933-ban hunyt el Budapesten, szegényen.

## A Szindbád-novellák

Krúdy legismertebb alkotása a Szindbád-novellák sorozata (az első darabok 1911-től jelentek meg), amelyek főszereplője, Szindbád (a nevét az Ezeregyéjszaka hajós kalandorától kölcsönzi, de karaktere teljesen önálló) állandóan úton lévő, múltjába és emlékeibe visszatérő, szerelmi kalandokat kereső férfialak. A novellák nem hagyományos, oksági logika szerint felépülő cselekményekre épülnek, hanem **hangulatokra, emlékfoszlányokra és víziókra** — ezért nevezi az irodalomtörténet Krúdy műfaját **lírai novellának**: a próza itt a líra eszközeivel (hangulatiság, asszociatív szerkesztés, ismétlődő motívumok) dolgozik.

Szindbád folyamatosan ingázik álom és valóság, jelen és múlt között: sokszor nem is világos, hogy egy adott jelenet ténylegesen megtörténik-e, vagy csak Szindbád emlékezetében, képzeletében játszódik le. Ez a bizonytalanság, a valóság és az emlékezés/álom határainak elmosása Krúdy prózájának egyik legjellegzetesebb, legmodernebb vonása.

## Stílus és témavilág

Krúdy stílusát rendkívül gazdag, érzékletes, sűrű képekben bővelkedő, gyakran archaizáló-nosztalgikus nyelvezet jellemzi, amely a 19. század végi, "úri Magyarország" (vidéki kúriák, pesti kávéházak, éttermek, a hanyatló dzsentri világ) hangulatát idézi fel álomszerű, melankolikus tónusban. Ez a nosztalgikus, letűnt világ felidézése egyben rejtett társadalomkritikát is hordoz: Krúdy egyszerre idézi fel szeretettel és mutatja meg kritikusan ennek a világnak a hanyatlását, dekadenciáját.

Egyéb jelentős művei közé tartozik *A vörös postakocsi* (regény, amely a Krúdy-féle nosztalgikus-dekadens világ egyik legismertebb regényes feldolgozása) és a *Boldogult úrfikoromban* (a fiatalkor, a régi Magyarország felidézése).

## Jelentősége

Krúdy Gyula a modern magyar próza egyik legeredetibb, legsajátosabb hangú alkotója: a lírai novella műfajteremtő megújítása, valamint az emlékezés, álom és valóság összemosásának technikája a 20. századi magyar (és tágabban: közép-európai) prózanyelv egyik legfontosabb előfutárává tette. Hatása kimutatható a későbbi magyar prózaírók (pl. Márai Sándor) nosztalgikus, hangulati prózájában is.
`,
    key_concepts: [
      "lírai novella",
      "Szindbád",
      "impresszionizmus-szecesszió",
      "emlékezés és álomszerűség",
      "úri Magyarország nosztalgiája",
    ],
    source_refs: [
      { label: "Krúdy Gyula: Szindbád (MEK)", url: "https://mek.oszk.hu/00700/00760/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Krúdy Gyula (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Kr%C3%BAdy_Gyula" },
      { label: "Krúdy Gyula: Szindbád novellái – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/irodalom/krudy-gyula-szinbad-novellai/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen műfajt teremtett meg Krúdy Gyula a Szindbád-novellákkal?",
        options: ["lírai novella", "kalandregény", "helyzetdal", "komikus eposz"],
        correct_answer: "lírai novella",
        explanation: "Krúdy műfaja a lírai novella: a próza a líra eszközeivel (hangulatiság, asszociatív szerkesztés) dolgozik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi elsősorban Szindbád alakját és a novellák szerkezetét?",
        options: [
          "állandó úton levés, emlékek és álom-valóság összemosódása",
          "szigorú, oksági logikájú, lineáris cselekmény",
          "kizárólag történelmi témák feldolgozása",
          "dokumentarista, tényközlő elbeszélésmód",
        ],
        correct_answer: "állandó úton levés, emlékek és álom-valóság összemosódása",
        explanation: "Szindbád folyamatosan ingázik álom és valóság, jelen és múlt között, ami Krúdy prózájának egyik legjellegzetesebb vonása.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik letűnt világot idézi fel nosztalgikusan Krúdy prózája?",
        options: [
          "a 19. század végi \"úri Magyarországot\"",
          "a szocialista munkásvilágot",
          "a középkori lovagi világot",
          "a jelenkori nagyvárosi életet",
        ],
        correct_answer: "a 19. század végi \"úri Magyarországot\"",
        explanation: "Krúdy a vidéki kúriák, pesti kávéházak, a hanyatló dzsentri világ nosztalgikus, álomszerű hangulatát idézi fel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik regénye a Krúdy-féle nosztalgikus-dekadens világ egyik legismertebb feldolgozása?",
        options: ["A vörös postakocsi", "Szent Péter esernyője", "Édes Anna", "Sárarany"],
        correct_answer: "A vörös postakocsi",
        explanation: "A vörös postakocsi Krúdy egyik legismertebb regénye, amely a nosztalgikus-dekadens Krúdy-világot jeleníti meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Honnan kölcsönzi Krúdy Szindbád alakjának nevét?",
        options: [
          "az Ezeregyéjszaka hajós kalandorától",
          "egy valós történelmi személyiségtől",
          "egy görög mitológiai hőstől",
          "saját nagyapjától",
        ],
        correct_answer: "az Ezeregyéjszaka hajós kalandorától",
        explanation: "Szindbád nevét az Ezeregyéjszaka meséiből kölcsönzi Krúdy, de karaktere teljesen önálló alkotás.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "weores-sandor-kolteszete",
    title: "Weöres Sándor költészete",
    level: "mindketto",
    theme: "Látásmódok",
    order_index: 18,
    summary_markdown:
      "A 20. századi magyar líra egyik legsokoldalúbb, \"proteuszi\" alakváltó költője. Filozofikus mélységű nagyversei, mitikus-misztikus költeményei és generációk óta szeretett gyermekversei egyaránt életműve szerves részei.",
    content_markdown: `
## Élete és pályaképe

Weöres Sándor 1913-ban született Szombathelyen. Rendkívül sokoldalú műveltséggel rendelkezett: filozófiából doktorált, és élete során a keleti (indiai, kínai) filozófiák és vallások (hinduizmus, buddhizmus) is mélyen hatottak világképére és költészetére. Bár időben a Nyugat harmadik nemzedékéhez sorolható, életműve stílusában és sokszínűségében jóval túlnyúlik e nemzedéki kereten. Felesége, Károlyi Amy szintén költő volt; kettejük kapcsolata és szellemi közössége élete végéig meghatározó maradt. 1989-ben hunyt el Budapesten.

## A "proteuszi" költő

Weöres költészetének legjellemzőbb vonása a rendkívüli sokszínűség és alakváltó képesség — ezért nevezik gyakran **"proteuszi"** költőnek, a görög mitológia alakváltó tengeri istenéről, Próteuszról elnevezve. Weöres képes volt a legkülönbözőbb stílusokban, hangnemekben, sőt akár fiktív költői személyiségeket és nyelveket is megalkotva írni:

- **Psyché** (1972) — az egyik legmerészebb vállalkozása: egy fiktív, 19. század eleji költőnő, Lónyay Erzsébet ("Psyché") verseit és önéletrajzát "rekonstruálja", olyan hitelességgel utánozva a korabeli nyelvet és verselést, hogy a mű az irodalmi álarcjáték és a stílusimitáció egyik legnagyobb magyar teljesítménye.
- **Gyermekversek**: a *Bóbita* és a *Magyar etűdök* kötetek versei generációk óta a magyar gyermekköltészet alapkövei — ezekben Weöres a nyelv zeneiségét, a hangfestést és a játékos ritmust állítja középpontba, miközben mélyebb filozofikus tartalmakat is elrejt bennük.
- **Filozofikus-misztikus nagyversek**: olyan komoly, elmélkedő, gyakran keleti filozófiai hatásokat mutató versek, amelyek a lét, az idő és a végtelen kérdéseit járják körül.
- **Rongyszőnyeg-ciklus**: 160 rendkívül rövid, változatos hangú és formájú kis vers gyűjteménye, amely önmagában is jól mutatja Weöres formai és hangulati sokszínűségét.

## Stílus és témavilág

Weöres verselése rendkívül változatos: egyaránt otthonosan mozog a szigorúan kötött, klasszikus formákban és a szabad, kísérletező, akár értelem nélküli hangzást (hangköltészet) is megcélzó versekben. Költészetében állandóan visszatér a **gyermeki és az ősi-mitikus tudat** felidézése — az a feltételezett, közel egynemű, differenciálatlan tudatállapot, amely a felnőtt, racionalizált gondolkodás előtti világlátást próbálja megragadni.

## Jelentősége

Weöres Sándor a 20. századi magyar líra egyik legsokoldalúbb, legnehezebben egyetlen irányzatba sorolható alakja: gyermekversei generációk óta a magyar kulturális közkincs részei, míg filozofikus nagyversei és stílusimitációs vállalkozásai (mint a Psyché) a magyar költészet formai és gondolati határainak tágítását mutatják. Sokoldalúsága és nyelvi virtuozitása miatt a 20. századi magyar líra egyik legegyedibb, legeredetibb alkotójaként tartják számon.
`,
    key_concepts: [
      "proteuszi költészet",
      "stílusimitáció (Psyché)",
      "gyermekvers",
      "keleti filozófiák hatása",
      "hangköltészet",
    ],
    source_refs: [
      { label: "Weöres Sándor (Magyar Életrajzi Lexikon, MEK)", url: "https://mek.oszk.hu/00000/00019/html/w/i014673.htm" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Weöres Sándor (Wikipédia)", url: "https://hu.wikipedia.org/wiki/We%C3%B6res_S%C3%A1ndor" },
      { label: "Weöres Sándor költészete – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/irodalom/weores-sandor/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért nevezik Weöres Sándort \"proteuszi\" költőnek?",
        options: [
          "mert rendkívül sokféle stílusban, hangnemben tudott írni",
          "mert kizárólag tengeri témákról írt",
          "mert egyetlen, állandó stílust követett egész pályáján",
          "mert görögül írta összes versét",
        ],
        correct_answer: "mert rendkívül sokféle stílusban, hangnemben tudott írni",
        explanation: "A görög mitológia alakváltó Próteuszáról elnevezve, mivel Weöres rendkívül sokféle stílusban és hangnemben alkotott.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a Psyché című műve?",
        options: [
          "egy fiktív 19. századi költőnő verseinek és önéletrajzának stílushű \"rekonstrukciója\"",
          "egy valós történelmi személy életrajza",
          "gyermekversek gyűjteménye",
          "filozófiai értekezés a lélekről",
        ],
        correct_answer: "egy fiktív 19. századi költőnő verseinek és önéletrajzának stílushű \"rekonstrukciója\"",
        explanation: "A Psyché Weöres egyik legmerészebb vállalkozása: a fiktív Lónyay Erzsébet költőnő hiteles stílusimitációja.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik kötetei váltak a magyar gyermekköltészet alapköveivé?",
        options: ["Bóbita és Magyar etűdök", "Psyché és Rongyszőnyeg", "Tűzkút és Zimzizim", "A kő és az ember"],
        correct_answer: "Bóbita és Magyar etűdök",
        explanation: "A Bóbita és a Magyar etűdök versei generációk óta a magyar gyermekköltészet alapkövei.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen filozófiai hatások mutathatók ki Weöres költészetében?",
        options: [
          "keleti (indiai, kínai) filozófiák és vallások hatása",
          "kizárólag a francia egzisztencializmus hatása",
          "kizárólag az ókori sztoikus filozófia hatása",
          "kizárólag a marxista dialektika hatása",
        ],
        correct_answer: "keleti (indiai, kínai) filozófiák és vallások hatása",
        explanation: "Weöres költészetére mélyen hatottak a keleti filozófiák és vallások, mint a hinduizmus és buddhizmus.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány rövid versből áll a Rongyszőnyeg-ciklus?",
        options: ["160", "50", "300", "12"],
        correct_answer: "160",
        explanation: "A Rongyszőnyeg-ciklus 160 rövid, változatos hangú és formájú kis versből áll.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "homerosz-iliasz-es-odusszeia",
    title: "Homérosz: Iliász és Odüsszeia",
    level: "mindketto",
    theme: "Világirodalom",
    order_index: 19,
    summary_markdown:
      "Az európai epikus hagyomány alapköve. Az Iliász a trójai háború Akhilleusz haragja köré épülő epizódját, az Odüsszeia Odüsszeusz kalandos hazatérését meséli el — mindkettő a homéroszi eposzi technika (hasonlatok, állandó jelzők, istenek beavatkozása) klasszikus mintapéldája.",
    content_markdown: `
## A szerző és a "homéroszi kérdés"

Homérosz alakja, léteének pontos körülményei a mai napig vitatottak — az irodalomtörténet ezt a problémakört nevezi **"homéroszi kérdésnek"**. A hagyomány szerint vak énekes volt, aki kis-ázsiai görög (ión) területről származott, és a Kr.e. 8. század körül élhetett. Sokan felvetik, hogy az Iliász és az Odüsszeia nem feltétlenül egyetlen szerző műve (a két eposz világszemlélete és nyelvezete között jelentős különbségek mutathatók ki), hanem egy hosszú, szóbeli epikus hagyomány (a vándorénekesek, "aoidoszok" gyakorlata) lezáró, írásba foglaló szintézise.

## Az Iliász

Az Iliász a trójai háború tizedik évének mindössze néhány hetét dolgozza fel, központi témája **Akhilleusz haragja**: a görög sereg vezére, Agamemnón megsérti Akhilleuszt (elveszi tőle hadizsákmányát, Briszéiszt), mire Akhilleusz kivonul a harcból. Távolléte alatt a trójaiak fölénybe kerülnek, és megölik Akhilleusz legjobb barátját, Patrokloszt — ez a veszteség rendíti meg annyira Akhilleuszt, hogy visszatér a harcba, és párviadalban megöli Hektórt, a trójai fősereg vezérét. A mű Hektór temetésével zárul, még Trója tényleges eleste (a falovas csel) előtt.

## Az Odüsszeia

Az Odüsszeia Odüsszeusz, az egyik görög hős tíz évig tartó, kalandos hazatérését meséli el Trója eleste után: a küklopsz Polüphémosszal való összecsapást, Kirké szigetét, az alvilágjárást, a szirének énekét, Szkülla és Kharübdisz szorosát, majd a hazaérkezés utáni végső leszámolást a feleségét, Pénelopét zaklató kérőkkel. A mű szerkezete bonyolultabb az Iliászénál: nem lineáris, hanem Odüsszeusz saját elbeszélésén keresztül (in medias res kezdés után visszatekintve) ismerteti a kalandok nagy részét.

## Eposzi kellékek és technika

Mindkét mű a homéroszi eposzi technika klasszikus példája:

- **Invokáció**: a mű elején a múzsához (az emlékezet istennőjéhez) fordul a költő, tőle kérve az ihletet és a történet elbeszélésének képességét.
- **In medias res kezdés**: a történet nem az elejétől, hanem "a dolgok közepén" indul, a korábbi eseményeket később, visszatekintésekben ismerjük meg.
- **Homéroszi hasonlat**: kiterjesztett, önmagában is önálló képpé váló hasonlatok (pl. egy csatajelenetet természeti képekkel — viharral, vadállatokkal — állít párhuzamba, amely a hasonlítás pontján túl is részletesen kibontakozik).
- **Állandó jelzők (epitheton ornans)**: visszatérő, formulaszerű jelzők (pl. "fellegtorlaszló Zeusz", "rózsásujjú Hajnal", "leleményes Odüsszeusz") — ezek eredetileg a szóbeli előadás memorizálását és ritmizálását segítették.
- **Isteni beavatkozás**: az olümposzi istenek folyamatosan beavatkoznak a cselekménybe, pártot fogva egyik vagy másik hős mellett.

Mindkét eposz **hexameterben** (időmértékes verssorban) íródott. A klasszikus, ma is legszélesebb körben olvasott magyar fordítás Devecseri Gáboré.

## Jelentősége

A homéroszi eposzok az európai irodalom legkorábbi fennmaradt, teljes terjedelmű alkotásai, és az egész későbbi epikus hagyomány (Vergiliustól Zrínyin át egészen James Joyce Ulyssesééig, amely szerkezetileg az Odüsszeiára épül) alapmintáivá váltak. Az eposzi kellékek (invokáció, in medias res, homéroszi hasonlat) a világirodalom epikus formanyelvének máig ható alapkövei.
`,
    key_concepts: [
      "homéroszi kérdés",
      "in medias res",
      "homéroszi hasonlat",
      "állandó jelző (epitheton ornans)",
      "hexameter",
    ],
    source_refs: [
      { label: "Homérosz: Odüsszeia (MEK, Devecseri Gábor fordítása)", url: "https://mek.oszk.hu/00400/00408/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Homérosz (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Hom%C3%A9rosz" },
      { label: "Homérosz: Iliász és Odüsszeia – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/irodalom/iliasz-es-odusszeia/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a központi témája az Iliásznak?",
        options: [
          "Akhilleusz haragja",
          "Odüsszeusz hazatérése",
          "Trója felépítése",
          "Agamemnón gyermekkora",
        ],
        correct_answer: "Akhilleusz haragja",
        explanation: "Az Iliász központi témája Akhilleusz haragja, amely Agamemnónnal való konfliktusából ered.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk \"homéroszi kérdésnek\"?",
        options: [
          "azt a vitát, hogy létezett-e egyáltalán egyetlen szerző, Homérosz, és ő írta-e mindkét eposzt",
          "azt a kérdést, hogy hány éves volt Homérosz",
          "azt a vitát, hogy hány éneke van az Iliásznak",
          "azt a kérdést, hogy Trója valóban létezett-e",
        ],
        correct_answer: "azt a vitát, hogy létezett-e egyáltalán egyetlen szerző, Homérosz, és ő írta-e mindkét eposzt",
        explanation: "A homéroszi kérdés a szerzőség és a két eposz egységének problémáját jelenti az irodalomtudományban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a \"homéroszi hasonlatot\"?",
        options: [
          "kiterjesztett, önálló képpé váló hasonlat, amely a hasonlítás pontján túl is kibontakozik",
          "egy szavas, tömör metafora",
          "kizárólag vallási témájú hasonlat",
          "rímes formájú hasonlat",
        ],
        correct_answer: "kiterjesztett, önálló képpé váló hasonlat, amely a hasonlítás pontján túl is kibontakozik",
        explanation: "A homéroszi hasonlat jellemzően egy egész jelenetet (pl. természeti képet) bont ki, túlmutatva az egyszerű összehasonlításon.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki készítette az Odüsszeia klasszikus, ma is legszélesebb körben olvasott magyar fordítását?",
        options: ["Devecseri Gábor", "Arany János", "Babits Mihály", "Trencsényi-Waldapfel Imre"],
        correct_answer: "Devecseri Gábor",
        explanation: "Devecseri Gábor 20. századi fordítása a legszélesebb körben ismert és olvasott magyar Odüsszeia-fordítás.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen verssorban íródtak a homéroszi eposzok?",
        options: ["hexameterben", "Balassi-strófában", "szonettformában", "szabadversben"],
        correct_answer: "hexameterben",
        explanation: "Mindkét homéroszi eposz időmértékes hexameterben íródott.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "szophoklesz-antigone",
    title: "Szophoklész: Antigoné",
    level: "mindketto",
    theme: "Világirodalom",
    order_index: 20,
    summary_markdown:
      "Az antik görög tragédia egyik csúcsműve. Antigoné és Kreón összeütközése az isteni/erkölcsi törvény és az állami hatalom parancsa között a világirodalom egyik legmegrendítőbb tragikus konfliktusát fogalmazza meg.",
    content_markdown: `
## Szophoklész és az antik görög tragédia

Szophoklész a Kr.e. 5. századi Athén "aranykorában" (Periklész korában) élt, és a görög tragédiaköltészet fejlődésének csúcspontját képviseli — Aiszkhülosz és Euripidész mellett a három nagy görög tragédiaköltő egyike. Fennmaradt hét tragédiája közül három a trójai, három a thébai mondakörhöz kapcsolódik, egy pedig Héraklészhez. Szophoklész jelentős **színházi újításokat** is bevezetett: ő vezette be a harmadik színészt a színpadra (korábban csak kettő szerepelhetett egyszerre), bevezette a díszletet, és a kórus létszámát 12-ről 15-re növelte — ezek az újítások jelentősen bővítették a drámai kifejezés lehetőségeit.

## Az Antigoné cselekménye

Az Antigoné (feltehetően a Kr.e. 440-es években mutatták be) a thébai mondakörhöz kapcsolódik, közvetlenül azután, hogy Oidipusz két fia, Eteoklész és Polüneikész egymás ellen harcolva mindketten elestek a Théba elleni ostromban (Polüneikész a várost támadó oldalon). Az új uralkodó, **Kreón** (Antigoné nagybátyja) megtiltja Polüneikész eltemetését, halálbüntetés terhe mellett — mivel Polüneikészt hazaárulónak tekinti. **Antigoné**, Polüneikész húga, ennek ellenére eltemeti testvérét, mert úgy véli, az istenek örök, íratlan törvénye (a halottak eltemetésének szent kötelessége) fölébe helyezendő az emberi, állami törvénynek.

Kreón — annak ellenére, hogy fia, Haimón (Antigoné jegyese) könyörög neki — halálra ítéli Antigonét: élve befalaztatja egy sziklasírba. Antigoné a sírban felakasztja magát; ennek hírére Haimón is öngyilkos lesz, majd Kreón felesége, Eurüdiké is véget vet életének fia halála miatti fájdalmában. A dráma végére Kreón, aki túl későn ismeri fel tévedését, mindenét (családját, hatalmát, lelki nyugalmát) elveszíti.

## A tragikus konfliktus

A mű alapkonfliktusa az **egyéni lelkiismeret és az isteni/erkölcsi törvény** (Antigoné által képviselt elv), valamint az **állami hatalom és annak parancsa** (Kreón elve) összeütközése. A görög tragédia klasszikus felfogása szerint egyik fél sem "egyszerűen" jó vagy rossz: mindkettejük igazsága a maga szemszögéből jogos (Antigoné a vallási-erkölcsi kötelességre, Kreón az állam rendjének fenntartására hivatkozik), ugyanakkor mindkettejüket tragikus vétség (**hamartia**) — a kompromisszumra, mérlegelésre való képtelenség, a saját álláspontjukhoz való merev ragaszkodás — sodorja a pusztulásba.

## Formai felépítés

A görög tragédia klasszikus szerkezeti elemei az Antigonéban is megjelennek: **prológus** (bevezető jelenet), **párodosz** (a kórus bevonuló éneke), **episzodionok** (a cselekményt vivő párbeszédes jelenetek/epizódok) és **sztaszimonok** (a köztük elhangzó kórusdalok, amelyek reflektálnak a történtekre) váltakozása, majd az **exodosz** (a kórus és a szereplők távozó, záró jelenete). A klasszikus magyar fordítás Trencsényi-Waldapfel Imre nevéhez fűződik.

## Jelentősége

Az Antigoné a világirodalom egyik legmegrendítőbb, azóta is folyamatosan újraértelmezett tragédiája: az egyén lelkiismerete és az állami hatalom közötti konfliktus örök érvényű, minden korban (pl. totalitárius rendszerek elleni ellenállás kontextusában) újra aktuálissá váló témát fogalmaz meg — ezért is az egyik legtöbbet feldolgozott, legtöbbet idézett antik dráma a mai napig.
`,
    key_concepts: [
      "görög tragédia",
      "hamartia (tragikus vétség)",
      "isteni törvény vs. állami törvény",
      "kórus és episzodion",
      "Kreón-Antigoné konfliktus",
    ],
    source_refs: [
      { label: "Szophoklész: Antigoné (MEK, Trencsényi-Waldapfel Imre fordítása)", url: "https://mek.oszk.hu/00500/00501/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Szophoklész (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Szophokl%C3%A9sz" },
      { label: "Szophoklész: Antigoné – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/irodalom/szophoklesz-antigone/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen színházi újítást vezetett be Szophoklész?",
        options: [
          "a harmadik színész bevezetését a színpadra",
          "a maszkok teljes elhagyását",
          "a női szereplők valódi színésznők általi eljátszását",
          "a kórus teljes elhagyását",
        ],
        correct_answer: "a harmadik színész bevezetését a színpadra",
        explanation: "Szophoklész vezette be a harmadik színészt, valamint a díszletet és növelte a kórus létszámát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért temeti el Antigoné testvérét, Polüneikészt, Kreón tilalma ellenére?",
        options: [
          "mert az istenek örök, íratlan törvényét az emberi törvény fölé helyezi",
          "mert szerelmes volt Kreónba",
          "mert Kreón titokban megkérte rá",
          "mert nem tudott a tilalomról",
        ],
        correct_answer: "mert az istenek örök, íratlan törvényét az emberi törvény fölé helyezi",
        explanation: "Antigoné úgy véli, a halottak eltemetésének szent, isteni kötelessége fölébe helyezendő Kreón emberi parancsának.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan hal meg Antigoné a dráma végén?",
        options: [
          "élve befalazott sziklasírjában felakasztja magát",
          "Kreón lefejezteti",
          "megmérgezi magát nyilvánosan",
          "csatában esik el",
        ],
        correct_answer: "élve befalazott sziklasírjában felakasztja magát",
        explanation: "Kreón élve befalaztatja Antigonét egy sziklasírba, ahol az felakasztja magát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a tragikus konfliktus lényege az Antigonéban?",
        options: [
          "az egyéni lelkiismeret/isteni törvény és az állami hatalom parancsa közötti összeütközés",
          "egy szerelmi háromszög konfliktusa",
          "két testvér vetélkedése a trónért",
          "egy vallási szertartás körüli vita, amelynek nincs tétje",
        ],
        correct_answer: "az egyéni lelkiismeret/isteni törvény és az állami hatalom parancsa közötti összeütközés",
        explanation: "A mű alapkonfliktusa Antigoné (isteni törvény) és Kreón (állami hatalom) elveinek összeütközése.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk \"sztaszimonnak\" a görög tragédia szerkezetében?",
        options: [
          "az episzodionok közötti kórusdalt",
          "a mű nyitó jelenetét",
          "a főszereplő monológját",
          "a darab végső, lezáró jelenetét",
        ],
        correct_answer: "az episzodionok közötti kórusdalt",
        explanation: "A sztaszimon a cselekményt vivő episzodionok közé ékelt kórusdal, amely reflektál a történtekre.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "shakespeare-hamlet",
    title: "Shakespeare: Hamlet",
    level: "mindketto",
    theme: "Világirodalom",
    order_index: 21,
    summary_markdown:
      "Az angol reneszánsz dráma csúcsteljesítménye. A tétovázó, töprengő dán királyfi bosszútörténete a cselekvésre képtelen, önmagával viaskodó modern ember egyik legelső, legmélyebb irodalmi ábrázolása.",
    content_markdown: `
## Shakespeare pályaképe

William Shakespeare (1564–1616) Stratford-upon-Avonban született, és az angol reneszánsz (erzsébetkori-jakobinus kori) dráma legnagyobb alakjává vált. Londoni színészi és drámaírói pályafutása a Globe Theatre-hez és saját színtársulatához (előbb Lord Chamberlain's Men, később, I. Jakab uralkodása alatt King's Men néven) kötődik. Életműve rendkívül sokoldalú: írt vígjátékokat (*Szentivánéji álom*, *Ahogy tetszik*), történelmi drámákat (*III. Richárd*, a Henrik-drámák), nagy tragédiákat (*Hamlet*, *Othello*, *Lear király*, *Macbeth*, *Rómeó és Júlia*) és késői, ún. "romance" jellegű darabokat is (*A vihar*).

## A Hamlet cselekménye

A *Hamlet* (kb. 1600–1601-ben íródott) a dán királyfi történetét meséli el: apja, a dán király halála után nagybátyja, Claudius veszi feleségül az özvegy királynét, Gertrudot, és lép trónra. Hamlethez megjelenik apja szelleme, aki felfedi, hogy Claudius ölte meg őt, és bosszúra szólítja fel fiát. Hamlet ezután hosszú, gyötrő tétovázásba kezd: színlelt őrületet ölt magára, miközben bizonyosságot próbál szerezni Claudius bűnösségéről — ennek eszköze a híres **"színház a színházban"** jelenet (az Egérfogó-jelenet), amelyben egy vándorszínész-társulattal eljátszatja az apagyilkosság jelenetét, hogy Claudius reakcióján keresztül leleplezze bűnösségét.

A cselekmény további fordulatai (Polóniusz véletlen megölése, Ophélia — Hamlet szerelme — megőrülése és halála, Laertes bosszúvágya) végül egy tragikus végkifejlethez vezetnek: egy megrendezett párbajban (mérgezett karddal és mérgezett borral) szinte az összes főszereplő — Gertrud, Laertes, Claudius és végül Hamlet is — életét veszti.

## Hamlet jelleme: a töprengő hős

Hamlet karakterének legfontosabb vonása nem a cselekvés, hanem a szüntelen **töprengés, kételkedés és önreflexió** — ez egyszerre teszi őt az egyik legmélyebb irodalmi jellemmé és forrása saját tragédiájának, mivel folytonos mérlegelése és kétsége megakadályozza a gyors, határozott cselekvést. A világirodalom egyik leghíresebb monológja, a **"Lenni vagy nem lenni"** kezdetű részlet (III. felvonás) ezt a létfilozófiai vívódást, az élet és halál, a cselekvés és tétlenség közötti dilemmát fogalmazza meg. Innen ered a "hamleti kérdés" vagy "hamleti dilemma" kifejezés, amely azóta is a döntésképtelen, önmagával vívódó embertípus szinonimájává vált a köznyelvben is.

## Magyar fordítás

A *Hamlet* legismertebb, klasszikussá vált magyar fordítása **Arany János** munkája (1867), amelyben Arany a shakespeare-i angol jambikus verselést egy antikizáló, ugyanakkor a magyar nyelv sajátosságaihoz igazított jambusi formában adta vissza — a fordítás máig az egyik legnagyobb becsben tartott magyar Shakespeare-átültetés, amely a Nemzeti Színház repertoárjában is Vajda Péter korábbi fordítását váltotta fel 1868-tól.

## Jelentősége

Shakespeare és különösen a Hamlet a modern dráma és jellemábrázolás egyik alapköve: a lélektanilag árnyalt, belső ellentmondásokkal küzdő hős típusa, valamint a "színház a színházban" öntükröző technikája azóta is meghatározó hatással van a világirodalomra és a színházművészetre. Shakespeare életműve — nyelvi gazdagsága, emberábrázolásának mélysége és formai sokszínűsége miatt — minden idők egyik legnagyobb hatású drámaírói életműve.
`,
    key_concepts: [
      "reneszánsz tragédia",
      "színház a színházban",
      "hamleti dilemma",
      "Lenni vagy nem lenni",
      "Arany János Hamlet-fordítása",
    ],
    source_refs: [
      { label: "Shakespeare: Hamlet, dán királyfi (MEK, Arany János fordítása)", url: "https://mek.oszk.hu/00400/00485/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "William Shakespeare (Wikipédia)", url: "https://hu.wikipedia.org/wiki/William_Shakespeare" },
      { label: "Shakespeare: Hamlet – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/irodalom/shakespeare-hamlet/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Ki öli meg Hamlet apját, a dán királyt, és lép a trónra?",
        options: ["Claudius, Hamlet nagybátyja", "Laertes", "Polóniusz", "Horatio"],
        correct_answer: "Claudius, Hamlet nagybátyja",
        explanation: "Claudius öli meg testvérét, a királyt, veszi feleségül az özvegy Gertrudot, és lép trónra.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen eszközzel próbál Hamlet bizonyosságot szerezni Claudius bűnösségéről?",
        options: [
          "egy vándorszínész-társulattal eljátszatja az apagyilkosság jelenetét (Egérfogó-jelenet)",
          "kihallgatja Claudiust álmában",
          "levelet írat vele",
          "párbajra hívja ki azonnal",
        ],
        correct_answer: "egy vándorszínész-társulattal eljátszatja az apagyilkosság jelenetét (Egérfogó-jelenet)",
        explanation: "A \"színház a színházban\" technikával, az Egérfogó-jelenettel próbálja leleplezni Claudius reakcióján keresztül a bűnösségét.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi Hamlet jellemének legfontosabb vonása, amely tragédiájának forrása is egyben?",
        options: [
          "a szüntelen töprengés, kételkedés, amely megakadályozza a gyors cselekvést",
          "a túlzott, meggondolatlan agresszivitás",
          "a naivitás és hiszékenység",
          "a hatalomvágy"
        ],
        correct_answer: "a szüntelen töprengés, kételkedés, amely megakadályozza a gyors cselekvést",
        explanation: "Hamlet folytonos mérlegelése és kétsége akadályozza a határozott cselekvést, ami tragédiájának egyik forrása.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki készítette a Hamlet legismertebb, klasszikussá vált magyar fordítását?",
        options: ["Arany János", "Petőfi Sándor", "Babits Mihály", "Kosztolányi Dezső"],
        correct_answer: "Arany János",
        explanation: "Arany János 1867-es fordítása a legismertebb, klasszikussá vált magyar Hamlet-fordítás.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik híres monológ fogalmazza meg az élet és halál, cselekvés és tétlenség közötti dilemmát?",
        options: ["\"Lenni vagy nem lenni\"", "\"Mondottam, ember\"", "\"Esküszünk\"", "\"Egy gondolat bánt engemet\""],
        correct_answer: "\"Lenni vagy nem lenni\"",
        explanation: "A \"Lenni vagy nem lenni\" monológ (III. felvonás) Hamlet létfilozófiai vívódását fogalmazza meg.",
        difficulty: 1,
      },
    ],
  },
];
