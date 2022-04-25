import { createContext, useState } from "react";
import PRODUCTS from "../../src/shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
};
