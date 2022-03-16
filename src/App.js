import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import Navigation from "./routes/navigations/Navigation";

import "./App.css";
import { Header } from "./components/header/Header";
import { SignInAndSignUp } from "./components/signin-signup/Sign-in-sign-up";
import Homepage from "./routes/home/Homepage";
import ShopPage from "./routes/shop/Shop";
import { auth, createProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubcribeAuth = null;

  componentDidMount() {
    this.unsubcribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Homepage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/signin' element={<SignInAndSignUp />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
