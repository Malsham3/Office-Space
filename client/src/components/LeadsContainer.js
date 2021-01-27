import React, {useEffect} from 'react'
import {Accordion} from 'react-bootstrap'
import NewLead from "./NewLead"
import Client from "./Client"
import "./Style.css";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function LeadsContainer() {
  const [globalState, dispatch] = useStoreContext();

  // the tasks array will need to be set to whatever gets returned from the server
  let clients = globalState.leads;

  useEffect(() => {
    API.getLeads()
      .then(({ data }) =>
        dispatch({
          type: "LOAD_LEADS",
          payload: data,
        })
      )
      .catch((err) => console.log(err));
  }, []);

    return (
      <div className="componentHolder ml-2">
        <div style={{ width: "100%" }}>
          <NewLead />
          <Accordion>
            <Client clients = {clients} />
          </Accordion>
        </div>
      </div>
    );
}

export default LeadsContainer
