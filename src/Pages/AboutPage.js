import React, { Component } from "react";
import "./AboutPage.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

import AboutBannerSection from "../AboutPageContainers/AboutBannerSection";

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

  render() {
    return (
      <div className="AboutPage">
        <Header data={this.AboutPageHeader} openMenuFunction={this.openMenu} />
        <AboutBannerSection data={this.AboutBannerSection} />
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
