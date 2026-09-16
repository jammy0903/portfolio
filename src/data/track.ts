import { useLocation } from "react-router-dom";

/**
 * 같은 경력을 두 직군으로 설명한다.
 *
 * 사실은 하나인데 지원 직군에 따라 앞세울 것이 다르다. 페이지를 복제하는 대신
 * 문구만 트랙별로 갈아끼운다 — 프로젝트 상세처럼 사실 그대로인 화면은 공유한다.
 *
 *   /      → planning (기본)
 *   /dev/* → dev
 */
export type Track = "planning" | "dev";

export const DEV_PREFIX = "/dev";

export function trackFromPath(pathname: string): Track {
  return pathname === DEV_PREFIX || pathname.startsWith(`${DEV_PREFIX}/`) ? "dev" : "planning";
}

export function useTrack(): Track {
  return trackFromPath(useLocation().pathname);
}

/** 트랙에 맞는 내부 링크를 만든다. dev 트랙에서는 /dev 접두사를 유지한다. */
export function useTrackPath() {
  const track = useTrack();
  return (path: string) => {
    if (track !== "dev") return path;
    return path === "/" ? DEV_PREFIX : `${DEV_PREFIX}${path}`;
  };
}

type TrackContent = {
  label: string;
  navRole: string;
  switchLabel: string;
  switchTo: string;
  resume: { url: string; updated: string };

  role: string;
  heroTitle: [string, string];
  heroSummary: string;
  heroFacts: { dt: string; dd: string }[];

  metrics: { value: string; label: string; basis: string }[];

  featuredEyebrow: Record<string, string>;
  featured: { eyebrow: string; title: string; description: string; proof: string; to: string }[];

  directionTitle: string;
  directionLead: string;
  foundationsLabel: string;
  foundations: string[];
  focusLabel: string;
  focus: string[];

  contactTitle: string;
  contactLead: string;
  targetRoles: string[];

  aboutTitle: [string, string, string];
  aboutSummary: string;
  strengths: { number: string; title: string; description: string }[];

  careerTitle: [string, string];
  careerLead: string;
  careerCases: {
    category: string;
    title: string;
    problem: string;
    action: string;
    result: string;
    metric: string;
  }[];
};

