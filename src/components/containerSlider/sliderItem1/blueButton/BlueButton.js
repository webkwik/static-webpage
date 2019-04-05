import React, { Component } from "react";
import "./BlueButton.css";

class BlueButton extends Component {
  render() {
    return (
      <div className="blue-button">
        <div className="text-button">{this.props.text}</div>
      </div>
    );
  }
}

export default BlueButton;
