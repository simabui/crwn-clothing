import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./root-reducer";

const DEV_ENV = process.env.NODE_ENV === "development";
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  next(action);
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [DEV_ENV && logger].filter(Boolean);
const composeEnhancer = (DEV_ENV && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
