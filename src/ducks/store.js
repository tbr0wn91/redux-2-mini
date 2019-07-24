import { createStore, combineReducers } from 'redux';
import hackerNewsReducer from './hackerNewsReducer';
import { applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import mediumReducer from './mediumNewsReducer';


const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer


})
    


export default createStore( rootReducer, applyMiddleware(promiseMiddleware));