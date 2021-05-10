import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import noteReducer from "./reducers/notes.reducer";

const rootReducers = combineReducers({ noteReducer });

const middelware = [thunk, createLogger()];

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middelware))
);
