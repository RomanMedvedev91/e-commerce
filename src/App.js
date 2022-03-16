// import React from "react";
// import { Switch, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Header from "./routes/header/Header";
import Homepage from "./routes/home/Homepage";
import SignIn from "./components/sign-in/Sign-in";
import "./App.css";
// import { SignInAndSignUp } from "./components/signin-signup/Sign-in-sign-up";
// import ShopPage from "./routes/shop/Shop";
// import { auth, createProfileDocument } from "./utils/firebase/firebase.utils";

const Shop = () => {
  return <h1>I am Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       currentUser: null,
//     };
//   }

//   unsubcribeAuth = null;

//   componentDidMount() {
//     this.unsubcribeAuth = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const userRef = await createProfileDocument(userAuth);

//         userRef.onSnapshot((snapShot) => {
//           this.setState({
//             currentUser: {
//               id: snapShot.id,
//               ...snapShot.data(),
//             },
//           });
//         });
//       } else {
//         this.setState({ currentUser: userAuth });
//       }
//     });
//   }

//   componentWillUnmount() {
//     this.unsubcribeAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header currentUser={this.state.currentUser} />
//         <Routes>
//           <Route path='/' element={<Navigation />}>
//             <Route index element={<Homepage />} />
//             <Route path='/shop' element={<ShopPage />} />
//             <Route path='/signin' element={<SignInAndSignUp />} />
//           </Route>
//         </Routes>
//       </div>
//     );
//   }
// }

export default App;
