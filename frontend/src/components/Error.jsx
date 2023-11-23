import React from "react";
import "./Error.css";
import logo from "../assets/404img.png";

function Error() {
  return (
    <div className="ctnError">
      <h1 className="textError">Error 404</h1>
      <h1 className="textError">
        Retourne acheter ou tu finira comme cette carotte !
      </h1>
      <img className="imgError" src={logo} alt="Logo Vegglee" />
    </div>
  );
}

export default Error;
