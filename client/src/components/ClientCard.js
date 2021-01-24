import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Style.css"

function ClientCard() {
  // Below array of clients is just an illustration for dynamically generated profile cards for each client. Use Global state or somethin'.
  let clients = [
    {
      name: "Rick Smart",
      image:
        "https://avatars.githubusercontent.com/u/65750703?s=460&u=2d4de75e593192152a4ef0db17d74cf12151c047&v=4",
      description: "Back-end and Firebase Authentication Master 🔥",
      email: "Rick@Rick.Rick",
      phone: "(123)456-7890",
    },
  ];

  return (
    //   For each client, create a card with their information
    <>
      {clients.map((client) => (
        <Card id = "client-card" style={{ width: "18rem"}}>
          <Card.Img
          id = "client-image"
            variant="top"
            src={client.image}
          />
          <Card.Body>
            <Card.Title>{client.name}</Card.Title>
            <Card.Text>{client.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Email: {" "}
            <Card.Link href={"mailto:" + client.email}>{client.email}</Card.Link>
                </ListGroupItem>
            <ListGroupItem>Phone: {client.phone}</ListGroupItem>
          </ListGroup>
          <Card.Body>

              {/* REMOVE CLIENT FUNCTIONALITY NEEDED HERE */}
            <Card.Link href="#">Remove Client</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ClientCard;
