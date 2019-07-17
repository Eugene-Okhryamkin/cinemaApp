import { combineReducers } from "redux";
import { cinemaReducer } from "./cinemaReducer.js";
import { searchReducer } from "./searchReducer.js";


export const rootReducer = combineReducers({
    cinema: cinemaReducer,
    search: searchReducer
});