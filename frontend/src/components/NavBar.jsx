import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.jpg";
import MenuBurger from "./MenuBurger";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="NavLink">
        <Link to="/">Home</Link>
        <Link to="/nos-paniers">Nos paniers</Link>
      </div>
      <div className="burgerVisible">
        <MenuBurger />
      </div>
    </div>
  );
}

export default NavBar;
