import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/header/Header";
import { SignInAndSignUp } from "./components/signin-signup/Sign-in-sign-up";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
