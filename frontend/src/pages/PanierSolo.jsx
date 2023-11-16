import React, { useState, useEffect } from "react";
import axios from "axios";

function PanierSolo() {
  const [panierData, setPanierData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/solo_basket")
      .then((response) => {
        setPanierData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Panier Solo</h1>
      {panierData.map((item) => (
        <div key={item.id}>{/* Afficher les données du panier */}</div>
      ))}
    </div>
  );
}

export default PanierSolo;
