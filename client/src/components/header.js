import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    
      <Jumbotron fluid>
        <Container style={{backgroundColor: "black"},{alignItems: "center"},{justifyContent: "center"}}>
          <h1 style={{color: "white"}}>Fluid jumbotron</h1>
          <p style={{color: "white"}}>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>

  );
}

export default Header;
