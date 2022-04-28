import { useParams } from "react-router-dom";
import { useState, useEffect, useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/Products-card/ProductCard";
import "./ShopCategory.scss";

const ShopCategory = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <Fragment>
      <h3 className="shop-category-title">{category}</h3>
      <div className="shop-category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default ShopCategory;
