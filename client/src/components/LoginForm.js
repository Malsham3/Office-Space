import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import "./Style.css";

function LoginForm() {
  return (
    <Container className="login-container">
      <Card style = {
          {borderRadius: "25px", boxShadow: "0 0 50px black"
          }} className="login-card">
        <Form className = "login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default LoginForm;
