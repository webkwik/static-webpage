import React, { Component } from "react";
import "./WorksPlaceholder.css";
import placeholderWork from "./placeholder-our-works.png";

class WorksPlaceholder extends Component {
  state = {
    img: undefined
  };
  getImg = async () => {
    const url = await fetch(
      "http://5cb6f62aa3763800149fd07a.mockapi.io/api/works/" + this.props.id
    );
    const data = await url.json();
    console.log(data);
    this.setState({
      img: data.avatar
    });
  };

  componentDidMount() {
    this.getImg();
  }

  render() {
    return (
      <React.Fragment>
        <img
          src={this.state.img}
          className="our-works-placeholder"
          alt="our-works-placeholder"
        />
      </React.Fragment>
    );
  }
}

export default WorksPlaceholder;
