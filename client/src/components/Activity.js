import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style.css";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import Moment from "react-moment";
import EditActivity from "./EditActivity";

function Activity({ dates }) {
  const [globalState, dispatch] = useStoreContext();

  function handleRemoveDate(id) {
    API.deleteDate(id).then(({ data }) =>
      dispatch({
        type: "REMOVE_DATE",
        payload: data,
      })
    );
  }

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
            </Card.Header>
            <Accordion.Collapse
              style={{ fontSize: "17px", color: "rgb(3, 73, 94)" }}
              eventKey="0"
            >
              <Card.Body>
                <Card.Subtitle className="text-muted mb-4">
                  Date Created:{" "}
                  <Moment format="ddd MM/DD/YY">{date.dateCreated}</Moment> at{" "}
                  <Moment format="hh:mm a">{date.dateCreated}</Moment>
                </Card.Subtitle>
                <Card.Text>{date.activity}</Card.Text>
<<<<<<< HEAD
                <Link
=======
                <Link value="stuff"
>>>>>>> 1aa365e4e8679dc1295f3117ee10079e836ec141
                  onClick={() => {
                    handleRemoveDate(date._id);
                  }}
                  style={{ color: "red" }}
                >
                  Delete
                </Link>{" "}
                {" | "} <EditActivity date={date} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}

export default Activity;
