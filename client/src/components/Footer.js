import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer className="footer mt-auto py-2">
      <div className="container footer-container">
        <div className="row justify-content-between">
          <div className="col-8">
            <span className="text-muted">
              Made with ♥️ by Rick Smart, Danielle Cutler, Mostafa Alshammary,
              Bradley Campbell.
              <br />
              &copy; {new Date().getFullYear()}
            </span>
          </div>

          <div className="col-2">
            <a href="https://github.com/Malsham3/Office-Space" target="_blank" className="fa fa-github fa-2x mr-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
