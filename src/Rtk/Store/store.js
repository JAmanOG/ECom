import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slices/authSlice'
import {persistReducer} from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const rootreducer = combineReducers({
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootreducer)
// import CartSlice from '../Slices/CartSlice'
// import ProductSlice from '../Slices/ProductSlice'
// import UserSlice from '../Slices/UserSlice'
// import WishlistSlice from '../Slices/WishlistSlice'
// import OrderSlice from '../Slices/OrderSlice'

export const store = configureStore({
    reducer: persistedReducer,
    // cart: CartSlice,
    // product: ProductSlice,
    // user: UserSlice,
    // wishlist: WishlistSlice,
    // order: OrderSlice,
})

export default store