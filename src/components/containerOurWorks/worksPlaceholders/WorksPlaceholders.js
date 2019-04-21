import React, { Component } from "react";
import "./WorksPlaceholders.css";
import WorksPlaceholder from "./worksPlaceholder/WorksPlaceholder";

class WorksPlaceholders extends Component {
  state = {
    list: undefined
  };
  getImg = async () => {
    const url = await fetch(
      "http://5cb6f62aa3763800149fd07a.mockapi.io/api/works"
    );
    const data = await url.json();
    this.setState({
      list: data
    });
  };

  componentDidMount() {
    this.getImg();
  }
  render() {
    let listComponents;
    const listResp = this.state.list;
    try {
      listComponents = listResp.map(item => (
        <WorksPlaceholder id={item.id} img={item.avatar} name={item.name} />
      ));
    } catch (error) {
      console.log(error);
    }
    return <div className="our-works-placeholders">{listComponents}</div>;
  }
}

export default WorksPlaceholders;
