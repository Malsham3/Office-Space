import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";

function NewLead() {
  // eslint-disable-next-line
  const [globalState, dispatch] = useStoreContext();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const imageRef = useRef();

  const handleNewLead = (e) => {
    e.preventDefault();
    API.saveLead({
      name: nameRef.current.value,
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

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    imageRef.current.value = "";
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Name"
        ref={nameRef}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Email" 
        ref={emailRef}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control 
        type="phone" 
        placeholder="Phone" 
        ref={phoneRef}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Image" 
        ref={imageRef}
        
        />
      </Form.Group>

      <Button 
      variant="primary" 
      onClick={(e)=>{handleNewLead(e)}}
      >
        Submit
      </Button>
    </Form>
  );
}

export default NewLead;
