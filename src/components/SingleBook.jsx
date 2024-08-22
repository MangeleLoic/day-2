import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <Card
        style={{
          border: selected ? '3px solid red' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => setSelected(!selected)}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </div>
  );
};

export default SingleBook;
