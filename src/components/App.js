import React from "react";
import "./App.css";
import Header from "./header/Header";
import Services from "./services/Services";
import SiemaSlider from "./services/siemaSlider/SiemaSlider";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <div className="container-slider">
          <div className="container-slider-item1">
            <div className="slider-title-text">
              <div className="slider-title">Work around you and your team</div>
              <div className="slider-text">
                From ads that dance or sing to MTV-like commercials, online
                advertisers are now using a new type of technology “rich media”
                to attract consumers.
              </div>
            </div>
            <div className="blue-button">
              <div className="text-button">get started</div>
            </div>
            <div className="loader">
              <div className="loader-text">01</div>
              <div className="loader-bg">
                <div className="loader-active" />
              </div>
              <div className="loader-text">03</div>
            </div>
          </div>
          <div className="container-slider-item2">
            <img
              src="images/placeholder.png"
              className="placeholder"
              alt="placeholder"
            />
          </div>
          <div className="video" id="video">
            <div className="button-play" id="button-play" onClick={play}>
              <img src="images/Polygon.svg" className="play" alt="play" />
            </div>
          </div>
          <div className="video-youtube" id="video-youtube">
            <iframe
              width="400"
              height="310"
              src="https://www.youtube.com/embed/h2Jdj4iLIUU?&enablejsapi=1&autoplay=0"
              allow="autoplay"
              frameborder="0"
              className="iframe-video"
              title="youtube"
            />
            <div className="exit-video" id="exit-video" onClick={stop}>
              X
            </div>
          </div>
        </div>
        <div className="container-about">
          <img
            src="images/placeholder-about.png"
            className="placeholder-about"
            alt="placeholder-about"
          />
          <div className="about-title-text">
            <div className="about-title">
              We solve digital problems with an outstanding creative flare
            </div>
            <div className="about-text">
              The best time to view the moon, obviously, is at night when there
              are few clouds and the weather is accommodating for a long and
              lasting study.
            </div>
            <div className="about-text margin-for-about">
              For most of us, the idea of astronomy is something we directly
              connect to “stargazing”, telescopes and seeing magnificent
              displays in the heavens.
            </div>
            <div className="about-user">
              <img
                src="images/about-user.png"
                className="about-user-img"
                alt="about-user-img"
              />
              <div className="about-name-position">
                <div className="about-name">Denis Shepovalov</div>
                <div className="about-position">Co-Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <SiemaSlider />
        <div className="container-features">
          <img
            src="images/placeholder-features.png"
            className="features-placeholder"
            alt="features-placeholder"
          />
          <div className="features-text-title">
            <div className="features-title">
              Well thought with super easy to use
            </div>
            <div className="features-text">
              As we approached the palace I could see through the great windows
              of the first floor the brilliantly illuminated audience chamber of
              Than Kosis. The immense hall was crowded with nobles and their
              women.
            </div>
            <div className="ultimate-result">
              <img src="images/100 icon.svg" alt="100-icon" />
              <div className="ultimate-result-text">Ultimate Result</div>
            </div>
            <div className="minimal-design">
              <img src="images/Bag icon.svg" alt="bag-icon" />
              <div className="minimal-design-text">Minimal Design</div>
            </div>
          </div>
        </div>
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

function displayVideoYoutube() {
  var video = document.getElementById("video");
  var videoYoutube = document.getElementById("video-youtube");
  videoYoutube.classList.add("for-video-youtube");
  video.classList.add("for-video");
}

function removeElementVideo() {
  var video = document.getElementById("video");
  var videoYoutube = document.getElementById("video-youtube");
  videoYoutube.classList.remove("for-video-youtube");
  video.classList.remove("for-video");
}

function stopVideo() {
  var frameVideo = document.getElementsByClassName("iframe-video");
  frameVideo
    .item(0)
    .contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
}

function playVideo() {
  var frameVideo = document.getElementsByClassName("iframe-video");
  frameVideo
    .item(0)
    .contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
}

function play() {
  playVideo();
  displayVideoYoutube();
}

function stop() {
  stopVideo();
  removeElementVideo();
}

export default App;
