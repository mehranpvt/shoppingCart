import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from "react-redux";
import { setShowCart } from "../store/cartReducer";
const Header = () => {

  const dispatch = useDispatch()
  function goHome() {
    dispatch(setShowCart(false))
  }

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px", cursor: "pointer" }}
              onClick={goHome}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
