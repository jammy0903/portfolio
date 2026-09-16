import { Link } from "react-router-dom";
import { experience, formatCareerDuration } from "../data/profile";
import { useTrackContent, useTrackPath } from "../data/track";

const engineeringScope = [
  "MQTT → FastAPI → WebSocket 실시간 파이프라인",
  "SQLite + InfluxDB 데이터 분리",
  "Root·Admin·User·Guest 4단계 RBAC",
  "지수 백오프 재연결과 요청 중복 방지",
  "Docker·Nginx 기반 배포와 TLS 운영",
  "CRA → Vite 전환 및 프론트엔드 리팩토링",
];

export default function Experience() {
  const content = useTrackContent();
  const withTrack = useTrackPath();
  const careerCases = content.careerCases;

  return (
    <div className="experience-page">
      <header className="career-hero">
        <div className="career-hero__copy">
          <p className="section-kicker">WORK EXPERIENCE</p>
          <h1>{content.careerTitle[0]}<br />{" "}{content.careerTitle[1]}</h1>
          <p>{content.careerLead}</p>
        </div>

        <aside className="career-summary" aria-label="현재 경력 요약">
          <span className="career-summary__status">현재 재직 중</span>
          <h2>{experience.company}</h2>
          <p>{experience.companyDesc}</p>
          <dl>
            <div>
              <dt>역할</dt>
              <dd>{experience.position}</dd>
            </div>
            <div>
              <dt>기간</dt>
              <dd>{experience.period} · {formatCareerDuration(experience.startDate)}</dd>
            </div>
            <div>
              <dt>담당</dt>
              <dd>사내 유일 웹 개발자</dd>
            </div>
          </dl>
        </aside>
      </header>

      <section className="career-metrics" aria-label="경력 핵심 수치">
        <div><strong>470대</strong><span>실시간 장비 운영</span></div>
        <div><strong>80%</strong><span>렌더링 부하 감소</span></div>
        <div><strong>12배</strong><span>빌드 속도 개선</span></div>
        <div><strong>55대</strong><span>모델 자동 분류</span></div>
        <p>회사 내부 개발·운영 측정 기준</p>
      </section>

      <section className="career-system" aria-labelledby="ownership-title">
        <div className="career-section-heading">
          <p className="section-kicker">SYSTEM</p>
          <h2 id="ownership-title">{experience.project}</h2>
          <p>{experience.scale}</p>
        </div>

        <div className="career-flow" aria-label="담당 시스템 흐름">
          <div><span>01</span><strong>Device</strong><small>차단기 · 게이트웨이</small></div>
          <i aria-hidden="true">→</i>
          <div><span>02</span><strong>Transport</strong><small>MQTT · mTLS</small></div>
          <i aria-hidden="true">→</i>
          <div><span>03</span><strong>Backend</strong><small>FastAPI · InfluxDB</small></div>
          <i aria-hidden="true">→</i>
          <div><span>04</span><strong>Product</strong><small>React · WebSocket</small></div>
        </div>

        <div className="career-stack">
          {experience.techStack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </section>

      <section className="career-cases" aria-labelledby="career-cases-title">
        <div className="career-section-heading career-section-heading--row">
          <div>
            <p className="section-kicker">WORK HIGHLIGHTS</p>
            <h2 id="career-cases-title">직접 해결한 다섯 가지 문제</h2>
          </div>
          <p>문제와 해결 과정, 결과를 함께 정리했습니다.</p>
        </div>

        <div className="career-cases__grid">
          {careerCases.map((careerCase, index) => (
            <article className={index === 0 ? "career-case career-case--wide" : "career-case"} key={careerCase.title}>
              <div className="career-case__header">
                <p>{careerCase.category}</p>
                <span>{careerCase.metric}</span>
              </div>
              <h3>{careerCase.title}</h3>
              <dl>
                <div>
                  <dt>문제</dt>
                  <dd>{careerCase.problem}</dd>
                </div>
                <div>
                  <dt>판단과 구현</dt>
                  <dd>{careerCase.action}</dd>
                </div>
                <div>
                  <dt>결과</dt>
                  <dd>{careerCase.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="career-scope" aria-labelledby="scope-title">
        <div>
          <p className="section-kicker">RESPONSIBILITIES</p>
          <h2 id="scope-title">그 밖에 직접 책임진 범위</h2>
        </div>
        <ul>
          {engineeringScope.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="career-proof" aria-labelledby="proof-title">
        <div>
          <p className="section-kicker">RELATED LINKS</p>
          <h2 id="proof-title">관련 문서와 보도 자료</h2>
        </div>
        <div className="career-proof__links">
          {experience.notion ? (
            <a href={experience.notion} rel="noopener noreferrer" target="_blank">프로젝트 문서 ↗</a>
          ) : null}
          <Link to={withTrack("/projects/multibucket-architecture")}>아키텍처 사례 →</Link>
          {experience.news.map((news) => (
            <a href={news.url} key={news.title} rel="noopener noreferrer" target="_blank">
              {news.title} 보도 ↗
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
