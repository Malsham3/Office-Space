import React from "react";
import "./Style.css";
import {Jumbotron, Button} from "react-bootstrap"
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Container from "react-bootstrap/Container";

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
        <div className="header-head">
          <h1 style={{ fontWeight: "bold" }}>{title}</h1>
          <p style={{ fontSize: "17px" }}>{tag}.</p>

        </div>
        <div className="signout-anchor mr-3 ">
        <Button className="signout-button"
        style={{ 
        backgroundColor:"rgb(64, 90, 204)",
      color: "white" }}
        href="/signout" variant="light">Sign Out</Button>
          {/* <a href="/signout">Sign Out</a> */}
        </div>
      </Jumbotron>
    </>
  );
}

export default Header;
