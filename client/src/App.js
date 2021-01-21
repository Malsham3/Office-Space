import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login"
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
    <div>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </StoreProvider>
    </div>
  </Router>
  );
}


export default App;
