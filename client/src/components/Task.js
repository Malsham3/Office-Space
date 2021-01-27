import { Accordion, Card, Button } from "react-bootstrap";
import "./Style.css";
import React, { useState, useRef } from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function Task({ tasks }) {
  // eslint-disable-next-line
  const [globalState, dispatch] = useStoreContext();

  function handleRemoveTask(id) {
    API.deleteNote(id).then(({ data }) =>
      dispatch({
        type: "REMOVE_NOTE",
        payload: data,
      })
    );
  }

  const [complete, setComplete] = useState(false);

  const completeStyle = {
    color: "black",
    fontSize: "20px",
    textDecoration: "red wavy line-through",
  };

  function handleCompleteTask(e) {
    e.preventDefault();
    setComplete(!complete);
  }

  function handleUpdateTask(id, notedata) {
    notedata.completed = !notedata.completed;
    API.updateNote(id, notedata).then(({ data }) =>
      dispatch({
        type: "UPDATE_NOTES",
        payload: data,
      })
    );
    console.log(globalState.notes);
  }

  return (
    // dynamically generate task row with a check box / button.
    <>
      {tasks.map((task) => (
        <Accordion key={task._id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                style={
                  complete === true
                    ? completeStyle
                    : { color: "black", fontSize: "20px" }
                }
                style={{ color: "black", fontSize: "20px" }}
                className="task-header"
                id={task._id}
                as={Button}
                variant="link"
                eventKey="0"
              >
                {task.title}
              </Accordion.Toggle>

              <Button
                id="complete-task"
                variant="info"
                onClick={(e) => {
                  handleCompleteTask(e);
                }}
              >
                Complete ✓
              </Button>
              <Button
                id="delete-task"
                variant="danger"
                onClick={() => {
                  handleRemoveTask(task._id);
                }}
              >
                X
              </Button>
            </Card.Header>
            <Accordion.Collapse
              style={{ fontSize: "17px", color: "rgb(36, 35, 35)" }}
              eventKey="0"
            >
              <Card.Body>{task.body}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}

export default Task;
