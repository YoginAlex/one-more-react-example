import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { getDepartments } from './store/departments';
import { getEmployees } from './store/employees';

import './App.css';

injectTapEventPlugin();

class App extends Component {
    static propTypes = {
        getDepartments: PropTypes.func.isRequired,
        getEmployees: PropTypes.func.isRequired,

        children: PropTypes.node
    }

    constructor(props) {
        super(props);

        this.props.getDepartments();
        this.props.getEmployees();
    }

    render() {
        const { children } = this.props;

        const isOpen = true;

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar />
                    <div className="content">
                        {children ||
                            <h1>
                                Hello World!
                            </h1>
                        }
                    </div>
                    <Drawer open={isOpen}>
                        <AppBar
                            title="Example"
                            showMenuIconButton={false}
                        />
                        <MenuItem>
                            <Link to="/departments" activeClassName="route--active">
                                Departments
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/employees" activeClassName="route--active">
                                Employees
                            </Link>
                        </MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

const decorate = compose(
    connect(
        null,
        dispatch => bindActionCreators({
            getDepartments, getEmployees
        }, dispatch)
    )
);

export default decorate(App);
