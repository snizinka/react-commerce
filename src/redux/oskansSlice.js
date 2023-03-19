import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null
}

export const oskansSlice = createSlice({
    name: "oskans",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find((item) => item._id === action.payload._id);

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload)
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id != action.payload
            )
        },
        resetCart: (state) => {
            state.productData = []
        },
        incrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find(
            (item) => item._id === action.payload._id
            );
            if(item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity -= 1;
            }
        }
    }
})

export const { addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity } = oskansSlice.actions;

export default oskansSlice.reducer;