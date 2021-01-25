import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import Task from "./Task";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function TasksContainer() {
  const [globalState, dispatch] = useStoreContext();

  // the tasks array will need to be set to whatever gets returned from the server
  let tasks = [];
  useEffect(() => {
    API.getNotes()
      .then((data) =>
        dispatch({
          type: "LOAD_TASKS",
          payload: data,
        })
      )
      .then(() => console.log(globalState.notes))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>

      <tbody>
        {/* pass in the text/body of the task here */}
        <Task tasks={tasks} />
      </tbody>
    </Table>
  );
}

export default TasksContainer;
