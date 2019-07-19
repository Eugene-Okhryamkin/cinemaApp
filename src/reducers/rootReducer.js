import { combineReducers } from "redux";
import { cinemaReducer } from "./cinemaReducer.js";
import { searchReducer } from "./searchReducer.js";
import { selectFilmReducer } from "./selectFilmReducer.js";


export const rootReducer = combineReducers({
    cinema: cinemaReducer,
    search: searchReducer,
    select: selectFilmReducer,
});