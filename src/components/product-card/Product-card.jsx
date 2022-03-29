import React from "react";

import "./Product-card.scss";
import CustomButton from "../custom-button/Custom-button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton buttonType='inverted'>Add to card</CustomButton>
    </div>
  );
};

export default ProductCard;
