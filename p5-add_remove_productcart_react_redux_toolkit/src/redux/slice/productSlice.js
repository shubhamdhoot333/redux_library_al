import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: [],
    },
    reducers: {
        addProductToCart: (state, action) => {
            console.log(action.payload)
            state.value.push(action.payload)
        },
        removeProductToCart: (state, action) => {
            const removeItem = state.value.filter((item) => item.id !== action.payload);
            state.value = removeItem;
            console.log(state.value)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addProductToCart, removeProductToCart } = productSlice.actions

export default productSlice.reducer