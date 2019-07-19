import React, { Component } from "react";
import "./main.sass";
import { Route, Switch } from "react-router";
import Serial from "../../components/serial/serial.jsx";
import Film from "../../components/film/film.jsx";
import Home from "../../components/home/Home.jsx";
import Mult from "../../components/mult/Mult.jsx";
import { connect } from "react-redux";
import { getFilms } from "../../actions/cinemaAction.js";
import Preloader from "../../components/preloader/preloader.jsx";
import PageFilm from "../pageFilm/pageFilm.jsx";
import { selectFilm } from "../../actions/selectFilmAction.js";

const data = "../../../../build/Data/cinema.json";

class Main extends Component {

    componentDidMount() {
        const { fetchingCinema } = this.props;

        fetch(data)
            .then((response) => {
                fetchingCinema({ isFetching: true });
                return response.json();
            })
            .then((response) => {
                setTimeout(() => {
                    fetchingCinema({
                        films: response,
                        isFetching: false
                    })
                }, 1000);
            })
    }


    render() {
        const { isFetching } = this.props.cinema;
        let { select } = this.props;

        return (
            <div id="Main">
                {
                    isFetching ? <Preloader /> :
                        <div id="page">
                            <Switch>
                                <Route exact path="/" component={ Home } />
                                <Route exact path="/serial" component={ Serial } />
                                <Route exact path="/film" component={ Film } />
                                <Route exact path="/mult" component={ Mult } />
                            </Switch>
                            { select != null  ? <PageFilm selected={ select } close={ () => this.props.pageFilm(null) } /> : null  }
                        </div>

                }
            </div>
        );
    }
};

const mapStateToProps = state => ({
    cinema: state.cinema,
    select: state.select,
});

const mapDispatchToProps = dispatch => ({
    fetchingCinema: films => dispatch(getFilms(films)),
    pageFilm: select => dispatch(selectFilm(select))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);