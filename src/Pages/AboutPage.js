import React, { Component } from "react";
import "./AboutPage.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import AboutBannerSection from "../AboutPageContainers/AboutBannerSection";
import VisionSection from "../HomePageContainers/VisionSection";
import ResourcesSection from "../AboutPageContainers/ResourcesSection";

class AboutPage extends Component {
  state = { showMenu: false };

  openMenu = () => {
    console.log("opening Menu");
    this.setState({ showMenu: true });
  };
  closeMenu = () => {
    this.setState({ showMenu: false });
  };

  AboutPageHeader = {
    instanceID: "AboutPageHeader"
  };

  AboutPageFooter = {
    instanceID: "AboutPageFooter"
  };

  AboutBannerSection = {
    instanceID: "AboutBannerSection"
  };

  AboutPageVisionSection = {
    instanceID: "AboutPageVisionSection"
  };

  AboutPageResourcesSection = {
    instanceID: "AboutPageResourcesSection"
  };

  render() {
    return (
      <div className="AboutPage">
        <Header data={this.AboutPageHeader} openMenuFunction={this.openMenu} />
        <AboutBannerSection data={this.AboutBannerSection} />
        <VisionSection data={this.AboutPageVisionSection} />
        <ResourcesSection data={this.AboutPageResourcesSection} />
        <Footer data={this.AboutPageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AboutPage;
