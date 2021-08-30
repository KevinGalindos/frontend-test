import { Link } from "@reach/router";

import Instagram from "../../assets/instagram.svg";

import "./MoreInfo.scss";

export const MoreInfo = () => {
  return (
    <div className="more-info">
      <div className="container">
        <div className="text">
          <h3>
            Gracias por <b>completar el ejercicio</b>
            <span>Te invitamos a ver más información</span>
          </h3>
        </div>

        <div className="btns">
          <Link to="" target="_blank">
            <img src={Instagram} alt="Instagram Waco services " />
          </Link>

          <button>Conocer más</button>
        </div>
      </div>
    </div>
  );
};
