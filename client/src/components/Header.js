import React from "react";
import "./Style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Header({ title, tag }) {
  return (
    <>
      <Jumbotron
        className="header-Jumbotron"
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
          marginBottom: "0px",
          padding: "0",
        }}
      >
        <Container className="header-container">
          <h1 style={{ fontWeight: "bold" }}>{title}</h1>
          <p style={{ fontSize: "17px" }}>{tag}.</p>
        </Container>
        <div className="signout-anchor mr-3 ">
          <a href="/signout">Sign Out</a>
        </div>
      </Jumbotron>
    </>
  );
}

export default Header;
