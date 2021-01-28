import { Accordion, Card, Button } from "react-bootstrap";
import Moment from "react-moment";
import "./Style.css";
import React from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function Task({ tasks }) {
  // eslint-disable-next-line
  const [globalState, dispatch] = useStoreContext();

  function handleRemoveTask(id) {
    const item = document.getElementById(id);
    const taskItem = item.parentElement;
    console.log(taskItem);
    taskItem.classList.add("fall");
    taskItem.addEventListener("transitionend", function () {
      API.deleteNote(id).then(({ data }) =>
        dispatch({
          type: "REMOVE_NOTE",
          payload: data,
        })
      );
    });
  }

  const completeStyle = {
    color: "black",
    fontSize: "20px",
    textDecoration: "red wavy line-through",
  };

  function handleUpdateTask(id, notedata) {
    notedata.completed = !notedata.completed;
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
          <Card id={task._id}>
            <Card.Header>
              <Accordion.Toggle
                style={
                  task.completed
                    ? completeStyle
                    : { color: "black", fontSize: "20px" }
                }
                className="task-header"
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
                  handleUpdateTask(task._id, task);
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
              <Card.Body>
                <Card.Subtitle className="text-muted mb-3">
                  Date Created:{" "}
                  <Moment format="ddd MM/DD/YY">{task.date}</Moment> at{" "}
                  <Moment format="hh:mm a">{task.date}</Moment>
                </Card.Subtitle>
                {task.body}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}

export default Task;
