import { NavLink } from "react-router-dom";

export default function Nav({
  navOpen,
  onNavOverlayClick,
  mobileNavbar,
  setNavOpen,
}) {
  const handleNavLinkClick = () => {
    setNavOpen(false);
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
          onClick={mobileNavbar && handleNavLinkClick}
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
        <NavLink
          to="projects"
          className={({ isActive }) => (isActive ? "nav--active" : "")}
          onClick={mobileNavbar && handleNavLinkClick}
        >
          Projects
        </NavLink>
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
