import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ContainerClients from "../../components/containerClients/ContainerClients";
import FooterSocial from "../../components/containerFooter/submenuSocial/footerSocial/FooterSocial";
import SliderTitle from "../../components/containerSlider/sliderItem1/sliderTitleText/sliderTitle/SliderTitle";
import BlueButton from "../../components/containerSlider/sliderItem1/blueButton/BlueButton";

class Id extends Component {
  state = {
    name: undefined,
    img: undefined,
    desc: undefined
  };
  getData = async () => {
    const url = await fetch(
      "http://5cb6f62aa3763800149fd07a.mockapi.io/api/works/" +
        this.props.match.params.id
    );
    const data = await url.json();
    this.setState({
      name: data.name,
      img: data.avatar,
      desc: data.description
    });
  };

  componentDidMount() {
    this.getData();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div className="about-title-social">
          <SliderTitle>{this.state.desc}</SliderTitle>
          <FooterSocial forAbout="true" />
        </div>
        <div className="about-img-text">
          <img
            src={this.state.img}
            className="placeholder-about-img"
            alt="placeholder"
          />
          <div className="about-text">
            As we approached the palace I could see through the great windows of
            the first floor into the brilliantly illuminated audience chamber of
            Than Kosis. The immense hall was crowded with nobles and their
            women, as though some important function was in progress.
          </div>
        </div>
        <div className="about-text-button">
          <div className="about-text text">
            {this.state.name} {this.state.desc}
          </div>
          <BlueButton changeColor="true" text="explore" />
        </div>
        <ContainerClients />
      </React.Fragment>
    );
  }
}

export default Id;
