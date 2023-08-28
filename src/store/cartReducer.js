import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
        showCart: false,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.total = action.payload.totalPrice;
            state.items = action.payload.items
        },
        addToCart(state, action) {
            state.changed = true;
            const newItem = action.payload;
            // check available item
            const existingItem = state.items.find(i => i.id === newItem.id);
            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice:  newItem.price,
                    name: newItem.name
                })
                state.total++;
            }
        },
        removeFromCart(state, action) {
            state.changed = true;
            const id = action.payload
            const existingItem = state.items.find(i => i.id === id);
            if(existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            } else if(existingItem.quantity === 1) {
                // state.items.splice((id - 1), 1);
                state.total--;
                state.items = state.items.filter(i => i.id !== id)
            }
        },
        setShowCart(state, action) {
            state.showCart = action.payload;
        }
    }
})

export const {addToCart, removeFromCart, setShowCart, replaceCart} = cartSlice.actions

export default cartSlice.reducer;