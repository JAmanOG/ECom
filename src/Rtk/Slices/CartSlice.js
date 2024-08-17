// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   addToCart,
//   getCart as getCartApi,
//   removeFromCart,
//   updateCart,
// } from "../../Services/database";

// const initialState = {
//   items: [],
//   loading: false,
//   totalQuantity: 0,
//   changed: false,
// };

// export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
//   const cartItems = await getCartApi(userId);
//   return cartItems.map((item) => ({
//     productId: item.productId,
//     quantity: item.quantity,
//   }));
// });

// export const addCart = createAsyncThunk(
//   "cart/addCart",
//   async ({ userId, productId, quantity = 1 }) => {
//     await addToCart(userId, productId, quantity);
//     return { userId, productId, quantity };
//   }
// );

// export const incrementQuantity = createAsyncThunk(
//   "cart/incrementQuantity",
//   async ({ userId, productId, quantity = 1 }, { dispatch }) => {
//     if (!userId || !productId) {
//       throw new Error("UserId or ProductId is missing in incrementQuantity thunk");
//     }

//     // Update the cart in the database
//     await addToCart(userId, productId, quantity);

//     // Update the Redux state
//     dispatch(incrementQuantityState({ productId, quantity }));
//   }
// );

// export const decrementQuantity = createAsyncThunk(
//   "cart/decrementQuantity",
//   async ({ userId, productId, quantity = 1 }, { dispatch }) => {
//     if (!userId || !productId) {
//       throw new Error("UserId or ProductId is missing in decrementQuantity thunk");
//     }

//     // First, update the database
//     await updateCart(userId, productId, quantity);

//     // Then, dispatch the action to update the Redux state
//     dispatch(decrementQuantityState({ productId, quantity }));
//   }
// );



  
// export const removeCart = createAsyncThunk(
//   "cart/removeCart",
//   async ({ userId, productId }) => {
//     await removeFromCart(userId, productId);
//     return productId;
//   }
// );

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     incrementQuantityState(state, action) {
//       const { productId, quantity = 1 } = action.payload;
//       const existingItem = state.items.find((item) => item.productId === productId);
      
//       if (existingItem) {
//         existingItem.quantity += quantity;
//         state.totalQuantity += quantity;
//       }
//     },
//     decrementQuantityState(state, action) {
//       const { productId, quantity = 1 } = action.payload;
//       const existingItem = state.items.find((item) => item.productId === productId);
    
//       if (existingItem && existingItem.quantity > quantity) {
//         existingItem.quantity -= quantity;
//         state.totalQuantity -= quantity;
//       } else if (existingItem && existingItem.quantity <= quantity) {
//         state.items = state.items.filter((item) => item.productId !== productId);
//         state.totalQuantity -= existingItem.quantity;
//       }
//     },    
//     removeProduct(state, action) {
//       const productId = action.payload;
//       const existingItem = state.items.find((item) => item.productId === productId);
//       if (existingItem) {
//         state.totalQuantity -= existingItem.quantity;
//         state.items = state.items.filter((item) => item.productId !== productId);
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.totalQuantity = state.items.reduce(
//           (total, item) => total + item.quantity,
//           0
//         );
//         state.loading = false;
//       })
//       .addCase(fetchCart.rejected, (state) => {
//         state.loading = false;
//       })
//       .addCase(addCart.fulfilled, (state, action) => {
//         const { productId, quantity } = action.payload;
//         const existingItem = state.items.find(
//           (item) => item.productId === productId
//         );
//         state.totalQuantity += quantity;
//         state.changed = true;

//         if (!existingItem) {
//           state.items.push({
//             productId: productId,
//             quantity: quantity,
//             name: "New Item", // Replace with actual product name
//           });
//         } else {
//           existingItem.quantity += quantity;
//         }
//       })
//       .addCase(removeCart.fulfilled, (state, action) => {
//         const productId = action.payload;
//         const existingItem = state.items.find(
//           (item) => item.productId === productId
//         );
//         if (existingItem) {
//           state.totalQuantity -= existingItem.quantity;
//         }
//         state.items = state.items.filter(
//           (item) => item.productId !== productId
//         );
//         state.changed = true;
//       })
//       .addCase(addCart.rejected, (state) => {
//         state.loading = false;
//       })
//       .addCase(removeCart.rejected, (state) => {
//         state.loading = false;
//       });
//   },
// });


// export const { incrementQuantityState, decrementQuantityState, removeProduct } =
//   cartSlice.actions;

// export default cartSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToCart,
  getCart as getCartApi,
  removeFromCart,
  updateCart,
} from "../../Services/database";

const initialState = {
  items: [],
  loading: false,
  totalQuantity: 0,
  changed: false,
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  const cartItems = await getCartApi(userId);
  return cartItems.map((item) => ({
    productId: item.productId,
    quantity: item.quantity,
  }));
});

export const addCart = createAsyncThunk(
  "cart/addCart",
  async ({ userId, productId, quantity = 1 }) => {
    await addToCart(userId, productId, quantity);
    return { userId, productId, quantity };
  }
);

export const incrementQuantity = createAsyncThunk(
  "cart/incrementQuantity",
  async ({ userId, productId, quantity = 1 }, { dispatch }) => {
    if (!userId || !productId) {
      throw new Error("UserId or ProductId is missing in incrementQuantity thunk");
    }

    // Update the cart in the database
    await addToCart(userId, productId, quantity);

    // Update the Redux state
    dispatch(incrementQuantityState({ productId, quantity }));
  }
);

export const decrementQuantity = createAsyncThunk(
  "cart/decrementQuantity",
  async ({ userId, productId, quantity = 1 }, { dispatch }) => {
    if (!userId || !productId) {
      throw new Error("UserId or ProductId is missing in decrementQuantity thunk");
    }

    // First, update the database
    await updateCart(userId, productId, quantity);

    // Then, dispatch the action to update the Redux state
    dispatch(decrementQuantityState({ productId, quantity }));
  }
);



export const removeCart = createAsyncThunk(
  "cart/removeCart",
  async ({ userId, productId }) => {
    await removeFromCart(userId, productId);
    return productId;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantityState(state, action) {
      const { productId, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);
      
      if (existingItem) {
        existingItem.quantity += quantity;
        state.totalQuantity += quantity;
      }
    },
    decrementQuantityState(state, action) {
      const { productId, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);
    
      if (existingItem && existingItem.quantity > quantity) {
        existingItem.quantity -= quantity;
        state.totalQuantity -= quantity;
      } else if (existingItem && existingItem.quantity <= quantity) {
        state.items = state.items.filter((item) => item.productId !== productId);
        state.totalQuantity -= existingItem.quantity;
      }
    },   
    removeProduct(state, action) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.productId !== productId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.loading = false;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        const { productId, quantity } = action.payload;
        const existingItem = state.items.find((item) => item.productId === productId);
        state.totalQuantity += quantity;
        state.changed = true;

        if (!existingItem) {
          state.items.push({
            productId: productId,
            quantity: quantity,
            name: "New Item", // Replace with actual product name
          });
        } else {
          existingItem.quantity += quantity;
        }
      })
      .addCase(removeCart.fulfilled, (state, action) => {
        const productId = action.payload;
        const existingItem = state.items.find((item) => item.productId === productId);
        if (existingItem) {
          state.totalQuantity -= existingItem.quantity;
          state.items = state.items.filter((item) => item.productId !== productId);
        }
        state.changed = true;
      })
      .addCase(addCart.rejected, (state) => {
        state.loading = false;
      })
      .addCase(removeCart.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { incrementQuantityState, decrementQuantityState, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
