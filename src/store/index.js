import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const reduxstore = configureStore({
    reducer: {
    cart: cartSlice.reducer,
    }
})

export default reduxstore;