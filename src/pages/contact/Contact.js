import React, { Component } from "react";
import "./Contact.css";
import awwwardsLogo from "./awwwards-logo.svg";
import Awwwards from "./awwwards/Awwwards";
import Features from "../../components/containerFeatures/Features";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Features />
        <div className="container-awwwards">
          <div className="divider" />
          <div className="logo-text">
            <img src={awwwardsLogo} className="awwwards-logo" />
            <div className="awwwards-items">
              <Awwwards
                awwwardsTitle="Site of the Day"
                awwwardsDescTitle="Singleton UI Kit"
                awwwardsDescText="Application that helps to find nearest sport centres in your area"
                awwwwardsYear="2018"
              />
              <Awwwards
                awwwardsTitle="Best Navigation"
                awwwardsDescTitle="Midleton Headers"
                awwwardsDescText="Application that helps to find nearest sport centres in your area"
                awwwwardsYear="2019"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
