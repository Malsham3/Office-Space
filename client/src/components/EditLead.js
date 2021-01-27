import React, { useRef, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./Style.css";

function EditLead({ client }) {
  // eslint-disable-next-line
  const [globalState, dispatch] = useStoreContext();
  const [show, setShow] = useState(false);

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const imageRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleUpdateLead(id) {
    const newData = {
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      image: imageRef.current.value,
    };

    API.updateLead(id, newData).then(
      ({ data }) => console.log(data)
      // dispatch({
      //   type: "UPDATE_LEAD",
      //   payload: data,
      // })
    );
    console.log(globalState.leads);

    handleClose();
  }

  return (
    <>
      <Link onClick={handleShow} style={{ color: "navy" }}>
        Edit Info
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
          Edit {client.first}'s Information
        </Modal.Header>

        <Form className="lead-form">
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder={client.first}
              ref={firstnameRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder={client.last}
              ref={lastnameRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="email"
              placeholder={client.email}
              ref={emailRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder={client.phone}
              ref={phoneRef}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="Enter new image URL"
              ref={imageRef}
              required
            />
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button
            onClick={(e) => {
              handleUpdateLead(client._id);
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

export default EditLead;
