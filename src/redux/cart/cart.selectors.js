import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectosCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectorCartItemsCount = createSelector(
  [selectosCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
