import React, { Component } from "react";
import "./ButtonOne.css";

class ButtonOne extends Component {
  render() {
    const { instanceID, button, onclick } = this.props.data;

    return (
      <div className="ButtonOne" id={instanceID}>
        <a href={"../../Assets/" + button} download="file">
          <img src={require("../../Assets/" + button)} width="200px" />
        </a>
      </div>
    );
  }
}

export default ButtonOne;
