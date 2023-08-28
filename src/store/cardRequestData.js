import { replaceCart } from "./cartReducer";
import { showNotification } from "./notificationsReducer";

export const fetchData = () => {
    return async(dispatch) => {
        const fetchHandler = async() => {
            const res = await fetch('https://react-redux-shop-cart-default-rtdb.firebaseio.com/cartItems.json');
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await fetchHandler();
            dispatch(replaceCart(cartData))
        } catch (err) {
            dispatch(showNotification({
                open: true,
                message: 'sending request failed',
                type: 'error'
              }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(showNotification({
            open: true,
            message: 'sending request to database',
            type: 'warning'
          })
        );
        async function sendRequest() {
      
            const res = await fetch('https://react-redux-shop-cart-default-rtdb.firebaseio.com/cartItems.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })
            const data = await res.json();
            dispatch(showNotification({
                open: true,
                message: 'send request to database successfully',
                type: 'success'
            }))
        };
        try {
            await sendRequest();
        } catch(err) {
            dispatch(showNotification({
                open: true,
                message: 'sending request failed',
                type: 'error'
              }))
        }
    }
}