import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Style.css";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
function ClientCard({clients}) {
  const [globalState, dispatch] = useStoreContext();
  // Below array of clients is just an illustration for dynamically generated profile cards for each client. Use Global state or somethin'.s

  // useEffect(() => {
  //   API.getLeads()
  //     .then(({ data }) =>
  //       dispatch({
  //         type: "LOAD_LEADS",
  //         payload: data,
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // }, []);

  function handleRemoveClient(id) {
    API.deleteLead(id).then(({ data }) =>
      dispatch({
        type: "REMOVE_LEAD",
        payload: data,
      })
    );
  }

  return (
    //   For each client, create a card with their information
    <>
      {clients.map((client) => (
        <Card
          key={client._id}
          id={client._id}
          style={{ width: "18rem" }}
          className="ml-2 client-cards"
        >
          <Card.Img 
          id="client-image" 
          variant="top" 
          src={client.image} 
          stye={{height: "150px"}}
          />
          <Card.Body>
            <Card.Title>{client.name}</Card.Title>
            <Card.Text>{client.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Email:{" "}
              <Card.Link href={"mailto:" + client.email}>
                {client.email}
              </Card.Link>
            </ListGroupItem>
            <ListGroupItem>Phone: {client.phone}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            {/* REMOVE CLIENT FUNCTIONALITY NEEDED HERE */}
            <Card.Link
              style={{ color: "red" }}
              href="#"
              onClick={() => {
                handleRemoveClient(client._id);
              }}
            >
              Remove Client
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ClientCard;
