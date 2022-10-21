import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";

import Header from "./routes/header/Header";
import Homepage from "./routes/home/Homepage";
import Shop from "./routes/shop/Shop";
import Authentication from "./components/authentication/authentication";

import Checkout from "./routes/checkout/Checkout";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
