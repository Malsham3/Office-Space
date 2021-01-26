import React, { useState } from "react";
import { auth } from "../firebase";
import { Form, Container, Card, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
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

  function handleInputChange(e) {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Updating the input's state
    SetCredentials({
      ...credentials,
      [name]: value,
    });
  }

  const handleSetSignUp = () => {
    return <Redirect to="/home/tasks" />;
  };

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
          {errorMessage}
          <Form className="login-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={credentials.email}
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleInputChange}
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
                  name="email"
                  placeholder="Enter email"
                  value={credentials.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleInputChange}
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
