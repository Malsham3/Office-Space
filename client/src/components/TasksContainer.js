import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import TaskInput from "./TaskInput";
import Task from "./Task";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function TasksContainer() {
  const [globalState, dispatch] = useStoreContext();

  // the tasks array will need to be set to whatever gets returned from the server
  let tasks = globalState.notes;

  useEffect(() => {
    API.getNotes()
      .then(({data}) =>
        dispatch({
          type: "LOAD_TASKS",
          payload: data,
        })
      )
      .catch((err) => console.log(err));
  }, []);

  


  return (
    <div style={{width: "100%"}}>
    <TaskInput></TaskInput>
    <Table bordered hover>
      <tbody>
        {/* pass in the text/body of the task here */}
        <Task tasks={tasks} />
      </tbody>
    </Table>
    </div>
  );
}

export default TasksContainer;
