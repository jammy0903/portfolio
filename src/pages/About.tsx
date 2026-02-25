import { profile, skills, education } from "../data/profile";

export default function About() {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  };

  const skillBadgeBase = {
    padding: '0.375rem 0.75rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    display: 'inline-block',
    margin: '0.25rem',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '3rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>About Me</h1>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#e891b9', margin: '0 auto' }}></div>
        </div>

        {/* Profile Section */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '0.5rem' }}>
            {profile.name}
            <span style={{ color: '#78716c', fontSize: '1rem', marginLeft: '0.5rem' }}>({profile.nameEn})</span>
          </h2>
          <p style={{ color: '#d4789c', fontWeight: '500', marginBottom: '1rem' }}>{profile.title}</p>

          <div style={{ marginBottom: '1rem', color: '#64748b' }}>
            <p style={{ marginBottom: '0.5rem' }}>📍 {profile.location}</p>
            <p style={{ marginBottom: '0.5rem' }}>📧 {profile.email}</p>
            <p>🐙 <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: '#d4789c' }}>github.com/jammy0903</a></p>
          </div>

          <p style={{ color: '#64748b', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{profile.summary}</p>
        </div>

        {/* Core Strengths */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>Core Strengths</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={cardStyle}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem' }}>실시간 데이터 최적화</h3>
              <p style={{ color: '#78716c', fontSize: '0.9rem' }}>WebSocket 배치 매니저 설계, 우선순위 큐 구현으로 렌더링 부하 80% 감소</p>
            </div>
            <div style={cardStyle}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔧</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem' }}>레거시 리팩토링</h3>
              <p style={{ color: '#78716c', fontSize: '0.9rem' }}>문서 없는 코드 분석, Context 분리, CRA→Vite 전환으로 빌드 12배 개선</p>
            </div>
            <div style={cardStyle}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎨</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem' }}>UI/UX 설계</h3>
              <p style={{ color: '#78716c', fontSize: '0.9rem' }}>Figma 와이어프레임, 반응형 웹 구현으로 고객사 재계약 기여</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginBottom: '0.75rem' }}>Frontend</h3>
              <div>
                {skills.frontend.map((skill) => (
                  <span key={skill} style={{ ...skillBadgeBase, backgroundColor: 'rgba(212, 120, 156, 0.08)', color: '#c4688c' }}>{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginBottom: '0.75rem' }}>Backend</h3>
              <div>
                {skills.backend.map((skill) => (
                  <span key={skill} style={{ ...skillBadgeBase, backgroundColor: 'rgba(34, 197, 94, 0.08)', color: '#16a34a' }}>{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginBottom: '0.75rem' }}>Infrastructure</h3>
              <div>
                {skills.infra.map((skill) => (
                  <span key={skill} style={{ ...skillBadgeBase, backgroundColor: 'rgba(168, 85, 247, 0.08)', color: '#7c3aed' }}>{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginBottom: '0.75rem' }}>Security</h3>
              <div>
                {skills.security.map((skill) => (
                  <span key={skill} style={{ ...skillBadgeBase, backgroundColor: 'rgba(239, 68, 68, 0.08)', color: '#dc2626' }}>{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginBottom: '0.75rem' }}>Tools</h3>
              <div>
                {skills.tools.map((skill) => (
                  <span key={skill} style={{ ...skillBadgeBase, backgroundColor: 'rgba(249, 115, 22, 0.08)', color: '#ea580c' }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Training */}
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>Education & Training</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {education.map((edu, index) => (
              <div key={index} style={{ ...cardStyle }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#334155', marginBottom: '0.25rem' }}>{edu.school}</h3>
                    <p style={{ color: '#78716c' }}>{edu.major}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: '#a8a29e', marginBottom: '0.25rem' }}>{edu.period}</p>
                    <span style={{ display: 'inline-block', padding: '0.125rem 0.5rem', backgroundColor: 'rgba(212, 120, 156, 0.08)', color: '#d4789c', borderRadius: '0.25rem', fontSize: '0.875rem' }}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
