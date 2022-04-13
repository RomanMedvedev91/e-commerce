import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./Cart-dropdown.style";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../custom-button/Custom-button";
import CartItem from "../cart-item/Cart-item";
import { CartContext } from "../../context/Cart.context";

const CartDropDown = () => {
  const { addItemToCart, cartItems } = useContext(CartContext);
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
          <EmptyMessage>Your cart es empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CustomButton>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
