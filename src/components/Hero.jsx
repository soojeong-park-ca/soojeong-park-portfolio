import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="section__hero" className="container section__hero">
      <div className="hero">
        <h1>
          Hi, my name is <span>Soojeong Park</span> and I'm a{" "}
          <span>frontend web developer</span>.
        </h1>
        <h4>
          I help transform your digital vision into cutting-edge, user-friendly
          websites.
        </h4>
        <Link to="contact" className="btn--to-contact">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
