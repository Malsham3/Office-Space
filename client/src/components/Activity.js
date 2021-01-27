import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./Style.css";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function Activity({ dates }) {
  const [globalState, dispatch] = useStoreContext();

  return (
    // dynamically generate date row with a check box / button.
    <>
      {dates.map((date) => (
        <Accordion key={date._id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                style={{ color: "black", fontSize: "20px" }}
                className="date-header"
                id={date._id}
                as={Button}
                variant="link"
                eventKey="0"
              >
                {date.title}
              </Accordion.Toggle>

              {/* EDIT AND DELETE BUTTONS HERE */}
              <Button id="complete-date" variant="info">
                Edit
              </Button>
              <Button id="delete-date" variant="danger">
                X
              </Button>
            </Card.Header>
            <Accordion.Collapse
              style={{ fontSize: "17px", color: "rgb(36, 35, 35)" }}
              eventKey="0"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted mb-2">
                  Date Created: {date.dateCreated}
                </Card.Subtitle>
                {date.activity}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}

export default Activity;
