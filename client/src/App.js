import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <>
      <Router>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path= "/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </StoreProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
