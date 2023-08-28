import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartReducer";

const CartItem = ({ name, quantity, total, price, id }) => {

  const dispatch = useDispatch()
  const removeHandler = () => {
    dispatch(removeFromCart(id))
  };
  const addHandler = () => {
    dispatch(addToCart({
      name, quantity, total, price, id
    }))
  };
  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
