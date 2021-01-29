import React from "react";
import "./Style.css";
import { Jumbotron, Button } from "react-bootstrap";

function Header({ title, tag }) {
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
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/images/redstapler.png"}></img>
        </div>

        <div className="signout-anchor mr-3 ">
          <Button
            className="signout-button"
            style={{
              backgroundColor: "#4C4646",
              color: "white",
            }}
            href="/signout"
            variant="light"
          >
            Sign Out
          </Button>
          {/* <a href="/signout">Sign Out</a> */}
        </div>
      </Jumbotron>
    </>
  );
}

export default Header;
