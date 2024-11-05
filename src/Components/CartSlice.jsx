import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // First reducer item is check adding item to cart
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id ===action.payload.id);
            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({...action.payload, quantity: 1 });
            }
    },
    // Second item is to remove the cart
    removeItemFromCart(state, action) {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    // third, clear all items in the cart
    clearCart(state) {
        state.cartItems = [];
    },
    // Forth, increase quantity for a specific item
    increaseItemQuantity(state, action) {
        const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
        if(itemToIncrease) {
            itemToIncrease.quantity += 1;
        }
    },
    // Fifth, decrease quantity for a specific item
    decreaseItemQuantity(state, action) {
        const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
        if(itemToDecrease && itemToDecrease.quantity > 1) {
            itemToDecrease.quantity -= 1;
        }
    },

    }

});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;