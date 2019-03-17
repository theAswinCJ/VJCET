import React, { Component } from "react";
import "./ContactPage.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

class ContactPage extends Component {
  state = { showMenu: false };

  openMenu = () => {
    console.log("opening Menu");
    this.setState({ showMenu: true });
  };
  closeMenu = () => {
    this.setState({ showMenu: false });
  };

  ContactPageHeader = {
    instanceID: "ContactPageHeader"
  };

  ContactPageFooter = {
    instanceID: "ContactPageFooter"
  };

  render() {
    return (
      <div className="ContactPage">
        <Header
          data={this.ContactPageHeader}
          openMenuFunction={this.openMenu}
        />
        <Footer data={this.ContactPageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ContactPage;
