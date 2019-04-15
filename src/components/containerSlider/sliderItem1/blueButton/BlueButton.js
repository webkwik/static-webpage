import React, { Component } from "react";
import "./BlueButton.css";
import classNames from "classnames";

class BlueButton extends Component {
  render() {
    const buttonClass = classNames({
      "blue-button": true,
      "change-color": this.props.changeColor
    });
    return (
      <div className={buttonClass}>
        <div className="text-button">{this.props.text}</div>
      </div>
    );
  }
}

export default BlueButton;
