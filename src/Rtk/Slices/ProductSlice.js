import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    ProductDetails: {},
};

export const ProductSlice = createSlice({

    name: "Products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        updateProduct: (state, action) => {
            state.products = state.products.map((product) => {
                if (product.id === action.payload.id) {
                    return action.payload;
                }
                return product;
            },)
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        setProductDetails: (state, action) => {
            state.ProductDetails[action.payload.id] = action.payload;
        },
    },
});

export const { addProduct, updateProduct, deleteProduct, getProductDetails } = ProductSlice.actions;

export default ProductSlice.reducer;

        
