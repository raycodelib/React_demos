import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments: [
    //             { username: "Jack", content: "React is awesome!!" },
    //             { username: "Mike", content: "I like React" },
    //             { username: "Tom", content: "React is difficult" },
    //         ],
    //     };
    // }
    state = {
        comments: [
            { username: 'Jack', content: 'React is awesome!!' },
            { username: 'Mike', content: 'I like React' },
            { username: 'Tom', content: 'React is difficult' },
        ],
    };

    componentDidMount() {
        PubSub.subscribe('DELETE', (msg, index) => {
            this.deleteComment(index);
        });
    }

    addComment = (comment) => {
        const { comments } = this.state;
        comments.unshift(comment);
        this.setState({ comments });
    };

    deleteComment = (index) => {
        const { comments } = this.state;
        comments.splice(index, 1);
        this.setState({ comments });
    };

    render() {
        const { comments } = this.state;

        return (
            <div>
                <header className='site-header jumbotron'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xs-12'>
                                <h1>Do you like React?</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='container'>
                    <CommentAdd addComment={this.addComment} />
                    <CommentList
                        comments={comments}
                        // deleteComment={this.deleteComment}
                    />
                </div>
            </div>
        );
    }
}
