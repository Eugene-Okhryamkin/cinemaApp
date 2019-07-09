import React , { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "./sidebar/sidebar.jsx";

class App extends Component {
    render() {
        return(
            <>
                <Sidebar />
            </>
        )
    };
};

const mapStateToProps = (state) => ({
    film: state.film
});

export default connect(mapStateToProps)(App);

