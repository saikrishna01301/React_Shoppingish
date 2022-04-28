import { Routes, Route } from "react-router-dom";
import ShopPreview from "../shop-preview/ShopPreview";
import ShopCategory from "../shop-category/ShopCategory";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ShopPreview />} />
      {/* category is parameater to path use useParams i access*/}
      <Route path=":category" element={<ShopCategory />} />
    </Routes>
  );
};

export default Shop;
