import React, { Component } from "react";
import "./Features.css";
import placeholderFeatures from "./placeholder-features.png";
import FeaturesTextTitle from "./featuresTextTitle/FeaturesTextTitle";

class Features extends Component {
  render() {
    return (
      <div className="container-features">
        <img
          src={placeholderFeatures}
          className="features-placeholder"
          alt="features-placeholder"
        />
        <FeaturesTextTitle />
      </div>
    );
  }
}

export default Features;
