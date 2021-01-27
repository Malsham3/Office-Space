import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import "./Style.css";

function NewActivity() {
  // eslint-disable-next-line
  const [globalState, dispatch] = useStoreContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const activityRef = useRef();
  const titleRef = useRef();

  const handleNewActivity = (e) => {
    e.preventDefault();
    API.saveDate({
      user: "Testing",
      date: globalState.selectedDate,
      title: titleRef.current.value,
      activity: activityRef.current.value,
      dateCreated: Date.now(),
    })
      .then((result) => {
        dispatch({
          type: "ADD_DATE",
          payload: result.data,
        });
      })
      .catch((err) => console.log(err));

    activityRef.current.value = "";

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
        New Activity
      </Button>

      <Modal className="lead-modal" show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            fontWeight: "bold",
            color: "rgb(3, 73, 94)",
            fontFamily: "Courier New, Courier, monospace",
          }}
          closeButton
        >
          Add an Activity
        </Modal.Header>

        <Form className="lead-form">
          <Form.Group controlId="formGroupTitle">
            <Form.Control
              type="text-box"
              placeholder="Title"
              ref={titleRef}
              required
            />
          </Form.Group>
          <Form.Group controlId="ControlTextarea1">
            <Form.Label>Activity</Form.Label>
            <Form.Control as="textarea" rows={3} 
            ref={activityRef}
            required
            />
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button
            onClick={(e) => {
              handleNewActivity(e);
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

export default NewActivity;
