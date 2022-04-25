import "./ProductCard.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const ProductCard = (props) => {
  const { name, price, imageUrl } = props.product;
  const { addItemToCart } = useContext(CartContext);
  const onAddItemToCart = () => {
    addItemToCart(props.product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={onAddItemToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
