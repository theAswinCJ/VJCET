import React, { Component } from "react";
import "./ResourceList.css";
import ImageOne from "../../Components/Images/ImageOne";
import HeadingFour from "../../Components/Texts/HeadingFour";
import ButtonOne from "../../Components/Buttons/ButtonOne";

class ResourceList extends Component {
  ResourceListTitle = {
    instanceID: this.props.data.instanceID + "Title",
    title: this.props.data.title
  };

  ResourceIcon = {
    instanceID: this.props.data.instanceID + "Icon",
    image: this.props.data.icon,
    width: "56px"
  };

  ButtonOne = {
    instanceID: this.props.data.instanceID + "Button"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="ResourceList" id={instanceID}>
        <ImageOne data={this.ResourceIcon} />
        <HeadingFour data={this.ResourceListTitle} />
        <ButtonOne data={this.ButtonOne} />
      </div>
    );
  }
}

export default ResourceList;
