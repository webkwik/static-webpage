import React, { Component } from "react";
import "./SubmenuSocial.css";
import FooterSubmenuHref from "./footerSubmenuHref/FooterSubmenuHref";
import FooterSocial from "./footerSocial/FooterSocial";

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
        <FooterSocial />
      </div>
    );
  }
}

export default SubmenuSocial;
