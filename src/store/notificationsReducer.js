import { createSlice } from '@reduxjs/toolkit';

const notifications = createSlice({
    name: 'notifications',
    initialState: {notification: {
        message: '',
        type: '',
        open: false
    }},
    reducers: {
        showNotification(state, action) {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})

export const { showNotification } = notifications.actions

export default notifications.reducer