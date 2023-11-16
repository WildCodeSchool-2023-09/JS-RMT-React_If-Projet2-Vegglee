import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./OneRecipe.css";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/recettes/${id}`)
      .then((response) => {
        const recipeData = response.data;
        setRecipe(recipeData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      {recipe && (
        <>
          <h2 className="recipeName">{recipe.name}</h2>
          <img className="recipeImg" src={recipe.image} alt={recipe.name} />
          <p className="recipeTime">
            {recipe.time} • {recipe.difficulty} • {recipe.price}
          </p>

          <h3 className="recipePeople">Ingrédients • 2 personne</h3>
          <div className="ingredients">
            {recipe.ingredients.split("|").map((ingredient) => (
              <p key={ingredient} className="recipeIngredient">
                {ingredient}
              </p>
            ))}
            <h3 className="recipePrep">
              Préparation : {recipe.preparation} | Cuisson : {recipe.cuisson}
            </h3>
          </div>
          <div className="recipeRecette">
            {recipe.recette.split("|").map((recette) => (
              <p key={recette} className="recipeRecette">
                {recette}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;
