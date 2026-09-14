import { Link } from "react-router-dom";
import { projects } from "../data/profile";
import "../project-media.css";

const priority = [
  "multibucket-architecture",
  "memedics",
  "codeinsight",
  "plush-club",
  "cve-matcher",
  "messenger-forensics",
  "malware-analysis",
  "phishing-detector",
  "dog-walk",
  "aingan",
  "donghang",
];

const featuredLabels: Record<string, string> = {
  "multibucket-architecture": "산업 IoT · 운영 아키텍처",
  memedics: "데이터 자동화 · Human-in-the-loop",
  codeinsight: "복잡한 시스템 설계 · 오픈소스",
};

const orderedProjects = [...projects].sort((a, b) => {
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
              <div
                className="project-feature-card__visual"
                style={{ background: project.thumbnail.gradient }}
              >
                <span className="project-feature-card__index">0{index + 1}</span>
                <span aria-label={project.title} className="project-feature-card__emoji" role="img">
                  {project.thumbnail.emoji}
                </span>
              </div>
              <div className="project-feature-card__body">
                <p>{featuredLabels[project.slug]}</p>
                <h3>{project.title}</h3>
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
          {otherProjects.map((project) => (
            <Link className="project-archive-card" key={project.slug} to={`/projects/${project.slug}`}>
              <div
                className="project-archive-card__visual"
                style={{ background: project.thumbnail.gradient }}
              >
                {"cover" in project && project.cover ? (
                  <img className="project-card-cover" src={project.cover.src} alt="" loading="lazy" width={1280} height={720} />
                ) : <span aria-hidden="true">{project.thumbnail.emoji}</span>}
              </div>
              <div className="project-archive-card__body">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
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
