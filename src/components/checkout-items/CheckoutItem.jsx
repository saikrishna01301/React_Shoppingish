// import { useContext } from "react";
// import { CartContext } from "../../contexts/CartContext";
import "./CheckoutItem.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/Cart/cartAction";
import { selectCartItems } from "../../store/Cart/cartSelector";

const CheckoutItem = (props) => {
  const { name, quantity, imageUrl, price } = props.cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // const { removeItemFromCart, addItemToCart, clearItemFromCart } =
  //   useContext(CartContext);

  const addItemHandler = () =>
    dispatch(addItemToCart(cartItems, props.cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, props.cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, props.cartItem));
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
