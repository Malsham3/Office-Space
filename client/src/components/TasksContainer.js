import React from "react";
import {Table} from "react-bootstrap"
import Task from "./Task"

function TasksContainer() {
  // the tasks array will need to be set to whatever gets returned from the server
  let tasks = [{
    id: "stuff",
    content: "get stuff done!"
  },{
    id: "things",
    content: "get stuff done!"
  },{
    id: "stuff about things",
    content: "get stuff done!"
  },{
    id: "things with stuff",
    content: "get stuff done!"
  }];

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
