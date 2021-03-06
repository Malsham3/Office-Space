import React, { useRef, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import "./Style.css";

function NewTask() {
  // eslint-disable-next-line
  const [globalState, dispatch] = useStoreContext();
  const [show, setShow] = useState(false);

  const titleRef = useRef("");
  const newTodoRef = useRef("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewTodo = (e) => {
    e.preventDefault();
    API.saveNote({
      user: globalState.user,
      title: titleRef.current.value,
      body: newTodoRef.current.value,
      completed: false,
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
      <Button
        style={{ fontWeight: "bold" }}
        className="new-task-button"
        variant="info"
        onClick={handleShow}
      >
        New Task
      </Button>

      <Modal className="task-modal" show={show} onHide={handleClose}>
        <Modal.Header
          style={{ fontWeight: "bold", color: "rgb(3, 73, 94)" }}
          closeButton
        >
          Add a Task
        </Modal.Header>
        <Form className="task-form">
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="Title"
              ref={titleRef}
              required
            />
          </Form.Group>
          <Form.Group
            className="task-body btn-style-that-were-using-to-overwrite-the-btn-class-padding"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              className="btn-style-that-were-using-to-overwrite-the-btn-class-padding"
              as="textarea"
              rows={2}
              placeholder="Body"
              ref={newTodoRef}
              required
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button
            onClick={(e) => {
              handleNewTodo(e);
            }}
            variant="info"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewTask;
