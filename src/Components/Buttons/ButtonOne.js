import React, { Component } from "react";
import "./ButtonOne.css";

class ButtonOne extends Component {
  render() {
    const { instanceID, buttonText, onclick } = this.props.data;

    return (
      <div className="ButtonOne" id={instanceID}>
        <div className="ButtonOneContainer">
          <a href={onclick} download="">
            {buttonText}
          </a>
        </div>
      </div>
    );
  }
}

export default ButtonOne;
