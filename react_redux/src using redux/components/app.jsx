import React, { Component } from 'react';

// import {increment, decrement} from '../redux/actions'
import * as actions from '../redux/actions';

export default class App extends Component {
    // state = {
    //     count: 0,
    // };

    increment = () => {
        //1. read value in option
        const select = this.select.value * 1;
        //2. read count value and calculate new value
        // const count = this.state.count;
        //3. update state
        // this.setState({ count: count + select });
        // this.props.store.dispatch({ type: INCREMENT, data: select });
        this.props.store.dispatch(actions.increment(select));
    };

    decrement = () => {
        //1. read value in option
        const select = this.select.value * 1;
        this.props.store.dispatch(actions.decrement(select));
    };

    incrementIfOdd = () => {
        //1. read value in option
        const select = this.select.value * 1;
        //2. read count value and calculate new value
        const count = this.props.store.getState();
        //3. update state
        if (count % 2 === 1) {
            this.props.store.dispatch(actions.increment(select));
        }
    };

    incrementAsync = () => {
        //1. read value in option
        const select = this.select.value * 1;
        //3. update state
        setTimeout(() => {
            this.props.store.dispatch(actions.increment(select));
        }, 1000);
    };

    render() {
        const count = this.props.store.getState();

        return (
            <div>
                <p>You have clicked {count} times</p>
                <div>
                    <select ref={(select) => (this.select = select)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    &nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.incrementIfOdd}>
                        increment if ood
                    </button>
                    &nbsp;
                    <button onClick={this.incrementAsync}>
                        increment async
                    </button>
                    &nbsp;
                </div>
            </div>
        );
    }
}
