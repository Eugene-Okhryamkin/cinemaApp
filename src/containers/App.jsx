import React , { Component } from "react";
import Sidebar from "./sidebar/sidebar.jsx";
import Main from "./main/main.jsx";
import "./App.sass";


class App extends Component {
    render() {
        return (
            <>
                <Sidebar/>
                <Main />
            </>
        );
    };
};

export default App;

