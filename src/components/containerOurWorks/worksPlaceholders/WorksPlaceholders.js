import React, { Component } from "react";
import "./WorksPlaceholders.css";
import WorksPlaceholder from "./worksPlaceholder/WorksPlaceholder";

class WorksPlaceholders extends Component {
  state = {
    list: undefined
  };

  getImg = () => {
    fetch(process.env.REACT_APP_API_WORKS)
      .then(response => response.json())
      .then(data => this.setState({ list: data }))
      .catch(error => console.error(error));
  };

  componentDidMount() {
    this.getImg();
  }
  render() {
    let listComponents;
    const listResp = this.state.list;
    if (listResp !== undefined) {
      listComponents = listResp.map(item => (
        <WorksPlaceholder id={item.id} img={item.avatar} name={item.name} />
      ));
    }
    return <div className="our-works-placeholders">{listComponents}</div>;
  }
}

export default WorksPlaceholders;
