import React from "react";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";
import NewUserHeader from "../components/NewUserHeader"

function Signup() {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <NewUserHeader title="Office Space" tag="I'll burn the building down" />
      <SignIn />
      <div style={{position: "fixed", bottom: "0"}}>
      <Footer />
      </div>
    </div>
  );
}

export default Signup;
