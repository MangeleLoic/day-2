import React from 'react';
import SingleComment from './SingleComment';

const CommentsList = ({ comments }) => (
  <div>
    {comments.map((comment) => (
      <SingleComment key={comment._id} comment={comment} />
    ))}
  </div>
);

export default CommentsList;
