import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "경력" },
  { path: "/projects", label: "프로젝트" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: 'rgba(254, 247, 250, 0.92)', borderBottom: '1px solid #fce4ec' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#d4789c', textDecoration: 'none' }}>
            SJ.Kim
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center" style={{ gap: '2rem' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: location.pathname === item.path ? '#d4789c' : '#78716c',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ padding: '0.5rem', color: '#78716c', background: 'none', border: 'none', cursor: 'pointer' }}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#fef7fa', borderBottom: '1px solid #fce4ec' }}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: location.pathname === item.path ? '#d4789c' : '#78716c',
                  backgroundColor: location.pathname === item.path ? 'rgba(212, 120, 156, 0.06)' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
