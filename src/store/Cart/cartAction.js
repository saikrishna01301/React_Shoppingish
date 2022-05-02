import { createDispatch } from "../../utilities/Reducer/reducer";
import { CART_ACTION_TYPES } from "./cartType";


/////////////////////helper funcs started///////////////////////////
//add item to cart
const addCartItem = (cartItems, productToAdd) => {
  const cartItemExist = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  if (cartItemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
/////////////////////////////////////////////////////////////////////////
//remove item to cart
const removeCartItem = (cartItems, cartItemToRemove) => {
  const cartItemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (cartItemExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
/////////////////////////////////////////////////////////////////////////
//clear cart item in checkout
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
///////////////////////////helper funcs ended/////////////////////////////

//creating actions
export const setIsCartOpen = (boo) =>
  createDispatch(CART_ACTION_TYPES.SET_IS_CART_OPEN, boo);

//helper functions to create newCartItems
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createDispatch(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createDispatch(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createDispatch(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
