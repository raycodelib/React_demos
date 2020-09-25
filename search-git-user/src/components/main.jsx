import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Main extends Component {
    // static propTypes = {
    //     searchKeyword: PropTypes.string.isRequired,
    // };

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null,
    };

    componentDidMount() {
        // subscribe
        PubSub.subscribe('SEARCH', (msg, searchKeyword) => {
            // the bellowing 'this' is not pointing to the component state
            // use arrow function whenever we define callback function
            this.setState({
                initView: false,
                loading: true,
            });

            // send Ajax request
            const url = `https://api.github.com/search/users?q=${searchKeyword}`;
            axios
                .get(url)
                .then((response) => {
                    const result = response.data;
                    const users = result.items.map((item) => ({
                        name: item.login,
                        url: item.html_url,
                        avatarUrl: item.avatar_url,
                    }));

                    this.setState({ loading: false, users });
                })
                .catch((error) => {
                    this.setState({ loading: false, errorMsg: error.message });
                });
        });
    }

    // componentWillReceiveProps(newProps) {
    //     const { searchKeyword } = newProps;
    //     code move to componentDidMount
    // }

    render() {
        const { initView, loading, users, errorMsg } = this.state;
        if (initView) {
            return <h2>Enter keyword to start searching</h2>;
        } else if (loading) {
            return <h2>Loading requests</h2>;
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>;
        } else {
            return (
                <div className='row'>
                    {users.map((user, index) => (
                        <div className='card' key={index}>
                            <a href={user.url}>
                                <img
                                    src={user.avatarUrl}
                                    style={{ width: 100 }}
                                    alt=''
                                />
                            </a>
                            <p className='card-text'>{user.name}</p>
                        </div>
                    ))}
                </div>
            );
        }
    }
}
