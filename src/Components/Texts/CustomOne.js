import React, { Component } from "react";
import "./CustomOne.css";

class CustomOne extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="CustomOne" id={instanceID}>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default CustomOne;
