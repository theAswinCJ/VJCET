import React, { Component } from "react";
import "./VerticalLine.css";

class VerticalLine extends Component {
  render() {
    const { instanceID } = this.props.data;
    return <div className="VerticalLine" id={instanceID} />;
  }
}
export default VerticalLine;
