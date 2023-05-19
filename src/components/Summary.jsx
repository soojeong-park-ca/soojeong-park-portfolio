import { Link } from "react-router-dom";

import ProjectItem from "./ProjectItem";

import { projectsData } from "../projectsData";

export default function SectionAbout() {
  const projects = projectsData.map(item => <ProjectItem projectInfo={item} />);

  return (
    <section id="section__summary" className="container section__summary">
      <div className="summary">
        <h2 className="section__title">
          Take a peek at what I've been building:
        </h2>

        <div className="section__body">
          <div className="project__list grid-col-1">{projects}</div>
        </div>

        <Link to="projects">
          <h3>Wanna see more? &rarr;</h3>
        </Link>
      </div>
    </section>
  );
}
