import { createSelector } from 'reselect';

const selectWishlistItems = (state) => state.wishlist.items;

export const getWishlistItems = createSelector(
  [selectWishlistItems],
  (items) => items
);
