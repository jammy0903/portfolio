import { projects } from "../data/profile";

export default function Projects() {
  const cardStyle = {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '1rem',
    overflow: 'hidden',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#334155',
    color: 'white',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Projects</h1>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} style={cardStyle}>
              {/* Project Content */}
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                      {project.type}
                    </span>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{project.title}</h2>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={buttonStyle}
                      >
                        <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {(project.links as Record<string, string>).news && (
                      <a
                        href={(project.links as Record<string, string>).news}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={buttonStyle}
                      >
                        News
                      </a>
                    )}
                  </div>
                </div>

                <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>{project.description}</p>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} style={{ padding: '0.25rem 0.75rem', backgroundColor: '#334155', color: '#cbd5e1', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', borderRadius: '0.75rem', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '1rem' }}>Highlights</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: 0, padding: 0, listStyle: 'none' }}>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1' }}>
                        <span style={{ color: '#4ade80', marginTop: '0.125rem' }}>✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
