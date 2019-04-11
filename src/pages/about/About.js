import React from "react";
import "./About.css";
import ContainerClients from "../../components/containerClients/ContainerClients";
import FooterSocial from "../../components/containerFooter/submenuSocial/footerSocial/FooterSocial";
import SliderTitle from "../../components/containerSlider/sliderItem1/sliderTitleText/sliderTitle/SliderTitle";
import placeholder from "./Placeholder.png";
import WorksPlaceholders from "../../components/containerOurWorks/worksPlaceholders/WorksPlaceholders";
import BlueButton from "../../components/containerSlider/sliderItem1/blueButton/BlueButton";

function About() {
  return (
    <React.Fragment>
      <div className="about-title-social">
        <SliderTitle>Branding Do You Know Who You Are</SliderTitle>
        <FooterSocial forAbout="true" />
      </div>
      <div className="about-img-text">
        <img
          src={placeholder}
          className="placeholder-about-img"
          alt="placeholder"
        />
        <div className="about-text">
          As we approached the palace I could see through the great windows of
          the first floor into the brilliantly illuminated audience chamber of
          Than Kosis. The immense hall was crowded with nobles and their women,
          as though some important function was in progress.
        </div>
      </div>
      <WorksPlaceholders />
      <div className="about-text-button">
        <div className="about-text text">
          As we approached the palace I could see through the great windows of
          the first floor the brilliantly illuminated audience chamber of Than
          Kosis.
        </div>
        <BlueButton changeColor="true" text="explore" />
      </div>
      <ContainerClients />
    </React.Fragment>
  );
}

export default About;
