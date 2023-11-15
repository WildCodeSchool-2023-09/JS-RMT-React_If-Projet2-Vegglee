import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import "./RecipePage.css";

function RecipePage() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/recettes`)
      .then((response) => {
        const recipeData = response.data;
        setRecipe(recipeData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (recipe === null) {
    return null;
  }

  return (
    <div>
      <h1 className="titleRecipe">Nos recettes ! </h1>
      <div className="containerRecipe">
        {recipe.map((recipeItem) => (
          <Link to={`/recettes/${recipeItem.id}`} key={recipeItem.id}>
            <RecipeCard key={recipeItem.id} recipe={recipeItem} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default RecipePage;
