import React from 'react'
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import Footer from "../components/Footer"


function Home() {
    return (
        <>
        <Header title="Office Space" tag="I'll burn the building down"/>
        <UserProfile />
        <Footer />
        </>
    )
}

export default Home
