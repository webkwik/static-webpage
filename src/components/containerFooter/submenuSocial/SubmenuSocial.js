import React, { Component } from "react";
import "./SubmenuSocial.css";
import FooterSubmenuHref from "./footerSubmenuHref/FooterSubmenuHref";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import google from "./google.svg";
import facebook from "./facebook.svg";

class SubmenuSocial extends Component {
  render() {
    return (
      <div className="footer-submenu-social">
        <div className="footer-submenu">
          <FooterSubmenuHref>Terms</FooterSubmenuHref>
          <FooterSubmenuHref>Promo</FooterSubmenuHref>
          <FooterSubmenuHref>Download</FooterSubmenuHref>
          <FooterSubmenuHref>News</FooterSubmenuHref>
        </div>
        <div className="footer-social">
          <img src={twitter} alt="twitter-icon" />
          <img src={linkedin} alt="linkedin-icon" />
          <img src={google} alt="google-icon" />
          <img src={facebook} alt="facebook-icon" />
        </div>
      </div>
    );
  }
}

export default SubmenuSocial;
