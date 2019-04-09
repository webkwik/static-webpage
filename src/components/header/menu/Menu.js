import React, { Component } from "react";
import "./Menu.css";
import MenuIcon from "./MenuIcon.svg";
import classNames from "classnames";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isActive: true
    };
  }

  toggleMenu = () => {
    this.setState({
      isActive: !this.state.isActive
    });
    console.log("menu " + this.state.isActive);
  };
  render() {
    const menuClass = classNames({
      menu: true,
      "visibility-icon-menu": !this.state.isActive
    });
    const toggleClass = classNames({
      "container-toggle": true,
      "open-menu": !this.state.isActive
    });

    return (
      <React.Fragment>
        <div className={menuClass} id="menu-toggle">
          <img src={MenuIcon} alt="menu-icon" onClick={this.toggleMenu} />
        </div>
        <div className={toggleClass} id="container-toggle">
          <div className="exit-menu" id="exit-menu" onClick={this.toggleMenu}>
            X
          </div>
          <div className="container-menu">
            <Link to="/" className="menu-href">
              HOME
            </Link>
            <Link to="/about" className="menu-href">
              ABOUT
            </Link>
            <Link to="/contact" className="menu-href">
              CONTACT
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
