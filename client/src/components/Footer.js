import React from "react";
import "./Style.css";

function Footer() {
  return (
    <footer className="row footer-div py-2">
      <div className="col-10">
        <span className="text-muted">
          Made with
          <span role="img" aria-label="Heart Emoji">
            ♥️
          </span>{" "}
          by Rick Smart, Danielle Cutler, Mostafa Alshammary.
          <br />
          &copy; {new Date().getFullYear()}
        </span>
      </div>

      <div className="col-2">
        <a
          href="https://github.com/Malsham3/Office-Space"
          target="_blank"
          className="fa fa-github fa-2x mr-1"
          rel="noopener noreferrer"
        ></a>
      </div>
    </footer>
  );
}

export default Footer;
