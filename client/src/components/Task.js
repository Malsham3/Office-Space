import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./Style.css";

function Task({ tasks }) {
  return (
    // dynamically generate task row with a check box / button.
    <>
      {tasks.map((task) => (
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                id="task-header"
                as={Button}
                variant="link"
                eventKey="0"
              >
                {task.title}
              </Accordion.Toggle>
              <Button id="complete-task" variant="success"> Complete ✓</Button>
              <Button id="delete-task" variant="danger">Delete X</Button>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{task.body}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}

export default Task;
