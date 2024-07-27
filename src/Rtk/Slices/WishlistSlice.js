import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const WishlistSlice = createSlice({
    name: "Wishlist",
    initialState,
    reducers: {
        addWishlist: (state, action) => {
            state.items.push(action.payload);
        },
        removeWishlist: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addWishlist, removeWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
