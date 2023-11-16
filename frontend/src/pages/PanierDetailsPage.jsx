import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PanierDetailsPage() {
  const [panierData, setPanierData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/${type}_basket`
        );
        setPanierData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [type]);

  const displayPanierData = () => {
    return (
      <div>
        <h1>Panier {type}</h1>
        {panierData.map((item) => (
          <div key={item.id}>
            <p>{item.product_name}</p>
            <p>{item.quantity_or_weight}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {panierData.length === 0 ? <p>Loading...</p> : displayPanierData()}
    </div>
  );
}

export default PanierDetailsPage;
