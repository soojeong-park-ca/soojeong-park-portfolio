import { Link } from "react-router-dom";

import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar({
  navOpen,
  onNavBtnClick,
  scrolled,
  mobileNavbar,
}) {
  const displayMobileNavbar = (
    <div className="btn--menu-container">
      <button className="btn--menu" onClick={onNavBtnClick}>
        {!navOpen ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <i className="fa-solid fa-xmark"></i>
        )}
      </button>
    </div>
  );

  const displayDesktopNavbar = (
    <div className="navbar--desktop">
      <Nav />
    </div>
  );

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-container">
        <Link to="/" onClick={() => scrollTo(top)} className="logo">
          <Logo />
          <h4 className="logo__text">dev</h4>
        </Link>

        {mobileNavbar ? displayMobileNavbar : displayDesktopNavbar}
      </div>
    </div>
  );
}
