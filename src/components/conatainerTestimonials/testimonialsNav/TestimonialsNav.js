import React, { Component } from "react";
import "./TestimonialsNav.css";
import NavLeft from "../../services/siemaSlider/navLeft/NavLeft";
import NavRight from "../../services/siemaSlider/navRight/NavRight";

class TestimonialsNav extends Component {
  render() {
    return (
      <div className="testimonials-navigation">
        <NavLeft />
        <NavRight />
      </div>
    );
  }
}

export default TestimonialsNav;
