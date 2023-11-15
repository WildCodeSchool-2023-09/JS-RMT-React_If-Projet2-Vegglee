import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipeCard">
      <img className="imgRecipeCard" src={recipe.image} alt={recipe.name} />
      <h2 className="titlesOnImageCard">{recipe.name}</h2>
    </div>
  );
}

export default RecipeCard;
