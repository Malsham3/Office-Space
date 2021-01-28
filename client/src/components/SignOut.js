import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { Redirect } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";

function SignOut() {
  const [globalState, dispatch] = useStoreContext();
  let [succesful, setSuccessful] = useState(false);

  useEffect(() => {
    dispatch({
      type: "SET_USER",
      payload: "",
    });
  }, [succesful]);

  useEffect(() => {
    auth()
      .signOut()
      .then(() => {
        setSuccessful(true);
      });
  }, []);

  if (succesful) {
    return <Redirect to="/" />;
  } else {
    return <h1>"Signing you out.."</h1>;
  }
}

export default SignOut;
