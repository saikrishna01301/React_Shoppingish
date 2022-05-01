import { createContext, useEffect, useReducer } from "react";
// import {
//   onAuthStateChangedListener,
//   createUserDocFromAuth,
// } from "../utilities/Firebase/Firebase";

export const UserContext = createContext({
  //default values of userContext
  currentUser: null,
  serCurrentUser: () => null,
});

//initial state of userReducer
const INITIAL_STATE = {
  currentUser: null,
};

//userReducer action type
const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
//userReducer function
const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = (props) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  //state is an object in this case
  const { currentUser } = state;
  //
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  // we are updating the userContext through state by passing
  // the state values through provider value
  const value = { currentUser, setCurrentUser };
  // useEffect(() => {
  //   //it automatically unsubscribe from observer
  //   return onAuthStateChangedListener((user) => {
  //     if (user) createUserDocFromAuth(user);
  //     setCurrentUser(user);
  //   });
  // }, []);
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
