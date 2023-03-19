import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null
}

export const oskansSlice = createSlice({
    name:"oskans",
    initialState,
    reducers:{
        addToCart:(state, action) => {
            state.productData = action.payload
        }
    }
})

export const { addToCart } = oskansSlice.actions;

export default oskansSlice.reducer;