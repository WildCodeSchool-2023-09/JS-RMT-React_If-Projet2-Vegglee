import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo_vegglee.jpg";

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">
        <img src={logo} alt="Logo Vegglee" />
      </Link>
      <div className="NavLink">
        <Link to="/">Home</Link>
        <Link to="/nos-paniers">Nos Paniers</Link>
        <Link to="/recettes">Nos Recettes</Link>
      </div>
    </div>
  );
}

export default NavBar;
