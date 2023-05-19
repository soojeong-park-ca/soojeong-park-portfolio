import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__title">
          <h4>
            Looking for a frontend web developer?
            <br />
            Let's work together.
          </h4>
          <Link to="/contact" className="btn--to-contact">
            Get in touch
          </Link>
        </div>
        <div className="footer__contact">
          <div className="sns-buttons">
            <a href="" className="btn--sns">
              GitHub
            </a>
            <a href="" className="btn--sns">
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
