import React from "react";
import FilmList from "../../containers/filmList/filmList.jsx";
import "../page.sass";


const Serial = () => (
    <div className="page">
        <h3>Сериалы</h3>
        <FilmList page="serial" />
    </div>
);

export default Serial;