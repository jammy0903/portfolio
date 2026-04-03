import { useNavigate } from "react-router-dom";

export default function CodeInsightDetail() {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  };

  const techStack = [
    { area: 'Frontend', techs: ['React 19', 'TypeScript', 'Vite', 'TailwindCSS', 'Zustand', 'CodeMirror 6', 'Framer Motion'], reason: '100+ step 실행 데이터 상태 관리 + 모바일 번들 최적화(Monaco→CodeMirror 6)' },
    { area: 'Backend', techs: ['Node.js', 'Fastify', 'Prisma', 'Zod'], reason: 'Express 대비 고성능 + 4개 시뮬레이터 프로세스 비동기 관리' },
    { area: 'Database', techs: ['PostgreSQL (Neon)'], reason: '프로덕션 동시 접속 지원 (SQLite → PostgreSQL 마이그레이션)' },
    { area: 'Simulators', techs: ['GDB (C)', 'Python 커스텀 트레이서', 'AST 기반 JS 변환', 'Java JDI + 커스텀 JAR'], reason: '각 언어 디버거 직접 구현 — 기존 라이브러리 미사용' },
    { area: 'Mobile', techs: ['Capacitor', 'Fastlane'], reason: 'Web → Android/iOS 크로스플랫폼 + 자동 배포' },
    { area: 'Infra', techs: ['Docker 멀티스테이지', 'Nginx', 'Render/Railway', 'pnpm monorepo'], reason: 'Node 20 + Python 3 + JDK 17 + GCC/GDB 통합 이미지 (4단계 멀티스테이지 빌드)' },
  ];

  const features = [
    {
      title: '메모리 레벨 시각화 (4개 언어)',
      description: 'C는 스택/힙/포인터, Python은 names/objects 참조 모델, JavaScript는 스코프 체인/이벤트 루프, Java는 JVM 메모리 모델 — 언어별 특성에 맞게 각각 렌더링',
    },
    {
      title: 'Lesson 모드 + Playground 모드',
      description: 'Lesson 모드: AI가 작성하고 사람이 검수한 원리 설명과 함께 사전 스크립트 기반 단계별 학습. Playground 모드: 직접 코드를 작성하고 실시간 시뮬레이터로 실행',
    },
    {
      title: '학습 기록 기반 AI 분석',
      description: '학습 진도, 완료 기록, 스트릭을 추적하고 공부한 기록을 바탕으로 AI가 학습 패턴을 분석. 퀴즈(O/X, 객관식)로 이해도 확인',
    },
    {
      title: '크로스플랫폼 배포',
      description: 'Web + PWA + Android(Capacitor) 지원. 한국어/영어/중국어 3개 국어, Google/GitHub/Kakao 소셜 로그인. Fastlane 자동 배포 파이프라인',
    },
  ];

  const achievements = [
    '2개월간 1인 풀스택 개발 — TypeScript 517개 파일, 74,700줄, 커밋 386회. 프론트엔드/백엔드/시뮬레이터 4개/모바일/인프라 전체',
    '4개 언어 디버거 에이전트 직접 구현 — C(GDB), Python(커스텀 트레이서), JavaScript(AST 기반), Java(JDI + 커스텀 JAR) — 완전히 다른 메모리 모델을 단일 시각화 포맷으로 정규화',
    'LessonPage(1042→276줄), MemoryPanel(1057→57줄), simulator.ts(516→4줄 re-export) 등 7단계 리팩토링 — 총 3,500줄 이상 분해',
    'Express→Fastify, Monaco→CodeMirror 6, SQLite→PostgreSQL 마이그레이션 3건 동시 진행 — 서비스 중단 없이 완료',
    'TypeScript strict 모드 — any 타입 전면 제거 (8차에 걸친 체계적 정리)',
    'Web + PWA + Android 크로스플랫폼 배포. MIT 라이선스 오픈소스 공개',
  ];

  const troubleshooting = [
    {
      problem: 'C 포인터 시각화 화살표가 잘못된 위치에 렌더링',
      cause: 'Framer Motion layout 애니메이션이 CSS transform 적용 → getBoundingClientRect() 좌표계 왜곡',
      solution: 'requestAnimationFrame → double rAF 시도 후 최종적으로 조상 체인 전체의 CSS transform 역산 적용',
      result: '브라우저 렌더링 파이프라인과 애니메이션 라이브러리 내부 동작 이해 기반으로 해결',
    },
    {
      problem: 'Docker 멀티런타임 이미지 빌드 10회+ 연속 실패',
      cause: 'Node.js + Python + JDK + GCC/GDB 4개 런타임을 단일 이미지에 통합 시 COPY 경로 오류, shared 패키지 빌드 순서, Prisma 클라이언트 생성 타이밍 충돌',
      solution: '4단계 멀티스테이지 빌드 설계 (base → dependencies → builder → production), JDK vs JRE 선택, Java 에이전트 JAR 복사 순서 정리',
      result: 'Node 20 + Python 3 + JDK 17 + GCC/GDB 통합 프로덕션 이미지 완성',
    },
    {
      problem: 'JavaScript 시뮬레이터 — 클래스, 클로저, async/await 시각화 불가',
      cause: '기존 라인 단위 디버깅 방식으로는 복잡한 구문의 스코프 추적 한계',
      solution: 'AST(추상 구문 트리) 기반 코드 변환으로 전면 재작성 — 블록 레벨 변수 감지, MAX_STEPS 기반 무한 루프 감지, 구조화된 힙 참조 파싱',
      result: '클래스/클로저/async 포함 복잡한 JavaScript 구문 정확 시각화',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          style={{
            color: '#78716c', fontSize: '0.875rem', background: 'none', border: 'none',
            cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}
        >
          ← 프로젝트 목록으로
        </button>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(212, 120, 156, 0.08)', color: '#d4789c', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1rem' }}>
            오픈소스 사이드 프로젝트
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#334155', marginBottom: '0.5rem' }}>CodeInsight</h1>
          <p style={{ fontSize: '1.25rem', color: '#d4789c', marginBottom: '1.5rem' }}>코드 실행 시각화 학습 플랫폼</p>
          <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '1.05rem' }}>
            C/Python/JavaScript/Java 4개 언어의 코드 실행 과정을 메모리 레벨에서 단계별로 시각화하는 인터랙티브 학습 플랫폼.
            각 언어의 디버거를 직접 구현하고, 언어별로 완전히 다른 메모리 모델을 단일 시각화 스키마로 정규화하는 파이프라인을 설계했습니다.
            2개월 · 74,700줄 · 커밋 386회 · Web + Android(테스트) 배포.
          </p>
        </div>

        {/* Motivation */}
        <div style={{ ...cardStyle, marginBottom: '2rem', borderLeft: '4px solid #e891b9' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>개발 동기</h2>
          <p style={{ color: '#64748b', lineHeight: '1.8' }}>
            직관적으로 이해가 안 되면 앞으로 못 나아가는 학습 스타일 때문에 시작한 프로젝트.
            C 포인터, Java 힙, JavaScript 클로저 — 개념을 외워서 넘어가는 게 안 되고 눈으로 보고 납득이 돼야 했습니다.
            Python Tutor 같은 기존 도구는 단일 언어만 지원했고, 제가 막힌 언어들을 커버하지 못했습니다.
            AI 시대일수록 "동작하는 코드"보다 "이해한 코드"가 중요하다는 믿음으로 직접 만들었습니다.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <a
            href="https://codeinsight.online/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '0.75rem 1.5rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            🌐 Live Demo
          </a>
          <a
            href="https://github.com/jammy0903/CodeInsight"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '0.75rem 1.5rem', backgroundColor: '#334155', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Tech Stack */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>기술 스택</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {techStack.map((row) => (
              <div key={row.area} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '80px', color: '#d4789c', fontWeight: '600', fontSize: '0.875rem', paddingTop: '0.25rem' }}>{row.area}</span>
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    {row.techs.map((tech) => (
                      <span key={tech} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(254, 242, 248, 0.8)', color: '#64748b', borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: '#a8a29e', fontSize: '0.8rem' }}>{row.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>주요 기능</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {features.map((feature) => (
              <div key={feature.title} style={cardStyle}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '600', color: '#d4789c', marginBottom: '0.75rem' }}>{feature.title}</h3>
                <p style={{ color: '#78716c', fontSize: '0.9rem', lineHeight: '1.7' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>주요 성과</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {achievements.map((achievement, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#16a34a', marginTop: '0.125rem', flexShrink: 0 }}>✓</span>
                <span style={{ color: '#64748b', lineHeight: '1.6' }}>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div style={{ ...cardStyle, marginBottom: '2rem', borderLeft: '4px solid #16a34a' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>오픈소스 공개</h2>
          <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '1.25rem' }}>
            개인 프로젝트 단계를 넘어 MIT 라이선스로 오픈소스 전환.
            단순히 코드를 공개하는 것이 아니라, 외부 개발자가 기여할 수 있는 환경을 설계했습니다.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: '보안 감사', detail: '샌드박스 탈출 취약점 패치, 하드코딩된 크레덴셜 제거, git history 민감정보 정리' },
              { label: '기여 가이드', detail: '개발 환경 셋업, 코드 컨벤션, 커밋 규칙, 프로젝트 아키텍처 문서화' },
              { label: '커뮤니티 표준', detail: 'Contributor Covenant 기반 Code of Conduct, Bug Report / Feature Request / PR 템플릿' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', minWidth: '80px', fontWeight: '600', fontSize: '0.875rem', paddingTop: '0.125rem' }}>{item.label}</span>
                <span style={{ color: '#78716c', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>트러블 슈팅</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {troubleshooting.map((item, idx) => (
              <div key={idx} style={{ ...cardStyle, borderLeft: '3px solid #f59e0b' }}>
                <h3 style={{ color: '#d97706', fontWeight: '600', marginBottom: '0.75rem' }}>{item.problem}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                  <p style={{ color: '#78716c' }}><span style={{ color: '#a8a29e' }}>원인:</span> {item.cause}</p>
                  <p style={{ color: '#78716c' }}><span style={{ color: '#a8a29e' }}>해결:</span> {item.solution}</p>
                  <p style={{ color: '#16a34a' }}><span style={{ color: '#a8a29e' }}>결과:</span> {item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
