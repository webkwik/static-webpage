import React, { Component } from "react";
import "./WorksTextButton.css";
import WorksText from "./worksText/WorksText";
import BlueButton from "../../../containerSlider/sliderItem1/blueButton/BlueButton";

class WorksTextButton extends Component {
  render() {
    return (
      <div className="our-works-text-button">
        <WorksText>
          It picks up the words on the page and displays ads that are similar to
          those words. Then when someone either performs an action or clicks on
          your page you will get paid.
        </WorksText>
        <BlueButton text="our works" />
      </div>
    );
  }
}

export default WorksTextButton;
