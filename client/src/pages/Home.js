import React from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import TasksContainer from "../components/TasksContainer";
import { StoreProvider } from "../utils/GlobalState";
import LeadsContainer from "../components/LeadsContainer";
import "../components/Style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActivityContainer from "../components/ActivityContainer";

function Home() {
  return (
    <Router>
      <div id="wrapper">
        <Header title="Office Space" tag="I'll burn the building down" />
        <div className="main-display-row">
          <UserProfile />
          <Route path="/taskscomponents" component={TasksContainer} />
          <Route path="/leadcomponents" component={LeadsContainer} />
          <Route
            path="/home/calendarcomponents"
            component={ActivityContainer}
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Home;
