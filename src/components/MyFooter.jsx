import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = function () {
  return (
    <footer className="bg-dark text-light mt-4 p-2 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 EpiBook. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MyFooter;