const planning: TrackContent = {
  label: "기획",
  navRole: "SERVICE PLANNER",
  switchLabel: "개발자 버전",
  switchTo: DEV_PREFIX,
  resume: { url: "/resume/kim-sojeong-resume-planning.pdf", updated: "2026.09" },

  role: "서비스 기획 · 프로덕트 기획",
  heroTitle: ["엔지니어의 화면을", "고객의 결정 화면으로."],
  heroSummary:
    "470대 장비를 쓰는 B2B 제품을 1인으로 만들고 운영했습니다. 화면을 고객의 의사결정 기준으로 다시 설계해 재계약에 기여했습니다.",
  heroFacts: [
    { dt: "현재", dd: "(주)아이앤씨테크놀로지 · 연구원 (웹 담당)" },
    { dt: "담당", dd: "요구사항 정의 · 정보구조 설계 · 운영까지 1인" },
  ],

  metrics: [
    { value: "재계약", label: "고객사 계약 기여", basis: "영업팀 평가 — 계약의 핵심" },
    { value: "5탭→3단계", label: "정보구조 재설계", basis: "사용 목적 기준으로 재정의" },
    { value: "470대", label: "B2B 다수 고객사 운영", basis: "실서비스 규모" },
    { value: "1인", label: "기획부터 운영까지", basis: "사내 유일 웹 담당자" },
  ],

  featuredEyebrow: {
    "dog-walk": "제품 기획 · 출시",
    codeinsight: "학습 제품 기획",
    memedics: "승인형 워크플로 설계",
    "plush-club": "게임 루프 설계",
  },
  featured: [
    {
      eyebrow: "실무 · 정보구조 재설계",
      title: "아크차단기 모니터링 대시보드",
      description:
        "엔지니어 기준으로 짜여 있던 5탭 구조를 고객의 사용 목적에 맞춰 3단계로 다시 설계했습니다.",
      proof: "재계약 기여 · 요구사항 정의 · 운영 프로세스 설계",
      to: "/experience",
    },
    {
      eyebrow: "제품 기획 · 출시",
      title: "강아지 산책 — 타자로 걷기",
      description:
        "키로깅 우려를 먼저 문제로 잡고, 입력 내용은 기록하지 않고 횟수만 세도록 설계했습니다.",
      proof: "Chrome 웹스토어 정식 게시 · 지금 설치 가능",
      to: "/projects/dog-walk",
    },
    {
      eyebrow: "학습 제품 기획",
      title: "CodeInsight 코드 실행 시각화",
      description:
        "언어마다 다른 실행 구조를 학습자에게는 하나의 일관된 화면으로 보이도록 표현 규칙을 통일했습니다.",
      proof: "4개 언어 · 1인 기획·개발 · 오픈소스",
      to: "/projects/codeinsight",
    },
  ],

  directionTitle: "만드는 과정을 아는 기획자로 일하고 싶습니다.",
  directionLead:
    "요구사항이 구현에서 어떻게 어그러지는지, 어디서 일정이 늘어나는지 직접 겪었습니다. 그래서 되는 범위와 쪼개는 단위를 현실적으로 잡을 수 있습니다.",
  foundationsLabel: "지금까지 해 온 것",
  foundations: [
    "사용 목적에서 출발하는 정보구조(IA) 재설계",
    "B2B 권한 정책과 운영 프로세스 정의",
    "개발 문서·변경관리·보고서 작성",
  ],
  focusLabel: "이어가고 싶은 것",
  focus: [
    "데이터로 가설을 세우고 지표로 확인하는 기획",
    "사람의 승인을 거치는 업무 자동화 설계",
    "개발팀과 같은 언어로 범위를 조율하는 일",
  ],

  contactTitle: "사용자의 문제를 제품 구조로 푸는 일을 하고 싶습니다.",
  contactLead:
    "B2B 실서비스를 혼자 책임지며 요구사항부터 운영까지 겪었습니다. 그 경험을 기획 직무에서 이어가고 싶습니다.",
  targetRoles: ["서비스 기획", "프로덕트 기획 · PM", "B2B · 데이터 제품"],

  aboutTitle: ["무엇을 보여줄지가 아니라,", "무엇을 결정해야 하는지에서", "시작합니다."],
  aboutSummary:
    "470대 장비를 쓰는 B2B 모니터링 제품을 1인으로 기획하고 만들었습니다. 엔지니어 기준으로 나열돼 있던 화면을 고객의 의사결정 순서로 다시 설계해 재계약에 기여했고, 권한 정책과 장애 대응 프로세스까지 제품의 요구사항으로 정의했습니다. 개발을 직접 해 본 덕분에 구현 난이도와 리스크를 감안해 범위를 쪼갤 수 있습니다.",
  strengths: [
    {
      number: "01",
      title: "사용 목적에서 화면을 설계합니다",
      description:
        "이상 신호를 나열하는 대신 '지금 조치가 필요한 장비는 무엇인가'를 먼저 답하도록 정보구조를 다시 짰습니다.",
    },
    {
      number: "02",
      title: "실측으로 기준을 정합니다",
      description:
        "감이 아니라 실제 데이터 분포와 응답시간, 장애 기록을 확인해 임계값과 우선순위를 결정합니다.",
    },
    {
      number: "03",
      title: "구현 난이도를 아는 채로 쪼갭니다",
      description:
        "하드웨어 세대 교체를 5단계로 나누고 각 단계를 되돌릴 수 있게 해, 서비스 중단 없이 전환했습니다.",
    },
    {
      number: "04",
      title: "정책과 예외를 먼저 정의합니다",
      description:
        "고객사 간 데이터 격리, 4단계 권한, 개인정보를 남기지 않는 설계처럼 지켜야 할 선을 요구사항에 포함합니다.",
    },
  ],

  careerTitle: ["470대가 쓰는 제품의", "쓰임새를 다시 설계했습니다."],
  careerLead:
    "요구사항 정의부터 정보구조, 권한 정책, 운영 프로세스, 문서화까지 제품 전반을 1인으로 맡고 있습니다.",
  careerCases: [
    {
      category: "정보구조",
      title: "엔지니어용 화면을 고객의 의사결정 화면으로",
      problem:
        "아크 이벤트 중심의 5탭 구조가 고객의 실제 사용 목적인 전기 설비 건강 관리와 맞지 않았습니다.",
      action:
        "현황 · 문제장비 · 장비상세 3단계로 정보구조를 다시 설계하고, 건강 지표 3종은 경고 대상 장비에만 적용하도록 범위를 한정했습니다.",
      result: "고객사 재계약에 기여했고, 영업팀으로부터 대시보드가 계약의 핵심이라는 평가를 받았습니다.",
      metric: "재계약 기여",
    },
    {
      category: "운영 프로세스",
      title: "담당자가 보고 있어야만 알던 장애를 알림으로",
      problem: "담당자가 화면에 접속해 있지 않으면 장애를 즉시 인지할 수 없었습니다.",
      action:
        "감지 → 고객사별 수신자 관리 → 카카오톡 발송까지 하나의 운영 흐름으로 설계했습니다.",
      result: "장애 인지 경로를 수동 모니터링에서 이벤트 기반 알림으로 전환했습니다.",
      metric: "이벤트 기반 대응",
    },
    {
      category: "정책 설계",
      title: "고객사 간 데이터가 섞이지 않게",
      problem:
        "다수 고객사가 한 서비스를 쓰는 구조라 장비 접근 범위와 역할별 권한을 정의해야 했습니다.",
      action:
        "Root · Admin · User · Guest 4단계 역할과 소유권 기반 접근 규칙을 정의하고 화면·서버 양쪽에 일관되게 적용했습니다.",
      result: "고객사 간 데이터 격리를 보장하는 B2B 멀티테넌시 구조를 확보했습니다.",
      metric: "4단계 권한",
    },
    {
      category: "우선순위",
      title: "'모두 빠르게' 대신 무엇을 먼저 보여줄지 정하기",
      problem:
        "초당 수십 건이 밀려들어 화면이 버거워졌지만, 장애 알림만큼은 늦으면 안 되는 상황이었습니다.",
      action:
        "장애 알림은 즉시, 일반 데이터는 묶어서 처리하도록 정보의 우선순위를 나눴습니다.",
      result: "불필요한 화면 갱신을 80% 줄이면서 장애 알림은 지연 없이 전달했습니다.",
      metric: "갱신 80%↓",
    },
    {
      category: "전환 계획",
      title: "새 하드웨어를 중단 없이 받아들이는 5단계",
      problem: "신형 장비 도입으로 데이터 구조를 바꿔야 했지만 운영 중인 서비스를 멈출 수 없었습니다.",
      action:
        "전환을 5단계로 쪼개고 각 단계를 독립적으로 되돌릴 수 있게 계획했습니다.",
      result: "게이트웨이 55대를 100% 자동 분류하고, 신규 모델은 설정 추가만으로 확장할 수 있게 했습니다.",
      metric: "55대 100% 분류",
    },
  ],
};

