import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginStatus: false,
    userData : null 
    };

export const storeSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoginStatus= true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.isLoginStatus = false;
            state.userData = null;
        },
        loginStatus: (state, action) => {
            state.isLoginStatus = action.payload;
        },
    },
});

export const { login, logout, loginStatus } = storeSlice.actions;

export default storeSlice.reducer;