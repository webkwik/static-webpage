import React, { Component } from "react";
import "./WorksPlaceholder.css";

class WorksPlaceholder extends Component {
  render() {
    return (
      <img
        src={this.props.img}
        className="our-works-placeholder"
        alt="our-works-placeholder"
        title="vasa scas"
      />
    );
  }
}

export default WorksPlaceholder;
