import React, { Component } from "react";
import "../MainDashboard.css";
import MainSideClients from "../Clients/MainSideClients/MainSideClients";

class Clients extends Component {
  render() {
    return (
      <div className="Clients">
        <MainSideClients />
      </div>
    );
  }
}

export default Clients;
