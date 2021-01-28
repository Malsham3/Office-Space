import React, { useRef, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./Style.css";

function EditActivity({ date }) {
  // eslint-disable-next-line
  const [globalState, dispatch] = useStoreContext();
  const [show, setShow] = useState(false);

  const titleRef = useRef();
  const activityRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleUpdateActivity(id, activityData) {
    activityData.title = titleRef.current.value;
    activityData.activity = activityRef.current.value;

    API.updateDate(id, activityData).then(({ data }) =>
      dispatch({
        type: "UPDATE_DATE",
        payload: data,
      })
    );
    console.log(globalState.dates);

    handleClose();
  }

  return (
    <>
      <Link
        onClick={handleShow}
        style={{ color: "navy", fontFamily: "Courier" }}
      >
        Edit
      </Link>

      <Modal className="lead-modal" show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            fontWeight: "bold",
            color: "rgb(3, 73, 94)",
            fontFamily: "Courier New, Courier, monospace",
          }}
          closeButton
        >
          Edit Activity
        </Modal.Header>

        <Form className="lead-form">
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder={date.title}
              ref={titleRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control as="textarea" rows={3} ref={activityRef} required />
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button
            onClick={(e) => {
              handleUpdateActivity(date._id, date);
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

export default EditActivity;
