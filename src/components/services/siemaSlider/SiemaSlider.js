import React, { Component } from "react";
import "./SiemaSlider.css";
import Siema from "siema";

class SiemaSlider extends Component {
  prev = () => {
    this.siema.prev();
  };

  next = () => {
    this.siema.next();
  };
  render() {
    return (
      <div className="services-slider-nav">
        <div className="siema">
          <div>
            <img
              src="images/placeholder-services-video.png"
              className="services-placeholder"
              alt="services-placeholder"
            />
          </div>
          <div>
            <img
              src="images/placeholder-services-video.png"
              className="services-placeholder"
              alt="services-placeholder"
            />
          </div>
        </div>
        <div className="services-navigation">
          <div className="services-navigation-left" onClick={this.prev}>
            <img
              src="images/Vector_left.svg"
              className="arrow-left"
              alt="arrow-left"
            />
          </div>
          <div className="services-navigation-right" onClick={this.next}>
            <img
              src="images/Vector_right.svg"
              className="arrow-left"
              alt="arrow-left"
            />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.siema = new Siema();
  }
}

export default SiemaSlider;
