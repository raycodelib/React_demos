import React, { Component } from 'react';

import Search from './search';
import Main from './main';

export default class App extends Component {
    state = {
        searchKeyword: '',
    };

    setSearchKeyword = (searchKeyword) => {
        this.setState({ searchKeyword });
    };

    render() {
        return (
            <div className='container'>
                <Search setSearchKeyword={this.setSearchKeyword} />
                <Main searchKeyword={this.state.searchKeyword} />
            </div>
        );
    }
}
