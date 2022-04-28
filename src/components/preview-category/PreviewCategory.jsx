import "./PreviewCategory.scss";
import ProductCard from "../../components/Products-card/ProductCard";
import { Link } from "react-router-dom";

const PreviewCategory = (props) => {
  const { title, product } = props;
  return (
    <div className="category-preview-container">
      <h1>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h1>
      <div className="preview">
        {product
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default PreviewCategory;
