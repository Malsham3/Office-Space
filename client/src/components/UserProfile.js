import React from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function UserProfile({ name, jobTitle, userPic }) {
  return (
    <Card className="user-profile-card" style={{ maxWidth: "400px" }}>
      <Card.Img
        className="user-image"
        variant="top"
        src="https://i.pinimg.com/564x/98/6d/39/986d39470fae3b16f0ae38b551267367.jpg"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{jobTitle}</Card.Text>
      </Card.Body>
      <ButtonGroup vertical>
        <Button className="user-button">Tasks</Button>
        <Button className="user-button">Leads</Button>
        <Button className="user-button">E-Mail</Button>
      </ButtonGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserProfile;
