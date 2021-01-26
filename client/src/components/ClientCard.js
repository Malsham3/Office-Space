import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import "./Style.css";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";

function ClientCard({ clients }) {
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
        <div className="row">
          <ul className="col-8">
            <li>Email: {client.email}</li>
            <li>Phone Number: {client.phone}</li>
          </ul>

          <div className="col-2">
            <Image style = {{}}>
              
            </Image>
          </div>
        </div>
      ))}
    </>
  );
}

export default ClientCard;
