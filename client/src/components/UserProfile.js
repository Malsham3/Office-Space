import React from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function UserProfile({ name, jobTitle, userPic }) {
  return (
    <Card
      style={{
        width: "33vw",
        height: "100vh",
        border: "3px solid grey",
        marginLeft: "15px",
      }}
    >
      <Card.Img
        variant="top"
        src="https://avatars.githubusercontent.com/u/72281065?s=460&u=09e78bf1d0aa1708deb3a7d9f5cab7a5ed5b012d&v=4"
        style={{
          margin: "auto",
          marginTop: "30px",
          border: "10px solid grey",
          borderRadius: "50%",
          width: "90%",
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{jobTitle}</Card.Text>
      </Card.Body>
      <ButtonGroup vertical>
        <Button style={{
            height: "5rem"
        }}>Tasks</Button>
        <Button style={{
            height: "5rem"
        }}>Leads</Button>
        <Button style={{
            height: "5rem"
        }}>E-Mail</Button>
      </ButtonGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserProfile;
