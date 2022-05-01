import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

//we are using logger as middleware
const middlewares = [logger];

//creating middleware and composing it
const composedEnhancers = compose(applyMiddleware(... middlewares));

//creating store it takes 3 parameters (neccessary,optional,optional)
export const store = createStore(rootReducer, undefined, composedEnhancers);
