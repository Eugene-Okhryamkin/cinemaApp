import {rootReducer} from "../reducers/rootReducer.js";
import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));