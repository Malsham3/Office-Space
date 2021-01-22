import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login"
import Home from "./pages/Home"
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
    <div>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </StoreProvider>
    </div>
  </Router>
  );
}


export default App;
