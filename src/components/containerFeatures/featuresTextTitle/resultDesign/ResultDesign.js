import React, { Component } from "react";
import "./ResultDesign.css";

class ResultDesign extends Component {
  render() {
    return (
      <div className="result-design">
        <img src={this.props.icon} alt="icon" />
        <div className="result-design-text">{this.props.text}</div>
      </div>
    );
  }
}

export default ResultDesign;
