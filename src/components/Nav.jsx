import { NavLink } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";

export default function Nav({
  navOpen,
  onNavOverlayClick,
  mobileNavbar,
  setNavOpen,
  hashLink,
}) {
  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`nav-overlay ${!navOpen ? "nav-overlay--closed" : ""}`}
        onClick={onNavOverlayClick}
      ></div>
      <nav className={`nav ${mobileNavbar && !navOpen ? "nav--closed" : ""}`}>
        <NavLink
          to="."
          className={({ isActive }) => (isActive ? "nav--active" : "")}
          onClick={() => {
            handleScrollToTop();
            mobileNavbar && handleNavLinkClick;
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "nav--active" : "")}
          onClick={mobileNavbar && handleNavLinkClick}
        >
          About
        </NavLink>

        {/* <NavLink
          to="projects"
          className={({ isActive }) => (isActive ? "nav--active" : "")}
          onClick={mobileNavbar && handleNavLinkClick}
        >
          Projects
        </NavLink> */}

        {/* <NavHashLink
          smooth
          to={`/${hashLink}`}
          // className={({ isActive }) => (isActive ? "nav--active" : "")}
          onClick={mobileNavbar && handleNavLinkClick}
        >
          Projects
        </NavHashLink> */}

        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "nav--active" : "")}
          onClick={mobileNavbar && handleNavLinkClick}
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
}
