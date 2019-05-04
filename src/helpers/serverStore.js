import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";

import reducers from "../reducers";

export default req => {
  const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

  return store;
};
