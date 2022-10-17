import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/Categories-preview";

import Category from "../category/Category";

// using thunk
// import { fetchCategoriesAsync } from "../../store/category/category.action";

// using saga
import { fetchCategoriesStart } from "../../store/category/category.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // using thunk
    // dispatch(fetchCategoriesAsync());
    // using saga
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
