import { createDispatch } from "../../utilities/Reducer/reducer";
import { CATEGORY_TYPE } from "./categoryType";

export const setCategoriesArray = (categoriesArray) => {
  return createDispatch(CATEGORY_TYPE.SET_CATEGORY_ARRAY, categoriesArray);
};
