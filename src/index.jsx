import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css";
import App from "./containers/App.jsx"
import { store } from "./store/store";
import { createBrowserHistory } from "history";
import {Router} from "react-router";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);