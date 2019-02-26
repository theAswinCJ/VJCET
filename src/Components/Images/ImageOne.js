import React, { Component } from "react";
import "./ImageOne.css";

class ImageOne extends Component {
  render() {
    const { instanceID, image, width } = this.props.data;

    return (
      <div className="ImageOne" id={instanceID}>
        <img src={require("../../Assets/" + image)} width={width} />
      </div>
    );
  }
}

export default ImageOne;
