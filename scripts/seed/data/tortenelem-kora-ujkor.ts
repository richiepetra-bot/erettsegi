import { TopicSeed } from "./angol";

export const tortenelemKoraUjkorTopics: TopicSeed[] = [
  {
    slug: "nagy-foldrajzi-felfedezesek",
    title: "Nagy földrajzi felfedezések",
    level: "mindketto",
    theme: "Kora újkor és felvilágosodás",
    order_index: 11,
    summary_markdown:
      "A 15-16. századi portugál és spanyol felfedezőutak (Bartolomeu Dias, Vasco da Gama, Kolumbusz, Magellán) új tengeri útvonalakat nyitottak Ázsia és Amerika felé, gyökeresen átalakítva a világkereskedelmet és Európa gazdaságát.",
    content_markdown: `
## Az előzmények és okok

A 15. századi Nyugat-Európában több tényező is a tengeri felfedezőutak felé terelte a figyelmet. A keleti fűszerek (bors, fahéj, szegfűszeg) iránti kereslet folyamatosan nőtt, ugyanakkor az addigi szárazföldi kereskedelmi útvonalakat (a selyemúton és a Közel-Keleten át) az egyre terjeszkedő **Oszmán Birodalom** ellenőrizte és drágította meg. Ehhez társult az **aranyéhség** (a fejlődő nyugat-európai gazdaságnak egyre nagyobb mennyiségű nemesfémre volt szüksége), valamint jelentős **technikai fejlődés**: a mágneses iránytű elterjedése, a csillagászati navigáció fejlődése, és az új hajótípus, a **karavella** (amely alkalmas volt a nyílt óceáni hajózásra) megjelenése.

## A portugál kezdeményezés

A felfedezéseket **Portugália** kezdeményezte: **Tengerész Henrik herceg** a 15. század első felében hajózási akadémiát alapított, és rendszeresen támogatott felfedezőutakat Afrika nyugati partja mentén, azzal a céllal, hogy Afrikát megkerülve jussanak el Indiába. **Bartolomeu Dias** 1487-ben érte el a kontinens déli csücskét, a **Jóreménység fokát**, majd **Vasco da Gama** 1498-ban, Afrikát megkerülve, ténylegesen eljutott Indiába — ezzel megnyílt a tengeri út a keleti fűszerkereskedelem előtt, kikerülve az oszmán és arab közvetítőket.

## Kolumbusz és Amerika felfedezése

**Kolumbusz Kristóf**, aki tévesen úgy vélte, hogy nyugat felé hajózva rövidebb úton érhető el India, hosszas rábeszélés után megszerezte Spanyolország uralkodóinak (Aragóniai Ferdinánd és Kasztíliai Izabella) támogatását. **1492-ben** ért partot a Bahama-szigeteken — ő maga haláláig azt hitte, hogy Kelet-Indiát érte el. Csak később, **Amerigo Vespucci** utazásai és következtetései nyomán vált egyértelművé, hogy egy Európa számára addig ismeretlen kontinensről van szó, amelyet végül róla neveztek el **Amerikának**.

A felfedezőutak sorát **Magellán** expedíciója zárta: 1519–1522 között hajtották végre az **első Föld körüli hajóutat** (bár maga Magellán az út közben, a Fülöp-szigeteken életét vesztette) — ezzel véglegesen bebizonyosodott a Föld gömb alakja és a világtenger összefüggő volta.

## Következmények

A nagy földrajzi felfedezések alapvetően átalakították Európa és a világ gazdasági-politikai rendjét:

- **A világkereskedelem súlypontjának áthelyeződése**: a korábban meghatározó mediterrán (itáliai városállamok által uralt) kereskedelmi útvonalak jelentősége csökkent, míg az atlanti kikötők (Lisszabon, Sevilla, majd később Amszterdam, London) felértékelődtek.
- **Gyarmatosítás kezdete**: Spanyolország és Portugália (majd később más európai hatalmak is) hatalmas gyarmatbirodalmakat építettek ki Amerikában, Afrikában és Ázsiában.
- **"Árforradalom"**: az amerikai kontinensről (főleg Mexikóból és Peruból) Európába áramló hatalmas mennyiségű arany és ezüst tartós, súlyos inflációt idézett elő a 16. századi Európában.
- **Az amerikai őslakos civilizációk pusztulása**: az azték és inka birodalmat viszonylag kis létszámú spanyol hódító csapatok (konkvisztádorok) döntötték meg, részben katonai fölényük, részben az általuk behurcolt európai járványok (himlő, kanyaró) miatt, amelyekkel szemben az őslakosságnak nem volt immunitása.

## Jelentősége

A nagy földrajzi felfedezések korszakhatárt jelentenek a világtörténelemben: ezzel az eseménysorral kezdődik az **újkor**, és ekkor válik Európa — a korábbi periférikus szerepéből kilépve — a világgazdaság és a nemzetközi politika meghatározó központjává, ez a folyamat pedig évszázadokra meghatározta a világ gazdasági-hatalmi viszonyait.
`,
    key_concepts: [
      "karavella",
      "Vasco da Gama és az Indiai-útvonal",
      "Kolumbusz és Amerika felfedezése",
      "árforradalom",
      "gyarmatosítás kezdete",
    ],
    source_refs: [
      { label: "Nyugat felé Indiába (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-vilag-es-europa-kora-ujkorban/nyugat-fele-indiaba" },
      { label: "A földrajzi felfedezések kora (Wikipédia)", url: "https://hu.wikipedia.org/wiki/A_f%C3%B6ldrajzi_felfedez%C3%A9sek_kora" },
      { label: "Kolumbusz Kristóf 520 éve fedezte fel Amerikát (Múlt-kor)", url: "https://mult-kor.hu/20121012_kolumbusz_kristof_520_eve_fedezte_fel_amerikat" },
      { label: "A nagy földrajzi felfedezések és következményeik – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/a-nagy-foldrajzi-felfedezesek-es-kovetkezmenyei/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik ország kezdeményezte elsőként a nagy földrajzi felfedezéseket?",
        options: ["Portugália", "Spanyolország", "Anglia", "Hollandia"],
        correct_answer: "Portugália",
        explanation: "Portugália kezdte az Afrika menti felfedezőutakat, Tengerész Henrik herceg támogatásával.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki jutott el elsőként tengeri úton Indiába, Afrikát megkerülve?",
        options: ["Vasco da Gama", "Kolumbusz Kristóf", "Magellán", "Bartolomeu Dias"],
        correct_answer: "Vasco da Gama",
        explanation: "Vasco da Gama 1498-ban jutott el Indiába, miután Bartolomeu Dias 1487-ben elérte a Jóreménység fokát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kinek a nevéből ered az \"Amerika\" elnevezés?",
        options: ["Amerigo Vespucciéból", "Kolumbusz Kristóféból", "Magellánéból", "Vasco da Gaméból"],
        correct_answer: "Amerigo Vespucciéból",
        explanation: "Amerigo Vespucci ismerte fel elsőként, hogy új kontinensről van szó, ezért nevezték el róla Amerikát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt az \"árforradalom\"?",
        options: [
          "az amerikai nemesfémek beáramlása által okozott tartós infláció Európában",
          "a fűszerek árának csökkenése",
          "a hajóépítés technológiai fejlődése",
          "a gyarmati adók bevezetése",
        ],
        correct_answer: "az amerikai nemesfémek beáramlása által okozott tartós infláció Európában",
        explanation: "Az amerikai arany és ezüst tömeges beáramlása súlyos, tartós inflációt okozott a 16. századi Európában.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik expedíció hajtotta végre az első Föld körüli hajóutat?",
        options: ["Magellán expedíciója", "Kolumbusz expedíciója", "Vasco da Gama expedíciója", "Bartolomeu Dias expedíciója"],
        correct_answer: "Magellán expedíciója",
        explanation: "Magellán expedíciója (1519-1522) hajtotta végre az első Föld körüli hajóutat, bár ő maga útközben életét vesztette.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik birodalom terjeszkedése tette drágábbá és bizonytalanná a keleti fűszerek szárazföldi kereskedelmi útvonalait?",
        options: ["az Oszmán Birodalom", "a Mongol Birodalom", "a Perzsa Birodalom", "a Habsburg Birodalom"],
        correct_answer: "az Oszmán Birodalom",
        explanation: "Az egyre terjeszkedő Oszmán Birodalom ellenőrizte és drágította meg a szárazföldi kereskedelmi útvonalakat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt az \"aranyéhség\", amely a nagy földrajzi felfedezések egyik okaként szolgált?",
        options: [
          "a fejlődő nyugat-európai gazdaság egyre nagyobb nemesfém-igénye",
          "az egyházi adók emelkedése",
          "a kereskedelmi flották közötti verseny",
          "a spanyol korona adóssága",
        ],
        correct_answer: "a fejlődő nyugat-európai gazdaság egyre nagyobb nemesfém-igénye",
        explanation: "Az aranyéhség azt jelentette, hogy a fejlődő nyugat-európai gazdaságnak egyre nagyobb mennyiségű nemesfémre volt szüksége.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely két ország épített ki elsőként hatalmas gyarmatbirodalmakat Amerikában, Afrikában és Ázsiában a felfedezések nyomán?",
        options: ["Spanyolország és Portugália", "Anglia és Franciaország", "Hollandia és Anglia", "Velence és Genova"],
        correct_answer: "Spanyolország és Portugália",
        explanation: "Spanyolország és Portugália (majd később más európai hatalmak is) hatalmas gyarmatbirodalmakat építettek ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen új hajótípus tette lehetővé a nyílt óceáni hajózást a nagy földrajzi felfedezések korában?",
        options: ["a karavella", "a gálya", "a bireme", "a kereskedelmi kogge"],
        correct_answer: "a karavella",
        explanation: "A karavella új hajótípusa alkalmas volt a nyílt óceáni hajózásra, ezzel is elősegítve a felfedezőutakat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki alapított hajózási akadémiát és támogatott rendszeresen felfedezőutakat Afrika nyugati partja mentén?",
        options: ["Tengerész Henrik herceg", "Bartolomeu Dias", "Kolumbusz Kristóf", "Aragóniai Ferdinánd"],
        correct_answer: "Tengerész Henrik herceg",
        explanation: "Tengerész Henrik herceg a 15. század első felében alapított hajózási akadémiát és támogatott felfedezőutakat Afrika partjai mentén.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik pontot érte el Bartolomeu Dias 1487-ben?",
        options: ["a Jóreménység fokát", "Indiát", "a Bahama-szigeteket", "a Fülöp-szigeteket"],
        correct_answer: "a Jóreménység fokát",
        explanation: "Bartolomeu Dias 1487-ben érte el Afrika déli csücskét, a Jóreménység fokát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kinek a támogatását nyerte el Kolumbusz Kristóf hosszas rábeszélés után?",
        options: [
          "Aragóniai Ferdinánd és Kasztíliai Izabella",
          "Tengerész Henrik herceg",
          "I. Erzsébet angol királynő",
          "V. Károly német-római császár",
        ],
        correct_answer: "Aragóniai Ferdinánd és Kasztíliai Izabella",
        explanation: "Kolumbusz hosszas rábeszélés után megszerezte Spanyolország uralkodóinak, Aragóniai Ferdinándnak és Kasztíliai Izabellának a támogatását.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Minek vélte Kolumbusz Kristóf az 1492-ben felfedezett új szárazföldet, haláláig?",
        options: ["Kelet-Indiának", "egy új, ismeretlen kontinensnek", "Amerikának", "a Fülöp-szigeteknek"],
        correct_answer: "Kelet-Indiának",
        explanation: "Kolumbusz maga haláláig azt hitte, hogy Kelet-Indiát érte el, nem egy új kontinenst.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik kikötők jelentősége nőtt meg a világkereskedelem súlypontjának áthelyeződésével a felfedezések után?",
        options: [
          "az atlanti kikötők, például Lisszabon és Sevilla",
          "a mediterrán itáliai városállamok kikötői",
          "a Fekete-tenger partvidékének kikötői",
          "a Balti-tenger kikötői kizárólag",
        ],
        correct_answer: "az atlanti kikötők, például Lisszabon és Sevilla",
        explanation: "A világkereskedelem súlypontja a mediterrán útvonalakról az atlanti kikötők (Lisszabon, Sevilla, majd Amszterdam, London) felé helyeződött át.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi okozta elsősorban az azték és inka birodalom bukását a viszonylag kis létszámú spanyol konkvisztádorok kezétől?",
        options: [
          "a katonai fölény és a behurcolt európai járványok",
          "kizárólag a technológiai fölény",
          "az őslakosok önkéntes megadása",
          "a belső vallási megosztottság az őslakosok között",
        ],
        correct_answer: "a katonai fölény és a behurcolt európai járványok",
        explanation: "Az azték és inka birodalmat részben a hódítók katonai fölénye, részben az általuk behurcolt európai járványok (himlő, kanyaró) döntötték meg.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "reformacio-es-katolikus-megujulas",
    title: "Reformáció és katolikus megújulás",
    level: "mindketto",
    theme: "Kora újkor és felvilágosodás",
    order_index: 12,
    summary_markdown:
      "Luther Márton 1517-es fellépésétől induló reformáció megtörte a katolikus egyház kizárólagos hatalmát Nyugat-Európában, és Magyarországon is gyorsan elterjedt. A katolikus egyház a tridenti zsinattal és a jezsuita renddel válaszolt a kihívásra.",
    content_markdown: `
## A reformáció kirobbanása

A 16. század elejére a katolikus egyházban felhalmozódott visszaélések (a búcsúcédulák pénzért történő árusítása, a papi erkölcstelenség, az egyházi vagyon és a világi hatalom összefonódása) egyre nagyobb elégedetlenséget váltottak ki. **Luther Márton** ágostonos szerzetes és teológus **1517. október 31-én** Wittenbergben közzétette **95 tételét**, amely elsősorban a búcsúcédula-kereskedelem ellen tiltakozott — ezt a napot tekinti a hagyomány a reformáció kezdetének.

## Luther tanításai

Luther teológiai tanításának központi elemei: a **sola fide** elve (az ember kizárólag a hit által, nem pedig jócselekedetek vagy búcsúcédulák vásárlása révén üdvözül), valamint a **sola scriptura** elve (kizárólag a Szentírás tekintélye mérvadó, nem az egyházi hagyomány vagy a pápai tanítóhivatal). Luther lefordította a Bibliát német nyelvre, ezzel is hozzáférhetővé téve azt a laikusok számára, és egyúttal megalapozva a modern német irodalmi nyelvet.

## Kálvin és a további irányzatok

**Kálvin János** genfi reformátor a század közepén dolgozta ki saját tanrendszerét, amelynek központi eleme a **predestináció** (eleve elrendelés) tana: eszerint Isten öröktől fogva eldöntötte, ki üdvözül és ki kárhozik el. Luther követőit **evangélikusoknak (lutheránusoknak)**, Kálvin követőit **reformátusoknak (kálvinistáknak)** nevezzük. A reformáció további irányzatai közé tartoztak az **anabaptisták** (a gyermekkeresztséget elutasító, radikálisabb csoportok) és az **unitáriusok** (akik a Szentháromság tanát vetették el) — utóbbiak Erdélyben (Dávid Ferenc működése nyomán) különösen jelentőssé váltak.

## A reformáció Magyarországon

A reformáció rendkívül gyorsan terjedt el a mohácsi vész utáni, politikailag megosztott Magyarországon: az öt felvidéki szabad királyi város 1549-ben fogalmazta meg az ún. **Ötvárosi hitvallást** lutheránus alapon, míg a magyar világi földbirtokosok körében inkább a **kálvini reformáció** vált meghatározóvá. Erdélyben a vallási sokszínűség (katolikus, evangélikus, református, unitárius) végül az 1568-as tordai országgyűlésen kimondott, Európában úttörő jelentőségű **vallási türelmi rendelethez** vezetett.

## A katolikus megújulás (ellenreformáció)

A katolikus egyház nem tétlenül nézte a reformáció terjedését: a **tridenti zsinat** (1545–1563) megreformálta az egyházi fegyelmet, egyértelműsítette a katolikus tanítást, és megalapozta a katolikus megújulás (ellenreformáció) programját. Ebben kulcsszerepet játszott a Loyolai Ignác által alapított **jezsuita rend**, amely az oktatás (jezsuita gimnáziumok) és a hittérítés eszközeivel dolgozott a katolikus hit megerősítésén. Magyarországon **Pázmány Péter** esztergomi érsek (a 17. század első felében) volt a katolikus megújulás legjelentősebb alakja: kiváló hitszónoki és teológiai munkásságával jelentős területeket térített vissza a katolikus egyházhoz.

## Jelentősége

A reformáció és az arra válaszul kibontakozó katolikus megújulás alapvetően átformálta Európa (és benne Magyarország) vallási térképét: a nyugati kereszténység egysége véglegesen megbomlott, és a vallási megosztottság évszázadokra meghatározó politikai-társadalmi tényezővé vált — beleértve a vallásháborúkat és a Magyarországon is jelentős felekezeti feszültségeket.
`,
    key_concepts: [
      "Luther 95 tétele (1517)",
      "sola fide, sola scriptura",
      "Kálvin és a predestináció",
      "tridenti zsinat",
      "tordai vallási türelmi rendelet (1568)",
    ],
    source_refs: [
      { label: "Reformáció és katolikus megújulás Magyarországon (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-magyarorszag-kora-ujkorban/reformacio-es-katolikus-megujulas-magyarorszagon" },
      { label: "Reformáció (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Reform%C3%A1ci%C3%B3" },
      { label: "Luther: a fiatal joghallgató viharos útja a reformációig (Múlt-kor)", url: "https://mult-kor.hu/luther-a-fiatal-joghallgato-viharos-utja-a-reformacioig-20141031" },
      { label: "A reformáció – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/a-reformacio/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mikor és hol tette közzé Luther Márton 95 tételét?",
        options: ["1517-ben, Wittenbergben", "1522-ben, Genfben", "1545-ben, Trentóban", "1568-ban, Tordán"],
        correct_answer: "1517-ben, Wittenbergben",
        explanation: "Luther 1517. október 31-én tette közzé 95 tételét Wittenbergben, elsősorban a búcsúcédula-kereskedelem ellen tiltakozva.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a \"sola scriptura\" elve?",
        options: [
          "kizárólag a Szentírás tekintélye mérvadó",
          "kizárólag jócselekedetek által üdvözülhet az ember",
          "kizárólag a pápa tévedhetetlen",
          "kizárólag latin nyelven szabad misézni",
        ],
        correct_answer: "kizárólag a Szentírás tekintélye mérvadó",
        explanation: "A sola scriptura elve szerint kizárólag a Biblia tekintélye mérvadó, nem az egyházi hagyomány vagy a pápai tanítóhivatal.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik tan központi eleme Kálvin János tanításának?",
        options: ["a predestináció (eleve elrendelés)", "a búcsúcédulák érvényessége", "a Szentháromság elutasítása", "a gyermekkeresztség elutasítása"],
        correct_answer: "a predestináció (eleve elrendelés)",
        explanation: "Kálvin tanításának központi eleme a predestináció: Isten eleve eldöntötte, ki üdvözül és ki kárhozik el.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik rend játszott kulcsszerepet a katolikus megújulásban?",
        options: ["jezsuita rend", "bencés rend", "ferences rend", "domonkos rend"],
        correct_answer: "jezsuita rend",
        explanation: "A Loyolai Ignác által alapított jezsuita rend az oktatás és hittérítés eszközeivel dolgozott a katolikus megújulásért.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történt Tordán 1568-ban?",
        options: [
          "Európában úttörő vallási türelmi rendeletet mondtak ki",
          "megalapították a jezsuita rendet",
          "Luther kiközösítették",
          "aláírták a tridenti zsinat záródokumentumát",
        ],
        correct_answer: "Európában úttörő vallási türelmi rendeletet mondtak ki",
        explanation: "Az 1568-as tordai országgyűlés Európában úttörő jelentőségű vallási türelmi rendeletet mondott ki Erdélyben.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen visszaélés váltotta ki elsősorban Luther 1517-es tiltakozását?",
        options: [
          "a búcsúcédulák pénzért történő árusítása",
          "a papi nőtlenség előírása",
          "a latin nyelvű mise kötelezővé tétele",
          "az egyetemek egyházi felügyelete",
        ],
        correct_answer: "a búcsúcédulák pénzért történő árusítása",
        explanation: "Luther 95 tétele elsősorban a búcsúcédula-kereskedelem ellen tiltakozott.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a \"sola fide\" elve Luther tanításában?",
        options: [
          "az ember kizárólag a hit által üdvözül",
          "kizárólag a Szentírás tekintélye mérvadó",
          "kizárólag a pápa dönthet hitkérdésekben",
          "az üdvösség jócselekedetek által érhető el",
        ],
        correct_answer: "az ember kizárólag a hit által üdvözül",
        explanation: "A sola fide elve szerint az ember kizárólag a hit által, nem pedig jócselekedetek vagy búcsúcédulák vásárlása révén üdvözül.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen nyelvre fordította le Luther a Bibliát, ezzel is megalapozva egy modern irodalmi nyelvet?",
        options: ["németre", "franciára", "angolra", "magyarra"],
        correct_answer: "németre",
        explanation: "Luther lefordította a Bibliát német nyelvre, ezzel megalapozva a modern német irodalmi nyelvet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan nevezzük Luther követőit?",
        options: ["evangélikusoknak (lutheránusoknak)", "reformátusoknak (kálvinistáknak)", "unitáriusoknak", "anabaptistáknak"],
        correct_answer: "evangélikusoknak (lutheránusoknak)",
        explanation: "Luther követőit evangélikusoknak (lutheránusoknak) nevezzük, Kálvin követőit reformátusoknak (kálvinistáknak).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik radikálisabb reformációs csoport utasította el a gyermekkeresztséget?",
        options: ["az anabaptisták", "az unitáriusok", "az evangélikusok", "a jezsuiták"],
        correct_answer: "az anabaptisták",
        explanation: "Az anabaptisták voltak azok, akik elutasították a gyermekkeresztséget.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kinek a működése nyomán vált jelentőssé az unitárius irányzat Erdélyben?",
        options: ["Dávid Ferenc", "Pázmány Péter", "Loyolai Ignác", "Kálvin János"],
        correct_answer: "Dávid Ferenc",
        explanation: "Az unitáriusok, akik a Szentháromság tanát vetették el, Dávid Ferenc működése nyomán váltak jelentőssé Erdélyben.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik hitvallást fogalmazták meg 1549-ben az öt felvidéki szabad királyi város lutheránus alapon?",
        options: ["az Ötvárosi hitvallást", "a tordai hitvallást", "az augsburgi hitvallást", "a heidelbergi hitvallást"],
        correct_answer: "az Ötvárosi hitvallást",
        explanation: "Az öt felvidéki szabad királyi város 1549-ben fogalmazta meg az Ötvárosi hitvallást lutheránus alapon.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik reformáció vált meghatározóvá a magyar világi földbirtokosok körében?",
        options: ["a kálvini reformáció", "a lutheránus reformáció", "az unitárius irányzat", "az anabaptista mozgalom"],
        correct_answer: "a kálvini reformáció",
        explanation: "A magyar világi földbirtokosok körében inkább a kálvini reformáció vált meghatározóvá.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit tett a tridenti zsinat (1545-1563) a katolikus egyház megújulása érdekében?",
        options: [
          "megreformálta az egyházi fegyelmet és egyértelműsítette a katolikus tanítást",
          "elismerte a protestáns tanításokat",
          "megszüntette a pápaság intézményét",
          "feloszlatta a jezsuita rendet",
        ],
        correct_answer: "megreformálta az egyházi fegyelmet és egyértelműsítette a katolikus tanítást",
        explanation: "A tridenti zsinat megreformálta az egyházi fegyelmet, egyértelműsítette a katolikus tanítást, és megalapozta a katolikus megújulás programját.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt a katolikus megújulás legjelentősebb alakja Magyarországon a 17. század első felében?",
        options: ["Pázmány Péter", "Dávid Ferenc", "Loyolai Ignác", "Kálvin János"],
        correct_answer: "Pázmány Péter",
        explanation: "Pázmány Péter esztergomi érsek volt a katolikus megújulás legjelentősebb alakja Magyarországon, aki jelentős területeket térített vissza a katolikus egyházhoz.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "abszolutizmus-xiv-lajos-franciaorszaga",
    title: "Abszolutizmus (XIV. Lajos Franciaországa)",
    level: "mindketto",
    theme: "Kora újkor és felvilágosodás",
    order_index: 13,
    summary_markdown:
      "XIV. Lajos, a \"Napkirály\" 72 éves uralkodása a francia abszolutizmus fénykora: a rendi gyűlés mellőzésével, a versailles-i fényűző udvarral és az arisztokrácia \"domesztikálásával\" a korlátlan királyi hatalom modelljét teremtette meg.",
    content_markdown: `
## Az abszolutizmus fogalma

Az **abszolutizmus** olyan kormányzati forma, amelyben az uralkodó gyakorlatilag korlátlan hatalommal rendelkezik: nem hívja össze a rendi gyűlést (Franciaországban États généraux), a törvényhozó, végrehajtó és bírói hatalmat egyaránt saját kezében összpontosítja, és hatalmát isteni eredetűnek (isteni jogon alapulónak) tekinti. Az abszolutizmus klasszikus, mintaadó formája a 17. századi Franciaországban, **XIV. Lajos** uralkodása alatt bontakozott ki.

## XIV. Lajos uralkodása

**XIV. Lajos** (uralkodott 1643–1715) mindössze ötévesen került trónra; kiskorúsága idején Mazarin bíboros irányította az országot. Mazarin halála (1661) után Lajos nem nevezett ki új első minisztert, hanem személyesen vette át az ország irányítását — uralkodói filozófiáját tömören fejezi ki a neki tulajdonított mondás: **"L'État, c'est moi"** ("Az állam én vagyok"). 72 éves uralkodásával ő volt Európa történetének egyik leghosszabb ideig regnáló uralkodója, s emiatt kapta a **"Napkirály"** elnevezést is, utalva központi, minden mást maga köré rendező szerepére.

## Versailles és az udvari élet

Lajos gyermekkorában megtapasztalta a főnemesi lázadásokat (a Fronde-mozgalmakat), ez alapozta meg azt a politikáját, hogy az arisztokráciát a közelében, ellenőrzés alatt kívánta tartani. Ennek eszköze lett a hatalmas **versailles-i kastély**, ahová 1682-ben települt át az udvar: a kastélyban és parkjában (amely 132 kilométernyi fasort és ötven szökőkutat foglalt magában) akár tízezer nemes és szolgáló is tartózkodott egyidejűleg. Az udvari élet szigorúan szabályozott szertartásrenddel (etikett) zajlott — még a király reggeli felöltözése is nyilvános ceremónia volt —, ami egyszerre demonstrálta a király korlátlan hatalmát, és foglalta le, "szelídítette meg" a korábban lázadozásra hajlamos főnemességet.

## Gazdaságpolitika és államszervezet

Lajos idején szakképzett, polgári származású, de a király által nemesített hivatalnoki réteg irányította az ország ügyeit — ezzel a király elkerülte, hogy a régi, önálló hatalmi bázissal rendelkező arisztokráciára legyen utalva. Pénzügyminisztere, **Colbert** merkantilista gazdaságpolitikát folytatott: az állam aktívan támogatta a hazai manufaktúrákat, vámokkal védte a belső piacot, és a kereskedelmi mérleg pozitív egyenlegére törekedett.

## Az abszolutizmus válsága

XIV. Lajos uralkodásának második felét egyre súlyosbodó problémák jellemezték: a folyamatos háborúk (amelyekkel Lajos Franciaország európai vezető szerepét igyekezett megszilárdítani) hatalmas költségekkel jártak, az állami bevételek nem tudták követni a kiadásokat, az adóterhek pedig egyre elviselhetetlenebbé váltak a lakosság számára. Lajos halálakor (1715) Párizs népe megkönnyebbüléssel fogadta a hírt — ez is jelzi, hogy uralkodása alatt Franciaország nagyhatalmi pozíciója megerősödött ugyan, de ennek ára a lakosság elszegényedése és az állam eladósodása volt, ami hosszú távon a francia abszolutizmus és végül az Ancien Régime válságához vezetett.

## Jelentősége

XIV. Lajos Franciaországa az európai abszolutizmus klasszikus mintapéldájává vált: számos más európai uralkodó (pl. a porosz vagy az orosz udvar) is a versailles-i modellt igyekezett követni. Ugyanakkor az abszolutizmus által felhalmozott feszültségek (adóterhek, a harmadik rend kizárása a hatalomból) hosszú távon éppen azt a válságfolyamatot indították el, amely a 18. század végén a francia forradalomhoz vezetett.
`,
    key_concepts: [
      "abszolutizmus",
      "\"L'État, c'est moi\"",
      "Versailles és az udvari etikett",
      "merkantilizmus (Colbert)",
      "az abszolutizmus válsága",
    ],
    source_refs: [
      { label: "A Napkirály udvarában (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-vilag-es-europa-kora-ujkorban/napkiraly-udvaraban" },
      { label: "XIV. Lajos francia király (Wikipédia)", url: "https://hu.wikipedia.org/wiki/XIV._Lajos_francia_kir%C3%A1ly" },
      { label: "Európa legnagyobb hatalmává tette Franciaországot XIV. Lajos (Múlt-kor)", url: "https://mult-kor.hu/europa-legnagyobb-hatalmava-tette-franciaorszagot-nepevel-azonban-fikarcnyit-sem-torodott-xiv-lajos-20210901" },
      { label: "Abszolutizmus kialakulása – Franciaország, Anglia, Spanyolország (Érettségi 2024)", url: "https://erettsegi.org/abszolutizmus-kialakulasa-franciaorszag-anglia-spanyolorszag.html" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az abszolutizmus?",
        options: [
          "az uralkodó gyakorlatilag korlátlan hatalmát, rendi gyűlés nélkül",
          "a hatalom megosztását a rendi gyűlés és a király között",
          "a nép közvetlen részvételét a kormányzásban",
          "a köztársasági államformát",
        ],
        correct_answer: "az uralkodó gyakorlatilag korlátlan hatalmát, rendi gyűlés nélkül",
        explanation: "Az abszolutizmusban az uralkodó korlátlan hatalommal rendelkezik, nem hívja össze a rendi gyűlést.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány évig uralkodott XIV. Lajos?",
        options: ["72 évig", "25 évig", "10 évig", "50 évig"],
        correct_answer: "72 évig",
        explanation: "XIV. Lajos 1643-tól 1715-ig, 72 évig uralkodott - Európa egyik leghosszabb ideig regnáló uralkodója volt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért települt Versailles-ba XIV. Lajos udvara?",
        options: [
          "hogy az arisztokráciát közelében, ellenőrzés alatt tartsa",
          "mert Párizs elpusztult egy tűzvészben",
          "hogy közelebb legyen a tengeri kereskedelemhez",
          "vallási okokból"
        ],
        correct_answer: "hogy az arisztokráciát közelében, ellenőrzés alatt tartsa",
        explanation: "A gyermekkori főnemesi lázadások tapasztalata után Lajos az arisztokráciát az udvarban kívánta tartani, ellenőrzés alatt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt XIV. Lajos merkantilista gazdaságpolitikát folytató pénzügyminisztere?",
        options: ["Colbert", "Mazarin", "Richelieu", "Necker"],
        correct_answer: "Colbert",
        explanation: "Colbert merkantilista politikát folytatott: állami támogatás a manufaktúráknak, védővámok, pozitív kereskedelmi mérleg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemezte XIV. Lajos uralkodásának végét?",
        options: [
          "a háborús költségek és adóterhek miatti súlyos pénzügyi válság",
          "a teljes belső béke és jólét",
          "a rendi gyűlés hatalmának megerősödése",
          "Franciaország gyarmatainak elvesztése"
        ],
        correct_answer: "a háborús költségek és adóterhek miatti súlyos pénzügyi válság",
        explanation: "A folyamatos háborúk költségei és az egyre elviselhetetlenebb adóterhek válságtünetekhez vezettek uralkodása végére.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány évesen került trónra XIV. Lajos?",
        options: ["ötévesen", "tizenöt évesen", "huszonöt évesen", "harminc évesen"],
        correct_answer: "ötévesen",
        explanation: "XIV. Lajos mindössze ötévesen került trónra, kiskorúsága idején Mazarin bíboros irányította az országot.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki irányította Franciaországot XIV. Lajos kiskorúsága idején?",
        options: ["Mazarin bíboros", "Colbert", "Richelieu bíboros", "a rendi gyűlés"],
        correct_answer: "Mazarin bíboros",
        explanation: "XIV. Lajos kiskorúsága idején Mazarin bíboros irányította az országot.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen döntést hozott XIV. Lajos Mazarin halála (1661) után?",
        options: [
          "nem nevezett ki új első minisztert, személyesen vette át az irányítást",
          "összehívta a rendi gyűlést",
          "lemondott a trónról fia javára",
          "Colbertet nevezte ki első miniszternek",
        ],
        correct_answer: "nem nevezett ki új első minisztert, személyesen vette át az irányítást",
        explanation: "Mazarin halála után Lajos nem nevezett ki új első minisztert, hanem személyesen vette át az ország irányítását.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik híres mondás fejezi ki tömören XIV. Lajos uralkodói filozófiáját?",
        options: ["\"L'État, c'est moi\"", "\"Veni, vidi, vici\"", "\"Ancien Régime\"", "\"Fiat lux\""],
        correct_answer: "\"L'État, c'est moi\"",
        explanation: "XIV. Lajos uralkodói filozófiáját tömören fejezi ki a neki tulajdonított mondás: \"L'État, c'est moi\" (\"Az állam én vagyok\").",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a Fronde?",
        options: [
          "XIV. Lajos gyermekkorában kitört főnemesi lázadások",
          "a francia rendi gyűlés neve",
          "XIV. Lajos gazdaságpolitikájának neve",
          "a versailles-i udvari etikett szabályzata",
        ],
        correct_answer: "XIV. Lajos gyermekkorában kitört főnemesi lázadások",
        explanation: "Lajos gyermekkorában megtapasztalta a főnemesi lázadásokat, a Fronde-mozgalmakat, amelyek megalapozták az arisztokrácia ellenőrzés alatt tartására irányuló politikáját.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor települt át XIV. Lajos udvara a versailles-i kastélyba?",
        options: ["1682-ben", "1661-ben", "1643-ban", "1715-ben"],
        correct_answer: "1682-ben",
        explanation: "1682-ben települt át az udvar a versailles-i kastélyba.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Körülbelül hány nemes és szolgáló tartózkodott egyidejűleg a versailles-i kastélyban és parkjában?",
        options: ["akár tízezer", "néhány száz", "körülbelül ezer", "több mint százezer"],
        correct_answer: "akár tízezer",
        explanation: "A versailles-i kastélyban és parkjában akár tízezer nemes és szolgáló is tartózkodott egyidejűleg.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen származású volt az a hivatalnoki réteg, amely XIV. Lajos idején az ország ügyeit irányította?",
        options: [
          "szakképzett, polgári származású, de a király által nemesített",
          "kizárólag régi, önálló hatalmi bázissal rendelkező arisztokrata",
          "kizárólag egyházi",
          "kizárólag katonai",
        ],
        correct_answer: "szakképzett, polgári származású, de a király által nemesített",
        explanation: "Lajos idején szakképzett, polgári származású, de a király által nemesített hivatalnoki réteg irányította az ország ügyeit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan fogadta Párizs népe XIV. Lajos halálának hírét 1715-ben?",
        options: ["megkönnyebbüléssel", "mély gyásszal", "közömbösen", "örömünnepséggel a győzelmek miatt"],
        correct_answer: "megkönnyebbüléssel",
        explanation: "Lajos halálakor Párizs népe megkönnyebbüléssel fogadta a hírt, jelezve a lakosság elszegényedését és elégedetlenségét.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a francia rendi gyűlés neve, amelyet XIV. Lajos nem hívott össze uralkodása során?",
        options: ["États généraux", "Bundestag", "Reichstag", "Landtag"],
        correct_answer: "États généraux",
        explanation: "Az abszolutizmus lényege, hogy az uralkodó nem hívja össze a rendi gyűlést (Franciaországban États généraux).",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "a-felvilagosodas-eszmei",
    title: "A felvilágosodás eszméi",
    level: "mindketto",
    theme: "Kora újkor és felvilágosodás",
    order_index: 14,
    summary_markdown:
      "A 18. századi felvilágosodás az ész és a haladás nevében küzdött a tudatlanság és az elavult feudális intézmények ellen. Locke, Montesquieu, Rousseau és Voltaire eszméi alapozták meg a modern politikai gondolkodást és a francia forradalmat.",
    content_markdown: `
## A felvilágosodás kialakulása

A **felvilágosodás** olyan új gondolkodásmód és világkép volt, amely a 17. század végén Angliában bontakozott ki, majd a 18. században Franciaországban érte el csúcspontját, és onnan terjedt tovább egész Európában, sőt az Újvilágba is. A felvilágosult gondolkodók az **ész (racionalizmus)** nevében léptek fel a tudatlanság, a babonák és az elavult, feudális eredetű intézmények ellen — a mozgalom neve is erre utal: célja a "fény" (tudás, ismeret) behozatala a "sötétségbe" (tudatlanságba).

## Az angol előzmények

A felvilágosodás filozófiai gyökerei az angol empirizmusban (Bacon, Locke, Hume) találhatók, amely szerint a világ megismerése az érzéki tapasztalaton alapul. **John Locke** dolgozta ki a **természetes jogok** elméletét: eszerint minden ember természettől fogva szabad és egyenlő, és rendelkezik elidegeníthetetlen jogokkal (élethez, szabadsághoz, tulajdonhoz való jog). Locke fogalmazta meg a **társadalmi szerződés** elméletét is: az emberek kölcsönös védelmük érdekében hoznak létre politikai közösséget, és ha az uralkodó megsérti ezt a szerződést (zsarnokivá válik), a nép jogosult ellene fellépni.

## A francia felvilágosodás nagy alakjai

- **Montesquieu**: *A törvények szelleméről* című művében dolgozta ki a **hatalmi ágak szétválasztásának** elméletét — a törvényhozó, végrehajtó és bírói hatalom elkülönítését és egymást ellenőrző rendszerét javasolta, hogy megakadályozza a hatalommal való visszaélést. Ez az elmélet a modern alkotmányos demokráciák egyik alapköve lett.
- **Rousseau**: a **népszuverenitás** és a **"közakarat"** (volonté générale) elméletének kidolgozója — szerinte a legitim politikai hatalom forrása kizárólag a nép közössége lehet, nem az uralkodó isteni joga.
- **Voltaire**: a vallási türelem és a szólásszabadság szenvedélyes szószólója, aki éles kritikával illette a katolikus egyház dogmatizmusát és a korabeli igazságszolgáltatás visszaéléseit.

## Az Enciklopédia

A felvilágosodás egyik legnagyobb közös vállalkozása az **Enciklopédia** (1751–1772) volt, amelyet **Diderot** és **d'Alembert** szerkesztett: a mű a kor teljes tudásanyagát (tudományos, technikai, filozófiai ismereteket) igyekezett rendszerezve összegyűjteni és hozzáférhetővé tenni — ezzel önmagában is a felvilágosult eszmék terjesztésének egyik legfontosabb eszközévé vált.

## A felvilágosult abszolutizmus

Egyes európai uralkodók (pl. Mária Terézia és II. József a Habsburg Birodalomban, Nagy Frigyes Poroszországban) igyekeztek a felvilágosodás egyes eszméit (racionális közigazgatás, oktatásfejlesztés, vallási türelem) saját abszolutista uralmukkal összeegyeztetni — ezt nevezzük **felvilágosult abszolutizmusnak**: a cél a birodalom modernizálása volt, a rendi kiváltságok és a monarchikus hatalom alapvető megkérdőjelezése nélkül.

## Jelentősége

A felvilágosodás eszmerendszere alapvető hatást gyakorolt a modern politikai gondolkodásra: a hatalmi ágak szétválasztása, a természetes jogok, a népszuverenitás és a vallási türelem elvei a mai napig a demokratikus alkotmányos rendszerek alapkövei. Közvetlen hatása volt mind az **amerikai függetlenségi nyilatkozatra** (1776), mind a **francia forradalom** eszmei megalapozására (1789).
`,
    key_concepts: [
      "racionalizmus",
      "természetes jogok és társadalmi szerződés",
      "hatalmi ágak szétválasztása (Montesquieu)",
      "népszuverenitás (Rousseau)",
      "felvilágosult abszolutizmus",
    ],
    source_refs: [
      { label: "A felvilágosodás (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-felvilagosodas-forradalmak-es-polgarosodas-kora/felvilagosodas" },
      { label: "Felvilágosodás (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Felvil%C3%A1gosod%C3%A1s" },
      { label: "Rubicon: 1789. július 14. A Bastille bevétele", url: "https://rubicon.hu/hu/kalendarium/1789-julius-14-a-bastille-bevetele" },
      { label: "A felvilágosodás eszmerendszere – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/a-felvilagosodas-eszmerendszere/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Ki dolgozta ki a hatalmi ágak szétválasztásának elméletét?",
        options: ["Montesquieu", "Rousseau", "Voltaire", "Locke"],
        correct_answer: "Montesquieu",
        explanation: "Montesquieu A törvények szelleméről című művében dolgozta ki a törvényhozó, végrehajtó és bírói hatalom szétválasztásának elméletét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kihez köthető a népszuverenitás és a \"közakarat\" elmélete?",
        options: ["Rousseau", "Montesquieu", "Locke", "Diderot"],
        correct_answer: "Rousseau",
        explanation: "Rousseau szerint a legitim politikai hatalom forrása kizárólag a nép közössége (közakarat) lehet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki szerkesztette az Enciklopédiát Diderot mellett?",
        options: ["d'Alembert", "Voltaire", "Montesquieu", "Rousseau"],
        correct_answer: "d'Alembert",
        explanation: "Diderot és d'Alembert szerkesztette közösen az 1751-1772 között megjelent Enciklopédiát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a felvilágosult abszolutizmust?",
        options: [
          "az uralkodó felvilágosult reformokat vezet be, de megőrzi abszolút hatalmát",
          "a rendi gyűlés teljes hatalomátvétele",
          "a monarchia teljes eltörlése",
          "a jobbágyság azonnali és teljes felszámolása mindenhol",
        ],
        correct_answer: "az uralkodó felvilágosult reformokat vezet be, de megőrzi abszolút hatalmát",
        explanation: "A felvilágosult abszolutizmus a modernizáló reformokat a rendi kiváltságok és a monarchikus hatalom megkérdőjelezése nélkül vezette be.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik elméletet dolgozta ki John Locke?",
        options: ["a természetes jogok és a társadalmi szerződés elméletét", "a hatalmi ágak szétválasztását", "a népszuverenitás elméletét", "a predestináció tanát"],
        correct_answer: "a természetes jogok és a társadalmi szerződés elméletét",
        explanation: "Locke dolgozta ki, hogy minden ember természetes, elidegeníthetetlen jogokkal rendelkezik, és az uralkodó hatalma szerződésen alapul.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol bontakozott ki a felvilágosodás a 17. század végén, mielőtt Franciaországban elérte volna csúcspontját?",
        options: ["Angliában", "Spanyolországban", "Oroszországban", "Itáliában"],
        correct_answer: "Angliában",
        explanation: "A felvilágosodás olyan új gondolkodásmód volt, amely a 17. század végén Angliában bontakozott ki, majd a 18. században Franciaországban érte el csúcspontját.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi ellen léptek fel a felvilágosult gondolkodók az ész (racionalizmus) nevében?",
        options: [
          "a tudatlanság, a babonák és az elavult, feudális eredetű intézmények ellen",
          "a kereskedelem szabadsága ellen",
          "a tudományos fejlődés ellen",
          "a városi polgárság jogai ellen",
        ],
        correct_answer: "a tudatlanság, a babonák és az elavult, feudális eredetű intézmények ellen",
        explanation: "A felvilágosult gondolkodók az ész nevében léptek fel a tudatlanság, a babonák és az elavult, feudális eredetű intézmények ellen.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kik képviselték az angol empirizmust, amelyben a felvilágosodás filozófiai gyökerei találhatók?",
        options: ["Bacon, Locke, Hume", "Montesquieu, Rousseau, Voltaire", "Diderot, d'Alembert", "Mária Terézia, II. József"],
        correct_answer: "Bacon, Locke, Hume",
        explanation: "A felvilágosodás filozófiai gyökerei az angol empirizmusban (Bacon, Locke, Hume) találhatók.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit tehet a nép Locke társadalmi szerződés-elmélete szerint, ha az uralkodó zsarnokivá válik és megsérti a szerződést?",
        options: [
          "jogosult ellene fellépni",
          "köteles feltétel nélkül engedelmeskedni",
          "kizárólag imádkozhat a helyzet megváltozásáért",
          "köteles elhagyni az országot",
        ],
        correct_answer: "jogosult ellene fellépni",
        explanation: "Locke szerint ha az uralkodó megsérti a társadalmi szerződést és zsarnokivá válik, a nép jogosult ellene fellépni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt a vallási türelem és a szólásszabadság szenvedélyes szószólója a francia felvilágosodásban?",
        options: ["Voltaire", "Montesquieu", "Rousseau", "Diderot"],
        correct_answer: "Voltaire",
        explanation: "Voltaire a vallási türelem és a szólásszabadság szenvedélyes szószólója volt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit kritizált élesen Voltaire?",
        options: [
          "a katolikus egyház dogmatizmusát és az igazságszolgáltatás visszaéléseit",
          "a hatalmi ágak szétválasztásának elméletét",
          "a népszuverenitás elméletét",
          "az angol empirizmust",
        ],
        correct_answer: "a katolikus egyház dogmatizmusát és az igazságszolgáltatás visszaéléseit",
        explanation: "Voltaire éles kritikával illette a katolikus egyház dogmatizmusát és a korabeli igazságszolgáltatás visszaéléseit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mely években jelent meg az Enciklopédia?",
        options: ["1751-1772", "1689-1701", "1776-1789", "1517-1545"],
        correct_answer: "1751-1772",
        explanation: "Az Enciklopédia 1751-1772 között jelent meg, Diderot és d'Alembert szerkesztésében.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik két Habsburg uralkodó igyekezett a felvilágosult abszolutizmus eszméit követni?",
        options: ["Mária Terézia és II. József", "XIV. Lajos és XVI. Lajos", "Nagy Frigyes és I. Péter", "II. Lajos és Ferdinánd"],
        correct_answer: "Mária Terézia és II. József",
        explanation: "Mária Terézia és II. József a Habsburg Birodalomban igyekeztek a felvilágosodás eszméit saját abszolutista uralmukkal összeegyeztetni.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt a felvilágosult abszolutizmus képviselője Poroszországban?",
        options: ["Nagy Frigyes", "XIV. Lajos", "I. Péter", "Mária Terézia"],
        correct_answer: "Nagy Frigyes",
        explanation: "Nagy Frigyes Poroszországban igyekezett a felvilágosodás egyes eszméit saját abszolutista uralmával összeegyeztetni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik 1776-os dokumentumra volt közvetlen hatása a felvilágosodás eszmerendszerének?",
        options: [
          "az amerikai függetlenségi nyilatkozatra",
          "az Emberi és Polgári Jogok Nyilatkozatára",
          "az Aranybullára",
          "a milánói ediktumra",
        ],
        correct_answer: "az amerikai függetlenségi nyilatkozatra",
        explanation: "A felvilágosodásnak közvetlen hatása volt az amerikai függetlenségi nyilatkozatra (1776) is.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-francia-forradalom",
    title: "A francia forradalom",
    level: "mindketto",
    theme: "Kora újkor és felvilágosodás",
    order_index: 15,
    summary_markdown:
      "Az 1789-es Bastille-ostromtól a jakobinus diktatúrán át Napóleon hatalomátvételéig: a francia forradalom megdöntötte a rendi monarchiát, kikiáltotta az Emberi és Polgári Jogok Nyilatkozatát, és alapvetően átformálta Európa politikai gondolkodását.",
    content_markdown: `
## Az előzmények

A 18. század végi Franciaországot súlyos **pénzügyi válság** sújtotta: a korábbi háborúk (köztük az amerikai függetlenségi háború francia támogatása) és az udvari költekezés hatalmas államadósságot halmozott fel, miközben a **rendi rendszer** (első rend: papság, kb. 1%; második rend: nemesség, kb. 2%; harmadik rend: polgárság és parasztság, kb. 97%) azt eredményezte, hogy az adóterhek túlnyomó részét éppen a legszegényebb, politikai jogokkal alig rendelkező harmadik rend viselte. Rossz termések és éhínség tovább súlyosbította a helyzetet, XVI. Lajos pedig 1789 májusában — 1614 óta először — kénytelen volt összehívni a **rendi gyűlést (États généraux)**.

## A forradalom kitörése

A harmadik rend képviselői 1789 júniusában **Nemzetgyűléssé** nyilvánították magukat, ezzel gyakorlatilag felszámolva a hagyományos rendi képviseletet. **1789. július 14-én** a párizsi nép megostromolta és lerombolta a **Bastille-t**, a királyi önkényuralom gyűlölt szimbólumát — ezt a napot tekintjük a francia forradalom kezdetének, és a mai napig francia nemzeti ünnep. A nyár folyamán vidéken is felkelések törtek ki a nemesi kastélyak ellen ("nagy félelem").

## A forradalom első szakasza

**Augusztus 4-én** a Nemzetgyűlés eltörölte a feudális kiváltságokat, **augusztus 26-án** pedig elfogadta az **Emberi és Polgári Jogok Nyilatkozatát**, amely a felvilágosodás eszméit (szabadság, egyenlőség, tulajdon szentsége, népszuverenitás) rögzítette alapvető jogokként. 1791-ben alkotmányos monarchiát vezettek be, amely korlátozta, de nem szüntette meg a királyi hatalmat.

## A köztársaság és a jakobinus diktatúra

1792-ben, a külső háborús fenyegetés (a szomszédos monarchiák beavatkozási kísérletei) és a belső radikalizálódás közepette kikiáltották a **köztársaságot**, és a Nemzeti Konvent XVI. Lajos királyt hazaárulás vádjával perbe fogta és **1793-ban kivégeztette**. Ettől kezdve, kb. egy éven át tartott a **jakobinus diktatúra** (1793–1794): **Robespierre** vezetésével a forradalmi kormányzat a "terror" eszközeivel (tömeges politikai kivégzések) igyekezett megvédeni a forradalmi vívmányokat a belső és külső ellenséggel szemben.

## A Directórium és Napóleon felemelkedése

Robespierre bukása (1794) után egy mérsékeltebb, elsősorban a felső polgárságot képviselő kormányzati forma, a **Directórium** (1795–1799) következett — ez a rendszer instabil és korrupt volt, nem tudta konszolidálni a forradalom utáni Franciaországot. A bizonytalan belpolitikai helyzetet kihasználva **Napóleon Bonaparte** tábornok **1799-es államcsínyével** ragadta magához a hatalmat, ezzel lezárva a forradalom korszakát, és megnyitva a napóleoni éra útját.

## Jelentősége

A francia forradalom a modern kori Európa egyik legfontosabb korszakhatárát jelenti: véget vetett a rendi társadalom és az abszolút monarchia hagyományos rendjének, és olyan alapelveket (népszuverenitás, emberi jogok, jogegyenlőség) fogalmazott meg, amelyek azóta is a modern demokratikus államberendezkedések alapjául szolgálnak. Ugyanakkor a forradalom radikalizálódása (a terror időszaka) a mai napig vitatott, ellentmondásos örökséget hagyott hátra.
`,
    key_concepts: [
      "rendi rendszer válsága",
      "Bastille ostroma (1789. július 14.)",
      "Emberi és Polgári Jogok Nyilatkozata",
      "jakobinus diktatúra (Robespierre)",
      "Napóleon 1799-es hatalomátvétele",
    ],
    source_refs: [
      { label: "A francia forradalom és Napóleon (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-felvilagosodas-forradalmak-es-polgarosodas-kora/francia-forradalom-es-napoleon" },
      { label: "Francia forradalom (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Francia_forradalom" },
      { label: "Lándzsára tűzött fejek az ancien régime végóráiban: a Bastille ostroma (Múlt-kor)", url: "https://mult-kor.hu/landzsara-tuzott-fejek-az-ancien-regime-vegoraiban-a-bastille-ostroma-20220714" },
      { label: "A Nagy Francia Forradalom és Bonaparte Napóleon – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/a-nagy-francia-forradalom-es-bonaparte-napoleon/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik esemény tekinthető a francia forradalom kezdetének?",
        options: ["a Bastille ostroma 1789. július 14-én", "XVI. Lajos kivégzése", "Napóleon hatalomátvétele", "a rendi gyűlés összehívása"],
        correct_answer: "a Bastille ostroma 1789. július 14-én",
        explanation: "1789. július 14-én ostromolták meg és rombolták le a Bastille-t, a királyi önkényuralom szimbólumát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor és mit fogadott el a Nemzetgyűlés az emberi jogokról?",
        options: [
          "1789. augusztus 26-án az Emberi és Polgári Jogok Nyilatkozatát",
          "1793-ban egy új alkotmányt",
          "1799-ben a köztársasági alkotmányt",
          "1791-ben a jobbágyfelszabadítási törvényt"
        ],
        correct_answer: "1789. augusztus 26-án az Emberi és Polgári Jogok Nyilatkozatát",
        explanation: "1789. augusztus 26-án fogadták el az Emberi és Polgári Jogok Nyilatkozatát, amely rögzítette a felvilágosodás alapelveit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki vezette a jakobinus diktatúra (terror) időszakát?",
        options: ["Robespierre", "Napóleon", "XVI. Lajos", "Danton egyedül"],
        correct_answer: "Robespierre",
        explanation: "Robespierre vezetésével zajlott a jakobinus diktatúra (1793-1794), a terror időszaka.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történt XVI. Lajossal 1793-ban?",
        options: ["hazaárulás vádjával kivégezték", "emigrált Ausztriába", "lemondott, de életben maradt", "visszanyerte teljes hatalmát"],
        correct_answer: "hazaárulás vádjával kivégezték",
        explanation: "A Nemzeti Konvent hazaárulás vádjával perbe fogta és 1793-ban kivégeztette XVI. Lajost.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan ragadta magához a hatalmat Napóleon Bonaparte?",
        options: ["egy 1799-es államcsínnyel", "a köztársasági elnökválasztáson", "a jakobinusok meghívására", "örökös monarchaként"],
        correct_answer: "egy 1799-es államcsínnyel",
        explanation: "Napóleon 1799-es államcsínye zárta le a forradalom korszakát, megnyitva a napóleoni éra útját.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány százalékát képviselte kb. a harmadik rend (polgárság és parasztság) a francia lakosságnak a forradalom előtt?",
        options: ["kb. 97%-át", "kb. 50%-át", "kb. 10%-át", "kb. 75%-át"],
        correct_answer: "kb. 97%-át",
        explanation: "A harmadik rend (polgárság és parasztság) a lakosság kb. 97%-át tette ki, szemben az első rend (papság, kb. 1%) és a második rend (nemesség, kb. 2%) létszámával.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kire esett túlnyomórészt az adóterhek viselése a francia rendi rendszerben a forradalom előtt?",
        options: ["a harmadik rendre", "a papságra", "a nemességre", "egyenlő arányban minden rendre"],
        correct_answer: "a harmadik rendre",
        explanation: "Az adóterhek túlnyomó részét éppen a legszegényebb, politikai jogokkal alig rendelkező harmadik rend viselte.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor hívta össze XVI. Lajos a rendi gyűlést (États généraux), 1614 óta először?",
        options: ["1789 májusában", "1789 júliusában", "1792-ben", "1799-ben"],
        correct_answer: "1789 májusában",
        explanation: "XVI. Lajos 1789 májusában — 1614 óta először — kényszerült összehívni a rendi gyűlést.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Minek nyilvánították magukat a harmadik rend képviselői 1789 júniusában?",
        options: ["Nemzetgyűlésnek", "Nemzeti Konventnek", "Directóriumnak", "jakobinus klubnak"],
        correct_answer: "Nemzetgyűlésnek",
        explanation: "A harmadik rend képviselői 1789 júniusában Nemzetgyűléssé nyilvánították magukat, felszámolva a hagyományos rendi képviseletet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen felkelések törtek ki vidéken 1789 nyarán, amelyeket \"nagy félelemnek\" neveztek?",
        options: [
          "a nemesi kastélyak elleni felkelések",
          "a papság elleni felkelések",
          "a városi adóhivatalok elleni felkelések",
          "a külföldi seregek elleni felkelések",
        ],
        correct_answer: "a nemesi kastélyak elleni felkelések",
        explanation: "A nyár folyamán vidéken is felkelések törtek ki a nemesi kastélyak ellen, ezt nevezték \"nagy félelemnek\".",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor törölte el a Nemzetgyűlés a feudális kiváltságokat?",
        options: ["1789. augusztus 4-én", "1789. július 14-én", "1791-ben", "1793-ban"],
        correct_answer: "1789. augusztus 4-én",
        explanation: "Augusztus 4-én a Nemzetgyűlés eltörölte a feudális kiváltságokat, augusztus 26-án pedig elfogadta az emberi jogok nyilatkozatát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen államformát vezettek be Franciaországban 1791-ben?",
        options: ["alkotmányos monarchiát", "köztársaságot", "jakobinus diktatúrát", "abszolút monarchiát"],
        correct_answer: "alkotmányos monarchiát",
        explanation: "1791-ben alkotmányos monarchiát vezettek be, amely korlátozta, de nem szüntette meg a királyi hatalmat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi vezetett a köztársaság kikiáltásához Franciaországban 1792-ben?",
        options: [
          "a külső háborús fenyegetés és a belső radikalizálódás",
          "XVI. Lajos önkéntes lemondása",
          "Napóleon hatalomátvétele",
          "a tridenti zsinat döntése",
        ],
        correct_answer: "a külső háborús fenyegetés és a belső radikalizálódás",
        explanation: "1792-ben a külső háborús fenyegetés és a belső radikalizálódás közepette kikiáltották a köztársaságot.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen kormányzati forma követte Robespierre bukását 1794 után?",
        options: ["a Directórium", "a jakobinus diktatúra megerősödése", "a visszaállított monarchia", "Napóleon konzulátusa azonnal"],
        correct_answer: "a Directórium",
        explanation: "Robespierre bukása után egy mérsékeltebb kormányzati forma, a Directórium (1795-1799) következett.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kiket képviselt elsősorban a Directórium (1795-1799) instabil és korrupt kormányzati rendszere?",
        options: ["a felső polgárságot", "a jobbágyságot", "a papságot", "a nemesi arisztokráciát"],
        correct_answer: "a felső polgárságot",
        explanation: "A Directórium elsősorban a felső polgárságot képviselte, és instabil, korrupt rendszer volt.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "ii-rakoczi-ferenc-szabadsagharca",
    title: "II. Rákóczi Ferenc szabadságharca",
    level: "mindketto",
    theme: "Kora újkor és felvilágosodás",
    order_index: 16,
    summary_markdown:
      "A Habsburg abszolutizmus és a súlyos adóterhek elleni 1703-as felkelésből kibontakozó Rákóczi-szabadságharc a magyar rendi jogok védelméért folytatott nyolc éves küzdelem volt, amely a szatmári békével (1711) kompromisszummal zárult.",
    content_markdown: `
## Az előzmények

A törökök 17. század végi kiűzése után a Habsburg udvar Magyarországot "fegyverrel visszafoglalt" (nem pedig szövetséges) tartományként kezelte: súlyos hadiadókat vetett ki, korlátozta a rendi jogokat, és a protestáns vallásgyakorlást is háttérbe szorította. Ez a politika — a hosszú hódoltsági pusztítás utáni gazdasági-társadalmi nehézségekkel párosulva — széleskörű elégedetlenséget szült a magyar társadalom minden rétegében, a jobbágyoktól a nemességig.

## A felkelés kirobbanása

1703 tavaszán a Tiszaháton fellázadt jobbágyok, elbocsátott végvári katonák és Thököly-hívek küldöttei **II. Rákóczi Ferenchez** fordultak, felkérve őt a mozgalom vezetésére. Rákóczi — aki korábban lengyelországi emigrációban élt — elfogadta a felkérést, és 1703 nyarán hazatérve átvette a **kuruc** felkelés vezetését. Még ugyanebben az évben kiadta az ún. **vetési pátenst**, amelyben szabadságot és a jobbágyi terhek alóli mentességet ígért mindazoknak a jobbágyoknak, akik csatlakoznak a szabadságharchoz — ez jelentősen megnövelte a mozgalom társadalmi támogatottságát.

## A szabadságharc kibontakozása

1704-re a kuruc erők jelentős területeket foglaltak el, és az erdélyi rendek fejedelemmé választották Rákóczit. Az **1705-ös szécsényi országgyűlésen** a rendek megalakították a magyar **konföderációt**: Rákóczit **vezérlő fejedelemmé** választották, mellé pedig egy 24 tagú **szenátust** állítottak — ezzel egy önálló, rendi alapú államszervezet körvonalazódott a Habsburgokkal szemben.

## A hanyatlás és a szatmári béke

A szabadságharc katonai fordulópontja az **1708-as trencséni vereség** volt, amely után a kuruc hadsereg fokozatosan veszített ütőképességéből, miközben a nemzetközi politikai helyzet (a remélt francia és orosz támogatás elmaradása) sem kedvezett Rákócziéknak. **1711. április 30-án**, a majtényi síkon a kuruc sereg — Rákóczi távollétében, Károlyi Sándor vezetésével — letette a fegyvert, és megkötötték a **szatmári békét** (Károlyi Sándor és Pálffy János gróf, a császári fél képviselője között).

## A szatmári béke tartalma

A szatmári béke kompromisszumos megoldás volt: a magyar rendek elfogadták a Habsburg uralmat, cserébe azonban a Habsburgok lemondtak az abszolutista berendezkedés bevezetéséről Magyarországon, és helyreállították a rendi jogokat és kiváltságokat (köztük a vallásszabadságot is). Ez a megegyezés hosszú távon biztosította Magyarország sajátos, a birodalmon belüli rendi különállását a következő évtizedekre.

## Rákóczi sorsa

**Rákóczi maga nem fogadta el a békét**: néhány hűséges hívével emigrációba vonult, előbb Lengyelországba, majd Franciaországba, végül az Oszmán Birodalomba, ahol **Rodostóban telepedett le**, és ott is halt meg **1735-ben** — sosem tért vissza Magyarországra.

## Jelentősége

A Rákóczi-szabadságharc a magyar rendi nemzet és a Habsburg abszolutizmus közötti nyolc éves fegyveres küzdelem volt, amely bár katonai vereséggel zárult, végül olyan politikai kompromisszumhoz (szatmári béke) vezetett, amely biztosította a magyar rendi alkotmányosság fennmaradását a birodalmon belül. Rákóczi alakja és a szabadságharc a magyar nemzeti öntudat és a Habsburg-ellenes hagyomány egyik legfontosabb történeti-szimbolikus referenciapontjává vált.
`,
    key_concepts: [
      "vetési pátens",
      "szécsényi országgyűlés (1705)",
      "vezérlő fejedelem",
      "trencséni vereség (1708)",
      "szatmári béke (1711)",
    ],
    source_refs: [
      { label: "A Rákóczi-szabadságharc (zanza.tv)", url: "https://zanza.tv/tortenelem/ujkor-magyarorszag-kora-ujkorban/rakoczi-szabadsagharc" },
      { label: "Rákóczi-szabadságharc (Wikipédia)", url: "https://hu.wikipedia.org/wiki/R%C3%A1k%C3%B3czi-szabads%C3%A1gharc" },
      { label: "Árulás vagy józan megfontolás döntött a Rákóczi-szabadságharc sorsáról? (Múlt-kor)", url: "https://m.mult-kor.hu/arulas-vagy-jozan-megfontolas-dontott-a-rakoczi-szabadsagharc-sorsarol-20220430" },
      { label: "A Rákóczi szabadságharc 1703-1711 – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/tortenelem/a-rakoczi-szabadsagharc-1703-1711/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit ígért a vetési pátens a csatlakozó jobbágyoknak?",
        options: [
          "szabadságot és a jobbágyi terhek alóli mentességet",
          "földtulajdont a nemesektől elkobzott birtokokból",
          "adómentességet csak egy évre",
          "katonai rangot"
        ],
        correct_answer: "szabadságot és a jobbágyi terhek alóli mentességet",
        explanation: "A vetési pátens szabadságot és jobbágyi terhek alóli mentességet ígért a szabadságharchoz csatlakozó jobbágyoknak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történt az 1705-ös szécsényi országgyűlésen?",
        options: [
          "megalakult a konföderáció, Rákóczit vezérlő fejedelemmé választották",
          "aláírták a szatmári békét",
          "Rákóczit magyar királlyá koronázták",
          "eltörölték a jobbágyságot"
        ],
        correct_answer: "megalakult a konföderáció, Rákóczit vezérlő fejedelemmé választották",
        explanation: "A szécsényi országgyűlésen alakult meg a magyar konföderáció, Rákóczit vezérlő fejedelemmé, mellé 24 tagú szenátust választva.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik vereség volt a szabadságharc katonai fordulópontja?",
        options: ["a trencséni vereség (1708)", "a mohácsi csata", "a majtényi síkon vívott csata", "a nándorfehérvári ostrom"],
        correct_answer: "a trencséni vereség (1708)",
        explanation: "Az 1708-as trencséni vereség után a kuruc hadsereg fokozatosan veszített ütőképességéből.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit tartalmazott a szatmári béke (1711)?",
        options: [
          "a rendek elfogadták a Habsburg uralmat, cserébe helyreállt a rendi jogok és a vallásszabadság",
          "Magyarország teljes függetlenséget kapott",
          "Rákóczi lett Magyarország királya",
          "a jobbágyság teljes felszabadítását"
        ],
        correct_answer: "a rendek elfogadták a Habsburg uralmat, cserébe helyreállt a rendi jogok és a vallásszabadság",
        explanation: "A szatmári béke kompromisszum volt: a rendek elfogadták a Habsburg uralmat, de a Habsburgok lemondtak az abszolutizmusról Magyarországon.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol halt meg II. Rákóczi Ferenc 1735-ben?",
        options: ["Rodostóban (Oszmán Birodalom)", "Bécsben", "Párizsban", "Lengyelországban"],
        correct_answer: "Rodostóban (Oszmán Birodalom)",
        explanation: "Rákóczi nem fogadta el a szatmári békét, emigrációba vonult, és végül Rodostóban telepedett le, ahol 1735-ben meghalt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan kezelte a Habsburg udvar Magyarországot a törökök 17. század végi kiűzése után?",
        options: [
          "\"fegyverrel visszafoglalt\" tartományként",
          "egyenrangú szövetséges államként",
          "önálló, független királyságként",
          "az Oszmán Birodalom vazallusaként",
        ],
        correct_answer: "\"fegyverrel visszafoglalt\" tartományként",
        explanation: "A Habsburg udvar Magyarországot \"fegyverrel visszafoglalt\" (nem pedig szövetséges) tartományként kezelte.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen politikát folytatott a Habsburg udvar, amely széleskörű elégedetlenséget szült a magyar társadalomban?",
        options: [
          "súlyos hadiadók kivetése, a rendi jogok korlátozása és a protestáns vallásgyakorlás háttérbe szorítása",
          "a rendi jogok kiterjesztése és adócsökkentés",
          "a jobbágyság teljes felszabadítása",
          "a katolikus egyház jogainak korlátozása",
        ],
        correct_answer: "súlyos hadiadók kivetése, a rendi jogok korlátozása és a protestáns vallásgyakorlás háttérbe szorítása",
        explanation: "A Habsburg udvar súlyos hadiadókat vetett ki, korlátozta a rendi jogokat, és háttérbe szorította a protestáns vallásgyakorlást.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol fordultak 1703 tavaszán a fellázadt jobbágyok és végvári katonák II. Rákóczi Ferenchez?",
        options: ["a Tiszaháton", "a Dunántúlon", "Erdélyben", "a Felvidéken"],
        correct_answer: "a Tiszaháton",
        explanation: "1703 tavaszán a Tiszaháton fellázadt jobbágyok, elbocsátott végvári katonák és Thököly-hívek küldöttei fordultak Rákóczihoz.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol élt Rákóczi, mielőtt 1703-ban hazatért és átvette a felkelés vezetését?",
        options: ["lengyelországi emigrációban", "bécsi fogságban", "franciaországi emigrációban", "rodostói száműzetésben"],
        correct_answer: "lengyelországi emigrációban",
        explanation: "Rákóczi korábban lengyelországi emigrációban élt, mielőtt elfogadta a felkérést és hazatért.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan nevezték Rákóczi felkelőit?",
        options: ["kurucoknak", "hajdúknak", "labancoknak", "huszitáknak"],
        correct_answer: "kurucoknak",
        explanation: "Rákóczi 1703-ban átvette a kuruc felkelés vezetését.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi történt 1704-re a kuruc erőkkel és Rákóczival Erdélyben?",
        options: [
          "jelentős területeket foglaltak el, és az erdélyi rendek fejedelemmé választották Rákóczit",
          "a kuruc sereg teljes vereséget szenvedett",
          "Rákóczi feladta a felkelés vezetését",
          "megkötötték a szatmári békét",
        ],
        correct_answer: "jelentős területeket foglaltak el, és az erdélyi rendek fejedelemmé választották Rákóczit",
        explanation: "1704-re a kuruc erők jelentős területeket foglaltak el, és az erdélyi rendek fejedelemmé választották Rákóczit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány tagú szenátust állítottak Rákóczi mellé az 1705-ös szécsényi országgyűlésen?",
        options: ["24 tagút", "12 tagút", "50 tagút", "10 tagút"],
        correct_answer: "24 tagút",
        explanation: "A szécsényi országgyűlésen Rákóczit vezérlő fejedelemmé választották, mellé egy 24 tagú szenátust állítottak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen remélt külföldi támogatás elmaradása is hozzájárult a szabadságharc hanyatlásához?",
        options: ["a francia és orosz támogatás elmaradása", "az angol és holland támogatás elmaradása", "a porosz és svéd támogatás elmaradása", "a velencei és spanyol támogatás elmaradása"],
        correct_answer: "a francia és orosz támogatás elmaradása",
        explanation: "A remélt francia és orosz támogatás elmaradása nem kedvezett Rákócziéknak a szabadságharc hanyatlása idején.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki vezette a kuruc sereget a fegyverletételkor a majtényi síkon, Rákóczi távollétében?",
        options: ["Károlyi Sándor", "Pálffy János", "Thököly Imre", "Bercsényi Miklós"],
        correct_answer: "Károlyi Sándor",
        explanation: "1711. április 30-án a majtényi síkon a kuruc sereg Rákóczi távollétében, Károlyi Sándor vezetésével tette le a fegyvert.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt a császári fél képviselője a szatmári béke megkötésekor?",
        options: ["Pálffy János gróf", "Mazarin bíboros", "Habsburg Ferdinánd", "Odoaker"],
        correct_answer: "Pálffy János gróf",
        explanation: "A szatmári békét Károlyi Sándor és Pálffy János gróf, a császári fél képviselője kötötte meg.",
        difficulty: 3,
      },
    ],
  },
];
