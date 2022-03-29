import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
// import { connect } from "react-redux";

import CartIcon from "../../components/cart-icon/Cart-icon";
import CartDropDown from "../../components/cart-dropdown/Cart-dropdown";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../context/User.context";
import { CartContext } from "../../context/Cart.context";
// import { auth } from "../../utils/firebase/firebase.utils";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import "./Header.scss";

// const Header = ({ currentUser }) => {
const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='option' onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className='option' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
          {/* {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )} */}
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });
// export default connect(mapStateToProps)(Header);

export default Header;
