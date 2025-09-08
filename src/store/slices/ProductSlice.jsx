import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'Products/fetchProducts',
    async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        return data?.products;
    }

)



const initialState = {
    data: [],
    loading: true,
    error: false
};


const ProductsSlice = createSlice({

    name: 'Products',
    initialState: initialState,
    reducers: {
        getProducts: (state, action) => {
            // return state.push(action.payload) ;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export const { getProducts, } = ProductsSlice.actions;
export default ProductsSlice.reducer;