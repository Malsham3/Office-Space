import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import NewTask from "./NewTask";
import Task from "./Task";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function TasksContainer() {
  const [globalState, dispatch] = useStoreContext();
  // the tasks array will need to be set to whatever gets returned from the server
  let tasks = globalState.notes;

  useEffect(() => {
    API.getNotes()
      .then(({ data }) =>
        dispatch(
          {
            type: "LOAD_TASKS",
            payload: data,
          },
          []
        )
      )
      .catch((err) => console.log(err));
  });

  return (
    <div className="componentHolder ml-2">
      <div style={{ width: "100%" }}>
        <NewTask />
        <Accordion>
          <Task tasks={tasks} />
        </Accordion>
      </div>
    </div>
  );
}

export default TasksContainer;
