import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/Logo.Vegglee.jpg";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="NavLink">
        <Link to="/">Home</Link>
        <Link to="/NosPaniers">Nos paniers</Link>
        <Link to="/NosRecettes">Nos recettes</Link>
        <Link to="/Contact">S'inscrire</Link>
      </div>
    </div>
  );
}

export default NavBar;
