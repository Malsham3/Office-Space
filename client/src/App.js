import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import SignOut from "./components/SignOut";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <>
      <Router>
        <StoreProvider>
          <Switch>
            {/* <Redirect to="/home" />; */}
            <Route exact path="/" component={Home} />
            <Route exact path="/signout" component={SignOut} />
          </Switch>
        </StoreProvider>
      </Router>
    </>
  );
}

export default App;
