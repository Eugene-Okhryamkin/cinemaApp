import React, { Component } from "react";
import "./search.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux";
import { searchFilms } from "../../actions/searchAction.js";


class Search extends Component{

    findFilm = e => {
        const { search } = this.props;
        e.preventDefault();
        search(this.searchInput.value);
    };

    render() {
        return (
            <div id="search__search-bar__search-btn">
                <div id="search-input">
                    <input
                        ref={(input) => { this.searchInput = input }}
                        type="text"
                        placeholder="Поиск"
                    />
                </div>
                <div id="search-btn">
                    <button onClick={ this.findFilm }>
                        <FontAwesomeIcon icon={ faSearch }/>
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    search: name => dispatch(searchFilms(name))
});

export default connect(null, mapDispatchToProps)(Search);
