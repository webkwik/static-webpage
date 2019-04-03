import React from "react";
import "./App.css";
import Header from "./header/Header";
import Services from "./services/Services";
import ContainerSlider from "./containerSlider/ContainerSlider";
import ContainerAbout from "./containerAbout/ContainerAbout";
import Features from "./containerFeatures/Features";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <ContainerSlider />
        <ContainerAbout />
        <Services />
        <Features />
        <div className="container-our-works">
          <div className="our-works-logo">— our works</div>
          <div className="our-works-title-switchers">
            <div className="our-works-title">Discover our Work</div>
            <div className="our-works-switchers">
              <div className="our-works-switcher">All</div>
              <div className="our-works-switcher">Branding</div>
              <div className="our-works-switcher">Web</div>
              <div className="our-works-switcher">Development</div>
              <div className="our-works-switcher">Films</div>
            </div>
          </div>
          <div className="our-works-placeholders-1">
            <img
              src="images/placeholder-our-works.png"
              className="our-works-placeholder"
              alt="our-works-placeholder"
            />
            <img
              src="images/placeholder-our-works.png"
              className="our-works-placeholder"
              alt="our-works-placeholder"
            />
            <img
              src="images/placeholder-our-works.png"
              className="our-works-placeholder"
              alt="our-works-placeholder"
            />
          </div>
          <div className="our-works-placeholders-2">
            <img
              src="images/placeholder-our-works.png"
              className="our-works-placeholder"
              alt="our-works-placeholder"
            />
            <img
              src="images/placeholder-our-works.png"
              className="our-works-placeholder"
              alt="our-works-placeholder"
            />
            <img
              src="images/placeholder-our-works.png"
              className="our-works-placeholder"
              alt="our-works-placeholder"
            />
          </div>
          <div className="our-works-text-button">
            <div className="our-works-text">
              It picks up the words on the page and displays ads that are
              similar to those words. Then when someone either performs an
              action or clicks on your page you will get paid.
            </div>
            <div className="our-works-button">
              <div className="text-button">our works</div>
            </div>
          </div>
        </div>
        <div className="container-testimonials">
          <div className="testimonials-logo-text-nav">
            <div className="testimonials-logo">— Testimonials</div>
            <div className="testimonials-text">
              "Professionals in their craft! All products were super great with
              strong attention to details, and overall vibe"
            </div>
            <div className="testimonials-name-position">
              <div className="testimonials-name">Polina Kuzina</div>
              <div className="testimonials-position">Manager at Craftwork</div>
            </div>
            <div className="testimonials-navigation">
              <div className="testimonials-navigation-left">
                <img
                  src="images/Vector_left.svg"
                  className="arrow-left"
                  alt="arrow-left"
                />
              </div>
              <div className="testimonials-navigation-right">
                <img
                  src="images/Vector_right.svg"
                  className="arrow-left"
                  alt="arrow-left"
                />
              </div>
            </div>
          </div>
          <img
            src="images/placeholder-testimonial.png"
            className="testimonial-placeholder"
            alt="testimonial-placeholder"
          />
        </div>
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
