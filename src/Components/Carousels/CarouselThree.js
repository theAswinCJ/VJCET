import React, { Component } from "react";
import "./CarouselThree.css";
import HeadingTwo from "../Texts/HeadingTwo";
import HeadingFour from "../Texts/HeadingFour";
import HeadingFive from "../Texts/HeadingFive";
import ImageOne from "../Images/ImageOne";

class CarouselThree extends Component {
  News = {
    instanceID: "CarouselThreeNews",
    title: "News"
  };

  Previous = {
    instanceID: "CarouselThreePreviousArrow",
    image: "CarouselThreePrevious.svg",
    width: "30px"
  };

  Next = {
    instanceID: "CarouselThreeNextArrow",
    image: "CarouselThreeNext.svg",
    width: "30px"
  };

  Read = {
    instanceID: "Read",
    title: "Read"
  };

  SlideOneCategory = {
    instanceID: "SlideOneCategory",
    title: "Exams"
  };

  SlideOneTitle = {
    instanceID: "SlideOneTitle",
    title: "Schedule For Internal Redo Of Examinations"
  };

  SlideOneImage = {
    instanceID: "CarouselThreeSlideOneImage",
    image: "stock1.png",
    width: "210px"
  };

  SlideTwoCategory = {
    instanceID: "SlideOneCategory",
    title: "Placements"
  };

  SlideTwoTitle = {
    instanceID: "SlideOneTitle",
    title: "Placement Details for 2019"
  };

  SlideTwoImage = {
    instanceID: "CarouselThreeSlideOneImage",
    image: "stock2.png",
    width: "210px"
  };

  SlideThreeCategory = {
    instanceID: "SlideOneCategory",
    title: "Activities"
  };

  SlideThreeTitle = {
    instanceID: "SlideOneTitle",
    title:
      "Congratulations to Mr.Sanil Cyriac Mathew, Mr.Abraham George, Ms. Mahima Harikrishnan…."
  };

  SlideThreeImage = {
    instanceID: "CarouselThreeSlideOneImage",
    image: "stock1.png",
    width: "0px"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselThree" id={instanceID}>
        <div class="CarouselThreeTop">
          <HeadingTwo data={this.News} />
          <ImageOne data={this.Previous} />
          <ImageOne data={this.Next} />
        </div>
        <div class="CarouselThreeSlider">
          <div class="CarouselThreeSlide" id={instanceID + "SlideOne"}>
            <HeadingFive data={this.SlideOneCategory} />
            <HeadingFour data={this.SlideOneTitle} />
            <HeadingFive data={this.Read} />
            <ImageOne data={this.SlideOneImage} />
          </div>
          <div class="CarouselThreeSlide" id={instanceID + "SlideTwo"}>
            <HeadingFive data={this.SlideTwoCategory} />
            <HeadingFour data={this.SlideTwoTitle} />
            <HeadingFive data={this.Read} />
            <ImageOne data={this.SlideTwoImage} />
          </div>
          <div class="CarouselThreeSlide" id={instanceID + "SlideThree"}>
            <HeadingFive data={this.SlideThreeCategory} />
            <HeadingFour data={this.SlideThreeTitle} />
            <HeadingFive data={this.Read} />
            <ImageOne data={this.SlideThreeImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselThree;
