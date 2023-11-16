import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PanierDetailsPage.css";

function PanierDetailsPage() {
  const [panierData, setPanierData] = useState([]);
  const { type: panierType } = useParams();

  const getPanierInfo = (type) => {
    const info = { imageUrl: "", prix: "" };

    if (type === "solo") {
      info.imageUrl =
        "https://cdn.bioalaune.com/img/article/thumb/900x500/28986-10_fruits_et_legumes_a_deguster_en_juillet.webp";
      info.prix = "20€";
    } else if (type === "duo") {
      info.imageUrl =
        "https://www.fermes-imagine.fr/wp-content/uploads/2019/04/panier-frais-saison-ferme-lyon.jpg";
      info.prix = "35€";
    } else if (type === "family") {
      info.imageUrl =
        "https://cdn.bioalaune.com/img/article/thumb/900x500/33271-le_guide_des_paniers_bio_et_locaux_par_region.webp";
      info.prix = "48€";
    }

    return info;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/${panierType}_basket`
        );
        setPanierData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [panierType]);

  const displayPanierData = () => {
    const panierInfo = getPanierInfo(panierType);
    return (
      <div className="ContainerPanier">
        <div className="TitlePanier">
          <h1>Panier {panierType}</h1>
          <h2>{panierInfo.prix}</h2>
        </div>
        <div className="DescriptionPanier">
          <div className="table">
            {panierData.map((item) => (
              <div key={item.id}>
                <p className="nameProduct">{item.product_name}</p>
                <p>{item.quantity_or_weight}</p>
              </div>
            ))}
          </div>
          <div className="ImagePanier">
            <img
              src={panierInfo.imageUrl}
              alt={`panier de légumes ${panierType}`}
            />
          </div>
        </div>
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
