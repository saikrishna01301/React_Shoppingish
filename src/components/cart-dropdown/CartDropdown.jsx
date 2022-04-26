import Button from "../button/Button";
import "./CartDropdown.scss";
import CartItem from "../cart-items/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  //useNavigate is react route hook
  const navigate = useNavigate();
  const onCheckOutHandler = () => navigate("/checkout");

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button type="button" buttonType="inverted" onClick={onCheckOutHandler}>
        checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
