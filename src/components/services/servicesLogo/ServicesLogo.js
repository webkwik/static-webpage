import React, { Component } from "react";
import "./ServicesLogo.css";

class ServicesLogo extends Component {
  render() {
    return <div className="services-logo">{this.props.children}</div>;
  }
}

export default ServicesLogo;
