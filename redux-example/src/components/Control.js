import React, { Component } from 'react';
import PropTypes from 'prop-types';   // react version 15.5부터 React.PropTypes 사용 불가하여 prop-types 사용


function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

const defaultProps = {
    onPlus: () => createWarning('onPlus'),
    onSubtract: () => createWarning('onSubtract'),
    onRandomizeColor: () => createWarning('onRandomizeColor'),
};

class Control extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        )
    }
};

Control.propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};
Control.defaultProps = defaultProps;

export default Control;