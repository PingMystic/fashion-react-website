import { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import Navbar from "./Navbar";
import { BsSuitHeart } from "react-icons/bs";
import { useGlobalContext } from "../context";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const {
    setCartActive,
    cartActive,
    setWishlistOpen,
    cart,
    searchActive,
    setSearchActive,
  } = useGlobalContext();

  return (
    <div className="header">
      <div className="container">
        <div className="title">
          <button
            className="bar-icon"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h2 className="logo">
            <a href="#">DUROTAN</a>
          </h2>
        </div>
        <div className="icons">
          <TfiSearch onClick={() => setSearchActive(!searchActive)} />
          <div className="cart-icon" onClick={() => setCartActive(!cartActive)}>
            <BsCart />
            <span className="count">{cart.length}</span>
          </div>
          <div
            className="wishlist-btn"
            onClick={() => {
              setWishlistOpen(true);
            }}
          >
            <BsSuitHeart />
          </div>
        </div>
      </div>
      <Navbar menuActive={menuActive} onMenuActive={setMenuActive} />
    </div>
  );
}
