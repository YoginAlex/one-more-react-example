import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Department extends Component {
    static propTypes = {
        departments: PropTypes.array,
        params: PropTypes.object
    }

    render() {
        const { departments, params: { id } } = this.props;

        const department = departments[id];

        return (
            <div>
                {department ?
                    <h1>{department.name}</h1>
                    :
                    <h1>Nothing found...</h1>
                }
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

export default decorate(Department);
