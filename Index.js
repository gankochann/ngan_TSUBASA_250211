import { combineReducers } from "redux";
import Reducer from "./Reducer";
import Cart from "./Cart";

const rootReducer = combineReducers(
    {
        listReducer : Reducer,
        listCart : Cart,
    }
);

export default rootReducer;