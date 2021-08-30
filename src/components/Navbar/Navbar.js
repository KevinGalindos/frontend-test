import { Link } from "@reach/router"

import WacoServices from '../../assets/logo-h.png'

import "./Navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_content">
          <div className="navbar_content_logo">
            <Link to="/">
              <img src={WacoServices} alt="Waco services" />
            </Link>
          </div>

          <div className="navbar_content_links">
            <ul className="list-items">
              <li className="item-link">
                <Link to="/">INICIO</Link>
              </li>
              <li className="item-link">
                <Link to="/">BENEFICIOS</Link>
              </li>
              <li className="item-link">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
