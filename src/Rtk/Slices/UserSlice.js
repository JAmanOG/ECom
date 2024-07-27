import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Profile: null,
    isAuthenticate: false,
    orderHistory: [],
};

export const UserSlice = createSlice({
    name: "Profile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.isAuthenticate = true
            state.Profile = action.payload;
        },
        setOrderHistory: (state, action) => {
            state.orderHistory = action.payload;

        },
        clearUserProfile: (state) => {
            state.Profile = null;
            state.isAuthenticate = false;
        }
    },
});

export const { setProfile, setOrderHistory, clearUserProfile } = UserSlice.actions;

export default UserSlice.reducer;