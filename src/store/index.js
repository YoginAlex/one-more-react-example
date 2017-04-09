import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';

import departments from './departments';

const router = routerMiddleware(browserHistory);

const rootReducer = combineReducers({
    departments,
    routing: routerReducer
});

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, router),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
}
