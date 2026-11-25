-- 캐릭터 투두리스트 DB 구조
-- 표 구조를 바꾸면 이 파일도 같이 수정해서 PR로 올리기

create table tasks (
  id bigint generated always as identity primary key,
  title text not null,
  due_at timestamptz,
  importance int default 2,
  is_done boolean default false,
  postpone_count int default 0,
  created_at timestamptz default now()
);

create table characters (
  id bigint generated always as identity primary key,
  name text not null,
  affection int default 0,
  created_at timestamptz default now()
);

-- [임시 권한] 개발 중에만 쓰는 설정. 로그인 기능을 붙이면 "내 것만" 규칙으로 교체할 것
grant select, insert, update on public.tasks to anon;

create policy "임시 읽기 허용" on public.tasks
for select to anon using (true);

create policy "임시 추가 허용" on public.tasks
for insert to anon with check (true);

create policy "임시 수정 허용" on public.tasks
for update to anon using (true) with check (true);