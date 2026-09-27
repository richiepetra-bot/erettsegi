-- Tobbfelhasznalos atallas: sajat fiokok (email+jelszo), szulo/tanar parositas
-- meghivo linkekkel, es a halad si adatok felhasznalonkenti szetvalasztasa.
--
-- FONTOS: a felhasznalo donte se alapjan ez FRISS STARTTAL jar - a korabbi,
-- egyfelhasznalos (PIN-alapu) rendszer alatt osszegyult halad si adatok
-- (kviz-valaszok, tetel-allapotok, vizsgalista) itt torlodnek, mert semmilyen
-- meglevo sorhoz nem lehetne biztonsagosan hozzarendelni egy uj felhasznalot.

-- ---------------------------------------------------------------------------
-- app_users: minden szerepkor (student, parent, tanar) egy tablaban
-- ---------------------------------------------------------------------------
create table erettsegi.app_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  password_hash text not null,
  display_name text not null,
  role text not null check (role in ('student', 'parent', 'tanar')),
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- invites: diak altal generalt, megoszthato meghivo token szulonek/tanarnak
-- ---------------------------------------------------------------------------
create table erettsegi.invites (
  id uuid primary key default gen_random_uuid(),
  token text not null unique,
  student_user_id uuid not null references erettsegi.app_users(id) on delete cascade,
  role text not null check (role in ('parent', 'tanar')),
  created_at timestamptz not null default now(),
  used_at timestamptz,
  used_by_user_id uuid references erettsegi.app_users(id)
);

create index invites_student_idx on erettsegi.invites(student_user_id);

-- ---------------------------------------------------------------------------
-- student_links: elfogadott parositas diak <-> szulo/tanar
-- ---------------------------------------------------------------------------
create table erettsegi.student_links (
  id uuid primary key default gen_random_uuid(),
  student_user_id uuid not null references erettsegi.app_users(id) on delete cascade,
  linked_user_id uuid not null references erettsegi.app_users(id) on delete cascade,
  role text not null check (role in ('parent', 'tanar')),
  created_at timestamptz not null default now(),
  unique (student_user_id, linked_user_id)
);

create index student_links_student_idx on erettsegi.student_links(student_user_id);
create index student_links_linked_idx on erettsegi.student_links(linked_user_id);

-- ---------------------------------------------------------------------------
-- study_plan_checks: a tanulasi terv heti tetelinek kezi kipipalasa
-- ---------------------------------------------------------------------------
create table erettsegi.study_plan_checks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references erettsegi.app_users(id) on delete cascade,
  topic_id uuid not null references erettsegi.topics(id) on delete cascade,
  checked_at timestamptz not null default now(),
  unique (user_id, topic_id)
);

create index study_plan_checks_user_idx on erettsegi.study_plan_checks(user_id);

-- ---------------------------------------------------------------------------
-- a korabbi egyfelhasznalos halad si adatok torlese (friss start, jovahagyva)
-- ---------------------------------------------------------------------------
truncate table erettsegi.quiz_attempts;
truncate table erettsegi.topic_progress;
truncate table erettsegi.exams;
delete from erettsegi.user_progress;

-- ---------------------------------------------------------------------------
-- user_progress: fix id=1 helyett felhasznalonkenti sor
-- ---------------------------------------------------------------------------
alter table erettsegi.user_progress drop constraint user_progress_pkey;
alter table erettsegi.user_progress drop column id;
alter table erettsegi.user_progress
  add column user_id uuid not null references erettsegi.app_users(id) on delete cascade;
alter table erettsegi.user_progress add primary key (user_id);

-- ---------------------------------------------------------------------------
-- topic_progress: topic_id -> (user_id, topic_id) kompozit kulcs
-- ---------------------------------------------------------------------------
alter table erettsegi.topic_progress drop constraint topic_progress_pkey;
alter table erettsegi.topic_progress
  add column user_id uuid not null references erettsegi.app_users(id) on delete cascade;
alter table erettsegi.topic_progress add primary key (user_id, topic_id);

-- ---------------------------------------------------------------------------
-- quiz_attempts: user_id hozzaadasa
-- ---------------------------------------------------------------------------
alter table erettsegi.quiz_attempts
  add column user_id uuid not null references erettsegi.app_users(id) on delete cascade;
create index quiz_attempts_user_idx on erettsegi.quiz_attempts(user_id);

-- ---------------------------------------------------------------------------
-- exams: user_id hozzaadasa (minden diak sajat vizsgalistaja)
-- ---------------------------------------------------------------------------
alter table erettsegi.exams
  add column user_id uuid not null references erettsegi.app_users(id) on delete cascade;
create index exams_user_idx on erettsegi.exams(user_id);

-- ---------------------------------------------------------------------------
-- jogosultsagok es RLS az uj tablakra (ugyanaz a minta, mint 0001-ben:
-- service_role mindent lat, deny-all mindenki masnak vedelmi halokent)
-- ---------------------------------------------------------------------------
grant all on all tables in schema erettsegi to service_role;
grant all on all sequences in schema erettsegi to service_role;

alter table erettsegi.app_users enable row level security;
alter table erettsegi.invites enable row level security;
alter table erettsegi.student_links enable row level security;
alter table erettsegi.study_plan_checks enable row level security;
