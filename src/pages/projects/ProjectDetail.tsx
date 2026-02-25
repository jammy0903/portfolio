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
          <h1 style={{ fontSize: '2rem', color: '#334155', marginBottom: '1rem' }}>프로젝트를 찾을 수 없습니다</h1>
          <button onClick={() => navigate('/projects')} style={{ color: '#d4789c', background: 'none', border: 'none', cursor: 'pointer' }}>
            ← 프로젝트 목록으로
          </button>
        </div>
      </div>
    );
  }

  const links = project.links as { github?: string; notion?: string };
  const images = 'images' in project ? (project.images as Array<{ src: string; caption: string }>) : null;

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
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
          style={{ color: '#78716c', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          ← 프로젝트 목록으로
        </button>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(212, 120, 156, 0.08)', color: '#d4789c', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1rem' }}>
            {project.type}
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#334155', marginBottom: '0.5rem' }}>{project.title}</h1>
          <p style={{ fontSize: '1.25rem', color: '#d4789c', marginBottom: '1.5rem' }}>{project.subtitle}</p>
          <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '1.05rem' }}>{project.description}</p>
        </div>

        {/* Links */}
        {(links.github || links.notion) && (
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
            {links.notion && (
              <a href={links.notion} target="_blank" rel="noopener noreferrer" style={{ ...buttonStyle, backgroundColor: '#000' }}>
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 100 100">
                  <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"/>
                  <path d="M61.35 0.227l-55.333 4.087C0.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zM71.867 30.56c0.39 1.75 0 3.5 -1.75 3.7l-2.92 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.077 1.36s0 3.5 -4.853 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L20.91 35.03c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l14.433 -0.86z" fill="white"/>
                </svg>
                Notion
              </a>
            )}
          </div>
        )}

        {/* Tech Stack */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>기술 스택</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techStack.map((tech) => (
              <span key={tech} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(254, 242, 248, 0.8)', color: '#64748b', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>Highlights</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.highlights.map((highlight, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#16a34a', marginTop: '0.125rem', flexShrink: 0 }}>✓</span>
                <span style={{ color: '#64748b', lineHeight: '1.6' }}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        {images && (
          <div style={{ ...cardStyle }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1.5rem' }}>Screenshots</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {images.map((img, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <img
                    src={img.src}
                    alt={img.caption}
                    style={{ width: '100%', borderRadius: '0.75rem', border: '1px solid rgba(0,0,0,0.06)' }}
                  />
                  <p style={{ color: '#78716c', fontSize: '0.85rem', textAlign: 'center' }}>{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
