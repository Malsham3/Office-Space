import React from "react";
import "./Style.css"
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Header({title, tag}) {
  
  return (
    <>
      <Jumbotron className = "header-Jumbotron"
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          height: "100px",
          marginBottom: "0px",
        }}
      >
        <Container className = "header-container" style={{ marginLeft: "10px" }}>
          <h1 style={{ fontWeight: "bold" }}>{title}</h1>
          <p style = {{ fontSize: "17px"}}>{tag}.</p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Header;
