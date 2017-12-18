import React, { Component } from 'react';
import PropTypes from 'prop-types';   // react version 15.5부터 React.PropTypes 사용 불가하여 prop-types 사용

const defaultProps = {
    number: -1
};

class Value extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
};

Value.propTypes = {
    number: PropTypes.number
};
Value.defaultProps = defaultProps;


export default Value;