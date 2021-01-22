import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <>
      <Jumbotron
        style={{
          display: "flex",
          alignItems: "center",
          height: "100px",
          marginBottom: "0px",
        }}
        fluid
      >
        <Container style={{ marginLeft: "10px" }}>
          <h1 style={{ fontWeight: "bold" }}>{title}</h1>
          <p>{tag}.</p>
        </Container>
      </Jumbotron>
      <div
        style={{
          display: "inline-block",
          width: "100vw",
          height: "30px",
          border: "2px solid grey",
        }}
      ></div>
    </>
  );
}

export default Header;
