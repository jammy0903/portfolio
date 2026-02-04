import { useNavigate } from "react-router-dom";
import { projects } from "../data/profile";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>프로젝트</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginBottom: '1rem' }}>클릭하여 상세 내용을 확인하세요</p>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project) => (
            <div
              key={project.slug}
              onClick={() => navigate(`/projects/${project.slug}`)}
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: '1px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
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
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  color: '#60a5fa',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  marginBottom: '0.5rem',
                }}>
                  {project.type}
                </span>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>
                  {project.title}
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
