import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';   // react version 15.5부터 React.PropTypes 사용 불가하여 prop-types 사용
import * as actions from '../action'

class Counter extends React.Component{

    constructor(props){
        super(props);

    }
    render(){

        const style= {
            textAlign:'right'
        };

        return(
            <div className="total" style={style}>
                <h1>{this.props.contact.length}</h1>
            </div>
        )
    }
}


Counter.prototypes = {
    total: PropTypes.number,
    onChange: PropTypes.func
};

const defaultProps = {
    total: -1,
    onChange: ()=> console.warn('onChange is not defined')
};

const mapStateToProps = (state) => {
    return {
        total: state.counter.total
    };
};

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators(actions, dispatch);
    handleTotalChange: () => { dispatch(actions.total())}
};

export default Counter;