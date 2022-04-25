import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../utilities/Firebase/Firebase";

export const UserContext = createContext({
  //default values of userContext
  currentUser: null,
  serCurrentUser: () => null,
});

export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  // we are updating the userContext through state by passing
  // the state values through provider value
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    //it automatically unsubscribe from observer
    return onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      if (user) createUserDocFromAuth(user);
    });
  }, []);
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
