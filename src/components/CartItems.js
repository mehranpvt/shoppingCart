import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {

  const newCartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {newCartItems.map(i => (
          <li key={i.id}>
            <CartItem 
              id={i.id} 
              price={i.price} 
              name={i.name} 
              total={i.totalPrice}
              quantity={i.quantity} 
              />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
