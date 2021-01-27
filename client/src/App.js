import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignOut from "./components/SignOut";
import { auth } from "./firebase";
import Signup from "./pages/Signup";
import { useStoreContext } from "./utils/GlobalState";

function App() {
  const [globalState, dispatch] = useStoreContext();

  const userEmail = auth().onAuthStateChanged((user) => {
    return user.email;
  });
  useEffect(() => {
    dispatch({
      type: "SET_USER",
      payload: userEmail,
    });
  }, []);

  if (!globalState.user) {
    return <Route path="/home" component={Signup} />;
  } else {
    return (
      <>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/signout" component={SignOut} />
        </Switch>
      </>
    );
  }
}

export default App;
