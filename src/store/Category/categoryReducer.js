import { CATEGORY_TYPE } from "./categoryType";

export const CATEGORY_INITIAL_STATE = {
  categoriesArray: [],
};

export const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_TYPE.SET_CATEGORY_ARRAY: {
      return {
        ...state,
        categoriesArray: payload,
      };
    }
    default:
      return state;
  }
};
