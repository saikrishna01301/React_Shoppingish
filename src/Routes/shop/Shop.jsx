import { Routes, Route } from "react-router-dom";
import ShopPreview from "../shop-preview/ShopPreview";
import ShopCategory from "../shop-category/ShopCategory";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCategoriesAsync } from "../../store/Category/categoryAction";

const Shop = () => {
  const dispatch = useDispatch();
  //when we use async fun in useEffect, always call it in a function
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<ShopPreview />} />
      {/* category is parameater to path use useParams i access*/}
      <Route path=":category" element={<ShopCategory />} />
    </Routes>
  );
};

export default Shop;
