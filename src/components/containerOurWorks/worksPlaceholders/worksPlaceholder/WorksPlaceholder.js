import React, { Component } from "react";
import "./WorksPlaceholder.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class WorksPlaceholder extends Component {
  render() {
    return (
      <Link to={this.props.id}>
        <img
          src={this.props.img}
          className="our-works-placeholder"
          alt="our-works-placeholder"
          title={this.props.name}
        />
      </Link>
    );
  }
}

export default WorksPlaceholder;
