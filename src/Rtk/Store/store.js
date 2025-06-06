// {import { configureStore } from '@reduxjs/toolkit'
// import authReducer from '../Slices/authSlice'
// import WishlistSlice from '../Slices/WishlistSlice'
// import {persistReducer} from 'redux-persist'
// import { combineReducers } from '@reduxjs/toolkit'
// import storage from 'redux-persist/lib/storage'
// import CartSlice from '../Slices/CartSlice'

// const persistConfig = {
//   key: 'root',
//   storage,
//   version: 1,
// }

// const rootreducer = combineReducers({
//   auth: authReducer,
//   wishlist: WishlistSlice,
//   cart: CartSlice

// })

// const persistedReducer = persistReducer(persistConfig, rootreducer)
// // import CartSlice from '../Slices/CartSlice'
// // import ProductSlice from '../Slices/ProductSlice'
// // import UserSlice from '../Slices/UserSlice'
// // import OrderSlice from '../Slices/OrderSlice'

// export const store = configureStore({
//   reducer: persistedReducer,
//     // cart: CartSlice,
//     // product: ProductSlice,
//     // user: UserSlice,
//     // order: OrderSlice,
// })
// }

// export default store
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../Slices/authSlice';
import WishlistSlice from '../Slices/WishlistSlice';
import CartSlice from '../Slices/CartSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  auth: authReducer,
  wishlist: WishlistSlice,
  cart: CartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  ],
});

export default store;
