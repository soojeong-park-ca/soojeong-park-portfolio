import { useEffect } from "react";

import ResponsiveIcon from "../components/ResponsiveIcon";
import teachingImg1 from "../assets/images/teaching-1.png";
import teachingImg2 from "../assets/images/teaching-2.png";

export default function About() {
  useEffect(() => window.scrollTo(top), []);

  return (
    <main className="container about-container">
      <h1>About Me</h1>
      <div className="about__skills">
        <h2>My skills</h2>
        <div className="about__content skills-content">
          <div className="skills">
            <figure>
              <img
                className="skill-logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                alt="HTML5 Logo"
              />
              <figcaption>HTML5</figcaption>
            </figure>
            <figure>
              <img
                className="skill-logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                alt="CSS3 Logo"
              />
              <figcaption>CSS3</figcaption>
            </figure>
            <figure>
              <img
                className="skill-logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript Logo"
              />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
              <img
                className="skill-logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React Logo"
              />
              <figcaption>React</figcaption>
            </figure>
            <figure>
              <img
                className="skill-logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                alt="Sass Logo"
              />
              <figcaption>Sass</figcaption>
            </figure>
            <figure>
              <img
                className="skill-logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                alt="Git Logo"
              />
              <figcaption>Git</figcaption>
            </figure>
            <figure>
              <img
                className="skill-logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt="TailwindCSS Logo"
              />
              <figcaption>TailwindCSS</figcaption>
            </figure>
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
            <figure>
              <ResponsiveIcon />
              <figcaption style={{ textAlign: "center" }}>
                Responsive
              </figcaption>
            </figure>
          </div>

          {/* <div className="skills">
            <figure>
              <ResponsiveIcon />
              <figcaption style={{ marginTop: ".5rem", textAlign: "center" }}>
                Responsive
              </figcaption>
            </figure>
          </div> */}
        </div>
      </div>
      <div className="about__story">
        <h2>My story</h2>
        <div className="about__content story-content">
          <p>
            Hello and welcome to my portfolio website! My name is Soojeong Park
            and I'm thrilled to share my journey with you. Let me take you
            through my story, from being an elementary school teacher to
            pursuing my passion for web development.
          </p>
          <p>
            I started my career as an elementary school teacher in South Korea,
            where I spent three and a half years fostering young minds and
            creating a nurturing learning environment. In 2019, I embarked on a
            new adventure and became a long-term substitute teacher for
            elementary students in California. Little did I know that this
            experience would lead me down an unexpected path.
          </p>
          <div className="img-container">
            <img src={teachingImg1} alt="Soojeong teaching in South Korea" />
          </div>
          <p>
            In 2021, I had an incredible encounter with one of my students who
            taught the entire class about JavaScript. Witnessing their passion
            and learning a little bit about how JavaScript worked ignited a
            spark within me. It reminded me of the joy I felt when I first
            accessed the Internet back in 2000 during my own elementary school
            days.
          </p>
          <p>
            That encounter marked the beginning of my journey into web
            development. Eager to learn more, I dived headfirst into the world
            of frontend web development. I quickly grasped HTML and CSS in the
            spring of 2022, and my curiosity pushed me further to explore
            JavaScript and React. Currently, I'm expanding my skills by delving
            into Sass, React Router, and Redux. My focus remains unwavering as I
            continue to learn, build, and evolve towards my goal of becoming a
            frontend web developer.
          </p>
          <div className="img-container">
            <img src={teachingImg2} alt="Soojeong teaching in California" />
          </div>
          <p>
            While my background may not be traditionally computer
            science-related, my experience as a teacher has provided me with
            invaluable skills. Managing and communicating with 30+ students and
            their parents throughout the school year honed my ability to
            multitask and pay close attention to detail. Reviewing and grading
            assignments and teaching lessons sharpened my time management skills
            and reinforced my commitment to delivering high-quality work.
          </p>
          <p>
            Teaching has always held a special place in my heart, as it was my
            childhood dream job. However, nothing has ignited the same level of
            passion in my adult life as coding and building websites. The joy
            and confidence I experience when creating something from scratch,
            and the knowledge that it has the potential to be used and enjoyed
            by many people, is truly fulfilling.
          </p>
          <p>
            Thank you for taking the time to learn about me and my journey. I'm
            excited about the possibilities that lie ahead and look forward to
            collaborating, creating, and making a positive impact in the world
            of web development.
          </p>
        </div>
      </div>
    </main>
  );
}
