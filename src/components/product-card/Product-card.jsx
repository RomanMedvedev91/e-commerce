import { useContext } from "react";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./Product-card.style";

import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from "../custom-button/Custom-button";
import { CartContext } from "../../context/Cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price className='price'>{price}</Price>
      </Footer>
      <CustomButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </CustomButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
