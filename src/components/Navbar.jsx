import { Link } from "react-router-dom";

export default function Navbar({ onNavBtnClick }) {
  return (
    <div className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <h4 className="logo__text">Soojeong P</h4>
        </Link>

        <div className="btn--menu-container">
          <button className="btn--menu" onClick={onNavBtnClick}>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
