import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
          <img src={recipe.image} alt={recipe.name} className="bigImg" />
          <div className="rectangle" />
          <div className="separate" />
          <h2 className="name">{recipe.name}</h2>
          <h2 className="quantity">Quantité: {recipe.quantityAvailable}</h2>
          <p className="price">Prix: {recipe.price}0 €</p>
          <div className="centeredImage">
            <img src={recipe.image} alt={recipe.name} className="smallImg" />
          </div>
          <p className="description">{recipe.description}</p>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;
