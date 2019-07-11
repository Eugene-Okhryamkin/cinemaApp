import React from "react";
import "./filmItem.sass";


const FilmItem = props => {
    const { filmImg, filmName } = props.item;

    console.log(props);
    return(
        <div className="filmItem">
            <div className="filmImg">
                <img src={filmImg} alt={filmName}/>
            </div>
            <div className="filmName">
                <p>{filmName}</p>
            </div>
        </div>
    );
}


export default FilmItem;