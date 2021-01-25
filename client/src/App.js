import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignOut from "./components/SignOut"
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <>
      <Router>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signout" component={SignOut} />
          </Switch>
        </StoreProvider>
      </Router>
    </>
      
    
  );
}

export default App;
