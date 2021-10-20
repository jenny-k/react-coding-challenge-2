import React from "react";
import { Link } from "react-router-dom";
import WishListMini from "../wishlist/mini";
import logo from "./images/logo.png";

function TopNav() {
  return (
    <div className="d-flex">
      <img src={logo} alt="Logo" className="logo" />
      <div>
        <nav>
          <ul className="main-nav">
            <li>
              <Link to="/">Pets Home</Link>
            </li>
            <li>
              <Link to="/wishlist">View Wishlist</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <WishListMini />
      </div>
    </div>
  );
}

export default TopNav;
