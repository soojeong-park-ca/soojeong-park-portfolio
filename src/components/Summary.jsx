import { useEffect } from "react";
import { Link } from "react-router-dom";

import ProjectItem from "./ProjectItem";
import myImg from "../assets/images/pfp.png";

import { projectsData } from "../projectsData";

export default function Summary() {
  useEffect(() => window.scrollTo(top), []);

  const projects = projectsData.map(item => (
    <ProjectItem key={item.id} projectInfo={item} />
  ));

  return (
    <section id="section__summary" className="container section__summary">
      <div className="summary">
        <div className="summary__about">
          <h2 className="summary__title">A little bit about me</h2>
          <div className="summary__body">
            <p className="summary__text">
              I am a meticulous and driven frontend web developer from sunny
              California. My expertise lies in transforming designs into
              pixel-perfect, responsive, and functional websites. I bring
              valuable collaboration, communication, and detail-oriented skills
              honed through my teaching background. Fueled by my love and
              passion for creating websites, I am eager to seek opportunities
              where I can utilize my skills and make a meaningful impact in the
              role of a web developer.
            </p>
            <div className="img-container">
              <img src={myImg} alt="Soojeong Park" />
            </div>
            <Link to="about" className="btn--summary btn--link">
              learn more &rarr;
            </Link>
          </div>
        </div>

        <div className="summary__projects">
          <h2 className="summary__title">
            Take a peek at what I've been building
          </h2>
          <div className="summary__body">
            <div className="project__list grid-col-1">{projects}</div>
          </div>
          <Link to="projects" className="btn--link btn--to-projects">
            see more &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
