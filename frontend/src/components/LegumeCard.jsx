// LegumeCard.jsx
import React, { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import "./LegumeCard.css";
import axios from "axios";

function LegumeCard({ searchText }) {
  const vegetables = useLoaderData();
  const [filteredVegetables, setFilteredVegetables] = useState(vegetables);

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
    } else {
      setFilteredVegetables(vegetables);
    }
  }, [searchText]);

  return (
    <div className="ctnCard">
      {filteredVegetables &&
        filteredVegetables.map((vegetable) => (
          <Link to={`/vegetables/${vegetable.id}`} key={vegetable.id}>
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
