import React, { Component } from "react";
import "./MenuItem.css";

class MenuItem extends Component {
  render() {
    return <li className="menu-item">{this.props.children}</li>;
  }
}

export default MenuItem;
