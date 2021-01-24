import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer"
function Login() {
  return (
    <>
      <Header title="Office Space" tag="I'll burn the building down" />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
