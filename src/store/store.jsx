import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from './slices/ProductSlice';
import CartSlice from './slices/CartSlice'
const store = configureStore({
    reducer: {
        Products: ProductsSlice,
        Cart: CartSlice,
    }
})

export default store;