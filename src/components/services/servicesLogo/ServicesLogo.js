import React, { Component } from "react";
import "./ServicesLogo.css";
import classNames from "classnames";

class ServicesLogo extends Component {
  render() {
    const logoClass = classNames({
      "services-logo": true,
      "for-services-logo": this.props.logoMargin
    });
    return <div className={logoClass}>{this.props.children}</div>;
  }
}

export default ServicesLogo;
