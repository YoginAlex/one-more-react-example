import React, { Component } from 'react';
import { Link } from 'react-router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';


class Departments extends Component {
    static propTypes = {
        departments: PropTypes.array,

        children: PropTypes.node
    }

    render() {
        const { departments, children } = this.props;

        const items = departments.map((dep, index) => (
            <MenuItem>
                <Link to={`/departments/${index}`}>
                    {dep.name}
                </Link>
            </MenuItem>
        ));

        return (
            <div>
                {children || items}
            </div>
        );
    }
}


const decorate = compose(
    connect(
        state => ({
            departments: state.departments.items
        })
    )
);

export default decorate(Departments);
