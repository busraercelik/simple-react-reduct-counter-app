import React from 'react';
import { connect } from 'react-redux';
import increment from './actions/increment';
import decrement from './actions/decrement';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


const mapStateToProps = (state) => {
    return {
        number: state.number
    }
};


// 2 different ways of dispatching
const mapDispatchToProps = (dispatch) => {
   return {
    increment: bindActionCreators(increment, dispatch),
    decrement: () => dispatch(decrement())
   }
}

class Counter extends React.Component {

    static propTypes = {
        incrementAction: PropTypes.any,
        decrementAction: PropTypes.any
    }

    incrementButton = () => this.props.increment();
    decrementButton = () => this.props.decrement();

    render() {
        return (
            <div className='App'>
                <h1>{this.props.number}</h1>
                <div>
                    <button type='button' onClick={this.incrementButton}>+</button>
                    <button type='button' onClick={this.decrementButton}>-</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);