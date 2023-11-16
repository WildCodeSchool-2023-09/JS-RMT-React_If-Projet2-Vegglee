import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import "./RecipePage.css";

function RecipePage() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/recipes`)
      .then((response) => {
        const recipeData = response.data;
        setRecipe(recipeData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="titleRecipe">Nos recettes ! </h1>
      <div className="containerRecipe">
        {recipe.map((recipeItem) => (
          <RecipeCard key={recipeItem.id} recipe={recipeItem} />
        ))}
      </div>
    </div>
  );
}
export default RecipePage;
