import React, { Component } from "react";
import FilmItem from "../../components/filmItem/filmItem.jsx";
import {connect} from "react-redux";
import "./filmList.sass";

class FilmList extends Component{

    // filter = () => {
    //     const {page} = this.props;
    //
    //     switch (page) {
    //
    //         case "Film":
    //             return "Film"
    //
    //         default:
    //             return "";
    //     }
    //
    // };

    renderItems = () => {
        const { films } = this.props.cinema;
        let template = null;

        if(Array.isArray(films)) {
            template = films.map((item, index) => {
                if(this.props.page === item.type || this.props.page === "Home") {
                    return <FilmItem key={index} item={item} />
                }
            });
        }

        return template;
    };

    render() {
        return(
            <div className="FilmList">
                {
                    this.renderItems()
                }
            </div>
        );
    };
};

const mapStateToProps = state => ({
    cinema: state.cinema
});

export default connect(mapStateToProps)(FilmList);