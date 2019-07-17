import React from "react";
import "./preloader.sass";

const Preloader = () => {
    return(
        <div id="preloader">
            <div className="preloaderItem"></div>
            <div className="preloaderItem"></div>
            <div className="preloaderItem"></div>
        </div>
    )
};

export default Preloader;