import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
        totalQuantity:0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
              state.items.push({
                id: newItem.id,
                price: newItem.price,
                img: newItem.img,
                quantity: 1,
                totalPrice: newItem.price,
                name: newItem.name
              });
            } else {
              existingItem.quantity++;
              existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
          },
        removeItemFromCart(state, actions) {
            const id = actions.payload;
            state.totalQuantity--;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity ===  1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        deleteItemFromCart(state, action){
             const id = action.payload;
             const existingItem = state.items[id.index].quantity;
            state.items.splice(id.index, 1);
            state.totalQuantity = state.totalQuantity -existingItem
            // if (existingItem.quantity ===  1) {
            //     state.items = state.items.filter(item => item.id !== id.id);
            // } else {
            //     state.totalQuantity = state.totalQuantity - existingItem.quantity;
            // }
            
    },
}})

export const cartActions = cartSlice.actions;

export default cartSlice