import React from "react";
import star from "./images/star.png";
import WishlistList from "./list";

function WishlistMini() {
  return (
    <div className="wishlist">
      <div>
        <img src={star} alt="Wishlist" className="wishlist__star" />
        <div className="wishlist__count">
          <strong>3</strong>
        </div>
      </div>
      <div className="wishlist__list">
        <WishlistList />
      </div>
    </div>
  );
}

export default WishlistMini;
