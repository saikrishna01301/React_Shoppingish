import Button from "../button/Button";
import "./CartDropdown.scss";
import CartItem from "../cart-items/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button type="button" buttonType="inverted">
        checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
