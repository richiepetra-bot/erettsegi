import { TopicSeed } from "./angol";

export const magyarPortrekTopics: TopicSeed[] = [
  {
    slug: "balassi-balint-kolteszete",
    title: "Balassi Bálint szerelmi és vitézi költészete",
    level: "mindketto",
    theme: "Portrék",
    order_index: 7,
    summary_markdown:
      "Az első jelentős magyar nyelvű lírikus, a reneszánsz katonaköltő. Költészete három nagy témakörre tagolódik: szerelmi, vitézi és istenes versek — mindezt saját maga alkotta, jellegzetes strófaformában, a Balassi-strófában.",
    content_markdown: `
## Élete és pályaképe

Balassi Bálint 1554-ben született főúri családban. Élete kalandos és viharos volt: birtokpereket folytatott, több házasságot kötött (köztük unokahúgával, Dobó Krisztinával, ami komoly botrányt és egyházi eljárást is eredményezett), és végvári vitézként harcolt a törökök ellen. Sokszor váltott hitet, politikai és katonai szövetségest (volt Habsburg-, majd Báthory-párti is), ami korának jellemző, kiszámíthatatlan főúri-katonai léthelyzetét tükrözi. 1594-ben, Esztergom visszafoglalásának ostrománál szerzett sebesülésébe halt bele — élete és halála egyaránt a kor végvári, harcokkal teli valóságát testesíti meg.

Balassi költészete életében nem jelent meg nyomtatásban: versei kéziratban, az ún. **Balassi-kódexben** maradtak fenn, amelyet csak jóval később, 1874-ben fedeztek fel és adtak ki nyomtatásban — így életműve évszázadokon át gyakorlatilag ismeretlen maradt a magyar irodalmi köztudat számára, és csak a 19. század végétől kezdve épült be az irodalomtörténeti kánonba.

## Költészetének három nagy témaköre

Balassi maga rendezte kötetbe verseit egy tudatos, szimbolikus életút-elbeszélés szerint, amely az ifjúkori szerelemtől a férfikori hősiességen át az öregkori megtérésig ível:

- **Szerelmi versek**: az Anna-versek (a viszonzatlan szerelem és az udvarló hagyomány szerint megszólított hölgy, "Júlia" álnéven is szerepel) és a későbbi Célia-versek (egy másik, érettebb szerelmi kapcsolat versciklusa) — ezekben Balassi az európai reneszánsz szerelmi líra (petrarkizmus) formakincsét (idealizált nőalak, a szerelem mint szenvedés és üdvözülés egyszerre) honosítja meg magyar nyelven.
- **Vitézi versek**: a végvári élet dicsőítése, a katonai hivatás és a hazáért/hitért vívott harc eszményítése — legismertebb ilyen verse az *Egy katonaének* ("Vitézek, mi lehet ez széles föld felett szebb dolog a végeknél..."), amely a végvári vitézi életet a kor legszebb, legdicsőbb hivatásaként állítja be, annak minden veszélyével együtt.
- **Istenes versek**: bűnbánó, könyörgő, Istenhez forduló énekek, amelyek a szerelmi és vitézi élet "bűneinek" beismerése után a megtérés és a kegyelemért való könyörgés hangját szólaltatják meg.

## A Balassi-strófa

Balassi legfontosabb formai újítása az ún. **Balassi-strófa**: egy általa alkotott, kilenc soros versszakforma, amelyben a sorok 6-6-7 szótagosak, és páronkénti belső rímeléssel (a-a-b, c-c-b, d-d-b rímképlet) rendelkeznek. Ez a bonyolult, zenei hatású versforma egyedülálló a magyar irodalomtörténetben, és Balassi verseinek jelentős részét jellemzi.

## Kiemelt művek

**Egy katonaének** — a végvári vitézi élet apoteózisa: a vers a csillagos ég alatti, harcban és barátságban eltöltött élet szépségét dicsőíti, szemben a kényelmes, de dicstelen élettel.

**Hogy Júliára talála, így köszöne neki** — a szerelmi témájú versek egyik jellegzetes darabja, amelyben a petrarkista hagyomány szerint a szerelmes a "napnál is szebb" hölgyhöz fordul, isteni-transzcendens minőségeket tulajdonítva neki.

**Adj már csendességet** — istenes vers, amelyben a lírai én lelki nyugalomért, békéért könyörög Istenhez, számot vetve addigi bűnös életével.

## Jelentősége

Balassi Bálint a magyar nyelvű reneszánsz líra megteremtője: ő honosította meg a magyar költészetben az európai reneszánsz szerelmi líra (petrarkizmus) formakincsét, miközben egyedi, magyar strófaformát is alkotott. Bár életében kéziratban maradt életműve, a 19-20. század irodalomtörténet-írása és -oktatása révén ma a magyar líra egyik alapító atyjaként tartják számon, aki elsőként teremtett igazán magas színvonalú, egyéni hangú magyar nyelvű költészetet.
`,
    key_concepts: [
      "reneszánsz líra",
      "Balassi-strófa",
      "petrarkizmus",
      "vitézi ének",
      "Balassi-kódex",
    ],
    source_refs: [
      { label: "Balassi Bálint összes költeményei (MEK)", url: "https://mek.oszk.hu/00600/00609/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Balassi Bálint (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Balassi_B%C3%A1lint" },
      { label: "Balassi Bálint – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/konyvtar/balassi-balint/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen kéziratos gyűjteményben maradtak fenn Balassi Bálint versei?",
        options: ["Balassi-kódex", "Toldy-kódex", "Vitkovics-kódex", "Bornemisza-kódex"],
        correct_answer: "Balassi-kódex",
        explanation: "Balassi versei kéziratban, a Balassi-kódexben maradtak fenn, amelyet csak 1874-ben fedeztek fel és adtak ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik a Balassi által megalkotott, jellegzetes versszakforma?",
        options: ["Balassi-strófa", "szapphói strófa", "Zrínyi-strófa", "alkaioszi strófa"],
        correct_answer: "Balassi-strófa",
        explanation: "A Balassi-strófa egy kilencsoros, jellegzetes rímképletű versszakforma, amelyet maga Balassi alkotott.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a három fő témaköre Balassi költészetének?",
        options: [
          "szerelmi, vitézi és istenes versek",
          "csak vallásos versek",
          "csak politikai versek",
          "csak természeti versek",
        ],
        correct_answer: "szerelmi, vitézi és istenes versek",
        explanation: "Balassi maga rendezte kötetbe verseit e három témakör szerint, szimbolikus életút-elbeszélést sugallva.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik verse dicsőíti a végvári vitézi életet?",
        options: ["Egy katonaének", "Adj már csendességet", "Hogy Júliára talála", "Borivóknak való"],
        correct_answer: "Egy katonaének",
        explanation: "Az Egy katonaének a végvári vitézi élet szépségét és dicsőségét énekli meg.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol és hogyan halt meg Balassi Bálint?",
        options: [
          "Esztergom ostrománál szerzett sebesülésébe halt bele",
          "békés öregkorban, birtokán halt meg",
          "Bécsben, udvari intrikák áldozataként",
          "egy párbajban vesztette életét",
        ],
        correct_answer: "Esztergom ostrománál szerzett sebesülésébe halt bele",
        explanation: "Balassi 1594-ben, Esztergom visszafoglalásának ostrománál szerzett sebesülésébe halt bele.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben született Balassi Bálint?",
        options: ["1554-ben", "1494-ben", "1600-ban", "1620-ban"],
        correct_answer: "1554-ben",
        explanation: "Balassi Bálint 1554-ben született főúri családban.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen botrányt keltett Balassi egyik házassága?",
        options: [
          "unokahúgával, Dobó Krisztinával kötött házassága egyházi eljárást is eredményezett",
          "titkos házassága egy jobbágylánnyal",
          "többnejűsége",
          "lánya elszöktetése",
        ],
        correct_answer: "unokahúgával, Dobó Krisztinával kötött házassága egyházi eljárást is eredményezett",
        explanation: "Balassi több házasságot kötött, köztük unokahúgával, Dobó Krisztinával, ami komoly botrányt és egyházi eljárást eredményezett.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért jellemző Balassi életére a kiszámíthatatlan politikai-katonai szövetségváltás?",
        options: [
          "hol Habsburg-, hol Báthory-párti volt",
          "mindig hűséges maradt egyetlen uralkodóhoz",
          "soha nem vett részt politikai küzdelmekben",
          "kizárólag egyházi szolgálatban állt",
        ],
        correct_answer: "hol Habsburg-, hol Báthory-párti volt",
        explanation: "Balassi sokszor váltott hitet, politikai és katonai szövetségest, hol Habsburg-, majd Báthory-párti volt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor fedezték fel és adták ki nyomtatásban a Balassi-kódexet, amely évszázadokig ismeretlenné tette költészetét?",
        options: ["1874-ben", "1600-ban", "1750-ben", "1920-ban"],
        correct_answer: "1874-ben",
        explanation: "A Balassi-kódexet csak 1874-ben fedezték fel és adták ki nyomtatásban.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen elrendezési logika szerint állította össze Balassi saját versgyűjteményét?",
        options: [
          "egy szimbolikus életút-elbeszélés szerint (ifjúkori szerelemtől az öregkori megtérésig)",
          "időrendi sorrendben, keletkezésük szerint",
          "kizárólag témák szerinti véletlenszerű csoportosításban",
          "a hölgyek neve szerinti betűrendben",
        ],
        correct_answer: "egy szimbolikus életút-elbeszélés szerint (ifjúkori szerelemtől az öregkori megtérésig)",
        explanation: "Balassi maga rendezte kötetbe verseit egy tudatos, szimbolikus életút-elbeszélés szerint.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik szerelmi verscsoportja a Júlia álnéven megszólított hölgyhöz, illetve egy másik, érettebb kapcsolathoz kötődik?",
        options: ["az Anna- és Célia-versek", "a Léda- és Csinszka-versek", "a Lilla-versek", "a Flóra-versek"],
        correct_answer: "az Anna- és Célia-versek",
        explanation: "Az Anna-versek (Júlia álnéven is) és a későbbi Célia-versek Balassi szerelmi költészetének fő csoportjai.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen európai költészeti hagyomány formakincsét honosította meg Balassi a szerelmi verseiben?",
        options: [
          "a petrarkizmus",
          "a klasszicizmus horatiusi ódaköltészete",
          "a francia szimbolizmus",
          "az antik eposzi hagyomány",
        ],
        correct_answer: "a petrarkizmus",
        explanation: "Balassi az európai reneszánsz szerelmi líra (petrarkizmus) formakincsét honosította meg magyar nyelven.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány soros és milyen szótagszámú sorokból áll a Balassi-strófa?",
        options: [
          "kilenc soros, 6-6-7 szótagos sorokból",
          "négy soros, 8-8-8-8 szótagos sorokból",
          "tizennégy soros, szonettformában",
          "hat soros, hexameterben",
        ],
        correct_answer: "kilenc soros, 6-6-7 szótagos sorokból",
        explanation: "A Balassi-strófa egy kilenc soros versszakforma, amelyben a sorok 6-6-7 szótagosak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik istenes versében könyörög a lírai én lelki nyugalomért, számot vetve bűnös életével?",
        options: ["Adj már csendességet", "Egy katonaének", "Hogy Júliára talála", "Célia-versek"],
        correct_answer: "Adj már csendességet",
        explanation: "Az Adj már csendességet istenes vers, amelyben a lírai én lelki nyugalomért, békéért könyörög Istenhez.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikortól épült be igazán Balassi életműve a magyar irodalomtörténeti kánonba?",
        options: ["csak a 19. század végétől", "már saját életében", "a 17. század folyamán", "a felvilágosodás korában"],
        correct_answer: "csak a 19. század végétől",
        explanation: "Bár Balassi életében kéziratban maradt életműve, csak a 19. század végétől épült be az irodalomtörténeti kánonba.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "csokonai-vitez-mihaly-kolteszete",
    title: "Csokonai Vitéz Mihály költészete",
    level: "mindketto",
    theme: "Portrék",
    order_index: 8,
    summary_markdown:
      "A felvilágosodás korának sokoldalú, rövid életű zsenije. Rokokó könnyedség, filozofikus mélység és komikus eposzi hagyomány ötvöződik költészetében, amelynek középpontjában a Lilla-szerelem verscsokra áll.",
    content_markdown: `
## Élete és pályaképe

Csokonai Vitéz Mihály 1773-ban született Debrecenben. Rendkívüli tehetsége már gyerekként megmutatkozott: a Debreceni Református Kollégium diákjaként, majd fiatal tanáraként is kiemelkedett, de radikális, felvilágosult nézetei és rendhagyó életvitele miatt végül eltávolították tanári posztjáról. Ezután vándorló, bizonytalan egzisztenciájú életet élt: hol Debrecenben, hol vidéki birtokokon (nevelőként), hol Pesten próbált megélhetést találni, sikertelenül pályázva állandó álláshelyekre és irodalmi elismerésre.

1796-ban Komáromban ismerte meg Vajda Juliannát, akit "Lilla" néven örökített meg szerelmi költészetében; a kapcsolat a lány családjának ellenállása miatt (Csokonai anyagi bizonytalansága miatt) végül nem vezetett házassághoz, ez a csalódás ihlette a Lilla-versek fájdalmasabb, elégikus darabjait. Élete végéig szegénységben, gyakran betegen (tüdőbajjal küzdve) élt, és 1805-ben, mindössze 32 évesen halt meg szülővárosában, Debrecenben.

## Korszakok és stílusirányzatok

Csokonai költészete rendkívül sokszínű, több stílusirányzatot ötvöz: a **rokokó** könnyedségét és játékosságát, a **klasszicizmus** formai fegyelmét, valamint a **felvilágosodás** filozofikus-racionalista eszmerendszerét. Ez a sokoldalúság teszi életművét egyedülállóvá a magyar irodalomtörténetben — nem sorolható be egyértelműen egyetlen irányzatba sem.

- **Dalköltészet és a Lilla-versek**: a Vajda Juliannához (Lillához) fűződő szerelem verscsokra, amely a boldog szerelmi együttléttől a csalódás és a lemondás hangjáig ível.
- **Filozofikus-leíró költemények**: a felvilágosodás eszméinek (természet, ész, boldogságkeresés) megszólaltatása, gyakran leíró-elmélkedő formában.
- **Komikus eposz**: a klasszikus eposzi hagyomány paródiája, amelyben hétköznapi, alacsonyabb rendű témát dolgoz fel patetikus, magasztos stílusban.

## Kiemelt művek

**Tartózkodó kérelem** — a Lilla-versek egyik legismertebb darabja: a lírai én finom, visszafogott, ugyanakkor szenvedélyes vallomása szerelméről, amelyben a "Jaj, meghalok" felkiáltás a szerelmi vágy és a társadalmi konvenciók közötti feszültséget fejezi ki.

**A Reményhez** — filozofikus-elégikus költemény, amelyben a lírai én a Reményt mint megcsaló, hiú illúziót szólítja meg, saját csalódásainak (elsősorban a Lillával kapcsolatos) tükrében.

**Az estve** — a felvilágosodás természet- és társadalomfilozófiájának verses megfogalmazása: az est csendjében elmélkedő lírai én az egyenlőség, a természet harmóniája és az emberi társadalom igazságtalanságai (a magántulajdon, a kiváltságok) közötti ellentétet fogalmazza meg.

**Dorottya, vagyis a dámák diadalma a fársángon** (1804) — komikus eposz, amely egy vidéki farsangi bál (és egy hozzá kapcsolódó, férjre vágyó idősödő hölgy, Dorottya) történetét meséli el az eposzi hagyomány (invokáció, isteni beavatkozás, magasztos stílus) paródiájaként — a téma triviálissága és a forma fennkölt volta közötti kontraszt adja a komikumot.

## Stílus

Csokonai verselése rendkívül változatos: egyaránt ért a népdalszerű egyszerűséghez és a bonyolult, antikizáló versformákhoz. Nyelvezete gazdag, sokszor játékos, alliterációkban és hangfestő elemekben bővelkedik — ebben is a rokokó könnyedség és a klasszicista forma-tudatosság ötvöződik.

## Jelentősége

Csokonai Vitéz Mihály a magyar felvilágosodás korának egyik legsokoldalúbb, legtehetségesebb költője, akinek rövid életműve ellenére is rendkívül gazdag és sokrétű hagyatéka a magyar líra és az elbeszélő költészet egyaránt meghatározó fejezete. Stílusbeli sokszínűsége és filozofikus mélysége miatt a magyar felvilágosodás egyik legfontosabb, legmodernebb hangú alkotójaként tartják számon.
`,
    key_concepts: [
      "felvilágosodás",
      "rokokó",
      "Lilla-versek",
      "komikus eposz",
      "klasszicizmus",
    ],
    source_refs: [
      { label: "Csokonai Vitéz Mihály összes költeményei (MEK)", url: "https://mek.oszk.hu/00600/00636/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Csokonai Vitéz Mihály (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Csokonai_Vit%C3%A9z_Mih%C3%A1ly" },
      { label: "Csokonai Vitéz Mihály – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/konyvtar/csokonai-vitez-mihaly/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Ki volt Lilla, akihez Csokonai szerelmi verseinek jelentős része íródott?",
        options: ["Vajda Julianna", "Szendrey Júlia", "Dobó Krisztina", "Károlyi Georgina"],
        correct_answer: "Vajda Julianna",
        explanation: "Lilla valódi neve Vajda Julianna volt, akit Csokonai 1796-ban Komáromban ismert meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik műve komikus eposz, amely egy vidéki farsangi bál történetét dolgozza fel?",
        options: ["Dorottya", "Az estve", "A Reményhez", "Tartózkodó kérelem"],
        correct_answer: "Dorottya",
        explanation: "A Dorottya (1804) komikus eposz, amely az eposzi hagyomány paródiájaként dolgoz fel egy triviális témát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik intézményhez kötődött Csokonai diákként és tanárként is?",
        options: ["Debreceni Református Kollégium", "Sárospataki Kollégium", "Pázmány Péter Egyetem", "Selmecbányai Akadémia"],
        correct_answer: "Debreceni Református Kollégium",
        explanation: "Csokonai a Debreceni Református Kollégium diákja, majd fiatal tanára volt, mielőtt eltávolították.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen stílusirányzatok ötvöződnek jellemzően Csokonai költészetében?",
        options: [
          "rokokó, klasszicizmus és felvilágosodás eszméi",
          "kizárólag romantika",
          "kizárólag szimbolizmus",
          "kizárólag naturalizmus",
        ],
        correct_answer: "rokokó, klasszicizmus és felvilágosodás eszméi",
        explanation: "Csokonai sokszínű költészete a rokokó könnyedségét, a klasszicizmus formai fegyelmét és a felvilágosodás eszméit egyaránt ötvözi.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hány évesen halt meg Csokonai Vitéz Mihály?",
        options: ["32 évesen", "45 évesen", "26 évesen", "58 évesen"],
        correct_answer: "32 évesen",
        explanation: "Csokonai 1805-ben, mindössze 32 évesen halt meg szülővárosában, Debrecenben, tüdőbajban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik városban született Csokonai Vitéz Mihály 1773-ban?",
        options: ["Debrecenben", "Szegeden", "Komáromban", "Nagyváradon"],
        correct_answer: "Debrecenben",
        explanation: "Csokonai Vitéz Mihály 1773-ban született Debrecenben.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért távolították el Csokonait tanári posztjáról a Debreceni Református Kollégiumból?",
        options: [
          "radikális, felvilágosult nézetei és rendhagyó életvitele miatt",
          "mert nem volt elég tehetséges",
          "mert elköltözött külföldre",
          "betegsége miatt",
        ],
        correct_answer: "radikális, felvilágosult nézetei és rendhagyó életvitele miatt",
        explanation: "Radikális, felvilágosult nézetei és rendhagyó életvitele miatt végül eltávolították tanári posztjáról.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen élet jellemezte Csokonait tanári posztjának elvesztése után?",
        options: [
          "vándorló, bizonytalan egzisztenciájú élet, sikertelen álláspályázatokkal",
          "állandó, biztos egyetemi katedra",
          "meggazdagodás kereskedőként",
          "diplomáciai karrier",
        ],
        correct_answer: "vándorló, bizonytalan egzisztenciájú élet, sikertelen álláspályázatokkal",
        explanation: "Ezután vándorló, bizonytalan egzisztenciájú életet élt, sikertelenül pályázva állandó álláshelyekre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem vezetett házassághoz a Lillával (Vajda Juliannával) való kapcsolat?",
        options: [
          "a lány családjának ellenállása miatt, Csokonai anyagi bizonytalansága okán",
          "mert Csokonai szakított vele",
          "mert a lány korán meghalt",
          "mert a lány máshoz ment férjhez már korábban",
        ],
        correct_answer: "a lány családjának ellenállása miatt, Csokonai anyagi bizonytalansága okán",
        explanation: "A kapcsolat a lány családjának ellenállása miatt, Csokonai anyagi bizonytalansága okán nem vezetett házassághoz.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik versében fejezi ki a \"Jaj, meghalok\" felkiáltás a szerelmi vágy és a társadalmi konvenciók közötti feszültséget?",
        options: ["Tartózkodó kérelem", "A Reményhez", "Az estve", "Dorottya"],
        correct_answer: "Tartózkodó kérelem",
        explanation: "A Tartózkodó kérelemben a 'Jaj, meghalok' felkiáltás a szerelmi vágy és a konvenciók feszültségét fejezi ki.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik versében szólítja meg a lírai én a Reményt mint megcsaló, hiú illúziót?",
        options: ["A Reményhez", "Tartózkodó kérelem", "Az estve", "Dorottya"],
        correct_answer: "A Reményhez",
        explanation: "A Reményhez című versben a lírai én a Reményt mint megcsaló, hiú illúziót szólítja meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen társadalomfilozófiai kérdéseket vet fel Az estve című költemény?",
        options: [
          "az egyenlőség és a magántulajdon, a kiváltságok igazságtalansága",
          "a szerelmi csalódás fájdalmát",
          "a vidéki élet unalmát",
          "a nemzeti múlt dicsőségét",
        ],
        correct_answer: "az egyenlőség és a magántulajdon, a kiváltságok igazságtalansága",
        explanation: "Az estve az egyenlőség, a természet harmóniája és a magántulajdon, a kiváltságok igazságtalansága közötti ellentétet fogalmazza meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen betegségben szenvedett Csokonai élete végéig, ami korai halálát is okozta?",
        options: ["tüdőbaj", "szívbetegség", "vakság", "epilepszia"],
        correct_answer: "tüdőbaj",
        explanation: "Csokonai élete végéig szegénységben, gyakran tüdőbajjal küzdve élt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen stiláris eszközökben bővelkedik Csokonai nyelvezete, amely rokokó könnyedségét is jellemzi?",
        options: [
          "alliterációk és hangfestő elemek",
          "kizárólag latin idézetek",
          "archaikus, nyelvújítás előtti szóalakok",
          "idegen nyelvű betétek",
        ],
        correct_answer: "alliterációk és hangfestő elemek",
        explanation: "Nyelvezete gazdag, sokszor játékos, alliterációkban és hangfestő elemekben bővelkedik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen évben ismerte meg Csokonai Vajda Juliannát (\"Lillát\") Komáromban?",
        options: ["1796-ban", "1805-ben", "1773-ban", "1790-ben"],
        correct_answer: "1796-ban",
        explanation: "1796-ban Komáromban ismerte meg Vajda Juliannát, akit Lilla néven örökített meg.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "berzsenyi-daniel-odakolteszete",
    title: "Berzsenyi Dániel ódaköltészete",
    level: "mindketto",
    theme: "Portrék",
    order_index: 9,
    summary_markdown:
      "A klasszicizmus magyar ódaköltészetének mestere, a \"niklai remete\". Antikizáló versformákban fogalmazza meg a nemzet erkölcsi hanyatlása fölötti aggodalmát és a mulandóság fölötti elégikus elmélkedését.",
    content_markdown: `
## Élete és pályaképe

Berzsenyi Dániel 1776-ban született dunántúli nemesi családban. Tanulmányait Sopronban végezte, majd — apjával való konfliktusa után rövid katonáskodást követően — Somogy megyei birtokán, Niklán gazdálkodott, jórészt visszavonultan, a szélesebb irodalmi élettől távol. Ez a magányos, elzárkózó életforma szerezte meg számára a "niklai remete" elnevezést. Verseit sokáig csak kéziratban, szűk baráti körben ismerték, mígnem Kölcsey Ferenc közbenjárására megjelent első kötete 1813-ban.

Pályáját megrázó fordulat érte 1817-ben, amikor Kölcsey Ferenc szigorú, formai és tartalmi hibákat is felvető kritikát írt költészetéről a Tudományos Gyűjteményben. Bár a kritika ma már inkább a fiatal, más esztétikai elveket valló nemzedék és az idősebb költő közötti szemléletbeli különbségként értékelhető, Berzsenyit mélyen megrendítette: évekig szinte elnémult, és később verseit is átdolgozta, felülvizsgálta. 1836-ban hunyt el.

## Ódaköltészete: forma és téma

Berzsenyi verselése klasszicista-antikizáló: gyakran alkalmazza az **alkaioszi** és **szapphói versformát**, amelyeket a horatiusi ódaköltészet mintájára ültetett át a magyar nyelvbe — ez rendkívüli formai fegyelmet és nyelvi tömörséget igényelt, amivel Berzsenyi a magyar nyelv zeneiségének és kifejezőerejének új dimenzióit tárta fel.

- **Nemzetféltő, intő ódák**: a nemzet erkölcsi és politikai hanyatlása fölötti aggodalom, a fényűzés és a hazafiúi erények elvesztése miatti kritika (*A magyarokhoz I.*) — ezek a versek a klasszikus római (Horatius) hagyomány mintájára a közösség erkölcsi állapotát ostorozzák.
- **Elégikus, filozofikus ódák**: a mulandóság, az élet és a természet ciklikusságának elmélkedő megfogalmazása (*A közelítő tél*) — ezekben a versekben a táj (az őszülő, hervadó természet) az emberi élet mulandóságának metaforájává válik.
- **Episztolák**: barátaihoz, kortársaihoz írt verses levelek, amelyek személyesebb hangvételűek, mint a nagy ódák.

## Kiemelt művek

**A magyarokhoz I.** — a nemzet erkölcsi hanyatlása fölötti aggodalom verse: Berzsenyi a történelmi múlt (a honfoglalás és az államalapítás kori erények) és a jelen (fényűzés, elpuhultság) szembeállításával inti a nemzetet a bukás veszélyére — a vers zárt, feszes szerkezete és antikizáló formája a mondanivaló súlyát erősíti.

**A közelítő tél** — az egyik legismertebb elégikus óda: a táj őszi-téli hervadása és az emberi öregedés, mulandóság párhuzama adja a vers alapszerkezetét ("Hervad már ligetünk, s díszei hullanak...") — a természeti kép és a filozofikus elmélkedés szoros összefonódása jellemző rá.

**Osztályrészem** — személyesebb hangú elégia saját sorsáról: a magányos, vidéki, a szélesebb irodalmi élettől távoli élet elfogadásának és egyben fájdalmának megfogalmazása.

## Stílus

Berzsenyi költészetét rendkívüli nyelvi tömörség, képi gazdagság és zeneiség jellemzi. Az antik (görög-római) versformák tudatos alkalmazása egyedülálló teljesítmény a korabeli magyar költészetben — kortársai közül kevesen birkóztak meg ilyen biztonsággal ezekkel a rendkívül szigorú formai követelményekkel.

## Jelentősége

Berzsenyi Dániel a magyar klasszicista ódaköltészet csúcsteljesítménye: az antik versformák magyar nyelvre ültetése és a nemzetféltő-elégikus hangvétel ötvözete olyan egyedi költői teljesítményt hozott létre, amely a magyar líratörténet egyik legfontosabb, formailag legigényesebb fejezetét jelenti — hatása kimutatható a későbbi klasszicizáló magyar költészetre (pl. Vörösmarty korai ódáira) is.
`,
    key_concepts: [
      "klasszicizmus",
      "alkaioszi/szapphói versforma",
      "nemzetféltő óda",
      "elégia",
      "mulandóság",
    ],
    source_refs: [
      { label: "Berzsenyi Dániel összes versei (MEK)", url: "https://mek.oszk.hu/00600/00614/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Berzsenyi Dániel (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Berzsenyi_D%C3%A1niel" },
      { label: "Berzsenyi Dániel – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/konyvtar/berzsenyi-daniel/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Milyen versformákat alkalmazott jellemzően Berzsenyi Dániel ódáiban?",
        options: [
          "alkaioszi és szapphói antik versformák",
          "kizárólag a Balassi-strófát",
          "kizárólag magyaros, ütemhangsúlyos verselést",
          "szabadverset",
        ],
        correct_answer: "alkaioszi és szapphói antik versformák",
        explanation: "Berzsenyi a horatiusi hagyomány mintájára az alkaioszi és szapphói versformát ültette át magyar nyelvre.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki írt megrázó kritikát Berzsenyi költészetéről 1817-ben?",
        options: ["Kölcsey Ferenc", "Kazinczy Ferenc", "Vörösmarty Mihály", "Arany János"],
        correct_answer: "Kölcsey Ferenc",
        explanation: "Kölcsey Ferenc szigorú kritikája mélyen megrendítette Berzsenyit, aki évekig szinte elnémult utána.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik verse a nemzet erkölcsi hanyatlása fölötti aggodalmat fogalmazza meg?",
        options: ["A magyarokhoz I.", "A közelítő tél", "Osztályrészem", "Levéltöredék barátnémhoz"],
        correct_answer: "A magyarokhoz I.",
        explanation: "A magyarokhoz I. a történelmi múlt erényeit állítja szembe a jelen fényűzésével és elpuhultságával.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen párhuzamra épül A közelítő tél című vers?",
        options: [
          "a táj őszi hervadása és az emberi öregedés/mulandóság között",
          "a tavasz és a szerelem között",
          "a háború és a béke között",
          "a város és a vidék között",
        ],
        correct_answer: "a táj őszi hervadása és az emberi öregedés/mulandóság között",
        explanation: "A vers a természeti kép (őszi-téli hervadás) és a filozofikus elmélkedés (mulandóság) szoros összefonódására épül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen elnevezéssel illették Berzsenyit visszavonult, niklai életmódja miatt?",
        options: ["a \"niklai remete\"", "a \"pesti bölcs\"", "a \"dunántúli sas\"", "a \"somogyi próféta\""],
        correct_answer: "a \"niklai remete\"",
        explanation: "Berzsenyi Niklán, a szélesebb irodalmi élettől visszavonultan gazdálkodott, ezért nevezték \"niklai remeté\"-nek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben született Berzsenyi Dániel?",
        options: ["1776-ban", "1817-ben", "1813-ban", "1836-ban"],
        correct_answer: "1776-ban",
        explanation: "Berzsenyi Dániel 1776-ban született dunántúli nemesi családban.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol gazdálkodott Berzsenyi Dániel visszavonultan, ami megszerezte neki a \"niklai remete\" elnevezést?",
        options: ["Somogy megyei birtokán, Niklán", "Sopron megyében", "Nagyszalontán", "Nyék községben"],
        correct_answer: "Somogy megyei birtokán, Niklán",
        explanation: "Berzsenyi Somogy megyei birtokán, Niklán gazdálkodott, jórészt visszavonultan.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kinek a közbenjárására jelent meg Berzsenyi első kötete 1813-ban?",
        options: ["Kölcsey Ferencé", "Kazinczy Ferencé", "Vörösmarty Mihályé", "Kisfaludy Károlyé"],
        correct_answer: "Kölcsey Ferencé",
        explanation: "Kölcsey Ferenc közbenjárására jelent meg Berzsenyi első kötete 1813-ban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hatással volt Berzsenyire Kölcsey 1817-es kritikája?",
        options: [
          "mélyen megrendítette, évekig szinte elnémult, és átdolgozta verseit",
          "fellelkesítette és új alkotói korszakot indított el",
          "közömbösen fogadta",
          "azonnal nyilvánosan visszavágott",
        ],
        correct_answer: "mélyen megrendítette, évekig szinte elnémult, és átdolgozta verseit",
        explanation: "Berzsenyit mélyen megrendítette a kritika: évekig szinte elnémult, és később verseit is átdolgozta.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen antik költő ódaköltészetének mintájára ültette át Berzsenyi az alkaioszi és szapphói versformákat magyar nyelvre?",
        options: ["Horatiusé", "Vergiliusé", "Homéroszé", "Ovidiusé"],
        correct_answer: "Horatiusé",
        explanation: "Berzsenyi a horatiusi ódaköltészet mintájára ültette át a magyar nyelvbe az alkaioszi és szapphói versformát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen műfajban írt Berzsenyi személyesebb hangvételű, barátaihoz szóló verses leveleket?",
        options: ["episztolák", "eklogák", "balladák", "szonettek"],
        correct_answer: "episztolák",
        explanation: "Berzsenyi episztolákat, barátaihoz, kortársaihoz írt verses leveleket is írt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben hunyt el Berzsenyi Dániel?",
        options: ["1836-ban", "1817-ben", "1805-ben", "1848-ban"],
        correct_answer: "1836-ban",
        explanation: "Berzsenyi Dániel 1836-ban hunyt el.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik verse a magányos, vidéki, irodalmi élettől távoli élet elfogadásáról és fájdalmáról szól személyes hangon?",
        options: ["Osztályrészem", "A magyarokhoz I.", "A közelítő tél", "Levéltöredék barátnémhoz"],
        correct_answer: "Osztályrészem",
        explanation: "Az Osztályrészem személyesebb hangú elégia saját, magányos, vidéki sorsáról.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen konfliktus után kezdett Berzsenyi rövid ideig katonáskodni, mielőtt Niklán gazdálkodni kezdett?",
        options: [
          "apjával való konfliktusa",
          "testvérével való vitája",
          "a helyi paptal való nézeteltérése",
          "birtokvitái a szomszédokkal",
        ],
        correct_answer: "apjával való konfliktusa",
        explanation: "Apjával való konfliktusa után rövid katonáskodást követően kezdett Niklán gazdálkodni.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik később nagy magyar költő korai ódáira volt kimutatható hatása Berzsenyi klasszicizáló formakultúrájának?",
        options: ["Vörösmarty Mihályéra", "Petőfi Sándoréra", "Arany Jánoséra", "Ady Endreéra"],
        correct_answer: "Vörösmarty Mihályéra",
        explanation: "Berzsenyi hatása kimutatható a későbbi klasszicizáló magyar költészetre, pl. Vörösmarty korai ódáira.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "vorosmarty-mihaly-eletmuve",
    title: "Vörösmarty Mihály: Szózat és Csongor és Tünde",
    level: "mindketto",
    theme: "Portrék",
    order_index: 10,
    summary_markdown:
      "A magyar reformkor nagy költője, a nemzeti romantika egyik megteremtője. A Szózat a nemzeti önazonosság máig élő himnikus verse, a Csongor és Tünde pedig a magyar drámairodalom egyik legfilozofikusabb tündérjátéka.",
    content_markdown: `
## Élete és pályaképe

Vörösmarty Mihály 1800-ban született Nyék községben (a mai Pusztavám-Kápolnásnyék), elszegényedő nemesi családban. Jogot tanult, majd nevelősködéssel kereste kenyerét, mielőtt teljesen az irodalomnak szentelte volna magát. A *Zalán futása* (1825) — a honfoglalás témáját feldolgozó nemzeti eposz — hozta meg számára a széles körű elismerést, és ezzel a reformkor egyik vezető költőjévé vált.

Vörösmarty nemcsak alkotóként, hanem szervezőként is meghatározó szerepet játszott a korabeli irodalmi életben: a Nemzeti Kör és több irodalmi társaság alapítója, illetve tagja volt, és ő fedezte fel, karolta fel a fiatal Petőfi Sándort és Arany Jánost is — mindkettejük indulásában döntő szerepe volt. Az 1848–49-es forradalom és szabadságharc idején aktívan részt vett a politikai életben (országgyűlési képviselőként is), emiatt a szabadságharc bukása után évekig bujdosnia, rejtőznie kellett a megtorlás elől. Ez az időszak és a nemzeti tragédia feldolgozása adja késői, komor hangvételű költészetének hátterét. 1855-ben hunyt el Pesten.

## Fő művei

**Zalán futása** (1825) — nemzeti eposz a honfoglalás témájáról, amely a klasszikus eposzi hagyomány (invokáció, csodás elemek, hősi cselekmény) alkalmazásával teremtette meg a magyar nemzeti múlt heroikus, eposzi ábrázolását — ezzel a művel vált Vörösmarty a kor vezető költőjévé.

**Szózat** (1836) — a magyar nemzeti önazonosság egyik legfontosabb, himnikus verse, amelyet gyakran "második nemzeti himnuszként" is emlegetnek (Erkel Ferenc zenésítette meg). A vers a hazához való hűség és önfeláldozás kötelességét fogalmazza meg, miközben a nemzet lehetséges bukásának tragikus lehetőségét is felveti ("Itt élned, halnod kell") — ezzel a buzdító-féltő kettősséggel a vers egyszerre hazafias program és tragikus elégia.

**Csongor és Tünde** (1830) — verses tündérdráma/mese, amely a boldogság és az emberi élet értelmének keresését dolgozza fel allegorikus, mesei formában: Csongor, a földi ifjú, Tündét (a tündérvilág lakóját) keresi, útja során három alakkal (Kalmár, Fejedelem, Tudós) találkozik, akik a földi élet hamis boldogság-eszméit (gazdagság, hatalom, tudás) testesítik meg — a mű végkicsengése szerint az igazi boldogság nem ezekben, hanem az emberi kapcsolatokban és a küzdelemben magában rejlik.

**A vén cigány** (1854) — Vörösmarty egyik legkésőbbi, legkomorabb verse: a szabadságharc bukása utáni kétségbeesés, sőt apokaliptikus-nihilista látomás verse, amelyben a világ egyetlen hatalmas, kaotikus "mulatsággá" (tánccá) válik — a vers zaklatott, vízió-szerű képei a személyes és nemzeti tragédia egyidejű feldolgozását szolgálják. A vers végén mégis felcsillan a remény: "Húzd rá, cigány, lesz még egyszer ünnep a világon."

## Stílus

Vörösmarty költészete a romantika jegyeit hordozza: gazdag, sokszor barokkos képalkotás, erős érzelmi töltés, a nemzeti múlt és a jelen drámai szembeállítása. Verselése formailag igényes, gyakran alkalmaz kötött, klasszicizáló formákat is, miközben a romantikus szenvedélyesség és képi gazdagság uralja verseit.

## Jelentősége

Vörösmarty Mihály a magyar romantika és a reformkori nemzeti költészet megteremtője: a Szózattal a nemzeti önazonosság egyik legfontosabb, mai napig élő szövegét alkotta meg, míg a Csongor és Tünde a magyar drámairodalom egyik legfilozofikusabb, legköltőibb darabja. Szervező-mecénási szerepe (Petőfi és Arany felkarolása) miatt a 19. századi magyar irodalmi élet egyik legmeghatározóbb alakjaként tartják számon.
`,
    key_concepts: [
      "nemzeti eposz",
      "romantika",
      "Szózat",
      "tündérdráma",
      "reformkor",
    ],
    source_refs: [
      { label: "Vörösmarty Mihály összes költeményei (MEK)", url: "https://mek.oszk.hu/01100/01122/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Vörösmarty Mihály (Wikipédia)", url: "https://hu.wikipedia.org/wiki/V%C3%B6r%C3%B6smarty_Mih%C3%A1ly" },
      { label: "Vörösmarty Mihály – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/konyvtar/vorosmarty-mihaly/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik művét is \"második nemzeti himnuszként\" szokták emlegetni?",
        options: ["Szózat", "Zalán futása", "Csongor és Tünde", "A vén cigány"],
        correct_answer: "Szózat",
        explanation: "A Szózatot (1836) Erkel Ferenc zenésítette meg, és a nemzeti önazonosság egyik legfontosabb himnikus verseként tartják számon.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen témát dolgoz fel a Csongor és Tünde?",
        options: [
          "a boldogság és az emberi élet értelmének keresését allegorikus, mesei formában",
          "a honfoglalás történetét",
          "egy valós történelmi csata eseményeit",
          "a reformkori országgyűlés vitáit",
        ],
        correct_answer: "a boldogság és az emberi élet értelmének keresését allegorikus, mesei formában",
        explanation: "A verses tündérdráma Csongor útját követi, aki a Kalmár, a Fejedelem és a Tudós hamis boldogság-eszméi közt keresi az igazi boldogságot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik két fiatal költőt karolta fel Vörösmarty Mihály?",
        options: ["Petőfi Sándort és Arany Jánost", "Ady Endrét és Babits Mihályt", "Kosztolányi Dezsőt és József Attilát", "Balassi Bálintot és Csokonai Vitéz Mihályt"],
        correct_answer: "Petőfi Sándort és Arany Jánost",
        explanation: "Vörösmarty döntő szerepet játszott mind Petőfi, mind Arany indulásában és elismertetésében.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen hangvételű Vörösmarty kései verse, A vén cigány?",
        options: [
          "apokaliptikus-nihilista, a szabadságharc bukása utáni kétségbeesést fejezi ki",
          "vidám, ünnepi hangvételű",
          "gyermeki, játékos hangvételű",
          "tisztán vallásos, dicsőítő hangvételű",
        ],
        correct_answer: "apokaliptikus-nihilista, a szabadságharc bukása utáni kétségbeesést fejezi ki",
        explanation: "A vers a nemzeti tragédia utáni kétségbeesést és kaotikus víziót fogalmaz meg, bár a végén felcsillan a remény.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik műve hozta meg Vörösmarty számára a széles körű elismerést 1825-ben?",
        options: ["Zalán futása", "Szózat", "Csongor és Tünde", "A vén cigány"],
        correct_answer: "Zalán futása",
        explanation: "A Zalán futása (1825), a honfoglalás témáját feldolgozó nemzeti eposz tette Vörösmartyt a kor vezető költőjévé.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol született Vörösmarty Mihály 1800-ban?",
        options: [
          "Nyék községben (a mai Pusztavám-Kápolnásnyék)",
          "Nagyszalontán",
          "Szekszárdon",
          "Debrecenben",
        ],
        correct_answer: "Nyék községben (a mai Pusztavám-Kápolnásnyék)",
        explanation: "Vörösmarty Mihály 1800-ban született Nyék községben, elszegényedő nemesi családban.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szervezői szerepet játszott Vörösmarty a korabeli irodalmi életben?",
        options: [
          "a Nemzeti Kör és több irodalmi társaság alapítója, illetve tagja volt",
          "kizárólag mecénásként, alkotói tevékenység nélkül",
          "a Magyar Tudományos Akadémia főtitkára volt",
          "a Nyugat folyóirat alapítója volt",
        ],
        correct_answer: "a Nemzeti Kör és több irodalmi társaság alapítója, illetve tagja volt",
        explanation: "Vörösmarty a Nemzeti Kör és több irodalmi társaság alapítója, illetve tagja volt.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kellett Vörösmartynak évekig bujdosnia az 1848–49-es szabadságharc bukása után?",
        options: [
          "aktív politikai szerepvállalása (országgyűlési képviselősége) miatt a megtorlás elől",
          "mert adósságai miatt menekülnie kellett",
          "mert külföldre emigrált véglegesen",
          "egészségügyi okokból vonult vissza",
        ],
        correct_answer: "aktív politikai szerepvállalása (országgyűlési képviselősége) miatt a megtorlás elől",
        explanation: "Aktív politikai szerepvállalása miatt (országgyűlési képviselőként is) a szabadságharc bukása után évekig bujdosnia, rejtőznie kellett a megtorlás elől.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki zenésítette meg a Szózatot?",
        options: ["Erkel Ferenc", "Liszt Ferenc", "Kodály Zoltán", "Bartók Béla"],
        correct_answer: "Erkel Ferenc",
        explanation: "A Szózatot Erkel Ferenc zenésítette meg.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen tragikus lehetőséget vet fel a Szózat a hazához való hűség kötelessége mellett?",
        options: [
          "a nemzet lehetséges bukását (\"Itt élned, halnod kell\")",
          "a szerelmi csalódást",
          "az egyéni halál elkerülhetetlenségét",
          "a természeti katasztrófát",
        ],
        correct_answer: "a nemzet lehetséges bukását (\"Itt élned, halnod kell\")",
        explanation: "A Szózat a hazához való hűség mellett a nemzet lehetséges bukásának tragikus lehetőségét is felveti.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen három alakkal találkozik Csongor útja során a Csongor és Tündében, akik a földi élet hamis boldogság-eszméit testesítik meg?",
        options: [
          "Kalmár, Fejedelem és Tudós",
          "Ördög, Angyal és Ember",
          "Kalmár, Pap és Katona",
          "Tündér, Boszorkány és Óriás",
        ],
        correct_answer: "Kalmár, Fejedelem és Tudós",
        explanation: "Csongor útja során három alakkal (Kalmár, Fejedelem, Tudós) találkozik, akik a gazdagság, hatalom és tudás hamis eszméit testesítik meg.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a Csongor és Tünde végkicsengése az igazi boldogság forrásáról?",
        options: [
          "az emberi kapcsolatokban és a küzdelemben rejlik, nem a gazdagságban, hatalomban vagy tudásban",
          "kizárólag a vagyonban rejlik",
          "csak a tündérvilágban érhető el",
          "a magányos elmélkedésben található meg",
        ],
        correct_answer: "az emberi kapcsolatokban és a küzdelemben rejlik, nem a gazdagságban, hatalomban vagy tudásban",
        explanation: "A mű végkicsengése szerint az igazi boldogság nem a hamis eszmékben, hanem az emberi kapcsolatokban és a küzdelemben magában rejlik.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen záró gondolattal enyhíti A vén cigány apokaliptikus hangvételét?",
        options: [
          "\"Húzd rá, cigány, lesz még egyszer ünnep a világon\"",
          "\"Itt élned, halnod kell\"",
          "\"Meddig a föld a napot kerülgeti\"",
          "\"Ne bántsd a magyart\"",
        ],
        correct_answer: "\"Húzd rá, cigány, lesz még egyszer ünnep a világon\"",
        explanation: "A vers zaklatott, apokaliptikus képei után mégis felcsillan a remény a záró sorban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben hunyt el Vörösmarty Mihály?",
        options: ["1855-ben", "1848-ban", "1830-ban", "1867-ben"],
        correct_answer: "1855-ben",
        explanation: "Vörösmarty Mihály 1855-ben hunyt el Pesten.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen stílusjegyek jellemzik jellemzően Vörösmarty költészetét?",
        options: [
          "gazdag, barokkos képalkotás és erős érzelmi töltés, klasszicizáló formákkal vegyítve",
          "szigorúan száraz, tényközlő stílus",
          "minimalista, szabadverses forma",
          "kizárólag népdalszerű egyszerűség",
        ],
        correct_answer: "gazdag, barokkos képalkotás és erős érzelmi töltés, klasszicizáló formákkal vegyítve",
        explanation: "Vörösmarty költészete gazdag, sokszor barokkos képalkotást és erős érzelmi töltést mutat, formailag igényes, klasszicizáló formákkal is.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "mikszath-kalman-novellisztikaja",
    title: "Mikszáth Kálmán novellisztikája",
    level: "mindketto",
    theme: "Portrék",
    order_index: 11,
    summary_markdown:
      "A magyar novella és társadalmi regény nagymestere. Anekdotikus, humoros-ironikus elbeszélésmódja a paraszti és dzsentri világot egyszerre idealizálja és kritizálja, a romantika és a realizmus határán mozogva.",
    content_markdown: `
## Élete és pályaképe

Mikszáth Kálmán 1847-ben született Szklabonyán (a mai Szlovákiában, akkor Nógrád vármegyében), középbirtokos nemesi családban. Jogot tanult, majd újságíróként, később országgyűlési képviselőként is dolgozott — publicisztikai munkássága és politikai tapasztalatai jelentősen alakították társadalomábrázoló írói szemléletét. Az áttörést két novellaciklusa hozta meg számára: a *Tót atyafiak* és *A jó palócok* (mindkettő 1881-ben jelent meg), amelyek a felvidéki tót és palóc parasztvilágot mutatták be rendkívüli mesélőkedvvel, ugyanakkor finom iróniával.

Ezt követően rendkívül termékeny írói pályát futott be: számos regényt, novellát és publicisztikai írást jelentetett meg, és élete végére a korszak egyik legnépszerűbb, legolvasottabb magyar írójává vált. 1910-ben hunyt el Budapesten.

## Elbeszélésmódja

Mikszáth stílusának legjellemzőbb vonása az **anekdotikus elbeszélésmód**: történetei gyakran egy-egy különös, csattanós esetre, pletykára vagy legendás alakra épülnek, amelyeket az író mesélő, közvetlen, a hallgatóhoz/olvasóhoz forduló hangnemben ad elő. Ez a technika a szóbeli mesélés hagyományát emeli be az írott irodalomba, és Mikszáth műveinek egyik legfőbb varázsa.

Írásmódjában a **romantika** (a hősök idealizálása, legendás, néha túlzó jellemábrázolás) és a **realizmus** (a társadalmi viszonyok, a vidéki élet hiteles, néha kritikus bemutatása) sajátos ötvözete figyelhető meg. Humorát gyakran **irónia** és **enyhe szatíra** színezi: miközben szeretettel, megértéssel ábrázolja hőseit, finoman leleplezi is gyengeségeiket, hiúságaikat, a dzsentri világ (a lecsúszó, de rangjához ragaszkodó nemesi-középosztályi réteg) önáltatásait.

## Kiemelt művek

**Tót atyafiak / A jó palócok** (1881) — a két novellaciklus a felvidéki parasztvilágot mutatja be: a tót (szlovák) és palóc parasztok életét, szokásait, jellegzetes alakjait az író szeretettel, ugyanakkor kritikus éllel ábrázolja. E művek hozták meg számára az országos elismerést, és ekkortól tartják számon a magyar novellisztika egyik megújítójaként.

**Szent Péter esernyője** (1895) — az egyik legnépszerűbb Mikszáth-regény, amelyben egy csodás elem (egy titokzatos esernyő, amelyhez legenda fűződik) köré épül a cselekmény, ötvözve a mesei-legendás elemeket a társadalmi viszonyok (öröklés, család, vagyon) realista ábrázolásával.

**A jó palócok** címadó novellája és a hozzá hasonló elbeszélések jellemzően egy-egy erős, karakteres alak (gyakran egyszerű paraszti figura) sorsán, esetén keresztül mutatnak be egy-egy tágabb erkölcsi vagy társadalmi problémát, csattanós, sokszor tragikomikus végkifejlettel.

## A dzsentri-ábrázolás

Mikszáth kései regényeiben (pl. *Különös házasság*, *A Noszty fiú esete Tóth Marival*) egyre erőteljesebb társadalomkritikai éllel ábrázolja a **dzsentri** (a vagyonát vesztő, de rangjához mereven ragaszkodó nemesi középosztály) világát: miközben anekdotikus humorral meséli el történeteiket, leleplezi a réteg erkölcsi és anyagi csődjét, a látszat és a valóság közötti szakadékot.

## Jelentősége

Mikszáth Kálmán a magyar novella és a társadalmi regény egyik legnagyobb mestere, aki az anekdotikus, mesélő elbeszélésmódot emelte a magyar széppróza egyik legjellegzetesebb, legnépszerűbb formájává. Írásművészete hidat képez a romantikus hagyomány és a 20. század eleji, egyre kritikusabb realizmus (Móricz Zsigmond generációja) között.
`,
    key_concepts: [
      "anekdotikus elbeszélésmód",
      "dzsentri-ábrázolás",
      "novellaciklus",
      "irónia",
      "realizmus és romantika ötvözete",
    ],
    source_refs: [
      { label: "Mikszáth Kálmán művei (MEK)", url: "https://mek.oszk.hu/00900/00905/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Mikszáth Kálmán (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Miksz%C3%A1th_K%C3%A1lm%C3%A1n" },
      { label: "Mikszáth Kálmán munkássága – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/irodalom/mikszath-kalman-munkassaga/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik két novellaciklus hozta meg Mikszáth számára az országos elismerést 1881-ben?",
        options: ["Tót atyafiak és A jó palócok", "Szent Péter esernyője és Különös házasság", "A Noszty fiú esete Tóth Marival", "Az a fekete folt"],
        correct_answer: "Tót atyafiak és A jó palócok",
        explanation: "A két 1881-es novellaciklus hozta meg Mikszáth számára az áttörést és az országos elismerést.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi elsősorban Mikszáth elbeszélésmódját?",
        options: [
          "anekdotikus, mesélő, a hallgatóhoz forduló elbeszélésmód",
          "szigorúan tényközlő, dokumentarista stílus",
          "kizárólag verses forma",
          "tudatfolyam-technika",
        ],
        correct_answer: "anekdotikus, mesélő, a hallgatóhoz forduló elbeszélésmód",
        explanation: "Mikszáth a szóbeli mesélés hagyományát emelte be az írott irodalomba, csattanós, anekdotikus történetekkel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kiket ábrázol egyre kritikusabb éllel Mikszáth kései regényeiben?",
        options: [
          "a dzsentrit (a vagyonát vesztő, de rangjához ragaszkodó nemesi középosztályt)",
          "a nagyipari munkásságot",
          "a fővárosi értelmiséget",
          "a katonai arisztokráciát",
        ],
        correct_answer: "a dzsentrit (a vagyonát vesztő, de rangjához ragaszkodó nemesi középosztályt)",
        explanation: "Mikszáth kései regényeiben leleplezi a dzsentri réteg erkölcsi és anyagi csődjét, a látszat és valóság közti szakadékot.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik regényében szerepel egy titokzatos, legendás tárgy köré épülő cselekmény?",
        options: ["Szent Péter esernyője", "A jó palócok", "Tót atyafiak", "Az a fekete folt"],
        correct_answer: "Szent Péter esernyője",
        explanation: "A regényben egy titokzatos esernyő legendája fonódik össze a család és öröklés társadalmi kérdéseivel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen két irodalmi irányzat ötvözete jellemzi Mikszáth írásmódját?",
        options: ["romantika és realizmus", "szimbolizmus és avantgárd", "klasszicizmus és barokk", "naturalizmus és expresszionizmus"],
        correct_answer: "romantika és realizmus",
        explanation: "Mikszáth műveiben a hősök idealizáló ábrázolása (romantika) és a társadalmi viszonyok hiteles bemutatása (realizmus) ötvöződik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol született Mikszáth Kálmán 1847-ben?",
        options: ["Szklabonyán", "Debrecenben", "Szegeden", "Kolozsváron"],
        correct_answer: "Szklabonyán",
        explanation: "Mikszáth Kálmán 1847-ben született Szklabonyán, középbirtokos nemesi családban.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen foglalkozásokat folytatott Mikszáth az írás mellett?",
        options: [
          "újságíró, majd országgyűlési képviselő",
          "tanár és pap",
          "orvos és katona",
          "bankár és diplomata",
        ],
        correct_answer: "újságíró, majd országgyűlési képviselő",
        explanation: "Mikszáth jogot tanult, majd újságíróként, később országgyűlési képviselőként is dolgozott.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben hunyt el Mikszáth Kálmán?",
        options: ["1910-ben", "1881-ben", "1895-ben", "1920-ban"],
        correct_answer: "1910-ben",
        explanation: "Mikszáth Kálmán 1910-ben hunyt el Budapesten.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen jellegű humor színezi Mikszáth elbeszéléseit, miközben szeretettel ábrázolja hőseit?",
        options: ["irónia és enyhe szatíra", "abszurd, groteszk humor", "fekete humor", "szatirikus gúny, keserűség nélkül"],
        correct_answer: "irónia és enyhe szatíra",
        explanation: "Humorát gyakran irónia és enyhe szatíra színezi, miközben szeretettel ábrázolja hőseit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik két kései regénye ábrázolja egyre erőteljesebb társadalomkritikai éllel a dzsentri világot (a Szent Péter esernyője mellett)?",
        options: [
          "Különös házasság és A Noszty fiú esete Tóth Marival",
          "Tót atyafiak és A jó palócok",
          "Az a fekete folt és Beszterce ostroma",
          "Sárarany és Rokonok",
        ],
        correct_answer: "Különös házasság és A Noszty fiú esete Tóth Marival",
        explanation: "Mikszáth kései regényeiben, pl. a Különös házasságban és A Noszty fiú esete Tóth Marival címűben, egyre erőteljesebb éllel ábrázolja a dzsentrit.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen birtokos-nemesi családi háttérből származott Mikszáth Kálmán?",
        options: [
          "középbirtokos nemesi családból",
          "szegény munkáscsaládból",
          "gazdag arisztokrata családból",
          "paraszti családból",
        ],
        correct_answer: "középbirtokos nemesi családból",
        explanation: "Mikszáth középbirtokos nemesi családban született.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szerkezeti sajátosság jellemzi jellemzően A jó palócok című novellát és a hozzá hasonló elbeszéléseket?",
        options: [
          "egy erős, karakteres alak sorsán keresztül mutatnak be egy tágabb erkölcsi/társadalmi problémát, csattanós végkifejlettel",
          "hosszú, elnyújtott leírásokra épülnek",
          "kizárólag dialógus formájában íródtak",
          "lineáris, epizód nélküli cselekményt visznek végig",
        ],
        correct_answer: "egy erős, karakteres alak sorsán keresztül mutatnak be egy tágabb erkölcsi/társadalmi problémát, csattanós végkifejlettel",
        explanation: "A jó palócok és a hozzá hasonló elbeszélések egy-egy karakteres alak sorsán keresztül mutatnak be egy tágabb problémát, csattanós, sokszor tragikomikus végkifejlettel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi alakította jelentősen Mikszáth társadalomábrázoló írói szemléletét publicisztikai munkássága mellett?",
        options: [
          "politikai (országgyűlési képviselői) tapasztalatai",
          "katonai szolgálata",
          "külföldi tanulmányútjai",
          "orvosi képzettsége",
        ],
        correct_answer: "politikai (országgyűlési képviselői) tapasztalatai",
        explanation: "Publicisztikai munkássága és politikai tapasztalatai jelentősen alakították társadalomábrázoló írói szemléletét.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik vármegyében (a mai Szlovákiában) fekszik Mikszáth szülőfaluja, Szklabonya?",
        options: ["Nógrád vármegyében", "Zemplén vármegyében", "Bihar vármegyében", "Sáros vármegyében"],
        correct_answer: "Nógrád vármegyében",
        explanation: "Mikszáth Szklabonyán, a mai Szlovákiában, akkor Nógrád vármegyében született.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szerepet tölt be Mikszáth életműve a jelentősége szerint a magyar prózatörténetben?",
        options: [
          "hidat képez a romantikus hagyomány és a 20. századi kritikusabb realizmus (Móricz nemzedéke) között",
          "kizárólag a felvilágosodás hagyományát folytatja",
          "megszakítja a korábbi prózai hagyományokat teljesen",
          "csak a népi irodalom hagyományát viszi tovább",
        ],
        correct_answer: "hidat képez a romantikus hagyomány és a 20. századi kritikusabb realizmus (Móricz nemzedéke) között",
        explanation: "Mikszáth írásművészete hidat képez a romantikus hagyomány és a 20. század eleji, egyre kritikusabb realizmus (Móricz Zsigmond generációja) között.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "moricz-zsigmond-parasztabrazolasa",
    title: "Móricz Zsigmond: parasztábrázolás és a Légy jó mindhalálig",
    level: "mindketto",
    theme: "Portrék",
    order_index: 12,
    summary_markdown:
      "A 20. századi magyar realista próza vezéralakja. Móricz élesen kritikus, naturalista vonásokkal átszőtt parasztábrázolása szakított a korábbi idilli népábrázolással, miközben önéletrajzi ihletésű regényében (Légy jó mindhalálig) a gyermeki lélek kiszolgáltatottságát is megrendítően mutatta be.",
    content_markdown: `
## Élete és pályaképe

Móricz Zsigmond 1879-ben született Tiszacsécsén, református lelkészi családban gyökerező, de anyagilag bizonytalan sorsú családban. Teológiát és jogot is tanult, majd újságíróként kezdte pályáját. Az igazi áttörést az 1908-ban a Nyugat folyóiratban megjelent *Hét krajcár* című novellája hozta meg, amelyet maga Ady Endre méltatott elsőként lelkesen — ez a felfedezés indította el Móricz pályáját a Nyugat köréhez kapcsolódó, ugyanakkor stílusában önálló utat járó nagy prózaíróvá.

Bár szorosan kötődött a Nyugat folyóirathoz és köréhez, Móricz elsősorban prózaíróként (nem költőként) vált a 20. század eleji magyar irodalom egyik legmeghatározóbb alakjává. Rendkívül termékeny pályát futott be: regényei, novellái, drámái és publicisztikai írásai a magyar vidék, a parasztság és a dzsentri-középosztály életét dolgozták fel kendőzetlen, sokszor kíméletlen realizmussal. 1942-ben hunyt el Budapesten.

## Parasztábrázolása: szakítás az idillel

Móricz parasztábrázolása radikálisan szakított a korábbi (elsősorban Mikszáth nevével fémjelzett) idillizáló, romantikus népábrázolással. Nála a parasztvilág nem a naiv, tiszta erkölcs színtere, hanem olyan, mint bármely más társadalmi réteg: itt is jelen van a nyomor, az erőszak, a kapzsiság, a szexuális feszültség és az erkölcsi kompromisszumok világa. Ez a kritikus, sokszor naturalista vonásokkal átszőtt ábrázolásmód (amelyben a nyers biológiai-ösztönös motivációk is nagy szerepet kapnak) új korszakot nyitott a magyar prózában.

- **Hét krajcár** (1908) — az áttörést hozó novella: egy szegény özvegyasszony és fia hét krajcár után való kutatásának története, amely megrendítő módon mutatja be a nyomor mindennapi, apró tragédiáit.
- **Sárarany** (1910) — regény, amely egy erős akaratú, indulatos paraszti hős (Túri Dani) sorsán keresztül mutatja be a vidéki élet feszültségeit, szenvedélyeit.
- **Az Isten háta mögött** (1911) — a vidéki, elzárt kisváros erkölcsi és szellemi pangásának, unalmának kritikus rajza.
- **Rokonok** (1930) — a vidéki köz- és magánélet korrupciójának, a family- és haveri alapon működő korrupt hivatalnoki rendszernek kíméletlen kritikája egy tisztességesnek induló, majd fokozatosan a rendszerbe belesodródó ügyész története révén.

## Légy jó mindhalálig (1920)

Móricz egyik legismertebb, önéletrajzi ihletésű regénye a fiatal Nyilas Misi kollégiumi (debreceni református kollégiumi) éveit meséli el. A regény középpontjában a gyermeki lélek kiszolgáltatottsága áll: Nyilas Misi szegény sorból érkezik a kollégiumba, ahol állandó feszültségben él a szegénységéből fakadó megaláztatások, a felnőttek (tanárok, gondnokok) általi félreértések és igazságtalanságok, valamint saját, mélyen gyökerező erkölcsi igényessége között. Egy vétlenül elkövetett kis vétség (amelyet a felnőttek eltúloznak és igazságtalanul megtorolnak) katalizálja a regény drámai csúcspontját, amely a gyermeki lélek sebezhetőségét és a felnőttvilág gyakran érzéketlen, igazságtalan működését állítja szembe egymással. A regény címe (a kollégium jelmondata) ironikus feszültségben áll a Misit érő igazságtalanságokkal.

## Stílus

Móricz prózáját sűrű, érzékletes, sokszor tájnyelvi elemekkel átszőtt nyelvezet, erős dramaturgiai feszültség és pszichológiai mélység jellemzi. Elbeszélésmódja realista-naturalista: a társadalmi viszonyokat és az emberi ösztönöket egyaránt kendőzetlenül, kritikusan ábrázolja, szemben a korábbi, idealizáló népábrázolási hagyománnyal.

## Jelentősége

Móricz Zsigmond a 20. századi magyar realista/naturalista próza vezéralakja: parasztábrázolása radikálisan új, kritikus hangot hozott a magyar irodalomba, míg a *Légy jó mindhalálig* a gyermeki lélek és a felnőttvilág konfliktusának egyik legmegrendítőbb magyar irodalmi feldolgozása maradt. Életműve a Nyugat nemzedékének prózai vonulatát képviseli, és a mai napig a magyar iskolai kánon egyik alappillére.
`,
    key_concepts: [
      "naturalizmus",
      "parasztábrázolás",
      "dzsentri-kritika",
      "önéletrajzi regény",
      "Nyugat próza-vonulata",
    ],
    source_refs: [
      { label: "Móricz Zsigmond: Légy jó mindhalálig (MEK)", url: "https://mek.oszk.hu/00900/00991/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Móricz Zsigmond (Wikipédia)", url: "https://hu.wikipedia.org/wiki/M%C3%B3ricz_Zsigmond" },
      { label: "Móricz Zsigmond – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/konyvtar/moricz-zsigmond/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik novellája hozta meg Móricz Zsigmond számára az áttörést 1908-ban?",
        options: ["Hét krajcár", "Sárarany", "Rokonok", "Az Isten háta mögött"],
        correct_answer: "Hét krajcár",
        explanation: "A Hét krajcár (1908) hozta meg Móricz áttörését, amelyet Ady Endre méltatott elsőként.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miben tér el radikálisan Móricz parasztábrázolása a korábbi (pl. Mikszáth-féle) hagyománytól?",
        options: [
          "kritikus, naturalista vonásokkal átszőtt, nem idealizáló ábrázolásmódban",
          "abban, hogy kizárólag versben írt a parasztságról",
          "abban, hogy csak városi témákat dolgozott fel",
          "abban, hogy humoros-anekdotikus stílust használt",
        ],
        correct_answer: "kritikus, naturalista vonásokkal átszőtt, nem idealizáló ábrázolásmódban",
        explanation: "Móricz szakított az idillikus népábrázolással, és kendőzetlenül mutatta be a nyomort, erőszakot és erkölcsi kompromisszumokat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki a főszereplője a Légy jó mindhalálig című regénynek?",
        options: ["Nyilas Misi", "Túri Dani", "Édes Anna", "Toldi Miklós"],
        correct_answer: "Nyilas Misi",
        explanation: "A regény középpontjában Nyilas Misi kollégiumi kálváriája áll, aki a szegénységéből fakadó megaláztatásokkal küzd.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik regényében kritizálja Móricz a vidéki köz- és magánélet korrupcióját?",
        options: ["Rokonok", "Légy jó mindhalálig", "Hét krajcár", "Sárarany"],
        correct_answer: "Rokonok",
        explanation: "A Rokonok egy tisztességesnek induló ügyész fokozatos beszippantódását mutatja be a korrupt hivatalnoki rendszerbe.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik folyóirathoz kötődött szorosan Móricz Zsigmond pályája elsősorban prózaíróként?",
        options: ["Nyugat", "Élet és Irodalom", "Napkelet", "Válasz"],
        correct_answer: "Nyugat",
        explanation: "Móricz a Nyugat folyóirat köréhez kapcsolódott, bár elsősorban prózaíróként, nem költőként vált meghatározóvá.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol született Móricz Zsigmond 1879-ben?",
        options: ["Tiszacsécsén", "Nyíregyházán", "Debrecenben", "Szatmárnémetiben"],
        correct_answer: "Tiszacsécsén",
        explanation: "Móricz Zsigmond 1879-ben született Tiszacsécsén, református lelkészi családban gyökerező családban.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki méltatta elsőként lelkesen a Hét krajcár című novellát, amely elindította Móricz pályáját?",
        options: ["Ady Endre", "Babits Mihály", "Kosztolányi Dezső", "Juhász Gyula"],
        correct_answer: "Ady Endre",
        explanation: "A Hét krajcárt maga Ady Endre méltatta elsőként lelkesen.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik regényében mutatja be Móricz egy erős akaratú, indulatos paraszti hős, Túri Dani sorsán keresztül a vidéki élet feszültségeit?",
        options: ["Sárarany", "Az Isten háta mögött", "Rokonok", "Légy jó mindhalálig"],
        correct_answer: "Sárarany",
        explanation: "A Sárarany (1910) Túri Dani sorsán keresztül mutatja be a vidéki élet feszültségeit, szenvedélyeit.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik regénye a vidéki, elzárt kisváros erkölcsi és szellemi pangását, unalmát rajzolja meg kritikusan?",
        options: ["Az Isten háta mögött", "Sárarany", "Hét krajcár", "Légy jó mindhalálig"],
        correct_answer: "Az Isten háta mögött",
        explanation: "Az Isten háta mögött (1911) a vidéki, elzárt kisváros erkölcsi és szellemi pangásának kritikus rajza.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik intézményben él át Nyilas Misi megrendítő éveket a Légy jó mindhalálig című regényben?",
        options: [
          "a debreceni református kollégiumban",
          "a szegedi piarista gimnáziumban",
          "egy falusi elemi iskolában",
          "egy budapesti katonaiskolában",
        ],
        correct_answer: "a debreceni református kollégiumban",
        explanation: "A regény a fiatal Nyilas Misi debreceni református kollégiumi éveit meséli el.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen viszonyban áll a Légy jó mindhalálig ironikus cím (a kollégium jelmondata) a regény cselekményével?",
        options: [
          "feszültségben áll a Misit érő igazságtalanságokkal",
          "tökéletesen összhangban van a regény happy endjével",
          "semmilyen kapcsolatban nincs a cselekménnyel",
          "csak a mellékszálakra vonatkozik",
        ],
        correct_answer: "feszültségben áll a Misit érő igazságtalanságokkal",
        explanation: "A regény címe (a kollégium jelmondata) ironikus feszültségben áll a Misit érő igazságtalanságokkal.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen naturalista vonások jelennek meg Móricz kritikus parasztábrázolásában?",
        options: [
          "nyomor, erőszak, kapzsiság és szexuális feszültség",
          "kizárólag humoros, anekdotikus elemek",
          "vallásos áhítat és megbékélés",
          "idilli, harmonikus családi élet",
        ],
        correct_answer: "nyomor, erőszak, kapzsiság és szexuális feszültség",
        explanation: "Móricz ábrázolásában jelen van a nyomor, az erőszak, a kapzsiság, a szexuális feszültség és az erkölcsi kompromisszumok világa.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen tanulmányokat folytatott Móricz Zsigmond, mielőtt újságíróként kezdte pályáját?",
        options: ["teológiát és jogot", "orvostudományt", "mérnöki tanulmányokat", "hadtudományt"],
        correct_answer: "teológiát és jogot",
        explanation: "Móricz teológiát és jogot is tanult, majd újságíróként kezdte pályáját.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben hunyt el Móricz Zsigmond?",
        options: ["1942-ben", "1919-ben", "1908-ban", "1956-ban"],
        correct_answer: "1942-ben",
        explanation: "Móricz Zsigmond 1942-ben hunyt el Budapesten.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen nyelvi jellegzetesség jellemzi Móricz prózáját?",
        options: [
          "sűrű, érzékletes, sokszor tájnyelvi elemekkel átszőtt nyelvezet",
          "szikár, minimalista mondatszerkesztés",
          "kizárólag választékos, latinos műveltségszó-használat",
          "gyermeknyelvi egyszerűség",
        ],
        correct_answer: "sűrű, érzékletes, sokszor tájnyelvi elemekkel átszőtt nyelvezet",
        explanation: "Móricz prózáját sűrű, érzékletes, sokszor tájnyelvi elemekkel átszőtt nyelvezet jellemzi.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "radnoti-miklos-kolteszete",
    title: "Radnóti Miklós költészete",
    level: "mindketto",
    theme: "Portrék",
    order_index: 13,
    summary_markdown:
      "A holokauszt egyik legmegrendítőbb magyar költő-áldozata és -krónikása. Antik formák (eklogák) modern tartalommal való megtöltése, valamint a bori munkaszolgálat és az erőltetett menet alatt írt utolsó versei (Razglednicák) teszik életművét egyedülállóvá.",
    content_markdown: `
## Élete és pályaképe

Radnóti Miklós (eredeti nevén Glatter Miklós) 1909-ben született Budapesten. Magyar-francia szakot végzett a szegedi egyetemen, ahol bekapcsolódott a fiatal, progresszív szellemi körökbe. 1935-ben vette feleségül Gyarmati Fannit, akihez fűződő szerelme és boldog házassága élete végéig visszatérő témája maradt költészetének — az idillikus magánélet és a fenyegető, egyre sötétebbé váló történelmi valóság közötti feszültség versciklusainak egyik legfontosabb szervező elve.

Zsidó származása miatt a fokozatosan szigorodó zsidótörvények, majd a háború sújtotta Magyarországon egyre kiszolgáltatottabb helyzetbe került: többször hívták be munkaszolgálatra. 1944-ben a szerbiai Bor melletti rézbányákban dolgoztatott munkaszolgálatos századába osztották be. Amikor a tábort a front közeledtével felszámolták, a foglyokat gyalogmenetben ("erőltetett menetben") hajtották nyugat felé. A rendkívül legyengült, alultáplált Radnóti nem bírta a menetelés ütemét; 1944 novemberében, Abda községnél agyonlőtték a kísérő őrök. Tömegsírba temették, ahonnan holttestét csak 1946-ban exhumálták — kabátzsebében ekkor találták meg az ún. **Bori notesz**-t, amelybe utolsó verseit írta.

## Fő témák és formák

- **Az idill és az apokalipszis feszültsége**: a Fannival való szerelmi boldogság és a háború, az üldöztetés fenyegetése közötti kontraszt szinte minden kései versét áthatja.
- **Eklogák**: antik pásztorköltemény-forma (a Vergilius nyomán induló, párbeszédes, pásztori keretbe ágyazott versforma), amelyet Radnóti a saját korának háborús valóságával töltött meg — az antik, harmonikus pásztori világ és a modern kor barbársága közötti kontraszt adja e versek erejét (*Első ecloga*, *Hetedik ecloga*).
- **Razglednicák** (1944) — négy rövid, dátumozott vers, amelyeket a bori munkaszolgálat és az erőltetett menet alatt írt; ezek a versek szinte naplószerű, sűrített pillanatképei a menet borzalmainak. Az utolsó, negyedik Razglednica pár nappal a halála előtt íródott, és saját, hamarosan bekövetkező halálát írja le megrendítő tárgyilagossággal ("Mellézuhantam, átfordult a teste...").

## Kiemelt versek

**Nem tudhatom...** — az egyik legismertebb hazaszeretet-verse: a lírai én személyes, konkrét, érzéki emlékeken (gyermekkor, táj, nyelv) keresztül fogalmazza meg kötődését hazájához, szemben az elvont, patetikus hazafiassággal.

**Hetedik ecloga** — a bori munkaszolgálat idején írt, a fogolytábor embertelen körülményei és a szeretett feleséghez (Fannihoz) való vágyakozás közötti feszültséget megfogalmazó vers, amelyben az antik ecloga-forma a legszemélyesebb, legfájdalmasabb tartalmat hordozza.

**Razglednica (4.)** — az utolsó fennmaradt vers, amelyet feltehetően a halála előtt néhány nappal írt: kilenc sorban, minden pátosz nélkül, dokumentumszerű tárgyilagossággal írja le egy társa lelövését és saját, hamarosan bekövetkező sorsát sejtető helyzetét.

## Stílus

Radnóti költészetét a formai fegyelem és a klasszikus (antik és nyugat-európai) hagyományokhoz való tudatos kapcsolódás jellemzi, még a legszélsőségesebb embertelenség körülményei között is — ez a formai rend a barbársággal szembeni utolsó, szimbolikus ellenállás gesztusaként is értelmezhető. Verselése zenei, letisztult, klasszicizáló, miközben tartalmilag a 20. század egyik legsötétebb tapasztalatát (üldöztetés, munkaszolgálat, halál) dolgozza fel.

## Jelentősége

Radnóti Miklós a magyar líra és a holokauszt-irodalom egyik legmegrendítőbb alakja: költészete egyszerre dokumentumértékű tanúságtétel a 20. század egyik legnagyobb embertelenségéről, és formailag-esztétikailag a magyar líra egyik csúcsteljesítménye. Halála körülményei és az utolsó pillanatig fenntartott alkotói fegyelme (a Bori notesz versei) a költői hivatás és az emberi méltóság megrendítő szimbólumává tették életművét.
`,
    key_concepts: [
      "ecloga",
      "Razglednicák",
      "Bori notesz",
      "munkaszolgálat",
      "idill és apokalipszis",
    ],
    source_refs: [
      { label: "Radnóti Miklós: Erőltetett menet – válogatott versek (MEK)", url: "https://mek.oszk.hu/01000/01018/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Radnóti Miklós (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Radn%C3%B3ti_Mikl%C3%B3s" },
      { label: "Radnóti Miklós – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/konyvtar/radnoti-miklos/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Hol és milyen körülmények között halt meg Radnóti Miklós 1944-ben?",
        options: [
          "Abdánál, az erőltetett menet során agyonlőtték",
          "koncentrációs táborban éhen halt",
          "a fronton harcolva esett el",
          "természetes halállal halt meg a háború után",
        ],
        correct_answer: "Abdánál, az erőltetett menet során agyonlőtték",
        explanation: "A bori munkaszolgálat felszámolásakor gyalogmenetben hajtott foglyok közül a legyengült Radnótit Abdánál lőtték agyon.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen antik versformát töltött meg Radnóti a saját korának háborús valóságával?",
        options: ["ecloga", "szonett", "óda", "epigramma"],
        correct_answer: "ecloga",
        explanation: "Radnóti a Vergilius nyomán induló pásztorköltemény-formát (eclogát) alkalmazta modern, háborús tartalommal.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol találták meg Radnóti utolsó verseit tartalmazó jegyzetfüzetét?",
        options: [
          "a kabátzsebében, a tömegsírból exhumált holttesten",
          "egy budapesti lakásban",
          "egy szerbiai postahivatalban",
          "felesége, Gyarmati Fanni hagyatékában"
        ],
        correct_answer: "a kabátzsebében, a tömegsírból exhumált holttesten",
        explanation: "A Bori noteszt 1946-ban, a tömegsírból való exhumáláskor találták meg Radnóti kabátzsebében.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kihez fűződő szerelme volt élete végéig meghatározó témája költészetének?",
        options: ["Gyarmati Fanni", "Csinszka (Boncza Berta)", "Szántó Judit", "Vajda Julianna"],
        correct_answer: "Gyarmati Fanni",
        explanation: "Radnóti 1935-ben vette feleségül Gyarmati Fannit, akihez fűződő szerelme sok verse visszatérő témája.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a négy Razglednica című verset?",
        options: [
          "rövid, dátumozott, a munkaszolgálat/erőltetett menet alatti pillanatképek",
          "hosszú, elbeszélő jellegű eposzi részletek",
          "gyermekkori emlékeket feldolgozó idillikus versek",
          "kizárólag szerelmi témájú versek",
        ],
        correct_answer: "rövid, dátumozott, a munkaszolgálat/erőltetett menet alatti pillanatképek",
        explanation: "A Razglednicák rövid, dátumozott versek, amelyeket a bori munkaszolgálat és az erőltetett menet alatt írt Radnóti.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt Radnóti Miklós eredeti neve?",
        options: ["Glatter Miklós", "Grün Miklós", "Weisz Miklós", "Kohn Miklós"],
        correct_answer: "Glatter Miklós",
        explanation: "Radnóti Miklós eredeti neve Glatter Miklós volt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik egyetemen és milyen szakon végzett Radnóti Miklós?",
        options: [
          "a szegedi egyetemen, magyar-francia szakon",
          "a budapesti egyetemen, jogi szakon",
          "a debreceni egyetemen, teológia szakon",
          "a kolozsvári egyetemen, orvosi szakon",
        ],
        correct_answer: "a szegedi egyetemen, magyar-francia szakon",
        explanation: "Radnóti magyar-francia szakot végzett a szegedi egyetemen.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor vette feleségül Radnóti Gyarmati Fannit?",
        options: ["1935-ben", "1944-ben", "1928-ban", "1938-ban"],
        correct_answer: "1935-ben",
        explanation: "Radnóti 1935-ben vette feleségül Gyarmati Fannit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért vált Radnóti egyre kiszolgáltatottabb helyzetbe a háború alatt, és hívták be többször munkaszolgálatra?",
        options: [
          "zsidó származása miatt, a szigorodó zsidótörvények következtében",
          "politikai nézetei miatt",
          "mert nem teljesítette korábbi katonai szolgálatát",
          "véletlen hatósági hiba miatt",
        ],
        correct_answer: "zsidó származása miatt, a szigorodó zsidótörvények következtében",
        explanation: "Zsidó származása miatt a fokozatosan szigorodó zsidótörvények, majd a háború sújtotta Magyarországon egyre kiszolgáltatottabb helyzetbe került.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol dolgoztatták Radnótit munkaszolgálatos századába osztva 1944-ben?",
        options: [
          "a szerbiai Bor melletti rézbányákban",
          "egy budapesti gyárban",
          "az ukrajnai fronton",
          "egy lengyelországi táborban",
        ],
        correct_answer: "a szerbiai Bor melletti rézbányákban",
        explanation: "1944-ben a szerbiai Bor melletti rézbányákban dolgoztatott munkaszolgálatos századába osztották be.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik verse fogalmazza meg a hazaszeretetet személyes, konkrét, érzéki emlékeken keresztül, szemben az elvont, patetikus hazafiassággal?",
        options: ["Nem tudhatom...", "Hetedik ecloga", "Razglednica (4.)", "Első ecloga"],
        correct_answer: "Nem tudhatom...",
        explanation: "A Nem tudhatom... a lírai én személyes, érzéki emlékein keresztül fogalmazza meg kötődését hazájához.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen kettős feszültséget fogalmaz meg a Hetedik ecloga a bori munkaszolgálat idején?",
        options: [
          "a fogolytábor embertelen körülményei és a Fanni utáni vágyakozás közötti feszültséget",
          "a béke és a háború közötti filozófiai vitát",
          "a városi és a vidéki élet ellentétét",
          "a hit és a kétely közötti küzdelmet",
        ],
        correct_answer: "a fogolytábor embertelen körülményei és a Fanni utáni vágyakozás közötti feszültséget",
        explanation: "A Hetedik ecloga a fogolytábor embertelen körülményei és a szeretett feleséghez való vágyakozás közötti feszültséget fogalmazza meg.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit ír le a Razglednica (4.) című, utolsó fennmaradt verse dokumentumszerű tárgyilagossággal?",
        options: [
          "egy társa lelövését és saját, hamarosan bekövetkező sorsát",
          "egy gyermekkori emléket",
          "egy szerelmes találkozást",
          "egy háború előtti idillikus pillanatot",
        ],
        correct_answer: "egy társa lelövését és saját, hamarosan bekövetkező sorsát",
        explanation: "A Razglednica (4.) kilenc sorban, pátosz nélkül írja le egy társa lelövését és saját, hamarosan bekövetkező sorsát sejtető helyzetét.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan értelmezhető Radnóti formai fegyelme, klasszikus hagyományokhoz való kapcsolódása a legszélsőségesebb embertelenség körülményei között?",
        options: [
          "a barbársággal szembeni utolsó, szimbolikus ellenállás gesztusaként",
          "a valóság elől való menekülésként",
          "a politikai közömbösség jeleként",
          "az irodalmi divat puszta követéseként",
        ],
        correct_answer: "a barbársággal szembeni utolsó, szimbolikus ellenállás gesztusaként",
        explanation: "Ez a formai rend a barbársággal szembeni utolsó, szimbolikus ellenállás gesztusaként is értelmezhető.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szellemi közegbe kapcsolódott be Radnóti a szegedi egyetemen?",
        options: [
          "a fiatal, progresszív szellemi körökbe",
          "a konzervatív egyházi körökbe",
          "a katonai akadémia köreibe",
          "a nemzetközi sportmozgalomba",
        ],
        correct_answer: "a fiatal, progresszív szellemi körökbe",
        explanation: "A szegedi egyetemen bekapcsolódott a fiatal, progresszív szellemi körökbe.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "orkeny-istvan-groteszkje",
    title: "Örkény István groteszkje (Egyperces novellák)",
    level: "mindketto",
    theme: "Portrék",
    order_index: 14,
    summary_markdown:
      "A magyar groteszk dráma és novella megújítója. Az Egyperces novellák rendkívül tömör, abszurd-filozofikus formában dolgozzák fel a 20. század embertelenségeit, a Tóték című dráma pedig a totalitárius abszurditás emblematikus magyar darabja.",
    content_markdown: `
## Élete és pályaképe

Örkény István 1912-ben született Budapesten, jómódú polgári (gyógyszerész) családban; maga is gyógyszerészmérnöki, majd vegyészmérnöki oklevelet szerzett, mielőtt teljesen az írásnak szentelte volna magát. Fiatalkori írásai még a korszak avantgárd-szürrealista törekvéseihez kapcsolódtak.

Pályáját alapvetően megváltoztatta a második világháború: 1942-ben munkaszolgálatra hívták be, a szovjet frontra (a Don-kanyarba) vezényelték, majd hadifogságba esett. A frontélmény és a hadifogság embertelensége, értelmetlensége alapozta meg később jellegzetes, groteszk világlátását — azt a felismerést, hogy a 20. század totalitárius rendszereinek borzalmai gyakran csak groteszk, abszurd formában ábrázolhatók hitelesen, mert a racionális, hagyományos elbeszélésmód képtelen befogadható módon közvetíteni ezek mértéktelenségét.

Az 1956-os forradalomban való részvétele (és az utána következő megtorlás) miatt éveken át nem publikálhatott; ez a kényszerű hallgatás is közrejátszott abban, hogy csak az 1960-as évektől bontakozott ki igazán egyedi, groteszk hangú írói pályája. 1979-ben hunyt el Budapesten.

## Egyperces novellák (1967 — folyamatosan bővülő gyűjtemény)

Örkény legismertebb újítása az **egyperces novella** műfaja: rendkívül rövid (gyakran fél-egy oldalas), sűrített, csattanóra kihegyezett szövegek, amelyek szokatlan, gyakran abszurd szituációkból bontanak ki mély filozofiai vagy erkölcsi igazságokat. A novellák formailag is provokatívak: Örkény gyakran magához az olvasóhoz fordul instrukciókkal (pl. hogyan, milyen körülmények között kellene olvasni az adott szöveget), ezzel is felhívva a figyelmet az irodalmi forma és a valóság viszonyának problémájára.

- **In memoriam dr. K.H.G.** — az egyik leghíresebb egyperces, amely egy koncentrációs táborban meggyilkolt ember alakját idézi fel groteszk, ugyanakkor megrendítő tárgyilagossággal, rávilágítva a tömeges embertelenség és az egyéni sors abszurd ellentmondására.
- Számos egyperces a hétköznapi élet apró, groteszk mozzanataiból bont ki filozofikus vagy társadalomkritikai tartalmat — a műfaj lényege éppen az, hogy a minimális terjedelem ellenére (vagy éppen azáltal) maximális gondolati sűrűséget ér el.

## Tóték (1967)

Örkény legismertebb drámája egy vidéki családhoz (a Tót családhoz) beállásoló, zsarnoki, kiszámíthatatlan viselkedésű őrnagy (Tót lányuk vőlegényének frontparancsnoka) történetét dolgozza fel: a család fokozatosan, egyre groteszkebb és megalázóbb módon próbál alkalmazkodni az őrnagy szeszélyeihez, mígnem a helyzet tragikomikus, erőszakos végkifejlethez vezet. A dráma a **totalitárius hatalom** és a neki való behódolás abszurditásának, valamint az emberi méltóság elvesztésének megrendítő, ugyanakkor groteszk-komikus allegóriája.

## Egyéb jelentős műve

**Macskajáték** — másik ismert drámája, amely két idős asszony (nővérek) kapcsolatán, levelezésén keresztül dolgozza fel az öregedés, a magány és az elmulasztott élet témáit, groteszk-tragikomikus hangnemben.

## Stílus és a groteszk mint világlátás

Örkény groteszkje nem pusztán stilisztikai eszköz, hanem egy egész világlátás: az a felismerés, hogy a 20. század történelmi tapasztalatai (háború, totalitarizmus, tömeges embertelenség) olyan mértékben szakítottak a racionális, "normális" emberi léptékkel, hogy csak a groteszk — a komikum és a tragikum egyidejű, feloldhatatlan együttállása — képes hiteles formát adni nekik.

## Jelentősége

Örkény István a magyar 20. századi dráma és novella egyik legnagyobb megújítója: az egyperces novella műfaji találmánya és a Tóték groteszk-abszurd drámája egyaránt nemzetközi elismerést hoztak számára, és a mai napig a magyar irodalom egyik legtöbbet olvasott, legaktuálisabbnak ható klasszikusává tették életművét.
`,
    key_concepts: [
      "groteszk",
      "egyperces novella",
      "abszurd dráma",
      "totalitarizmus-kritika",
      "munkaszolgálat-élmény",
    ],
    source_refs: [
      { label: "Örkény István: Válogatott egyperces novellák (MEK)", url: "https://mek.oszk.hu/06300/06345/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Örkény István (Wikipédia)", url: "https://hu.wikipedia.org/wiki/%C3%96rk%C3%A9ny_Istv%C3%A1n" },
      { label: "Örkény István – kidolgozott tétel (Érettségi.com)", url: "https://erettsegi.com/tetelek/irodalom/orkeny-istvan/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik műfaj megújítása kapcsolódik elsősorban Örkény István nevéhez?",
        options: ["egyperces novella", "verses eposz", "ballada", "szonett"],
        correct_answer: "egyperces novella",
        explanation: "Örkény az egyperces novella rendkívül rövid, sűrített, csattanós műfaját tette a magyar irodalom egyik jellegzetes formájává.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen háborús élmény alapozta meg Örkény groteszk világlátását?",
        options: [
          "a doni fronton szerzett munkaszolgálatos és hadifogoly-tapasztalat",
          "partizánként harcolt a hegyekben",
          "gyerekként élte túl egy város ostromát",
          "tengerésztisztként szolgált"
        ],
        correct_answer: "a doni fronton szerzett munkaszolgálatos és hadifogoly-tapasztalat",
        explanation: "Az 1942-es munkaszolgálat, a doni front és a szovjet hadifogság embertelensége alapozta meg groteszk világlátását.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miről szól a Tóték című dráma?",
        options: [
          "egy zsarnoki, kiszámíthatatlan őrnagy beszállásolásáról egy vidéki családnál",
          "egy pesti polgárcsalád mindennapjairól",
          "egy vidéki tanító szerelmi történetéről",
          "egy 1956-os forradalmi eseménysorról",
        ],
        correct_answer: "egy zsarnoki, kiszámíthatatlan őrnagy beszállásolásáról egy vidéki családnál",
        explanation: "A Tóték az őrnagy szeszélyeihez alkalmazkodó család fokozatos, groteszk megalázkodását dolgozza fel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem publikálhatott Örkény István éveken át az 1950-es évek végén?",
        options: [
          "az 1956-os forradalomban való részvétele miatti megtorlás következtében",
          "mert külföldre emigrált",
          "mert visszavonult az irodalmi élettől saját döntéséből",
          "egészségügyi okokból",
        ],
        correct_answer: "az 1956-os forradalomban való részvétele miatti megtorlás következtében",
        explanation: "Az 1956-os forradalomban való részvétele és az azt követő megtorlás miatt éveken át nem publikálhatott.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik egyperces novellája idézi fel megrendítő tárgyilagossággal egy koncentrációs táborban meggyilkolt ember alakját?",
        options: ["In memoriam dr. K.H.G.", "Macskajáték", "Tóték", "Kulcskeresők"],
        correct_answer: "In memoriam dr. K.H.G.",
        explanation: "Az In memoriam dr. K.H.G. az egyik leghíresebb egyperces, amely a tömeges embertelenség és az egyéni sors ellentmondására mutat rá.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol és milyen családi háttérből született Örkény István 1912-ben?",
        options: [
          "Budapesten, jómódú polgári (gyógyszerész) családban",
          "Debrecenben, paraszti családban",
          "Szegeden, tanári családban",
          "Nagyváradon, kereskedő családban",
        ],
        correct_answer: "Budapesten, jómódú polgári (gyógyszerész) családban",
        explanation: "Örkény István 1912-ben született Budapesten, jómódú polgári (gyógyszerész) családban.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen szakmai képzettséget szerzett Örkény István, mielőtt teljesen az írásnak szentelte volna magát?",
        options: [
          "gyógyszerészmérnöki, majd vegyészmérnöki oklevelet",
          "jogi diplomát",
          "orvosi diplomát",
          "tanári képesítést",
        ],
        correct_answer: "gyógyszerészmérnöki, majd vegyészmérnöki oklevelet",
        explanation: "Örkény maga is gyógyszerészmérnöki, majd vegyészmérnöki oklevelet szerzett.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen irányzathoz kapcsolódtak Örkény fiatalkori írásai, mielőtt kialakult volna jellegzetes groteszk hangja?",
        options: [
          "az avantgárd-szürrealista törekvésekhez",
          "a klasszicista hagyományhoz",
          "a népi-nemzeti irányzathoz",
          "a szocialista realizmushoz",
        ],
        correct_answer: "az avantgárd-szürrealista törekvésekhez",
        explanation: "Fiatalkori írásai még a korszak avantgárd-szürrealista törekvéseihez kapcsolódtak.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben hunyt el Örkény István?",
        options: ["1979-ben", "1956-ban", "1967-ben", "1990-ben"],
        correct_answer: "1979-ben",
        explanation: "Örkény István 1979-ben hunyt el Budapesten.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik évben jelent meg (majd bővült folyamatosan) az Egyperces novellák gyűjteménye?",
        options: ["1967-ben", "1942-ben", "1956-ban", "1979-ben"],
        correct_answer: "1967-ben",
        explanation: "Az Egyperces novellák 1967-ben jelent meg, és folyamatosan bővülő gyűjtemény lett.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen formai eszközzel provokálja az olvasót Örkény egyes egyperces novelláiban?",
        options: [
          "közvetlenül az olvasóhoz fordul instrukciókkal, hogyan kellene olvasni a szöveget",
          "hosszú, filozofikus előszavakkal",
          "lábjegyzetes tudományos apparátussal",
          "verses betétekkel",
        ],
        correct_answer: "közvetlenül az olvasóhoz fordul instrukciókkal, hogyan kellene olvasni a szöveget",
        explanation: "Örkény gyakran magához az olvasóhoz fordul instrukciókkal, ezzel is felhívva a figyelmet a forma és a valóság viszonyára.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miről szól Örkény másik ismert drámája, a Macskajáték?",
        options: [
          "két idős asszony (nővérek) kapcsolatáról, az öregedés és a magány témájáról",
          "egy vidéki család és egy zsarnoki őrnagy viszonyáról",
          "egy koncentrációs tábor túlélőjének sorsáról",
          "egy fiatal pár szerelmi történetéről",
        ],
        correct_answer: "két idős asszony (nővérek) kapcsolatáról, az öregedés és a magány témájáról",
        explanation: "A Macskajáték két idős asszony (nővérek) kapcsolatán keresztül dolgozza fel az öregedés és a magány témáit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen felismerés áll Örkény groteszk világlátásának hátterében?",
        options: [
          "hogy a 20. század történelmi tapasztalatai csak a komikum és tragikum egyidejű együttállásában ábrázolhatók hitelesen",
          "hogy a humor mindig gyógyítja a történelmi traumákat",
          "hogy a realista ábrázolás a legmegfelelőbb forma minden témára",
          "hogy a groteszk csak szórakoztató célt szolgálhat",
        ],
        correct_answer: "hogy a 20. század történelmi tapasztalatai csak a komikum és tragikum egyidejű együttállásában ábrázolhatók hitelesen",
        explanation: "Örkény groteszkje az a felismerés, hogy csak a groteszk képes hiteles formát adni a 20. század történelmi tapasztalatainak.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen nemzetközi hatást ért el Örkény István életműve?",
        options: [
          "az egyperces novella és a Tóték egyaránt nemzetközi elismerést hoztak számára",
          "munkássága csak Magyarországon belül volt ismert",
          "kizárólag a szomszédos országokban vált népszerűvé",
          "csak halála után évtizedekkel ismerték el külföldön",
        ],
        correct_answer: "az egyperces novella és a Tóték egyaránt nemzetközi elismerést hoztak számára",
        explanation: "Az egyperces novella műfaji találmánya és a Tóték groteszk-abszurd drámája egyaránt nemzetközi elismerést hoztak Örkénynek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi formailag az egyperces novella műfaját?",
        options: [
          "rendkívül rövid, sűrített, csattanóra kihegyezett szöveg",
          "hosszú, több száz oldalas elbeszélés",
          "kizárólag dialógusformájú, drámai szöveg",
          "verses formában íródott elbeszélés",
        ],
        correct_answer: "rendkívül rövid, sűrített, csattanóra kihegyezett szöveg",
        explanation: "Az egyperces novella rendkívül rövid, sűrített, csattanóra kihegyezett szöveg.",
        difficulty: 1,
      },
    ],
  },
];
