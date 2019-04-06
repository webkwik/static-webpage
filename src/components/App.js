import React from "react";
import "./App.css";
import Header from "./header/Header";
import Services from "./services/Services";
import ContainerSlider from "./containerSlider/ContainerSlider";
import ContainerAbout from "./containerAbout/ContainerAbout";
import Features from "./containerFeatures/Features";
import OurWorks from "./containerOurWorks/OurWorks";
import ContainerTestimonials from "./conatainerTestimonials/ContainerTestimonials";

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
        <div className="container-clients">
          <div className="clients-title-text">
            <div className="clients-title">Our Clients</div>
            <div className="clients-logo-text">
              <div className="clients-logo">— We worked with</div>
              <div className="clients-text">
                Our favorite brands are our friends! We help them to achieve
                their goals, they help us to stay sharp.
              </div>
            </div>
          </div>
          <div className="clients-brands">
            <img
              src="images/xiaomi.svg"
              className="clients-brand"
              alt="clients-brand"
            />
            <img
              src="images/tinder.svg"
              className="clients-brand"
              alt="clients-brand"
            />
            <img
              src="images/apple.svg"
              className="clients-brand"
              alt="clients-brand"
            />
            <img
              src="images/nike.svg"
              className="clients-brand"
              alt="clients-brand"
            />
            <img
              src="images/amd.svg"
              className="clients-brand"
              alt="clients-brand"
            />
          </div>
        </div>
      </div>
      <footer>
        <div className="container-footer">
          <div className="footer-logo-menu-form">
            <div className="footer-logo">Gravity</div>
            <div className="footer-menu">
              <a href="#" className="footer-menu-href">
                Travel
              </a>
              <a href="#" className="footer-menu-href">
                Works
              </a>
              <a href="#" className="footer-menu-href">
                About Us
              </a>
              <a href="#" className="footer-menu-href">
                Contacts
              </a>
            </div>
            <form className="footer-forms">
              <input
                className="footer-input"
                type="email"
                placeholder="Email"
              />
              <button className="footer-button" type="button">
                SENT
              </button>
            </form>
          </div>
          <div className="footer-divider" />
          <div className="footer-submenu-social">
            <div className="footer-submenu">
              <a href="#" className="footer-submenu-href">
                Terms
              </a>
              <a href="#" className="footer-submenu-href">
                Promo
              </a>
              <a href="#" className="footer-submenu-href">
                Download
              </a>
              <a href="#" className="footer-submenu-href">
                News
              </a>
            </div>
            <div className="footer-social">
              <img src="images/twitter.svg" alt="twitter-icon" />
              <img src="images/linkedin.svg" alt="linkedin-icon" />
              <img src="images/google.svg" alt="google-icon" />
              <img src="images/facebook.svg" alt="facebook-icon" />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
