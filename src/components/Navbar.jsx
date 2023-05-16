import { Link } from "react-router-dom";

import Nav from "./Nav";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="navbarLogo">
          <Link to="/">Soojeong Park</Link>
        </div>

        <div className="btnMenuContainer">
          <button className="btnMenu">btnMenu</button>
        </div>
      </div>

      <div className="navOverlay">
        <Nav />
      </div>
    </div>
  );
}
