import { Link } from "react-router-dom";
import { projects } from "../data/profile";

const priority = [
  "multibucket-architecture",
  "memedics",
  "codeinsight",
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
        <p className="section-kicker">PROJECT EVIDENCE</p>
        <h1>무엇을 만들었는지보다,<br />{" "}어떤 문제를 끝까지 풀었는지.</h1>
        <p>
          산업 IoT 운영, 데이터 자동화, 복잡한 시스템 설계 순으로 대표 사례를
          배치했습니다. 각 상세 페이지에서 문제·판단·구현·결과를 확인할 수 있습니다.
        </p>
      </header>

      <section className="projects-featured" aria-labelledby="relevant-projects">
        <div className="projects-section-heading">
          <div>
            <span>01</span>
            <h2 id="relevant-projects">목표 직무와 가까운 대표 사례</h2>
          </div>
          <p>기업용 AI 자동화에 필요한 운영·데이터·시스템 기반</p>
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
                <strong>케이스 스터디 보기 →</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="projects-archive" aria-labelledby="other-projects">
        <div className="projects-section-heading">
          <div>
            <span>02</span>
            <h2 id="other-projects">제품 출시·보안·협업 경험</h2>
          </div>
          <p>범용 개발 역량과 실행 범위를 보여주는 프로젝트</p>
        </div>

        <div className="projects-archive__grid">
          {otherProjects.map((project) => (
            <Link className="project-archive-card" key={project.slug} to={`/projects/${project.slug}`}>
              <div
                className="project-archive-card__visual"
                style={{ background: project.thumbnail.gradient }}
              >
                <span aria-hidden="true">{project.thumbnail.emoji}</span>
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
