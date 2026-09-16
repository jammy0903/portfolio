import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTrack, useTrackContent, useTrackPath } from "../data/track";

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
  const track = useTrack();
  const content = useTrackContent();
  const withTrack = useTrackPath();

  const isActive = (path: string) => {
    const full = withTrack(path);
    return path === "/" ? location.pathname === full : location.pathname.startsWith(full);
  };

  const links = (onNavigate?: () => void) => (
    <>
      {navItems.map((item) => (
        <Link
          aria-current={isActive(item.path) ? "page" : undefined}
          className={isActive(item.path) ? "is-active" : ""}
          key={item.path}
          onClick={onNavigate}
          to={withTrack(item.path)}
        >
          {item.label}
        </Link>
      ))}
      <a
        className="site-nav__resume"
        href={content.resume.url}
        onClick={onNavigate}
        rel="noopener"
        target="_blank"
      >
        이력서 PDF
        <span aria-hidden="true">↓</span>
      </a>
      {/* 같은 경력을 다른 직군으로 설명한 버전 — 어느 쪽을 보고 있는지 알 수 있게 둔다 */}
      <Link className="site-nav__switch" onClick={onNavigate} to={content.switchTo}>
        {content.switchLabel}
        <span aria-hidden="true">↗</span>
      </Link>
    </>
  );

  return (
    <nav className="site-nav" aria-label="주요 메뉴">
      <div className="site-nav__inner">
        <Link className="site-brand" to={withTrack("/")} onClick={() => setIsOpen(false)}>
          <span>SOJEONG.KIM</span>
          <small>{content.navRole}</small>
        </Link>

        <div className="site-nav__desktop">{links()}</div>

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
        <div className="site-nav__mobile" id="mobile-navigation" data-track={track}>
          {links(() => setIsOpen(false))}
        </div>
      )}
    </nav>
  );
}
