-- Erettsegi tanulo app - alap sema
-- Kulon 'erettsegi' sema alatt, hogy egy mar meglevo (pl. tovabbtanulas-2027)
-- Supabase projektben is biztonsagosan elferjen, nevutkozes nelkul a masik
-- app tablaival.
-- Egyfelhasznalos rendszer: nincs auth.users kapcsolat, a hozzaferest az app
-- reteg (PIN + cookie) vedi, a DB-t csak a szerver eri el a service role key-vel.

create schema if not exists erettsegi;

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- subjects: magyar rendszerbeli tantargyak (szinttel) + SAT/ACT modulok (szint nelkul)
-- ---------------------------------------------------------------------------
create table erettsegi.subjects (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,              -- 'magyar', 'matek', 'tortenelem', 'angol', 'informatika', 'sat', 'act'
  name text not null,                    -- megjeleniteshez
  category text not null default 'erettsegi', -- 'erettsegi' | 'felveteli'
  has_level boolean not null default true,     -- SAT/ACT-nel false
  color text not null default '#6366f1',
  icon text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- exams: konkret vizsga-bejegyzesek (erettsegi / elorehozott / SAT / ACT)
-- tobb is tartozhat egy subject-hez (pl. elorehozott + rendes erettsegi)
-- ---------------------------------------------------------------------------
create table erettsegi.exams (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references erettsegi.subjects(id) on delete cascade,
  exam_type text not null check (exam_type in ('erettsegi', 'elorehozott_erettsegi', 'sat', 'act')),
  level text check (level in ('kozep', 'emelt')),  -- null ha a subject.has_level = false
  written_date date,
  oral_date date,
  status text not null default 'tervezett' check (status in ('tervezett', 'lezajlott', 'torolve')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index exams_subject_idx on erettsegi.exams(subject_id);

-- ---------------------------------------------------------------------------
-- topics: tetelek / gyakorlo modulok temaki bontasban
-- ---------------------------------------------------------------------------
create table erettsegi.topics (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references erettsegi.subjects(id) on delete cascade,
  slug text not null,
  title text not null,
  level text check (level in ('kozep', 'emelt', 'mindketto')) default 'mindketto',
  theme text,                    -- tematikus csoportositas (pl. "Reformkor", "Szoveges feladatok")
  order_index int not null default 0,
  summary_markdown text,         -- rovid osszefoglalo
  content_markdown text,         -- teljes kidolgozott tetel
  key_concepts jsonb not null default '[]'::jsonb,   -- ["fogalom1", "fogalom2", ...]
  source_refs jsonb not null default '[]'::jsonb,    -- [{"label": "...", "url": "..."}]
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (subject_id, slug)
);

create index topics_subject_idx on erettsegi.topics(subject_id);

-- ---------------------------------------------------------------------------
-- quiz_questions: kvizkerdesek egy tetelhez / gyakorlo modulhoz kotve
-- ---------------------------------------------------------------------------
create table erettsegi.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references erettsegi.topics(id) on delete cascade,
  question_type text not null default 'multiple_choice' check (question_type in ('multiple_choice', 'short_answer', 'true_false')),
  question_text text not null,
  options jsonb not null default '[]'::jsonb,  -- ["valasz1", "valasz2", ...] multiple_choice-hoz
  correct_answer text not null,                -- index stringkent vagy a rovid valasz szovege
  explanation text,
  difficulty int not null default 1 check (difficulty between 1 and 3),
  order_index int not null default 0,
  created_at timestamptz not null default now()
);

create index quiz_questions_topic_idx on erettsegi.quiz_questions(topic_id);

-- ---------------------------------------------------------------------------
-- topic_progress: tetelenkenti allapot (csillagok, ismetles idozitese)
-- ---------------------------------------------------------------------------
create table erettsegi.topic_progress (
  topic_id uuid primary key references erettsegi.topics(id) on delete cascade,
  status text not null default 'nem_kezdett' check (status in ('nem_kezdett', 'folyamatban', 'elsajatitott')),
  stars int not null default 0 check (stars between 0 and 3),
  best_accuracy numeric(5,2) not null default 0,
  last_reviewed_at timestamptz,
  next_review_at timestamptz,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- quiz_attempts: minden egyes kvizkerdes-valaszolas naploja
-- ---------------------------------------------------------------------------
create table erettsegi.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references erettsegi.quiz_questions(id) on delete cascade,
  topic_id uuid not null references erettsegi.topics(id) on delete cascade,
  is_correct boolean not null,
  xp_earned int not null default 0,
  answered_at timestamptz not null default now()
);

create index quiz_attempts_topic_idx on erettsegi.quiz_attempts(topic_id);
create index quiz_attempts_answered_at_idx on erettsegi.quiz_attempts(answered_at);

-- ---------------------------------------------------------------------------
-- user_progress: egyetlen sor, globalis XP / streak allapot
-- ---------------------------------------------------------------------------
create table erettsegi.user_progress (
  id int primary key default 1 check (id = 1),
  total_xp int not null default 0,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  last_activity_date date,
  updated_at timestamptz not null default now()
);

insert into erettsegi.user_progress (id) values (1);

-- ---------------------------------------------------------------------------
-- seed: subjects
-- ---------------------------------------------------------------------------
insert into erettsegi.subjects (key, name, category, has_level, color, icon, sort_order) values
  ('angol', 'Angol', 'erettsegi', true, '#2563eb', 'languages', 1),
  ('sat', 'SAT', 'felveteli', false, '#7c3aed', 'graduation-cap', 2),
  ('act', 'ACT', 'felveteli', false, '#9333ea', 'graduation-cap', 3),
  ('magyar', 'Magyar', 'erettsegi', true, '#dc2626', 'book-open', 4),
  ('matek', 'Matematika', 'erettsegi', true, '#059669', 'calculator', 5),
  ('tortenelem', 'Történelem', 'erettsegi', true, '#b45309', 'landmark', 6),
  ('informatika', 'Informatika', 'erettsegi', true, '#0891b2', 'cpu', 7);

-- ---------------------------------------------------------------------------
-- jogosultsagok: a service_role szamara (a PostgREST/Supabase API ezt hasznalja
-- a szerver oldali hivasoknal), hogy az uj semat es tablait elerje
-- ---------------------------------------------------------------------------
grant usage on schema erettsegi to service_role;
grant all on all tables in schema erettsegi to service_role;
grant all on all sequences in schema erettsegi to service_role;
alter default privileges in schema erettsegi grant all on tables to service_role;
alter default privileges in schema erettsegi grant all on sequences to service_role;
