import React from "react";
import { Link } from "react-router-dom";

function WishlistList() {
  return (
    <div>
      <div>
        <Link to="/detail/1">Wishlist Items</Link>
      </div>
      <div>
        <Link to="/detail/2">Wishlist Items</Link>
      </div>
      <div>
        <Link to="/detail/3">Wishlist Items</Link>
      </div>
      <div>
        <Link to="/detail/4">Wishlist Items</Link>
      </div>
      <div>
        <Link to="/detail/5">Wishlist Items</Link>
      </div>
    </div>
  );
}

export default WishlistList;
