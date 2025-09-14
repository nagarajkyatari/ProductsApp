import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};
const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existing = state.items.find(item => item.id === newItem.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    image: newItem.image,
                    quantity: 1
                });
            }
            console.log(' added to cart\n', state.items);
        },
        removeItem: (state, action) => {

        }
    }
})

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;