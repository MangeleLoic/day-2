import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddComment = ({ asin, setComments }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify({
            comment,
            rate,
            elementId: asin,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3M2VjNzQzYTU2ODAwMTU4ZWMzZTMiLCJpYXQiOjE3MjQzMzM3NjgsImV4cCI6MTcyNTU0MzM2OH0.Oq9ap6WUQdXsEZ8kKryELhNWZbscuL5zdSNFswuQNIk",
          },
        }
      );
      if (response.ok) {
        alert('Comment added!');
        const newComment = await response.json();
        setComments((oldComments) => [...oldComments, newComment]);
        setComment('');
        setRate(1);
      }
    } catch (error) {
      console.log('Error posting comment:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          as="select"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
