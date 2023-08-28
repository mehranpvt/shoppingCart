import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Layout = () => {

  const isShowCart = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.items) || [];
  let price = 0;
  cartItems.map(t => (
    price += t.totalPrice
  ))

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        {!isShowCart && <Products />}
        {isShowCart && <CartItems />}
        {isShowCart && <div className="total-price">
          <h3>Total: ${price}</h3>
          <button className="orderBtn">Place Order</button>
        </div>}
      </div>
    </React.Fragment>
  );
};

export default Layout;
