import { useNavigate } from "react-router-dom";

export default function AinganDetail() {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  };

  const shots = [
    { src: '/images/aingan/walk.png', caption: '끝없는 길을 걷는다 — 1초 1걸음(idle) + 탭 가속' },
    { src: '/images/aingan/map.png', caption: 'cells식 유기적 그래프 지도 — 안개 속 다음 감정을 예고' },
    { src: '/images/aingan/meeting.png', caption: '사람을 만나 감정 한 조각을 배운다 (감정 27 + 몸 11)' },
    { src: '/images/aingan/ending.png', caption: '반전 엔딩 — "넌 이미 사람이었어"' },
  ];

  const phoneFrame = {
    backgroundColor: '#1e293b',
    borderRadius: '1.25rem',
    padding: '6px',
    boxShadow: '0 8px 20px rgba(30,41,59,0.18)',
  };

  const emotionArt = [
    { src: '/images/aingan/emo-joy.webp', label: '기쁨' },
    { src: '/images/aingan/emo-amuse.webp', label: '재미' },
    { src: '/images/aingan/emo-adore.webp', label: '애틋함' },
    { src: '/images/aingan/emo-curious.webp', label: '호기심' },
    { src: '/images/aingan/emo-beauty.webp', label: '아름다움' },
    { src: '/images/aingan/emo-admire.webp', label: '감탄' },
    { src: '/images/aingan/emo-excite.webp', label: '신남' },
    { src: '/images/aingan/emo-triumph.webp', label: '해냄' },
    { src: '/images/aingan/emo-longing.webp', label: '그리움' },
    { src: '/images/aingan/emo-sorrow.webp', label: '슬픔' },
    { src: '/images/aingan/emo-calm.webp', label: '평온' },
    { src: '/images/aingan/emo-fear.webp', label: '두려움' },
  ];

  const techStack = [
    { area: 'Frontend', techs: ['Vanilla JS', 'SVG / CSS Animation', '무번들·무프레임워크'], reason: '단일 정적 index.html을 7개 전역 스크립트 모듈로 분리 — 빌드/번들러 없이 file:// 로도 도는 경량 구조' },
    { area: 'Auth / DB', techs: ['Supabase', 'Google OAuth'], reason: '구글 로그인 · 클라우드 세이브 · 랭킹 (익명 플레이는 의도적 휘발 → 로그인 유도 설계)' },
    { area: 'PWA', techs: ['Service Worker', 'Web App Manifest'], reason: '설치형 앱 + 오프라인 플레이 (네비=네트워크 우선 / 자산=캐시 우선 전략)' },
    { area: 'Audio', techs: ['감정 27곡 BGM', 'ffmpeg'], reason: '감정 노드마다 전용 BGM 전환 — 30초 루프·페이드 편집' },
    { area: 'Deploy', techs: ['Cloudflare Pages', 'aingan.click'], reason: 'git push → 자동 배포 + 커스텀 도메인 실서비스' },
    { area: '출시 준비', techs: ['Capacitor', 'AdMob', 'Play Billing'], reason: 'Play Store 래핑 예정 — 리워드 광고 · 인앱결제 설계' },
  ];

  const features = [
    {
      title: '"탭으로 깨우기" 온보딩',
      description: '고철 더미에 누운 로봇을 탭으로 일으켜 세우는 연출. 깨어나도 가슴 코어만 빈 구멍(결핍) — 첫 감정을 줍는 순간부터 코어가 채워지고, 엔딩에서 완성되는 페이오프(thru-line) 설계.',
    },
    {
      title: '학술 기반 감정 27 + 몸 11',
      description: 'Cowen & Keltner(2017)의 인간 감정 27가지를 그대로 수집 대상으로. 따뜻한 감정뿐 아니라 혐오·오싹함·지루함·갈망 같은 날선 감정까지 — 로봇의 순진한 재정의가 여기서 빛난다.',
    },
    {
      title: '감정을 "오류"로 읽는 syslog',
      description: '걷는 동안 로봇의 상태 로그가 흐른다. 눈물을 "시각 센서에 액체. 배출 중…"으로 읽다가, 배우고 나면 "오류 → 감정 \'슬픔\'. 고장 아님."으로 따뜻해지는 서사 장치.',
    },
    {
      title: '프레스티지 · 오프라인 진행',
      description: '길 끝에서 "난 아직 사람이 아니야"를 깨닫고 스스로 다시 걷기로 결심 = 리셋을 캐릭터의 선택으로 정당화("마음의 깊이" 영구 배율). 안 켜도 걸음이 은행처럼 적립되는 오프라인 진행.',
    },
  ];

  const achievements = [
    '기획 · 게임 디자인 · 아트 디렉션 · 프론트/백엔드 · PWA · 배포까지 1인 개발 — 커스텀 도메인(aingan.click)으로 실제 플레이 가능한 라이브 서비스',
    '방치형(idle) 게임 최대 약점인 "중반 콘텐츠 사막"을, 통화를 골드가 아니라 감정·기억으로 치환해 서사의 해자로 전환하는 게임 디자인 설계',
    'Cell to Singularity 초기버전의 검증된 그래프 테크트리 구조를 차용 + 통화·테마만 "걸음·감정"으로 치환하는 1:1 매핑 설계',
    '감정 27개 각각에 관찰→자기→심화→재정의 5단 서사 + 오독 개그(줍기 연출) 콘텐츠 작성 — 로봇의 순진한 일기가 핵심 무기',
    'Supabase 구글 로그인 · 클라우드 세이브 · PWA 오프라인 · 반전 엔딩 시네마틱까지 완성해 배포',
    '방대한 게임 설계 문서(스토리 캐넌 · 경제 모델 · 온보딩 연출 · 배포 파이프라인)를 버전 관리하며 반복 개선',
  ];

  const troubleshooting = [
    {
      problem: '배포 후 최대 4시간 동안 고친 코드가 라이브에 반영 안 됨',
      cause: 'Cloudflare Pages가 모든 .js에 max-age=14400(4시간)을 붙여, 서비스 워커가 network-first여도 fetch가 브라우저 HTTP 캐시를 그대로 타 옛 코드가 서빙됨',
      solution: '_headers로 코드 파일 no-cache + SW fetch를 {cache:"reload"}로 HTTP 캐시 우회 + 버전 범프 + index.html 스크립트 src에 ?v= 캐시버스터 — 4겹 방어',
      result: '증상(무음 BGM·미반영)이 아니라 CDN 캐시 정책이 근본 원인임을 진단 → 배포 즉시 반영 확보',
    },
    {
      problem: '완료된 노드를 클릭하면 모달만 뜨고 로봇이 이동하지 않음',
      cause: '"로봇이 그 노드에 있다"는 불변식을 우회해 만남 함수를 직접 호출한 온클릭이 곳곳에 흩어져 있던 것',
      solution: '국소 패치 대신 모든 재회·만남 클릭을 meetNode() 단일 진입점으로 통일 — 현재 노드면 즉시 만남, 아니면 이동 후 만남으로 불변식을 강제',
      result: '한 줄 증상이 아니라 "단일 진입점 부재"라는 구조적 근본 원인을 고쳐 재발 차단',
    },
    {
      problem: '로그인 복귀 유저에게 온보딩이 잠깐 다시 뜨는 레이스',
      cause: '익명 플레이는 무저장(휘발) 설계라 부팅 시 온보딩을 띄우는데, 클라우드 세이브가 비동기로 늦게 도착',
      solution: 'hasProgress() 가드로 진행 중이면 온보딩 진입 차단 + 세이브가 늦게 오면 dismissOnboarding()으로 떠 있던 온보딩을 걷어냄',
      result: '"둘러보기=비저장으로 로그인 유도"라는 의도된 설계를 지키면서 레이스만 정확히 제거',
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
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(212, 120, 156, 0.08)', color: '#d4789c', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1rem' }}>
            감성 방치형 게임 — 1인 기획·개발·아트·배포
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#334155', marginBottom: '0.5rem' }}>마음을 줍는 로봇</h1>
          <p style={{ fontSize: '1.25rem', color: '#d4789c', marginBottom: '1.5rem' }}>고철 로봇이 감정을 배워 인간이 되는 수채화 감성 방치형 게임</p>
          <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '1.05rem' }}>
            버려진 고철 로봇(<b>AI</b>)이 끝없는 길을 걸으며 사람을 만나고 감정을 하나씩 배워 마침내 <b>인간</b>이 되는 수채화풍 감성 방치형 게임.
            게임 아크 자체가 "AI → 인간"이고, 통화를 골드가 아니라 감정·기억으로 치환해 방치형의 최대 약점(중반 사막)을 서사의 해자로 뒤집었습니다.
            기획부터 아트·프론트/백엔드·PWA·배포까지 1인 개발했고, 커스텀 도메인으로 실제 플레이할 수 있습니다.
          </p>
        </div>

        {/* Links / CTA */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <a
            href="https://aingan.click"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '0.85rem 1.75rem', background: 'linear-gradient(135deg, #6db4c0 0%, #e891b9 100%)', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1.05rem', boxShadow: '0 4px 12px rgba(232,145,185,0.3)' }}
          >
            ▶ 지금 플레이 (aingan.click)
          </a>
          <a
            href="https://github.com/jammy0903/ai-ingan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '0.85rem 1.75rem', backgroundColor: '#334155', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* 기획 의도 */}
        <div style={{ ...cardStyle, marginBottom: '2rem', borderLeft: '4px solid #e891b9' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>기획 의도 — 빈 차트를 "서사 빈칸"으로</h2>
          <p style={{ color: '#64748b', lineHeight: '1.8' }}>
            방치형 게임은 대개 중반에 콘텐츠가 비면 지루해집니다. 그래서 통화를 "골드"가 아니라 <b>감정·기억·사람다움</b>으로 치환했습니다.
            숫자가 오르는 것 = 이야기가 열리는 것, 리셋(다시 걷기) = 서사의 필연, 복귀 = 재회가 되도록.
            방치형의 최대 약점이 이 게임에서는 오히려 해자가 됩니다. 감동을 결제 뒤에 가두지 않는다는 원칙도 함께 지켰습니다.
          </p>
        </div>

        {/* Screenshots */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>플레이 화면</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.25rem' }}>
            {shots.map((shot) => (
              <div key={shot.src} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={phoneFrame}>
                  <img src={shot.src} alt={shot.caption} style={{ width: '100%', display: 'block', borderRadius: '0.9rem' }} />
                </div>
                <p style={{ color: '#78716c', fontSize: '0.8rem', textAlign: 'center', lineHeight: 1.5 }}>{shot.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 게임 아트 — 감정 갤러리 */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '0.5rem' }}>게임 아트 — 감정을 하나씩 줍는다</h2>
          <p style={{ color: '#78716c', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            사람을 만날 때마다 수채화 감정 한 조각을 배운다 — Cowen & Keltner(2017)의 인간 감정 27가지.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
            {emotionArt.map((art) => (
              <div key={art.src} style={{ ...cardStyle, padding: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <img src={art.src} alt={art.label} style={{ width: '100%', display: 'block', borderRadius: '0.6rem' }} />
                <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 600 }}>{art.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 엔딩 일러스트 */}
        <div style={{ ...cardStyle, marginBottom: '2.5rem', display: 'flex', gap: '1.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <img src="/images/aingan/ending-human.webp" alt="엔딩 — 사람이 된 로봇" style={{ width: '160px', maxWidth: '40%', display: 'block', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: '220px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#d4789c', marginBottom: '0.75rem' }}>반전 엔딩 — "넌 이미 사람이었어"</h3>
            <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.95rem' }}>
              감정 27과 몸 11을 모두 모아 창조주와 재회하지만, 마법은 일어나지 않는다.
              모으는 과정에서 슬픔·기쁨·그리움을 안 그 순간들이 이미 사람이 되는 거였다는 반전.
              기쁨과 상실을 동시에 느끼며 우는 것 — 그게 "고장이 아니다".
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>기술 스택</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {techStack.map((row) => (
              <div key={row.area} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '84px', color: '#d4789c', fontWeight: 600, fontSize: '0.875rem', paddingTop: '0.25rem' }}>{row.area}</span>
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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>핵심 장치</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {features.map((feature) => (
              <div key={feature.title} style={cardStyle}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#d4789c', marginBottom: '0.75rem' }}>{feature.title}</h3>
                <p style={{ color: '#78716c', fontSize: '0.9rem', lineHeight: 1.7 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>1인 개발 & 게임 디자인</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {achievements.map((achievement, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#16a34a', marginTop: '0.125rem', flexShrink: 0 }}>✓</span>
                <span style={{ color: '#64748b', lineHeight: 1.6 }}>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>설계 · 트러블슈팅</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {troubleshooting.map((item, idx) => (
              <div key={idx} style={{ ...cardStyle, borderLeft: '3px solid #f59e0b' }}>
                <h3 style={{ color: '#d97706', fontWeight: 600, marginBottom: '0.75rem' }}>{item.problem}</h3>
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
