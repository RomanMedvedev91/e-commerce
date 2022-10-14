import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/Category-preview";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/category/category.selector";
import Spinner from "../../components/spinner/Spineer";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((key) => {
          const products = categoriesMap[key];
          return <CategoryPreview key={key} title={key} products={products} />;
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
