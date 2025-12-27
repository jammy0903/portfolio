# 김소정 포트폴리오

개인 포트폴리오 웹사이트입니다.

🔗 **Live Demo**: [Vercel에서 확인](https://portfolio-jammy0903.vercel.app)

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | React 19, TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM 7 |
| Deployment | Vercel |

## 프로젝트 구조

```
src/
├── components/     # 공통 컴포넌트 (Navbar 등)
├── data/           # 프로필, 경력, 프로젝트 데이터
├── pages/          # 페이지 컴포넌트
│   ├── Home.tsx       # 메인 페이지
│   ├── About.tsx      # 소개 (기술 스택)
│   ├── Experience.tsx # 경력 사항
│   ├── Projects.tsx   # 프로젝트 목록
│   └── Contact.tsx    # 연락처
└── App.tsx         # 라우팅 설정
```

## 로컬 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

## 주요 기능

- **반응형 디자인**: 모바일/데스크톱 최적화
- **다크 테마**: 어두운 배경의 모던한 UI
- **SPA 라우팅**: React Router를 활용한 페이지 전환
- **타입 안정성**: TypeScript로 타입 체크

## 데이터 수정

`src/data/profile.ts` 파일에서 프로필 정보를 수정할 수 있습니다:

```typescript
export const profile = {
  name: "이름",
  title: "직함",
  email: "이메일",
  // ...
};

export const skills = { /* 기술 스택 */ };
export const experience = { /* 경력 */ };
export const projects = [ /* 프로젝트 목록 */ ];
export const education = [ /* 학력 */ ];
```

## 배포

Vercel에 연결되어 `main` 브랜치에 push하면 자동 배포됩니다.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

---

© 2025 김소정. All rights reserved.
