import React from "react";

function RecetteCard({ recette }) {
  return (
    <div className="legumesCard">
      <img className="imgCard" src={recette.image} alt={recette.name} />
      <h2 className="titleOnImageCard">{recette.name}</h2>
      <p>Prix: {recette.price}0 €</p>
    </div>
  );
}

export default RecetteCard;
