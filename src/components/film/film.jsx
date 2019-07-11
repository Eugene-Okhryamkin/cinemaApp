import React from "react";
import FilmList from "../../containers/filmList/filmList.jsx";
import "../page.sass";


const Film = () => (
    <div className="page">
        <h3>Фильмы</h3>
        <FilmList page="film" />
    </div>

);

export default Film;