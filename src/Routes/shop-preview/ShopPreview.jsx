import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import PreviewCategory from "../../components/preview-category/PreviewCategory";

const ShopPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <PreviewCategory key={title} title={title} product={product} />;
      })}
    </Fragment>
  );
};

export default ShopPreview;
