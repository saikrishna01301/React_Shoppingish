import "./CartItem.scss";

const CartItem = (props) => {
  const { name, imageUrl, price, quantity } = props.cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <h3 className="name">{name}</h3>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
