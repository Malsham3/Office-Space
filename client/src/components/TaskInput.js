import React, { useRef, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";

function TaskInput() {
  const [globalState, dispatch] = useStoreContext();
  const [show, setShow] = useState(false);

  const titleRef = useRef("");
  const newTodoRef = useRef("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const handleNewTodo = (e) => {
    e.preventDefault();
    API.saveNote({
      title: titleRef.current.value,
      body: newTodoRef.current.value,
    // this is a default value until I figure out how to get
    // the completed value from the task component
      completed: true,
    })
      .then((result) => {
        dispatch({
          type: "ADD_NOTE",
          payload: result.data,
        });
      })
      .catch((err) => console.log(err));

    titleRef.current.value = "";
    newTodoRef.current.value = "";

    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
          <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Control 
        type="text" 
        placeholder="Title" 
        ref={titleRef} 
        required
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="New Todo"
          ref={newTodoRef}
          required
        />
      </Form.Group>
    </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
          onClick={(e)=>{handleNewTodo(e)}}
          variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskInput;
