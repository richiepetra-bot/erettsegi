-- Valaszthato (5.) erettsegi tantargy: eddig a Gazdasagi ismeretek volt az
-- egyetlen, mindenki szamara globalisan latszo "5. tantargy". Most tobb
-- valaszthato tantargy koze all, es a diak sajat maga valasztja ki, melyiket
-- tanulja - ez felhasznalonkenti allapot, nem globalis.

-- ---------------------------------------------------------------------------
-- subjects: megjeloljuk, melyik tantargy valaszthato (elective), szemben a
-- 4 kotelezo erettsegi tantargyal (magyar, matek, tortenelem, angol) es a
-- felveteli kategorias SAT/ACT-tel (azok nem electivek, mindig latszanak)
-- ---------------------------------------------------------------------------
alter table erettsegi.subjects add column is_elective boolean not null default false;

update erettsegi.subjects set is_elective = true where key = 'gazdasagi-ismeretek';

insert into erettsegi.subjects (key, name, category, has_level, color, icon, sort_order, is_elective)
values
  ('informatika', 'Informatika', 'erettsegi', true, '#4f46e5', 'cpu', 8, true),
  ('biologia', 'Biológia', 'erettsegi', true, '#16a34a', 'leaf', 9, true),
  ('kemia', 'Kémia', 'erettsegi', true, '#db2777', 'flask-conical', 10, true),
  ('fizika', 'Fizika', 'erettsegi', true, '#ea580c', 'atom', 11, true),
  ('foldrajz', 'Földrajz', 'erettsegi', true, '#0d9488', 'globe', 12, true);

-- ---------------------------------------------------------------------------
-- app_users: a diak sajat maga valasztott 5. tantargya (nullable - meg nem
-- valasztott allapotot jelent, ekkor a felulet valasztasra keri a diakot)
-- ---------------------------------------------------------------------------
alter table erettsegi.app_users
  add column elective_subject_id uuid references erettsegi.subjects(id);

create index app_users_elective_idx on erettsegi.app_users(elective_subject_id);
