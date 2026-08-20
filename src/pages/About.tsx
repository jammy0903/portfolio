import { certifications, education, profile, skills } from "../data/profile";

const strengths = [
  {
    number: "01",
    title: "시스템 전체를 책임집니다",
    description: "프론트엔드 한 영역에 머무르지 않고 장비 데이터 수집부터 API, 화면, 배포와 운영까지 연결합니다.",
  },
  {
    number: "02",
    title: "운영 데이터로 판단합니다",
    description: "감이 아니라 raw payload, 응답시간, 렌더링 횟수와 장애 기록을 확인해 구조와 우선순위를 결정합니다.",
  },
  {
    number: "03",
    title: "기술을 업무 가치로 번역합니다",
    description: "엔지니어 중심 화면을 고객의 의사결정 흐름으로 다시 설계해 실제 재계약과 운영 개선에 연결했습니다.",
  },
  {
    number: "04",
    title: "보안과 복구 경로를 함께 봅니다",
    description: "mTLS, RBAC, 단계별 마이그레이션과 롤백처럼 실서비스가 지속되기 위한 조건을 구현에 포함합니다.",
  },
];

const skillGroups = [
  { label: "PRODUCT WEB", items: skills.frontend },
  { label: "BACKEND & DATA", items: skills.backend },
  { label: "INFRA & OPERATIONS", items: skills.infra },
  { label: "SECURITY FOUNDATION", items: skills.security },
];

const automationEvidence = [
  "자동 수집은 후보를 제안하고 최종 등록은 사람이 승인하는 Human-in-the-loop 흐름",
  "키워드·부분일치·벡터 유사도를 결합한 검색 파이프라인과 임베딩 캐시",
  "장애 이벤트 감지부터 고객사별 수신자 관리와 알림 발송까지 이어지는 운영 자동화",
];

const learningNow = [
  "SQLD 자격 준비",
  "Azure 클라우드 기초 및 자격 준비",
  "RAG·승인형 워크플로 기반 기업용 AI 자동화 사례 설계",
];

export default function About() {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div>
          <p className="section-kicker">ABOUT SOJEONG</p>
          <h1>복잡한 시스템을 읽고,<br />{" "}운영 가능한 제품으로 바꿉니다.</h1>
        </div>
        <div className="about-hero__profile">
          <span>산업 IoT 풀스택 개발자</span>
          <h2>{profile.name} <small>{profile.nameEn}</small></h2>
          <p>{profile.summary}</p>
          <div>
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} rel="noopener noreferrer" target="_blank">GitHub ↗</a>
          </div>
        </div>
      </header>

      <section className="about-strengths" aria-labelledby="strengths-title">
        <div className="about-section-heading">
          <p className="section-kicker">CORE STRENGTHS</p>
          <h2 id="strengths-title">제가 반복해서 보여준 일하는 방식</h2>
        </div>
        <div className="about-strengths__grid">
          {strengths.map((strength) => (
            <article key={strength.number}>
              <span>{strength.number}</span>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-direction" aria-labelledby="about-direction-title">
        <div className="about-direction__intro">
          <p className="section-kicker">WHY AI AUTOMATION</p>
          <h2 id="about-direction-title">AI 모델 자체보다,<br />{" "}AI가 실제 업무에 들어가는 과정에 관심이 있습니다.</h2>
          <p>
            기업용 AI는 모델 호출만으로 끝나지 않습니다. 기존 데이터의 위치,
            사용자 권한, 사람의 승인, 실패 시 복구와 운영 지표까지 제품 안에
            연결되어야 합니다. 산업 IoT 서비스를 운영하며 익힌 이 조건들이
            제 다음 직무의 기반입니다.
          </p>
        </div>
        <div className="about-direction__evidence">
          <h3>이미 증명한 자동화의 단서</h3>
          <ul>
            {automationEvidence.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="about-learning">
            <span>현재 학습·구축 중</span>
            {learningNow.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="about-skills" aria-labelledby="skills-title">
        <div className="about-section-heading">
          <p className="section-kicker">TECHNICAL FOUNDATION</p>
          <h2 id="skills-title">실제로 사용해 본 기술</h2>
          <p>목표 기술과 보유 기술을 섞지 않고, 프로젝트 또는 업무에서 사용한 항목만 적었습니다.</p>
        </div>
        <div className="about-skills__grid">
          {skillGroups.map((group) => (
            <article key={group.label}>
              <h3>{group.label}</h3>
              <div>
                {group.items.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-background" aria-labelledby="background-title">
        <div className="about-section-heading">
          <p className="section-kicker">CREDENTIALS & EDUCATION</p>
          <h2 id="background-title">자격과 교육</h2>
        </div>
        <div className="about-background__columns">
          <div>
            <h3>자격·평가</h3>
            <div className="credential-list">
              {certifications.map((certification) => (
                <article key={certification.name}>
                  <div>
                    <h4>{certification.name}</h4>
                    <p>{certification.issuer}</p>
                  </div>
                  <div>
                    <strong>{certification.score}</strong>
                    <span>{certification.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3>교육</h3>
            <div className="education-list">
              {education.map((item) => (
                <article key={`${item.school}-${item.period}`}>
                  <span>{item.period}</span>
                  <h4>{item.school}</h4>
                  <p>{item.major}</p>
                  <strong>{item.status}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
