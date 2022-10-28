import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { DirectoryCategory } from "../directory/Directory.js";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./Menu-item.style";

type MenuItemsProps = {
  category: DirectoryCategory;
};

const MenuItem: FC<MenuItemsProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default MenuItem;
