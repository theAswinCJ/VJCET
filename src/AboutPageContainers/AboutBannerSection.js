import React, { Component } from "react";
import "./AboutBannerSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import ImageOne from "../Components/Images/ImageOne";
import HeadingFour from "../Components/Texts/HeadingFour";
import BodyOne from "../Components/Texts/BodyOne";

class AboutBannerSection extends Component {
  AboutBannerSectionTitle = {
    instanceID: "AboutBannerSectionTitle",
    title: "About VJCET"
  };

  AboutBannerSectionSubTitle = {
    instanceID: "AboutBannerSectionSubTitle",
    title:
      "A brief overview of Viswajyothi College having more than 18 years of heritage."
  };

  AboutBannerImage = {
    instanceID: "AboutBannerImage",
    image: "aboutBannerImage.jpg",
    width: "100%"
  };

  AboutBannerSectionBodyPara1 = {
    instanceID: "AboutBannerSectionBodyPara1",
    title:
      "Located in Vazhakulam one of the suburbs of Ernakulam.VJCET is on a sprawling 26 acres plot of land and is just on the side of State Highway No.8, about 5 Kms from Muvattupuzha en-route to Thodupuzha.Viswajyothi College of Engineering has established itself as a benchmark of excellence in technical higher education and research. "
  };

  AboutBannerSectionBodyPara2 = {
    instanceID: "AboutBannerSectionBodyPara2",
    title:
      "Founded in 2001, Viswajyothi is approved by the AICTE, with all B-Tech degrees accredited to NBA and affiliated to A.P.J. Abdul Kalam Technological University(KTU),Thiruvananthapuram.Over the years, the institute has created a niche for its innovative short-term courses through continuing education programmes.With the majestic beauty of the land on one side, and with hills and vast open spaces on others, the campus provides an ideal setting for learning."
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="AboutBannerSection" id={instanceID}>
        <HeadingOne data={this.AboutBannerSectionTitle} />
        <HeadingFour data={this.AboutBannerSectionSubTitle} />
        <ImageOne data={this.AboutBannerImage} />
        <BodyOne data={this.AboutBannerSectionBodyPara1} />
        <BodyOne data={this.AboutBannerSectionBodyPara2} />
      </div>
    );
  }
}

export default AboutBannerSection;
