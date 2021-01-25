import React, {useRef} from "react";
import API from "../utils/API";
import { Button } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";

function Task({ tasks }) {
  const [globalState, dispatch] = useStoreContext();


  function handleRemoveTask(id) {
    API.deleteNote(id).then(({ data }) =>
      dispatch({
        type: "REMOVE_NOTE",
        payload: data,
      })
    );
  }

  return (
    // dynamically generate task row with a check box / button.
    <>
      {tasks.map((task) => (
        <tr key={task._id} id={task._id}>
          <td>{task.title}</td>
          <td>{task.body}</td>

          <td>
            <label>Completed</label>
            <Button 
            variant="danger"
            onClick={() => {
              handleRemoveTask(task._id);
            }}
            >Delete</Button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Task;
