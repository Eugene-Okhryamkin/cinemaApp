import { combineReducers } from "redux";
import { cinemaReducer } from "./cinemaReducer";
import { searchReducer } from "./searchReducer";


export const rootReducer = combineReducers({
    cinema: cinemaReducer,
    search: searchReducer
});