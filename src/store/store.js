import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import notificationsReducer from "./notificationsReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer,
        notification: notificationsReducer
    }
})

export default store;