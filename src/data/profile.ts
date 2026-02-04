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
  companyDesc: "스마트그리드(AMI) 및 IoT용 핵심 통신 반도체 팹리스 기업",
  position: "연구원 (웹 개발)",
  period: "2025.04 - 현재",
  duration: "8개월",
  project: "스마트그리드 IoT 모니터링 대시보드",
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
  ],
  news: [
    { title: "전기신문", url: "https://www.electimes.com/news/articleView.html?idxno=362889" },
    { title: "소방방재신문", url: "https://www.fpn119.co.kr/243991" },
  ],
};

export const projects = [
  {
    title: "CodeInsight - 코딩교육 시각화 플랫폼",
    type: "사이드 프로젝트 (진행 중)",
    description: "웹에서 C 코드를 실행하고, 메모리(힙/스택/포인터)를 시각화하며, AI 튜터가 OS 개념을 설명해주는 인터랙티브 학습 환경.",
    techStack: ["React", "TypeScript", "Zustand", "Node.js", "Express", "Docker", "Firebase"],
    highlights: [
      "Docker 샌드박스에서 안전하게 C 코드 컴파일/실행",
      "힙/스택/포인터 교육용 시각화",
      "FCFS, Round Robin, LRU 등 OS 알고리즘 시뮬레이션",
      "AI 튜터 대화형 설명",
    ],
    links: {
      github: "https://github.com/jammy0903/C-OSINE",
    },
  },
  {
    title: "웹 취약점 CVE 매칭 프로그램",
    type: "S-개발자 2기 (KISIA)",
    description: "웹 서비스의 취약점을 스캔하고 CVE 데이터베이스와 매칭하여 보안 위협을 분석하는 프로그램 개발.",
    techStack: ["Python", "CVE Database", "웹 취약점 분석", "Burp Suite"],
    highlights: [
      "CVE 데이터베이스 연동 및 자동 매칭",
      "웹 취약점 스캐닝 자동화",
      "보안 리포트 생성 기능",
    ],
    links: {},
  },
  {
    title: "메신저 아티팩트 분석 도구",
    type: "화이트햇스쿨 1기 (KITRI)",
    description: "디지털 포렌식 관점에서 메신저 애플리케이션의 아티팩트를 분석하고 데이터를 추출하는 도구 개발.",
    techStack: ["Python", "SQLite", "Reverse Engineering", "Digital Forensics"],
    highlights: [
      "메신저 DB 구조 역공학 분석",
      "삭제된 메시지 복구 기능",
      "타임라인 기반 데이터 시각화",
    ],
    links: {},
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
