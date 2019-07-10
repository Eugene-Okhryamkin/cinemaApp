import React, { Component } from "react";
import "./main.sass";
import {Route, Switch} from "react-router";
import Serial from "../../components/serial/serial.jsx";
import Film from "../../components/film/film.jsx";


const Main = () => {
    return (
        <div id="Main">
            <Switch>
                <Route exact path={"/serial"} component={ Serial }/>
                <Route exact path={"/film"} component={ Film }/>
            </Switch>
        </div>
    );
};

export default Main;