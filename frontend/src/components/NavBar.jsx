import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavLink">
        <Link to="/">Home</Link>
        <Link to="/nos-paniers">Nos paniers</Link>
      </div>
    </div>
  );
}

export default NavBar;
