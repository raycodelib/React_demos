import React, { Component } from 'react';

export default class App extends Component {
    state = {
        count: 0,
    };

    increment = () => {
        //1. read value in option
        const select = this.select.value * 1;
        //2. read count value and calculate new value
        const count = this.state.count;
        //3. update state
        this.setState({ count: count + select });
    };

    decrement = () => {
        //1. read value in option
        const select = this.select.value * 1;
        //2. read count value and calculate new value
        const count = this.state.count;
        //3. update state
        this.setState({ coun: count - select });
    };

    incrementIfOdd = () => {
        //1. read value in option
        const select = this.select.value * 1;
        //2. read count value and calculate new value
        const count = this.state.count;
        //3. update state
        if (count % 2 === 1) {
            this.setState({ count: count + select });
        }
    };

    incrementAsync = () => {
        //1. read value in option
        const select = this.select.value * 1;
        //2. read count value and calculate new value
        const count = this.state.count;
        //3. update state
        setTimeout(() => {
            this.setState({ count: count + select });
        }, 1000);
    };

    render() {
        const { count } = this.state;

        return (
            <div>
                <p>click {count} times</p>
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
