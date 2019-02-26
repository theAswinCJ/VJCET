import React, { Component } from "react";
import "./AnchorLink.css";

class AnchorLink extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="AnchorLink" id={instanceID}>
        <a>{title}</a>
      </div>
    );
  }
}

export default AnchorLink;
