import React from "react";
import {InputGroup} from "react-bootstrap"

function Task({tasks}) {
  return (
    // dynamically generate task row with a check box / button. 
    <>
    {tasks.map((task) => (
    <tr key={task.id}>
      <td>{task.content}</td>

      <td>
      <InputGroup.Checkbox aria-label="Checkbox for task completion"/>
      </td>

    </tr>
    ))}
    </>
  );
}

export default Task;
