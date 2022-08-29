import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetings';

const reducer = combineReducers({
    greetingsReducer,
});

const store = configureStore({ reducer });

export default store;