import React from 'react';
import './App.css';

function App() {
    return (
        <body>      
        <div class="container">
          <header>
            <div class="container-header">
              <div class="logo" id="logo">Gravity</div>
              <div class="icon-input">
                <form id="form" class="search-form"> 
                  <input class="search-input"  type="search" placeholder="search" />
                  <button class="button" type="button" id="button" onClick={removeElementSearch}>Close</button>
                </form>
                <img src="images/Search.svg" class="search-icon" id="search" alt="search-icon" onClick={displayElementSearch} />
              </div>
              <div class="menu" id="menu-toggle"><img src="images/MenuIcon.svg" alt="menu-icon" onClick={addClass} /></div>
        </div>
      
          </header>
          <div class="container-slider">
            <div class="container-slider-item1">
              <div class="slider-title-text">
                <div class="slider-title">Work around you and your team</div>
                <div class="slider-text">From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers.</div>
              </div>
              <div class="blue-button">
                <div class="text-button">get started</div>
              </div>
              <div class="loader">
                  <div class="loader-text">01</div>
                  <div class="loader-bg">
                    <div class="loader-active"></div>
                  </div>
                  <div class="loader-text">03</div>
              </div>
              </div>
              <div class="container-slider-item2"><img src="images/placeholder.png" class="placeholder" alt="placeholder" /></div>
              <div class="video" id="video">
                <div class="button-play" id="button-play" onClick={displayVideoYoutube}>
                  <img src="images/Polygon.svg" class="play" alt="play" />
                </div>
              </div>
              <div class="video-youtube" id="video-youtube">
                  <iframe width="400" height="310" src="https://www.youtube.com/embed/h2Jdj4iLIUU?&enablejsapi=1" frameborder="0" class="iframe-video" title="youtube"></iframe>
                  <div class="exit-video" id="exit-video" onClick={removeElementVideo}>X</div>
              </div>
          </div>
          <div class="container-about">
            <img src="images/placeholder-about.png" class="placeholder-about" alt="placeholder-about" />
            <div class="about-title-text">
              <div class="about-title">We solve digital problems with an outstanding creative flare</div>
              <div class="about-text">The best time to view the moon, obviously, is at night when there are few clouds and the weather is accommodating for a long and lasting study.</div>
              <div class="about-text margin-for-about">For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.</div>
              <div class="about-user">
                <img src="images/about-user.png" class="about-user-img" alt="about-user-img" />
                <div class="about-name-position">
                  <div class="about-name">Denis Shepovalov</div>
                  <div class="about-position">Co-Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div class="services-logo">— Services</div>
          <div class="services-text-menu">
            <div class="services-text">We love work hard and explore new things that’s why we cover lot of things. Check our service list and view details</div>
            <div class="services-menu">
              <ul class="services-menu-items">
                <li class="menu-item">Multimedia</li>
                <li class="menu-item">Interactive design</li>
                <li class="menu-item">Packaging</li>
                <li class="menu-item">Branding</li>
              </ul>
              <ul class="services-menu-items">
                  <li class="menu-item">Creative Strategy</li>
                  <li class="menu-item">UI/UX</li>
                  <li class="menu-item">Coding</li>
              </ul>
            </div>
          </div>
          <div class="services-slider-nav">
            <div class="siema">
              <div><img src="images/placeholder-services-video.png" class="services-placeholder" alt="services-placeholder" /></div>
              <div><img src="images/placeholder-services-video.png" class="services-placeholder" alt="services-placeholder" /></div>
            </div>
            <div class="services-navigation">
                <div class="services-navigation-left"><img src="images/Vector_left.svg" class="arrow-left" alt="arrow-left" /></div>
                <div class="services-navigation-right"><img src="images/Vector_right.svg" class="arrow-left" alt="arrow-left" /></div>
              </div>
          </div>
          <div class="container-features">
            <img src="images/placeholder-features.png" class="features-placeholder" alt="features-placeholder" />
            <div class="features-text-title">
              <div class="features-title">Well thought with super easy to use</div>
              <div class="features-text">As we approached the palace I could see through the great windows of the first floor the brilliantly illuminated audience chamber of Than Kosis. The immense hall was crowded with nobles and their women.</div>
              <div class="ultimate-result">
                <img src="images/100 icon.svg" alt="100-icon" />
                <div class="ultimate-result-text">Ultimate Result</div>
              </div>
              <div class="minimal-design">
                  <img src="images/Bag icon.svg" alt="bag-icon" />
                  <div class="minimal-design-text">Minimal Design</div>
              </div>
            </div>
          </div>
          <div class="container-our-works">
            <div class="our-works-logo">— our works</div>
            <div class="our-works-title-switchers">
              <div class="our-works-title">Discover our Work</div>
              <div class="our-works-switchers">
                <div class="our-works-switcher">All</div>
                <div class="our-works-switcher">Branding</div>
                <div class="our-works-switcher">Web</div>
                <div class="our-works-switcher">Development</div>
                <div class="our-works-switcher">Films</div>
              </div>
            </div>
            <div class="our-works-placeholders-1">
              <img src="images/placeholder-our-works.png" class="our-works-placeholder" alt="our-works-placeholder" />
              <img src="images/placeholder-our-works.png" class="our-works-placeholder" alt="our-works-placeholder" />
              <img src="images/placeholder-our-works.png" class="our-works-placeholder" alt="our-works-placeholder" />
            </div>
            <div class="our-works-placeholders-2">
                <img src="images/placeholder-our-works.png" class="our-works-placeholder" alt="our-works-placeholder" />
                <img src="images/placeholder-our-works.png" class="our-works-placeholder" alt="our-works-placeholder" />
                <img src="images/placeholder-our-works.png" class="our-works-placeholder" alt="our-works-placeholder" />
            </div>
            <div class="our-works-text-button">
              <div class="our-works-text">It picks up the words on the page and displays ads that are similar to those words. Then when someone either performs an action or clicks on your page you will get paid.</div>
              <div class="our-works-button">
                  <div class="text-button">our works</div>
                </div>
            </div>
          </div>
          <div class="container-testimonials">
            <div class="testimonials-logo-text-nav">
              <div class="testimonials-logo">— Testimonials</div>
              <div class="testimonials-text">"Professionals in their craft! All products were super great with strong attention to details, and overall vibe"</div>
              <div class="testimonials-name-position">
                  <div class="testimonials-name">Polina Kuzina</div>
                  <div class="testimonials-position">Manager at Craftwork</div>
              </div>
              <div class="testimonials-navigation">
                  <div class="testimonials-navigation-left"><img src="images/Vector_left.svg" class="arrow-left" alt="arrow-left" /></div>
                  <div class="testimonials-navigation-right"><img src="images/Vector_right.svg" class="arrow-left" alt="arrow-left" /></div>
              </div>
            </div>
            <img src="images/placeholder-testimonial.png" class="testimonial-placeholder" alt="testimonial-placeholder" />
          </div>
          <div class="container-clients">
            <div class="clients-title-text">
              <div class="clients-title">Our Clients</div>
              <div class="clients-logo-text">
                <div class="clients-logo">— We worked with</div>
                <div class="clients-text">Our favorite brands are our friends! We help them to achieve their goals, they help us to stay sharp.</div>
              </div>
            </div>
            <div class="clients-brands">
              <img src="images/xiaomi.svg" class="clients-brand" alt="clients-brand" />
              <img src="images/tinder.svg" class="clients-brand" alt="clients-brand" />
              <img src="images/apple.svg" class="clients-brand" alt="clients-brand" />
              <img src="images/nike.svg" class="clients-brand" alt="clients-brand" />
              <img src="images/amd.svg" class="clients-brand" alt="clients-brand" />
            </div>
          </div>
          </div>
          <footer>
            <div class="container-footer">
            <div class="footer-logo-menu-form">
              <div class="footer-logo">Gravity</div>
              <div class="footer-menu">
                <a href="#" class="footer-menu-href">Travel</a>
                <a href="#" class="footer-menu-href">Works</a>
                <a href="#" class="footer-menu-href">About Us</a>
                <a href="#" class="footer-menu-href">Contacts</a>
              </div>
              <form class="footer-forms"> 
                <input class="footer-input"  type="email" placeholder="Email" />
                <button class="footer-button" type="button">SENT</button>
              </form>
            </div>
            <div class="footer-divider"></div>
            <div class="footer-submenu-social">
              <div class="footer-submenu">
                <a href="#" class="footer-submenu-href">Terms</a>
                <a href="#" class="footer-submenu-href">Promo</a>
                <a href="#" class="footer-submenu-href">Download</a>
                <a href="#" class="footer-submenu-href">News</a>
              </div>
              <div class="footer-social">
                <img src="images/twitter.svg" alt="twitter-icon" />
                <img src="images/linkedin.svg" alt="linkedin-icon" />
                <img src="images/google.svg" alt="google-icon" />
                <img src="images/facebook.svg" alt="facebook-icon" />
              </div>
            </div>
            </div>
          </footer>
          <div class="container-toggle" id="container-toggle">
            <div class="exit-menu" id="exit-menu" onClick={removeClass}>X</div>
            <div class="container-menu">
              <a href="#" class="menu-href">HOME</a>
              <a href="#" class="menu-href">ABOUT</a>
              <a href="#" class="menu-href">CONTACT</a>
            </div>
          </div>
      </body>
    )
}



