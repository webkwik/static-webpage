import React, { Component } from "react";
import "./WorkSwitcher.css";

class WorkSwitcher extends Component {
  render() {
    return <div className="our-works-switcher">{this.props.children}</div>;
  }
}

export default WorkSwitcher;
