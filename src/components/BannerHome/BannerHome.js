import WacoBanner from "../../assets/banner-text-logo.png";

import "./BannerHome.scss";

export const BannerHome = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="paragraph">
          <h3>
            Bienvenido a tu{" "}
            <span>
              <b>Entrevista Tecnica</b> en
            </span>
            <img src={WacoBanner} alt="Waco services" />
          </h3>
        </div>
      </div>
    </div>
  );
};
