import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  const SideDrawerClass = ["sidedrawer"];
  if (show) {
    SideDrawerClass.push("show");
  }
  return (
    <div className={SideDrawerClass.join(" ")}>
      <ul className="sidedrawer_links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart {""}
              <span className="sidedrawer_cartbadge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
