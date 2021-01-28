import React from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./Style.css";
import { Link } from "react-router-dom";

function UserProfile({ name, jobTitle, userPic }) {
  // this will be how we decide what to view based on button click

  return (
    <Card className="user-profile-card">
      <Card.Img
        style={{
          margin: "20px auto",
          width: "90%",
          borderRadius: "5px",
        }}
        className="image-styles"
        variant="top"
        src="https://i.pinimg.com/564x/98/6d/39/986d39470fae3b16f0ae38b551267367.jpg"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{jobTitle}</Card.Text>
      </Card.Body>
      <ButtonGroup className="button-group" vertical>
        <Button
          style={{ backgroundColor: "rgb(3, 73, 94)" }}
          className="user-button"
          name="task"
        >
          <Link className="user-links" to="/taskscomponents">
            Tasks
          </Link>
        </Button>

        <Button
          style={{ backgroundColor: "rgb(3, 73, 94)" }}
          className="user-button"
          name="leads"
        >
          <Link className="user-links" to="/leadcomponents">
            Leads
          </Link>
        </Button>

        <Button
          style={{ backgroundColor: "rgb(3, 73, 94)" }}
          className="user-button"
          name="calendar"
        >
          <Link className="user-links" to="/calendarcomponents">
            Calendar
          </Link>
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default UserProfile;
