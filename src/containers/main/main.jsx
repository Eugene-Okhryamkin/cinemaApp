import React, { Component } from "react";
import "./main.sass";
import {Route, Switch} from "react-router";
import Serial from "../../components/serial/serial.jsx";
import Film from "../../components/film/film.jsx";
import Home from "../../components/Home/Home.jsx";
import Mult from "../../components/Mult/Mult.jsx";


const Main = () => {
    return (
        <div id="Main">
            <Switch>
                <Route exact path={"/"} component={ Home } />
                <Route exact path={"/serial"} component={ Serial }/>
                <Route exact path={"/film"} component={ Film }/>
                <Route exact path={"/mult"} component={ Mult }/>
            </Switch>
        </div>
    );
};

export default Main;