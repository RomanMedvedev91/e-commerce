import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

// import store from "./redux/store";
import App from "./App";
import { UserProvider } from "./context/User.context";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from "./reportWebVitals";
import "./index";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  rootElement
);
