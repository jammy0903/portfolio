import { profile } from "../data/profile";
import { useTrackContent } from "../data/track";

export default function Contact() {
  const content = useTrackContent();
  const targetRoles = content.targetRoles;

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-page-title">
        <div className="contact-hero__copy">
          <p className="section-kicker">CONTACT</p>
          <h1 id="contact-page-title">{content.contactTitle}</h1>
          <p>{content.contactLead}</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <span>EMAIL</span>
            <strong className="contact-email__address">{profile.email}</strong>
            <i aria-hidden="true">→</i>
          </a>

          <a
            className="contact-resume"
            href={content.resume.url}
            rel="noopener"
            target="_blank"
          >
            <span>RESUME</span>
            <strong>이력서 · 경력기술서 PDF</strong>
            <em>{content.resume.updated} 기준</em>
            <i aria-hidden="true">↓</i>
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
