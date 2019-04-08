import React, { Component } from "react";
import "./WorksPlaceholder.css";
import placeholderWork from "./placeholder-our-works.png";

class WorksPlaceholder extends Component {
  render() {
    return (
      <img
        src={placeholderWork}
        className="our-works-placeholder"
        alt="our-works-placeholder"
      />
    );
  }
}

export default WorksPlaceholder;
