import { TfiSearch } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const {
    setCartActive,
    cartActive,
    searchActive,
    setSearchActive,
    cart,
    cartTotal,
  } = useGlobalContext();

  return (
    <div className="sidebar">
      <div className="col">
        <h2 className="logo">
          <Link to="/">DUROTAN</Link>
        </h2>
        <div
          className="search-input"
          onClick={() => setSearchActive(!searchActive)}
        >
          <input type="text" placeholder="Search here..." />
          <TfiSearch />
        </div>
        <div className="icons">
          <div className="cart-icon" onClick={() => setCartActive(!cartActive)}>
            <BsCart />
            <span className="count">{cart.length}</span>
            <span className="total-price">${cartTotal}</span>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <a href="#">Bags</a>
          </li>
          <li>
            <a href="#">Shoes</a>
          </li>
          <li>
            <a href="#">Perfumes</a>
          </li>
        </ul>
        <ul className="nav-menu">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">OUR JOURNAL</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">HELP / FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
