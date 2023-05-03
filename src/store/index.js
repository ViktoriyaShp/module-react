import { configureStore } from "@reduxjs/toolkit";

// import products from '../store/reducers/products'

import productReducer from './reducers/products'

export const store = configureStore({
    reducer: {
        // products: products
        productReducer
    },
})