import React, { Component } from "react";
import "./Logo.css";
import Media from "react-media";
import classNames from "classnames";

class Logo extends Component {
  render() {
    const logoClass = classNames({
      logo: true,
      "for-icon-search": !this.props.isActive
    });
    return (
      <Media query="(max-width: 960px)">
        {matches =>
          matches ? (
            <div className={logoClass} id="logo">
              Gravity
            </div>
          ) : (
            <div className="logo" id="logo">
              Gravity
            </div>
          )
        }
      </Media>
    );
  }
}

export default Logo;
