import React, { Component } from "react";
import "./CarouselFour.css";
import ImageOne from "../Images/ImageOne";
import HeadingTwo from "../Texts/HeadingTwo";
import HeadingFive from "../Texts/HeadingFive";

class CarouselFour extends Component {
  CarouselTitle = {
    instanceID: "CarouselTitle",
    title: "Upcoming Events"
  };

  EventOneTitle = {
    instanceID: "EventOneTitle",
    title: "Arts Festival : Drishya 2019"
  };

  EventOneImage = {
    instanceID: "EventOneImage",
    image: "stock3.png",
    width: "202px"
  };

  EventTwoTitle = {
    instanceID: "EventTwoTitle",
    title: "Sports 2019"
  };

  EventTwoImage = {
    instanceID: "EventTwoImage",
    image: "stock3.png",
    width: "202px"
  };

  EventThreeTitle = {
    instanceID: "EventThreeTitle",
    title: "Tech Fest : Bodhi 2019"
  };

  EventThreeImage = {
    instanceID: "EventThreeImage",
    image: "stock3.png",
    width: "202px"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselFour" id={instanceID}>
        <HeadingTwo data={this.CarouselTitle} />
        <div class="CarouselFourSlider">
          <div class="CarouselFourSlide" id={instanceID + "SlideOne"}>
            <ImageOne data={this.EventOneImage} />
            <HeadingFive data={this.EventOneTitle} />
          </div>
          <div class="CarouselFourSlide" id={instanceID + "SlideTwo"}>
            <ImageOne data={this.EventTwoImage} />
            <HeadingFive data={this.EventTwoTitle} />
          </div>
          <div class="CarouselFourSlide" id={instanceID + "SlideThree"}>
            <ImageOne data={this.EventThreeImage} />
            <HeadingFive data={this.EventThreeTitle} />
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselFour;
