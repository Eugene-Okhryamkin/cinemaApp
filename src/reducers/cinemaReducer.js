import { GET_FILMS } from "../actions/cinemaAction";

const initState = {
    films: [],
    isFetching: false
};

export const cinemaReducer = (state = initState, action) => {
    switch(action.type) {

        case GET_FILMS:
            return action.payload;
            

        default:
            return state;

    };
};

