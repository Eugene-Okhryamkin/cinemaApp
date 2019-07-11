import { combineReducers } from "redux";
import { cinemaReducer } from "./cinemaReducer";


export const rootReducer = combineReducers({
    cinema: cinemaReducer
});