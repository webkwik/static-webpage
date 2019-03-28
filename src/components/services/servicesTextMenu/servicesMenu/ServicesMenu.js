import React, { Component } from "react";
import "./ServicesMenu.css";
import ServicesMenuItems from "./servicesMenuItems/ServicesMenuItems";

class ServicesMenu extends Component {
  render() {
    return (
      <div className="services-menu">
        <ServicesMenuItems />
      </div>
    );
  }
}

export default ServicesMenu;
