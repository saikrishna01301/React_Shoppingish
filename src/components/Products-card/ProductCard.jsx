import "./ProductCard.scss";
import Button from "../button/Button";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/CartContext";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/Cart/cartSelector";
import { addItemToCart } from "../../store/Cart/cartAction";

const ProductCard = (props) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, price, imageUrl } = props.product;

  const onAddItemToCart = () => {
    dispatch(addItemToCart(cartItems, props.product));
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
