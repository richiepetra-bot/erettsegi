import type { TopicSeed } from "./angol";

export const fizikaAtomfizikaKozmoszTopics: TopicSeed[] = [
  {
    slug: "atomfizika-bohr-modell-energiaszintek-szinkepek",
    title: "Atomfizika — Bohr-modell, energiaszintek, színképek",
    level: "emelt",
    theme: "Atomfizika",
    order_index: 25,
    summary_markdown:
      "Bohr atommodellje az elektronok energiaszintjeit kvantált (meghatározott, discrét) értékekre korlátozza, ami magyarázatot ad az atomok jellegzetes vonalas színképére.",
    content_markdown: `
## Az atom szerkezetének felfedezése

Rutherford szórási kísérletei (alfa-részecskék vékony aranyfólián történő szóródása) vezettek az **atommag** felfedezéséhez: az atom tömegének és pozitív töltésének csaknem egésze egy rendkívül kicsi, sűrű **atommagban** összpontosul, körülötte pedig (nagyrészt üres térben) mozognak az elektronok. Ez a felismerés cáfolta a korábbi, egyenletes töltéseloszlást feltételező modelleket.

## Bohr atommodellje

**Niels Bohr** (1913) a hidrogénatomra alkotott modelljében két, akkor forradalmian új feltételezést tett:

1. Az elektron csak meghatározott, **discrét (kvantált) energiájú körpályákon (energiaszinteken)** mozoghat a mag körül, ezeken a pályákon nem sugároz ki energiát (ellentétben a klasszikus elektrodinamika előrejelzésével).
2. Az elektron csak akkor bocsát ki, illetve nyel el energiát (elektromágneses sugárzás — foton — formájában), amikor **átugrik egy energiaszintről egy másikra**. A kibocsátott/elnyelt foton energiája pontosan megegyezik a két energiaszint közötti különbséggel:

**E_foton = h · f = E_magasabb − E_alacsonyabb**

A hidrogénatom energiaszintjei: **E_n = −13,6 eV / n²** (n = 1, 2, 3, ... a **főkvantumszám**), ahol n = 1 az **alapállapot** (legkisebb energiájú, legstabilabb állapot), n > 1 a **gerjesztett állapotok**.

## Az atomi színképek (spektrumok)

Mivel az energiaszintek kvantáltak (discrét értékűek), egy adott atom csak meghatározott (a szintkülönbségeknek megfelelő) frekvenciájú/hullámhosszú fényt bocsáthat ki vagy nyelhet el. Ez magyarázza az atomok **vonalas színképét (emissziós vagy abszorpciós spektrumát)**: minden elem egyedi, jellegzetes "ujjlenyomatként" szolgáló vonalas spektrummal rendelkezik, amely alapján az elemek azonosíthatók (pl. csillagok fényének spektroszkópiai elemzésével meghatározható azok kémiai összetétele).

- **Emissziós színkép**: gerjesztett atomok által kibocsátott fény spektruma, sötét háttéren világos vonalakkal.
- **Abszorpciós színkép**: folytonos spektrumú fény egy hidegebb gázon áthaladva, amely elnyeli a rá jellemző hullámhosszakat — világos háttéren sötét vonalak jelennek meg (ilyen pl. a Nap színképe, a Fraunhofer-vonalak).

## A Bohr-modell korlátai

A Bohr-modell kizárólag a hidrogénatomra (és hidrogénszerű, egyelektronos ionokra) adott jó, kvantitatív egyezést a mért színképekkel; több elektronos atomokra, illetve finomabb jelenségekre (pl. az energiaszintek felhasadására mágneses mezőben) nem adott megfelelő magyarázatot. Ezeket a hiányosságokat a később kidolgozott, teljes **kvantummechanika** oldotta meg, amely az elektron helyét és energiáját hullámfüggvénnyel, valószínűségi eloszlással írja le, nem éles körpályákkal.

## Példa levezetés

Egy hidrogénatom elektronja a harmadik gerjesztett állapotból (n=4) az alapállapotba (n=1) ugrik. Mekkora energiájú fotont bocsát ki?

1. E₄ = −13,6/16 = −0,85 eV; E₁ = −13,6/1 = −13,6 eV
2. E_foton = E₄ − E₁ = −0,85 − (−13,6) = **12,75 eV**
`,
    key_concepts: [
      "Rutherford-féle atommag felfedezése",
      "Bohr atommodellje: kvantált energiaszintek",
      "foton kibocsátása/elnyelése energiaszint-átmenetnél",
      "emissziós és abszorpciós színkép",
      "a Bohr-modell korlátai",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit bizonyítottak Rutherford szórási kísérletei?",
        options: [
          "az atom tömege és pozitív töltése egy rendkívül kicsi atommagban összpontosul",
          "az elektronok folytonos energiaeloszlásúak",
          "az atomnak nincs magja",
          "az atomok nem tartalmaznak elektronokat",
        ],
        correct_answer: "az atom tömege és pozitív töltése egy rendkívül kicsi atommagban összpontosul",
        explanation: "Az alfa-részecskék szórási mintázata alapján Rutherford arra a következtetésre jutott, hogy az atom pozitív töltése és tömegének nagy része egy kicsi, sűrű atommagban koncentrálódik.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit állít Bohr atommodellje az elektron energiájáról?",
        options: [
          "az elektron csak meghatározott, discrét energiaszinteken tartózkodhat",
          "az elektron energiája folytonosan bármilyen értéket felvehet",
          "az elektron energiája mindig nulla",
          "az elektron energiája nem függ a pályától",
        ],
        correct_answer: "az elektron csak meghatározott, discrét energiaszinteken tartózkodhat",
        explanation: "Bohr modellje szerint az elektron csak kvantált (discrét) energiájú pályákon (energiaszinteken) tartózkodhat, és csak e szintek közötti átmenetnél bocsát ki/nyel el energiát.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért egyedi minden elem vonalas színképe?",
        options: [
          "mert az energiaszintjeik (és így a lehetséges átmenetek energiái) elemre jellemzőek",
          "mert minden elem azonos színképet ad",
          "mert a színkép csak a hőmérséklettől függ",
          "mert a színkép mindig folytonos",
        ],
        correct_answer: "mert az energiaszintjeik (és így a lehetséges átmenetek energiái) elemre jellemzőek",
        explanation: "Az egyes elemek atomjainak energiaszint-szerkezete egyedi, ezért a lehetséges energiaszint-átmenetekhez tartozó fotonenergiák (hullámhosszak) is elemspecifikusak, egyedi 'ujjlenyomatot' adva.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy hidrogénatom elektronja az n=2 energiaszintről az n=1 alapállapotba ugrik. Mekkora energiájú fotont bocsát ki (E_n = −13,6/n² eV)?",
        options: ["10,2 eV", "13,6 eV", "3,4 eV", "6,8 eV"],
        correct_answer: "10,2 eV",
        explanation: "E₂ = −13,6/4 = −3,4 eV; E₁ = −13,6 eV; E_foton = E₂ − E₁ = −3,4 − (−13,6) = 10,2 eV.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem volt alkalmazható a Bohr-modell pontosan a több elektronos atomokra?",
        options: [
          "mert a modell nem vette figyelembe az elektronok közötti kölcsönhatásokat és a kvantummechanika finomabb effektusait",
          "mert a több elektronos atomoknak nincs energiaszintjük",
          "mert Bohr modellje csak fémekre volt érvényes",
          "mert a több elektronos atomoknak nincs színképük",
        ],
        correct_answer: "mert a modell nem vette figyelembe az elektronok közötti kölcsönhatásokat és a kvantummechanika finomabb effektusait",
        explanation: "A Bohr-modell egyszerűsített, klasszikus-kvantumos hibrid leírás volt, amely csak az egyelektronos rendszerekre (hidrogén, hidrogénszerű ionok) adott jó egyezést; a teljes kvantummechanika oldotta meg a több elektronos atomok leírását.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "kvantumfizika-alapjai-fenyelektromos-jelenseg",
    title: "Kvantumfizika alapjai — fényelektromos jelenség",
    level: "emelt",
    theme: "Atomfizika",
    order_index: 26,
    summary_markdown:
      "A fényelektromos jelenség (fotoeffektus) Einstein magyarázata szerint csak a fény foton-természetének feltételezésével érthető meg, és a modern kvantumfizika egyik alapkísérlete.",
    content_markdown: `
## A fényelektromos jelenség (fotoeffektus) megfigyelése

A **fényelektromos jelenség (fotoeffektus)** során egy fémfelületre (jellemzően ultraviola vagy látható) fényt irányítva a fémből **elektronok lépnek ki**. A jelenséget a 19. század végén figyelték meg, de a klasszikus (hullám-) fényelmélet nem tudta megmagyarázni a következő tapasztalt tulajdonságokat:

- Az elektronkilépés **azonnal** (mérhető késés nélkül) megindul, amint a megfelelő frekvenciájú fény a fémre esik, még kis intenzitásnál is.
- Az elektronok kilépéséhez a fény frekvenciájának el kell érnie egy, a fémre jellemző **határfrekvenciát (küszöbfrekvenciát, f₀)** — ez alatt **semennyi ideig tartó megvilágítás** sem indít elektronkilépést.
- A kilépő elektronok mozgási energiája a **fény frekvenciájával** nő, de **nem függ a fény intenzitásától** (csak az adott frekvencián kilépő elektronok száma nő az intenzitással).

## Einstein magyarázata: a fotonok

**Einstein** (1905, Nobel-díj: 1921) Planck kvantumhipotézisére alapozva magyarázta meg a jelenséget: a fényt nem folytonos hullámként, hanem **discrét energiaadagokból, fotonokból álló "részecskeáramként"** kell tekinteni, ahol egy foton energiája **E = h·f**. A jelenség Einstein-féle egyenlete:

**h · f = W_ki + E_mozg,max**

ahol W_ki a fém **kilépési munkája** (az az energia, amely az elektron fémből való kiszabadításához minimálisan szükséges), E_mozg,max a kilépő elektronok maximális mozgási energiája. Ebből azonnal következik a küszöbfrekvencia létezése: ha h·f < W_ki, egyáltalán nincs elektronkilépés, függetlenül az intenzitástól — **f₀ = W_ki / h**.

## Miért nem magyarázta a klasszikus hullámelmélet a jelenséget?

A klasszikus (hullám-) elmélet szerint a fény energiáját az intenzitás (amplitúdó négyzete) határozza meg, függetlenül a frekvenciától — ez alapján elég nagy intenzitású, alacsony frekvenciájú fénnyel is elő kellene tudni idézni elektronkilépést (elegendő idő alatt "összegyűjtve" az energiát), és a kilépő elektronok energiájának az intenzitástól, nem a frekvenciától kellene függenie. Ez pontosan ellentétes a megfigyelt tényekkel — ez indokolta a fény kvantumos (foton-) természetének elfogadását.

## Gyakorlati alkalmazások

A fényelektromos jelenség alapján működnek a **fotocellák, fényérzékelők**, illetve (a jelenség belső, félvezetőkben lezajló analógja alapján) a **napelemek (fotovoltaikus cellák)**, amelyek a beérkező fotonok energiáját közvetlenül elektromos energiává alakítják.

## Példa levezetés

Egy fém kilépési munkája 2,0 eV. Egy 500 nm hullámhosszú fény beeséskor mekkora maximális mozgási energiával lépnek ki az elektronok? (h·c ≈ 1240 eV·nm)

1. E_foton = h·c/λ = 1240 / 500 = 2,48 eV
2. E_mozg,max = E_foton − W_ki = 2,48 − 2,0 = **0,48 eV**
`,
    key_concepts: [
      "fényelektromos jelenség (fotoeffektus) megfigyelt tulajdonságai",
      "küszöbfrekvencia (f₀)",
      "Einstein-féle egyenlet: hf = W_ki + E_mozg,max",
      "a foton mint discrét energiaadag",
      "napelemek és fotocellák elve",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit nem tudott megmagyarázni a klasszikus hullámelmélet a fényelektromos jelenségről?",
        options: [
          "hogy a kilépő elektronok energiája a frekvenciától, nem az intenzitástól függ, és létezik küszöbfrekvencia",
          "hogy a fény egyáltalán kölcsönhat a fémekkel",
          "hogy a fény terjedhet vákuumban",
          "hogy a fénynek van sebessége",
        ],
        correct_answer: "hogy a kilépő elektronok energiája a frekvenciától, nem az intenzitástól függ, és létezik küszöbfrekvencia",
        explanation: "A klasszikus hullámelmélet szerint az energiát az intenzitás, nem a frekvencia határozná meg, és nem lenne küszöbfrekvencia — ez ellentétes a megfigyelt tényekkel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit fejez ki az Einstein-féle egyenlet (hf = W_ki + E_mozg,max) a fotoeffektusra?",
        options: [
          "a foton energiája a kilépési munka és a kilépő elektron maximális mozgási energiájának összegére oszlik",
          "a fény frekvenciája egyenlő a kilépési munkával",
          "a kilépő elektronok energiája mindig egyenlő a foton energiájával",
          "a kilépési munka mindig nulla",
        ],
        correct_answer: "a foton energiája a kilépési munka és a kilépő elektron maximális mozgási energiájának összegére oszlik",
        explanation: "Az egyenlet az energiamegmaradást fejezi ki: a foton teljes energiája részben a fém kilépési munkájának 'fedezésére', részben az elektron mozgási energiájává alakul.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy fém kilépési munkája 3 eV. Mi történik, ha 2,5 eV energiájú fotonokkal világítjuk meg, tetszőlegesen nagy intenzitással?",
        options: [
          "egyáltalán nem lép ki elektron, mert a foton energiája kisebb, mint a kilépési munka",
          "elektronok lépnek ki, de kis mozgási energiával",
          "elektronok lépnek ki nagy mozgási energiával",
          "az intenzitás növelésével biztosan elindul az elektronkilépés",
        ],
        correct_answer: "egyáltalán nem lép ki elektron, mert a foton energiája kisebb, mint a kilépési munka",
        explanation: "Mivel a foton energiája (2,5 eV) kisebb, mint a kilépési munka (3 eV), egyetlen foton sem tud elektront kilökni, függetlenül attól, mennyi ilyen foton érkezik (az intenzitástól).",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a fényelektromos jelenség megfigyelt küszöbfrekvenciáját (f₀)?",
        options: [
          "az ez alatti frekvenciájú fény semennyi ideig tartó megvilágítás mellett sem indít elektronkilépést",
          "az ez feletti frekvenciájú fény soha nem indít elektronkilépést",
          "a küszöbfrekvencia minden fémre azonos",
          "a küszöbfrekvencia az intenzitástól függ",
        ],
        correct_answer: "az ez alatti frekvenciájú fény semennyi ideig tartó megvilágítás mellett sem indít elektronkilépést",
        explanation: "A küszöbfrekvencia (f₀ = W_ki/h) alatt, bármilyen hosszú megvilágítás vagy nagy intenzitás esetén sem lép ki elektron, mert egyetlen foton energiája sem éri el a kilépési munkát.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy fém kilépési munkája 4,5 eV. Milyen minimális frekvenciájú fény szükséges az elektronkilépéshez (h ≈ 4,14·10⁻¹⁵ eV·s)?",
        options: ["kb. 1,09·10¹⁵ Hz", "kb. 4,5·10¹⁵ Hz", "kb. 1,86·10¹⁴ Hz", "kb. 4,14·10⁻¹⁵ Hz"],
        correct_answer: "kb. 1,09·10¹⁵ Hz",
        explanation: "f₀ = W_ki/h = 4,5 / 4,14·10⁻¹⁵ ≈ 1,09·10¹⁵ Hz.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "radioaktivitas-magfizika",
    title: "Radioaktivitás és magfizika",
    level: "mindketto",
    theme: "Magfizika",
    order_index: 27,
    summary_markdown:
      "A radioaktivitás az instabil atommagok spontán bomlását jelenti, amely alfa-, béta- vagy gamma-sugárzás kibocsátásával jár; a bomlás statisztikus jellegét a felezési idő fogalma jellemzi.",
    content_markdown: `
## Az atommag felépítése

Az **atommag** protonokból (pozitív töltésű, Z rendszám adja meg a számukat) és neutronokból (töltés nélküli, N a számuk) áll, amelyeket összefoglalóan **nukleonoknak** nevezünk. A **tömegszám (A = Z + N)** a nukleonok teljes számát adja meg. Az azonos rendszámú, de eltérő tömegszámú (eltérő neutronszámú) atomokat egy elem **izotópjainak** nevezzük.

## Az erős magerő és a kötési energia

A mag protonjait az elektromos taszítás ellenére az **erős magerő** (rövid hatótávolságú, de a Coulomb-erőnél sokkal nagyobb vonzóerő) tartja össze. A mag tömege mindig **kisebb**, mint az alkotó nukleonok külön-külön mért tömegének összege — ez a **tömeghiány (Δm)**, amelyből Einstein híres összefüggése (**E = Δm · c²**) alapján kiszámítható a mag **kötési energiája**: az az energia, amely a mag szétszedéséhez (nukleonjaira bontásához) szükséges.

## A radioaktív bomlás típusai

A nem stabil (radioaktív) atommagok spontán módon, energialeadás közben más magokká alakulnak át (**bomlanak**):

- **Alfa-bomlás (α)**: a mag egy hélium atommagot (2 proton + 2 neutron) bocsát ki; a rendszám 2-vel, a tömegszám 4-gyel csökken. Az alfa-sugárzás áthatolóképessége kis (papírlap is elnyeli), de ionizáló hatása nagy.
- **Béta-bomlás (β⁻)**: egy neutron protonná alakul, közben egy elektron (béta-részecske) és egy antineutrínó keletkezik és lép ki; a rendszám 1-gyel nő, a tömegszám nem változik. A béta-sugárzás áthatolóképessége nagyobb (vékony fémlemez elnyeli).
- **Gamma-sugárzás (γ)**: a bomlás után "visszamaradó", gerjesztett állapotú mag nagy energiájú elektromágneses fotont (gamma-fotont) bocsát ki, miközben rendszáma és tömegszáma nem változik. A gamma-sugárzás áthatolóképessége a legnagyobb (csak vastag ólom- vagy betonréteg nyeli el jelentősen).

## A radioaktív bomlás törvénye és a felezési idő

A radioaktív bomlás **statisztikus (véletlenszerű) folyamat**: nem tudjuk megmondani, mikor bomlik el egy adott mag, de nagy számú mag esetén a bomlás üteme jól jellemezhető a **felezési idővel (T₁/₂)**: az az idő, amely alatt a kiindulási radioaktív magok száma (átlagosan) a felére csökken. A megmaradt magok száma az idő függvényében:

**N(t) = N₀ · (1/2)^(t / T₁/₂)**

A felezési idő az adott izotópra jellemző állandó, amelyre a külső körülmények (hőmérséklet, nyomás, kémiai kötés) nincsenek hatással.

## Alkalmazások és sugárvédelem

A radioaktivitás alkalmazásai közé tartozik az **orvosi diagnosztika és terápia** (izotópos vizsgálatok, sugárterápia), a **radiometrikus kormeghatározás** (pl. a szén-14-es módszer archeológiai leletek korának becslésére), és az **energiatermelés** (atomreaktorok). A sugárvédelem alapelvei: a sugárforrástól való **távolság** növelése, a kitett **idő** csökkentése, és megfelelő **árnyékolás (védőréteg)** alkalmazása.

## Példa levezetés

Egy izotóp felezési ideje 8 nap. Egy 80 g-os mintából mennyi marad meg 24 nap múlva?

1. 24 nap = 3 felezési idő (3·8 = 24)
2. N = N₀·(1/2)³ = 80 · 1/8 = **10 g**
`,
    key_concepts: [
      "atommag felépítése, izotópok",
      "kötési energia és a tömeghiány (E = Δmc²)",
      "alfa-, béta- és gamma-bomlás",
      "felezési idő és a bomlástörvény",
      "sugárvédelem alapelvei",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mit nevezünk egy elem izotópjainak?",
        options: [
          "azonos rendszámú, de eltérő tömegszámú (neutronszámú) atomokat",
          "azonos tömegszámú, de eltérő rendszámú atomokat",
          "csak a radioaktív atomokat",
          "csak a stabil atomokat",
        ],
        correct_answer: "azonos rendszámú, de eltérő tömegszámú (neutronszámú) atomokat",
        explanation: "Az izotópok egy elem olyan atomjai, amelyeknek azonos a rendszáma (protonszáma), de eltér a neutronszámuk (és így a tömegszámuk).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Melyik bomlástípusnál nem változik a mag rendszáma és tömegszáma?",
        options: ["gamma-sugárzás", "alfa-bomlás", "béta-bomlás", "mindháromnál változik"],
        correct_answer: "gamma-sugárzás",
        explanation: "Gamma-sugárzásnál a mag csak energiát (fotont) bocsát ki, sem a rendszám, sem a tömegszám nem változik, ellentétben az alfa- és béta-bomlással.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a felezési idő fogalma?",
        options: [
          "az az idő, amely alatt a kiindulási radioaktív magok száma átlagosan a felére csökken",
          "az az idő, amely alatt minden mag elbomlik",
          "az az idő, amíg egy adott mag biztosan elbomlik",
          "az az idő, amely alatt a mag tömege duplázódik",
        ],
        correct_answer: "az az idő, amely alatt a kiindulási radioaktív magok száma átlagosan a felére csökken",
        explanation: "A felezési idő statisztikus mennyiség: az az időtartam, amely alatt egy nagy számú radioaktív mag mennyisége átlagosan a felére csökken.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy izotóp felezési ideje 5 óra. Egy 200 g-os mintából mennyi marad meg 15 óra múlva?",
        options: ["25 g", "50 g", "12,5 g", "100 g"],
        correct_answer: "25 g",
        explanation: "15 óra = 3 felezési idő; N = 200·(1/2)³ = 200/8 = 25 g.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért kisebb a mag tömege az alkotó nukleonok külön-külön mért tömegének összegénél?",
        options: [
          "mert a kötési energia egy része a tömeghiánynak felel meg, az E = Δm·c² összefüggés szerint",
          "mert a neutronok tömege nulla",
          "mert a protonok tömege a magban lecsökken",
          "ez csak radioaktív magokra igaz",
        ],
        correct_answer: "mert a kötési energia egy része a tömeghiánynak felel meg, az E = Δm·c² összefüggés szerint",
        explanation: "A mag kialakulásakor felszabaduló kötési energia a tömeg-energia egyenértékűség (E = Δmc²) miatt tömeghiányként jelenik meg — a mag tömege kisebb, mint a szabad nukleonok tömegének összege.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "magenergia-maghasadas-magfuzio",
    title: "Magenergia — maghasadás és magfúzió",
    level: "mindketto",
    theme: "Magfizika",
    order_index: 28,
    summary_markdown:
      "A maghasadás és a magfúzió olyan magátalakulások, amelyek jelentős energia felszabadulásával járnak, és amelyek az atomerőművek, illetve a csillagok energiaforrásának fizikai alapját adják.",
    content_markdown: `
## A kötési energia görbe és az energia-felszabadulás lehetősége

Ha az egy nukleonra jutó kötési energiát a tömegszám függvényében ábrázoljuk, egy jellegzetes, közepes tömegszámoknál (kb. A ≈ 56, a vas környékén) **maximumot** mutató görbét kapunk. Ez azt jelenti, hogy:

- **Nehéz magok hasadásakor** (nagy tömegszámú magok kettéhasadva közepes tömegszámú magokká) a keletkező magok összesített kötési energiája nagyobb, mint a kiindulási magé — a különbség energia formájában felszabadul.
- **Könnyű magok fúziójakor (egyesülésekor)** is a keletkező mag kötési energiája nagyobb, mint a kiindulási könnyű magoké — itt is energia szabadul fel.

Mindkét folyamat energiamérlege az **E = Δm · c²** összefüggéssel számítható ki, a reakció előtti és utáni össztömeg különbségéből.

## Maghasadás (fisszió)

A **maghasadás** során egy nehéz atommag (jellemzően urán-235 vagy plutónium-239) egy neutron befogása után két (vagy több), közepes tömegszámú magra hasad, közben további neutronok és nagy mennyiségű energia szabadul fel:

**n + ²³⁵U → hasadási termékek + további neutronok + energia**

Ha az egy hasadásnál keletkező neutronok legalább egy része újabb hasadást indít el, **láncreakció** alakul ki. Az atomreaktorokban ezt a láncreakciót **kontrolláltan** (moderátorral lassított neutronokkal, szabályozó rudakkal fenntartott, állandó szinten tartott reakciósebességgel) tartják fenn, a felszabaduló hőt pedig turbinák meghajtására (elektromos áram termelésére) használják. Atomfegyvereknél a láncreakciót szándékosan **kontrollálatlanná** teszik.

## Magfúzió

A **magfúzió** során könnyű atommagok (jellemzően a hidrogén izotópjai, deutérium és trícium) nagy hőmérsékleten és nyomáson egyesülnek egy nehezebb maggá, energia felszabadulása közben:

**²H + ³H → ⁴He + n + energia**

A magfúzió a **csillagok (így a Nap) energiaforrása**: a Nap belsejében rendkívül magas hőmérsékleten és nyomáson hidrogénmagok egyesülnek héliummá (proton-proton ciklus), és az így felszabaduló energia sugárzódik ki, amely a Föld élővilágának is alapvető energiaforrása.

A magfúzió Földi, szabályozott, energiatermelésre alkalmas megvalósítása (pl. tokamak reaktorokban) technikailag rendkívül nehéz feladat (rendkívül magas hőmérséklet és a plazma stabil összetartása szükséges hozzá), ezért ez ma még kísérleti fázisban van, de elvi előnye, hogy nyersanyaga (hidrogénizotópok) bőségesen elérhető, és nem keletkezik hosszú felezési idejű radioaktív hulladék, mint a maghasadásnál.

## A maghasadás és a magfúzió összehasonlítása

| Szempont | Maghasadás | Magfúzió |
|---|---|---|
| Kiinduló magok | nehéz (pl. urán) | könnyű (pl. hidrogén-izotópok) |
| Feltétel | neutronbefogás | rendkívül magas hőmérséklet/nyomás |
| Jelenlegi alkalmazás | atomreaktorok (energiatermelés) | csillagok energiaforrása; Földön kísérleti fázisban |
| Radioaktív hulladék | jelentős, hosszú felezési idejű | elenyésző |

## Példa levezetés

Egy hasadási reakcióban a tömegveszteség 0,215 u (atomi tömegegység, 1 u ≈ 1,66·10⁻²⁷ kg). Mekkora energia szabadul fel (c ≈ 3·10⁸ m/s)?

1. Δm = 0,215 · 1,66·10⁻²⁷ = 3,57·10⁻²⁸ kg
2. E = Δm·c² = 3,57·10⁻²⁸ · 9·10¹⁶ ≈ **3,21·10⁻¹¹ J** (ez egyetlen magra vonatkozik; makroszkopikus mennyiségeknél ez rendkívül nagy összesített energiát jelent).
`,
    key_concepts: [
      "kötési energia görbéje és a tömegszám",
      "maghasadás (fisszió) és a láncreakció",
      "atomreaktor kontrollált láncreakciója",
      "magfúzió és a csillagok energiaforrása",
      "maghasadás és magfúzió összehasonlítása",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Miért szabadul fel energia egy nehéz atommag hasadásakor?",
        options: [
          "mert a keletkező, közepes tömegszámú magok összesített kötési energiája nagyobb, mint a kiindulási magé",
          "mert a hasadás során tömeg keletkezik a semmiből",
          "mert a neutronok energiát hoznak be a reakcióba",
          "mert a hasadás mindig hőt von el a környezetből",
        ],
        correct_answer: "mert a keletkező, közepes tömegszámú magok összesített kötési energiája nagyobb, mint a kiindulási magé",
        explanation: "A kötési energia görbéje szerint a nehéz magok hasadásakor a keletkező, közepes tömegszámú termékek nagyobb kötési energiával rendelkeznek, a különbség energia formájában szabadul fel.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi tartja fenn az atomreaktorokban a kontrollált láncreakciót?",
        options: [
          "moderátor és szabályozó rudak, amelyek a neutronok számát/energiáját szabályozzák",
          "az urán mag önmagában stabil marad, nincs szükség szabályozásra",
          "a fúziós reakció hőenergiája",
          "a reaktorban nincs is neutron",
        ],
        correct_answer: "moderátor és szabályozó rudak, amelyek a neutronok számát/energiáját szabályozzák",
        explanation: "A moderátor lassítja a neutronokat (nagyobb hasadási hatáskeresztmetszet érdekében), a szabályozó rudak pedig elnyelik a felesleges neutronokat, így a láncreakció állandó, kontrollált szinten tartható.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Milyen folyamat a Nap (és más csillagok) fő energiaforrása?",
        options: ["magfúzió (hidrogén héliummá egyesülése)", "maghasadás", "kémiai égés", "radioaktív bomlás kizárólag"],
        correct_answer: "magfúzió (hidrogén héliummá egyesülése)",
        explanation: "A Nap belsejében magas hőmérsékleten és nyomáson hidrogénmagok egyesülnek héliummá (magfúzió), és ez a folyamat szolgáltatja a csillag energiáját.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi a magfúzió egyik legfontosabb elvi előnye a maghasadáshoz képest, mint jövőbeli energiaforrás?",
        options: [
          "nyersanyaga bőségesen elérhető, és nem keletkezik hosszú felezési idejű radioaktív hulladék",
          "a magfúzió alacsonyabb hőmérsékleten megy végbe, mint a hasadás",
          "a magfúzió nem igényel semmilyen szabályozást",
          "a magfúzió már jelenleg is az elsődleges földi energiaforrás",
        ],
        correct_answer: "nyersanyaga bőségesen elérhető, és nem keletkezik hosszú felezési idejű radioaktív hulladék",
        explanation: "A magfúzió nyersanyaga (hidrogénizotópok) bőségesen elérhető, és a folyamat mellékproduktumai nem tartalmaznak jelentős mennyiségű, hosszú felezési idejű radioaktív hulladékot, ellentétben a maghasadással.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi jellemzi a kötési energia görbéjének maximumát a tömegszám függvényében?",
        options: [
          "közepes tömegszámoknál (kb. a vas környékén) van a legnagyobb egy nukleonra jutó kötési energia",
          "a legkönnyebb magoknál van a maximum",
          "a legnehezebb magoknál van a maximum",
          "a görbe monoton nő a tömegszámmal",
        ],
        correct_answer: "közepes tömegszámoknál (kb. a vas környékén) van a legnagyobb egy nukleonra jutó kötési energia",
        explanation: "A kötési energia görbéje közepes tömegszámoknál (A ≈ 56, vas környéke) mutat maximumot, ami megalapozza, hogy mind a nehéz magok hasadása, mind a könnyű magok fúziója energiafelszabadulással jár.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "csillagaszat-alapjai-univerzum-szerkezete",
    title: "Csillagászat alapjai — az univerzum szerkezete",
    level: "mindketto",
    theme: "Csillagászat",
    order_index: 29,
    summary_markdown:
      "A csillagászat a Naprendszertől a galaxisokig és a táguló univerzumig terjedő skálán vizsgálja az égitesteket és mozgásukat; ehhez a fizika számos korábban tanult törvénye (gravitáció, hullámoptika, magfizika) is szükséges.",
    content_markdown: `
## A Naprendszer felépítése

A **Naprendszer** középpontjában a **Nap** (egy közepes méretű, a hidrogén-fúzión alapuló csillag) áll, körülötte keringenek a **bolygók** (Merkúr, Venus, Föld, Mars, Jupiter, Szaturnusz, Uránusz, Neptunusz), ezek **holdjai**, valamint kisebb égitestek (kisbolygók, üstökösök, törpebolygók, mint pl. a Plútó). A bolygók mozgására Kepler törvényei és Newton gravitációs törvénye érvényes (lásd a "Newton gravitációs törvénye és a bolygómozgás" tételt).

- A **belső, kőzetbolygók** (Merkúr–Mars) kisebb méretűek, szilárd felszínűek.
- A **külső, óriásbolygók** (Jupiter–Neptunusz) nagy méretűek, elsősorban gázokból/jégből állnak.

## Csillagok és a csillagfejlődés

A **csillagok** a bennük zajló magfúzió (elsősorban hidrogén héliummá alakítása) által termelt energia miatt sugároznak. Egy csillag fejlődése tömegétől függ:

- Egy Naphoz hasonló tömegű csillag hidrogénkészletének kimerülése után **vörös óriássá** duzzad, majd külső rétegeit ledobva **fehér törpévé** zsugorodik.
- Egy sokkal nagyobb tömegű csillag életének végén **szupernóva-robbanásban** semmisül meg, amely a nehezebb elemek (vas fölötti elemek) kozmikus keletkezésének fő forrása; a maradék, a tömegtől függően **neutroncsillaggá** vagy (elég nagy tömeg esetén) **fekete lyukká** válhat.

## Galaxisok

A csillagok, csillagközi gáz és por, illetve a sötét anyag hatalmas, gravitációsan összetartott rendszereket, **galaxisokat** alkotnak. A mi galaxisunk, a **Tejútrendszer** egy spirálgalaxis, amely több száz milliárd csillagot tartalmaz; a Nap a Tejútrendszer egyik külső karjában található, tőle a galaxis középpontja kb. 27 000 fényévre van.

## A táguló univerzum és a vöröseltolódás

**Edwin Hubble** megfigyelése szerint a távoli galaxisok fényének spektrumában a jellegzetes vonalak a vörös (nagyobb hullámhosszú) tartomány felé eltolódnak (**vöröseltolódás**), és ez az eltolódás annál nagyobb, minél távolabbi a galaxis — ez a jelenség a fényforrásra vonatkozó Doppler-effektus analógja, és azt jelzi, hogy **a galaxisok távolodnak tőlünk**, minél távolabbiak, annál gyorsabban (**Hubble-törvény**: v = H₀ · d). Ez az egyik legfontosabb bizonyíték az univerzum **tágulására**, amelynek kezdőpontja az **ősrobbanás (Big Bang)**, kb. 13,8 milliárd évvel ezelőtt.

## A fényév mint távolságegység

A csillagászati távolságok mérésére a kilométer túl kicsi egység, ezért a **fényévet (ly)** használjuk: az a távolság, amelyet a fény egy év alatt tesz meg vákuumban: **1 fényév ≈ 9,46 · 10¹⁵ m**. Mivel a fény véges sebességgel terjed, amikor egy távoli csillagot vagy galaxist megfigyelünk, valójában a **múltját** látjuk — minél távolabbi az objektum, annál régebbi állapotát figyeljük meg.

## Példa levezetés

A Proxima Centauri (a Naphoz legközelebbi csillag) kb. 4,24 fényévre van. Hány évvel korábbi állapotát látjuk, amikor ránézünk?

Mivel a fénynek 4,24 évre van szüksége, hogy hozzánk érjen, a csillag **4,24 évvel korábbi állapotát** látjuk minden pillanatban.
`,
    key_concepts: [
      "Naprendszer felépítése, bolygótípusok",
      "csillagfejlődés: vörös óriás, fehér törpe, szupernóva, neutroncsillag, fekete lyuk",
      "galaxisok és a Tejútrendszer",
      "vöröseltolódás és a táguló univerzum (Hubble-törvény)",
      "fényév mint távolságegység",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Mi hajtja a csillagok (pl. a Nap) energiakibocsátását?",
        options: ["a belsejükben zajló magfúzió", "kémiai égés", "gravitációs összeomlás egyedül", "radioaktív bomlás kizárólag"],
        correct_answer: "a belsejükben zajló magfúzió",
        explanation: "A csillagok energiáját a belsejükben (nagy hőmérsékleten és nyomáson) zajló magfúzió (elsősorban hidrogén héliummá alakítása) biztosítja.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mit jelent a távoli galaxisok fényének vöröseltolódása?",
        options: [
          "a galaxisok távolodnak tőlünk, és minél távolabbiak, annál gyorsabban",
          "a galaxisok közelednek felénk",
          "a galaxisok mind állnak, nincs relatív mozgás",
          "a vöröseltolódás csak a mi galaxisunkban figyelhető meg",
        ],
        correct_answer: "a galaxisok távolodnak tőlünk, és minél távolabbiak, annál gyorsabban",
        explanation: "A vöröseltolódás a fényforrásra alkalmazott Doppler-effektus analógja: azt jelzi, hogy a galaxisok távolodnak tőlünk, és a Hubble-törvény szerint minél távolabbiak, annál gyorsabban.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért használunk fényévet a csillagászati távolságok kifejezésére, nem kilométert?",
        options: [
          "mert a csillagászati távolságok km-ben kifejezve kezelhetetlenül nagy számokat adnának",
          "mert a fényév kisebb egység, mint a kilométer",
          "mert a fényév egy időmértékegység, nem távolság",
          "mert a kilométer nem SI-mértékegység",
        ],
        correct_answer: "mert a csillagászati távolságok km-ben kifejezve kezelhetetlenül nagy számokat adnának",
        explanation: "A csillagászati távolságok km-ben rendkívül nagy, nehezen kezelhető számokat adnának; a fényév (a fény egy év alatt megtett útja) gyakorlatiasabb egység ezekre a skálákra.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Mi lesz egy, a Napunkhoz hasonló tömegű csillag élete végén, hidrogénkészlete kimerülése után?",
        options: [
          "vörös óriássá duzzad, majd fehér törpévé zsugorodik",
          "azonnal fekete lyukká válik",
          "szupernóvaként felrobban, majd neutroncsillaggá válik",
          "állandó marad, nem változik többé",
        ],
        correct_answer: "vörös óriássá duzzad, majd fehér törpévé zsugorodik",
        explanation: "Egy Naphoz hasonló tömegű csillag életének végén vörös óriássá duzzad, majd külső rétegeit ledobva fehér törpévé zsugorodik — a szupernóva-robbanás és a neutroncsillag/fekete lyuk sokkal nagyobb tömegű csillagok sorsa.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért látjuk egy távoli galaxis 'múltját', amikor megfigyeljük?",
        options: [
          "mert a fény véges sebességgel terjed, így az onnan hozzánk érkező fény a kibocsátás pillanatában indult, ami a múltban volt",
          "mert a galaxisok mozdulatlanok, és mindig a jelenlegi állapotukat látjuk",
          "mert a teleszkópok csak régi képeket tudnak megjeleníteni",
          "ez csak optikai illúzió, valójában a jelen állapotukat látjuk",
        ],
        correct_answer: "mert a fény véges sebességgel terjed, így az onnan hozzánk érkező fény a kibocsátás pillanatában indult, ami a múltban volt",
        explanation: "A fény véges sebessége miatt egy távoli objektumtól hozzánk érkező fény hosszú út alatt jutott el hozzánk, ezért az objektum állapotát olyannak látjuk, amilyen a fény kibocsátásának pillanatában (a múltban) volt.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "energia-es-kornyezet-megujulo-energiaforrasok",
    title: "Energia és környezet — megújuló energiaforrások",
    level: "mindketto",
    theme: "Energetika és környezet",
    order_index: 30,
    summary_markdown:
      "A modern társadalom energiaigénye és a fosszilis energiaforrások környezeti hatásai szükségessé teszik a megújuló energiaforrások és az energiahatékonyság fizikai alapjainak megértését.",
    content_markdown: `
## Energiaforrások csoportosítása

Az energiaforrásokat alapvetően két csoportba osztjuk:

- **Nem megújuló (fosszilis és nukleáris) energiaforrások**: szén, kőolaj, földgáz, valamint az urán (maghasadás) — ezek készlete véges, emberi léptékben nem, vagy csak nagyon lassan pótlódik.
- **Megújuló energiaforrások**: napenergia, szélenergia, vízenergia, geotermikus energia, biomassza — ezek forrása emberi léptékben folyamatosan (gyakorlatilag korlátlanul) rendelkezésre áll.

## Napenergia

A napenergia hasznosítható **hőenergiaként** (napkollektorok, amelyek a beérkező sugárzást hővé alakítják, jellemzően vízmelegítésre) vagy közvetlenül **elektromos energiaként** (napelemek/fotovoltaikus cellák, amelyek a fényelektromos jelenség félvezetőkben lezajló analógja alapján alakítják a fotonok energiáját elektromos energiává). A Föld felszínére érkező napsugárzás teljesítménysűrűsége derült időben, a felszínre merőlegesen kb. **1000 W/m²** nagyságrendű.

## Szélenergia és vízenergia

A **szélenergiát** szélturbinák hasznosítják: a mozgó levegő mozgási energiáját a lapátok mechanikai (forgó) energiává, majd generátorral elektromos energiává alakítják. A kinyerhető teljesítmény a szélsebesség **harmadik hatványával** arányos (P ~ v³), ezért a szélsebesség viszonylag kis változása is nagy hatással van a kinyerhető energiára.

A **vízenergiát** (vízerőművekben) a folyó víz mozgási energiája (folyami erőművek), illetve a víz helyzeti (gravitációs) energiája (duzzasztott tavak, tározós erőművek) hasznosítja: P = ρ·g·Q·h, ahol Q a térfogatáram, h az esésmagasság.

## Geotermikus energia és biomassza

A **geotermikus energia** a Föld belsejéből (radioaktív bomlásból és a bolygó kialakulásából eredő) hőt hasznosítja, jellemzően fűtésre vagy — nagyobb mélységekben, magasabb hőmérsékleten — elektromos energia termelésére. A **biomassza** (növényi és állati eredetű anyagok) elégetésével vagy biogáz formájában nyert energia a fotoszintézis során a napenergiából tárolt kémiai energiát hasznosítja.

## Hatásfok és energiahatékonyság

Minden energiaátalakítás valamekkora **veszteséggel** jár (a termodinamika II. főtétele szerint nem létezik 100%-os hatásfokú átalakítás), ezért az energiaellátás fenntarthatóságának egyik kulcskérdése az **energiahatékonyság** növelése: a felhasznált energia lehető legnagyobb hányadának hasznos formává alakítása, illetve a szükségtelen veszteségek (pl. hőveszteség, elektromos vezetékveszteség) minimalizálása.

## Környezeti hatások

A fosszilis energiaforrások elégetése **szén-dioxidot és más üvegházhatású gázokat** juttat a légkörbe, amelyek hozzájárulnak a **globális felmelegedéshez** (az üvegházhatás felerősödéséhez): ezek a gázok átlátszóak a Nap rövidhullámú sugárzására, de elnyelik a Föld felszínéről kisugárzott hosszúhullámú (infravörös) sugárzást, ezáltal a légkörben tartva annak energiáját. A megújuló energiaforrások — bár telepítésük és előállításuk során is van bizonyos környezeti hatás — működésük során jellemzően nem (vagy csak minimális mértékben) bocsátanak ki üvegházhatású gázokat.

## Példa levezetés

Egy vízerőmű 20 m³/s térfogatáramú vizet enged át 15 m esésmagasságon. Mekkora az elméletileg kinyerhető teljesítmény (ρ_víz = 1000 kg/m³, g = 10 m/s²)?

1. P = ρ·g·Q·h = 1000 · 10 · 20 · 15 = **3 000 000 W = 3 MW** (a valóságban ennél kisebb, a turbina és a generátor hatásfoka miatt).
`,
    key_concepts: [
      "megújuló és nem megújuló energiaforrások",
      "napenergia (napkollektor, napelem)",
      "szélenergia: P ~ v³",
      "vízenergia: P = ρgQh",
      "az üvegházhatás és a globális felmelegedés fizikai alapja",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Melyik energiaforrás tartozik a megújuló energiaforrások közé?",
        options: ["szélenergia", "kőolaj", "földgáz", "urán (maghasadás)"],
        correct_answer: "szélenergia",
        explanation: "A szélenergia forrása (a szél, illetve a mögötte álló napenergia) emberi léptékben folyamatosan rendelkezésre áll, ezért megújuló energiaforrásnak számít, ellentétben a fosszilis és nukleáris forrásokkal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Egy szélturbina előtt a szélsebesség kétszeresére nő. Kb. hányszorosára nő a kinyerhető teljesítmény?",
        options: ["nyolcszorosára", "kétszeresére", "négyszeresére", "nem változik"],
        correct_answer: "nyolcszorosára",
        explanation: "A kinyerhető teljesítmény a szélsebesség harmadik hatványával (P ~ v³) arányos, ezért a sebesség duplázásakor a teljesítmény 2³ = 8-szorosára nő.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Hogyan alakítja a napelem (fotovoltaikus cella) a napsugárzás energiáját?",
        options: [
          "közvetlenül elektromos energiává, a fényelektromos jelenség félvezetőbeli analógja alapján",
          "közvetlenül mozgási energiává",
          "csak hőenergiává, mint a napkollektor",
          "kémiai energiává, mint a biomassza",
        ],
        correct_answer: "közvetlenül elektromos energiává, a fényelektromos jelenség félvezetőbeli analógja alapján",
        explanation: "A napelem a beérkező fotonok energiáját a fényelektromos jelenséghez hasonló, félvezetőkben lezajló folyamat révén közvetlenül elektromos energiává alakítja, ellentétben a napkollektorral, amely hőt hasznosít.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Fizikailag miért járulnak hozzá az üvegházhatású gázok a globális felmelegedéshez?",
        options: [
          "átlátszóak a Nap rövidhullámú sugárzására, de elnyelik a Föld hosszúhullámú (infravörös) kisugárzását",
          "elnyelik a Nap összes sugárzását, mielőtt az elérné a Földet",
          "megnövelik a Föld saját hősugárzásának mennyiségét",
          "csökkentik a légkör átlátszóságát a látható fényre",
        ],
        correct_answer: "átlátszóak a Nap rövidhullámú sugárzására, de elnyelik a Föld hosszúhullámú (infravörös) kisugárzását",
        explanation: "Az üvegházhatású gázok szelektíven nyelik el a sugárzást: átengedik a Nap rövidhullámú fényét, de elnyelik a felszínről kisugárzott, hosszabb hullámhosszú infravörös sugárzást, ezáltal energiát tartva a légkörben.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Miért nem érhető el 100%-os hatásfokú energiaátalakítás semmilyen technológiával?",
        options: [
          "a termodinamika II. főtétele szerint minden energiaátalakítással szükségszerűen veszteség jár",
          "csak a megújuló energiaforrásoknál van veszteség",
          "ez csak technológiai fejletlenség kérdése, elvi korlát nincs",
          "a veszteség csak a fosszilis energiaforrásoknál lép fel",
        ],
        correct_answer: "a termodinamika II. főtétele szerint minden energiaátalakítással szükségszerűen veszteség jár",
        explanation: "A termodinamika II. főtétele elvi korlátot szab: semmilyen energiaátalakító folyamat nem lehet 100%-os hatásfokú, mindig keletkezik hasznosítható formában nem visszanyerhető (jellemzően hő formájú) veszteség.",
        difficulty: 3,
      },
    ],
  },
];
