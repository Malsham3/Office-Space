import React, { useEffect } from "react";
import { Image, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./Style.css";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import EditLead from "./EditLead";

function ClientCard({ client }) {
  const [globalState, dispatch] = useStoreContext();
  // Below array of clients is just an illustration for dynamically generated profile cards for each client. Use Global state or somethin'.s

  useEffect(() => {
    API.getLeads()
      .then(({ data }) =>
        dispatch({
          type: "LOAD_LEADS",
          payload: data,
        })
      )
      .catch((err) => console.log(err));
  }, []);

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
      <div className="row">
        <ul className="col-10" style={{ maxHeight: "50%", listStyle: "none" }}>
          <li>
            Full name: {client.first} {client.last}
          </li>
          <br />
          <li>
            Email: <a href={"mailto:" + client.email}>{client.email}</a>
          </li>
          <br />
          <li>Phone Number: {client.phone}</li>
        </ul>

        <div className="col-2" style={{ maxHeight: "50%" }}>
          <Image
            className="profile-pic"
            src={client.image ? client.image : null}
            thumbnail
          />
        </div>
      </div>
      <Button
      variant="light"
        onClick={() => {
          handleRemoveClient(client._id);
        }}
        style={{ color: "red", fontFamily: "Courier" }}
      >
        Remove Client
      </Button>{" "}
      {" | "} <EditLead client={client} />
    </>
  );
}

export default ClientCard;
