import React, { Component } from "react";
import "./ResourcesSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import VerticalLine from "../Components/Lines/VerticalLine";
import ResourceList from "./LocalContainers/ResourceList";

class ResourcesSection extends Component {
  ResourcesSectionTitle = {
    instanceID: "ResourcesSectionTitle",
    title: "Resources Available"
  };

  ResourceListOne = {
    instanceID: "ResourceListOne",
    icon: "regulationsIcon.svg",
    title: "AICTE Documents"
  };

  ResourceListTwo = {
    instanceID: "ResourceListTwo",
    icon: "manualIcon.svg",
    title: "Rules & Regulations"
  };

  ResourceListThree = {
    instanceID: "ResourceListThree",
    icon: "documentsIcon.svg",
    title: "Staff Manuals"
  };

  ResourceListFour = {
    instanceID: "ResourceListFour",
    icon: "financeIcon.svg",
    title: "Academic Schema"
  };

  ResourceListFive = {
    instanceID: "ResourceListFive",
    icon: "guidelinesIcon.svg",
    title: "IQAC"
  };

  ResourceListSix = {
    instanceID: "ResourceListSix",
    icon: "studentsIcon.svg",
    title: "Audited Financial Statements"
  };

  ResourceVerticalLineOne = {
    instanceID: "ResourceVerticalLineOne"
  };

  ResourceVerticalLineTwo = {
    instanceID: "ResourceVerticalLineTwo"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="ResourcesSection" id={instanceID}>
        <HeadingOne data={this.ResourcesSectionTitle} />
        <ResourceList data={this.ResourceListOne} />
        <ResourceList data={this.ResourceListTwo} />
        <ResourceList data={this.ResourceListThree} />
        <ResourceList data={this.ResourceListFour} />
        <ResourceList data={this.ResourceListFive} />
        <ResourceList data={this.ResourceListSix} />
        <VerticalLine data={this.ResourceVerticalLineOne} />
        <VerticalLine data={this.ResourceVerticalLineTwo} />
      </div>
    );
  }
}

export default ResourcesSection;