const dev: TrackContent = {
  label: "개발",
  navRole: "FULL-STACK DEVELOPER",
  switchLabel: "기획 버전",
  switchTo: "/",
  resume: { url: "/resume/kim-sojeong-resume.pdf", updated: "2026.09" },

  role: "산업 IoT 풀스택 개발자",
  heroTitle: ["현장 데이터를", "운영 가능한 제품으로."],
  heroSummary:
    "470대 장비의 실시간 서비스를 운영해 왔고, 최근에는 이 경험을 기업용 AI 업무자동화로 넓히고 있습니다.",
  heroFacts: [
    { dt: "현재", dd: "(주)아이앤씨테크놀로지 · 연구원 (웹 개발)" },
    { dt: "담당", dd: "사내 유일 웹 개발자 · 분석부터 배포까지 1인" },
  ],

  metrics: [
    { value: "470대", label: "IoT 장비 실시간 운영", basis: "B2B 다수 고객사" },
    { value: "80%", label: "불필요한 렌더링 감소", basis: "배치 처리 도입 전 대비" },
    { value: "12배", label: "빌드 속도 개선", basis: "CRA 2분 → Vite 10초" },
    { value: "1인", label: "분석부터 배포까지 담당", basis: "사내 유일 웹 개발자" },
  ],

  featuredEyebrow: {
    "dog-walk": "배포 제품 · Chrome 웹스토어",
    codeinsight: "복잡한 시스템 설계 · 오픈소스",
    memedics: "데이터 자동화 · Human-in-the-loop",
    "plush-club": "웹게임 · 3D 렌더링과 물리",
  },
  featured: [
    {
      eyebrow: "실무 프로젝트",
      title: "산업 IoT 모니터링 대시보드",
      description:
        "MQTT부터 WebSocket, 데이터 저장, 고객용 UI까지 470대 장비의 운영 흐름을 1인으로 개선했습니다.",
      proof: "B2B 운영 · 실시간 장애 알림 · 24/7 안정화",
      to: "/experience",
    },
    {
      eyebrow: "배포 제품",
      title: "강아지 산책 — 타자로 걷기",
      description:
        "타이핑을 걸음으로 바꿔 강아지를 키우는 크롬 확장프로그램입니다. 키 입력 내용은 기록하지 않고 횟수만 세도록 설계했습니다.",
      proof: "Chrome 웹스토어 정식 게시 · 지금 설치 가능",
      to: "/projects/dog-walk",
    },
    {
      eyebrow: "개인 프로젝트",
      title: "CodeInsight 코드 실행 시각화",
      description:
        "4개 언어의 디버거를 직접 구현해, 서로 다른 메모리 모델을 하나의 시각화 스키마로 통합했습니다.",
      proof: "74,700줄 · 커밋 386회 · 오픈소스",
      to: "/projects/codeinsight",
    },
  ],

  directionTitle: "산업 IoT 경험을 AI 업무자동화로 넓히고 있습니다.",
  directionLead:
    "현장에서 쌓은 데이터 처리·권한·배포·장애 대응 경험을 바탕으로, 반복 업무를 줄이는 AI 제품을 공부하고 만들고 있습니다.",
  foundationsLabel: "지금까지의 경험",
  foundations: [
    "현장 장비와 웹 서비스를 잇는 MQTT·WebSocket 파이프라인",
    "React·FastAPI 기반 B2B 제품 개발과 운영",
    "권한·보안·배포·장애 대응까지 포함한 엔드투엔드 경험",
  ],
  focusLabel: "현재 집중하는 분야",
  focus: [
    "사내 문서와 운영 데이터를 찾고 답하는 RAG 서비스",
    "사람의 승인을 거치는 반복 업무 자동화",
    "Azure 환경에서 배포·권한·모니터링까지 연결하기",
  ],

  contactTitle: "산업 데이터와 업무 흐름을 제품으로 만드는 일을 이어가고 싶습니다.",
  contactLead:
    "산업 IoT 실서비스를 혼자 책임진 경험을 바탕으로, 기업의 데이터와 반복 업무를 안전하게 연결하는 제품을 만들고 싶습니다.",
  targetRoles: ["기업용 AI 업무자동화", "산업 데이터 제품", "B2B 풀스택 개발"],

  aboutTitle: ["복잡한 시스템을 읽고,", "운영 가능한 제품으로", "바꿉니다."],
  aboutSummary:
    "470대 IoT 디바이스의 실시간 데이터를 처리하는 B2B 모니터링 대시보드를 1인 개발·운영한 풀스택 개발자입니다. WebSocket 배치 처리로 렌더링 부하를 80% 줄이고, 빌드 시간을 2분에서 10초로 단축(12배 개선)한 경험이 있습니다. 복잡한 현장 데이터와 업무 흐름을 안정적인 제품으로 바꾸는 데 강점이 있습니다.",
  strengths: [
    {
      number: "01",
      title: "시스템 전체를 책임집니다",
      description:
        "프론트엔드 한 영역에 머무르지 않고 장비 데이터 수집부터 API, 화면, 배포와 운영까지 연결합니다.",
    },
    {
      number: "02",
      title: "운영 데이터로 판단합니다",
      description:
        "감이 아니라 raw payload, 응답시간, 렌더링 횟수와 장애 기록을 확인해 구조와 우선순위를 결정합니다.",
    },
    {
      number: "03",
      title: "기술을 업무 가치로 번역합니다",
      description:
        "엔지니어 중심 화면을 고객의 의사결정 흐름으로 다시 설계해 실제 재계약과 운영 개선에 연결했습니다.",
    },
    {
      number: "04",
      title: "보안과 복구 경로를 함께 봅니다",
      description:
        "mTLS, RBAC, 단계별 마이그레이션과 롤백처럼 실서비스가 지속되기 위한 조건을 구현에 포함합니다.",
    },
  ],

  careerTitle: ["470대의 현장 데이터를", "고객이 쓰는 서비스로 운영했습니다."],
  careerLead:
    "문서가 부족한 레거시를 분석하는 일부터 실시간 파이프라인, 화면, 보안, 배포, 장애 대응까지 웹 서비스 전 과정을 1인으로 맡고 있습니다.",
  careerCases: [
    {
      category: "고객 경험",
      title: "엔지니어 중심 화면을 고객의 의사결정 화면으로",
      problem: "아크 이벤트 중심의 복잡한 5탭 구조가 실제 사용 목적과 맞지 않았습니다.",
      action:
        "현황·문제장비·장비상세 3단계로 정보 구조를 다시 설계하고, 1,700줄 화면을 컨테이너와 8개 컴포넌트로 분리했습니다.",
      result: "고객사 재계약에 기여했고, 영업팀으로부터 대시보드가 계약의 핵심이라는 평가를 받았습니다.",
      metric: "재계약 기여",
    },
    {
      category: "실시간 성능",
      title: "장애는 즉시, 일반 데이터는 묶어서 처리",
      problem: "초당 수십 건의 WebSocket 데이터를 도착 즉시 렌더링해 화면 부하가 커졌습니다.",
      action:
        "50건·50ms 배치 매니저와 Fault 우선순위 큐를 설계해 이벤트의 중요도에 따라 처리 경로를 분리했습니다.",
      result: "불필요한 렌더링을 80% 줄이면서 장애 알림은 지연 없이 전달했습니다.",
      metric: "렌더링 80%↓",
    },
    {
      category: "보안과 안정성",
      title: "평문 IoT 통신을 기기 인증 기반 구조로",
      problem: "HTTP와 MQTT 평문 통신, 하드코딩 환경변수, SQLite 락 문제가 함께 존재했습니다.",
      action:
        "Nginx·TLS, Pydantic 설정 관리, SQLite WAL을 도입하고 게이트웨이와 백엔드에 상호 인증 mTLS를 적용했습니다.",
      result: "미인증 기기의 브로커 연결을 차단하고 데이터 구간을 암호화했으며 DB 락 오류를 0건으로 낮췄습니다.",
      metric: "DB 락 0건",
    },
    {
      category: "운영 자동화",
      title: "대시보드를 보고 있지 않아도 장애를 알도록",
      problem: "담당자가 화면에 접속하지 않은 상태에서는 아크 장애를 즉시 인지하기 어려웠습니다.",
      action:
        "Fault 이벤트 감지부터 고객사별 수신자 관리, 카카오톡 알림 발송까지 하나의 자동화 흐름으로 구현했습니다.",
      result: "장애 인지 경로를 수동 모니터링에서 이벤트 기반 알림으로 전환했습니다.",
      metric: "이벤트 기반 대응",
    },
    {
      category: "데이터 구조",
      title: "새 하드웨어를 받아들이는 점진적 데이터 전환",
      problem: "하드웨어 버전이 늘어나며 모델별 데이터 스키마와 저장 위치를 안전하게 분리해야 했습니다.",
      action:
        "운영 영향을 통제하는 5단계 라우팅 전환을 설계하고 raw payload를 분석해 devType 기반 자동 분류를 구현했습니다.",
      result: "55대 게이트웨이를 100% 자동 분류하고, 신규 모델은 설정 추가만으로 확장할 수 있게 했습니다.",
      metric: "55대 100% 분류",
    },
  ],
};

export const trackContent: Record<Track, TrackContent> = { planning, dev };

export function useTrackContent(): TrackContent {
  return trackContent[useTrack()];
}
