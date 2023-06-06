import { Link } from "react-router-dom";

export default function Footer() {
  function handleFooterScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__title">
          <h4>
            Looking for a frontend web developer?
            <br />
            Let's work together.
          </h4>
          <Link
            to="contact"
            className="footer__contact-link"
            onClick={handleFooterScrollToTop}
          >
            Get in touch &rarr;
          </Link>
        </div>
        <div className="footer__contact">
          <div className="sns-buttons">
            <a
              href="https://github.com/soojeong-park-ca"
              target="_blank"
              rel="nonreferrer"
              className="btn--sns"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/soojeong-park-ca/"
              target="_blank"
              rel="nonreferrer"
              className="btn--sns"
            >
              LinkedIn
            </a>
          </div>
          <div className="copyright">
            <p>&copy; 2023 - Soojeong Park</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
