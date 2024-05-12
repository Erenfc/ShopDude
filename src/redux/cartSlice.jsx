import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem('cart')) ?? [],
    reducers: {

        addToCart(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state[itemIndex].quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },

        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },

        incrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        clearCart: () => {
            return [];
        }
    },
});

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;