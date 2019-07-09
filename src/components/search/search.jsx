import React, { Component } from "react";
import "./search.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Search = () => {
    return(
        <div id="search__search-bar__search-btn">
            <div id="search-input">
                <input type="text" />
            </div>
            <div id="search-btn">
                <button>
                    <FontAwesomeIcon icon={ faSearch } />
                </button>
            </div>
        </div>
    );
};

export default Search;