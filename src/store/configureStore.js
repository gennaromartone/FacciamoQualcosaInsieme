/*import rootReducer from './../reducers/rootReducer'

import { createStore } from 'redux';

const store = createStore(rootReducer)

export default store

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)*/

import rootReducer from './../reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux';
import middleware from './middleware';

// Grab the state from a global variable injected into the server-generated HTML
var preloadedState = {};
if (typeof window != 'undefined' && window.__PRELOADED_STATE__) {
    preloadedState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}

const composeEnhancers = (typeof window != 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)