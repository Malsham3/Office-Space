import React from "react";
import {InputGroup} from "react-bootstrap"

function Task({tasks}) {

  return (
    // dynamically generate task row with a check box / button. 
    <>
    {tasks.map((task) => (
    <tr key={task._id}>
      <td>{task.title}</td>
      <td>{task.body}</td>

      <td style={{width:"50px"}}>
      <label >Completed</label>
      <InputGroup.Checkbox aria-label="Checkbox for task completion"/>
      </td>

    </tr>
    ))}
    </>
  );
}

export default Task;
