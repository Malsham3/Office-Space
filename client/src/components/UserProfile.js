import React from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./Style.css";
import { useStoreContext } from "../utils/GlobalState";

function UserProfile({ name, jobTitle, userPic }) {
  // this will be how we decide what to view based on button click
  // eslint-disable-next-line
  const [state, dispatch] = useStoreContext();

  const handleView = (name) => {
    dispatch({
      type: "CHANGE_VIEW",
      payload: name,
    });
  };

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
      <ButtonGroup vertical>
        <Button
          className="user-button"
          name="task"
          onClick={(e) => {
            handleView(e.target.name);
          }}
        >
          Tasks
        </Button>
        <Button
          className="user-button"
          name="leads"
          onClick={(e) => {
            handleView(e.target.name);
          }}
        >
          Leads
        </Button>
        <Button
          className="user-button"
          name="email"
          onClick={(e) => {
            handleView(e.target.name);
          }}
        >
          E-Mail
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default UserProfile;
