import { projectDates } from "../data/activity-dates";
import { Link } from "react-router-dom";
import { projects } from "../data/profile";
import "../project-media.css";

// 회사 업무는 이 목록에 넣지 않는다 — 경력 페이지에서 다루고,
// 상세 사례는 거기서 '아키텍처 사례' 링크로 연결된다.
const workCaseStudies = ["multibucket-architecture"];

// 상위 3개가 '주요 프로젝트'로 올라간다.
// 지금 설치해서 써볼 수 있는 배포 제품을 맨 앞에 둔다 — 채용 담당자가 직접 확인할 수 있는
// 실물이 종료된 프로젝트의 서술보다 강한 근거다.
const priority = [
  "dog-walk",
  "codeinsight",
  "memedics",
  "plush-club",
  "cve-matcher",
  "messenger-forensics",
  "malware-analysis",
  "phishing-detector",
  "aingan",
  "donghang",
];

const featuredLabels: Record<string, string> = {
  "dog-walk": "배포 제품 · Chrome 웹스토어",
  codeinsight: "복잡한 시스템 설계 · 오픈소스",
  memedics: "데이터 자동화 · Human-in-the-loop",
  "plush-club": "웹게임 · 3D 렌더링과 물리",
};

const orderedProjects = [...projects]
  .filter((project) => !workCaseStudies.includes(project.slug))
  .sort((a, b) => {
    const aIndex = priority.indexOf(a.slug);
    const bIndex = priority.indexOf(b.slug);
    return (aIndex === -1 ? priority.length : aIndex) -
      (bIndex === -1 ? priority.length : bIndex);
  });

const featuredProjects = orderedProjects.slice(0, 3);
const otherProjects = orderedProjects.slice(3);

function cleanHighlight(highlight: string) {
  return highlight.replaceAll("**", "");
}

export default function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <p className="section-kicker">PROJECTS</p>
        <h1>만든 결과뿐 아니라,<br />{" "}문제를 풀어간 과정까지 담았습니다.</h1>
        <p>
          실무와 개인 프로젝트 중 운영 환경, 데이터 처리, 시스템 설계가
          잘 드러나는 작업을 먼저 정리했습니다.
        </p>
      </header>

      <section className="projects-featured" aria-labelledby="relevant-projects">
        <div className="projects-section-heading">
          <div>
            <span>01</span>
            <h2 id="relevant-projects">주요 프로젝트</h2>
          </div>
          <p>운영 환경과 데이터 흐름을 다룬 세 가지 프로젝트입니다.</p>
        </div>

        <div className="projects-featured__grid">
          {featuredProjects.map((project, index) => (
            <Link className="project-feature-card" key={project.slug} to={`/projects/${project.slug}`}>
              <div className="project-feature-card__visual" data-tone={index % 3}>
                <span className="project-feature-card__index">0{index + 1}</span>
                {"cover" in project && project.cover ? (
                  <img
                    alt={project.cover.alt}
                    className="project-card-cover"
                    height={720}
                    /* 대표 카드는 첫 화면 안쪽이라 lazy를 걸면 늦게 뜬다 */
                    loading="eager"
                    src={project.cover.src}
                    width={1280}
                  />
                ) : (
                  <span aria-label={project.title} className="project-feature-card__emoji" role="img">
                    {project.thumbnail.emoji}
                  </span>
                )}
              </div>
              <div className="project-feature-card__body">
                <p>{featuredLabels[project.slug]}</p>
                {"badge" in project && project.badge ? (
                  <span className="project-badge">{project.badge}</span>
                ) : null}
                <h3>{project.title}</h3>
                {projectDates[project.slug] && <p title={projectDates[project.slug].basis}>{projectDates[project.slug].period} · {projectDates[project.slug].basis}</p>}
                <span className="project-feature-card__subtitle">{project.subtitle}</span>
                <span className="project-feature-card__highlight">
                  {cleanHighlight(project.highlights[0])}
                </span>
                <div className="project-feature-card__stack">
                  {project.techStack.slice(0, 5).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <strong>프로젝트 자세히 보기 →</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="projects-archive" aria-labelledby="other-projects">
        <div className="projects-section-heading">
          <div>
            <span>02</span>
            <h2 id="other-projects">그 밖의 프로젝트</h2>
          </div>
          <p>제품 출시, 보안, 협업을 경험한 작업들입니다.</p>
        </div>

        <div className="projects-archive__grid">
          {otherProjects.map((project, index) => (
            <Link className="project-archive-card" key={project.slug} to={`/projects/${project.slug}`}>
              <div className="project-archive-card__visual" data-tone={index % 3}>
                {"cover" in project && project.cover ? (
                  /* 커버가 달린 아카이브 카드는 두어 장뿐이라 lazy로 얻는 이득보다
                     "안 뜨는 그림"의 위험이 크다 — 즉시 로드한다 */
                  <img className="project-card-cover" src={project.cover.src} alt="" loading="eager" width={1280} height={720} />
                ) : <span aria-hidden="true">{project.thumbnail.emoji}</span>}
              </div>
              <div className="project-archive-card__body">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                {projectDates[project.slug] && <p title={projectDates[project.slug].basis}>{projectDates[project.slug].period} · {projectDates[project.slug].basis}</p>}
                <span>{project.subtitle}</span>
                <strong>자세히 보기 →</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
