import { Link } from "react-router-dom";

import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar({
  navOpen,
  setNavOpen,
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
        <Link
          to="/"
          onClick={() => {
            scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setNavOpen(false);
          }}
          className="Soojeong Park logo"
        >
          <Logo />
          <h4 className="logo__text">dev</h4>
        </Link>

        {mobileNavbar ? displayMobileNavbar : displayDesktopNavbar}
      </div>
    </div>
  );
}
