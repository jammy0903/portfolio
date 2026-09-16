import { Link } from "react-router-dom";
import { experience, formatCareerDuration, profile } from "../data/profile";
import { useTrackContent, useTrackPath } from "../data/track";

export default function Home() {
  const content = useTrackContent();
  const withTrack = useTrackPath();

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            서울 · 새로운 기회를 찾고 있습니다
          </p>
          <h1 id="home-title">
            {content.heroTitle[0]}
            <span>{content.heroTitle[1]}</span>
          </h1>
          <p className="home-hero__role">{content.role}</p>

          {/* 채용 스크리닝에서 시선이 가장 먼저 닿는 정보 — 회사·기간·역할 */}
          <dl className="home-hero__facts">
            {content.heroFacts.map((fact) => (
              <div key={fact.dt}>
                <dt>{fact.dt}</dt>
                <dd>{fact.dd}</dd>
              </div>
            ))}
            <div>
              <dt>기간</dt>
              <dd>
                {experience.period} · {formatCareerDuration(experience.startDate)}
              </dd>
            </div>
          </dl>

          <p className="home-hero__summary">{content.heroSummary}</p>

          <div className="home-actions">
            <Link className="button button--primary" to={withTrack("/experience")}>
              업무 성과 보기
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button--secondary" to={withTrack("/projects")}>
              프로젝트 보기
            </Link>
            <a className="button button--ghost" href={`mailto:${profile.email}`}>
              이메일
            </a>
          </div>
        </div>

        <div className="system-card" aria-label="산업 IoT 데이터 처리 흐름">
          <div className="system-card__header">
            <span>DATA FLOW</span>
            <span className="system-card__status">실무 경험</span>
          </div>
          <div className="system-flow">
            <div className="system-node">
              <span className="system-node__icon" aria-hidden="true">01</span>
              <div>
                <strong>현장 장비</strong>
                <span>센서 · 차단기 · 게이트웨이</span>
              </div>
            </div>
            <span className="system-flow__line" aria-hidden="true" />
            <div className="system-node">
              <span className="system-node__icon" aria-hidden="true">02</span>
              <div>
                <strong>실시간 처리</strong>
                <span>MQTT · FastAPI · WebSocket</span>
              </div>
            </div>
            <span className="system-flow__line" aria-hidden="true" />
            <div className="system-node system-node--accent">
              <span className="system-node__icon" aria-hidden="true">03</span>
              <div>
                <strong>업무에 쓰이는 제품</strong>
                <span>모니터링 · 알림 · 의사결정</span>
              </div>
            </div>
          </div>
          <p className="system-card__note">{content.directionLead}</p>
        </div>
      </section>

      <section className="metric-strip" aria-label="핵심 성과">
        {content.metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>
              {metric.label}
              <small className="metric__basis">{metric.basis}</small>
            </span>
          </div>
        ))}
      </section>
      <p className="metric-strip__note">회사 내부 개발·운영 측정 기준</p>

      <section className="home-section" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">FEATURED WORK</p>
            <h2 id="featured-title">주요 작업</h2>
          </div>
          <Link to={withTrack("/projects")}>전체 프로젝트 보기 →</Link>
        </div>

        <div className="featured-grid">
          {content.featured.map((work, index) => (
            <Link className="work-card" to={withTrack(work.to)} key={work.title}>
              <div className="work-card__number">0{index + 1}</div>
              <p>{work.eyebrow}</p>
              <h3>{work.title}</h3>
              <span className="work-card__description">{work.description}</span>
              <span className="work-card__proof">{work.proof}</span>
              <span className="work-card__link">자세히 보기 →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="direction-section" aria-labelledby="direction-title">
        <div className="direction-section__intro">
          <p className="section-kicker">CURRENT FOCUS</p>
          <h2 id="direction-title">{content.directionTitle}</h2>
          <p>{content.directionLead}</p>
        </div>
        <div className="direction-grid">
          <article className="direction-card">
            <span className="direction-card__label">{content.foundationsLabel}</span>
            <h3>해 온 것</h3>
            <ul>
              {content.foundations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="direction-card direction-card--next">
            <span className="direction-card__label">{content.focusLabel}</span>
            <h3>이어갈 것</h3>
            <ul>
              {content.focus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="home-contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">CONTACT</p>
          <h2 id="contact-title">{content.contactTitle}</h2>
        </div>
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          {profile.email}
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
