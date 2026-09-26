import { TopicSeed } from "./angol";

export const tortenelemKozepkorTopics: TopicSeed[] = [
  {
    slug: "a-kozepkori-nyugat-europa-huberiseg",
    title: "A középkori Nyugat-Európa (hűbériség és jobbágyság)",
    level: "mindketto",
    theme: "Középkor",
    order_index: 5,
    summary_markdown:
      "A Nyugatrómai Birodalom bukása után kialakuló feudális rendszer: a hűbéri lánc, a jobbágyság intézménye, valamint az egyház meghatározó szerepe a középkori nyugat-európai társadalomban és politikában.",
    content_markdown: `
## A feudalizmus kialakulása

A Nyugatrómai Birodalom 476-os bukása után a központi hatalom összeomlásával a nyugat-európai társadalom új szervezőelvet igényelt: ez lett a **feudalizmus (hűbériség)**, amely a 8-9. századtól vált meghatározóvá, és a föld birtoklásán alapuló, személyes hűségi-szolgálati viszonyokra épült.

## A hűbéri lánc

A feudális rendszer alapja a **hűbéri lánc**: a **hűbérúr (szenior)** földet (hűbérbirtokot) adományozott a **hűbéresnek (vazallusnak)**, aki cserébe hűséget és katonai szolgálatot (illetve tanácsadási kötelezettséget) vállalt ura felé. Ez a viszony a társadalom minden szintjén megismétlődött: a király a főnemeseknek, a főnemesek a kisebb nemeseknek (lovagoknak) adományoztak birtokot hasonló feltételekkel — így alakult ki egy hierarchikus, egymásba kapcsolódó függőségi lánc a király és a legkisebb birtokos lovag között.

## A jobbágyság

A parasztság jelentős része a korai középkor végére **jobbágyi** státuszba került: a jobbágy jogilag a földesúr fennhatósága alá tartozott, a földesúr birtokán élt és gazdálkodott, cserébe szolgáltatásokkal tartozott urának — ezek közé tartozott a **termékek egy részének beszolgáltatása** (a termés hányada), a **robot** (ingyenes munkavégzés az uraság földjén, saját eszközökkel és állatokkal), valamint különféle ajándékok/adók. A jobbágyok — a rabszolgákkal ellentétben — nem voltak tulajdon tárgyai, de mozgásszabadságuk erősen korlátozott volt (röghöz kötöttség).

## Az uradalom

Az **uradalom** volt a középkori gazdaság és igazgatás alapegysége: a római nagybirtokrendszer hagyományaiból fejlődött ki, és a városok és a kereskedelem hanyatlásával önellátóvá vált — helyi közigazgatási, bírói és védelmi feladatokat is ellátott a Nyugatrómai Birodalom összeomlása utáni hatalmi vákuumban.

## Az egyház szerepe

A középkori nyugat-európai társadalomban a **katolikus egyház** kiemelkedő hatalommal rendelkezett: hatalmas földbirtokai voltak, **tizedet** szedett a lakosságtól, és a szellemi-kulturális élet (oktatás, könyvmásolás, tudományok művelése) szinte kizárólagos letéteményese volt a kolostorokon és székesegyházi iskolákon keresztül. A világi és egyházi hatalom viszonya sokszor konfliktusos volt — ennek egyik csúcspontja az **invesztitúraharc** (a 11. század végén zajló küzdelem a német-római császár és a pápaság között azért, hogy ki nevezhet ki egyházi méltóságokat), amely a pápaság megerősödő önállóságát eredményezte.

## Városok, céhek és egyetemek

A 11-13. századtól kezdve Nyugat-Európában fellendült a kereskedelem és újjáéledtek a városok: a városi kézművesek **céhekbe** szerveződtek, amelyek szabályozták a mesterségek gyakorlását, a minőséget és a képzést. Ugyanebben az időszakban jöttek létre az első **egyetemek** (pl. Bologna, Párizs, Oxford), amelyeken a **skolasztika** (a keresztény hit és az antik, elsősorban arisztotelészi filozófia összeegyeztetésére törekvő gondolkodásmód) volt a meghatározó szellemi irányzat.

## A keresztes hadjáratok

1096-tól kezdve a nyugat-európai keresztény hatalmak (pápai kezdeményezésre) sorozatos **keresztes hadjáratokat** indítottak a Szentföld (Jeruzsálem és környéke) muszlim uralom alóli "felszabadítására" — ezek a hadjáratok jelentős kulturális és kereskedelmi kapcsolatokat is teremtettek Nyugat-Európa és a Közel-Kelet között, miközben tartós politikai eredményt csak átmenetileg hoztak.

## Jelentősége

A hűbériség és a jobbágyság rendszere évszázadokon át meghatározta a nyugat-európai (és részben a közép-európai, így a magyar) társadalom szerkezetét; az egyház kettős — vallási és világi hatalmi — szerepe, valamint a városok és egyetemek kialakulása pedig megalapozta azokat a társadalmi-szellemi kereteket, amelyekből a későbbi újkori Európa kinőtt.
`,
    key_concepts: [
      "hűbéri lánc (szenior-vazallus)",
      "jobbágyság és robot",
      "uradalom",
      "invesztitúraharc",
      "skolasztika",
    ],
    source_refs: [
      { label: "A középkor (zanza.tv)", url: "https://zanza.tv/tortenelem/kozepkor" },
      { label: "Feudalizmus (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Feudalizmus" },
      { label: "hűbériség (zanza.tv)", url: "https://zanza.tv/fogalom/huberiseg" },
      { label: "A hűbériség kialakulása – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/a-huberiseg-kialakulasa/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a hűbéri láncot?",
        options: [
          "a szenior földet ad a vazallusnak, aki cserébe hűséget és katonai szolgálatot vállal",
          "a király minden földet személyesen igazgat, közvetítők nélkül",
          "a parasztok szabadon választhatják meg uraikat",
          "kizárólag pénzbeli fizetségen alapuló viszony",
        ],
        correct_answer: "a szenior földet ad a vazallusnak, aki cserébe hűséget és katonai szolgálatot vállal",
        explanation: "A hűbéri lánc a földadományozáson és a cserébe vállalt hűségi-katonai szolgálaton alapuló hierarchikus viszonyrendszer.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a robot?",
        options: [
          "ingyenes munkavégzés a földesúr földjén, saját eszközökkel",
          "a föld szabad adásvétele",
          "a jobbágy fizetett munkabére",
          "a nemesi birtok öröklési rendje",
        ],
        correct_answer: "ingyenes munkavégzés a földesúr földjén, saját eszközökkel",
        explanation: "A robot a jobbágy egyik szolgáltatása volt: ingyenes munkavégzés az uraság földjén, saját eszközökkel és állatokkal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt az invesztitúraharc tétje?",
        options: [
          "hogy ki nevezhet ki egyházi méltóságokat - a császár vagy a pápa",
          "a Szentföld birtoklása",
          "a jobbágyok felszabadítása",
          "a városi céhek szabályozása",
        ],
        correct_answer: "hogy ki nevezhet ki egyházi méltóságokat - a császár vagy a pápa",
        explanation: "Az invesztitúraharc a világi (császári) és az egyházi (pápai) hatalom küzdelme volt az egyházi kinevezések joga felett.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szellemi irányzat volt meghatározó a középkori egyetemeken?",
        options: ["skolasztika", "empirizmus", "pozitivizmus", "egzisztencializmus"],
        correct_answer: "skolasztika",
        explanation: "A skolasztika a keresztény hit és az antik (főleg arisztotelészi) filozófia összeegyeztetésére törekvő gondolkodásmód volt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a keresztes hadjáratok elsődleges, meghirdetett célja?",
        options: [
          "a Szentföld muszlim uralom alóli \"felszabadítása\"",
          "Nyugat-Európa egyesítése egyetlen birodalommá",
          "a jobbágyság eltörlése",
          "a mongol hódítás megállítása",
        ],
        correct_answer: "a Szentföld muszlim uralom alóli \"felszabadítása\"",
        explanation: "A keresztes hadjáratok (1096-tól) meghirdetett célja Jeruzsálem és a Szentföld visszafoglalása volt a muszlim uralom alól.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "a-magyar-honfoglalas-es-allamalapitas",
    title: "A magyar honfoglalás és államalapítás",
    level: "mindketto",
    theme: "Középkor",
    order_index: 6,
    summary_markdown:
      "A magyar törzsek Kárpát-medencei honfoglalása (895-900 körül), a kalandozások kora, majd Szent István államszervező munkája: a vármegyerendszer, a kereszténység felvétele és az önálló magyar állam megalapítása 1000-ben.",
    content_markdown: `
## A honfoglalás

A magyar törzsek a 9. század végén, hagyományosan **895–900** körülre tehető honfoglalás során vették birtokba a Kárpát-medencét. A honfoglalást megelőzően a magyar törzsszövetség a Fekete-tenger melléki sztyeppén (Etelközben) élt, ahonnan a besenyők támadása és egyéb politikai-katonai tényezők szorították nyugat felé. A honfoglalás nem egyetlen esemény, hanem egy több évig tartó, fokozatos betelepülési-birtokbavételi folyamat volt.

## A kalandozások kora

A honfoglalást követő évtizedekben (kb. a 10. század első kétharmadában) a magyar törzsek rendszeres **kalandozó hadjáratokat** vezettek Nyugat- és Dél-Európa területére, zsákmányszerzés és megfélemlítés céljából. A kalandozások kora a **955-ös augsburgi vereséggel** (I. Ottó német-római császár seregétől elszenvedett katonai kudarc) zárult le, amely rákényszerítette a magyar törzsszövetség vezetőit a hadjáratok feladására és egy új, békésebb, nyugat felé nyitó politikai irányvonal keresésére.

## Géza fejedelem és a nyugati orientáció

**Géza fejedelem** (kb. 972–997) ismerte fel elsőként a nyugati, keresztény Európához való csatlakozás szükségességét: megkezdte a keresztény hittérítés befogadását, nyugati (bajor) kapcsolatokat épített, és felkészítette fia, István trónra lépését egy immár keresztény, nyugati mintájú állam élén.

## Szent István államszervező munkája

**Szent István** (uralkodott 997/1000–1038) a magyar történelem első törvényalkotó királya, akit **1000-ben (vagy a hagyomány szerint 1001. január 1-jén)** koronáztak meg — ezzel a magyar törzsszövetségből önálló, keresztény európai királyság jött létre. István államszervező munkájának legfontosabb elemei:

- **Vármegyerendszer**: az ország területét várak köré szerveződő közigazgatási egységekre (vármegyékre) osztotta, élükön a király által kinevezett ispánokkal — ez biztosította a központi királyi hatalom érvényesülését az egész országban.
- **Egyházszervezés**: érsekségeket (Esztergom, majd Kalocsa) és püspökségeket alapított, kolostorokat támogatott, és törvényben írta elő, hogy minden tíz falu építsen közösen egy templomot — ezzel intézményesítette a kereszténységet az ország egész területén.
- **Törvényhozás**: törvénykönyveket adott ki, amelyek védték a magántulajdont, szabályozták a büntetőjogot, és megerősítették a királyi és egyházi hatalmat.
- **Belső hatalomkonszolidáció**: több katonai konfliktusban (pl. Koppány, majd 1003-ban erdélyi hadjárat Gyula ellen) törte meg a törzsi vezetők ellenállását, biztosítva a központi királyi hatalom egyeduralmát.

## Az államalapítás jelentősége

Szent István államalapítása kettős jelentőségű: egyrészt **biztosította a magyarság fennmaradását** a Kárpát-medencében egy olyan korszakban, amikor több, hasonló helyzetű nomád nép (pl. az avarok, besenyők) beolvadt vagy eltűnt a történelem színpadáról; másrészt **integrálta Magyarországot a nyugati, keresztény Európa politikai-kulturális közösségébe**, ami évszázadokra meghatározta az ország történelmi útját.

## Jelentősége

A honfoglalás és az államalapítás a magyar nemzeti történelem alapvető, azonosságformáló eseményei: e két folyamat — a Kárpát-medencei megtelepedés, majd a keresztény állam megszervezése — teremtette meg azt a politikai-területi keretet, amelyben a magyar állam a középkor és az újkor folyamán fennmaradt.
`,
    key_concepts: [
      "honfoglalás (895-900)",
      "kalandozások és az augsburgi vereség",
      "vármegyerendszer",
      "egyházszervezés (Esztergom, Kalocsa)",
      "Szent István koronázása (1000/1001)",
    ],
    source_refs: [
      { label: "Államalapító Szent Istvántól államgyarapító Lászlóig és Kálmánig (zanza.tv)", url: "https://zanza.tv/tortenelem/magyarsag-tortenete-kezdetektol-1490-ig/allamalapito-szent-istvantol-allamgyarapito" },
      { label: "I. István magyar király (Wikipédia)", url: "https://hu.wikipedia.org/wiki/I._Istv%C3%A1n_magyar_kir%C3%A1ly" },
      { label: "Harcokkal és törvényekkel fektette le Szent István az államiság alapjait (Múlt-kor)", url: "https://mult-kor.hu/harcokkal-es-trvenyekkel-fektette-le-szent-istvan-az-evezredes-magyar-allamisag-alapjait-20170815" },
      { label: "Államalapítás – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/allamalapitas/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mikorra tehető a magyar honfoglalás?",
        options: ["895-900 körül", "1000-ben", "955-ben", "1222-ben"],
        correct_answer: "895-900 körül",
        explanation: "A magyar törzsek hagyományosan 895-900 körül vették birtokba a Kárpát-medencét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik vereség zárta le a kalandozások korát?",
        options: ["az augsburgi vereség (955)", "a mohácsi csata (1526)", "a muhi csata (1241)", "a nándorfehérvári diadal (1456)"],
        correct_answer: "az augsburgi vereség (955)",
        explanation: "A 955-ös augsburgi vereség I. Ottó seregétől kényszerítette a magyarokat a kalandozások feladására.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a vármegyerendszer lényege Szent István államszervezésében?",
        options: [
          "várak köré szerveződő közigazgatási egységek, király által kinevezett ispánokkal",
          "a nemesi birtokok szabad adásvétele",
          "a törzsi vezetők teljes önállósága",
          "az egyházi birtokok elkobzása",
        ],
        correct_answer: "várak köré szerveződő közigazgatási egységek, király által kinevezett ispánokkal",
        explanation: "A vármegyerendszer biztosította a központi királyi hatalom érvényesülését az egész ország területén.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor koronázták meg Szent Istvánt?",
        options: ["1000/1001-ben", "955-ben", "895-ben", "1038-ban"],
        correct_answer: "1000/1001-ben",
        explanation: "Szent Istvánt a hagyomány szerint 1000-ben, vagy 1001. január 1-jén koronázták meg.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki ismerte fel elsőként a nyugati, keresztény Európához való csatlakozás szükségességét a magyar fejedelmek közül?",
        options: ["Géza fejedelem", "Álmos", "Árpád", "Koppány"],
        correct_answer: "Géza fejedelem",
        explanation: "Géza fejedelem kezdte meg a keresztény hittérítés befogadását és a nyugati kapcsolatok kiépítését, fia, István trónra lépését előkészítve.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "az-arpad-haz-es-az-anjouk-kora",
    title: "Az Árpád-ház és az Anjouk kora",
    level: "mindketto",
    theme: "Középkor",
    order_index: 7,
    summary_markdown:
      "Szent László és Könyves Kálmán törvényhozó munkája, az Aranybulla (1222), a tatárjárás pusztítása és IV. Béla újjáépítése, majd az Anjou-királyok (Károly Róbert, Nagy Lajos) gazdasági-katonai reformjai.",
    content_markdown: `
## Szent László és Könyves Kálmán

Szent István utáni időszak belső trónviszályok után **I. (Szent) László** (uralkodott 1077–1095) és utóda, **Könyves Kálmán** (uralkodott 1095–1116) korában konszolidálódott ismét a királyi hatalom. László szigorú törvényekkel védte a magántulajdont és a rendet, és megszerezte Horvátországot a magyar korona számára. Könyves Kálmán — kortársaihoz képest szokatlanul racionális gondolkodásáról tanúskodva — törvényben tiltotta a boszorkányperek folytatását, mondván, hogy "boszorkányok pedig nincsenek."

## Az Aranybulla (1222)

**II. András** uralkodása alatt a királyi birtokadományozások és a pénzügyi nehézségek miatt elégedetlenné vált köznemesség (szerviensek) nyomására a király 1222-ben kiadta az **Aranybullát**, a magyar történelmi alkotmányfejlődés egyik legfontosabb dokumentumát. Az Aranybulla korlátozta a birtokadományozások mértékét, megtiltotta idegenek magas tisztségekbe való kinevezését, és adómentességet, jogvédelmet biztosított a szervienseknek (szabad birtokos nemeseknek) — a dokumentum később az ún. **ellenállási záradékot** is tartalmazta, amely szerint a nemesek jogosultak ellenállni a törvénytelenül uralkodó királynak.

## A tatárjárás

**1241. április 11-12-én, a muhi csatában** a mongol (tatár) sereg megsemmisítő vereséget mért **IV. Béla** király seregére. A tatárjárás (1241–1242) az addigi magyar történelem egyik legpusztítóbb katasztrófája volt: a becslések szerint a lakosság jelentős hányada (a térségtől függően akár 15-50%-a) vesztette életét a harcokban, éhínségben vagy a mongolok fosztogatásai következtében.

A tatárok kivonulása után **IV. Béla** (méltán "az ország második honalapítójaként" emlegetett uralkodó) átfogó újjáépítési politikába kezdett: ennek legfontosabb eleme a **kővárak tömeges építésének** ösztönzése volt (mivel a tatárjárás megmutatta, hogy a korábbi, jórészt fából épült erődítmények nem nyújtottak elegendő védelmet), valamint a birtokrendszer és a betelepítés újjászervezése.

## Az Anjou-királyok: Károly Róbert és Nagy Lajos

Az Árpád-ház 1301-es kihalása utáni trónviszályokat követően az **Anjou-dinasztia** szerezte meg a magyar trónt. **Károly Róbert** (uralkodott 1308–1342) alapvető gazdasági reformokat vezetett be: bevezette a stabil értékű **aranyforintot**, eltörölte a korábbi, gazdaságilag káros **kamara hasznát** (pénzrontásból eredő rendszeres jövedelemforrás), és megszervezte a **bányaregálét** (az ország gazdag arany- és ezüstbányáinak királyi ellenőrzés alá vonását és jövedelmeztetését) — ezekkel az intézkedésekkel Magyarország Európa egyik vezető nemesfém-termelőjévé és pénzügyileg stabil államává vált.

Fia, **Nagy Lajos** (uralkodott 1342–1382) idején az ország területi és politikai hatalma tovább növekedett: perszonálunióban egyesítette Magyarországot Lengyelországgal, hadjáratokat vezetett Nápoly és a Balkán irányába, és az 1351-es törvényben országosan egységesítette a jobbágyi szolgáltatást, bevezetve a **kilencedet** (a termés kilencedének beszolgáltatását a földesúrnak, a tized — egyházi adó — mellett).

## Jelentősége

Ez a korszak (Szent Lászlótól Nagy Lajosig) a középkori magyar állam megerősödésének, jogi-alkotmányos fejlődésének (Aranybulla) és — a tatárjárás katasztrófája ellenére — gazdasági-területi felemelkedésének időszaka volt, amely a 14. század közepére Magyarországot Közép-Európa egyik vezető hatalmává tette.
`,
    key_concepts: [
      "Aranybulla (1222)",
      "ellenállási záradék",
      "tatárjárás és a muhi csata",
      "IV. Béla várépítő politikája",
      "Károly Róbert gazdasági reformjai",
    ],
    source_refs: [
      { label: "Az Aranybulla és a tatárjárás (zanza.tv)", url: "https://zanza.tv/tortenelem/magyarsag-tortenete-kezdetektol-1490-ig/az-aranybulla-es-tatarjaras" },
      { label: "Aranybulla (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Aranybulla" },
      { label: "Leszámolás az Aranybulla-mítoszokkal (Múlt-kor)", url: "https://mult-kor.hu/leszamolas-az-aranybulla-mitoszokkal-20220817" },
      { label: "Az aranybulla – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/az-aranybulla/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben adta ki II. András az Aranybullát?",
        options: ["1222", "1241", "1000", "1301"],
        correct_answer: "1222",
        explanation: "Az Aranybullát II. András 1222-ben adta ki a köznemesség (szerviensek) nyomására.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit tartalmazott az Aranybulla ellenállási záradéka?",
        options: [
          "a nemesek jogosultak ellenállni a törvénytelenül uralkodó királynak",
          "a jobbágyok szabadon költözhetnek",
          "a király korlátlan hatalommal rendelkezik",
          "az idegenek szabadon tölthetnek be magas tisztségeket",
        ],
        correct_answer: "a nemesek jogosultak ellenállni a törvénytelenül uralkodó királynak",
        explanation: "Az ellenállási záradék a nemesek jogát rögzítette a törvénytelenül uralkodó király elleni ellenállásra.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol szenvedett vereséget IV. Béla serege a tatárjárás idején?",
        options: ["Muhi", "Mohács", "Nándorfehérvár", "Augsburg"],
        correct_answer: "Muhi",
        explanation: "A muhi csatában (1241. április 11-12.) szenvedett megsemmisítő vereséget IV. Béla serege a tatár sereg ellen.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt IV. Béla újjáépítő politikájának legfontosabb eleme a tatárjárás után?",
        options: [
          "a kővárak tömeges építésének ösztönzése",
          "a jobbágyság teljes eltörlése",
          "az ország fővárosának áthelyezése",
          "a nemesség teljes megszüntetése",
        ],
        correct_answer: "a kővárak tömeges építésének ösztönzése",
        explanation: "IV. Béla felismerte, hogy a fából épült erődök nem nyújtottak elegendő védelmet, ezért ösztönözte a kővárak építését.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik gazdasági újítást vezette be Károly Róbert?",
        options: ["a stabil értékű aranyforintot", "a kilencedet", "a vármegyerendszert", "a tizedet"],
        correct_answer: "a stabil értékű aranyforintot",
        explanation: "Károly Róbert vezette be a stabil értékű aranyforintot, valamint eltörölte a kamara hasznát és megszervezte a bányaregálét.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "hunyadi-matyas-es-a-kozepkori-magyar-allam",
    title: "Hunyadi Mátyás és a középkori magyar állam",
    level: "mindketto",
    theme: "Középkor",
    order_index: 8,
    summary_markdown:
      "Hunyadi János törökellenes harcai és a nándorfehérvári diadal, majd fia, Mátyás király reformjai: a Fekete sereg, a központosított kincstári igazgatás és a reneszánsz udvar a középkori magyar állam fénykorát hozták el.",
    content_markdown: `
## Hunyadi János és a török elleni harcok

**Hunyadi János** a 15. század közepének legjelentősebb magyar hadvezére és politikusa volt, aki erdélyi vajdaként, majd kormányzóként (1446–1453) szervezte meg a magyar-oszmán háborúk védelmi rendszerét. Legnagyobb, egész Európában visszhangot keltő győzelme az **1456-os nándorfehérvári diadal** volt, amelyben sikeresen visszaverte II. Mehmed szultán ostromló seregét — a győzelem emlékére rendelte el a pápa a déli harangszót, amely a mai napig fennmaradt hagyomány.

## Hunyadi Mátyás trónra lépése

Hunyadi János fia, **Hunyadi Mátyás** (született 1443-ban) rendkívüli, fordulatos úton jutott trónra: bátyját, Hunyadi Lászlót V. László király kivégeztette, Mátyást magát is fogságban tartották, majd 1458 januárjában — a hagyomány szerint a befagyott Dunán összegyűlt köznemesség és a Hunyadi-párti főurak nyomására — 15 évesen királlyá választották. Koronázására (a Szent Koronával, amelyet előzőleg ki kellett váltani a zálogból) csak 1464-ben került sor.

## Reformok és a Fekete sereg

Mátyás uralkodása (1458–1490) a középkori magyar állam egyik legerősebb, legcentralizáltabb korszaka volt:

- **Fekete sereg**: állandó, fizetett zsoldoshadsereget szervezett (magja eredetileg huszita harcosokból állt, később lengyel, német és magyar zsoldosokkal bővült) — ez az egyik első, korai modern értelemben vett állandó hadsereg volt Európában, amely függetlenítette a királyi hatalmat a nemesi hadba hívás bizonytalanságától.
- **Központosított kincstári igazgatás**: a főúri tisztségviselőket egyre inkább az általa ellenőrzött, hozzá hű kincstári hivatalnokokkal váltotta fel, és összevonta a titkos és a fő kancelláriát.
- **Rendkívüli hadiadó**: bevezette a füstadót (háztartásonkénti, nem kapunkénti adóztatás), amelyet szükség esetén évente többször is beszedhetett — ez jelentősen megnövelte a királyi bevételeket, és lehetővé tette a Fekete sereg fenntartását.

## A reneszánsz udvar

Mátyás udvara Közép-Európa egyik legfényesebb reneszánsz kulturális központjává vált: felesége, **Aragóniai Beatrix** révén szoros kapcsolatba került az itáliai reneszánsz kultúrával, olasz humanistákat és művészeket hívott udvarába, és összegyűjtötte a **Corvina-könyvtárat** — több mint kétezer kódexből álló, korának egyik leggazdagabb európai könyvgyűjteményét (amelynek nagy része a török hódoltság és a későbbi századok viharai során szétszóródott vagy elpusztult).

## Külpolitika

Mátyás külpolitikájában a törökkel szembeni védekezés mellett (bár nagy, döntő törökellenes hadjáratot nem indított) nyugati irányú terjeszkedésre helyezte a hangsúlyt: 1469-ben cseh királlyá választották, 1485-ben pedig elfoglalta **Bécset**, és 1487-től Ausztria hercegének címét is viselte — ezekkel a hódításokkal Mátyás birodalma átmenetileg Közép-Európa egyik legnagyobb hatalmává vált.

## Jelentősége

Hunyadi János törökellenes védekezése és Mátyás király erős, központosított, reneszánsz kultúrával átitatott uralkodása a középkori magyar állam fénykorát jelentette — az utókor emlékezetében Mátyás "az igazságos" királyként él tovább, aki egyszerre volt kemény, hatékony államszervező és a reneszánsz műveltség pártfogója.
`,
    key_concepts: [
      "nándorfehérvári diadal (1456)",
      "Fekete sereg",
      "füstadó",
      "Corvina-könyvtár",
      "reneszánsz udvar",
    ],
    source_refs: [
      { label: "A Hunyadiak kora (zanza.tv)", url: "https://zanza.tv/tortenelem/magyarsag-tortenete-kezdetektol-1490-ig/hunyadiak-kora" },
      { label: "Hunyadi Mátyás (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Hunyadi_M%C3%A1ty%C3%A1s" },
      { label: "Hunyadi Mátyás keresztény szomszédaival hadakozott (Múlt-kor)", url: "https://mult-kor.hu/a-torok-helyett-kereszteny-szomszedaival-hadakozott-uralkodasa-alatt-hunyadi-matyas-20230425" },
      { label: "Hunyadi Mátyás – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/hunyadi-matyas/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik győzelem hozta meg Hunyadi János számára az egész Európában visszhangot keltő hírnevet 1456-ban?",
        options: ["a nándorfehérvári diadal", "a muhi csata", "a mohácsi csata", "az augsburgi csata"],
        correct_answer: "a nándorfehérvári diadal",
        explanation: "Az 1456-os nándorfehérvári diadal során Hunyadi János visszaverte II. Mehmed szultán ostromló seregét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a Fekete sereg?",
        options: [
          "Mátyás állandó, fizetett zsoldoshadserege",
          "a nemesi felkelő hadsereg",
          "egy titkos rendőrség",
          "a török janicsár hadtest"
        ],
        correct_answer: "Mátyás állandó, fizetett zsoldoshadserege",
        explanation: "A Fekete sereg Mátyás állandó, fizetett zsoldoshadserege volt, amely függetlenítette a királyt a nemesi hadba hívástól.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a füstadó?",
        options: [
          "háztartásonkénti, szükség esetén többször is beszedhető rendkívüli hadiadó",
          "a kereskedelmi vámok gyűjtőneve",
          "a bányászok külön adója",
          "egyházi tized"
        ],
        correct_answer: "háztartásonkénti, szükség esetén többször is beszedhető rendkívüli hadiadó",
        explanation: "A füstadó (kapunkénti helyett háztartásonkénti adóztatás) jelentősen megnövelte Mátyás bevételeit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a Corvina-könyvtár?",
        options: [
          "Mátyás több mint kétezer kódexből álló könyvgyűjteménye",
          "egy budai egyetem neve",
          "a Fekete sereg parancsnoki központja",
          "egy törvénykönyv"
        ],
        correct_answer: "Mátyás több mint kétezer kódexből álló könyvgyűjteménye",
        explanation: "A Corvina-könyvtár korának egyik leggazdagabb európai könyvgyűjteménye volt, amely a reneszánsz udvar szellemi rangját jelezte.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik várost foglalta el Mátyás 1485-ben?",
        options: ["Bécset", "Belgrádot", "Prágát", "Velencét"],
        correct_answer: "Bécset",
        explanation: "Mátyás 1485-ben elfoglalta Bécset, és 1487-től Ausztria hercegének címét is viselte.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "mohacs-es-az-orszag-harom-reszre-szakadasa",
    title: "Mohács és a három részre szakadt ország",
    level: "mindketto",
    theme: "Középkor",
    order_index: 9,
    summary_markdown:
      "Az 1526-os mohácsi csatavesztés, II. Lajos halála és a kettős királyválasztás, majd Buda 1541-es eleste vezetett Magyarország Habsburg-Magyarországra, Erdélyi Fejedelemségre és török hódoltságra való szétszakadásához.",
    content_markdown: `
## A mohácsi csata (1526)

**1526. augusztus 29-én**, Mohács mellett ütközött meg **II. Lajos** magyar király serege **I. Szulejmán** szultán túlerőben lévő oszmán hadával. A magyar sereg — amely létszámban és felszerelésben is alulmaradt, és amelynek egy része (pl. Frangepán Kristóf és Szapolyai János erdélyi hadai) nem ért oda időben a csatatérre — megsemmisítő vereséget szenvedett. A csata során **II. Lajos** király is életét vesztette menekülés közben (a hagyomány szerint a Csele-patakba fulladt, bár ezt a mai kutatás egyre inkább vitatja).

A vereség okai között szerepelt a magyar politikai elit széthúzása, a védelem elhanyagolása az előző évtizedekben, valamint az, hogy a segítségül hívott erdélyi és horvát csapatok nem érkeztek meg időben az ütközethez.

## A kettős királyválasztás

II. Lajos gyermektelen halála után Magyarországon **kettős királyválasztás** történt: a magyar köznemesség nagy része az erdélyi vajdát, **Szapolyai Jánost** választotta királlyá (az 1505-ös rákosi végzésre hivatkozva, amely kizárta idegen király megválasztását), míg a főúri-főpapi réteg egy része II. Lajos sógorát, a Habsburg **Ferdinándot** ismerte el uralkodóként — ez a kettősség évtizedekre szóló belháborús helyzetet teremtett az országban.

## Az ország három részre szakadása

A belviszályok közepette az oszmán hatalom fokozatosan terjeszkedett: **1541-ben** — pontosan a mohácsi csata évfordulóján — a törökök harc nélkül elfoglalták **Budát**, és ezzel gyakorlatilag lezárult az egységes középkori magyar királyság korszaka. Az ország ettől kezdve **három részre szakadt**:

- **Királyi Magyarország** (a nyugati és északi megyék, illetve Horvátország) — Habsburg fennhatóság alatt.
- **Erdélyi Fejedelemség** (a keleti, tiszai és erdélyi területek) — Szapolyai János fiának, János Zsigmondnak a vezetésével önálló, török vazallusi státuszú fejedelemséggé szerveződött.
- **Török hódoltság** (a Duna-Tisza köze és a Dél-Dunántúl nagy része) — közvetlen oszmán közigazgatás alatt.

## Következmények

A háromfelé szakadás nem csak politikai, hanem gazdasági-társadalmi katasztrófa is volt: a folyamatos hadi események, a lakosság menekülése és pusztulása, valamint a terület politikai-gazdasági egységének megszűnése hosszú távú demográfiai és fejlődésbeli hátrányt okozott Magyarországnak a nyugat-európai államokhoz képest. A 150 évig tartó megosztottság (egészen a törökök 17. század végi kiűzéséig) alapvetően meghatározta a modern magyar történelem kezdeteit is.

## Jelentősége

A mohácsi csata és az azt követő három részre szakadás a magyar történelem egyik legfontosabb, sorsfordító eseménysora: ezzel véget ért a középkori, egységes magyar királyság korszaka, és kezdetét vette egy hosszú, megosztott, külső hatalmaktól (Habsburg Birodalom, Oszmán Birodalom) erősen befolyásolt korszak, amelynek hatásai évszázadokra meghatározták az ország politikai fejlődését.
`,
    key_concepts: [
      "mohácsi csata (1526)",
      "II. Lajos halála",
      "kettős királyválasztás",
      "Buda eleste (1541)",
      "Királyi Magyarország, Erdély, hódoltság",
    ],
    source_refs: [
      { label: "Magyarország három részre szakadása (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-magyarorszag-kora-ujkorban/magyarorszag-harom-reszre-szakadasa" },
      { label: "Mohácsi csata (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Moh%C3%A1csi_csata" },
      { label: "Hitek és tévhitek a mohácsi csatáról (Múlt-kor)", url: "https://mult-kor.hu/cikk.php?id=16589" },
      { label: "A mohácsi csata, az ország két- és három részre szakadása – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/a-mohacsi-csata-az-orszag-ket-es-harom-reszre-szakadasa/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mikor zajlott a mohácsi csata?",
        options: ["1526. augusztus 29.", "1541. szeptember 2.", "1456. július 22.", "1241. április 11."],
        correct_answer: "1526. augusztus 29.",
        explanation: "A mohácsi csatára 1526. augusztus 29-én került sor II. Lajos és I. Szulejmán serege között.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kit választott királlyá a magyar köznemesség nagy része a kettős királyválasztáskor?",
        options: ["Szapolyai Jánost", "Habsburg Ferdinándot", "Hunyadi Mátyást", "II. Lajost"],
        correct_answer: "Szapolyai Jánost",
        explanation: "A köznemesség az 1505-ös rákosi végzésre hivatkozva Szapolyai János erdélyi vajdát választotta királlyá.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor foglalták el a törökök Budát, ezzel lezárva az egységes középkori magyar királyságot?",
        options: ["1541-ben", "1526-ban", "1490-ben", "1456-ban"],
        correct_answer: "1541-ben",
        explanation: "1541-ben, pontosan a mohácsi csata évfordulóján foglalták el a törökök harc nélkül Budát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik három rész alakult ki Magyarországból a szétszakadás után?",
        options: [
          "Királyi Magyarország, Erdélyi Fejedelemség, török hódoltság",
          "Nyugat-Magyarország, Kelet-Magyarország, Dél-Magyarország",
          "Habsburg Birodalom, Lengyel Királyság, Oszmán Birodalom",
          "Buda, Pest, Esztergom"
        ],
        correct_answer: "Királyi Magyarország, Erdélyi Fejedelemség, török hódoltság",
        explanation: "Az ország Királyi Magyarországra (Habsburg), Erdélyi Fejedelemségre és közvetlen török hódoltságra szakadt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történt II. Lajos királlyal a mohácsi csata után?",
        options: [
          "menekülés közben életét vesztette",
          "fogságba esett és kivégezték",
          "sikeresen elmenekült és Bécsben folytatta uralkodását",
          "békét kötött Szulejmánnal",
        ],
        correct_answer: "menekülés közben életét vesztette",
        explanation: "II. Lajos a csata után menekülés közben életét vesztette (a hagyomány szerint a Csele-patakba fulladt, bár ezt ma vitatják).",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "a-torok-hodoltsag-kora",
    title: "A török hódoltság kora",
    level: "mindketto",
    theme: "Középkor",
    order_index: 10,
    summary_markdown:
      "A mintegy 150 éves oszmán uralom Magyarország középső területein: a hódoltsági közigazgatás, a kettős adóztatás, a végvári harcok (Eger, Szigetvár), Erdély szerepe a magyar államiság megőrzésében, és a hódoltság demográfiai-gazdasági következményei.",
    content_markdown: `
## A hódoltság kialakulása és időtartama

Buda 1541-es elfoglalásától a törökök **1699-es karlócai békében** rögzített kiűzéséig (a tényleges felszabadító harcok az 1680-as években zajlottak, Buda visszafoglalása 1686-ban történt) mintegy **150 évig** tartott a török uralom Magyarország középső és déli területein — ezt nevezzük a **hódoltság korának**.

## A hódoltsági közigazgatás

A törökök a meghódított magyar területeket a birodalom megszokott közigazgatási rendszerébe illesztették: a hódoltság **szandzsákokra** (katonai-közigazgatási körzetekre) tagolódott, élükön szandzsákbéggel; a pénzügyeket a **defterdár** irányította, míg az igazságszolgáltatás — a saríára (iszlám jogra) alapozva, de a magyar lakosság esetében gyakran a helyi szokásjogot is figyelembe véve — a **kádi** kezében volt.

## A kettős (sőt hármas) adóztatás

A hódoltsági lakosságot rendkívül súlyos, **kettős (esetenként hármas) adóztatás** sújtotta: a török állam és a szpáhi birtokosok (a törökök által birtokolt hűbéres földeken gazdálkodó, katonai szolgálatra kötelezett birtokosok) éppúgy adót szedtek a lakosságtól, mint a formálisan igényt tartó magyar földesurak és a katolikus/református egyház — ez a helyzet rendkívüli terhet jelentett a hódoltsági parasztság számára.

## A végvári rendszer

A hódoltsági határvonal mentén a Habsburg-kori Magyarország és a bécsi udvar kiépítette a **végvári rendszert**: erődök láncolatát (pl. Győr, Komárom, Eger, Kanizsa), amelyeknek feladata a határ védelme, az utak és átkelők ellenőrzése, valamint a lakosság és a hátország védelme volt. A végvári harcok a magyar történelmi emlékezet és irodalom egyik legfontosabb hagyományává váltak:

- **Eger** 1552-es sikeres védelme (Dobó István várkapitány vezetésével) az egyik legismertebb magyar hőstett, amelyet Gárdonyi Géza *Egri csillagok* című regénye örökített meg a nemzeti emlékezetben.
- **Szigetvár** 1566-os ostroma, amelynek végén **Zrínyi Miklós** (a költő Zrínyi Miklós dédapja) hősi kitöréssel, önfeláldozó halállal védte meg a vár becsületét — ez a történet ihlette később a Zrínyi-eposzt, a *Szigeti veszedelmet*.

## Erdély szerepe

A hódoltság korában az önálló **Erdélyi Fejedelemség** kulcsszerepet töltött be a magyar államiság és kultúra folytonosságának megőrzésében: bár formálisan az Oszmán Birodalom vazallusa volt, belső önállóságát megőrizve a magyar politikai-jogi hagyományok, valamint a protestáns (elsősorban református és unitárius) vallási-kulturális élet egyik legfontosabb központjává vált.

## Demográfiai és gazdasági következmények

A 150 éves hódoltság rendkívül súlyos demográfiai-gazdasági következményekkel járt: a folyamatos hadi események, a portyázások, a súlyos adóterhek és a lakosság elmenekülése miatt a hódoltsági területek népessége jelentősen csökkent, sok korábban virágzó település néptelenedett el vagy vált pusztává, és a terület etnikai összetétele is átalakult (a 18. századi újratelepítések során jelentős számú, más nemzetiségű — német, szerb, román — lakosság költözött be az elnéptelenedett vidékekre).

## Jelentősége

A török hódoltság kora Magyarország történelmének egyik legmélyebb töréspontja: a másfél évszázados megosztottság és pusztítás hosszú távon meghatározta az ország demográfiai, gazdasági és etnikai fejlődését, ugyanakkor a végvári harcok és Erdély önállósága a magyar nemzeti identitás és kulturális folytonosság megőrzésének is fontos forrásává vált.
`,
    key_concepts: [
      "szandzsák és defterdár",
      "kettős adóztatás",
      "végvári rendszer",
      "Eger és Szigetvár védelme",
      "Erdélyi Fejedelemség szerepe",
    ],
    source_refs: [
      { label: "A Magyar Királyság és a Hódoltság berendezkedése (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-magyarorszag-kora-ujkorban/magyar-kiralysag-es-hodoltsag-berendezkedese" },
      { label: "Török hódoltság (Wikipédia)", url: "https://hu.wikipedia.org/wiki/T%C3%B6r%C3%B6k_h%C3%B3dolts%C3%A1g" },
      { label: "A másfél évszázadnyi török uralom mérlege (Múlt-kor)", url: "https://mult-kor.hu/20010915_a_masfel_evszazadnyi_torok_uralom_merlege" },
      { label: "Magyar-török küzdelmek és együttélés a XV-XVII. században – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/magyar-torok-kuzdelmek-es-egyutteles-a-xv-xvii-szazadban/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Meddig tartott a török hódoltság kora Magyarországon?",
        options: [
          "kb. 1541-től 1686/1699-ig (mintegy 150 évig)",
          "kb. 1526-tól 1541-ig (15 évig)",
          "kb. 1456-tól 1526-ig",
          "kb. 1000-től 1241-ig",
        ],
        correct_answer: "kb. 1541-től 1686/1699-ig (mintegy 150 évig)",
        explanation: "Buda 1541-es elfoglalásától a törökök kiűzéséig (Buda 1686-os visszafoglalása, 1699-es karlócai béke) mintegy 150 év telt el.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki védte meg sikeresen Eger várát 1552-ben?",
        options: ["Dobó István", "Zrínyi Miklós", "Hunyadi János", "Szapolyai János"],
        correct_answer: "Dobó István",
        explanation: "Dobó István várkapitány vezetésével védték meg sikeresen Eger várát 1552-ben, amit Gárdonyi Géza regénye örökített meg.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte a hódoltsági lakosság adóztatását?",
        options: [
          "kettős (esetenként hármas) adóztatás - török és magyar urak/egyház is adóztatta őket",
          "teljes adómentesség",
          "kizárólag a török állam adóztatta őket",
          "kizárólag terményben fizetett, egységes adó"
        ],
        correct_answer: "kettős (esetenként hármas) adóztatás - török és magyar urak/egyház is adóztatta őket",
        explanation: "A hódoltsági lakosságot egyszerre sújtotta a török és a formálisan igényt tartó magyar földesúri/egyházi adóztatás.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szerepet töltött be Erdély a hódoltság korában?",
        options: [
          "a magyar államiság és kultúra folytonosságának megőrzését szolgáló önálló fejedelemség",
          "közvetlen török tartomány volt, önállóság nélkül",
          "a Habsburg Birodalom része volt",
          "teljesen elnéptelenedett terület volt",
        ],
        correct_answer: "a magyar államiság és kultúra folytonosságának megőrzését szolgáló önálló fejedelemség",
        explanation: "Az Erdélyi Fejedelemség, bár török vazallus volt, önállóságát megőrizve a magyar politikai-kulturális hagyományok központja maradt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik vár 1566-os ostrománál esett el hősi halállal Zrínyi Miklós (a költő dédapja)?",
        options: ["Szigetvár", "Eger", "Nándorfehérvár", "Buda"],
        correct_answer: "Szigetvár",
        explanation: "Zrínyi Miklós Szigetvár 1566-os ostrománál esett el hősi kitörés során, ami később a Szigeti veszedelem eposz témája lett.",
        difficulty: 1,
      },
    ],
  },
];
