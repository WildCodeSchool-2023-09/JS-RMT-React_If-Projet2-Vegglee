import React from "react";
import Panier from "../components/Panier";
import "./NosPaniersPage.css";
import NavBar from "../components/NavBar";

import baskets from "../assets/basket.json";

function NosPaniersPage() {
  return (
    <div className="fondPage">
      <NavBar />
      <h1 className="titreNosPaniers">Nos Paniers</h1>
      <div className="nosPaniers">
        {baskets.map((basket) => (
          <Panier
            key={basket.type}
            type={basket.type}
            imageSrc={basket.imageSrc}
            titre={basket.titre}
            prix={basket.prix}
          />
        ))}
      </div>
    </div>
  );
}

export default NosPaniersPage;
