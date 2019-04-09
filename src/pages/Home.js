import React from "react";
import Services from "../components/services/Services";
import ContainerSlider from "../components/containerSlider/ContainerSlider";
import ContainerAbout from "../components/containerAbout/ContainerAbout";
import Features from "../components/containerFeatures/Features";
import OurWorks from "../components/containerOurWorks/OurWorks";
import ContainerTestimonials from "../components/conatainerTestimonials/ContainerTestimonials";
import ContainerClients from "../components/containerClients/ContainerClients";

function Home() {
  return (
    <React.Fragment>
      <ContainerSlider />
      <ContainerAbout />
      <Services />
      <Features />
      <OurWorks />
      <ContainerTestimonials />
      <ContainerClients />
    </React.Fragment>
  );
}

export default Home;
