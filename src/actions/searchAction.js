export const SEARCH = "SEARCH";

export const searchFilms = name => ({
    type: SEARCH,
    payload: name
});