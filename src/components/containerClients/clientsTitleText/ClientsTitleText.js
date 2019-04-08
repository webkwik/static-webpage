import React, { Component } from "react";
import "./ClientsTitleText.css";
import ServicesLogo from "../../services/servicesLogo/ServicesLogo";
import WorksText from "../../containerOurWorks/workSwitcher/worksTextButton/worksText/WorksText";

class ClientsTitleText extends Component {
  render() {
    return (
      <div className="clients-title-text">
        <div className="clients-title">Our Clients</div>
        <div className="clients-logo-text">
          <ServicesLogo logoMargin="true">— We worked with</ServicesLogo>
          <WorksText forText="true">
            Our favorite brands are our friends! We help them to achieve their
            goals, they help us to stay sharp.
          </WorksText>
        </div>
      </div>
    );
  }
}

export default ClientsTitleText;
