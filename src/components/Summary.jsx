import { useEffect } from "react";
import { Link } from "react-router-dom";

import ResponsiveIcon from "./ResponsiveIcon";
import ProjectItem from "./ProjectItem";
import myImg from "../assets/images/pfp.png";

import { projectsData } from "../projectsData";

export default function Summary() {
  useEffect(() => window.scrollTo(top), []);

  const projects = projectsData.map(item => (
    <ProjectItem key={item.id} projectInfo={item} />
  ));

  return (
    <section id="section__summary" className="section__summary">
      <div className="summary">
        <div className="container summary__about">
          <h2 className="summary__title">A little bit about me</h2>
          <div className="summary__body">
            <div className="summary__text">
              <p>
                I am a meticulous and driven frontend web developer from sunny
                California. My expertise lies in transforming designs into
                pixel-perfect, responsive, and functional websites. I bring
                valuable collaboration, communication, and detail-oriented
                skills from my background in teaching.
              </p>
              <p>
                Fueled by my love and passion for creating websites, I am eager
                to seek opportunities where I can utilize my skills and make a
                meaningful impact in the role of a web developer.
              </p>
            </div>
            <div className="img-container">
              <img src={myImg} alt="Soojeong Park" />
            </div>
            <Link to="about" className="btn--summary btn--link">
              learn more &rarr;
            </Link>
          </div>
        </div>

        <div className="summary__skills">
          <div className="container skills__container">
            <div className="reel">
              <div className="skill">
                <figure>
                  <img
                    className="skill-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                    alt="HTML5 Logo"
                  />
                  <figcaption>HTML5</figcaption>
                </figure>
              </div>
              <div className="skill">
                <figure>
                  <img
                    className="skill-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                    alt="CSS3 Logo"
                  />
                  <figcaption>CSS3</figcaption>
                </figure>
              </div>
              <div className="skill">
                <figure>
                  <img
                    className="skill-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript Logo"
                  />
                  <figcaption>JavaScript</figcaption>
                </figure>
              </div>
              <div className="skill">
                <figure>
                  <img
                    className="skill-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React Logo"
                  />
                  <figcaption>React</figcaption>
                </figure>
              </div>
              <div className="skill">
                <figure>
                  <img
                    className="skill-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt="Sass Logo"
                  />
                  <figcaption>Sass</figcaption>
                </figure>
              </div>
              <div className="skill">
                <figure>
                  <img
                    className="skill-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                    alt="Git Logo"
                  />
                  <figcaption>Git</figcaption>
                </figure>
              </div>
              <div className="skill">
                <figure>
                  <img
                    className="skill-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    alt="TailwindCSS Logo"
                  />
                  <figcaption>TailwindCSS</figcaption>
                </figure>
              </div>
              <div className="skill">
                <figure className="skill-learning">
                  <img
                    className="skill-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    alt="Redux Logo"
                  />
                  <figcaption>
                    Redux
                    <br />
                    (learning)
                  </figcaption>
                </figure>
              </div>
              <div className="skill">
                <figure>
                  <ResponsiveIcon />
                  <figcaption style={{ textAlign: "center" }}>
                    Responsive
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="container summary__projects">
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
