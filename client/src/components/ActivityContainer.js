import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import NewActivity from "./NewActivity";
import Activity from "./Activity";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import MiniCalendar from "../components/MiniCalendar";

function ActivityContainer() {
  const [globalState, dispatch] = useStoreContext();

  // the dates array will need to be set to whatever gets returned from the server
  let dates = globalState.dates;

  useEffect(() => {
    API.getDates()
      .then(({ data }) =>
        dispatch(
          {
            type: "LOAD_DATES",
            payload: data,
          },
          []
        )
      )
      .catch((err) => console.log(err));
  });

  return (
    <div className="componentHolder ml-2">
      <div style={{ display: "flex" }}>
        <div style={{ width: "47vw" }}>
          <NewActivity />
          <Accordion>
            <Activity dates={dates} />
          </Accordion>
        </div>
        <div style={{ float: "right" }}>
          <MiniCalendar />
        </div>
      </div>
    </div>
  );
}

export default ActivityContainer;
