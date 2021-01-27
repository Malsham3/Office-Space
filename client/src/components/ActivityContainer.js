import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import NewActivity from "./NewActivity";
import Activity from "./Activity";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function ActivityContainer() {
    const [globalState, dispatch] = useStoreContext();
  
    // the dates array will need to be set to whatever gets returned from the server
    let dates = globalState.dates;
  
    // useEffect(() => {
    //   API.getNotes()
    //     .then(({ data }) =>
    //       dispatch(
    //         {
    //           type: "LOAD_TASKS",
    //           payload: data,
    //         },
    //         []
    //       )
    //     )
    //     .catch((err) => console.log(err));
    // });
  
    return (
      <div className="componentHolder ml-2">
        <div style={{ width: "100%" }}>
          <NewActivity />
          <Accordion>
            <Activity dates={dates} />
          </Accordion>
        </div>
      </div>
    );
  }
  
  export default ActivityContainer;
  