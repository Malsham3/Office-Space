import React from "react";
import "./Style.css";

function Footer() {
  return (
    <div className="footer-div">
    <footer
      className="footer-2 py-2"
      style={{ position: "absolute", bottom: "0" }}
    >
      <div className="container footer-container">
        <div className="row justify-content-between">
          <div className="col-12">
            <span className="text-muted">
              Made with
              <span role="img" aria-label="Heart Emoji">
                ♥️
              </span>{" "}
              by Rick Smart, Danielle Cutler, Mostafa Alshammary, Bradley
              Campbell.
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
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
