import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import {
    Departments,
    Department
} from './components';

import configureStore from './store';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/departments" component={Departments}>
                    <Route path=":id" component={Department} />

                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
