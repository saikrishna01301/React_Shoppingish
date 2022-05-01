import { createDispatch } from "../../utilities/Reducer/reducer";
import { USER_ACTION_TYPES } from "./userTypes";

export const setCurrentUser = (user) => {
  return createDispatch(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
