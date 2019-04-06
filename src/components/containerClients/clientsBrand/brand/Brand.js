import React, { Component } from "react";
import "./Brand.css";

class Brand extends Component {
  render() {
    return (
      <img src={this.props.img} className="clients-brand" alt="clients-brand" />
    );
  }
}

export default Brand;
