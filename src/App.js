import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from 'react-redux';
import Notifications from "./components/Notifications";
import { fetchData, sendCartData } from "./store/cardRequestData";
let isFirstRender = true;

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartList = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    if(cartList.changed) {
      dispatch(sendCartData(cartList));
    }
    
  }, [cartList, dispatch]);
  
  return (
    <div className="App">
      <Notifications type={ notification.type } message={ notification.message } />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
