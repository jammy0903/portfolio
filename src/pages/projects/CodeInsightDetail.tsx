import { useNavigate } from "react-router-dom";

export default function CodeInsightDetail() {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '1rem',
    padding: '2rem',
  };

  const techStack = [
    { area: 'Frontend', techs: ['React 18', 'TypeScript', 'Zustand'], reason: '대규모 실행 데이터(100+ step) 상태 관리 최적화' },
    { area: 'Backend', techs: ['Node.js', 'Express', 'Prisma'], reason: '4개 시뮬레이터 프로세스 비동기 관리' },
    { area: 'Database', techs: ['PostgreSQL'], reason: '사용자별 코드 제출/실행 이력 관리' },
    { area: 'Simulators', techs: ['GCC', 'Python sys.settrace', 'Node.js VM', 'Java JDI'], reason: '언어별 실제 컴파일러/인터프리터 연동' },
    { area: 'Infra', techs: ['Docker', 'pnpm monorepo'], reason: '안전한 샌드박스 실행 + 4개 패키지 효율적 관리' },
  ];

  const features = [
    {
      title: '단계별 코드 실행 추적',
      description: '코드 실행을 한 줄 단위로 추적하며, 각 step에서의 변수 상태·호출 스택·메모리 변화를 실시간 동기화하여 시각화',
    },
    {
      title: '메모리 구조 시각화',
      description: 'Stack/Heap/Data 영역을 인터랙티브 다이어그램으로 표현하고, 포인터 참조 관계까지 시각화하여 추상적 개념의 직관적 이해 지원',
    },
    {
      title: '다중 언어 시뮬레이터 통합 아키텍처',
      description: 'C(GCC subprocess), Python(sys.settrace), JavaScript(Node.js VM), Java(JDI) 4개 언어의 실행 엔진을 공통 인터페이스로 추상화. 언어 추가 시 시뮬레이터 모듈만 구현하면 되는 확장 가능한 플러그인 구조 설계',
    },
    {
      title: '통합 학습 환경 (Playground)',
      description: '코드 에디터 + 실행 제어 + 시각화 패널을 단일 화면에 통합. 코드 수정 즉시 실행 결과를 확인할 수 있는 인터랙티브 학습 루프 구현',
    },
  ];

  const achievements = [
    '4개 언어 시뮬레이터를 공통 인터페이스로 통합하는 플러그인 아키텍처 설계 → 신규 언어 추가 시 개발 비용 최소화',
    'Docker 샌드박스 기반 코드 실행 환경 구축 → 악성 코드 실행 방지 및 서버 안정성 확보',
    'Zustand 도메인별 스토어 분리로 100+ step 실행 데이터 처리 시 불필요한 리렌더링 30% 감소',
    'pnpm monorepo(frontend/backend/shared/simulators) 구조로 4개 패키지 간 타입 공유 및 빌드 효율화',
  ];

  const troubleshooting = [
    {
      problem: '대량 실행 데이터(100+ step) 로드 시 UI 프리징',
      cause: '매 step마다 전체 상태 리렌더링 발생',
      solution: 'Zustand 스토어 도메인별 분리 + selector 최적화',
      result: '렌더링 횟수 30% 감소',
    },
    {
      problem: 'GCC 서브프로세스 비정상 종료 시 좀비 프로세스',
      cause: '타임아웃 없이 프로세스 생성',
      solution: '프로세스 타임아웃(5초) + 강제 종료 메커니즘 도입',
      result: '서버 메모리 안정화',
    },
    {
      problem: '시뮬레이터별 출력 포맷 불일치',
      cause: '4개 언어 각각 다른 데이터 구조 반환',
      solution: '공통 ExecutionStep 인터페이스 정의 + 어댑터 패턴 적용',
      result: '프론트엔드 코드 통일',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          style={{
            color: '#94a3b8', fontSize: '0.875rem', background: 'none', border: 'none',
            cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}
        >
          ← 프로젝트 목록으로
        </button>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1rem' }}>
            사이드 프로젝트 (진행 중)
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>CodeInsight</h1>
          <p style={{ fontSize: '1.25rem', color: '#60a5fa', marginBottom: '1.5rem' }}>코딩교육 시각화 플랫폼</p>
          <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem' }}>
            C/Python/JS/Java 코드의 실행 과정을 단계별로 추적하고 메모리 구조를 인터랙티브하게 시각화하는 웹 기반 코딩교육 플랫폼.
            4개 언어 시뮬레이터를 단일 아키텍처로 통합 설계.
          </p>
        </div>

        {/* Motivation */}
        <div style={{ ...cardStyle, marginBottom: '2rem', borderLeft: '4px solid #3b82f6' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>개발 동기</h2>
          <p style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
            C 프로그래밍 학습 시 Stack/Heap/포인터 등 메모리 구조를 직관적으로 이해할 수 있는 교육 도구가 부재.
            기존 도구(Python Tutor 등)는 C 언어 지원이 제한적이고, 실제 GCC 컴파일 환경과 괴리가 존재하는 문제를 해결하기 위해 개발.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <a
            href="https://github.com/jammy0903/C-OSINE"
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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>기술 스택</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {techStack.map((row) => (
              <div key={row.area} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '80px', color: '#60a5fa', fontWeight: '600', fontSize: '0.875rem', paddingTop: '0.25rem' }}>{row.area}</span>
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    {row.techs.map((tech) => (
                      <span key={tech} style={{ padding: '0.25rem 0.75rem', backgroundColor: '#334155', color: '#cbd5e1', borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{row.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>주요 기능</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {features.map((feature) => (
              <div key={feature.title} style={cardStyle}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '600', color: '#60a5fa', marginBottom: '0.75rem' }}>{feature.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>주요 성과</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {achievements.map((achievement, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#4ade80', marginTop: '0.125rem', flexShrink: 0 }}>✓</span>
                <span style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>트러블 슈팅</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {troubleshooting.map((item, idx) => (
              <div key={idx} style={{ ...cardStyle, borderLeft: '3px solid #f59e0b' }}>
                <h3 style={{ color: '#fbbf24', fontWeight: '600', marginBottom: '0.75rem' }}>{item.problem}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                  <p style={{ color: '#94a3b8' }}><span style={{ color: '#64748b' }}>원인:</span> {item.cause}</p>
                  <p style={{ color: '#94a3b8' }}><span style={{ color: '#64748b' }}>해결:</span> {item.solution}</p>
                  <p style={{ color: '#4ade80' }}><span style={{ color: '#64748b' }}>결과:</span> {item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
