import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ navOpen, onNavBtnClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) setScrolled(true);
      else {
        setScrolled(false);
      }
    };
  }, [window.scrollY]);

  return (
    <div className={`navbar ${scrolled && "navbar-box-shadow"}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <h4 className="logo__text">Soojeong P</h4>
        </Link>

        <div className="btn--menu-container">
          <button className="btn--menu" onClick={onNavBtnClick}>
            {!navOpen ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
