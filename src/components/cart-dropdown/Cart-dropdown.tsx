import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./Cart-dropdown.style";

import CustomButton from "../custom-button/Custom-button";
import CartItem from "../cart-item/Cart-item";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CustomButton>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
