import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="/" className="navbar_logo_link">
          <h2>ShopApp</h2>
        </Link>
      </div>
      <div className="nabar_search_fun">
        <input className="navbar_search" placeholder="search items . . ." />
        <i className="fas fa-search"></i>
      </div>

      <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/signin" className="shop_link">
            Shop
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
