import { Link } from "react-router-dom";

export default function ProjectItem({ projectInfo }) {
  return (
    <div className="project__item">
      <Link>
        <div className="grid-col-1 grid-col-1--project">
          <div className="project__text">
            <h3>{projectInfo.title}</h3>
            <p>{projectInfo.description}</p>
          </div>
          <img className="project__img" src="" alt="" />
        </div>
      </Link>
    </div>
  );
}
