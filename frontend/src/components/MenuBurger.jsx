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
      </Menu>
    </div>
  );
}

export default MenuBurger;
