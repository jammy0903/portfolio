import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/profile";

const linkLabels = {
  live: "라이브 서비스",
  store: "스토어",
  github: "GitHub",
  notion: "프로젝트 문서",
} as const;

function renderBold(text: string) {
  return text.split("**").map((part, index) => (
    index % 2 === 1
      ? <strong key={`bold-${index}`}>{part}</strong>
      : <Fragment key={`text-${index}`}>{part}</Fragment>
  ));
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="project-not-found">
        <p className="section-kicker">404 · PROJECT NOT FOUND</p>
        <h1>프로젝트를 찾을 수 없습니다.</h1>
        <Link to="/projects">← 프로젝트 목록으로</Link>
      </div>
    );
  }

  const links = project.links as {
    github?: string;
    notion?: string;
    store?: string;
    live?: string;
  };
  const externalLinks = (Object.entries(links) as Array<[keyof typeof linkLabels, string]>)
    .filter(([key, url]) => Boolean(linkLabels[key] && url));
  const images = "images" in project
    ? project.images as Array<{ src: string; caption: string }>
    : [];
  const dogGallery = "dogGallery" in project
    ? project.dogGallery as Array<{ src: string; label: string }>
    : [];

  return (
    <article className="project-detail-page">
      <Link className="project-detail-back" to="/projects">← 프로젝트 목록</Link>

      <header className="project-detail-hero">
        <div className="project-detail-hero__copy">
          <p className="section-kicker">{project.type}</p>
          <h1>{project.title}</h1>
          <h2>{project.subtitle}</h2>
          <p>{project.description}</p>
          {externalLinks.length > 0 ? (
            <div className="project-detail-links">
              {externalLinks.map(([key, url], index) => (
                <a
                  className={index === 0 ? "project-detail-link project-detail-link--primary" : "project-detail-link"}
                  href={url}
                  key={key}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {linkLabels[key]} ↗
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <div
          aria-label={`${project.title} 프로젝트 표지`}
          className="project-detail-visual"
          style={{ background: project.thumbnail.gradient }}
        >
          <span aria-hidden="true">{project.thumbnail.emoji}</span>
          <small>PROJECT · {project.slug.toUpperCase()}</small>
        </div>
      </header>

      <section className="project-detail-evidence" aria-labelledby="project-evidence-title">
        <aside>
          <p className="section-kicker">TECH STACK</p>
          <h2>사용 기술</h2>
          <div>
            {project.techStack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </aside>
        <div>
          <p className="section-kicker">HIGHLIGHTS</p>
          <h2 id="project-evidence-title">주요 구현과 결과</h2>
          <ol>
            {project.highlights.map((highlight, index) => (
              <li key={highlight}>
                <span>0{index + 1}</span>
                <p>{renderBold(highlight)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {dogGallery.length > 0 ? (
        <section className="project-detail-gallery" aria-labelledby="dog-gallery-title">
          <div className="project-detail-section-heading">
            <p className="section-kicker">CONTENT</p>
            <h2 id="dog-gallery-title">수집 견종 11종</h2>
            <p>걸음을 모아 해금하는 제품 콘텐츠입니다.</p>
          </div>
          <div className="project-detail-gallery__dogs">
            {dogGallery.map((dog) => (
              <figure key={dog.src}>
                <img alt={dog.label} loading="lazy" src={dog.src} />
                <figcaption>{dog.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {images.length > 0 ? (
        <section className="project-detail-gallery" aria-labelledby="screenshots-title">
          <div className="project-detail-section-heading">
            <p className="section-kicker">SCREENS</p>
            <h2 id="screenshots-title">구현 화면</h2>
          </div>
          <div className="project-detail-gallery__screens">
            {images.map((image) => (
              <figure key={image.src}>
                <img alt={image.caption} loading="lazy" src={image.src} />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <footer className="project-detail-footer">
        <div>
          <p className="section-kicker">MORE PROJECTS</p>
          <h2>다른 프로젝트도 살펴보세요.</h2>
        </div>
        <Link to="/projects">전체 프로젝트 보기 →</Link>
      </footer>
    </article>
  );
}
