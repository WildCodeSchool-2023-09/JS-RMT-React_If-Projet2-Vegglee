import React from "react";
import "./Paniers.css";

function PanierDuo() {
  return (
    <div className="panierCard">
      <div className="panierCardPicture">
        <img
          src="https://www.fermes-imagine.fr/wp-content/uploads/2019/04/panier-frais-saison-ferme-lyon.jpg"
          alt="panier de légumes"
        />
      </div>
      <div className="panierCardInfo">
        <h2>Panier duo</h2>
        <p>Prix du panier</p>
        <button type="button">Voir le panier</button>
      </div>
    </div>
  );
}

export default PanierDuo;
