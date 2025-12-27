import { profile } from "../data/profile";

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '42rem', margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Contact Me</h1>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto 1.5rem' }}></div>
          <p style={{ color: '#94a3b8' }}>언제든 연락주세요!</p>
        </div>

        {/* Contact Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            style={{ display: 'block', backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: '0.75rem', padding: '1.5rem', textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                📧
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>Email</p>
                <p style={{ color: 'white', fontWeight: '500', margin: 0 }}>{profile.email}</p>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${profile.phone}`}
            style={{ display: 'block', backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: '0.75rem', padding: '1.5rem', textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(34, 197, 94, 0.2)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                📱
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>Phone</p>
                <p style={{ color: 'white', fontWeight: '500', margin: 0 }}>{profile.phone}</p>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: '0.75rem', padding: '1.5rem', textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg style={{ width: '1.5rem', height: '1.5rem', color: '#a855f7' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>GitHub</p>
                <p style={{ color: 'white', fontWeight: '500', margin: 0 }}>github.com/jammy0903</p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: '0.75rem', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(249, 115, 22, 0.2)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                📍
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>Location</p>
                <p style={{ color: 'white', fontWeight: '500', margin: 0 }}>{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: '#64748b' }}>새로운 기회와 협업을 환영합니다</p>
        </div>
      </div>
    </div>
  );
}
