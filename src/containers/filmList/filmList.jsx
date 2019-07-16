import React, { Component } from "react";
import FilmItem from "../../components/filmItem/filmItem.jsx";
import { connect } from "react-redux";
import "./filmList.sass";

class FilmList extends Component{

    renderItems = () => {
        const { cinema } = this.props;
        let template = null;

        if (Array.isArray(cinema)) {

            template = cinema.map((item, index) => {
                if (this.props.page === item.type || this.props.page == "Home") {
                        return <FilmItem key={index} item={item} />;
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
    search: state.search,
    cinema: Array.isArray(state.cinema.films) ? state.cinema.films.filter(film => film.filmName.toLowerCase().includes(state.search.toLowerCase())) : null
});



export default connect(mapStateToProps)(FilmList);