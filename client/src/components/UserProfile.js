import React from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./Style.css";
import { Link } from "react-router-dom";
import Header from "./Header";

function UserProfile({ name, jobTitle, userPic }) {
  // this will be how we decide what to view based on button click

  return (
    <>
      <Header title="Office Space" tag="I'll burn the building down" />
      <Card className="user-profile-card">
        <Card.Img
          style={{
            margin: "20px auto",
            width: "90%",
            borderRadius: "5px",
          }}
          className="image-styles"
          variant="top"
          src="https://media.giphy.com/media/11eVHR0KqaWWRO/giphy.gif"
        />
        <Card.Body>
          <Card.Title>User: {name}</Card.Title>
          <Card.Text>{jobTitle}</Card.Text>
        </Card.Body>
        <ButtonGroup className="button-group" vertical>
          <Button
            style={{ backgroundColor: "rgb(3, 73, 94)" }}
            className="user-button btn-style-that-were-using-to-overwrite-the-btn-class-padding"
            name="task"
          >
            <Link className="user-links" to="/taskscomponents">
              Tasks
            </Link>
          </Button>

          <Button
            style={{ backgroundColor: "rgb(3, 73, 94)" }}
            className="user-button btn-style-that-were-using-to-overwrite-the-btn-class-padding"
            name="leads"
          >
            <Link className="user-links" to="/leadcomponents">
              Leads
            </Link>
          </Button>

          <Button
            style={{ backgroundColor: "rgb(3, 73, 94)" }}
            className="user-button btn-style-that-were-using-to-overwrite-the-btn-class-padding"
            name="calendar"
          >
            <Link className="user-links" to="/calendarcomponents">
              Calendar
            </Link>
          </Button>
        </ButtonGroup>
      </Card>
    </>
  );
}

export default UserProfile;
