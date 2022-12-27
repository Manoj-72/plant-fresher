import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";

const reduxstore = configureStore({
    reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer
    }
})

export default reduxstore;