import React from "react";
import Header from "../components/Header";
import SignIn from "../components/SignIn"
import Footer from "../components/Footer"

function Signup() {
  return (
    <>
      <Header title="Office Space" tag="I'll burn the building down" />
      <SignIn />
      <Footer />
    </>
  );
}

export default Signup;
