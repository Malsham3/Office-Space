import React from "react";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";

function Signup() {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Header title="Office Space" tag="I'll burn the building down" />
      <SignIn />
      <div style={{position: "fixed", bottom: "0"}}>
      <Footer />
      </div>
    </div>
  );
}

export default Signup;
