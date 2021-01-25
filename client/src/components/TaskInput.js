import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";

function TaskInput() {
  const [globalState, dispatch] = useStoreContext();

  const titleRef = useRef("");
  const newTodoRef = useRef("");

   const handleNewTodo = (e) => {
    e.preventDefault();
    API.saveNote({
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
  };

  return (
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
      <Button 
      variant="primary"
      onClick={(e)=>{handleNewTodo(e)}}
      >
        New Todo
      </Button>{" "}
    </Form>
  );
}

export default TaskInput;
