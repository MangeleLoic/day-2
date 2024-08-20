import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Welcome = () => (
  <Container className="mt-5">
    <Alert variant="success">
      <h1>Benvenuto nella tua libreria di quartiere</h1>
      <p>Un libro per ogni tuo gusto</p>
    </Alert>
  </Container>
);

export default Welcome;
