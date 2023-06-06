// import { Link } from "react-router-dom";

export default function ProjectItem({ projectInfo }) {
  return (
    <div className="project-item">
      <div className="grid-col-1 grid-col-1--project">
        <div className="project-item__text">
          <div className="project-item__title">
            <h3>{projectInfo.title}</h3>
            {projectInfo.wip && (
              <div className="wip">
                <i className="fa-solid fa-screwdriver-wrench"></i> Work in
                Progress
              </div>
            )}
          </div>

          <div className="project-item__links">
            <a
              className="project-item__link"
              href={projectInfo.githubUrl}
              target="_blank"
              rel="nonreferrer"
            >
              GitHub
            </a>
            <a
              className="project-item__link"
              href={projectInfo.liveSiteUrl}
              target="_blank"
              rel="nonreferrer"
            >
              Live Site
            </a>
          </div>

          <div className="project-item__tools">
            <ul className="project-item__tools-list">
              {projectInfo.tools.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className="project-item__description">
            <p>{projectInfo.description}</p>
          </div>
        </div>

        <a href={projectInfo.liveSiteUrl} target="_blank" rel="nonreferrer">
          <div className="project-item__img">
            <div className="project-item__img-border">
              <img
                className="project-item__img-el"
                src={projectInfo.imageUrl}
                alt={projectInfo.title}
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
