import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import TaskInput from "./TaskInput";
import Task from "./Task";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function TasksContainer() {
  const [globalState, dispatch] = useStoreContext();

  // the tasks array will need to be set to whatever gets returned from the server
  let tasks = globalState.notes;

  useEffect(() => {
    API.getNotes()
      .then(({data}) =>
        dispatch({
          type: "LOAD_TASKS",
          payload: data,
        })
      )
      .catch((err) => console.log(err));
  }, []);


  return (
    <div style={{width: "100%"}}>
    <TaskInput/>
    <Accordion>
        <Task tasks={tasks} />
  </Accordion>
    </div>
  );


  {/* <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}
}

export default TasksContainer;
