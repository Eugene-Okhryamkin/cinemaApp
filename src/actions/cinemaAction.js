export const GET_FILMS = "GET_FILMS";

export const getFilms = (cinema) => ({
    type: GET_FILMS,
    payload: cinema
});