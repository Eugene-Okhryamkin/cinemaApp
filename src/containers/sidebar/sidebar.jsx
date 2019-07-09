import React, { Component } from "react";
import "./sidebar.sass";
import Search from "../../components/search/search.jsx";
import List from "../../components/list/list.jsx";

class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <Search />
                <List />
            </div>
        );
    }
};

export default Sidebar;

