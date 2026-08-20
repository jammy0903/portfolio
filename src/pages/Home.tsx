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
    eyebrow: "PRODUCTION EXPERIENCE",
    title: "산업 IoT 모니터링 대시보드",
    description:
      "MQTT부터 WebSocket, 데이터 저장, 고객용 UI까지 470대 장비의 운영 흐름을 1인으로 개선했습니다.",
    proof: "B2B 운영 · 실시간 장애 알림 · 24/7 안정화",
    to: "/experience",
  },
  {
    eyebrow: "ARCHITECTURE CASE STUDY",
    title: "멀티버킷 라우팅 전환",
    description:
      "운영 중인 시계열 데이터 구조를 5단계로 분해해, 중단과 롤백 위험을 통제한 점진적 마이그레이션입니다.",
    proof: "55대 백필 · 조회 경로 25곳 통합 · 단계별 롤백",
    to: "/projects/multibucket-architecture",
  },
  {
    eyebrow: "DATA & AUTOMATION",
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

const nextProof = [
  "사내 문서·운영 데이터를 찾고 답하는 RAG",
  "사람의 승인 단계를 포함한 반복 업무 워크플로",
  "Azure 환경의 배포·권한·관측 가능성까지 담은 사례",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            SEOUL · OPEN TO OPPORTUNITIES
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
            <span>SYSTEM PROFILE</span>
            <span className="system-card__status">운영 경험</span>
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
            다음 단계: 이 운영 경험을 기업용 AI 업무자동화로 확장
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
            <p className="section-kicker">SELECTED WORK</p>
            <h2 id="featured-title">기업이 확인할 수 있는 증거</h2>
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
              <span className="work-card__link">사례 자세히 보기 →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="direction-section" aria-labelledby="direction-title">
        <div className="direction-section__intro">
          <p className="section-kicker">CAREER DIRECTION</p>
          <h2 id="direction-title">산업 IoT에서 기업용 AI 자동화로</h2>
          <p>
            AI라는 이름보다 실제 업무 흐름을 이해하고, 데이터·권한·운영 조건을
            제품에 연결하는 능력을 먼저 증명합니다.
          </p>
        </div>
        <div className="direction-grid">
          <article className="direction-card">
            <span className="direction-card__label">검증된 기반</span>
            <h3>이미 운영해 본 것</h3>
            <ul>
              {foundations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="direction-card direction-card--next">
            <span className="direction-card__label">다음 검증 과제</span>
            <h3>포트폴리오에 추가할 것</h3>
            <ul>
              {nextProof.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="home-contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">LET&apos;S WORK TOGETHER</p>
          <h2 id="contact-title">운영 현장의 문제를 제품으로 풀 개발자를 찾고 있나요?</h2>
        </div>
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          {profile.email}
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
