import React, { Component } from "react";
import "./ContainerTestimonials.css";
import ServicesLogo from "../services/servicesLogo/ServicesLogo";
import TestimonialsNav from "./testimonialsNav/TestimonialsNav";
import placeholderTestimanials from "./placeholder-testimonial.png";

class ContainerTestimonials extends Component {
  render() {
    return (
      <div className="container-testimonials">
        <div className="testimonials-logo-text-nav">
          <ServicesLogo logoMargin="true">— Testimonials</ServicesLogo>
          <div className="testimonials-text">
            "Professionals in their craft! All products were super great with
            strong attention to details, and overall vibe"
          </div>
          <div className="testimonials-name-position">
            <div className="testimonials-name">Polina Kuzina</div>
            <div className="testimonials-position">Manager at Craftwork</div>
          </div>
          <TestimonialsNav />
        </div>
        <img
          src={placeholderTestimanials}
          className="testimonial-placeholder"
          alt="testimonial-placeholder"
        />
      </div>
    );
  }
}

export default ContainerTestimonials;
