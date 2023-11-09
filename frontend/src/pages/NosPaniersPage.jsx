import React from "react";
import PanierSolo from "../components/PanierSolo";
import PanierDuo from "../components/PanierDuo";
import PanierFamilial from "../components/PanierFamilial";
import "./NosPaniersPage.css";

function NosPaniersPage() {
  return (
    <div className="fondPage">
      <div className="nosPaniers">
        <PanierSolo />
        <PanierDuo />
        <PanierFamilial />
      </div>
    </div>
  );
}

export default NosPaniersPage;
