import { CATEGORY_TYPE } from "./categoryType";

export const CATEGORY_INITIAL_STATE = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  //this is the basic setup for redux side-effects in reduux-thunk/sage/observable
  switch (type) {
    case CATEGORY_TYPE.FETCH_CATEGORIES_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categoriesArray: payload,
        isLoading: false,
      };
    }
    case CATEGORY_TYPE.FETCH_CATEGORIES_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
