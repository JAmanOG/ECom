import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addToWishlist, removeFromWishlist, getWishlist as fetchWishlistApi } from '../../Services/database';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', async (userId) => {
  const response = await fetchWishlistApi(userId);
  return response;
});

export const addWishlist = createAsyncThunk('wishlist/addWishlist', async ({ userId, productId }) => {
  await addToWishlist(userId, productId);
  return { userId, productId };
});

export const removeWishlist = createAsyncThunk('wishlist/removeWishlist', async ({ userId, productId }) => {
  await removeFromWishlist(userId, productId);
  return productId;
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addWishlist.fulfilled, (state, action) => {
        const { userId, productId } = action.payload;
        if (!state.items.find(item => item.productId.includes(productId))) {
          state.items.push({ userId: [userId], productId: [productId] });
        }
      })
      .addCase(removeWishlist.fulfilled, (state, action) => {
        const productId = action.payload;
        state.items = state.items.filter(item => !item.productId.includes(productId));
      })
      .addCase(addWishlist.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeWishlist.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default wishlistSlice.reducer;
