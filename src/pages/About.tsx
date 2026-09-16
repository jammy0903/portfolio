import { blogActivityPeriod } from "../data/activity-dates";
import { certifications, education, profile, skills } from "../data/profile";
import { useTrackContent } from "../data/track";

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
  const content = useTrackContent();
  const strengths = content.strengths;

  return (
    <div className="about-page">
      <header className="about-hero">
        <div>
          <p className="section-kicker">ABOUT</p>
          <h1>복잡한 시스템을 읽고,<br />{" "}운영 가능한 제품으로 바꿉니다.</h1>
        </div>
        <div className="about-hero__profile">
          <span>산업 IoT 풀스택 개발자</span>
          <h2>{profile.name} <small>{profile.nameEn}</small></h2>
          <p>{content.aboutSummary}</p>
          <div>
            <span>{profile.location}</span>
            <a href={profile.blog} rel="noopener noreferrer" target="_blank">기술 블로그 · {blogActivityPeriod}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} rel="noopener noreferrer" target="_blank">GitHub ↗</a>
          </div>
        </div>
      </header>

      <section className="about-strengths" aria-labelledby="strengths-title">
        <div className="about-section-heading">
          <p className="section-kicker">WORKING STYLE</p>
          <h2 id="strengths-title">일할 때 중요하게 생각하는 것</h2>
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
          <p className="section-kicker">CURRENT INTEREST</p>
          <h2 id="about-direction-title">AI 모델 자체보다,<br />{" "}AI가 실제 업무에 쓰이는 과정에 관심이 있습니다.</h2>
          <p>
            기업용 AI는 모델 호출만으로 끝나지 않습니다. 기존 데이터의 위치,
            사용자 권한, 사람의 승인, 실패 시 복구와 운영 지표까지 제품 안에
            연결되어야 합니다. 산업 IoT 서비스를 운영하며 비슷한 문제를 다뤄왔고,
            지금은 이 경험을 AI 업무자동화로 넓히고 있습니다.
          </p>
        </div>
        <div className="about-direction__evidence">
          <h3>지금까지 해 본 자동화</h3>
          <ul>
            {automationEvidence.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="about-learning">
            <span>요즘 공부하고 만드는 것</span>
            {learningNow.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="about-skills" aria-labelledby="skills-title">
        <div className="about-section-heading">
          <p className="section-kicker">SKILLS</p>
          <h2 id="skills-title">실제로 사용해 본 기술</h2>
          <p>업무와 개인 프로젝트에서 사용한 기술을 분야별로 정리했습니다.</p>
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
          <p className="section-kicker">EDUCATION</p>
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
