import { Link } from "react-router-dom";
import { profile } from "../data/profile";

const metrics = [
  { value: "470대", label: "IoT 장비 실시간 운영" },
  { value: "80%", label: "불필요한 렌더링 감소" },
  { value: "12배", label: "빌드 속도 개선" },
  { value: "1인", label: "분석부터 배포까지 담당" },
];

const featuredWork = [
  {
    eyebrow: "실무 프로젝트",
    title: "산업 IoT 모니터링 대시보드",
    description:
      "MQTT부터 WebSocket, 데이터 저장, 고객용 UI까지 470대 장비의 운영 흐름을 1인으로 개선했습니다.",
    proof: "B2B 운영 · 실시간 장애 알림 · 24/7 안정화",
    to: "/experience",
  },
  {
    eyebrow: "데이터 아키텍처",
    title: "멀티버킷 라우팅 전환",
    description:
      "운영 중인 시계열 데이터 구조를 5단계로 분해해, 중단과 롤백 위험을 통제한 점진적 마이그레이션입니다.",
    proof: "55대 백필 · 조회 경로 25곳 통합 · 단계별 롤백",
    to: "/projects/multibucket-architecture",
  },
  {
    eyebrow: "개인 프로젝트",
    title: "memedics 데이터 파이프라인",
    description:
      "자동 수집은 후보만 제안하고 사람의 승인을 거치게 설계했습니다. 벡터 검색과 서버 API 경계도 함께 구현했습니다.",
    proof: "Human-in-the-loop · pgvector · 자동 수집",
    to: "/projects/memedics",
  },
];

const foundations = [
  "현장 장비와 웹 서비스를 잇는 MQTT·WebSocket 파이프라인",
  "React·FastAPI 기반 B2B 제품 개발과 운영",
  "권한·보안·배포·장애 대응까지 포함한 엔드투엔드 경험",
];

const currentFocus = [
  "사내 문서와 운영 데이터를 찾고 답하는 RAG 서비스",
  "사람의 승인을 거치는 반복 업무 자동화",
  "Azure 환경에서 배포·권한·모니터링까지 연결하기",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            서울 · 새로운 기회를 찾고 있습니다
          </p>
          <h1 id="home-title">
            현장 데이터를
            <span>운영 가능한 제품으로.</span>
          </h1>
          <p className="home-hero__role">{profile.title}</p>
          <p className="home-hero__summary">{profile.tagline}</p>

          <div className="home-actions">
            <Link className="button button--primary" to="/experience">
              업무 성과 보기
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button--secondary" to="/projects">
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
          <p className="system-card__note">
            이 운영 경험을 바탕으로 AI 업무자동화 영역을 넓혀가고 있습니다.
          </p>
        </div>
      </section>

      <section className="metric-strip" aria-label="핵심 성과">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="home-section" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">FEATURED PROJECTS</p>
            <h2 id="featured-title">주요 프로젝트</h2>
          </div>
          <Link to="/projects">전체 프로젝트 보기 →</Link>
        </div>

        <div className="featured-grid">
          {featuredWork.map((work, index) => (
            <Link className="work-card" to={work.to} key={work.title}>
              <div className="work-card__number">0{index + 1}</div>
              <p>{work.eyebrow}</p>
              <h3>{work.title}</h3>
              <span className="work-card__description">{work.description}</span>
              <span className="work-card__proof">{work.proof}</span>
              <span className="work-card__link">프로젝트 자세히 보기 →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="direction-section" aria-labelledby="direction-title">
        <div className="direction-section__intro">
          <p className="section-kicker">CURRENT FOCUS</p>
          <h2 id="direction-title">산업 IoT 경험을 AI 업무자동화로 넓히고 있습니다.</h2>
          <p>
            현장에서 쌓은 데이터 처리·권한·배포·장애 대응 경험을 바탕으로,
            반복 업무를 줄이는 AI 제품을 공부하고 만들고 있습니다.
          </p>
        </div>
        <div className="direction-grid">
          <article className="direction-card">
            <span className="direction-card__label">지금까지의 경험</span>
            <h3>운영하며 익힌 것</h3>
            <ul>
              {foundations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="direction-card direction-card--next">
            <span className="direction-card__label">현재 집중하는 분야</span>
            <h3>공부하고 만드는 것</h3>
            <ul>
              {currentFocus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="home-contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">CONTACT</p>
          <h2 id="contact-title">산업 데이터와 업무 흐름을 제품으로 만드는 일을 이어가고 싶습니다.</h2>
        </div>
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          {profile.email}
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
