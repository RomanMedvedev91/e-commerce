import { createSelector } from "reselect";

const selectCartReduer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReduer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReduer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItems.quantity * cartItem.price,
    0
  )
);
