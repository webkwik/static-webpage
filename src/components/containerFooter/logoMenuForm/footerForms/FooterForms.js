import React, { Component } from "react";
import "./FooterForms.css";

class FooterForms extends Component {
  render() {
    return (
      <form className="footer-forms">
        <input className="footer-input" type="email" placeholder="Email" />
        <button className="footer-button" type="button">
          SENT
        </button>
      </form>
    );
  }
}

export default FooterForms;
