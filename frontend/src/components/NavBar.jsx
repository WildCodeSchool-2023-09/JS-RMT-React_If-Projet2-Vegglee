import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.vegglee.jpg";

function NavBar() {
  return (
    <div>
      <img src={Logo} alt="logo" />

      <div className="NavLink">
        <Link to="/">Home</Link>
        <Link to="/nos-paniers">Nos Paniers</Link>
      </div>
    </div>
  );
}

export default NavBar;
