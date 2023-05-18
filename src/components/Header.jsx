import { useState } from "react";

import Navbar from "./Navbar";
import Nav from "./Nav";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // Nav toggle
  const handleNavToggle = () => {
    setNavOpen(prev => !prev);
  };

  // Close nav with ESC key
  const handleEscPress = e => {
    if (navOpen && e.key === "Escape") setNavOpen(false);
  };
  window.addEventListener("keydown", handleEscPress);

  // Close nav when nav-overlay clicked
  const handleNavOverlayClick = e => {
    if (
      e.target.classList.contains("nav-overlay") &&
      !e.target.classList.contains("nav")
    )
      setNavOpen(false);
  };

  return (
    <header className="header">
      <Navbar navOpen={navOpen} onNavBtnClick={handleNavToggle} />
      <Nav navOpen={navOpen} onNavOverlayClick={handleNavOverlayClick} />
    </header>
  );
}
