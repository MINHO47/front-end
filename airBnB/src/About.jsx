import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function About() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                Welcome to our Airbnb-like platform, where you can discover and book unique accommodations around the world.
              </Card.Text>
              <Card.Text>
                Our mission is to provide travelers with unforgettable experiences and connect hosts with guests looking for the perfect place to stay.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Body>
              <Card.Title>How It Works</Card.Title>
              <Card.Text>
                Discover how our platform makes it easy for you to find and list accommodations.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Legal and Privacy</Card.Title>
              <Card.Text>
                View our Terms of Service and Privacy Policy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
