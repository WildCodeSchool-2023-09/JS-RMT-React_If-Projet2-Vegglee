import React from "react";
import { Link } from "react-router-dom";
import "./Paniers.css";

function Panier({ type }) {
  let imageSrc = "";
  let titre = "";

  if (type === "solo") {
    imageSrc =
      "https://cdn.bioalaune.com/img/article/thumb/900x500/28986-10_fruits_et_legumes_a_deguster_en_juillet.webp";
    titre = "Panier solo";
  } else if (type === "duo") {
    imageSrc =
      "https://www.fermes-imagine.fr/wp-content/uploads/2019/04/panier-frais-saison-ferme-lyon.jpg";
    titre = "Panier duo";
  } else if (type === "familial") {
    imageSrc =
      "https://cdn.bioalaune.com/img/article/thumb/900x500/33271-le_guide_des_paniers_bio_et_locaux_par_region.webp";
    titre = "Panier familial";
  }

  return (
    <Link to={`/panier/${type}`} className="panierCard">
      <div className="panierCard">
        <img src={imageSrc} alt={`panier de légumes ${type}`} />
        <div>
          <h2>{titre}</h2>
          <p>Prix du panier</p>
        </div>
      </div>
    </Link>
  );
}

export default Panier;
