import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slices/authSlice'
import CartSlice from '../Slices/CartSlice'
import ProductSlice from '../Slices/ProductSlice'
import UserSlice from '../Slices/UserSlice'
import WishlistSlice from '../Slices/WishlistSlice'
import OrderSlice from '../Slices/OrderSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: CartSlice,
    product: ProductSlice,
    user: UserSlice,
    wishlist: WishlistSlice,
    order: OrderSlice,
  },
})

export default store