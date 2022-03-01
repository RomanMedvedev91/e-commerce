import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/header/Header";
import { SignInAndSignUp } from "./components/signin-signup/Sign-in-sign-up";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
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
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
