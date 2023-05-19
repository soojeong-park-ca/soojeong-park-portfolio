import { Link } from "react-router-dom";

export default function ProjectItem({ projectInfo }) {
  return (
    <div className="project__item">
      <Link>
        <div className="grid-row--project">
          <div>
            <h3>{projectInfo.title}</h3>
            <p>{projectInfo.description}</p>
          </div>
          <img src="" alt="" />
        </div>
      </Link>
    </div>
  );
}
