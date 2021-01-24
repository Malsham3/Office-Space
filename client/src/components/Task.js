import React from "react";

function Task({tasks}) {
  return (
    // dynamically generate task row with a check box / button. 
    <>
    {tasks.map((task) => (
    <tr key={task.id}>
      <td>{task.content}</td>
      <td>Button that marks task complete.</td>
    </tr>
    ))}
    </>
  );
}

export default Task;
