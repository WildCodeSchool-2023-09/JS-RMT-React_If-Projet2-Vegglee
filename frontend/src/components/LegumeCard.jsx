// LegumeCard.jsx
import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "./LegumeCard.css";
import axios from "axios";

function LegumeCard({ searchText }) {
  const vegetables = useLoaderData();
  const [filteredVegetables, setFilteredVegetables] = useState(
    vegetables.filter((vegetable) =>
      vegetable.name.toLowerCase().includes(searchText.toLowerCase())
    )
  );
  // Filtrer les légumes en fonction du texte de recherche
  useEffect(() => {
    if (searchText !== "") {
      axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/vegetables?filter=${searchText}`
        )
        .then((res) => setFilteredVegetables(res.data))
        .catch((err) => console.error(err));
    }
  }, [searchText]);

  return (
    <div className="ctnCard">
      {filteredVegetables &&
        filteredVegetables.map((vegetable) => (
          <div key={vegetable.id} className="legumesCard">
            <img
              className="imgCard"
              src={vegetable.image}
              alt={vegetable.name}
            />
            <h2 className="titleOnImageCard">{vegetable.name}</h2>
            <p className="priceCardAll">Prix: {vegetable.price}0 €</p>
          </div>
        ))}
    </div>
  );
}

export default LegumeCard;
