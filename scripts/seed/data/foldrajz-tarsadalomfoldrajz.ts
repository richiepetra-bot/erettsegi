import type { TopicSeed } from "./angol";

export const foldrajzTarsadalomfoldrajzTopics: TopicSeed[] = [
  {
    slug: "nepesseg-nepessegrobbanas-es-demografiai-atmenet",
    title: "Népesség — népességrobbanás és demográfiai átmenet",
    level: "mindketto",
    theme: "Népességföldrajz",
    order_index: 16,
    summary_markdown:
      "A Föld népessége a 20. században robbanásszerűen nőtt, ezt a jelenséget a demográfiai átmenet modellje magyarázza, amely a születési és halálozási ráta fokozatos csökkenésének egymást követő szakaszait írja le.",
    content_markdown: `
## A népességrobbanás

A Föld népessége hosszú évezredeken át lassan nőtt, ám a 20. század folyamán — elsősorban az orvostudomány fejlődése, a higiéniai viszonyok javulása és a mezőgazdasági termelékenység növekedése (zöld forradalom) miatt — a halálozási ráta drasztikusan csökkent, míg a születési ráta sokáig magas maradt. Ennek eredménye a **népességrobbanás**: a világ népessége 1900 és 2000 között kb. 1,6 milliárdról 6 milliárd fölé nőtt, napjainkban pedig meghaladja a 8 milliárdot. A növekedés súlypontja mára a fejlődő országokra (Afrika, Dél-Ázsia) helyeződött át, míg a fejlett országokban a népességnövekedés lelassult vagy meg is fordult.

## A demográfiai átmenet modellje

A **demográfiai átmenet modellje** azt írja le, hogyan változik egy társadalom népesedési mintázata a gazdasági-társadalmi fejlődés során, jellemzően négy (néhol öt) szakaszban:

1. **hagyományos (premodern) szakasz**: magas születési és magas halálozási ráta, ezért lassú népességnövekedés — jellemző volt a történelem nagy részében;
2. **korai átmeneti szakasz**: a halálozási ráta gyorsan csökken (orvoslás, higiénia fejlődése), de a születési ráta még magas marad — ez okozza a legerősebb népességrobbanást (jellemző napjaink kevésbé fejlett országaiban);
3. **késői átmeneti szakasz**: a születési ráta is csökkenni kezd (urbanizáció, oktatás, nők munkaerőpiaci szerepvállalása, családtervezés), a népességnövekedés lassul;
4. **modern (posztmodern) szakasz**: alacsony születési és alacsony halálozási ráta, a népesség növekedése megáll vagy — az európai és kelet-ázsiai országok jelentős részében — csökkenésbe fordul.

## A népesség területi eloszlása

A Föld népessége rendkívül egyenetlenül oszlik el: a legsűrűbben lakott térségek közé tartozik Kelet- és Dél-Ázsia (Kína, India — a világ két legnépesebb országa), Nyugat-Európa és Észak-Amerika keleti partvidéke, míg a sivatagok, a magashegységek, a sarkvidékek és a trópusi esőerdők belseje alacsony népsűrűségűek. A népsűrűséget meghatározó tényezők közé tartozik az éghajlat, a domborzat, a talaj termékenysége, a vízhez való hozzáférés és a gazdasági-történelmi fejlődés.

## Öregedő és fiatal társadalmak

A demográfiai átmenet későbbi szakaszaiban lévő országokban (pl. Németország, Japán, Olaszország) a **társadalom öregedése** jelentkezik: az idősek (65 év felettiek) aránya nő, a munkaképes korúaké csökken, ami a nyugdíj- és egészségügyi rendszerekre, valamint a munkaerőpiacra nehezedő terhet jelent. Ezzel szemben a demográfiai átmenet elején lévő országokban (pl. Nigéria, Niger) a lakosság rendkívül fiatal korösszetételű, magas a gyermek- és fiatalkorúak aránya, ami nagy kihívást jelent az oktatás és a munkahelyteremtés terén.

## Népesedéspolitikák

Az államok eltérő népesedéspolitikákkal reagálnak a demográfiai kihívásokra: a magas népességnövekedéssel szembesülő országok korábban gyakran **születéskorlátozó politikákat** alkalmaztak (pl. Kína egykepolitikája, 1979-2015), míg a csökkenő népességű, öregedő országok (pl. Magyarország, Franciaország) **családtámogató, születésösztönző intézkedésekkel** (családi pótlék, otthonteremtési támogatás, gyermekgondozási ellátások) próbálják növelni a termékenységi rátát.

## Jelentősége

A népesség növekedésének és korösszetételének ismerete alapvető a globális élelmiszer-, víz- és energiaellátás, a munkaerőpiac, valamint a jóléti és nyugdíjrendszerek jövőbeli fenntarthatóságának megértéséhez.
`,
    key_concepts: [
      "népességrobbanás",
      "demográfiai átmenet modellje",
      "születési és halálozási ráta",
      "elöregedő és fiatal társadalom",
      "népesedéspolitika",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a demográfiai átmenet korai átmeneti szakaszát?",
        options: [
          "a halálozási ráta gyorsan csökken, a születési ráta még magas marad, ezért erős a népességnövekedés",
          "magas születési és magas halálozási ráta, lassú növekedés",
          "alacsony születési és alacsony halálozási ráta",
          "a népesség száma csökkenni kezd",
        ],
        correct_answer: "a halálozási ráta gyorsan csökken, a születési ráta még magas marad, ezért erős a népességnövekedés",
        explanation: "A korai átmeneti szakaszban az orvoslás és a higiénia fejlődése gyorsan csökkenti a halálozást, míg a születési ráta még nem alkalmazkodott, ez okozza a legerősebb népességnövekedést.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik két ország a világ két legnépesebb országa napjainkban?",
        options: ["Kína és India", "Kína és az Egyesült Államok", "India és Indonézia", "Nigéria és Brazília"],
        correct_answer: "Kína és India",
        explanation: "Kína és India a világ két legnépesebb országa, együtt a Föld népességének jelentős részét alkotják.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen kihívást jelent a társadalom öregedése egy ország számára?",
        options: [
          "nő a nyugdíj- és egészségügyi kiadások terhe, míg csökken a munkaképes korúak aránya",
          "csökken az oktatási rendszerre nehezedő terhelés kizárólag",
          "nő a munkanélküliségi ráta a fiatalok között",
          "azonnal csökken a GDP nominális értéke",
        ],
        correct_answer: "nő a nyugdíj- és egészségügyi kiadások terhe, míg csökken a munkaképes korúak aránya",
        explanation: "Az öregedő társadalmakban az idősek arányának növekedése miatt nő a nyugdíj- és egészségügyi rendszerekre nehezedő terhelés, míg a munkaképes korú, adófizető réteg aránya csökken.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért helyeződött át napjainkban a globális népességnövekedés súlypontja a fejlődő országokra (pl. Afrika)?",
        options: [
          "mert ezek az országok a demográfiai átmenet korai szakaszában vannak, ahol a halálozás már csökkent, de a születési ráta még magas",
          "mert a fejlett országokban a halálozási ráta megnőtt",
          "mert a fejlődő országokban tilos a családtervezés",
          "mert a fejlett országokban nincs egészségügyi ellátás",
        ],
        correct_answer: "mert ezek az országok a demográfiai átmenet korai szakaszában vannak, ahol a halálozás már csökkent, de a születési ráta még magas",
        explanation: "Sok afrikai és dél-ázsiai ország a demográfiai átmenet korai szakaszában van: a halálozási ráta már csökkent az orvoslás fejlődése miatt, de a születési ráta még nem alkalmazkodott, ezért erős a népességnövekedés.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen népesedéspolitikai eszközt alkalmazott Kína 1979 és 2015 között a népességnövekedés lassítására?",
        options: ["egykepolitika", "családtámogató otthonteremtési kedvezmény", "bevándorlás-ösztönzés", "gyermekgondozási díj kiterjesztése"],
        correct_answer: "egykepolitika",
        explanation: "Kína 1979-től 2015-ig az egykepolitikával (egy gyermek vállalásának ösztönzésével, illetve előírásával) próbálta lassítani a népességnövekedést, ami hosszú távon hozzájárult a társadalom öregedéséhez is.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "nepessegfoldrajz-migracio-es-urbanizacio",
    title: "Népességföldrajz — migráció és urbanizáció",
    level: "mindketto",
    theme: "Népességföldrajz",
    order_index: 17,
    summary_markdown:
      "A migráció és az urbanizáció a 20-21. század két legjelentősebb népességföldrajzi folyamata: az emberek egyre nagyobb arányban élnek városokban, és a nemzetközi migráció is felgyorsult, jelentősen átalakítva a küldő és a befogadó térségek társadalmát.",
    content_markdown: `
## A migráció fogalma és okai

A **migráció (népességmozgás)** az emberek tartós vagy hosszabb távú lakóhely-változtatása. Típusai lehetnek belföldi (pl. vidék-város) vagy nemzetközi migráció, valamint önkéntes vagy kényszerű (menekültügyi) mozgás. A migráció okait a **push-pull (kibocsátó-befogadó) modell** magyarázza:

- **kibocsátó (push) tényezők**: szegénység, munkanélküliség, háború, politikai elnyomás, természeti katasztrófa, éghajlatváltozás okozta életkörülmény-romlás;
- **befogadó (pull) tényezők**: jobb munkalehetőségek, magasabb életszínvonal, politikai stabilitás, családegyesítés, oktatási lehetőségek.

## Jelentős migrációs irányok a világban

A globális migráció fő irányai jellemzően a fejlődő országokból a fejlett országok felé mutatnak: Latin-Amerikából az Egyesült Államokba, Afrikából és a Közel-Keletről Európába, Dél- és Délkelet-Ázsiából az Öböl-menti arab államokba (ahol a vendégmunkások az összlakosság jelentős részét alkotják, pl. Katarban, az Egyesült Arab Emírségekben). Emellett jelentős a **menekültmozgás** háborús és politikai válságok (pl. a szíriai polgárháború, 2015-től) hatására, amely főként a szomszédos országokat (Törökország, Jordánia) és Európát érintette.

## Az urbanizáció folyamata

Az **urbanizáció** a városi népesség arányának növekedése a teljes népességen belül, amelyet a városokba irányuló vidék-város migráció és a városi természetes népszaporulat együttesen hajt. A fejlett országokban az urbanizáció már a 19-20. században végbement (ma 70-80% feletti a városi népesség aránya), míg a fejlődő országokban (elsősorban Afrikában és Dél-Ázsiában) napjainkban zajlik a leggyorsabban, gyakran **városrobbanás** formájában: a városok népessége az infrastruktúra-fejlesztést messze megelőzve nő, ami nyomornegyedek (**slumök, favelák**) kialakulásához vezet (pl. Lagos, Mumbai, Rio de Janeiro).

## Szuburbanizáció és a városi terjengés

A fejlett országok nagyvárosaiban a 20. század második felétől megjelent a **szuburbanizáció**: a lakosság (és részben a gazdasági tevékenység) a belvárosból a városperemi, alacsonyabb népsűrűségű elővárosi övezetekbe települ át, amit az egyéni gépkocsi-közlekedés elterjedése is felgyorsított. Ennek eredménye a **városi agglomeráció** kialakulása, amelyben a központi nagyváros és a körülötte fekvő, vele szoros munkaerő- és infrastrukturális kapcsolatban álló települések funkcionálisan egységet alkotnak (pl. Budapesti agglomeráció).

## A migráció és urbanizáció társadalmi-gazdasági hatásai

A migráció a küldő országok számára egyrészt enyhítheti a munkanélküliséget és **hazautalásokból (remittanciákból)** származó bevételt jelenthet, másrészt "agyelszívást" (**brain drain**) is okozhat, ha a képzett munkaerő távozik. A befogadó országok számára a migráció pótolhatja a munkaerőhiányt és enyhítheti a társadalom öregedésének hatásait, de integrációs kihívásokat is felvet. A gyors, kontrollálatlan urbanizáció a fejlődő világban súlyos lakhatási, közlekedési és környezeti problémákhoz vezet.

## Jelentősége

A migráció és az urbanizáció folyamatainak megértése kulcsfontosságú a globális társadalmi-gazdasági egyenlőtlenségek, a munkaerőpiaci folyamatok és a városi fejlesztéspolitika alakításához.
`,
    key_concepts: [
      "push-pull migrációs modell",
      "menekültmozgás",
      "urbanizáció és városrobbanás",
      "szuburbanizáció és agglomeráció",
      "brain drain és remittancia",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelentenek a push (kibocsátó) tényezők a migráció push-pull modelljében?",
        options: [
          "azokat a körülményeket a kiindulási helyen, amelyek elvándorlásra ösztönzik az embereket (pl. szegénység, háború)",
          "a célországban kínált előnyöket, amelyek odavonzzák a migránsokat",
          "a migránsok végleges célországát",
          "a migráció jogi szabályozását",
        ],
        correct_answer: "azokat a körülményeket a kiindulási helyen, amelyek elvándorlásra ösztönzik az embereket (pl. szegénység, háború)",
        explanation: "A push (kibocsátó) tényezők a kiindulási országban tapasztalt kedvezőtlen körülmények (szegénység, munkanélküliség, háború), amelyek miatt az emberek elhagyják lakóhelyüket.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a szuburbanizáció folyamatát?",
        options: [
          "a lakosság a belvárosból a városperemi, elővárosi övezetekbe települ át",
          "a vidéki népesség a nagyvárosba áramlik",
          "a városi népesség aránya a teljes népességen belül csökken",
          "a fejlődő országok nyomornegyedeinek kialakulása",
        ],
        correct_answer: "a lakosság a belvárosból a városperemi, elővárosi övezetekbe települ át",
        explanation: "A szuburbanizáció a fejlett országok nagyvárosaiban jellemző folyamat, amelynek során a lakosság a belvárosból az alacsonyabb népsűrűségű elővárosi övezetekbe húzódik, gyakran az egyéni gépkocsi-közlekedés elterjedésével összefüggésben.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a 'brain drain' (agyelszívás) jelenség a migráció kapcsán?",
        options: [
          "a képzett, magasan kvalifikált munkaerő elvándorlása a kibocsátó országból",
          "a hazautalások (remittanciák) növekedése",
          "a menekültek visszatelepülése hazájukba",
          "a városi agglomeráció kialakulása",
        ],
        correct_answer: "a képzett, magasan kvalifikált munkaerő elvándorlása a kibocsátó országból",
        explanation: "A brain drain (agyelszívás) azt a jelenséget jelöli, amikor a jól képzett szakemberek elvándorlása gyengíti a kibocsátó ország gazdasági-tudományos potenciálját.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért alakulnak ki gyakran nyomornegyedek (slumök, favelák) a fejlődő világ gyorsan növekvő nagyvárosaiban?",
        options: [
          "mert a vidék-város migráció és a városi népszaporulat gyorsabban növeli a népességet, mint amilyen ütemben az infrastruktúra és a lakhatás fejlődik",
          "mert a fejlődő országok kormányai tudatosan telepítik oda a szegény lakosságot",
          "mert ott tilos a mezőgazdasági termelés",
          "mert a fejlődő országokban nincs urbanizáció",
        ],
        correct_answer: "mert a vidék-város migráció és a városi népszaporulat gyorsabban növeli a népességet, mint amilyen ütemben az infrastruktúra és a lakhatás fejlődik",
        explanation: "A városrobbanás jelensége során a városi népesség rendkívül gyorsan nő, ez messze megelőzi a lakhatási és infrastrukturális fejlesztések ütemét, ami nyomornegyedek kialakulásához vezet (pl. Lagos, Mumbai).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik térségre jellemző, hogy a vendégmunkások (elsősorban Dél- és Délkelet-Ázsiából érkezők) az összlakosság jelentős részét alkotják?",
        options: ["az Öböl-menti arab államok (pl. Katar, EAE)", "Skandinávia", "Kelet-Európa", "Ausztrália belseje"],
        correct_answer: "az Öböl-menti arab államok (pl. Katar, EAE)",
        explanation: "Az olajgazdaságra épülő Öböl-menti arab államokban (Katar, Egyesült Arab Emírségek) a Dél- és Délkelet-Ázsiából érkező vendégmunkások aránya rendkívül magas, sok esetben meghaladja a helyi lakosság arányát.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "telepulestipusok-es-a-telepuleshalozat",
    title: "Településtípusok és a településhálózat",
    level: "mindketto",
    theme: "Településföldrajz",
    order_index: 18,
    summary_markdown:
      "A települések falusi és városi típusokra osztódnak, funkciójuk és méretük szerint pedig hierarchikus településhálózatot alkotnak, amelynek csúcsán a világvárosok, alján az elszórt falusi települések állnak.",
    content_markdown: `
## A település fogalma és funkciói

A **település** az ember által létesített, tartósan lakott hely, amely lakó-, munka- és ellátó funkciókat egyaránt betölt. A településeket alapfunkciójuk szerint sorolhatjuk falusi vagy városi típusba, de a valóságban egy adott település gyakran több funkciót is ellát egyszerre (pl. lakófunkció, ipari funkció, igazgatási funkció, idegenforgalmi funkció).

## Falusi települések

A **falusi (rurális) települések** jellemzően kisebb népességszámúak, a mezőgazdasági termeléshez és a hozzá kapcsolódó tevékenységekhez kötődnek, alacsonyabb a beépítettségük és a szolgáltatás-ellátottságuk. Alaprajzuk szerint megkülönböztetünk **halmazfalut** (szabálytalan, sűrű beépítésű), **szalagfalut** (egy útvonal vagy folyó mentén elnyúló) és **négyzetes (sakktábla) alaprajzú falut** (tervezett, szabályos utcaszerkezetű, gyakran telepített falvak esetén).

## Városi települések

A **város** a falusitól nagyobb népességszámban, sűrűbb beépítésben és sokrétűbb (igazgatási, gazdasági, kulturális, oktatási) funkcióiban különbözik. A város belső szerkezete jellemzően **funkcionális övekre** tagolódik:

- **belváros (városmag, CBD — Central Business District)**: a kereskedelmi, igazgatási és üzleti funkciók koncentrálódnak itt, jellemzően a legmagasabb ingatlanárakkal;
- **lakóövezetek**: a belvároshoz közelebbi sűrűbb, a peremhez közelebbi ritkább beépítéssel;
- **ipari-gazdasági övezetek**: jellemzően a város peremén, a közlekedési csomópontok (autópálya, vasút) mentén;
- **agglomerációs öv**: a várost körülvevő, vele szoros funkcionális kapcsolatban álló elővárosi települések.

## A településhierarchia

A településeket ellátási körzetük mérete és funkciójuk sokfélesége szerint hierarchikus rendszerbe sorolhatjuk:

| Szint | Jellemző | Példa |
|---|---|---|
| Falu | alapfokú ellátás (bolt, iskola) | kistelepülés |
| Kisváros | középfokú ellátás (középiskola, kórház) | járásszékhely |
| Nagyváros | régiós szintű ellátás, egyetem | megyeszékhely |
| Metropolisz | országos jelentőségű gazdasági-kulturális központ | főváros |
| Világváros (globális város) | nemzetközi gazdasági, pénzügyi, kulturális központ | London, New York, Tokió |

A **agglomeráció** a nagyváros és a körülötte, vele szoros ingázási és gazdasági kapcsolatban álló települések együttese, amely funkcionálisan egy nagyobb egységet alkot, míg a **konurbáció** több, egymáshoz közel fekvő, korábban önálló nagyváros összenövéséből keletkező városegyüttes (pl. a Ruhr-vidék Németországban).

## Jelentősége

A településtípusok és a településhálózat szerkezetének ismerete alapvető a területfejlesztési politika, a városi infrastruktúra-tervezés és a vidék-város közötti egyenlőtlenségek kezelésének megértéséhez.
`,
    key_concepts: [
      "falusi és városi települések",
      "faluk alaprajzi típusai",
      "funkcionális városövek (CBD)",
      "településhierarchia",
      "agglomeráció és konurbáció",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit jelöl a CBD (Central Business District) fogalma a városszerkezetben?",
        options: [
          "a belváros kereskedelmi-üzleti-igazgatási magterületét",
          "a város ipari övezetét",
          "az agglomerációs települések összességét",
          "a városperemi lakóövezetet",
        ],
        correct_answer: "a belváros kereskedelmi-üzleti-igazgatási magterületét",
        explanation: "A CBD a város központi, kereskedelmi és üzleti funkciókra koncentrálódó magterülete, jellemzően a legmagasabb ingatlanárakkal és a legintenzívebb forgalommal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen falualaprajzot alkot egy folyó vagy útvonal mentén elnyúló, szabályos utcaszerkezetű falu?",
        options: ["szalagfalu", "halmazfalu", "sakktábla alaprajzú falu", "körfalu"],
        correct_answer: "szalagfalu",
        explanation: "A szalagfalu egy útvonal vagy folyó mentén hosszan elnyúló faluforma, amely a szomszédos halmazfalu (szabálytalan, sűrű) alaprajztól eltérő szerkezetet mutat.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség az agglomeráció és a konurbáció között?",
        options: [
          "az agglomeráció egy nagyváros és a vele ingázási kapcsolatban álló települések együttese, a konurbáció több, korábban önálló nagyváros összenövéséből áll",
          "az agglomeráció mindig kisebb, mint egy falu",
          "a konurbáció csak vidéki településekből állhat",
          "nincs közöttük érdemi különbség",
        ],
        correct_answer: "az agglomeráció egy nagyváros és a vele ingázási kapcsolatban álló települések együttese, a konurbáció több, korábban önálló nagyváros összenövéséből áll",
        explanation: "Az agglomeráció egy centrum-nagyváros köré szervezett funkcionális egység, a konurbáció (pl. Ruhr-vidék) viszont több, egymáshoz közel fekvő, önállóan is jelentős nagyváros összenövéséből ered.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik jellemző sorolható a világváros (globális város) kategóriájába?",
        options: [
          "nemzetközi pénzügyi, gazdasági és kulturális jelentőséggel bír, mint London vagy Tokió",
          "kizárólag alapfokú ellátást biztosít néhány ezer lakos számára",
          "jellemzően kisváros méretű, régiós funkcióval",
          "csak mezőgazdasági funkciót tölt be",
        ],
        correct_answer: "nemzetközi pénzügyi, gazdasági és kulturális jelentőséggel bír, mint London vagy Tokió",
        explanation: "A világváros (globális város) a településhierarchia csúcsán áll, nemzetközi gazdasági, pénzügyi és kulturális központi szerepet tölt be, mint London, New York vagy Tokió.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért helyezkednek el jellemzően a városok ipari-gazdasági övezetei a városperemen, közlekedési csomópontok mentén?",
        options: [
          "az alacsonyabb ingatlanárak és a jó közlekedési (autópálya, vasúti) elérhetőség kedvez a nagy területigényű, áruszállítást igénylő tevékenységeknek",
          "mert a belvárosban tilos bármilyen gazdasági tevékenység",
          "mert a városperemen mindig alacsonyabb a légszennyezés-tolerancia",
          "mert az ipari övezeteket törvény szerint csak vidéken lehet kialakítani",
        ],
        correct_answer: "az alacsonyabb ingatlanárak és a jó közlekedési (autópálya, vasúti) elérhetőség kedvez a nagy területigényű, áruszállítást igénylő tevékenységeknek",
        explanation: "A városperemi ipari övezetek kialakulását az olcsóbb terület és a közlekedési infrastruktúrához (autópálya, vasút, logisztikai csomópontok) való közelség indokolja, ami elengedhetetlen a nagy áruforgalmat igénylő gazdasági tevékenységekhez.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-vilag-gazdasaga-az-elsodleges-szektor-mezogazdasag",
    title: "A világ gazdasága — az elsődleges szektor (mezőgazdaság)",
    level: "mindketto",
    theme: "Gazdaságföldrajz",
    order_index: 19,
    summary_markdown:
      "A gazdaság szektorális felosztásában az elsődleges (primer) szektorba a mezőgazdaság, az erdőgazdálkodás, a halászat és a bányászat tartozik. A mezőgazdaság extenzív és intenzív formái, valamint a modern agrártechnológia meghatározzák a világ élelmiszer-ellátását.",
    content_markdown: `
## A gazdasági szektorok rendszere

A gazdaság tevékenységeit hagyományosan három (napjainkban néha négy) szektorba soroljuk: az **elsődleges (primer) szektor** a nyersanyag-kitermeléssel (mezőgazdaság, erdőgazdálkodás, halászat, bányászat) foglalkozik; a **másodlagos (szekunder) szektor** a nyersanyagok feldolgozásával, iparral; a **harmadlagos (tercier) szektor** a szolgáltatásokkal. A gazdasági fejlődés során jellemzően csökken az elsődleges szektor foglalkoztatási és GDP-részesedése, míg nő a másodlagos, majd főként a harmadlagos szektoré (**szektorális átalakulás**).

## A növénytermesztés fő típusai

A mezőgazdaság — a helyi éghajlati, társadalmi-gazdasági feltételektől függően — igen eltérő formákat ölthet:

- **extenzív (nagytáblás) gazdálkodás**: nagy területen, viszonylag alacsony munkaerő- és tőkeigénnyel, gépesítve folyik (pl. az USA középső gabonaövezete, az argentin pampa), jellemzően magas terméshozamú, exportra termelő gazdálkodás;
- **intenzív gazdálkodás**: kisebb területen, nagy munkaerő- és/vagy tőkebefektetéssel, magas hektáronkénti terméshozammal (pl. a rizstermelés Dél- és Délkelet-Ázsiában, vagy a nyugat-európai zöldség- és kertészeti kultúrák);
- **önellátó (megélhetési) gazdálkodás**: a fejlődő országok jelentős részén jellemző, a család vagy közösség saját szükségleteire termel, alacsony technológiai szinttel.

## Az állattenyésztés

Az állattenyésztés formái is a természeti és gazdasági feltételekhez alkalmazkodnak: a **extenzív állattartás** (legeltető állattartás) nagy területeken, alacsony állománysűrűséggel folyik (pl. ausztrál és argentin szarvasmarha-, illetve juhtartás), míg az **intenzív állattartás** (nagyüzemi, telepszerű tartás) kisebb területen, nagy állománysűrűséggel, gyakran importált takarmányra épül (jellemző Nyugat-Európában és Észak-Amerikában).

## A "zöld forradalom" és a modern agrártechnológia

A 20. század második felében végbement **zöld forradalom** — a nagy hozamú növényfajták, a műtrágyázás, a gépesítés és az öntözés elterjedése — jelentősen megnövelte a világ mezőgazdasági terméshozamait, különösen Ázsiában (India, Kína rizs- és búzatermelése), ez tette lehetővé a robbanásszerűen növekvő népesség élelmiszer-ellátását. Napjainkban a **precíziós gazdálkodás** (műholdas és szenzoros adatokra épülő, célzott vízhasználat és tápanyag-kijuttatás), valamint a génmódosított (GMO) növényfajták tovább növelik a termelékenységet, miközben vitákat is generálnak a környezeti és egészségügyi hatásokról.

## Kihívások a mezőgazdaságban

A világ mezőgazdaságát számos kihívás fenyegeti: a **talajdegradáció és a vízhiány** (különösen az intenzíven öntözött térségekben), az **éghajlatváltozás** okozta szélsőséges időjárás (aszályok, áradások), valamint a **biodiverzitás-csökkenés** a monokultúrás nagytáblás termelés miatt. A fenntartható mezőgazdaság (ökológiai gazdálkodás, vízkímélő öntözéstechnológiák, talajvédő agrotechnika) egyre fontosabb szerepet kap a jövő élelmiszer-biztonságának megőrzésében.

## Jelentősége

Az elsődleges szektor, elsősorban a mezőgazdaság, alapvetően meghatározza a Föld élelmiszer-ellátását, és jelentős területi különbségeket mutat a fejlett és a fejlődő országok között a technológiai fejlettség és a termelékenység terén.
`,
    key_concepts: [
      "gazdasági szektorok (primer, szekunder, tercier)",
      "extenzív és intenzív mezőgazdaság",
      "önellátó (megélhetési) gazdálkodás",
      "zöld forradalom",
      "precíziós gazdálkodás és fenntarthatóság",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik szektorba tartozik a mezőgazdaság a gazdasági szektorok rendszerében?",
        options: ["elsődleges (primer) szektor", "másodlagos (szekunder) szektor", "harmadlagos (tercier) szektor", "kvaterner szektor"],
        correct_answer: "elsődleges (primer) szektor",
        explanation: "A mezőgazdaság, az erdőgazdálkodás, a halászat és a bányászat az elsődleges (primer) szektorba tartozik, amely a nyersanyag-kitermeléssel foglalkozik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az extenzív (nagytáblás) gazdálkodást?",
        options: [
          "nagy területen, viszonylag alacsony munkaerő-igénnyel, gépesítve folyik",
          "kis területen, nagy munkaerő-ráfordítással történik",
          "kizárólag saját szükségletre termel",
          "csak állattartásra vonatkozik",
        ],
        correct_answer: "nagy területen, viszonylag alacsony munkaerő-igénnyel, gépesítve folyik",
        explanation: "Az extenzív gazdálkodás nagy területen, gépesítve, viszonylag alacsony munkaerő- és tőkeigénnyel folyik, jellemzően exportra termelő nagytáblás gabonatermeléssel (pl. USA, Argentína).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi volt a zöld forradalom legfontosabb hatása?",
        options: [
          "jelentősen megnövelte a mezőgazdasági terméshozamokat, különösen Ázsiában",
          "csökkentette a világ mezőgazdasági termelését",
          "megszüntette az önellátó gazdálkodást a fejlődő világban",
          "kizárólag az állattenyésztésre volt hatással",
        ],
        correct_answer: "jelentősen megnövelte a mezőgazdasági terméshozamokat, különösen Ázsiában",
        explanation: "A zöld forradalom (nagy hozamú fajták, műtrágya, gépesítés, öntözés) drámaian megnövelte a terméshozamokat, ami lehetővé tette a gyorsan növekvő ázsiai népesség élelmiszer-ellátását.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a precíziós gazdálkodást?",
        options: [
          "műholdas és szenzoros adatokra épülő, célzott víz- és tápanyag-felhasználás",
          "kizárólag kézi munkaerőre épülő, hagyományos gazdálkodási forma",
          "a legeltető állattartás egy fajtája",
          "az önellátó gazdálkodás szinonimája",
        ],
        correct_answer: "műholdas és szenzoros adatokra épülő, célzott víz- és tápanyag-felhasználás",
        explanation: "A precíziós gazdálkodás modern technológiákra (műholdas helymeghatározás, szenzorok) épül, amelyek segítségével a gazdálkodó a tábla egyes részein pontosan a szükséges mennyiségű vizet és tápanyagot juttatja ki.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért figyelhető meg a gazdasági fejlődés során jellemzően az elsődleges szektor GDP- és foglalkoztatási részesedésének csökkenése?",
        options: [
          "mert a fejlődéssel a gazdasági szerkezet a mezőgazdaságtól az ipar, majd a szolgáltatások felé mozdul el (szektorális átalakulás)",
          "mert a mezőgazdasági termelés a fejlett országokban teljesen megszűnik",
          "mert a fejlett országokban törvény korlátozza a mezőgazdasági tevékenységet",
          "mert az elsődleges szektor terméshozama mindenhol csökken",
        ],
        correct_answer: "mert a fejlődéssel a gazdasági szerkezet a mezőgazdaságtól az ipar, majd a szolgáltatások felé mozdul el (szektorális átalakulás)",
        explanation: "A gazdasági fejlődés jellemző mintája a szektorális átalakulás: a fejlődés előrehaladtával a foglalkoztatás és a GDP súlypontja a primer szektorból a szekunder, majd a tercier szektor felé tolódik el, miközben a mezőgazdaság termelékenysége (nem feltétlenül a hozzájárulása) tovább nőhet.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "ipar-es-a-masodlagos-szektor",
    title: "Ipar és a másodlagos szektor",
    level: "mindketto",
    theme: "Gazdaságföldrajz",
    order_index: 20,
    summary_markdown:
      "A másodlagos szektorba tartozó ipar a nyersanyagok feldolgozásával foglalkozik. Az ipar telepítő tényezőinek és a globális iparföldrajzi átrendeződésnek (dezindusztrializáció, új iparosodó országok felemelkedése) ismerete alapvető a világgazdaság megértéséhez.",
    content_markdown: `
## Az ipar ágazatai

Az **ipar** a másodlagos (szekunder) gazdasági szektor része, amely a nyersanyagokat feldolgozott termékekké alakítja. Fő ágazatai:

- **nehézipar**: bányászathoz kapcsolódó, nagy nyersanyag- és energiaigényű ágazatok, mint a **kohászat** (vas-, acél-, alumíniumipar), a **vegyipar** és a **gépipar** (nehézgép-, hajó-, autóipar);
- **könnyűipar**: kisebb tőke- és energiaigényű, jellemzően fogyasztási cikkeket előállító ágazatok, mint a **textil- és ruhaipar**, az **élelmiszeripar**, a **bútoripar**;
- **csúcstechnológiai (high-tech) ipar**: elektronika, informatikai eszközök, gyógyszeripar, űripar — magas hozzáadott értékű, tudásintenzív ágazatok.

## Az ipar telepítő tényezői

Egy ipari üzem elhelyezkedését (telephelyét) számos tényező befolyásolja:

- **nyersanyag közelsége** — különösen a nagy tömegű, nehezen szállítható nyersanyagot (érc, szén) felhasználó nehézipar esetén;
- **energiaforrások közelsége** (energiaigényes ágazatok, mint az alumíniumkohászat, olcsó villamos energiát igényelnek);
- **munkaerő elérhetősége és ára** — az olcsó munkaerő különösen a munkaerő-igényes könnyűiparban (textilipar) meghatározó telepítő tényező;
- **piac közelsége** — a gyorsan romló vagy nehezen szállítható termékek (pl. élelmiszeripar) esetén fontos;
- **közlekedési infrastruktúra** (kikötők, autópályák, vasútvonalak) — az alapanyag-beszállítás és a késztermék-értékesítés szempontjából;
- **kormányzati politika és adókedvezmények** — ipari parkok, különleges gazdasági övezetek létesítésével.

## A világ iparának térbeli átrendeződése

A 20. század második felétől a hagyományos ipari nagyhatalmak (Nyugat-Európa, Észak-Amerika egyes régiói) **dezindusztrializáción** mentek keresztül: a hagyományos nehézipari ágazatok (szénbányászat, kohászat) jelentősen visszaszorultak, miközben az ipari termelés súlypontja **Kelet- és Délkelet-Ázsiába** (Kína, Dél-Korea, majd Vietnám, Bangladesh) helyeződött át, ahol az olcsó munkaerő és a kedvező kormányzati politika vonzotta a külföldi tőkét. Kína napjainkra a "világ gyárává" vált, míg a fejlett országokban a hangsúly egyre inkább a csúcstechnológiai iparra és a szolgáltatásokra helyeződött.

## Ipari körzetek és klaszterek

A modern iparban gyakori az **ipari klaszterek** kialakulása: egymáshoz kapcsolódó vállalatok, beszállítók és kutatóintézetek földrajzi koncentrációja, amely erősíti az innovációt és a versenyképességet (pl. a Szilícium-völgy az informatikai iparban, vagy a Ruhr-vidék hagyományos szén-acél ipari körzete Németországban, amely mára jelentős szerkezetváltáson ment át).

## Jelentősége

Az ipar térbeli elhelyezkedésének és átrendeződésének ismerete kulcsfontosságú a globális munkamegosztás, a fejlődő országok iparosodási esélyei és a fejlett országok gazdasági szerkezetváltásának megértéséhez.
`,
    key_concepts: [
      "nehézipar, könnyűipar, csúcstechnológiai ipar",
      "az ipar telepítő tényezői",
      "dezindusztrializáció",
      "Kelet- és Délkelet-Ázsia iparosodása",
      "ipari klaszterek",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik ágazat tartozik a nehéziparba?",
        options: ["kohászat", "textilipar", "élelmiszeripar", "bútoripar"],
        correct_answer: "kohászat",
        explanation: "A kohászat (vas-, acél-, alumíniumipar) a nagy nyersanyag- és energiaigényű nehézipar része, szemben a könnyűipari ágazatokkal (textil-, élelmiszer-, bútoripar).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik telepítő tényező a legfontosabb az olcsó munkaerőt igénylő textiliparban?",
        options: ["a munkaerő elérhetősége és ára", "a nyersanyag helyben léte", "kizárólag a piac közelsége", "az energiaforrások közelsége"],
        correct_answer: "a munkaerő elérhetősége és ára",
        explanation: "A munkaerő-igényes textilipar telephelyválasztásában az olcsó, elérhető munkaerő az egyik legfontosabb tényező, ez indokolja az ágazat áttelepülését az alacsonyabb bérszintű országokba.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a dezindusztrializáció folyamata?",
        options: [
          "a hagyományos ipari ágazatok (pl. nehézipar) visszaszorulása egy korábban ipari régióban",
          "az ipari termelés gyors növekedése egy országban",
          "a mezőgazdaság iparosítása",
          "a szolgáltatási szektor teljes megszűnése",
        ],
        correct_answer: "a hagyományos ipari ágazatok (pl. nehézipar) visszaszorulása egy korábban ipari régióban",
        explanation: "A dezindusztrializáció a hagyományos ipari ágazatok (szénbányászat, kohászat) leépülését jelenti a korábban ipari nagyhatalmakban, miközben ezek a tevékenységek gyakran más régiókba (Ázsiába) helyeződnek át.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért vált Kína napjainkra 'a világ gyárává'?",
        options: [
          "az olcsó munkaerő, a kedvező kormányzati politika és a beáramló külföldi tőke miatt jelentős ipari kapacitást épített ki",
          "mert kizárólag saját nyersanyagkészletére támaszkodik",
          "mert Kína áthelyezte teljes ipari termelését Európába",
          "mert a kínai munkaerő a legmagasabb bérszintű a világon",
        ],
        correct_answer: "az olcsó munkaerő, a kedvező kormányzati politika és a beáramló külföldi tőke miatt jelentős ipari kapacitást épített ki",
        explanation: "Kína gyors iparosodását az olcsó munkaerő, a célzott gazdaságpolitika (különleges gazdasági övezetek) és a nagy mennyiségű külföldi közvetlen tőkebefektetés együttesen tette lehetővé.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az ipari klaszterek (pl. Szilícium-völgy) kialakulását?",
        options: [
          "egymáshoz kapcsolódó vállalatok, beszállítók és kutatóintézetek földrajzi koncentrációja, amely erősíti az innovációt",
          "kizárólag egyetlen nagyvállalat telephelyválasztása",
          "a nehézipar szükségszerű térbeli elszigetelődése",
          "a mezőgazdasági termelés ipari övezetekben történő koncentrálása",
        ],
        correct_answer: "egymáshoz kapcsolódó vállalatok, beszállítók és kutatóintézetek földrajzi koncentrációja, amely erősíti az innovációt",
        explanation: "Az ipari klaszterek (pl. a Szilícium-völgy informatikai klasztere) az egymással kapcsolatban álló vállalatok, beszállítók és kutatóhelyek földrajzi közelségéből fakadó szinergiákra épülnek, ami erősíti a versenyképességet és az innovációt.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "szolgaltatasok-es-a-harmadlagos-szektor-jelentosege",
    title: "Szolgáltatások és a harmadlagos szektor, a tercier szektor jelentősége",
    level: "mindketto",
    theme: "Gazdaságföldrajz",
    order_index: 21,
    summary_markdown:
      "A fejlett gazdaságokban a harmadlagos (tercier) szektor adja a GDP és a foglalkoztatás legnagyobb részét. A turizmus, a pénzügyi-üzleti szolgáltatások és a globális városok, valamint a kvaterner szektor (tudásalapú szolgáltatások) a modern gazdaság meghatározó szereplői.",
    content_markdown: `
## A szolgáltatási szektor felosztása

A **harmadlagos (tercier) szektor** a szolgáltatásokat foglalja magába, amelyek nem materiális jellegűek (nem konkrét árutermékek), hanem tevékenységek vagy élmények formájában jelennek meg. A szolgáltatásokon belül megkülönböztetünk:

- **alapszolgáltatásokat**: kereskedelem, közlekedés, oktatás, egészségügy, közigazgatás;
- **üzleti-pénzügyi szolgáltatásokat**: banki és biztosítási szolgáltatások, jogi és könyvvizsgálói tevékenység, ingatlanközvetítés;
- **idegenforgalmi (turisztikai) szolgáltatásokat**: szállás, étkezés, utazásközvetítés, szórakoztatás.

A fejlett gazdaságokban a tercier szektor adja a GDP és a foglalkoztatás jelentős, gyakran 70% feletti részét, ez a jelenség a **tercierizáció**.

## A turizmus földrajza

A **turizmus** a világ egyik legnagyobb és leggyorsabban növekvő gazdasági ágazata, amely jelentős bevételt és munkahelyet teremt, különösen a kedvező természeti-kulturális adottságokkal rendelkező, de kevésbé iparosodott országok számára (pl. a Karib-térség, Görögország, Thaiföld esetében a turizmus a GDP jelentős hányadát adja). A turizmus típusai közé tartozik a **tengerparti (üdülő-) turizmus**, a **kulturális-városnéző turizmus**, az **ökoturizmus** és a **egészségturizmus** (pl. Magyarország gyógyfürdői). A túlzott turistaforgalom (**overtourism**) azonban környezeti terhelést és a helyi lakosság életminőségének romlását is okozhatja (pl. Velence, Barcelona egyes városrészei).

## Pénzügyi-üzleti szolgáltatások és a globális városok

A modern világgazdaság csomópontjai a **globális városok**, amelyek a nemzetközi pénzügyi, üzleti és döntéshozási folyamatok központjai (pl. **London, New York, Tokió, Hongkong, Szingapúr**). Ezekben a városokban koncentrálódnak a multinacionális vállalatok székhelyei, a nagy bankok és tőzsdék, valamint a magas hozzáadott értékű szakértői szolgáltatások (jog, könyvvizsgálat, tanácsadás).

## A kvaterner szektor

Napjaink gazdaságában egyre inkább elkülönül a **kvaterner szektor**, amely a tudásalapú, magas szellemi hozzáadott értékű tevékenységeket (kutatás-fejlesztés, informatika, oktatás, adatfeldolgozás) foglalja magába — ez a leggyorsabban növekvő szegmens a fejlett gazdaságokban, és szorosan összefügg a digitalizációval és az információs technológia terjedésével.

## Jelentősége

A harmadlagos és kvaterner szektor növekvő súlya jelzi egy gazdaság fejlettségi szintjét; a szolgáltatási gazdaság térbeli koncentrációja (globális városok) egyben a világgazdasági hatalom és döntéshozás földrajzi mintázatát is meghatározza.
`,
    key_concepts: [
      "tercier szektor és tercierizáció",
      "turizmus típusai",
      "overtourism",
      "globális városok",
      "kvaterner szektor",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a tercierizáció jelenségét?",
        options: [
          "a harmadlagos (szolgáltatási) szektor GDP- és foglalkoztatási súlyának növekedése",
          "az ipari szektor túlsúlyba kerülése",
          "a mezőgazdaság térbeli koncentrációja",
          "a nyersanyag-kitermelés visszaszorulása",
        ],
        correct_answer: "a harmadlagos (szolgáltatási) szektor GDP- és foglalkoztatási súlyának növekedése",
        explanation: "A tercierizáció azt a folyamatot jelöli, amelynek során a fejlett gazdaságokban a szolgáltatási szektor egyre nagyobb részt vállal a GDP-ből és a foglalkoztatásból.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik város NEM tartozik jellemzően a világ vezető globális városai közé?",
        options: ["egy kisebb, ipari múltú vidéki város", "London", "New York", "Tokió"],
        correct_answer: "egy kisebb, ipari múltú vidéki város",
        explanation: "A globális városok (London, New York, Tokió) a nemzetközi pénzügyi és üzleti élet csomópontjai, ezzel szemben egy kisebb, hagyományosan ipari vidéki város nem tölt be ilyen szerepet.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent az overtourism jelenség?",
        options: [
          "a túlzott turistaforgalom okozta környezeti és társadalmi terhelés egy adott célpontban",
          "a turizmus teljes hiánya egy térségben",
          "a turizmusból származó bevételek egyenletes elosztása",
          "az ökoturizmus elterjedése",
        ],
        correct_answer: "a túlzott turistaforgalom okozta környezeti és társadalmi terhelés egy adott célpontban",
        explanation: "Az overtourism azt a helyzetet jelöli, amikor a turistaforgalom mértéke meghaladja egy célterület terhelhetőségét, ami környezeti károkat és a helyi lakosság életminőségének romlását okozhatja (pl. Velencében).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi különbözteti meg a kvaterner szektort a hagyományos tercier szektortól?",
        options: [
          "a kvaterner szektor kifejezetten a tudásalapú, magas szellemi hozzáadott értékű tevékenységeket (K+F, informatika) foglalja magába",
          "a kvaterner szektor kizárólag a mezőgazdasághoz kapcsolódik",
          "a kvaterner szektor azonos a nehéziparral",
          "nincs érdemi különbség a kettő között",
        ],
        correct_answer: "a kvaterner szektor kifejezetten a tudásalapú, magas szellemi hozzáadott értékű tevékenységeket (K+F, informatika) foglalja magába",
        explanation: "A kvaterner szektort a hagyományos szolgáltatásoktól (kereskedelem, közlekedés) a tudásintenzív, magas hozzáadott értékű tevékenységek (kutatás-fejlesztés, informatikai szolgáltatások) különítik el.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért koncentrálódnak a multinacionális vállalatok székhelyei és a nagy tőzsdék a globális városokba?",
        options: [
          "mert ezek a városok a nemzetközi pénzügyi, üzleti kapcsolatok, a magas szintű szolgáltatások és a szakértői munkaerő koncentrációs pontjai",
          "mert ott a legalacsonyabb a munkabér",
          "mert ott a legkedvezőbb az éghajlat az irodai munkához",
          "mert a globális városokban tilos az ipari tevékenység",
        ],
        correct_answer: "mert ezek a városok a nemzetközi pénzügyi, üzleti kapcsolatok, a magas szintű szolgáltatások és a szakértői munkaerő koncentrációs pontjai",
        explanation: "A globális városokban koncentrálódnak a nemzetközi kapcsolati hálók, a magas szintű pénzügyi-jogi szolgáltatások és a szakképzett munkaerő, ami vonzóvá teszi ezeket a multinacionális vállalatok és pénzintézetek számára.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kozlekedesfoldrajz",
    title: "Közlekedésföldrajz",
    level: "mindketto",
    theme: "Gazdaságföldrajz",
    order_index: 22,
    summary_markdown:
      "A közlekedési módok (közúti, vasúti, vízi, légi) mindegyike sajátos előnyökkel és korlátokkal rendelkezik, a nemzetközi kereskedelem pedig ma is döntően a tengeri hajózásra, elsősorban a konténerforgalomra épül.",
    content_markdown: `
## A közlekedési módok jellemzői

A közlekedési módokat sebességük, kapacitásuk, költségük és rugalmasságuk alapján hasonlíthatjuk össze:

- **közúti közlekedés**: rugalmas, ajtótól ajtóig szállítást tesz lehetővé, kisebb-közepes távolságokra és mennyiségekre gazdaságos, de forgalmi torlódásokra és üzemanyagköltségre érzékeny;
- **vasúti közlekedés**: nagy tömegű áru és sok utas gazdaságos szállítására alkalmas, nagy távolságon energiahatékony, de a hálózat kiépítése tőkeigényes;
- **vízi (folyami és tengeri) közlekedés**: rendkívül nagy tömegű áru szállítására a legolcsóbb módja, de lassú, és csak vízi útvonalak mentén, illetve kikötőkkel elérhető;
- **légi közlekedés**: a leggyorsabb, nagy távolságra és nagy értékű, sürgős áruk esetén (pl. elektronika, gyógyszer) versenyképes, de a legköltségesebb tömegegységre számítva.

## A világkereskedelem és a hajózás

A nemzetközi árukereskedelem tömegének döntő része (kb. 80-90%-a) még napjainkban is **tengeri hajózással** történik, elsősorban a **konténerforgalom** elterjedése miatt, amely jelentősen csökkentette az átrakási időt és költséget a szabványosított konténerek egységes kezelése révén. A világ legforgalmasabb konténerkikötői elsősorban Kelet- és Délkelet-Ázsiában találhatók (pl. Sanghaj, Szingapúr, Ningbo), jelezve a térség meghatározó szerepét a globális gyártásban és exportban. Kiemelt jelentőségűek a nemzetközi hajózást lerövidítő **csatornák**, mint a **Szuezi-csatorna** (Európa-Ázsia útvonal) és a **Panama-csatorna** (Atlanti- és Csendes-óceán között).

## Légi közlekedés és globális kapcsolódás

A légi közlekedés a nemzetközi személyszállítás és a sürgős, nagy értékű áruk szállításának meghatározó módja. A világ legforgalmasabb repülőtereit (pl. Atlanta, Peking, Dubai, London Heathrow) jelentős **hub (csomóponti) szerepük** jellemzi: ezekben a repülőtereken koncentrálódnak az átszállások, amelyek lehetővé teszik a kis forgalmú célpontok közötti hatékony összeköttetést is (**hub-and-spoke rendszer**).

## Közlekedési korridorok és folyosók

A nemzetközi kereskedelem és a regionális integráció megköveteli a hatékony **közlekedési korridorok** kiépítését, amelyek több közlekedési mód (közút, vasút, vízi út) összekapcsolásával (**multimodális szállítás**) biztosítják az áruk gyors, olcsó eljutását. Az Európai Unió **TEN-T (transzeurópai közlekedési hálózat)** programja, valamint Kína **Egy övezet, egy út** kezdeményezése (Belt and Road Initiative) is ilyen nagyszabású, kontinenseket összekötő infrastrukturális fejlesztési programok.

## Jelentősége

A közlekedésföldrajz ismerete elengedhetetlen a globális gazdasági kapcsolatok, a nemzetközi kereskedelmi útvonalak és a régiók közötti elérhetőségi egyenlőtlenségek megértéséhez.
`,
    key_concepts: [
      "közlekedési módok összehasonlítása",
      "konténerforgalom",
      "Szuezi- és Panama-csatorna",
      "hub-and-spoke rendszer",
      "multimodális közlekedési korridorok",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik közlekedési mód a legolcsóbb nagy tömegű áru szállítására?",
        options: ["vízi (tengeri) közlekedés", "légi közlekedés", "közúti közlekedés", "vasúti közlekedés rövid távon"],
        correct_answer: "vízi (tengeri) közlekedés",
        explanation: "A vízi, elsősorban a tengeri hajózás a legolcsóbb módja a nagy tömegű áruk szállításának, ezért a világkereskedelem tömegének döntő része ezen az útvonalon zajlik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik csatorna köti össze a Földközi-tengert a Vörös-tengeren keresztül az Indiai-óceánnal, jelentősen lerövidítve az Európa-Ázsia hajóutat?",
        options: ["Szuezi-csatorna", "Panama-csatorna", "Korinthoszi-csatorna", "Kieli-csatorna"],
        correct_answer: "Szuezi-csatorna",
        explanation: "A Szuezi-csatorna Egyiptomban köti össze a Földközi-tengert a Vörös-tengerrel, ezáltal jelentősen lerövidíti az Európa és Ázsia közötti hajóutat, elkerülve Afrika megkerülését.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a hub-and-spoke rendszer a légi közlekedésben?",
        options: [
          "a forgalom egy központi csomóponti repülőtéren (hub) koncentrálódik, ahonnan kisebb célpontokra ágaznak el a járatok",
          "minden repülőtér közvetlen összeköttetésben áll minden más repülőtérrel",
          "kizárólag teherszállító repülőgépek használják",
          "a légitársaságok csak egyetlen útvonalon üzemelnek",
        ],
        correct_answer: "a forgalom egy központi csomóponti repülőtéren (hub) koncentrálódik, ahonnan kisebb célpontokra ágaznak el a járatok",
        explanation: "A hub-and-spoke rendszerben a légitársaságok egy vagy néhány központi csomóponti (hub) repülőtérre koncentrálják a forgalmat, ahonnan a kisebb célpontok felé továbbindulnak a járatok, ez hatékonyabbá teszi az átszállásokat.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nőtt meg drámaian a tengeri áruszállítás hatékonysága a konténerforgalom elterjedésével?",
        options: [
          "a szabványosított konténerek egységes kezelése jelentősen csökkentette az átrakási időt és költséget",
          "a konténerek lehetővé tették a repülőgépes szállítás teljes kiváltását",
          "a konténerhajók sokkal gyorsabbak, mint a hagyományos teherhajók",
          "a konténerforgalom megszüntette a kikötők szükségességét",
        ],
        correct_answer: "a szabványosított konténerek egységes kezelése jelentősen csökkentette az átrakási időt és költséget",
        explanation: "A konténerizáció lényege, hogy egységes méretű konténerekbe pakolt árut gyorsan, gépesítve lehet átrakni a különböző szállítási módok (hajó, vasút, kamion) között, ez drasztikusan csökkentette a szállítási időt és költséget.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen célt szolgál Kína 'Egy övezet, egy út' (Belt and Road Initiative) kezdeményezése?",
        options: [
          "kontinenseket összekötő közlekedési és kereskedelmi infrastruktúra kiépítése Kína gazdasági befolyásának növelésére",
          "kizárólag Kína belföldi vasúti hálózatának fejlesztése",
          "a kínai mezőgazdaság önellátásának biztosítása",
          "a világ legnagyobb konténerkikötőjének bezárása",
        ],
        correct_answer: "kontinenseket összekötő közlekedési és kereskedelmi infrastruktúra kiépítése Kína gazdasági befolyásának növelésére",
        explanation: "Az Egy övezet, egy út program Kína nagyszabású nemzetközi infrastruktúra-fejlesztési kezdeményezése, amely tengeri és szárazföldi útvonalakon köti össze Ázsiát, Afrikát és Európát, erősítve Kína globális gazdasági és geopolitikai befolyását.",
        difficulty: 3,
      },
    ],
  },
];
