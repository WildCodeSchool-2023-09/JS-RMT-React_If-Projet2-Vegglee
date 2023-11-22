import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { slide as Menu } from "react-burger-menu";
import "./MenuBurger.css";

function MenuBurger() {
  return (
    <div className="burgerVisible">
      <Menu>
        <Link to="/" className="menu-items">
          Home
        </Link>
        <Link to="/nos-paniers" className="menu-items">
          Nos paniers
        </Link>
        <Link to="/recettes" className="menu-items">
          Nos Recettes
        </Link>
        <Link to="/nos-producteurs" className="menu-items">
          Nos Producteurs
        </Link>
        <Link to="/Formulaire" className="menu-items">
          S'inscrire
        </Link>
      </Menu>
    </div>
  );
}

export default MenuBurger;
