import React, { useState } from "react";
import { auth } from "../firebase";
import { Form, Container, Card, Col, Button } from "react-bootstrap";
import "./Style.css";

function SignIn() {
  let [credentials, SetCredentials] = useState({
    email: "",
    password: "",
  });
  let [signUp, setSignUp] = useState(false);

  let [errorMessage, setErrorMessage] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      await auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
    } catch ({ message }) {
      setErrorMessage(message);
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      await auth().createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
    } catch ({ message }) {
      setErrorMessage(message);
    }
  }

  if (!signUp) {
    return (
      <Container className="login-container">
        <Card
          style={{
            borderRadius: "15px",
            boxShadow: "0 0 10px whitesmoke",
            background: "whitesmoke",
          }}
          className="login-card"
        >
          <Form className="login-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={credentials.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={credentials.password}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSignIn}>
              Log In
            </Button>

            <Button
              style={{ float: "right" }}
              variant="primary"
              type="submit"
              onClick={() => {
                setSignUp(true);
              }}
            >
              Sign Up
            </Button>
          </Form>
        </Card>
      </Container>
    );
  } else {
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
          <Form onSubmit={handleSignUp} className="signup-form">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={credentials.email}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" onClick={handleSignUp}>
              Create account
            </Button>

            <Button
              style={{ float: "right" }}
              variant="primary"
              type="submit"
              onClick={() => {
                setSignUp(false);
              }}
            >
              Alread Have Account
            </Button>
          </Form>
        </Card>
      </Container>
    );
  }
}

export default SignIn;
