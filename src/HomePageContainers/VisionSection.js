import React, { Component } from "react";
import "./VisionSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import HeadingThree from "../Components/Texts/HeadingThree";
import BodyOne from "../Components/Texts/BodyOne";

class VisionSection extends Component {
  VisionSectionTitle = {
    instanceID: "VisionSectionTitle",
    title: "Vision"
  };

  VisionSectionDescription = {
    instanceID: "VisionSectionDescription",
    title:
      '"Moulding Engineers par Excellence with Integrity, Fairness and Human Values"'
  };

  VisionSectionBody = {
    instanceID: "VisionSectionBody",
    title:
      "Vision of Viswajyothi College of Engineering and Technology is to mould Engineers for tomorrow for the welfare of mankind and society. We aim to give quality education for students with value added thoughts. Our academic motto includes quality education, Ethical Values and Spiritual deeds and conducts of all in Viswajyothi Family."
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="VisionSection" id={instanceID}>
        <HeadingOne data={this.VisionSectionTitle} />
        <HeadingThree data={this.VisionSectionDescription} />
        <BodyOne data={this.VisionSectionBody} />
      </div>
    );
  }
}

export default VisionSection;
