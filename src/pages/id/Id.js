import React, { Component } from "react";
import ContainerClients from "../../components/containerClients/ContainerClients";
import FooterSocial from "../../components/containerFooter/submenuSocial/footerSocial/FooterSocial";
import SliderTitle from "../../components/containerSlider/sliderItem1/sliderTitleText/sliderTitle/SliderTitle";
import BlueButton from "../../components/containerSlider/sliderItem1/blueButton/BlueButton";
import ScrollToTopOnMount from "../../components/scrollToTopOnMount/ScrollToTopOnMount";
import Loader from "../../components/loader/Loader";
import Img from "react-image";

class Id extends Component {
  state = {
    name: undefined,
    img: undefined,
    desc: undefined,
    loading: false
  };
  getData = () => {
    fetch(
      "https://5cb6f62aa3763800149fd07a.mockapi.io/api/works/" +
        this.props.match.params.id
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          name: data.name,
          img: data.avatar,
          desc: data.description,
          loading: false
        })
      )
      .catch(error => console.error(error));
  };

  componentDidMount() {
    this.state.loading = true;
    console.log("TRUE " + this.state.loading);
    this.getData();
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    } else {
      return (
        <React.Fragment>
          <ScrollToTopOnMount />
          <div className="about-title-social">
            <SliderTitle>{this.state.desc}</SliderTitle>
            <FooterSocial forAbout="true" />
          </div>

          <div className="about-img-text">
            <Img
              src={this.state.img}
              className="placeholder-about-img"
              alt="placeholder"
              loader={<Loader />}
            />

            <div className="about-text">
              As we approached the palace I could see through the great windows
              of the first floor into the brilliantly illuminated audience
              chamber of Than Kosis. The immense hall was crowded with nobles
              and their women, as though some important function was in
              progress.
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
}

export default Id;
