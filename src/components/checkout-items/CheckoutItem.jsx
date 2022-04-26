import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CheckoutItem.scss";

const CheckoutItem = (props) => {
  const { name, quantity, imageUrl, price } = props.cartItem;
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(props.cartItem);
  const removeItemHandler = () => removeItemFromCart(props.cartItem);
  const clearItemHandler = () => clearItemFromCart(props.cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
