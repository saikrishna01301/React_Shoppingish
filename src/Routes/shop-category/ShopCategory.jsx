import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
// import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/Products-card/ProductCard";
import "./ShopCategory.scss";

import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/Category/categorySelector";
import Spinner from "../../components/spinner/Spinner";

const ShopCategory = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <Fragment>
      <h3 className="shop-category-title">{category}</h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="shop-category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default ShopCategory;
