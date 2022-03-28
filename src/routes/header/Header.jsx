import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
// import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { auth } from "../../utils/firebase/firebase.utils";

import "./Header.scss";

// const Header = ({ currentUser }) => {
const Header = () => {
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
          <Link className='option' to='/auth'>
            SIGN IN
          </Link>
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
