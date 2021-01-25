import React, {useEffect} from "react";
import {Table} from "react-bootstrap"
import Task from "./Task"
import API from "../utils/API"
import { useStoreContext } from "../utils/GlobalState";


function TasksContainer() {
  // the tasks array will need to be set to whatever gets returned from the server
  let tasks = [];

  const getNotes = () => {
    // dispatch({ type: LOADING });
    API.getNotes()
      .then(results => {
        console.log(results)
        // dispatch({
        //   type: UPDATE_POSTS,
        //   posts: results.data
        // });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getNotes();
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
        <Task tasks = {tasks}/>
      </tbody>
    </Table>
  );
}

export default TasksContainer;
