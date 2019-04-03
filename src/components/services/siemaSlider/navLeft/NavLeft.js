import React, { Component } from "react";
import "./NavLeft.css";
import left from "./Vector_left.svg";

class NavLeft extends Component {
  render() {
    return (
      <div className="services-navigation-left" onClick={this.props.prev}>
        <img src={left} className="arrow-left" alt="arrow-left" />
      </div>
    );
  }
}

export default NavLeft;
