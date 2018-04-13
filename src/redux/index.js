import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducer';
import history from '../history';

const enhancer = applyMiddleware(routerMiddleware(history), thunk, logger);
const store = createStore(reducer, enhancer);

export default store;