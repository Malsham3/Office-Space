import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import TasksContainer from "../components/TasksContainer";
import { useStoreContext, StoreProvider } from "../utils/GlobalState";
import LeadsContainer from "../components/LeadsContainer";
import "../components/Style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActivityContainer from "../components/ActivityContainer";


function Home() {

  return (
    <Router>
      <StoreProvider>
        
          <div id="wrapper">
            <Header title="Office Space" tag="I'll burn the building down" />
            <div className="main-display-row">
              <UserProfile />
              <Route path="/home/taskscomponents" component={TasksContainer} />
              <Route path="/home/leadcomponents" component={LeadsContainer} />
              <Route path="/home/calendarcomponents" component={ActivityContainer} />
            </div>
            <Footer />
          </div>
      </StoreProvider>
    </Router>
  );
}

export default Home;
