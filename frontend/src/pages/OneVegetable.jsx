import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./OneVegetable.css";

function VegetableDetail() {
  const { id } = useParams();
  const [vegetable, setVegetable] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/vegetables/${id}`)
      .then((response) => {
        const vegetableData = response.data;
        setVegetable(vegetableData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      {vegetable && (
        <>
          <img src={vegetable.image} alt={vegetable.name} className="bigImg" />
          <div className="rectangle" />
          <div className="separate" />
          <h2 className="name">{vegetable.name}</h2>
          <h2 className="quantity">Quantité: {vegetable.quantityAvailable}</h2>
          <p className="price">Prix: {vegetable.price}0 €</p>
          <div className="centeredImage">
            <img
              src={vegetable.image}
              alt={vegetable.name}
              className="smallImg"
            />
          </div>
          <p className="description">{vegetable.description}</p>
        </>
      )}
    </div>
  );
}

export default VegetableDetail;
