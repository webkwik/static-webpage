import React, { Component } from "react";
import "./FooterSubmenuHref.css";

class FooterSubmenuHref extends Component {
  render() {
    return (
      <a href="#" className="footer-submenu-href">
        {this.props.children}
      </a>
    );
  }
}

export default FooterSubmenuHref;
