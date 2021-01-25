import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import TasksContainer from "../components/TasksContainer";
import ClientCard from "../components/ClientCard";
import { useStoreContext } from "../utils/GlobalState";
import "../components/Style.css";

function Home() {
  const [globalState, dispatch] = useStoreContext();

  const [showTasks, setShowTasks] = useState(true);
  const taskDisplay = !showTasks
    ? { display: "none" }
    : { display: "flex", width: "100%" };
  const [showLeads, setShowLeads] = useState(false);
  const leadsDisplay = !showLeads ? { display: "none" } : { display: "flex" };
  const [showEmails, setShowEmails] = useState(false);
  const emailDispaly = !showEmails ? { display: "none" } : { display: "flex" };

  useEffect(() => {
    switch (globalState.view) {
      case "task":
        setShowTasks(true);
        setShowLeads(false);
        setShowEmails(false);
        break;
      case "leads":
        setShowTasks(false);
        setShowLeads(true);
        setShowEmails(false);
        return;
      case "email":
        setShowTasks(false);
        setShowLeads(false);
        setShowEmails(true);
        return;
      default:
        break;
    }
  }, [globalState.view]);

  return (
    <>
      <Header title="Office Space" tag="I'll burn the building down" />
      <div className="main-display-row">
        <UserProfile />
        <div className="componentHolder ml-2" style={taskDisplay}>
          <TasksContainer />
        </div>
        <div className="componentHolder ml-2" style={leadsDisplay}>
          <ClientCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
