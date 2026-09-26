import { TopicSeed } from "./angol";

export const magyarTopics: TopicSeed[] = [
  {
    slug: "petofi-sandor-kolteszete",
    title: "Petőfi Sándor költészete",
    level: "mindketto",
    theme: "Életművek",
    order_index: 1,
    summary_markdown:
      "A magyar romantika és a népiesség legnagyobb alakja. Rövid, alig 26 éves életműve alatt megújította a magyar lírát: népdalszerű egyszerűség, szenvedélyes szerelmi és tájköltészet, valamint a forradalmi-politikai vers válik jellemzővé rá.",
    content_markdown: `
## Pályakép röviden

Petőfi Sándor (1823–1849) vándorszínészként, majd újságíróként indult, és alig egy évtized alatt a kor legnépszerűbb, legtöbbet vitatott költőjévé vált. 1848–49-ben a forradalom és szabadságharc egyik vezéralakja; 1849 nyarán, a segesvári csatában tűnt el, holtteste sosem került elő, ami legendák sorát indította el.

## Korszakok és fő témák

- **Népiesség**: a népdal formakincsét (egyszerű strófaszerkezet, refrén, természeti kép + érzelmi párhuzam) emeli be a "magas" költészetbe. Nem csak témában (pásztor, betyár, alföldi táj), hanem formanyelvben is a nép nyelvén szólal meg.
- **Szerelmi líra**: Szendrey Júliához írt versei (pl. *Szeptember végén*, 1847, Koltón) a boldogság és a mulandóság-tudat feszültségét fogalmazzák meg.
- **Tájköltészet**: az Alföld mint identitást meghatározó táj (*Az Alföld*, *A puszta, télen*) — a romantikus tájleírás nála sosem öncélú, mindig egy gondolati vagy érzelmi tartalom hordozója.
- **Létösszegző, filozofikus versek**: *Egy gondolat bánt engemet* (1846) a "szép csendes" halál helyett a forradalmi hősi halált állítja eszményként — ez a vers jövendöli meg saját sorsát is.
- **Forradalmi-politikai költészet**: 1848 tavaszától a Nemzeti dal (1848. március 15.) és Az apostol (1848) a közösségi szerepvállalás és a forradalmár-költő szerepét fogalmazza meg.

## Kiemelt művek

**Nemzeti dal** — a márciusi forradalom "himnusza", refrénje ("Esküszünk...") a közösségi cselekvésre szólít; retorikus, szónoki versbeszéd.

**Szeptember végén** — a szerelmi és elégikus líra csúcsa: a nyár–tél, élet–halál ellentétpár a vers alapszerkezete; a lírai én saját halálát képzeli el, és felesége hűségét kéri számon előre.

**János vitéz** (1845) — elbeszélő költemény (verses mese/eposz), Kukorica Jancsi és Iluska története, amely a népi elbeszélő hagyományt és a romantikus kalandregény elemeit ötvözi.

**Egy gondolat bánt engemet** — a "szabadságharcban elesni" mint a legszebb halál gondolata; a vers zaklatott, halmozásokra épülő szerkezete a forradalmi pátoszt közvetíti.

## Stílus és verselés

Petőfi verselése jellemzően könnyed, dalszerű (gyakran magyaros, ütemhangsúlyos), a népdalformát emeli irodalmi rangra. Stíluseszközei közt kiemelt szerepe van az egyszerű, konkrét képeknek, a halmozásnak és az önmegszólító, retorikus alakzatoknak.

## Jelentősége

Petőfi a magyar líra egyik legnagyobb megújítója: a népi és a "magas" költészet határait eltüntetve teremtett új, közérthető, mégis művészileg igényes hangot, amely generációkra hatott (pl. Arany János barátsága és pályája is innen indul).
`,
    key_concepts: [
      "népiesség",
      "létösszegző vers",
      "forradalmi romantika",
      "helyzetdal",
      "elbeszélő költemény",
    ],
    source_refs: [
      { label: "Petőfi Sándor összes költeménye (MEK)", url: "https://mek.oszk.hu/01000/01006/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Petőfi Sándor (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Pet%C5%91fi_S%C3%A1ndor" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik versét tartják a szerelmi líra és az elégia egyik csúcsának, amelyet Koltón írt 1847-ben?",
        options: ["Szeptember végén", "Nemzeti dal", "Az Alföld", "Egy gondolat bánt engemet"],
        correct_answer: "Szeptember végén",
        explanation: "A Szeptember végén a nyár–tél és élet–halál ellentétére épülő szerelmi-elégikus vers, Szendrey Júliához írta.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi elsősorban Petőfi népies költészetét?",
        options: [
          "a népdal formakincsének beemelése a magas költészetbe",
          "kizárólag vallásos témák feldolgozása",
          "a klasszikus antik versformák szigorú követése",
          "a városi polgári élet ábrázolása",
        ],
        correct_answer: "a népdal formakincsének beemelése a magas költészetbe",
        explanation: "Petőfi a népdal egyszerű formáit és nyelvét emelte irodalmi rangra, nem csak témában, hanem formanyelvben is.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik művében állítja a forradalmi hősi halált eszményként a \"szép csendes\" halállal szemben?",
        options: ["Egy gondolat bánt engemet", "János vitéz", "Szeptember végén", "Az Alföld"],
        correct_answer: "Egy gondolat bánt engemet",
        explanation: "A vers a csatában, a szabadságért elesést állítja a legszebb halálnak – ami saját sorsát is megjövendölte.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen műfaj a János vitéz?",
        options: ["elbeszélő költemény", "tragédia", "ballada", "önéletrajzi regény"],
        correct_answer: "elbeszélő költemény",
        explanation: "A János vitéz verses mese/elbeszélő költemény, amely ötvözi a népi elbeszélő hagyományt a romantikus kalandtörténettel.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik esemény kapcsolódik közvetlenül a Nemzeti dalhoz?",
        options: ["1848. március 15-i forradalom", "1849-es segesvári csata", "1846-os erdélyi utazás", "1847-es koltói esküvő"],
        correct_answer: "1848. március 15-i forradalom",
        explanation: "A Nemzeti dalt a pesti forradalom napján, 1848. március 15-én szavalta fel Petőfi.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "arany-janos-eletmuve",
    title: "Arany János balladái és a Toldi",
    level: "mindketto",
    theme: "Életművek",
    order_index: 2,
    summary_markdown:
      "A népi-nemzeti epika és a magyar ballada legnagyobb mestere. Fő művei a Toldi-trilógia és a nagykőrösi évek (1851–1860) alatt írt balladák, amelyekben a bűn-bűnhődés, a lelkiismeret és a történelmi felelősség kérdései állnak középpontban.",
    content_markdown: `
## Pályakép röviden

Arany János (1817–1882) Nagyszalontán született, tanítóként és jegyzőként kezdte pályáját. A *Toldi* 1846-os pályadíjnyertes sikere hozta meg számára az elismerést és Petőfi barátságát. 1851–1860 között Nagykőrösön tanított — ez a balladák fő korszaka —, később a Kisfaludy Társaság, majd a Magyar Tudományos Akadémia főtitkára volt.

## A Toldi-trilógia

- **Toldi** (1846) — az ifjú Miklós története: a parasztsorba taszított, de erejével és igazságérzetével kitűnő hős felemelkedése a királyi udvarba. Népi hőse a nemzeti eposzi hagyományt folytatja.
- **Toldi estéje** (1854) — az öregkori Toldi kiszorulása a megváltozott, lovagiaskodó udvari világból; melankolikus, elégikus hangvétel.
- **Toldi szerelme** (1879) — a trilógia záródarabja, Toldi és Piroska szerelmének és a hűbéri-lovagi világ intrikáinak története.

## Balladák (nagykőrösi korszak)

Arany balladái tömör, drámai szerkezetűek, gyakran a **bűn és bűnhődés**, illetve a **lelkiismeret-furdalás** motívumára épülnek:

- **Ágnes asszony** — a gyilkosságba hajszolt asszony őrülete és megtisztulás-vágya; a refrén ("Ágnes asszony a patakban...") a lelki teher ismétlődését jelzi.
- **A walesi bárdok** (1857) — allegorikus történelmi ballada, amelyet Ferenc József magyarországi látogatására írt (bár nem nyilvánosan): a walesi bárdok inkább vállalják a máglyahalált, mint hogy dicsérjék a zsarnok Eduárd királyt — a némaság és a passzív ellenállás parabolája.
- **Tetemre hívás** — a halott melletti "istenítélet" motívuma: a gyilkos önmagát leplezi le a holttest mellett.
- **Szondi két apródja** — a hűség és a nemzeti önfeláldozás témája Szondi György egri/drégelyi kapitány halálának emlékén keresztül.

## Elmélet és egyéb művek

Arany az **objektív líra** elméletének megfogalmazója: szerinte a költő rejtse el saját személyét a mű mögé, és a tárgy, a téma, a hősök beszéljenek helyette — ezzel állítja szembe magát a szubjektív, ömlengő romantikával. Korai szatirikus műve *Az elveszett alkotmány* (1845), utolsó nagy vállalkozása a befejezetlen *Buda halála* (1863, a tervezett Csaba-trilógia első része).

## Jelentősége

Arany János a magyar epikus hagyomány (népi-nemzeti eposz) és a ballada műfajának egyaránt klasszikusa; nyelvi tudatossága, szerkesztői és nyelvújítói munkássága (pl. az MTA szótári munkálatai) a magyar irodalmi nyelv egyik legfontosabb formálójává tette.
`,
    key_concepts: [
      "népi-nemzeti eposz",
      "objektív líra",
      "bűn és bűnhődés",
      "ballada",
      "Toldi-trilógia",
    ],
    source_refs: [
      { label: "Arany János összes költeménye (MEK)", url: "https://mek.oszk.hu/00500/00597/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Arany János (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Arany_J%C3%A1nos" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik mű hozta meg Arany János számára az elismerést és Petőfi barátságát 1846-ban?",
        options: ["Toldi", "Toldi estéje", "Buda halála", "Az elveszett alkotmány"],
        correct_answer: "Toldi",
        explanation: "A Toldi pályadíjnyertes sikere (1846) alapozta meg Arany hírnevét és Petőfivel való barátságát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik balladában utasítják el a walesi bárdok, hogy dicsőítsék a zsarnok királyt?",
        options: ["A walesi bárdok", "Ágnes asszony", "Tetemre hívás", "Szondi két apródja"],
        correct_answer: "A walesi bárdok",
        explanation: "A walesi bárdok inkább a máglyahalált vállalják, mint hogy dicsérjék Eduárd királyt – a passzív ellenállás allegóriája.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent Arany \"objektív líra\" elmélete?",
        options: [
          "a költő rejtse el saját személyét a mű mögé",
          "a költészetnek mindig politikai üzenetet kell hordoznia",
          "a versformának kötelezően szonettnek kell lennie",
          "a líra csak természeti témákat dolgozhat fel",
        ],
        correct_answer: "a költő rejtse el saját személyét a mű mögé",
        explanation: "Arany szerint a tárgy és a hősök beszéljenek a mű helyett, szemben a szubjektív romantikus ömlengéssel.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol tanított Arany János abban a korszakban, amikor a legtöbb balladáját írta?",
        options: ["Nagykőrösön", "Debrecenben", "Pesten", "Kolozsváron"],
        correct_answer: "Nagykőrösön",
        explanation: "Az 1851–1860 közötti nagykőrösi tanári évek a ballada-korszak fő időszaka.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik befejezetlenül maradt eposz a tervezett Csaba-trilógia első része?",
        options: ["Buda halála", "Toldi szerelme", "Az elveszett alkotmány", "Toldi estéje"],
        correct_answer: "Buda halála",
        explanation: "A Buda halála (1863) Arany utolsó nagy, befejezetlen epikai vállalkozása volt.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "ady-endre-kolteszete",
    title: "Ady Endre költészete",
    level: "mindketto",
    theme: "Életművek",
    order_index: 3,
    summary_markdown:
      "A 20. század eleji magyar líra megújítója, a Nyugat folyóirat vezéralakja. Szimbolista-szecessziós stílusa, Léda-versei és a \"magyar Ugar\" társadalomkritikája botrányt és elismerést egyaránt kiváltott.",
    content_markdown: `
## Pályakép röviden

Ady Endre (1877–1919) Érmindszenten született, újságíróként kezdte pályáját, majd nagyváradi és párizsi évei alatt ismerkedett meg a francia szimbolizmussal. Az **Új versek** (1906) kötete korszakhatár a magyar lírában: ezzel indul a Nyugat folyóirat (1908–) körüli modern magyar költészet.

## Fő témák és motívumok

- **Léda-líra**: Diósy Ödönné Brüll Adél ("Léda") ihlette szerelmi verscsoport — szenvedélyes, önpusztító, ambivalens viszony a nőalak és a szerelmi én között (pl. *Héja-nász az avaron*).
- **Magyarság-versek / "magyar Ugar"**: a modernizálódni képtelen, provinciális Magyarország kritikája (*A magyar Ugar*), a haladás és az elmaradottság feszültsége.
- **Isten-versek**: a hittel viaskodó, kételkedő-kereső lírai én (főleg a kései korszakban).
- **Forradalmi, próféta-szerepű versek**: Ady a költőt a nemzet lelkiismeretének, jövőbe látó prófétájának tekinti (*Góg és Magóg fia vagyok én*).

## Kiemelt versek

**Góg és Magóg fia vagyok én** — az Új versek nyitóverse, programadó vers: a lírai én magát "új, énekes Vazul"-ként, betörő, a régi rendet felforgató prófétaként határozza meg.

**A magyar Ugar** — a posványos, terméketlen, a modernséget elutasító magyar valóság szimbóluma; a cím maga is a társadalomkritika sűrítménye.

**Héja-nász az avaron** — a Léda-szerelem egyik emblematikus verse: a "két kósza héja" metafora a szenvedélyes, de kíméletlen, egymást tépő szerelmi viszonyt fejezi ki.

## Stílus

Ady szimbolista-szecessziós stílusa merész, sokszor sokkoló képzettársításokra, neologizmusokra és a bibliai-mitológiai utalások szabad, szubjektív újraértelmezésére épül. Verselése ötvözi a magyaros és a nyugat-európai (főleg francia) hagyományt.

## Jelentősége

Ady a modern magyar líra egyik megalapítója: az Új versek megjelenése (1906) korszakváltást jelent, ő maga pedig a Nyugat első nemzedékének vezéralakja, akinek költészete a magyar társadalmi-nemzeti önreflexió egyik legfontosabb hangja lett.
`,
    key_concepts: [
      "szimbolizmus",
      "Nyugat folyóirat",
      "Léda-versek",
      "magyar Ugar",
      "próféta-szerep",
    ],
    source_refs: [
      { label: "Ady Endre összes verse (MEK)", url: "https://mek.oszk.hu/00500/00588/" },
      { label: "Petőfi Irodalmi Múzeum – Ady Endre", url: "https://pim.hu/hu" },
      { label: "A Nyugat folyóirat digitális archívuma", url: "https://epa.oszk.hu/00000/00022/" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik kötet jelenti Ady költészetében és a magyar lírában a korszakhatárt?",
        options: ["Új versek (1906)", "János vitéz", "Toldi", "A walesi bárdok"],
        correct_answer: "Új versek (1906)",
        explanation: "Az Új versek 1906-os megjelenése indítja el a modern magyar líra korszakát, a Nyugat köré szerveződő megújulást.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Ki volt Léda, akihez Ady szerelmi verseinek egy jelentős csoportja íródott?",
        options: ["Diósy Ödönné Brüll Adél", "Szendrey Júlia", "Csinszka (Boncza Berta)", "Arany Julianna"],
        correct_answer: "Diósy Ödönné Brüll Adél",
        explanation: "Léda Ady múzsája és szeretője volt, valódi neve Diósy Ödönné Brüll Adél.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit szimbolizál \"A magyar Ugar\" fogalma Ady költészetében?",
        options: [
          "a modernizálódni képtelen, provinciális Magyarországot",
          "a magyar táj szépségét és termékenységét",
          "a fővárosi polgári élet dinamizmusát",
          "a vallásos hit megújulását",
        ],
        correct_answer: "a modernizálódni képtelen, provinciális Magyarországot",
        explanation: "Az Ugar (parlagon hagyott föld) képe a fejlődésre képtelen, elmaradott magyar valóság szimbóluma Adynál.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik folyóirat vezéralakja volt Ady Endre?",
        options: ["Nyugat", "Élet és Irodalom", "Kortárs", "Vigilia"],
        correct_answer: "Nyugat",
        explanation: "Ady a Nyugat első nemzedékének egyik legmeghatározóbb, vezető költője volt.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen irodalmi irányzat hatása érvényesül leginkább Ady stílusában?",
        options: ["szimbolizmus", "klasszicizmus", "realizmus", "barokk"],
        correct_answer: "szimbolizmus",
        explanation: "Ady a francia szimbolizmus (pl. Baudelaire) hatását ötvözte a magyar költői hagyománnyal.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "babits-mihaly-palyakepe",
    title: "Babits Mihály pályaképe",
    level: "mindketto",
    theme: "Életművek",
    order_index: 4,
    summary_markdown:
      "A Nyugat első nemzedékének intellektuális, esztétizáló költő-alakja, később a folyóirat főszerkesztője. Fő műve a Jónás könyve, amely a próféta-sors és a felelősségvállalás kérdését állítja a fasizmus előretörésének árnyékában.",
    content_markdown: `
## Pályakép röviden

Babits Mihály (1883–1941) Szekszárdon született, klasszika-filológiát és modern nyelveket tanult. A Nyugat első nemzedékének tagja, 1929-től a folyóirat főszerkesztője. Költészete kezdettől intellektuális, filozófiai mélységű, formailag rendkívül igényes — sokan "a formaművész" jelzővel illetik.

## Fő korszakok és témák

- **Korai, esztétizáló korszak**: a szépség, a tudás és a forma kultusza, gazdag, artisztikus verselés.
- **Első világháború és pacifizmus**: a háborúellenesség és a humanista értékek védelme (pl. *Húsvét előtt*, *Fortissimo*) — utóbbi miatt haditörvényszéki eljárás fenyegette.
- **Kései, betegség-korszak**: gégerákja (amely 1941-es halálához vezetett) idején írt versei a testi szenvedés, a némaság és a felelősség kérdéseit dolgozzák fel.

## Jónás könyve (1938)

Babits legismertebb műve a bibliai Jónás-történet szabad átdolgozása: Jónás Isten parancsára Ninivébe küldetik, hogy figyelmeztesse a várost a pusztulásra, de ő menekülne a feladat elől. A mű a **próféta felelősségének** és a **közösség iránti kötelességnek** az allegóriája — a mű megírásának idején (a fasizmus és a háborús fenyegetés árnyékában) különösen éles politikai-morális üzenetet hordoz: a költő/értelmiségi nem hallgathat, ha veszélyt lát.

A műhöz kapcsolódó **Jónás imája** (függelék) összegző, vallomásos vers: a költő imájában kéri, hogy ha már nem tud tovább szólni, legalább "ne fogják be a száját" — a szólás szabadságáért és kötelességéért való könyörgés.

## Egyéb jelentős munkássága

Babits kiemelkedő **műfordító** is: legnagyobb vállalkozása Dante *Isteni Színjátékának* magyar fordítása. Esszéistaként és irodalomtörténészként (*Az európai irodalom története*) is meghatározó volt, emellett regényt is írt (*Halálfiai*, családregény).

## Jelentősége

Babits Mihály a Nyugat első nemzedékének egyik legnagyobb formaművésze és erkölcsi tekintélye, akinek életműve a tiszta esztétikai igényesség és a társadalmi-morális felelősségvállalás összekapcsolását példázza.
`,
    key_concepts: [
      "Nyugat első nemzedéke",
      "intellektuális líra",
      "próféta-szerep",
      "Jónás könyve",
      "műfordítás",
    ],
    source_refs: [
      { label: "Babits Mihály összegyűjtött versei (MEK)", url: "https://mek.oszk.hu/00600/00602/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Babits Mihály (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Babits_Mih%C3%A1ly" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik bibliai történet szabad átdolgozása a Jónás könyve?",
        options: ["Jónás és a cethal története", "Dávid és Góliát története", "József története", "Mózes története"],
        correct_answer: "Jónás és a cethal története",
        explanation: "Babits a Jónás-történetet dolgozza fel, amelyben a próféta Isten parancsára figyelmezteti Ninivét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen fő üzenetet hordoz a Jónás könyve a megírásának korában (1938)?",
        options: [
          "a próféta/értelmiségi nem hallgathat, ha veszélyt lát",
          "a vallás elutasítását kell hirdetni",
          "a magány dicsőítését",
          "a természeti szépség önmagáért való csodálatát",
        ],
        correct_answer: "a próféta/értelmiségi nem hallgathat, ha veszélyt lát",
        explanation: "A mű a fasizmus előretörésének árnyékában íródott, és a felelősségvállalás, a szólás kötelességének allegóriája.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik világirodalmi mű fordítása Babits egyik legnagyobb vállalkozása?",
        options: ["Dante: Isteni Színjáték", "Shakespeare: Hamlet", "Homérosz: Odüsszeia", "Goethe: Faust"],
        correct_answer: "Dante: Isteni Színjáték",
        explanation: "Babits Mihály Dante Isteni Színjátékának magyar fordítása az egyik legjelentősebb műfordítói teljesítménye.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen betegség vezetett Babits Mihály halálához 1941-ben?",
        options: ["gégerák", "tüdőgyulladás", "szívinfarktus", "leukémia"],
        correct_answer: "gégerák",
        explanation: "Babits utolsó éveit súlyos gégerákkal küzdve élte, ez vezetett 1941-es halálához.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik folyóiratnak volt Babits Mihály 1929-től a főszerkesztője?",
        options: ["Nyugat", "Válasz", "Napkelet", "Erdélyi Helikon"],
        correct_answer: "Nyugat",
        explanation: "Babits 1929-től a Nyugat folyóirat főszerkesztője volt egészen haláláig.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "kosztolanyi-dezso-eletmuve",
    title: "Kosztolányi Dezső prózája és költészete",
    level: "mindketto",
    theme: "Életművek",
    order_index: 5,
    summary_markdown:
      "A Nyugat első nemzedékének sokoldalú alkotója: regényei (Édes Anna, Pacsirta) a lélektani realizmus, novellái (Esti Kornél) a groteszk-ironikus önreflexió, kései versei pedig a lét és elmúlás nagy kérdéseinek megszólaltatói.",
    content_markdown: `
## Pályakép röviden

Kosztolányi Dezső (1885–1936) Szabadkán született, a Nyugat első nemzedékének tagja: költő, regényíró, novellista, esszéista, kritikus és műfordító egy személyben. Nyelvi virtuozitása és formai igényessége a teljes magyar prózahagyományra hatással volt. 1936-ban leukémiában halt meg.

## Regényei

**Édes Anna** (1926) — társadalmi-lélektani regény: a cselédlány, Édes Anna gyilkosságának története a Horthy-korszak Budapestjén. A regény nem old fel egyértelmű ítéletet: a tettet a társadalmi kiszolgáltatottság, a megaláztatások sorozata és a lélektani elfojtás felől is megvilágítja, kérdésessé téve az egyértelmű bűnösség fogalmát.

**Pacsirta** (1924) — egy vidéki, csúnyácska lány (Pacsirta) egyhetes távolléte alatt szüleinek élete átalakul: a mű a vidéki lét sivárságát és a család önáltatásait mutatja be finom iróniával.

## Esti Kornél-novellák (1933)

Az Esti Kornél-ciklus főszereplője az író alteregója: egy szabadszájú, konvenciókat felrúgó, groteszk figura, akinek történetei ironikus-önreflexív módon kérdőjelezik meg az elbeszélés és a valóság viszonyát. A novellák a modern, önmagára reflektáló elbeszélésmód (metafikció) korai magyar példái.

## Költészete

Korai lírája **impresszionista-szecessziós**: a gyermeki nézőpont és a pillanatnyi benyomások rögzítése jellemzi (*A szegény kisgyermek panaszai*, 1910). Kései kötete, a *Számadás* (1935) a halálközelség tudatában született **létösszegző versek** gyűjteménye:

- **Halotti beszéd** (1933) — a nyelvi jel és a megnevezett ember/élet viszonyának, az egyediség elveszíthetetlenségének verse ("Milyen furcsa: a világ akkor is így, / és akkor sem másképp...").
- **Hajnali részegség** (1933) — a lét csodájának, a hétköznapi élet értékének felismerése egy hajnali pillanat kapcsán; a nagy, filozofikus kérdéseket a versélmény hétköznapi konkrétsága teszi átélhetővé.

## Jelentősége

Kosztolányi Dezső a magyar próza és líra egyik legsokoldalúbb, legnyelvérzékenyebb alkotója: a lélektani realizmus, a groteszk-ironikus elbeszélésmód és a létfilozófiai líra egyaránt meghatározó teljesítménye a 20. századi magyar irodalomnak.
`,
    key_concepts: [
      "lélektani realizmus",
      "Esti Kornél",
      "impresszionizmus-szecesszió",
      "létösszegző vers",
      "Nyugat első nemzedéke",
    ],
    source_refs: [
      { label: "Kosztolányi Dezső összegyűjtött versei (MEK)", url: "https://mek.oszk.hu/00700/00753/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "Kosztolányi Dezső (Wikipédia)", url: "https://hu.wikipedia.org/wiki/Kosztol%C3%A1nyi_Dezs%C5%91" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Ki a főszereplője az Édes Anna című regénynek?",
        options: ["egy cselédlány", "egy vidéki tanító", "egy budapesti újságíró", "egy katonatiszt"],
        correct_answer: "egy cselédlány",
        explanation: "Az Édes Anna egy cselédlány gyilkosságának történetét dolgozza fel a Horthy-korszak Budapestjén.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen elbeszélői eljárás jellemzi az Esti Kornél-novellákat?",
        options: [
          "az alteregón keresztüli, önreflexív, groteszk elbeszélésmód",
          "szigorúan lineáris, kronologikus történetmesélés",
          "kizárólag verses forma",
          "dokumentumfilmszerű, tényközlő stílus",
        ],
        correct_answer: "az alteregón keresztüli, önreflexív, groteszk elbeszélésmód",
        explanation: "Esti Kornél Kosztolányi alteregója, a novellák ironikusan reflektálnak az elbeszélés és a valóság viszonyára.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik kötet a kései, létösszegző verseket tartalmazza?",
        options: ["Számadás", "A szegény kisgyermek panaszai", "Meztelenül", "Kenyér és bor"],
        correct_answer: "Számadás",
        explanation: "A Számadás (1935) a halálközelség tudatában született, összegző jellegű verseket tartalmazza.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik verse foglalkozik a nyelvi jel és az egyediség elveszíthetetlenségének kérdésével?",
        options: ["Halotti beszéd", "Hajnali részegség", "Mostan színes tintákról álmodom", "Boldog, szomorú dal"],
        correct_answer: "Halotti beszéd",
        explanation: "A Halotti beszéd a megnevezett ember egyediségének és elveszíthetetlenségének kérdését járja körül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen betegségben halt meg Kosztolányi Dezső 1936-ban?",
        options: ["leukémia", "gégerák", "tüdőgyulladás", "szívelégtelenség"],
        correct_answer: "leukémia",
        explanation: "Kosztolányi Dezső leukémiában hunyt el 1936-ban.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "jozsef-attila-kolteszete",
    title: "József Attila költészete",
    level: "mindketto",
    theme: "Életművek",
    order_index: 6,
    summary_markdown:
      "A 20. századi magyar líra egyik legnagyobb, legtragikusabb sorsú alakja. Költészetében a szocialista eszmék, a freudi pszichoanalízis hatása és a személyes szorongás-élmény fonódik össze filozofikus mélységű, formailag újító versekben.",
    content_markdown: `
## Pályakép röviden

József Attila (1905–1937) szegény munkáscsaládban nőtt fel Budapesten, gyermekkora nélkülözésben, apja korai elhagyásában és nevelőszülőknél telt. Már fiatalon feltűnt tehetségével, de a *Tiszta szívvel* (1925) című botrányverse miatt eltanácsolták az egyetemről. Élete végéig anyagi nehézségekkel és súlyos lelki válságokkal küzdött; 1937. december 3-án Balatonszárszón vonat elé vetette magát.

## Alkotói korszakok

- **Korai, avantgárd hatású versek**: expresszionista-szürrealista képalkotás, formai kísérletezés.
- **Népi-szocialista korszak**: társadalmi igazságtalanságok, a munkásosztály sorsának megszólaltatása (*Külvárosi éj*, *Elégia*).
- **Klasszicizálódó, filozofikus érett korszak**: a freudi pszichoanalízis és a marxista dialektika hatása egyesül a személyes szorongás-élménnyel (*Eszmélet*, *Óda*, *Nagyon fáj*).

## Kiemelt versek

**Tiszta szívvel** (1925) — a kitaszított, nincstelen fiatal dackal vállalt "bűnössége"; provokatív, a polgári erkölcsöt kihívó hangvétele miatt botrányt keltett, és az egyetemről való eltanácsolásához vezetett.

**Óda** (1933) — Szántó Judit ihlette szerelmi nagyvers, amelyben a szerelmi élmény kozmikus, testi-lelki egésszé tágul; a vers a személyes érzés és a filozofikus lét-elemzés összekapcsolásának csúcsteljesítménye.

**Eszmélet** (1934) — komplex, montázsszerű szerkezetű filozofikus vers a tudat és a valóság, a magány és a remény viszonyáról; az egyik legnehezebben értelmezhető, ugyanakkor legtöbbet elemzett verse.

**Levegőt!** (1935–36) — a társadalmi és személyes fojtogatottság, a szabadság utáni vágy verse.

**Nagyon fáj** (1936, azonos című kötet) — a magány, a szeretethiány és a testi-lelki szenvedés nyílt, fájdalmas megfogalmazása, amely már a közelgő tragédiát is előrevetíti.

## Stílus és hatások

József Attila költészetében egyedülálló módon ötvöződik a **klasszikus formakultúra** (kötött versformák, rímek) a **modern, montázsszerű képalkotással** és a **filozófiai-pszichológiai reflexióval**. Freud hatására különösen a tudatalatti, a gyermekkori trauma és az anyahiány motívuma hangsúlyos (*Kései sirató*, *Mama*).

## Jelentősége

József Attila életműve a 20. századi magyar líra egyik csúcsteljesítménye: a személyes szenvedés és a társadalmi-filozófiai reflexió összekapcsolása, valamint formai újításai miatt a mai napig az egyik legtöbbet olvasott és elemzett magyar költő.
`,
    key_concepts: [
      "freudi hatás",
      "szocialista líra",
      "létösszegző vers",
      "avantgárd",
      "klasszicizálódás",
    ],
    source_refs: [
      { label: "József Attila összes versei (MEK)", url: "https://mek.oszk.hu/11800/11864/" },
      { label: "Petőfi Irodalmi Múzeum", url: "https://pim.hu/hu" },
      { label: "József Attila (Wikipédia)", url: "https://hu.wikipedia.org/wiki/J%C3%B3zsef_Attila" },
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik verse miatt tanácsolták el József Attilát az egyetemről 1925-ben?",
        options: ["Tiszta szívvel", "Óda", "Eszmélet", "Levegőt!"],
        correct_answer: "Tiszta szívvel",
        explanation: "A Tiszta szívvel provokatív hangvétele miatt keltett botrányt, ami az eltanácsoláshoz vezetett.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kihez kapcsolódik az Óda című vers ihletadó élménye?",
        options: ["Szántó Judit", "Flóra (Illyés Gyuláné)", "Vágó Márta", "Édesanyja"],
        correct_answer: "Szántó Judit",
        explanation: "Az Óda Szántó Judithoz fűződő szerelmi élményből született.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen pszichológiai irányzat hatása jelentős József Attila kései költészetében?",
        options: ["a freudi pszichoanalízis", "a behaviorizmus", "a Jung-féle archetípus-elmélet kizárólagosan", "a gestaltpszichológia"],
        correct_answer: "a freudi pszichoanalízis",
        explanation: "Freud hatására hangsúlyos nála a tudatalatti, a gyermekkori trauma és az anyahiány motívuma.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan halt meg József Attila 1937-ben?",
        options: [
          "Balatonszárszón vonat elé vetette magát",
          "hosszú betegség után hunyt el",
          "a fronton esett el",
          "szívrohamban halt meg",
        ],
        correct_answer: "Balatonszárszón vonat elé vetette magát",
        explanation: "József Attila 1937. december 3-án Balatonszárszón öngyilkos lett.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik vers montázsszerű, komplex szerkezetével a tudat és valóság viszonyát elemzi?",
        options: ["Eszmélet", "Tiszta szívvel", "Óda", "Nagyon fáj"],
        correct_answer: "Eszmélet",
        explanation: "Az Eszmélet az egyik legkomplexebb szerkezetű, filozofikus verse a tudat és a valóság viszonyáról.",
        difficulty: 3,
      },
    ],
  },
];
