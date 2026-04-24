# portf 프로젝트 기본 지식

## 프로젝트 개요
김소정의 개인 포트폴리오 사이트. React + Vite + TypeScript로 구성되어 Vercel에 배포됨.
GitHub: jammy0903/portfolio

## 기술 스택
- **Frontend**: React, TypeScript, Vite
- **배포**: Vercel (git push → 자동 배포)
- **DB**: Neon PostgreSQL (vercel.json에 DATABASE_URL 환경변수)
- **라우팅**: React Router (BrowserRouter)

## 디렉토리 구조
```
portf/
├── src/
│   ├── App.tsx              # 라우팅 정의
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── projects/
│   │       ├── ProjectDetail.tsx
│   │       └── CodeInsightDetail.tsx
│   └── components/
│       ├── Layout.tsx
│       └── Navbar.tsx
├── public/
│   └── topcit/              # TOPCIT 공부 뷰어 (정적 HTML)
│       ├── index.html       # 과목 목록 페이지
│       ├── 01~06/index.html # 각 과목 뷰어 (gen_topcit.py로 생성)
│       └── progress.js      # 학습 진도 로컬스토리지 관리
├── scripts/
│   └── gen_topcit.py        # cert-study JSON → public/topcit HTML 생성기
├── api/                     # Vercel serverless functions
└── vercel.json              # SPA rewrites (/topcit은 정적으로 서빙)
```

## TOPCIT 뷰어 파이프라인
1. 원본 PDF → Google Drive 업로드 (`upload_topcit.py`)
2. Drive → 텍스트 추출 (`export_topcit.py`)
3. 텍스트 → JSON 파싱 (`cert-study/parse_topcit.py`)
4. 구식 JSON(v1) → 계층형 JSON(v2) 마이그레이션 (`cert-study/migrate_json.py`)
5. v2 챕터 재구조화 (`cert-study/restructure_all.py`)
6. AI enrichment - background/explanation/mnemonic 추가 (cert-study 작업)
7. **v2 JSON → 공부 HTML 생성** (`scripts/gen_topcit.py` 실행)
8. `git push` → Vercel 자동 배포

### 데이터 소스 경로
- `../cert-study/topcit_json_v2/topcit_0N.json` (상대경로, v2 우선)
- v2 없으면 자동으로 v1 인메모리 변환

### TOPCIT HTML 업데이트 방법
```bash
cd /home/jammy/projects/portf
python3 scripts/gen_topcit.py
git add public/topcit/
git commit -m "topcit: HTML 재생성"
git push
```

## vercel.json rewrites
- `/topcit/*` → 정적 파일 직접 서빙 (SPA 라우팅 제외)
- 나머지 → React SPA로 라우팅

## 과목 목록 (topcit)
| ID | 과목명 | 개념 수 |
|----|--------|---------|
| 01 | 소프트웨어 개발 | 102 |
| 02 | 데이터 이해와 활용 | 164 |
| 03 | 시스템 & 네트워크 | 152 |
| 04 | 정보보안 | 70 |
| 05 | IT 비즈니스와 윤리 | 87 |
| 06 | 커뮤니케이션 & PM | 100 |

## 개념 enrichment 구조 (v2 JSON)
```json
{
  "title": "개념명",
  "keywords": [],
  "background": "왜 이 개념이 생겼는지 (옛날에 이런 문제가 있었어~ 톤, 2문장)",
  "explanation": "중학생도 이해할 비유/예시 (2-3문장)",
  "mnemonic": "5초컷 암기법 (두문자어/스토리/숫자)"
}
```
