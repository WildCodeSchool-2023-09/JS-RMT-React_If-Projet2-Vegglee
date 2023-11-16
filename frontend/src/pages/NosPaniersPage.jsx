import React from "react";
import Panier from "../components/Panier";
import "./NosPaniersPage.css";

function NosPaniersPage() {
  return (
    <div className="fondPage">
      <h1 className="titreNosPaniers">Nos Paniers</h1>
      <div className="nosPaniers">
        <Panier type="solo" />
        <Panier type="duo" />
        <Panier type="family" />
      </div>
    </div>
  );
}

export default NosPaniersPage;
