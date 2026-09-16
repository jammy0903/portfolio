import { Link } from "react-router-dom";
import { experience, formatCareerDuration } from "../data/profile";

const careerCases = [
  {
    category: "고객 경험",
    title: "엔지니어 중심 화면을 고객의 의사결정 화면으로",
    problem: "아크 이벤트 중심의 복잡한 5탭 구조가 실제 사용 목적과 맞지 않았습니다.",
    action: "현황·문제장비·장비상세 3단계로 정보 구조를 다시 설계하고, 1,700줄 화면을 컨테이너와 8개 컴포넌트로 분리했습니다.",
    result: "고객사 재계약에 기여했고, 영업팀으로부터 대시보드가 계약의 핵심이라는 평가를 받았습니다.",
    metric: "재계약 기여",
  },
  {
    category: "실시간 성능",
    title: "장애는 즉시, 일반 데이터는 묶어서 처리",
    problem: "초당 수십 건의 WebSocket 데이터를 도착 즉시 렌더링해 화면 부하가 커졌습니다.",
    action: "50건·50ms 배치 매니저와 Fault 우선순위 큐를 설계해 이벤트의 중요도에 따라 처리 경로를 분리했습니다.",
    result: "불필요한 렌더링을 80% 줄이면서 장애 알림은 지연 없이 전달했습니다.",
    metric: "렌더링 80%↓",
  },
  {
    category: "보안과 안정성",
    title: "평문 IoT 통신을 기기 인증 기반 구조로",
    problem: "HTTP와 MQTT 평문 통신, 하드코딩 환경변수, SQLite 락 문제가 함께 존재했습니다.",
    action: "Nginx·TLS, Pydantic 설정 관리, SQLite WAL을 도입하고 게이트웨이와 백엔드에 상호 인증 mTLS를 적용했습니다.",
    result: "미인증 기기의 브로커 연결을 차단하고 데이터 구간을 암호화했으며 DB 락 오류를 0건으로 낮췄습니다.",
    metric: "DB 락 0건",
  },
  {
    category: "운영 자동화",
    title: "대시보드를 보고 있지 않아도 장애를 알도록",
    problem: "담당자가 화면에 접속하지 않은 상태에서는 아크 장애를 즉시 인지하기 어려웠습니다.",
    action: "Fault 이벤트 감지부터 고객사별 수신자 관리, 카카오톡 알림 발송까지 하나의 자동화 흐름으로 구현했습니다.",
    result: "장애 인지 경로를 수동 모니터링에서 이벤트 기반 알림으로 전환했습니다.",
    metric: "이벤트 기반 대응",
  },
  {
    category: "데이터 구조",
    title: "새 하드웨어를 받아들이는 점진적 데이터 전환",
    problem: "하드웨어 버전이 늘어나며 모델별 데이터 스키마와 저장 위치를 안전하게 분리해야 했습니다.",
    action: "운영 영향을 통제하는 5단계 라우팅 전환을 설계하고 raw payload를 분석해 devType 기반 자동 분류를 구현했습니다.",
    result: "55대 게이트웨이를 100% 자동 분류하고, 신규 모델은 설정 추가만으로 확장할 수 있게 했습니다.",
    metric: "55대 100% 분류",
  },
];

const engineeringScope = [
  "MQTT → FastAPI → WebSocket 실시간 파이프라인",
  "SQLite + InfluxDB 데이터 분리",
  "Root·Admin·User·Guest 4단계 RBAC",
  "지수 백오프 재연결과 요청 중복 방지",
  "Docker·Nginx 기반 배포와 TLS 운영",
  "CRA → Vite 전환 및 프론트엔드 리팩토링",
];

export default function Experience() {
  return (
    <div className="experience-page">
      <header className="career-hero">
        <div className="career-hero__copy">
          <p className="section-kicker">WORK EXPERIENCE</p>
          <h1>470대의 현장 데이터를<br />{" "}고객이 쓰는 서비스로 운영했습니다.</h1>
          <p>
            문서가 부족한 레거시를 분석하는 일부터 실시간 파이프라인, 화면,
            보안, 배포, 장애 대응까지 웹 서비스 전 과정을 1인으로 맡고 있습니다.
          </p>
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
          <Link to="/projects/multibucket-architecture">아키텍처 사례 →</Link>
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
