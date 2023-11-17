import React from "react";
import Panier from "../components/Panier";
import "./NosPaniersPage.css";
import NavBar from "../components/NavBar";

function NosPaniersPage() {
  return (
    <div className="fondPage">
      <NavBar />
      <h1 className="titreNosPaniers">Nos Paniers</h1>
      <div className="nosPaniers">
        <Panier type="solo" />
        <Panier type="duo" />
        <Panier type="familial" />
      </div>
    </div>
  );
}

export default NosPaniersPage;
