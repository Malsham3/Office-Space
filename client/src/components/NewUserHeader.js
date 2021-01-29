import React from "react";
import "./Style.css";
import { Jumbotron, Button } from "react-bootstrap";

function NewUserHeader({ title, tag }) {
  return (
    <>
      <Jumbotron
        className="header-Jumbotron"
        style={{
          backgroundColor: " rgb(3, 73, 94)",
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
      </Jumbotron>
    </>
  );
}

export default NewUserHeader;