function displayElementSearch() {
  var searchIcon = document.getElementById("search");
  var form = document.getElementById("form");
  var logo = document.getElementById("logo");
  if (window.matchMedia("(max-width: 960px)").matches) {
      form.classList.add("for-form-search");
      searchIcon.classList.add("for-icon-search");
      logo.classList.add("for-icon-search");
    } else {
      form.classList.add("for-form-search");
      searchIcon.classList.add("for-icon-search");
    }
}

function removeElementSearch() {
  var searchIcon = document.getElementById("search");
  var form = document.getElementById("form");
  var logo = document.getElementById("logo");
  form.classList.remove("for-form-search");
  searchIcon.classList.remove("for-icon-search");
  logo.classList.remove("for-icon-search");
}

function addClass() {
  var menu = document.getElementById("menu-toggle");
  var containerToggle = document.getElementById("container-toggle");
  containerToggle.classList.add("open-menu");
  menu.classList.add("visibility-icon-menu");
}

function removeClass() {
  var menu = document.getElementById("menu-toggle");
  var containerToggle = document.getElementById("container-toggle");
  containerToggle.classList.remove("open-menu");
  menu.classList.remove("visibility-icon-menu");
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
  frameVideo.item(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

function playVideo() {
  var frameVideo = document.getElementsByClassName("iframe-video");
  frameVideo.item(0).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

export default App