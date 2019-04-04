import React, { Component } from "react";
import "./Services.css";
import ServicesLogo from "./servicesLogo/ServicesLogo";
import ServicesTextMenu from "./servicesTextMenu/ServicesTextMenu";
import SiemaSlider from "./siemaSlider/SiemaSlider";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <ServicesLogo> — Services</ServicesLogo>
        <ServicesTextMenu />
        <SiemaSlider />
      </React.Fragment>
    );
  }
}

export default Services;
