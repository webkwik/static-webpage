import React, { Component } from "react";
import "./ContainerClients.css";
import ClientsTitleText from "./clientsTitleText/ClientsTitleText";
import ClientsBrand from "./clientsBrand/ClientsBrand";

class ContainerClients extends Component {
  render() {
    return (
      <div className="container-clients">
        <ClientsTitleText />
        <ClientsBrand />
      </div>
    );
  }
}

export default ContainerClients;
