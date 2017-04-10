import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import {
    Departments,
    Department,
    Employees,
    Employee
} from './components';

import configureStore from './store';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/departments/new" component={Department} isNew />
                <Route path="/departments" component={Departments}>
                    <Route path=":id" component={Department} />
                </Route>

                <Route path="/employees/new" component={Employee} isNew />
                <Route path="/employees" component={Employees}>
                    <Route path=":id" component={Employee} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
