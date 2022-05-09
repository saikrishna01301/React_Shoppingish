import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
//redux-presist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to local storage for web
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

//we are using logger as middleware
//it checks if we are in development mode or not
//.filter method checks if its an falsy value it returns empty array
//if it true it return logger object
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

//creating applaying middleware and composing it
const composedEnhancers = compose(applyMiddleware(...middlewares));

//configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

//creating store it takes 3 parameters (neccessary,optional,optional)
//by default store is goona use presistedReducer
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
