import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-bar">
        <NavLink to="/">Order</NavLink>
        <NavLink to="/order-review">Order Review</NavLink>
        <NavLink to="/manage-inventory">Manage Inventory</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sing up</NavLink>
      </div>
    </div>
  );
};

export default Header;
