import React, { useState } from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import TasksContainer from "../components/TasksContainer";
import ClientCard from "../components/ClientCard";
import "../components/Style.css"

function Home() {
  const [showTasks, setShowTasks] = useState(false);
  const taskDisplay = !showTasks ? { display: "none" } : {display: "inline-block"};
  const [showLeads, setShowLeads] = useState(true);
  const leadsDisplay = !showLeads ? { display: "none" } : {display: "inline-block"};
  const [showEmails, setShowEmails] = useState(false);
  const emailDispaly = !showEmails ? { display: "none" } : {display: "inline-block"};


  return (
    <>
      <Header title="Office Space" tag="I'll burn the building down" />
      <div className="main-display-row ml-3 mr-3 mt-2 mb-2" style={{display: "inline-block", width: "100vw"}}>
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
