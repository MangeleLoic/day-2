import React from 'react';
import { Button } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3M2VjNzQzYTU2ODAwMTU4ZWMzZTMiLCJpYXQiOjE3MjQzMzM3NjgsImV4cCI6MTcyNTU0MzM2OH0.Oq9ap6WUQdXsEZ8kKryELhNWZbscuL5zdSNFswuQNIk",
          },
        }
      );
      if (response.ok) {
        alert('Comment deleted!');
      }
    } catch (error) {
      console.log('Error deleting comment:', error);
    }
  };

  return (
    <div>
      <p>{comment.comment}</p>
      <p>Rating: {comment.rate}</p>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default SingleComment;
