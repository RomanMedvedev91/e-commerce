import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "../product-card/Product-card";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./Category-preview.style";

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2>
      <Title to={title}>{title.toUpperCase()}</Title>
    </h2>

    <Preview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
