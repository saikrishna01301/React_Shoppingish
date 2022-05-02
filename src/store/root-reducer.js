import { combineReducers } from "redux";
import { userReducer } from "./User/userReducer";
import { categoriesReducer } from "./Category/categoryReducer";
import { cartReducer } from "./Cart/cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
