import React, { Component } from "react";
import "./list.sass";

const List = () => {
    return(
        <div id="sidebar-list">
            <nav>
                <ul>
                    <li><a href="#" className="ListItem">Текст</a></li>
                    <li><a href="#" className="ListItem">Текст</a></li>
                    <li><a href="#" className="ListItem">Текст</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default List;