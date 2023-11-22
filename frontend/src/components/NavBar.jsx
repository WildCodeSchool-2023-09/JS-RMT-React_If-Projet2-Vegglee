import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/logo_vegglee.jpg";
import MenuBurger from "./MenuBurger";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Logo">
        <Link to="/404">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="NavLink">
        <Link to="/">Home</Link>
        <Link to="/nos-paniers">Nos paniers</Link>
        <Link to="/recettes">Nos recettes</Link>
        <Link to="/nos-producteurs">Nos Producteurs</Link>
        <Link to="/Formulaire">S'inscrire</Link>
      </div>
      <div className="burgerVisible">
        <MenuBurger />
      </div>
    </div>
  );
}

export default NavBar;
