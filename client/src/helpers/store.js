import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import RootReducer from "../reducers";
import { createLogger } from "redux-logger"; // must be LAST middleware in chain according to docs

const loggerMiddleware = createLogger();


// create store for redux


// apply redux thunk- will return functions instead of actions


// apply redux logger-- will show errors in the log

export const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

loggerMiddleware
