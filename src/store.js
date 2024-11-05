import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Components/CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// the configured Redux store (store) is exported from the module, making it available for use throughout the application

export default store;