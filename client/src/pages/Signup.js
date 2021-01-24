import React from "react";
import Header from "../components/Header";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer"

function Signup() {
  return (
    <>
      <Header title="Office Space" tag="I'll burn the building down" />
      <SignupForm />
      <Footer />
    </>
  );
}

export default Signup;
