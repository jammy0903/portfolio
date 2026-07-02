import { useNavigate } from "react-router-dom";
import { projects } from "../data/profile";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>프로젝트</h1>
          <p style={{ color: '#78716c', fontSize: '1.125rem', marginBottom: '1rem' }}>클릭하여 상세 내용을 확인하세요</p>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#e891b9', margin: '0 auto' }}></div>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project) => {
            const isFeatured = 'featured' in project && project.featured;

            if (isFeatured) {
              const badge = 'badge' in project ? (project.badge as string) : 'LIVE';
              const links = project.links as { store?: string; live?: string; github?: string };
              return (
                <div
                  key={project.slug}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  style={{
                    gridColumn: '1 / -1',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    border: '1.5px solid #fbd9a8',
                    boxShadow: '0 8px 28px rgba(249, 168, 38, 0.18)',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(249, 168, 38, 0.28)';
                    e.currentTarget.style.borderColor = '#f9a826';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(249, 168, 38, 0.18)';
                    e.currentTarget.style.borderColor = '#fbd9a8';
                  }}
                >
                  {/* Thumbnail panel */}
                  <div style={{
                    background: project.thumbnail.gradient,
                    flex: '1 1 240px',
                    minHeight: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '5rem' }}>{project.thumbnail.emoji}</span>
                  </div>

                  {/* Info panel */}
                  <div style={{ flex: '2 1 360px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {/* LIVE badge */}
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      alignSelf: 'flex-start',
                      padding: '0.35rem 0.85rem',
                      backgroundColor: 'rgba(34, 197, 94, 0.12)',
                      color: '#15803d',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      marginBottom: '0.85rem',
                    }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.25)' }}></span>
                      {badge}
                    </span>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#334155', marginBottom: '0.4rem' }}>
                      {project.title}
                    </h2>
                    <p style={{ color: '#78716c', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                      {project.subtitle}
                    </p>
                    {/* Inline links */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {links.store && (
                        <a
                          href={links.store}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{ padding: '0.55rem 1.1rem', backgroundColor: '#4285F4', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}
                        >
                          🛒 크롬 웹스토어에서 설치
                        </a>
                      )}
                      {links.live && (
                        <a
                          href={links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{ padding: '0.55rem 1.1rem', backgroundColor: '#e891b9', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}
                        >
                          🎮 지금 플레이하기
                        </a>
                      )}
                      {links.github && (
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{ padding: '0.55rem 1.1rem', backgroundColor: '#334155', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            return (
            <div
              key={project.slug}
              onClick={() => navigate(`/projects/${project.slug}`)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: '1px solid transparent',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(212, 120, 156, 0.1)';
                e.currentTarget.style.borderColor = '#f0c6d8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {/* Thumbnail */}
              <div style={{
                background: project.thumbnail.gradient,
                height: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: '3.5rem' }}>{project.thumbnail.emoji}</span>
              </div>

              {/* Card Info */}
              <div style={{ padding: '1.25rem' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.6rem',
                  backgroundColor: 'rgba(212, 120, 156, 0.08)',
                  color: '#d4789c',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  marginBottom: '0.5rem',
                }}>
                  {project.type}
                </span>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#334155', marginBottom: '0.25rem' }}>
                  {project.title}
                </h2>
                <p style={{ color: '#78716c', fontSize: '0.875rem' }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
