import React, { Component } from "react";
import "./SliderTitleText.css";
import SliderTitle from "./sliderTitle/SliderTitle";

class SliderTitleText extends Component {
  render() {
    return (
      <div className="slider-title-text">
        <SliderTitle>Work around you and your team</SliderTitle>
        <div className="slider-text">
          From ads that dance or sing to MTV-like commercials, online
          advertisers are now using a new type of technology “rich media” to
          attract consumers.
        </div>
      </div>
    );
  }
}

export default SliderTitleText;
