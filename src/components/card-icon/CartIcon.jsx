import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CartIcon.scss";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  // const totalQuantity = cartItems.reduce((acc, item) => {
  //   return (acc += Number(item.quantity));
  // }, 0);
  const cartOnClickHandler = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={cartOnClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="items-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
