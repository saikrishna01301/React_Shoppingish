import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../../src/shop-data.js";
// import { addCollectionAndDocument } from "../utilities/Firebase/Firebase";
import { getCollectionAndDocument } from "../utilities/Firebase/Firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = (props) => {
  const [categoriesMap, setCategoryMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA);
  // }, []);

  //when we use async fun in useEffect, always call it in a function
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDocument();
      setCategoryMap(categoryMap);
    };
    getCategoryMap();
  }, []);

  const value = { categoriesMap, setCategoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
