import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

export default class Search extends Component {
    // static propTypes = {
    //     setSearchKeyword: PropTypes.func.isRequired,
    // };

    handleClick = () => {
        const searchKeyword = this.input.value.trim();
        if (searchKeyword) {
            // this.props.setSearchKeyword(searchKeyword);
            PubSub.publish('SEARCH', searchKeyword);
        }
    };

    render() {
        return (
            <div>
                <section className='jumbotron'>
                    <h3 className='jumbotron-heading'>Search Github Users</h3>
                    <div>
                        <input
                            type='text'
                            placeholder='enter name keyword'
                            ref={(input) => (this.input = input)}
                        />
                        <button onClick={this.handleClick}>Search</button>
                    </div>
                </section>
            </div>
        );
    }
}
