import React, { Component } from "react";
import "./ServicesTextMenu.css";
import ServicesText from "./servicesText/ServicesText";
import ServicesMenu from "./servicesMenu/ServicesMenu";

class ServicesTextMenu extends Component {
  render() {
    return (
      <div className="services-text-menu">
        <ServicesText />
        <ServicesMenu />
      </div>
    );
  }
}

export default ServicesTextMenu;
