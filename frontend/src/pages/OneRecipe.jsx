import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./OneRecipe.css";
import NavBar from "../components/NavBar";

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
      <NavBar />
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
              Préparation : {recipe.preparation} | Cuisson : {recipe.cooking}
            </h3>
          </div>
          <div className="cookingRecipe">
            {recipe.cookingRecipe.split("|").map((cookingRecipe) => (
              <p key={cookingRecipe} className="cookingRecipe">
                {cookingRecipe}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;
