import React from "react";
import "./RecetteCard.css";

function RecetteCard({ recette }) {
  return (
    <div className="recetteCard">
      <img className="imgsCard" src={recette.image} alt={recette.name} />
      <h2 className="titlesOnImageCard">{recette.name}</h2>
    </div>
  );
}

export default RecetteCard;
