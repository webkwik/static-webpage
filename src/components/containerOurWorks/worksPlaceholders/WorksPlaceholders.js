import React, { Component } from "react";
import "./WorksPlaceholders.css";
import WorksPlaceholder from "./worksPlaceholder/WorksPlaceholder";

class WorksPlaceholders extends Component {
  render() {
    return (
      <div className="our-works-placeholders">
        <WorksPlaceholder />
        <WorksPlaceholder />
        <WorksPlaceholder />
      </div>
    );
  }
}

export default WorksPlaceholders;
