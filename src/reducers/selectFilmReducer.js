import { SELECT_FILM } from "../actions/selectFilmAction.js";

const initState = null;

export const selectFilmReducer = (state = initState, action) => {

    switch (action.type) {
        case SELECT_FILM:
            return action.payload
            break;

        default:
            return state;
    }

};