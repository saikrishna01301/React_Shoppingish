import { createDispatch } from "../../utilities/Reducer/reducer";
import { CATEGORY_TYPE } from "./categoryType";
import { getCollectionAndDocument } from "../../utilities/Firebase/Firebase";

export const setCategoriesArray = (categoriesArray) => {
  return createDispatch(CATEGORY_TYPE.SET_CATEGORY_ARRAY);
};

export const fetchCategoriesStart = () => {
  return createDispatch(CATEGORY_TYPE.FETCH_CATEGORIES_START);
};
export const fetchCategoriesSuccess = (categoriesArray) => {
  return createDispatch(
    CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};
export const fetchCategoriesFailed = (error) => {
  return createDispatch(CATEGORY_TYPE.FETCH_CATEGORIES_FAILED, error);
};


//thunk
export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoryArray = await getCollectionAndDocument();
      dispatch(fetchCategoriesSuccess(categoryArray));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
