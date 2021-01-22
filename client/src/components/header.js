import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Header(props) {
  return (
    <Jumbotron fluid>
  <Container>
    <h1>{props.title}</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
  );
}

export default Header;
