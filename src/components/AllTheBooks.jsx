import { Card, Container, Row, Col } from "react-bootstrap";
import books from "../data/fantasy.json";

const AllTheBooks = function () { 
  return (<Container className="mt-5">
    <Row>
      {books.map((book) => (
        <Col key={book.asin} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>)
  
};

export default AllTheBooks;
