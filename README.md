# 캐릭터 투두리스트 앱 (todo-app)

할 일을 미루는 사람을 위한 가상 캐릭터형 투두리스트 앱입니다.
할 일을 완료하면 캐릭터 친밀도가 오르고, 미루면 캐릭터가 독려합니다.
일정이 밀리면 재조정하고, 반복해서 미루는 일은 작게 쪼개줍니다.

## 기술 스택
- 웹앱: Next.js (App Router) + TypeScript + Tailwind CSS (`web/` 폴더)
- DB·로그인: Supabase (PostgreSQL)
- 배포: Vercel (예정)

## 폴더 구조
```
todo-app/
├─ web/            # Next.js 웹앱
├─ db/schema.sql   # DB 표 구조
└─ README.md
```

## 처음 세팅하기
1. Node.js LTS 설치 (nodejs.org)
2. 저장소 clone 후 VS Code로 열기 (OneDrive 폴더 안에는 두지 않기)
3. `cd web` → `npm install`
4. `web/.env.example`을 복사해서 `web/.env.local`을 만들고 값 채우기
   (값은 팀 비공개 채팅방에서 받기)
5. `npm run dev` → http://localhost:3000

윈도우에서 `npm` 실행이 막히면 PowerShell에서 한 번만 실행:
`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

## 협업 규칙
- `main`에 직접 push하지 않고 항상 Pull Request로 합치기
- 브랜치 이름: `feature/기능이름` (예: `feature/login`)
- 작업 시작 전에 `git pull` 먼저
- 커밋 메시지는 한글로 무엇을 했는지 한 줄로
- 할 일은 GitHub Issues에 등록하고 Projects 보드로 관리

## 보안 규칙
- `.env.local`은 절대 GitHub에 올리지 않기
- Supabase의 `secret` / `service_role` 키는 사용하지 않기 (publishable 키만 사용)
- DB 표 구조를 바꾸면 `db/schema.sql`도 수정해서 팀에 알리기

## AI 사용 규칙
- AI에게 시킬 때 이 README와 `db/schema.sql`을 같이 붙여주기
- AI가 준 코드는 직접 실행해보고 PR 올리기
- 에러가 나면 메시지 전체를 복사해서 AI나 팀에 공유하기

## 역할
| 이름 | 역할 |
|---|---|
| [김유나] | PM, 화면 틀 |
| [미정] | DB·데이터 |
| [미정] | 로그인·보안 |
| [미정] | 디자인·캐릭터·테스트 |