import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

//creating memoization function
//when array value is updated then only it invokes the function
const selectCategories = createSelector(
  [selectCategoriesReducer],
  (selectCategoriesReducer) => selectCategoriesReducer.categoriesArray
);

//when selectCategories is updated then only it invokes the function
//it depends on the selectCategories
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (selectCategories) => {
    return selectCategories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
