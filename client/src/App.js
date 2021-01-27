import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignOut from "./components/SignOut";
import { auth } from "./firebase";
import Signup from "./pages/Signup";
import { useStoreContext } from "./utils/GlobalState";

function App() {
  const [globalState, dispatch] = useStoreContext();
  const [localUser, setLocalUser] = useState()

  auth().onAuthStateChanged((user) => {
    if (user) {
      setLocalUser(user.email)
    }
  });
  useEffect(() => {
    dispatch({
      type: "SET_USER",
      payload: localUser,
    })
  }, [localUser]);

  if (!globalState.user) {
    return(
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signout" component={SignOut} />
      </Switch>
    ) 
  } else {
    return (
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/signout" component={SignOut} />
        </Switch>
    );
  }
}

export default App;
