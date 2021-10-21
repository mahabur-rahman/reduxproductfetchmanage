import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { reducers } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
