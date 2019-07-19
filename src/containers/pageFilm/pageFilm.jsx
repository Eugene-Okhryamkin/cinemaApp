import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import "./pageFilm.sass";


class PageFilm extends Component {

    handleUnmount = e => {
        e.preventDefault();
        this.props.close();
    };

    render() {
        const { filmName, filmImg, year, genre } = this.props.selected;
        return(
            <div id="pageFilm">
                <div className="close">
                    <FontAwesomeIcon onClick={ this.handleUnmount } icon={ faTimesCircle } />
                </div>
                <div className="film-poster__film-videoPlayer">
                    <div className="film-videoPlayer">
                        {/*videoPlayer component*/}
                    </div>
                    {/*<div className="film-poster">*/}
                    {/*    <img src={ filmImg } alt={ filmName }/>*/}
                    {/*</div>*/}
                    {/*<div className="otherInfo">*/}
                    {/*    <div className="info">*/}
                    {/*        <p>{ year }</p>*/}
                    {/*        <p>{ genre }</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="description"></div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    };
};

export default PageFilm;
