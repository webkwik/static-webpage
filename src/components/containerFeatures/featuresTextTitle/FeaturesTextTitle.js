import React, { Component } from "react";
import "./FeaturesTextTitle.css";
import ResultDesign from "./resultDesign/ResultDesign";
import resultIcon from "./100 icon.svg";
import designIcon from "./bag-icon.svg";

class FeaturesTextTitle extends Component {
  render() {
    const resultText = "Ultimate Result";
    const designText = "Minimal Design";
    return (
      <div className="features-text-title">
        <div className="features-title">
          Well thought with super easy to use
        </div>
        <div className="features-text">
          As we approached the palace I could see through the great windows of
          the first floor the brilliantly illuminated audience chamber of Than
          Kosis. The immense hall was crowded with nobles and their women.
        </div>
        <ResultDesign text={resultText} icon={resultIcon} />
        <ResultDesign text={designText} icon={designIcon} />
      </div>
    );
  }
}

export default FeaturesTextTitle;
