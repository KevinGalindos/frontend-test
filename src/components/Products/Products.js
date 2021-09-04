import ProductsImage from "../../assets/app-america.png";

import "./Products.scss";

export const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="products_banner-img">
          <img src={ ProductsImage } alt="Productos waco services" />
        </div>

        <div className="products_banner-text">
          <h3>
            Trabajamos para <b>Convertir ideas</b> en <b>Productos</b>
          </h3>
        </div>
      </div>
    </div>
  );
};
