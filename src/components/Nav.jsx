import { NavLink } from "react-router-dom";

export default function Nav({ navOpen, onNavOverlayClick }) {
  return (
    <div
      className={`nav-overlay ${!navOpen ? "nav-overlay--closed" : ""}`}
      onClick={onNavOverlayClick}
    >
      <nav className={`nav ${!navOpen ? "nav--closed" : ""}`}>
        <NavLink
          to="."
          className={({ isActive }) => (isActive ? "nav--active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "nav--active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) => (isActive ? "nav--active" : "")}
        >
          Projects
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "nav--active" : "")}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
