import React, { Component } from "react";
import "./ContainerFooter.css";
import LogoMenuForm from "./logoMenuForm/LogoMenuForm";
import SubmenuSocial from "./submenuSocial/SubmenuSocial";

class ContainerFooter extends Component {
  render() {
    return (
      <div className="container-footer">
        <LogoMenuForm />
        <div className="footer-divider" />
        <SubmenuSocial />
      </div>
    );
  }
}

export default ContainerFooter;
