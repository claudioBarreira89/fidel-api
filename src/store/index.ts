import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { reducer, initialState } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];
const composeEnhancers = composeWithDevTools;

export const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);
