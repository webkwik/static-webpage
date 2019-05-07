import React, { Component } from "react";
import "./OurWorks.css";
import ServicesLogo from "../services/servicesLogo/ServicesLogo";
import WorkSwitcher from "./workSwitcher/WorkSwitcher.js";
import WorksPlaceholders from "./worksPlaceholders/WorksPlaceholders";
import WorksTextButton from "./workSwitcher/worksTextButton/WorksTextButton";

class OurWorks extends Component {
  render() {
    return (
      <div className="container-our-works">
        <ServicesLogo>— our works</ServicesLogo>
        <div className="our-works-title-switchers">
          <div className="our-works-title">Discover our Work</div>
          <div className="our-works-switchers">
            <WorkSwitcher>All</WorkSwitcher>
            <WorkSwitcher>Branding</WorkSwitcher>
            <WorkSwitcher>Web</WorkSwitcher>
            <WorkSwitcher>Development</WorkSwitcher>
            <WorkSwitcher>Films</WorkSwitcher>
          </div>
        </div>
        <WorksPlaceholders />
        <WorksTextButton />
      </div>
    );
  }
}

export default OurWorks;
