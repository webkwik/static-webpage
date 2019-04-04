import React, { Component } from "react";
import "./NavRight.css";
import right from "./Vector_right.svg";

class NavRight extends Component {
  render() {
    return (
      <div className="services-navigation-right" onClick={this.props.onClicked}>
        <img src={right} className="arrow-left" alt="arrow-left" />
      </div>
    );
  }
}

export default NavRight;
