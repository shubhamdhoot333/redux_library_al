import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slice/productSlice'
export default configureStore({
    reducer: {
        Addproduct: productReducer
    },
})