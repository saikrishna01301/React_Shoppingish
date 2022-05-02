import { Fragment } from "react";
// import { CategoriesContext } from "../../contexts/CategoriesContext";
import PreviewCategory from "../../components/preview-category/PreviewCategory";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/Category/categorySelector";

const ShopPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

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
