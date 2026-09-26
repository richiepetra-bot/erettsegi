# Érettségi Felkészítő

Tanulást segítő webapp érettségi tételekhez (magyar, matek, történelem, angol,
informatika), az angol előrehozott érettségihez, és a SAT/ACT felvételi
tesztekhez. Duolingo-szerű gamifikációval (XP, napi sorozat, csillagok).

## 1. Supabase projekt létrehozása

1. Regisztrálj / jelentkezz be a [supabase.com](https://supabase.com) oldalon
   (van ingyenes tier, bőven elég egy felhasználóhoz).
2. Hozz létre egy új projektet (pl. `erettsegi`).
3. A projekten belül nyisd meg a **SQL Editor**-t, illeszd be a
   `supabase/migrations/0001_init.sql` fájl teljes tartalmát, és futtasd le.
   Ez létrehozza az összes táblát és feltölti a 7 alap tantárgyat.
4. A **Project Settings → API** oldalon másold ki:
   - `Project URL` → ez lesz a `SUPABASE_URL`
   - `service_role` kulcs (⚠️ ne a `anon` kulcsot használd, és ezt soha ne
     tedd ki nyilvánosan / kliens oldali kódba) → ez lesz a
     `SUPABASE_SERVICE_ROLE_KEY`

## 2. Környezeti változók

Hozz létre egy `.env.local` fájlt a projekt gyökerében:

```
SUPABASE_URL=https://xxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
APP_PIN=1234
AUTH_SECRET=egy-hosszu-veletlen-string
```

- `APP_PIN`: ezt a PIN-kódot kell majd megadni belépéskor. Bármilyen számsor
  lehet, ezt a fiad fogja használni.
- `AUTH_SECRET`: egy hosszú, véletlenszerű karakterlánc (pl.
  `openssl rand -hex 32` paranccsal generálható), ez írja alá a bejelentkezési
  cookie-t. Ne oszd meg senkivel.

## 3. Telepítés és indítás helyben

```bash
npm install
npm run dev
```

Ezután `http://localhost:3000` — az `APP_PIN`-nel léphetsz be.

## 4. Tartalom feltöltése (seed)

Az angol tételek (5 szóbeli témakör) és a SAT/ACT gyakorló modulok
(SAT Reading/Writing/Math, ACT English/Science) mintatartalommal és
kvízkérdésekkel fel vannak véve kódban, de a Supabase adatbázisba külön be
kell tölteni:

```bash
npm run seed
```

Ez a script a `.env.local`-ban megadott Supabase projektbe tölti fel a
tételeket és kvízkérdéseket. Bármikor újra futtatható (a meglévő tételeket
frissíti, nem duplikálja).

**Új tantárgy tartalom hozzáadásához** (pl. magyar, matek, történelem,
informatika): hozz létre egy új fájlt a `scripts/seed/data/` mappában, ugyanazt
a `TopicSeed[]` formátumot követve, majd vedd fel a `scripts/seed/run.ts`
`SEED_SETS` tömbjébe.

## 5. Vizsgák és dátumok beállítása

Bejelentkezés után a **Vizsgák** menüpont alatt tudsz felvenni és szerkeszteni
vizsgákat: tantárgy, típus (érettségi / előrehozott érettségi / SAT / ACT),
szint (közép/emelt), írásbeli/szóbeli dátum. Ez bármikor módosítható, ahogy
pontosodnak a hivatalos időpontok.

## 6. Deploy Vercelre

1. Told fel a repót GitHub-ra (ha még nincs).
2. A [vercel.com](https://vercel.com) oldalon importáld a repót.
3. A Vercel projekt **Settings → Environment Variables** alatt add meg
   ugyanazt a 4 változót, mint a `.env.local`-ban (`SUPABASE_URL`,
   `SUPABASE_SERVICE_ROLE_KEY`, `APP_PIN`, `AUTH_SECRET`).
4. Deploy — ezután minden `git push` automatikusan frissíti az éles appot.

## Architektúra dióhéjban

- **Next.js (App Router) + Tailwind CSS** — frontend és szerver logika egyben.
- **Supabase (Postgres)** — adattárolás (tantárgyak, vizsgák, tételek,
  kvízkérdések, haladás/XP/streak). A böngésző sosem éri el közvetlenül a
  service role kulccsal — minden adatbázis-hívás a Next.js szerveren fut.
- **Egyszerű PIN-alapú belépés** — mivel ez egyfelhasználós app, nincs
  regisztráció/több fiók, csak egy jelszóval védett belépés (aláírt,
  httpOnly cookie, 30 napig érvényes).
- **Gamifikáció** — helyes válaszonként XP jár, tétel-kvíz teljesítése után
  csillagok (pontosság alapján), napi tanulás esetén nő a "sorozat"
  (streak), megszakadás esetén nullázódik.

## Jelenlegi tartalmi lefedettség

- ✅ Angol: 5 szóbeli témakör (személyes élet/család, iskola, szabadidő,
  utazás, egészség/életmód) — kidolgozott anyaggal és kvízekkel.
- ✅ SAT: Reading (Command of Evidence), Writing (Standard English
  Conventions), Math (Heart of Algebra).
- ✅ ACT: English (Grammar and Usage), Science (Data Representation).
- ⏳ Magyar, matek, történelem, informatika — még nincs feltöltve tartalom,
  ezek a következő körben készülnek el, a fenti `TopicSeed` formátum szerint.
