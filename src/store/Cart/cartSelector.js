import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

//cartItems
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

//isCartOpen
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

//cartCount
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
);

//cartTotal
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (count, cartItem) => count + cartItem.quantity * cartItem.price,
    0
  )
);
