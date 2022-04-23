import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./Navigation.scss";

const Navigation = () => {
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
          <Link className="nav__link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
