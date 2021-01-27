import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { auth } from "./firebase";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";


auth().onAuthStateChanged((user) => {
  // console.log(user)
  if (!user) {
    ReactDOM.render(<Signup />, document.getElementById("root"));
  } else {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
});


