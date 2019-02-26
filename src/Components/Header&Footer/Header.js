import React, { Component } from "react";
import "./Header.css";
import "../Images/ImageOne";
import ImageOne from "../Images/ImageOne";
import Line from "../Lines/Line";
import AnchorLink from "../Texts/AnchorLink";

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
    return (
      <div className="Header">
        <ImageOne data={this.VJCLogo} />
        <ImageOne data={this.Hamburger} />
        <ImageOne data={this.NBALogo} />
        <Line data={this.HeaderLineOne} />
        <Line data={this.HeaderLineTwo} />
        <AnchorLink data={this.HeaderVJCCode} />
      </div>
    );
  }
}

export default Header;
