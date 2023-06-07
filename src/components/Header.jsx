import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Nav from "./Nav";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  //// navOpen
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

  //// scrolled
  // Scroll
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
  }, [window.scrollY]);

  //// mobileNavbar
  // innerWidth
  useEffect(() => {
    // when page loaded
    if (window.innerWidth >= 900) {
      setMobileNavbar(false);
      setNavOpen(true);
    } else {
      setMobileNavbar(true);
      setNavOpen(false);
    }

    // when resizing window
    window.onresize = function () {
      if (window.innerWidth >= 900) {
        setMobileNavbar(false);
        setNavOpen(true);
      } else {
        setMobileNavbar(true);
        setNavOpen(false);
      }
    };
  }, [window.innerWidth]);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        onNavBtnClick={handleNavToggle}
        scrolled={scrolled}
        mobileNavbar={mobileNavbar}
      />
      {mobileNavbar && (
        <Nav
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          onNavOverlayClick={handleNavOverlayClick}
          mobileNavbar={mobileNavbar}
        />
      )}
    </header>
  );
}
