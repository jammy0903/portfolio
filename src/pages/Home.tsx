import { Link } from "react-router-dom";
import { profile, skills } from "../data/profile";

export default function Home() {
  const buttonBase = {
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.2s',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5rem 1rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
        <p style={{ color: '#60a5fa', fontSize: '1.125rem', marginBottom: '1rem' }}>안녕하세요</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
          {profile.name}
          <span style={{ color: '#94a3b8', fontSize: '1.5rem', marginLeft: '0.75rem' }}>입니다</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#60a5fa', fontWeight: '500', marginBottom: '1.5rem' }}>
          {profile.title}
        </p>
        <p style={{ fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '2rem', lineHeight: '1.75' }}>
          "{profile.tagline}"
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...buttonBase, backgroundColor: '#1e293b', color: 'white' }}
          >
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            style={{ ...buttonBase, backgroundColor: '#2563eb', color: 'white' }}
          >
            Contact Me
          </a>
          <Link
            to="/experience"
            style={{ ...buttonBase, border: '1px solid #475569', color: 'white', backgroundColor: 'transparent' }}
          >
            View Experience
          </Link>
        </div>
      </div>

      {/* Tech Stack */}
      <div style={{ width: '100%', maxWidth: '56rem', margin: '2rem auto 0' }}>
        <h2 style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
          Tech Stack
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          {[...skills.frontend.slice(0, 3), ...skills.backend.slice(0, 3), ...skills.infra.slice(0, 2)].map(
            (skill) => (
              <span
                key={skill}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#1e293b', color: '#cbd5e1', borderRadius: '0.5rem', fontSize: '0.875rem' }}
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
