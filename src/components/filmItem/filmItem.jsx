import React from "react";
import "./filmItem.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

const FilmItem = props => {
    const { filmImg, filmName } = props.item;

    return(
        <div className="filmItem">
            <img src={filmImg} alt={filmName}/>
            <div className="filmOverlay">
                <FontAwesomeIcon icon={ faPlayCircle }/>
            </div>
            <div className="filmName">
                <p>{filmName}</p>
            </div>
        </div>
    );
}


export default FilmItem;