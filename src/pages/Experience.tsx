import { experience, education } from "../data/profile";

export default function Experience() {
  const cardStyle = {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '1rem',
    padding: '2rem',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Experience</h1>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
        </div>

        {/* Work Experience */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={cardStyle}>
            {/* Company Header */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>{experience.company}</h2>
                <p style={{ color: '#94a3b8' }}>{experience.companyDesc}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#60a5fa', fontWeight: '500' }}>{experience.position}</p>
                <p style={{ color: '#64748b' }}>{experience.period} ({experience.duration})</p>
              </div>
            </div>

            {/* Project Info */}
            <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>{experience.project}</h3>
              <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>{experience.role}</p>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{experience.scale}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {experience.techStack.map((tech) => (
                  <span key={tech} style={{ padding: '0.25rem 0.5rem', backgroundColor: '#334155', color: '#cbd5e1', borderRadius: '0.25rem', fontSize: '0.75rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>주요 성과</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experience.achievements.map((achievement, index) => (
                <div key={index} style={{ borderLeft: '2px solid #3b82f6', paddingLeft: '1rem' }}>
                  <h4 style={{ color: 'white', fontWeight: '500', marginBottom: '0.5rem' }}>{achievement.title}</h4>
                  <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <p style={{ color: '#94a3b8' }}>
                      <span style={{ color: '#64748b' }}>문제:</span> {achievement.problem}
                    </p>
                    <p style={{ color: '#94a3b8' }}>
                      <span style={{ color: '#64748b' }}>해결:</span> {achievement.solution}
                    </p>
                    <p style={{ color: '#4ade80' }}>
                      <span style={{ color: '#64748b' }}>결과:</span> {achievement.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* News */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #334155' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '0.75rem' }}>언론 보도</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {experience.news.map((news) => (
                  <a
                    key={news.title}
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#334155', color: '#cbd5e1', borderRadius: '0.5rem', fontSize: '0.875rem', textDecoration: 'none' }}
                  >
                    {news.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Education & Training</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {education.map((edu, index) => (
              <div key={index} style={{ ...cardStyle, padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '0.25rem' }}>{edu.school}</h3>
                    <p style={{ color: '#94a3b8' }}>{edu.major}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: '#64748b', marginBottom: '0.25rem' }}>{edu.period}</p>
                    <span style={{ display: 'inline-block', padding: '0.125rem 0.5rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '0.25rem', fontSize: '0.875rem' }}>
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
