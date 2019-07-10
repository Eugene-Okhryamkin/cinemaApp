import React , { Component } from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => ({
    film: state.film
});

export default connect(mapStateToProps)(App);

