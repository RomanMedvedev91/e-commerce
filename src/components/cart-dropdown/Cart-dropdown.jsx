import "./Cart-dropdown.scss";
import CustomButton from "../custom-button/Custom-button";

const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
