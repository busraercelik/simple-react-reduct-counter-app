import React from 'react';
import { connect } from 'react-redux';
import increment from './actions/increment';
import decrement from './actions/decrement';
import { bindActionCreators } from 'redux';


const mapStateToProps = state => {
    return {
        number: state.number
    }
};

const mapDispatchToProps = dispatch => {
   return bindActionCreators({increment, decrement}, dispatch);
}

class Counter extends React.Component {

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