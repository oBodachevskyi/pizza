import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizzaToCart(state, action) {
            const findItem = state.find((obj) => obj.key === action.payload.key);

            if (findItem) {
          
                findItem.value++;
            } else {
                state.push({
                    ...action.payload,
                    value:1
                });
      
            
            }
         
        },
        deacresePizzaFromCart(state, action) {
            const findItem = state.find((obj) => obj.key === action.payload.key);
            if (findItem) {
          
                findItem.value--;
            }

        },
        deletePizzaFromCart(state, action) { 
            return state.filter(item => item.key !== action.payload)
        },
        cleanCart(state, action) {
            return initialState; 
            
        }
       
    }
})

export const { addPizzaToCart, cleanCart, deletePizzaFromCart, deacresePizzaFromCart } = cartSlice.actions;

export default cartSlice.reducer