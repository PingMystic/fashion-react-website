import { TfiClose } from "react-icons/tfi";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ menuActive, onMenuActive }) {
  const menuElement = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuElement.current && !menuElement.current.contains(event.target)) {
        onMenuActive(false);
      }
    };

    if (menuActive) {
      document.body.classList.add("slide-active");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("slide-active");
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.classList.remove("slide-active");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuActive]);

  return (
    <div className={menuActive ? "navbar active" : "navbar"} ref={menuElement}>
      <div className="title">
        <TfiClose onClick={() => onMenuActive(false)} />
        <h2 className="logo">
          <a href="#">DUROTAN</a>
        </h2>
      </div>
      <ul>
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
          <a href="#pages">PAGES</a>
        </li>
        <li>
          <a href="#news">NEWS</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
      </ul>
    </div>
  );
}
