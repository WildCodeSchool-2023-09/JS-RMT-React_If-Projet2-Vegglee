import React from "react";
import "./LegumeCard.css";

function LegumeCard({ legume }) {
  return (
    <div className="legumesCard">
      <img className="imgCard" src={legume.image} alt={legume.name} />
      <h2 className="titleOnImageCard">{legume.name}</h2>
      <p>Prix: {legume.price}0 €</p>
    </div>
  );
}

export default LegumeCard;
