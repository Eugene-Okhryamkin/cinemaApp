import React from "react";
import { NavLink } from "react-router-dom";
import "./list.sass";



const List = () => {
    return(
        <div id="sidebar-list">
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Главная</NavLink></li>
                    <li><NavLink to={"/film"}>Фильмы</NavLink></li>
                    <li><NavLink to={"/serial"}>Сериалы</NavLink></li>
                    <li><NavLink to={"/mult"}>Мультфильмы</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};

export default List;