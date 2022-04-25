import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import CartIcon from "../../components/card-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import "./Navigation.scss";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { userSignOut } from "../../utilities/Firebase/Firebase";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const onSignOutHandler = async () => {
    await userSignOut();
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className="nav__container">
        <Link className="nav__logo-container" to="/">
          <Crown className="nav__logo" />
        </Link>
        <div className="nav__links">
          <Link className="nav__link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav__link" onClick={onSignOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav__link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
