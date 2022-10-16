import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";

import Header from "./routes/header/Header";
import Homepage from "./routes/home/Homepage";
import Shop from "./routes/shop/Shop.jsx";
import Authentication from "./components/authentication/authentication";

import Checkout from "./routes/checkout/Checkout";
import { setCurrentUser } from "./store/user/user.action.js";
// import { setCategoriesMap } from "./store/category/category.action.js";

import {
  // onAuthStateChangedListener,
  // createUserDocumentFromAuth,
  getCurrentUser,
  // getCategoriesAndDocuments,
} from "./utils/firebase/firebase.utils.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((user) => console.log(user));
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
