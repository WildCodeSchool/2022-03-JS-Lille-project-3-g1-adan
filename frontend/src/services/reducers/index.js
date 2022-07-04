import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./user";

const mainReducer = combineReducers({ user });

export default createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
