import React from "react";
import "./Home.sass";
import FilmList from "../../containers/filmList/filmList.jsx";

const Home = () => (
    <div className="page">
        <h3>Главная</h3>
        <FilmList page="Home" />
    </div>
);

export default Home;