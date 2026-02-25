import { experience } from "../data/profile";

export default function Experience() {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>Experience</h1>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#e891b9', margin: '0 auto' }}></div>
        </div>

        {/* Work Experience */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={cardStyle}>
            {/* Company Header */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '0.25rem' }}>{experience.company}</h2>
                <p style={{ color: '#78716c' }}>{experience.companyDesc}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#d4789c', fontWeight: '500' }}>{experience.position}</p>
                <p style={{ color: '#a8a29e' }}>{experience.period} ({experience.duration})</p>
              </div>
            </div>

            {/* Project Info */}
            <div style={{ backgroundColor: 'rgba(254, 242, 248, 0.6)', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem' }}>{experience.project}</h3>
              <p style={{ color: '#78716c', marginBottom: '1rem' }}>{experience.role}</p>
              <p style={{ color: '#a8a29e', fontSize: '0.875rem' }}>{experience.scale}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {experience.techStack.map((tech) => (
                  <span key={tech} style={{ padding: '0.25rem 0.5rem', backgroundColor: 'white', color: '#64748b', borderRadius: '0.25rem', fontSize: '0.75rem', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#334155', marginBottom: '1rem' }}>주요 성과</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experience.achievements.map((achievement, index) => (
                <div key={index} style={{ borderLeft: '2px solid #e891b9', paddingLeft: '1rem' }}>
                  <h4 style={{ color: '#334155', fontWeight: '500', marginBottom: '0.5rem' }}>{achievement.title}</h4>
                  <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <p style={{ color: '#78716c' }}>
                      <span style={{ color: '#a8a29e' }}>문제:</span> {achievement.problem}
                    </p>
                    <p style={{ color: '#78716c' }}>
                      <span style={{ color: '#a8a29e' }}>해결:</span> {achievement.solution}
                    </p>
                    <p style={{ color: '#16a34a' }}>
                      <span style={{ color: '#a8a29e' }}>결과:</span> {achievement.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* News */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #fce4ec' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e', marginBottom: '0.75rem' }}>언론 보도</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {experience.news.map((news) => (
                  <a
                    key={news.title}
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(212, 120, 156, 0.06)', color: '#d4789c', borderRadius: '0.5rem', fontSize: '0.875rem', textDecoration: 'none' }}
                  >
                    {news.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
