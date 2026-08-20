import { profile } from "../data/profile";

const targetRoles = [
  "기업용 AI 업무자동화",
  "산업 데이터 제품",
  "B2B 풀스택 개발",
];

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-page-title">
        <div className="contact-hero__copy">
          <p className="section-kicker">CONTACT</p>
          <h1 id="contact-page-title">운영 현장의 문제를<br />{" "}제품으로 해결하는 팀에서 일하고 싶습니다.</h1>
          <p>
            산업 IoT 실서비스를 혼자 책임진 경험을 바탕으로, 기업의 데이터와
            반복 업무를 안전하게 연결하는 제품을 만들고 싶습니다.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <span>EMAIL</span>
            <strong>{profile.email}</strong>
            <i aria-hidden="true">→</i>
          </a>
        </div>

        <aside className="contact-fit" aria-label="희망 역할과 근무 지역">
          <div className="contact-fit__status">
            <span aria-hidden="true" />
            새로운 기회를 찾고 있습니다
          </div>
          <div>
            <p>관심 분야</p>
            <ul>
              {targetRoles.map((role) => <li key={role}>{role}</li>)}
            </ul>
          </div>
          <dl>
            <div>
              <dt>근무 지역</dt>
              <dd>서울 · 수도권</dd>
            </div>
            <div>
              <dt>현재 경력</dt>
              <dd>산업 IoT 웹 서비스 개발·운영</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="contact-links" aria-label="외부 프로필">
        <a href={profile.github} rel="noopener noreferrer" target="_blank">
          <span>CODE</span>
          <h2>GitHub</h2>
          <p>프로젝트 소스와 개발 기록</p>
          <strong>github.com/jammy0903 ↗</strong>
        </a>
        <a href={profile.blog} rel="noopener noreferrer" target="_blank">
          <span>WRITING</span>
          <h2>Technical Blog</h2>
          <p>학습 과정과 문제 해결 기록</p>
          <strong>jammy0903.github.io ↗</strong>
        </a>
        <div>
          <span>LOCATION</span>
          <h2>Seoul</h2>
          <p>{profile.location}</p>
          <strong>대면·하이브리드·원격 협의 가능</strong>
        </div>
      </section>
    </div>
  );
}
