import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../comment-item/comment-item';
import './comment-list.css';

export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        // deleteComment: PropTypes.func.isRequired,
    };

    render() {
        const { comments } = this.props;
        const display = comments.length === 0 ? 'block' : 'none';
        return (
            <div className='col-md-8'>
                <h3 className='reply'>Comments:</h3>
                <h2 style={{ display }}>
                    No comment, add your comment via left window
                </h2>
                <ul className='list-group'>
                    {comments.map((comment, index) => (
                        <CommentItem
                            comment={comment}
                            key={index}
                            // deleteComment={deleteComment}
                            index={index}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

// CommentList.propType = {
//     comments: PropTypes.array.isRequired,
// };
