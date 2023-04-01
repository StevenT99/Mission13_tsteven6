import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Welcome to Joel's Website!</h1>
          <p>
            This is where we host all of the legendary info for the legendary
            man Joel.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
