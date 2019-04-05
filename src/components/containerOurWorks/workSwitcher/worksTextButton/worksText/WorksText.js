import React, { Component } from "react";
import "./WorksText.css";

class WorksText extends Component {
  render() {
    return <div className="our-works-text">{this.props.children}</div>;
  }
}

export default WorksText;
