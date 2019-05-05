import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger"; // must be LAST middleware in chain according to docs
import RootReducer from "../reducers";

const loggerMiddleware = createLogger();


// 

export const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));