import { Link } from "@reach/router";

import LogoWaco from "../../assets/logo-h.png";

import './Footer.scss'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <Link to="/">
            <img src={LogoWaco} alt="Waco services" />
          </Link>
        </div>
      </div>
    </div>
  );
};
