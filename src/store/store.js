import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootRecuder } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("current state:", store.getState());

  next(action);

  console.log("next state:", store.getState());
};
const middleWares = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootRecuder, undefined, composeEnhancers);
