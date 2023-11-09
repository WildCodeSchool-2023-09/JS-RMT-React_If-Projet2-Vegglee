import React from "react";
import PanierSolo from "../components/PanierSolo";
import PanierDuo from "../components/PanierDuo";
import PanierFamilial from "../components/PanierFamilial";

function NosPaniersPage() {
  return (
    <div>
      <PanierSolo />
      <PanierDuo />
      <PanierFamilial />
    </div>
  );
}

export default NosPaniersPage;
