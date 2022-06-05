import { combineReducers } from "redux";
import allReducers from "./allReducers";

const finaleReducer = combineReducers({
    reducers:allReducers
})
export default finaleReducer;