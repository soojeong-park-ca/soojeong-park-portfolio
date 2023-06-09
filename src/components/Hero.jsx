export default function Hero() {
  return (
    <section id="section__hero" className="section__hero">
      <div className="hero container">
        <div className="hero__title">
          <h1>
            Hi, my name is <span>Soojeong Park</span> and I'm a{" "}
            <span>frontend web developer</span>.
          </h1>
        </div>

        <div className="hero__subtitle">
          <h4>
            I help transform your digital vision into pixel-perfect, responsive
            websites.
          </h4>
        </div>

        <div className="hero__contact">
          <a href="#projects" className="btn--link">
            See my projects
          </a>
        </div>
      </div>
    </section>
  );
}
