export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="navbarLogo">
          img + logo ( change this div into Link instead)
        </div>
        <nav className="nav">
          3 Links for Each Page (about, projects, contact)
        </nav>
        <div className="btnMenuContainer">
          <button className="btnMenu">btnMenu</button>
        </div>
      </div>
      <div className="navOverlay">
        move nav tag in here when expanded in mobile
      </div>
    </div>
  );
}
