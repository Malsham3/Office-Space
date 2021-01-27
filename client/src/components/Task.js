import { Accordion, Card, Button } from "react-bootstrap";
import "./Style.css";
import React from "react";
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

  function handleUpdateTask(id, notedata) {
    API.updateNote(id, notedata).then(({ data }) =>
      dispatch({
        type: "UPDATE_NOTES",
        payload: data,
      })
    );
  }

  return (
    // dynamically generate task row with a check box / button.
    <>
      {tasks.map((task) => (
        <Accordion key={task._id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                style={{ color: "black", fontSize: "20px" }}
                className="task-header"
                id={task._id}
                as={Button}
                variant="link"
                eventKey="0"
              >
                {task.title}
              </Accordion.Toggle>
              <Button id="complete-task" variant="info">
                {" "}
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
              <Button
                id="delete-task"
                variant="danger"
                onClick={() => {
                  handleUpdateTask(task._id, task);
                }}
              >
                Update
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
