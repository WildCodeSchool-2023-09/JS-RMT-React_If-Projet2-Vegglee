import React from "react";
import "./NosProducteurs.css";

function NosProducteurs() {
  return (
    <div>
      <h1 className="producteur">Nos Producteurs</h1>
      <h2 className="allProducteur">Jean Louis,Alex Rigonni,Michel Dirige</h2>
      <h1 className="oneProducteur">Producteur de la semaine !</h1>
      <div className="allProduct">
        <h1 className="producteurWeek">Richard Delieu</h1>
        <div className="imgCtnProducteur">
          <img
            src="https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2022.2F08.2F13.2F8d087bb4-eff7-486d-83ab-d14d2ed3f8c1.2Ejpeg/1200x1200/quality/80/crop-from/center/ou-trouver-des-producteurs-locaux-facilement-en-supermarche.jpeg"
            alt=""
            className="imgProducteur"
          />

          <img
            src="https://www.mangeons-local.bzh/wp-content/uploads/jardin-kerlomann-6.jpeg"
            alt=""
            className="imgProducteur"
          />

          <img
            src="https://www.giepariscommerces.fr/wp-content/uploads/2021/09/le-producteur-local-paris-13-gie-commerces.jpg"
            alt=""
            className="imgProducteur"
          />
        </div>{" "}
        <div className="textCtnProducteur">
          <h1>Notre Producteur !</h1>
          <h1>Les Jardins</h1>
          <h1>Son Produit</h1>
        </div>
      </div>
    </div>
  );
}

export default NosProducteurs;
