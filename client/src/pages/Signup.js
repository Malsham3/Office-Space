import React from "react";
import Header from "../components/Header";
import SignIn from "../components/SignIn"
import Footer from "../components/Footer"

function Signup() {
  return (
    <div style={{position: "relative"}}>
      <Header title="Office Space" tag="I'll burn the building down" />
      <SignIn />
      <Footer />
    </div>
  );
}

export default Signup;
