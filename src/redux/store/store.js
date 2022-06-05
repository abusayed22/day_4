import finaleReducer from "../reducers/rootReducers";
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore(finaleReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;