import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function Login() {
    return (
        <>
            <Header title="Office Space" tag="I'll burn the building down"/>
            <SignupForm />
        </>
    )
}

export default Login;
