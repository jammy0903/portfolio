import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "홈" },
  { path: "/about", label: "소개" },
  { path: "/experience", label: "경력" },
  { path: "/projects", label: "프로젝트" },
  { path: "/contact", label: "연락처" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="site-nav" aria-label="주요 메뉴">
      <div className="site-nav__inner">
        <Link className="site-brand" to="/" onClick={() => setIsOpen(false)}>
          <span>SOJEONG.KIM</span>
          <small>FULL-STACK DEVELOPER</small>
        </Link>

        <div className="site-nav__desktop">
          {navItems.map((item) => (
            <Link
              aria-current={isActive(item.path) ? "page" : undefined}
              className={isActive(item.path) ? "is-active" : ""}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          className="site-nav__toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      {isOpen && (
        <div className="site-nav__mobile" id="mobile-navigation">
          {navItems.map((item) => (
            <Link
              aria-current={isActive(item.path) ? "page" : undefined}
              className={isActive(item.path) ? "is-active" : ""}
              key={item.path}
              onClick={() => setIsOpen(false)}
              to={item.path}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
