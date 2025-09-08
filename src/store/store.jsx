import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from './slices/ProductSlice'
const store = configureStore({
    reducer: {
        Products: ProductsSlice,
    }
})

export default store;