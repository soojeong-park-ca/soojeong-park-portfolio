import { Link } from "react-router-dom";

import ProjectItem from "./ProjectItem";

import { projectsData } from "../projectsData";

export default function Summary() {
  const projects = projectsData.map(item => (
    <ProjectItem key={item.id} projectInfo={item} />
  ));

  return (
    <section id="section__summary" className="container section__summary">
      <div className="summary">
        <div className="summary__about"></div>

        <div classsName="summary__projects">
          <h2 className="summary__title">
            Take a peek at what I've been building
            <Link to="projects" className="btn--link btn--to-projects">
              more &rarr;
            </Link>
          </h2>

          <div className="summary__body">
            <div className="project__list grid-col-1">{projects}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
