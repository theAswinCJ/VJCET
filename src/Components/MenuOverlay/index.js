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
          bottom: "0px",
          height: "100vh",
          backgroundColor: "#fff",
          ...this.props.style,
          zIndex: 9999
        }}
      >
        {this.props.children}
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
