import Instagram from "../../assets/instagram.svg";

import "./MoreInfo.scss";

export const MoreInfo = () => {
  return (
    <div className="more-info">
      <div className="container">
        <div className="text">
          <h3>
            Gracias por <b>completar el ejercicio </b>
            <p>Te invitamos a ver más información</p>
          </h3>
        </div>

        <div className="btns">
          <a
            href="https://www.instagram.com/waconomads/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram Waco services " />
          </a>

          <button>
            <a
              href="https://wacoservices.com/"
              target="_blank"
              rel="noreferrer"
            >
              Conocer más
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
