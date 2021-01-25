import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import TasksContainer from "../components/TasksContainer";
import { useStoreContext, StoreProvider } from "../utils/GlobalState";
// import ClientCard from "../components/ClientCard";
// import NewLead from "../components/NewLead";
import LeadsComponents from "../components/LeadsComponents";
import "../components/Style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  // eslint-disable-next-line
  // const [globalState, dispatch] = useStoreContext();

  // const [showTasks, setShowTasks] = useState(true);
  // const taskDisplay = !showTasks
  //   ? { display: "none" }
  //   : { display: "flex", width: "100%" };
  // const [showLeads, setShowLeads] = useState(false);
  // const leadsDisplay = !showLeads ? { display: "none" } : { display: "flex" };
  // const [showEmails, setShowEmails] = useState(false);
  // const emailDispaly = !showEmails ? { display: "none" } : { display: "flex" };

  // useEffect(() => {
  //   switch (globalState.view) {
  //     case "task":
  //       setShowTasks(true);
  //       setShowLeads(false);
  //       setShowEmails(false);
  //       break;
  //     case "leads":
  //       setShowTasks(false);
  //       setShowLeads(true);
  //       setShowEmails(false);
  //       return;
  //     case "email":
  //       setShowTasks(false);
  //       setShowLeads(false);
  //       setShowEmails(true);
  //       return;
  //     default:
  //       break;
  //   }
  // }, [globalState.view]);

  return (
    <Router>
      <StoreProvider>
        <Switch>
          <div id="wrapper">
            <Header title="Office Space" tag="I'll burn the building down" />
            <div className="main-display-row">
              <UserProfile />
              <Route path="/tasks" component={TasksContainer} />
              <Route path="/leads" component={LeadsComponents} />
            </div>
            <Footer />
          </div>
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default Home;
