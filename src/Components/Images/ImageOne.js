import React, { Component } from "react";
import "./ImageOne.css";

class ImageOne extends Component {
  render() {
    const { instanceID, image, width } = this.props.data;

    return (
      <div
        className="ImageOne"
        id={instanceID}
        style={{ ...this.props.containerStyle }}
        onClick={
          this.props.onClickAction
            ? () => {
                this.props.onClickAction();
              }
            : () => {}
        }
      >
        <img
          src={require("../../Assets/" + image)}
          width={width}
          style={{ ...this.props.imgStyle }}
        />
      </div>
    );
  }
}

export default ImageOne;
