import React, { useState } from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import TasksContainer from "../components/TasksContainer";
import ClientCard from "../components/ClientCard";
import {useStoreContext} from "../utils/GlobalState"
import "../components/Style.css"

function Home() {
  
  const [state, dispatch ] = useStoreContext()


  const [showTasks, setShowTasks] = useState(false);
  const taskDisplay = !showTasks ? { display: "none" } : {display: "inline-block"};
  const [showLeads, setShowLeads] = useState(true);
  const leadsDisplay = !showLeads ? { display: "none" } : {display: "inline-block"};
  const [showEmails, setShowEmails] = useState(false);
  const emailDispaly = !showEmails ? { display: "none" } : {display: "inline-block"};


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
