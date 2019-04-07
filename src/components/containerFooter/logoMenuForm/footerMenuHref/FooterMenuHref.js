import React, { Component } from "react";
import "./FooterMenuHref.css";

class FooterMenuHref extends Component {
  render() {
    return (
      <a href="#" className="footer-menu-href">
        {this.props.children}
      </a>
    );
  }
}

export default FooterMenuHref;
