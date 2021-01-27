import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./Style.css";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function Activity({ dates }) {
  const [globalState, dispatch] = useStoreContext();

  return (
    // dynamically generate task row with a check box / button.
    <>
      {dates.map((date) => (
        <Accordion key={task._id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                style={{ color: "black", fontSize: "20px" }}
                className="task-header"
                id={date._id}
                as={Button}
                variant="link"
                eventKey="0"
              >
                HEADER/TITLE
              </Accordion.Toggle>

              {/* EDIT AND DELETE BUTTONS HERE */}
              <Button id="complete-task" variant="info">
                Edit
              </Button>
              <Button id="delete-task" variant="danger">
                X
              </Button>
            </Card.Header>
            <Accordion.Collapse
              style={{ fontSize: "17px", color: "rgb(3, 73, 94)" }}
              eventKey="0"
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted mb-2">
                  SUBTITLES
                </Card.Subtitle>
                CONTENT
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}

export default Activity;
