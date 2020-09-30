import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

import './comment-item.css';

export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        // deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    };

    handleClick = () => {
        const { comment, index } = this.props;
        if (
            window.confirm(
                `Are you sure to delete ${comment.username}'s comment?`
            )
        ) {
            PubSub.publish('DELETE', index);
            // deleteComment(index);
        }
    };

    render() {
        const { comment } = this.props;

        return (
            <li className='list-group-item'>
                <div className='handle'>
                    <button onClick={this.handleClick}>Delete</button>
                </div>
                <p className='user'>
                    <span>{comment.username}</span>&nbsp;&nbsp;
                    <span>said:</span>
                </p>
                <p className='centence'>{comment.content}</p>
            </li>
        );
    }
}
