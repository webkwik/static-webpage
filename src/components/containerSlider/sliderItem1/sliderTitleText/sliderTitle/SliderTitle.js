import React, { Component } from "react";
import "./SliderTitle.css";

class SliderTitle extends Component {
  render() {
    return <div className="slider-title">{this.props.children}</div>;
  }
}

export default SliderTitle;
