import React from "react";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import TasksContainer from "../components/TasksContainer";
import { useStoreContext } from "../utils/GlobalState";
import LeadsContainer from "../components/LeadsContainer";
import "../components/Style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActivityContainer from "../components/ActivityContainer";

function Home() {
  const [globalState, dispatch] = useStoreContext();

  return (
    <Router>
      <div id="wrapper">
        <UserProfile name={globalState.user} />
        <div className="main-display-row">
          <Route path="/taskscomponents" component={TasksContainer} />
          <Route path="/leadcomponents" component={LeadsContainer} />
          <Route path="/calendarcomponents" component={ActivityContainer} />
        </div>
        <div style={{ position: "fixed", bottom: "0" }}>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default Home;
