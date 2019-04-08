import React from "react";
import "./App.css";
import Header from "./header/Header";
import Services from "./services/Services";
import ContainerSlider from "./containerSlider/ContainerSlider";
import ContainerAbout from "./containerAbout/ContainerAbout";
import Features from "./containerFeatures/Features";
import OurWorks from "./containerOurWorks/OurWorks";
import ContainerTestimonials from "./conatainerTestimonials/ContainerTestimonials";
import ContainerClients from "./containerClients/ContainerClients";
import ContainerFooter from "./containerFooter/ContainerFooter";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <ContainerSlider />
        <ContainerAbout />
        <Services />
        <Features />
        <OurWorks />
        <ContainerTestimonials />
        <ContainerClients />
      </div>
      <footer>
        <ContainerFooter />
      </footer>
    </React.Fragment>
  );
}

export default App;
