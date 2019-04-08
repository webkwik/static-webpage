import React, { Component } from "react";
import "./ClientsBrand.css";
import imgXiaomi from "./xiaomi.svg";
import imgTinder from "./tinder.svg";
import imgApple from "./apple.svg";
import imgNike from "./nike.svg";
import imgAmd from "./amd.svg";
import Brand from "./brand/Brand";

class ClientsBrand extends Component {
  render() {
    return (
      <div className="clients-brands">
        <Brand img={imgXiaomi} />
        <Brand img={imgTinder} />
        <Brand img={imgApple} />
        <Brand img={imgNike} />
        <Brand img={imgAmd} />
      </div>
    );
  }
}

export default ClientsBrand;
