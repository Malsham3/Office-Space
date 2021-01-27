import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import "./Style.css";

function NewLead() {
  // eslint-disable-next-line
  const [globalState, dispatch] = useStoreContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const imageRef = useRef();

  const handleNewLead = (e) => {
    e.preventDefault();
    API.saveLead({
      user: globalState.user,
      first: firstnameRef.current.value,
      last: lastnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      image: imageRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: "ADD_LEAD",
          payload: result.data,
        });
      })
      .catch((err) => console.log(err));

    firstnameRef.current.value = "";
    lastnameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    imageRef.current.value = "";

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
        New Lead
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
          Add a Lead
        </Modal.Header>

        <Form className="lead-form">
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="First Name"
              ref={firstnameRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="Last Name"
              ref={lastnameRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              ref={emailRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="Phone number"
              ref={phoneRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="Image URL"
              ref={imageRef}
              required
            />
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button
            onClick={(e) => {
              handleNewLead(e);
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

export default NewLead;
