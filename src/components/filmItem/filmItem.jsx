import React, { Component } from "react";
import "./filmItem.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { connect } from "react-redux";
import { selectFilm } from "../../actions/selectFilmAction.js";

class FilmItem extends Component {

    select = e => {
        e.preventDefault();
        const { selectFilm } = this.props;
        selectFilm(this.props.item);
    };

    render() {
        const { filmImg, filmName } = this.props.item;

        return(
            <div className="filmItem" onClick={ this.select }>
                <img src={ filmImg } alt={ filmName }/>
                <div className="filmOverlay">
                    <FontAwesomeIcon icon={ faPlayCircle }/>
                </div>
                <div className="filmName">
                    <p>{ filmName }</p>
                </div>
            </div>
        );
    }

};

const mapDispatchToProps = dispatch => ({
    selectFilm: film => dispatch(selectFilm(film))
});

export default connect(null, mapDispatchToProps)(FilmItem);