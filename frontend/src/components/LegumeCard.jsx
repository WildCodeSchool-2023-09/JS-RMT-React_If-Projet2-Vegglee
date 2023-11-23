import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LegumeCard.css";

function LegumeCard({ searchText, categories, fetchCategories, filter }) {
  const [filteredVegetables, setFilteredVegetables] = useState([]);
  useEffect(() => {
    const query = searchText !== "" ? `?filter=${searchText}` : "";

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/vegetables${query}`)
      .then((res) => setFilteredVegetables(res.data))
      .catch((err) => console.error(err));
  }, [searchText]);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories, fetchCategories]);

  return (
    <div className="ctnCard">
      {filteredVegetables
        .filter(
          (vegetable) => vegetable.categorie_id === +filter || filter === "0"
        )
        .map((vegetable) => (
          <Link
            className="linkVegetableCard"
            to={`/vegetables/${vegetable.id}`}
            key={vegetable.id}
          >
            <div className="legumesCard">
              <img
                className="imgCard"
                src={vegetable.image}
                alt={vegetable.name}
              />
              <h2 className="titleOnImageCard">{vegetable.name}</h2>
              <p className="priceCardAll">Prix: {vegetable.price}0 €</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default LegumeCard;
