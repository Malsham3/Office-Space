import { Accordion, Card, Button } from "react-bootstrap";
import "./Style.css";
import React from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import ClientCard from "./ClientCard"

function Client({clients}) {
  const [globalState, dispatch] = useStoreContext();

  function handleRemoveClient(id) {
    API.deleteLead(id).then(({ data }) =>
      dispatch({
        type: "REMOVE_LEAD",
        payload: data,
      })
    );
  }


  return (
    // dynamically generate client row with a check box / button.
    <>
      {clients.map((client) => (
        <Accordion key={client._id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                style = {{"color": "black",
              "fontSize": "20px"}}
                className="client-header"
                id={client._id}
                as={Button}
                variant="link"
                eventKey="0"
              >
                {client.first} {client.last}
              </Accordion.Toggle>
              {/* <Button id="delete-client" variant="danger" onClick={()=> {handleRemoveClient(client._id)} }>X</Button> */}
            </Card.Header>
            <Accordion.Collapse style={{"fontSize": "17px", "color": "rgb(36, 35, 35)"}} eventKey="0">
              <Card.Body>
                  <ClientCard client = {client} />
                </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}

export default Client;
