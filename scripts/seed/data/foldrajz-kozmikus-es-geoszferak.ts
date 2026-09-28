import type { TopicSeed } from "./angol";

export const foldrajzKozmikusEsGeoszferakTopics: TopicSeed[] = [
  {
    slug: "a-fold-a-vilagegyetemben",
    title: "A Föld a világegyetemben — kozmikus környezetünk",
    level: "mindketto",
    theme: "A Föld a világegyetemben",
    order_index: 1,
    summary_markdown:
      "A Föld a Naprendszer harmadik bolygója, amely a Nap körül kering egy csillagrendszer, a Tejútrendszer peremvidékén. E tétel a Naprendszer felépítését, a Föld kozmikus környezetét és a Hold Földhöz fűződő kapcsolatát tárgyalja.",
    content_markdown: `
## A világegyetem és a Tejútrendszer

A **világegyetem (univerzum)** a létező anyag, energia, tér és idő összessége, amely a **ősrobbanás (Big Bang)** elmélet szerint kb. 13,8 milliárd évvel ezelőtt kezdett tágulni, és a tágulás a mai napig tart. A világegyetemben milliárdnyi **galaxis** található, ezek egyike a mi **Tejútrendszerünk (Galaxis)**, egy spirálgalaxis, amely kb. 100-400 milliárd csillagot tartalmaz. A Naprendszer a Tejútrendszer egyik karjában (Orion-kar), a centrumtól mintegy 26-27 ezer fényévre helyezkedik el.

## A Naprendszer felépítése

A **Naprendszer** középpontjában a **Nap** áll, egy közepes méretű, sárga színű csillag, amely a rendszer tömegének kb. 99,8%-át tartalmazza, és amelynek magjában folyó hidrogén-hélium fúzió biztosítja a Föld számára létfontosságú energiát. A Nap körül kering nyolc bolygó, amelyeket két csoportra osztunk:

- **Föld-típusú (kőzet-) bolygók**: Merkúr, Venus, Föld, Mars — kis méretűek, szilárd kőzetfelszínűek, kevés vagy nincs holdjuk.
- **Jupiter-típusú (óriás-) bolygók**: Jupiter, Szaturnusz, Uránusz, Neptunusz — nagy méretűek, gáz- és jéghalmazállapotú anyagból állnak, sok holdjuk és gyűrűrendszerük van.

A bolygók mozgását a **Kepler-törvények** írják le: a bolygók ellipszis alakú pályán keringenek a Nap körül (egyik fókuszpontban a Nap áll), a Nap-bolygó vezérsugár egyenlő idők alatt egyenlő területet súrol (ezért a Naphoz közelebb gyorsabban mozog a bolygó), és a keringési idő négyzete arányos a pálya fél nagytengelyének köbével.

A Naprendszerhez tartoznak továbbá a **kisbolygók** (főként a Mars és a Jupiter közötti övben), a **törpebolygók** (pl. Pluto, Ceres) és az **üstökösök**, amelyek jeges magjukból a Naphoz közeledve gázt és port bocsátanak ki, ez alkotja látványos csóvájukat.

## A Föld helye és egyedi adottságai

A Föld a Naptól számított harmadik bolygó, átlagosan 149,6 millió km (1 csillagászati egység, CSE) távolságra kering tőle. A Föld egyedülálló adottságai teszik lehetővé az életet:

- a **lakhatósági zónában** (Goldilocks-zóna) helyezkedik el, ahol a víz folyékony halmazállapotban is előfordulhat,
- megfelelő méretű, így gravitációja megtartja a légkört,
- védő **mágneses tere** és **ózonrétege** kiszűri a káros napszelet és UV-sugárzást,
- a **Hold** stabilizálja a Föld tengelyferdeségét, ami hozzájárul az éghajlat kiegyenlítettségéhez.

## A Hold és mozgásai

A **Hold** a Föld egyetlen természetes kísérője, átmérője a Föld átmérőjének kb. negyede. A Hold kb. 27,3 nap alatt kerüli meg a Földet (**siderikus hónap**), és mivel forgási és keringési ideje azonos (**kötött forgás**), mindig ugyanazt az oldalát fordítja felénk. A **holdfázisok** (újhold, növő hold, telihold, fogyó hold) a Hold, a Föld és a Nap egymáshoz viszonyított helyzetének változásából adódnak, teljes ciklusuk kb. 29,5 nap (**szinodikus hónap**).

## Nap- és holdfogyatkozás

Amikor a Hold pontosan a Nap és a Föld közé kerül, és árnyéka a Föld felszínére esik, **napfogyatkozásról** beszélünk — ez mindig újholdkor következhet be. Amikor a Föld kerül a Nap és a Hold közé, és a Föld árnyéka a Holdra esik, **holdfogyatkozás** történik — ez teliholdkor lehetséges. Mivel a Hold keringési síkja kissé eltér a Föld keringési síkjától (ekliptikától), fogyatkozás csak ritkán, meghatározott feltételek mellett jön létre.

## Jelentősége

A Föld kozmikus helyzetének és a Naprendszer felépítésének ismerete alapja annak, hogy megértsük bolygónk egyedülálló, életre alkalmas adottságait, valamint a Nap és a Hold hatását a földi folyamatokra (árapály, évszakok, éghajlat).
`,
    key_concepts: [
      "Naprendszer és a Kepler-törvények",
      "Föld-típusú és Jupiter-típusú bolygók",
      "lakhatósági zóna",
      "holdfázisok és a szinodikus hónap",
      "nap- és holdfogyatkozás",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik törvény írja le, hogy a bolygók ellipszis alakú pályán keringenek a Nap körül?",
        options: ["Kepler első törvénye", "Kepler második törvénye", "Kepler harmadik törvénye", "Newton gravitációs törvénye"],
        correct_answer: "Kepler első törvénye",
        explanation: "Kepler első törvénye szerint a bolygók ellipszis alakú pályán keringenek, egyik fókuszpontban a Nappal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik bolygócsoportba tartozik a Föld?",
        options: ["Föld-típusú (kőzet-) bolygók", "Jupiter-típusú (óriás-) bolygók", "Törpebolygók", "Kisbolygók"],
        correct_answer: "Föld-típusú (kőzet-) bolygók",
        explanation: "A Föld a Merkúrral, a Venusszal és a Marssal együtt a kis méretű, szilárd kőzetfelszínű bolygók csoportjába tartozik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mikor következhet be napfogyatkozás?",
        options: ["újholdkor, amikor a Hold a Nap és a Föld közé kerül", "teliholdkor, amikor a Föld árnyéka a Holdra esik", "bármelyik holdfázisban", "csak évente egyszer, fix időpontban"],
        correct_answer: "újholdkor, amikor a Hold a Nap és a Föld közé kerül",
        explanation: "Napfogyatkozáskor a Hold kerül a Nap és a Föld közé, ez csak újhold idején lehetséges, amikor a három égitest majdnem egy vonalba kerül.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért fordítja a Hold mindig ugyanazt az oldalát a Föld felé?",
        options: [
          "mert a forgási és a keringési ideje azonos (kötött forgás)",
          "mert nincs saját tengelyforgása",
          "mert a Föld gravitációja megállítja a Hold forgását",
          "mert a Hold keringési ideje sokkal hosszabb a forgási idejénél",
        ],
        correct_answer: "mert a forgási és a keringési ideje azonos (kötött forgás)",
        explanation: "A Hold kötött forgása miatt a tengelyforgás és a Föld körüli keringés ideje egyaránt kb. 27,3 nap, ezért mindig ugyanaz az oldala látható.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a Föld lakhatósági (Goldilocks-) zónáját?",
        options: [
          "olyan Naptól való távolság, ahol a víz folyékony halmazállapotban is előfordulhat",
          "az a térség, ahol a Nap sugárzása a legerősebb",
          "a Naprendszer kisbolygóövének területe",
          "a Föld mágneses terének külső határa",
        ],
        correct_answer: "olyan Naptól való távolság, ahol a víz folyékony halmazállapotban is előfordulhat",
        explanation: "A lakhatósági zóna az a naptávolság-tartomány, amelyben a bolygó felszíni hőmérséklete lehetővé teszi a folyékony víz létét, ez az élet egyik alapfeltétele.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-fold-mozgasai-es-kovetkezmenyeik",
    title: "A Föld mozgásai és következményeik (forgás, keringés)",
    level: "mindketto",
    theme: "A Föld a világegyetemben",
    order_index: 2,
    summary_markdown:
      "A Föld tengelyforgása okozza a nappalok és éjszakák váltakozását, a Nap körüli keringése és a tengely ferdesége pedig az évszakok kialakulását. E két alapmozgás következményeinek megértése a földrajzi övezetesség alapja.",
    content_markdown: `
## A tengelyforgás és következményei

A Föld a saját tengelye körül nyugatról kelet felé, kb. **24 óra (pontosabban 23 óra 56 perc — csillagnap)** alatt fordul körbe. Ennek legfontosabb következményei:

- a **nappalok és éjszakák váltakozása** — a Nap felé forduló oldalon nappal, az ellentétes oldalon éjszaka van;
- a **helyi idő** és az **időzónák** kialakulása (a Föld 24, egyenként kb. 15°-os időzónára osztható);
- a mozgó testek (folyók, légáramlatok, tengeráramlatok) elhajlása, az úgynevezett **Coriolis-erő**, amely az északi féltekén jobbra, a délin balra téríti el a mozgó testeket;
- a Föld lapultsága a pólusoknál (a centrifugális erő miatt az egyenlítői átmérő nagyobb, mint a sarki átmérő).

## A keringés és a tengelyferdeség

A Föld a Nap körül egy enyhén elliptikus pályán, kb. **365,25 nap (egy év)** alatt kerüli meg a Napot. A Föld tengelye nem függőlegesen áll a keringési síkra (**ekliptikára**), hanem attól **kb. 23,5°-kal eltér** — ez a **tengelyferdeség**, amely az évszakok kialakulásának fő oka. A tengelyferdeség miatt az év folyamán a napsugarak beesési szöge és a nappalok hossza a földrajzi szélesség és az évszak szerint változik.

## Az évszakok kialakulása

Amikor az északi félteke a Nap felé hajlik, ott **nyár** van (hosszabb nappalok, nagyobb beesési szög), míg a déli féltekén ekkor **tél** van, és fordítva. Az évszakok váltakozását négy jellegzetes időpont határolja:

| Időpont | Dátum (kb.) | Jelenség az északi féltekén |
|---|---|---|
| Tavaszi napéjegyenlőség | március 20-21. | nappal és éjszaka egyenlő hosszú |
| Nyári napforduló (szolstícium) | június 21-22. | leghosszabb nappal, csillagászati nyár kezdete |
| Őszi napéjegyenlőség | szeptember 22-23. | nappal és éjszaka egyenlő hosszú |
| Téli napforduló (szolstícium) | december 21-22. | legrövidebb nappal, csillagászati tél kezdete |

**Napéjegyenlőségkor** a Nap az egyenlítő felett delel, és a Föld egészén (a pólusok kivételével) a nappal és az éjszaka egyenlő hosszú. **Napforduló** idején a Nap a Ráktérítő (nyári napforduló, ÉSZ 23,5°) vagy a Baktérítő (téli napforduló, DSZ 23,5°) fölött delel.

## A sarkkörök és a térítők jelentősége

A **térítők** (Rák- és Baktérítő, 23,5° É/D) azok a szélességi körök, amelyeken egy évben egyszer a Nap a zenitben delel. A **sarkkörök** (66,5° É/D) azok a szélességi körök, amelyeken egy évben legalább egyszer előfordul a **fehér éjszaka** (a Nap nem nyugszik le) vagy a **sarki éjszaka** (a Nap nem kel fel). A sarkokon 6 hónapig tart a nappal, majd 6 hónapig az éjszaka.

## Egyéb, hosszabb periódusú mozgások

A Föld tengelye nem csak forog, hanem lassan, mintegy 26 ezer év alatt egy kúppalástot ír le a világűrben — ezt nevezzük **precessziónak**, ami hosszú távon (több ezer éves távlatban) módosítja, melyik csillag mutat éppen az északi pólus felé, és befolyásolja a jégkorszakok ritmusát is (Milankovics-ciklusok).

## Jelentősége

A Föld forgása és keringése alapozza meg a napi és éves ritmust, amelyhez az élővilág és az emberi tevékenység (mezőgazdaság, életmód) is alkalmazkodott — ezért a földrajzi övezetesség és az éghajlati rendszer megértésének kiindulópontja.
`,
    key_concepts: [
      "tengelyforgás és a Coriolis-erő",
      "keringés és tengelyferdeség",
      "napéjegyenlőség és napforduló",
      "térítők és sarkkörök",
      "precesszió",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő oka az évszakok kialakulásának?",
        options: ["a Föld tengelyének ferdesége a keringési síkhoz képest", "a Föld és a Nap távolságának változása", "a Föld tengelyforgásának sebessége", "a Hold gravitációs hatása"],
        correct_answer: "a Föld tengelyének ferdesége a keringési síkhoz képest",
        explanation: "A tengelyferdeség (kb. 23,5°) miatt változik évszakonként a napsugarak beesési szöge és a nappalok hossza a két féltekén.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik jelenséget okozza a Föld tengelyforgása?",
        options: ["a nappalok és éjszakák váltakozását", "az évszakok váltakozását", "a jégkorszakok ritmusát", "a napéjegyenlőségek időpontját"],
        correct_answer: "a nappalok és éjszakák váltakozását",
        explanation: "A tengelyforgás kb. 24 óránként megismétlődő ciklusa hozza létre a nappal-éjszaka váltakozást, míg az évszakok a keringéshez és a tengelyferdeséghez kötődnek.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a Coriolis-erőt az északi féltekén?",
        options: [
          "jobbra téríti el a mozgó testeket (pl. légáramlatokat, folyókat)",
          "balra téríti el a mozgó testeket",
          "csak az egyenlítőn hat",
          "megszünteti a mozgó testek elmozdulását",
        ],
        correct_answer: "jobbra téríti el a mozgó testeket (pl. légáramlatokat, folyókat)",
        explanation: "A Föld tengelyforgása miatt az északi féltekén a mozgó testek (szél, folyóvíz, tengeráramlat) haladási irányukhoz képest jobbra térülnek el, a déli féltekén balra.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemző a nyári napforduló (szolstícium) idejére az északi féltekén?",
        options: [
          "ekkor a leghosszabb a nappal, és a Nap a Ráktérítő felett delel",
          "ekkor egyenlő hosszú a nappal és az éjszaka",
          "ekkor a legrövidebb a nappal",
          "ekkor a Nap a Baktérítő felett delel",
        ],
        correct_answer: "ekkor a leghosszabb a nappal, és a Nap a Ráktérítő felett delel",
        explanation: "A nyári napfordulókor (kb. június 21-22.) a Nap az északi féltekén a Ráktérítő fölött delel, ez a csillagászati nyár kezdete és a leghosszabb nappal napja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk a Föld mozgásai kapcsán precessziónak?",
        options: [
          "a Föld tengelyének kb. 26 ezer éves periódusú, kúppalástszerű elfordulását a világűrben",
          "a Föld napi tengelyforgását",
          "a Föld éves Nap körüli keringését",
          "a holdfázisok kb. 29,5 napos ciklusát",
        ],
        correct_answer: "a Föld tengelyének kb. 26 ezer éves periódusú, kúppalástszerű elfordulását a világűrben",
        explanation: "A precesszió a Föld tengelyének hosszú periódusú, kúppalást alakú elmozdulása, amely hosszú távon a Milankovics-ciklusokon keresztül az éghajlatra is hatással van.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "a-geoszferak-a-kozetburok-felepitese",
    title: "A geoszférák — a kőzetburok felépítése",
    level: "mindketto",
    theme: "A geoszférák",
    order_index: 3,
    summary_markdown:
      "A Föld gömbhéjas szerkezetű: a szilárd kéregtől a köpenyen át a magig egyre nagyobb a hőmérséklet és a nyomás. A kőzetburok (litoszféra) és az alatta lévő plasztikus asztenoszféra megértése a lemeztektonika alapja.",
    content_markdown: `
## A Föld gömbhéjas (geoszférikus) felépítése

A Föld belső szerkezete koncentrikus gömbhéjakra, **geoszférákra** tagolódik, amelyeket sűrűségük, összetételük és halmazállapotuk különböztet meg egymástól. A fő geoszférák — kívülről befelé haladva — a **légkör (atmoszféra)**, a **vízburok (hidroszféra)**, a **kőzetburok (litoszféra)**, a **köpeny (asztenoszféra és mezoszféra)** és a **földmag (bel- és külső mag)**. Ehhez társul a **talajburok (pedoszféra)** és az élővilág burka, a **bioszféra**, amelyek a felszín közelében a többi geoszférával kölcsönhatásban léteznek.

## A földkéreg

A **földkéreg** a Föld legkülső, szilárd, viszonylag vékony rétege, amelynek két fő típusa van:

- **kontinentális kéreg**: átlagosan 30-40 km (hegységek alatt akár 70 km) vékony, könnyebb, jellemzően gránitos összetételű (SiAl kéreg), idősebb kőzetekből áll;
- **óceáni kéreg**: átlagosan csak 5-10 km vastag, sűrűbb, bazaltos összetételű (SiMa kéreg), fiatalabb, a mélytengeri hátságoknál folyamatosan újraképződik.

A kéreg és a köpeny határát **Mohorovičić-féle discontinuitásnak (Moho-vonal)** nevezzük, amelyen áthaladva a kőzetek sűrűsége és összetétele hirtelen megváltozik.

## A köpeny: asztenoszféra és mezoszféra

A kéreg alatt a **köpeny** következik, amely a Föld térfogatának mintegy 84%-át teszi ki. Felső, plasztikusabb, részlegesen megolvadt rétege az **asztenoszféra** (kb. 100-350 km mélységig), amelyen a kéreg lemezei „úsznak” és lassan elmozdulnak — ez a lemeztektonika motorja. Az asztenoszféra alatt a szilárdabb, de még mindig forró **mezoszféra (alsó köpeny)** helyezkedik el, egészen a földmag határáig (kb. 2900 km mélységig).

## A földmag

A földmag két részre osztható: a **külső mag** (kb. 2900-5100 km mélység) folyékony, olvadt vas-nikkel ötvözetből áll, ennek áramlásai keltik a Föld **mágneses terét**; a **belső mag** (kb. 5100 km-től a Föld középpontjáig, kb. 6371 km) a rendkívül nagy nyomás miatt szilárd halmazállapotú, jóllehet a hőmérséklet itt a legmagasabb (kb. 5000-6000 °C).

## Litoszféra és asztenoszféra — a lemeztektonika kulcsa

A **litoszféra** a szilárd kőzetburok, amely magába foglalja a földkérget és a felső köpeny legfelső, merev részét — ez tagolódik a **litoszféra lemezekre**, amelyek az alattuk lévő plasztikus **asztenoszférán** úsznak és lassan (évente néhány cm-t) elmozdulnak. Ez a jelenség alapozza meg a következő tétel témáját, a lemeztektonikát.

## Jelentősége

A geoszférák szerkezetének ismerete nélkülözhetetlen a felszínt alakító belső erők (lemeztektonika, vulkánosság, földrengés) és a Föld mágneses terének, valamint a földtörténeti folyamatok megértéséhez.
`,
    key_concepts: [
      "geoszférák (légkör, vízburok, kőzetburok, köpeny, mag)",
      "kontinentális és óceáni kéreg",
      "Moho-vonal",
      "asztenoszféra és mezoszféra",
      "külső és belső mag",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik geoszféra a Föld legkülső, szilárd kőzetrétege?",
        options: ["a kőzetburok (litoszféra)", "a vízburok (hidroszféra)", "a köpeny (asztenoszféra)", "a földmag"],
        correct_answer: "a kőzetburok (litoszféra)",
        explanation: "A litoszféra a Föld legkülső, szilárd rétege, amely a kérget és a felső köpeny merev részét foglalja magába.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a fő különbség a kontinentális és az óceáni kéreg között?",
        options: [
          "a kontinentális kéreg vastagabb és könnyebb (gránitos), az óceáni vékonyabb és sűrűbb (bazaltos)",
          "a kontinentális kéreg vékonyabb, mint az óceáni",
          "az óceáni kéreg mindig idősebb, mint a kontinentális",
          "nincs érdemi különbség a kettő között",
        ],
        correct_answer: "a kontinentális kéreg vastagabb és könnyebb (gránitos), az óceáni vékonyabb és sűrűbb (bazaltos)",
        explanation: "A kontinentális kéreg átlagosan 30-40 km vastag és gránitos, az óceáni kéreg csak 5-10 km vastag, de sűrűbb, bazaltos összetételű.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik földi rétegben keletkezik a Föld mágneses tere?",
        options: ["a folyékony külső magban", "a szilárd belső magban", "az asztenoszférában", "a földkéregben"],
        correct_answer: "a folyékony külső magban",
        explanation: "A folyékony, vas-nikkel összetételű külső mag áramlásai (dinamóhatás) keltik a Föld mágneses terét.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi az asztenoszférát, és miért fontos a lemeztektonika szempontjából?",
        options: [
          "plasztikus, részlegesen megolvadt köpenyréteg, amelyen a litoszféra lemezei elmozdulnak",
          "a Föld szilárd belső magja, ahol nincs mozgás",
          "a légkör alsó rétege, ahol az időjárási jelenségek zajlanak",
          "az óceáni kéreg legmélyebb pontja",
        ],
        correct_answer: "plasztikus, részlegesen megolvadt köpenyréteg, amelyen a litoszféra lemezei elmozdulnak",
        explanation: "Az asztenoszféra plasztikus jellege lehetővé teszi, hogy a felette lévő litoszféra-lemezek lassan elmozduljanak — ez a lemeztektonika alapja.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan nevezzük a kéreg és a köpeny határát jelző, sűrűségváltozással jellemezhető felületet?",
        options: ["Mohorovičić-discontinuitás (Moho-vonal)", "asztenoszféra-határ", "litoszféra-perem", "ekliptika"],
        correct_answer: "Mohorovičić-discontinuitás (Moho-vonal)",
        explanation: "A Moho-vonal a kéreg és a köpeny határa, amelyen áthaladva a kőzetek sűrűsége és szeizmikus hullámsebessége hirtelen megváltozik.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "lemeztektonika-es-a-foldrengesek",
    title: "Lemeztektonika és a földrengések",
    level: "mindketto",
    theme: "A geoszférák",
    order_index: 4,
    summary_markdown:
      "A lemeztektonika elmélete szerint a litoszféra merev lemezekre tagolódik, amelyek az asztenoszférán lassan mozognak; a lemezek határain zajló folyamatok (szétcsúszás, összecsúszás, elcsúszás) okozzák a hegységképződést, a vulkánosságot és a földrengéseket.",
    content_markdown: `
## A lemeztektonika elmélete

A **lemeztektonika** elmélete szerint a Föld litoszférája nem egységes, hanem kb. egy tucat nagy és több kisebb, merev **litoszféra-lemezre** tagolódik (pl. Eurázsiai-, Afrikai-, Csendes-óceáni-, Indiai-Ausztrál-, Észak-amerikai-, Dél-amerikai-, Antarktiszi-lemez), amelyek az alattuk lévő plasztikus asztenoszférán évente néhány centimétert elmozdulnak. Az elméletet a **kontinensvándorlás** (Alfred Wegener, 1912) korábbi felismerése alapozta meg, amelyet a köpenyben zajló **konvekciós áramlások** és a tengerfenék-terjedés (óceánfenék-vizsgálatok) igazoltak a 20. század közepén.

## Lemezhatár-típusok

A lemezek egymáshoz viszonyított mozgása szerint három fő lemezhatár-típust különítünk el:

- **szétcsúszó (divergens) lemezhatár**: a lemezek távolodnak egymástól, a keletkező hasadékba felnyomuló magma új óceáni kérget hoz létre (pl. **közép-atlanti hátság**, Izland, valamint szárazföldön a **Kelet-afrikai-hasadékvölgy**);
- **összecsúszó (konvergens) lemezhatár**: a lemezek egymás felé mozdulnak; ha egy sűrűbb óceáni és egy könnyebb kontinentális lemez ütközik, az óceáni lemez alábukik (**szubdukció**) a másik alá, ami mélytengeri árkokat, vulkánikus hegységeket és erős földrengéseket eredményez (pl. Andok, Japán-árok); ha két kontinentális lemez ütközik, hatalmas **redőhegységek** emelkednek fel (pl. a Himalája az Indiai- és az Eurázsiai-lemez ütközéséből);
- **elcsúszó (transzformáló) lemezhatár**: a lemezek egymás mellett, ellentétes irányban csúsznak el, nem keletkezik és nem pusztul kéreg, de a feszültség hirtelen felszabadulása erős földrengéseket okoz (pl. **San Andreas-törésvonal** Kaliforniában).

## A földrengések keletkezése

A **földrengés** a kőzetburokban felhalmozódó feszültség hirtelen felszabadulásakor keletkező rezgés, amely hullámok formájában terjed a Föld belsejében és felszínén. A rengés kiindulási pontja a felszín alatt a **fészek (hipocentrum)**, a felszínen ehhez legközelebbi pont az **epicentrum**. A földrengések erősségét kétféle skálával jellemezzük:

- a **Richter-skála** a rengés energiáját (magnitúdóját) méri egy logaritmikus, felülről nem korlátozott skálán;
- a **Mercalli-skála** a földrengés felszíni hatását, az okozott károkat osztályozza (I-XII. fokozat).

## Földrengésövezetek és következmények

A világ legveszélyeztetettebb földrengésövezete a **Csendes-óceáni tűzgyűrű**, amely a Csendes-óceánt körülvevő lemezhatárok mentén húzódik (Japán, Fülöp-szigetek, Indonézia, Nyugat-Amerika partjai), valamint az **Alpi-Himalájai övezet**, amely Európától Ázsiáig húzódik. A tengerfenéki földrengések gyakran hatalmas hullámokat, **cunamikat** váltanak ki, amelyek a partokon súlyos pusztítást okozhatnak (pl. a 2004-es indiai-óceáni és a 2011-es japán cunami).

## Jelentősége, veszélyelhárítás

A lemeztektonikai folyamatok ismerete alapvető a földrengés- és vulkánveszély előrejelzéséhez, a védekezés (földrengésbiztos építkezés, korai előrejelző rendszerek, cunami-figyelmeztetés) megtervezéséhez, valamint a Föld felszínének hosszú távú alakulásának megértéséhez.
`,
    key_concepts: [
      "litoszféra-lemezek és mozgásuk",
      "szétcsúszó, összecsúszó, elcsúszó lemezhatár",
      "szubdukció és redőhegység-képződés",
      "fészek, epicentrum, Richter-skála",
      "Csendes-óceáni tűzgyűrű",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi történik egy összecsúszó (konvergens) lemezhatáron, ha egy óceáni és egy kontinentális lemez ütközik?",
        options: [
          "az óceáni lemez alábukik a kontinentális alá (szubdukció)",
          "a két lemez távolodik egymástól",
          "a két lemez elcsúszik egymás mellett",
          "mindkét lemez megsemmisül",
        ],
        correct_answer: "az óceáni lemez alábukik a kontinentális alá (szubdukció)",
        explanation: "A sűrűbb óceáni lemez a szubdukció során alábukik a könnyebb kontinentális lemez alá, ami vulkánosságot és erős földrengéseket okoz.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik lemezhatár-típusra jellemző a San Andreas-törésvonal?",
        options: ["elcsúszó (transzformáló) lemezhatár", "szétcsúszó (divergens) lemezhatár", "összecsúszó (konvergens) lemezhatár", "nem lemezhatár, hanem hot spot"],
        correct_answer: "elcsúszó (transzformáló) lemezhatár",
        explanation: "A San Andreas-törésvonalnál két lemez ellentétes irányban csúszik el egymás mellett, ami elcsúszó lemezhatárra jellemző.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a különbség a Richter-skála és a Mercalli-skála között?",
        options: [
          "a Richter-skála a rengés energiáját, a Mercalli-skála a felszíni hatását méri",
          "a két skála ugyanazt méri, csak más néven",
          "a Mercalli-skála méri az energiát, a Richter a károkat",
          "a Richter-skála csak tengeri, a Mercalli csak szárazföldi rengésekre alkalmazható",
        ],
        correct_answer: "a Richter-skála a rengés energiáját, a Mercalli-skála a felszíni hatását méri",
        explanation: "A Richter-skála logaritmikus skálán a földrengés magnitúdóját (energiáját) fejezi ki, a Mercalli-skála a felszínen okozott károkat, hatásokat osztályozza.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan keletkezik a Himalája hegység a lemeztektonika szempontjából?",
        options: [
          "két kontinentális lemez (Indiai- és Eurázsiai-lemez) ütközéséből, redőhegység-képződéssel",
          "egy óceáni lemez szubdukciójából",
          "egy szétcsúszó lemezhatár mentén kialakuló hasadékvölgyből",
          "egy elcsúszó lemezhatár mentén",
        ],
        correct_answer: "két kontinentális lemez (Indiai- és Eurázsiai-lemez) ütközéséből, redőhegység-képződéssel",
        explanation: "Mivel két kontinentális lemez sűrűsége hasonló, egyik sem bukik alá a másik alá — helyette a kéreg összetorlódik és felredőződik, létrehozva a Himaláját.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik övezet a Föld legveszélyeztetettebb földrengés- és vulkánövezete?",
        options: ["a Csendes-óceáni tűzgyűrű", "az Alpi-Himalájai övezet", "a Kelet-afrikai-hasadékvölgy", "a közép-atlanti hátság"],
        correct_answer: "a Csendes-óceáni tűzgyűrű",
        explanation: "A Csendes-óceánt körülvevő lemezhatárok mentén húzódó Csendes-óceáni tűzgyűrű a Föld legaktívabb földrengés- és vulkánövezete.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "vulkanossag-es-a-felszint-alakito-belso-erok",
    title: "Vulkánosság és a felszínt alakító belső erők",
    level: "mindketto",
    theme: "A geoszférák",
    order_index: 5,
    summary_markdown:
      "A belső erők (endogén folyamatok) közé tartozik a vulkánosság és a hegységképződés (orogenezis), amelyek a lemeztektonikai mozgásokból erednek, és a Föld felszínét nagyszabású formaelemekkel (vulkánok, hegyláncok, hasadékvölgyek) gazdagítják.",
    content_markdown: `
## A vulkánosság oka és feltételei

A **vulkánosság** akkor jön létre, amikor a kőzetolvadék (**magma**) a felszínre tör, és **lávaként**, valamint vulkáni gázok és szilárd anyagok (hamu, vulkáni bomba) formájában a felszínre kerül. Vulkánosság jellemzően három helyen alakul ki:

- **szétcsúszó lemezhatárok** mentén (pl. óceánközépi hátságok, Kelet-afrikai-hasadékvölgy), ahol a köpenyanyag felnyomulása miatt a nyomás csökken, és a kőzet megolvad;
- **összecsúszó (szubdukciós) lemezhatárok** mentén, ahol az alábukó lemez vize a köpenyanyag olvadáspontját csökkenti (pl. Andok, Japán);
- **hot spot (forró pont)** területeken, a lemezek belsejében, ahol a köpenyből feláramló magmaoszlop (**mantle plume**) hozza a felszínre az olvadékot, függetlenül a lemezhatároktól (pl. Hawaii-szigetek).

## Vulkántípusok

A vulkánok alakja és kitörési jellege a láva összetételétől (kovasav-tartalmától) és viszkozitásától függ:

| Vulkántípus | Láva jellege | Kitörés jellege | Példa |
|---|---|---|---|
| Pajzsvulkán | híg, bázikus (bazaltos) láva | csendes, folyásos | Hawaii (Mauna Loa) |
| Rétegvulkán (sztratovulkán) | savas, viszkózus láva, hamu rétegződve | robbanásos, veszélyes | Vezúv, Fuji, Etna |
| Kalderavulkán | rendkívül nagy, ritkán kitörő | szupervulkáni robbanás | Yellowstone |

## Vulkáni utóműködés

A vulkáni tevékenység elmúlása után is megfigyelhető jelenségek: **gejzírek** (időszakosan gőzt és forró vizet lövő kitörések), **hévizek és hőforrások** (pl. Magyarországon a Duna-Tisza közén és a Dunántúlon a hévízkincs vulkáni eredetű kőzetekhez, illetve mélységi hőhez kötődik), valamint **szolfatárák és fumarolák** (kén- és gáztartalmú gőzkifúvások).

## Hegységképződés (orogenezis)

A belső erők másik nagy csoportja a **hegységképződés**. Két fő típusa:

- **röghegység-képződés**: a merev kéregdarabok (rögök) törésvonalak (vetők) mentén emelkednek ki vagy süllyednek le, jellemzően idős, kopott hegyvidékeken (pl. a Mátra és a Bükk aljzata, a Fekete-erdő);
- **redőhegység-képződés**: két lemez ütközésekor az üledékes kőzetrétegek összetorlódnak és redőkbe gyűrődnek, hatalmas, fiatal hegyláncokat hozva létre (pl. Alpok, Kárpátok, Andok, Himalája).

## A vulkáni és szeizmikus veszély kezelése

A veszélyeztetett térségekben (Japán, Indonézia, Olaszország) fejlett **korai előrejelző rendszereket**, szigorú építési előírásokat és evakuálási terveket alkalmaznak; a vulkáni hamu ugyanakkor a talaj termékenységét is növelheti, ami miatt sűrűn lakott vulkáni vidékek (pl. Java szigete) is kialakulhatnak.

## Jelentősége

A vulkánosság és a hegységképződés a Föld belső energiájának felszíni megjelenése: alakítja a domborzatot, veszélyt jelent a lakosságra, de erőforrásokat (geotermikus energia, termékeny talaj, ásványkincs) is biztosít.
`,
    key_concepts: [
      "magma, láva, vulkáni kitörés",
      "pajzsvulkán és rétegvulkán",
      "hot spot (forró pont)",
      "röghegység és redőhegység",
      "gejzír, hévíz, szolfatára",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik vulkántípusra jellemző a híg, bazaltos láva és a csendes kitörés?",
        options: ["pajzsvulkán", "rétegvulkán", "kalderavulkán", "hasadékvulkán"],
        correct_answer: "pajzsvulkán",
        explanation: "A pajzsvulkánok (pl. Hawaii) híg, bázikus lávát bocsátanak ki, ezért kitörésük jellemzően csendes, folyásos jellegű.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol keletkezik jellemzően a Hawaii-szigetek vulkánossága?",
        options: ["hot spot (forró pont) felett", "szétcsúszó lemezhatáron", "összecsúszó lemezhatáron", "elcsúszó lemezhatáron"],
        correct_answer: "hot spot (forró pont) felett",
        explanation: "A Hawaii-szigetek vulkánossága egy állandó helyű köpenyfelboltozódás (hot spot) felett alakult ki, amely a Csendes-óceáni-lemez elmozdulása közben egymás után hozta létre a szigetsort.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a redőhegység-képződést?",
        options: [
          "két lemez ütközésekor az üledékes rétegek összetorlódnak és redőkbe gyűrődnek",
          "merev kéregdarabok törésvonalak mentén süllyednek vagy emelkednek",
          "kizárólag vulkáni tevékenységből épül fel",
          "csak óceáni kérgen fordul elő",
        ],
        correct_answer: "két lemez ütközésekor az üledékes rétegek összetorlódnak és redőkbe gyűrődnek",
        explanation: "A redőhegységek (pl. Alpok, Kárpátok) lemezütközés során az üledékes kőzetrétegek összetorlódásával és felredőződésével keletkeznek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik jelenség tartozik a vulkáni utóműködés körébe?",
        options: ["gejzír", "meander", "morotva", "defláció"],
        correct_answer: "gejzír",
        explanation: "A gejzír a vulkáni utóműködés jelensége: a felmelegített talajvíz időszakosan gőz és forró víz formájában a felszínre tör.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért alakulhat ki sűrű lakosság a veszélyes vulkáni vidékeken, mint Java szigetén?",
        options: [
          "a vulkáni hamu termékennyé teszi a talajt, ami jó mezőgazdasági feltételeket biztosít",
          "ott sosincs vulkánkitörés",
          "a vulkánok hője miatt kedvezőbb az éghajlat",
          "a vulkáni kőzetek ivóvízkészletet biztosítanak",
        ],
        correct_answer: "a vulkáni hamu termékennyé teszi a talajt, ami jó mezőgazdasági feltételeket biztosít",
        explanation: "A vulkáni hamu ásványi anyagokban gazdag, termékeny talajt eredményez, ami a veszély ellenére is sűrű mezőgazdasági népességet vonz a vulkáni vidékekre.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kulso-erok-lepusztulas-folyovizi-es-szelformalas",
    title: "Külső erők — lepusztulás, folyóvízi és szélformálás",
    level: "mindketto",
    theme: "A geoszférák",
    order_index: 6,
    summary_markdown:
      "A külső (exogén) erők — a mállás, a folyóvíz, a szél és a jég munkája — a belső erők által létrehozott formákat pusztítják és alakítják át, létrehozva a felszín finomabb formáit, mint a folyóvölgyek, a homokdűnék és a hordalékkúpok.",
    content_markdown: `
## Mállás — a lepusztulás első lépése

A **mállás** azoknak a folyamatoknak az összessége, amelyek a kőzeteket a helyükön aprítják, bontják, a további lepusztulás számára előkészítik. Két fő típusa:

- **fizikai (mechanikai) mállás**: a kőzet szerkezete nem, csak a mérete változik — például a **fagyaprózódás** (a résekbe hatoló víz fagyáskor kitágul és szétfeszíti a kőzetet), a hőingás okozta aprózódás sivatagi éghajlaton;
- **kémiai mállás**: a kőzet ásványi összetétele is megváltozik — például a mészkő oldódása szénsavas vízben (**karsztosodás**), vagy az oxidáció, amely a vas- és egyéb ásványok átalakulását okozza.

## Folyóvízi felszínformálás

A folyók a lepusztult kőzetanyagot szállítják és újra lerakják, eközben jellegzetes formákat alakítanak ki:

- a **hegyvidéki (felső) szakaszon** a folyó erős eséssel, gyors sodrással **mélyíti** medrét, V-alakú szurdokvölgyeket vág;
- a **középső szakaszon** a folyó oldalirányban is dolgozik, kanyarulatokat, **meandereket** alakít ki, amelyek idővel leszakadva **morotvává (holtággá)** válhatnak;
- az **alsó szakaszon**, ahol a folyó esése csökken, feltöltő munka jellemző: **ártér**, **hordalékkúp** (ahol a folyó hegyvidékről síkságra ér) és a folyó torkolatánál **delta** alakul ki (pl. a Nílus vagy a Duna deltája).

## Szélformálás — a defláció és az akkumuláció

Elsősorban a száraz, növényzet nélküli (sivatagi, sztyeppei) területeken meghatározó a szél munkája:

- **defláció**: a szél elszállítja a finom szemcséjű, laza üledéket (homok, por), amely másutt felhalmozódik;
- **korrázió**: a szél által szállított szemcsék koptató, csiszoló hatása a kőzetfelszíneken (pl. gombakövek kialakulása);
- **akkumuláció**: a szél által szállított homok lerakódásából **futóhomok-formák** és **homokdűnék** (pl. barkánok, longitudinális dűnék) keletkeznek a Szaharában vagy a Kiskunságban;
- a löszös területeken (pl. a Kárpát-medence egyes vidékein) a jégkorszaki, szél által szállított finom por, a **lösz** rakódott le, amely kiváló termőtalaj alapja.

## Tömegmozgások

A gravitáció hatására a hegyoldalak kőzet- és talajtömegei is elmozdulhatnak: **kőomlás**, **csuszamlás** (ha a víznyomás megnöveli a réteg csúszását) és **suvadás** (finomabb, agyagos üledékek lassú lecsúszása) — ezek gyakran heves esőzések vagy földrengések után fokozódnak, és komoly veszélyt jelentenek a hegyvidéki településekre.

## A jég munkája

A magashegységekben és a jégkorszaki eljegesedett területeken a **gleccserek** is jelentős felszínformáló erők: a jég mozgása közben kimélyíti a **kárfülkéket** és **teknővölgyeket**, a jég által szállított kőzetdarabokból pedig **morénák** rakódnak le a gleccser szélén és végén.

## Jelentősége

A külső erők folyamatosan alakítják, finomítják a belső erők által létrehozott nagy formákat — a lepusztulás és a feltöltés váltakozása alakítja ki azt a sokszínű, részletes domborzatot, amelyben élünk.
`,
    key_concepts: [
      "fizikai és kémiai mállás",
      "folyóvízi eróziós és feltöltő szakaszok",
      "defláció, korrázió, futóhomok",
      "tömegmozgások (csuszamlás, suvadás)",
      "gleccser és moréna",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a fizikai (mechanikai) mállást?",
        options: [
          "a kőzet mérete változik, az ásványi összetétele nem",
          "a kőzet ásványi összetétele is megváltozik",
          "kizárólag folyóvíz hatására megy végbe",
          "csak trópusi éghajlaton fordul elő",
        ],
        correct_answer: "a kőzet mérete változik, az ásványi összetétele nem",
        explanation: "A fizikai mállás (pl. fagyaprózódás) a kőzetet aprítja, de nem változtatja meg annak ásványi-kémiai összetételét, ellentétben a kémiai mállással.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hol alakul ki jellemzően delta a folyók vízrajzában?",
        options: ["a folyó torkolatánál, ahol a hordalék lerakódik", "a folyó forrásvidékén", "a hegyvidéki szakasz meredek völgyében", "a folyó legmélyebb szurdokvölgyében"],
        correct_answer: "a folyó torkolatánál, ahol a hordalék lerakódik",
        explanation: "A delta a folyó torkolatánál, jellemzően tengerbe vagy tóba éréskor keletkezik, ahol a lelassuló víz nem képes tovább szállítani a hordalékot.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a defláció?",
        options: [
          "a szél által végzett finom üledék elszállítása",
          "a szél koptató-csiszoló hatása a kőzetfelszínen",
          "a folyóvíz feltöltő munkája",
          "a jég által szállított kőzetanyag lerakódása",
        ],
        correct_answer: "a szél által végzett finom üledék elszállítása",
        explanation: "A defláció a szél kifúvó, elszállító munkája, amellyel a laza, finom szemcséjű üledéket (port, homokot) elszállítja a felszínről.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan keletkezik a morotva (holtág)?",
        options: [
          "egy meander leszakadásával a folyó fő medréből",
          "a folyó torkolatánál a delta feltöltődéséből",
          "a szél által kialakított dűneközi mélyedésből",
          "gleccser által kimélyített teknővölgyből",
        ],
        correct_answer: "egy meander leszakadásával a folyó fő medréből",
        explanation: "A morotva egy korábbi kanyarulat (meander) leszakadásával, a folyó fő medrétől elválva keletkező holtág, amely lassan feltöltődik.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen talaj alapkőzete a jégkorszaki, szél által szállított és lerakott finom porüledék, a lösz?",
        options: [
          "kiváló termékenységű mezőgazdasági talajok (pl. csernozjom) alapkőzete",
          "kizárólag sivatagi, terméketlen talajok kialakulásának alapja",
          "csak tengerparti homokdűnék felépítésében jelenik meg",
          "vulkáni eredetű kőzet, amely gejzírek környékén rakódik le",
        ],
        correct_answer: "kiváló termékenységű mezőgazdasági talajok (pl. csernozjom) alapkőzete",
        explanation: "A jégkorszakban szél által szállított és felhalmozott lösz finom szemcseszerkezete és ásványi tartalma miatt kiváló, termékeny talajok (pl. csernozjom) képződésének alapja, így a Kárpát-medence egyes vidékein is fontos mezőgazdasági erőforrás.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "asvanyok-es-kozetek",
    title: "Ásványok és kőzetek",
    level: "mindketto",
    theme: "A geoszférák",
    order_index: 7,
    summary_markdown:
      "A kőzetburok építőkövei az ásványok, amelyekből a kőzetek — keletkezésük szerint magmás, üledékes és átalakult (metamorf) kőzetek — felépülnek. Ezek felismerése és keletkezési körforgásuk (kőzetciklus) megértése alapvető földtani ismeret.",
    content_markdown: `
## Az ásvány fogalma és tulajdonságai

Az **ásvány** természetes eredetű, meghatározott kémiai összetételű és rendezett belső szerkezetű (kristályos) szilárd anyag. Az ásványokat jellemző tulajdonságok alapján azonosítjuk:

- **keménység** — a **Mohs-skála** 1-10-ig osztályozza (1: talkum — a legpuhább, 10: gyémánt — a legkeményebb);
- **fénytörés, szín, csillamlás (fényesség)**;
- **hasadás és törés** — az ásvány kristályszerkezete mentén hasad-e (pl. csillám lemezesen hasad) vagy szabálytalanul törik;
- **sűrűség és fajsúly**.

Gyakori ásványok: **kvarc** (SiO₂, üveges fénnyel), **földpát**, **csillám**, **kalcit** (mészkő fő alkotója), valamint az **érces ásványok** (pl. hematit, pirit), amelyek fémek nyersanyagai.

## A kőzetek fő típusai

A **kőzet** ásványok (ritkábban egyetlen ásvány, vagy szervesanyag) természetes halmaza. Keletkezésük alapján három nagy csoportba soroljuk őket.

### Magmás kőzetek

A megolvadt kőzetanyag (magma) megszilárdulásából keletkeznek.

- **mélységi (intrúziós) magmás kőzetek**: a magma a felszín alatt, lassan hűl ki, ezért nagy kristályok jellemzik — pl. **gránit**;
- **kiömlési (extrúziós, vulkáni) kőzetek**: a láva a felszínen gyorsan hűl ki, apró kristályos vagy üveges szerkezetűek — pl. **bazalt**, andezit, riolit.

### Üledékes kőzetek

Lepusztult kőzetdarabok, vagy szervesanyag, illetve vízből kicsapódó anyag rétegződéséből, majd összecementálódásából (**diagenezis**) keletkeznek.

- **törmelékes üledékes kőzetek**: pl. homokkő, agyag, kavicskonglomerátum;
- **biogén (szervesanyagból keletkezett) üledékes kőzetek**: pl. mészkő (mészvázú élőlényekből), kőszén (elhalt növényi anyagból);
- **kémiai üledékes kőzetek**: pl. kősó, gipsz (kicsapódással keletkeznek elpárolgó vízből).

### Átalakult (metamorf) kőzetek

Már meglévő (magmás vagy üledékes) kőzetek nagy hőmérséklet és/vagy nyomás hatására, szilárd állapotban átalakulva keletkeznek, anélkül, hogy megolvadnának — pl. a mészkőből **márvány**, az agyagos kőzetekből **pala**, a gránitból **gneisz** keletkezik.

## A kőzetciklus

A három kőzettípus nem elszigetelt: a **kőzetciklus** azt írja le, hogy a kőzetek folyamatosan átalakulnak egymásba a lepusztulás, üledékképződés, átalakulás és megolvadás (majd újbóli megszilárdulás) körforgásában — egy magmás kőzet mállásból üledék, majd üledékes kőzet, a mélybe kerülve nagy nyomáson és hőn átalakult kőzet, végül megolvadva újra magma lehet.

## Jelentősége

Az ásványok és kőzetek felismerése kulcs a domborzat, a talajok, a nyersanyagkincs (érc, kőszén, kőolaj, építőipari alapanyagok) és a földtörténeti múlt megértéséhez, valamint a bányászat és az építőipar számára is alapvető gyakorlati ismeret.
`,
    key_concepts: [
      "ásvány és a Mohs-skála",
      "magmás kőzetek (mélységi, kiömlési)",
      "üledékes kőzetek (törmelékes, biogén, kémiai)",
      "metamorf (átalakult) kőzetek",
      "kőzetciklus",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit mér a Mohs-skála?",
        options: ["az ásványok keménységét", "az ásványok sűrűségét", "a kőzetek korát", "a kőzetek hőtartalmát"],
        correct_answer: "az ásványok keménységét",
        explanation: "A Mohs-skála 1-től (talkum, legpuhább) 10-ig (gyémánt, legkeményebb) osztályozza az ásványok keménységét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik kőzet keletkezik mészkőből, nagy hő és nyomás hatására, átalakulással?",
        options: ["márvány", "gránit", "homokkő", "bazalt"],
        correct_answer: "márvány",
        explanation: "A mészkő nagy hőmérséklet és nyomás hatására, szilárd állapotban átalakulva márvánnyá metamorfizálódik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a mélységi (intrúziós) magmás kőzeteket, mint a gránitot?",
        options: [
          "a felszín alatt lassan hűlnek ki, ezért nagy kristályok jellemzik",
          "a felszínen gyorsan hűlnek ki, apró kristályos szerkezetűek",
          "szerves anyagokból keletkeznek",
          "kizárólag üledékrétegek összecementálódásából állnak elő",
        ],
        correct_answer: "a felszín alatt lassan hűlnek ki, ezért nagy kristályok jellemzik",
        explanation: "A mélységi magmás kőzetek (pl. gránit) a felszín alatt lassan szilárdulnak meg, ami időt hagy nagy kristályok kialakulására, ellentétben a gyorsan hűlő kiömlési kőzetekkel (pl. bazalt).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik felsorolás tartalmaz csak biogén üledékes kőzeteket?",
        options: ["mészkő, kőszén", "gránit, bazalt", "márvány, gneisz", "homokkő, agyag"],
        correct_answer: "mészkő, kőszén",
        explanation: "A mészkő mészvázú élőlényekből, a kőszén elhalt növényi anyagból keletkezett, mindkettő biogén (szervesanyagból eredő) üledékes kőzet.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki a kőzetciklus fogalma?",
        options: [
          "hogy a kőzetek a lepusztulás, üledékképződés, átalakulás és megolvadás körforgásában folyamatosan átalakulnak egymásba",
          "hogy minden kőzet csak egyszer, véglegesen keletkezik",
          "az ásványok kristályszerkezetének napi ciklusát",
          "a földrengések periodikus ismétlődését",
        ],
        correct_answer: "hogy a kőzetek a lepusztulás, üledékképződés, átalakulás és megolvadás körforgásában folyamatosan átalakulnak egymásba",
        explanation: "A kőzetciklus azt a folyamatot írja le, ahogyan a magmás, üledékes és metamorf kőzetek a földtörténeti idő során egymásba alakulhatnak át.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "eghajlati-ovezetesseg-es-a-legkor-felepitese",
    title: "Éghajlati övezetesség és a légkör felépítése",
    level: "mindketto",
    theme: "A légkör",
    order_index: 8,
    summary_markdown:
      "A légkör rétegzett szerkezetű gázburok, amely megvédi a Földet és megteremti az élet feltételeit. A napsugárzás egyenetlen eloszlása alapozza meg a Föld éghajlati övezetességének rendszerét a forró, a mérsékelt és a hideg övtől a sarkvidékig.",
    content_markdown: `
## A légkör összetétele és rétegei

A **légkör (atmoszféra)** a Földet körülvevő gázburok, amely elsősorban **nitrogénből (78%)** és **oxigénből (21%)** áll, kis mennyiségű **szén-dioxidot, vízgőzt és nemesgázokat** is tartalmaz. A légkör magassága szerint rétegződik:

- **troposzféra** (0-kb. 11 km): itt zajlik az időjárás, felfelé haladva a hőmérséklet csökken;
- **sztratoszféra** (kb. 11-50 km): itt található az **ózonréteg**, amely elnyeli a káros UV-sugárzást, ezért felfelé haladva a hőmérséklet nő;
- **mezoszféra** (kb. 50-85 km): itt égnek el a légkörbe hatoló meteorok;
- **termoszféra** (kb. 85-500/600 km): a napszél hatására itt jönnek létre a **sarki fény (aurora)** jelenségei;
- **exoszféra**: a légkör legkülső, a világűrbe átmenő rétege.

## A napsugárzás egyenetlen eloszlása

A Föld gömb alakja miatt a napsugarak beesési szöge a földrajzi szélesség szerint változik: az **egyenlítő** környékén a sugarak közel merőlegesen érik a felszínt (nagy energiasűrűség egységnyi területre), a **sarkok** felé haladva egyre lapultabb szögben esnek be, ezért egységnyi területre kevesebb energia jut. Ez a **besugárzási egyenlőtlenség** az alapja a Föld hőmérsékleti és éghajlati övezetességének.

## Az éghajlati övezetek rendszere

Az egyenlítőtől a sarkok felé haladva a Föld éghajlata fokozatosan hidegebbé válik, ez alapján különítjük el a nagy éghajlati öveket:

| Öv | Elhelyezkedés | Fő jellemző |
|---|---|---|
| Forró (egyenlítői, átmeneti, térítői) öv | egyenlítő és a térítők között | magas évi átlaghőmérséklet, kis évi ingás |
| Mérsékelt öv (meleg, valódi, hideg mérsékelt) | térítők és a sarkkörök között | jelentős évszakos hőmérséklet-ingadozás |
| Hideg öv (szubpoláris, poláris) | a sarkköröktől a sarkokig | alacsony évi átlaghőmérséklet, fagyos időszak dominál |

Az egyes övezeteken belül további altípusokat különböztetünk meg (pl. a mérsékelt övben mediterrán, valódi mérsékelt és mérsékelten hideg éghajlat), amelyeket a következő tételek részletesebben tárgyalnak.

## Az éghajlatot módosító tényezők

Az alapvető szélességi övezetességet több tényező módosíthatja helyi szinten: a **tengertől való távolság** (az óceáni éghajlat kiegyenlítettebb, mint a szárazföld belsejének kontinentális éghajlata), a **tengerszint feletti magasság** (magasabban hidegebb, kb. 100 m-enként 0,6 °C-kal csökken a hőmérséklet), a **tengeráramlatok** (pl. a meleg Golf-áramlat enyhíti Nyugat-Európa éghajlatát), valamint az **uralkodó szélrendszerek** és a **domborzat** (hegységek eső-árnyékoló hatása).

## Jelentősége

A légkör rétegzett szerkezetének és az éghajlati övezetesség alapjainak ismerete nélkülözhetetlen ahhoz, hogy megértsük, miért alakulnak ki eltérő időjárási és éghajlati viszonyok a Föld különböző pontjain, és ez alapozza meg a további természetföldrajzi tételeket.
`,
    key_concepts: [
      "a légkör rétegei (troposzféra, sztratoszféra stb.)",
      "ózonréteg",
      "besugárzási egyenlőtlenség",
      "forró, mérsékelt, hideg éghajlati öv",
      "az éghajlatot módosító tényezők",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik légköri rétegben zajlik az időjárás?",
        options: ["troposzféra", "sztratoszféra", "mezoszféra", "termoszféra"],
        correct_answer: "troposzféra",
        explanation: "A troposzféra a légkör legalsó rétege, itt zajlanak az időjárási jelenségek (felhőképződés, csapadék, szél).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik légköri réteg tartalmazza az UV-sugárzást elnyelő ózonréteget?",
        options: ["sztratoszféra", "troposzféra", "mezoszféra", "exoszféra"],
        correct_answer: "sztratoszféra",
        explanation: "Az ózonréteg a sztratoszférában található, és elnyeli a Nap káros ultraviolett sugárzásának nagy részét.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi az alapvető oka a Föld éghajlati övezetességének?",
        options: [
          "a napsugarak beesési szögének egyenetlen eloszlása a földrajzi szélesség szerint",
          "a Föld és a Nap távolságának évszakos változása",
          "a légkör összetételének szélességtől függő eltérése",
          "a tengeráramlatok iránya",
        ],
        correct_answer: "a napsugarak beesési szögének egyenetlen eloszlása a földrajzi szélesség szerint",
        explanation: "A Föld gömb alakja miatt a napsugarak beesési szöge az egyenlítőtől a sarkok felé egyre lapultabbá válik, ez az alapvető oka a hőmérsékleti és éghajlati övezetességnek.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért enyhébb Nyugat-Európa éghajlata, mint hasonló szélességű kontinentális belső területeké?",
        options: [
          "a meleg Golf-áramlat hatása enyhíti az éghajlatot",
          "az ózonréteg ott vékonyabb",
          "a besugárzási szög ott merőlegesebb",
          "a troposzféra ott magasabb",
        ],
        correct_answer: "a meleg Golf-áramlat hatása enyhíti az éghajlatot",
        explanation: "A meleg Golf-áramlat (Golf-stream) hőt szállít az Atlanti-óceán északi részére, ami jelentősen enyhébbé teszi Nyugat-Európa téli éghajlatát a földrajzi szélességéhez képest.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Kb. hány fokkal csökken a hőmérséklet 100 méter tengerszint feletti magasságnövekedésenként a troposzférában?",
        options: ["kb. 0,6 °C", "kb. 3 °C", "kb. 0,1 °C", "kb. 10 °C"],
        correct_answer: "kb. 0,6 °C",
        explanation: "A troposzférában a hőmérséklet átlagosan kb. 0,6 °C-kal csökken minden 100 méteres magasságnövekedéssel, ez az úgynevezett normál hőmérsékleti gradiens.",
        difficulty: 3,
      },
    ],
  },
];
