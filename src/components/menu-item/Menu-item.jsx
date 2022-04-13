// import React from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./Menu-item.style.jsx";

const MenuItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default MenuItem;
