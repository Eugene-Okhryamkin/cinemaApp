import { SEARCH } from "../actions/searchAction.js";

const initState = "";


export const searchReducer = (state = initState, action) => {

    switch(action.type) {

        case SEARCH:
            return action.payload;
            break;

        default:
            return state;
    }

};

