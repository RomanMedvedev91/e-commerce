import { useContext } from "react";

import "./Product-card.scss";
import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from "../custom-button/Custom-button";
import { CartContext } from "../../context/Cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </CustomButton>
    </div>
  );
};

export default ProductCard;
