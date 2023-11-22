import React from "react";
import { Link } from "react-router-dom";
import "./Paniers.css";

function Panier({ type, prix, imageSrc, titre }) {
  return (
    <div className="panierCardCtn">
      <div className="panierCard">
        <img src={imageSrc} alt={`panier de légumes ${type}`} />
        <div>
          <h2>{titre}</h2>
          <p>{prix}</p>
          <Link to={`/nos-paniers/${type}`}>Voir le panier</Link>
        </div>
      </div>
    </div>
  );
}

export default Panier;
