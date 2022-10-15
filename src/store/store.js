import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// import thunk from "redux-thunk";
// use redux-saga instead of thunk
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";

// maunally written middleware logger
// import { loggerMiddleware } from "./cart/middleware/logger";

const persistConfig = {
  key: "root",
  storage,
  whilelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const middleWares = [loggerMiddleware];
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
