import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../store/cartReducer";
import { logout } from "../store/authReducer";

const Cart = () => {
  const qty = useSelector((state) => state.cart.items.length);
  const dispatch = useDispatch();

  function showCartPanel() {
    dispatch(setShowCart(true));
  }

  function handleLogOut() {
    dispatch(logout());
  }

  return (
    <div className="cartIcon">
      <h3 onClick={showCartPanel}>Cart: {qty} Items</h3>
      <h3 onClick={handleLogOut}>Log Out</h3>
    </div>
  );
};

export default Cart;
