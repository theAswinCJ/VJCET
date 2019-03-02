import React, { Component } from "react";
import "./MenuOverlay.css";
class MenuOverlay extends Component {
  render() {
    return (
      <div
        className="MenuOverlay"
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px"
        }}
      >
        <p>whatever data</p>

        <p
          onClick={e => {
            this.props.closeMenuFunction();
          }}
        >
          Close
        </p>
      </div>
    );
  }
}
export default MenuOverlay;
