// import { createContext, useEffect, useState, useReducer } from "react";

// //add item to cart
// const addCartItem = (cartItems, productToAdd) => {
//   const cartItemExist = cartItems.find((cartItem) => {
//     return cartItem.id === productToAdd.id;
//   });
//   if (cartItemExist) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };
// //remove item to cart
// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const cartItemExist = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   if (cartItemExist.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// //clear cart item in checkout
// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// /////////////////////////////////////////
// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   cartCount: 0,
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   totalCartCost: 0,
// });

// ///////////////////////////////////////////
// //cartReducer

// const INITIAL_STATE = {
//   cartItems: [],
//   cartCount: 0,
//   totalCartCost: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "SET_CART_ITEMS":
//       return {
//         ...state,
//         ...payload,
//       };
//     default:
//       throw new Error(`unhandled type of ${type} in cartReducer`);
//   }
// };
// //////////////////////////////////////////////////////
// //context provider
// export const CartProvider = (props) => {
//   //by using useState
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   // const [cartItems, setCartItems] = useState([]);
//   // const [cartCount, setCartCount] = useState(0);
//   // const [totalCartCost, setTotalCartCost] = useState(0);

//   //using useReducer
//   const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
//   const { cartItems, cartCount, totalCartCost } = state;

//   const updateNewCartItemsReducer = (cartItems) => {
//     const newCartCount = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );

//     const newCartCost = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );

//     const payload = {
//       cartItems,
//       cartCount: newCartCount,
//       totalCartCost: newCartCost,
//     };

//     dispatch({ type: "SET_CART_ITEMS", payload });
//   };

//   //helper functions to create newCartItems
//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateNewCartItemsReducer(newCartItems);
//   };
//   const removeItemFromCart = (cartItemToRemove) => {
//     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//     updateNewCartItemsReducer(newCartItems);
//   };
//   const clearItemFromCart = (cartItemToClear) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToClear);
//     updateNewCartItemsReducer(newCartItems);
//   };

//   // //total quantity of an item
//   // useEffect(() => {
//   //   const newCartCount = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity,
//   //     0
//   //   );
//   //   setCartCount(newCartCount);
//   // }, [cartItems]);

//   // // total cost of cart items
//   // useEffect(() => {
//   //   const newCartCost = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//   //     0
//   //   );
//   //   setTotalCartCost(newCartCost);
//   // }, [cartItems]);

//   //////////////////////////////////////////////////////////

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     cartItems,
//     cartCount,
//     removeItemFromCart,
//     clearItemFromCart,
//     totalCartCost,
//   };

//   return (
//     <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
//   );
// };
