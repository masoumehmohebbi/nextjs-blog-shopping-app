// @ts-nocheck
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload,
    };

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const initStore = () => {
  return createStore(masterReducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
