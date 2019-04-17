import React, { Component } from "react";
import "./WorksPlaceholders.css";
import WorksPlaceholder from "./worksPlaceholder/WorksPlaceholder";

class WorksPlaceholders extends Component {
  render() {
    const listID = [1, 2, 3];
    const listItems = listID.map(item => <WorksPlaceholder id={item} />);
    return <div className="our-works-placeholders">{listItems}</div>;
  }
}

export default WorksPlaceholders;
