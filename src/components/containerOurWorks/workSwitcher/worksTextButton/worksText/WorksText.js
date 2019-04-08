import React, { Component } from "react";
import "./WorksText.css";
import classNames from "classnames";

class WorksText extends Component {
  render() {
    const textClass = classNames({
      "our-works-text": true,
      "for-text": this.props.forText
    });
    return <div className={textClass}>{this.props.children}</div>;
  }
}

export default WorksText;
