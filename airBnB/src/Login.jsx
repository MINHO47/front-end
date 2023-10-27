import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col sm="6">
          <h2 className="text-center">Login</h2>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="text-center mt-4">
              <Button variant="primary" onClick={handleLogin} style={{ backgroundColor: "#FF5A5F", border: "none" }}>
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;

