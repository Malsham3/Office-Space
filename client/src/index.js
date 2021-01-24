import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { auth } from "./firebase";
import SignIn from "./components/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";

auth().onAuthStateChanged((user) => {
  if (!user) {
    ReactDOM.render(<SignIn></SignIn>, document.getElementById("root"));
  } else {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
});

// ReactDOM.render(<App />, document.getElementById('root'));
