import { Accordion, Card, Button } from "react-bootstrap";
import "./Style.css";
import React from "react";
import ClientCard from "./ClientCard";

function Client({ clients }) {
  return (
    // dynamically generate client row with a check box / button.
    <>
      {clients.map((client) => (
        <Accordion key={client._id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                style={{ color: "black", fontSize: "20px" }}
                className="client-header"
                id={client._id}
                as={Button}
                variant="link"
                eventKey="0"
              >
                {client.first} {client.last}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              style={{ fontSize: "17px", color: " rgb(3, 73, 94)" }}
              eventKey="0"
            >
              <Card.Body>
                <ClientCard client={client} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}

export default Client;
