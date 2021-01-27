import React, { useRef, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import "./Style.css";

function NewActivity() {
  // eslint-disable-next-line
  const [globalState, dispatch] = useStoreContext();
  const [show, setShow] = useState(false);

  // const titleRef = useRef("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      {/* BUTTON TO DO WHAT? */}
      <Button
        style={{ fontWeight: "bold" }}
        className="new-task-button"
        variant="info"
        onClick={handleShow}
      >
        Create new date
      </Button>


      {/* MODAL HEADER */}
      <Modal className="task-modal" show={show} onHide={handleClose}>
        <Modal.Header
          style={{ fontWeight: "bold", color: "rgb(3, 73, 94)" }}
          closeButton
        >
          Add a date
        </Modal.Header>

        <Form className="task-form">

          {/* USER DATE HERE */}
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="Title"
              ref=""
              required
            />
          </Form.Group>

          {/* ACTIVITY FIELD HERE */}
          <Form.Group
            className="task-body"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Body"
              ref=""
              required
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button
            variant="info"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewActivity;
