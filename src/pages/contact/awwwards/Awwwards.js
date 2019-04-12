import React, { Component } from "react";
import "./Awwwards.css";

class Awwwards extends Component {
  render() {
    return (
      <div className="awwwards">
        <div className="title-desc-year">
          <div className="awwwards-title">{this.props.awwwardsTitle}</div>
          <div className="awwwards-desc">
            <div className="awwwards-desc-title">
              {this.props.awwwardsDescTitle}
            </div>
            <div className="awwwards-desc-text">
              {this.props.awwwardsDescText}
            </div>
          </div>
          <div className="awwwwards-year">{this.props.awwwwardsYear}</div>
        </div>
      </div>
    );
  }
}

export default Awwwards;
