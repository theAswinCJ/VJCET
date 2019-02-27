import React, { Component } from "react";
import "./Header.css";
import "../Images/ImageOne";
import ImageOne from "../Images/ImageOne";
import Line from "../Lines/Line";
import HeadingFive from "../Texts/HeadingFive";

class Header extends Component {
  VJCLogo = {
    instanceID: "HeaderVJCLogo",
    image: "VJCLogo.png",
    width: "180px"
  };

  Hamburger = {
    instanceID: "HeaderHamburger",
    image: "hamburger.svg",
    width: "20px"
  };

  NBALogo = {
    instanceID: "HeaderNBALogo",
    image: "nba.png",
    width: "66px"
  };

  HeaderLineOne = {
    instanceID: "HeaderLineOne"
  };

  HeaderLineTwo = {
    instanceID: "HeaderLineTwo"
  };

  HeaderVJCCode = {
    instanceID: "HeaderVJCCode",
    title: "College Code : VJC"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="Header" id={instanceID}>
        <ImageOne data={this.VJCLogo} />
        <ImageOne data={this.Hamburger} />
        <ImageOne data={this.NBALogo} />
        <Line data={this.HeaderLineOne} />
        <Line data={this.HeaderLineTwo} />
        <HeadingFive data={this.HeaderVJCCode} />
      </div>
    );
  }
}

export default Header;
