import "./Cart-dropdown.scss";
import { useContext } from "react";
import CustomButton from "../custom-button/Custom-button";
import CartItem from "../cart-item/Cart-item";
import { CartContext } from "../../context/Cart.context";

const CartDropDown = () => {
  const { addItemToCart, cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
