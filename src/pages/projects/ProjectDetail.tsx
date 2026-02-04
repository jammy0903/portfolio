import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../../data/profile";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>프로젝트를 찾을 수 없습니다</h1>
          <button onClick={() => navigate('/projects')} style={{ color: '#60a5fa', background: 'none', border: 'none', cursor: 'pointer' }}>
            ← 프로젝트 목록으로
          </button>
        </div>
      </div>
    );
  }

  const cardStyle = {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '1rem',
    padding: '2rem',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#334155',
    color: 'white',
    borderRadius: '0.5rem',
    textDecoration: 'none' as const,
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    gap: '0.5rem',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          style={{ color: '#94a3b8', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          ← 프로젝트 목록으로
        </button>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1rem' }}>
            {project.type}
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>{project.title}</h1>
          <p style={{ fontSize: '1.25rem', color: '#60a5fa', marginBottom: '1.5rem' }}>{project.subtitle}</p>
          <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem' }}>{project.description}</p>
        </div>

        {/* Links */}
        {project.links.github && (
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
              <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        )}

        {/* Tech Stack */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>기술 스택</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techStack.map((tech) => (
              <span key={tech} style={{ padding: '0.25rem 0.75rem', backgroundColor: '#334155', color: '#cbd5e1', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div style={{ ...cardStyle }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Highlights</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.highlights.map((highlight, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#4ade80', marginTop: '0.125rem', flexShrink: 0 }}>✓</span>
                <span style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
