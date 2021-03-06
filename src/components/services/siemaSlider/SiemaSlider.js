import React, { Component } from "react";
import "./SiemaSlider.css";
import Siema from "siema";
import placeholderVideo from "./placeholder-services-video.png";
import NavLeft from "./navLeft/NavLeft";
import NavRight from "./navRight/NavRight";

class SiemaSlider extends Component {
  prev = () => {
    console.log("prev");
    this.siema.prev();
  };

  next = () => {
    console.log("next");
    this.siema.next();
  };

  render() {
    return (
      <div className="services-slider-nav">
        <div className="siema">
          <div>
            <img
              src={placeholderVideo}
              className="services-placeholder"
              alt="services-placeholder"
            />
          </div>
          <div>
            <img
              src={placeholderVideo}
              className="services-placeholder"
              alt="services-placeholder"
            />
          </div>
        </div>
        <div className="services-navigation">
          <NavLeft onClicked={this.prev} />
          <NavRight onClicked={this.next} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.siema = new Siema();
  }
}

export default SiemaSlider;
