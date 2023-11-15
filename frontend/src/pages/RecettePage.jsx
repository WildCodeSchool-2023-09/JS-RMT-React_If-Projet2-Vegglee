import React, { useEffect, useState } from "react";
import axios from "axios";
import RecetteCard from "../components/RecetteCard";
import "./RecettePage.css";

function RecettePage() {
  const [recettes, setRecettes] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/recettes`)
      .then((response) => {
        const recettesData = response.data;
        setRecettes(recettesData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (recettes === null) {
    return null;
  }

  return (
    <div>
      <h1 className="titre">Nos Recettes ! </h1>
      <div className="container">
        {recettes.map((recette) => (
          <RecetteCard key={recette.id} recette={recette} />
        ))}
      </div>
    </div>
  );
}
export default RecettePage;
