import { createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    currentOrder: [],
    orderHistory: [],
};

export const OrderSlice = createSlice({
    name: "Orders",
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.currentOrder.push(action.payload);
        },
        updateOrder: (state, action) => {
            state.currentOrder = state.currentOrder.map((order) => {
                if (order.id === action.payload.id) {
                    return action.payload;
                }
                return order;
            },)
        },
        deleteOrder: (state, action) => {
            state.currentOrder = state.currentOrder.filter((order) => order.id !== action.payload);
        },
        setOrderHistory: (state, action) => {
            state.orderHistory = action.payload;
        },
    },
});

export const { addOrder, updateOrder, deleteOrder, setOrderHistory } = OrderSlice.actions;

export default OrderSlice.reducer;