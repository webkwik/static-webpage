import React, { Component } from "react";
import "./ServicesMenuItems.css";
import MenuItem from "./menuItem/MenuItem";

class ServicesMenuItems extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="services-menu-items">
          <MenuItem>Multimedia</MenuItem>
          <MenuItem>Interactive design</MenuItem>
          <MenuItem>Packaging</MenuItem>
          <MenuItem>Branding</MenuItem>
        </ul>
        <ul className="services-menu-items">
          <MenuItem>Creative Strategy</MenuItem>
          <MenuItem>UI/UX</MenuItem>
          <MenuItem>Coding</MenuItem>
        </ul>
      </React.Fragment>
    );
  }
}

export default ServicesMenuItems;
