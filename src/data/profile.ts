export const profile = {
  name: "김소정",
  nameEn: "Kim So Jeong",
  title: "Fullstack Developer",
  tagline: "하드웨어 데이터를 웹으로 번역하는 개발자",
  email: "l89192164@gmail.com",
  phone: "010-5130-2164",
  github: "https://github.com/jammy0903",
  location: "서울시 서대문구",

  summary: `470대 IoT 디바이스의 실시간 데이터를 처리하는 모니터링 대시보드를 1인 개발한 풀스택 개발자입니다.
WebSocket 배치 처리로 렌더링 부하를 80% 줄이고, 빌드 시간을 2분에서 10초로 단축(12배 개선)한 경험이 있습니다.
복잡한 시스템 데이터를 직관적인 UI로 전달하는 일에 강점이 있습니다.`,
};

export const skills = {
  frontend: ["React", "TypeScript", "Vite", "Zustand", "MUI", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  backend: ["FastAPI", "Node.js", "Express", "SQLite", "InfluxDB", "MQTT", "REST API"],
  infra: ["Docker", "Nginx", "TLS/HTTPS", "WebSocket", "Linux", "Shell Script", "WSL"],
  security: ["Reverse Engineering", "x86/x64 Assembly", "Ghidra", "IDA", "Wireshark", "Burp Suite", "웹 취약점 분석", "CVE 분석"],
  tools: ["Git", "SVN", "Figma", "VS Code", "Notion", "Jira"],
};

export const experience = {
  company: "(주)아이앤씨테크놀로지",
  companyDesc: "IoT 아크차단기 및 통신 반도체 팹리스 기업",
  position: "연구원 (웹 개발)",
  period: "2025.04 - 현재",
  duration: "8개월",
  project: "아크차단기 IoT 모니터링 대시보드",
  role: "사내 유일 웹 개발자로서 레거시 시스템 분석부터 리팩토링, 신규 기능 개발, 배포까지 전 과정 1인 담당",
  scale: "470대 차단기 실시간 모니터링, 다수 고객사 대상 B2B 서비스",
  techStack: ["React(Vite)", "FastAPI", "SQLite", "InfluxDB", "WebSocket", "MQTT", "Docker", "Nginx"],
  achievements: [
    {
      title: "실시간 데이터 처리 최적화",
      problem: "WebSocket으로 초당 수십 건 데이터 전송, 즉시 렌더링으로 성능 저하",
      solution: "배치 매니저 구현 (50건/50ms 기준), 우선순위 큐 설계 (Fault > 상태변화 > 수치변경)",
      result: "불필요한 렌더링 80% 감소, 장애 알림 지연 0ms",
    },
    {
      title: "빌드 환경 개선",
      problem: "CRA 기반 빌드 시간 과다 (2분)",
      solution: "Vite 전환, HMR 최적화",
      result: "빌드 시간 2분 → 10초 (12배 개선)",
    },
    {
      title: "프론트엔드 아키텍처 개선",
      problem: "단일 Context로 전체 리렌더링 발생",
      solution: "Context 3분할 (실시간/상태변경/계정정보), React Hooks 최적화",
      result: "렌더링 성능 체감 개선, Zustand 전환 설계 완료",
    },
    {
      title: "인프라 보안 강화",
      problem: "HTTP 통신, 하드코딩된 환경변수, SQLite 동시성 문제",
      solution: "Nginx+TLS 도입, Pydantic Config 시스템, SQLite WAL 모드 적용",
      result: "보안 수준 향상, DB 락 에러 0%",
    },
    {
      title: "UI/UX 개선 및 비즈니스 기여",
      problem: "엔지니어 중심의 난해한 UI",
      solution: "Figma 와이어프레임 제작, 사용자 관점 정보 구조 재설계",
      result: "고객사 재계약 성사, 영업팀 '계약 8할이 대시보드' 평가",
    },
    {
      title: "MQTT 실시간 데이터 파이프라인 설계",
      problem: "470대 IoT 장비의 MQTT 메시지를 프론트엔드까지 효율적으로 전달해야 하는 구조적 과제",
      solution: "MQTT → mqtt_processor(op코드 분기) → batch_manager(배치) → ws_connecter(구독 필터링) 4단계 파이프라인 설계, fault 즉시 처리 / data 배치 처리 우선순위 분기",
      result: "장애 알림 즉시 전달 보장, 구독 기반 필터링으로 불필요한 네트워크 전송 제거",
    },
    {
      title: "카카오톡 실시간 장애 알림 시스템",
      problem: "아크 fault 발생 시 담당자가 대시보드 미접속 상태면 장애 인지 불가",
      solution: "fault 이벤트 감지 즉시 카카오톡 알림 자동 발송, B2B 고객사별 알림 수신자 관리 페이지 구현",
      result: "장애 인지 시간 대폭 단축, 고객사 현장 대응 속도 향상",
    },
    {
      title: "디바이스 상태 머신 (인메모리 관리)",
      problem: "470대 장비 상태를 매번 DB 조회 시 지연 발생, 타임아웃 장비 판별 어려움",
      solution: "Python 딕셔너리 기반 인메모리 상태 머신 구현, 5분 무응답 시 자동 disconnected 처리, threading.Lock 동시성 보장",
      result: "DB 조회 없이 나노초 단위 상태 조회, 오프라인 장비 즉시 식별",
    },
    {
      title: "Dual DB 아키텍처 설계 (SQLite + InfluxDB)",
      problem: "관계형 메타데이터와 시계열 센서 데이터의 특성이 달라 단일 DB로 처리 비효율",
      solution: "SQLite(사용자·장비 메타데이터) + InfluxDB(전류·전압·온도 시계열 데이터) 이원화, asyncio.gather로 병렬 조회 후 병합",
      result: "대시보드 초기 로딩 최적화, 데이터 특성에 맞는 최적 저장·조회 구현",
    },
    {
      title: "4단계 RBAC 권한 시스템",
      problem: "B2B 서비스 특성상 고객사별 장비 접근 제어 및 역할별 권한 분리 필요",
      solution: "Root/Admin/User/Guest 4단계 역할 기반 접근 제어 설계, 소유권 기반 리소스 접근 제어, 프론트·백엔드 양쪽 일관된 권한 체크",
      result: "고객사 간 데이터 격리 보장, B2B 멀티테넌시 지원",
    },
    {
      title: "ML 아크 분석 모듈 및 데이터 스키마 확장 설계",
      problem: "하드웨어 버전 업그레이드(V2→V3)로 샘플 수 변경(30→60개) 및 신규 전력 필드 추가 대응 필요",
      solution: "하드웨어 버전 자동 감지 로직, InfluxDB bucket 분리(운영용/ML용), 버전별 가변 스키마 설계",
      result: "기존 대시보드 영향 없이 V3 데이터 수용, ML 학습용 데이터 파이프라인 구축",
    },
    {
      title: "프론트엔드 안정성 고도화",
      problem: "대시보드 24/7 운영 시 메모리 누수, API 중복 호출, WebSocket 연결 끊김 등 안정성 이슈",
      solution: "인메모리 캐시(TTL 10분, FIFO), AbortController 기반 요청 중복 방지, WebSocket 지수 백오프 재연결(2s→4s→8s), Intersection Observer 지연 로딩",
      result: "24/7 무중단 운영 안정성 확보, 메모리 사용량 안정화",
    },
  ],
  news: [
    { title: "전기신문", url: "https://www.electimes.com/news/articleView.html?idxno=362889" },
    { title: "소방방재신문", url: "https://www.fpn119.co.kr/243991" },
  ],
};

export const projects = [
  {
    slug: "codeinsight",
    title: "CodeInsight",
    subtitle: "코드 실행 시각화 학습 플랫폼",
    type: "오픈소스 사이드 프로젝트",
    thumbnail: { emoji: "🖥️", gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" },
    description: "C/Python/JavaScript/Java 4개 언어의 코드 실행 과정을 메모리 레벨에서 단계별 시각화하는 인터랙티브 학습 플랫폼. 각 언어의 디버거를 직접 구현(GDB/Python tracer/AST 기반/JDI)하고 서로 다른 메모리 모델을 단일 시각화 스키마로 통합 설계. 2개월, 74,700줄, 커밋 386회. Web + PWA + Android(테스트) 배포.",
    techStack: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Zustand", "Node.js", "Fastify", "PostgreSQL", "Prisma", "CodeMirror 6", "Framer Motion", "Capacitor", "Docker", "pnpm monorepo"],
    highlights: [
      "4개 언어 디버거 직접 구현 — C(GDB), Python(커스텀 트레이서), JavaScript(AST 기반 코드 변환), Java(JDI) — 기존 라이브러리 미사용",
      "언어별로 완전히 다른 메모리 모델(스택/힙/참조/JVM)을 단일 시각화 포맷으로 정규화하는 파이프라인 설계",
      "Express → Fastify, Monaco → CodeMirror 6, SQLite → PostgreSQL 마이그레이션 3건 동시 진행 — 서비스 중단 없이 완료",
      "LessonPage(1042→276줄), MemoryPanel(1057→57줄) 등 7단계 체계적 리팩토링으로 총 3,500줄 이상 분해",
    ],
    links: {
      live: "https://codeinsight.online/",
      github: "https://github.com/jammy0903/CodeInsight",
    },
  },
  {
    slug: "cve-matcher",
    title: "CVE Matcher",
    subtitle: "웹 취약점 CVE 매칭 프로그램",
    type: "S-개발자 2기 (KISIA)",
    thumbnail: { emoji: "🔒", gradient: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)" },
    description: "S-개발자 2기 팀 프로젝트로 참여하여 서브도메인 크롤러 핵심기능 개발과 총 문서 설계를 담당. 웹 사이트의 상위 도메인부터 원하는 깊이까지 모든 페이지를 크롤링하여 CVE 패턴과 매칭하고, AI 기반으로 취약점 점검 보고서를 자동 생성하는 화이트햇 ASM 웹 어플리케이션.",
    techStack: ["Python", "SvelteKit", "MongoDB", "SQLite", "AWS", "Docker"],
    highlights: [
      "서브도메인 크롤러 개발 — 상위 도메인 입력 시 하위 서브도메인 자동 탐색 및 페이지 수집",
      "크롤링된 서브도메인별 CVE 매칭 및 SQL Injection · XSS 등 취약점 자동 탐지",
      "AI 기반 취약점 점검 보고서 자동 생성 — 취약점 설명 및 대응 방안 포함",
      "AWS VPC 기반 Public/Private Subnet 분리 아키텍처 설계 및 Docker 컨테이너 배포",
    ],
    images: [
      { src: "/images/cve-matcher/1_architecture.png", caption: "AWS VPC 아키텍처 구성도" },
      { src: "/images/cve-matcher/2_system_ia.png", caption: "시스템 구성도 IA" },
      { src: "/images/cve-matcher/3_system_ia2.png", caption: "메인 페이지 및 CVE 매칭 UI" },
      { src: "/images/cve-matcher/4_system_ia3.png", caption: "서브도메인 하위 페이지 추출 로그" },
      { src: "/images/cve-matcher/5_subdomain_log.png", caption: "사용자 관리 및 계정 생성" },
      { src: "/images/cve-matcher/6_user_create.png", caption: "개인정보 이용약관 동의 및 검사 시작" },
      { src: "/images/cve-matcher/7_terms.png", caption: "지난 검사 기록창" },
      { src: "/images/cve-matcher/8_history.png", caption: "취약점 점검 결과 보고서" },
      { src: "/images/cve-matcher/9_report.png", caption: "서브도메인 크롤링 및 CVE 검사 결과 GUI" },
    ],
    links: {
      github: "https://github.com/jammy0903/sub_crawler",
      notion: "https://brindle-tractor-059.notion.site/CVE-17b09ddb2b7a818a94c7c3a853905f90",
    },
  },
  {
    slug: "messenger-forensics",
    title: "Messenger Forensics",
    subtitle: "메신저 아티팩트 분석 도구",
    type: "화이트햇스쿨 1기 (KITRI)",
    thumbnail: { emoji: "🔍", gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" },
    description: "화이트햇스쿨 1기 팀 프로젝트로 참여하여 메신저 애플리케이션의 아티팩트를 디지털 포렌식 관점에서 분석. 네트워크 패킷 분석, 바이너리 동적 분석, Frida를 활용한 SSL 피닝 우회 및 DEX/Java 분석을 담당.",
    techStack: ["Python", "Frida", "Wireshark", "SQLite", "Reverse Engineering", "Digital Forensics"],
    highlights: [
      "네트워크 패킷 캡처 및 메신저 통신 프로토콜 분석",
      "바이너리 동적 분석을 통한 메신저 앱 런타임 동작 추적",
      "Frida를 활용한 SSL 피닝 우회 — 암호화된 메신저 트래픽 복호화 및 DEX/Java 코드 분석",
      "메신저 DB 구조 역공학 분석 및 삭제된 메시지 복구",
    ],
    links: {
      notion: "https://brindle-tractor-059.notion.site/1aa09ddb2b7a8046a283ffee5215efb4",
    },
    images: [
      { src: "/images/messenger/3.png", caption: "아티팩트 분석 경로 및 DB Browser 분석" },
      { src: "/images/messenger/4.png", caption: "KakaoTalk DB Column 분석 및 메모리 메시지 추출 프로세스" },
      { src: "/images/messenger/5.png", caption: "메모리 구조 유추 및 메시지 전송부 분석" },
      { src: "/images/messenger/6.png", caption: "메시지 삭제 프로세스 분석 및 Frida API 후킹" },
    ],
  },
  {
    slug: "malware-analysis",
    title: "문서형 악성코드 분석",
    subtitle: "Yara 기반 문서형 악성코드 탐지 시스템",
    type: "KUCIS (대학정보보호동아리)",
    thumbnail: { emoji: "🛡️", gradient: "linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)" },
    description: "KUCIS 지원 사업 팀 프로젝트로 참여하여 악성코드 분석과 탐지 시스템 개발을 담당. 코로나19 이후 급증한 문서형 악성코드를 탐지하기 위한 Python/Yara 기반 분석 시스템으로, 매크로 악성코드, CVE 취약점 익스플로잇, 정보탈취 악성코드(Loki Bot, AgentTesla)를 통합 탐지.",
    techStack: ["Python", "Yara", "Ghidra", "dnSpy", "Cuckoo Sandbox", "x64dbg", "officeparser"],
    highlights: [
      "매크로 기반 악성코드 탐지 — URLDownloadToFileA, WScript.Shell 등 주요 API 호출 패턴 Yara 룰 개발",
      "CVE-2017-0199 · CVE-2017-11882 · CVE-2018-0802 문서 편집 프로그램 취약점 통합 탐지 규칙 구현",
      "Loki Bot · AgentTesla 정보탈취 악성코드 역공학 분석 — Ghidra · dnSpy · Cuckoo Sandbox 활용",
      "매크로 탐지 · 취약점 탐지 · 악성 파일 탐지 3가지 모듈을 통합 관리하는 시스템 설계",
    ],
    links: {
      notion: "https://brindle-tractor-059.notion.site/17b09ddb2b7a81679f62fb4dc2bdf8f3",
    },
  },
  {
    slug: "donghang",
    title: "동행",
    subtitle: "국내 여행 동행 모집 웹서비스",
    type: "강원 SW페스티벌 (연세대)",
    thumbnail: { emoji: "🗺️", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
    description: "강원 SW페스티벌 팀 프로젝트로 참여하여 백엔드 개발과 카카오맵 API 연동을 담당. 코로나 이후 증가하는 국내 여행자들을 위한 동행 모집 웹서비스로, 지도 기반 여행지 탐색과 실시간 채팅을 통한 동행 매칭 기능을 제공.",
    techStack: ["Java", "Spring Boot", "JSP", "MariaDB", "WebSocket", "카카오맵 API", "Bootstrap"],
    highlights: [
      "카카오맵 API 연동 — 지도 기반 여행지 탐색 및 위치 기능 전체 구현",
      "Spring Boot 기반 백엔드 개발 및 MariaDB 서버 연동·관리",
      "WebSocket 기반 실시간 채팅 기능 구현",
      "시스템 아키텍처 설계 및 문서 작성",
    ],
    images: [
      { src: "/images/donghang/1.png", caption: "프로그램 개발 환경" },
      { src: "/images/donghang/2.png", caption: "동행 모집 등록 및 참가 흐름" },
      { src: "/images/donghang/3.png", caption: "동행 승인·채팅 및 지역별 채팅방" },
      { src: "/images/donghang/4.png", caption: "카카오맵 기반 여행 경로 및 맛집 탐색" },
      { src: "/images/donghang/5.png", caption: "부적절한 유저 신고 기능" },
      { src: "/images/donghang/6.png", caption: "강원 SW페스티벌 입상" },
    ],
    links: {
      notion: "https://brindle-tractor-059.notion.site/1aa09ddb2b7a807f98bcf3e3221fbcb9",
    },
  },
  {
    slug: "phishing-detector",
    title: "피싱사이트 탐지 확장프로그램",
    subtitle: "Chrome Extension 기반 피싱 탐지 및 개인정보 보호 도구",
    type: "연세대학교 Y-CERT (개인)",
    thumbnail: { emoji: "🛡️", gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)" },
    description: "Chrome Extension API를 활용하여 피싱 사이트를 실시간으로 탐지하고 사용자의 개인정보를 보호하는 브라우저 확장프로그램. AI 기반 위험도 분석, 유사 도메인 탐지, SSL 인증서 검증, 임시 연락처 생성 등의 기능을 개인 프로젝트로 개발.",
    techStack: ["TypeScript", "JavaScript", "Chrome Extension API", "HTML", "CSS", "SCSS"],
    highlights: [
      "AI 기반 피싱 위험도 분석 — 도메인 생성일, 유사 도메인 탐지, SSL 인증서 검증을 종합한 위험 점수 산출",
      "피싱 사이트 접속 시 실시간 경고 팝업 — 위험 정보 표시 및 신고 기능",
      "임시 연락처 생성기 — 안전한 거래를 위한 임시 이메일(24시간)/전화번호(1시간) 발급",
      "개인정보 보호 설정 — 광고 수신, 위치 정보, 구매 내역 등 7가지 항목별 보호 관리",
    ],
    images: [
      { src: "/images/phishing/3.png", caption: "피싱 위험 감지 경고" },
      { src: "/images/phishing/4.png", caption: "사이트 위험도 대시보드" },
      { src: "/images/phishing/5.png", caption: "임시 연락처 생성기" },
      { src: "/images/phishing/2.png", caption: "개인정보 보호 설정" },
      { src: "/images/phishing/1.png", caption: "피싱 사이트 탐지 화면" },
      { src: "/images/phishing/6.png", caption: "수신 설정" },
    ],
    links: {
      github: "https://github.com/jammy0903/phising",
      notion: "https://brindle-tractor-059.notion.site/17b09ddb2b7a81b09986edcbaa5f494d",
    },
  },
];

export const education = [
  {
    school: "연세대학교 미래캠퍼스",
    major: "컴퓨터공학과",
    period: "2020.02 - 2025.02",
    status: "졸업",
  },
  {
    school: "S-개발자 2기 (KISIA)",
    major: "웹 취약점 CVE 매칭 프로그램 개발",
    period: "2024.03 - 2024.11",
    status: "수료",
  },
  {
    school: "화이트햇스쿨 1기 (KITRI)",
    major: "메신저 아티팩트 분석",
    period: "2023.09 - 2024.02",
    status: "수료",
  },
];
