import React, { useState } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = function({ books }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Form.Group className='mb-3'>
        <Form.Control
          type="text"
          placeholder="Cosa vuoi leggere.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.asin} sm={6} md={4} lg={3} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
