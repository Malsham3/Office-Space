import React from "react";
import { Container, Card, Form, Col, Button } from "react-bootstrap";
import "./Style.css";

function SignupForm() {
  return (
    <Container className="signup-container">
      <Card
        style={{
          borderRadius: "15px",
          boxShadow: "0 0 10px whitesmoke",
          background: "whitesmoke",
        }}
        className="signup-card"
      >
        <Form className="signup-form">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Create account
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default SignupForm;
