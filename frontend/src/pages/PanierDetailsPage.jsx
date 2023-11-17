import React from "react";
import { useLoaderData } from "react-router-dom";
import "./PanierDetailsPage.css";
import baskets from "../assets/basket.json";

function PanierDetailsPage() {
  const { paniers, type } = useLoaderData();
  const info = baskets.find((basket) => basket.type === type);

  return (
    <div className="ContainerPanier">
      <div className="TitlePanier">
        <h1>{info.titre}</h1>
        <h2>{info.prix}</h2>
      </div>
      <div className="DescriptionPanier">
        <div className="table">
          {paniers.map((panier) => (
            <div key={panier.id}>
              <p className="nameProduct">{panier.product_name}</p>
              <p>{panier.quantity_or_weight}</p>
            </div>
          ))}
        </div>
        <div className="ImagePanier">
          <img src={info.imageSrc} alt={`panier de légumes ${type}`} />
        </div>
      </div>
    </div>
  );
}

export default PanierDetailsPage;
