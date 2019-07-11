import React from "react";
import FilmList from "../../containers/filmList/filmList.jsx";
import "../page.sass";

const Mult = () => (
    <div className="page">
        <h3>Мультфильмы</h3>
        <FilmList page="mult" />
    </div>
);

export default Mult;