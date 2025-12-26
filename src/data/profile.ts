export const profile = {
  name: "김소정",
  nameEn: "Kim So Jeong",
  title: "Fullstack Developer",
  tagline: "하드웨어 데이터를 웹으로 번역하는 개발자",
  email: "fuso93@yonsei.ac.kr",
  phone: "010-5130-2164",
  github: "https://github.com/jammy0903",
  location: "서울시 서대문구",

  summary: `470대 IoT 디바이스의 실시간 데이터를 처리하는 모니터링 대시보드를 1인 개발한 풀스택 개발자입니다.
WebSocket 배치 처리로 렌더링 부하를 80% 줄이고, 빌드 시간을 2분에서 10초로 단축(12배 개선)한 경험이 있습니다.
복잡한 시스템 데이터를 직관적인 UI로 전달하는 일에 강점이 있습니다.`,
};

export const skills = {
  frontend: ["React", "TypeScript", "Vite", "Zustand", "MUI", "Tailwind CSS"],
  backend: ["FastAPI", "Node.js", "Express", "SQLite", "InfluxDB", "MQTT"],
  infra: ["Docker", "Nginx", "TLS/HTTPS", "WebSocket"],
  tools: ["Figma", "SVN", "Git"],
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
    title: "아크차단기 실시간 모니터링 대시보드",
    type: "회사 프로젝트",
    description: "470대 IoT 차단기의 실시간 상태를 모니터링하는 B2B 대시보드. 누전, 아크, 과전류, 온도, 전력량 감지 및 카카오톡 알림 연동.",
    techStack: ["React", "FastAPI", "WebSocket", "Docker", "Nginx", "InfluxDB"],
    highlights: [
      "WebSocket 배치 매니저로 렌더링 부하 80% 감소",
      "우선순위 큐 기반 장애 알림 즉시 전송",
      "CRA→Vite 전환으로 빌드 12배 개선",
      "고객사 재계약 성사에 기여",
    ],
    links: {
      news: "https://www.fpn119.co.kr/243991",
    },
  },
  {
    title: "COSLAB - C & OS 학습 플랫폼",
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
