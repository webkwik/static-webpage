import React, { Component } from "react";
import "./LogoMenuForm.css";
import FooterMenuHref from "./footerMenuHref/FooterMenuHref";
import FooterForms from "./footerForms/FooterForms";

class LogoMenuForm extends Component {
  render() {
    return (
      <div className="footer-logo-menu-form">
        <div className="footer-logo">Gravity</div>
        <div className="footer-menu">
          <FooterMenuHref>Travel</FooterMenuHref>
          <FooterMenuHref>Works</FooterMenuHref>
          <FooterMenuHref>About Us</FooterMenuHref>
          <FooterMenuHref>Contacts</FooterMenuHref>
        </div>
        <FooterForms />
      </div>
    );
  }
}

export default LogoMenuForm;
